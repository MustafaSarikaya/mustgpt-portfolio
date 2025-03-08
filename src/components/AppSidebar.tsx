import React from "react";
import { 
    Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupLabel, 
    SidebarMenuItem, 
    SidebarMenuButton, 
    SidebarMenu, 
    SidebarRail, 
    SidebarFooter,
    SidebarTrigger,
    useSidebar
} from "../components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getText } from '../utils/dictionary';
import Footer from "./Footer";

export function AppSidebar() {
    const location = useLocation();
    const { state } = useSidebar();
    const isActive = state === "expanded";

    const testimonials = [
        {
            title: getText('pages.testimonials.one.title'),
            path: "/testimonials/one",
        },
        {
            title: getText('pages.testimonials.two.title'),
            path: "/testimonials/two",
        },
        {
            title: getText('pages.testimonials.three.title'),
            path: "/testimonials/three",
        },
    ];

    const portfolioPages = [
        {
            title: getText('pages.about.title'),
            path: "/about",
        },
        {
            title: getText('pages.events.title'),
            path: "/events",
        },
        {
            title: getText('pages.projects.title'),
            path: "/projects",
        },
    ];

    return <Sidebar className="border-none">
        <SidebarContent className="min-w-15vw bg-primary-dark">
            {isActive && (
                <div className="flex justify-start items-center pt-6 pb-2 px-6">
                    <SidebarTrigger />
                </div>
            )}
            <SidebarGroup>
                <SidebarGroupLabel>{getText('components.sidebar.label')}</SidebarGroupLabel>
                <SidebarMenu>
                    {testimonials.map((item, index) =>
                        <SidebarMenuItem key={index} className="block m-1">
                            <SidebarMenuButton asChild>
                                <Link to={item.path} className={`block pr-4 py-8 pl-2 rounded-md transition-all ${location.pathname === item.path ? 'bg-primary text-accent' : 'hover:bg-pink-700'} hover:rounded-md`}>
                                    {item.title}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>)
                    }
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>{getText('components.sidebar.portfolioLabel')}</SidebarGroupLabel>
                <SidebarMenu>
                    {portfolioPages.map((item, index) =>
                        <SidebarMenuItem key={index} className="block m-1">
                            <SidebarMenuButton asChild>
                                <Link to={item.path} className={`block pr-4 py-8 pl-2 rounded-md transition-all ${location.pathname === item.path ? 'bg-primary text-accent' : 'hover:bg-pink-700'} hover:rounded-md`}>
                                    {item.title}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>)
                    }
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="m-0 p-0">
            <Footer />
        </SidebarFooter>
    </Sidebar>;
}

export default AppSidebar;