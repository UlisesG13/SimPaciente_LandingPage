const models = [
    {
        order: '01',
        title: 'Clasificador de preguntas clínicas',
        type: 'NLP supervisado',
        base: 'BETO / RoBERTuito (transformer en español)',
        description: 'Clasifica en tiempo real la dimensión clínico-lingüística de cada intervención: síntoma principal, cronología, intensidad, agravantes, antecedentes, medicamentos o contexto social.',
        training: 'Fine-tuning sobre corpus anotado por profesores y datasets clínicos en español.',
        color: 'primary',
    },
    {
        order: '02',
        title: 'Modelo de estado del paciente (grafo de información)',
        type: 'Lógica de control + reglas',
        base: 'Grafo de estados definido por el profesor + motor de decisión',
        description: 'Controla qué información está disponible, qué se mantiene oculta y qué se revela de forma espontánea según el historial completo de la sesión. No genera texto libre, decide la política de revelación.',
        training: 'Casos clínicos modelados por profesores con reglas condicionales y validaciones de comportamiento.',
        color: 'accent',
    },
    {
        order: '03',
        title: 'Evaluador de razonamiento clínico',
        type: 'ML supervisado + reglas de rúbrica',
        base: 'Modelo entrenado sobre rúbricas OSCE y sesiones anotadas',
        description: 'Al finalizar la sesión, compara el recorrido del estudiante contra la rúbrica definida por el profesor y genera un score por dimensión con retroalimentación estructurada.',
        training: 'Sesiones reales anotadas por profesores; validación inter-rater y métricas de precisión/recall.',
        color: 'gold',
    },
];

export default function MLArchitecture() {
    return (
        <section id="ml" className="relative py-24 lg:py-32 bg-inverse-surface overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-secondary/8 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Arquitectura técnica</p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Tres modelos propios <span className="gradient-text">coordinados</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-lg text-white/60 leading-relaxed">
                        No es un chatbot. SimPaciente separa la decisión pedagógica (qué revelar y cómo evaluar) de la generación de texto. Los tres modelos propios determinan la política y la evaluación; un LLM local solo redacta las respuestas del paciente cuando corresponde.
                    </p>
                </div>

                {/* Differentiator banner */}
                <div className="mb-16 rounded-2xl border border-accent/30 bg-accent/5 p-6 lg:p-8 backdrop-blur-sm">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mb-1 text-lg font-bold text-white">Sin dependencia externa en la toma de decisiones clínicas.</h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                La inferencia que decide qué revelar y cómo evaluar se ejecuta en nuestros modelos propios. El texto final del paciente puede generarse con un LLM auto-hospedado, pero las políticas pedagógicas y de privacidad permanecen bajo control del sistema.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Models grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {models.map((model) => (
                        <div
                            key={model.order}
                            className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.07] hover:-translate-y-1"
                        >
                            <div className="absolute top-6 right-6 text-5xl font-black text-white/5 leading-none">
                                {model.order}
                            </div>
                            <div className="relative">
                                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                                    {model.type}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white pr-12">
                                    {model.title}
                                </h3>
                                <div className="mb-4 inline-flex rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-white/70">
                                    {model.base}
                                </div>
                                <p className="mb-4 text-sm text-white/70 leading-relaxed">
                                    {model.description}
                                </p>
                                <div className="rounded-lg border-l-2 border-accent/50 bg-white/[0.03] px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-accent/80 mb-1">Entrenamiento</p>
                                    <p className="text-xs text-white/60 leading-relaxed">{model.training}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech stack footer */}
                <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                    <h4 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-white/60">
                        Stack tecnológico open-source
                    </h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'BETO', 'RoBERTuito', 'Llama 3 8B', 'Mistral 7B',
                            'PyTorch', 'HuggingFace', 'LoRA', 'spaCy',
                            'scikit-learn', 'FastAPI', 'PostgreSQL', 'Docker',
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-accent/40 hover:text-accent"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
