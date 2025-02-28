import { AppSidebar } from "./AppSidebar";
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-row w-full">

      {/* Sidebar */}
      <div className="flex-shrink-0">
        <AppSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col w-full">
        {/* Navigation */}
        <div className="w-full">
          <Navigation />
        </div>

        {/* Main Content */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
};

export default Layout;
