import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarContent } from './ui/sidebar';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const testimonials = [
    {
      title: "How did MustGPT help transform our startup?",
      path: "/testimonials/one",
    },
    {
      title: "Can Mustafa really understand my business needs?",
      path: "/testimonials/two",
    },
    {
      title: "Is Mustafa suitable for enterprise-scale projects?",
      path: "/testimonials/three",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />
      <div className="flex-1 flex">
        <main className="flex-1">
          {children}
        </main>
        <Sidebar>
          <SidebarContent className="w-80 bg-white border-l border-gray-200">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Previous Conversations</h2>
              <div className="space-y-3">
                {testimonials.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block p-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
