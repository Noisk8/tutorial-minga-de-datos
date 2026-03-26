import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tutorial: Cómo Crear Ontologías en Wikidata",
  description:
    "Guía interactiva paso a paso para modelar una Persona Víctima y un Auto Judicial en Wikidata, con ejemplos, referencias y buenas prácticas.",
  icons: {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wikimedia-Colombia-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased relative min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
