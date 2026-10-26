"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";
import { brand } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

export function ApproachAnimatedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".approach-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animate steps
      gsap.from(".approach-step", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".approach-steps",
          start: "top 80%",
        },
      });

      // Animate connecting line
      gsap.from(".approach-line", {
        scaleY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".approach-steps",
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
        background: "linear-gradient(180deg, #528f92 0%, #3a6b6e 100%)"
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teller-teal-light/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-teller relative z-10">
        {/* Section Header */}
        <div className="approach-header text-center mb-16">
          <h2 className="text-display-section text-teller-cream mb-4 arabic-display">
            {content.home.approach.headline.arabic}
          </h2>
          <p className="text-body-large text-teller-cream/80 max-w-2xl mx-auto">
            {content.home.approach.description.arabic}
          </p>
        </div>
        
        {/* Methodology Steps */}
        <div className="approach-steps relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="approach-line hidden md:block absolute right-[50px] top-0 bottom-0 w-1 bg-gradient-to-b from-teller-orange via-teller-cream to-teller-orange rounded-full origin-top" />
          
          {brand.methodology.steps.map((step, index) => (
            <div
              key={index}
              className="approach-step relative flex items-start gap-8 mb-12 last:mb-0"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-teller-orange to-teller-orange-dark rounded-full flex items-center justify-center shadow-2xl shadow-teller-orange/30 z-10">
                <span className="text-white font-bold text-3xl">
                  {index + 1}
                </span>
              </div>
              
              {/* Step Content */}
              <div className="flex-1 bg-teller-teal-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-teller-cream/10">
                <h3 className="text-2xl font-bold text-teller-cream mb-3">
                  {step.arabic}
                </h3>
                <p className="text-teller-cream/70 text-lg leading-relaxed">
                  {step.description.arabic}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/approach"
            className="btn bg-transparent border-2 border-teller-cream text-teller-cream hover:bg-teller-cream hover:text-teller-teal"
          >
            اعرف أكتر عن طريقتنا
          </Link>
        </div>
      </div>
    </section>
  );
}
