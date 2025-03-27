import { SearchBox } from "./SearchBox";
import Navigation from "./Navigation";
import { getText } from "@/utils/dictionary";

export function MainFlow({
  children,
}) {
  return <div className="flex flex-col justify-center items-center bg-primary w-full">
    {/* Navigation */}
    <Navigation />

    {children}

    <div className="fixed bottom-0 bg-primary lg:w-[790px] md:w-[720px] sm:w-[620px] px-2 w-full">
      <div className="flex flex-col items-center justify-center">
        <SearchBox width="full" />
        <p className="m-1 flex text-center text-secondary text-xs sm:text-sm md:hidden">
          {getText('components.chatFlow.captionShort')}
        </p>
        <p className="m-1 hidden md:flex text-center text-secondary text-sm">
          {getText('components.chatFlow.caption')}
        </p>
      </div>
    </div>
  </div>;
}
