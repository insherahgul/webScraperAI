import aboutImage from "@/assets/about-scraping.jpg";
import { Database, Brain, Zap, Code } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Database,
      title: "Advanced Web Scraping",
      description: "Extract data from any website with precision, handling dynamic content and complex structures."
    },
    {
      icon: Brain,
      title: "LLM Integration",
      description: "Leverage large language models to understand, process, and transform scraped data intelligently."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Create seamless automated pipelines that run 24/7, saving time and reducing manual effort."
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description: "Tailor-made scraping and automation solutions designed for your specific business needs."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">ScraperAI</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform combines state-of-the-art web scraping technology with artificial intelligence 
            to deliver unparalleled automation capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <img 
              src={aboutImage} 
              alt="Web Scraping and Automation Process" 
              className="rounded-2xl shadow-[var(--shadow-card)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 animate-fade-in-up order-1 md:order-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl hover:bg-card/60 transition-all duration-300 hover:shadow-[var(--shadow-card)] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-secondary group-hover:animate-glow-pulse">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">The Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Configure Target</h4>
              <p className="text-muted-foreground">
                Define the websites and data points you want to extract
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-secondary flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Processing</h4>
              <p className="text-muted-foreground">
                Our LLM analyzes and structures the scraped data intelligently
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Automate Actions</h4>
              <p className="text-muted-foreground">
                Set up workflows that act on the data automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
