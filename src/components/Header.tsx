import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">ScraperAI</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("importance")} className="text-foreground/80 hover:text-foreground transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="hero" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("hero")} className="text-foreground/80 hover:text-foreground transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("importance")} className="text-foreground/80 hover:text-foreground transition-colors text-left">
                Why Us
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-foreground/80 hover:text-foreground transition-colors text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors text-left">
                Contact
              </button>
              <div className="flex flex-col gap-3 mt-4">
                <ThemeToggle />
                <Button variant="ghost" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="hero" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
