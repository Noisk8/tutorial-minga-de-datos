export default function OpenRefinePage() {
  const OpenRefineLink = ({ children }) => (
    <a href="https://openrefine.org/" target="_blank" rel="noreferrer" className="text-wikiblue hover:underline font-semibold">
      {children || 'OpenRefine'}
    </a>
  );

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="border border-wikigray bg-white p-6 mb-8">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-wikilight border border-wikigray text-wikidark text-xs font-body">
            Tutorial de OpenRefine
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-wikidark mb-4 border-b-2 border-wikigray pb-2">
          Introducción a OpenRefine
        </h1>
        <p className="font-body text-wikidark leading-relaxed mb-4">
          Aprende a usar <OpenRefineLink /> para trabajar con datos desordenados: limpiarlos, transformarlos de un formato a otro y ampliarlos con servicios web y datos externos (como Wikidata).
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/" className="wiki-button">
            ← Volver al home
          </a>
          <a
            href="https://openrefine.org/download"
            target="_blank"
            rel="noreferrer"
            className="wiki-button-primary"
          >
            Descargar OpenRefine ↗
          </a>
        </div>
      </div>


      {/* Video Section */}
      <section className="mb-8">
        <div className="wiki-card border-l-4 border-l-wikiblue">
          <h2 className="font-display text-2xl text-wikidark mb-3 border-0 p-0 m-0">¿Qué es OpenRefine?</h2>
          <p className="font-body text-wikidark leading-relaxed mb-4">
            <OpenRefineLink /> es una potente herramienta para trabajar con datos desordenados: limpiarlos, transformarlos y enriquecerlos. En el contexto de Wikidata, <OpenRefineLink /> nos permite importar hojas de cálculo, reconciliar nuestros datos con elementos existentes en Wikidata y subir la información de forma masiva y estructurada.
          </p>
          <div className="font-body text-wikidark leading-relaxed mb-6 bg-wikilight p-4 border-l-4 border-wikigray rounded-r-md">
            <p className="m-0">
              ▶️ En el siguiente video, <strong>Viviana</strong> nos guía para aprender a utilizar <OpenRefineLink /> paso a paso.
            </p>
          </div>
          <div className="mb-4 relative w-full aspect-video flex justify-center">
            <iframe 
              className="w-full max-w-3xl aspect-video rounded-md shadow-sm"
              src="https://www.youtube.com/embed/UXwNYy5AmYk?si=UqOF_o_x25TpMYwh" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Schema Download Section */}
      <section className="mb-8">
        <div className="wiki-card border-l-4 border-l-wikigreen">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl text-wikidark mb-2 border-0 p-0 m-0">
                📥 Esquema Base de Datos
              </h2>
              <p className="font-body text-wikidark leading-relaxed m-0">
                Descarga este esquema en formato JSON. Es la estructura base obligatoria para trabajar la subida de archivos en lote a Wikidata usando <OpenRefineLink />. Al usar este esquema garantizas tener las columnas y configuraciones correctas para que la reconciliación y estructuración de los datos de las víctimas o documentos de la JEP funcione sin errores.
              </p>
            </div>
            <a
              href="/Esquema_Minga_De_Datos.json"
              download
              className="wiki-button-primary flex-shrink-0 flex items-center gap-2"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>Descargar Esquema JSON</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
