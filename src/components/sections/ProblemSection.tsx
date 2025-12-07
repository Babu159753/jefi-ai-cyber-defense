import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Eye, Shield, CheckCircle, XCircle, ArrowRight } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Missing low-level network visibility",
    "No custom deep packet inspection",
    "Reactive instead of preventive security",
    "Delayed breach detection",
  ];

  const solutions = [
    "Full network transparency",
    "Custom-built packet sniffer",
    "AI-based anomaly detection",
    "Real-time threat prevention",
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Why It <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Many banks and companies suffer breaches due to missing low-level network visibility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 border-destructive/30 hover:border-destructive/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-destructive/20">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-bold text-destructive">The Problem</h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow / Transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="glass-card p-6 rounded-full neon-border"
              >
                <Eye className="w-12 h-12 text-primary" />
              </motion.div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-primary/50" />
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-primary/50" />
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/20">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold gradient-text">JeFi AI Solution</h3>
            </div>
            
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "24/7", label: "Real-time Monitoring" },
            { value: "< 1s", label: "Detection Speed" },
            { value: "100%", label: "Packet Visibility" },
            { value: "AI", label: "Powered Analysis" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
