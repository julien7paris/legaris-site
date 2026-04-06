export default function MethodePage() {
  const steps = [
    {
      step: "01",
      title: "Cadrage",
      intro:
        "Comprendre votre situation, vos contraintes, vos objectifs et les zones de risque à arbitrer.",
      details: [
        "Analyse de votre situation personnelle, familiale, patrimoniale et internationale",
        "Clarification des objectifs à court, moyen et long terme",
        "Identification des contraintes de calendrier, de résidence fiscale, de mobilité et de structuration",
        "Repérage des angles morts avant toute prise de décision",
      ],
    },
    {
      step: "02",
      title: "Scénarios",
      intro:
        "Comparer plusieurs options d'expatriation, de structuration et de gestion des flux internationaux.",
      details: [
        "Mise en perspective de plusieurs trajectoires possibles",
        "Comparaison des avantages, limites, risques et points d'attention",
        "Lecture structurée des impacts patrimoniaux, fiscaux et organisationnels",
        "Hiérarchisation des options selon votre profil et votre niveau de complexité",
      ],
    },
    {
      step: "03",
      title: "Mise en action",
      intro:
        "Formaliser une feuille de route et coordonner les interlocuteurs nécessaires à l'exécution.",
      details: [
        "Définition d'un plan d'action concret et séquencé",
        "Priorisation des étapes à lancer immédiatement",
        "Coordination avec les bons interlocuteurs lorsque nécessaire",
        "Transformation d'une situation complexe en feuille de route claire",
      ],
    },
  ];

  const principles = [
    {
      title: "Clarté avant sophistication",
      text: "Nous privilégions une lecture simple, structurée et intelligible des enjeux avant toute complexification inutile.",
    },
    {
      title: "Décision avant exécution",
      text: "L'objectif premier est de vous aider à arbitrer les bonnes options, au bon moment, avec un niveau de lisibilité élevé.",
    },
    {
      title: "Coordination plutôt que dispersion",
      text: "Lorsque plusieurs sujets se croisent, la méthode sert à remettre de l'ordre, de la cohérence et une logique de séquençage.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-semibold">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Proxfi</p>
              <p className="text-xs text-slate-500">
                Expatriation • Allocation d'Actifs • Transmission Entreprise • DeFi Crypto
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="/" className="text-sm text-slate-600 hover:text-slate-950">
              Accueil
            </a>
            <a
              href="/simulateur"
              className="text-sm text-slate-600 hover:text-slate-950"
            >
              Simulateur
            </a>
            <a
              href="/methode"
              className="text-sm text-slate-900 font-medium"
            >
              Méthode
            </a>
          </nav>

          <a
            href="/#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="border-b border-slate-100 bg-[linear-gradient(to_bottom,white,rgba(248,250,252,0.7))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-indigo-700">Méthode</p>

              <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Une méthode conçue pour transformer la complexité en décisions lisibles.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Notre approche repose sur trois temps : comprendre, comparer,
                puis structurer l'action. L'objectif est de vous permettre
                d'avancer avec clarté, cohérence et maîtrise.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="text-sm font-semibold text-indigo-700">
                  {item.step}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.intro}
                </p>

                <div className="mt-6 space-y-4">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-4">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-600" />
                      <p className="text-sm leading-7 text-slate-700">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRINCIPES */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-medium text-indigo-700">
                  Philosophie
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Une approche premium, structurée et orientée décision.
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Nous intervenons sur des sujets complexes mêlant mobilité,
                  fiscalité, patrimoine et structuration internationale.
                  La méthode sert à remettre de l'ordre et à construire une
                  feuille de route claire.
                </p>
              </div>

              <div className="grid gap-5">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[36px] bg-slate-950 px-8 py-12 text-white sm:px-12 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-indigo-300">
                  Passer à l'étape suivante
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Une première conversation pour cadrer vos enjeux.
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  Chaque projet commence par un bon cadrage. C’est là que se
                  joue la qualité des décisions à venir.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/simulateur"
                  className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Tester le simulateur
                </a>

                <a
                  href="/#contact"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Réserver un échange
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}