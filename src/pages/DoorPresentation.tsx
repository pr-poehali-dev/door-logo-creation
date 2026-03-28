import { MDKLogo, BRAND_TAGLINE, BRAND_SLOGAN, SymbolBaguette, SymbolArch } from "@/components/brandbook/BrandbookShared";

// ─── Данные конкретной двери ──────────────────────────────────────────────────

const DOOR_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/431e6e68-b066-4c75-8434-21de02c825bd.png";

const door = {
  model:       "Классик Эмаль «Ампир»",
  series:      "Premium Line",
  article:     "MDK-PE-0241",
  tagline:     "Элегантность в каждой детали",
  description: "Межкомнатная дверь в матовом эмалевом покрытии с фрезерованным накладным багетом — образец классической эстетики для современного интерьера. Полотно выполнено в светлой гамме с чётким геометрическим рельефом, придающим двери объём и благородство.",
  specs: [
    { key: "Покрытие",    val: "Эмаль матовая, износостойкая" },
    { key: "Декор",       val: "Накладной багет «Ампир», MDF" },
    { key: "Полотно",     val: "HDF, массив сосны" },
    { key: "Цвет",        val: "RAL 9003 Белый" },
    { key: "Размеры",     val: "2000 × 700 / 800 / 900 мм" },
    { key: "Толщина",     val: "40 мм" },
    { key: "Петли",       val: "Скрытые / накладные (опция)" },
    { key: "Остекление",  val: "Возможно (сатинат / матовое)" },
  ],
  advantages: [
    { icon: "✦", title: "Долговечное покрытие", desc: "Эмаль устойчива к царапинам, влаге и бытовым чистящим средствам — сохраняет вид годами." },
    { icon: "✦", title: "Классический силуэт",  desc: "Фрезерованный рельеф багета вписывается в классику, неоклассику и современный интерьер." },
    { icon: "✦", title: "Широкий цветовой ряд", desc: "Доступно 12 эмалевых оттенков RAL под заказ — от белого до антрацита и насыщенного бордо." },
    { icon: "✦", title: "Оптовая программа",    desc: "Минимальная партия от 10 полотен. Индивидуальные цены и отсрочка для партнёров." },
    { icon: "✦", title: "Сертификаты качества", desc: "Соответствие ГОСТ, пожарный сертификат E30 по запросу. Гарантия 5 лет." },
    { icon: "✦", title: "Быстрая поставка",     desc: "Стандартные размеры в наличии на складе. Отгрузка за 3–5 рабочих дней." },
  ],
  price: "от 28 500 ₽",
  priceWholesale: "от 18 900 ₽",
};

// ─── Шаблон карточки двери (переиспользуемый) ────────────────────────────────

interface DoorData {
  model:            string;
  series:           string;
  article:          string;
  tagline:          string;
  description:      string;
  specs:            { key: string; val: string }[];
  advantages:       { icon: string; title: string; desc: string }[];
  price:            string;
  priceWholesale:   string;
  imgUrl:           string;
}

