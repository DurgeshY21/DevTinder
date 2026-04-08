const BARS = [
  { hClass: 'h-14 sm:h-16', className: 'bg-purple-950/90' },
  { hClass: 'h-24 sm:h-28', className: 'bg-purple-800/95' },
  {
    hClass: 'h-[140px] sm:h-[152px]',
    className:
      'bg-violet-500 shadow-[0_0_22px_rgba(168,85,247,0.55),0_0_40px_rgba(139,92,246,0.25)] ring-1 ring-violet-400/40',
  },
  { hClass: 'h-24 sm:h-28', className: 'bg-purple-800/95' },
  { hClass: 'h-14 sm:h-16', className: 'bg-purple-950/90' },
];

export default function EngineCoreSection() {
  return (
    <section
      className="relative border-t border-white/[0.06] bg-[#0a0a0a] py-10 px-6 md:py-20 md:px-10"
      id="engine-core"
      aria-labelledby="engine-core-heading"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Neural map card */}
        <div className="w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 md:px-5">
              <span className="font-mono text-[11px] font-medium tracking-wider text-cyan-400 uppercase md:text-xs">
                NEURAL_MAP_04
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-orange-500" />
                <span className="h-2.5 w-2.5 rounded-sm bg-violet-500" />
                <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400" />
              </div>
            </div>

            <div className="px-5 py-8 md:px-8 md:py-10">
              <div className="flex min-h-[152px] items-end justify-center gap-2 sm:gap-3 md:gap-4">
                {BARS.map((bar, i) => (
                  <div
                    key={i}
                    className={`w-full max-w-[44px] rounded-t-sm rounded-b-[2px] sm:max-w-[52px] ${bar.hClass} ${bar.className}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/[0.06] p-4 md:p-5">
              <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-black/30 pl-3.5">
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-violet-500" aria-hidden />
                <p className="pl-2 pt-1 font-sans text-[9px] font-semibold tracking-[0.18em] text-white uppercase md:text-[10px]">
                  MATCH ACCURACY
                </p>
                <p className="pl-2 pb-2 pt-1 font-sans text-2xl font-black tracking-tight text-violet-400 md:text-3xl">
                  99.4%
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-black/30 pl-3.5">
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-cyan-400" aria-hidden />
                <p className="pl-2 pt-1 font-sans text-[9px] font-semibold tracking-[0.18em] text-white uppercase md:text-[10px]">
                  STACK ALIGNMENT
                </p>
                <p className="pl-2 pb-2 pt-1 font-sans text-2xl font-black tracking-tight text-cyan-400 md:text-3xl">
                  A++
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="text-left">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.2em] text-violet-400 uppercase md:text-xs">
            ENGINE_CORE
          </p>
          <h2
            id="engine-core-heading"
            className="font-sans text-4xl font-black leading-[1.05] tracking-tight text-white uppercase sm:text-5xl md:text-[2.75rem] lg:text-5xl"
          >
            Algorithm-driven pairing
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-zinc-400 md:text-[17px]">
            Our proprietary matchmaking engine doesn&apos;t just look at languages. It analyzes commit frequency, PR
            feedback sentiment, and architectural philosophy to find your perfect co-conspirator.
          </p>
          <a
            href="#features"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-bold tracking-[0.12em] text-violet-400 uppercase transition hover:text-violet-300"
          >
            Explore the logic
            <span className="text-base leading-none" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
