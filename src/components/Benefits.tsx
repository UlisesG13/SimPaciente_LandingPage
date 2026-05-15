const roles = [
    { title: 'Estudiante', desc: 'Practica sin miedo al error y recibe feedback inmediato para mejorar rápido.', icon: '🎓' },
    { title: 'Profesor', desc: 'Automatiza la evaluación y detecta brechas de conocimiento en el grupo de forma masiva.', icon: '👨‍🏫' },
    { title: 'Coordinador', desc: 'Garantiza una calidad formativa homogénea y estandarizada para todos los alumnos.', icon: '📋' },
];

export default function Benefits() {
    return (
        <section id="benefits" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
            <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -translate-x-1/2" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Impacto</p>
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                        Impacto en toda la <span className="gradient-text">institución</span>
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {roles.map((r, i) => (
                        <div key={i} className="group relative rounded-2xl border border-outline-variant/30 bg-white p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2 hover:border-primary/20">
                            <div className="mb-5 text-4xl transition-transform duration-300 group-hover:scale-125">{r.icon}</div>
                            <h3 className="mb-3 text-lg font-bold text-on-surface">{r.title}</h3>
                            <p className="text-sm leading-relaxed text-on-surface-variant">{r.desc}</p>
                            <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-2/3" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
