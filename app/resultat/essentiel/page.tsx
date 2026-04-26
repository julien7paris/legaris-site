"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ExpatriationUSAResultPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const profile = searchParams.get("profile") || "Profil non précisé";
  const country = searchParams.get("country") || "États-Unis";
  const horizon = searchParams.get("horizon") || "Non précisé";
  const crypto = searchParams.get("crypto") || "Aucune";
  const score = searchParams.get("score") || "0";
  const level = searchParams.get("level") || "Essentiel";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.12),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#0F5DB8]/15 bg-white px-4 py-2 text-sm font-medium text-[#0F5DB8] shadow-sm">
              Résultat détaillé • Expatriation USA
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#08122E] sm:text-5xl">
              {name ? `${name}, voici votre première lecture stratégique.` : "Votre première lecture stratégique."}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Votre projet d’expatriation vers les États-Unis nécessite une lecture structurée
              des flux, du patrimoine, de la fiscalité, du calendrier et des expertises à mobiliser.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <Card label="Score" value={`${score}/100`} />
            <Card label="Niveau" value={level} />
            <Card label="Profil" value={profile} />
            <Card label="Horizon" value={horizon} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
          <p className="text-sm font-medium text-[#0F5DB8]">📊 Lecture personnalisée</p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#08122E]">
            Synthèse de votre situation
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Votre profil indique un besoin de cadrage avant toute décision opérationnelle.
              L’expatriation vers les États-Unis peut créer des impacts importants sur la résidence
              fiscale, les revenus, les actifs financiers, la protection familiale et les obligations
              déclaratives.
            </p>

            <p>
              La priorité n’est pas de choisir immédiatement des produits, mais de construire une
              vision claire : où seront vos revenus, où sera votre patrimoine, quels flux traversent
              les frontières, et quels experts doivent être coordonnés.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#F8FBFF] p-5">
            <p className="text-sm font-semibold text-[#08122E]">Votre pays cible</p>
            <p className="mt-2 text-sm text-slate-600">{country}</p>
          </div>
        </div>

        <div className="grid gap-6">
          <Block
            title="1. Points d’attention USA"
            items={[
              "Résidence fiscale et risque de double imposition.",
              "Organisation des revenus français et américains.",
              "Comptes bancaires, placements, assurance-vie, immobilier et fiscalité transfrontalière.",
              "Protection du conjoint, des enfants et anticipation successorale.",
            ]}
          />

          <Block
            title="2. Ce qu’il faut clarifier en priorité"
            items={[
              "Votre date réelle de départ et votre durée probable d’expatriation.",
              "La nature de vos revenus : salaire, dividendes, activité indépendante, société.",
              "Les actifs à conserver en France et ceux à repositionner.",
              "Les obligations déclaratives liées aux actifs numériques si exposition crypto.",
            ]}
          />

          <Block
            title="3. Experts à mobiliser"
            items={[
              "Fiscaliste international France / USA.",
              "Conseil patrimonial pour cartographier les actifs.",
              "Notaire ou avocat patrimonial en cas d’enjeux familiaux ou successoraux.",
              crypto !== "Aucune"
                ? "Expert crypto / conservation / traçabilité des flux numériques."
                : "Analyse crypto non prioritaire selon vos réponses actuelles.",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#08122E] p-8 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0F5DB8]/30 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#5FAE7B]/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium text-[#B8D7FF]">Recommandation Proxfi</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Prévoir un diagnostic stratégique avant toute mise en œuvre.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              L’objectif est de transformer votre projet d’expatriation en feuille de route claire :
              fiscalité, patrimoine, revenus, famille, calendrier, interlocuteurs et points de vigilance.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#08122E] transition hover:-translate-y-0.5"
              >
                Demander un échange
              </a>

              <Link
                href="/simulateur"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Refaire le simulateur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#08122E]">{value}</p>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6">
      <h3 className="text-lg font-semibold text-[#08122E]">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}