import Link from "next/link";
import ContactBlock from "@/components/ContactBlock";

export default function ExpatDeFiLandingPage() {
  const services = [
    {
      title: "Optimiser votre expatriation et votre résidence fiscale",
      description:
        "Réduisez votre fiscalité sans risque d’erreur, sécurisez votre changement de résidence fiscale et anticipez les décisions qui doivent être prises avant votre départ.",
      tag: "Mobilité internationale",
    },
    {
      title: "Piloter votre patrimoine en France et à l’international",
      description:
        "Structurez vos revenus internationaux, cartographiez vos actifs, identifiez vos leviers d’optimisation et prenez des décisions patrimoniales plus claires.",
      tag: "Pilotage patrimonial international",
    },
    {
      title: "Préparer une transmission ou une cession d’entreprise",
      description:
        "Articulez patrimoine privé et professionnel, clarifiez les enjeux de transmission et évitez les erreurs coûteuses sur le long terme avec une vision d’ensemble.",
      tag: "Patrimoine professionnel",
    },
    {
      title: "Utiliser la DeFi intelligemment",
      description:
        "Comprenez les usages pertinents des crypto-actifs, les enjeux de conservation, les flux, les stablecoins et les risques opérationnels sans approche spéculative.",
      tag: "Finance décentralisée",
    },
  ];

  const pillars = [
    {
      title: "Lisibilité",
      text: "Des sujets complexes rendus compréhensibles rapidement, sans jargon inutile et avec une logique claire.",
    },
    {
      title: "Exigence",
      text: "Une approche pensée pour des profils internationaux, entrepreneurs, cadres mobiles et patrimoines sophistiqués.",
    },
    {
      title: "Coordination",
      text: "Une vision stratégique, puis l’orientation vers les bons experts lorsque votre situation exige une expertise complémentaire.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnostic",
      text: "Identifier vos zones de risque, votre niveau d’optimisation et les décisions prioritaires à prendre.",
    },
    {
      step: "02",
      title: "Stratégies",
      text: "Comparer plusieurs scénarios concrets pour optimiser votre résidence fiscale, vos revenus internationaux et votre patrimoine.",
    },
    {
      step: "03",
      title: "Mise en action",
      text: "Formaliser une feuille de route claire, actionnable et coordonner les bons interlocuteurs au bon moment.",
    },
  ];

  const faqs = [
    {
      q: "Vendez-vous des produits financiers ou d’investissement ?",
      a: "Non. L’approche présentée ici repose sur du conseil stratégique et pédagogique, sans droits d’entrée, sans commission, avec des honoraires uniquement. Lorsqu’un sujet relève d’un cadre réglementé, il doit être traité avec les statuts, agréments ou partenaires adaptés.",
    },
    {
      q: "À qui s’adresse ce service ?",
      a: "Aux cadres, entrepreneurs, indépendants, familles internationales et profils mobiles qui souhaitent réduire leur fiscalité sans erreur, structurer leurs flux internationaux et prendre de meilleures décisions patrimoniales.",
    },
    {
      q: "Pourquoi agir avant l’expatriation ?",
      a: "Parce que certaines optimisations ne sont possibles qu’avant le départ. Une mauvaise séquence, une erreur de calendrier ou une décision prise trop tard peuvent avoir un impact pendant plusieurs années.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-16 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-10">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Réduire votre fiscalité sans risque d’erreur
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
                Réduisez votre fiscalité internationale sans faire d’erreur coûteuse.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Optimisez votre stratégie d’expatriation et votre patrimoine international en quelques minutes. Découvrez votre niveau d’optimisation, les axes stratégiques adaptés à votre situation et les décisions à prendre avant qu’il ne soit trop tard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/simulateur"
                  className="rounded-full bg-[#0F5DB8] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
                >
                  Diagnostiquer ma situation (gratuit – 2 min)
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-[#5FAE7B]/40 hover:bg-[#F8FBFF]"
                >
                  Réserver un échange
                </a>
              </div>

              <div className="mt-6 max-w-2xl text-sm leading-7 text-slate-500">
                Répondez à quelques questions pour obtenir votre diagnostic personnalisé.{" "}
                <span className="font-medium text-slate-700">
                  0% de droits d’entrée, pas de commission, uniquement des honoraires.
                </span>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
                {[
                  ["International", "structuration transfrontalière"],
                  ["Sans jargon", "compréhension immédiate"],
                  ["Orienté décision", "actions concrètes"],
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
                      <p className="text-sm font-medium text-slate-500">Exemple de diagnostic</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#08122E]">
                        Expatriation à Lisbonne, Dubaï ou Suisse
                      </h3>
                    </div>

                    <div className="rounded-full bg-[#5FAE7B]/18 px-3 py-1 text-sm font-medium text-[#2E7A52]">
                      Priorité : avant expatriation
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#F8FBFF] p-4">
                    <p className="text-sm leading-6 text-slate-700">
                      Certaines optimisations ne sont possibles qu’avant expatriation. Selon vos choix fiscaux et patrimoniaux, l’écart potentiel peut aller de{" "}
                      <span className="font-semibold text-[#08122E]">+2 000€ à +50 000€</span>{" "}
                      ou davantage sur plusieurs années.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Résidence fiscale, calendrier de bascule et risque de double imposition",
                      "Structuration des revenus internationaux et pilotage patrimonial international",
                      "Fiscalité immobilière internationale et arbitrages avant départ",
                      "Usages crypto, conservation des actifs et DeFi utilisée intelligemment",
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
                    <p className="mt-2 text-xl font-semibold">Conseil stratégique premium</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Une approche haut de gamme pour clarifier les décisions complexes, réduire les angles morts et sécuriser chaque arbitrage important.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)] opacity-80" />
                    <p className="text-sm text-slate-500">Promesse</p>
                    <p className="mt-2 text-xl font-semibold text-[#08122E]">
                      Découvrir votre niveau d’optimisation
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Identifiez rapidement ce que vous pouvez améliorer, ce que vous perdez potentiellement et quelles actions méritent une décision immédiate.
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
              Une offre pensée pour l’expatriation, le pilotage patrimonial international et les décisions sensibles à fort impact.
            </h2>
          </div>

          <div className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Optimisez votre stratégie d’expatriation, structurez vos revenus internationaux, arbitrez vos actifs avec plus de clarté et utilisez la DeFi intelligemment dans une logique patrimoniale cohérente.
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
                  Voir les options
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-medium text-[#0F5DB8]">
                Conseil stratégique, cadre clair
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Un discours rassurant, orienté décision et compatible avec une approche propre et haut de gamme.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Ici, l’accent est mis sur le diagnostic, la stratégie, l’analyse de scénarios, la structuration et la coordination d’experts. Pas de promesse de rendement, pas de vente agressive, mais une vision claire pour réduire les erreurs coûteuses et agir au bon moment.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Certaines optimisations ne sont possibles qu’avant expatriation. Une erreur de séquence ou une mauvaise décision peut se payer pendant 10 ans.
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
                Une méthode simple pour prendre les bonnes décisions plus vite.
              </h2>
            </div>

            <div className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Le diagnostic fait émerger les points faibles, le niveau d’optimisation et l’urgence. Ensuite, la stratégie oriente vers la bonne offre, le bon niveau d’accompagnement et le bon canal de contact.
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
              Les questions clés avant de lancer votre diagnostic.
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

        <ContactBlock />
      </main>
    </div>
  );
}