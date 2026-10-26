"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { brand } from "@/lib/brand";

export function ApproachPreviewSection() {
  return (
    <section className="section-padding bg-teller-teal relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teller-teal-light/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-teller relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-section text-teller-cream mb-4 arabic-display">
            {content.home.approach.headline.arabic}
          </h2>
          <p className="text-body-large text-teller-cream/80 max-w-2xl mx-auto">
            {content.home.approach.description.arabic}
          </p>
        </div>
        
        {/* Methodology Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {brand.methodology.steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connecting Line (except last item) */}
              {index < brand.methodology.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-l from-teller-cream/20 to-transparent -translate-x-1/2" />
              )}
              
              {/* Step Card */}
              <div className="bg-teller-teal-dark/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-teller-cream/10">
                {/* Step Number */}
                <div className="w-12 h-12 bg-teller-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                
                {/* Step Title */}
                <h3 className="text-2xl font-bold text-teller-cream mb-3">
                  {step.arabic}
                </h3>
                
                {/* Step Description */}
                <p className="text-teller-cream/70">
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
