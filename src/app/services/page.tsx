import { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "خدماتنا | تيلر - Teller",
  description: "خدمات السرد القصصي للعلامات التجارية - استراتيجية السرد، إدارة المحتوى، البروفايلات القصصية، والمزيد.",
};

// Service Icon Component
function ServiceIcon({ type, className = "w-10 h-10" }: { type: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    strategy: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    social: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    profile: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    about: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    campaign: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    training: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  };
  
  return icons[type] || icons.strategy;
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-teller-teal">
        <div className="container-teller">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-hero text-teller-cream mb-6 arabic-display">
              {content.services.hero.headline.arabic}
            </h1>
            <p className="text-body-large text-teller-cream/90">
              {content.services.hero.description.arabic}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-teller-cream-light">
        <div className="container-teller">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-teller-cream-dark/30"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-teller-teal/10 rounded-2xl flex items-center justify-center text-teller-teal flex-shrink-0">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-teller-ink mb-2">
                      {service.title.arabic}
                    </h2>
                    <span className="inline-block text-xs bg-teller-teal/10 text-teller-teal px-3 py-1 rounded-full">
                      {service.status === "CONFIRMED" ? "خدمة مؤكدة" : "خدمة مقترحة"}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-teller-ink/80 leading-relaxed mb-6">
                  {service.description.arabic}
                </p>
                
                {/* Problem */}
                <div className="bg-teller-brown/5 rounded-xl p-4 mb-6">
                  <p className="text-sm text-teller-brown">
                    <span className="font-bold">المشكلة اللي بنحلها:</span>{" "}
                    {service.problem.arabic}
                  </p>
                </div>
                
                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teller-teal font-medium hover:text-teller-orange transition-colors"
                >
                  <span>اطلب الخدمة</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teller-teal-dark">
        <div className="container-teller text-center">
          <h2 className="text-display-subsection text-teller-cream mb-6 arabic-display">
            مش متأكد إيه الخدمة المناسبة ليك؟
          </h2>
          <p className="text-body-large text-teller-cream/80 mb-8 max-w-2xl mx-auto">
            كلمنا وخلينا نفهم احتياجك ونقترح الحل الأنسب ليك.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
            احكيلنا عن مشروعك
          </Link>
        </div>
      </section>
    </>
  );
}
