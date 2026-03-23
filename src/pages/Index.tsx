import { useState } from "react";
import SeriesCatalog from "@/components/SeriesCatalog";

const BRAND_NAME = "IDC";
const BRAND_TAGLINE = "Международная дверная компания";
const BRAND_SLOGAN = "Лучшим людям — лучшие двери";
const BRAND_PRODUCT = "Двери в эмалевом покрытии с накладным багетом";

const IMG_MOCKUP = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/b8a6700f-251f-4c2f-abc9-9a3ffdc52cf0.jpg";
const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg";

const colors = [
  { name: "Антрацит", hex: "#0F0E0C", label: "Основной" },
  { name: "Золото", hex: "#C8A96E", label: "Акцент" },
  { name: "Кремовый", hex: "#F5EFE0", label: "Фон" },
  { name: "Камень", hex: "#8A8070", label: "Нейтральный" },
  { name: "Тёплый белый", hex: "#FAF7F2", label: "Светлый" },
  { name: "Тёмное золото", hex: "#9A7040", label: "Тёмный акцент" },
];

const LogoMark = ({ dark = false, size = 1 }: { dark?: boolean; size?: number }) => {
  const s = (v: number) => v * size;
  const fill = dark ? "#0F0E0C" : "#F5EFE0";
  const gold = "#C8A96E";
  return (
    <svg width={s(80)} height={s(96)} viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x={s(4)} y={s(2)} width={s(72)} height={s(92)} rx={s(2)} stroke={gold} strokeWidth={s(2)} fill="none" />
      <rect x={s(10)} y={s(8)} width={s(60)} height={s(80)} rx={s(1)} stroke={gold} strokeWidth={s(1)} strokeDasharray={`${s(4)} ${s(2)}`} fill="none" opacity={0.4} />
      <circle cx={s(64)} cy={s(48)} r={s(4)} fill={gold} />
      <line x1={s(18)} y1={s(48)} x2={s(56)} y2={s(48)} stroke={gold} strokeWidth={s(1.5)} />
      <rect x={s(22)} y={s(22)} width={s(36)} height={s(20)} rx={s(1)} stroke={fill} strokeWidth={s(1)} fill="none" opacity={0.3} />
      <rect x={s(22)} y={s(54)} width={s(36)} height={s(20)} rx={s(1)} stroke={fill} strokeWidth={s(1)} fill="none" opacity={0.3} />
    </svg>
  );
};

const LogoFull = ({ variant = "dark", size = 1 }: { variant?: "dark" | "light" | "mono-dark" | "mono-light"; size?: number }) => {
  const isDark = variant === "dark" || variant === "mono-dark";
  const bg = isDark ? "#0F0E0C" : "#F5EFE0";
  const textColor = isDark ? "#F5EFE0" : "#0F0E0C";
  const gold = variant.startsWith("mono") ? textColor : "#C8A96E";
  const subtitleColor = variant.startsWith("mono") ? textColor : "#8A8070";

  return (
    <div
      style={{
        background: bg,
        padding: `${32 * size}px ${40 * size}px`,
        display: "inline-flex",
        alignItems: "center",
        gap: `${24 * size}px`,
        borderRadius: `${4 * size}px`,
      }}
    >
      <svg width={40 * size} height={48 * size} viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={4} y={2} width={72} height={92} rx={2} stroke={gold} strokeWidth={2} fill="none" />
        <rect x={10} y={8} width={60} height={80} rx={1} stroke={gold} strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4} />
        <circle cx={64} cy={48} r={4} fill={gold} />
        <line x1={18} y1={48} x2={56} y2={48} stroke={gold} strokeWidth={1.5} />
        <rect x={22} y={22} width={36} height={20} rx={1} stroke={textColor} strokeWidth={1} fill="none" opacity={0.3} />
        <rect x={22} y={54} width={36} height={20} rx={1} stroke={textColor} strokeWidth={1} fill="none" opacity={0.3} />
      </svg>
      <div>
        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            fontSize: `${36 * size}px`,
            color: textColor,
            letterSpacing: `${6 * size}px`,
            lineHeight: 1,
          }}
        >
          {BRAND_NAME}
        </div>
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: `${9 * size}px`,
            color: subtitleColor,
            letterSpacing: `${3 * size}px`,
            marginTop: `${4 * size}px`,
            textTransform: "uppercase",
          }}
        >
          {BRAND_TAGLINE}
        </div>
      </div>
    </div>
  );
};

const Section = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="mb-24">
    <div className="flex items-center gap-4 mb-10">
      <span className="font-sans text-xs font-600 tracking-[0.25em] text-brand-gold uppercase">{label}</span>
      <div className="h-px flex-1 bg-brand-gold opacity-30" />
    </div>
    {children}
  </section>
);

