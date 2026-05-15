const testimonials = [
  {
    quote: 'SimPaciente ha transformado la manera en que nuestros alumnos de tercer año abordan la entrevista clínica. La IA es sorprendentemente humana y el feedback es preciso.',
    name: 'Dra. Elena Ruiz',
    role: 'Coordinadora de Simulación',
  },
  {
    quote: 'La capacidad de escalar la práctica clínica a 500 alumnos simultáneamente sin necesidad de contratar 50 actores ha sido un cambio de juego para nuestro presupuesto.',
    name: 'Dr. Marcos Silva',
    role: 'Decano de Facultad',
  },
  {
    quote: 'Lo que más valoramos es la privacidad. Al ser una IA local, nuestros casos clínicos y datos de alumnos no salen de nuestra infraestructura universitaria.',
    name: 'Ing. Clara Montes',
    role: 'Directora de IT',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-container overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Testimonios</p>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
            Confían en <span className="gradient-text">nosotros</span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative rounded-2xl bg-white p-8 shadow-lg shadow-primary/3 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1">
              <div className="absolute -top-3 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-xl font-serif">"</div>
              <p className="mt-4 mb-6 text-on-surface-variant leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-outline-variant/30 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-on-surface">{t.name}</div>
                  <div className="text-xs text-on-surface-variant">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
