const tiers = [
    {
        name: 'Licencia Institucional',
        badge: 'Motor principal de ingresos',
        price: '$300 – $500',
        priceUnit: 'MXN / estudiante / año',
        description: 'Facultades de medicina, enfermería y psicología. Acceso ilimitado durante todo el ciclo escolar.',
        example: 'Una facultad de 500 estudiantes = $150K – $250K MXN anuales.',
        highlight: true,
        features: [
            'Implementación y capacitación docente inicial',
            'Acceso ilimitado a la biblioteca de casos clínicos',
            'Diseño de casos personalizados por profesores',
            'Panel completo para coordinador académico',
            'Evaluación automática con rúbricas tipo OSCE',
            'Soporte técnico y pedagógico continuo',
            'Despliegue en infraestructura local (LLM propio)',
        ],
    },
    {
        name: 'Estudiante Individual',
        badge: 'Ingreso secundario · B2C',
        price: '$99 – $199',
        priceUnit: 'MXN / mes',
        description: 'Para estudiantes preparando ENARM, exámenes de residencia o reforzando habilidades por su cuenta.',
        example: 'Práctica ilimitada antes de exámenes de selección.',
        highlight: false,
        features: [
            'Acceso a casos clínicos públicos de la plataforma',
            'Práctica ilimitada de entrevistas',
            'Retroalimentación automática estructurada',
            'Historial personal de sesiones',
            'Comparativa de progreso',
        ],
    },
];

export default function Pricing() {
    return (
        <section id="faculty" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
            <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Modelo de negocio</p>
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                        Cómo generamos <span className="gradient-text">ingresos</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">
                        Dos canales de monetización claros, con comparación directa frente al costo actual de simuladores físicos.
                    </p>
                </div>

                {/* Comparison highlight banner */}
                <div className="mb-12 mx-auto max-w-4xl rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-secondary/5 p-6 lg:p-8">
                    <div className="grid items-center gap-6 md:grid-cols-3 md:gap-8">
                        <div className="md:col-span-1 text-center md:text-left">
                            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Comparación de costo</p>
                            <p className="text-sm text-on-surface-variant">para una facultad de 500 estudiantes</p>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-error/20 bg-error/5 p-4 text-center">
                                <div className="text-xs font-semibold uppercase tracking-wide text-error/80 mb-1">Simulador físico</div>
                                <div className="text-2xl font-black text-error">$800K – $2M</div>
                                <div className="text-xs text-on-surface-variant mt-1">pago único + mantenimiento</div>
                            </div>
                            <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-center">
                                <div className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">SimPaciente</div>
                                <div className="text-2xl font-black text-accent">$150K – $250K</div>
                                <div className="text-xs text-on-surface-variant mt-1">anual · todo incluido</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing tiers */}
                <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`relative rounded-3xl border p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 ${
                                tier.highlight
                                    ? 'border-primary/30 bg-white shadow-2xl shadow-primary/10'
                                    : 'border-outline-variant/40 bg-white/80'
                            }`}
                        >
                            <div className="mb-2 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                                {tier.badge}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-on-surface">{tier.name}</h3>
                            <p className="mb-5 text-sm text-on-surface-variant leading-relaxed">{tier.description}</p>

                            <div className="mb-2 flex items-baseline gap-2">
                                <span className="text-4xl font-black text-on-surface">{tier.price}</span>
                            </div>
                            <div className="text-sm font-medium text-on-surface-variant mb-6">{tier.priceUnit}</div>

                            <div className="mb-6 rounded-lg border-l-2 border-primary/40 bg-primary/[0.03] px-4 py-3">
                                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 mb-1">Ejemplo</p>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{tier.example}</p>
                            </div>

                            <ul className="space-y-3">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-on-surface-variant">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="mx-auto mt-12 max-w-3xl text-center text-base text-on-surface-variant leading-relaxed">
                    Un piloto con una sola facultad de medicina <span className="font-semibold text-primary">ya justifica</span> el desarrollo del proyecto.
                    El modelo escala vertical (más especialidades) y horizontal (más facultades en México y Latinoamérica).
                </p>
            </div>
        </section>
    );
}
