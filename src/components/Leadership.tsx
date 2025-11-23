import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Presentation, Code } from "lucide-react";

const experiences = [
  {
    role: "International Volunteer — Internationalization Division",
    period: "June 2024 – Present",
    icon: Users,
    details: [
      "Co-led hosting 7 students from RMUTK University (Thailand) during October 8–15, 2024",
      "Served as Equipment Coordinator during INDEX program (Oct 29 – Nov 5, 2025), supporting 13 international participants from two universities",
    ],
  },
  {
    role: "Presenter — CENTIVE 2023 Conference",
    period: "Dec 2023",
    icon: Presentation,
    details: [
      "Presented a senior's final project on English vocabulary learning game",
      "Delivered technical explanations clearly to a diverse audience",
    ],
  },
  {
    role: "Developer — PPK Ormawa HMTI",
    period: "Feb – Dec 2024",
    icon: Code,
    details: [
      "Designed UI/UX using Figma",
      "Developed website features in JavaScript and PHP (Laravel)",
      "Conducted field testing for Eduwisata Kampung Wisata Inggris Kebumen",
    ],
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-divider bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-16">Leadership & Activities</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: "easeOut" }}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl mb-2">{exp.role}</h3>
                    <p className="text-base text-muted-foreground/70 mb-4">{exp.period}</p>

                    <ul className="space-y-2 text-base md:text-lg text-foreground/80">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
