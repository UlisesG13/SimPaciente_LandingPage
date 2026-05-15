export default function Pricing() {
  return (
    <section id="faculty" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Para tu facultad</p>
        <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
          Modelo de Licencia <span className="gradient-text">Institucional</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">
          Nuestras licencias anuales se adaptan al número de estudiantes y programas académicos.
        </p>
        <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-primary/15 bg-white p-10 shadow-2xl shadow-primary/8 transition-transform duration-300 hover:scale-[1.02]">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Plan Estándar</div>
          <div className="mb-1 text-4xl font-bold text-on-surface">Pago por sede</div>
          <div className="text-sm text-on-surface-variant mb-8">académica</div>
          <ul className="mb-10 space-y-4 text-left">
            {[
              'Implementación y capacitación docente inicial',
              'Acceso ilimitado a la biblioteca de casos clínicos',
              'Evaluación automática con rúbricas personalizables',
              'Soporte técnico y pedagógico continuo',
              'Despliegue en infraestructura local (LLM propio)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="block w-full rounded-xl bg-gradient-to-r from-primary to-secondary py-4 text-center font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-0.5">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}
