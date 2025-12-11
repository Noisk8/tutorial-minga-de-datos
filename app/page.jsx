const tutorials = [
  {
    title: "Persona Víctima",
    href: "/victima",
    tag: "Q137342677",
    accent: "accent",
    summary:
      "Crea el ítem de la víctima con etiquetas multilingües, declara identidad, contexto de victimización y añade referencias web + archivo en cada afirmación.",
    chips: ["P31", "P570", "P20", "P157", "P793", "P1343"],
  },
  {
    title: "Auto Judicial",
    href: "/auto",
    tag: "Q137041260",
    accent: "magenta",
    summary:
      "Modela el auto como documento legal: etiqueta con número y sala, fechas, jurisdicción y artículos citados, cada uno con fuentes y versión archivada.",
    chips: ["P31", "P577", "P1001", "P131", "P6864", "P1343"],
  },
];

function TutorialCard({ item }) {
  const accentBg = item.accent === "magenta" ? "bg-magenta" : "bg-accent";
  const accentText = item.accent === "magenta" ? "text-magenta" : "text-ink";

  return (
    <a
      href={item.href}
      className="glass rounded-3xl border border-white/10 p-6 md:p-7 flex flex-col gap-4 card-hover"
    >
      <div className="flex items-center justify-between gap-3">
        <div className={`inline-flex items-center gap-2 ${accentBg} ${accentText} font-semibold text-sm px-3 py-1 rounded-full`}>
          {item.title}
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
          {item.tag}
        </span>
      </div>
      <p className="text-slate-200 leading-relaxed">{item.summary}</p>
      <div className="flex flex-wrap gap-2">
        {item.chips.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-200 bg-white/5"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="inline-flex items-center gap-2 text-sm text-slate-200">
        Ir al tutorial <span aria-hidden>↗</span>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <header className="glass rounded-3xl border border-white/5 p-8 md:p-12 halo">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs uppercase tracking-[0.2em] text-slate-300">
            Ontologías en Wikidata
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
            Tutoriales: Persona Víctima y Auto Judicial
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl">
            Elige el flujo que necesitas. Cada tutorial muestra la lista de declaraciones
            usadas y un ejemplo visual tal cual se ve en la ficha de Wikidata, con referencias
            paso a paso para que las añadas manualmente.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="mockup rounded-2xl p-4 text-sm text-slate-200">
              <p className="font-semibold text-white mb-1">Cómo usar</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Revisa la lista de propiedades a cargar.</li>
                <li>Sigue el ejemplo visual para añadir valor, calificador y referencias.</li>
                <li>Usa la URL y la versión archivada en cada afirmación.</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        {tutorials.map((item) => (
          <TutorialCard key={item.title} item={item} />
        ))}
      </section>
    </main>
  );
}
