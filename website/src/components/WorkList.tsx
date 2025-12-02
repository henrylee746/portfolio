import { Marquee } from "@/components/ui/marquee";

const items = [
  {
    name: "Kinaxis",
    title: "Frontend Developer Intern",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQHPxAih-jGbCA/company-logo_200_200/company-logo_200_200/0/1711628731307/kinaxis_logo?e=1766016000&v=beta&t=Zs32ENKRFpEHPCbj36A4YVz6XUD12wLjd7Y_WPepdao",
    body: `Incoming Jan. 2026`,
  },
  {
    name: "Ericsson Canada",
    title: "Software Developer Intern",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQENqPbk40CTBA/company-logo_200_200/B4EZYffZaEG0AI-/0/1744285047948/ericsson_logo?e=1766016000&v=beta&t=o1LokjDHQC_EWS_Dc-xE8CTaUIv0zjWf-F7pkshQlno",
    body: `
      	Henry has been excellent.
        When he presented the prototype of the team KPI tool,
        it was well constructed and accomplished what was asked of him
        during the first two terms. He took initiative and completed the task on time.
    `,
  },
  {
    name: "Carleton Blueprint",
    title: "Tech Lead Developer",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEJrZyBtVLe1Q/company-logo_200_200/company-logo_200_200/0/1630461528316/cublueprint_logo?e=1766016000&v=beta&t=2HOlmq30x0ufeHOqcECStV7foLhOZ4yVCrXdwEHyULw",
    body: `Leading a student team delivering a full stack web application in Next.js for the Jamaican Ottawa Community Association`,
  },
  {
    name: "House of Commons of Canada",
    title: "Student Developer Co-Op",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGeD4TZFZdV6A/company-logo_200_200/company-logo_200_200/0/1719255458028/houseofcommons__logo?e=1766016000&v=beta&t=uZ8RMcBfLwv1jZCoV4n8yOQgmUHkyQulfeEfPBIMv0w",
    body: `Overall, 
    Henry has demonstrated that he can be
    successful in this field. I would recommend him to other employers seeking a professional
    and capable software developer.`,
  },
];

function TestimonialCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="relative flex h-full w-[20rem] flex-col items-start justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
      <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        {item.body}
      </div>
      <div className="mt-auto flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            {item.name}
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkList() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="from-background absolute inset-y-0 left-0 z-10 w-30 bg-gradient-to-r to-transparent" />
      <div className="from-background absolute inset-y-0 right-0 z-10 w-30 bg-gradient-to-l to-transparent" />
      <Marquee className="py-2" direction="left">
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </Marquee>
      <Marquee className="py-2" direction="right">
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </Marquee>
    </div>
  );
}
