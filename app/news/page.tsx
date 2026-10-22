"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { newsData } from "@/data/news";
import { Search, ArrowRight, Calendar, FileText } from "lucide-react";

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter((article) => {
    const matchesCategory =
      activeFilter === "all" || article.category === activeFilter;
    const matchesSearch =
      article.title[language === "tr" ? "tr" : "en"]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      article.summary[language === "tr" ? "tr" : "en"]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Header */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-12 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-offwhite rounded-full">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="font-mono text-xs uppercase text-gold font-bold">
              SHIPYARD DISPATCHES & WHITEPAPERS
            </span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy">
            Naval Intelligence & Shipyard Dispatches
          </h1>
          <p className="font-jakarta text-base text-slateText max-w-2xl leading-relaxed">
            Chronicles from the slipways of Tuzla: maiden sea trials, hydrodynamics whitepapers, Lloyd's Register class milestones, and next-generation naval architecture.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {[
              { id: "all", label: "All Dispatches" },
              { id: "launch", label: "Launch Ceremonies" },
              { id: "whitepaper", label: "Engineering Whitepapers" },
              { id: "expansion", label: "Yard Expansions" },
              { id: "green", label: "Sustainability" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === cat.id
                    ? "bg-navy text-white shadow-sm font-bold"
                    : "text-slateText hover:text-navy hover:bg-offwhite"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative flex items-center shrink-0 w-full sm:w-60">
            <Search className="w-4 h-4 absolute left-3 text-slateText" />
            <input
              type="text"
              placeholder="Search dispatches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-offwhite border border-gray-200 rounded text-xs text-navy focus:outline-none focus:bg-white focus:border-navy w-full"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-56 overflow-hidden relative bg-offwhite">
                <img
                  src={art.image}
                  alt={art.title[language === "tr" ? "tr" : "en"]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-gold font-mono text-[10px] font-bold rounded shadow-sm">
                  {art.categoryLabel[language === "tr" ? "tr" : "en"]}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-navy text-white font-mono text-[10px] rounded">
                  {art.date}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-slateText uppercase">
                    Ref: {art.refNo}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-navy mt-1 group-hover:text-gold transition-colors line-clamp-2">
                    {art.title[language === "tr" ? "tr" : "en"]}
                  </h3>
                  <p className="font-jakarta text-xs text-slateText mt-2 line-clamp-3 leading-relaxed">
                    {art.summary[language === "tr" ? "tr" : "en"]}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                  <Link
                    href={`/news/${art.slug}`}
                    className="inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="font-mono text-[10px] text-slateText">
                    {art.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
