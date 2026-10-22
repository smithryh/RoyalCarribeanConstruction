"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { processStages } from "@/data/shipyard";
import { CheckCircle, ShieldCheck, ArrowRight, Video, FileText } from "lucide-react";

export default function ConstructionProcessPage() {
  const { language, t } = useLanguage();

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Header */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span>SEQUENTIAL METHODOLOGY</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy leading-tight">
            The 9-Stage Naval Construction Process
          </h1>

          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            Trace the exact journey of our naval commissions from initial virtual tank computational hydrodynamics to owner registry flag hoisting.
          </p>
        </div>
      </section>

      {/* 9-Stage Timeline Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processStages.map((stg) => (
            <div
              key={stg.num}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gold transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-navy text-white font-mono text-xs font-bold flex items-center justify-center">
                    {stg.num}
                  </span>
                  <span className="font-mono text-xs text-gold font-semibold uppercase">STAGE</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">
                  {stg.title[language === "tr" ? "tr" : "en"]}
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
                  {stg.desc[language === "tr" ? "tr" : "en"]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 font-mono text-[11px] text-slateText">
                <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Class Signoff Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Telemetry Preview */}
      <section className="w-full bg-offwhite py-16 border-y border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-lg flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <span className="font-mono text-xs text-gold font-bold uppercase">REAL-TIME YARD GOVERNANCE</span>
              <h2 className="font-playfair text-2xl font-bold text-navy mt-1">Owner's Portal Telemetry Preview</h2>
            </div>
            <span className="font-mono text-xs text-slateText">SSL 256-Bit Encrypted</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-navy h-64 flex items-center justify-center text-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoOTaB3CxKyynkie2AVCG4mCds6tzqdOOR_a8fWvi9XkmDPnmrcZqptssOa67Y2-61WwSbINJWzsbvbVFtEnebz1MgxWYB3BGMAfy_MBvVLh5GjCJZf7nTCOIfr7uUlBgFfqFlnRTGbfAOTvPWJSf9d55b_euMMFAOJXqrOhH0DMB7hqJm5npDIMvO7g4OsI51cglgTd9SkwM7baiU3nWd-bhx2U0Re8nhXaGaawvGPJqb7vIGiKvI"
                alt="4K Drydock Live Stream"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-navy/80 px-3 py-1 rounded text-white font-mono text-xs flex items-center gap-2">
                <Video className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>LIVE 4K DRYDOCK CAM 01</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-playfair text-xl font-bold text-navy">
                Weekly Milestone Burndown & 3D Scanning
              </h3>
              <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
                Clients receive full structural transparency. Review daily weld inspection certificates, metallurgical heat numbers, and 3D laser deviation heatmaps directly on mobile or tablet.
              </p>

              <div className="flex flex-col gap-2">
                <div className="p-3 bg-offwhite rounded border border-gray-200 flex items-center justify-between text-xs font-jakarta">
                  <span className="font-semibold text-navy">Weekly Yard Dispatch #38.pdf</span>
                  <span className="font-mono text-gold font-bold">DOWNLOAD</span>
                </div>
                <div className="p-3 bg-offwhite rounded border border-gray-200 flex items-center justify-between text-xs font-jakarta">
                  <span className="font-semibold text-navy">Laser Alignment Deviation Heatmap</span>
                  <span className="font-mono text-gold font-bold">VIEW 3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
