/**
 * Teller Services Configuration
 * 
 * Services based on existing public materials.
 * Status: PROVISIONAL - Requires CEO confirmation
 */

export interface Service {
  id: string;
  title: {
    arabic: string;
    english: string;
  };
  description: {
    arabic: string;
    english: string;
  };
  problem: {
    arabic: string;
    english: string;
  };
  icon: string;
  status: "CONFIRMED" | "PROVISIONAL";
}

export const services: Service[] = [
  {
    id: "brand-storytelling",
    title: {
      arabic: "استراتيجية السرد القصصي للبراند",
      english: "Brand Storytelling Strategy",
    },
    description: {
      arabic: "نساعدك تكتشف قصة براندك الحقيقية ونصيغها بطريقة تميزك وتوصلك لجمهورك.",
      english: "We help you discover your brand's authentic story and craft it in a way that differentiates you and connects with your audience.",
    },
    problem: {
      arabic: "براندك عنده قصة قوية بس محدش عارف يحكيها صح",
      english: "Your brand has a powerful story but no one knows how to tell it right",
    },
    icon: "strategy",
    status: "CONFIRMED",
  },
  {
    id: "social-media",
    title: {
      arabic: "إدارة محتوى السوشيال ميديا",
      english: "Social Media Content Management",
    },
    description: {
      arabic: "محتوى سوشيال ميديا مبني على السرد القصصي يخلي جمهورك يحس ويتفاعل.",
      english: "Storytelling-driven social media content that makes your audience feel and engage.",
    },
    problem: {
      arabic: "المحتوى بتاعك مش بيوصل ومش بيعمل تفاعل حقيقي",
      english: "Your content isn't reaching people or creating genuine engagement",
    },
    icon: "social",
    status: "CONFIRMED",
  },
  {
    id: "company-profile",
    title: {
      arabic: "بروفايل الشركة القصصي",
      english: "Storytelling-Based Company Profiles",
    },
    description: {
      arabic: "بروفايل مش زي أي بروفايل - قصة شركتك بأسلوب يخلي اللي يقراه يحس ويفتكر.",
      english: "A profile unlike any other - your company's story told in a way that makes readers feel and remember.",
    },
    problem: {
      arabic: "بروفايل شركتك زي أي حد تاني - ممل ومش بيسيب انطباع",
      english: "Your company profile is like everyone else's - boring and forgettable",
    },
    icon: "profile",
    status: "CONFIRMED",
  },
  {
    id: "about-us",
    title: {
      arabic: "كتابة صفحة 'من نحن'",
      english: "About Us Copywriting",
    },
    description: {
      arabic: "صفحة 'من نحن' تحكي قصتك الحقيقية وتخلي الزائر يحس إنه عرفك.",
      english: "An 'About Us' page that tells your real story and makes visitors feel they know you.",
    },
    problem: {
      arabic: "صفحة 'من نحن' بتاعتك مش بتوضح مين انتوا فعلاً",
      english: "Your 'About Us' page doesn't show who you really are",
    },
    icon: "about",
    status: "CONFIRMED",
  },
  {
    id: "campaigns",
    title: {
      arabic: "حملات السرد القصصي",
      english: "Storytelling Campaigns",
    },
    description: {
      arabic: "حملات تسويقية مبنية على قصص حقيقية توصل رسالتك وتحقق أهدافك.",
      english: "Marketing campaigns built on authentic stories that deliver your message and achieve your goals.",
    },
    problem: {
      arabic: "حملاتك التسويقية مش بتحقق النتايج اللي انت عايزها",
      english: "Your marketing campaigns aren't achieving the results you want",
    },
    icon: "campaign",
    status: "CONFIRMED",
  },
  {
    id: "training",
    title: {
      arabic: "تدريب السرد القصصي الداخلي",
      english: "Internal Storytelling Training",
    },
    description: {
      arabic: "ندرب فريقك على فن السرد القصصي علشان يقدروا يحكوا قصة البراند صح.",
      english: "We train your team on the art of storytelling so they can tell your brand's story right.",
    },
    problem: {
      arabic: "فريقك مش عارف يوصل قصة البراند للعملاء بشكل متسق",
      english: "Your team doesn't know how to consistently communicate your brand story to clients",
    },
    icon: "training",
    status: "CONFIRMED",
  },
];
