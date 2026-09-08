import { Marquee, RegMark, Stamp } from "./ui";

const TICKER = "ZANKSTUDIO® — STREETWEAR FROM ALGIERS — DESIGN. PURPOSE. CULTURE. — MADE TO BE WORN — ORIGINAL GRAPHICS — CURATED DROPS — CASH ON DELIVERY — DELIVERY ACROSS ALGERIA — ";

export default function Hero() {
  return <section id="top" className="border-b border-black/15">
    <div className="relative overflow-hidden">
      <img src="/img/hero.jpg" alt="ZANKSTUDIO visual direction" className="h-[62vh] min-h-[460px] w-full object-cover grayscale" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute left-5 top-5 right-5 flex items-start justify-between text-white md:left-10 md:right-10 md:top-10">
        <div className="mono-font text-[10px] tracking-[.2em]">ALGIERS / DZ</div>
        <RegMark />
      </div>
      <div className="absolute inset-x-5 bottom-8 md:inset-x-10 md:bottom-12">
        <img src="/img/zank-logo.png" alt="ZANKSTUDIO" className="w-full max-w-4xl object-contain object-left brightness-0 invert" />
        <div className="mt-5 flex flex-wrap items-center gap-3 text-white">
          <Stamp>EST. 2026</Stamp><Stamp>MADE IN ALGERIA</Stamp><Stamp>STREETWEAR / DESIGN</Stamp>
        </div>
      </div>
    </div>
    <Marquee text={TICKER} />
  </section>;
}
