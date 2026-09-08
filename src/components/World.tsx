import { Reveal, SectionHead, Rationale } from "./ui";

const PRINCIPLES = [["01", "ORIGINAL GRAPHICS"], ["02", "MADE TO BE WORN"], ["03", "CURATED DROPS"], ["04", "ALGIERS / DZ"]];

export default function World() {
  return <section id="studio" className="border-b border-black/15 px-5 py-20 md:px-10 md:py-28">
    <SectionHead no="01" title="STUDIO / WORLD" />
    <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_.9fr]">
      <Reveal><h2 className="display-font text-[clamp(3.4rem,9vw,8rem)] font-black uppercase leading-[.82] tracking-[-.04em]">A STREETWEAR<br />STUDIO FROM<br />ALGIERS.</h2></Reveal>
      <div><Rationale>Independent visual language built around original graphics, physical garments, strong typography, and a direct relationship with the culture around them.</Rationale><div className="mt-10 border-t border-black/15">{PRINCIPLES.map(([n, t]) => <div key={n} className="flex items-center justify-between border-b border-black/15 py-4"><span className="mono-font text-xs">{n}</span><span className="font-bold tracking-tight">{t}</span></div>)}</div></div>
    </div>
  </section>;
}
