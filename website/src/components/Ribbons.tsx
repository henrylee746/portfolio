import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";

const Ribbons = () => {
  return (
    <div className="relative flex h-[350px] w-screen items-center justify-center">
      <InfiniteRibbon rotation={5} className="absolute">
        Welcome to Henry's webpage!
      </InfiniteRibbon>
      <InfiniteRibbon reverse={true} rotation={-5}>
        Welcome to Henry's webpage!
      </InfiniteRibbon>
    </div>
  );
};

export default Ribbons;
