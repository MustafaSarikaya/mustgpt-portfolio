import { AppSidebar } from "./AppSidebar";
import React from "react";


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

      {/* Main Content - Add padding bottom to create space for fixed SearchBox */}
      
      <main className="flex flex-grow w-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
