"use client";

import { useState } from "react";

// Tutorial data structure
const tutorials = [
  {
    id: 1,
    title: "Crear un elemento nuevo",
    description: "Aprende a crear un nuevo elemento en Wikidata con etiquetas, descripciones, declaraciones, calificadores y referencias completas.",
    command: `CREATE
LAST|Les|"Omar Inocencio Rojas"
LAST|Len|"Omar Inocencio Rojas"
LAST|Des|"persona colombiana asesinada el 21 de septiembre de 2005; caso asociado a falsos positivos"
LAST|Den|"Colombian person killed on 21 September 2005; case associated with false positives"

LAST|P31|Q5|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11
LAST|P21|Q6581097|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11
LAST|P27|Q739|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11

LAST|P570|+2005-09-21T00:00:00Z/11|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11
LAST|P20|Q1575548|P1932|"Sector Barranquillita, vereda Santa Cruz"|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11

LAST|P7153|Q130322|P3831|Q18658526|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11

LAST|P1196|Q149086|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11
LAST|P157|Q4115107|P1932|"Miembros del grupo especial Caníbal del BIRNO"|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11
LAST|P793|Q779179|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11

LAST|P1343|Q137351625|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11`,
    sections: [
      {
        section: "Crear el elemento",
        lines: [
          {
            command: "CREATE",
            explanation: "Inicia la creación de un nuevo elemento en Wikidata. Después de este comando, usamos LAST para referirnos al elemento que estamos creando."
          },
          {
            command: 'LAST|Les|"Omar Inocencio Rojas"',
            explanation: "Añade la etiqueta (label) en español. Les = Label en español. Esta será la etiqueta principal que aparecerá en Wikidata."
          },
          {
            command: 'LAST|Len|"Omar Inocencio Rojas"',
            explanation: "Añade la etiqueta (label) en inglés. Len = Label en inglés. Es importante tener etiquetas en múltiples idiomas."
          },
          {
            command: 'LAST|Des|"persona colombiana asesinada el 21 de septiembre de 2005; caso asociado a falsos positivos"',
            explanation: "Añade la descripción en español. Des = Description en español. La descripción ayuda a distinguir este elemento de otros similares."
          },
          {
            command: 'LAST|Den|"Colombian person killed on 21 September 2005; case associated with false positives"',
            explanation: "Añade la descripción en inglés. Den = Description en inglés."
          }
        ]
      },
      {
        section: "Declaraciones básicas de identidad",
        lines: [
          {
            command: 'LAST|P31|Q5|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P31 (instancia de) = Q5 (ser humano). Declara que este elemento es una persona. S854 añade la URL de referencia y S813 la fecha de consulta."
          },
          {
            command: 'LAST|P21|Q6581097|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P21 (sexo o género) = Q6581097 (masculino). Indica el género de la persona con su referencia."
          },
          {
            command: 'LAST|P27|Q739|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P27 (país de ciudadanía) = Q739 (Colombia). Establece la nacionalidad colombiana."
          }
        ]
      },
      {
        section: "Información sobre la muerte",
        lines: [
          {
            command: 'LAST|P570|+2005-09-21T00:00:00Z/11|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P570 (fecha de muerte) = 21 de septiembre de 2005. El formato +2005-09-21T00:00:00Z/11 indica precisión de día."
          },
          {
            command: 'LAST|P20|Q1575548|P1932|"Sector Barranquillita, vereda Santa Cruz"|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P20 (lugar de muerte) = Q1575548. P1932 es un calificador que añade el nombre del objeto como aparece en la fuente (\"Sector Barranquillita, vereda Santa Cruz\")."
          }
        ]
      },
      {
        section: "Circunstancias de la muerte",
        lines: [
          {
            command: 'LAST|P7153|Q130322|P3831|Q18658526|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P7153 (circunstancias significativas de la muerte) = Q130322 (asesinato). P3831 es un calificador que indica el rol (Q18658526 = víctima)."
          },
          {
            command: 'LAST|P1196|Q149086|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P1196 (manera de muerte) = Q149086 (homicidio). Especifica cómo murió la persona."
          },
          {
            command: 'LAST|P157|Q4115107|P1932|"Miembros del grupo especial Caníbal del BIRNO"|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P157 (asesinado por) = Q4115107 (Ejército Nacional de Colombia). P1932 califica con el nombre específico de la unidad responsable."
          },
          {
            command: 'LAST|P793|Q779179|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P793 (evento significativo) = Q779179 (ejecución extrajudicial). Documenta el tipo de evento que sufrió la víctima."
          }
        ]
      },
      {
        section: "Referencias documentales",
        lines: [
          {
            command: 'LAST|P1343|Q137351625|S854|"https://relatoria.jep.gov.co//documentos/providencias/1/1/Auto_SRVR-SUB-D-SUBCASO-CASANARE-055_14-julio-2022.pdf"|S813|+2025-12-16T00:00:00Z/11',
            explanation: "P1343 (descrito en la fuente) = Q137351625 (Auto judicial de la JEP). Vincula el elemento con el documento oficial que lo describe."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Editar ítem existente - Lugar significativo",
    description: "Aprende a editar un elemento existente en Wikidata añadiendo una declaración con calificadores y múltiples referencias.",
    command: `Q135518890|P7153|Q130359|P3831|Q18658526|S854|"https://archive.org/details/auto-srvr-125-02-julio-2021"|S813|+2025-10-15T00:00:00Z/11|S854|"https://www.coljuristas.org/observatorio_jep/documentos/documento.php?lan=en&id=275"|S813|+2025-10-16T00:00:00Z/11`,
    sections: [
      {
        section: "Estructura del comando",
        intro: "Este comando edita un ítem existente (no crea uno nuevo). A diferencia del comando CREATE, aquí especificamos directamente el ID del elemento que queremos modificar.",
        lines: []
      },
      {
        section: "Declaración principal (Statement)",
        intro: "La declaración sigue la estructura: Sujeto → Propiedad → Valor",
        lines: [
          {
            command: "Q135518890",
            explanation: "Sujeto: Javier Barrientos Bautista (ítem existente en Wikidata). Este es el elemento que vamos a editar."
          },
          {
            command: "P7153",
            explanation: "Propiedad: significant place (lugar significativo). Esta propiedad se usa para indicar lugares relevantes en la vida o muerte de una persona."
          },
          {
            command: "Q130359",
            explanation: "Valor: Andean natural region of Colombia (Región Andina de Colombia). Este es el lugar significativo que estamos asociando con la persona."
          }
        ]
      },
      {
        section: "Calificador (Qualifier)",
        intro: "Los calificadores añaden contexto adicional a la declaración principal, especificando el rol o la naturaleza de la relación.",
        lines: [
          {
            command: "P3831|Q18658526",
            explanation: "P3831 = object of statement has role (el objeto tiene el rol de...), Q18658526 = place of death (lugar de muerte). Esto especifica que la Región Andina es significativa en el contexto de ser el lugar de muerte."
          }
        ]
      },
      {
        section: "Referencias (References)",
        intro: "Este comando incluye dos referencias completas, cada una con su URL (S854) y fecha de consulta (S813).",
        lines: [
          {
            command: 'S854|"https://archive.org/details/auto-srvr-125-02-julio-2021"|S813|+2025-10-15T00:00:00Z/11',
            explanation: "Primera referencia: S854 = URL de la fuente (Auto judicial en Archive.org), S813 = fecha de consulta (15 de octubre de 2025)."
          },
          {
            command: 'S854|"https://www.coljuristas.org/observatorio_jep/documentos/documento.php?lan=en&id=275"|S813|+2025-10-16T00:00:00Z/11',
            explanation: "Segunda referencia: S854 = URL de la fuente (Observatorio JEP de Coljuristas), S813 = fecha de consulta (16 de octubre de 2025). Wikidata permite múltiples referencias en una misma declaración."
          }
        ]
      },
      {
        section: "Resultado en Wikidata",
        intro: "Después de ejecutar este comando, en el ítem Q135518890 (Javier Barrientos Bautista) verás:",
        lines: [
          {
            command: "significant place (P7153): Andean natural region of Colombia (Q130359)",
            explanation: "La declaración principal aparecerá con esta estructura."
          },
          {
            command: "— cualificador: object of statement has role (P3831): place of death (Q18658526)",
            explanation: "El calificador se mostrará indentado bajo la declaración principal."
          },
          {
            command: "— referencias: 2 URLs con sus respectivas fechas de consulta",
            explanation: "Ambas referencias aparecerán en la sección de referencias de la declaración, proporcionando verificabilidad a la información."
          }
        ]
      }
    ]
  }
];

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
  const [copied, setCopied] = useState(false);
  const [activeTutorialId, setActiveTutorialId] = useState(1);

  const activeTutorial = tutorials.find(t => t.id === activeTutorialId);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTutorial.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

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

      {/* Tutorials Section with Tabs */}
      <section className="mb-8">
        <h2 className="font-display text-2xl text-wikidark mb-4">
          Tutoriales y Explicaciones Detalladas
        </h2>

        {/* Tutorial Navigation */}
        <div className="flex flex-wrap border-b border-wikigray mb-6">
          {tutorials.map((tutorial) => (
            <button
              key={tutorial.id}
              onClick={() => setActiveTutorialId(tutorial.id)}
              className={`px-6 py-3 font-display font-bold text-sm transition-colors border-t border-l border-r border-b-0 rounded-t-md mr-2 ${
                activeTutorialId === tutorial.id
                  ? "bg-wikilight text-wikiblue border-wikigray -mb-px relative z-10"
                  : "bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100"
              }`}
            >
              Tutorial {tutorial.id}: {tutorial.title}
            </button>
          ))}
        </div>
        
        <div className="wiki-notice-info mb-6">
          <h3 className="font-display text-lg text-wikiblue mb-2">
            {activeTutorial.title}
          </h3>
          <p className="font-body text-wikidark">
            {activeTutorial.description}
          </p>
        </div>

        {/* Complete Command with Copy Button */}
        <div className="wiki-card mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-lg text-wikidark border-0 m-0 p-0">
              Comando completo
            </h3>
            <button
              onClick={handleCopy}
              className="wiki-button-primary flex items-center gap-2"
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>Copiar comando</span>
                </>
              )}
            </button>
          </div>
          <pre className="bg-wikilight border border-wikigray p-4 overflow-x-auto max-h-96">
            <code className="font-mono text-sm text-wikidark border-0 bg-transparent p-0">
              {activeTutorial.command}
            </code>
          </pre>
          <p className="font-body text-wikidark text-sm mt-3">
            💡 <strong>Tip:</strong> Puedes copiar este comando completo y pegarlo directamente en{" "}
            <a 
              href="https://quickstatements.toolforge.org" 
              target="_blank" 
              rel="noreferrer"
              className="text-wikiblue hover:underline"
            >
              QuickStatements
            </a>
            {" "}para crear o editar el elemento.
          </p>
        </div>

        {/* Line by Line Explanation */}
        <h3 className="font-display text-xl text-wikidark mb-4 mt-8">
          Explicación línea por línea
        </h3>

        <div className="space-y-6">
          {activeTutorial.sections.map((section, sectionIndex) => (
            <div key={section.section} className="wiki-card">
              <h3 className="font-display text-lg text-wikigreen mb-4 border-b border-wikigray pb-2">
                {sectionIndex + 1}. {section.section}
              </h3>
              {section.intro && (
                <p className="font-body text-wikidark mb-4 italic">
                  {section.intro}
                </p>
              )}
              <div className="space-y-4">
                {section.lines.map((line, lineIndex) => (
                  <div key={lineIndex} className="border-l-4 border-wikiblue pl-4">
                    <pre className="bg-wikilight border border-wikigray p-3 mb-2 overflow-x-auto">
                      <code className="font-mono text-sm text-wikidark border-0 bg-transparent p-0">
                        {line.command}
                      </code>
                    </pre>
                    <p className="font-body text-wikidark text-sm leading-relaxed">
                      <strong className="text-wikiblue">Explicación:</strong> {line.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="wiki-notice-warning mt-6">
          <h4 className="font-display text-base text-wikidark mb-2 border-0 m-0 p-0">
            Elementos clave de la sintaxis
          </h4>
          <ul className="font-body text-wikidark space-y-2 list-disc list-inside text-sm">
            <li>
              <strong>LAST</strong>: Se refiere al último elemento creado (el que se creó con CREATE)
            </li>
            <li>
              <strong>P###</strong>: Identificador de propiedad en Wikidata (ej: P31 = instancia de)
            </li>
            <li>
              <strong>Q###</strong>: Identificador de elemento en Wikidata (ej: Q5 = ser humano)
            </li>
            <li>
              <strong>S854</strong>: Propiedad de referencia para URL de la fuente
            </li>
            <li>
              <strong>S813</strong>: Propiedad de referencia para fecha de consulta
            </li>
            <li>
              <strong>P1932</strong>: Calificador para "nombre del objeto como aparece en la fuente"
            </li>
            <li>
              <strong>P3831</strong>: Calificador para "rol del objeto"
            </li>
            <li>
              <strong>+YYYY-MM-DDT00:00:00Z/11</strong>: Formato de fecha con precisión de día
            </li>
          </ul>
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
