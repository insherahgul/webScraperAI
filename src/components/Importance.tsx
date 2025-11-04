import { TrendingUp, Clock, Shield, Target, Users, Rocket } from "lucide-react";

const Importance = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Automate repetitive tasks and free your team to focus on strategic initiatives that drive growth."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce hours of manual data collection to minutes with intelligent automation workflows."
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.9% uptime ensures your data operations never stop."
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "AI-powered validation ensures data quality and reduces errors to near zero."
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "From startups to enterprises, our platform grows with your business needs seamlessly."
    },
    {
      icon: Rocket,
      title: "Fast Deployment",
      description: "Get up and running in minutes, not weeks, with our intuitive setup process."
    }
  ];

  return (
    <section id="importance" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">ScraperAI</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the competitive advantages that make us the leading choice for web scraping and AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-card/60 transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center glass-card p-12 rounded-2xl animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging the power of AI-driven automation
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-secondary"></div>
              <div className="w-8 h-8 rounded-full bg-accent"></div>
            </div>
            <span className="text-sm text-muted-foreground ml-2">Trusted by 10,000+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
