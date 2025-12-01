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
      src="https://private-user-images.githubusercontent.com/96128004/497277966-63823c0b-96f7-439d-a4aa-2eeecd613f87.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ2MjI0MTIsIm5iZiI6MTc2NDYyMjExMiwicGF0aCI6Ii85NjEyODAwNC80OTcyNzc5NjYtNjM4MjNjMGItOTZmNy00MzlkLWE0YWEtMmVlZWNkNjEzZjg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjAxVDIwNDgzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNkODcxMGQ0NTE0OTcxN2M3MDZiYWQzMzBmZWEwMDhjMTFmYjQ1MzI5ZDkyMmJlYjAzNjM3MzAxOTg1NjJlNTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.SNk1aIS5cjDrrVd3uAtGXjHReO1QQcLHE7gpYAlA1-k"
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
      src="https://static.vecteezy.com/system/resources/previews/020/296/202/original/dumbbell-line-icon-bodybuilding-fitness-icon-weight-black-sign-and-dumbbell-gym-fitness-and-sports-equipment-dumbbell-line-icon-set-linear-style-free-vector.jpg"
      description="React/TypeScript, Next.js, PrismaORM"
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
    >
      <Link href="https://github.com/henrylee746/COMP3005FP">
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

export function ProjectCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <TMDProject />
      <HealthAndFitnessProject />
    </div>
  );
}
