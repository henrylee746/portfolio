import { Marquee } from "@/components/ui/marquee";

const items = [
  {
    name: "Ericsson Canada",
    title: "Software Developer Intern",
    image: "/ericsson.jpg",
    body: `
      	Henry has been excellent.
        When he presented the prototype of the team KPI tool,
        it was well constructed and accomplished what was asked of him
        during the first two terms. He took initiative and completed the task on time.
    `,
  },
  {
    name: "incubator13",
    title: "Coding Workshop Leader Intern",
    image: "/incubator.jpg",
    body: `Henry had great engagement with incoming students, teaching programming fundamentals and digital literacy. Well done!`,
  },
  {
    name: "Carleton Blueprint",
    title: "Tech Lead Developer",
    image: "/cublueprint.jpg",
    body: `Henry is an excellent developer, what impresses me most is his initiative and communication skills. He does a great job at evaluating technologies and and leading his teams.`,
  },
  {
    name: "House of Commons of Canada",
    title: "Student Developer Co-Op",
    image: "/hoc.jpg",
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
