const features = [
    { title: 'Clasificador de preguntas clínicas', desc: 'Clasifica en tiempo real la dimensión de cada intervención: síntoma principal, cronología, intensidad, agravantes, antecedentes y contexto social.' },
    { title: 'Modelo de estado (grafo)', desc: 'Define qué información está disponible y cuándo; las revelaciones dependen del historial de la sesión y las preguntas del estudiante.' },
    { title: 'Evaluador de razonamiento clínico', desc: 'Puntúa el proceso diagnóstico por dimensiones según rúbricas académicas, generando retroalimentación estructurada.' },
    { title: 'Roles y flujo académico', desc: 'Acceso para estudiante, profesor y coordinador; historial por alumno y dashboard de desempeño para cada rol.' },
    { title: 'Privacidad y LLM local', desc: 'El LLM sólo genera texto de respuesta; las decisiones pedagógicas y los datos clínicos permanecen dentro de la infraestructura institucional.' },
    { title: 'Minería de datos y analíticas', desc: 'Curvas de aprendizaje, clustering de perfiles, extracción de secuencias de preguntas y detección de errores diagnósticos recurrentes.' },
];

const icons = [
    <path key="0" strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />,
    <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
    <path key="5" strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />,
];

export default function Features() {
    return (
        <section id="features" className="relative py-24 lg:py-32 bg-surface-container overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-x-1/3" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Tecnología</p>
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                        Tecnología médica de <span className="gradient-text">vanguardia</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">Un motor de IA especializado que entiende el contexto clínico real.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <div key={i} className="group glass-card rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{icons[i]}</svg>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-on-surface">{f.title}</h3>
                            <p className="text-sm leading-relaxed text-on-surface-variant">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
