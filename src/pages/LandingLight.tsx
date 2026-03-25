import { useState } from "react";

const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";
const IMG_DOOR = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fec91c7e-21e1-4d36-b11a-aa8af0b97337.jpg";
const IMG_SHOWROOM = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg";

// Цветовая палитра — светлый вариант
const C = {
  bg:        "#FAF7F5",   // Почти белый, тёплый
  bgAlt:     "#F3EDE9",   // Кремовый, чуть темнее
  bgDark:    "#EDE3DC",   // Тёплый бежевый (для карточек/статов)
  accent:    "#8B3A5A",   // Баклажан — акцент
  accentSft: "#C9A0B0",   // Пыльно-розовый
  text:      "#2B1520",   // Тёмный баклажан — основной текст
  textMid:   "#6B3B50",   // Средний — вторичный текст
  textLight: "#A07888",   // Бледный — подписи
  border:    "rgba(139,58,90,0.12)",
  divider:   "rgba(43,21,32,0.08)",
};

const Logo = ({ size = 1 }: { size?: number }) => (
  <img src={LOGO_IMG} alt="МДК" style={{ width: 180 * size, height: "auto", display: "block" }} />
);

const DoorIcon = ({ col = C.accentSft, size = 1 }: { col?: string; size?: number }) => (
  <svg width={32 * size} height={40 * size} viewBox="0 0 32 40" fill="none">
    <rect x={1} y={1} width={30} height={38} rx={1} stroke={col} strokeWidth={1.5} fill="none" />
    <rect x={4} y={4} width={24} height={32} rx={0.5} stroke={col} strokeWidth={0.75} strokeDasharray="3 2" fill="none" opacity={0.4} />
    <circle cx={25} cy={20} r={2} fill={col} />
    <line x1={8} y1={20} x2={21} y2={20} stroke={col} strokeWidth={1.2} />
  </svg>
);

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="flex items-center gap-5 mb-14">
    <span style={{ fontFamily: "Montserrat", fontSize: 10, letterSpacing: 4, color: C.accentSft, fontWeight: 400 }} className="uppercase">{index}</span>
    <div className="h-px flex-1" style={{ background: C.divider }} />
    <span style={{ fontFamily: "Montserrat", fontSize: 10, letterSpacing: 4, color: C.textLight, fontWeight: 300 }} className="uppercase">{title}</span>
  </div>
);

const STATS = [
  { value: "17+", label: "лет на рынке" },
  { value: "9", label: "серий коллекций" },
  { value: "40+", label: "моделей в каталоге" },
  { value: "B2B", label: "только оптовые партнёры" },
];

const ADVANTAGES = [
  { title: "Стабильное производство", body: "Собственное производство в России. Фиксированные сроки отгрузки — 10 рабочих дней для стандартных позиций." },
  { title: "Гибкие условия сотрудничества", body: "Индивидуальные объёмные скидки, отсрочка платежа для проверенных партнёров, персональный менеджер." },
  { title: "Нестандартные размеры", body: "Ширина от 600 до 1000 мм, высота от 1900 до 2300 мм с шагом 50 мм — под любой проём." },
  { title: "Широкая линейка отделки", body: "Эмаль, декошпан, патина. 3 базовых цвета и нанесение по RAL под заказ от 20 единиц." },
  { title: "Документация и сертификаты", body: "Полный пакет документов: сертификаты соответствия, декларации, технические паспорта на каждую серию." },
  { title: "Маркетинговая поддержка", body: "Каталоги, образцы материалов, брендированные POS-материалы для вашей точки продаж." },
];

