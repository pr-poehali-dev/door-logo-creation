import {
  colors,
  MDKLogo, LogoMark, LogoFull, Section,
  BRAND_SLOGAN,
} from "./BrandbookShared";

// ─── PALETTE ─────────────────────────────────────────────────────────────────

export const TabPalette = ({ paletteMode, setPaletteMode, copied, copyHex }: {
  paletteMode: "gold" | "plum";
  setPaletteMode: (m: "gold" | "plum") => void;
  copied: string | null;
  copyHex: (hex: string) => void;
}) => {
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
    <Section id="palette" label="02 · Цветовая палитра">
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

      <div className="mt-8 rounded-xl overflow-hidden border border-brand-gold border-opacity-20">
        <div className="h-16" style={{ background: activeGradient }} />
        <div className="p-5 bg-brand-charcoal flex items-center justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-brand-stone mb-1">Градиент палитры</p>
            <p className="text-xs font-mono text-brand-gold">{activeFrom} → {activeTo}</p>
          </div>
          <p className="text-xs text-brand-stone">Только для декоративных элементов</p>
        </div>
      </div>
    </Section>
  );
};

// ─── PREVIEW ─────────────────────────────────────────────────────────────────

export const TabPreview = () => (
  <Section id="preview" label="03 · Превью логотипа">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20">
        <div className="flex items-center justify-center py-16" style={{ background: "#200D17" }}>
          <div className="text-center">
            <LogoFull variant="dark" size={1.2} />
            <p className="font-display text-base italic mt-5 tracking-wide" style={{ color: "#C9A0B0" }}>
              {BRAND_SLOGAN}
            </p>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
          <p className="text-xs text-brand-stone tracking-wider uppercase">Превью на тёмном фоне</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20">
        <div className="flex items-center justify-center py-16" style={{ background: "#F0DFE5" }}>
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
);
