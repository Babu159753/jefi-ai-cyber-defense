import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Smartphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const downloadLink = "https://drive.google.com/drive/folders/1dF6TnBUFLDfNZPsdwyMUJxhqi-LweDBc?usp=sharing";

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 rounded-3xl blur-2xl" />
            
            {/* Card */}
            <div className="relative glass-card p-8 md:p-12 neon-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Text & Button */}
                <div className="text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                      <Smartphone className="w-4 h-4" />
                      Available Now
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      Download <span className="gradient-text">JeFi AI</span>
                    </h2>
                    
                    <p className="text-muted-foreground mb-8">
                      Get started with our cybersecurity solution. Download the latest version from Google Drive.
                    </p>
                    
                    <Button
                      variant="neon"
                      size="xl"
                      asChild
                      className="w-full md:w-auto"
                    >
                      <a 
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-5 h-5" />
                        Download from Google Drive
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Right: QR Code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <div className="relative group">
                    {/* Animated border */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px hsl(195 100% 50% / 0.3)",
                          "0 0 40px hsl(195 100% 50% / 0.5)",
                          "0 0 20px hsl(195 100% 50% / 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
                    />
                    
                    {/* QR Code container */}
                    <div className="relative bg-foreground p-4 rounded-xl">
                      <QRCodeSVG
                        value={downloadLink}
                        size={180}
                        level="H"
                        bgColor="hsl(210 40% 98%)"
                        fgColor="hsl(230 30% 6%)"
                      />
                    </div>
                    
                    <p className="text-center text-muted-foreground text-sm mt-4">
                      Scan to download
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
