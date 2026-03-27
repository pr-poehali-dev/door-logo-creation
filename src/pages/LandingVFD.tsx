import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";
const IMG_DOOR = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fec91c7e-21e1-4d36-b11a-aa8af0b97337.jpg";
const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg";

type Theme = {
  bg: string; bgAlt: string; bgHover: string;
  accent: string; accentMid: string; accentDim: string; accentFaint: string;
  text: string; textMid: string;
  statsOverlay: string; headerBg: string;
  inputBorder: string; inputBorderFocus: string;
  quoteSection: string; isDark: boolean;
};

const DARK: Theme = {
  bg: "#200D17",
  bgAlt: "#3B1F2B",
  bgHover: "#2B1520",
  accent: "#C9A0B0",
  accentMid: "#A07888",
  accentDim: "#6A3A4E",
  accentFaint: "rgba(201,160,176,0.12)",
  text: "#F0DFE5",
  textMid: "#A07888",
  statsOverlay: "rgba(59,31,43,0.82)",
  headerBg: "rgba(32,13,23,0.94)",
  inputBorder: "rgba(201,160,176,0.22)",
  inputBorderFocus: "rgba(201,160,176,0.6)",
  quoteSection: "#3B1F2B",
  isDark: true,
};

const LIGHT: Theme = {
  bg: "#FAF6F3",
  bgAlt: "#F0DFE5",
  bgHover: "#EDD5DC",
  accent: "#5C2D45",
  accentMid: "#A07888",
  accentDim: "#8A5868",
  accentFaint: "rgba(92,45,69,0.1)",
  text: "#2B1520",
  textMid: "#6A3A4E",
  statsOverlay: "rgba(240,223,229,0.92)",
  headerBg: "rgba(250,246,243,0.96)",
  inputBorder: "rgba(92,45,69,0.2)",
  inputBorderFocus: "rgba(92,45,69,0.55)",
  quoteSection: "#F0DFE5",
  isDark: false,
};

const NAV_LINKS = [
  ["О компании", "#about"],
  ["Коллекции", "#collections"],
  ["Производство", "#production"],
  ["Партнёрам", "#partners"],
  ["Контакты", "#contact"],
];

const STATS = [
  { value: "17+", label: "лет на рынке" },
  { value: "9", label: "серий коллекций" },
  { value: "40+", label: "моделей в каталоге" },
  { value: "B2B", label: "только оптовые партнёры" },
];

const SERIES = [
  { name: "Аэлита", models: 8, tag: "Хит продаж" },
  { name: "Гармония", models: 6, tag: "" },
  { name: "Глория", models: 8, tag: "Новинка" },
  { name: "Грация", models: 4, tag: "" },
  { name: "Лондон", models: 2, tag: "" },
  { name: "Неаполь", models: 4, tag: "" },
  { name: "Премиум", models: 6, tag: "Топ сегмент" },
  { name: "Стелла", models: 2, tag: "" },
  { name: "Экстра", models: 6, tag: "" },
];

const FEATURES = [
  { num: "01", title: "Собственное производство", desc: "Полный цикл изготовления в России. Контроль качества на каждом этапе — от заготовки до упаковки." },
  { num: "02", title: "Фиксированные сроки", desc: "10 рабочих дней для стандартных позиций. Для нестандартных размеров — срок согласовывается индивидуально." },
  { num: "03", title: "Нестандартные размеры", desc: "Ширина 600–1000 мм, высота 1900–2300 мм с шагом 50 мм. Подберём решение под любой проём." },
  { num: "04", title: "Гибкие условия", desc: "Объёмные скидки, отсрочка платежа, персональный менеджер. Индивидуальный подход к каждому партнёру." },
  { num: "05", title: "Широкая линейка отделки", desc: "Эмаль, декошпан, патина. 3 базовых цвета и нанесение по RAL на заказ от 20 единиц." },
  { num: "06", title: "Документация", desc: "Полный пакет: сертификаты соответствия, декларации, технические паспорта на каждую серию." },
];

