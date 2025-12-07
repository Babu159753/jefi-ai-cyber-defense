import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, Shield } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="glass-card p-4 rounded-2xl">
              <Shield className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-muted-foreground mb-10">
            Interested in JeFi AI? We'd love to hear from you.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:jefi.ai@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 py-4 hover-glow flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Contact Us</span>
            </motion.a>

            <motion.a
              href="https://github.com/JF-NPSPA/PacketSniffer_ProtocolAnanlyzer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 py-4 hover-glow flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">View on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-display font-semibold gradient-text">JeFi AI</span>
              <span>© 2024</span>
            </div>
            <p>Next-Generation Cyberattack Prevention System</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
