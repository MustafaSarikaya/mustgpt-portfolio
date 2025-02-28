import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Github, Linkedin, Grid } from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navigation = () => {
return (<nav className="top-0 left-0 right-0 p-6 bg-primary">
    <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center gap-6">
    <SidebarTrigger  />
    <Link to="/" className="text-black font-semibold text-lg hover:text-accent transition-colors">MustGPT</Link>
    </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <a href="https://github.com/MustafaSarikaya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/mustafa-sarikaya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <Grid className="w-6 h-6 text-gray-600" />
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </nav>);
      }

export default Navigation;