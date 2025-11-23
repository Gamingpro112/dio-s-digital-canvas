import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-divider" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-12">About Me</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-foreground/80"
          >
            I am a dedicated Informatics Engineering student driven by a lifelong interest in
            technology. I consistently pursue growth by learning web development, AI, and modern
            programming technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-foreground/80"
          >
            I have experience using JavaScript, PHP, React JS, Laravel, and MySQL. Throughout my
            academic years—from vocational school to university—I have actively participated in
            competitions and was recognized as a Top Achiever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-foreground/80"
          >
            I am also active in organizational work, public speaking, software development projects,
            and digital content creation within my university.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
