import { ReactNode, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Grid } from 'lucide-react';
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { getText } from '../utils/dictionary';

const Navigation = () => {
  const { state } = useSidebar();
  const isSidebarActive = state === "expanded";
  const [isGridOpen, setIsGridOpen] = useState(false);

  const socialIcons = [
    { Icon: Github, href: getText('navigation.links.github') },
    { Icon: Linkedin, href: getText('navigation.links.linkedin') },
    { Icon: Twitter, href: getText('navigation.links.twitter') }
  ];

  return (
    <nav className="fixed md:relative top-0 pt-6 pb-2 px-6 bg-primary w-full">
      <div className="flex flex-row justify-between items-start">
        <div className="flex items-center gap-6">
          {!isSidebarActive && <SidebarTrigger />}
          <Link to="/" className="text-black font-semibold text-xl hover:text-accent transition-colors">
            {getText('navigation.brand')}
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {/* Social icons for medium screens and above */}
          <div className="hidden md:flex items-center gap-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          {/* Grid icon and mobile social grid */}
          <div className="relative md:hidden">
            <button
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsGridOpen(!isGridOpen)}
              onMouseEnter={() => setIsGridOpen(true)}
              // onMouseLeave={() => setIsGridOpen(false)}
            >
              <Grid className="w-6 h-6" />
            </button>
            
            {isGridOpen && (
              <div 
                className="absolute right-0 mt-2 bg-white p-3 rounded-lg shadow-lg w-[120px]"
                onMouseEnter={() => setIsGridOpen(true)}
                onMouseLeave={() => setIsGridOpen(false)}
              >
                <div className="grid grid-rows-3 gap-3">
                  {socialIcons.map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-gray-600 hover:text-accent transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" alt={getText('navigation.avatar.alt')} />
            <AvatarFallback>{getText('navigation.avatar.fallback')}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;