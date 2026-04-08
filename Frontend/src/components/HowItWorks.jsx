const steps = [
  {
    num: '01',
    ring: 'border-violet-400/50 bg-violet-500/10 text-violet-300 shadow-[0_0_24px_rgba(139,92,246,0.25)]',
    title: 'Create Your Profile',
    desc: 'Sign up and build your developer profile — add your skills, GitHub, experience, and what you are looking to build.',
  },
  {
    num: '02',
    ring: 'border-teal-400/45 bg-teal-500/10 text-teal-300 shadow-[0_0_24px_rgba(45,212,191,0.15)]',
    title: 'Browse & Swipe',
    desc: 'Browse curated developer profiles. Swipe right to connect, left to pass. It is that simple.',
  },
  {
    num: '03',
    ring: 'border-blue-400/45 bg-blue-500/10 text-blue-300 shadow-[0_0_24px_rgba(59,130,246,0.2)]',
    title: 'Match & Chat',
    desc: 'When both devs swipe right, it is a match! Start chatting, share ideas, and plan your next project.',
  },
  {
    num: '04',
    ring: 'border-emerald-400/45 bg-emerald-500/10 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.2)]',
    title: 'Build Together',
    desc: 'Kick off your project, collaborate on GitHub, and ship something amazing with your new dev partner.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28" id="how-it-works">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.12), transparent 70%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-4 inline-block rounded-full border border-teal-400/35 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-teal-300 uppercase">
            Protocol
          </p>
          <h2 className="font-sans text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
            How It <span className="text-gradient-brand">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-sans text-base font-normal leading-relaxed text-zinc-400">
            From profile to project in four synchronized steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute top-9 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
            aria-hidden
          />
          {steps.map((s) => (
            <div key={s.num} className="relative px-2 text-center">
              <div
                className={`relative z-[1] mx-auto mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 font-mono text-xl font-black ${s.ring}`}
              >
                {s.num}
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
