"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

const personaSteps = [
  {
    title: "Crear el ítem",
    detail:
      "Pulsa “Crear un nuevo ítem” en Wikidata. Completa etiqueta, descripción y alias antes de guardar.",
    actions: [
      "Etiqueta (ES): Nombre . Alias opcional: 'José L. Hernández'.",
      "Descripción (ES): persona asesinada en Colombia en el contexto de “falsos positivos” o ejecuciones extrajudiciales.",
      "Repite descripción en EN, PT-BR, FR (ver tabla abajo).",
      "Guarda el ítem para habilitar las declaraciones.",
    ],
    mockup: "Formulario de creación con campos para etiqueta, descripción y alias en varios idiomas.",
  },
  {
    title: "Identidad y datos básicos",
    detail: "Añade primero las propiedades de identidad, lugar y fecha.",
    actions: [
      "P31 instancia de → ser humano (Q5).",
      "P21 sexo o género → masculino.",
      "P27 país de nacionalidad → Colombia (Q739).",
      "(opcional) P106 ocupación → agricultor (Q12737077).",
      "P570 fecha de fallecimiento → 19 dic 2007.",
      "P20 lugar de fallecimiento → El Pital (Huila, Colombia).",
      "En cada fila: P854 (URL), P1065 (archivo), P813 (fecha de consulta).",
    ],
    mockup: "Lista de propiedades básicas con columna de referencias completa.",
  },
  {
    title: "Contexto de victimización",
    detail: "Refuerza el caso con evento, responsables y fuente judicial.",
    actions: [
      "P1196 circunstancias de la muerte → homicidio.",
      "P157 asesinado por → Ejército Nacional de Colombia; calificador P1932 citado como → “Catapulta 4 del Batallón de Infantería No. 26 ‘Cacique Pigoanza’ (BIPIG)”.",
      "P793 evento significativo → falsos positivos en Colombia.",
      "P7153 lugar significativo → Región andina de Colombia; calificador P2868 valor de la declaración tiene el rol de → lugar de fallecimiento.",
      "P1343 descrito en la fuente → AUTO SUB D- SUBCASO HUILA-081 de 2023.",
      "Repite P854 + P1065 + P813 como referencias en cada afirmación.",
    ],
    mockup: "Panel con filas P1196, P157, P793, P7153, P1343 y calificadores visibles.",
  },
];

const languageRows = [
  {
    idioma: "valores predeterminados",
    etiqueta: "Nombre ",
    descripcion: "–",
    alias: "—",
  },
  {
    idioma: "español",
    etiqueta: "Nombre ",
    descripcion:
      'persona asesinada en Colombia en el contexto de "falsos positivos" o ejecuciones extrajudiciales',
    alias: "—",
  },
  {
    idioma: "inglés",
    etiqueta: "Nombre ",
    descripcion:
      "person killed in Colombia in the context of the 'false positives scandal' or extrajudicial executions",
    alias: "—",
  },
  {
    idioma: "portugués de Brasil",
    etiqueta: "Nombre ",
    descripcion:
      "pessoa morta na Colômbia no contexto de “falsos positivos” ou execuções extrajudiciais",
    alias: "—",
  },
  {
    idioma: "francés",
    etiqueta: "Nombre ",
    descripcion:
      "personne tuée en Colombie dans le cadre de “faux positifs” ou d'exécutions extrajudiciaires",
    alias: "—",
  },
  {
    idioma: "italiano",
    etiqueta: "Nombre ",
    descripcion:
      "persona uccisa in Colombia nel contesto dei “falsi positivi” o di esecuzioni extragiudiziali",
    alias: "—",
  },
  {
    idioma: "wayuunaiki (wayuu)",
    etiqueta: "Nombre ",
    descripcion:
      "persona asesinada en Colombia en el contexto de “falsos positivos” o ejecuciones extrajudiciales",
    alias: "—",
  },
];

const joseSources = [
  "https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-HUILA-081_20-noviembre-2023.pdf",
  "https://archive.org/details/auto-srvr-sub-d-subcaso-huila-081-20-noviembre-2023",
];

const joseStatements = [
  {
    property: "instancia de (P31)",
    value: "ser humano (Q5)",
    references: true,
  },
  {
    property: "sexo o género (P21)",
    value: "masculino (Q6581097)",
    references: true,
  },
  {
    property: "país de nacionalidad (P27)",
    value: "Colombia (Q739)",
    references: true,
  },
  {
    property: "fecha de fallecimiento (P570)",
    value: "19 dic 2007",
    references: true,
  },
  {
    property: "lugar de fallecimiento (P20)",
    value: "El Pital, Huila, Colombia",
    references: true,
  },
  {
    property: "circunstancias de la muerte (P1196)",
    value: "homicidio (Q149086)",
    references: true,
  },
  {
    property: "asesinado por (P157)",
    value: "Ejército Nacional de Colombia",
    qualifier:
      'citado como (P1932): “Catapulta 4 del Batallón de Infantería No. 26 ‘Cacique Pigoanza’ (BIPIG)”',
    references: true,
  },
  {
    property: "evento significativo (P793)",
    value: "falsos positivos en Colombia (ítem del evento)",
    references: true,
  },
  {
    property: "lugar significativo (P7153)",
    value: "Región andina de Colombia",
    qualifier: "valor de la declaración tiene el rol de (P2868): lugar de fallecimiento",
    references: true,
  },
  {
    property: "descrito en la fuente (P1343)",
    value: "AUTO SUB D- SUBCASO HUILA-081 de 2023",
    references: true,
  },
];

