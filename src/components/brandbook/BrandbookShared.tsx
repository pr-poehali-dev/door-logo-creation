// Общие константы, типы, логотипы и символы для брендбука МДК

export const BRAND_NAME = "МДК";
export const BRAND_TAGLINE = "Международная дверная компания";
export const BRAND_SLOGAN = "Лучшим людям — лучшие двери";
export const BRAND_PRODUCT = "Двери в эмалевом покрытии с накладным багетом";

export const IMG_MOCKUP = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/b8a6700f-251f-4c2f-abc9-9a3ffdc52cf0.jpg";
export const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg";
export const IMG_DOOR = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fec91c7e-21e1-4d36-b11a-aa8af0b97337.jpg";
export const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";

export const colors = [
  { name: "Баклажан", hex: "#3B1F2B", label: "Основной тёмный" },
  { name: "Кварц", hex: "#C9A0B0", label: "Акцент" },
  { name: "Пудра", hex: "#F0DFE5", label: "Светлый тон" },
  { name: "Пепельная роза", hex: "#A07888", label: "Нейтральный" },
  { name: "Розовый туман", hex: "#E8C9D3", label: "Фон" },
  { name: "Слива", hex: "#5C2D45", label: "Тёмный акцент" },
];

export const products = [
  { name: "Классик Эмаль", series: "Premium Line", color: "RAL 9003 Белый", finish: "Эмаль глянец", bagette: "Накладной багет «Ампир»", price: "от 32 500 ₽" },
  { name: "Модерн Эмаль", series: "Premium Line", color: "RAL 7044 Серый шёлк", finish: "Эмаль матовая", bagette: "Накладной багет «Модерн»", price: "от 28 900 ₽" },
  { name: "Арт Эмаль", series: "Exclusive", color: "RAL 1013 Жемчужно-белый", finish: "Эмаль сатин", bagette: "Накладной багет «Флоренция»", price: "от 41 000 ₽" },
];

export const tabs = [
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

export const MDKLogo = ({ size = 1, col }: { col?: string; size?: number }) => (
  <img src={LOGO_IMG} alt="МДК" style={{ width: 300 * size, height: "auto", display: "block" }} />
);

export const LogoMark = ({ size = 1, variant = 1, dark }: { size?: number; variant?: number; col?: string; accent?: string; dark?: boolean; light?: string; bg?: string }) => {
  if (variant === 2) return <MDKLogo col="gold" size={size} />;
  return <MDKLogo col={dark ? "dark" : "cream"} size={size} />;
};

export const SymbolBaguette = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={80 * size} height={80 * size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="72" height="72" stroke={col} strokeWidth="3" fill="none"/>
    <polygon points="16,16 64,16 64,64 16,64" stroke={col} strokeWidth="1.5" fill="none" opacity="0.5"/>
    <line x1="4" y1="4"   x2="16" y2="16" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="76" y1="4"  x2="64" y2="16" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="76" y1="76" x2="64" y2="64" stroke={col} strokeWidth="1.5" opacity="0.5"/>
    <line x1="4"  y1="76" x2="16" y2="64" stroke={col} strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

export const SymbolArch = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={72 * size} height={88 * size} viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 88 L 10 38 A 26 26 0 0 1 62 38 L 62 88" stroke={col} strokeWidth="4" fill="none" strokeLinecap="square"/>
    <path d="M 18 88 L 18 40 A 18 18 0 0 1 54 40 L 54 88" stroke={col} strokeWidth="1.5" fill="none" strokeLinecap="square" opacity="0.4"/>
    <line x1="4" y1="84" x2="68" y2="84" stroke={col} strokeWidth="2.5"/>
  </svg>
);

export const SymbolKeyhole = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={56 * size} height={88 * size} viewBox="0 0 56 88" fill={col} xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="22"/>
    <path
      fillRule="evenodd"
      d="M 28 28 M 0 0 L 56 0 L 56 88 L 0 88 Z M 28 6 A 22 22 0 1 0 28 50 A 22 22 0 0 0 28 6 Z M 20 44 L 28 80 L 36 44 Z"
      fill="transparent"
    />
    <polygon points="20,44 28,80 36,44"/>
    <circle cx="28" cy="28" r="10" fill="currentColor"/>
  </svg>
);

export const SymbolHinge = ({ col = "#F0DFE5", size = 1 }: { col?: string; size?: number }) => (
  <svg width={64 * size} height={80 * size} viewBox="0 0 64 80" fill={col} xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="4" width="8" height="72" opacity="0.3"/>
    <rect x="8"  y="6"  width="48" height="14" rx="1"/>
    <rect x="8"  y="33" width="48" height="14" rx="1"/>
    <rect x="8"  y="60" width="48" height="14" rx="1"/>
    <circle cx="20" cy="13"  r="3" fill="currentColor"/>
    <circle cx="44" cy="13"  r="3" fill="currentColor"/>
    <circle cx="20" cy="40"  r="3" fill="currentColor"/>
    <circle cx="44" cy="40"  r="3" fill="currentColor"/>
    <circle cx="20" cy="67"  r="3" fill="currentColor"/>
    <circle cx="44" cy="67"  r="3" fill="currentColor"/>
  </svg>
);

export const LogoFull = ({ variant = "dark", size = 1 }: { variant?: "dark" | "light" | "mono-dark" | "mono-light"; size?: number; monogram?: number }) => {
  const isDark = variant === "dark" || variant === "mono-dark";
  const bg = isDark ? "#3B1F2B" : "#F0DFE5";
  const textColor = isDark ? "#F0DFE5" : "#3B1F2B";
  const subtitleColor = variant.startsWith("mono") ? textColor : "#A07888";

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

export const Section = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="mb-24">
    <div className="flex items-center gap-4 mb-10">
      <span className="font-sans text-xs font-600 tracking-[0.25em] text-brand-gold uppercase">{label}</span>
      <div className="h-px flex-1 bg-brand-gold opacity-30" />
    </div>
    {children}
  </section>
);
