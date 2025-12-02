import { ExpandableCard } from "@/components/ui/expandable-card";
import { GradientSlideButton } from "@/components/ui/gradient-slide-button";
import Link from "next/link";
import tmdSrc from "./images/tmd.png";
import fitnessSrc from "./images/fitness.png";

export function TypographyBlockquote({ content }: { content: string }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{content}</blockquote>
  );
}

const TMDProject = () => {
  return (
    <ExpandableCard
      title="Team Metrics Dashboard"
      src="https://private-user-images.githubusercontent.com/96128004/497277966-63823c0b-96f7-439d-a4aa-2eeecd613f87.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ2NDgxMzAsIm5iZiI6MTc2NDY0NzgzMCwicGF0aCI6Ii85NjEyODAwNC80OTcyNzc5NjYtNjM4MjNjMGItOTZmNy00MzlkLWE0YWEtMmVlZWNkNjEzZjg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjAyVDAzNTcxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2MGE2ZTVhOTQ3ZjU1Y2E4NDkxYWFmNWNmNWI5MzkyZGU0ZDk0OGNhYjdhN2ZlZGRmZWRiNGRmOWRhNTkzMTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jCRNWH-HhRDtXgYbe_peNdrr3ip0wop9xKWS_DCET7g"
      description="React/TypeScript, Supabase, Node.js/Express"
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
      src="https://private-user-images.githubusercontent.com/96128004/521064745-0ca469ea-d24d-46ce-af0e-c030ed65da47.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ2MzY0MzgsIm5iZiI6MTc2NDYzNjEzOCwicGF0aCI6Ii85NjEyODAwNC81MjEwNjQ3NDUtMGNhNDY5ZWEtZDI0ZC00NmNlLWFmMGUtYzAzMGVkNjVkYTQ3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjAyVDAwNDIxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjMWY2OTNmOWFjOGJhMGJkMTdlMDEyYTNjYmQ0YjQwYmNiNDgzY2Q0NDg2MDQ3NzNiMDdjOWQ1NDM2MGQwNWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ehgilt6JUIPKEZa1A6TU3Za62dY7Kb69I9gqnkSMwB4"
      description="React/TypeScript, Next.js, PrismaORM"
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
        <li>Server Components + API Routes</li>
      </ul>
    </ExpandableCard>
  );
};

export function ProjectCards() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8
    "
    >
      <TMDProject />
      <HealthAndFitnessProject />
    </div>
  );
}
