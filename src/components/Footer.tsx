const footerLinks = {
  Producto: ['Características', 'Simulador IA', 'Casos Clínicos', 'Seguridad'],
  Institucional: ['Para Facultades', 'Planes', 'Privacidad', 'Términos'],
  Contacto: ['info@sim-paciente.com', 'Soporte técnico 24/7'],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white font-bold text-sm">SP</div>
              <span className="text-lg font-bold text-white">Sim<span className="text-accent">Paciente</span></span>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              Innovación en simulación médica. Transformando el futuro de la educación en salud mediante IA ética y local.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 transition-colors duration-200 hover:text-accent">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">© SmartHill 2026 SimPaciente. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            {['Privacidad', 'Términos', 'HIPAA'].map((l) => (
              <a key={l} href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
