import { useState } from "react";

const NAV: [string, string][] = [["01", "#studio"], ["02", "#logotype"], ["03", "#graphics"], ["04", "#apparel"], ["05", "#campaign"], ["06", "#archive"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-[80] border-b border-black/15 bg-paper/90 px-5 py-4 backdrop-blur md:px-10">
    <div className="flex items-center justify-between gap-6">
      <a href="#top" aria-label="ZANKSTUDIO home"><img src="/img/zank-logo.png" alt="ZANKSTUDIO" className="h-10 w-auto object-contain md:h-12" /></a>
      <button className="mono-font border border-black px-3 py-2 text-xs md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>MENU</button>
      <nav className={`${open ? "grid" : "hidden"} gap-x-6 gap-y-2 text-[11px] font-semibold md:flex`}>
        {NAV.map(([n, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="hover:underline"><span className="mono-font mr-2">{n}</span>{href.slice(1).toUpperCase()}</a>)}
        <a href="https://zank.freebuff.app" target="_blank" rel="noreferrer" className="font-bold underline">SHOP ↗</a>
      </nav>
    </div>
  </header>;
}
