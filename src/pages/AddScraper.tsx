import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddScraper = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [isScrapingRunning, setIsScrapingRunning] = useState(false);

  const handleScrape = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to scrape",
        variant: "destructive",
      });
      return;
    }

    setIsScrapingRunning(true);
    
    // Simulate scraping process
    setTimeout(() => {
      setIsScrapingRunning(false);
      toast({
        title: "Success!",
        description: "Website scraped successfully",
      });
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="glass-card border-b border-border/50 px-6 py-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
            className="hover:scale-110 transition-transform"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gradient">Add New Scraper</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-elegant animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6 animate-glow-pulse">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">Start Scraping</h2>
              <p className="text-muted-foreground">
                Enter the URL of the website you want to scrape with AI-powered automation
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="url" className="text-sm font-medium">
                  Website URL
                </label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-14 text-lg border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <Button
                onClick={handleScrape}
                disabled={isScrapingRunning}
                className="w-full h-14 text-lg gradient-primary text-white hover:opacity-90 transition-all group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isScrapingRunning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Scraping...
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Start Scraping
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-muted/30 border border-border/30">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  AI-powered data extraction
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Automated scraping schedules
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Smart data parsing and structuring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Export in multiple formats
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddScraper;
