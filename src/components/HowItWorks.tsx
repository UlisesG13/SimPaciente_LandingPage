const steps = [
  {
    number: '01',
    title: 'Elige un caso clínico',
    description: 'Selecciona entre patologías comunes o casos raros diseñados por especialistas.',
  },
  {
    number: '02',
    title: 'Realiza la entrevista',
    description: 'Interacciona con la IA por lenguaje natural. El paciente reacciona a tus preguntas y tono.',
  },
  {
    number: '03',
    title: 'Recibe evaluación',
    description: 'Obtén un reporte detallado basado en rúbricas institucionales y mejora tus habilidades.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-inverse-surface overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Proceso simple</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Cómo funciona la simulación</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">Tres pasos para transformar la práctica clínica de tus estudiantes</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-2">
              <div className="mb-6 text-6xl font-black text-white/5 leading-none">{step.number}</div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
