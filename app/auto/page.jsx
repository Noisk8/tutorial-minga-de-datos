"use client";

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
  },
];

const autoLanguageRows = [
  {
    idioma: "español",
    etiqueta: "Auto SRVR-SUB-D Subcaso Huila-081",
    descripcion: "Auto judicial que describe hechos de falsos positivos en Huila (2023)",
  },
  {
    idioma: "inglés",
    etiqueta: "Court order SRVR-SUB-D, Subcase Huila-081",
    descripcion: "Court order describing false positives case in Huila (2023)",
  },
  {
    idioma: "portugués de Brasil",
    etiqueta: "Auto SRVR-SUB-D Subcaso Huila-081",
    descripcion: "Auto judicial que descreve fatos de falsos positivos em Huila (2023)",
  },
  {
    idioma: "francés",
    etiqueta: "Ordonnance SRVR-SUB-D, sous-cas Huila-081",
    descripcion: "Ordonnance judiciaire sur les 'faux positifs' en Huila (2023)",
  },
];

const autoSources = [
  "https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-HUILA-081_20-noviembre-2023.pdf",
  "https://archive.org/details/auto-srvr-sub-d-subcaso-huila-081-20-noviembre-2023",
];

const autoStatements = [
  { property: "instancia de (P31)", value: "auto judicial(Q696617)", references: true },
  { property: "título oficial (P1476)", value: "Auto SRVR-SUB-D Subcaso Huila-081", references: true },
  { property: "autor (P2093)", value: "Jurisdicción Especial para la Paz (Q51881311)", references: true },
  { property: "fecha de publicación (P577)", value: "20 nov 2023", references: true },
  { property: "idioma(P407)", value: "español (Q1321)", references: true },
  
];

const autoDeclarationList = autoStatements.map((s) => s.property);

