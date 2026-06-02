const milestones = [
    {
        date: '22 / Mayo',
        title: 'Presentación de propuesta',
        status: 'current',
        items: [
            'Documento formal de propuesta',
            'Defensa ante comité evaluador',
            'Definición de alcance con facultad aliada',
        ],
    },
    {
        date: '30 / Junio',
        title: 'MVP entregable',
        status: 'upcoming',
        items: [
            'Mínimo 4 casos clínicos completos',
            'Al menos 2 especialidades: medicina interna y psicología clínica',
            'Clasificador de preguntas, modelo de estado y evaluador operativos',
            'Interfaz web con roles: estudiante, profesor, coordinador',
            'Historial de sesiones y dashboard básico de desempeño',
        ],
    },
    {
        date: '31 / Agosto',
        title: 'Producto Final (alcance ampliado)',
        status: 'upcoming',
        items: [
            'Expansión de la biblioteca de casos',
            'Analíticas grupales avanzadas y curvas de aprendizaje',
            'Panel completo para coordinador académico',
            'Optimización de los modelos y métricas de evaluación',
        ],
    },
];

const outOfScope = [
    'Integración con sistemas de gestión escolar externos',
    'Transcripción de voz y reconocimiento automático (no incluido en MVP)',
    'Aplicación móvil nativa',
    'Marketplace de casos clínicos entre instituciones (plan a mediano plazo)',
];

export default function Scope() {
    return (
        <section id="scope" className="relative py-24 lg:py-32 bg-surface-container overflow-hidden">
            <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl -translate-x-1/2" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Planteamiento del problema</p>
                    <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl lg:text-4xl">
                        Brecha estructural entre teoría y práctica en la entrevista clínica
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-on-surface-variant leading-relaxed">
                        La formación clínica en carreras de la salud enfrenta una separación entre el conocimiento teórico y la práctica real de la entrevista con pacientes. Los estudiantes saben la teoría, pero tienen pocas oportunidades de practicar entrevistas abiertas y evaluables antes de enfrentarse a pacientes reales, lo que aumenta el riesgo de errores en entornos clínicos.
                    </p>
                </div>

                <div className="mx-auto mb-10 max-w-4xl rounded-2xl border border-outline-variant/30 bg-surface p-6 lg:p-8">
                    <h3 className="mb-3 text-lg font-bold text-on-surface">Propuesta de solución</h3>
                    <p className="mb-3 text-sm text-on-surface-variant leading-relaxed">
                        SimPaciente es una plataforma web donde el estudiante practica entrevistas clínicas en lenguaje completamente abierto. El sistema controla qué información revela el paciente según lo preguntado y el orden en que se obtiene, permitiendo práctica deliberada, repetición y evaluación objetiva.
                    </p>
                    <p className="mb-0 text-sm text-on-surface-variant leading-relaxed">
                        El núcleo incluye tres modelos propios: un clasificador de preguntas clínicas, un modelo de estado del paciente que gestiona el grafo de información del caso, y un evaluador de razonamiento clínico que puntúa el proceso por dimensiones.
                    </p>
                </div>

                {/* Timeline */}
                <div className="grid gap-6 lg:grid-cols-3 mb-16">
                    {milestones.map((m, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 ${
                                m.status === 'current'
                                    ? 'border-accent shadow-xl shadow-accent/15 ring-2 ring-accent/20'
                                    : 'border-outline-variant/40 hover:shadow-lg hover:shadow-primary/5'
                            }`}
                        >
                            {m.status === 'current' && (
                                <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                    Próxima entrega
                                </div>
                            )}
                            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">
                                {m.date} · 2026
                            </div>
                            <h3 className="mb-5 text-xl font-bold text-on-surface">{m.title}</h3>
                            <ul className="space-y-3">
                                {m.items.map((item, j) => (
                                    <li key={j} className="flex gap-2.5 items-start">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-on-surface-variant leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Out of scope */}
                <div className="mx-auto max-w-4xl rounded-2xl border border-error/20 bg-error/[0.03] p-7 lg:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-error/10 text-error">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-3 text-lg font-bold text-on-surface">
                                Fuera del alcance del proyecto
                            </h3>
                            <p className="mb-4 text-sm text-on-surface-variant leading-relaxed">
                                Definir los límites es tan importante como definir el producto. SimPaciente <span className="font-semibold">no es</span>:
                            </p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                                {outOfScope.map((item, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-error/60" />
                                        <span className="text-sm text-on-surface-variant">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
