// Вкладки брендбука: concepts, variants, compare, palette, preview
import {
  BRAND_NAME, BRAND_TAGLINE, BRAND_SLOGAN, colors,
  MDKLogo, LogoMark, LogoFull, Section,
  SymbolBaguette, SymbolArch, SymbolKeyhole, SymbolHinge,
} from "./BrandbookShared";

// ─── CONCEPTS ────────────────────────────────────────────────────────────────

export const TabConcepts = () => (
  <Section id="concepts" label="Символы · Без букв">
    <p className="text-brand-stone text-sm mb-10">4 концепции символа — без текста и аббревиатур. Каждый считывается через форму и ассоциацию с дверью.</p>

    <div className="grid grid-cols-2 gap-4 mb-4">
      {[
        {
          Symbol: SymbolBaguette,
          title: "Профиль багета",
          sub: "Сечение рамки сверху",
          desc: "Внешний прямоугольник с внутренним скошенным контуром — ровно так выглядит багетная рамка в разрезе. Узнаваемо для профессионала, красиво для всех остальных.",
          note: "Геометрия · Абстракция"
        },
        {
          Symbol: SymbolArch,
          title: "Дверная арка",
          sub: "Дверной проём с полукруглым верхом",
          desc: "Классический архитектурный проём — арка. Мгновенно читается как дверь, даже без подписи. Двойной контур даёт намёк на багет.",
          note: "Архитектура · Классика"
        },
        {
          Symbol: SymbolKeyhole,
          title: "Замочная скважина",
          sub: "Круг + треугольник = вход",
          desc: "Круг и вертикальный клин снизу — силуэт скважины. Говорит о двери косвенно: через ключ, доступ, приватность. Лаконично до предела.",
          note: "Символика · Современно"
        },
        {
          Symbol: SymbolHinge,
          title: "Дверная петля",
          sub: "Три пластины — деталь, известная каждому",
          desc: "Стилизованная петля из трёх пластин с отверстиями. Профессиональный символ, который выделяет среди конкурентов — никто так не делал.",
          note: "Деталь · Оригинально"
        },
      ].map(({ Symbol, title, sub, desc, note }, i) => (
        <div key={i} className="rounded-2xl overflow-hidden border border-brand-gold border-opacity-15 flex flex-col">
          <div className="flex flex-col items-center justify-center py-16 gap-8 flex-1" style={{ background: "#200D17" }}>
            <Symbol col="#F0DFE5" size={1.15} />
            <div className="text-center px-6">
              <MDKLogo col="cream" size={0.38} />
              <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5.5, color: "#6A3A4E", letterSpacing: 2.5, marginTop: 6, textTransform: "uppercase" }}>Международная дверная компания</p>
            </div>
          </div>
          <div className="flex items-center justify-center py-10" style={{ background: "#F0DFE5" }}>
            <Symbol col="#3B1F2B" size={0.7} />
          </div>
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

    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.15)" }}>
      <div className="relative flex flex-col items-center justify-center py-20 overflow-hidden" style={{ background: "#200D17" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9A0B0" strokeWidth="1"/>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C9A0B0" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative flex flex-col items-center gap-10">
          <svg width={110} height={132} viewBox="0 0 80 96" fill="none" style={{ filter: "drop-shadow(0 0 32px rgba(201,160,176,0.18))" }}>
            <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C9A0B0" strokeWidth={2} fill="none"/>
            <rect x={10} y={8} width={60} height={80} rx={1} stroke="#C9A0B0" strokeWidth={1} strokeDasharray="4 2" fill="none" opacity={0.35}/>
            <circle cx={64} cy={48} r={4} fill="#C9A0B0"/>
            <line x1={18} y1={48} x2={56} y2={48} stroke="#C9A0B0" strokeWidth={1.5}/>
            <rect x={22} y={22} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.25}/>
            <rect x={22} y={54} width={36} height={20} rx={1} stroke="#F0DFE5" strokeWidth={1} fill="none" opacity={0.25}/>
          </svg>
          <div className="flex flex-col items-center gap-3">
            <MDKLogo col="cream" size={0.52} />
            <div style={{ width: 200, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,160,176,0.4), transparent)" }} />
            <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 8, letterSpacing: 4.5, color: "#6A3A4E", textTransform: "uppercase", textAlign: "center" }}>
              {BRAND_TAGLINE}
            </p>
          </div>
        </div>
      </div>

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

      <div className="px-5 py-4 bg-brand-charcoal flex items-center justify-between">
        <div>
          <p className="text-brand-cream text-sm font-medium">Фирменный знак · Дверь</p>
          <p className="text-xs text-brand-stone mt-0.5">Силуэт двери как основной символ бренда</p>
        </div>
        <span className="text-xs text-brand-gold tracking-wider opacity-70">Знак + Логотип</span>
      </div>
    </div>
  </Section>
);

// ─── VARIANTS ────────────────────────────────────────────────────────────────

