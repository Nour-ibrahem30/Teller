"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function FinalCtaAnimatedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      gsap.from(".cta-headline", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Animate subheadline
      gsap.from(".cta-sub", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Animate button
      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 md:py-40 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #18383a 0%, #1a4547 30%, #18383a 70%, #1a4547 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-teller-orange/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-teller-teal-light/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 500" preserveAspectRatio="none">
          <path d="M0,250 Q360,100 720,250 T1440,250" stroke="#f7f2cf" strokeWidth="2" fill="none" />
          <path d="M0,250 Q360,400 720,250 T1440,250" stroke="#e87930" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container-teller relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 
            className="cta-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-teller-cream mb-8 arabic-display"
            style={{ textShadow: "0 0 60px rgba(232,121,48,0.3)" }}
          >
            {content.home.finalCta.headline.arabic}
          </h2>

          {/* Subheadline */}
          <p className="cta-sub text-2xl md:text-3xl text-teller-cream/90 mb-12">
            {content.home.finalCta.subheadline.arabic}
          </p>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="cta-button group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teller-orange via-[#f09050] to-teller-orange bg-[length:200%_100%] animate-gradient" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(232,121,48,0.5)]" />
            <span className="relative z-10 text-white">{content.home.finalCta.cta.arabic}</span>
          </Link>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-teller-cream/60">
            {["استشارة مجانية", "خدمة مخصصة", "نتائج ملموسة"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teller-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
