"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

/*Icons*/
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  github: (props: IconProps) => (
    <FiGithub className="size-6 sm:size-7 xl:size-8" />
  ),
  resume: (props: IconProps) => (
    <IoDocumentText className="size-6 sm:size-7 xl:size-8" />
  ),
  linkedin: (props: IconProps) => (
    <FaLinkedinIn className="size-6 sm:size-7 xl:size-8" />
  ),
};

const DATA = [
  {
    icon: Icons.github,
    name: "GitHub",
    href: "https://github.com/henrylee746",
  },
  {
    icon: Icons.resume,
    name: "Resume",
    href: "https://icy-morning-122.linkyhost.com",
  },
  {
    icon: Icons.linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hlee750/",
  },
];

export default function SocialLinksDock() {
  return (
    <div className="flex items-center justify-center">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="h-[58px] sm:h-[60px] xl:h-[75px] gap-4 md:gap-6 px-4"
          disableMagnification={true}
        >
          {DATA.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon-lg" }),
                      "size-14 rounded-full"
                    )}
                  >
                    <item.icon className="size-12" />
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
