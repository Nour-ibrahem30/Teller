"use client";

import dynamic from "next/dynamic";

// Dynamic imports for animated sections
const Hero3DSection = dynamic(
  () => import("@/components/sections/hero-3d").then((mod) => mod.Hero3DSection),
  { ssr: false }
);

const ProblemAnimatedSection = dynamic(
  () => import("@/components/sections/problem-animated").then((mod) => mod.ProblemAnimatedSection),
  { ssr: false }
);

const InsightAnimatedSection = dynamic(
  () => import("@/components/sections/insight-animated").then((mod) => mod.InsightAnimatedSection),
  { ssr: false }
);

const ServicesAnimatedSection = dynamic(
  () => import("@/components/sections/services-animated").then((mod) => mod.ServicesAnimatedSection),
  { ssr: false }
);

const ApproachAnimatedSection = dynamic(
  () => import("@/components/sections/approach-animated").then((mod) => mod.ApproachAnimatedSection),
  { ssr: false }
);

const FinalCtaAnimatedSection = dynamic(
  () => import("@/components/sections/final-cta-animated").then((mod) => mod.FinalCtaAnimatedSection),
  { ssr: false }
);

// Static sections
import { AboutPreviewSection } from "@/components/sections/about-preview";
import { WhyStorytellingSection } from "@/components/sections/why-storytelling";

export default function HomePage() {
  return (
    <>
      <Hero3DSection />
      <ProblemAnimatedSection />
      <InsightAnimatedSection />
      <AboutPreviewSection />
      <ServicesAnimatedSection />
      <ApproachAnimatedSection />
      <WhyStorytellingSection />
      <FinalCtaAnimatedSection />
    </>
  );
}
