import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { CheckCircle, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Top Banner */}
      <section className="w-full bg-offwhite py-12 px-4 sm:px-6 lg:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-jakarta text-xs font-semibold text-slateText hover:text-navy transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services Overview</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span>{service.category}</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy">
            {service.title.en}
          </h1>

          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            {service.shortDesc.en}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-offwhite">
              <img
                src={service.image}
                alt={service.title.en}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                Service Overview & Capability
              </h2>
              <p className="font-jakarta text-base text-slateText leading-relaxed mb-6">
                {service.fullDesc.en}
              </p>
            </div>

            <div className="bg-offwhite rounded-xl p-6 border border-gray-200">
              <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                Key Engineering Deliverables
              </h3>
              <ul className="grid grid-cols-1 gap-3 font-jakarta text-sm text-slateText">
                {service.features.en.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar Specs */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col gap-4">
              <h3 className="font-playfair text-lg font-bold text-navy border-b border-gray-100 pb-3">
                Technical Specifications
              </h3>

              <div className="flex flex-col gap-3 font-jakarta text-xs">
                {service.specifications.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex justify-between items-center py-2 border-b border-gray-50"
                  >
                    <span className="text-slateText font-medium">
                      {spec.label.en}
                    </span>
                    <span className="text-navy font-mono font-bold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-2">
                <Link
                  href={`/contact?vessel=${encodeURIComponent(service.title.en)}`}
                  className="w-full py-3 rounded-lg bg-gold text-white font-jakarta text-sm font-semibold hover:bg-gold-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-offwhite rounded-xl p-6 border border-gray-200 flex flex-col gap-3 font-mono text-xs text-slateText">
              <div className="flex items-center gap-2 text-navy font-semibold">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Class Survey Guarantee</span>
              </div>
              <p className="font-jakarta text-xs text-slateText leading-relaxed">
                All work complies strictly with IACS members (Lloyd's Register, DNV GL, RINA, ABS) and IMO Tier III environmental codes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
