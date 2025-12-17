import Image from "next/image";

const tutorials = [
  {
    title: "Persona Víctima",
    href: "/victima",
    tag: "Q137342677",
    color: "red",
    summary:
      "Crea el ítem de la víctima con etiquetas multilingües, declara identidad, contexto de victimización y añade referencias web + archivo en cada afirmación.",
    properties: ["P31", "P570", "P20", "P157", "P793", "P1343"],
  },
  {
    title: "QuickStatements",
    href: "/quickstatements",
    tag: "Herramienta",
    color: "green",
    summary:
      "Crea elementos o cambia las declaraciones en Wikidata con QuickStatements.",
    properties: ["CREATE", "LAST", "Sxxx"],
  },
  {
    title: "Auto Judicial",
    href: "/auto",
    tag: "Q137041260",
    color: "blue",
    summary:
      "Modela el auto como documento legal: etiqueta con número y sala, fechas, jurisdicción y artículos citados, cada uno con fuentes y versión archivada.",
    properties: ["P31", "P577", "P1001", "P131", "P6864", "P1343"],
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
            <div className="wiki-notice">
              <p className="font-display font-bold text-wikidark mb-2">Cómo usar</p>
              <ul className="font-body text-wikidark space-y-1 list-disc list-inside">
                <li>Encuentra Referencias</li>
                <li>Busca las declaraciones.</li>
                <li>Copia y pega</li>
              </ul>
            </div>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <a
              key={tutorial.href}
              href={tutorial.href}
              className={`wiki-card block hover:no-underline ${borderColor}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-display text-xl text-wikidark border-0 m-0 p-0">
                  {tutorial.title}
                </h2>
                <span className={`text-xs font-body px-2 py-1 border-0 ${badgeColor}`}>
                  {tutorial.tag}
                </span>
              </div>

            <p className="font-body text-wikidark leading-relaxed mb-4 text-sm">
              {tutorial.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tutorial.properties.map((prop) => (
                <code key={prop} className="text-xs">
                  {prop}
                </code>
              ))}
            </div>

            <div className="font-body text-wikiblue text-sm">
              Ir al tutorial →
            </div>
          </a>
          );
        })}
      </div>

      {/* Footer info */}
      <div className="mt-12 border-t border-wikigray pt-6">
        <p className="font-body text-wikigray text-sm text-center">
          Tutorial creado por Wikimedia Colombia para el Colaboratorio de Memoria Histórica
        </p>
      </div>
    </main>
  );
}
