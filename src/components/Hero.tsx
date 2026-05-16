export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/10 animate-float"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white/90 uppercase">
              Simulación Médica con IA
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Entrevista clínica{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              potenciada por IA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:text-xl">
            Simulador de pacientes con IA diseñado para facultades de salud.
            Permite a los estudiantes practicar razonamiento clínico,
            comunicación y diagnóstico en un entorno seguro y evaluado.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/40"
            >
              Conocer más
            </a>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in-up animation-delay-400 mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[

            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}