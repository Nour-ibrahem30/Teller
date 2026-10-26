import { Metadata } from "next";
import { content } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا | تيلر - Teller",
  description: "تواصل مع تيلر - نحن هنا لنساعدك تحكي قصة براندك. راسلنا وخلينا نبدأ الحكاية.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-teller-teal">
        <div className="container-teller">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-hero text-teller-cream mb-6 arabic-display">
              {content.contact.hero.headline.arabic}
            </h1>
            <p className="text-body-large text-teller-cream/90">
              {content.contact.hero.description.arabic}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-teller-cream-light">
        <div className="container-teller">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-display-subsection text-teller-ink mb-8 arabic-display">
                ابعتلنا رسالة
              </h2>
              
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-display-subsection text-teller-ink mb-8 arabic-display">
                معلومات التواصل
              </h2>

              {/* Placeholder Contact Info */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-teller-cream-dark/30 mb-8">
                <p className="text-teller-ink/70 mb-6">
                  معلومات التواصل الرسمية سيتم إضافتها قريباً بعد تأكيد البيانات.
                </p>
                
                <div className="space-y-4">
                  {/* Placeholder items */}
                  <div className="flex items-center gap-4 text-teller-ink/50">
                    <div className="w-12 h-12 bg-teller-cream rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teller-ink">البريد الإلكتروني</p>
                      <p className="text-sm">قيد التحديث</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-teller-ink/50">
                    <div className="w-12 h-12 bg-teller-cream rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teller-ink">الهاتف</p>
                      <p className="text-sm">قيد التحديث</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-teller-ink/50">
                    <div className="w-12 h-12 bg-teller-cream rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teller-ink">الموقع</p>
                      <p className="text-sm">مصر</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-teller-teal/10 rounded-3xl p-8">
                <h3 className="text-lg font-bold text-teller-ink mb-4">
                  ليه تتواصل معانا؟
                </h3>
                <ul className="space-y-3">
                  {[
                    "استشارة مجانية لفهم احتياجك",
                    "عرض سعر مخصص لمشروعك",
                    "نقاش عن طريقتنا في العمل",
                    "الإجابة على أي استفسارات",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-teller-ink/80">
                      <svg className="w-5 h-5 text-teller-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
