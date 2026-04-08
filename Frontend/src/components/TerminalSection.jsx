export default function TerminalSection() {
  return (
    <section
      className="relative border-t border-white/[0.08] bg-[rgba(6,6,8,0.85)] py-16 backdrop-blur-sm"
      id="terminal"
      aria-labelledby="terminal-heading"
    >
      <div className="mx-auto w-full max-w-[900px] px-6">
        <div className="mb-6 text-center">
          <p className="mb-3 inline-block rounded-full border border-teal-400/35 bg-teal-500/10 px-4 py-1.5 font-sans text-[10px] font-bold tracking-[0.2em] text-teal-300 uppercase">
            Live session
          </p>
          <h2
            id="terminal-heading"
            className="font-sans text-2xl font-black tracking-tighter text-white uppercase sm:text-3xl"
          >
            Terminal
          </h2>
          <p className="mt-2 font-sans text-sm text-zinc-500">
            Watch the matching engine compile your first connection graph.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-[#030304] shadow-[0_0_40px_rgba(139,92,246,0.12)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
            <span className="ml-2 font-mono text-[11px] text-zinc-500">devtinder — zsh — 80×24</span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-zinc-600">
              <span className="text-teal-400/90">➜</span> <span className="text-violet-400">~</span> devtinder{' '}
              <span className="text-zinc-400">init --protocol v2</span>
            </p>
            <p className="mt-2 text-emerald-400/90">✓ kernel 8.2.1-synth online</p>
            <p className="text-emerald-400/90">✓ indexing developer graph… done</p>
            <p className="mt-3 text-zinc-500">
              <span className="text-orange-400/90">warning:</span> high match velocity detected in your stack
            </p>
            <p className="mt-3 text-zinc-400">
              <span className="text-teal-400/90">➜</span> <span className="text-violet-400">~</span>{' '}
              <span className="animate-pulse text-brand">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
