import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsData } from "@/data/news";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return newsData.map((n) => ({
    slug: n.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = newsData.find((n) => n.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-navy min-h-screen pb-20">
      <section className="w-full bg-offwhite py-12 px-4 sm:px-6 lg:px-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-jakarta text-xs font-semibold text-slateText hover:text-navy transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shipyard Dispatches</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs text-gold uppercase font-semibold">
            <span>{article.categoryLabel.en}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {article.title.en}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-8 bg-offwhite">
          <img
            src={article.image}
            alt={article.title.en}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose prose-navy max-w-none font-jakarta text-slateText text-base leading-relaxed whitespace-pre-line mb-12">
          {article.content.en}
        </div>

        <div className="pt-6 border-t border-gray-200 flex items-center justify-between font-mono text-xs text-slateText">
          <span>Official Dispatch Reference: {article.refNo}</span>
          <span>Royal Caribbean Media Relations</span>
        </div>
      </section>
    </div>
  );
}
