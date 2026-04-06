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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              P
            </div>
            <div>
              <p className="text-sm font-semibold">Proxfi</p>
              <p className="text-xs text-slate-500">Expatriation • Allocation d'Actifs • Transmission Entreprise • DeFi Crypto</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-slate-600 transition hover:text-slate-950">
              Accueil
            </Link>
            <Link
              href="/simulateur"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              Simulateur
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium text-slate-950"
            >
              À propos
            </Link>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,white,rgba(248,250,252,0.7))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.10),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.05),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-14">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                Une approche stratégique, pédagogique et premium
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Une autre manière d&apos;aborder l&apos;expatriation, le patrimoine et les nouveaux usages financiers.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Proxfi est né d&apos;une conviction simple : les sujets patrimoniaux
                internationaux méritent une lecture plus claire, plus structurée et plus
                rassurante, à la hauteur des enjeux réels de clients exigeants.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Ici, l&apos;objectif n&apos;est pas de pousser des produits, mais d&apos;aider à
                comprendre, hiérarchiser, structurer et décider avec davantage de recul.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Échanger sur votre situation
                </a>
                <Link
                  href="/simulateur"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Tester le simulateur
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-xl gap-5">
                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                  <div className="absolute inset-0">
                    <img
                      src="/images/bg-finance.jpg"
                      alt=""
                      className="h-full w-full object-cover opacity-50"
                    />
                  </div>

                  <div className="relative z-10">
                    <p className="text-sm text-slate-700">Positionnement</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                      Stratégie avant produit
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-800">
                      Proxfi privilégie une logique de cadrage, de compréhension et de structuration.
                      L&apos;approche repose sur la pédagogie, la vision d&apos;ensemble et la coordination
                      des expertises nécessaires lorsque la situation le requiert.
                    </p>

                    <div className="mt-8 grid gap-4">
                      {[
                        "Vision transfrontalière",
                        "Approche premium et rassurante",
                        "Lecture stratégique de la DeFi",
                        "Coordination avec des experts réglementés",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur"
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                          <p className="text-sm text-slate-800">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                    <p className="text-sm text-slate-300">Promesse</p>
                    <p className="mt-2 text-xl font-semibold">Décider avec plus de clarté</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Réduire les angles morts, mieux comprendre les impacts et avancer avec méthode.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">Style</p>
                    <p className="mt-2 text-xl font-semibold">Lisible et haut de gamme</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Un ton sobre, premium, structuré et orienté confiance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-medium text-indigo-700">La vision</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Un cabinet pensé pour les trajectoires internationales et les enjeux patrimoniaux contemporains.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Les décisions liées à l&apos;expatriation, aux flux internationaux, à la
                structuration patrimoniale et aux actifs digitaux ne peuvent pas être
                traitées sérieusement avec des réponses génériques ou une logique purement
                commerciale.
              </p>
              <p>
                Proxfi propose une lecture plus stratégique : comprendre les
                conséquences d&apos;un choix de pays, l&apos;impact d&apos;un calendrier, les enjeux de
                résidence fiscale, les questions de conservation, les flux, la traçabilité
                et la cohérence d&apos;ensemble.
              </p>
              <p>
                L&apos;ambition est d&apos;offrir une expérience plus lisible, plus premium et plus
                moderne, inspirée des meilleurs standards digitaux, tout en conservant la
                profondeur nécessaire à des décisions patrimoniales sérieuses.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-medium text-indigo-700">Ce qui guide l&apos;approche</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Des principes simples, mais exigeants.
              </h2>
            </div>

            <div className="grid gap-5">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-medium text-indigo-700">Pour qui</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Une offre conçue pour des profils qui ont besoin de hauteur de vue.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Le service s&apos;adresse à celles et ceux qui cherchent une lecture plus
                  structurée et plus sereine de leur situation patrimoniale internationale.
                </p>
              </div>

              <div className="grid gap-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-600" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-indigo-700">La méthode</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une approche structurée, orientée décision.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {method.map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-sm font-semibold text-indigo-700">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-medium text-indigo-700">Fondatrice</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Une culture de l&apos;analyse, de la rigueur et de la compréhension des systèmes complexes.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Proxfi s&apos;inscrit dans une démarche exigeante, nourrie par un
                parcours ancré dans l&apos;analyse, la structuration et la compréhension de
                sujets techniques complexes.
              </p>
              <p>
                Cette culture de rigueur se retrouve dans la manière d&apos;aborder les enjeux
                patrimoniaux : poser les bonnes questions, clarifier les mécanismes,
                hiérarchiser les risques et construire des décisions plus cohérentes.
              </p>
              <p>
                L&apos;objectif n&apos;est pas de simplifier à outrance, mais de rendre lisible ce
                qui est souvent dispersé, opaque ou mal expliqué.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-medium text-indigo-700">Cadre</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Une approche stratégique et pédagogique, dans un cadre clair.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Les contenus et échanges proposés sur le site relèvent d&apos;une démarche de
              conseil stratégique, pédagogique et de structuration. Les actes réglementés,
              recommandations personnalisées d&apos;investissement, consultations juridiques,
              actes fiscaux ou prestations réservées à des professions encadrées doivent
              être réalisés dans le cadre des statuts, agréments et partenariats adaptés.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[36px] bg-slate-950 px-8 py-12 text-white sm:px-12 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-indigo-300">Parlons de votre projet</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Une première conversation pour cadrer vos enjeux et vos priorités.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Une approche claire, premium et structurée pour mieux comprendre votre
                  situation et identifier les prochaines étapes utiles.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
                />
                <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg">
                  Être recontacté
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Proxfi. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-800">
              Mentions légales
            </Link>
            <Link href="/a-propos" className="hover:text-slate-800">
              À propos
            </Link>
            <a href="#contact" className="hover:text-slate-800">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}