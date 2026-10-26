/**
 * Teller Navigation Configuration
 */

export interface NavItem {
  id: string;
  label: {
    arabic: string;
    english: string;
  };
  href: string;
  isExternal?: boolean;
}

export const navigation: NavItem[] = [
  {
    id: "home",
    label: {
      arabic: "الرئيسية",
      english: "Home",
    },
    href: "/",
  },
  {
    id: "about",
    label: {
      arabic: "حكايتنا",
      english: "Our Story",
    },
    href: "/about",
  },
  {
    id: "services",
    label: {
      arabic: "خدماتنا",
      english: "Services",
    },
    href: "/services",
  },
  {
    id: "approach",
    label: {
      arabic: "طريقتنا",
      english: "Our Approach",
    },
    href: "/approach",
  },
  {
    id: "contact",
    label: {
      arabic: "تواصل معنا",
      english: "Contact",
    },
    href: "/contact",
  },
];

export const footerNavigation = {
  main: navigation,
  legal: [
    {
      id: "privacy",
      label: {
        arabic: "سياسة الخصوصية",
        english: "Privacy Policy",
      },
      href: "/privacy",
    },
  ],
};
