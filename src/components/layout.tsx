import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, Settings, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChatBot } from "@/components/ChatBot";
import { useDemoMode } from "@/contexts/DemoContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isDemoMode, exitDemoMode, demoUser } = useDemoMode();

  const notifications = [
    { id: 1, text: "Sarah Chen completed a goal", time: "2h ago", unread: true },
    { id: 2, text: "New message in #general", time: "4h ago", unread: true },
    { id: 3, text: "Weekly check-in starting soon", time: "1d ago", unread: true },
  ];

  const handleExitDemo = () => {
    exitDemoMode();
    navigate("/auth");
    toast({
      title: "Demo mode ended",
      description: "Sign in to access your account",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Demo Mode Banner */}
          {isDemoMode && (
            <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  Demo Mode
                </Badge>
                <span className="text-sm text-muted-foreground">
                  You're viewing sample data. Sign in to access your account.
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExitDemo}
                className="text-primary hover:text-primary/80"
              >
                <X className="h-4 w-4 mr-1" />
                Exit Demo
              </Button>
            </div>
          )}

          {/* Top Header */}
          <header className="h-16 border-b bg-card px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="md:hidden" />
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-96 pl-10 pr-4 py-2 bg-muted/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Notifications */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                      3
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Notifications</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "All notifications cleared",
                          });
                        }}
                      >
                        Clear all
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary' : 'bg-transparent'}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{notification.text}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Settings */}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/settings')}
              >
                <Settings className="h-5 w-5" />
              </Button>

              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-3 border-l">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium">
                    {isDemoMode ? demoUser.full_name : "John Smith"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {isDemoMode ? "Demo Account" : "Founder"}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold cursor-pointer hover:scale-105 transition-transform">
                  {isDemoMode ? "DU" : "JS"}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
        
        {/* Chat Bot */}
        <ChatBot />
      </div>
    </SidebarProvider>
  );
}