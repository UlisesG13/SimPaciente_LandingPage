const stats = [
    {
        value: '$800K – $2M',
        unit: 'MXN',
        label: 'Costo de un simulador clínico físico',
        sub: 'Por equipo, sin contar mantenimiento ni actores estandarizados.',
    },
    {
        value: '< 10',
        unit: 'entrevistas',
        label: 'Promedio de práctica clínica real',
        sub: 'Por estudiante de medicina durante toda la carrera, muy por debajo del estándar internacional recomendado.',
    },
    {
        value: '100%',
        unit: 'inglés',
        label: 'Plataformas existentes',
        sub: 'Ninguna considera español mexicano coloquial ni el contexto cultural del paciente local.',
    },
    {
        value: '3',
        unit: 'países LATAM',
        label: 'Con déficit reportado de prácticas',
        sub: 'México, Colombia y Argentina enfrentan brechas similares en formación clínica práctica.',
    },
];

export default function ProblemStats() {
    return (
        <section id="problem" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-error/4 blur-3xl translate-x-1/3" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-error/80 mb-3">El problema</p>
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                        Los futuros médicos egresan{' '}
                        <span className="text-error">sin practicar lo suficiente</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-lg text-on-surface-variant leading-relaxed">
                        Las facultades de medicina, enfermería y psicología en México enfrentan un problema estructural: practicar la entrevista clínica requiere pacientes, profesores que observen y retroalimentación detallada. La realidad es que los estudiantes practican con sus compañeros o esperan al internado para enfrentar pacientes reales, aprendiendo con ellos en lugar de antes de ellos.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl border border-outline-variant/30 bg-white p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="mb-4 flex items-baseline gap-2">
                                <span className="text-4xl font-black tracking-tight text-primary lg:text-5xl">
                                    {s.value}
                                </span>
                                <span className="text-sm font-semibold text-on-surface-variant">{s.unit}</span>
                            </div>
                            <h3 className="mb-2 text-base font-bold text-on-surface leading-tight">
                                {s.label}
                            </h3>
                            <p className="text-sm leading-relaxed text-on-surface-variant">
                                {s.sub}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 rounded-t-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>

                {/* Bottom quote */}
                <div className="mt-16 mx-auto max-w-3xl text-center">
                    <p className="text-lg italic text-on-surface-variant leading-relaxed">
                        “El estudiante practica con sus compañeros o aprende a entrevistar pacientes reales{' '}
                        <span className="font-semibold text-primary not-italic">cuando ya está atendiendo pacientes reales</span>.”
                    </p>
                </div>
            </div>
        </section>
    );
}
