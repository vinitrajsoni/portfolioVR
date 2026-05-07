import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import profileImg from "@/assets/profile.jpeg";

export function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const vRef = useRef<HTMLSpanElement>(null);
  const rRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const measure = () => {
      if (!vRef.current || !rRef.current || !svgRef.current) return;
      const svgBox = svgRef.current.getBoundingClientRect();
      const v = vRef.current.getBoundingClientRect();
      const r = rRef.current.getBoundingClientRect();
      setCoords({
        x1: v.left + v.width / 2 - svgBox.left,
        y1: v.top + v.height / 2 - svgBox.top,
        x2: r.left + r.width / 2 - svgBox.left,
        y2: r.top + r.height / 2 - svgBox.top,
      });
    };
    measure();

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(root.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onDone,
        });
      },
    });

    // Photo pops in first
    tl.from(photoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.7)",
    })
      // Pulse ring
      .to(photoRef.current, { scale: 1.04, duration: 0.25, ease: "power1.inOut", yoyo: true, repeat: 1 }, "-=0.1")
      // Name letters animate up
      .from(".pl-vinit span", { y: 80, opacity: 0, stagger: 0.05, duration: 0.6, ease: "power3.out" }, "-=0.1")
      .from(".pl-raj span", { y: 80, opacity: 0, stagger: 0.05, duration: 0.6, ease: "power3.out" }, "-=0.3")
      // Connecting line draws between V and R
      .add(() => {
        if (lineRef.current) {
          const len = lineRef.current.getTotalLength();
          gsap.set(lineRef.current, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(lineRef.current, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" });
        }
      })
      .to({}, { duration: 1.2 });
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <svg ref={svgRef} className="absolute inset-0 h-full w-full pointer-events-none">
        <defs>
          <linearGradient id="vrGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.18 280)" />
            <stop offset="100%" stopColor="oklch(0.65 0.2 240)" />
          </linearGradient>
        </defs>
        <line
          ref={lineRef}
          x1={coords.x1}
          y1={coords.y1}
          x2={coords.x2}
          y2={coords.y2}
          stroke="url(#vrGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col items-center gap-6 sm:gap-8 px-6 select-none">
        {/* Profile photo */}
        <div ref={photoRef} className="relative">
          {/* Glowing ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-60 blur-lg animate-pulse" />
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-primary to-accent opacity-80" />
          <img
            src={profileImg}
            alt="Vinit Raj Soni"
            className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover border-2 border-white/20"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <div className="pl-vinit flex text-4xl sm:text-6xl font-bold tracking-tight" style={{ fontFamily: "Poppins" }}>
            {"VINIT".split("").map((c, i) => (
              <span key={i} ref={i === 0 ? vRef : undefined} className="inline-block text-foreground">
                {c}
              </span>
            ))}
          </div>
          <div className="pl-raj flex gap-3 text-4xl sm:text-6xl font-bold tracking-tight" style={{ fontFamily: "Poppins" }}>
            <div className="flex">
              {"RAJ".split("").map((c, i) => (
                <span key={i} ref={i === 0 ? rRef : undefined} className="inline-block text-gradient">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex">
              {"SONI".split("").map((c, i) => (
                <span key={i} className="inline-block text-gradient">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