const SERIES = [
  { id: "Аэлита", models: 8, finish: "Эмаль / Декошпан / Патина" },
  { id: "Гармония", models: 6, finish: "Эмаль / Декошпан / Патина" },
  { id: "Глория", models: 8, finish: "Эмаль / Декошпан / Патина" },
  { id: "Грация", models: 4, finish: "Эмаль / Декошпан / Патина" },
  { id: "Лондон", models: 2, finish: "Эмаль / Декошпан / Патина" },
  { id: "Неаполь", models: 4, finish: "Эмаль / Декошпан / Патина" },
  { id: "Премиум", models: 6, finish: "Эмаль / Декошпан / Патина" },
  { id: "Стелла", models: 2, finish: "Эмаль / Декошпан / Патина" },
  { id: "Экстра", models: 6, finish: "Эмаль / Декошпан / Патина" },
];

const CONTACTS = [
  { label: "Отдел продаж", value: "+7 (800) 000-00-00" },
  { label: "E-mail", value: "b2b@mdk-doors.ru" },
  { label: "Сайт", value: "mdk-doors.ru" },
  { label: "Режим работы", value: "Пн–Пт, 9:00–18:00 МСК" },
];

export default function LandingLight({ onSwitchTheme }: { onSwitchTheme?: () => void }) {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ company: "", name: "", phone: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: C.bg, color: C.text }}>

      {/* ─── ШАПКА ─────────────────────────────────────────────────────────── */}
      <header style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <Logo size={0.72} />
          <nav className="hidden md:flex items-center gap-10">
            {[["Коллекции", "#collections"], ["Условия", "#terms"], ["Контакты", "#contact"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontFamily: "Montserrat", fontSize: 10, letterSpacing: 3, color: C.textMid, textDecoration: "none" }}
                className="uppercase transition-colors duration-200 hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {onSwitchTheme && (
              <button
                onClick={onSwitchTheme}
                title="Тёмный вариант"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 9,
                  letterSpacing: 2,
                  color: C.textMid,
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "9px 16px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
              >
                <span style={{ fontSize: 12 }}>☾</span> Тёмный
              </button>
            )}
            <a
              href="#contact"
              style={{
                fontFamily: "Montserrat",
                fontSize: 10,
                letterSpacing: 2,
                color: "#FAF7F5",
                background: C.accent,
                padding: "10px 24px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Стать партнёром
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* фото-фон */}
        <div className="absolute inset-0">
          <img src={IMG_DOOR} alt="" className="w-full h-full object-cover" style={{ opacity: 0.08 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${C.bg} 45%, rgba(250,247,245,0.7) 100%)` }} />
        </div>

        {/* тонкая вертикальная линия слева */}
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${C.border} 30%, ${C.border} 70%, transparent)` }} />

        {/* акцентный блок справа */}
        <div className="absolute right-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, transparent, ${C.accentSft}33 40%, ${C.accentSft}33 60%, transparent)` }} />

        <div className="relative max-w-6xl mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "92vh", paddingTop: 80, paddingBottom: 160 }}>
          <div className="max-w-2xl">
            {/* бейдж */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px" style={{ background: C.accent }} />
              <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 5, color: C.accent }} className="uppercase">
                Оптовые поставки · B2B
              </span>
            </div>

            {/* заголовок */}
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "clamp(52px, 7vw, 96px)",
                fontWeight: 300,
                color: C.text,
                lineHeight: 1.05,
                letterSpacing: 2,
                marginBottom: 32,
              }}
            >
              Двери в&nbsp;эмалевом
              <br />
              покрытии
              <br />
              <span style={{ color: C.accent, fontStyle: "italic" }}>с&nbsp;накладным багетом</span>
            </h1>

            {/* подзаголовок */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 300,
                fontSize: 14,
                color: C.textMid,
                lineHeight: 1.8,
                maxWidth: 480,
                marginBottom: 52,
              }}
            >
              Производство и оптовые поставки межкомнатных дверей.
              Работаем с дилерами, застройщиками и дизайн-студиями.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: "#FAF7F5",
                  background: C.accent,
                  padding: "16px 40px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Стать партнёром
              </a>
              <a
                href="#collections"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: C.accent,
                  background: "transparent",
                  border: `1px solid ${C.accent}`,
                  padding: "16px 40px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Узнать подробнее
              </a>
            </div>
          </div>
        </div>

        {/* статы — нижняя полоса */}
        <div className="absolute bottom-0 left-0 right-0" style={{ background: C.bgDark, borderTop: `1px solid ${C.border}` }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: C.border }}>
              {STATS.map(({ value, label }) => (
                <div key={label} className="px-8 py-6 text-center">
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 36, fontWeight: 600, color: C.text, lineHeight: 1 }}>
                    {value}
                  </p>
                  <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 2, color: C.textLight, marginTop: 8, textTransform: "uppercase" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРЕИМУЩЕСТВА ──────────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: C.bg }} id="terms">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel index="01" title="Условия сотрудничества" />

          <div className="grid md:grid-cols-3 gap-px" style={{ background: C.border }}>
            {ADVANTAGES.map(({ title, body }, i) => (
              <div
                key={title}
                className="p-8 flex flex-col gap-4 transition-colors duration-300"
                style={{ background: C.bg }}
                onMouseEnter={e => (e.currentTarget.style.background = C.bgAlt)}
                onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontFamily: "Montserrat", fontSize: 9, color: C.accentSft, letterSpacing: 2 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1" style={{ background: C.divider }} />
                </div>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, fontWeight: 500, color: C.text, lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: 300, color: C.textMid, lineHeight: 1.75 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ЦИТАТА ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" style={{ background: C.bgDark }}>
        <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, ${C.border} 80px, ${C.border} 81px)` }} />
        <div className="relative max-w-6xl mx-auto px-8 text-center">
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              color: C.text,
              fontStyle: "italic",
              letterSpacing: 1,
              lineHeight: 1.4,
            }}
          >
            Лучшим людям — лучшие двери
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-px w-16" style={{ background: C.accentSft }} />
            <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 4, color: C.textLight }} className="uppercase">
              МДК · Международная Дверная Компания
            </span>
            <div className="h-px w-16" style={{ background: C.accentSft }} />
          </div>
        </div>
      </section>

      {/* ─── КОЛЛЕКЦИИ ─────────────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: C.bgAlt }} id="collections">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel index="02" title="Коллекции" />

          <div className="grid md:grid-cols-3 gap-px mb-12" style={{ background: C.border }}>
            {SERIES.map(({ id, models, finish }) => (
              <div
                key={id}
                className="p-7 flex flex-col gap-3 cursor-default transition-colors duration-200"
                style={{ background: C.bgAlt }}
                onMouseEnter={e => (e.currentTarget.style.background = C.bgDark)}
                onMouseLeave={e => (e.currentTarget.style.background = C.bgAlt)}
              >
                <div className="flex items-start justify-between">
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 24, fontWeight: 500, color: C.text }}>
                    {id}
                  </p>
                  <DoorIcon col={C.accentSft} size={0.7} />
                </div>
                <p style={{ fontFamily: "Montserrat", fontSize: 10, color: C.textLight, letterSpacing: 1 }}>
                  {models} {models === 1 ? "модель" : models < 5 ? "модели" : "моделей"}
                </p>
                <div className="h-px" style={{ background: C.divider }} />
                <p style={{ fontFamily: "Montserrat", fontSize: 10, color: C.textMid, letterSpacing: 0.5 }}>
                  {finish}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: "Montserrat", fontSize: 11, color: C.textLight }}>
              Полный прайс-лист с артикулами и актуальными ценами — по запросу
            </p>
            <a
              href="#contact"
              style={{
                fontFamily: "Montserrat",
                fontSize: 10,
                letterSpacing: 3,
                color: C.accent,
                border: `1px solid ${C.accent}`,
                padding: "12px 32px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Запросить прайс
            </a>
          </div>
        </div>
      </section>

      {/* ─── ФОТО-БЛОК ─────────────────────────────────────────────────────── */}
      <section className="relative h-80 overflow-hidden">
        <img src={IMG_SHOWROOM} alt="Шоурум МДК" className="w-full h-full object-cover" style={{ opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${C.bgAlt} 0%, transparent 40%, ${C.bgAlt} 100%)` }} />
        <div className="absolute inset-0" style={{ background: "rgba(250,247,245,0.35)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Logo size={0.65} />
            <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 4, color: C.textMid, marginTop: 12, textTransform: "uppercase" }}>
              Международная дверная компания
            </p>
          </div>
        </div>
      </section>

      {/* ─── ФОРМА ЗАПРОСА ─────────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: C.bg }} id="contact">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel index="03" title="Стать партнёром" />

          <div className="grid md:grid-cols-2 gap-24">
            {/* Левая колонка */}
            <div>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: C.text,
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                Начните
                <br />
                сотрудничество
              </h2>
              <p style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: 48 }}>
                Оставьте заявку — в течение одного рабочего дня менеджер свяжется
                с&nbsp;вами, ответит на вопросы и пришлёт актуальный прайс-лист.
              </p>

              <div className="space-y-6">
                {CONTACTS.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 3, color: C.accentSft, textTransform: "uppercase" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, color: C.text }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка — форма */}
            {formSent ? (
              <div className="flex items-start gap-6 pt-2">
                <div className="w-8 h-px mt-3 flex-shrink-0" style={{ background: C.accent }} />
                <div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28, color: C.text, marginBottom: 8 }}>
                    Заявка отправлена
                  </p>
                  <p style={{ fontFamily: "Montserrat", fontSize: 12, color: C.textMid, lineHeight: 1.7 }}>
                    Мы свяжемся с вами в&nbsp;течение одного рабочего дня.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: 48 }}
              >
                {[
                  { key: "company", label: "Компания", placeholder: "ООО «Название»", type: "text" },
                  { key: "name", label: "Контактное лицо", placeholder: "Имя и фамилия", type: "text" },
                  { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key} className="flex flex-col gap-2">
                    <label style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 3, color: C.accentSft, textTransform: "uppercase" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      required={key !== "comment"}
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: C.text,
                        background: "transparent",
                        border: "none",
                        borderBottom: `1px solid ${C.border}`,
                        padding: "10px 0",
                        outline: "none",
                        width: "100%",
                      }}
                      onFocus={e => (e.target.style.borderBottomColor = C.accent)}
                      onBlur={e => (e.target.style.borderBottomColor = C.border)}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 3, color: C.accentSft, textTransform: "uppercase" }}>
                    Комментарий
                  </label>
                  <textarea
                    placeholder="Регион, объём, вопросы..."
                    rows={3}
                    value={form.comment}
                    onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: C.text,
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${C.border}`,
                      padding: "10px 0",
                      outline: "none",
                      resize: "none",
                      width: "100%",
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = C.accent)}
                    onBlur={e => (e.target.style.borderBottomColor = C.border)}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 transition-opacity duration-200 hover:opacity-80"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 10,
                    letterSpacing: 3,
                    color: "#FAF7F5",
                    background: C.accent,
                    border: "none",
                    padding: "16px 40px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    alignSelf: "flex-start",
                  }}
                >
                  Отправить заявку
                </button>

                <p style={{ fontFamily: "Montserrat", fontSize: 9, color: C.textLight, lineHeight: 1.6, marginTop: 4 }}>
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── ФУТЕР ─────────────────────────────────────────────────────────── */}
      <footer style={{ background: C.bgDark, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Logo size={0.55} />
            <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 3, color: C.textLight, textTransform: "uppercase" }}>
              Международная дверная компания
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <a
              href="/brandbook"
              style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 2, color: C.textLight, textDecoration: "none", textTransform: "uppercase" }}
              className="transition-opacity hover:opacity-70"
            >
              Брендбук
            </a>
            <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: 1, color: C.textLight }}>
              © {new Date().getFullYear()} МДК · Все права защищены
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}