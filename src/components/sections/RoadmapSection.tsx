import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Code, Target, Brain, Rocket, CheckCircle } from "lucide-react";

const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "Conceptualization and research",
      status: "completed",
    },
    {
      icon: Code,
      title: "Prototype",
      description: "Core functionality development",
      status: "completed",
    },
    {
      icon: Target,
      title: "MVP",
      description: "Minimum viable product release",
      status: "completed",
    },
    {
      icon: Brain,
      title: "Integrating AI",
      description: "Advanced ML implementation",
      status: "current",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Public release and scaling",
      status: "upcoming",
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our journey from concept to fully-fledged security platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Progress line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-border rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "70%" } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              />
            </div>

            {/* Stage items */}
            <div className="grid grid-cols-5 gap-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="flex flex-col items-center"
                >
                  {/* Icon container */}
                  <motion.div
                    animate={stage.status === "current" ? {
                      boxShadow: [
                        "0 0 20px hsl(195 100% 50% / 0.4)",
                        "0 0 40px hsl(195 100% 50% / 0.6)",
                        "0 0 20px hsl(195 100% 50% / 0.4)",
                      ],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`
                      relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-4
                      ${stage.status === "completed" 
                        ? "bg-primary text-primary-foreground" 
                        : stage.status === "current"
                        ? "bg-gradient-to-br from-neon-cyan to-neon-purple text-primary-foreground ring-4 ring-primary/30"
                        : "bg-muted border-2 border-border text-muted-foreground"
                      }
                    `}
                  >
                    {stage.status === "completed" ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <stage.icon className="w-5 h-5" />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className={`
                    text-center p-4 rounded-xl transition-all
                    ${stage.status === "current" 
                      ? "glass-card neon-border" 
                      : stage.status === "completed"
                      ? "glass-card border-primary/30"
                      : "bg-transparent"
                    }
                  `}>
                    <h3 className={`
                      font-display font-semibold mb-1
                      ${stage.status === "current" ? "gradient-text" : "text-foreground"}
                    `}>
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {stage.description}
                    </p>
                    
                    {stage.status === "current" && (
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current Stage
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  flex items-center gap-4 p-4 rounded-xl
                  ${stage.status === "current" 
                    ? "glass-card neon-border" 
                    : stage.status === "completed"
                    ? "glass-card"
                    : "bg-muted/30"
                  }
                `}
              >
                {/* Icon */}
                <motion.div
                  animate={stage.status === "current" ? {
                    boxShadow: [
                      "0 0 15px hsl(195 100% 50% / 0.4)",
                      "0 0 25px hsl(195 100% 50% / 0.6)",
                      "0 0 15px hsl(195 100% 50% / 0.4)",
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center shrink-0
                    ${stage.status === "completed" 
                      ? "bg-primary text-primary-foreground" 
                      : stage.status === "current"
                      ? "bg-gradient-to-br from-neon-cyan to-neon-purple text-primary-foreground"
                      : "bg-muted border border-border text-muted-foreground"
                    }
                  `}
                >
                  {stage.status === "completed" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <stage.icon className="w-5 h-5" />
                  )}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`
                      font-display font-semibold
                      ${stage.status === "current" ? "gradient-text" : "text-foreground"}
                    `}>
                      {stage.title}
                    </h3>
                    {stage.status === "current" && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {stage.description}
                  </p>
                </div>

                {/* Status indicator */}
                <div className={`
                  text-xs font-medium px-2 py-1 rounded-full
                  ${stage.status === "completed" 
                    ? "bg-primary/20 text-primary" 
                    : stage.status === "current"
                    ? "bg-neon-cyan/20 text-neon-cyan"
                    : "bg-muted text-muted-foreground"
                  }
                `}>
                  {stage.status === "completed" ? "Done" : stage.status === "current" ? "Now" : "Soon"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
