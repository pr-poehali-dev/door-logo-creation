import { useState } from "react";
import SeriesCatalog from "@/components/SeriesCatalog";

const BRAND_NAME = "МДК";
const BRAND_TAGLINE = "Международная дверная компания";
const BRAND_SLOGAN = "Лучшим людям — лучшие двери";
const BRAND_PRODUCT = "Двери в эмалевом покрытии с накладным багетом";

const IMG_MOCKUP = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/b8a6700f-251f-4c2f-abc9-9a3ffdc52cf0.jpg";
const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg";

const colors = [
  { name: "Баклажан", hex: "#3B1F2B", label: "Основной тёмный" },
  { name: "Кварц", hex: "#C9A0B0", label: "Акцент" },
  { name: "Пудра", hex: "#F0DFE5", label: "Светлый тон" },
  { name: "Пепельная роза", hex: "#A07888", label: "Нейтральный" },
  { name: "Розовый туман", hex: "#E8C9D3", label: "Фон" },
  { name: "Слива", hex: "#5C2D45", label: "Тёмный акцент" },
];

const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";

const MDKLogo = ({ size = 1, col }: { col?: string; size?: number }) => (
  <img src={LOGO_IMG} alt="МДК" style={{ width: 300 * size, height: "auto", display: "block" }} />
);

// Три варианта отображения одного знака: тёмный, светлый, золото
const LogoMark = ({ size = 1, variant = 1, dark }: { size?: number; variant?: number; col?: string; accent?: string; dark?: boolean; light?: string; bg?: string }) => {
  if (variant === 2) return <MDKLogo col="gold" size={size} />;
  return <MDKLogo col={dark ? "dark" : "cream"} size={size} />;
};

// ─── КОНЦЕПТУАЛЬНЫЕ СИМВОЛЫ (без букв) ───────────────────────────────────────

// Символ 1 · ПРОФИЛЬ БАГЕТА
// Вид сечения рамки в разрезе: внешний прямоугольник + скошенный внутренний контур.
// Простая форма, прямая отсылка к продукту.
const SymbolBaguette = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={80 * size} height={80 * size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Внешний контур — прямоугольник */}
    <rect x="4" y="4" width="72" height="72" stroke={col} strokeWidth="3" fill="none"/>
    {/* Скошенный внутренний контур — багет в сечении */}
    <polygon
      points="16,16 64,16 64,64 16,64"
      stroke={col} strokeWidth="1.5" fill="none" opacity="0.5"
    />
    {/* Диагонали — четыре угла соединяют внешний и внутренний контур */}
    <line x1="4" y1="4"   x2="16" y2="16" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="76" y1="4"  x2="64" y2="16" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="76" y1="76" x2="64" y2="64" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="4"  y1="76" x2="16" y2="64" stroke={col} strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

// Символ 2 · ДВЕРНОЙ ПРОЁМ — арка
// П-образный проём с полукруглым верхом. Узнаваем мгновенно, без лишних деталей.
// Единая толщина линии, квадратный формат.
const SymbolArch = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Проём: две стойки + полукруглая арка наверху */}
    <path
      d="M 10 88 L 10 38 A 26 26 0 0 1 62 38 L 62 88"
      stroke={col} strokeWidth="4" fill="none" strokeLinecap="square"
    />
    {/* Тонкий внутренний контур — намёк на багетную рамку */}
    <path
      d="M 18 88 L 18 40 A 18 18 0 0 1 54 40 L 54 88"
      stroke={col} strokeWidth="1.5" fill="none" strokeLinecap="square" opacity="0.4"
    />
    {/* Горизонталь-порог снизу */}
    <line x1="4" y1="84" x2="68" y2="84" stroke={col} strokeWidth="2.5"/>
  </svg>
);

// Символ 3 · ЗАМОЧНАЯ СКВАЖИНА
// Круг + вертикальный треугольник снизу. Дверь, вход, открытие.
// Залитая форма — максимальная лаконичность.
const SymbolKeyhole = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={56 * size} height={88 * size} viewBox="0 0 56 88" fill={col} xmlns="http://www.w3.org/2000/svg">
    {/* Круг */}
    <circle cx="28" cy="28" r="22"/>
    {/* Треугольник скважины — вырез (evenodd) */}
    <path
      fillRule="evenodd"
      d="
        M 28 28
        M 0 0 L 56 0 L 56 88 L 0 88 Z
        M 28 6 A 22 22 0 1 0 28 50 A 22 22 0 0 0 28 6 Z
        M 20 44 L 28 80 L 36 44 Z
      "
      fill="transparent"
    />
    {/* Треугольник — позитивная форма */}
    <polygon points="20,44 28,80 36,44"/>
    {/* Вырез внутри круга */}
    <circle cx="28" cy="28" r="10" fill="currentColor"/>
  </svg>
);

