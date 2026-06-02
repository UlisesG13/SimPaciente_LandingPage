const roles = [
    {
        title: 'Estudiante',
        subtitle: 'Medicina, enfermería, psicología',
        desc: 'Practica casos clínicos ilimitados con pacientes simulados y recibe retroalimentación estructurada inmediata sobre su proceso diagnóstico.',
        icon: '🎓',
        features: [
            'Práctica 24/7 desde cualquier dispositivo',
            'Retroalimentación detallada por sesión',
            'Historial de progreso personal',
        ],
    },
    {
        title: 'Profesor',
        subtitle: 'Docente clínico',
        desc: 'Diseña casos clínicos definiendo síntomas, antecedentes y reglas de revelación. Revisa el desempeño individual de sus alumnos.',
        icon: '👨‍🏫',
        features: [
            'Editor visual de casos clínicos',
            'Definición de rúbricas de evaluación',
            'Revisión de sesiones por alumno',
        ],
    },
    {
        title: 'Administrador',
        subtitle: 'De plataforma',
        desc: 'Gestiona facultades, usuarios y la biblioteca global de casos. Supervisa la calidad de los modelos y el cumplimiento normativo.',
        icon: '⚙️',
        features: [
            'Gestión de facultades',
            'Auditoría de seguridad y logs',
            'Mantenimiento de modelos',
        ],
    },
];

export default function Benefits() {
    return (
        <section id="benefits" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
            <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -translate-x-1/2" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Usuarios</p>
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                        Tres roles con <span className="gradient-text">acceso diferenciado</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">
                        Dominio real multi-usuario, conforme a los requisitos del proyecto integrador.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {roles.map((r, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl border border-outline-variant/30 bg-white p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2 hover:border-primary/20"
                        >
                            <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                                {r.icon}
                            </div>
                            <h3 className="text-lg font-bold text-on-surface">{r.title}</h3>
                            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent">{r.subtitle}</p>
                            <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">{r.desc}</p>
                            <ul className="space-y-2 border-t border-outline-variant/20 pt-4">
                                {r.features.map((f, j) => (
                                    <li key={j} className="flex gap-2 items-start">
                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        <span className="text-xs text-on-surface-variant leading-relaxed">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-2/3" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
