"use client";

import { ExpandableCard } from "@/components/ui/expandable-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function TypographyBlockquote({ content }: { content: string }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{content}</blockquote>
  );
}

const JOCAProject = ({ isDark }: { isDark: boolean }) => {
  return (
    <ExpandableCard
      title="Jamaican Ottawa Community Association Website"
      src={isDark ? "/jocaDark.png" : "/jocaLight.png"}
      description="Next.js, Strapi CMS, Stripe, GraphQL, TailwindCSS, Prisma ORM, GitHub Projects"
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
    >
      <Link href="https://github.com/Carleton-Blueprint/JOCA">
        <InteractiveHoverButton className="rounded-3xl cursor-pointer">
          Link to GitHub Repo
        </InteractiveHoverButton>
      </Link>

      <h4>The Project</h4>
      <p>
        A project for the Jamaican Ottawa Community Association assigned by the Carleton Blueprint team,
        impacting hundreds of members.
        Took on the responsibility of being the Lead Developer for the project, leading sprint meetings and code reviews.
        Collaborated with the team to design the website and implement the features.
      </p>
      <h4>🛠️ Tech Stack</h4>
      <ul className="list-disc">
        <li>Next.js </li>
        <li>Strapi CMS</li>
        <li>Stripe</li>
        <li>GraphQL</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Prisma ORM</li>
        <li>PostgreSQL</li>
        <li>BetterAuth (Authentication & Role-Based Access Control)</li>
      </ul>
      <h4>Highlights</h4>
      <ul className="list-disc">
        <li> - Led a student team delivering a production-grade full-stack web application in Next.js for the Jamaican Ottawa Association</li>
        <li> - Architected a decoupled authentication system using BetterAuth.js with database-backed sessions through SQL queries via Prisma, prioritizing instant session revocation and improved account security</li>
        <li> - Mentored 3+ developers through code reviews and weekly sprint planning, optimizing ticket completion and on-time MVP features</li>
        <li> - Established technical standards by authoring Architectural Decision Records (ADRs), ensuring team-wide alignment on frontend stack, CMS selection, and data persistence strategies</li>
      </ul>
    </ExpandableCard>
  );
};

const HealthAndFitnessProject = ({ isDark }: { isDark: boolean }) => {
  return (
    <ExpandableCard
      title="Health and Fitness Club Management System"
      src={isDark ? "/fitnessDark.png" : "/fitnessLight.png"}
      description="Next.js/TypeScript, TailwindCSS, Prisma ORM, PostgreSQL, BetterAuth, Google Cloud, Resend API"
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
    >
      <Link href="https://github.com/henrylee746/COMP3005FP">
        <InteractiveHoverButton className="rounded-3xl cursor-pointer">
          Link to GitHub Repo
        </InteractiveHoverButton>
      </Link>
      <h4>The Project</h4>
      <p>A modern, full-stack gym management system supporting members,
        trainers, bookings, sessions, and health metrics with authentication.</p>
      <h4>🛠️ Tech Stack</h4>
      <ul className="list-disc">
        <li>Next.js </li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Prisma ORM</li>
        <li>PostgreSQL</li>
        <li>BetterAuth (Authentication & Role-Based Access Control)</li>
        <li>Resend API (Email Verification)</li>
        <li>Google Cloud (OAuth Application for Google Authentication)</li>
      </ul>
      <h4>Features</h4>
      <ul className="list-disc">
        <li>🔐 Authentication - Secure signup/signin with Better Auth</li>
        <li>👤 User Roles - Member, Trainer, and Admin portals</li>
        <li>📊 Dashboard - Real-time metrics and session tracking</li>
        <li>📅 Booking System - Register for group classes and personal sessions</li>
        <li>💪 Health Tracking - Monitor weight and fitness goals over time</li>
        <li>🎨 Modern UI - Built with shadcn/ui and Tailwind CSS</li>
        <li>🌙 Dark Mode - Full theme support</li>
      </ul>
      <h4>Highlights</h4>
      <ul className="list-disc">
        <li> - Built a full-stack fitness management platform with role-based access control (RBAC), featuring member dashboards/admin portals</li>
        <li> - Architected a normalized PostgreSQL schema (12 entities) with composite indexes, cascade deletes, and a database view for
          optimized member metrics queries using Prisma ORM</li>
        <li> - Implemented Next.js Server Components for server-side data fetching and Server Actions for mutations, shifting database queries
          and form logic to the server to reduce client-side JavaScript</li>
      </ul>
    </ExpandableCard>
  );
};

export function ProjectCards() {
  const [mounted, isMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4
    "
    >
      <JOCAProject isDark={isDark} />
      <HealthAndFitnessProject isDark={isDark} />

    </div>
  );
}
