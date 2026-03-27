import { useState } from "react";
import { BRAND_NAME, BRAND_TAGLINE, MDKLogo } from "@/components/brandbook/BrandbookShared";
import { TabConcepts, TabVariants, TabCompare, TabPalette, TabPreview } from "@/components/brandbook/BrandbookTabs1";
import { TabUsage, TabCarriers, TabCatalog, TabSeries, TabSite, TabSiteLight } from "@/components/brandbook/BrandbookTabs2";

// ─── Конфигурация вкладок ─────────────────────────────────────────────────────

const brandTabs = [
  { id: "concepts", label: "Символы без букв" },
  { id: "variants", label: "Знак МДК" },
  { id: "compare",  label: "Сравнение палитр" },
  { id: "palette",  label: "Цветовая палитра" },
  { id: "preview",  label: "Превью" },
  { id: "usage",    label: "Применение" },
  { id: "carriers", label: "Носители" },
];

const productTabs = [
  { id: "catalog",    label: "Продуктовые карточки", num: "01" },
  { id: "series",     label: "Каталог серий",        num: "02" },
  { id: "site",       label: "Сайт · Тёмный",        num: "03" },
  { id: "site-light", label: "Сайт · Светлый",       num: "04" },
];

// ─── Компонент ────────────────────────────────────────────────────────────────

