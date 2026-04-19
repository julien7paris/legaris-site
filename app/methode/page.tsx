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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08122E] text-sm font-semibold text-white shadow-sm ring-1 ring-[#F4D000]/20">
              P
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-[#08122E]">
                Proxfi
              </p>
              <p className="text-xs text-slate-500">
                Expatriation • Allocation d&apos;Actifs • Transmission Entreprise • DeFi Crypto
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-slate-600 transition hover:text-[#0F5DB8]"
            >
              Accueil
            </a>
            <a
              href="/simulateur"
              className="text-sm text-slate-600 transition hover:text-[#0F5DB8]"
            >
              Simulateur
            </a>
            <a
              href="/methode"
              className="text-sm font-medium text-[#08122E]"
            >
              Méthode
            </a>
          </nav>

          <a
            href="/#contact"
            className="rounded-full bg-[#08122E] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(8,18,46,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F5DB8]"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Méthode
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
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
                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#5FAE7B]/30 hover:shadow-xl"
              >
                <div className="text-sm font-semibold text-[#0F5DB8]">
                  {item.step}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#08122E]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.intro}
                </p>

                <div className="mt-6 space-y-4">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F5DB8]" />
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
        <section className="border-y border-slate-200 bg-[#FCFDFE]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-medium text-[#0F5DB8]">
                  Philosophie
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
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
                    <h3 className="text-lg font-semibold text-[#08122E]">
                      {item.title}
                    </h3>
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
          <div className="relative overflow-hidden rounded-[36px] bg-[#08122E] px-8 py-12 text-white sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-[#B8D7FF]">
                  Passer à l&apos;étape suivante
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
                  className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Tester le simulateur
                </a>

                <a
                  href="/#contact"
                  className="rounded-full bg-[#F4D000] px-6 py-3 text-center text-sm font-medium text-[#08122E] transition hover:-translate-y-0.5 hover:bg-[#E5C300] hover:shadow-lg"
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