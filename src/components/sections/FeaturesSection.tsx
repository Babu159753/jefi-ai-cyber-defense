import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Network, 
  Shield, 
  Brain, 
  Search, 
  BarChart3, 
  FileText,
  ChevronRight
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Network,
      title: "Real-Time Packet Sniffer",
      description: "Custom-built from scratch for deep network inspection without relying on OS tools.",
      color: "from-neon-cyan to-neon-blue",
    },
    {
      icon: Shield,
      title: "Live Threat Detection",
      description: "Immediate identification and alerting of suspicious network activity.",
      color: "from-neon-blue to-neon-purple",
    },
    {
      icon: Brain,
      title: "AI-Assisted Analysis",
      description: "Machine learning models classify traffic and detect anomalous patterns.",
      color: "from-neon-purple to-neon-magenta",
    },
    {
      icon: Search,
      title: "Attack Pattern Recognition",
      description: "Identifies brute force, scanning, MITM, and data exfiltration attempts.",
      color: "from-neon-magenta to-neon-cyan",
    },
    {
      icon: BarChart3,
      title: "Network Visualization",
      description: "Interactive dashboard for real-time traffic monitoring and risk assessment.",
      color: "from-neon-cyan to-neon-purple",
    },
    {
      icon: FileText,
      title: "Event Logging & Export",
      description: "Comprehensive logs with export capabilities for compliance and auditing.",
      color: "from-neon-blue to-neon-magenta",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
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
            Key <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful capabilities designed for comprehensive network security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`
                glass-card p-6 h-full transition-all duration-500 cursor-pointer
                ${hoveredIndex === index ? 'scale-105 neon-border' : 'hover-glow'}
              `}>
                {/* Gradient background on hover */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  bg-gradient-to-br ${feature.color}
                `} />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${feature.color} bg-opacity-20
                    `}
                  >
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn more indicator */}
                <motion.div
                  className="flex items-center gap-1 mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
