"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { services } from "@/lib/services";

// Service Icon Component
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
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
    campaign: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    training: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  };
  
  return icons[type] || icons.strategy;
}

export function ServicesPreviewSection() {
  // Show first 4 services on homepage
  const featuredServices = services.slice(0, 4);
  
  return (
    <section className="section-padding bg-teller-cream-light">
      <div className="container-teller">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-section text-teller-ink mb-4 arabic-display">
            {content.home.services.headline.arabic}
          </h2>
          <p className="text-body-large text-teller-ink/70 max-w-2xl mx-auto">
            {content.home.services.description.arabic}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-teller-cream-dark/50 hover:border-teller-teal/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-teller-teal/10 rounded-xl flex items-center justify-center text-teller-teal mb-6 group-hover:bg-teller-teal group-hover:text-white transition-colors">
                <ServiceIcon type={service.icon} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-teller-ink mb-3">
                {service.title.arabic}
              </h3>
              
              <p className="text-teller-ink/70 mb-4 leading-relaxed">
                {service.description.arabic}
              </p>
              
              {/* Problem Tag */}
              <div className="inline-flex items-center gap-2 text-sm text-teller-brown bg-teller-brown/10 px-3 py-1 rounded-full">
                <span>المشكلة:</span>
                <span className="font-medium">{service.problem.arabic}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-secondary">
            شوف كل الخدمات
            <svg
              className="w-5 h-5 mr-2 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
