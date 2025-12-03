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

const items = [
  {
    name: "Kinaxis - Incoming Jan. 2026",
    title: "Frontend Developer Intern",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQHPxAih-jGbCA/company-logo_200_200/company-logo_200_200/0/1711628731307/kinaxis_logo?e=1766016000&v=beta&t=Zs32ENKRFpEHPCbj36A4YVz6XUD12wLjd7Y_WPepdao",
    body: `TypeScript, Unit/E2E Testing, CSS, REST APIs`,
    startAt: "2026-01-12",
    endAt: "N/A",
  },
  {
    name: "Carleton Blueprint",
    title: "Tech Lead Developer",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEJrZyBtVLe1Q/company-logo_200_200/company-logo_200_200/0/1630461528316/cublueprint_logo?e=1766016000&v=beta&t=2HOlmq30x0ufeHOqcECStV7foLhOZ4yVCrXdwEHyULw",
    body: `React/TypeScript, Next.js, Strapi, BetterAuth.js, GraphQL, GitHub Projects`,
    startAt: "2025-10-01",
    endAt: "Present",
  },
  {
    name: "House of Commons of Canada - Members of Parliament Onboarding Application",
    title: "Student Developer Co-Op",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGeD4TZFZdV6A/company-logo_200_200/company-logo_200_200/0/1719255458028/houseofcommons__logo?e=1766016000&v=beta&t=uZ8RMcBfLwv1jZCoV4n8yOQgmUHkyQulfeEfPBIMv0w",
    body: ` 
   ServiceNow, Azure DevOps, HTML/CSS, JavaScript, Git, Agile`,
    startAt: "2025-09-15",
    endAt: "Present",
  },
  {
    name: "Ericsson Canada",
    title: "Software Developer Intern",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQENqPbk40CTBA/company-logo_200_200/B4EZYffZaEG0AI-/0/1744285047948/ericsson_logo?e=1766016000&v=beta&t=o1LokjDHQC_EWS_Dc-xE8CTaUIv0zjWf-F7pkshQlno",
    body: `
 React/JavaScript, Python, Node.js, Express, shadcn-ui/TailwindCSS   
    `,
    startAt: "2024-09-03",
    endAt: "2025-05-21",
  },
  {
    name: "House of Commons of Canada - Accreditation Team",
    title: "Student Developer Co-Op",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGeD4TZFZdV6A/company-logo_200_200/company-logo_200_200/0/1719255458028/houseofcommons__logo?e=1766016000&v=beta&t=uZ8RMcBfLwv1jZCoV4n8yOQgmUHkyQulfeEfPBIMv0w",
    body: `ServiceNow, Azure DevOps, HTML/CSS, JavaScript, Git, Agile`,
    startAt: "2024-01-08",
    endAt: "2024-04-26",
  },
  {
    name: "Carleton University - Undergrad Teaching Assistant",
    title: "Student Developer Co-Op",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQHUpxkQqIkqfA/company-logo_200_200/company-logo_200_200/0/1664807688674/carleton_university_logo?e=1766620800&v=beta&t=rPiX7KguWjQtjEWa31xlzKcOUW_bTezCddS81Su6fJc",
    body: ` 
   Calculus Concepts, Communication, Leadership`,
    startAt: "2023-09-04",
    endAt: "2023-12-15",
  },
  {
    name: "incubator13 - Coding Workshop Leader Intern",
    title: "Coding Workshop Leader Intern",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQGTcrcVimjfHg/company-logo_200_200/company-logo_200_200/0/1630617128057?e=1766016000&v=beta&t=1cPmvrRtmKM1dfVkhNEnKOcdZb3HVyRfRohRbCXGneQ",
    body: `HTML, JavaScript, Python`,
    startAt: "2023-05-21",
    endAt: "2023-09-04",
  },
];

const users = items.map((item, index) => ({
  id: index,
  name: item.name,
  image: item.image,
}));

const exampleProducts = items.map((item, index) => ({
  id: index,
  name: item.body,
}));

const exampleFeatures = items.map((item, index) => ({
  id: index,
  name: item.name,
  startAt: item.startAt,
  endAt: item.endAt,
  owner: users[index],
  product: exampleProducts[index],
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
              <AvatarImage src={row.original.owner.image} />
              <AvatarFallback>
                {row.original.owner.name?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <span className="font-medium">{row.original.name}</span>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <span>{row.original.product.name}</span>
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
