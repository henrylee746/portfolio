import { ExpandableCard } from "@/components/ui/expandable-card";
import { GradientSlideButton } from "@/components/ui/gradient-slide-button";
import Link from "next/link";

export function TypographyBlockquote({ content }: { content: string }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{content}</blockquote>
  );
}

const TMDProject = () => {
  return (
    <ExpandableCard
      title="Team Metrics Dashboard"
      src="/tmd.png"
      description="React/TypeScript, Supabase, Node.js/Express, TailwindCSS, shad-cn/ui"
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
    >
      <Link href="https://github.com/henrylee746/team-metrics-dashboard">
        <GradientSlideButton className="rounded-3xl cursor-pointer">
          Link to GitHub Repo
        </GradientSlideButton>
      </Link>

      <h4>Inspiration</h4>
      <p>
        Welcome to the Team Metrics Dashboard project. This was a personal
        project originated from my internship at Ericsson Canada, tasked with
        designing a web application to scrape performance metrics of employees
        off of pushed code commits using the Gerrit REST API.
      </p>
      <h4> Extension of the project</h4>
      <p>
        Currently, this project does not contain any real information anymore,
        and everything is scraped off a Supabase PostgreSQL mock dataset. The
        dataset is relatively small, containing only two mock "employees" and
        two "commit subjects" - each employee/subject containing a set of
        commits worked on with code churn numbers.
      </p>
      <h4>What is Code Churn?</h4>
      <p>
        Code Churn (a.k.a. Code Rework) is the phenomenon where someone
        rewrites/deletes lines of code shortly after it was wrote. This is
        common in the SDLC (Software Development Life Cycle) and is a good
        metric to measure a developer's productivity/blockers, depending on the
        context.
      </p>
      <TypographyBlockquote
        content=" Low churn could mean slow productivity but also a lack of
        needing to refactor due to clear requirements, high-quality code, and
        passing of unit tests on the first trial. High code churn could mean
        high productivity if there is a large feature being worked
        on/function(s) constantly being optimized, but also an issue with
        testing/unclear user requirements if the same blocks of code are
        consistently being changed"
      />
    </ExpandableCard>
  );
};

const HealthAndFitnessProject = () => {
  return (
    <ExpandableCard
      title="Health and Fitness Management Tool"
      src="/fitness.png"
      description="Next.js/TypeScript, PrismaORM, shad-cn/ui, Tanstack Table"
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
    >
      <Link href="https://github.com/henrylee746/COMP3005FP">
        <GradientSlideButton className="rounded-3xl cursor-pointer">
          Link to GitHub Repo
        </GradientSlideButton>
      </Link>
      <h4>Built with Next.js, Prisma ORM, and PostgreSQL</h4>
      <p>
        This project implements a gym management system that supports members,
        trainers, bookings, sessions, and health metrics. It includes full CRUD
        functionality, relational queries, constraints, and a working UI built
        in Next.js.
      </p>
      <h4>🛠️ Tech Stack</h4>
      <ul className="list-disc">
        <li>Next.js </li>
        <li>Prisma ORM </li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>shadcn/ui</li>
        <li>Server Components + API Routes</li>
      </ul>
    </ExpandableCard>
  );
};

export function ProjectCards() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4
    "
    >
      <TMDProject />
      <HealthAndFitnessProject />
    </div>
  );
}