function StatementCard({ stmt }) {
  return (
    <div className="rounded-2xl border border-wikiblue/25 overflow-hidden ion-panel">
      <div className="grid md:grid-cols-[260px_1fr]">
        <div className="bg-white border-b md:border-b-0 md:border-r border-wikiblue/20 p-4 md:p-5">
          <p className="text-slate-600 text-sm">Propiedad</p>
          <p className="text-lg font-semibold text-wikiblue">{stmt.property}</p>
        </div>
        <div className="p-4 md:p-5 space-y-3">
          <div>
            <p className="text-slate-600 text-sm">Valor</p>
            <p className="text-slate-900 font-semibold text-lg leading-relaxed">{stmt.value}</p>
          </div>
          {stmt.references && (
            <div className="bg-white border border-wikiblue/25 rounded-xl p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-700 mb-2">Referencias (añadir en la UI)</p>
              <ul className="text-sm text-slate-900 space-y-1">
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
          <p className="text-sm uppercase tracking-[0.18em] text-slate-600">Flujo</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-slate-900">{title}</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-wikiblue/40 text-sm text-slate-900">
          <span className="inline-flex h-2 w-2 rounded-full bg-wikiblue" />
          3 pasos
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="glass card-hover rounded-2xl border border-wikiblue/30 p-6 md:p-8 halo"
          >
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-10 w-10 rounded-full border border-wikiblue/40 flex items-center justify-center text-lg font-semibold text-wikiblue bg-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-700">
                    
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-slate-800 leading-relaxed">{step.detail}</p>
                {step.actions && (
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-700 mb-2">
                      Paso a paso
                    </p>
                    <ul className="grid gap-2 text-sm text-slate-800">
                      {step.actions.map((action) => (
                        <li
                          key={action}
                          className="flex gap-2 items-start rounded-lg border border-wikiblue/25 bg-white px-3 py-2"
                        >
                          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-wikiblue" />
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14 text-slate-900">
      <header className="glass rounded-3xl border border-wikiblue/30 p-8 md:p-12 halo">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-wikiblue/30 text-xs uppercase tracking-[0.2em] text-slate-700">
              Tutorial de auto judicial
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 leading-tight">
              Auto Judicial (ej. Q137041260)
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">
              Crea la ontología de un auto judicial: etiquetas multilingües, lista de declaraciones
              y ejemplo visual con referencias (URL + archivo + fecha de consulta) en cada afirmación.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-wikiblue/40 text-slate-900 px-5 py-3 rounded-full hover:border-wikiblue transition"
              >
                ← Volver al home
              </a>
              <a
                href="/victima"
                className="inline-flex items-center gap-2 bg-wikiblue/15 text-slate-900 font-semibold px-5 py-3 rounded-full border border-wikiblue hover:-translate-y-0.5 transition"
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
          className="px-4 py-2 rounded-full border border-wikigreen/50 text-slate-900 hover:border-wikigreen transition"
        >
          Pasos
        </a>
        <a
          href="#lista"
          className="px-4 py-2 rounded-full border border-wikired/50 text-slate-900 hover:border-wikired transition"
        >
          Lista de declaraciones
        </a>
        <a
          href="#vista"
          className="px-4 py-2 rounded-full border border-wikiblue/50 text-slate-900 hover:border-wikiblue transition"
        >
          Vista Wikidata
        </a>
        <a
          href="#declaraciones"
          className="px-4 py-2 rounded-full border border-wikiblue/30 text-slate-900 hover:border-wikiblue transition"
        >
          Declaraciones (ejemplo)
        </a>
      </nav>

      <StepSection id="pasos" title="Flujo para crear el auto judicial" steps={autoSteps} />

      <section id="lista" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-wikiblue/30 p-8 md:p-10 halo">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Lista de propiedades</p>
          <h2 className="text-3xl font-display font-semibold text-slate-900 mt-1">Declaraciones usadas</h2>
          <p className="text-slate-800 mt-3">
            Carga estas propiedades y agrega referencias P854 + P1065 + P813 en cada afirmación.
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            {autoDeclarationList.map((prop) => (
              <div key={prop} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-wikiblue/25 bg-white text-slate-900">
                <span className="inline-flex h-2 w-2 rounded-full bg-wikiblue" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vista" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-wikiblue/30 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Vista tipo Wikidata</p>
              <h2 className="text-3xl font-display font-semibold text-slate-900">Etiquetas y descripciones</h2>
              <p className="text-slate-800 mt-2">
                Usa estos textos como referencia para cargar el ítem del auto en varios idiomas.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wikiblue/30 text-sm text-slate-900">
              Q137041260
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-wikiblue/30 ion-panel">
            <table className="ion-table">
              <thead>
                <tr>
                  <th>Idioma</th>
                  <th>Etiqueta</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {autoLanguageRows.map((row) => (
                  <tr key={row.idioma}>
                    <td className="text-slate-800">{row.idioma}</td>
                    <td className="text-slate-900 font-semibold">{row.etiqueta}</td>
                    <td className="text-slate-900 leading-relaxed">{row.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="declaraciones" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-wikiblue/30 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Ejemplo visual</p>
              <h2 className="text-3xl font-display font-semibold text-slate-900">Cómo se ve en Wikidata</h2>
              <p className="text-slate-800 mt-2">
                Añade cada propiedad, guarda, y luego agrega P854, P1065 y P813 como referencias en la misma fila.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wikiblue/30 text-sm text-slate-900">
              Coincide con la ficha de auto
            </div>
          </div>
          <div className="space-y-5">
            {autoStatements.map((stmt) => (
              <StatementCard key={stmt.property} stmt={stmt} />
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-wikiblue/25 p-5 bg-white">
            <p className="text-sm text-slate-700 mb-2">Fuentes (úselas en cada referencia)</p>
            <ul className="list-disc list-inside text-slate-900 text-sm space-y-1">
              {autoSources.map((src) => (
                <li key={src}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-wikiblue hover:text-slate-900"
                  >
                    {src}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-600 mt-2">
              P854 (URL principal) + P1065 (archivo) + P813 (fecha de consulta) en cada afirmación.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
