import { Rationale, Reveal, SectionHead, ZkAsterisk } from "./ui";

export default function Logotype() {
  return <section id="logotype" className="border-b border-black/15 px-5 py-20 md:px-10 md:py-28">
    <SectionHead no="02" title="LOGOTYPE SYSTEM" right="PRIMARY / SECONDARY / APPLICATION" />
    <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:gap-16">
      <Reveal><div className="border border-black bg-black p-6 md:p-10"><img src="/img/zank-logo.png" alt="ZANKSTUDIO supplied logo" className="w-full object-contain invert" /></div></Reveal>
      <Reveal delay={100}><div className="space-y-8"><ZkAsterisk className="text-5xl" /><Rationale>The supplied ZANK mark stays the source logo. Supporting type, spacing, and registration details build the system around it without redrawing the identity.</Rationale><div className="grid grid-cols-2 gap-3 text-sm font-bold uppercase"><div className="border border-black p-4">ZANK<br /><span className="mono-font text-[9px] font-normal">PRIMARY MARK</span></div><div className="border border-black p-4">STUDIO<br /><span className="mono-font text-[9px] font-normal">SECONDARY LOCKUP</span></div></div></div></Reveal>
    </div>
  </section>;
}
