import Link from "next/link";

export default function ExpatDeFiLandingPage() {
  const services = [
    {
      title: "Stratégie d'expatriation premium",
      description:
        "Choix du pays, calendrier de départ, résidence fiscale, structuration patrimoniale et coordination des étapes clés.",
      tag: "Mobilité internationale",
    },
    {
      title: "Lecture stratégique de la DeFi",
      description:
        "Accompagnement pédagogique sur stablecoins, conservation, flux, risques opérationnels et usages pertinents selon votre profil.",
      tag: "Finance décentralisée",
    },
    {
      title: "Cadre fiscal international & conformité",
      description:
        "Vision d'ensemble sur la traçabilité, les obligations déclaratives et l'articulation avec les experts réglementés.",
      tag: "Clarté & sécurité",
    },
    {
      title: "Pilotage patrimonial international",
      description:
        "Tableaux de bord, scénarios, cartographie des actifs et aide à la décision pour profils mobiles et entrepreneurs.",
      tag: "Suivi stratégique",
    },
  ];

  const pillars = [
    {
      title: "Lisibilité",
      text: "Des sujets complexes présentés avec une logique claire, hiérarchisée et compréhensible.",
    },
    {
      title: "Exigence",
      text: "Une approche haut de gamme pensée pour des clients internationaux, entrepreneurs et profils patrimoniaux sophistiqués.",
    },
    {
      title: "Coordination",
      text: "Nous cadrons la stratégie et travaillons avec les bons partenaires lorsque le sujet nécessite une expertise réglementée.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Cadrage",
      text: "Comprendre votre situation, vos contraintes, vos objectifs et les zones de risque à arbitrer.",
    },
    {
      step: "02",
      title: "Scénarios",
      text: "Comparer plusieurs options d'expatriation, de structuration et de gestion des flux internationaux.",
    },
    {
      step: "03",
      title: "Mise en action",
      text: "Formaliser une feuille de route et coordonner les interlocuteurs nécessaires à l'exécution.",
    },
  ];

  const faqs = [
    {
      q: "Proposez-vous directement des produits financiers ?",
      a: "Le site présente un accompagnement de conseil stratégique et pédagogique.",
    },
    {
      q: "À qui s'adresse ce service ?",
      a: "Aux cadres, entrepreneurs, indépendants, familles internationales.",
    },
    {
      q: "La DeFi est-elle abordée sous un angle spéculatif ?",
      a: "Non. L'approche est pédagogique et orientée compréhension des risques.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              H
            </div>
            <div>
              <p className="text-sm font-semibold">Legaris Advisory</p>
              <p className="text-xs text-slate-500">Expatriation • Patrimoine • DeFi</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-950">
              Services
            </a>
            <Link href="/simulateur" className="text-sm text-slate-600 hover:text-slate-950">
              Simulateur
            </Link>
            <a href="#method" className="text-sm text-slate-600 hover:text-slate-950">
              Méthode
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-950">
              FAQ
            </a>
          </nav>

          <a href="#contact" className="rounded-full bg-slate-900 px-5 py-2.5 text-white">
            Réserver un échange
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h1 className="text-5xl font-semibold">
            Une approche claire pour vos projets d'expatriation.
          </h1>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-full bg-indigo-600 px-6 py-3 text-white">
              Demander un diagnostic
            </a>

            <Link href="/simulateur" className="rounded-full border px-6 py-3">
              Tester le simulateur
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border p-6">
                <p className="text-xs">{service.tag}</p>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MÉTHODE (IMPORTANT) */}
        <section id="method" className="border-y bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold">
              Une expérience inspirée des meilleurs standards SaaS premium.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <Link
                  key={item.step}
                  href="/methode"
                  className="group rounded-2xl border bg-slate-50 p-7 transition hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="text-indigo-700">{item.step}</div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>

                  <div className="mt-4 text-indigo-600">
                    Découvrir la méthode →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="mb-4 border p-4 rounded-xl">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="bg-slate-900 text-white p-10 rounded-3xl">
            <h2 className="text-3xl">Parlons de votre projet</h2>

            <div className="mt-4 flex gap-3">
              <input placeholder="Nom" className="px-4 py-2 rounded-full text-black" />
              <input placeholder="Email" className="px-4 py-2 rounded-full text-black" />
              <button className="bg-white text-black px-4 py-2 rounded-full">
                Envoyer
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}