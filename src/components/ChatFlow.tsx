import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  return <div className="container mx-auto flex justify-center items-center bg-primary w-full scrollbar-thin scrollbar-thumb-primary-dark scrollbar-track-transparent">

        <div id="chat-flow" className="p-2 flex flex-col items-center h-[calc(100vh-4rem)] overflow-y-auto ">
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="w-full"
          >
            {
        /* User Message */
      }
            <div className="flex justify-end w-full">
              <div className="bg-primary-dark rounded-2xl py-2 px-5 shadow-md">
                <h1 className="text-xl text-secondary"> {title} </h1>
              </div>
            </div>

            {
        /* AI Response */
      }
            <div className="flex snap-end justify-center py-10 xs:py-5" style={{ paddingBottom:'120px' }} >
              <div className="w-full">
                <div className="w-[750px]">
                  {children}
                </div>
              </div>
            </div>
            </motion.div>

        </div>

        {/* SearchBox Footer (not shown on Index page) - Fixed at bottom with dynamic width */}
      
          <div className="fixed bottom-0 bg-primary  md:w-[800px] sm:w-[550px] xs:px-4">
            <div className="flex flex-col items-center justify-center mx-auto">
                <SearchBox width="full" />
                <p className="m-2 flex text-secondary text-sm">{getText('components.chatFlow.caption')}</p>
            </div>
          </div>

      </div>;
}