import { Dock, DockIcon } from "@/components/ui/dock";

export default function TechStackDock() {
  const dockItems = [
    {
      src: "https://cdn.badtz-ui.com/images/components/dock/react-logo.webp",
      name: "React",
      href: "#react",
    },
    {
      src: "https://vectorseek.com/wp-content/uploads/2023/09/Nextjs-Logo-Vector.svg-.png",
      name: "Next.js",
      href: "https://nextjs.org/",
    },
    {
      src: "https://logospng.org/download/typescript/typescript-2048.png",
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      src: "https://cdn.badtz-ui.com/images/components/dock/tailwindcss-logo.webp",
      name: "TailwindCSS",
      href: "https://tailwindcss.com/",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png",
      name: "Node.js",
      href: "https://nodejs.org/en",
    },

    {
      src: "https://assets-global.website-files.com/60acbb950c4d66d0ab3e2007/60d8419eaf2b4343c395d290_graphql.png",
      name: "GraphQL",
      href: "https://graphql.org/",
    },
    {
      src: "https://www.liblogo.com/img-logo/po4159pad6-postgresql-logo-postgresql-icon-png-and-svg-vector-free-download.png",
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
  ];

  return (
    <Dock>
      {dockItems.map((item, index) => (
        <DockIcon
          key={index}
          src={item.src}
          name={item.name}
          href={item.href}
        />
      ))}
    </Dock>
  );
}
