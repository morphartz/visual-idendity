import { Rationale, Reveal, SectionHead } from "./ui";

const PRODUCTS = [["01", "HEAVY TEE", "/img/product-tee.jpg", "Heavy cotton / oversized fit"], ["02", "HOODIE", "/img/product-hoodie.jpg", "Heavyweight / oversized fit"], ["03", "CAP", "/img/product-cap.jpg", "Structured cotton cap"]] as const;

export default function Apparel() {
  return <section id="apparel" className="border-b border-black/15 px-5 py-20 md:px-10 md:py-28"><SectionHead no="04" title="APPAREL DIRECTION" right="DESIGN / FIT / PRINT" /><Rationale className="mb-10 max-w-xl">Garments are treated as the physical surface for the identity. The direction follows the public ZANKSTUDIO positioning: heavy cotton, oversized fits and original graphics.</Rationale><div className="grid gap-3 md:grid-cols-3">{PRODUCTS.map(([n, name, img, spec]) => <Reveal key={n}><article className="border border-black"><div className="aspect-[4/5] bg-[#ddd9d0] overflow-hidden"><img src={img} alt={name} className="h-full w-full object-cover grayscale" /></div><div className="p-4"><div className="mono-font text-[10px] opacity-60">{n}</div><h3 className="mt-2 display-font text-4xl font-black">{name}</h3><p className="mt-2 mono-font text-[10px] uppercase">{spec}</p></div></article></Reveal>)}</div></section>;
}