const IMG_DOOR = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fec91c7e-21e1-4d36-b11a-aa8af0b97337.jpg";

const products = [
  { name: "Классик Эмаль", series: "Premium Line", color: "RAL 9003 Белый", finish: "Эмаль глянец", bagette: "Накладной багет «Ампир»", price: "от 32 500 ₽" },
  { name: "Модерн Эмаль", series: "Premium Line", color: "RAL 7044 Серый шёлк", finish: "Эмаль матовая", bagette: "Накладной багет «Модерн»", price: "от 28 900 ₽" },
  { name: "Арт Эмаль", series: "Exclusive", color: "RAL 1013 Жемчужно-белый", finish: "Эмаль сатин", bagette: "Накладной багет «Флоренция»", price: "от 41 000 ₽" },
];

const tabs = [
  { id: "variants", label: "Варианты логотипа" },
  { id: "palette", label: "Цветовая палитра" },
  { id: "preview", label: "Превью" },
  { id: "usage", label: "Примеры применения" },
  { id: "catalog", label: "Продуктовые карточки" },
  { id: "series", label: "Каталог серий" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("variants");
  const [copied, setCopied] = useState<string | null>(null);

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
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #C8A96E 40px, #C8A96E 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C8A96E 40px, #C8A96E 41px)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-8 py-20">
          <p className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase mb-6 opacity-70">Brand Identity System</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-brand-cream leading-none mb-4">
            {BRAND_NAME}
          </h1>
          <p className="font-sans text-sm tracking-[0.2em] text-brand-stone uppercase">
            {BRAND_TAGLINE} · Логотип-гайдбук
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

        {/* VARIANTS */}
        {activeTab === "variants" && (
          <Section id="variants" label="01 · Варианты логотипа">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main dark */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-charcoal flex items-center justify-center p-10">
                  <LogoFull variant="dark" size={1} />
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Основной · Тёмный фон</p>
                </div>
              </div>

              {/* Main light */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-cream flex items-center justify-center p-10">
                  <LogoFull variant="light" size={1} />
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10 bg-brand-charcoal">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Основной · Светлый фон</p>
                </div>
              </div>

              {/* Mono dark */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-charcoal flex items-center justify-center p-10">
                  <LogoFull variant="mono-dark" size={1} />
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Монохром · Тёмный</p>
                </div>
              </div>

              {/* Compact / icon only */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-dark flex items-center justify-center gap-8 p-10">
                  <LogoMark size={1} />
                  <div
                    style={{ background: "#F5EFE0", padding: "16px 20px", borderRadius: 4 }}
                  >
                    <LogoMark dark size={0.7} />
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Компактный · Иконка</p>
                </div>
              </div>
            </div>

            {/* Typography showcase */}
            <div className="mt-8 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-6">Типографика логотипа</p>
              <div className="flex flex-col md:flex-row md:items-end gap-8">
                <div>
                  <p className="text-xs text-brand-stone mb-2">Основное название</p>
                  <p className="font-display text-5xl text-brand-cream font-semibold tracking-[0.15em]">{BRAND_NAME}</p>
                  <p className="text-xs text-brand-stone mt-1">Cormorant Garamond SemiBold · 600</p>
                </div>
                <div>
                  <p className="text-xs text-brand-stone mb-2">Подпись</p>
                  <p className="font-sans text-sm text-brand-stone-light tracking-[0.3em] uppercase">{BRAND_TAGLINE}</p>
                  <p className="text-xs text-brand-stone mt-1">Montserrat Light · 300</p>
                </div>
                <div>
                  <p className="text-xs text-brand-stone mb-2">Слоган</p>
                  <p className="font-display text-xl text-brand-gold italic">{BRAND_SLOGAN}</p>
                  <p className="text-xs text-brand-stone mt-1">Cormorant Garamond · Italic</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-gold border-opacity-20">
                <p className="text-xs text-brand-stone mb-2">Специализация</p>
                <p className="font-sans text-xs text-brand-stone-light tracking-[0.15em] uppercase">{BRAND_PRODUCT}</p>
              </div>
            </div>
          </Section>
        )}

        {/* PALETTE */}
        {activeTab === "palette" && (
          <Section id="palette" label="02 · Цветовая палитра">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  className="group rounded-lg overflow-hidden border border-brand-gold border-opacity-20 hover:border-opacity-60 transition-all duration-200"
                >
                  <div
                    className="h-28 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: c.hex }}
                  />
                  <div className="p-4 bg-brand-charcoal text-left">
                    <p className="text-brand-cream text-sm font-medium">{c.name}</p>
                    <p className="text-brand-stone text-xs mt-0.5 uppercase tracking-wider">{c.label}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-brand-gold text-xs font-mono">{c.hex}</p>
                      <span className="text-xs text-brand-stone opacity-0 group-hover:opacity-100 transition-opacity">
                        {copied === c.hex ? "Скопировано!" : "Скопировать"}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-5">Градиентная палитра</p>
              <div
                className="h-16 rounded-md"
                style={{ background: "linear-gradient(135deg, #0F0E0C 0%, #1A1915 30%, #9A7040 60%, #C8A96E 80%, #E8C98A 100%)" }}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-brand-stone">Тёмный фон</span>
                <span className="text-xs text-brand-gold">Золотой акцент</span>
              </div>
            </div>
          </Section>
        )}

        {/* PREVIEW */}
        {activeTab === "preview" && (
          <Section id="preview" label="03 · Превью">
            <div className="space-y-6">
              {/* Large hero preview */}
              <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20 relative">
                <div
                  className="h-72 flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, #0F0E0C 0%, #1A1915 50%, #0F0E0C 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 50%, #C8A96E 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <LogoFull variant="dark" size={1.4} />
                    <p className="font-display text-lg text-brand-gold italic mt-5 tracking-wide">
                      {BRAND_SLOGAN}
                    </p>
                    <p className="font-sans text-xs text-brand-stone tracking-[0.2em] uppercase mt-2">
                      {BRAND_PRODUCT}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Превью на тёмном фоне</p>
                </div>
              </div>

              {/* Light version */}
              <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20">
                <div
                  className="h-64 flex items-center justify-center"
                  style={{ background: "#F5EFE0" }}
                >
                  <div className="text-center">
                    <LogoFull variant="light" size={1.2} />
                    <p
                      className="font-display text-base italic mt-5 tracking-wide"
                      style={{ color: "#9A7040" }}
                    >
                      {BRAND_SLOGAN}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Превью на светлом фоне</p>
                </div>
              </div>

              {/* Size scale */}
              <div className="rounded-xl border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
                <p className="text-xs text-brand-stone tracking-widest uppercase mb-6">Масштабирование</p>
                <div className="flex items-end gap-10 flex-wrap">
                  {[0.5, 0.75, 1, 1.3].map((scale) => (
                    <div key={scale} className="text-center">
                      <LogoMark size={scale} />
                      <p className="text-xs text-brand-stone mt-2">{Math.round(scale * 80)}px</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* USAGE */}
        {activeTab === "usage" && (
          <Section id="usage" label="04 · Примеры применения">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business card */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-charcoal p-8 flex items-center justify-center">
                  <div
                    className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl"
                    style={{ background: "#0F0E0C", border: "1px solid rgba(200,169,110,0.3)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C8A96E, transparent 50%)" }}
                    />
                    <div className="absolute top-5 left-5">
                      <LogoFull variant="dark" size={0.5} />
                    </div>
                    <div className="absolute bottom-4 right-5 text-right">
                      <p className="text-brand-gold text-xs font-mono">+7 (800) 000-00-00</p>
                      <p className="text-brand-stone text-xs mt-0.5">info@porta.ru</p>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Визитная карточка</p>
                </div>
              </div>

              {/* Sign */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-dark p-8 flex items-center justify-center">
                  <div
                    className="rounded-sm flex flex-col items-center justify-center px-12 py-6"
                    style={{ background: "#1A1915", border: "2px solid rgba(200,169,110,0.5)", minWidth: 200 }}
                  >
                    <LogoMark size={0.8} />
                    <div className="mt-3 text-center">
                      <p className="font-display text-2xl text-brand-cream tracking-[0.2em]">{BRAND_NAME}</p>
                      <p className="font-sans text-xs text-brand-stone tracking-[0.2em] uppercase mt-1">{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Вывеска / Витрина</p>
                </div>
              </div>

              {/* Stamp */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="bg-brand-cream p-8 flex items-center justify-center">
                  <div
                    className="w-36 h-36 rounded-full flex flex-col items-center justify-center"
                    style={{ border: "2px solid #0F0E0C" }}
                  >
                    <LogoMark dark size={0.5} />
                    <p
                      className="font-sans text-xs tracking-[0.2em] uppercase mt-1"
                      style={{ color: "#0F0E0C" }}
                    >
                      {BRAND_NAME}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Печать / Штамп</p>
                </div>
              </div>

              {/* Showroom mock */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={IMG_MOCKUP}
                    alt="Мокап на визитке"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-dark opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LogoFull variant="dark" size={0.8} />
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
                  <p className="text-xs text-brand-stone tracking-wider uppercase">Брендированные материалы</p>
                </div>
              </div>
            </div>

            {/* Clear zone */}
            <div className="mt-8 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-5">Охранная зона логотипа</p>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 border border-dashed border-brand-gold opacity-40 rounded"
                    style={{ margin: -20 }}
                  />
                  <LogoFull variant="dark" size={0.9} />
                </div>
              </div>
              <p className="text-xs text-brand-stone mt-8 text-center">
                Минимальный отступ от края логотипа — высота буквы «I» в названии бренда
              </p>
            </div>
          </Section>
        )}

        {/* CATALOG */}
        {activeTab === "catalog" && (
          <Section id="catalog" label="05 · Продуктовые карточки">

            {/* Hero карточка */}
            <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20 mb-6">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden bg-brand-cream min-h-72 flex items-center justify-center">
                  <img
                    src={IMG_DOOR}
                    alt="Дверь в эмалевом покрытии"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-cream opacity-30" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-dark text-xs font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-sm">
                      Premium Line
                    </span>
                  </div>
                </div>
                <div className="bg-brand-charcoal p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <LogoMark size={0.4} />
                      <div>
                        <p className="font-display text-lg text-brand-cream tracking-[0.15em]">{BRAND_NAME}</p>
                        <p className="font-sans text-xs text-brand-stone tracking-widest uppercase" style={{ fontSize: 8 }}>{BRAND_TAGLINE}</p>
                      </div>
                    </div>
                    <h3 className="font-display text-3xl text-brand-cream font-light mb-1">Классик Эмаль</h3>
                    <p className="font-sans text-xs text-brand-gold tracking-widest uppercase mb-6">Флагманская модель</p>

                    <div className="space-y-3">
                      {[
                        ["Покрытие", "Эмаль глянец, износостойкая"],
                        ["Декор", "Накладной багет «Ампир»"],
                        ["Цвет", "RAL 9003 Белый / под заказ"],
                        ["Полотно", "HDF, массив сосны"],
                        ["Размеры", "2000×700, 2000×800, 2000×900"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex gap-3">
                          <span className="text-xs text-brand-stone uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">{k}</span>
                          <span className="text-xs text-brand-cream">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-gold border-opacity-20 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-brand-stone uppercase tracking-wider mb-1">Цена</p>
                      <p className="font-display text-2xl text-brand-gold">от 32 500 ₽</p>
                    </div>
                    <p className="font-display text-xs text-brand-stone italic">{BRAND_SLOGAN}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Сетка карточек */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20 bg-brand-charcoal flex flex-col"
                >
                  <div className="relative h-48 bg-brand-dark overflow-hidden flex items-center justify-center">
                    <img
                      src={IMG_DOOR}
                      alt={p.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <LogoMark size={0.3} />
                    </div>
                    <div className="absolute bottom-3 left-4">
                      <span className="font-sans text-xs text-brand-gold tracking-widest uppercase opacity-70">{p.series}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-display text-xl text-brand-cream mb-3">{p.name}</h4>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between">
                        <span className="text-xs text-brand-stone">Покрытие</span>
                        <span className="text-xs text-brand-cream">{p.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-brand-stone">Декор</span>
                        <span className="text-xs text-brand-cream text-right max-w-32">{p.bagette}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-brand-stone">Цвет</span>
                        <span className="text-xs text-brand-cream">{p.color}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-brand-gold border-opacity-20">
                      <p className="font-display text-xl text-brand-gold">{p.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Цветовые варианты */}
            <div className="mt-6 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-5">Палитра эмалевых покрытий</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "RAL 9003", label: "Белый", color: "#F4F4F4" },
                  { name: "RAL 9010", label: "Чисто-белый", color: "#FEFEFE" },
                  { name: "RAL 7044", label: "Серый шёлк", color: "#B8B4A8" },
                  { name: "RAL 1013", label: "Жемчужный", color: "#EDE8D9" },
                  { name: "RAL 7016", label: "Антрацит", color: "#383E42" },
                  { name: "RAL 3005", label: "Бордо", color: "#5E1A1E" },
                ].map((ec) => (
                  <div key={ec.name} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full border border-brand-gold border-opacity-30 flex-shrink-0"
                      style={{ background: ec.color }}
                    />
                    <div>
                      <p className="text-xs text-brand-cream">{ec.label}</p>
                      <p className="text-xs text-brand-stone font-mono">{ec.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* SERIES CATALOG */}
        {activeTab === "series" && (
          <Section id="series" label="06 · Каталог серий">
            <SeriesCatalog />
          </Section>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-brand-gold border-opacity-10 py-8">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
          <p className="font-sans text-xs text-brand-stone tracking-widest uppercase">
            {BRAND_NAME} · Brand Identity © 2024
          </p>
          <p className="font-display text-brand-gold text-lg tracking-[0.2em]">{BRAND_NAME}</p>
        </div>
      </div>
    </div>
  );
}