const PROCESS_STEPS = [
  { n: "1", title: "Заявка", desc: "Оставьте запрос — менеджер свяжется в течение 2 часов" },
  { n: "2", title: "Прайс и образцы", desc: "Вышлем актуальный прайс-лист и образцы материалов" },
  { n: "3", title: "Договор", desc: "Согласуем условия и подпишем договор поставки" },
  { n: "4", title: "Производство", desc: "Изготовление в срок с уведомлением о готовности" },
  { n: "5", title: "Отгрузка", desc: "Самовывоз или доставка до склада партнёра" },
];

const DoorSVG = ({ col = "#C9A0B0", size = 1 }: { col?: string; size?: number }) => (
  <svg width={32 * size} height={42 * size} viewBox="0 0 32 42" fill="none">
    <rect x={1} y={1} width={30} height={40} rx={1} stroke={col} strokeWidth={1.5} fill="none" />
    <rect x={4} y={4} width={24} height={34} rx={0.5} stroke={col} strokeWidth={0.75} strokeDasharray="3 2" fill="none" opacity={0.4} />
    <circle cx={25} cy={21} r={2} fill={col} />
    <line x1={8} y1={21} x2={21} y2={21} stroke={col} strokeWidth={1.2} />
    <rect x={9} y={9} width={14} height={10} rx={0.5} stroke={col} strokeWidth={0.6} fill="none" opacity={0.25} />
    <rect x={9} y={25} width={14} height={10} rx={0.5} stroke={col} strokeWidth={0.6} fill="none" opacity={0.25} />
  </svg>
);

const SectionTag = ({ index, label, C }: { index: string; label: string; C: Theme }) => (
  <div className="flex items-center gap-6 mb-16">
    <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 4, color: C.accentDim, fontWeight: 400 }} className="uppercase shrink-0">{index}</span>
    <div className="h-px flex-1" style={{ background: C.accentFaint }} />
    <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 4, color: C.accentMid, fontWeight: 300 }} className="uppercase shrink-0">{label}</span>
  </div>
);

