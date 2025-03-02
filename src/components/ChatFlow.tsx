import React from "react";
import { useVisible } from "../hooks/useVisible";

interface ChatFlowProps { 
  children: React.ReactNode;
  title: string;
}

export function ChatFlow({
  children,
  title
}: ChatFlowProps) {
  const isVisible = useVisible();

  return (
    <div className="container mx-auto flex justify-center">
      <div className="p-2 flex flex-col items-end">
        {/* User Message */}
        <div className="flex justify-end">
          <div className={`bg-primary-dark rounded-2xl py-2 px-5 shadow-md  ${isVisible ? 'animate-slide-in' : ''}`}>
            <h1 className="text-xl text-secondary">
              {title}
            </h1>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-center py-10 xs:py-5">
            <div className="w-[750px]">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}