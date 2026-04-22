import Link from "next/link";

export default function ExpatDeFiLandingPage() {
  const services = [
    {
      title: "Stratégie d'Expatriation & Cadre Fiscal International",
      description:
        "Optimisation de la résidence fiscale, structuration patrimoniale et sécurisation de chaque étape —\nde l’installation au retour.",
      tag: "Mobilité internationale",
    },
    {
      title: "Pilotage Patrimonial en France et à l'International",
      description:
        "Tableaux de bord, scénarios, cartographie des actifs et aide à la décision pour profils mobiles et entrepreneurs.",
      tag: "Allocation d'Actifs",
    },
    {
      title: "Transmission d'Entreprise",
      description:
        "Vision d’ensemble sur la cession, la transmission, l’articulation entre patrimoine privé et professionnel, avec la coordination d'experts.",
      tag: "Patrimoine Professionnel",
    },
    {
      title: "Lecture stratégique de la DeFi",
      description:
        "Accompagnement pédagogique sur les stablecoins, flux et conservation sécurisée, risques opérationnels et usages pertinents des crypto-actifs.",
      tag: "Finance décentralisée",
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
      a: "Le site présente un accompagnement de conseil stratégique et pédagogique. Les produits réglementés, actes juridiques, recommandations personnalisées d'investissement ou prestations réservées à des professions encadrées doivent être réalisés dans le cadre des statuts, agréments et partenariats adaptés.",
    },
    {
      q: "À qui s'adresse ce service ?",
      a: "Aux cadres, entrepreneurs, indépendants, familles internationales et profils exposés à des sujets patrimoniaux transfrontaliers ou aux nouveaux usages financiers numériques.",
    },
    {
      q: "La DeFi est-elle abordée sous un angle spéculatif ?",
      a: "Non. Le positionnement ici est avant tout stratégique, pédagogique et orienté compréhension des risques, de la conservation, des flux et des usages pertinents.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#F4F7FB,#FFFFFF)] shadow-sm ring-1 ring-[#F4D000]/20">
              <img
                src="/images/logo-proxfi.png"
                alt="Logo Proxfi"
                className="h-full w-full object-cover"
              />
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
            <a href="#services" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              Services
            </a>
            <a href="/simulateur" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              Simulateur
            </a>
            <a href="#method" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              Méthode
            </a>
            <a href="#faq" className="text-sm text-slate-600 transition hover:text-[#0F5DB8]">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#08122E] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(8,18,46,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F5DB8]"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-16 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-10">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Décidez mieux, optimisez plus, évitez les erreurs coûteuses
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
                Une approche claire pour vos projets d&apos;expatriation et vos enjeux patrimoniaux nouvelle génération.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Nous aidons les profils exigeants à structurer leurs décisions en France et à l&apos;international, à clarifier leurs flux, à comprendre les usages de la finance décentralisée et à agir avec méthode.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#0F5DB8] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
                >
                  Demander un diagnostic
                </a>

                <a
                  href="/simulateur"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-[#5FAE7B]/40 hover:bg-[#F8FBFF]"
                >
                  Tester le simulateur
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
                {[
                  ["International", "vision transfrontalière"],
                  ["Pédagogique", "sans jargon inutile"],
                  ["Structuré", "orienté décision"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-lg font-semibold tracking-tight text-[#08122E]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-xl gap-5">
                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Exemple de mission</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#08122E]">
                        Départ à Lisbonne ou Dubaï
                      </h3>
                    </div>

                    <div className="rounded-full bg-[#5FAE7B]/18 px-3 py-1 text-sm font-medium text-[#2E7A52]">
                      Analyse prioritaire
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Résidence fiscale et calendrier de bascule",
                      "Comptes, flux internationaux et conservation des actifs",
                      "Lecture des usages crypto et des risques de custody",
                      "Mise en relation avec fiscalistes, avocats ou experts-comptables",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F5DB8]" />
                        <p className="text-sm leading-6 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-slate-200 bg-[#08122E] p-6 text-white shadow-sm">
                    <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)]" />
                    <p className="text-sm text-slate-300">Positionnement</p>
                    <p className="mt-2 text-xl font-semibold">Fintech Premium</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Une esthétique moderne, une expérience fluide et un discours rassurant, inspirés des meilleurs standards SaaS.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)] opacity-80" />
                    <p className="text-sm text-slate-500">Promesse</p>
                    <p className="mt-2 text-xl font-semibold text-[#08122E]">
                      Décider avec plus de clarté
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Hiérarchiser les choix, réduire les angles morts et avancer avec une vraie feuille de route.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#0F5DB8]">Offre</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
              Une offre pensée pour l&apos;expatriation, la structuration patrimoniale et la compréhension des nouveaux actifs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0F5DB8]/20 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-[#0F5DB8]/8 px-3 py-1 text-xs font-medium text-[#0F5DB8]">
                  {service.tag}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#08122E]">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-[32ch] whitespace-pre-line text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 text-sm font-medium text-[#0F5DB8] transition group-hover:text-[#0C4E9B]">
                  Découvrir
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-medium text-[#0F5DB8]">
                Positionnement légalement propre
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Un discours clair, rassurant et compatible avec un cadre de conseil stratégique.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Le site met l&apos;accent sur la pédagogie, la structuration, l&apos;analyse de scénarios et la coordination d&apos;experts, plutôt que sur la vente directe de produits ou de promesses de rendement.
              </p>
            </div>

            <div className="grid gap-5">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#08122E]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="border-y border-slate-200 bg-[#FCFDFE]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0F5DB8]">Méthode</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Une expérience inspirée des meilleurs standards SaaS premium.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <Link
                  key={item.step}
                  href="/methode"
                  className="rounded-[28px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#5FAE7B]/30 hover:shadow-xl"
                >
                  <div className="text-sm font-semibold text-[#0F5DB8]">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#08122E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0F5DB8]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
              Les questions clés avant de lancer ce type d&apos;offre.
            </h2>
          </div>

          <div className="mt-12 grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#08122E]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-[#08122E] px-8 py-12 text-white sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-[#B8D7FF]">Parlons de votre projet</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Une première conversation pour cadrer vos enjeux et vos priorités.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Positionnement premium, ton rassurant, expérience claire et architecture prête à être déployée sur Vercel.
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
                <button className="rounded-full bg-[#F4D000] px-6 py-3 text-sm font-medium text-[#08122E] transition hover:-translate-y-0.5 hover:bg-[#E5C300] hover:shadow-lg">
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
            <a href="#" className="hover:text-[#08122E]">
              Mentions légales
            </a>
            <Link href="/a-propos" className="hover:text-[#08122E]">
              À propos
            </Link>
            <a href="#" className="hover:text-[#08122E]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}