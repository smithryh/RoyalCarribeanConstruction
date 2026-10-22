"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import {
  Menu,
  X,
  Phone,
  Globe,
  ChevronDown,
  ChevronRight,
  Anchor,
  Ship,
  Hammer,
  RotateCw,
  Compass,
  Building2,
  Calendar,
  Newspaper
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const servicesDropdown = [
    {
      href: "/services/luxury-yacht-construction",
      title: t("nav.dropYachtTitle"),
      desc: t("nav.dropYachtDesc"),
      icon: Ship,
    },
    {
      href: "/services/commercial-shipbuilding",
      title: t("nav.dropCommercialTitle"),
      desc: t("nav.dropCommercialDesc"),
      icon: Anchor,
    },
    {
      href: "/services/vessel-refitting",
      title: t("nav.dropRefitTitle"),
      desc: t("nav.dropRefitDesc"),
      icon: RotateCw,
    },
    {
      href: "/services/naval-architecture",
      title: t("nav.dropArchTitle"),
      desc: t("nav.dropArchDesc"),
      icon: Compass,
    },
  ];

  const shipyardDropdown = [
    {
      href: "/shipyard",
      title: t("nav.dropFacilitiesTitle"),
      desc: t("nav.dropFacilitiesDesc"),
      icon: Building2,
    },
    {
      href: "/construction-process",
      title: t("nav.dropProcessTitle"),
      desc: t("nav.dropProcessDesc"),
      icon: Calendar,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 transition-all duration-300 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-navy text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-navy-light">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold font-semibold">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              {t("nav.topYardStatus")}
            </span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline text-gray-300">{t("nav.topCoords")}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+902164948000"
              className="flex items-center gap-1 text-gray-200 hover:text-gold transition-colors font-sans font-medium"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>{t("nav.operationsPhone")}</span>
            </a>
            <span className="text-gray-400">|</span>
            {/* Global Language Toggle */}
            <div className="flex items-center gap-1 bg-navy-dark px-2 py-0.5 rounded border border-gold/30">
              <Globe className="w-3 h-3 text-gold mr-1" />
              <button
                onClick={() => setLanguage("en")}
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors ${
                  language === "en" ? "bg-gold text-navy" : "text-gray-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors ${
                  language === "tr" ? "bg-gold text-navy" : "text-gray-300 hover:text-white"
                }`}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Company Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative h-12 w-auto flex items-center justify-center">
            <Image
              src="/logo/logo.jpg"
              alt="Royal Caribbean Logo"
              width={160}
              height={48}
              className="object-contain h-10 w-auto group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <Link
            href="/"
            className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
              pathname === "/"
                ? "text-gold border-gold font-bold"
                : "text-navy hover:text-gold border-transparent"
            }`}
          >
            {t("nav.home")}
          </Link>

          <Link
            href="/about"
            className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
              pathname === "/about"
                ? "text-gold border-gold font-bold"
                : "text-navy hover:text-gold border-transparent"
            }`}
          >
            {t("nav.about")}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className={`h-full flex items-center gap-1 text-sm font-semibold transition-colors border-b-2 ${
                pathname?.startsWith("/services")
                  ? "text-gold border-gold font-bold"
                  : "text-navy hover:text-gold border-transparent"
              }`}
            >
              <span>{t("nav.services")}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gold" />
            </Link>

            {activeDropdown === "services" && (
              <div className="absolute top-20 left-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                {servicesDropdown.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-offwhite transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-offwhite group-hover:bg-gold group-hover:text-white text-navy transition-colors shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-navy group-hover:text-gold transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slateText line-clamp-1">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
                <div className="pt-2 border-t border-gray-100 mt-1 text-center">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t("nav.allServicesLink")}</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
              pathname?.startsWith("/projects")
                ? "text-gold border-gold font-bold"
                : "text-navy hover:text-gold border-transparent"
            }`}
          >
            {t("nav.projects")}
          </Link>

          {/* Shipyard & Process Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("shipyard")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/shipyard"
              className={`h-full flex items-center gap-1 text-sm font-semibold transition-colors border-b-2 ${
                pathname === "/shipyard" || pathname === "/construction-process"
                  ? "text-gold border-gold font-bold"
                  : "text-navy hover:text-gold border-transparent"
              }`}
            >
              <span>{t("nav.shipyard")}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gold" />
            </Link>

            {activeDropdown === "shipyard" && (
              <div className="absolute top-20 left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                {shipyardDropdown.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-offwhite transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-offwhite group-hover:bg-gold group-hover:text-white text-navy transition-colors shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-navy group-hover:text-gold transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slateText line-clamp-1">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/news"
            className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
              pathname?.startsWith("/news")
                ? "text-gold border-gold font-bold"
                : "text-navy hover:text-gold border-transparent"
            }`}
          >
            {t("nav.news")}
          </Link>

          <Link
            href="/contact"
            className={`h-full flex items-center text-sm font-semibold transition-colors border-b-2 ${
              pathname === "/contact"
                ? "text-gold border-gold font-bold"
                : "text-navy hover:text-gold border-transparent"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gold text-white hover:bg-gold-muted font-jakarta text-xs sm:text-sm font-semibold transition-all shadow-md"
          >
            {t("nav.requestQuote")}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-offwhite transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[104px] bg-white border-b border-gray-200 shadow-2xl p-6 flex flex-col gap-4 max-h-[calc(100vh-104px)] overflow-y-auto z-50">
          <nav className="flex flex-col gap-2">
            {[
              { href: "/", label: t("nav.home") },
              { href: "/about", label: t("nav.about") },
              { href: "/services", label: t("nav.services") },
              { href: "/projects", label: t("nav.projects") },
              { href: "/shipyard", label: t("nav.shipyard") },
              { href: "/construction-process", label: t("nav.process") },
              { href: "/news", label: t("nav.news") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-lg text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "bg-navy text-white font-bold"
                    : "text-navy hover:bg-offwhite"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gold" />
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-gold text-white text-center font-bold text-sm shadow-md"
            >
              {t("nav.requestQuote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
