export default function CTA() {
    return (
        <section id="contact" className="relative py-24 lg:py-32 bg-inverse-surface overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />
            <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Únete a las instituciones que ya están transformando la educación médica
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
                    Inteligencia artificial local y segura para simulación clínica de vanguardia.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a href="mailto:info@sim-paciente.com" className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/50 hover:-translate-y-0.5">
                        sim-paciente@gmail.com
                    </a>
                    <a href="#hero" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                        Soporte 24/7
                    </a>
                </div>
            </div>
        </section>
    );
}
