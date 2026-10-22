"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Anchor, Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-offwhite border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-auto flex items-center justify-center">
                <Image
                  src="/logo/logo.jpg"
                  alt="Royal Caribbean Logo"
                  width={160}
                  height={48}
                  className="object-contain h-10 w-auto"
                />
              </div>
            </div>
            <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
              {t("footer.aboutCompany")}
            </p>
            <div className="flex flex-col gap-1 font-mono text-xs text-slateText pt-2">
              <span className="text-navy font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                {t("footer.addressTitle")}
              </span>
              <span className="pl-5">{t("footer.addressText")}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-base font-semibold text-navy border-b border-gray-200 pb-2">
              {t("footer.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-2 font-jakarta text-xs sm:text-sm text-slateText">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/shipyard" className="hover:text-gold transition-colors">
                  {t("nav.shipyard")}
                </Link>
              </li>
              <li>
                <Link
                  href="/construction-process"
                  className="hover:text-gold transition-colors"
                >
                  {t("nav.process")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-gold transition-colors">
                  {t("nav.news")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Marine Divisions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-base font-semibold text-navy border-b border-gray-200 pb-2">
              {t("footer.marineDivisions")}
            </h3>
            <ul className="flex flex-col gap-2 font-jakarta text-xs sm:text-sm text-slateText">
              <li>
                <Link href="/projects?cat=superyacht" className="hover:text-gold transition-colors">
                  Custom Mega & Superyachts
                </Link>
              </li>
              <li>
                <Link href="/projects?cat=commercial" className="hover:text-gold transition-colors">
                  Commercial & Passenger Ships
                </Link>
              </li>
              <li>
                <Link href="/services/vessel-refitting" className="hover:text-gold transition-colors">
                  Refit, Conversion & Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/naval-architecture" className="hover:text-gold transition-colors">
                  Computational Hydrodynamics & Design
                </Link>
              </li>
              <li>
                <Link href="/services/marine-engineering" className="hover:text-gold transition-colors">
                  Green Propulsion & LNG Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-base font-semibold text-navy border-b border-gray-200 pb-2">
              {t("footer.newsletterTitle")}
            </h3>
            <p className="font-jakarta text-xs text-slateText">
              {t("footer.newsletterDesc")}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-1"
            >
              <input
                type="email"
                placeholder={t("footer.placeholderEmail")}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-xs text-navy focus:outline-none focus:border-navy"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-navy text-white text-xs font-semibold rounded hover:bg-navy-dark transition-colors shrink-0 flex items-center gap-1"
              >
                <span>{t("footer.joinBtn")}</span>
                <Send className="w-3 h-3 text-gold" />
              </button>
            </form>

            <div className="flex flex-col gap-1 font-mono text-xs text-slateText pt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-gold" />
                Tel: +90 (216) 494 8000
              </span>
              <span className="flex items-center gap-1">
                <Anchor className="w-3 h-3 text-gold" />
                VHF: Marine Ch. 16 / 72
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-gold" />
                info@royalcaribbeanconstructions.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slateText">
          <p>{t("footer.rights")}</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-navy font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              IMO Yard ID: TR-TUZ-849
            </span>
            <span>Lloyd's Register / DNV Certified</span>
            <Link href="/contact" className="hover:text-gold transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
