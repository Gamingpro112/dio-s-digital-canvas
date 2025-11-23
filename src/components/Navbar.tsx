import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          Dio Syahputra
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
