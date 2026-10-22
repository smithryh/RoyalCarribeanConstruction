"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { shipyardFacilities } from "@/data/shipyard";
import {
  Building2,
  Anchor,
  Compass,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Download,
  FileText
} from "lucide-react";

export default function ShipyardPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("drydocks");

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Top Banner */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span>Tuzla Maritime Gateway • Istanbul, Türkiye</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy leading-tight">
                World-Class Naval Infrastructure & Precision Drydock Facilities
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-jakarta text-sm sm:text-base text-slateText">
                Spanning 185,000 square metres of pristine Tuzla waterfront, our compound seamlessly converges historic European naval craftsmanship with Mediterranean high-displacement civil and superyacht shipbuilding power.
              </p>
            </div>
          </div>

          {/* Panoramic Image Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-offwhite shadow-md border border-gray-200 mt-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcWWV8IhUW8UnSo8UBp4J9bDoZoOU6PlrK1gIsuMfwd62kQ8atqoESLY06PwCl466nTiiMvVYPwqJLIIcW3eW-hSg840eZSiywHDpbGgImkGO3Qglip-G4jMS7ctBG1J724d-OWT1rNUwlTd_1L2UMep4yqMQ-6kU2Q9IVFbOfK4FjZNYglXy536p1JfTmeWvzyMklgHgykyU3KZOC2_43DwBRde9kCybSyLmjTleOHnDxRLXGEJ9P"
              alt="Tuzla Shipyard Compound"
              className="w-full h-80 sm:h-[420px] object-cover object-center"
            />
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2">
            <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
              <span className="font-mono text-xs text-slateText uppercase">Total Yard Area</span>
              <div className="font-playfair text-2xl font-bold text-navy mt-1">185,000 m²</div>
            </div>
            <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
              <span className="font-mono text-xs text-slateText uppercase">Covered Halls</span>
              <div className="font-playfair text-2xl font-bold text-navy mt-1">65,000 m²</div>
            </div>
            <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
              <span className="font-mono text-xs text-slateText uppercase">Max LOA Handling</span>
              <div className="font-playfair text-2xl font-bold text-navy mt-1">120 Metres</div>
            </div>
            <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
              <span className="font-mono text-xs text-slateText uppercase">Gantry Capacity</span>
              <div className="font-playfair text-2xl font-bold text-navy mt-1">400 Tons</div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-offwhite rounded-lg p-5 border border-gray-200">
              <span className="font-mono text-xs text-slateText uppercase">Quayside Berth</span>
              <div className="font-playfair text-2xl font-bold text-navy mt-1">480 Metres</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-gold uppercase font-semibold block mb-1">
              Engineering Complexes
            </span>
            <h2 className="font-playfair text-3xl font-bold text-navy">
              Integrated Yard Infrastructure
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {shipyardFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between gap-6"
            >
              <div>
                <div className="h-48 rounded-lg overflow-hidden mb-4 border border-gray-100">
                  <img src={fac.image} alt={fac.title.en} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">
                  {fac.title[language === "tr" ? "tr" : "en"]}
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed mb-4">
                  {fac.desc[language === "tr" ? "tr" : "en"]}
                </p>
                <div className="flex flex-col gap-2 bg-offwhite p-3 rounded-lg font-mono text-xs text-navy">
                  {fac.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex justify-between">
                      <span className="text-slateText">{sp.label[language === "tr" ? "tr" : "en"]}:</span>
                      <span className="font-bold">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drydock Specs Table */}
      <section className="w-full bg-offwhite py-16 border-y border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-gold uppercase font-semibold">Naval Engineering Dossier</span>
              <h2 className="font-playfair text-3xl font-bold text-navy">Drydock Specifications Matrix</h2>
            </div>
          </div>

          <div className="w-full overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-offwhite text-navy font-mono text-xs border-b border-gray-200">
                  <th className="p-4 uppercase">Technical Parameter</th>
                  <th className="p-4 uppercase text-gold">Drydock 1 (Graving)</th>
                  <th className="p-4 uppercase">Drydock 2 (Panamax)</th>
                  <th className="p-4 uppercase">Drydock 3 (Refit Shed)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-jakarta text-xs sm:text-sm text-navy">
                <tr>
                  <td className="p-4 font-bold">Length Overall (LOA)</td>
                  <td className="p-4 font-mono font-bold">120.00 Metres</td>
                  <td className="p-4 font-mono">85.00 Metres</td>
                  <td className="p-4 font-mono">60.00 Metres</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Maximum Beam</td>
                  <td className="p-4 font-mono font-bold">26.00 Metres</td>
                  <td className="p-4 font-mono">18.00 Metres</td>
                  <td className="p-4 font-mono">14.00 Metres</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Lifting Capacity</td>
                  <td className="p-4 font-mono font-bold text-gold">6,000 Metric Tonnes</td>
                  <td className="p-4 font-mono">3,200 Metric Tonnes</td>
                  <td className="p-4 font-mono">1,500 Metric Tonnes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Crane Clearance</td>
                  <td className="p-4 font-mono font-bold">28.00m Hook Height</td>
                  <td className="p-4 font-mono">22.00m Hook Height</td>
                  <td className="p-4 font-mono">16.50m Hook Height</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Atmospheric Control</td>
                  <td className="p-4 font-mono font-bold">Heated / Humidity Managed</td>
                  <td className="p-4 font-mono">Ambient / Canopy</td>
                  <td className="p-4 font-mono">Full HEPA Cleanroom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Survey Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs text-gold uppercase font-bold">Technical Survey & Walkthrough</span>
            <h2 className="font-playfair text-3xl font-bold text-navy">Arrange a Private Shipyard Inspection</h2>
            <p className="font-jakarta text-sm text-slateText">
              Tour our covered building bays, inspect resident metallurgy labs, and discuss drydock slot availability with our Yard Operations Director under full NDA.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded bg-gold text-white font-jakarta text-sm font-semibold hover:bg-gold-muted transition-colors shrink-0"
          >
            Schedule Delegation Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
