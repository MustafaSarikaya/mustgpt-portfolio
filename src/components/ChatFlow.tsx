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

  return <div className="container mx-auto flex justify-center items-center bg-primary w-full">
        <div className="p-2 flex flex-col">
          {
        /* User Message */
      }
          <div className="flex justify-end">
            <div className="bg-primary-dark rounded-2xl py-2 px-5 shadow-md">
              <h1 className="text-xl text-secondary"> {title} </h1>
            </div>
          </div>

          {
        /* AI Response */
      }
          <div className="flex justify-center py-10 xs:py-5 " style={{ paddingBottom: isIndexPage ? '0' : '100px' }}>
            <div className="w-full">
              <div className="w-[750px]">
                {children}
              </div>
            </div>
          </div>

          

        </div>


          <div className="fixed bottom-0 bg-primary md:w-[800px] px-2 w-full">
            <div className="flex flex-col items-center justify-center">
                <SearchBox width="full" />
                <p className="m-1 flex text-center text-secondary text-sm md:hidden">
                  {getText('components.chatFlow.captionShort')}
                </p>
                <p className="m-1 hidden md:flex text-center text-secondary text-sm">
                  {getText('components.chatFlow.caption')}
                </p>
            </div>
          </div>


      </div>;
}
  