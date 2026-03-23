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
      title: "Cadre fiscal & conformité",
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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
              H
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Legaris Advisory</p>
              <p className="text-xs text-slate-500">Expatriation • Patrimoine • DeFi</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-600 transition hover:text-slate-950">Services</a>
            <a href="#simulator" className="text-sm text-slate-600 transition hover:text-slate-950">Simulateur</a>
            <a href="#method" className="text-sm text-slate-600 transition hover:text-slate-950">Méthode</a>
            <a href="#faq" className="text-sm text-slate-600 transition hover:text-slate-950">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Réserver un échange
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,white,rgba(248,250,252,0.7))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.10),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.05),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                Conseil premium pour profils internationaux et entrepreneurs mobiles
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Une approche claire pour vos projets d'expatriation et vos enjeux patrimoniaux nouvelle génération.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Nous aidons les profils exigeants à structurer leurs décisions internationales, à clarifier leurs flux, à comprendre les usages de la finance décentralisée et à agir avec méthode.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Demander un diagnostic
                </a>
                <a
                  href="#simulator"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
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
                  <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-lg font-semibold tracking-tight">{value}</p>
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
                      <h3 className="mt-2 text-2xl font-semibold">Départ à Lisbonne ou Dubaï</h3>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      Analyse prioritaire
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      "Résidence fiscale et calendrier de bascule",
                      "Comptes, flux internationaux et conservation des actifs",
                      "Lecture des usages crypto et des risques de custody",
                      "Coordination avec fiscaliste, avocat ou expert-comptable si nécessaire",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                    <p className="text-sm text-slate-300">Positionnement</p>
                    <p className="mt-2 text-xl font-semibold">Fintech premium</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Une esthétique moderne, une expérience fluide et un discours rassurant, inspirés des meilleurs standards SaaS.
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">Promesse</p>
                    <p className="mt-2 text-xl font-semibold">Décider avec plus de clarté</p>
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
            <p className="text-sm font-medium text-indigo-700">Offre</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une offre pensée pour l'expatriation, la structuration patrimoniale et la compréhension des nouveaux actifs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {service.tag}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-6 text-sm font-medium text-indigo-700">Découvrir</div>
              </div>
            ))}
          </div>
        </section>

        <section id="simulator" className="border-y border-slate-200 bg-slate-50/80">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-medium text-indigo-700">Simulateur</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Un mini outil pour qualifier votre situation en quelques minutes.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Cette section donne un aperçu premium du type d'expérience que l'on peut proposer avant un rendez-vous : profil, pays cible, horizon de départ, sensibilité patrimoniale et exposition aux actifs numériques.
              </p>
              <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Restitution attendue</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>• Niveau de complexité de votre projet</li>
                  <li>• Points de vigilance prioritaires</li>
                  <li>• Interlocuteurs à mobiliser</li>
                  <li>• Pertinence d'un accompagnement approfondi</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Votre profil</label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none">
                    <option>Cadre salarié</option>
                    <option>Entrepreneur</option>
                    <option>Indépendant</option>
                    <option>Famille internationale</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Pays cible</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none" placeholder="Ex. Portugal, UAE, Suisse" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Horizon de départ</label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none">
                    <option>0 à 3 mois</option>
                    <option>3 à 12 mois</option>
                    <option>12 mois et plus</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Exposition crypto / DeFi</label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none">
                    <option>Aucune</option>
                    <option>Débutant</option>
                    <option>Intermédiaire</option>
                    <option>Avancé</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">Vos enjeux principaux</label>
                <textarea
                  className="min-h-[130px] w-full rounded-[24px] border border-slate-300 px-4 py-3 text-sm outline-none"
                  placeholder="Fiscalité, transfert de résidence, conservation des actifs, structure patrimoniale, protection familiale, etc."
                />
              </div>

              <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-800">Score indicatif de complexité</p>
                    <p className="mt-1 text-sm text-slate-500">Aperçu UX, non calculé ici côté front</p>
                  </div>
                  <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                    Élevé
                  </div>
                </div>
                <div className="mt-4 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-3/4 rounded-full bg-slate-900" />
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                Recevoir une première lecture
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-medium text-indigo-700">Positionnement légalement propre</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Un discours clair, rassurant et compatible avec un cadre de conseil stratégique.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Le site met l'accent sur la pédagogie, la structuration, l'analyse de scénarios et la coordination d'experts, plutôt que sur la vente directe de produits ou de promesses de rendement.
              </p>
            </div>
            <div className="grid gap-5">
              {pillars.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-indigo-700">Méthode</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Une expérience inspirée des meilleurs standards SaaS premium.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                  <div className="text-sm font-semibold text-indigo-700">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-indigo-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Les questions clés avant de lancer ce type d'offre.
            </h2>
          </div>

          <div className="mt-12 grid gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
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
          <p>© 2026 Legaris Advisory. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800">Mentions légales</a>
            <a href="#" className="hover:text-slate-800">Confidentialité</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}