// Символ 4 · ДВЕРНАЯ ПЕТЛЯ
// Три горизонтальные полосы с прямоугольными «ушами» — стилизованная петля.
// Абстрактно, но профессионально: знает только тот, кто связан с дверями.
const SymbolHinge = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={64 * size} height={80 * size} viewBox="0 0 64 80" fill={col} xmlns="http://www.w3.org/2000/svg">
    {/* Центральная ось — вертикальная полоса */}
    <rect x="28" y="4" width="8" height="72" opacity="0.3"/>
    {/* Верхняя пластина петли */}
    <rect x="8"  y="6"  width="48" height="14" rx="1"/>
    {/* Средняя пластина */}
    <rect x="8"  y="33" width="48" height="14" rx="1"/>
    {/* Нижняя пластина */}
    <rect x="8"  y="60" width="48" height="14" rx="1"/>
    {/* Отверстия под винты — негативный вырез (белые кружки) */}
    <circle cx="20" cy="13"  r="3" fill="currentColor"/>
    <circle cx="44" cy="13"  r="3" fill="currentColor"/>
    <circle cx="20" cy="40"  r="3" fill="currentColor"/>
    <circle cx="44" cy="40"  r="3" fill="currentColor"/>
    <circle cx="20" cy="67"  r="3" fill="currentColor"/>
    <circle cx="44" cy="67"  r="3" fill="currentColor"/>
  </svg>
);

