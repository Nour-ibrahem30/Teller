"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { brand } from "@/lib/brand";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-teller-cream-light/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-teller">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-teller-teal-dark hover:text-teller-teal transition-colors"
            aria-label="الصفحة الرئيسية - تيلر"
          >
            <span className="text-teller-teal">{brand.name.arabic}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-teller-ink hover:text-teller-teal transition-colors font-medium"
              >
                {item.label.arabic}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              احكيلنا حكايتك
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-teller-ink hover:text-teller-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            </span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-20 bg-teller-cream-light z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-teller py-8 flex flex-col gap-6">
          {navigation.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-2xl font-medium text-teller-ink hover:text-teller-teal transition-colors ${
                isMobileMenuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label.arabic}
            </Link>
          ))}
          
          <Link
            href="/contact"
            className={`btn btn-primary w-full text-center mt-4 ${
              isMobileMenuOpen ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: `${navigation.length * 0.1}s` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            احكيلنا حكايتك
          </Link>
        </div>
      </div>
    </header>
  );
}
