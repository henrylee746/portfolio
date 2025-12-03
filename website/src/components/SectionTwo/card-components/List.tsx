"use client";

import { faker } from "@faker-js/faker";
import type { DragEndEvent } from "@/components/kibo-ui/list";
import {
  ListGroup,
  ListHeader,
  ListItem,
  ListItems,
  ListProvider,
} from "@/components/kibo-ui/list";
import { useState, useEffect, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

faker.seed(100);

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const statuses = [
  { id: faker.string.uuid(), name: "Planned", color: "#6B7280" },
  { id: faker.string.uuid(), name: "In Progress", color: "#F59E0B" },
  { id: faker.string.uuid(), name: "Done", color: "#10B981" },
];

const users = Array.from({ length: 1 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
  }));

const generateFeatures = (count: number) => {
  return Array.from({ length: count })
    .fill(null)
    .map(() => ({
      id: faker.string.uuid(),
      name: capitalize(faker.company.buzzPhrase()),
      startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
      endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
      status: faker.helpers.arrayElement(statuses),
      owner: faker.helpers.arrayElement(users),
    }));
};

const ProblemSolverList = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate 6 features once and keep them
  const [allFeatures, setAllFeatures] = useState(() => generateFeatures(8));

  // Determine how many features to show based on window width
  const visibleFeatureCount = useMemo(() => {
    if (!isMounted || windowWidth === 0) {
      // During SSR or initial render, show 4
      return 4;
    }
    // On client, show 6 if window is larger than 1280px, otherwise 4
    return windowWidth > 1280 ? (windowWidth > 1536 ? 8 : 6) : 4;
  }, [windowWidth, isMounted]);

  // Get the visible features (first N items)
  const features = useMemo(() => {
    return allFeatures.slice(0, visibleFeatureCount);
  }, [allFeatures, visibleFeatureCount]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const status = statuses.find((status) => status.name === over.id);

    if (!status) {
      return;
    }

    setAllFeatures(
      allFeatures.map((feature) => {
        if (feature.id === active.id) {
          return { ...feature, status };
        }

        return feature;
      })
    );
  };

  if (!isMounted) {
    return (
      <div className="flex size-full min-h-40 items-center justify-center rounded-md border bg-secondary">
        <div className="text-muted-foreground text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <ListProvider onDragEnd={handleDragEnd}>
      {statuses.map((status) => (
        <ListGroup id={status.name} key={status.name}>
          <ListHeader color={status.color} name={status.name} />
          <ListItems>
            {features
              .filter((feature) => feature.status.name === status.name)
              .map((feature, index) => (
                <ListItem
                  id={feature.id}
                  index={index}
                  key={feature.id}
                  name={feature.name}
                  parent={feature.status.name}
                >
                  <div
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: feature.status.color }}
                  />
                  <p className="m-0 flex-1 font-medium text-sm">
                    {feature.name}
                  </p>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>
                        {feature.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </ListItem>
              ))}
          </ListItems>
        </ListGroup>
      ))}
    </ListProvider>
  );
};

export default ProblemSolverList;
