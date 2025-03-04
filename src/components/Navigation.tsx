import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Github, Linkedin, Grid } from 'lucide-react';
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { getText } from '../utils/dictionary';

const Navigation = () => {
  const { state } = useSidebar();
  const isSidebarActive = state === "expanded";

  return (
    <nav className="top-0 left-0 right-0 pt-6 pb-2 px-6 bg-primary">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex items-center gap-6">
          {!isSidebarActive && <SidebarTrigger />}
          <Link to="/" className="text-black font-semibold text-xl hover:text-accent transition-colors">
            {getText('navigation.brand')}
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href={getText('navigation.links.github')} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={getText('navigation.links.linkedin')} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <Grid className="w-6 h-6 text-gray-600" />
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