import { useState } from "react";
import { Section } from "./BrandbookShared";

// ─── Категории сайта ──────────────────────────────────────────────────────────

const SITE_CATEGORIES = [
  { id: "new",       label: "Новинки",             url: "/",     urlLabel: "mdk-doors.ru" },
  { id: "sale",      label: "Акции",               url: "/",     urlLabel: "mdk-doors.ru" },
  { id: "interior",  label: "Двери в интерьере",   url: "/",     urlLabel: "mdk-doors.ru" },
  { id: "doors",     label: "Межкомнатные двери",  url: "/",     urlLabel: "mdk-doors.ru" },
  { id: "trim",      label: "Погонажные изделия",  url: "/",     urlLabel: "mdk-doors.ru" },
] as const;

type CategoryId = typeof SITE_CATEGORIES[number]["id"];

// ─── SITE ─────────────────────────────────────────────────────────────────────

export const TabSite = ({ siteViewMode, setSiteViewMode }: {
  siteViewMode: "desktop" | "mobile";
  setSiteViewMode: (m: "desktop" | "mobile") => void;
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("doors");

  const cat = SITE_CATEGORIES.find(c => c.id === activeCategory)!;

  return (
    <Section id="site" label="07 · Сайт · B2B-главная">
      <p className="text-brand-stone text-sm mb-8">
        Главная страница сайта в стилистике брендбука — для оптовых партнёров и дилеров.
      </p>

      {/* Управление: горизонтальные табы + ссылка */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex gap-1 p-1 rounded-lg bg-brand-charcoal border border-brand-gold border-opacity-20 w-fit">
          {([["desktop", "Десктоп"], ["mobile", "Мобильный"]] as const).map(([mode, label]) => (
            <button
              key={mode}
              onClick={() => setSiteViewMode(mode)}
              className={`px-5 py-2 rounded text-xs tracking-widest uppercase transition-all duration-200 ${
                siteViewMode === mode ? "bg-brand-gold text-brand-dark font-semibold" : "text-brand-stone hover:text-brand-cream"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <a
          href={cat.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C9A0B0", fontFamily: "Montserrat" }}
        >
          Открыть в новой вкладке ↗
        </a>
      </div>

      {/* Браузер с левой панелью категорий */}
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
            <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#A07888", letterSpacing: 0.5 }}>{cat.urlLabel}</span>
          </div>
        </div>

        {/* Левые табы + iframe */}
        <div className="flex" style={{ background: "#200D17" }}>

          {/* Вертикальные табы категорий */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{
              width: 40,
              borderRight: "1px solid rgba(201,160,176,0.1)",
              background: "#2B1520",
            }}
          >
            {SITE_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                title={c.label}
                className="flex items-center justify-center transition-all duration-200"
                style={{
                  padding: "16px 0",
                  borderLeft: activeCategory === c.id
                    ? "2px solid #C9A0B0"
                    : "2px solid transparent",
                  background: activeCategory === c.id
                    ? "rgba(201,160,176,0.07)"
                    : "transparent",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(201,160,176,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 7,
                    letterSpacing: "0.18em",
                    color: activeCategory === c.id ? "#C9A0B0" : "rgba(201,160,176,0.3)",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.label}
                </span>
              </button>
            ))}
          </div>

          {/* iframe */}
          <div
            className="relative overflow-hidden mx-auto transition-all duration-300 flex-1"
            style={{
              width: siteViewMode === "mobile" ? 390 : "100%",
              height: siteViewMode === "mobile" ? 700 : 720,
            }}
          >
            <iframe
              key={cat.url}
              src={cat.url}
              title={`МДК — ${cat.label}`}
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              scrolling="yes"
            />
          </div>
        </div>
      </div>

      {/* Описание секций страницы */}
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
  );
};

// ─── SITE LIGHT ───────────────────────────────────────────────────────────────

export const TabSiteLight = ({ siteViewMode, setSiteViewMode }: {
  siteViewMode: "desktop" | "mobile";
  setSiteViewMode: (m: "desktop" | "mobile") => void;
}) => (
  <Section id="site-light" label="08 · Сайт · Светлый вариант">
    <p className="text-brand-stone text-sm mb-8">
      Альтернативный вариант оформления — кремово-белый фон, тёмный баклажановый текст.
    </p>

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

    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(201,160,176,0.1)" }}>
        <div className="flex gap-1.5">
          {["#5C2D45","#6A3A4E","#4A2838"].map(c => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded" style={{ background: "rgba(32,13,23,0.6)", maxWidth: 400 }}>
          <div className="w-2 h-2 rounded-full opacity-40" style={{ background: "#C9A0B0" }} />
          <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#A07888", letterSpacing: 0.5 }}>mdk-doors.ru · светлый вариант</span>
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
        <iframe src="/light" title="МДК — светлый вариант" style={{ width: "100%", height: "100%", border: "none", display: "block" }} scrolling="yes" />
      </div>
    </div>

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
);
