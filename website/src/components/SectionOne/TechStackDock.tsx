"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

/*Icons*/
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  react: (props: IconProps) => <FaReact {...props} fill="#61DAFB" />,
  nextjs: (props: IconProps) => <RiNextjsFill {...props} />,
  typescript: (props: IconProps) => <SiTypescript {...props} fill="#3178C6" />,
  tailwindcss: (props: IconProps) => (
    <RiTailwindCssFill {...props} fill="#06B6D4" />
  ),
  nodejs: (props: IconProps) => <FaNode {...props} fill="#5FA04E" />,
  graphql: (props: IconProps) => <GrGraphQl {...props} fill="#E10098" />,
  postgresql: (props: IconProps) => (
    <BiLogoPostgresql {...props} fill="#4169E1" />
  ),
};

const DATA = {
  frontend: [
    {
      icon: Icons.react,
      name: "React",
      href: "https://react.dev/",
    },
    {
      icon: Icons.nextjs,
      name: "Next.js",
      href: "https://nextjs.org/",
    },
    {
      icon: Icons.typescript,
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      icon: Icons.tailwindcss,
      name: "TailwindCSS",
      href: "https://tailwindcss.com/",
    },
  ],
  backend: [
    {
      icon: Icons.nodejs,
      name: "Node.js",
      href: "https://nodejs.org/en",
    },
    {
      icon: Icons.graphql,
      name: "GraphQL",
      href: "https://graphql.org/",
    },
    {
      icon: Icons.postgresql,
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
  ],
};

export default function TechStackDock() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.frontend.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {DATA.backend.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
