"use client";

import Link from "next/link";
import { content } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-teller-teal-dark via-teller-teal to-teller-teal-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teller-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teller-cream/10 rounded-full blur-3xl" />
        
        {/* Decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <path
            d="M0,250 Q360,100 720,250 T1440,250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teller-cream"
          />
          <path
            d="M0,250 Q360,400 720,250 T1440,250"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teller-cream"
          />
        </svg>
      </div>
      
      <div className="container-teller relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-display-hero text-teller-cream mb-6 arabic-display">
            {content.home.finalCta.headline.arabic}
          </h2>
          
          {/* Subheadline */}
          <p className="text-body-large text-teller-cream/90 mb-12">
            {content.home.finalCta.subheadline.arabic}
          </p>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn bg-teller-orange text-white hover:bg-teller-orange-dark text-xl px-12 py-5 shadow-2xl shadow-teller-orange/30 hover:shadow-teller-orange/50 transition-all"
          >
            {content.home.finalCta.cta.arabic}
          </Link>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-teller-cream/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>خدمة مخصصة</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>نتائج ملموسة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
