import Link from "next/link";

export default function BuenasPracticasPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
      {/* Header Section */}
      <div className="border border-wikigray bg-white p-8 mb-8 rounded-lg">
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-wikiblue hover:text-wikibluehover hover:underline font-body text-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
        
        <h1 className="font-display text-4xl text-wikidark mb-4 border-b-2 border-wikigray pb-2">
          Buenas Prácticas
        </h1>
        
        <p className="font-body text-wikidark leading-relaxed mb-6">
          Desde Wikimedia Colombia pensamos en las buenas prácticas y en el cuidado. 
          Esta guía reúne los principios y recomendaciones para trabajar responsablemente 
          en el Colaboratorio de Memoria Histórica, asegurando el respeto, la ética 
          y la preservación adecuada de la información.
        </p>

        <div className="wiki-notice">
          <p className="font-display font-bold text-wikidark mb-2">Guía de Buenas Prácticas</p>
          <p className="font-body text-wikidark">
            Consulta nuestra guía completa para el Colaboratorio de Memoria Histórica
          </p>
        </div>
      </div>

      {/* PDF Viewer Section */}
      <div className="border border-wikigray bg-white p-8 rounded-lg">
        <h2 className="font-display text-2xl text-wikidark mb-4 border-b border-wikigray pb-2">
          Guía de Buenas Prácticas para el Colaboratorio de Memoria Histórica
        </h2>
        
        <p className="font-body text-wikidark leading-relaxed mb-6">
          Esta guía proporciona un marco ético y metodológico para la contribución 
          responsable a la memoria histórica de Colombia. Incluye principios de 
          cuidado, respeto y buenas prácticas para la documentación y preservación 
          de testimonios y datos históricos.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
          <a
            href="https://ia600802.us.archive.org/29/items/guia-de-buenas-practicas-para-el-colaboratorio-de-memoria-historica/Copia%20de%20Gu%C3%ADa%20de%20Buenas%20Pr%C3%A1cticas%20para%20el%20Colaboratorio%20de%20Memoria%20Hist%C3%B3rica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-button wiki-button-primary inline-flex items-center gap-2"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Descargar PDF
          </a>
          
          <span className="font-body text-sm text-wikidark">
            Formato: PDF | Tamaño: ~2.5 MB | Idioma: Español
          </span>
        </div>

        {/* PDF Viewer */}
        <div className="w-full border border-wikigray rounded-lg overflow-hidden" style={{ height: '800px' }}>
          <iframe
            src="https://ia600802.us.archive.org/29/items/guia-de-buenas-practicas-para-el-colaboratorio-de-memoria-historica/Copia%20de%20Gu%C3%ADa%20de%20Buenas%20Pr%C3%A1cticas%20para%20el%20Colaboratorio%20de%20Memoria%20Hist%C3%B3rica.pdf#view=FitV"
            className="w-full h-full"
            title="Guía de Buenas Prácticas para el Colaboratorio de Memoria Histórica"
            frameBorder="0"
          >
            <p className="font-body text-wikidark p-4">
              Tu navegador no soporta la visualización de PDFs. 
              <a 
                href="https://ia600802.us.archive.org/29/items/guia-de-buenas-practicas-para-el-colaboratorio-de-memoria-historica/Copia%20de%20Gu%C3%ADa%20de%20Buenas%20Pr%C3%A1cticas%20para%20el%20Colaboratorio%20de%20Memoria%20Hist%C3%B3rica.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wikiblue hover:text-wikibluehover hover:underline ml-2"
              >
                Haz clic aquí para descargar el PDF
              </a>
            </p>
          </iframe>
        </div>

      </div>

    </main>
  );
}
