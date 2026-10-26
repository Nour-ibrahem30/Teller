"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";
import { content } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesAnimatedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".services-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
      });

      // Animate cards
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  // Service icons
  const iconMap: Record<string, JSX.Element> = {
    strategy: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    social: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    profile: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    about: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  };

  return (
    <section ref={sectionRef} className="section-padding bg-teller-cream-light overflow-hidden">
      <div className="container-teller">
        {/* Section Header */}
        <div className="services-header text-center mb-16">
          <h2 className="text-display-section text-teller-ink mb-4 arabic-display">
            {content.home.services.headline.arabic}
          </h2>
          <p className="text-body-large text-teller-ink/70 max-w-2xl mx-auto">
            {content.home.services.description.arabic}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: "1000px" }}>
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="service-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-teller-cream-dark/30 hover:border-teller-teal/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-teller-teal to-teller-teal-dark rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {iconMap[service.icon] || iconMap.strategy}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-teller-ink mb-4 group-hover:text-teller-teal transition-colors">
                {service.title.arabic}
              </h3>
              
              <p className="text-teller-ink/70 mb-6 leading-relaxed">
                {service.description.arabic}
              </p>
              
              {/* Problem Tag */}
              <div className="inline-flex items-center gap-2 text-sm text-teller-brown bg-teller-brown/10 px-4 py-2 rounded-full">
                <span className="font-medium">المشكلة:</span>
                <span>{service.problem.arabic}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-secondary inline-flex items-center gap-2">
            شوف كل الخدمات
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
