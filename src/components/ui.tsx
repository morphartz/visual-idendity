import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}>{children}</div>;
}

export function SectionHead({ no, title, right }: { no: string; title: string; right?: string }) {
  return <Reveal><div className="mb-10 flex items-end justify-between gap-4 border-t-2 border-black pt-3 mono-font text-[10px] uppercase tracking-[.18em] md:mb-14 md:text-[11px]"><span><span>{no}</span><span className="mx-2 opacity-40">/</span>{title}</span>{right ? <span className="hidden opacity-50 sm:block">{right}</span> : null}</div></Reveal>;
}

export function Rationale({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mono-font text-[10px] uppercase leading-[1.9] tracking-[.08em] ${className}`}><span className="mr-2">WHY →</span>{children}</p>;
}

export function Marquee({ text, children, duration = 32, className = "" }: { text?: string; children?: ReactNode; duration?: number; className?: string }) {
  const content = children ?? text;
  return <div className={`overflow-hidden whitespace-nowrap border-t border-black/15 border-b border-black/15 py-3 ${className}`}><div className="marquee-track inline-flex gap-10 mono-font text-[10px] font-bold tracking-[.15em]" style={{ animationDuration: `${duration}s` }}><span>{content}</span><span aria-hidden>{content}</span></div></div>;
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) { return <span className={`inline-block border-2 border-current px-2 py-1 mono-font text-[9px] uppercase tracking-[.22em] ${className}`}>{children}</span>; }
export function RegMark({ className = "" }: { className?: string }) { return <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-current mono-font text-[9px] ${className}`}>R</span>; }
export function ZkAsterisk({ className = "" }: { className?: string }) { return <span className={`display-font leading-none ${className}`}>✳</span>; }
export function Barcode({ className = "" }: { className?: string }) { return <div className={`flex h-10 w-32 items-stretch gap-[2px] ${className}`} aria-hidden>{Array.from({ length: 20 }, (_, i) => <i key={i} className="block flex-1 bg-black" style={{ opacity: i % 5 === 0 ? 0.35 : 1 }} />)}</div>; }
