"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { projectsData } from "@/data/projects";
import { Search, ArrowRight, ShieldCheck, Filter } from "lucide-react";

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.hullNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.classSociety.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Page Header */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span>Flagship Portfolio & Recent Commissions</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy leading-tight">
                An Enduring Fleet of Naval Masterpieces
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-jakarta text-sm sm:text-base text-slateText">
                Explore custom mega-yachts, expedition cruisers, commercial catamarans, and specialized maritime vessels engineered at our Tuzla shipyard to Lloyd’s Register, RINA, and DNV standards.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-offwhite p-6 rounded-xl border border-gray-200 shadow-sm mt-4">
            <div>
              <span className="font-mono text-xs text-slateText uppercase">Historical Builds</span>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-navy">78</div>
              <span className="font-jakarta text-xs text-gold font-medium">Completed Vessels</span>
            </div>
            <div>
              <span className="font-mono text-xs text-slateText uppercase">Yard Envelope</span>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-navy">120m</div>
              <span className="font-jakarta text-xs text-gold font-medium">Max LOA Capability</span>
            </div>
            <div>
              <span className="font-mono text-xs text-slateText uppercase">Design Autonomy</span>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-navy">100%</div>
              <span className="font-jakarta text-xs text-gold font-medium">In-House Engineering</span>
            </div>
            <div>
              <span className="font-mono text-xs text-slateText uppercase">Yard Operations</span>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-navy">14</div>
              <span className="font-jakarta text-xs text-gold font-medium">Active Builds in Drydock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {[
              { id: "all", label: "All Vessels (78)" },
              { id: "superyacht", label: "Mega & Superyachts" },
              { id: "expedition", label: "Expedition Vessels" },
              { id: "commercial", label: "Commercial & High-Speed" },
              { id: "specialized", label: "Specialized & Research" },
              { id: "in-build", label: "In-Build / Drydock" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? "bg-navy text-white shadow-sm font-bold"
                    : "text-slateText hover:text-navy hover:bg-offwhite"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex items-center shrink-0">
            <Search className="w-4 h-4 absolute left-3 text-slateText" />
            <input
              type="text"
              placeholder="Search hull, class, LOA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-offwhite border border-gray-200 rounded text-xs text-navy focus:outline-none focus:bg-white focus:border-navy w-full sm:w-60"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative bg-offwhite">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-navy/90 text-white font-mono text-[10px] font-semibold">
                    {project.hullNo}
                  </span>
                  <span className="px-2 py-1 rounded bg-white/90 text-navy font-mono text-[10px] font-semibold">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded bg-gold/20 text-gold font-jakarta text-[10px] font-bold backdrop-blur-sm">
                    {project.classSociety}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-gold uppercase font-semibold">
                    {project.categoryLabel[language === "tr" ? "tr" : "en"]}
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-navy mt-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-jakarta text-xs text-slateText mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDesc[language === "tr" ? "tr" : "en"]}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-1 py-2 bg-offwhite rounded p-2 text-center font-mono text-[11px] text-slateText">
                  <div>
                    <span className="block text-navy font-bold">{project.loa}</span>
                    <span className="text-[9px]">LOA</span>
                  </div>
                  <div>
                    <span className="block text-navy font-bold">{project.speed}</span>
                    <span className="text-[9px]">Speed</span>
                  </div>
                  <div>
                    <span className="block text-navy font-bold">{project.gt}</span>
                    <span className="text-[9px]">GT</span>
                  </div>
                  <div>
                    <span className="block text-navy font-bold">{project.beam}</span>
                    <span className="text-[9px]">Beam</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    <span>{t("common.viewDetails")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
