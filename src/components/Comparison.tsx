const traditional = [
  'Practica clínica limitada a pocas horas por semestre.',
  'Costes elevados de contratación de actores para simulaciones.',
  'Evaluación subjetiva y lenta para grandes grupos de alumnos.',
];

const solution = [
  'Práctica ilimitada 24/7 desde cualquier dispositivo.',
  'Miles de casos clínicos generados por IA con rigor médico.',
  'Evaluación instantánea de razonamiento y empatía.',
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            ¿Por qué cambiar?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
            Del modelo tradicional a la{' '}
            <span className="gradient-text">innovación</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-2xl border border-error/15 bg-error/3 p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-error/10">
                <svg className="h-5 w-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-on-surface">El Modelo Tradicional</h3>
            </div>
            <ul className="space-y-5">
              {traditional.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-error/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-on-surface-variant leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 lg:p-10 shadow-xl shadow-accent/5 animate-pulse-glow transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-on-surface">La Solución SimPaciente</h3>
            </div>
            <ul className="space-y-5">
              {solution.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-on-surface-variant leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
