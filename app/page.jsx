import Image from "next/image";

const tutorials = [
  {
    title: "Ontología Víctima",
    href: "/victima",
    tag: "Ontología",
    color: "red",
    summary:
      "Identifica la ontología de los datos y crea el ítem de la víctima con etiquetas multilingües, declara identidad, contexto de victimización y añade referencias web + archivo en cada afirmación.",
    properties: ["Ontología", "Persona", "Wikidata"],
  },
  {
    title: "QuickStatements",
    href: "/quickstatements",
    tag: "Herramienta",
    color: "green",
    summary:
      "Crea elementos o cambia las declaraciones en lote en Wikidata con QuickStatements.",
    properties: ["Tutorial", "Wikidata", "Herramienta"],
  },
  {
    title: "Auto Judicial",
    href: "/auto",
    tag: "Ontología",
    color: "red",
    summary:
      "Modela el auto como documento legal: etiqueta con número y sala, fechas, jurisdicción y artículos citados, cada uno con fuentes y versión archivada.",
    properties: ["P31", "P577", "P1001", "P131", "P6864", "P1343"],
  },
  {
    title: "Buenas Prácticas",
    href: "/buenas-practicas",
    tag: "Herramienta",
    color: "green",
    summary:
      "Desde Wikimedia Colombia pensamos en las buenas prácticas y en el cuidado. Conoce nuestra guía para el Colaboratorio de Memoria Histórica.",
    properties: ["PDF", "Guía", "Memoria"],
  },
  {
    title: "OpenRefine",
    href: "/openrefine",
    tag: "Herramienta",
    color: "blue",
    summary:
      "Limpia, transforma y enriquece datos desordenados. Reconcilia hojas de cálculo con Wikidata para una ingesta masiva y estructurada.",
    properties: ["Tutorial", "Wikidata", "Herramienta"],
  },
];

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
      {/* Header Section */}
      <div className="border border-wikigray bg-white p-8 mb-8 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="mb-4">
              {/* <span className="inline-block px-3 py-1 bg-wikilight border border-wikigray text-wikidark text-xs font-body rounded-md">
                Colaboratorio de Memoria Histórica
              </span> */}
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-wikidark mb-4 border-b-2 border-wikigray pb-2">
              Minga de Datos
            </h1>
            <p className="font-body text-wikidark leading-relaxed mb-6">
              Esta es un espacio para encontrar tutoriales sobre cómo contribuir a Wikidata con información relevante para la memoria histórica de Colombia. Aquí aprenderás a crear y editar elementos en Wikidata, añadiendo referencias y fuentes confiables para asegurar la veracidad de los datos.
            </p>

            {/* How to use box */}
            {/* <div className="wiki-notice">
              <p className="font-display font-bold text-wikidark mb-2">Cómo usar</p>
              <ul className="font-body text-wikidark space-y-1 list-disc list-inside">
                <li>Encuentra Referencias</li>
                <li>Busca las declaraciones.</li>
                <li>Copia y pega</li>
              </ul>
            </div> */}
          </div>

          <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Wikimedia-Colombia-logo.svg"
              alt="Wikimedia Colombia"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 192px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => {
          const borderColor =
            tutorial.color === "red" ? "border-l-4 border-l-wikired" :
              tutorial.color === "green" ? "border-l-4 border-l-wikigreen" :
                "border-l-4 border-l-wikiblue";

          const badgeColor =
            tutorial.color === "red" ? "bg-wikired text-white" :
              tutorial.color === "green" ? "bg-wikigreen text-white" :
                "bg-wikiblue text-white";

          return (
            <div
              key={tutorial.href}
              className={`wiki-card flex flex-col relative ${borderColor}`}
            >
              <a href={tutorial.href} className="absolute inset-0 z-0" aria-label={`Ir al tutorial ${tutorial.title}`}></a>
              <div className="flex items-start justify-between mb-3 relative z-10 pointer-events-none">
                <h2 className="font-display text-xl text-wikidark border-0 m-0 p-0 pointer-events-auto">
                  <a href={tutorial.href} className="hover:text-wikiblue transition-colors hover:no-underline">
                    {tutorial.title}
                  </a>
                </h2>
                <span className={`text-xs font-body px-2 py-1 border-0 ${badgeColor}`}>
                  {tutorial.tag}
                </span>
              </div>

              <p className="font-body text-wikidark leading-relaxed mb-4 text-sm relative z-10 pointer-events-none">
                {tutorial.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {tutorial.properties.map((prop, index) => {
                  const isPropertyOrItem = /^[PQ]\d+$/.test(prop);
                  const href = isPropertyOrItem
                    ? `https://www.wikidata.org/wiki/${prop.startsWith("P") ? "Property:" : ""}${prop}`
                    : null;

                  return (
                    <code key={index} className="text-xs font-mono bg-white relative">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-wikiblue hover:underline"
                        >
                          {prop}
                        </a>
                      ) : (
                        prop
                      )}
                    </code>
                  );
                })}
              </div>

              <div className="font-body text-wikiblue text-sm mt-auto relative z-10 pointer-events-none">
                Ir al tutorial →
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
