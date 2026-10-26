"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Hero3DSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, subRef.current, ctaRef.current], { 
        opacity: 0, 
        y: 50 
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(subRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");

      // Parallax effect on scroll
      gsap.to(headlineRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teller-teal"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teller-teal-light/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teller-orange/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teller-teal-dark/50 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-teller-orange rounded-full animate-bounce opacity-60" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-teller-cream rounded-full animate-bounce opacity-40" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-teller-orange/50 rounded-full animate-bounce opacity-50" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-teller-cream rounded-full animate-bounce opacity-30" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teller-teal/50 to-teller-teal/80 z-[1]" />

      {/* Content */}
      <div className="container-teller relative z-10 text-center py-32">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-teller-cream mb-8 arabic-display leading-tight"
            style={{
              textShadow: "0 0 60px rgba(232,121,48,0.3), 0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            {content.home.hero.headline.arabic}
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-xl sm:text-2xl md:text-3xl text-teller-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {content.home.hero.subheadline.arabic}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white overflow-hidden rounded-full transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teller-orange to-[#f09050] group-hover:scale-110 transition-transform duration-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#f09050] to-teller-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">{content.home.hero.cta.primary.arabic}</span>
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-teller-cream border-2 border-teller-cream/50 rounded-full hover:bg-teller-cream hover:text-teller-teal transition-all duration-300"
            >
              {content.home.hero.cta.secondary.arabic}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-teller-cream/60 animate-bounce">
            <span className="text-sm mb-2">اكتشف المزيد</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teller-cream-light to-transparent z-[2]" />
    </section>
  );
}
