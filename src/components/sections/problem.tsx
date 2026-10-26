"use client";

import { content } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="section-padding bg-teller-cream-light">
      <div className="container-teller">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-display-section text-teller-ink mb-8 arabic-display">
            {content.home.problem.headline.arabic}
          </h2>
          
          {/* Problem Description */}
          <p className="text-body-large text-teller-ink/80 leading-relaxed">
            {content.home.problem.description.arabic}
          </p>
          
          {/* Visual Element - Problem Illustration */}
          <div className="mt-16 relative">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "رسائل مش واضحة",
                "محتوى عادي",
                "تفاعل ضعيف",
                "براند مش مميز",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-teller-brown/10 text-teller-brown px-6 py-3 rounded-full text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