export default function LandingVFD() {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ company: "", name: "", phone: "", region: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const C = theme === "dark" ? DARK : LIGHT;
  const isDark = C.isDark;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "Montserrat, sans-serif" }} className="min-h-screen">

      {/* ════════ ШАПКА ════════ */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: C.headerBg, backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.accentFaint}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between py-4">
            <img src={LOGO_IMG} alt="МДК" style={{ height: 32, width: "auto", filter: isDark ? "none" : "brightness(0) saturate(100%) invert(12%) sepia(30%) saturate(800%) hue-rotate(290deg)" }} />

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href}
                  style={{ fontSize: 10, letterSpacing: 2.5, color: C.accentMid, textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.accentMid)}
                >{label}</a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78000000000" style={{ fontSize: 14, fontWeight: 500, color: C.text, textDecoration: "none", letterSpacing: 0.5 }}>
                +7 (800) 000-00-00
              </a>
              {/* Переключатель темы */}
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                style={{
                  fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                  color: C.accentMid, background: "transparent",
                  border: `1px solid ${C.accentFaint}`, padding: "9px 14px",
                  cursor: "pointer", fontFamily: "Montserrat",
                  transition: "border-color 0.2s, color 0.2s",
                  display: "flex", alignItems: "center", gap: 5,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentMid; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.accentFaint; e.currentTarget.style.color = C.accentMid; }}
              >
                <span style={{ fontSize: 13 }}>{isDark ? "☀" : "☽"}</span>
                {isDark ? "Светлый" : "Тёмный"}
              </button>
              <Link to="/door-colors"
                style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.accentMid, background: "transparent", border: `1px solid ${C.accentFaint}`, padding: "9px 14px", textDecoration: "none", transition: "border-color 0.2s, color 0.2s", display: "inline-flex", alignItems: "center", gap: 5 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentMid; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.accentFaint; e.currentTarget.style.color = C.accentMid; }}
              >
                <span style={{ fontSize: 11 }}>◈</span> Цвета
              </Link>
              <a href="#contact"
                style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: isDark ? C.bg : "#FAF6F3", background: C.accent, padding: "11px 24px", textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >Стать партнёром</a>
            </div>

            <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {[0, 1, 2].map(i => <span key={i} style={{ display: "block", width: 22, height: 1, background: C.accent }} />)}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-6 flex flex-col gap-5" style={{ borderTop: `1px solid ${C.accentFaint}`, paddingTop: 20 }}>
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 11, letterSpacing: 2.5, color: C.accentMid, textDecoration: "none", textTransform: "uppercase" }}
                >{label}</a>
              ))}
              <div className="flex gap-3 flex-wrap mt-2">
                <button onClick={() => setTheme(isDark ? "light" : "dark")}
                  style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.accentMid, background: "transparent", border: `1px solid ${C.accentFaint}`, padding: "11px 16px", cursor: "pointer", fontFamily: "Montserrat" }}
                >{isDark ? "☀ Светлый" : "☽ Тёмный"}</button>
                <a href="#contact" style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: isDark ? C.bg : "#FAF6F3", background: C.accent, padding: "11px 20px", textDecoration: "none" }}>
                  Стать партнёром
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ════════ HERO ════════ */}
      <section style={{ position: "relative", minHeight: "96vh", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img src={IMG_DOOR} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: isDark ? 0.14 : 0.08 }} />
          <div style={{ position: "absolute", inset: 0, background: isDark ? `linear-gradient(110deg, ${C.bg} 38%, rgba(32,13,23,0.55) 100%)` : `linear-gradient(110deg, ${C.bg} 40%, rgba(250,246,243,0.6) 100%)` }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 120px, ${C.accentFaint} 120px, ${C.accentFaint} 121px)` }} />
        </div>

        <div className="relative flex-1 max-w-7xl mx-auto px-6 md:px-10 w-full flex items-center" style={{ paddingTop: 100, paddingBottom: 120 }}>
          <div style={{ maxWidth: 680 }}>
            <div className="flex items-center gap-4 mb-10">
              <div style={{ width: 36, height: 1, background: C.accent }} />
              <span style={{ fontSize: 9, letterSpacing: 5, color: C.accent, textTransform: "uppercase" }}>Производство · Оптовые поставки · B2B</span>
            </div>

            <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 300, color: C.text, lineHeight: 1.06, letterSpacing: 1, marginBottom: 28 }}>
              Межкомнатные двери<br />
              в&nbsp;эмалевом покрытии<br />
              <em style={{ color: C.accent, fontStyle: "italic" }}>с&nbsp;накладным багетом</em>
            </h1>

            <p style={{ fontSize: 14, fontWeight: 300, color: C.textMid, lineHeight: 1.85, maxWidth: 500, marginBottom: 48 }}>
              МДК — производитель и оптовый поставщик дверей класса «комфорт» и «премиум».
              Работаем с дилерами, застройщиками и дизайн-студиями по всей России.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact"
                style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: isDark ? C.bg : "#FAF6F3", background: C.accent, padding: "16px 44px", textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >Запросить прайс</a>
              <a href="#collections"
                style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: C.accent, border: `1px solid ${C.accent}`, borderColor: isDark ? "rgba(201,160,176,0.35)" : "rgba(92,45,69,0.3)", padding: "16px 44px", textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = isDark ? "rgba(201,160,176,0.35)" : "rgba(92,45,69,0.3)")}
              >Смотреть коллекции</a>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: C.statsOverlay, backdropFilter: "blur(12px)", borderTop: `1px solid ${C.accentFaint}` }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map(({ value, label }, i) => (
                <div key={label} className="px-4 py-6 text-center" style={{ borderRight: i < 3 ? `1px solid ${C.accentFaint}` : "none" }}>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 38, fontWeight: 600, color: C.text, lineHeight: 1 }}>{value}</p>
                  <p style={{ fontSize: 9, letterSpacing: 2, color: C.textMid, marginTop: 8, textTransform: "uppercase" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ О КОМПАНИИ ════════ */}
      <section id="about" style={{ paddingTop: 100, paddingBottom: 100, background: C.bg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag index="01" label="О компании" C={C} />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(34px, 4vw, 56px)", fontWeight: 300, color: C.text, lineHeight: 1.15, marginBottom: 24 }}>
                Лучшим людям —<br />
                <em style={{ color: C.accent }}>лучшие двери</em>
              </h2>
              <p style={{ fontSize: 13, fontWeight: 300, color: C.textMid, lineHeight: 1.9, marginBottom: 20 }}>
                МДК (Международная дверная компания) производит межкомнатные двери в эмалевом покрытии
                с накладным багетом с 2007 года. За это время мы построили доверительные отношения
                с сотнями дилеров по всей России.
              </p>
              <p style={{ fontSize: 13, fontWeight: 300, color: C.textMid, lineHeight: 1.9 }}>
                Наш продукт — это сочетание строгой геометрии, качественного покрытия и продуманной
                системы сборки, которая упрощает установку и снижает процент рекламаций.
              </p>
              <div className="flex flex-col gap-4 mt-10">
                {["9 серий · 40+ моделей в ассортименте", "Производство на территории России", "Сертифицированная продукция с полным пакетом документов"].map(item => (
                  <div key={item} className="flex items-start gap-4">
                    <div style={{ width: 20, height: 1, background: C.accent, marginTop: 9, flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: C.textMid, fontWeight: 300, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <img src={IMG_SHOWROOM} alt="Шоурум МДК" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block", position: "relative", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 0, border: `1px solid ${C.accentFaint}`, transform: "translate(12px, 12px)", pointerEvents: "none", zIndex: 0 }} />
              <div style={{ position: "absolute", bottom: -16, left: -16, background: C.bgAlt, border: `1px solid ${C.accentFaint}`, padding: "20px 24px", zIndex: 2 }}>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, fontWeight: 600, color: C.text, lineHeight: 1 }}>17+</p>
                <p style={{ fontSize: 9, letterSpacing: 2, color: C.textMid, marginTop: 6, textTransform: "uppercase" }}>лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px" style={{ background: C.accentFaint }} />

      {/* ════════ КОЛЛЕКЦИИ ════════ */}
      <section id="collections" style={{ paddingTop: 100, paddingBottom: 100, background: C.bg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag index="02" label="Коллекции" C={C} />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 300, color: C.text, lineHeight: 1.15 }}>
              9 серий · 40+ моделей
            </h2>
            <p style={{ fontSize: 12, color: C.textMid, fontWeight: 300, maxWidth: 340, lineHeight: 1.7 }}>
              Полный прайс-лист с артикулами, фото и актуальными ценами — по запросу. Образцы материалов — бесплатно.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3" style={{ border: `1px solid ${C.accentFaint}` }}>
            {SERIES.map(({ name, models, tag }, idx) => (
              <div key={name}
                className="relative p-7 flex flex-col justify-between gap-6 cursor-default"
                style={{
                  borderRight: (idx + 1) % 3 !== 0 ? `1px solid ${C.accentFaint}` : "none",
                  borderBottom: idx < SERIES.length - 3 ? `1px solid ${C.accentFaint}` : "none",
                  background: C.bg, minHeight: 160, transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = C.bgHover)}
                onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
              >
                {tag && (
                  <span style={{ position: "absolute", top: 16, right: 16, fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: isDark ? C.bg : "#FAF6F3", background: C.accent, padding: "4px 10px" }}>{tag}</span>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontWeight: 500, color: C.text, lineHeight: 1 }}>{name}</p>
                    <p style={{ fontSize: 10, color: C.accentDim, marginTop: 6, letterSpacing: 1 }}>
                      {models} {models === 1 ? "модель" : models < 5 ? "модели" : "моделей"}
                    </p>
                  </div>
                  <DoorSVG col={C.accentDim} size={0.85} />
                </div>
                <div>
                  <div style={{ height: 1, background: C.accentFaint, marginBottom: 10 }} />
                  <p style={{ fontSize: 10, color: C.accentDim, letterSpacing: 0.5 }}>Эмаль · Декошпон · Патина</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a href="#contact"
              style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: C.accent, border: `1px solid ${isDark ? "rgba(201,160,176,0.3)" : "rgba(92,45,69,0.25)"}`, padding: "14px 40px", textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = C.accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = isDark ? "rgba(201,160,176,0.3)" : "rgba(92,45,69,0.25)")}
            >Запросить полный каталог</a>
          </div>
        </div>
      </section>

      {/* ════════ ЦИТАТА ════════ */}
      <section style={{ background: C.quoteSection, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${C.accentFaint}`, borderBottom: `1px solid ${C.accentFaint}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <DoorSVG col={isDark ? "rgba(201,160,176,0.18)" : "rgba(92,45,69,0.15)"} size={3.5} />
            <div>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 300, fontStyle: "italic", color: C.text, lineHeight: 1.4, marginBottom: 20 }}>
                «Дверь — это не просто конструкция.<br />Это первое ощущение от интерьера.»
              </p>
              <div className="flex items-center gap-4">
                <div style={{ width: 28, height: 1, background: C.accentMid, opacity: 0.5 }} />
                <span style={{ fontSize: 9, letterSpacing: 4, color: C.accentMid, textTransform: "uppercase" }}>МДК · Международная Дверная Компания</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ПРОИЗВОДСТВО ════════ */}
      <section id="production" style={{ paddingTop: 100, paddingBottom: 100, background: C.bg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag index="03" label="Производство" C={C} />

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(30px, 3.5vw, 50px)", fontWeight: 300, color: C.text, lineHeight: 1.2 }}>
              Полный цикл —<br />
              <em style={{ color: C.accent }}>от заготовки до упаковки</em>
            </h2>
            <div className="grid grid-cols-2 gap-px" style={{ background: C.accentFaint }}>
              {[{ v: "MDF", l: "Влагостойкие плиты" }, { v: "Эмаль", l: "Порошковое покрытие" }, { v: "RAL", l: "Покраска под заказ" }, { v: "ISO", l: "Контроль качества" }].map(({ v, l }) => (
                <div key={v} className="p-6 text-center" style={{ background: C.bg }}>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28, color: C.text }}>{v}</p>
                  <p style={{ fontSize: 9, color: C.textMid, marginTop: 4, letterSpacing: 1.5, textTransform: "uppercase" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: C.accentFaint }}>
            {FEATURES.map(({ num, title, desc }) => (
              <div key={num} className="p-8" style={{ background: C.bg, transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = C.bgHover)}
                onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span style={{ fontSize: 9, letterSpacing: 2, color: C.accentDim }}>{num}</span>
                  <div style={{ height: 1, flex: 1, background: C.accentFaint }} />
                </div>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, fontWeight: 500, color: C.text, marginBottom: 12, lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontSize: 12, fontWeight: 300, color: C.textMid, lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ПАРТНЁРАМ ════════ */}
      <section id="partners" style={{ paddingTop: 100, paddingBottom: 100, background: C.bgAlt, borderTop: `1px solid ${C.accentFaint}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag index="04" label="Партнёрам" C={C} />

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(30px, 3.5vw, 50px)", fontWeight: 300, color: C.text, lineHeight: 1.2 }}>
              Как начать<br /><em style={{ color: C.accent }}>сотрудничество</em>
            </h2>
            <p style={{ fontSize: 13, fontWeight: 300, color: C.textMid, lineHeight: 1.9, paddingTop: 12 }}>
              Мы работаем только с юридическими лицами и ИП. Открыты для новых дилеров, застройщиков и дизайн-студий.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-px" style={{ background: C.accentFaint }}>
            {PROCESS_STEPS.map(({ n, title, desc }) => (
              <div key={n} className="flex-1 p-7 flex flex-col gap-4" style={{ background: C.bgAlt }}>
                <div className="flex items-center gap-3">
                  <span style={{ width: 32, height: 32, border: `1px solid ${isDark ? "rgba(201,160,176,0.3)" : "rgba(92,45,69,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: C.accent, flexShrink: 0 }}>{n}</span>
                  <div style={{ height: 1, flex: 1, background: C.accentFaint }} />
                </div>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, color: C.text, fontWeight: 500 }}>{title}</p>
                <p style={{ fontSize: 11, fontWeight: 300, color: C.textMid, lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ КОНТАКТЫ ════════ */}
      <section id="contact" style={{ paddingTop: 100, paddingBottom: 100, background: C.bg, borderTop: `1px solid ${C.accentFaint}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag index="05" label="Контакты" C={C} />

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(30px, 3.5vw, 50px)", fontWeight: 300, color: C.text, lineHeight: 1.2, marginBottom: 32 }}>
                Запросить прайс<br /><em style={{ color: C.accent }}>или задать вопрос</em>
              </h2>
              <div className="flex flex-col gap-6">
                {[{ label: "Отдел продаж", value: "+7 (800) 000-00-00" }, { label: "E-mail", value: "b2b@mdk-doors.ru" }, { label: "Режим работы", value: "Пн–Пт, 9:00–18:00 МСК" }, { label: "Сайт", value: "mdk-doors.ru" }].map(({ label, value }) => (
                  <div key={label} style={{ borderBottom: `1px solid ${C.accentFaint}`, paddingBottom: 16 }}>
                    <p style={{ fontSize: 9, letterSpacing: 2.5, color: C.accentDim, textTransform: "uppercase", marginBottom: 6 }}>{label}</p>
                    <p style={{ fontSize: 16, color: C.text, fontWeight: 300 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {formSent ? (
                <div className="flex flex-col items-center justify-center text-center" style={{ border: `1px solid ${C.accentFaint}`, padding: "80px 40px", height: "100%" }}>
                  <DoorSVG col={C.accent} size={2.2} />
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28, color: C.text, marginTop: 28, marginBottom: 12 }}>Заявка отправлена</p>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.75, maxWidth: 280 }}>Менеджер свяжется с вами в течение 2 рабочих часов.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { key: "company" as const, label: "Название компании / ИП", required: true },
                    { key: "name" as const, label: "Контактное лицо", required: true },
                    { key: "phone" as const, label: "Телефон", required: true },
                    { key: "region" as const, label: "Регион работы", required: false },
                  ].map(({ key, label, required }) => (
                    <div key={key}>
                      <label style={{ display: "block", fontSize: 9, letterSpacing: 2.5, color: C.accentDim, textTransform: "uppercase", marginBottom: 8 }}>
                        {label}{required && <span style={{ color: C.accent }}> *</span>}
                      </label>
                      <input
                        type={key === "phone" ? "tel" : "text"}
                        required={required}
                        value={form[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: "100%", background: "transparent", border: `1px solid ${C.inputBorder}`, color: C.text, padding: "13px 16px", fontSize: 14, fontFamily: "Montserrat", fontWeight: 300, outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => (e.target.style.borderColor = C.inputBorderFocus)}
                        onBlur={e => (e.target.style.borderColor = C.inputBorder)}
                      />
                    </div>
                  ))}
                  <button type="submit"
                    style={{ marginTop: 8, background: C.accent, color: isDark ? C.bg : "#FAF6F3", border: "none", padding: "16px 40px", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontFamily: "Montserrat", fontWeight: 500, cursor: "pointer", transition: "opacity 0.2s", alignSelf: "flex-start" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >Отправить заявку</button>
                  <p style={{ fontSize: 10, color: C.accentDim, lineHeight: 1.7 }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Работаем только с юридическими лицами.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ПОДВАЛ ════════ */}
      <footer style={{ background: C.bgHover, borderTop: `1px solid ${C.accentFaint}`, paddingTop: 40, paddingBottom: 40 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <img src={LOGO_IMG} alt="МДК" style={{ height: 26, width: "auto", filter: isDark ? "none" : "brightness(0) saturate(100%) invert(12%) sepia(30%) saturate(800%) hue-rotate(290deg)" }} />
              <p style={{ fontSize: 10, color: C.accentDim, letterSpacing: 1 }}>Международная дверная компания</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href}
                  style={{ fontSize: 9, letterSpacing: 2, color: C.accentDim, textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.accentMid)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.accentDim)}
                >{label}</a>
              ))}
            </nav>
            <div className="flex flex-col gap-1 text-right">
              <p style={{ fontSize: 11, color: C.textMid }}>+7 (800) 000-00-00</p>
              <p style={{ fontSize: 11, color: C.accentDim }}>b2b@mdk-doors.ru</p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.accentFaint}`, marginTop: 32, paddingTop: 24 }}>
            <p style={{ fontSize: 10, color: C.accentDim, letterSpacing: 0.5 }}>© 2007–2026 МДК. Все права защищены. Только для юридических лиц.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}