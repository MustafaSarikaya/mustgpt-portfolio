import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton, SidebarMenu } from "../components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function AppSidebar() {
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

    return <Sidebar className="border-none">
        <SidebarContent className="min-w-15vw bg-primary-dark">
            <SidebarGroup>
                <SidebarGroupLabel>Previous Conversations</SidebarGroupLabel>
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
    </Sidebar>;
}


export default AppSidebar;