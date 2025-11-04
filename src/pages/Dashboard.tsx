import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Plus, Eye, Edit, Globe, LogOut, LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Sample scraped websites data
const scrapedWebsites = [
  {
    id: 1,
    name: "Tech Blog",
    url: "https://techblog.example.com",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    lastScraped: "2 hours ago",
  },
  {
    id: 2,
    name: "E-Commerce Store",
    url: "https://shop.example.com",
    thumbnail: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=250&fit=crop",
    lastScraped: "5 hours ago",
  },
  {
    id: 3,
    name: "News Portal",
    url: "https://news.example.com",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
    lastScraped: "1 day ago",
  },
  {
    id: 4,
    name: "Portfolio Site",
    url: "https://portfolio.example.com",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    lastScraped: "3 days ago",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border/50">
          <div className="p-6 border-b border-border/50">
            <h1 className="text-2xl font-bold text-gradient">ScraperAI</h1>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                <Button
                  onClick={() => navigate("/add-scraper")}
                  className="w-full gradient-primary text-white hover:opacity-90 transition-opacity group"
                >
                  <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  Add New Scraper
                </Button>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <div className="mt-auto p-4 border-t border-border/50">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Sidebar>

        <main className="flex-1">
          <header className="glass-card border-b border-border/50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h2 className="text-2xl font-bold">My Scrapers</h2>
              </div>
              <ThemeToggle />
            </div>
          </header>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scrapedWebsites.map((website) => (
                <div
                  key={website.id}
                  className="group relative overflow-hidden rounded-2xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant animate-fade-in"
                  onMouseEnter={() => setHoveredCard(website.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${website.id * 100}ms`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={website.thumbnail}
                      alt={website.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300 ${
                        hoveredCard === website.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                        <Button
                          size="icon"
                          className="glass-card hover:gradient-primary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          className="glass-card hover:gradient-secondary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                      {website.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Globe className="h-4 w-4" />
                      <span className="truncate">{website.url}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last scraped: {website.lastScraped}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
