"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Settings,
  Film,
  Globe,
  Megaphone,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const mainServices = [
  { key: "design", icon: Palette },
  { key: "automation", icon: Settings },
  { key: "video", icon: Film },
  { key: "web", icon: Globe },
] as const;

const additionalServices = [
  { key: "ads", icon: Megaphone },
  { key: "boost", icon: TrendingUp },
  { key: "management", icon: Users },
] as const;

const badges = [
  { key: "secure", icon: Shield },
  { key: "flexible", icon: Zap },
  { key: "efficient", icon: Target },
] as const;

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background - Semi-transparent per spec */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5,13,26,0.6)" }}
      />

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
            {t.services.overline}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">
            <span className="text-silver">{t.services.title1} </span>
            <span className="text-primary neon-text">{t.services.title2}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-silver">{t.services.subtitle1} </span>
            <span className="text-primary font-bold">{t.services.subtitle2}</span>
          </p>
        </motion.div>

        {/* Quality Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-6 divide-x divide-border/50">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.key}
                  className={`flex items-center gap-3 ${index > 0 ? "pl-6" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-silver tracking-wide">
                    {t.services.badges[badge.key]}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isRTL ? "rtl" : ""}`}
        >
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t.services.items[service.key];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl p-6 text-center transition-all duration-300 hover:neon-border cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-pulse transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 tracking-wide">
                  {serviceData.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {serviceData.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase font-bold">
            {t.services.additional}
          </span>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Additional Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto ${isRTL ? "rtl" : ""}`}
        >
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t.services.items[service.key];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl p-6 transition-all duration-300 hover:neon-border cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:animate-pulse">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary mb-1 tracking-wide">
                      {serviceData.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {serviceData.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
