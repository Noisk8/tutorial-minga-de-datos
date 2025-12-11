const autoSteps = [
  {
    title: "Crear el ítem del auto",
    detail: "Crea un nuevo ítem en Wikidata para el auto judicial como documento.",
    actions: [
      "Etiqueta: incluye número, sala o tipo de decisión (ej: Auto SRVR-SUB-D Subcaso Huila-081).",
      "Descripción: “Auto judicial que describe hechos de falsos positivos en Huila (2023)”.",
      "Alias: número de radicado o expediente.",
      "Propiedad inicial: P31 instancia de → documento legal (Q11032) o clase local aplicable.",
    ],
    mockup: "Tarjeta con título del auto, radicado y P31 completado.",
  },
  {
    title: "Contexto legal y territorial",
    detail: "Añade fecha, jurisdicción y territorio donde aplica el auto.",
    actions: [
      "P577 fecha de publicación → fecha exacta del auto.",
      "P1001 jurisdicción → Colombia (o entidad territorial competente).",
      "P131 ubicación administrativa → región/departamento asociado.",
      "P1343 descrito en la fuente → proceso o expediente principal.",
      "Referencias: URL oficial (P854), archivo (P1065), fecha de consulta (P813).",
    ],
    mockup: "Línea de tiempo con fecha y tarjeta de jurisdicción/ubicación.",
  },
  {
    title: "Citas y vínculos con víctimas",
    detail: "Relaciona artículos citados, víctimas y documentos base.",
    actions: [
      "P6864 cita → artículos de ley o normas aplicables.",
      "P4510 regula → persona víctima o grupo afectado (si aplica).",
      "P144 basado en → sentencia/informe/expediente previo.",
      "P828 causa de → medidas o efectos ordenados.",
      "Repite P854 + P1065 + P813 en cada afirmación.",
    ],
    mockup: "Vista de relaciones cruzadas con artículos citados y víctimas vinculadas.",
  },
];

const autoLanguageRows = [
  {
    idioma: "español",
    etiqueta: "Auto SRVR-SUB-D Subcaso Huila-081",
    descripcion: "Auto judicial que describe hechos de falsos positivos en Huila (2023)",
    alias: "Huila-081",
  },
  {
    idioma: "inglés",
    etiqueta: "Court order SRVR-SUB-D, Subcase Huila-081",
    descripcion: "Court order describing false positives case in Huila (2023)",
    alias: "Huila-081 order",
  },
  {
    idioma: "portugués de Brasil",
    etiqueta: "Auto SRVR-SUB-D Subcaso Huila-081",
    descripcion: "Auto judicial que descreve fatos de falsos positivos em Huila (2023)",
    alias: "Huila-081",
  },
  {
    idioma: "francés",
    etiqueta: "Ordonnance SRVR-SUB-D, sous-cas Huila-081",
    descripcion: "Ordonnance judiciaire sur les 'faux positifs' en Huila (2023)",
    alias: "Huila-081",
  },
];

const autoSources = [
  "https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-HUILA-081_20-noviembre-2023.pdf",
  "https://archive.org/details/auto-srvr-sub-d-subcaso-huila-081-20-noviembre-2023",
];

const autoStatements = [
  {
    property: "instancia de (P31)",
    value: "documento legal (Q11032)",
    references: true,
  },
  {
    property: "título oficial (P1476)",
    value: "Auto SRVR-SUB-D Subcaso Huila-081",
    references: true,
  },
  {
    property: "fecha de publicación (P577)",
    value: "20 nov 2023",
    references: true,
  },
  {
    property: "jurisdicción (P1001)",
    value: "Colombia (Q739)",
    references: true,
  },
  {
    property: "ubicación administrativa (P131)",
    value: "Huila, Colombia",
    references: true,
  },
  {
    property: "citado en (P1343)",
    value: "Proceso SRVR-SUB-D Subcaso Huila-081",
    references: true,
  },
  {
    property: "cita (P6864)",
    value: "Artículos de la norma aplicable",
    references: true,
  },
  {
    property: "regula (P4510)",
    value: "Víctimas del caso Huila-081",
    references: true,
  },
  {
    property: "basado en (P144)",
    value: "Expediente o sentencia previa",
    references: true,
  },
  {
    property: "causa de (P828)",
    value: "Medidas de reparación/seguimiento",
    references: true,
  },
];

const autoDeclarationList = autoStatements.map((s) => s.property);

