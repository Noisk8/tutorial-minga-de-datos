import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-wikigray bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left side - Description */}
          <div className="flex-1">
            <p className="font-body text-wikidark text-sm">
              Tutorial creado por Wikimedia Colombia para el Colaboratorio de Memoria Histórica
            </p>
          </div>

          {/* Right side - Contact */}
          <div className="flex items-center gap-2">
            <span className="font-body text-wikidark text-sm">Contacto:</span>
            <a
              href="mailto:contacto@wikimediacolombia.org"
              className="font-body text-wikiblue hover:text-wikired transition-colors text-sm"
            >
              contacto@wikimediacolombia.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
