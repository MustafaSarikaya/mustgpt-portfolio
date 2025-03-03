import { AppSidebar } from "./AppSidebar";
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SearchBox } from "./SearchBox";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isIndexPage = location.pathname === "/" || location.pathname === "/index";

  return (
    <div className="min-h-screen flex flex-row w-full relative">

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

        {/* Main Content - Add padding bottom to create space for fixed SearchBox */}
        <main className="flex-grow w-full overflow-y-auto" style={{ paddingBottom: isIndexPage ? '0' : '80px' }}>
          {children}
        </main>

        {/* SearchBox Footer (not shown on Index page) - Fixed at bottom */}
        {!isIndexPage && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10" style={{ marginLeft: 'var(--sidebar-width, 0)' }}>
            <div className="flex w-full py-4 px-4">
              <div className="container mx-auto max-w-2xl">
                <SearchBox width="full" />
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Layout;