function StatementCard({ stmt }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden ion-panel">
      <div className="grid md:grid-cols-[260px_1fr]">
        <div className="bg-ink/60 border-b md:border-b-0 md:border-r border-white/10 p-4 md:p-5">
          <p className="text-slate-300 text-sm">Propiedad</p>
          <p className="text-lg font-semibold text-magenta">{stmt.property}</p>
        </div>
        <div className="p-4 md:p-5 space-y-3">
          <div>
            <p className="text-slate-300 text-sm">Valor</p>
            <p className="text-white font-semibold text-lg leading-relaxed">{stmt.value}</p>
          </div>
          {stmt.references && (
            <div className="bg-black/30 border border-white/5 rounded-xl p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Referencias (añadir en la UI)</p>
              <ul className="text-sm text-slate-200 space-y-1">
                <li>P854 dirección web de la referencia → URL oficial del auto</li>
                <li>P1065 dirección web de archivo → enlace de archive.org</li>
                <li>P813 fecha de consulta → fecha actual al cargar la fuente</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepSection({ id, title, steps }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Flujo</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">{title}</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300">
          <span className="inline-flex h-2 w-2 rounded-full bg-magenta" />
          3 pasos
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="glass card-hover rounded-2xl border border-white/5 p-6 md:p-8 halo"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-lg font-semibold text-magenta bg-white/5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Paso {index + 1}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-slate-200 leading-relaxed">{step.detail}</p>
                {step.actions && (
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Paso a paso
                    </p>
                    <ul className="grid gap-2 text-sm text-slate-100">
                      {step.actions.map((action) => (
                        <li
                          key={action}
                          className="flex gap-2 items-start rounded-lg border border-white/5 bg-white/5 px-3 py-2"
                        >
                          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-magenta" />
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="w-full md:w-64 lg:w-72">
                <div className="mockup rounded-xl p-4 text-sm text-slate-100">
                  <p className="font-semibold text-white mb-2">Mockup</p>
                  <p className="text-slate-200">{step.mockup}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AutoPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <header className="glass rounded-3xl border border-white/5 p-8 md:p-12 halo">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs uppercase tracking-[0.2em] text-slate-300">
              Tutorial de auto judicial
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
              Auto Judicial (ej. Q137041260)
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Crea la ontología de un auto judicial: etiquetas multilingües, lista de declaraciones
              y ejemplo visual con referencias (URL + archivo + fecha de consulta) en cada afirmación.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-white/15 text-white px-5 py-3 rounded-full hover:border-magenta transition"
              >
                ← Volver al home
              </a>
              <a
                href="/victima"
                className="inline-flex items-center gap-2 bg-magenta text-white font-semibold px-5 py-3 rounded-full shadow-glow hover:-translate-y-0.5 transition"
              >
                Ver Persona Víctima
              </a>
            </div>
          </div>
          
        </div>
      </header>

      <nav className="flex flex-wrap items-center gap-3 mt-8">
        <a
          href="#pasos"
          className="px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:border-magenta hover:text-white transition"
        >
          Pasos
        </a>
        <a
          href="#lista"
          className="px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:border-magenta hover:text-white transition"
        >
          Lista de declaraciones
        </a>
        <a
          href="#vista"
          className="px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:border-magenta hover:text-white transition"
        >
          Vista Wikidata
        </a>
        <a
          href="#declaraciones"
          className="px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:border-magenta hover:text-white transition"
        >
          Declaraciones (ejemplo)
        </a>
      </nav>

      <StepSection id="pasos" title="Flujo para crear el auto judicial" steps={autoSteps} />

      <section id="lista" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-white/5 p-8 md:p-10 halo">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Lista de propiedades</p>
          <h2 className="text-3xl font-display font-semibold text-white mt-1">Declaraciones usadas</h2>
          <p className="text-slate-200 mt-3">
            Carga estas propiedades y agrega referencias P854 + P1065 + P813 en cada afirmación.
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            {autoDeclarationList.map((prop) => (
              <div key={prop} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-100">
                <span className="inline-flex h-2 w-2 rounded-full bg-magenta" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vista" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-white/5 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Vista tipo Wikidata</p>
              <h2 className="text-3xl font-display font-semibold text-white">Etiquetas y descripciones</h2>
              <p className="text-slate-200 mt-2">
                Usa estos textos como referencia para cargar el ítem del auto en varios idiomas.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200">
              Q137041260
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 ion-panel">
            <table className="ion-table">
              <thead>
                <tr>
                  <th>Idioma</th>
                  <th>Etiqueta</th>
                  <th>Descripción</th>
                  <th>También conocido como</th>
                </tr>
              </thead>
              <tbody>
                {autoLanguageRows.map((row) => (
                  <tr key={row.idioma}>
                    <td className="text-slate-200">{row.idioma}</td>
                    <td className="text-white font-semibold">{row.etiqueta}</td>
                    <td className="text-slate-200 leading-relaxed">{row.descripcion}</td>
                    <td className="text-slate-400">{row.alias}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="declaraciones" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-white/5 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Ejemplo visual</p>
              <h2 className="text-3xl font-display font-semibold text-white">Cómo se ve en Wikidata</h2>
              <p className="text-slate-200 mt-2">
                Añade cada propiedad, guarda, y luego agrega P854, P1065 y P813 como referencias en la misma fila.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200">
              Coincide con la ficha de auto
            </div>
          </div>
          <div className="space-y-5">
            {autoStatements.map((stmt) => (
              <StatementCard key={stmt.property} stmt={stmt} />
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 p-5 bg-white/5">
            <p className="text-sm text-slate-300 mb-2">Fuentes (úselas en cada referencia)</p>
            <ul className="list-disc list-inside text-slate-200 text-sm space-y-1">
              {autoSources.map((src) => (
                <li key={src}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-magenta hover:text-white"
                  >
                    {src}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 mt-2">
              P854 (URL principal) + P1065 (archivo) + P813 (fecha de consulta) en cada afirmación.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
