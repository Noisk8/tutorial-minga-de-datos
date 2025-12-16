"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Inicio" },
        { href: "/victima", label: "Persona Víctima" },
        { href: "/auto", label: "Auto Judicial" },
        { href: "/quickstatements", label: "QuickStatements" },
    ];

    return (
        <nav className="border-b border-wikigray bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3 hover:no-underline">
                            <div className="w-10 h-10 relative flex-shrink-0">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Wikimedia-Colombia-logo.svg"
                                    alt="Wikimedia Colombia"
                                    fill
                                    className="object-contain"
                                    sizes="40px"
                                    priority
                                />
                            </div>
                            <span className="font-display text-xl text-wikidark font-normal">
                                Minga de Datos
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 font-body text-sm transition-colors hover:no-underline ${isActive
                                            ? "bg-wikilight text-wikiblue border-b-2 border-wikiblue"
                                            : "text-wikidark hover:bg-wikilight"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            className="wiki-button text-sm"
                            onClick={() => {
                                const menu = document.getElementById("mobile-menu");
                                menu?.classList.toggle("hidden");
                            }}
                        >
                            Menú
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div id="mobile-menu" className="hidden md:hidden pb-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 font-body text-sm hover:no-underline ${isActive
                                        ? "bg-wikilight text-wikiblue font-bold"
                                        : "text-wikidark hover:bg-wikilight"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
