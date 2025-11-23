import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end"
    >
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6">
            Dio Syahputra
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium"
        >
          Informatics Engineering Student • Web Developer • AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A third-year Informatics Engineering student at Telkom University Purwokerto with a strong
          passion for technology, web development, and artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection("experience")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg"
          >
            View Experience
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-lg border-2 border-foreground/20 hover:border-foreground/40"
          >
            See Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-lg border-2 border-foreground/20 hover:border-foreground/40"
            asChild
          >
            <a href="#" download>
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
