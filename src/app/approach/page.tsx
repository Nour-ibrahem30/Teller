import { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "طريقتنا | تيلر - Teller",
  description: "منهجية تيلر للسرد القصصي - ابتكار، سرد، تأثير. تعرف على طريقتنا في العمل.",
};

export default function ApproachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-teller-teal">
        <div className="container-teller">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-hero text-teller-cream mb-6 arabic-display">
              {content.approach.hero.headline.arabic}
            </h1>
            <p className="text-body-large text-teller-cream/90">
              {content.approach.hero.description.arabic}
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-teller-cream-light">
        <div className="container-teller">
          <div className="max-w-5xl mx-auto">
            {/* Treller Introduction */}
            <div className="text-center mb-20">
              <div className="inline-block bg-teller-teal/10 text-teller-teal px-6 py-2 rounded-full text-sm font-medium mb-6">
                {brand.methodology.name} Methodology
              </div>
              <h2 className="text-display-section text-teller-ink mb-6 arabic-display">
                ابتكار — سرد — تأثير
              </h2>
              <p className="text-body-large text-teller-ink/70 max-w-2xl mx-auto">
                منهجية تيلر للسرد القصصي مبنية على ثلاث مراحل أساسية تضمن إن قصتك توصل وتسيب أثر.
              </p>
            </div>

            {/* Methodology Steps - Vertical Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute right-8 lg:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teller-teal via-teller-orange to-teller-brown transform lg:-translate-x-1/2" />
              
              {brand.methodology.steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute right-4 lg:right-1/2 w-10 h-10 rounded-full bg-teller-teal flex items-center justify-center text-white font-bold z-10 transform lg:-translate-x-1/2">
                    {index + 1}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`mr-16 lg:mr-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                      {/* Step Title */}
                      <h3 className="text-3xl font-bold text-teller-ink mb-4">
                        {step.arabic}
                        <span className="block text-lg font-normal text-teller-teal mt-1">
                          {step.english}
                        </span>
                      </h3>
                      
                      {/* Step Description */}
                      <p className="text-teller-ink/70 leading-relaxed mb-4">
                        {step.description.arabic}
                      </p>
                      
                      {/* Extended Description - Provisional */}
                      <div className="bg-teller-cream/50 rounded-xl p-4 text-sm text-teller-ink/60">
                        <p className="italic">
                          {index === 0 && "في المرحلة دي، بنتعمق في فهم براندك وجمهورك ونبتكر أفكار فريدة لقصتك."}
                          {index === 1 && "بنصيغ القصة بأسلوب يناسب جمهورك ويوصل رسالتك بطريقة مؤثرة."}
                          {index === 2 && "بنوصل قصتك للناس الصح بالطريقة الصح ونقيس التأثير."}
                        </p>
                        <p className="text-xs mt-2 text-teller-brown">
                          * تفاصيل إضافية قيد المراجعة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-teller-teal-dark">
        <div className="container-teller">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-subsection text-teller-cream mb-8 arabic-display">
              فلسفتنا
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💡",
                  title: "الأصالة أولاً",
                  description: "نؤمن إن أقوى القصص هي الحقيقية",
                },
                {
                  icon: "🎯",
                  title: "التواصل الهادف",
                  description: "كل قصة لازم يكون ليها هدف واضح",
                },
                {
                  icon: "❤️",
                  title: "التأثير الإنساني",
                  description: "القصص الحقيقية بتوصل للقلوب",
                },
              ].map((item, index) => (
                <div key={index} className="bg-teller-teal/30 rounded-2xl p-6 border border-teller-cream/10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-teller-cream mb-2">{item.title}</h3>
                  <p className="text-teller-cream/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teller-cream">
        <div className="container-teller text-center">
          <h2 className="text-display-subsection text-teller-ink mb-6 arabic-display">
            جاهز تبدأ رحلتك مع تيلر؟
          </h2>
          <p className="text-body-large text-teller-ink/70 mb-8 max-w-2xl mx-auto">
            خلينا نطبق المنهجية دي على قصة براندك ونوصلها للعالم.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
            احكيلنا حكايتك
          </Link>
        </div>
      </section>
    </>
  );
}
