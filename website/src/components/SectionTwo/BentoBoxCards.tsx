/*UI components and Icons*/
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FaBrain, FaPlaneDeparture } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

/*Components*/
import { WorldGlobe } from "./card-components/Globe";
import { IconCloudTechnologies } from "./card-components/Icons";
import { AnimatedList } from "../ui/animated-list";
import { AnimatedListDemo } from "./card-components/AnimantedList";

const features = [
  {
    Icon: FaBrain,
    name: "Eager to Learn",
    description:
      "Always open-minded and eager to learn about emerging technologies. Above are some of the tools I've used in the past/currently.",
    href: "/",
    cta: "Learn more",
    background: <IconCloudTechnologies />,
    className: "flex-1 ",
  },
  {
    Icon: IoMdCheckmarkCircle,
    name: "Exposure to various tools",
    description:
      "Through various internships, I became not just interested in React and Next.js, but the entire SDLC and full stack - from design to deployment",
    href: "/",
    cta: "Learn more",
    background: <AnimatedListDemo />,
    className: "flex-1 ",
  },
  {
    Icon: FaPlaneDeparture,
    name: "Avid Traveller",
    description:
      "Been to several countries, made memories with so many more. Above is a map of the various nationalities of people I've met while abroad.",
    href: "/",
    cta: "Learn more",
    background: <WorldGlobe />,
    className: "flex-1",
  },
];

const BentoBoxCards = () => {
  return (
    <BentoGrid className="flex flex-col md:flex-row p-8">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoBoxCards;
