"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function InsightAnimatedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate quote
      gsap.from(".insight-quote", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Animate description
      gsap.from(".insight-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Animate decorative elements
      gsap.from(".insight-decor", {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #18383a 0%, #1a4547 50%, #18383a 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-teller-orange/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-teller-cream/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container-teller relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative Quote Mark */}
          <div className="insight-decor mb-8 flex justify-center">
            <svg
              className="w-20 h-20 text-teller-orange/50"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8v12H6V12H2V8h8zm14 0v12h-4V12h-4V8h8z" />
            </svg>
          </div>
          
          {/* Main Insight */}
          <blockquote className="insight-quote mb-12">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-teller-cream arabic-display whitespace-pre-line leading-tight">
              {content.home.insight.headline.arabic}
            </p>
          </blockquote>
          
          {/* Supporting Text */}
          <p className="insight-desc text-xl md:text-2xl text-teller-cream/80 max-w-3xl mx-auto leading-relaxed">
            {content.home.insight.description.arabic}
          </p>
        </div>
      </div>
    </section>
  );
}
