import { useEffect, useState } from 'react';

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d)}:${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function Footer() {
  const [uptimeSec, setUptimeSec] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setUptimeSec(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-7 pb-6 pt-4 font-mono text-[11px] tracking-[0.06em] text-[rgba(139,139,154,0.75)]">
      <span>KERNEL_VER: 8.2.1-SYNTH</span>
      <span>UPTIME: {formatUptime(uptimeSec)}</span>
    </footer>
  );
}
