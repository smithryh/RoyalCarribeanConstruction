"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { projectsData } from "@/data/projects";
import {
  ArrowRight,
  Ship,
  CheckCircle,
  Award,
  Anchor,
  Compass,
  Building2,
  Download,
  Calendar,
  ShieldCheck,
  Globe2
} from "lucide-react";

export default function HomePage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData.slice(0, 3)
      : projectsData.filter((p) => p.category === activeFilter).slice(0, 3);

  return (
    <div className="w-full bg-white text-navy">
      {/* SECTION 1: HERO (Split Screen / Pure White Luxury) */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 py-10 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Copy & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Accent Pill & Hairline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-gold"></span>
              <span className="font-mono text-xs uppercase text-gold font-semibold tracking-wider">
                {t("hero.eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-navy font-bold leading-tight tracking-tight mb-6">
              {t("hero.headline")}
            </h1>

            {/* Narrative Description */}
            <p className="font-jakarta text-base sm:text-lg text-slateText leading-relaxed mb-8 max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gold text-white font-jakarta text-sm font-semibold shadow-md hover:bg-gold-muted transition-all group"
              >
                <span>{t("hero.exploreProjects")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-navy border border-gray-300 hover:border-gold font-jakarta text-sm font-semibold transition-all shadow-sm"
              >
                {t("hero.requestQuote")}
              </Link>
            </div>

            {/* Metric Badges Ticker */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="font-playfair text-2xl sm:text-3xl font-bold text-navy">
                  78+
                </span>
                <span className="font-mono text-xs text-slateText uppercase mt-1">
                  {t("hero.vesselsBuilt")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl sm:text-3xl font-bold text-navy">
                  120m
                </span>
                <span className="font-mono text-xs text-slateText uppercase mt-1">
                  {t("hero.maxCapacity")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl sm:text-3xl font-bold text-navy">
                  LR / RINA
                </span>
                <span className="font-mono text-xs text-slateText uppercase mt-1">
                  {t("hero.certifiedYard")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-offwhite shadow-2xl border border-gray-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1PZZdx8x6xrtmm4lEjKj-rRKNEByuhEiuowaHWxocFL3e7tn05HS3FFuAL4kZwTWCICbyeSjDumyMxFvvAQ5HR3r35CfvherVkX1QHgHN7exSp27v9a6IR_pRmTQkklhXp71OB3_JJ3xA-WkvkS-1lKC0AeBQY-IxrWq3M2Zwxv3Nm8bsyDORod53Lx9Zj6jrd6h4P7LzxvfpDuIkVucfa6_7rOGrKHF67z1qU6c7GFpWKfuRvPt6"
                alt="Royal Caribbean Shipyard Drydock Aurora Flagship"
                className="w-full h-[420px] sm:h-[520px] object-cover object-center"
              />
              {/* Floating Specification Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center gap-4 border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-offwhite flex items-center justify-center shrink-0 text-gold">
                  <Ship className="w-6 h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    <span className="font-mono text-xs text-gold font-semibold uppercase">
                      {t("hero.flagshipVessel")}
                    </span>
                  </div>
                  <span className="font-playfair text-base font-bold text-navy truncate">
                    {t("hero.flagshipName")}
                  </span>
                  <span className="font-jakarta text-xs text-slateText truncate">
                    {t("hero.flagshipStage")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE EXPERTISE & STATS BAR */}
      <section className="w-full bg-offwhite py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
              <span className="font-mono text-xs text-gold font-semibold">
                {t("stats.capabilityTitle")}
              </span>
              <span className="font-playfair text-3xl font-bold text-navy">
                {t("stats.capabilityVal")}
              </span>
              <p className="font-jakarta text-xs sm:text-sm text-slateText">
                {t("stats.capabilityDesc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
              <span className="font-mono text-xs text-gold font-semibold">
                {t("stats.integrationTitle")}
              </span>
              <span className="font-playfair text-3xl font-bold text-navy">
                {t("stats.integrationVal")}
              </span>
              <p className="font-jakarta text-xs sm:text-sm text-slateText">
                {t("stats.integrationDesc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
              <span className="font-mono text-xs text-gold font-semibold">
                {t("stats.heritageTitle")}
              </span>
              <span className="font-playfair text-3xl font-bold text-navy">
                {t("stats.heritageVal")}
              </span>
              <p className="font-jakarta text-xs sm:text-sm text-slateText">
                {t("stats.heritageDesc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
              <span className="font-mono text-xs text-gold font-semibold">
                {t("stats.complianceTitle")}
              </span>
              <span className="font-playfair text-3xl font-bold text-navy">
                {t("stats.complianceVal")}
              </span>
              <p className="font-jakarta text-xs sm:text-sm text-slateText">
                {t("stats.complianceDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENGINEERING SERVICES PREVIEW */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="font-mono text-xs uppercase text-gold font-semibold tracking-wider">
                  {t("home.turnkeyTitle")}
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
                {t("home.craftedTitle")}
              </h2>
              <div className="w-12 h-1 bg-gold mt-2"></div>
            </div>
            <p className="font-jakarta text-sm sm:text-base text-slateText max-w-lg">
              {t("home.craftedDesc")}
            </p>
          </div>

          {/* 3 Luxury Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH9P9vLjyDykVGNNWi95ID9Oo6_8ngquIkCrcseMD03SZEpW9qRg1dQveA3eKN5oQIVvTYcYEgB8emyc6wrPfhbf3QXQrX--r3Gru0hGNWGsNHy15_3Gtlr1TwAAOmZnNwfOFsCw5wHpEFsTXJC1y6HAng_McQTNlDRj6CcOQYIgT_1YiABta2cAeQ30Xq8oIjPtfGCVu_LkWrOF8E8804fY4IjvNJBtZEF_ErT0l9o4clE2MbPu2e"
                  alt="Custom Superyacht Construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-navy font-mono text-xs font-semibold">
                  40m – 120m LOA
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-playfair text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {language === "tr" ? "Lüks Yat İnşası" : "Custom Superyacht Construction"}
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText mb-6 leading-relaxed">
                  {language === "tr"
                    ? "Yüksek mukavemetli çelik ve 5083 alüminyum alaşımı ile üretilen özel ve yarı özel lüks motor yatlar."
                    : "Full custom and semi-custom luxury motor yachts fabricated in high-tensile marine steel and grade 5083 aluminium."}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href="/services/luxury-yacht-construction"
                    className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    <span>{t("common.learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrponVuj53CUP-HCuyi9SqBKbmPhZMWxvQprBvifzKFiEmIeebpfu7zLk-TbSDVX_LsLSYqgeOZJNTies54TqrzzIFm0kSMjPxyZeKtq95B9aM9iTQ4bAxWUrWZ5CcauTQQNsbvbWzVEfdz-Pz1Kw5u38Ax1qgwXMpmADgpTkdAZhVUATCPrrATNPeWN2gU7q2XrnAMe0tzt2HFTYEpMM6BiSes91F1qrXIC-aJd4faNDJr26MzatN"
                  alt="Commercial Shipbuilding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-navy font-mono text-xs font-semibold">
                  COMMERCIAL & RESEARCH
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-playfair text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {language === "tr" ? "Ticari ve Özel Gemiler" : "Commercial & Specialized Vessels"}
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText mb-6 leading-relaxed">
                  {language === "tr"
                    ? "Uluslararası klas standartlarında inşa edilen hızlı yolcu katamaranları ve açık deniz araştırma gemileri."
                    : "Fast passenger catamarans, offshore oceanographic vessels, and pilot craft built to rigid international classification codes."}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href="/services/commercial-shipbuilding"
                    className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    <span>{t("common.learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQu2uBnhtQI5XJptAHGhYxCzhEgSMaJNy4PTUAd75a6mymZlRBPJqct0AfDxKdR33vIstfjZeW-xYe0tyvmIzRBen05ZOPME20jv6LcTEHvg-32OrLlg5eh9OSOiVWkTzevfx1998W6DC8nFdjMqcfp6d9o_Vijx8bYCaha045a4PikgEoCbxsWrBTHBWJLwBAmif3XkwOmQNmwnE64DkrwbeXK-syt1W89JboZo5B_Bj_HkdbWIKK"
                  alt="Refit & Conversion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-navy font-mono text-xs font-semibold">
                  REFIT & CONVERSION
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-playfair text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {language === "tr" ? "Yenileme ve Modernizasyon" : "Refit, Conversion & Modernization"}
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText mb-6 leading-relaxed">
                  {language === "tr"
                    ? "Kapsamlı gövde uzatma, kamara yenileme, tik güverte kaplama ve seyrüsefer otomasyon yenilemeleri."
                    : "Major mid-life structural lengthening, modern teak re-decking, luxury cabin remodels, and complete automation overhauls."}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href="/services/vessel-refitting"
                    className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    <span>{t("common.learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED FLEET & PROJECTS */}
      <section className="w-full bg-offwhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="font-mono text-xs uppercase text-gold font-semibold tracking-wider">
                  {t("home.portfolioSubtitle")}
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
                {t("home.portfolioTitle")}
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-navy text-white shadow-sm"
                    : "text-slateText hover:text-navy"
                }`}
              >
                {t("home.allFleets")}
              </button>
              <button
                onClick={() => setActiveFilter("superyacht")}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  activeFilter === "superyacht"
                    ? "bg-navy text-white shadow-sm"
                    : "text-slateText hover:text-navy"
                }`}
              >
                {t("home.superyachts")}
              </button>
              <button
                onClick={() => setActiveFilter("expedition")}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  activeFilter === "expedition"
                    ? "bg-navy text-white shadow-sm"
                    : "text-slateText hover:text-navy"
                }`}
              >
                {t("home.expedition")}
              </button>
              <button
                onClick={() => setActiveFilter("commercial")}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                  activeFilter === "commercial"
                    ? "bg-navy text-white shadow-sm"
                    : "text-slateText hover:text-navy"
                }`}
              >
                {t("home.commercial")}
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded font-mono text-xs font-semibold">
                    {project.year}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-slateText uppercase">
                      Hull No. {project.hullNo}
                    </span>
                    <span className="font-jakarta text-xs text-gold font-semibold">
                      {project.classSociety}
                    </span>
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-navy mb-2">
                    {project.title}
                  </h4>
                  <p className="font-jakarta text-xs sm:text-sm text-slateText mb-6">
                    {project.shortDesc[language === "tr" ? "tr" : "en"]}
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 font-mono text-xs text-slateText mt-auto">
                    <div>
                      <span className="block text-navy font-bold">
                        {project.loa}
                      </span>
                      <span>LOA</span>
                    </div>
                    <div>
                      <span className="block text-navy font-bold">
                        {project.gt}
                      </span>
                      <span>GT</span>
                    </div>
                    <div>
                      <span className="block text-navy font-bold">
                        {project.speed}
                      </span>
                      <span>Speed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors"
                    >
                      <span>{t("common.viewDetails")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-navy border border-gray-300 hover:border-gold font-jakarta text-sm font-semibold transition-all shadow-sm"
            >
              <span>{t("home.viewAllCommissions")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: SHIPYARD & ENGINEERING EXCELLENCE */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-offwhite border border-gray-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAp3nwodTCC8mXy5LJ7kTzA0ysvzPZnGq2xnN-6MTNS-JeIa5Nzg_C4oGCXSCQBJeRy_A2o0vOfNz8k_KbD6uRHnD2HHHf6Fbs_EX5c0N-rdYxoO1IHUgO4m4q_XuxFD2EcA7O-ib4RnxaEi8gQoCzwOm500VNeaOy5iRSTW5ePPHDGFATV0vk6W61rENPIhm5y52toGKT3FM1lpEoGMtnkotOpH5vQpN9_mgKGiLgSdirMkktYWPL"
                alt="Naval architecture design engineering studio"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center"
              />
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200 max-w-xs flex-col gap-1">
              <div className="flex items-center gap-2 text-gold font-mono text-xs font-semibold">
                <Compass className="w-4 h-4" />
                <span>CNC PRECISION TOLERANCE</span>
              </div>
              <span className="font-playfair text-xl font-bold text-navy">
                ± 0.5 mm Lofting
              </span>
              <p className="font-jakarta text-xs text-slateText">
                Sub-millimeter automated laser and plasma steel plate preparation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="font-mono text-xs uppercase text-gold font-semibold tracking-wider">
                {t("home.infraSubtitle")}
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold mb-6">
              {t("home.infraTitle")}
            </h2>
            <p className="font-jakarta text-base text-slateText leading-relaxed mb-8">
              {t("home.infraDesc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-offwhite flex items-center justify-center shrink-0 text-gold border border-gray-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-playfair text-base font-bold text-navy">
                    {t("home.gantryTitle")}
                  </h4>
                  <p className="font-jakarta text-xs text-slateText mt-1">
                    {t("home.gantryDesc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-offwhite flex items-center justify-center shrink-0 text-gold border border-gray-200">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-playfair text-base font-bold text-navy">
                    {t("home.drydockTitle")}
                  </h4>
                  <p className="font-jakarta text-xs text-slateText mt-1">
                    {t("home.drydockDesc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-offwhite flex items-center justify-center shrink-0 text-gold border border-gray-200">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-playfair text-base font-bold text-navy">
                    {t("home.cfdTitle")}
                  </h4>
                  <p className="font-jakarta text-xs text-slateText mt-1">
                    {t("home.cfdDesc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-offwhite flex items-center justify-center shrink-0 text-gold border border-gray-200">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-playfair text-base font-bold text-navy">
                    {t("home.classTitle")}
                  </h4>
                  <p className="font-jakarta text-xs text-slateText mt-1">
                    {t("home.classDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/shipyard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy text-white font-jakarta text-sm font-semibold hover:bg-navy-dark transition-all"
              >
                <span>Explore Shipyard Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONSULTATION & QUOTE CTA BANNER */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-offwhite rounded-3xl p-8 sm:p-12 border border-gold/30 relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-3xl flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-5 h-5 text-gold" />
                <span className="font-mono text-xs uppercase text-gold font-bold tracking-widest">
                  {t("home.ctaEyebrow")}
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold mb-4">
                {t("home.ctaTitle")}
              </h2>
              <p className="font-jakarta text-base sm:text-lg text-slateText mb-8">
                {t("home.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-white font-jakarta text-sm font-semibold shadow-md hover:bg-gold-muted transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t("home.ctaSchedule")}</span>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white text-navy border border-gray-300 hover:border-gold font-jakarta text-sm font-semibold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{t("home.ctaDownload")}</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gray-200 font-mono text-xs text-slateText">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>{t("home.nda")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" />
                  <span>{t("home.warranty")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-gold" />
                  <span>{t("home.delivery")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
