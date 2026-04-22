import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Branding */}
          <div>
            <p className="text-lg font-semibold text-[#08122E]">Proxfi</p>
            <p className="mt-2 text-sm text-slate-500">
              Conseil stratégique patrimonial pour profils internationaux,
              entrepreneurs et expatriés.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-slate-700">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-[#08122E]">Accueil</Link></li>
              <li><Link href="/simulateur" className="hover:text-[#08122E]">Simulateur</Link></li>
              <li><Link href="/methode" className="hover:text-[#08122E]">Méthode</Link></li>
              <li><Link href="/a-propos" className="hover:text-[#08122E]">À propos</Link></li>
            </ul>
          </div>

          {/* Contact / crédibilité */}
          <div>
            <p className="text-sm font-semibold text-slate-700">Contact</p>
            <p className="mt-3 text-sm text-slate-500">
              Paris • Accompagnement international
            </p>

            <a
              href="/#contact"
              className="mt-4 inline-block text-sm font-medium text-[#0F5DB8] hover:underline"
            >
              Demander un échange
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Proxfi. Tous droits réservés.</p>

          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-[#08122E]">
              Mentions légales
            </Link>
            <Link href="/a-propos" className="hover:text-[#08122E]">
              À propos
            </Link>
            <a href="/#contact" className="hover:text-[#08122E]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}