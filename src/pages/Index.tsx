import { useState } from "react";
import SeriesCatalog from "@/components/SeriesCatalog";

const BRAND_NAME = "МДК";
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

// Два вертикальных полотна двери с багетной рамкой — базовый символ МДК
// Вариант A: Классик — чистые прямоугольники, минимальная рамка
const SymbolA = ({ accent = "#C8A96E", light = "#F5EFE0", bg = "transparent", size = 1 }: { accent?: string; light?: string; bg?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Левое полотно — внешний контур */}
    <rect x="4" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="1.8" fill={bg} opacity="0.9"/>
    {/* Левое полотно — внутренний багет */}
    <rect x="9" y="9" width="18" height="70" rx="0.5" stroke={accent} strokeWidth="1" fill="none" opacity="0.6"/>
    {/* Правое полотно — внешний контур */}
    <rect x="40" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="1.8" fill={bg} opacity="0.9"/>
    {/* Правое полотно — внутренний багет */}
    <rect x="45" y="9" width="18" height="70" rx="0.5" stroke={accent} strokeWidth="1" fill="none" opacity="0.6"/>
    {/* Золотая линия-порог снизу */}
    <line x1="4" y1="85" x2="68" y2="85" stroke={accent} strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

// Вариант Б: Акцент — золотые рамки, более рельефный багет, ручки
const SymbolB = ({ accent = "#C8A96E", light = "#F5EFE0", bg = "transparent", size = 1 }: { accent?: string; light?: string; bg?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Левое полотно */}
    <rect x="4" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="2" fill={bg} opacity="0.85"/>
    <rect x="8" y="8" width="20" height="72" rx="0.5" stroke={accent} strokeWidth="1.2" fill="none" opacity="0.8"/>
    {/* Ручка левая */}
    <line x1="16" y1="42" x2="16" y2="52" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
    {/* Правое полотно */}
    <rect x="40" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="2" fill={bg} opacity="0.85"/>
    <rect x="44" y="8" width="20" height="72" rx="0.5" stroke={accent} strokeWidth="1.2" fill="none" opacity="0.8"/>
    {/* Ручка правая */}
    <line x1="56" y1="42" x2="56" y2="52" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
    {/* Тонкая золотая линия между полотнами — зазор */}
    <line x1="36" y1="4" x2="36" y2="84" stroke={accent} strokeWidth="0.8" opacity="0.35"/>
    {/* Порог */}
    <line x1="4" y1="85" x2="68" y2="85" stroke={accent} strokeWidth="1.5" opacity="0.45"/>
  </svg>
);

// Вариант В: Объём — тени и глубина, имитация 3D-эффекта как на референсе
const SymbolC = ({ accent = "#C8A96E", light = "#F5EFE0", bg = "transparent", size = 1 }: { accent?: string; light?: string; bg?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Тень левого полотна */}
    <rect x="7" y="7" width="28" height="80" rx="1" fill={accent} opacity="0.12"/>
    {/* Левое полотно */}
    <rect x="4" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="1.8" fill={bg} opacity="0.9"/>
    {/* Внутренний багет — двойной */}
    <rect x="8" y="8" width="20" height="72" rx="0.5" stroke={light} strokeWidth="0.8" fill="none" opacity="0.3"/>
    <rect x="10" y="10" width="16" height="68" rx="0.5" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.5"/>
    {/* Подсветка левого края */}
    <line x1="5" y1="6" x2="5" y2="82" stroke={light} strokeWidth="1" opacity="0.5"/>
    {/* Тень правого полотна */}
    <rect x="43" y="7" width="28" height="80" rx="1" fill={accent} opacity="0.12"/>
    {/* Правое полотно */}
    <rect x="40" y="4" width="28" height="80" rx="1" stroke={light} strokeWidth="1.8" fill={bg} opacity="0.9"/>
    {/* Внутренний багет — двойной */}
    <rect x="44" y="8" width="20" height="72" rx="0.5" stroke={light} strokeWidth="0.8" fill="none" opacity="0.3"/>
    <rect x="46" y="10" width="16" height="68" rx="0.5" stroke={accent} strokeWidth="0.8" fill="none" opacity="0.5"/>
    {/* Подсветка правого края */}
    <line x1="41" y1="6" x2="41" y2="82" stroke={light} strokeWidth="1" opacity="0.5"/>
    {/* Золотой зазор */}
    <line x1="36" y1="4" x2="36" y2="84" stroke={accent} strokeWidth="1" opacity="0.4"/>
    {/* Порог */}
    <rect x="4" y="84" width="64" height="2" rx="1" fill={accent} opacity="0.4"/>
  </svg>
);

// Вариант Г: Монолит — заливка золотом + светлый фон, максимальный контраст
const SymbolD = ({ accent = "#C8A96E", light = "#F5EFE0", bg = "transparent", size = 1 }: { accent?: string; light?: string; bg?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Левое полотно — залитое */}
    <rect x="4" y="4" width="28" height="80" rx="1" fill={accent} opacity="0.15"/>
    <rect x="4" y="4" width="28" height="80" rx="1" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.7"/>
    {/* Левый багет — внутренняя рамка светлая */}
    <rect x="9" y="9" width="18" height="70" rx="0.5" stroke={light} strokeWidth="1" fill="none" opacity="0.5"/>
    {/* Горизонтальные деления — как фрезеровка */}
    <line x1="9" y1="33" x2="27" y2="33" stroke={light} strokeWidth="0.7" opacity="0.35"/>
    <line x1="9" y1="61" x2="27" y2="61" stroke={light} strokeWidth="0.7" opacity="0.35"/>
    {/* Правое полотно — залитое */}
    <rect x="40" y="4" width="28" height="80" rx="1" fill={accent} opacity="0.15"/>
    <rect x="40" y="4" width="28" height="80" rx="1" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.7"/>
    {/* Правый багет — внутренняя рамка */}
    <rect x="45" y="9" width="18" height="70" rx="0.5" stroke={light} strokeWidth="1" fill="none" opacity="0.5"/>
    <line x1="45" y1="33" x2="63" y2="33" stroke={light} strokeWidth="0.7" opacity="0.35"/>
    <line x1="45" y1="61" x2="63" y2="61" stroke={light} strokeWidth="0.7" opacity="0.35"/>
    {/* Зазор */}
    <line x1="36" y1="4" x2="36" y2="84" stroke={accent} strokeWidth="1.2" opacity="0.5"/>
    {/* Порог — акцентная полоса */}
    <rect x="4" y="84" width="64" height="2.5" rx="1" fill={accent} opacity="0.6"/>
  </svg>
);

const LogoMark = ({ dark = false, size = 1, variant = 1, accent, light, bg }: { dark?: boolean; size?: number; variant?: number; accent?: string; light?: string; bg?: string }) => {
  const a = accent ?? "#C8A96E";
  const l = light ?? (dark ? "#0F0E0C" : "#F5EFE0");
  const b = bg ?? "transparent";
  if (variant === 2) return <SymbolB accent={a} light={l} bg={b} size={size} />;
  if (variant === 3) return <SymbolC accent={a} light={l} bg={b} size={size} />;
  if (variant === 4) return <SymbolD accent={a} light={l} bg={b} size={size} />;
  return <SymbolA accent={a} light={l} bg={b} size={size} />;
};

const LogoFull = ({ variant = "dark", size = 1, monogram = 1 }: { variant?: "dark" | "light" | "mono-dark" | "mono-light"; size?: number; monogram?: number }) => {
  const isDark = variant === "dark" || variant === "mono-dark";
  const bg = isDark ? "#0F0E0C" : "#F5EFE0";
  const textColor = isDark ? "#F5EFE0" : "#0F0E0C";
  const gold = variant.startsWith("mono") ? textColor : "#C8A96E";
  const subtitleColor = variant.startsWith("mono") ? textColor : "#8A8070";

  const accentCol = variant.startsWith("mono") ? textColor : "#C8A96E";
  const lightCol = isDark ? "#F5EFE0" : "#1A1814";

  return (
    <div style={{ background: bg, padding: `${20 * size}px ${28 * size}px`, display: "inline-flex", alignItems: "center", gap: `${20 * size}px`, borderRadius: `${4 * size}px` }}>
      <LogoMark dark={!isDark} size={size * 0.6} variant={monogram} accent={accentCol} light={lightCol} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: `${34 * size}px`, color: textColor, letterSpacing: `${7 * size}px`, lineHeight: 1 }}>
          {BRAND_NAME}
        </div>
        <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: `${8.5 * size}px`, color: subtitleColor, letterSpacing: `${3 * size}px`, marginTop: `${6 * size}px`, textTransform: "uppercase" }}>
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
  { id: "compare", label: "Сравнение палитр" },
  { id: "variants", label: "Варианты логотипа" },
  { id: "palette", label: "Цветовая палитра" },
  { id: "preview", label: "Превью" },
  { id: "usage", label: "Примеры применения" },
  { id: "catalog", label: "Продуктовые карточки" },
  { id: "series", label: "Каталог серий" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("compare");
  const [copied, setCopied] = useState<string | null>(null);
  const [paletteMode, setPaletteMode] = useState<"gold" | "plum">("gold");

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

        {/* COMPARE */}
        {activeTab === "compare" && (
          <Section id="compare" label="00 · Сравнение палитр">

            {/* Заголовок */}
            <div className="mb-10 flex flex-col gap-1">
              <p className="text-brand-cream text-sm">Два варианта фирменного стиля — выберите тот, что ближе к характеру бренда.</p>
            </div>

            {/* Логотипы крупно — side by side */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">

              {/* Вариант А — Антрацит + Золото */}
              <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-30">
                <div className="px-5 py-3 flex items-center justify-between" style={{ background: "#0F0E0C", borderBottom: "1px solid rgba(200,169,110,0.15)" }}>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#C8A96E" }}>Вариант А</span>
                  <span className="text-xs tracking-wider uppercase" style={{ color: "#8A8070" }}>Антрацит + Золото</span>
                </div>
                {/* Тёмный */}
                <div className="flex flex-col items-center justify-center py-12 gap-3" style={{ background: "#0F0E0C" }}>
                  <div className="flex items-center gap-5">
                    <svg width={42} height={50} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C8A96E" strokeWidth={2} fill="none"/>
                      <rect x={10} y={8} width={60} height={80} rx={1} stroke="#C8A96E" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4}/>
                      <circle cx={64} cy={48} r={4} fill="#C8A96E"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#C8A96E" strokeWidth={1.5}/>
                      <rect x={22} y={22} width={36} height={20} rx={1} stroke="#F5EFE0" strokeWidth={1} fill="none" opacity={0.3}/>
                      <rect x={22} y={54} width={36} height={20} rx={1} stroke="#F5EFE0" strokeWidth={1} fill="none" opacity={0.3}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 40, color: "#F5EFE0", letterSpacing: 7, lineHeight: 1 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 9, color: "#8A8070", letterSpacing: 3, marginTop: 5, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C8A96E", fontSize: 15, letterSpacing: 1, marginTop: 8 }}>{BRAND_SLOGAN}</p>
                </div>
                {/* Светлый */}
                <div className="flex flex-col items-center justify-center py-10 gap-3" style={{ background: "#F5EFE0" }}>
                  <div className="flex items-center gap-5">
                    <svg width={34} height={40} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#9A7040" strokeWidth={2} fill="none"/>
                      <rect x={10} y={8} width={60} height={80} rx={1} stroke="#9A7040" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4}/>
                      <circle cx={64} cy={48} r={4} fill="#9A7040"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#9A7040" strokeWidth={1.5}/>
                      <rect x={22} y={22} width={36} height={20} rx={1} stroke="#0F0E0C" strokeWidth={1} fill="none" opacity={0.3}/>
                      <rect x={22} y={54} width={36} height={20} rx={1} stroke="#0F0E0C" strokeWidth={1} fill="none" opacity={0.3}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 32, color: "#0F0E0C", letterSpacing: 6, lineHeight: 1 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 8, color: "#8A8070", letterSpacing: 3, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#9A7040", fontSize: 13, letterSpacing: 1, marginTop: 6 }}>{BRAND_SLOGAN}</p>
                </div>
                {/* Палитра-полоски */}
                <div className="flex h-6">
                  {["#0F0E0C","#1A1915","#9A7040","#C8A96E","#E8C98A","#F5EFE0"].map(h => (
                    <div key={h} className="flex-1" style={{ background: h }} />
                  ))}
                </div>
                <div className="px-5 py-4" style={{ background: "#0F0E0C" }}>
                  <p className="text-xs mb-3" style={{ color: "#8A8070" }}>Характер: <span style={{ color: "#F5EFE0" }}>классика, элитность, надёжность</span></p>
                  <div className="flex flex-wrap gap-2">
                    {[["#0F0E0C","Антрацит"],["#C8A96E","Золото"],["#F5EFE0","Кремовый"]].map(([hex, name]) => (
                      <div key={hex} className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full border border-white border-opacity-10" style={{ background: hex }} />
                        <span className="text-xs" style={{ color: "#8A8070" }}>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Вариант Б — Баклажан + Пудра */}
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(160,120,136,0.35)" }}>
                <div className="px-5 py-3 flex items-center justify-between" style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(160,120,136,0.2)" }}>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>Вариант Б</span>
                  <span className="text-xs tracking-wider uppercase" style={{ color: "#A07888" }}>Баклажан + Пудра</span>
                </div>
                {/* Тёмный */}
                <div className="flex flex-col items-center justify-center py-12 gap-3" style={{ background: "#3B1F2B" }}>
                  <div className="flex items-center gap-5">
                    <svg width={42} height={50} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C9A0B0" strokeWidth={2} fill="none"/>
                      <rect x={10} y={8} width={60} height={80} rx={1} stroke="#C9A0B0" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4}/>
                      <circle cx={64} cy={48} r={4} fill="#C9A0B0"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#C9A0B0" strokeWidth={1.5}/>
                      <rect x={22} y={22} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.3}/>
                      <rect x={22} y={54} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.3}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 40, color: "#F0DFE5", letterSpacing: 7, lineHeight: 1 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 9, color: "#A07888", letterSpacing: 3, marginTop: 5, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C9A0B0", fontSize: 15, letterSpacing: 1, marginTop: 8 }}>{BRAND_SLOGAN}</p>
                </div>
                {/* Светлый */}
                <div className="flex flex-col items-center justify-center py-10 gap-3" style={{ background: "#F0DFE5" }}>
                  <div className="flex items-center gap-5">
                    <svg width={34} height={40} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#5C2D45" strokeWidth={2} fill="none"/>
                      <rect x={10} y={8} width={60} height={80} rx={1} stroke="#5C2D45" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4}/>
                      <circle cx={64} cy={48} r={4} fill="#5C2D45"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#5C2D45" strokeWidth={1.5}/>
                      <rect x={22} y={22} width={36} height={20} rx={1} stroke="#3B1F2B" strokeWidth={1} fill="none" opacity={0.3}/>
                      <rect x={22} y={54} width={36} height={20} rx={1} stroke="#3B1F2B" strokeWidth={1} fill="none" opacity={0.3}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 32, color: "#3B1F2B", letterSpacing: 6, lineHeight: 1 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 8, color: "#A07888", letterSpacing: 3, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#5C2D45", fontSize: 13, letterSpacing: 1, marginTop: 6 }}>{BRAND_SLOGAN}</p>
                </div>
                {/* Палитра-полоски */}
                <div className="flex h-6">
                  {["#3B1F2B","#5C2D45","#A07888","#C9A0B0","#E8C9D3","#F0DFE5"].map(h => (
                    <div key={h} className="flex-1" style={{ background: h }} />
                  ))}
                </div>
                <div className="px-5 py-4" style={{ background: "#3B1F2B" }}>
                  <p className="text-xs mb-3" style={{ color: "#A07888" }}>Характер: <span style={{ color: "#F0DFE5" }}>изысканность, женственность, современность</span></p>
                  <div className="flex flex-wrap gap-2">
                    {[["#3B1F2B","Баклажан"],["#C9A0B0","Кварц"],["#F0DFE5","Пудра"]].map(([hex, name]) => (
                      <div key={hex} className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full border border-white border-opacity-10" style={{ background: hex }} />
                        <span className="text-xs" style={{ color: "#A07888" }}>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Сравнение на одном слогане */}
            <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-10 mb-6">
              <div className="grid grid-cols-2 divide-x" style={{ divideColor: "rgba(200,169,110,0.15)" }}>
                <div className="flex items-center justify-center py-8 flex-col gap-3" style={{ background: "#111010" }}>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: 52, color: "#F5EFE0", letterSpacing: 8 }}>{BRAND_NAME}</p>
                  <div className="h-px w-20 opacity-40" style={{ background: "#C8A96E" }} />
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C8A96E", fontSize: 13 }}>{BRAND_SLOGAN}</p>
                </div>
                <div className="flex items-center justify-center py-8 flex-col gap-3" style={{ background: "#2E1622" }}>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: 52, color: "#F0DFE5", letterSpacing: 8 }}>{BRAND_NAME}</p>
                  <div className="h-px w-20 opacity-40" style={{ background: "#C9A0B0" }} />
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C9A0B0", fontSize: 13 }}>{BRAND_SLOGAN}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x" style={{ divideColor: "rgba(200,169,110,0.1)" }}>
                <p className="text-center py-3 text-xs tracking-widest uppercase" style={{ background: "#0A0A0A", color: "#8A8070" }}>А · Антрацит + Золото</p>
                <p className="text-center py-3 text-xs tracking-widest uppercase" style={{ background: "#2B151F", color: "#A07888" }}>Б · Баклажан + Пудра</p>
              </div>
            </div>

            {/* Применение на визитке */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Визитка А */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20 p-6 flex items-center justify-center" style={{ background: "#181614" }}>
                <div className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl flex flex-col justify-between p-5" style={{ background: "#0F0E0C", border: "1px solid rgba(200,169,110,0.25)" }}>
                  <div className="flex items-center gap-3">
                    <svg width={20} height={24} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C8A96E" strokeWidth={2} fill="none"/>
                      <circle cx={64} cy={48} r={4} fill="#C8A96E"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#C8A96E" strokeWidth={2}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 18, color: "#F5EFE0", letterSpacing: 4 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#8A8070", letterSpacing: 2, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p style={{ color: "#C8A96E", fontSize: 10, fontFamily: "Montserrat" }}>+7 (800) 000-00-00</p>
                    <p style={{ color: "#8A8070", fontSize: 9, fontFamily: "Montserrat", marginTop: 2 }}>mdk-doors.ru</p>
                  </div>
                </div>
              </div>
              {/* Визитка Б */}
              <div className="rounded-lg overflow-hidden p-6 flex items-center justify-center" style={{ background: "#2B1520", border: "1px solid rgba(160,120,136,0.25)" }}>
                <div className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl flex flex-col justify-between p-5" style={{ background: "#3B1F2B", border: "1px solid rgba(201,160,176,0.25)" }}>
                  <div className="flex items-center gap-3">
                    <svg width={20} height={24} viewBox="0 0 80 96" fill="none">
                      <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C9A0B0" strokeWidth={2} fill="none"/>
                      <circle cx={64} cy={48} r={4} fill="#C9A0B0"/>
                      <line x1={18} y1={48} x2={56} y2={48} stroke="#C9A0B0" strokeWidth={2}/>
                    </svg>
                    <div>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 18, color: "#F0DFE5", letterSpacing: 4 }}>{BRAND_NAME}</p>
                      <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#A07888", letterSpacing: 2, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p style={{ color: "#C9A0B0", fontSize: 10, fontFamily: "Montserrat" }}>+7 (800) 000-00-00</p>
                    <p style={{ color: "#A07888", fontSize: 9, fontFamily: "Montserrat", marginTop: 2 }}>mdk-doors.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <p className="text-center text-xs tracking-widest uppercase" style={{ color: "#8A8070" }}>А · Визитка</p>
              <p className="text-center text-xs tracking-widest uppercase" style={{ color: "#A07888" }}>Б · Визитка</p>
            </div>

          </Section>
        )}

        {/* VARIANTS */}
        {activeTab === "variants" && (
          <Section id="variants" label="01 · Варианты логотипа">

            {/* Референс */}
            <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20 mb-8">
              <div className="px-4 py-2.5 border-b border-brand-gold border-opacity-10 bg-brand-dark">
                <span className="text-xs text-brand-gold tracking-widest uppercase">Референс · Концепция «два полотна»</span>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center justify-center p-6" style={{ background: "#6B6B72" }}>
                  <img src="https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/72ea0c81-3472-4954-83f1-40a11f0ac5b1.png" alt="Референс" className="w-full max-w-[240px] rounded" />
                </div>
                <div className="flex flex-col justify-center p-6 gap-3" style={{ background: "#1A1916" }}>
                  <p className="text-xs text-brand-gold tracking-widest uppercase">Идея символа</p>
                  <p className="text-sm text-brand-cream" style={{ lineHeight: 1.7 }}>Два вертикальных прямоугольника — два полотна двустворчатой двери с накладным багетом. Простая геометрия, которую невозможно перепутать с чем-то другим.</p>
                  <p className="text-xs text-brand-stone mt-1">Ниже — 4 варианта адаптации для МДК в фирменной палитре антрацит + золото</p>
                </div>
              </div>
            </div>

            <p className="text-brand-stone text-sm mb-6">4 интерпретации символа двух полотен — от минимализма до объёма. Каждый в тёмной и светлой версии.</p>

            {/* 4 варианта */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {[
                { num: 1, title: "Классик", desc: "Чистые прямоугольники с тонкой внутренней рамкой-багетом. Максимальный минимализм" },
                { num: 2, title: "Акцент", desc: "Золотая рамка, ручки на каждом полотне, вертикальный зазор между створками" },
                { num: 3, title: "Объём", desc: "Тени, двойной багет, подсветка краёв — имитация глубины и рельефа эмалевого покрытия" },
                { num: 4, title: "Монолит", desc: "Золотая заливка + горизонтальные деления как фрезеровка на полотне. Фактурно и солидно" },
              ].map(({ num, title, desc }) => (
                <div key={num} className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20">
                  <div className="px-4 py-2.5 flex items-center justify-between border-b border-brand-gold border-opacity-10 bg-brand-dark">
                    <span className="text-xs text-brand-gold tracking-widest uppercase">Вариант {num} · {title}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    {/* Тёмный */}
                    <div className="flex flex-col items-center justify-center py-10 gap-5" style={{ background: "#0F0E0C" }}>
                      <LogoMark size={1.05} variant={num} />
                      <div className="text-center px-4">
                        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 26, color: "#F5EFE0", letterSpacing: 7, lineHeight: 1 }}>{BRAND_NAME}</p>
                        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6.5, color: "#8A8070", letterSpacing: 2.5, marginTop: 5, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                      </div>
                    </div>
                    {/* Светлый */}
                    <div className="flex flex-col items-center justify-center py-10 gap-5" style={{ background: "#F5EFE0" }}>
                      <LogoMark size={1.05} variant={num} accent="#9A7040" light="#1A1814" />
                      <div className="text-center px-4">
                        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 26, color: "#0F0E0C", letterSpacing: 7, lineHeight: 1 }}>{BRAND_NAME}</p>
                        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6.5, color: "#8A8070", letterSpacing: 2.5, marginTop: 5, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-brand-charcoal border-t border-brand-gold border-opacity-10">
                    <p className="text-xs text-brand-stone">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Все варианты рядом крупно */}
            <div className="rounded-xl border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal mb-8">
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-8">Сравнение — все варианты рядом, тёмный фон</p>
              <div className="flex items-end justify-around flex-wrap gap-10">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex flex-col items-center gap-4">
                    <LogoMark size={1.3} variant={n} />
                    <div className="text-center">
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 20, color: "#F5EFE0", letterSpacing: 5 }}>{BRAND_NAME}</p>
                      <p className="text-xs text-brand-stone tracking-widest uppercase mt-1">{["Классик","Акцент","Объём","Монолит"][n-1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}



        {/* PALETTE */}
        {activeTab === "palette" && (
          <Section id="palette" label="02 · Цветовая палитра">

            {/* Переключатель палитр */}
            {(() => {
              const altColors = [
                { name: "Баклажан", hex: "#3B1F2B", label: "Основной тёмный" },
                { name: "Слива", hex: "#5C2D45", label: "Тёмный акцент" },
                { name: "Пудра", hex: "#F0DFE5", label: "Светлый тон" },
                { name: "Розовый туман", hex: "#E8C9D3", label: "Фон" },
                { name: "Пепельная роза", hex: "#A07888", label: "Нейтральный" },
                { name: "Кварц", hex: "#C9A0B0", label: "Акцент" },
              ];

              const activePalette = paletteMode === "gold" ? colors : altColors;
              const activeBg = paletteMode === "gold" ? "#1A1915" : "#3B1F2B";
              const activeGradient = paletteMode === "gold"
                ? "linear-gradient(135deg, #0F0E0C 0%, #1A1915 30%, #9A7040 60%, #C8A96E 80%, #E8C98A 100%)"
                : "linear-gradient(135deg, #3B1F2B 0%, #5C2D45 35%, #A07888 60%, #E8C9D3 80%, #F0DFE5 100%)";
              const activeFrom = paletteMode === "gold" ? "Тёмный фон" : "Баклажан";
              const activeTo = paletteMode === "gold" ? "Золотой акцент" : "Пудровый тон";

              return (
                <>
                  {/* Переключатель */}
                  <div className="flex gap-2 mb-8 p-1 rounded-lg bg-brand-charcoal border border-brand-gold border-opacity-20 w-fit">
                    <button
                      onClick={() => setPaletteMode("gold")}
                      className={`px-5 py-2.5 rounded text-xs tracking-widest uppercase transition-all duration-200 ${
                        paletteMode === "gold"
                          ? "bg-brand-gold text-brand-dark font-semibold"
                          : "text-brand-stone hover:text-brand-cream"
                      }`}
                    >
                      Основная · Антрацит + Золото
                    </button>
                    <button
                      onClick={() => setPaletteMode("plum")}
                      className={`px-5 py-2.5 rounded text-xs tracking-widest uppercase transition-all duration-200 ${
                        paletteMode === "plum"
                          ? "text-white font-semibold"
                          : "text-brand-stone hover:text-brand-cream"
                      }`}
                      style={paletteMode === "plum" ? { background: "#5C2D45" } : {}}
                    >
                      Альтернативная · Баклажан + Пудра
                    </button>
                  </div>

                  {/* Карточки цветов */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {activePalette.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => copyHex(c.hex)}
                        className="group rounded-lg overflow-hidden border transition-all duration-200 hover:scale-[1.02]"
                        style={{ borderColor: paletteMode === "gold" ? "rgba(200,169,110,0.2)" : "rgba(160,120,136,0.3)" }}
                      >
                        <div className="h-28 transition-transform duration-300 group-hover:scale-105" style={{ background: c.hex }} />
                        <div className="p-4 text-left" style={{ background: activeBg }}>
                          <p className="text-sm font-medium" style={{ color: paletteMode === "gold" ? "#F5EFE0" : "#F0DFE5" }}>{c.name}</p>
                          <p className="text-xs mt-0.5 uppercase tracking-wider" style={{ color: paletteMode === "gold" ? "#8A8070" : "#A07888" }}>{c.label}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs font-mono" style={{ color: paletteMode === "gold" ? "#C8A96E" : "#C9A0B0" }}>{c.hex}</p>
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: paletteMode === "gold" ? "#8A8070" : "#A07888" }}>
                              {copied === c.hex ? "Скопировано!" : "Скопировать"}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Превью логотипа в альтернативной палитре */}
                  {paletteMode === "plum" && (
                    <div className="mt-8 rounded-xl overflow-hidden border" style={{ borderColor: "rgba(160,120,136,0.3)" }}>
                      <div className="grid md:grid-cols-2">
                        {/* Тёмная версия */}
                        <div className="flex flex-col items-center justify-center p-10 gap-4" style={{ background: "#3B1F2B" }}>
                          <div className="flex items-center gap-5">
                            <svg width={36} height={44} viewBox="0 0 80 96" fill="none">
                              <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C9A0B0" strokeWidth={2} fill="none" />
                              <rect x={10} y={8} width={60} height={80} rx={1} stroke="#C9A0B0" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4} />
                              <circle cx={64} cy={48} r={4} fill="#C9A0B0" />
                              <line x1={18} y1={48} x2={56} y2={48} stroke="#C9A0B0" strokeWidth={1.5} />
                              <rect x={22} y={22} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.3} />
                              <rect x={22} y={54} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.3} />
                            </svg>
                            <div>
                              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 32, color: "#F0DFE5", letterSpacing: 6, lineHeight: 1 }}>{BRAND_NAME}</p>
                              <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 8, color: "#A07888", letterSpacing: 3, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                            </div>
                          </div>
                          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C9A0B0", fontSize: 14, letterSpacing: 1 }}>{BRAND_SLOGAN}</p>
                          <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#A07888" }}>Тёмный вариант</p>
                        </div>
                        {/* Светлая версия */}
                        <div className="flex flex-col items-center justify-center p-10 gap-4" style={{ background: "#F0DFE5" }}>
                          <div className="flex items-center gap-5">
                            <svg width={36} height={44} viewBox="0 0 80 96" fill="none">
                              <rect x={4} y={2} width={72} height={92} rx={2} stroke="#5C2D45" strokeWidth={2} fill="none" />
                              <rect x={10} y={8} width={60} height={80} rx={1} stroke="#5C2D45" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.4} />
                              <circle cx={64} cy={48} r={4} fill="#5C2D45" />
                              <line x1={18} y1={48} x2={56} y2={48} stroke="#5C2D45" strokeWidth={1.5} />
                              <rect x={22} y={22} width={36} height={20} rx={1} stroke="#3B1F2B" strokeWidth={1} fill="none" opacity={0.3} />
                              <rect x={22} y={54} width={36} height={20} rx={1} stroke="#3B1F2B" strokeWidth={1} fill="none" opacity={0.3} />
                            </svg>
                            <div>
                              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 32, color: "#3B1F2B", letterSpacing: 6, lineHeight: 1 }}>{BRAND_NAME}</p>
                              <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: 8, color: "#A07888", letterSpacing: 3, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                            </div>
                          </div>
                          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#5C2D45", fontSize: 14, letterSpacing: 1 }}>{BRAND_SLOGAN}</p>
                          <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#A07888" }}>Светлый вариант</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Градиент */}
                  <div className="mt-6 rounded-lg border p-8" style={{ borderColor: paletteMode === "gold" ? "rgba(200,169,110,0.2)" : "rgba(160,120,136,0.3)", background: activeBg }}>
                    <p className="text-xs tracking-widest uppercase mb-5" style={{ color: paletteMode === "gold" ? "#8A8070" : "#A07888" }}>Градиентная палитра</p>
                    <div className="h-16 rounded-md" style={{ background: activeGradient }} />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs" style={{ color: paletteMode === "gold" ? "#8A8070" : "#A07888" }}>{activeFrom}</span>
                      <span className="text-xs" style={{ color: paletteMode === "gold" ? "#C8A96E" : "#C9A0B0" }}>{activeTo}</span>
                    </div>
                  </div>
                </>
              );
            })()}
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
                Минимальный отступ от края логотипа — высота буквы «М» в названии бренда
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
            МДК · Международная Дверная Компания © 2024
          </p>
          <p className="font-display text-brand-gold text-lg tracking-[0.2em]">{BRAND_NAME}</p>
        </div>
      </div>
    </div>
  );
}