"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { Facebook, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  const socialLinks = [
    {
      icon: "facebook" as const,
      href: "https://www.facebook.com/share/1Ev7aB8kGC/",
      label: "Facebook",
    },
    {
      icon: "whatsapp" as const,
      href: "https://wa.me/212624386682",
      label: "WhatsApp",
    },
    {
      icon: "instagram" as const,
      href: "https://instagram.com/digiwave",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className={`relative border-t border-primary/20 ${isRTL ? "rtl" : ""}`}
      style={{ backgroundColor: "rgba(2,8,16,0.85)" }}
    >
      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Tagline */}
          <Link href="/" className="group">
            <Image
              src="/images/logo.png"
              alt="DIGIWAVE Logo"
              width={160}
              height={60}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.05)" }}
            />
          </Link>
          <p className="text-muted-foreground text-sm tracking-wide">
            {t.footer.tagline}
          </p>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-silver hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass hover:neon-glow text-silver hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon === "facebook" && <Facebook className="w-5 h-5" />}
                {social.icon === "whatsapp" && <WhatsAppIcon size={20} />}
                {social.icon === "instagram" && <Instagram className="w-5 h-5" />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30 w-full text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DIGIWAVE. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
