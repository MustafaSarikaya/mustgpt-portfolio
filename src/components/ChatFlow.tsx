import { MainFlow } from './MainFlow';
import React from "react";

interface ChatFlowProps {
  children: React.ReactNode;
  title: string
}

export function ChatFlow({
  children,
  title
}) {


  return (
    <MainFlow >
      <div className="px-4 sm:px-6 flex flex-col justify-center pt-[100px] pb-20 md:pt-10 h-full">
        {
        /* User Message */
      }
        <div className="flex justify-end w-full">
          <div className="bg-primary-dark rounded-2xl py-2 px-3 sm:px-5 shadow-md max-w-[85%] sm:max-w-none">
            <h1 className="text-lg sm:text-xl text-secondary break-words"> {title} </h1>
          </div>
        </div>

        {
        /* AI Response */
      }
        <div className="flex justify-center w-full py-6 sm:py-8 lg:py-10">
          <div className="w-full max-w-[750px] px-2 sm:px-4">
            {children}
          </div>
        </div>
      </div>
    </MainFlow>
  );
}