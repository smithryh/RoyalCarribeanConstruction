"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import {
  Award,
  ShieldCheck,
  Compass,
  Users,
  Building,
  Anchor,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar
} from "lucide-react";

export default function AboutPage() {
  const { language, t } = useLanguage();

  const leadershipTeam = [
    {
      name: "Capt. Mehmet Erdem",
      title: { en: "Chief Executive Officer & Master Surveyor", tr: "İcra Kurulu Başkanı ve Kıdemli Sörveyör" },
      exp: "34 Yrs Exp",
      desc: {
        en: "Master Marine Engineer and former Lloyd's Register Principal Marine Surveyor across Northern Europe and the Aegean maritime corridor.",
        tr: "Kuzey Avrupa ve Ege denizcilik koridorunda eski Lloyd's Register Kıdemli Sörveyörü ve Yüksek Deniz Ulaştırma Mühendisi."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB546v_m24pYMtYXMCkMzSTpCRa8NZrAl4ivvsWuesz6JT3kMNs97CbwXKYyoc6WeNGN0Si4xPFJTPa3ZMN_nAj9tYUnSTGeWkIpytT-gWc6MdnNFZSwiYFmKHAeZUl1ZOdt6rHJmNnEu9JVRtsdyNIGQtfMsqThfTnU0WZC8KC4SCCqcZDqten_Uj4K2qXZf-SFmlTsmCFJoSAv1MEdqxboj1srRudWlU2UQnLcUFZzh3HDDgkZE-u"
    },
    {
      name: "Henrik Vane, MSc, FRINA",
      title: { en: "Chief Naval Architect & Hydrodynamics Lead", tr: "Baş Gemi Mimarisi ve Hidrodinamik Lideri" },
      exp: "28 Yrs Exp",
      desc: {
        en: "Pioneer in semi-displacement bulbous bow optimization and low-wake boundary layer control for transatlantic high-speed hulls.",
        tr: "Transatlantik hızlı gövdeler için yarı deplasman yumru pruva optimizasyonu ve düşük dalga izi akış kontrolünde öncü isim."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC0ysSguNUl3aFuWECrMV7BQAcqOGcHPKteS3_qPZU3R2vjsPSoIGr6DZe77Z6E63XOyWUEBBjDf3AFzKl3tICLa5L1sYa-JeQ4dIApIu7_-M9OMDCl98Bw68oasacwnKIuigeKD6vAYnI3xXoeWItQk9ePWmAtr0L5sEbQwcZ3qbqQjl_4E7kaLBqYmz3awQe2xbCqrKHA2OYCmjEE4X4xMU6oxVMglgf27YkDBcXy9XlNG-JhNf6"
    },
    {
      name: "Aylin Karaca",
      title: { en: "VP of Sustainable Propulsion & Green Systems", tr: "Sürdürülebilir Sevk Sistemleri Başkan Yardımcısı" },
      exp: "19 Yrs Exp",
      desc: {
        en: "Directing cryogenic LNG fuel vaporization safety manifolds and liquid-cooled modular battery system integration on commercial craft.",
        tr: "Kriyojenik LNG yakıt buharlaştırma güvenlik manifoldları ve sıvı soğutmalı modüler akü sistemleri entegrasyonu yöneticisi."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt4W_QkmR2rEmLQCZH6pJwuUVxLgTnO0sHJ1_mqWrzViM3U5aNd2t64w14sNKnbF7TIrV9m4Z8z0NlEazfsrEyfBEXkn89lxFKmTikhgIb_bAEmUAtUulRiFhodVCdVCQcxmmQteqvYhfj7qqNxasm8UcQ9ypZY2fv40cqb2hBK768TG-0UHn6J7eKjuZF6g8-8tCaBDmmaB6fAfpl7LMrFuVxARi93aZ5l16SQRW0a9rKQsvu1tgJ"
    },
    {
      name: "Alistair Finch",
      title: { en: "Head of Joinery & Custom Interiors Atelier", tr: "Ahşap ve Lüks İç Mekan Atölye Başkanı" },
      exp: "25 Yrs Exp",
      desc: {
        en: "Leading 40 cabinetmakers in precision veneer matching, quarter-sawn teak caulking, and acoustic honeycomb bulkheads.",
        tr: "Hassas ahşap kaplama eşleştirme, çeyrek kesim tik armuzlama ve akustik bal peteği paneller konusunda 40 marangoz ustasının lideri."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfXRIu4irK61Ti-uKoLRkqKWUrLEG3DLOCT8HvF6rDbkK4CQaDhELK2hZCouMStsmBFztnuf5yK0SBJz-ja5Mmdkiz0sars1sM8zWuu3gZMIw-nZh7SWMlfTDZ_HIA7LjKSnOr4VEfsxCwbwuBHs6h2P__gmxWEKR1cV9KRTeTQ29NqwUMNhPuhlfIg2b4LMERW6Ein19-VWh_8Oq2cmErc4XR2XYEl2bt_m5H_y-X4lalHdBaQ0MU"
    }
  ];

  return (
    <div className="w-full bg-white text-navy">
      {/* Header Banner */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-16 pt-10 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span>Tuzla Naval Free Zone Yard II • Lat 40°51'N Long 29°17'E</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-navy font-bold leading-tight max-w-4xl">
            A Century of European Shipbuilding Mastery, Engineered for Tomorrow’s Oceans
          </h1>
          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            Positioned where East Mediterranean naval lineage converges with precision German-Dutch hydrodynamic computational modeling. Royal Caribbean Shipbuilding designs and fabricates sovereign patrol vessels, custom 60m+ mega-yachts, and low-emission commercial cruise liners built to endure unyielding global waters.
          </p>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-offwhite mt-4 border border-gray-200">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUw-3wXm6c73M0Do3txKx1sNug_EebIoIs13CFV54rYmMt6dtMjJDS21sDBUpXevXtoMw-8l52thM2WPg2jiB__VRtpFovDF5v9x1rVyfYJPt6B4aOGK4r2uefQPPPvsTmTJVyVC8fRqW3_biCUF4ZHHfvSIqtsmeTrEvc61ZyY_HdqbPl9rBVgx3HkrABSk_vzyl3GF-S3mPABBVURgz_ggZzsY13STiEGxRl4HV_AzCR9VUU3B18"
              alt="Royal Caribbean Design Studio"
              className="w-full h-[400px] sm:h-[500px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Mission & Core Dogmas */}
      <section className="w-full bg-offwhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase text-gold font-bold tracking-widest block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
              Foundational Naval Dogmas
            </h2>
            <p className="font-jakarta text-sm sm:text-base text-slateText mt-3">
              Vessels engineered under the Royal Caribbean standard are conceived as multi-generational marine assets. We do not accommodate shortcut metallurgy or algorithmic approximations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-1 bg-gold mb-6 rounded-full"></div>
                <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Dogma 01</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                  Naval Rigor & Classification Absolutes
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
                  We operate permanent resident inspection bureaus on-dock for Lloyd's Register, RINA, and DNV GL. Every weld undergoes ultrasonic testing (UT), radiographic gamma testing, and magnetic particle checks prior to blast cleaning.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-offwhite p-3 rounded-lg font-mono text-xs text-navy flex items-center justify-between">
                <span>100% Weld X-Ray Audit</span>
                <span className="font-bold">MIL-STD-2035</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-1 bg-gold mb-6 rounded-full"></div>
                <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Dogma 02</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                  Sustainable Marine Future
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
                  IMO Tier III NOx compliance is our bare baseline. We pioneer hydrogen-carrier fuel cell integration, waste-heat steam turbo-generators, and zero-discharge closed-loop graywater bioreactors protecting pristine marine sanctuaries.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-offwhite p-3 rounded-lg font-mono text-xs text-navy flex items-center justify-between">
                <span>Emissions Reductions</span>
                <span className="font-bold">-72% NOx / Zero SOx</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-1 bg-gold mb-6 rounded-full"></div>
                <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase mb-2">
                  <Award className="w-4 h-4" />
                  <span>Dogma 03</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                  Confidentiality & Sovereign Trust
                </h3>
                <p className="font-jakarta text-xs sm:text-sm text-slateText leading-relaxed">
                  Every custom mega-yacht or commercial build proceeds under sovereign-level NDA frameworks. Isolated CAD vaults, biometric shipyard construction sheds, and encrypted communication logs protect owner identity and bespoke blueprints.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-offwhite p-3 rounded-lg font-mono text-xs text-navy flex items-center justify-between">
                <span>Cyber-Physical Protocol</span>
                <span className="font-bold">ISO 27001 Shield</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-gold uppercase font-bold tracking-widest block mb-2">
              Naval Command & Leadership
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
              Commanded by Industry Authorities
            </h2>
            <p className="font-jakarta text-sm sm:text-base text-slateText mt-2">
              Our senior board unites international classification society veterans, naval hydrodynamics researchers, and artisanal superyacht cabinetmakers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((exec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col group hover:shadow-md transition-all"
              >
                <div className="w-full h-72 rounded-lg overflow-hidden bg-offwhite mb-4 relative">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:filter-none transition-all duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 rounded font-mono text-xs text-navy font-semibold">
                    {exec.exp}
                  </span>
                </div>
                <span className="font-mono text-xs text-gold font-semibold uppercase">
                  {exec.title[language === "tr" ? "tr" : "en"]}
                </span>
                <h3 className="font-playfair text-lg font-bold text-navy mt-1">
                  {exec.name}
                </h3>
                <p className="font-jakarta text-xs text-slateText mt-2 leading-relaxed">
                  {exec.desc[language === "tr" ? "tr" : "en"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Delegation */}
      <section className="w-full bg-offwhite py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12 border border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-mono text-xs text-gold uppercase font-bold tracking-widest">
              Private Naval Delegation Facility
            </span>
            <h2 className="font-playfair text-3xl font-bold text-navy">
              Experience the Yard at Tuzla
            </h2>
            <p className="font-jakarta text-sm sm:text-base text-slateText leading-relaxed">
              Prospective vessel owners, family office representatives, and naval procurement attachés are cordially invited to inspect active construction blocks, review wet-basin CFD test tanks, and meet directly with the naval design bureau.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded bg-navy text-white font-jakarta text-sm font-semibold hover:bg-navy-dark transition-all text-center"
            >
              Schedule Yard Delegation Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
