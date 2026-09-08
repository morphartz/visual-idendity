import { Rationale, Reveal, SectionHead, Stamp } from "./ui";

const TILES = [["01", "TYPE / BLOCK", "/img/posters.jpg"], ["02", "ARCHIVE / IMAGE", "/img/ed-1.jpg"], ["03", "PRINT / DETAIL", "/img/print-shop.jpg"], ["04", "MARK / PACK", "/img/packaging.jpg"]] as const;

export default function Graphics() {
  return <section id="graphics" className="border-b border-black/15 px-5 py-20 md:px-10 md:py-28"><SectionHead no="03" title="GRAPHIC LANGUAGE" right="TYPE / IMAGE / PRINT / MARK" /><Rationale className="mb-10 max-w-xl">Black-and-white foundations, archival energy and physical print references. The system is designed to reproduce on garments, paper, stickers and digital posts.</Rationale><div className="grid gap-3 sm:grid-cols-2">{TILES.map(([n, title, img]) => <Reveal key={n}><article className="group overflow-hidden border border-black"><div className="aspect-[4/3] overflow-hidden bg-black"><img src={img} alt={title} className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105" /></div><div className="flex items-center justify-between p-4"><div><span className="mono-font mr-3 text-[10px]">{n}</span><span className="font-bold">{title}</span></div><Stamp>ZG</Stamp></div></article></Reveal>)}</div></section>;
}
