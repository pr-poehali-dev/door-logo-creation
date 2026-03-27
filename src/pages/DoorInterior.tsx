import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_IMG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/bucket/cda9d4dd-4e94-41c1-bb91-7862111aed04.png";
const INTERIOR_BG = "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/fa6a64db-1e16-4f14-b44e-6bb4beb2cf21.jpg";
const ORIGINAL_DOOR = "https://cdn.poehali.dev/files/085d36a1-30d2-408f-8776-6c7b3e6e2629.png";

const DOOR_VARIANTS = [
  { name: "Слоновая кость", img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/b0874640-0304-42a8-ac32-e905430d2bb2.jpg", hex: "#F5F0E8" },
  { name: "Шалфей", img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/bbbc69fd-9446-43d6-af59-7451eca3f0de.jpg", hex: "#B5C4B1" },
  { name: "Гриж тёплый", img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/d49cd855-5387-4284-bbf0-1bd5883368db.jpg", hex: "#C8B89A" },
  { name: "Лаванда", img: "https://cdn.poehali.dev/projects/09f16a6e-be66-48d6-bebd-d73db1df54a7/files/cdf807d3-e69a-4a2c-ae32-f6c588aa14a4.jpg", hex: "#B0ADCC" },
  { name: "Оригинал", img: ORIGINAL_DOOR, hex: "#7B7B9B" },
];

const SPECS = [
  { label: "Высота", value: "2000–2400 мм" },
  { label: "Ширина", value: "700–900 мм" },
  { label: "Декор", value: "Резьба «Флоренция»" },
  { label: "Покрытие", value: "Матовая эмаль" },
  { label: "Конструкция", value: "Двупанельная" },
  { label: "Фурнитура", value: "Латунь / хром" },
];

export default function DoorInterior() {
  const [activeDoor, setActiveDoor] = useState(0);
  const door = DOOR_VARIANTS[activeDoor];

  return (
    <div style={{ minHeight: "100vh", background: "#1A1410", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(26,20,16,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,184,154,0.15)",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <Link to="/vfd" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={LOGO_IMG} alt="VFD" style={{ height: 36, filter: "brightness(0.9)" }} />
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
                color: item.to === "/door-interior" ? "#C8B89A" : "#7A6555",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderBottom: item.to === "/door-interior" ? "2px solid #C8B89A" : "2px solid transparent",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/door-colors"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 9,
            letterSpacing: 2,
            color: "#C8B89A",
            textDecoration: "none",
            textTransform: "uppercase",
            border: "1px solid rgba(200,184,154,0.3)",
            padding: "9px 18px",
          }}
        >
          ← Все цвета
        </Link>
      </header>

      {/* Hero section with interior */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex" }}>
        {/* Background interior */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${INTERIOR_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.55)",
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(26,20,16,0.92) 0%, rgba(26,20,16,0.3) 50%, rgba(26,20,16,0.1) 100%)",
        }} />

        {/* Door in scene */}
        <div style={{
          position: "absolute",
          right: "15%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          filter: "drop-shadow(-30px 0 60px rgba(0,0,0,0.7))",
        }}>
          <img
            src={door.img}
            alt={door.name}
            style={{
              height: "100%",
              objectFit: "contain",
              transition: "opacity 0.5s",
              mixBlendMode: activeDoor === 4 ? "normal" : "normal",
            }}
          />
        </div>

        {/* Left content */}
        <div style={{
          position: "relative", zIndex: 10,
          padding: "80px 60px",
          maxWidth: 540,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 4, color: "#C8B89A", textTransform: "uppercase", margin: "0 0 24px" }}>
            Коллекция VFD · Флоренция
          </p>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400, color: "#F0E8DC", letterSpacing: 2, lineHeight: 1.2, margin: "0 0 24px" }}>
            Дверь в<br />вашем доме
          </h1>
          <p style={{ fontSize: 15, color: "#A08878", lineHeight: 1.9, margin: "0 0 48px", maxWidth: 400 }}>
            Строгая классика с характером. Двупанельная конструкция с декором «Флоренция» органично вписывается в интерьеры от неоклассики до ар-деко.
          </p>

          {/* Door color switcher */}
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, letterSpacing: 3, color: "#7A6555", textTransform: "uppercase", margin: "0 0 16px" }}>
              Цвет двери
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {DOOR_VARIANTS.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDoor(i)}
                  title={v.name}
                  style={{
                    width: 44, height: 44,
                    background: v.hex,
                    border: activeDoor === i ? "2px solid #C8B89A" : "2px solid rgba(200,184,154,0.2)",
                    cursor: "pointer",
                    transition: "border 0.2s, transform 0.2s",
                    transform: activeDoor === i ? "scale(1.15)" : "scale(1)",
                    outline: activeDoor === i ? "1px solid rgba(200,184,154,0.5)" : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#C8B89A", margin: "12px 0 0", fontFamily: "Montserrat, sans-serif", letterSpacing: 2 }}>
              {door.name}
            </p>
          </div>

          <button
            style={{
              marginTop: 40,
              fontFamily: "Montserrat, sans-serif",
              fontSize: 10,
              letterSpacing: 2,
              color: "#1A1410",
              background: "#C8B89A",
              border: "none",
              padding: "16px 32px",
              cursor: "pointer",
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            Получить консультацию
          </button>
        </div>
      </section>

      {/* Specs section */}
      <section style={{ padding: "80px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Specs list */}
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 4, color: "#C8B89A", textTransform: "uppercase", margin: "0 0 32px" }}>
              Технические характеристики
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {SPECS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(200,184,154,0.1)",
                  }}
                >
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, letterSpacing: 2, color: "#7A6555", textTransform: "uppercase" }}>{s.label}</span>
                  <span style={{ fontSize: 14, color: "#F0E8DC" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div style={{
            padding: "48px",
            border: "1px solid rgba(200,184,154,0.15)",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: -1, left: 48, right: 48, height: 1,
              background: "#C8B89A",
            }} />
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "#F0E8DC", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 32px" }}>
              «Дверь — это первое, что видят гости. Она задаёт тон всему пространству.»
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, letterSpacing: 3, color: "#C8B89A", textTransform: "uppercase", margin: 0 }}>
              Команда VFD
            </p>
            <div style={{ marginTop: 40 }}>
              <p style={{ fontSize: 13, color: "#7A6555", lineHeight: 1.8, margin: 0 }}>
                Каждая дверь изготавливается под заказ с учётом ваших пожеланий: размер, цвет, фурнитура. Срок производства — от 21 рабочего дня.
              </p>
            </div>
            <Link
              to="/door-colors"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 32,
                fontFamily: "Montserrat, sans-serif",
                fontSize: 10,
                letterSpacing: 2,
                color: "#C8B89A",
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(200,184,154,0.3)",
                paddingBottom: 2,
              }}
            >
              Все цветовые решения →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
