import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Importance from "@/components/Importance";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Importance />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
