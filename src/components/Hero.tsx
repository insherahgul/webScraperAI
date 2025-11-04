import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-automation.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Web Data Into{" "}
              <span className="text-gradient">Intelligent Actions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Harness the power of advanced web scraping combined with cutting-edge AI to automate workflows, 
              extract insights, and supercharge your business productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("pricing")} className="group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" onClick={() => scrollToSection("about")}>
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold text-gradient">10K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">500M+</p>
                <p className="text-sm text-muted-foreground">Data Points Processed</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-up relative">
            <div className="absolute inset-0 gradient-primary blur-3xl opacity-20 rounded-full"></div>
            <img 
              src={heroImage} 
              alt="AI Automation Platform Interface" 
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
