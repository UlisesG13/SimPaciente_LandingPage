import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Problema', href: '#problem' },
    { label: 'Arquitectura IA', href: '#ml' },
    { label: 'Usuarios', href: '#benefits' },
    { label: 'Alcances', href: '#scope' },
    { label: 'Modelo de Negocio', href: '#faculty' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            id="main-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <a href="#hero" className="flex items-center gap-2.5 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                        SP
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                        Sim<span className="text-accent">Paciente</span>
                    </span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 ${scrolled ? 'text-on-surface-variant hover:text-primary hover:bg-primary/5' : 'text-white/80 hover:text-white'}`}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <button id="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden rounded-lg p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`} aria-label="Toggle menu">
                    {mobileOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-on-surface-variant transition-colors hover:bg-primary/5 hover:text-primary">
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white">
                        Solicitar Demo
                    </a>
                </div>
            </div>
        </nav>
    );
}
