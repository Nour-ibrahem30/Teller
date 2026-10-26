/**
 * Teller Brand Configuration
 * 
 * IMPORTANT: This file contains provisional brand information.
 * All values marked as PROVISIONAL require CEO confirmation.
 * 
 * Status Legend:
 * - CONFIRMED: Verified from existing brand materials
 * - PROVISIONAL: Proposed values awaiting approval
 * - TBD: Placeholder requiring CEO input
 */

export const brand = {
  name: {
    arabic: "تيلر",
    english: "Teller",
    full: "Teller — تيلر",
  },
  
  // PROVISIONAL - Requires CEO confirmation
  slogan: {
    arabic: "قصة تصل وتؤثر.",
    english: "Stories that reach and resonate.",
    status: "PROVISIONAL" as const,
  },
  
  // PROVISIONAL - Brand description based on available materials
  description: {
    short: {
      arabic: "نساعدك تحكي قصة براندك بطريقة توصل وتسيب أثر.",
      english: "We help you tell your brand story in a way that connects and leaves an impact.",
    },
    long: {
      arabic: "تيلر شركة متخصصة في السرد القصصي للعلامات التجارية، بنساعد الأفراد والشركات يتواصلوا مع جمهورهم من خلال قصص حقيقية وملهمة.",
      english: "Teller is a storytelling-driven branding company that helps individuals and organizations communicate through authentic and inspiring stories.",
    },
    status: "PROVISIONAL" as const,
  },
  
  // CONFIRMED - From existing materials
  methodology: {
    name: "Treller",
    steps: [
      {
        arabic: "ابتكار",
        english: "Innovation",
        description: {
          arabic: "نبتكر أفكار جديدة وفريدة لقصتك",
          english: "We create new and unique ideas for your story",
        },
      },
      {
        arabic: "سرد",
        english: "Storytelling",
        description: {
          arabic: "نصيغ قصتك بأسلوب يوصل ويأثر",
          english: "We craft your story in a way that connects and resonates",
        },
      },
      {
        arabic: "تأثير",
        english: "Impact",
        description: {
          arabic: "نوصل قصتك لجمهورك ونسيب أثر حقيقي",
          english: "We deliver your story to your audience and create real impact",
        },
      },
    ],
    status: "CONFIRMED" as const,
  },
  
  // PROVISIONAL - Contact information TBD
  contact: {
    // TBD - Awaiting CEO confirmation
    email: null,
    phone: null,
    address: null,
    whatsapp: null,
    status: "TBD" as const,
  },
  
  // PROVISIONAL - Social media links TBD
  social: {
    instagram: null,
    linkedin: null,
    twitter: null,
    facebook: null,
    status: "TBD" as const,
  },
  
  // CONFIRMED - Based on existing public materials
  values: {
    items: [
      {
        arabic: "الأصالة",
        english: "Authenticity",
        description: {
          arabic: "نؤمن بقوة القصص الحقيقية",
          english: "We believe in the power of authentic stories",
        },
      },
      {
        arabic: "التواصل الإنساني",
        english: "Human Connection",
        description: {
          arabic: "القصص الحقيقية بتوصل للقلوب",
          english: "Real stories touch hearts",
        },
      },
      {
        arabic: "الإبداع",
        english: "Creativity",
        description: {
          arabic: "كل قصة ليها طريقة فريدة تتحكي بيها",
          english: "Every story has a unique way to be told",
        },
      },
      {
        arabic: "التأثير",
        english: "Impact",
        description: {
          arabic: "القصة الحقيقية بتسيب أثر دائم",
          english: "True stories leave a lasting impact",
        },
      },
    ],
    status: "PROVISIONAL" as const,
  },
} as const;

export type BrandStatus = "CONFIRMED" | "PROVISIONAL" | "TBD";
