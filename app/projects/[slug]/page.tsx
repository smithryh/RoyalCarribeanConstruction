import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      {/* Top Banner */}
      <section className="w-full bg-offwhite py-12 px-4 sm:px-6 lg:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-jakarta text-xs font-semibold text-slateText hover:text-navy transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Fleet Portfolio</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-gold uppercase font-semibold">
            <span>Hull No. {project.hullNo}</span>
            <span>•</span>
            <span>{project.classSociety}</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-navy">
            {project.title}
          </h1>

          <p className="font-jakarta text-base sm:text-lg text-slateText max-w-3xl leading-relaxed">
            {project.shortDesc.en}
          </p>
        </div>
      </section>

      {/* Detail Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Visuals & Story */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-offwhite">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                Vessel Dossier & Construction Narrative
              </h2>
              <p className="font-jakarta text-base text-slateText leading-relaxed mb-6">
                {project.fullDesc.en}
              </p>
            </div>

            {/* Image Gallery */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                Photo Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 h-56">
                    <img
                      src={img}
                      alt={`${project.title} Gallery ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Vessel Specifications */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col gap-4">
              <h3 className="font-playfair text-lg font-bold text-navy border-b border-gray-100 pb-3">
                Full Vessel Specifications
              </h3>

              <div className="flex flex-col gap-3 font-jakarta text-xs">
                {project.specs.map((spec, sIdx) => (
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
                  href={`/contact?vessel=${encodeURIComponent(project.title)}`}
                  className="w-full py-3 rounded-lg bg-gold text-white font-jakarta text-sm font-semibold hover:bg-gold-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Inquire About Sister Hull / Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-offwhite rounded-xl p-6 border border-gray-200 flex flex-col gap-3 font-mono text-xs text-slateText">
              <div className="flex items-center gap-2 text-navy font-semibold">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Classification Audit</span>
              </div>
              <p className="font-jakarta text-xs text-slateText leading-relaxed">
                Full Lloyd's Register / RINA / DNV classification certificate and 3D parametric CAD twin dossier included upon delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
