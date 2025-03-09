import { AppSidebar } from "./AppSidebar";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SearchBox } from "./SearchBox";
import { useSidebar } from "./ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="min-h-screen bg-primary flex flex-row w-full">
      {/* Sidebar */}
      <div className="flex flex-shrink-0">
        <AppSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow w-full">
        {/* Navigation */}
        <div className="w-full">
          <Navigation />
        </div>

        {/* Main Content - Add padding bottom to create space for fixed SearchBox */}
        <main className="flex flex-grow w-full " >
          {children}
        </main>


      </div>
    </div>
  );
};

export default Layout;
