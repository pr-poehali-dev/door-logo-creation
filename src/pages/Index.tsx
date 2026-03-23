import { useState } from "react";

const BRAND_NAME = "PORTA";
const BRAND_TAGLINE = "Межкомнатные двери";

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

const tabs = [
  { id: "variants", label: "Варианты логотипа" },
  { id: "palette", label: "Цветовая палитра" },
  { id: "preview", label: "Превью" },
  { id: "usage", label: "Примеры применения" },
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
                    <p className="font-sans text-xs text-brand-stone tracking-[0.25em] uppercase mt-6">
                      Качество. Стиль. Надёжность.
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
                      className="font-sans text-xs tracking-[0.25em] uppercase mt-6"
                      style={{ color: "#8A8070" }}
                    >
                      Качество. Стиль. Надёжность.
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
                Минимальный отступ от края логотипа — высота буквы «P» в названии бренда
              </p>
            </div>
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
