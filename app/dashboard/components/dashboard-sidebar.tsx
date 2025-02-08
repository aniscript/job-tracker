"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart, Briefcase, Calendar, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: BarChart, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Applications", href: "/dashboard/applications" },
  { icon: Calendar, label: "Interviews", href: "/dashboard/interviews" },
  { icon: Users, label: "Network", href: "/dashboard/network" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center pl-2 mb-2">
            <span className="text-2xl font-bold">JobTrackr</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
