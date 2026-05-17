"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useLanguage } from "@/context/language-context";

const team = [
  {
    id: 1,
    name: "Lahcen IRHIR Hmmouch",
    role: "cofounder",
    initials: "LH",
    image: "/images/lahcen.jpg",
    facebook: "https://www.facebook.com/share/1Ev7aB8kGC/",
    whatsapp: "https://wa.me/212624386682",
    phone: "+212 624-386682",
    gradient: "from-primary to-secondary",
  },
  {
    id: 2,
    name: "Zakaria",
    role: "founder",
    initials: "ZK",
    image: "/images/zakaria.jpg",
    facebook: "https://www.facebook.com/share/17fzbcMmf8/",
    whatsapp: "https://wa.me/212609683032",
    phone: "+212 609 683 032",
    gradient: "from-secondary to-[#00ffcc]",
  },
];

export function ContactSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="contact"
      className={`py-20 md:py-32 relative overflow-hidden ${isRTL ? "rtl" : ""}`}
    >
      {/* Background - Semi-transparent per spec */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5,13,26,0.6)" }}
      />

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full opacity-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#contact-wave)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient
              id="contact-wave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#1a6fff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4">
            {t.contact.overline}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-orbitron)]">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:neon-border"
            >
              {/* Avatar */}
              <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px] mx-auto mb-6">
                <div
                  className="absolute inset-0 rounded-full p-[3px]"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #1a6fff)",
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 50px rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.id === 1 ? (
                  <>
                    Lahcen{" "}
                    <span
                      className="text-primary font-bold"
                      style={{
                        color: "#00d4ff",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
                      }}
                    >
                      IRHIR
                    </span>{" "}
                    Hmmouch
                  </>
                ) : (
                  member.name
                )}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                {t.contact[member.role as "founder" | "cofounder"]} · DIGIWAVE
              </p>

              {/* Divider */}
              <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label={`Facebook de ${member.name}`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label={`WhatsApp de ${member.name}`}
                >
                  <WhatsAppIcon size={20} />
                </a>
              </div>

              {/* Phone */}
              <p className="text-sm text-muted-foreground font-mono">
                {member.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