const LogoFull = ({ variant = "dark", size = 1, monogram = 1 }: { variant?: "dark" | "light" | "mono-dark" | "mono-light"; size?: number; monogram?: number }) => {
  const isDark = variant === "dark" || variant === "mono-dark";
  const bg = isDark ? "#3B1F2B" : "#F0DFE5";
  const textColor = isDark ? "#F0DFE5" : "#3B1F2B";
  const subtitleColor = variant.startsWith("mono") ? textColor : "#A07888";
  const colVal = isDark ? "#F0DFE5" : "#3B1F2B";
  const accentVal = variant.startsWith("mono") ? textColor : "#C9A0B0";

  return (
    <div style={{ background: bg, padding: `${20 * size}px ${28 * size}px`, display: "inline-flex", alignItems: "center", gap: `${20 * size}px`, borderRadius: `${4 * size}px` }}>
      <MDKLogo col={isDark ? "cream" : "dark"} size={size * 0.42} />
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
  { id: "concepts", label: "Символы без букв" },
  { id: "variants", label: "Знак МДК" },
  { id: "compare", label: "Сравнение палитр" },
  { id: "palette", label: "Цветовая палитра" },
  { id: "preview", label: "Превью" },
  { id: "usage", label: "Примеры применения" },
  { id: "carriers", label: "Носители" },
  { id: "catalog", label: "Продуктовые карточки" },
  { id: "series", label: "Каталог серий" },
  { id: "site", label: "Сайт · Тёмный" },
  { id: "site-light", label: "Сайт · Светлый" },
];

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

        {/* CONCEPTS */}
        {activeTab === "concepts" && (
          <Section id="concepts" label="Символы · Без букв">
            <p className="text-brand-stone text-sm mb-10">4 концепции символа — без текста и аббревиатур. Каждый считывается через форму и ассоциацию с дверью.</p>

            {/* Четыре символа крупно на тёмном */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                {
                  Symbol: SymbolBaguette,
                  title: "Профиль багета",
                  sub: "Сечение рамки сверху",
                  desc: "Внешний прямоугольник с внутренним скошенным контуром — ровно так выглядит багетная рамка в разрезе. Узнаваемо для профессионала, красиво для всех остальных.",
                  w: 80, note: "Геометрия · Абстракция"
                },
                {
                  Symbol: SymbolArch,
                  title: "Дверная арка",
                  sub: "Дверной проём с полукруглым верхом",
                  desc: "Классический архитектурный проём — арка. Мгновенно читается как дверь, даже без подписи. Двойной контур даёт намёк на багет.",
                  w: 72, note: "Архитектура · Классика"
                },
                {
                  Symbol: SymbolKeyhole,
                  title: "Замочная скважина",
                  sub: "Круг + треугольник = вход",
                  desc: "Круг и вертикальный клин снизу — силуэт скважины. Говорит о двери косвенно: через ключ, доступ, приватность. Лаконично до предела.",
                  w: 56, note: "Символика · Современно"
                },
                {
                  Symbol: SymbolHinge,
                  title: "Дверная петля",
                  sub: "Три пластины — деталь, известная каждому",
                  desc: "Стилизованная петля из трёх пластин с отверстиями. Профессиональный символ, который выделяет среди конкурентов — никто так не делал.",
                  w: 64, note: "Деталь · Оригинально"
                },
              ].map(({ Symbol, title, sub, desc, note }, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-brand-gold border-opacity-15 flex flex-col">
                  {/* Тёмная витрина */}
                  <div className="flex flex-col items-center justify-center py-16 gap-8 flex-1" style={{ background: "#200D17" }}>
                    <Symbol col="#F0DFE5" size={1.15} />
                    <div className="text-center px-6">
                      <MDKLogo col="cream" size={0.38} />
                      <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5.5, color: "#6A3A4E", letterSpacing: 2.5, marginTop: 6, textTransform: "uppercase" }}>Международная дверная компания</p>
                    </div>
                  </div>
                  {/* Светлая витрина */}
                  <div className="flex items-center justify-center py-10" style={{ background: "#F0DFE5" }}>
                    <Symbol col="#3B1F2B" size={0.7} />
                  </div>
                  {/* Описание */}
                  <div className="px-5 py-4 bg-brand-charcoal">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-brand-cream text-sm font-medium">{title}</p>
                        <p className="text-xs text-brand-stone mt-0.5">{sub}</p>
                      </div>
                      <span className="text-xs text-brand-gold tracking-wider whitespace-nowrap opacity-70">{note}</span>
                    </div>
                    <p className="text-xs text-brand-stone leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Золотая версия всех 4 — компактно */}
            <div className="rounded-xl border border-brand-gold border-opacity-20 p-8" style={{ background: "#200D17" }}>
              <p className="text-xs text-brand-stone tracking-widest uppercase mb-8">Все символы · кварц на баклажане</p>
              <div className="flex items-end justify-around flex-wrap gap-8">
                {[SymbolBaguette, SymbolArch, SymbolKeyhole, SymbolHinge].map((Symbol, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <Symbol col="#C9A0B0" size={0.72} />
                    <p className="text-xs tracking-widest uppercase" style={{ color: "#6A3A4E" }}>
                      {["Багет","Арка","Скважина","Петля"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Фирменный знак — дверь + название */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.15)" }}>
              {/* Тёмная версия */}
              <div className="relative flex flex-col items-center justify-center py-20 overflow-hidden" style={{ background: "#200D17" }}>
                {/* Декоративные линии-направляющие */}
                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9A0B0" strokeWidth="1"/>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C9A0B0" strokeWidth="1"/>
                  </svg>
                </div>

                {/* Крупный SVG двери по центру */}
                <div className="relative flex flex-col items-center gap-10">
                  <svg width={110} height={132} viewBox="0 0 80 96" fill="none" style={{ filter: "drop-shadow(0 0 32px rgba(201,160,176,0.18))" }}>
                    <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C9A0B0" strokeWidth={2} fill="none"/>
                    <rect x={10} y={8} width={60} height={80} rx={1} stroke="#C9A0B0" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.35}/>
                    <circle cx={64} cy={48} r={4} fill="#C9A0B0"/>
                    <line x1={18} y1={48} x2={56} y2={48} stroke="#C9A0B0" strokeWidth={1.5}/>
                    <rect x={22} y={22} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.25}/>
                    <rect x={22} y={54} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.25}/>
                  </svg>

                  {/* Название */}
                  <div className="flex flex-col items-center gap-3">
                    <MDKLogo col="cream" size={0.52} />
                    <div style={{ width: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,160,176,0.4), transparent)" }} />
                    <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 8, letterSpacing: 4.5, color: "#6A3A4E", textTransform: "uppercase", textAlign: "center" }}>
                      {BRAND_TAGLINE}
                    </p>
                  </div>
                </div>
              </div>

              {/* Светлая версия */}
              <div className="relative flex flex-col items-center justify-center py-16 overflow-hidden" style={{ background: "#F0DFE5" }}>
                <div className="relative flex flex-col items-center gap-8">
                  <svg width={80} height={96} viewBox="0 0 80 96" fill="none">
                    <rect x={4} y={2} width={72} height={92} rx={2} stroke="#3B1F2B" strokeWidth={2} fill="none"/>
                    <rect x={10} y={8} width={60} height={80} rx={1} stroke="#3B1F2B" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.35}/>
                    <circle cx={64} cy={48} r={4} fill="#3B1F2B"/>
                    <line x1={18} y1={48} x2={56} y2={48} stroke="#3B1F2B" strokeWidth={1.5}/>
                    <rect x={22} y={22} width={36} height={20} rx={1} stroke="#200D17" strokeWidth={1} fill="none" opacity={0.25}/>
                    <rect x={22} y={54} width={36} height={20} rx={1} stroke="#200D17" strokeWidth={1} fill="none" opacity={0.25}/>
                  </svg>

                  <div className="flex flex-col items-center gap-2">
                    <MDKLogo col="dark" size={0.4} />
                    <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, transparent, rgba(59,31,43,0.25), transparent)" }} />
                    <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7.5, letterSpacing: 4, color: "#A07888", textTransform: "uppercase", textAlign: "center" }}>
                      {BRAND_TAGLINE}
                    </p>
                  </div>
                </div>
              </div>

              {/* Подпись */}
              <div className="px-5 py-4 bg-brand-charcoal flex items-center justify-between">
                <div>
                  <p className="text-brand-cream text-sm font-medium">Фирменный знак · Дверь</p>
                  <p className="text-xs text-brand-stone mt-0.5">Силуэт двери как основной символ бренда</p>
                </div>
                <span className="text-xs text-brand-gold tracking-wider opacity-70">Знак + Логотип</span>
              </div>
            </div>
          </Section>
        )}

        {/* COMPARE */}
        {activeTab === "compare" && (
          <Section id="compare" label="00 · Сравнение палитр">

            {/* Заголовок */}
            <div className="mb-10 flex flex-col gap-1">
              <p className="text-brand-cream text-sm">Выбран <strong style={{ color: "#C9A0B0" }}>Вариант Б — Баклажан + Пудра</strong>. Ниже показано сравнение с отклонённым вариантом А для справки.</p>
            </div>

            {/* Логотипы крупно — side by side */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">

              {/* Вариант А — Антрацит + Золото (отклонён, приглушён) */}
              <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-30 opacity-50">
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
                      <MDKLogo col="cream" size={0.42} />
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
                      <MDKLogo col="dark" size={0.33} />
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
                      <MDKLogo col="cream" size={0.42} />
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
                      <MDKLogo col="dark" size={0.33} />
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
                <p className="text-center py-3 text-xs tracking-widest uppercase" style={{ background: "#0A0A0A", color: "#4A3A30", textDecoration: "line-through" }}>А · Антрацит + Золото</p>
                <p className="text-center py-3 text-xs tracking-widest uppercase font-semibold" style={{ background: "#2B151F", color: "#C9A0B0" }}>✓ Б · Баклажан + Пудра</p>
              </div>
            </div>

            {/* Применение на визитке */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Визитка А — архив */}
              <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20 p-6 flex items-center justify-center opacity-50" style={{ background: "#181614" }}>
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
              <p className="text-center text-xs tracking-widest uppercase line-through" style={{ color: "#4A3A30" }}>А · Визитка</p>
              <p className="text-center text-xs tracking-widest uppercase font-semibold" style={{ color: "#C9A0B0" }}>✓ Б · Визитка</p>
            </div>

          </Section>
        )}

        {/* VARIANTS */}
        {activeTab === "variants" && (
          <Section id="variants" label="01 · Знак МДК">

            <p className="text-brand-stone text-sm mb-10">
              Буквы М, Д, К состыкованы вплотную — диагональные срезы на стыках создают единый монолитный блок.
            </p>

            {/* Главная — логотип на баклажане, максимальный размер */}
            <div className="rounded-2xl mb-4 flex flex-col items-center justify-center gap-10 overflow-hidden" style={{ background: "#200D17", padding: "64px 40px" }}>
              <MDKLogo col="cream" size={1.0} />
              <div className="text-center">
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 11, color: "#F0DFE5", letterSpacing: 8, textTransform: "uppercase" }}>
                  {BRAND_TAGLINE}
                </p>
              </div>
            </div>

            {/* Три цвета рядом */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Пудровый на баклажане */}
              <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#3B1F2B" }}>
                <MDKLogo col="cream" size={0.55} />
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#F0DFE5", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#6A3A4E" }}>Пудра</p>
              </div>
              {/* Кварц на баклажане */}
              <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#3B1F2B" }}>
                <MDKLogo col="gold" size={0.55} />
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#C9A0B0", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#6A3A4E" }}>Кварц</p>
              </div>
              {/* Баклажан на пудре */}
              <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#F0DFE5" }}>
                <MDKLogo col="dark" size={0.55} />
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#3B1F2B", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>Инверсия</p>
              </div>
            </div>

            {/* Горизонтальный логотип — знак + текст рядом */}
            <div className="rounded-2xl mb-4 flex items-center justify-center gap-10 overflow-hidden px-12 py-14" style={{ background: "#200D17" }}>
              <MDKLogo col="cream" size={0.6} />
              <div style={{ width: 1, height: 48, background: "rgba(201,160,176,0.3)" }} />
              <div>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 32, color: "#F0DFE5", letterSpacing: 10, lineHeight: 1 }}>{BRAND_NAME}</p>
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#6A3A4E", letterSpacing: 3, marginTop: 8, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
              </div>
            </div>

            {/* Кварцевый горизонтальный */}
            <div className="rounded-2xl flex items-center justify-center gap-10 overflow-hidden px-12 py-14" style={{ background: "#200D17" }}>
              <MDKLogo col="gold" size={0.6} />
              <div style={{ width: 1, height: 48, background: "rgba(201,160,176,0.3)" }} />
              <div>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 32, color: "#C9A0B0", letterSpacing: 10, lineHeight: 1 }}>{BRAND_NAME}</p>
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#6A3A4E", letterSpacing: 3, marginTop: 8, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
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
                    background: "linear-gradient(135deg, #200D17 0%, #3B1F2B 50%, #200D17 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 50%, #C9A0B0 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <LogoFull variant="dark" size={1.4} />
                    <p className="font-display text-lg italic mt-5 tracking-wide" style={{ color: "#C9A0B0" }}>
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
                  style={{ background: "#F0DFE5" }}
                >
                  <div className="text-center">
                    <LogoFull variant="light" size={1.2} />
                    <p
                      className="font-display text-base italic mt-5 tracking-wide"
                      style={{ color: "#5C2D45" }}
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
                    style={{ background: "#3B1F2B", border: "1px solid rgba(201,160,176,0.3)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A0B0, transparent 50%)" }}
                    />
                    <div className="absolute top-5 left-5">
                      <LogoFull variant="dark" size={0.5} />
                    </div>
                    <div className="absolute bottom-4 right-5 text-right">
                      <p className="text-brand-gold text-xs font-mono">+7 (800) 000-00-00</p>
                      <p className="text-brand-stone text-xs mt-0.5">mdk-doors.ru</p>
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
                    style={{ background: "#3B1F2B", border: "2px solid rgba(201,160,176,0.5)", minWidth: 200 }}
                  >
                    <LogoMark size={0.8} />
                    <div className="mt-3 text-center">
                      <MDKLogo col="cream" size={0.35} />
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
                <div className="p-8 flex items-center justify-center" style={{ background: "#F0DFE5" }}>
                  <div
                    className="w-36 h-36 rounded-full flex flex-col items-center justify-center"
                    style={{ border: "2px solid #3B1F2B" }}
                  >
                    <LogoMark dark size={0.5} />
                    <MDKLogo col="dark" size={0.22} />
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
                <div className="relative overflow-hidden min-h-72 flex items-center justify-center" style={{ background: "#F0DFE5" }}>
                  <img
                    src={IMG_DOOR}
                    alt="Дверь в эмалевом покрытии"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(to right, transparent, #F0DFE5)" }} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-dark text-xs font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-sm">
                      Premium Line
                    </span>
                  </div>
                </div>
                <div className="bg-brand-charcoal p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <MDKLogo col="cream" size={0.28} />
                      <div>
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

        {/* CARRIERS */}
        {activeTab === "carriers" && (
          <Section id="carriers" label="05б · Правила применения на носителях">
            <p className="text-brand-stone text-sm mb-10">
              Как использовать фирменный стиль на каждом типе носителя — цвета, сочетания, ограничения.
            </p>

            {/* Таблица-легенда */}
            <div className="flex gap-6 mb-10 flex-wrap">
              {[
                { col: "#3B1F2B", label: "Баклажан", role: "Основной тёмный фон" },
                { col: "#C9A0B0", label: "Кварц", role: "Акцентный цвет" },
                { col: "#F0DFE5", label: "Пудра", role: "Светлый фон / инверсия" },
                { col: "#A07888", label: "Пепельная роза", role: "Вспомогательный текст" },
                { col: "#5C2D45", label: "Слива", role: "Тёмный акцент / рамки" },
              ].map(({ col, label, role }) => (
                <div key={col} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0" style={{ background: col }} />
                  <div>
                    <p className="text-xs text-brand-cream leading-none">{label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>{role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ВЫВЕСКА */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>01</span>
                <span className="text-brand-cream text-sm font-medium">Вывеска / Витрина</span>
                <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-3">
                {/* Основной вариант */}
                <div className="rounded-xl overflow-hidden">
                  <div className="flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#3B1F2B", border: "2px solid rgba(201,160,176,0.3)" }}>
                    <MDKLogo size={0.45} />
                    <div className="h-px w-16" style={{ background: "rgba(201,160,176,0.4)" }} />
                    <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#A07888", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>Международная дверная компания</p>
                  </div>
                  <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
                    <p className="text-xs" style={{ color: "#C9A0B0" }}>Основной</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Баклажан + Пудра</p>
                  </div>
                </div>
                {/* Инверсионный */}
                <div className="rounded-xl overflow-hidden">
                  <div className="flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#F0DFE5", border: "2px solid rgba(92,45,69,0.2)" }}>
                    <MDKLogo size={0.45} />
                    <div className="h-px w-16" style={{ background: "rgba(92,45,69,0.3)" }} />
                    <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#A07888", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>Международная дверная компания</p>
                  </div>
                  <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
                    <p className="text-xs" style={{ color: "#C9A0B0" }}>Инверсия</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Пудра + Баклажан</p>
                  </div>
                </div>
                {/* Запрещённый */}
                <div className="rounded-xl overflow-hidden opacity-60">
                  <div className="relative flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#888", border: "2px dashed rgba(255,100,100,0.4)" }}>
                    <MDKLogo size={0.45} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 rotate-12" style={{ background: "rgba(255,80,80,0.7)" }} />
                    </div>
                  </div>
                  <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
                    <p className="text-xs" style={{ color: "#cc6060" }}>Не использовать</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Произвольный фон</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
                <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для вывески</p>
                <p style={{ color: "#A07888" }}>Фон — только <span style={{ color: "#F0DFE5" }}>Баклажан #3B1F2B</span> или <span style={{ color: "#F0DFE5" }}>Пудра #F0DFE5</span>. Минимальная высота логотипа на вывеске — 60 мм. Охранная зона — 1× высота буквы «М» со всех сторон.</p>
              </div>
            </div>

            {/* СОЦСЕТИ */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>02</span>
                <span className="text-brand-cream text-sm font-medium">Социальные сети</span>
                <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                {/* Аватар */}
                <div className="flex flex-col gap-2">
                  <div className="rounded-2xl flex items-center justify-center aspect-square" style={{ background: "#3B1F2B", border: "1.5px solid rgba(201,160,176,0.25)" }}>
                    <MDKLogo size={0.32} />
                  </div>
                  <p className="text-xs text-center" style={{ color: "#A07888" }}>Аватар · 400×400</p>
                </div>
                {/* Пост квадрат */}
                <div className="flex flex-col gap-2">
                  <div className="rounded-xl flex flex-col items-center justify-center aspect-square gap-3 px-4" style={{ background: "linear-gradient(145deg, #2B1520 0%, #3B1F2B 100%)" }}>
                    <MDKLogo size={0.28} />
                    <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C9A0B0", fontSize: 9, textAlign: "center", letterSpacing: 1 }}>{BRAND_SLOGAN}</p>
                  </div>
                  <p className="text-xs text-center" style={{ color: "#A07888" }}>Пост · 1080×1080</p>
                </div>
                {/* Сторис */}
                <div className="flex flex-col gap-2">
                  <div className="rounded-xl flex flex-col items-center justify-center gap-4 px-4 py-6" style={{ background: "linear-gradient(180deg, #200D17 0%, #5C2D45 100%)", aspectRatio: "9/16", minHeight: 120 }}>
                    <MDKLogo size={0.22} />
                    <div className="h-px w-10" style={{ background: "rgba(201,160,176,0.4)" }} />
                    <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#A07888", letterSpacing: 2, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
                  </div>
                  <p className="text-xs text-center" style={{ color: "#A07888" }}>Сторис · 1080×1920</p>
                </div>
                {/* Обложка */}
                <div className="flex flex-col gap-2">
                  <div className="rounded-xl flex items-center justify-center px-4" style={{ background: "#3B1F2B", aspectRatio: "16/9", border: "1px solid rgba(201,160,176,0.2)" }}>
                    <MDKLogo size={0.26} />
                  </div>
                  <p className="text-xs text-center" style={{ color: "#A07888" }}>Обложка · 1920×1080</p>
                </div>
              </div>
              <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
                <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для соцсетей</p>
                <p style={{ color: "#A07888" }}>На аватаре — только знак без подписи. В постах слоган набирается <span style={{ color: "#F0DFE5" }}>Cormorant Garamond Italic</span>. Хэштеги и геометка — <span style={{ color: "#F0DFE5" }}>Montserrat Light</span>, цвет Пепельная роза.</p>
              </div>
            </div>

            {/* ДОКУМЕНТЫ */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>03</span>
                <span className="text-brand-cream text-sm font-medium">Документы / Бланки</span>
                <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                {/* Бланк */}
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
                  <div className="px-6 pt-6 pb-4" style={{ background: "#F0DFE5" }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <MDKLogo size={0.26} />
                        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#A07888", letterSpacing: 2, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                      </div>
                      <div className="text-right">
                        <p style={{ fontFamily: "Montserrat", fontSize: 8, color: "#A07888" }}>mdk-doors.ru</p>
                        <p style={{ fontFamily: "Montserrat", fontSize: 8, color: "#A07888", marginTop: 2 }}>+7 (800) 000-00-00</p>
                      </div>
                    </div>
                    <div className="h-px mb-4" style={{ background: "rgba(92,45,69,0.2)" }} />
                    <div className="space-y-1.5">
                      {["Коммерческое предложение", "Договор поставки", "Счёт на оплату"].map(t => (
                        <div key={t} className="h-2 rounded-sm" style={{ background: "rgba(92,45,69,0.1)", width: t.length * 5 }} />
                      ))}
                    </div>
                    <div className="mt-4 h-px" style={{ background: "rgba(92,45,69,0.15)" }} />
                    <div className="mt-3 flex justify-end">
                      <div className="text-right">
                        <p style={{ fontFamily: "Montserrat", fontSize: 6, color: "#A07888", letterSpacing: 1 }}>МДК · {new Date().getFullYear()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
                    <p className="text-xs" style={{ color: "#C9A0B0" }}>Бланк документа</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Пудровый фон · логотип тёмный</p>
                  </div>
                </div>
                {/* Конверт */}
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
                  <div className="px-6 py-8 flex flex-col justify-between gap-6" style={{ background: "#3B1F2B", minHeight: 160 }}>
                    <div className="flex items-center justify-between">
                      <MDKLogo size={0.22} />
                      <div className="w-10 h-6 rounded-sm" style={{ background: "#5C2D45", border: "1px solid rgba(201,160,176,0.2)" }} />
                    </div>
                    <div className="space-y-1">
                      {["Кому:", "Адрес получателя"].map((l, i) => (
                        <div key={l} className="flex gap-2 items-center">
                          <span style={{ fontFamily: "Montserrat", fontSize: 7, color: "#6A3A4E" }}>{l}</span>
                          <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
                        </div>
                      ))}
                    </div>
                    <p style={{ fontFamily: "Montserrat", fontSize: 6.5, color: "#6A3A4E", letterSpacing: 1 }}>mdk-doors.ru · +7 (800) 000-00-00</p>
                  </div>
                  <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
                    <p className="text-xs" style={{ color: "#C9A0B0" }}>Конверт / упаковка</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Баклажан · логотип пудровый</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
                <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для документов</p>
                <p style={{ color: "#A07888" }}>Шрифт основного текста — <span style={{ color: "#F0DFE5" }}>Montserrat Regular 10pt</span>. Заголовки разделов — <span style={{ color: "#F0DFE5" }}>Cormorant Garamond 14pt</span>. Цвет текста документа — не фирменный, стандартный чёрный #1A1A1A.</p>
              </div>
            </div>

            {/* СВОДНАЯ ТАБЛИЦА */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>04</span>
                <span className="text-brand-cream text-sm font-medium">Сводные правила</span>
                <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(201,160,176,0.15)" }}>
                      <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Носитель</th>
                      <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Фон</th>
                      <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Логотип</th>
                      <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Акцент</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Вывеска (улица)", "Баклажан #3B1F2B", "Пудра", "Кварц #C9A0B0"],
                      ["Вывеска (интерьер)", "Пудра #F0DFE5", "Баклажан", "Слива #5C2D45"],
                      ["Аватар соцсетей", "Баклажан #3B1F2B", "Пудра", "—"],
                      ["Пост / сторис", "Градиент тёмный", "Пудра", "Кварц"],
                      ["Обложка ВК/ФБ", "Баклажан #3B1F2B", "Пудра", "Кварц"],
                      ["Бланк документа", "Пудра #F0DFE5", "Баклажан", "Слива"],
                      ["Конверт / упаковка", "Баклажан #3B1F2B", "Пудра", "Слива"],
                      ["Визитная карточка", "Баклажан #3B1F2B", "Пудра", "Кварц"],
                      ["Печать / штамп", "Пудра #F0DFE5", "Баклажан", "—"],
                    ].map(([carrier, bg, logo, accent], i) => (
                      <tr
                        key={carrier}
                        style={{ background: i % 2 === 0 ? "#2B1520" : "#321826", borderBottom: "1px solid rgba(201,160,176,0.08)" }}
                      >
                        <td className="px-5 py-3" style={{ color: "#F0DFE5" }}>{carrier}</td>
                        <td className="px-5 py-3 font-mono" style={{ color: "#A07888" }}>{bg}</td>
                        <td className="px-5 py-3" style={{ color: "#C9A0B0" }}>{logo}</td>
                        <td className="px-5 py-3" style={{ color: "#A07888" }}>{accent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

        {/* SITE PREVIEW */}
        {activeTab === "site" && (
          <Section id="site" label="07 · Сайт · B2B-главная">
            <p className="text-brand-stone text-sm mb-8">
              Главная страница сайта в стилистике брендбука — для оптовых партнёров и дилеров.
            </p>

            {/* Переключатель режима просмотра */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex gap-1 p-1 rounded-lg bg-brand-charcoal border border-brand-gold border-opacity-20 w-fit">
                {([["desktop", "Десктоп"], ["mobile", "Мобильный"]] as const).map(([mode, label]) => (
                  <button
                    key={mode}
                    onClick={() => setSiteViewMode(mode)}
                    className={`px-5 py-2 rounded text-xs tracking-widest uppercase transition-all duration-200 ${
                      siteViewMode === mode ? "font-semibold" : "text-brand-stone hover:text-brand-cream"
                    }`}
                    style={siteViewMode === mode ? { background: "#C9A0B0", color: "#200D17" } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: "#C9A0B0", fontFamily: "Montserrat" }}
              >
                Открыть в новой вкладке ↗
              </a>
            </div>

            {/* Рамка браузера */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
              {/* Адресная строка */}
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(201,160,176,0.1)" }}>
                <div className="flex gap-1.5">
                  {["#5C2D45","#6A3A4E","#4A2838"].map(c => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded" style={{ background: "rgba(32,13,23,0.6)", maxWidth: 400 }}>
                  <div className="w-2 h-2 rounded-full opacity-40" style={{ background: "#C9A0B0" }} />
                  <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#A07888", letterSpacing: 0.5 }}>
                    mdk-doors.ru
                  </span>
                </div>
              </div>

              {/* iframe */}
              <div
                className="relative overflow-hidden mx-auto transition-all duration-300"
                style={{
                  width: siteViewMode === "mobile" ? 390 : "100%",
                  height: siteViewMode === "mobile" ? 700 : 720,
                  background: "#200D17",
                }}
              >
                <iframe
                  src="/"
                  title="МДК — B2B сайт"
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  scrolling="yes"
                />
              </div>
            </div>

            {/* Описание секций */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Hero", desc: "Заголовок, фото-фон, два CTA. Статистика в нижней полосе." },
                { num: "02", title: "Условия", desc: "6 блоков: сроки, скидки, размеры, отделка, документы, маркетинг." },
                { num: "03", title: "Коллекции", desc: "Все 9 серий с количеством моделей и видами отделки." },
                { num: "04", title: "Цитата", desc: "Фирменный слоган на баклажановом фоне." },
                { num: "05", title: "Форма заявки", desc: "Компания, ФИО, телефон, комментарий. Подтверждение после отправки." },
                { num: "06", title: "Футер", desc: "Контакты, ссылка на брендбук." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="p-5 rounded-lg" style={{ background: "#2B1520", border: "1px solid rgba(201,160,176,0.1)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontFamily: "Montserrat", fontSize: 9, color: "#5C2D45", letterSpacing: 2 }}>{num}</span>
                    <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, color: "#F0DFE5" }}>{title}</span>
                  </div>
                  <p style={{ fontFamily: "Montserrat", fontSize: 11, color: "#A07888", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* SITE LIGHT PREVIEW */}
        {activeTab === "site-light" && (
          <Section id="site-light" label="08 · Сайт · Светлый вариант">
            <p className="text-brand-stone text-sm mb-8">
              Альтернативный вариант оформления — кремово-белый фон, тёмный баклажановый текст.
            </p>

            {/* Переключатель режима просмотра */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex gap-1 p-1 rounded-lg bg-brand-charcoal border border-brand-gold border-opacity-20 w-fit">
                {([["desktop", "Десктоп"], ["mobile", "Мобильный"]] as const).map(([mode, label]) => (
                  <button
                    key={mode}
                    onClick={() => setSiteViewMode(mode)}
                    className={`px-5 py-2 rounded text-xs tracking-widest uppercase transition-all duration-200 ${
                      siteViewMode === mode ? "font-semibold" : "text-brand-stone hover:text-brand-cream"
                    }`}
                    style={siteViewMode === mode ? { background: "#C9A0B0", color: "#200D17" } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="/light"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: "#C9A0B0", fontFamily: "Montserrat" }}
              >
                Открыть в новой вкладке ↗
              </a>
            </div>

            {/* Рамка браузера */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(201,160,176,0.1)" }}>
                <div className="flex gap-1.5">
                  {["#5C2D45","#6A3A4E","#4A2838"].map(c => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded" style={{ background: "rgba(32,13,23,0.6)", maxWidth: 400 }}>
                  <div className="w-2 h-2 rounded-full opacity-40" style={{ background: "#C9A0B0" }} />
                  <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#A07888", letterSpacing: 0.5 }}>
                    mdk-doors.ru · светлый вариант
                  </span>
                </div>
              </div>
              <div
                className="relative overflow-hidden mx-auto transition-all duration-300"
                style={{
                  width: siteViewMode === "mobile" ? 390 : "100%",
                  height: siteViewMode === "mobile" ? 700 : 720,
                  background: "#FAF7F5",
                }}
              >
                <iframe
                  src="/light"
                  title="МДК — светлый вариант"
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  scrolling="yes"
                />
              </div>
            </div>

            {/* Сравнение */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg" style={{ background: "#2B1520", border: "1px solid rgba(201,160,176,0.1)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-sm" style={{ background: "#200D17" }} />
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, color: "#F0DFE5" }}>Тёмный вариант</span>
                </div>
                <p style={{ fontFamily: "Montserrat", fontSize: 11, color: "#A07888", lineHeight: 1.6 }}>
                  Фон баклажан #200D17. Подходит для премиум-сегмента и сайтов с атмосферой luxury.
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: "#2B1520", border: "1px solid rgba(201,160,176,0.1)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-sm" style={{ background: "#FAF7F5", border: "1px solid rgba(201,160,176,0.3)" }} />
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, color: "#F0DFE5" }}>Светлый вариант</span>
                </div>
                <p style={{ fontFamily: "Montserrat", fontSize: 11, color: "#A07888", lineHeight: 1.6 }}>
                  Фон кремовый #FAF7F5. Лучше читается на дневном свете, подходит для широкой аудитории.
                </p>
              </div>
            </div>
          </Section>
        )}
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