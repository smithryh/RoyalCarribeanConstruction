"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { Menu, X, Phone, Globe, ChevronRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/shipyard", label: t("nav.shipyard") },
    { href: "/construction-process", label: t("nav.process") },
    { href: "/news", label: t("nav.news") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b ${
        isScrolled
          ? "border-gray-200 shadow-md h-20"
          : "border-gray-100 h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <Image
              src="/logo/logo.png"
              alt="Royal Caribbean Logo"
              width={48}
              height={48}
              className="object-contain w-auto h-8 sm:h-10 group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-playfair text-base sm:text-lg lg:text-xl font-bold tracking-tight text-navy leading-none">
              ROYAL CARIBBEAN
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mt-0.5 font-semibold">
              Shipbuilding & Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 h-full">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
                  isActive
                    ? "text-gold border-gold font-bold"
                    : "text-navy hover:text-gold border-transparent hover:border-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Operations Phone Contact */}
          <div className="hidden md:flex flex-col text-right pr-3 border-r border-gray-200">
            <span className="font-mono text-[10px] uppercase text-slateText tracking-wider">
              {t("nav.navalOps")}
            </span>
            <a
              href="tel:+902164948000"
              className="font-jakarta text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1 justify-end"
            >
              <Phone className="w-3 h-3 text-gold" />
              {t("nav.operationsPhone")}
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-offwhite-low p-1 rounded-md border border-gray-200">
            <Globe className="w-3.5 h-3.5 text-slateText ml-1 hidden sm:block" />
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-all ${
                language === "en"
                  ? "bg-navy text-white shadow-sm"
                  : "text-slateText hover:text-navy"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("tr")}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-all ${
                language === "tr"
                  ? "bg-navy text-white shadow-sm"
                  : "text-slateText hover:text-navy"
              }`}
            >
              TR
            </button>
          </div>

          {/* Request a Quote CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-white border border-gold text-navy hover:bg-gold hover:text-white font-jakarta text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            {t("nav.requestQuote")}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-md text-navy hover:bg-offwhite-low transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-20 bg-white border-b border-gray-200 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-navy text-white font-bold"
                      : "text-navy hover:bg-offwhite-low hover:text-gold"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isActive ? "text-gold" : "text-gray-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+902164948000"
              className="flex items-center gap-2 text-sm font-semibold text-navy p-3 rounded-lg bg-offwhite-low"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{t("nav.operationsPhone")}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-gold text-white text-center font-bold text-sm shadow-md hover:bg-gold-muted transition-colors"
            >
              {t("nav.requestQuote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
