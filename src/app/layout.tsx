import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AppWrapper } from "@/components/AppWrapper";
import { BackToTop } from "@/components/BackToTop";

// Arabic-first typography with Tajawal
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "تيلر | Teller - قصة تصل وتؤثر",
  description:
    "تيلر شركة متخصصة في السرد القصصي للعلامات التجارية. نساعدك تحكي قصة براندك بطريقة توصل وتسيب أثر.",
  keywords: [
    "تيلر",
    "Teller",
    "سرد قصصي",
    "storytelling",
    "براندينج",
    "branding",
    "مصر",
    "Egypt",
    "تسويق",
    "marketing",
  ],
  authors: [{ name: "Teller" }],
  openGraph: {
    title: "تيلر | Teller - قصة تصل وتؤثر",
    description:
      "نساعدك تحكي قصة براندك بطريقة توصل وتسيب أثر.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className={`${tajawal.className} antialiased`}>
        <AppWrapper>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </AppWrapper>
      </body>
    </html>
  );
}
