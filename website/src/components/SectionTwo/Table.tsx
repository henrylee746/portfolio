"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ColumnDef } from "@/components/kibo-ui/table";
import {
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHead,
  TableHeader,
  TableHeaderGroup,
  TableProvider,
  TableRow,
} from "@/components/kibo-ui/table";
import { ChevronRightIcon } from "lucide-react";

const items = [
  {
    name: "Kinaxis",
    title: "Frontend Developer Intern",
    image: "/kinaxis.jpg",
    body: `TypeScript, React, CSS, REST APIs`,
    startAt: "2026-01-13",
    endAt: "Present",
  },
  {
    name: "Carleton Blueprint",
    title: "Tech Lead Developer",
    image: "/cublueprint.jpg",
    body: `Next.js/TypeScript, Strapi, BetterAuth.js, GraphQL, GitHub Projects`,
    startAt: "2025-10-01",
    endAt: "Present",
  },
  {
    name: "House of Commons of Canada - MOP Team",
    title: "Student Developer Co-Op",
    image: "/hoc.jpg",
    body: ` 
   ServiceNow, Azure DevOps, HTML/CSS, JavaScript, Git, Agile`,
    startAt: "2025-09-15",
    endAt: "2025-12-20",
  },
  {
    name: "Ericsson Canada",
    title: "Software Developer Intern",
    image: "/ericsson.jpg",
    body: `
 React/JavaScript, Python, Node.js, Express, shadcn-ui/TailwindCSS   
    `,
    startAt: "2024-09-04",
    endAt: "2025-05-22",
  },
  {
    name: "House of Commons of Canada - Accreditation Team",
    title: "Student Developer Co-Op",
    image: "/hoc.jpg",
    body: `ServiceNow, Azure DevOps, HTML/CSS, JavaScript, Git, Agile`,
    startAt: "2024-01-09",
    endAt: "2024-04-27",
  },
  {
    name: "Carleton University",
    title: "Undergrad Teaching Assistant",
    image: "/carleton.jpg",
    body: ` 
   Calculus Concepts, Communication, Leadership`,
    startAt: "2023-09-05",
    endAt: "2023-12-16",
  },
  {
    name: "incubator13 - Coding Workshop Leader Intern",
    title: "Coding Workshop Leader Intern",
    image: "/incubator.jpg",
    body: `HTML, JavaScript, Python`,
    startAt: "2023-05-22",
    endAt: "2023-09-05",
  },
];

const companies = items.map((item, index) => ({
  id: index,
  name: item.name,
  image: item.image,
}));

const descriptions = items.map((item, index) => ({
  id: index,
  name: item.body,
}));

const exampleFeatures = items.map((item, index) => ({
  id: index,
  title: item.title,
  name: item.name,
  startAt: item.startAt,
  endAt: item.endAt,
  company: companies[index],
  description: descriptions[index],
}));

const WorkExpTable = () => {
  const columns: ColumnDef<(typeof exampleFeatures)[number]>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar className="size-6">
              <AvatarImage src={row.original.company.image} />
              <AvatarFallback>
                {row.original.company.name?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <span className="font-medium">{row.original.name}</span>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <span>{row.original.title}</span>

              <ChevronRightIcon size={12} />
              <span>{row.original.description.name}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "startAt",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Start At" />
      ),
      cell: ({ row }) => {
        const startAt = row.original.startAt;
        if (
          typeof startAt === "string" &&
          startAt !== "N/A" &&
          startAt !== "Present"
        ) {
          const date = new Date(startAt);
          if (!isNaN(date.getTime())) {
            return new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
            }).format(date);
          }
        }
        return startAt;
      },
    },
    {
      accessorKey: "endAt",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="End At" />
      ),
      cell: ({ row }) => {
        const endAt = row.original.endAt;
        if (
          typeof endAt === "string" &&
          endAt !== "N/A" &&
          endAt !== "Present"
        ) {
          const date = new Date(endAt);
          if (!isNaN(date.getTime())) {
            return new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
            }).format(date);
          }
        }
        return endAt;
      },
    },
  ];

  return (
    <TableProvider columns={columns} data={exampleFeatures}>
      <TableHeader>
        {({ headerGroup }) => (
          <TableHeaderGroup headerGroup={headerGroup} key={headerGroup.id}>
            {({ header }) => <TableHead header={header} key={header.id} />}
          </TableHeaderGroup>
        )}
      </TableHeader>
      <TableBody>
        {({ row }) => (
          <TableRow key={row.id} row={row}>
            {({ cell }) => <TableCell cell={cell} key={cell.id} />}
          </TableRow>
        )}
      </TableBody>
    </TableProvider>
  );
};

export default WorkExpTable;
