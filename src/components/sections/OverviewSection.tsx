import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Cpu, Shield, Activity } from "lucide-react";

const OverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Eye,
      title: "Custom Packet Sniffer",
      description: "Built from scratch for deep network inspection",
    },
    {
      icon: Cpu,
      title: "Real-Time Processing",
      description: "Instant analysis of network traffic patterns",
    },
    {
      icon: Shield,
      title: "Proactive Defense",
      description: "Prevention-focused, not reactive",
    },
    {
      icon: Activity,
      title: "Live Visualization",
      description: "Risk assessment and logging dashboard",
    },
  ];

  return (
    <section id="overview" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">JeFi AI</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A self-built cybersecurity tool that detects abnormal network behavior 
            using our custom-developed packet sniffer—providing full transparency 
            instead of relying on existing OS tools.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow group cursor-pointer"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors" />
                <feature.icon className="relative w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Central diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 neon-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Network Traffic */}
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/30 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-neon-cyan" />
                  </div>
                </motion.div>
                <h4 className="font-display font-semibold mb-1">Network Traffic</h4>
                <p className="text-muted-foreground text-sm">Incoming packets</p>
              </div>

              {/* Center: JeFi AI */}
              <div className="text-center relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px hsl(195 100% 50% / 0.3)",
                      "0 0 40px hsl(195 100% 50% / 0.5)",
                      "0 0 20px hsl(195 100% 50% / 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary flex items-center justify-center"
                >
                  <Shield className="w-16 h-16 text-primary" />
                </motion.div>
                <h4 className="font-display text-xl font-bold gradient-text">JeFi AI</h4>
                <p className="text-muted-foreground text-sm mt-1">Analysis & Detection</p>
                
                {/* Connecting lines */}
                <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-primary" />
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-neon-magenta" />
              </div>

              {/* Right: Alerts */}
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="inline-block"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-magenta/20 to-neon-purple/20 border border-neon-magenta/30 flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-neon-magenta" />
                  </div>
                </motion.div>
                <h4 className="font-display font-semibold mb-1">Alerts & Logs</h4>
                <p className="text-muted-foreground text-sm">Real-time response</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
