import { useState } from "react";
import { BRAND_NAME, BRAND_TAGLINE, MDKLogo, tabs } from "@/components/brandbook/BrandbookShared";
import { TabConcepts, TabVariants, TabCompare, TabPalette, TabPreview } from "@/components/brandbook/BrandbookTabs1";
import { TabUsage, TabCarriers, TabCatalog, TabSeries, TabSite, TabSiteLight } from "@/components/brandbook/BrandbookTabs2";

export default function Index() {
  const [activeTab, setActiveTab] = useState("concepts");
  const [copied, setCopied] = useState<string | null>(null);
  const [paletteMode, setPaletteMode] = useState<"gold" | "plum">("plum");
  const [siteViewMode, setSiteViewMode] = useState<"desktop" | "mobile">("desktop");

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-brand-gold border-opacity-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-8 py-20">
          <p className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase mb-6 opacity-70">Brand Identity System</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-brand-cream leading-none mb-4">
            {BRAND_NAME}
          </h1>
          <p className="font-sans text-sm tracking-[0.2em] text-brand-stone uppercase">
            {BRAND_TAGLINE} · Брендбук · Палитра Б
          </p>
        </div>
      </div>

      {/* Nav */}
      <div className="sticky top-0 z-10 bg-brand-charcoal border-b border-brand-gold border-opacity-10 backdrop-blur">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 py-4 px-5 text-xs tracking-widest uppercase transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "border-brand-gold text-brand-gold"
                    : "border-transparent text-brand-stone hover:text-brand-cream"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        {activeTab === "concepts" && <TabConcepts />}
        {activeTab === "variants" && <TabVariants />}
        {activeTab === "compare"  && <TabCompare />}
        {activeTab === "palette"  && <TabPalette paletteMode={paletteMode} setPaletteMode={setPaletteMode} copied={copied} copyHex={copyHex} />}
        {activeTab === "preview"  && <TabPreview />}
        {activeTab === "usage"    && <TabUsage />}
        {activeTab === "carriers" && <TabCarriers />}
        {activeTab === "catalog"  && <TabCatalog />}
        {activeTab === "series"   && <TabSeries />}
        {activeTab === "site"     && <TabSite siteViewMode={siteViewMode} setSiteViewMode={setSiteViewMode} />}
        {activeTab === "site-light" && <TabSiteLight siteViewMode={siteViewMode} setSiteViewMode={setSiteViewMode} />}
      </div>

      {/* Footer */}
      <div className="border-t border-brand-gold border-opacity-10 py-8">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
          <p className="font-sans text-xs text-brand-stone tracking-widest uppercase">
            МДК · Международная Дверная Компания © 2024
          </p>
          <MDKLogo col="cream" size={0.28} />
        </div>
      </div>
    </div>
  );
}
