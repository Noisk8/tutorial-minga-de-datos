import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Tutorial: Cómo Crear Ontologías en Wikidata",
  description:
    "Guía interactiva paso a paso para modelar una Persona Víctima y un Auto Judicial en Wikidata, con ejemplos, referencias y buenas prácticas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
