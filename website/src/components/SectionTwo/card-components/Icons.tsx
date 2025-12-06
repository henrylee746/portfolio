import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "supabase",
  "vercel",
  "tailwindcss",
  "git",
  "github",
  "apollographql",
  "shadcnui",
  "vite",
  "vitest",
  "strapi",
  "tanstack",
  "strapi",
  "zod",
];

export function IconCloudTechnologies() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
