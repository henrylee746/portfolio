/*UI components and Icons*/
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FaBrain } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaPuzzlePiece } from "react-icons/fa";

/*Components*/
import { IconCloudTechnologies } from "./card-components/Icons";
import { ToolsList } from "./card-components/AnimatedList";
import ProblemSolverList from "./card-components/List";
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
      "Through various internships and studies, I became not just interested in webpages, but the entire SDLC and full stack - from design to deployment.",
    href: "/",
    cta: "Learn more",
    background: <ToolsList />,
    className: "flex-1 ",
  },
  {
    Icon: FaPuzzlePiece, // or FaLightbulb, FaCode
    name: "Problem Solver",
    description:
      "I enjoy breaking down complex challenges into manageable solutions, whether it's debugging a tricky bug or architecting a scalable system.",
    href: "/",
    cta: "Learn more",
    background: <ProblemSolverList />,
    className: "flex-1",
  },
];

const BentoBoxCards = () => {
  return (
    <BentoGrid className="flex flex-col lg:flex-row p-8">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoBoxCards;
