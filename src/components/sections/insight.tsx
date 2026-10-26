"use client";

import { content } from "@/lib/content";

export function InsightSection() {
  return (
    <section className="section-padding bg-teller-teal-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-teller-cream" />
          </svg>
        </div>
      </div>
      
      <div className="container-teller relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Insight - Large Typography */}
          <blockquote className="mb-12">
            <p className="text-display-section text-teller-cream arabic-display whitespace-pre-line leading-tight">
              {content.home.insight.headline.arabic}
            </p>
          </blockquote>
          
          {/* Supporting Text */}
          <p className="text-body-large text-teller-cream/80 max-w-3xl mx-auto">
            {content.home.insight.description.arabic}
          </p>
          
          {/* Decorative Quote Mark */}
          <div className="mt-12 flex justify-center">
            <svg
              className="w-16 h-16 text-teller-orange/50"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8v12H6V12H2V8h8zm14 0v12h-4V12h-4V8h8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
