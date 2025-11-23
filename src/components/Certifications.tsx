import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Junior Web Development Certificate",
    organization: "KOMINFO Digital Talent Scholarship",
    date: "March 2023",
    details: [
      "24-hour structured training in PHP, MySQL, HTML, CSS, and Bootstrap",
      "Experience organizing functions, files, and resources in a structured manner",
    ],
  },
  {
    title: "Learn to Create Web Applications with React",
    organization: "Dicoding Certificate",
    date: "April 2023",
    details: [
      "Mastered fundamental and intermediate React concepts",
      "Developed a final React-based notes application",
    ],
  },
];

const Certifications = () => {
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
          <h2 className="mb-16">Certifications</h2>
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: "easeOut" }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2">{cert.title}</h3>
                  <p className="text-lg text-primary mb-1">{cert.organization}</p>
                  <p className="text-base text-muted-foreground/70 mb-4">{cert.date}</p>

                  <ul className="space-y-2 text-base md:text-lg text-foreground/80">
                    {cert.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
