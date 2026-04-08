const CODE_SNIPPET = `fn merge_branches(
    local: &Commit,
    remote: &Commit,
) -> Result<Sync, Conflict> {
    if local.hash == remote.hash {
        return Ok(Sync::Clean);
    }
    Err(Conflict::Negotiate)
}`;

const LEFT_IMG =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=520&fit=crop&q=80';
const RIGHT_IMG =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=640&fit=crop&q=80';

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-68px)] flex-1 flex-col items-center justify-center overflow-hidden pt-[calc(68px+32px)] pr-6 pb-24 pl-6 max-[1100px]:min-h-0 max-[1100px]:pt-[calc(68px+24px)] max-[1100px]:pb-[200px]"
      id="hero"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 min-[1100px]:grid-cols-[1fr_minmax(280px,560px)_1fr] min-[1100px]:gap-12">
        <aside className="hidden min-[1100px]:flex min-[1100px]:items-center min-[1100px]:justify-end" aria-hidden>
          <div className="w-full max-w-[260px] -rotate-[7deg] rounded-[14px] border border-line bg-[rgba(18,18,22,0.85)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a22]">
              <img src={LEFT_IMG} alt="" className="h-full w-full object-cover" width={280} height={360} />
            </div>
            <div className="flex flex-wrap gap-2 px-4 py-3.5">
              <span className="rounded border border-teal-400/45 bg-teal-400/12 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-teal-300">
                RUST
              </span>
              <span className="rounded border border-teal-400/45 bg-teal-400/12 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-teal-300">
                WASM
              </span>
            </div>
          </div>
        </aside>

        <div className="relative z-[2] mx-auto max-w-[640px] text-center">
          <div className="mb-7 inline-block rounded-full border border-teal-400/45 bg-badge-teal px-[18px] py-2 text-[10px] font-bold tracking-[0.16em] text-white">
            PROTOCOL V2.0.0 SYNTHETIC RELEASED
          </div>

          <h1 className="text-center font-sans text-5xl leading-none font-black tracking-tighter text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">
              <span className="text-white">START </span>
              <span className="text-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.55)] [text-shadow:-1px_0_12px_rgba(34,211,238,0.35)]">
                SOMETHING
              </span>
            </span>
            <span className="mt-1 block text-white">BEYOND CODE</span>
          </h1>

          <div className="mt-8">
            <p className="mx-auto mb-8 max-w-[480px] font-sans text-[clamp(14px,2vw,17px)] font-normal leading-relaxed text-zinc-400">
              The high-velocity matching protocol for architects who build the future. Stop scrolling. Start compiling
              connections.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                className="cursor-pointer rounded-lg border-none bg-brand px-9 py-4 text-[13px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_0_24px_rgba(139,92,246,0.4)] transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-[0_0_32px_rgba(139,92,246,0.5)]"
              >
                INITIALIZE PROTOCOL
              </button>
              <a
                href="#terminal"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/40 bg-black/45 px-[34px] py-[15px] text-[13px] font-semibold tracking-[0.08em] text-white uppercase transition hover:border-white/55 hover:bg-white/[0.08]"
              >
                VIEW TERMINAL
              </a>
            </div>
          </div>
        </div>

        <aside className="hidden min-[1100px]:flex min-[1100px]:items-center min-[1100px]:justify-start" aria-hidden>
          <div className="w-full max-w-[240px] rounded-[14px] border border-line bg-[rgba(18,18,22,0.85)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="relative aspect-[3/5] overflow-hidden bg-[#1a1a22]">
              <img
                src={RIGHT_IMG}
                alt=""
                className="h-full w-full object-cover contrast-[1.05] grayscale"
                width={260}
                height={420}
              />
            </div>
            <p className="px-3 pt-3.5 pb-[18px] text-center text-[11px] font-bold tracking-[0.2em] text-brand">
              SENIOR ARCHITECT
            </p>
          </div>
        </aside>
      </div>

      <div
        className="pointer-events-none absolute right-[4%] bottom-[10%] z-[4] max-w-[min(340px,32vw)] max-[1100px]:right-1/2 max-[1100px]:bottom-6 max-[1100px]:max-w-[min(340px,92vw)] max-[1100px]:translate-x-1/2 max-[768px]:opacity-95"
        aria-hidden
      >
        <div className="relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-[rgba(8,8,10,0.88)] py-[22px] pr-4 pb-5 pl-[22px] shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
          <div
            className="pointer-events-none absolute top-2.5 bottom-2.5 left-1/2 z-0 w-[3px] -translate-x-1/2 rounded-sm shadow-[0_0_24px_rgba(139,92,246,0.55)]"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.25) 6%, #8b5cf6 18%, #8b5cf6 82%, rgba(139,92,246,0.25) 94%, transparent 100%)',
            }}
          />
          <span className="absolute top-2.5 right-2.5 z-[2] rounded bg-orange-500 px-2 py-1 text-[9px] font-extrabold tracking-[0.08em] text-[#1a1008]">
            CONFLICT DETECTED
          </span>
          <pre className="relative z-[1] m-0 max-w-none px-1 pt-1 text-left font-mono text-[11px] leading-relaxed text-[rgba(180,180,195,0.85)]">
            <code>{CODE_SNIPPET}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
