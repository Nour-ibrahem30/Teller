"use client";

import { content } from "@/lib/content";

export function WhyStorytellingSection() {
  return (
    <section className="section-padding bg-teller-cream-light">
      <div className="container-teller">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-section text-teller-ink mb-4 arabic-display">
            {content.home.whyStorytelling.headline.arabic}
          </h2>
        </div>
        
        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.home.whyStorytelling.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
            >
              {/* Number */}
              <div className="w-10 h-10 bg-teller-teal rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              {/* Text */}
              <p className="text-lg text-teller-ink pt-1.5">
                {point.arabic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