export const TabVariants = () => (
  <Section id="variants" label="01 · Знак МДК">
    <p className="text-brand-stone text-sm mb-10">
      Буквы М, Д, К состыкованы вплотную — диагональные срезы на стыках создают единый монолитный блок.
    </p>

    <div className="rounded-2xl mb-4 flex flex-col items-center justify-center gap-10 overflow-hidden" style={{ background: "#200D17", padding: "64px 40px" }}>
      <MDKLogo col="cream" size={1.0} />
      <div className="text-center">
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 11, color: "#F0DFE5", letterSpacing: 8, textTransform: "uppercase" }}>
          {BRAND_TAGLINE}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#3B1F2B" }}>
        <MDKLogo col="cream" size={0.55} />
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#F0DFE5", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "#6A3A4E" }}>Пудра</p>
      </div>
      <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#3B1F2B" }}>
        <MDKLogo col="gold" size={0.55} />
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#C9A0B0", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "#6A3A4E" }}>Кварц</p>
      </div>
      <div className="rounded-xl flex flex-col items-center justify-center gap-6 py-12 px-4" style={{ background: "#F0DFE5" }}>
        <MDKLogo col="dark" size={0.55} />
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#3B1F2B", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>Инверсия</p>
      </div>
    </div>

    <div className="rounded-2xl mb-4 flex items-center justify-center gap-10 overflow-hidden px-12 py-14" style={{ background: "#200D17" }}>
      <MDKLogo col="cream" size={0.6} />
      <div style={{ width: 1, height: 48, background: "rgba(201,160,176,0.3)" }} />
      <div>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 32, color: "#F0DFE5", letterSpacing: 10, lineHeight: 1 }}>{BRAND_NAME}</p>
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#6A3A4E", letterSpacing: 3, marginTop: 8, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
      </div>
    </div>

    <div className="rounded-2xl flex items-center justify-center gap-10 overflow-hidden px-12 py-14" style={{ background: "#200D17" }}>
      <MDKLogo col="gold" size={0.6} />
      <div style={{ width: 1, height: 48, background: "rgba(201,160,176,0.3)" }} />
      <div>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400, fontSize: 32, color: "#C9A0B0", letterSpacing: 10, lineHeight: 1 }}>{BRAND_NAME}</p>
        <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#6A3A4E", letterSpacing: 3, marginTop: 8, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
      </div>
    </div>
  </Section>
);

// ─── COMPARE ─────────────────────────────────────────────────────────────────

export const TabCompare = () => (
  <Section id="compare" label="00 · Сравнение палитр">
    <div className="mb-10 flex flex-col gap-1">
      <p className="text-brand-cream text-sm">Выбран <strong style={{ color: "#C9A0B0" }}>Вариант Б — Баклажан + Пудра</strong>. Ниже показано сравнение с отклонённым вариантом А для справки.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {/* Вариант А — Антрацит + Золото (отклонён) */}
      <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-30 opacity-50">
        <div className="px-5 py-3 flex items-center justify-between" style={{ background: "#0F0E0C", borderBottom: "1px solid rgba(200,169,110,0.15)" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C8A96E" }}>Вариант А</span>
          <span className="text-xs tracking-wider uppercase" style={{ color: "#8A8070" }}>Антрацит + Золото</span>
        </div>
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
        <div className="flex h-6">
          {["#3B1F2B","#5C2D45","#A07888","#C9A0B0","#E8C9D3","#F0DFE5"].map(h => (
            <div key={h} className="flex-1" style={{ background: h }} />
          ))}
        </div>
        <div className="px-5 py-4" style={{ background: "#3B1F2B" }}>
          <p className="text-xs mb-3" style={{ color: "#A07888" }}>Характер: <span style={{ color: "#F0DFE5" }}>теплота, изысканность, женственная сила</span></p>
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

    {/* Визитки — сравнение */}
    <div className="grid md:grid-cols-2 gap-4">
      {/* Вариант А — визитка */}
      <div className="rounded-xl overflow-hidden opacity-50" style={{ border: "1px solid rgba(200,169,110,0.25)" }}>
        <div className="bg-brand-charcoal p-8 flex items-center justify-center">
          <div className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl" style={{ background: "#0F0E0C", border: "1px solid rgba(200,169,110,0.3)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C8A96E, transparent 50%)" }} />
            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-3">
                <svg width={22} height={26} viewBox="0 0 80 96" fill="none">
                  <rect x={4} y={2} width={72} height={92} rx={2} stroke="#C8A96E" strokeWidth={2} fill="none"/>
                  <circle cx={64} cy={48} r={4} fill="#C8A96E"/>
                </svg>
                <div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: 18, color: "#F5EFE0", letterSpacing: 4, lineHeight: 1 }}>{BRAND_NAME}</p>
                  <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 5, color: "#8A8070", letterSpacing: 2, marginTop: 3, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-5 text-right">
              <p style={{ fontFamily: "Montserrat", fontSize: 10, color: "#C8A96E" }}>+7 (800) 000-00-00</p>
              <p style={{ fontFamily: "Montserrat", fontSize: 10, color: "#8A8070", marginTop: 2 }}>mdk-doors.ru</p>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
          <p className="text-xs text-brand-stone tracking-wider uppercase">А · Визитка</p>
        </div>
      </div>

      {/* Вариант Б — визитка */}
      <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
        <div className="bg-brand-charcoal p-8 flex items-center justify-center">
          <div className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl" style={{ background: "#3B1F2B", border: "1px solid rgba(201,160,176,0.3)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A0B0, transparent 50%)" }} />
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
          <p className="text-xs text-brand-stone tracking-wider uppercase">✓ Б · Визитка</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-1">
      <p className="text-center text-xs tracking-widest uppercase line-through" style={{ color: "#4A3A30" }}>А · Визитка</p>
      <p className="text-center text-xs tracking-widest uppercase font-semibold" style={{ color: "#C9A0B0" }}>✓ Б · Визитка</p>
    </div>
  </Section>
);

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