const declarationList = joseStatements.map((s) => s.property);

const autosJudiciales = [
  {
    nombre: "Auto 005 de 2018",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 033 de 2021",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 125 de 2021",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 128 de 2021",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 01 de 2022 (Subsala D y F)",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 055 Subsala D de 2022",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 062 Subsala D de 2023",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto 081 Subsala D de 2023",
    jep: "https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-HUILA-081_20-noviembre-2023.pdf",
    archivo: "https://archive.org/details/auto-srvr-sub-d-subcaso-huila-081-20-noviembre-2023",
  },
  {
    nombre: "Auto SUB D – Subcaso Antioquia – 005 de 2025",
    jep: "",
    archivo: "",
  },
  {
    nombre: "Auto Subcaso Meta de 2025",
    jep: "",
    archivo: "",
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (evt) => {
    evt.preventDefault();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className={`text-[11px] px-3 py-1 rounded-full border ${
        text ? "border-wikired/40 text-slate-900 hover:border-wikired" : "border-wikired/20 text-slate-500 cursor-not-allowed"
      } transition bg-white`}
    >
      {copied ? "☑️ Copiado" : "Copiar"}
    </button>
  );
}

function StatementCard({ stmt }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden ion-panel">
      <div className="grid md:grid-cols-[260px_1fr]">
        <div className="bg-white border-b md:border-b-0 md:border-r border-wikired/25 p-4 md:p-5">
          <p className="text-slate-600 text-sm">Propiedad</p>
          <p className="text-lg font-semibold text-wikired">{stmt.property}</p>
        </div>
        <div className="p-4 md:p-5 space-y-3">
          <div>
            <p className="text-slate-600 text-sm">Valor</p>
            <p className="text-slate-900 font-semibold text-lg leading-relaxed">{stmt.value}</p>
            {stmt.qualifier && (
              <p className="text-slate-700 text-sm mt-1">Calificador: {stmt.qualifier}</p>
            )}
          </div>
          {stmt.references && (
            <div className="bg-white border border-wikired/25 rounded-xl p-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-600 mb-2">Referencias (añadir en la UI)</p>
              <ul className="text-sm text-slate-800 space-y-1">
                <li>P854 dirección web de la referencia → URL oficial</li>
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

function StepSection({ id, title, steps, afterFirst }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-600">Flujo</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-slate-900">{title}</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-wikired/40 text-sm text-slate-900">
          <span className="inline-flex h-2 w-2 rounded-full bg-wikired" />
          3 pasos
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <div key={step.title} className="space-y-6">
            <article className="glass card-hover rounded-2xl border border-wikigreen/35 p-6 md:p-8 halo">
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-10 w-10 rounded-full border border-wikigreen/50 flex items-center justify-center text-lg font-semibold text-wikigreen bg-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                      
                      </p>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-800 leading-relaxed">{step.detail}</p>
                  {step.actions && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-2">
               
                      </p>
                      <ul className="grid gap-2 text-sm text-slate-800">
                        {step.actions.map((action) => (
                          <li
                            key={action}
                            className="flex gap-2 items-start rounded-lg border border-wikired/25 bg-white px-3 py-2"
                          >
                            <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-wikigreen" />
                            <span className="leading-relaxed">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>

            {afterFirst && index === 0 && <div className="mt-2">{afterFirst}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function VistaTable() {
  return (
    <div className="glass rounded-3xl border border-wikired/30 p-8 md:p-10 halo">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Vista tipo Wikidata</p>
          <h2 className="text-3xl font-display font-semibold text-slate-900">Etiquetas y descripciones</h2>
          <p className="text-slate-800 mt-2">
            Abre “En más idiomas” → agrega etiqueta y descripción. Usa esta tabla como guía.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wikired/30 text-sm text-slate-800">
          Q137342677
        </span>
      </div>
          <div className="overflow-hidden rounded-2xl border border-wikired/30 ion-panel">
            <table className="ion-table">
          <thead>
            <tr>
              <th>Idioma</th>
              <th>Etiqueta</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {languageRows.map((row) => (
              <tr key={row.idioma}>
                <td className="text-slate-800">{row.idioma}</td>
                <td className="text-slate-900 font-semibold">{row.etiqueta}</td>
                <td className="text-slate-800 leading-relaxed">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-slate-900">{row.descripcion || "—"}</span>
                    <div>
                      <CopyButton text={row.descripcion} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function VictimaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14 text-slate-900">
      <header className="glass rounded-3xl border border-wikired/30 p-8 md:p-12 halo">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-wikired/30 text-xs uppercase tracking-[0.2em] text-slate-700">
              Tutorial de víctima
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 leading-tight">
              Persona 
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">
              Guía completa para crear la ontología de una víctima: etiquetas multilingües, lista de declaraciones y ejemplo visual igual a la ficha de Wikidata, con referencias (URL + archivo + fecha de consulta) en cada afirmación.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-wikired/40 text-slate-900 px-5 py-3 rounded-full hover:border-wikired transition"
              >
                ← Volver al home
              </a>
              <a
                href="/auto"
                className="inline-flex items-center gap-2 bg-wikiblue/15 text-slate-900 font-semibold px-5 py-3 rounded-full border border-wikiblue hover:-translate-y-0.5 transition"
              >
                Ver Auto Judicial
              </a>
            </div>
          </div>
        
        </div>
      </header>

      <nav className="flex flex-wrap items-center gap-3 mt-8">
        <a
          href="#pasos"
          className="px-4 py-2 rounded-full border border-wikigreen/50 text-slate-900 hover:border-wikigreen hover:text-slate-900 transition"
        >
          Pasos
        </a>
        <a
          href="#lista"
          className="px-4 py-2 rounded-full border border-wikired/50 text-slate-900 hover:border-wikired hover:text-slate-900 transition"
        >
          Lista de declaraciones
        </a>
        <a
          href="#vista"
          className="px-4 py-2 rounded-full border border-wikired/50 text-slate-900 hover:border-wikired hover:text-slate-900 transition"
        >
          Vista Wikidata
        </a>
        <a
          href="#declaraciones"
          className="px-4 py-2 rounded-full border border-wikired/50 text-slate-900 hover:border-wikired hover:text-slate-900 transition"
        >
          Declaraciones (ejemplo)
        </a>
      </nav>

      <StepSection
        id="pasos"
        title="Flujo para crear la víctima"
        steps={personaSteps}
        afterFirst={<VistaTable />}
      />

      <section id="lista" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-wikired/30 p-8 md:p-10 halo">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Statements</p>
          <h2 className="text-3xl font-display font-semibold text-slate-900 mt-1">Declaraciones usadas</h2>
          <p className="text-slate-800 mt-3">
            Carga estas propiedades en el ítem. Después, agrega referencias P854 + P1065 + P813 a cada afirmación.
          </p>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            {declarationList.map((prop) => (
              <div key={prop} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-wikired/25 bg-white text-slate-900">
                <span className="inline-flex h-2 w-2 rounded-full bg-wikired" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="declaraciones" className="py-12 md:py-16">
        <div className="glass rounded-3xl border border-white/5 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Ejemplo visual</p>
              <h2 className="text-3xl font-display font-semibold text-slate-900">Cómo se ve en Wikidata</h2>
              <p className="text-slate-800 mt-2">
                Añade una propiedad, guarda el valor y luego pulsa “añadir referencia” para cargar P854, P1065 y P813.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wikired/30 text-sm text-slate-900">
              Coincide con la ficha de la víctima
            </div>
          </div>
          <div className="space-y-5">
            {joseStatements.map((stmt) => (
              <StatementCard key={stmt.property} stmt={stmt} />
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-wikired/25 p-5 bg-white">
            <p className="text-sm text-slate-700 mb-2">Fuentes (colócalas en cada referencia)</p>
            <ul className="list-disc list-inside text-slate-900 text-sm space-y-1">
              {joseSources.map((src) => (
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
            <p className="text-xs text-slate-400 mt-2">
              En cada afirmación usa P854 (URL principal), P1065 (archivo) y P813 (fecha de consulta).
            </p>
          </div>
        </div>
      </section> */}

      <section id="autos" className="pb-14">
        <div className="glass rounded-3xl border border-wikired/30 p-8 md:p-10 halo">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Autos relacionados</p>
              <h2 className="text-3xl font-display font-semibold text-slate-900">Fuentes para usar como referencia</h2>
              <p className="text-slate-800 mt-2">
                Copia las URLs oficiales y sus versiones en archive.org. Si no tienes aún un enlace, déjalo en blanco y actualiza cuando esté disponible.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-wikired/40 text-sm text-slate-900">
              Botón de copiar en cada enlace
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-wikired/40 ion-panel">
            <table className="ion-table table-fixed w-full">
              <thead>
                <tr>
                  <th>Auto</th>
                  <th>Enlace JEP</th>
                  <th>Enlace Archive</th>
                </tr>
              </thead>
              <tbody>
                {autosJudiciales.map((auto) => (
                  <tr key={auto.nombre}>
                    <td className="text-slate-900 font-semibold pr-4">{auto.nombre}</td>
                    <td className="text-slate-900 space-y-1 pr-4">
                      <div className="flex items-start gap-2">
                        <span className="flex-1 break-all text-xs min-h-[20px]">{auto.jep || "—"}</span>
                        <div className="flex-shrink-0">
                          <CopyButton text={auto.jep} />
                        </div>
                      </div>
                    </td>
                    <td className="text-slate-900 space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="flex-1 break-all text-xs min-h-[20px]">{auto.archivo || "—"}</span>
                        <div className="flex-shrink-0">
                          <CopyButton text={auto.archivo} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
