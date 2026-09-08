import { useEffect, useState } from "react";

const NAV: [string, string, string][] = [
  ["01", "#studio", "STUDIO"],
  ["02", "#logotype", "LOGO"],
  ["03", "#graphics", "GRAPHICS"],
  ["04", "#apparel", "APPAREL"],
  ["05", "#campaign", "CAMPAIGN"],
  ["06", "#archive", "ARCHIVE"],
];

function useAlgiersClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Algiers",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const clock = useAlgiersClock();

  return (
    <header className="sticky top-0 z-[80] border-b border-black/15 bg-paper/95 px-4 py-3 backdrop-blur md:px-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] md:flex">
          <span>ALGIERS / DZ</span>
          <span className="opacity-40">{clock}</span>
        </div>
        <a href="#top" aria-label="ZANKSTUDIO home" className="justify-self-center">
          <img src="/img/zank-logo.png" alt="ZANKSTUDIO" className="h-8 w-auto object-contain md:h-9" />
        </a>
        <div className="flex items-center justify-end gap-3">
          <nav className="hidden items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.04em] lg:flex">
            {NAV.map(([n, href, label]) => (
              <a key={href} href={href} className="hover:underline">
                <span className="mr-1 font-mono opacity-50">{n}</span>{label}
              </a>
            ))}
          </nav>
          <a href="https://zank.freebuff.app" target="_blank" rel="noreferrer" className="hidden text-[10px] font-bold uppercase underline lg:block">SHOP ↗</a>
          <button className="border border-black px-3 py-2 font-mono text-[10px] lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>MENU</button>
        </div>
      </div>

      {open && (
        <nav className="mt-3 grid border-t border-black/15 pt-3 lg:hidden">
          {NAV.map(([n, href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/10 py-3 text-[11px] font-semibold uppercase">
              <span><span className="mr-2 font-mono opacity-50">{n}</span>{label}</span>
              <span>↗</span>
            </a>
          ))}
          <a href="https://zank.freebuff.app" target="_blank" rel="noreferrer" className="py-3 text-[11px] font-bold uppercase underline">SHOP ↗</a>
        </nav>
      )}
    </header>
  );
}
