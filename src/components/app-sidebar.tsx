import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  Info,
  ChevronRight,
  Gem,
  GraduationCap,
} from "lucide-react";
import utopiaLogo from "@/assets/utopia-logo.avif";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "My Network", url: "/members", icon: Users },
  { title: "Academy", url: "/academy", icon: GraduationCap },
  { title: "About U-topia", url: "/about", icon: Info },
  { title: "Upgrade", url: "/upgrade", icon: Gem },
];

const channels = [
  { name: "announcements", unread: 2 },
  { name: "u-topia-materials", unread: 0 },
  { name: "events-calendar", unread: 1 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card">
        {/* Header */}
        <div className="p-4 border-b">
          {!collapsed && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-28 overflow-hidden">
                  <img 
                    src={utopiaLogo} 
                    alt="U-topia" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Shareholder Portal</p>
              </div>
              <SidebarTrigger className="h-6 w-6" />
            </div>
          )}
          {collapsed && (
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden">
                <img 
                  src={utopiaLogo} 
                  alt="U-topia" 
                  className="h-full w-full object-contain"
                />
                <div className="absolute inset-0 bg-white/10 dark:bg-transparent pointer-events-none" />
              </div>
              <SidebarTrigger className="h-6 w-6" />
            </div>
          )}
        </div>


        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Channels */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between">
              <span>Channels</span>
              <ChevronRight className="h-4 w-4" />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {channels.map((channel) => (
                  <SidebarMenuItem key={channel.name}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={`/messages/channel/${channel.name}`} 
                        className="flex items-center justify-between hover:bg-muted/50"
                      >
                        <span># {channel.name}</span>
                        {channel.unread > 0 && (
                          <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                            {channel.unread}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* User Profile */}
        <div className="mt-auto p-4 border-t">
          {!collapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                JS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">John Smith</p>
                <p className="text-xs text-muted-foreground">Founding Member</p>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <NavLink to="/settings">
                  <Settings className="h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                JS
              </div>
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
