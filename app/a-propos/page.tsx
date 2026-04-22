import Link from "next/link";

export default function AProposPage() {
  const values = [
    {
      title: "Clarté",
      text: "Rendre lisibles des sujets complexes, hiérarchiser les décisions et réduire les zones d'incertitude.",
    },
    {
      title: "Exigence",
      text: "Une approche rigoureuse, structurée et haut de gamme.",
    },
    {
      title: "Indépendance",
      text: "Une logique d’analyse avant toute recommandation produit.",
    },
  ];

  const audience = [
    "Cadres et profils internationaux",
    "Entrepreneurs et indépendants",
    "Familles en expatriation",
    "Profils avec flux internationaux",
    "Investisseurs intéressés par la DeFi",
  ];

  const method = [
    {
      step: "01",
      title: "Comprendre",
      text: "Analyser votre situation et vos enjeux.",
    },
    {
      step: "02",
      title: "Structurer",
      text: "Construire une vision cohérente et claire.",
    },
    {
      step: "03",
      title: "Coordonner",
      text: "Mettre en place les bonnes actions avec les bons experts.",
    },
  ];

  const highlights = [
    "Pilotage de la performance",
    "Lecture stratégique du risque",
    "Data & dashboards de décision",
    "Environnements multi-pays",
    "Structuration & coordination",
    "Approche premium et pédagogique",
  ];

  const journey = [
    {
      period: "2019-2026",
      title: "Responsable Performance Management",
      subtitle: "Coface",
      text: "Pilotage de la performance, data quality, reporting, incentives et accompagnement des équipes dans des environnements internationaux complexes.",
      color: "bg-[#0F5DB8]",
      badgeClass: "bg-[#EAF3FF] text-[#0F5DB8]",
    },
    {
      period: "Expérience précédente",
      title: "Management commercial & account management",
      subtitle: "Coface",
      text: "Suivi de portefeuille, fidélisation, analyse de résultats, pilotage d’indicateurs et accompagnement de la transformation commerciale.",
      color: "bg-[#0F5DB8]",
      badgeClass: "bg-[#EAF3FF] text-[#0F5DB8]",
    },
    {
      period: "Fondations",
      title: "Management, développement commercial & conduite du changement",
      subtitle: "Malakoff Humanis",
      text: "Animation d’équipes, croissance, structuration d’activité, coordination transverse et culture forte du résultat.",
      color: "bg-[#5FAE7B]",
      badgeClass: "bg-[#EAF8EF] text-[#3E8D5C]",
    },
  ];

  const expertiseCards = [
    "Pilotage de la performance",
    "Lecture stratégique du risque",
    "Data & dashboards de décision",
    "Environnements multi-pays",
    "Structuration & coordination",
    "Approche premium et pédagogique",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08122E] text-white shadow-sm ring-1 ring-[#F4D000]/20">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-[#08122E]">Proxfi</p>
              <p className="text-xs text-slate-500">
                Expatriation • Allocation d&apos;Actifs • Transmission Entreprise • DeFi Crypto
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              Accueil
            </Link>
            <Link href="/simulateur" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              Simulateur
            </Link>
            <Link href="/a-propos" className="text-sm font-medium text-[#0F5DB8]">
              À propos
            </Link>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#08122E] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(8,18,46,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F5DB8]"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      <main>
        {/* ... tout ton contenu inchangé ... */}

        {/* 🔥 SEULE MODIF ICI */}
        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              
              {/* LOGO PROXFI */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA] shadow-inner">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                  <img
                    src="/images/logo-proxfi.png"
                    alt="Logo Proxfi"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                  Cadre d&apos;intervention
                </h2>
                <p className="mt-3 max-w-5xl text-base leading-8 text-slate-600">
                  Les contenus et échanges proposés sur le site relèvent d&apos;une démarche de
                  conseil stratégique, pédagogique et de structuration. Les actes réglementés,
                  recommandations personnalisées d&apos;investissement, consultations juridiques,
                  actes fiscaux ou prestations réservées à des professions encadrées doivent
                  être réalisés dans le cadre des statuts, agréments et partenariats adaptés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ... reste inchangé */}
      </main>
    </div>
  );
}