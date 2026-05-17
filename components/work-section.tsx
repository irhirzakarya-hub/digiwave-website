"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Settings,
  Film,
  Globe,
  Megaphone,
  TrendingUp,
  Users,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  PenTool,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { designProjects, type DesignProject } from "@/data/design-projects";

type FilterKey =
  | "all"
  | "design"
  | "automation"
  | "video"
  | "web"
  | "ads"
  | "boost"
  | "management";

const filterIcons: Record<FilterKey, typeof Palette | null> = {
  all: null,
  design: Palette,
  automation: Settings,
  video: Film,
  web: Globe,
  ads: Megaphone,
  boost: TrendingUp,
  management: Users,
};

const projects = [
  // Automation projects
  {
    id: 4,
    category: "automation",
    title: {
      fr: "Bot de Ventes",
      en: "Sales Bot",
      ar: "روبوت مبيعات",
    },
    description: {
      fr: "Automatisation CRM",
      en: "CRM automation",
      ar: "أتمتة إدارة العملاء",
    },
  },
  {
    id: 5,
    category: "automation",
    title: {
      fr: "Workflow Marketing",
      en: "Marketing Workflow",
      ar: "سير عمل التسويق",
    },
    description: {
      fr: "Emails automatisés",
      en: "Automated emails",
      ar: "بريد إلكتروني آلي",
    },
  },
  {
    id: 6,
    category: "automation",
    title: {
      fr: "Intégration API",
      en: "API Integration",
      ar: "تكامل واجهات برمجية",
    },
    description: {
      fr: "Connexion systèmes",
      en: "Systems connection",
      ar: "ربط الأنظمة",
    },
  },
  // Video projects
  {
    id: 7,
    category: "video",
    title: {
      fr: "Vidéo Corporative",
      en: "Corporate Video",
      ar: "فيديو شركات",
    },
    description: {
      fr: "Production pro",
      en: "Pro production",
      ar: "إنتاج احترافي",
    },
  },
  {
    id: 8,
    category: "video",
    title: {
      fr: "Spot Publicitaire",
      en: "Ad Spot",
      ar: "إعلان تجاري",
    },
    description: {
      fr: "15 secondes impact",
      en: "15 seconds impact",
      ar: "15 ثانية مؤثرة",
    },
  },
  {
    id: 9,
    category: "video",
    title: {
      fr: "Motion Design",
      en: "Motion Design",
      ar: "تصميم متحرك",
    },
    description: {
      fr: "Animation créative",
      en: "Creative animation",
      ar: "رسوم متحركة إبداعية",
    },
  },
  // Web projects
  {
    id: 10,
    category: "web",
    title: {
      fr: "Site E-commerce",
      en: "E-commerce Site",
      ar: "موقع تجارة إلكترونية",
    },
    description: {
      fr: "Boutique en ligne",
      en: "Online store",
      ar: "متجر إلكتروني",
    },
  },
  {
    id: 11,
    category: "web",
    title: {
      fr: "Portfolio Créatif",
      en: "Creative Portfolio",
      ar: "محفظة إبداعية",
    },
    description: {
      fr: "Site vitrine",
      en: "Showcase site",
      ar: "موقع عرض",
    },
  },
  {
    id: 12,
    category: "web",
    title: {
      fr: "Application Web",
      en: "Web Application",
      ar: "تطبيق ويب",
    },
    description: {
      fr: "SaaS moderne",
      en: "Modern SaaS",
      ar: "خدمة سحابية حديثة",
    },
  },
  // Ads projects
  {
    id: 13,
    category: "ads",
    title: {
      fr: "Campagne Facebook",
      en: "Facebook Campaign",
      ar: "حملة فيسبوك",
    },
    description: {
      fr: "ROI optimisé",
      en: "Optimized ROI",
      ar: "عائد استثمار محسن",
    },
  },
  {
    id: 14,
    category: "ads",
    title: {
      fr: "Google Ads Pro",
      en: "Google Ads Pro",
      ar: "إعلانات جوجل",
    },
    description: {
      fr: "Conversion max",
      en: "Max conversion",
      ar: "تحويل أقصى",
    },
  },
  {
    id: 15,
    category: "ads",
    title: {
      fr: "Instagram Ads",
      en: "Instagram Ads",
      ar: "إعلانات إنستغرام",
    },
    description: {
      fr: "Visibilité accrue",
      en: "Increased visibility",
      ar: "رؤية متزايدة",
    },
  },
  // Boost projects
  {
    id: 16,
    category: "boost",
    title: {
      fr: "Boost Page Pro",
      en: "Pro Page Boost",
      ar: "تعزيز صفحة احترافي",
    },
    description: {
      fr: "+500% reach",
      en: "+500% reach",
      ar: "+500% وصول",
    },
  },
  {
    id: 17,
    category: "boost",
    title: {
      fr: "Engagement Max",
      en: "Max Engagement",
      ar: "تفاعل أقصى",
    },
    description: {
      fr: "Stratégie virale",
      en: "Viral strategy",
      ar: "استراتيجية فيروسية",
    },
  },
  {
    id: 18,
    category: "boost",
    title: {
      fr: "Croissance Organique",
      en: "Organic Growth",
      ar: "نمو عضوي",
    },
    description: {
      fr: "Followers réels",
      en: "Real followers",
      ar: "متابعون حقيقيون",
    },
  },
  // Management projects
  {
    id: 19,
    category: "management",
    title: {
      fr: "Community Management",
      en: "Community Management",
      ar: "إدارة المجتمع",
    },
    description: {
      fr: "Engagement quotidien",
      en: "Daily engagement",
      ar: "تفاعل يومي",
    },
  },
  {
    id: 20,
    category: "management",
    title: {
      fr: "Calendrier Editorial",
      en: "Editorial Calendar",
      ar: "تقويم تحريري",
    },
    description: {
      fr: "Planification pro",
      en: "Pro planning",
      ar: "تخطيط احترافي",
    },
  },
  {
    id: 21,
    category: "management",
    title: {
      fr: "Modération Pro",
      en: "Pro Moderation",
      ar: "إشراف احترافي",
    },
    description: {
      fr: "Réponses 24/7",
      en: "24/7 responses",
      ar: "ردود على مدار الساعة",
    },
  },
];

