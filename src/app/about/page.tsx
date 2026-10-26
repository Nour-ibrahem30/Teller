import { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "حكايتنا | تيلر - Teller",
  description: "تعرف على تيلر - شركة متخصصة في السرد القصصي للعلامات التجارية. نؤمن إن كل براند عنده قصة تستاهل تتحكي.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-teller-teal">
        <div className="container-teller">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-hero text-teller-cream mb-6 arabic-display">
              {content.about.hero.headline.arabic}
            </h1>
            <p className="text-body-large text-teller-cream/90">
              {content.about.hero.description.arabic}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-teller-cream-light">
        <div className="container-teller">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display-subsection text-teller-ink mb-6 arabic-display">
                {content.about.mission.headline.arabic}
              </h2>
              <p className="text-body-large text-teller-ink/80 leading-relaxed">
                {content.about.mission.description.arabic}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teller-teal/20 to-teller-orange/20 rounded-3xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-teller-teal font-bold text-xl">مهمتنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-teller-cream">
        <div className="container-teller">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-teller-orange/20 to-teller-teal/20 rounded-3xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl mb-4">🔭</div>
                <p className="text-teller-teal font-bold text-xl">رؤيتنا</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-display-subsection text-teller-ink mb-6 arabic-display">
                {content.about.vision.headline.arabic}
              </h2>
              <p className="text-body-large text-teller-ink/80 leading-relaxed">
                {content.about.vision.description.arabic}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-teller-teal-dark">
        <div className="container-teller">
          <div className="text-center mb-16">
            <h2 className="text-display-subsection text-teller-cream mb-4 arabic-display">
              قيمنا
            </h2>
            <p className="text-body text-teller-cream/70">
              المبادئ اللي بنمشي عليها في كل اللي بنعمله
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.values.items.map((value, index) => (
              <div
                key={index}
                className="bg-teller-teal/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-teller-cream/10"
              >
                <h3 className="text-xl font-bold text-teller-cream mb-3">
                  {value.arabic}
                </h3>
                <p className="text-teller-cream/70 text-sm">
                  {value.description.arabic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teller-cream-light">
        <div className="container-teller text-center">
          <h2 className="text-display-subsection text-teller-ink mb-6 arabic-display">
            عايز تعرف أكتر؟
          </h2>
          <p className="text-body-large text-teller-ink/70 mb-8 max-w-2xl mx-auto">
            كلمنا وخلينا نحكيلك أكتر عن تيلر وإزاي نقدر نساعدك تحكي قصتك.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
            تواصل معنا
          </Link>
        </div>
      </section>
    </>
  );
}
