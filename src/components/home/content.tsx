import { HomeExplanation } from "./explanation";
import { Explore } from "./explore";

export const HomeContent = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-center text-light-blue xl:max-w-[540px] xl:text-left">
        <HomeExplanation />
      </div>
      <Explore />
    </>
  );
};
