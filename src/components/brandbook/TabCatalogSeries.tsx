import SeriesCatalog from "@/components/SeriesCatalog";
import { BRAND_TAGLINE, BRAND_SLOGAN, IMG_DOOR, MDKLogo, LogoMark, Section, products } from "./BrandbookShared";

// ─── CATALOG ──────────────────────────────────────────────────────────────────

export const TabCatalog = () => (
  <Section id="catalog" label="05 · Продуктовые карточки">
    <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20 mb-6">
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden min-h-72 flex items-center justify-center" style={{ background: "#F0DFE5" }}>
          <img src={IMG_DOOR} alt="Дверь в эмалевом покрытии" className="w-full h-full object-cover absolute inset-0" />
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
              <p className="font-sans text-xs text-brand-stone tracking-widest uppercase" style={{ fontSize: 8 }}>{BRAND_TAGLINE}</p>
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

    <div className="mb-6">
      <a
        href="/door-presentation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200 hover:opacity-80"
        style={{ background: "rgba(201,160,176,0.08)", border: "1px solid rgba(201,160,176,0.25)", textDecoration: "none" }}
      >
        <span style={{ fontFamily: "Montserrat", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A0B0" }}>
          Открыть полную презентацию модели ↗
        </span>
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((p) => (
        <div key={p.name} className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20 bg-brand-charcoal flex flex-col">
          <div className="relative h-48 bg-brand-dark overflow-hidden flex items-center justify-center">
            <img src={IMG_DOOR} alt={p.name} className="w-full h-full object-cover opacity-80" />
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
            <div className="w-8 h-8 rounded-full border border-brand-gold border-opacity-30 flex-shrink-0" style={{ background: ec.color }} />
            <div>
              <p className="text-xs text-brand-cream">{ec.label}</p>
              <p className="text-xs text-brand-stone font-mono">{ec.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ─── SERIES ───────────────────────────────────────────────────────────────────

export const TabSeries = () => (
  <Section id="series" label="06 · Каталог серий">
    <SeriesCatalog />
  </Section>
);