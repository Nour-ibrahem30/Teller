"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function ProblemAnimatedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".problem-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animate cards
      gsap.from(".problem-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-cards",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: "📢",
      title: "رسائل كتير",
      description: "العميل بيتعرض لآلاف الرسائل كل يوم ومش فاكر حاجة منها",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: "🎯",
      title: "مفيش تميز",
      description: "كل البراندات بتقول نفس الكلام بنفس الطريقة",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: "💔",
      title: "مفيش ارتباط",
      description: "العميل مش حاسس إنك بتكلمه هو، حاسس إنك بتكلم أي حد",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-teller-cream-light overflow-hidden">
      <div className="container-teller">
        {/* Section Header */}
        <div className="text-center mb-16 problem-heading">
          <h2 className="text-display-section text-teller-ink mb-6 arabic-display">
            {content.home.problem.headline.arabic}
          </h2>
          <p className="text-body-large text-teller-ink/70 max-w-3xl mx-auto">
            {content.home.problem.description.arabic}
          </p>
        </div>

        {/* Problem Cards */}
        <div className="problem-cards grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-teller-cream-dark/30 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-teller-ink mb-4">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-teller-ink/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