export default function BrandbookV3() {
  const [activeBrandTab, setActiveBrandTab]   = useState("concepts");
  const [activeProductTab, setActiveProductTab] = useState("catalog");
  const [copied, setCopied]                   = useState<string | null>(null);
  const [paletteMode, setPaletteMode]         = useState<"gold" | "plum">("plum");
  const [siteViewMode, setSiteViewMode]       = useState<"desktop" | "mobile">("desktop");

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-brand-gold border-opacity-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase mb-6 opacity-70">
                Brand Identity System · v3
              </p>
              <h1 className="font-display text-6xl md:text-8xl font-light text-brand-cream leading-none mb-4">
                {BRAND_NAME}
              </h1>
              <p className="font-sans text-sm tracking-[0.2em] text-brand-stone uppercase">
                {BRAND_TAGLINE} · Брендбук · Палитра Б
              </p>
            </div>
            {/* Версии */}
            <div className="flex flex-col gap-2 self-end">
              {[
                { label: "Версия 1", href: "/brandbook",  active: false },
                { label: "Версия 2", href: "/brandbook2", active: false },
                { label: "Версия 3", href: "/brandbook3", active: true  },
              ].map(({ label, href, active }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    background: active ? "rgba(201,160,176,0.15)" : "transparent",
                    color: active ? "#C9A0B0" : "#6B4E5A",
                    border: active ? "1px solid rgba(201,160,176,0.35)" : "1px solid rgba(201,160,176,0.1)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Горизонтальные вкладки (Бренд) ───────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-brand-charcoal border-b border-brand-gold border-opacity-10 backdrop-blur">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-3">
            <span
              className="flex-shrink-0 text-xs tracking-widest uppercase opacity-40 pr-4 border-r border-brand-gold border-opacity-20"
              style={{ fontFamily: "Montserrat", color: "#C9A0B0" }}
            >
              Бренд
            </span>
            <div className="flex overflow-x-auto">
              {brandTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBrandTab(tab.id)}
                  className={`flex-shrink-0 py-4 px-4 text-xs tracking-widest uppercase transition-all duration-200 border-b-2 ${
                    activeBrandTab === tab.id
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
      </div>

      {/* ── Основной layout: контент бренда + вертикальная панель ─────────── */}
      <div className="max-w-6xl mx-auto px-8 flex gap-0">

        {/* ── Контент горизонтальных вкладок ────────────────────────────── */}
        <div className="flex-1 py-16 min-w-0">
          {activeBrandTab === "concepts" && <TabConcepts />}
          {activeBrandTab === "variants" && <TabVariants />}
          {activeBrandTab === "compare"  && <TabCompare />}
          {activeBrandTab === "palette"  && (
            <TabPalette
              paletteMode={paletteMode}
              setPaletteMode={setPaletteMode}
              copied={copied}
              copyHex={copyHex}
            />
          )}
          {activeBrandTab === "preview"  && <TabPreview />}
          {activeBrandTab === "usage"    && <TabUsage />}
          {activeBrandTab === "carriers" && <TabCarriers />}
        </div>

        {/* ── Вертикальные вкладки Продукция + контент ─────────────────── */}
        <div
          className="flex-shrink-0 flex"
          style={{
            borderLeft: "1px solid rgba(201,160,176,0.1)",
            marginLeft: 40,
          }}
        >
          {/* Боковая панель вкладок */}
          <div
            className="sticky top-[53px] self-start flex flex-col"
            style={{
              width: 48,
              height: "calc(100vh - 53px)",
              borderRight: "1px solid rgba(201,160,176,0.08)",
              background: "rgba(59,31,43,0.25)",
            }}
          >
            {/* Лейбл секции */}
            <div
              className="flex items-center justify-center py-5"
              style={{ borderBottom: "1px solid rgba(201,160,176,0.08)" }}
            >
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 8,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(201,160,176,0.4)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Продукция
              </span>
            </div>

            {/* Кнопки вертикальных вкладок */}
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProductTab(
                  activeProductTab === tab.id ? "" : tab.id
                )}
                title={tab.label}
                className="flex flex-col items-center justify-center gap-2 transition-all duration-200"
                style={{
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(201,160,176,0.06)",
                  borderLeft: activeProductTab === tab.id
                    ? "2px solid #C9A0B0"
                    : "2px solid transparent",
                  background: activeProductTab === tab.id
                    ? "rgba(201,160,176,0.06)"
                    : "transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 8,
                    letterSpacing: "0.15em",
                    color: activeProductTab === tab.id ? "#C9A0B0" : "rgba(201,160,176,0.35)",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    textTransform: "uppercase",
                  }}
                >
                  {tab.num}
                </span>
              </button>
            ))}
          </div>

          {/* Панель контента вертикальных вкладок */}
          {activeProductTab !== "" && (
            <div
              className="overflow-y-auto"
              style={{
                width: 520,
                height: "calc(100vh - 53px)",
                position: "sticky",
                top: 53,
                background: "rgba(43,21,32,0.5)",
                borderRight: "1px solid rgba(201,160,176,0.08)",
              }}
            >
              {/* Заголовок панели */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: "1px solid rgba(201,160,176,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "Montserrat", fontSize: 9, color: "rgba(201,160,176,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    {productTabs.find(t => t.id === activeProductTab)?.num}
                  </span>
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, color: "#F0DFE5", letterSpacing: "0.05em" }}>
                    {productTabs.find(t => t.id === activeProductTab)?.label}
                  </span>
                </div>
                <button
                  onClick={() => setActiveProductTab("")}
                  className="flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(201,160,176,0.08)", border: "1px solid rgba(201,160,176,0.15)" }}
                >
                  <span style={{ fontFamily: "Montserrat", fontSize: 12, color: "#A07888", lineHeight: 1 }}>✕</span>
                </button>
              </div>

              {/* Контент */}
              <div className="px-6 py-8">
                {activeProductTab === "catalog"    && <TabCatalog />}
                {activeProductTab === "series"     && <TabSeries />}
                {activeProductTab === "site"       && <TabSite siteViewMode={siteViewMode} setSiteViewMode={setSiteViewMode} />}
                {activeProductTab === "site-light" && <TabSiteLight siteViewMode={siteViewMode} setSiteViewMode={setSiteViewMode} />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <div className="border-t border-brand-gold border-opacity-10 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <p className="font-sans text-xs text-brand-stone tracking-widest uppercase">
            МДК · Международная Дверная Компания © 2024
          </p>
          <MDKLogo col="cream" size={0.28} />
        </div>
      </div>

    </div>
  );
}
