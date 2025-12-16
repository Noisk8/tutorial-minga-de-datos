"use client";

const quickStatementsSteps = [
  {
    title: "Preparar los datos",
    detail: "Organiza la información que vas a cargar en formato de tabla o lista estructurada.",
    actions: [
      "Identifica las propiedades de Wikidata que necesitas (ej: P31, P570, P20).",
      "Recopila los valores correspondientes para cada propiedad.",
      "Organiza los datos en columnas: ítem, propiedad, valor, calificadores, referencias.",
      "Verifica que los identificadores Q y P sean correctos.",
    ],
  },
  {
    title: "Crear comandos QuickStatements",
    detail: "Convierte tus datos al formato de comandos que QuickStatements entiende.",
    actions: [
      "Usa el formato: QNUMBER|PROPERTY|VALUE para declaraciones básicas.",
      "Para crear ítems nuevos: CREATE seguido de las declaraciones.",
      "Añade calificadores con: QNUMBER|PROPERTY|VALUE|QUALIFIER_PROPERTY|QUALIFIER_VALUE.",
      "Incluye referencias con: QNUMBER|PROPERTY|VALUE|S854|\"URL\".",
      "Separa cada comando en una línea nueva.",
    ],
  },
  {
    title: "Ejecutar en QuickStatements",
    detail: "Carga y ejecuta tus comandos en la herramienta QuickStatements.",
    actions: [
      "Accede a https://quickstatements.toolforge.org",
      "Inicia sesión con tu cuenta de Wikidata.",
      "Pega tus comandos en el área de texto.",
      "Revisa la vista previa para verificar que todo esté correcto.",
      "Haz clic en 'Run' para ejecutar los comandos.",
      "Monitorea el progreso y verifica que no haya errores.",
    ],
  },
];

const quickStatementsExamples = [
  {
    title: "Crear un ítem nuevo",
    command: `CREATE
LAST|Len|"Víctima de falsos positivos"
LAST|Den|"Persona víctima de ejecuciones extrajudiciales en Colombia"
LAST|P31|Q5
LAST|P27|Q739`,
    description: "Crea un nuevo ítem con etiqueta, descripción y declaraciones básicas.",
  },
  {
    title: "Añadir declaración con referencia",
    command: `Q137342677|P570|+2007-01-15T00:00:00Z/11
Q137342677|P570|+2007-01-15T00:00:00Z/11|S854|"https://example.com/source"
Q137342677|P570|+2007-01-15T00:00:00Z/11|S813|+2024-12-15T00:00:00Z/11`,
    description: "Añade fecha de muerte con URL de referencia y fecha de consulta.",
  },
  {
    title: "Declaración con calificador",
    command: `Q137342677|P793|Q124000336|P585|+2007-01-15T00:00:00Z/11
Q137342677|P793|Q124000336|P276|Q2841`,
    description: "Añade evento significativo con fecha y ubicación como calificadores.",
  },
];

const quickStatementsResources = [
  {
    title: "Documentación oficial",
    url: "https://www.wikidata.org/wiki/Help:QuickStatements",
    description: "Guía completa sobre la sintaxis y uso de QuickStatements",
  },
  {
    title: "QuickStatements Tool",
    url: "https://quickstatements.toolforge.org",
    description: "Herramienta web para ejecutar comandos QuickStatements",
  },
  {
    title: "Generador de comandos",
    url: "https://quickstatements.toolforge.org/#/batch",
    description: "Interfaz para crear lotes de comandos",
  },
];

export default function QuickStatementsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="border border-wikigray bg-white p-6 mb-8">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-wikilight border border-wikigray text-wikidark text-xs font-body">
            Tutorial de QuickStatements
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-wikidark mb-4 border-b-2 border-wikigray pb-2">
          QuickStatements para Wikidata
        </h1>
        <p className="font-body text-wikidark leading-relaxed mb-4">
          Aprende a usar QuickStatements para crear y modificar elementos en Wikidata de forma
          masiva. Esta herramienta te permite cargar múltiples declaraciones con un formato
          simple de comandos.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/" className="wiki-button">
            ← Volver al home
          </a>
          <a
            href="https://quickstatements.toolforge.org"
            target="_blank"
            rel="noreferrer"
            className="wiki-button-primary"
          >
            Abrir QuickStatements ↗
          </a>
        </div>
      </div>

      {/* Steps Section */}
      <section className="mb-8">
        <h2 className="font-display text-2xl text-wikidark mb-4">Cómo usar QuickStatements</h2>
        <div className="space-y-6">
          {quickStatementsSteps.map((step, index) => (
            <div key={step.title} className="wiki-card">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-wikiblue bg-wikilight flex items-center justify-center font-display font-bold text-wikiblue">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-wikidark m-0 p-0 border-0">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="font-body text-wikidark leading-relaxed mb-3 ml-12">
                {step.detail}
              </p>
              <ul className="font-body text-wikidark space-y-2 ml-12 list-disc list-inside">
                {step.actions.map((action, i) => (
                  <li key={i}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-8">
        <h2 className="font-display text-2xl text-wikidark mb-4">Comandos de ejemplo</h2>
        <div className="space-y-6">
          {quickStatementsExamples.map((example) => (
            <div key={example.title} className="wiki-card">
              <h3 className="font-display text-lg text-wikidark mb-2 border-0 m-0 p-0">
                {example.title}
              </h3>
              <p className="font-body text-wikidark mb-3">{example.description}</p>
              <pre className="bg-wikilight border border-wikigray p-4 overflow-x-auto">
                <code className="font-mono text-sm text-wikidark border-0 bg-transparent p-0">
                  {example.command}
                </code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-8">
        <h2 className="font-display text-2xl text-wikidark mb-4">Recursos adicionales</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quickStatementsResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="wiki-card block hover:no-underline"
            >
              <h3 className="font-display text-base text-wikiblue mb-2 border-0 m-0 p-0">
                {resource.title} ↗
              </h3>
              <p className="font-body text-wikidark text-sm">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <div className="wiki-notice-warning">
        <h3 className="font-display text-lg text-wikidark mb-3 border-0 m-0 p-0">
          Consejos importantes
        </h3>
        <ul className="font-body text-wikidark space-y-2 list-decimal list-inside">
          <li>
            <strong>Verifica siempre</strong> los identificadores Q y P antes de ejecutar comandos.
          </li>
          <li>
            <strong>Prueba primero</strong> con un lote pequeño para asegurarte de que la sintaxis es correcta.
          </li>
          <li>
            <strong>Añade referencias</strong> siempre que sea posible usando S854 (URL) y S813 (fecha de consulta).
          </li>
          <li>
            <strong>Usa el modo sandbox</strong> de Wikidata para practicar antes de hacer cambios reales.
          </li>
        </ul>
      </div>
    </main>
  );
}
