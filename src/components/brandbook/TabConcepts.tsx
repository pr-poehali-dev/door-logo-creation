import {
  BRAND_TAGLINE,
  MDKLogo, Section,
  SymbolBaguette, SymbolArch, SymbolKeyhole, SymbolHinge,
} from "./BrandbookShared";

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
