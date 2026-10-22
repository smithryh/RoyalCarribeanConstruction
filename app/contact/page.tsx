"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Building,
  Anchor,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    vesselType: "Superyacht",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          vesselType: "Superyacht",
          description: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit inquiry.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("Network error or server unavailable.");
    }
  };

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Header */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span>DIRECT SHIPYARD DISPATCH & INQUIRY</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy leading-tight">
            Initiate a Direct Inquiry with Tuzla Yard Command
          </h1>

          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            Whether booking a drydock reservation, submitting a commercial fleet tender, or commissioning a custom mega-yacht, our naval architecture bureau and project directors respond promptly under full bilateral NDA.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 bg-offwhite p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
              Commissioning & Technical Inquiry Form
            </h2>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-jakarta flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Inquiry successfully transmitted! Our Yard Master's protocol officer will contact you within 4 hours.</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm font-jakarta flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-navy uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord Alistair Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-navy uppercase">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@fleetadvisory.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-navy uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+90 216 494 8000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-navy uppercase">
                    Company / Flag Entity
                  </label>
                  <input
                    type="text"
                    placeholder="Vance Maritime Holdings / BVI"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs font-semibold text-navy uppercase">
                  Vessel Type / Scope
                </label>
                <select
                  value={formData.vesselType}
                  onChange={(e) => setFormData({ ...formData, vesselType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                >
                  <option value="Superyacht">Custom Superyacht Construction (40m - 120m)</option>
                  <option value="Commercial">Commercial / Fast Passenger Catamaran</option>
                  <option value="Refit">Refit, Conversion & Drydocking</option>
                  <option value="NavalArchitecture">Naval Architecture & CFD Consulting</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs font-semibold text-navy uppercase">
                  Project Description & Target Milestones *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide LOA, beam, draft requirements, class preference, or drydock window..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy focus:outline-none focus:border-navy"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-lg bg-navy text-white font-jakarta text-sm font-semibold hover:bg-navy-dark transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 mt-2"
              >
                {status === "loading" ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 text-gold" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & WhatsApp / Map (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col gap-6">
              <h3 className="font-playfair text-xl font-bold text-navy border-b border-gray-100 pb-3">
                Yard Operations Office
              </h3>

              <div className="flex flex-col gap-4 font-jakarta text-sm text-slateText">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy block">Tuzla Naval Zone Yard</span>
                    <span>Evliya Çelebi Mah. Tersaneler Cad. 34944 Tuzla, Istanbul / Türkiye</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="font-semibold text-navy block">Phone & VHF</span>
                    <span className="font-mono text-xs">+90 (216) 494 8000 | VHF Ch. 16/72</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="font-semibold text-navy block">Email Enquiries</span>
                    <span className="font-mono text-xs">info@royalcaribbeanconstructions.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="font-semibold text-navy block">Working Hours</span>
                    <span className="font-mono text-xs">Mon - Sat: 08:00 - 18:00 (24/7 Drydock Operations)</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Contact Button */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/902164948000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-emerald-600 text-white font-jakarta text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Contact</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-offwhite rounded-2xl p-6 border border-gray-200 flex flex-col gap-3">
              <span className="font-mono text-xs text-navy font-semibold uppercase flex items-center gap-2">
                <Anchor className="w-4 h-4 text-gold" />
                Istanbul Tuzla Shipyard Location
              </span>
              <div className="w-full h-48 rounded-xl bg-gray-200 border border-gray-300 flex items-center justify-center text-slateText text-xs font-mono relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcWWV8IhUW8UnSo8UBp4J9bDoZoOU6PlrK1gIsuMfwd62kQ8atqoESLY06PwCl466nTiiMvVYPwqJLIIcW3eW-hSg840eZSiywHDpbGgImkGO3Qglip-G4jMS7ctBG1J724d-OWT1rNUwlTd_1L2UMep4yqMQ-6kU2Q9IVFbOfK4FjZNYglXy536p1JfTmeWvzyMklgHgykyU3KZOC2_43DwBRde9kCybSyLmjTleOHnDxRLXGEJ9P"
                  alt="Tuzla Map View"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center text-white font-bold p-4 text-center">
                  <span>Tuzla Tersaneler Cad. 34944 Istanbul (25 Min from SAW Airport)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
