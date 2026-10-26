"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { content } from "@/lib/content";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-teller-teal overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teller-teal-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teller-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Decorative line element - storytelling motif */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,450 Q360,200 720,450 T1440,450"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teller-cream"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: "drawLine 3s ease-out forwards",
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container-teller relative z-10 text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            className="text-display-hero text-teller-cream mb-6 arabic-display opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {content.home.hero.headline.arabic}
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-body-large text-teller-cream/90 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {content.home.hero.subheadline.arabic}
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              className="btn bg-teller-orange text-white hover:bg-teller-orange-dark text-lg px-8 py-4"
            >
              {content.home.hero.cta.primary.arabic}
            </Link>
            <Link
              href="/about"
              className="btn bg-transparent border-2 border-teller-cream text-teller-cream hover:bg-teller-cream hover:text-teller-teal text-lg px-8 py-4"
            >
              {content.home.hero.cta.secondary.arabic}
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center text-teller-cream/60">
            <span className="text-sm mb-2">اكتشف المزيد</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
