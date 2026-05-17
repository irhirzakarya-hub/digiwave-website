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
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#030a14]" />

        {/* Animated SVG Waves - Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          {/* Wave Layer 1 - Slowest, Most Transparent */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[180px] opacity-20"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            style={{
              animation: "wave-drift 25s ease-in-out infinite",
            }}
          >
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#1a6fff" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient-1)"
              d="M0,80 C150,120 350,40 500,80 C650,120 750,60 900,80 C1050,100 1150,50 1300,80 C1450,110 1440,80 1440,80 L1440,180 L0,180 Z"
            />
          </svg>

          {/* Wave Layer 2 - Medium Speed */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[140px] opacity-30"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            style={{
              animation: "wave-drift-reverse 18s ease-in-out infinite",
            }}
          >
            <defs>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a6fff" />
                <stop offset="50%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#1a6fff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient-2)"
              d="M0,60 C200,100 400,30 600,60 C800,90 1000,40 1200,70 C1400,100 1440,60 1440,60 L1440,140 L0,140 Z"
            />
          </svg>

          {/* Wave Layer 3 - Fastest, Most Visible */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[100px] opacity-40"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{
              animation: "wave-drift 12s ease-in-out infinite",
            }}
          >
            <defs>
              <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="30%" stopColor="#00b8ff" />
                <stop offset="70%" stopColor="#1a6fff" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient-3)"
              d="M0,50 C180,80 360,20 540,50 C720,80 900,30 1080,50 C1260,70 1440,50 1440,50 L1440,100 L0,100 Z"
            />
          </svg>
        </div>

        {/* Radial glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Subtle glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
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
