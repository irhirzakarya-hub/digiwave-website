"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import type { Language } from "@/context/translations";
import { Button } from "@/components/ui/button";

const languages: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="DIGIWAVE Logo"
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.05)" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-silver hover:text-primary transition-colors duration-300 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Pills */}
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-full glass">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? "bg-primary text-primary-foreground neon-glow"
                      : "text-silver hover:text-primary"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-silver hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-4 border-t border-border/50">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-semibold text-silver hover:text-primary transition-colors duration-300 block py-2 uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground neon-glow"
                          : "text-silver border border-border hover:border-primary"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
