import React from "react";
import { useLocation } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { getText } from "@/utils/dictionary";

interface ChatFlowProps { 
  children: React.ReactNode;
  title: string
}

export function ChatFlow({
  children,
   title
}) {
  const location = useLocation();
  const isIndexPage = location.pathname === "/" || location.pathname === "/index";

  return (
    <div className="container mx-auto flex justify-center items-center bg-primary w-full">
      <div className="px-4 sm:px-6 flex flex-col">
        {/* User Message */}
        <div className="flex justify-end w-full">
          <div className="bg-primary-dark rounded-2xl py-2 px-3 sm:px-5 shadow-md max-w-[85%] sm:max-w-none">
            <h1 className="text-lg sm:text-xl text-secondary break-words"> {title} </h1>
          </div>
        </div>

        {/* AI Response */}
        <div 
          className="flex justify-center w-full py-6 sm:py-8 lg:py-10"
          style={{ paddingBottom: isIndexPage ? '0' : 'calc(100px + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="w-full max-w-[750px] px-2 sm:px-4">
            {children}
          </div>
          </div>
        </div>


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
        </div>
  );
}