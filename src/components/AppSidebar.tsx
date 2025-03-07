import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton, SidebarMenu, SidebarRail, SidebarFooter } from "../components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getText } from '../utils/dictionary';
import Footer from "./Footer";

export function AppSidebar() {
    const location = useLocation();

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

    return <Sidebar className="border-none ">
        <SidebarContent className="min-w-15vw bg-primary-dark rounded-tr-3xl">
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
        </SidebarContent>
        <SidebarFooter className="m-0 p-0">
            <Footer className="p-5"/>
        </SidebarFooter>
    </Sidebar>;
}

export default AppSidebar;