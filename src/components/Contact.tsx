import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-divider bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-8 text-center">Get In Touch</h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:diodikky121@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl mb-2">Email</h3>
            <p className="text-base text-muted-foreground break-all">diodikky121@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+6282244594151"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl mb-2">Phone</h3>
            <p className="text-base text-muted-foreground">+62 822 4459 4151</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dio-syahputra/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl mb-2">LinkedIn</h3>
            <p className="text-base text-muted-foreground">dio-syahputra</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 text-lg"
          >
            <a href="mailto:diodikky121@gmail.com">Send Me an Email</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
