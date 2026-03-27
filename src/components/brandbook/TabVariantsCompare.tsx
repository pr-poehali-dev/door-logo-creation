import {
  BRAND_NAME, BRAND_TAGLINE, BRAND_SLOGAN,
  MDKLogo, LogoFull, Section,
} from "./BrandbookShared";

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
