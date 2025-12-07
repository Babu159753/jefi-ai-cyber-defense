import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Terminal, Code2, Cpu, Rocket } from "lucide-react";

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { name: "Python", desc: "Backend logic" },
    { name: "Scapy & PyShark", desc: "Packet sniffing" },
    { name: "TensorFlow & PyTorch", desc: "AI/ML models" },
    { name: "FastAPI", desc: "API layer" },
    { name: "React", desc: "User interface" },
  ];

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Watch how JeFi AI captures live network traffic, analyzes packets, 
            and detects anomalies in real time.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative group">
            {/* Neon frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity" />
            
            {/* Video wrapper */}
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden bg-background aspect-video">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/demo-video-poster.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play button overlay (hidden when controls are shown) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm"
                  >
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What the demo shows */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">Demo Highlights</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                Live packet sniffer capturing network traffic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                Real-time traffic display and classification
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                AI-powered suspicious activity detection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                Instant alert generation system
              </li>
            </ul>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Code2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                    {tech.name}
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Component */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-neon-purple/20">
                <Cpu className="w-5 h-5 text-neon-purple" />
              </div>
              <h3 className="font-display text-lg font-semibold">AI Capabilities</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-neon-purple mt-1">▸</span>
                Classifies traffic into normal or suspicious
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-purple mt-1">▸</span>
                Detects brute force, scanning, MITM, exfiltration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-purple mt-1">▸</span>
                Generates human-readable alert explanations
              </li>
            </ul>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-neon-magenta/20">
                <Rocket className="w-5 h-5 text-neon-magenta" />
              </div>
              <h3 className="font-display text-lg font-semibold">Next Steps</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-neon-magenta mt-1">▸</span>
                Real-time AI alert notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-magenta mt-1">▸</span>
                Banking-specific signature expansion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-magenta mt-1">▸</span>
                Enhanced risk scoring system
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-magenta mt-1">▸</span>
                Compliance audit preparation
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
