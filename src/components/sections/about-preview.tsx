"use client";

import Link from "next/link";
import { content } from "@/lib/content";

export function AboutPreviewSection() {
  return (
    <section className="section-padding bg-teller-cream">
      <div className="container-teller">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-display-section text-teller-ink mb-6 arabic-display">
              {content.home.about.headline.arabic}
            </h2>
            
            <p className="text-body-large text-teller-ink/80 leading-relaxed">
              {content.home.about.description.arabic}
            </p>
          </div>
          
          {/* Visual Element - Brand Values Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "📖", text: "نحكي قصص" },
              { icon: "🎯", text: "نوصّل رسائل" },
              { icon: "💡", text: "نبتكر أفكار" },
              { icon: "🤝", text: "نبني ثقة" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <span className="text-teller-ink font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Link
              href="/about"
              className="btn btn-secondary"
            >
              {content.home.about.cta.arabic}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
