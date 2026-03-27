import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";
const ORIGINAL_DOOR = "https://cdn.poehali.dev/files/085d36a1-30d2-408f-8776-6c7b3e6e2629.png";

const COLORS = [
  {
    name: "Ivory White",
    nameRu: "Слоновая кость",
    hex: "#F5F0E8",
    img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/b0874640-0304-42a8-ac32-e905430d2bb2.jpg",
    desc: "Классический кремово-белый — универсальное решение для любого интерьера",
  },
  {
    name: "Sage Green",
    nameRu: "Шалфей",
    hex: "#B5C4B1",
    img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/bbbc69fd-9446-43d6-af59-7451eca3f0de.jpg",
    desc: "Пастельный зелёный — природная элегантность и спокойствие",
  },
  {
    name: "Warm Greige",
    nameRu: "Гриж тёплый",
    hex: "#C8B89A",
    img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/d49cd855-5387-4284-bbf0-1bd5883368db.jpg",
    desc: "Тёплый бежево-серый — утончённость и уют в одном оттенке",
  },
  {
    name: "Dusty Lavender",
    nameRu: "Лаванда",
    hex: "#B0ADCC",
    img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/cdf807d3-e69a-4a2c-ae32-f6c588aa14a4.jpg",
    desc: "Пыльная лаванда — аристократичный характер и лёгкость",
  },
  {
    name: "Original",
    nameRu: "Оригинал",
    hex: "#7B7B9B",
    img: ORIGINAL_DOOR,
    desc: "Базовый сине-серый — строгость и современность",
  },
];

export default function DoorColors() {
  const [active, setActive] = useState(0);

  const C = COLORS[active];

  return (
    <div style={{ minHeight: "100vh", background: "#FAF6F3", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(250,246,243,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(92,45,69,0.12)",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <Link to="/vfd" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={LOGO_IMG} alt="VFD" style={{ height: 36, filter: "brightness(0.2)" }} />
        </Link>
        <nav style={{ display: "flex", gap: 8 }}>
          {[
            { label: "Главная", to: "/vfd" },
            { label: "Цветовые решения", to: "/door-colors" },
            { label: "В интерьере", to: "/door-interior" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 10,
                letterSpacing: 2,
                color: item.to === "/door-colors" ? "#5C2D45" : "#A07888",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderBottom: item.to === "/door-colors" ? "2px solid #5C2D45" : "2px solid transparent",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/door-interior"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 9,
            letterSpacing: 2,
            color: "#5C2D45",
            textDecoration: "none",
            textTransform: "uppercase",
            border: "1px solid rgba(92,45,69,0.4)",
            padding: "9px 18px",
          }}
        >
          В интерьере →
        </Link>
      </header>

      {/* Hero title */}
      <div style={{
        textAlign: "center",
        padding: "60px 40px 40px",
        borderBottom: "1px solid rgba(92,45,69,0.1)",
      }}>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 4, color: "#A07888", textTransform: "uppercase", marginBottom: 16 }}>
          Коллекция VFD
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#2B1520", letterSpacing: 2, margin: 0 }}>
          Цветовые решения
        </h1>
        <p style={{ fontSize: 15, color: "#6A3A4E", marginTop: 16, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
          Одна модель — пять настроений. Выберите оттенок, который станет акцентом вашего пространства.
        </p>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>
        {/* Door preview */}
        <div style={{ position: "sticky", top: 100 }}>
          <div style={{
            background: "#F0EBE6",
            borderRadius: 2,
            padding: "60px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 600,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* subtle floor line */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "30%",
              background: "linear-gradient(to top, rgba(200,184,154,0.3) 0%, transparent 100%)",
            }} />
            <img
              src={C.img}
              alt={C.nameRu}
              style={{
                maxHeight: 520,
                maxWidth: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                transition: "opacity 0.4s",
                filter: active === 4 ? "none" : "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
              }}
            />
          </div>
          {/* color swatch */}
          <div style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 24px",
            background: "#fff",
            border: "1px solid rgba(92,45,69,0.12)",
          }}>
            <div style={{
              width: 40, height: 40,
              background: C.hex,
              border: "1px solid rgba(0,0,0,0.08)",
              flexShrink: 0,
            }} />
            <div>
              <p style={{ margin: 0, fontFamily: "Montserrat, sans-serif", fontSize: 11, letterSpacing: 2, color: "#A07888", textTransform: "uppercase" }}>{C.name}</p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#6A3A4E" }}>{C.hex}</p>
            </div>
          </div>
        </div>

        {/* Color selector */}
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 3, color: "#A07888", textTransform: "uppercase", marginBottom: 32 }}>
            Выберите оттенок
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {COLORS.map((color, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 24px",
                  background: active === i ? "#F0DFE5" : "transparent",
                  border: active === i ? "1px solid rgba(92,45,69,0.25)" : "1px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  borderRadius: 1,
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = "#F7F0F3"; }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{
                  width: 48, height: 48,
                  background: color.hex,
                  border: active === i ? "2px solid #5C2D45" : "1px solid rgba(0,0,0,0.1)",
                  flexShrink: 0,
                  transition: "border 0.2s",
                }} />
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: active === i ? "#5C2D45" : "#2B1520",
                  }}>
                    {color.nameRu}
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 13, color: "#A07888", lineHeight: 1.5 }}>
                    {color.desc}
                  </p>
                </div>
                {active === i && (
                  <div style={{
                    width: 6, height: 6,
                    background: "#5C2D45",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Active color info */}
          <div style={{
            marginTop: 48,
            padding: "32px",
            background: "#fff",
            border: "1px solid rgba(92,45,69,0.12)",
          }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, letterSpacing: 3, color: "#A07888", textTransform: "uppercase", margin: "0 0 12px" }}>
              Выбранный цвет
            </p>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: "#2B1520", margin: "0 0 12px", letterSpacing: 1 }}>
              {C.nameRu}
            </h2>
            <p style={{ fontSize: 14, color: "#6A3A4E", lineHeight: 1.8, margin: "0 0 24px" }}>
              {C.desc}. Декоративная резьба «флоренция» подчёркивает объём и создаёт игру света и тени в любом освещении.
            </p>
            <button
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 10,
                letterSpacing: 2,
                color: "#FAF6F3",
                background: "#5C2D45",
                border: "none",
                padding: "14px 28px",
                cursor: "pointer",
                textTransform: "uppercase",
                width: "100%",
              }}
            >
              Заказать в этом цвете
            </button>
          </div>

          {/* CTA to interior */}
          <Link
            to="/door-interior"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
              padding: "20px 24px",
              background: "transparent",
              border: "1px solid rgba(92,45,69,0.2)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#F7F0F3"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 2, color: "#5C2D45", textTransform: "uppercase" }}>
              Посмотреть в интерьере
            </span>
            <span style={{ color: "#A07888", fontSize: 18 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
