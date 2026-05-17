export interface DesignProject {
  id: number;
  title: string;
  client: string;
  type: string;
  description: string;
  pdfUrl: string;
  color: string;
}

export const designProjects: DesignProject[] = [
  // ── LAHCEN HMMOUCH ──────────────────────────────
  {
    id: 1,
    title: "Carte de visite — Recto",
    client: "Lahcen Hmmouch",
    type: "Carte de visite",
    description:
      "Carte professionnelle Social Media Marketer, design noir et or avec monogramme LH.",
    pdfUrl: "/projects/design/lahcen-card-front.pdf",
    color: "from-yellow-900 to-yellow-600",
  },
  {
    id: 2,
    title: "Carte de visite — Verso",
    client: "Lahcen Hmmouch",
    type: "Carte de visite",
    description:
      "Verso de la carte avec QR code WhatsApp et coordonnées complètes.",
    pdfUrl: "/projects/design/lahcen-card-back.pdf",
    color: "from-yellow-900 to-yellow-600",
  },

  // ── TABLIYA RESTAURANT ──────────────────────────
  {
    id: 3,
    title: "Carte de visite — Version 1",
    client: "Tabliya — مطعم طبلية",
    type: "Carte de visite",
    description:
      "Carte créative pour restaurant marocain, style moderne et chaleureux.",
    pdfUrl: "/projects/design/tabliya-card-1.pdf",
    color: "from-orange-900 to-orange-600",
  },
  {
    id: 4,
    title: "Carte de visite — Version 2",
    client: "Tabliya — مطعم طبلية",
    type: "Carte de visite",
    description:
      "Variante avec mise en page revisitée et palette de couleurs ajustée.",
    pdfUrl: "/projects/design/tabliya-card-2.pdf",
    color: "from-orange-900 to-orange-600",
  },
  {
    id: 5,
    title: "Carte de visite — Version 3",
    client: "Tabliya — مطعم طبلية",
    type: "Carte de visite",
    description: "Troisième version avec typographie arabe mise en avant.",
    pdfUrl: "/projects/design/tabliya-card-3.pdf",
    color: "from-orange-900 to-orange-600",
  },
  {
    id: 6,
    title: "Carte de visite — Version 4",
    client: "Tabliya — مطعم طبلية",
    type: "Carte de visite",
    description: "Version finale validée par le client avec logo intégré.",
    pdfUrl: "/projects/design/tabliya-card-4.pdf",
    color: "from-orange-900 to-orange-600",
  },
  {
    id: 7,
    title: "Carte de visite — Version 5",
    client: "Tabliya — مطعم طبلية",
    type: "Carte de visite",
    description: "Version premium avec effets dorés et fond texturé.",
    pdfUrl: "/projects/design/tabliya-card-5.pdf",
    color: "from-orange-900 to-orange-600",
  },

  // ── YENIS CAKE ──────────────────────────────────
  {
    id: 8,
    title: "Logo — Yenis Cake",
    client: "Yenis Cake",
    type: "Logo",
    description:
      "Logo home made élégant sur fond crème pour pâtisserie artisanale.",
    pdfUrl: "/projects/design/yenis-cake-logo.pdf",
    color: "from-red-900 to-red-700",
  },
  {
    id: 9,
    title: "Carte de visite",
    client: "Yenis Cake",
    type: "Carte de visite",
    description:
      "Carte bilingue AR/FR avec QR code et contacts, style marocain traditionnel.",
    pdfUrl: "/projects/design/yenis-cake-card.pdf",
    color: "from-red-900 to-red-700",
  },
  {
    id: 10,
    title: "Flyer promotionnel — Version 1",
    client: "Yenis Cake",
    type: "Flyer",
    description:
      "Flyer avec photos plats traditionnels marocains et infos contact.",
    pdfUrl: "/projects/design/yenis-cake-flyer-1.pdf",
    color: "from-red-900 to-red-700",
  },
  {
    id: 11,
    title: "Flyer promotionnel — Version 2",
    client: "Yenis Cake",
    type: "Flyer",
    description: "Variante avec composition différente et visuels mis à jour.",
    pdfUrl: "/projects/design/yenis-cake-flyer-2.pdf",
    color: "from-red-900 to-red-700",
  },
  {
    id: 12,
    title: "Flyer Événement — Sortie Féminine 17 Mai",
    client: "Yenis Cake",
    type: "Flyer Événement",
    description:
      "Invitation exclusive pour sortie féminine : brunch, thé et DJ Fatiha — 250 DH.",
    pdfUrl: "/projects/design/yenis-cake-event.pdf",
    color: "from-red-900 to-red-700",
  },

  // ── LIVREUR MOHAMED ─────────────────────────────
  {
    id: 13,
    title: "Carte de visite — Livreur",
    client: "Mohamed — Livreur Rabat/Salé",
    type: "Carte de visite",
    description:
      "Carte moderne orange et noir pour livreur indépendant, avec horaires et contacts.",
    pdfUrl: "/projects/design/livreur-card.pdf",
    color: "from-orange-700 to-gray-900",
  },

  // ── ADWAK DARKOM ────────────────────────────────
  {
    id: 14,
    title: "Flyer publicitaire",
    client: "Adwak Darkom — أذواق داركم",
    type: "Flyer",
    description:
      "Flyer rouge pour produits alimentaires marocains traditionnels, livraison à domicile.",
    pdfUrl: "/projects/design/adwak-flyer.pdf",
    color: "from-red-800 to-red-600",
  },
  {
    id: 15,
    title: "Carte de visite",
    client: "Adwak Darkom — أذواق داركم",
    type: "Carte de visite",
    description:
      "Carte bilingue avec logo, services et coordonnées — design traditionnel.",
    pdfUrl: "/projects/design/adwak-card.pdf",
    color: "from-red-800 to-red-600",
  },

  // ── MAKHBAZA COOPERATIVE ────────────────────────
  {
    id: 16,
    title: "Flyer — مخبزة تعاونية (Non validé)",
    client: "Makhbaza Coopérative",
    type: "Flyer",
    description:
      "Flyer boulangerie coopérative — version non validée présentée au client.",
    pdfUrl: "/projects/design/makhbaza-cooperative-flyer.pdf",
    color: "from-amber-800 to-amber-600",
  },
  {
    id: 17,
    title: "Carte de visite — مخبزة تعاونية (Non validé)",
    client: "Makhbaza Coopérative",
    type: "Carte de visite",
    description: "Carte boulangerie version non validée — exploration créative.",
    pdfUrl: "/projects/design/makhbaza-cooperative-card.pdf",
    color: "from-amber-800 to-amber-600",
  },

  // ── MAKHBAZA DATIA ──────────────────────────────
  {
    id: 18,
    title: "Flyer — مخبزة داتية (Validé ✓)",
    client: "Makhbaza Datia",
    type: "Flyer",
    description:
      "Flyer final validé pour boulangerie indépendante — design propre et lisible.",
    pdfUrl: "/projects/design/makhbaza-datia-flyer.pdf",
    color: "from-amber-800 to-amber-600",
  },
  {
    id: 19,
    title: "Carte de visite — مخبزة داتية (Validé ✓)",
    client: "Makhbaza Datia",
    type: "Carte de visite",
    description:
      "Carte de visite finale validée — sobre, efficace et professionnelle.",
    pdfUrl: "/projects/design/makhbaza-datia-card.pdf",
    color: "from-amber-800 to-amber-600",
  },

  // ── BRIGUOS EVENT ───────────────────────────────
  {
    id: 20,
    title: "Flyer événementiel",
    client: "Briguos Event",
    type: "Flyer",
    description:
      "Flyer coloré pour agence événementielle — mariages, anniversaires, fêtes.",
    pdfUrl: "/projects/design/briguos-event-flyer.pdf",
    color: "from-purple-900 to-indigo-700",
  },
  {
    id: 21,
    title: "Carte de visite",
    client: "Briguos Event",
    type: "Carte de visite",
    description: "Carte professionnelle avec logo coloré et contacts complets.",
    pdfUrl: "/projects/design/briguos-event-card.pdf",
    color: "from-purple-900 to-indigo-700",
  },

  // ── DAR ZAHRA KHIYATA ───────────────────────────
  {
    id: 22,
    title: "Carte de visite — Validé ✓",
    client: "Dar Zahra — دار زهراء للخياطة",
    type: "Carte de visite",
    description:
      "Carte élégante pour coopérative de couture traditionnelle et moderne, Salé.",
    pdfUrl: "/projects/design/khiyata-card.pdf",
    color: "from-purple-800 to-purple-600",
  },
  {
    id: 23,
    title: "Flyer — Version 1 (Validé ✓)",
    client: "Dar Zahra — دار زهراء للخياطة",
    type: "Flyer",
    description:
      "Flyer premium avec photos de vêtements et présentation des services.",
    pdfUrl: "/projects/design/khiyata-flyer-1.pdf",
    color: "from-purple-800 to-purple-600",
  },
  {
    id: 24,
    title: "Flyer — Version 2 (Validé ✓)",
    client: "Dar Zahra — دار زهراء للخياطة",
    type: "Flyer",
    description: "Deuxième version du flyer avec mise en page différente.",
    pdfUrl: "/projects/design/khiyata-flyer-2.pdf",
    color: "from-purple-800 to-purple-600",
  },
];
