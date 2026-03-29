export default function MethodePage() {
  const steps = [
    {
      step: "01",
      title: "Cadrage",
      intro: "Comprendre votre situation, vos contraintes, vos objectifs et les zones de risque à arbitrer.",
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
      intro: "Comparer plusieurs options d'expatriation, de structuration et de gestion des flux internationaux.",
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
      intro: "Formaliser une feuille de route et coordonner les interlocuteurs nécessaires à l'exécution.",
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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
              H
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Legaris Advisory</p>
              <p className="text-xs text-slate-500">Expatriation • Patrimoine • DeFi</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="/" className="text-sm text-slate-600 transition hover:text-slate-950">
              Accueil
            </a>
            <a href="/simulateur" className="text-sm text-slate-600 transition hover:text-slate-950">
              Simulateur
            </a>
            <a href="/methode" className="text-sm text-slate-900 transition hover:text-slate-950">
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

      <main>
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,white,rgba(248,250,252,0.7))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.04),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-indigo-700">Méthode</p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Une méthode conçue pour transformer la complexité en décisions lisibles.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Notre approche repose sur trois temps : comprendre, comparer, puis structurer
                l'action. L'objectif n'est pas d'ajouter du jargon ou de la confusion, mais de
                vous aider à avancer avec plus de clarté, de cohérence et de maîtrise.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-indigo-700">Les 3 étapes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un parcours simple en apparence, exigeant dans sa construction.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="text-sm font-semibold text-indigo-700">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.intro}</p>

                <div className="mt-6 space-y-3">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                      <p className="text-sm leading-6 text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-medium text-indigo-700">Philosophie</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Une approche premium, structurée et orientée décision.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Nous traitons des sujets souvent transversaux : mobilité internationale,
                  patrimoine, fiscalité, structuration, flux ou nouveaux usages financiers.
                  La méthode sert à remettre de l'ordre, à hiérarchiser et à faire émerger une
                  feuille de route crédible.
                </p>
              </div>

              <div className="grid gap-5">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[36px] bg-slate-950 px-8 py-12 text-white sm:px-12 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-indigo-300">Passer à l'étape suivante</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Une première conversation pour cadrer vos enjeux et vos priorités.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Que votre sujet porte sur une expatriation, une structuration patrimoniale
                  internationale ou une lecture plus stratégique de vos flux, la méthode commence
                  toujours par un bon cadrage.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Legaris Advisory. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800">Mentions légales</a>
            <a href="#" className="hover:text-slate-800">Confidentialité</a>
            <a href="/#contact" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}