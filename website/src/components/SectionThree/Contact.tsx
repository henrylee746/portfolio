import { ContactTerminal } from "./Terminal";
import { BorderBeam } from "@/components/ui/border-beam";
import { FadeUpWord } from "@/components/ui/fade-up-word";
import { Meteors } from "@/components/ui/meteors";

const Contact = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm m-8">
        <BorderBeam lightColor="#008000" lightWidth={350} duration={8} />
        <div className="h-full w-screen p-8 md:px-8 lg:px-10 flex gap-4 justify-between items-center">
          <FadeUpWord
            as="h1"
            className="max-w-2xl md:text-5xl lg:text-6xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50
                "
            delay={0.1}
          >
            Thank You For Visiting
          </FadeUpWord>
        </div>
      </div>
      <div className="relative h-[400px] flex justify-center items-center w-full overflow-hidden rounded-lg">
        <Meteors />
        <ContactTerminal />
        <Meteors />
      </div>
    </>
  );
};

export default Contact;
