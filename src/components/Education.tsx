import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-divider" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-16">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50"
        >
          <div className="flex items-start gap-6">
            <div className="bg-primary/10 p-4 rounded-xl">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="mb-2">Telkom University Purwokerto</h3>
              <p className="text-xl text-muted-foreground mb-2">
                Faculty of Informatics — Informatics Engineering
              </p>
              <p className="text-lg text-muted-foreground/70 mb-4">2022 - Present</p>

              <ul className="space-y-2 text-lg text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Current GPA: 3.75/4.0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Full tuition waiver and SDP 2 scholarship recipient</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
