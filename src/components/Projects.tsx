import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-divider" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-16">Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 md:p-12 shadow-lg border border-border/50"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-primary/10 p-4 rounded-xl">
              <Zap className="w-8 h-8 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3">Batik Project — Text-to-Image Generation Website</h3>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
                A website that visualizes Indonesian stories into images using the FLUX.1 model.
                Generated over 100+ images during development and testing.
              </p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Vite", "TypeScript", "React", "Tailwind CSS", "Chakra UI"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                <p className="text-base md:text-lg text-foreground/90">
                  <span className="font-semibold text-primary">Performance Highlight:</span> Achieved
                  30–40% faster load time compared to earlier prototype
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                <a
                  href="https://batik-indonesia-project.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