// PDF Modal Component with robust viewer and fallback
function PDFModal({
  isOpen,
  onClose,
  project,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: DesignProject | null;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const { language } = useLanguage();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(2, 8, 16, 0.95)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90vw] h-[85vh] max-w-6xl bg-background/50 glass rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-background to-transparent">
              <h3 className="text-lg font-bold text-foreground truncate pr-4">
                {project.title[language]}
              </h3>
              <div className="flex items-center gap-2">
                {/* Download Button */}
                <a
                  href={project.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-bold border border-primary/40"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </a>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer with Fallback */}
            <div className="w-full h-full pt-16 pb-4 px-4">
              <object
                data={project.pdfUrl}
                type="application/pdf"
                className="w-full h-full rounded-lg bg-white"
              >
                <embed
                  src={project.pdfUrl}
                  type="application/pdf"
                  className="w-full h-full rounded-lg"
                />
                <div className="w-full h-full flex flex-col items-center justify-center bg-muted rounded-lg">
                  <FileText className="w-16 h-16 text-primary/50 mb-4" />
                  <p className="text-muted-foreground mb-4 text-center px-4">
                    Le PDF ne peut pas être affiché dans le navigateur.
                  </p>
                  <a
                    href={project.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:neon-glow transition-all duration-300"
                  >
                    Cliquez ici pour télécharger
                  </a>
                </div>
              </object>
            </div>

            {/* Navigation Arrows */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Design Project Card
function DesignProjectCard({
  project,
  onClick,
}: {
  project: DesignProject;
  onClick: () => void;
}) {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl glass cursor-pointer neon-border"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Placeholder with PDF Badge */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex flex-col items-center justify-center gap-3">
        {/* Design Icon */}
        <div className="relative">
          <Palette className="w-12 h-12 text-primary/40" />
          <PenTool className="w-6 h-6 text-primary/60 absolute -bottom-1 -right-1" />
        </div>

        {/* PDF Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary tracking-wider">
            PDF
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="flex items-center gap-2 text-primary font-bold text-sm">
            Voir le PDF
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-foreground mb-1">
          {project.title[language]}
        </h3>
        <p className="text-sm text-muted-foreground">
          {project.description[language]}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export function WorkSection() {
  const { t, language, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  // PDF Modal State
  const [selectedPdfIndex, setSelectedPdfIndex] = useState<number | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const filters: FilterKey[] = [
    "all",
    "design",
    "automation",
    "video",
    "web",
    "ads",
    "boost",
    "management",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // PDF Modal handlers
  const openPdfModal = (index: number) => {
    setSelectedPdfIndex(index);
    setIsPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
    setSelectedPdfIndex(null);
  };

  const goToPrevPdf = () => {
    if (selectedPdfIndex !== null && selectedPdfIndex > 0) {
      setSelectedPdfIndex(selectedPdfIndex - 1);
    }
  };

  const goToNextPdf = () => {
    if (selectedPdfIndex !== null && selectedPdfIndex < designProjects.length - 1) {
      setSelectedPdfIndex(selectedPdfIndex + 1);
    }
  };

  // Render Design PDF Gallery
  const renderDesignGallery = () => (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {designProjects.map((project, index) => (
          <DesignProjectCard
            key={project.id}
            project={project}
            onClick={() => openPdfModal(index)}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );

  // Render Other Projects Grid
  const renderProjectsGrid = () => (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => {
          const Icon = filterIcons[project.category as FilterKey];
          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl glass cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center">
                {Icon && <Icon className="w-16 h-16 text-primary/30" />}

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="flex items-center gap-2 text-primary font-bold text-sm">
                    {t.work.viewProject}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-foreground">
                    {project.title[language]}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                    {t.work.filters[project.category as FilterKey]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description[language]}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <>
      <section
        id="work"
        className={`py-20 md:py-32 bg-[#050d1a] ${isRTL ? "rtl" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4">
              {t.work.overline}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-orbitron)]">
              {t.work.title}
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "border border-border text-silver hover:border-primary hover:text-primary"
                }`}
              >
                {t.work.filters[filter]}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - Show Design Gallery or Other Projects */}
          {activeFilter === "design"
            ? renderDesignGallery()
            : renderProjectsGrid()}
        </div>
      </section>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPdfModalOpen}
        onClose={closePdfModal}
        project={selectedPdfIndex !== null ? designProjects[selectedPdfIndex] : null}
        onPrev={goToPrevPdf}
        onNext={goToNextPdf}
        hasPrev={selectedPdfIndex !== null && selectedPdfIndex > 0}
        hasNext={selectedPdfIndex !== null && selectedPdfIndex < designProjects.length - 1}
      />
    </>
  );
}
