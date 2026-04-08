const features = [
  {
    id: 1,
    tag: 'MATCH',
    icon: '🎯',
    iconBg: 'bg-violet-500/15 ring-violet-500/30',
    title: 'Smart Dev Matching',
    desc: 'Our algorithm matches you with developers whose tech stack, goals, and work style align with yours — not just random profiles.',
  },
  {
    id: 2,
    tag: 'PROFILE',
    icon: '🛠️',
    iconBg: 'bg-teal-500/10 ring-teal-400/25',
    title: 'Skill-Based Profiles',
    desc: 'Showcase your GitHub, tech skills, experience, and projects. Let your code speak louder than words.',
  },
  {
    id: 3,
    tag: 'COLLAB',
    icon: '🚀',
    iconBg: 'bg-blue-500/12 ring-blue-500/25',
    title: 'Collab Requests',
    desc: 'Send collaboration requests, chat, and kick off side projects with fellow developers you matched with.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative border-t border-white/10 bg-page-2 py-20 md:py-28" id="features">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-4 inline-block rounded-full border border-teal-400/35 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-teal-300 uppercase">
            Stack
          </p>
          <h2 className="font-sans text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
            Built for <span className="text-gradient-brand">Developers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-sans text-base font-normal leading-relaxed text-zinc-400">
            Everything you need to find your next coding partner, co-founder, or collaborator.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.id}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.03] p-7 transition hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_0_32px_rgba(139,92,246,0.15)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                  {f.tag}
                </span>
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ring-1 ${f.iconBg}`}
                >
                  {f.icon}
                </div>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold tracking-tight text-foreground">{f.title}</h3>
              <p className="font-sans text-[15px] leading-relaxed text-zinc-400">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
