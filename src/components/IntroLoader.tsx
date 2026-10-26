"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            clipPath: "circle(0% at 50% 50%)",
            duration: 1,
            ease: "power4.inOut",
            onComplete: onComplete,
          });
        },
      });

      gsap.set(".letter", { opacity: 0, y: 100, rotateX: -90 });
      gsap.set(".story-line", { scaleX: 0 });
      gsap.set(".particle", { scale: 0, opacity: 0 });
      gsap.set(circleRef.current, { scale: 0, opacity: 0 });
      gsap.set(".tagline-word", { opacity: 0, y: 30 });

      gsap.to({}, { 
        duration: 3, 
        onUpdate: function() { 
          setProgress(Math.round(this.progress() * 100)); 
        } 
      });

      tl.to(circleRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" })
        .to(circleRef.current, { scale: 1.2, duration: 0.4, yoyo: true, repeat: 2 }, "-=0.2")
        .to(".letter", { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.5")
        .to(".story-line", { scaleX: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" }, "-=0.4")
        .to(".particle", { scale: 1, opacity: 1, duration: 0.5, stagger: { each: 0.02, from: "center" } }, "-=0.3")
        .to(".tagline-word", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.2")
        .to({}, { duration: 0.5 });
    }, containerRef);
    return () => ctx.revert();
  }, [onComplete]);

  const letters = "تيلر".split("");
  const tagline = ["قصة", "تصل", "وتؤثر"];

  const particles = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    const radius = 120 + Math.random() * 80;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: Math.random() * 8 + 4,
    };
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        clipPath: "circle(100% at 50% 50%)",
        background: "linear-gradient(135deg, #18383a 0%, #1a4547 50%, #18383a 100%)",
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(82,143,146,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(82,143,146,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-gradient-to-br from-[#e87930] to-[#f7f2cf]"
            style={{
              width: p.size,
              height: p.size,
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          />
        ))}
      </div>

      {/* Story Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="story-line absolute h-[2px] bg-gradient-to-r from-transparent via-[#e87930] to-transparent origin-right"
            style={{
              width: `${200 + i * 80}px`,
              transform: `rotate(${i * 36}deg)`,
            }}
          />
        ))}
      </div>

      {/* Central Circle */}
      <div
        ref={circleRef}
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#528f92] to-[#18383a] shadow-2xl shadow-[#528f92]/50 flex items-center justify-center"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e87930] to-[#a17c61] animate-pulse" />
      </div>

      {/* Logo Letters */}
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-4" style={{ perspective: "1000px" }}>
          {letters.map((letter, i) => (
            <span
              key={i}
              className="letter text-7xl md:text-9xl font-bold text-[#f7f2cf] inline-block"
              style={{
                textShadow: "0 0 40px rgba(232,121,48,0.5), 0 0 80px rgba(82,143,146,0.3)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div className="flex justify-center gap-3 mt-6">
          {tagline.map((word, i) => (
            <span key={i} className="tagline-word text-xl md:text-2xl text-[#f7f2cf]/80">
              {word}
            </span>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-12">
          <div className="w-48 h-1 bg-[#528f92]/20 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#e87930] to-[#528f92] rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[#f7f2cf]/50 text-sm mt-3">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
