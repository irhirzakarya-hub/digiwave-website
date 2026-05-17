"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Radial glow behind logo - transparent background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? "rtl" : ""}`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="DIGIWAVE Logo"
              width={350}
              height={350}
              className="mx-auto w-[250px] sm:w-[300px] md:w-[350px] h-auto animate-float"
              style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.05)" }}
              priority
              loading="eager"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-8"
          >
            {"— "}
            {t.hero.tagline}
            {" —"}
          </motion.p>

          {/* Campaign Line */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-[family-name:var(--font-rajdhani)]"
          >
            <span className="text-silver italic">{t.hero.slogan1}</span>
            <span className="text-silver italic"> — </span>
            <span className="text-primary neon-text italic underline decoration-primary/50 underline-offset-4">
              {t.hero.slogan2}
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 font-semibold"
          >
            {t.hero.subline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-bold rounded-full animate-pulse-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">{t.hero.cta}</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2 animate-bounce">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
