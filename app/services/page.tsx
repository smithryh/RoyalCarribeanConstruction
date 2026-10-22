"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { servicesData } from "@/data/services";
import {
  Anchor,
  Ship,
  Zap,
  Hammer,
  Cpu,
  Wrench,
  RotateCw,
  Compass,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Anchor":
        return <Anchor className="w-6 h-6 text-gold" />;
      case "Ship":
        return <Ship className="w-6 h-6 text-gold" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-gold" />;
      case "Hammer":
        return <Hammer className="w-6 h-6 text-gold" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-gold" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-gold" />;
      case "RotateCw":
        return <RotateCw className="w-6 h-6 text-gold" />;
      default:
        return <Compass className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="w-full bg-white text-navy">
      {/* Header Banner */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span>Tuzla Naval Compound • Full Lifecycle Engineering</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-navy font-bold leading-tight max-w-4xl">
            Master Naval Architecture & Turnkey Marine Engineering
          </h1>
          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            From initial conceptual sketches and supercomputing CFD hydrodynamics to high-tensile structural steel fabrication and whisper-quiet hybrid propulsion integration, Royal Caribbean delivers bespoke engineering rigor across custom mega-yachts, specialized commercial vessels, and comprehensive refits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-6 rounded bg-offwhite border border-gray-200">
              <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">AUTONOMY</span>
              <div className="font-playfair text-3xl font-bold text-navy mb-1">100%</div>
              <p className="font-jakarta text-xs text-slateText">In-House End-to-End Engineering. Zero subcontracted structural drafting.</p>
            </div>
            <div className="p-6 rounded bg-offwhite border border-gray-200">
              <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">COMPUTING</span>
              <div className="font-playfair text-3xl font-bold text-navy mb-1">1,024</div>
              <p className="font-jakarta text-xs text-slateText">Core Dedicated HPC Cluster executing multi-phase CFD runs.</p>
            </div>
            <div className="p-6 rounded bg-offwhite border border-gray-200">
              <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">CAPACITY</span>
              <div className="font-playfair text-3xl font-bold text-navy mb-1">120m / 6kt</div>
              <p className="font-jakarta text-xs text-slateText">Slipway and drydock capacity up to 120m LOA / 6,000 tonnes displacement.</p>
            </div>
            <div className="p-6 rounded bg-offwhite border border-gray-200">
              <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">APPROVAL</span>
              <div className="font-playfair text-3xl font-bold text-navy mb-1">99.4%</div>
              <p className="font-jakarta text-xs text-slateText">First-pass plan approval rating across Lloyd's Register, DNV, and RINA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-offwhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase text-gold font-bold tracking-widest block mb-2">
              Core Capabilities Matrix
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
              Our 8 Shipbuilding & Engineering Services
            </h2>
            <p className="font-jakarta text-sm sm:text-base text-slateText mt-3">
              Fully integrated naval engineering, fabrication, and refit protocols governed by internationally recognized classification societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title[language === "tr" ? "tr" : "en"]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-navy font-mono text-xs font-semibold">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-offwhite border border-gray-200">
                        {getIcon(service.iconName)}
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-navy group-hover:text-gold transition-colors">
                        {service.title[language === "tr" ? "tr" : "en"]}
                      </h3>
                    </div>

                    <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed mb-4">
                      {service.shortDesc[language === "tr" ? "tr" : "en"]}
                    </p>

                    <ul className="flex flex-col gap-2 font-jakarta text-xs text-slateText mb-6">
                      {service.features[language === "tr" ? "tr" : "en"].slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                    >
                      <span>{t("common.learnMore")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-offwhite p-8 sm:p-12 border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-mono text-xs text-gold uppercase font-semibold">
              Confidential Engineering Discussions
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy">
              Initiate a Feasibility Study
            </h3>
            <p className="font-jakarta text-xs sm:text-sm text-slateText">
              Our Chief Naval Architect and technical directors are available for consultations regarding new builds, complex refits, or computational hull hydrodynamics.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded bg-navy text-white font-jakarta text-xs sm:text-sm font-semibold hover:bg-navy-dark transition-all text-center shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