export function DoorPresentationTemplate({ door, imgUrl }: { door: DoorData; imgUrl: string }) {
  return (
    <div style={{ background: "#200D17", color: "#F0DFE5", fontFamily: "Montserrat, sans-serif", minHeight: "100vh" }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ minHeight: 600, background: "#200D17" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,160,176,0.08) 0%, transparent 70%)`,
        }} />

        {/* Фоновый паттерн */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A0B0 40px, #C9A0B0 41px)`,
        }} />

        <div className="relative max-w-6xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-16 items-center">

          {/* Фото двери */}
          <div className="flex-shrink-0 relative" style={{ width: 340 }}>
            <div className="absolute inset-0 scale-110" style={{
              background: "radial-gradient(ellipse at center, rgba(201,160,176,0.12) 0%, transparent 70%)",
            }} />
            <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
              <img
                src={imgUrl}
                alt={door.model}
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", minHeight: 420, objectPosition: "center" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fec91c7e-21e1-4d36-b11a-aa8af0b97337.jpg";
                }}
              />
              {/* Бейдж серии */}
              <div className="absolute top-4 left-4">
                <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", background: "#C9B84C", color: "#200D17", padding: "4px 10px", borderRadius: 2, fontWeight: 700 }}>
                  {door.series}
                </span>
              </div>
              {/* Артикул */}
              <div className="absolute bottom-4 right-4">
                <span style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.15em", color: "rgba(201,160,176,0.5)", textTransform: "uppercase" }}>
                  {door.article}
                </span>
              </div>
            </div>
          </div>

          {/* Текстовый блок */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-8">
              <MDKLogo size={0.22} />
              <span style={{ fontFamily: "Montserrat", fontSize: 8, letterSpacing: "0.25em", color: "#A07888", textTransform: "uppercase" }}>{BRAND_TAGLINE}</span>
            </div>

            <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.3em", color: "#C9A0B0", textTransform: "uppercase", marginBottom: 12 }}>
              {door.series}
            </p>
            <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 52, fontWeight: 300, color: "#F0DFE5", lineHeight: 1.1, marginBottom: 8 }}>
              {door.model}
            </h1>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, color: "#C9A0B0", fontStyle: "italic", marginBottom: 24 }}>
              {door.tagline}
            </p>

            <div style={{ height: 1, background: "rgba(201,160,176,0.2)", marginBottom: 24 }} />

            <p style={{ fontFamily: "Montserrat", fontSize: 12, color: "#A07888", lineHeight: 1.8, marginBottom: 32 }}>
              {door.description}
            </p>

            {/* Спецификации */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {door.specs.map(({ key, val }) => (
                <div key={key} className="flex gap-3">
                  <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#5C2D45", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0, paddingTop: 1, width: 80 }}>{key}</span>
                  <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#E8C9D3" }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Цена */}
            <div className="mt-10 flex items-end gap-10">
              <div>
                <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.2em", color: "#A07888", textTransform: "uppercase", marginBottom: 4 }}>Розничная цена</p>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 34, color: "#C9A0B0" }}>{door.price}</p>
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.2em", color: "#5C2D45", textTransform: "uppercase", marginBottom: 4 }}>Партнёрская цена</p>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 34, color: "#C9B84C" }}>{door.priceWholesale}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ПРЕИМУЩЕСТВА ────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(201,160,176,0.1)", background: "#2B1520" }}>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="flex items-center gap-4 mb-12">
            <SymbolBaguette col="rgba(201,160,176,0.2)" size={0.5} />
            <div>
              <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.3em", color: "#C9A0B0", textTransform: "uppercase", marginBottom: 4 }}>Почему выбирают</p>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 36, color: "#F0DFE5", fontWeight: 300 }}>Преимущества модели</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {door.advantages.map(({ icon, title, desc }) => (
              <div key={title} className="p-6 rounded-lg" style={{ background: "#200D17", border: "1px solid rgba(201,160,176,0.1)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <span style={{ color: "#C9A0B0", fontSize: 14, marginTop: 2, flexShrink: 0 }}>{icon}</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 20, color: "#F0DFE5" }}>{title}</h3>
                </div>
                <p style={{ fontFamily: "Montserrat", fontSize: 11, color: "#A07888", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ИНТЕРЬЕРНАЯ СЕКЦИЯ ──────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(201,160,176,0.1)", background: "#200D17" }}>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: "Montserrat", fontSize: 9, letterSpacing: "0.3em", color: "#C9A0B0", textTransform: "uppercase", marginBottom: 16 }}>Применение в интерьере</p>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 40, color: "#F0DFE5", fontWeight: 300, lineHeight: 1.2, marginBottom: 24 }}>
                Гармония в каждом пространстве
              </h2>
              <p style={{ fontFamily: "Montserrat", fontSize: 12, color: "#A07888", lineHeight: 1.8, marginBottom: 32 }}>
                Светлое эмалевое полотно визуально расширяет пространство и создаёт ощущение воздушности. Идеально для гостиных, спален и коридоров — как в классических, так и в современных интерьерах.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Классика", "Неоклассика", "Современный", "Скандинавский", "Прованс"].map(style => (
                  <span key={style} style={{
                    fontFamily: "Montserrat", fontSize: 10, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: "#C9A0B0",
                    border: "1px solid rgba(201,160,176,0.25)", padding: "6px 14px", borderRadius: 2,
                  }}>{style}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 opacity-20">
                <SymbolArch col="#C9A0B0" size={1.2} />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.15)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/faffcab9-610a41f8-be7a-adefe2227f7c.jpg"
                  alt="Дверь в интерьере"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(201,160,176,0.15)", background: "#3B1F2B" }}>
        <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, color: "#F0DFE5", fontWeight: 300 }}>Готовы сделать заказ?</p>
            <p style={{ fontFamily: "Montserrat", fontSize: 11, color: "#A07888", marginTop: 8 }}>Свяжитесь с менеджером для расчёта партнёрской стоимости</p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+78001234567"
              style={{ fontFamily: "Montserrat", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#200D17", background: "#C9A0B0", padding: "14px 28px", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}
            >
              Позвонить
            </a>
            <a
              href="/"
              style={{ fontFamily: "Montserrat", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A0B0", border: "1px solid rgba(201,160,176,0.4)", padding: "14px 28px", borderRadius: 4, textDecoration: "none" }}
            >
              Все модели
            </a>
          </div>
        </div>
      </div>

      {/* ── ФУТЕР ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(201,160,176,0.08)", background: "#200D17" }}>
        <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between flex-wrap gap-4">
          <MDKLogo size={0.16} />
          <p style={{ fontFamily: "Montserrat", fontSize: 10, color: "#5C2D45", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {BRAND_SLOGAN}
          </p>
          <p style={{ fontFamily: "Montserrat", fontSize: 9, color: "#3B1F2B" }}>
            {door.article} · {door.series}
          </p>
        </div>
      </div>

    </div>
  );
}

// ─── Страница конкретной двери ────────────────────────────────────────────────

export default function DoorPresentation() {
  return (
    <DoorPresentationTemplate
      door={{ ...door, imgUrl: DOOR_IMG }}
      imgUrl={DOOR_IMG}
    />
  );
}
