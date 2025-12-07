import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, ExternalLink, User, Crown, Presentation, TestTube, Wrench, Code } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Xalimov Mustafo",
      role: "Team Lead",
      roleIcon: Crown,
      link: "https://my-portfolio-phi-tan-47.vercel.app/",
      linkType: "portfolio",
      color: "from-neon-cyan to-neon-blue",
    },
    {
      name: "Samirjon Tursunov",
      role: "Presenter",
      roleIcon: Presentation,
      link: "https://github.com/Samirjon07",
      linkType: "github",
      color: "from-neon-blue to-neon-purple",
    },
    {
      name: "Diyorbek Zokirov",
      role: "Tester",
      roleIcon: TestTube,
      link: "https://github.com/fowlerta",
      linkType: "github",
      color: "from-neon-purple to-neon-magenta",
    },
    {
      name: "Mironshoh Ahmadov",
      role: "Technical Specialist",
      roleIcon: Wrench,
      link: "https://github.com/poyoniy",
      linkType: "github",
      color: "from-neon-magenta to-neon-cyan",
    },
    {
      name: "Kamila Abdullayeva",
      role: "Backend Developer",
      roleIcon: Code,
      link: "https://www.linkedin.com/in/kamilla-abdullayeva-75449b31a/",
      linkType: "linkedin",
      color: "from-neon-cyan to-neon-purple",
    },
  ];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden">
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
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The talented individuals behind JeFi AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {team.map((member, index) => {
            const LinkIcon = getLinkIcon(member.linkType);
            
            return (
              <motion.a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 h-full hover-glow transition-all duration-500 group-hover:scale-105">
                  {/* Gradient background on hover */}
                  <div className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                    bg-gradient-to-br ${member.color}
                  `} />
                  
                  {/* Avatar placeholder */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`
                        w-16 h-16 mx-auto rounded-full flex items-center justify-center
                        bg-gradient-to-br ${member.color} bg-opacity-30
                        border-2 border-border group-hover:border-primary/50 transition-colors
                      `}
                    >
                      <User className="w-8 h-8 text-foreground/80" />
                    </motion.div>
                    
                    {/* Role icon badge */}
                    <div className={`
                      absolute -bottom-1 -right-1 left-1/2 -translate-x-1/2 translate-x-4
                      w-7 h-7 rounded-full flex items-center justify-center
                      bg-gradient-to-br ${member.color} shadow-lg
                    `}>
                      <member.roleIcon className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center relative">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {member.role}
                    </p>

                    {/* Link indicator */}
                    <div className="flex items-center justify-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <LinkIcon className="w-3.5 h-3.5" />
                      <span>
                        {member.linkType === "github" ? "GitHub" : 
                         member.linkType === "linkedin" ? "LinkedIn" : "Portfolio"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
