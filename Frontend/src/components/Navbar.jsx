const navItems = [
  { id: 'match', label: 'MATCH', href: '#hero', active: true },
  { id: 'terminal', label: 'TERMINAL', href: '#terminal' },
  { id: 'stack', label: 'STACK', href: '#features' },
  { id: 'protocol', label: 'PROTOCOL', href: '#how-it-works' },
];

function IconBell() {
  return (
    <svg
      className="opacity-90"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function IconCodeBrackets() {
  return (
    <span className="font-mono text-[13px] font-semibold leading-none tracking-tight text-foreground" aria-hidden>
      &lt;&gt;
    </span>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-[1000] flex h-[68px] items-center justify-between border-b border-white/[0.06] bg-[rgba(5,5,5,0.82)] px-6 font-sans backdrop-blur-xl">
      <a href="/" className="flex items-center">
        <span className="text-[20px] font-extrabold tracking-[0.12em] text-brand">DEVTINDER</span>
      </a>

      <ul className="flex items-center gap-7 max-md:hidden">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={
                item.active
                  ? 'border-brand text-foreground border-b-2 pb-1.5 text-[12px] font-semibold tracking-[0.14em] transition-colors'
                  : 'border-b-2 border-transparent pb-1.5 text-[12px] font-semibold tracking-[0.14em] text-[rgba(180,180,190,0.75)] transition-colors hover:text-foreground'
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-line bg-white/[0.04] text-foreground transition hover:border-white/15 hover:bg-white/[0.08]"
          aria-label="Notifications"
        >
          <IconBell />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-line bg-white/[0.04] text-foreground transition hover:border-white/15 hover:bg-white/[0.08]"
          aria-label="Code"
        >
          <IconCodeBrackets />
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-lg border-none bg-brand px-[18px] py-2 text-[12px] font-bold tracking-[0.1em] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-[0_0_28px_rgba(139,92,246,0.45)]"
        >
          INITIALIZE
        </button>
      </div>
    </nav>
  );
}
