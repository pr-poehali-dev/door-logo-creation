import { BRAND_TAGLINE, IMG_MOCKUP, MDKLogo, LogoMark, LogoFull, Section } from "./BrandbookShared";

export const TabUsage = () => (
  <Section id="usage" label="04 · Примеры применения">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
        <div className="bg-brand-charcoal p-8 flex items-center justify-center">
          <div
            className="w-72 h-40 rounded-md relative overflow-hidden shadow-2xl"
            style={{ background: "#3B1F2B", border: "1px solid rgba(201,160,176,0.3)" }}
          >
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
          <p className="text-xs text-brand-stone tracking-wider uppercase">Визитная карточка</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
        <div className="bg-brand-dark p-8 flex items-center justify-center">
          <div
            className="rounded-sm flex flex-col items-center justify-center px-12 py-6"
            style={{ background: "#3B1F2B", border: "2px solid rgba(201,160,176,0.5)", minWidth: 200 }}
          >
            <LogoMark size={0.8} />
            <div className="mt-3 text-center">
              <MDKLogo col="cream" size={0.35} />
              <p className="font-sans text-xs text-brand-stone tracking-[0.2em] uppercase mt-1">{BRAND_TAGLINE}</p>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
          <p className="text-xs text-brand-stone tracking-wider uppercase">Вывеска / Витрина</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
        <div className="p-8 flex items-center justify-center" style={{ background: "#F0DFE5" }}>
          <div
            className="w-36 h-36 rounded-full flex flex-col items-center justify-center"
            style={{ border: "2px solid #3B1F2B" }}
          >
            <LogoMark dark size={0.5} />
            <MDKLogo col="dark" size={0.22} />
          </div>
        </div>
        <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
          <p className="text-xs text-brand-stone tracking-wider uppercase">Печать / Штамп</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
        <div className="relative h-48 overflow-hidden">
          <img
            src={IMG_MOCKUP}
            alt="Мокап на визитке"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-brand-dark opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <LogoFull variant="dark" size={0.8} />
          </div>
        </div>
        <div className="px-5 py-3 border-t border-brand-gold border-opacity-10">
          <p className="text-xs text-brand-stone tracking-wider uppercase">Брендированные материалы</p>
        </div>
      </div>
    </div>

    <div className="mt-8 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
      <p className="text-xs text-brand-stone tracking-widest uppercase mb-5">Охранная зона логотипа</p>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 border border-dashed border-brand-gold opacity-40 rounded" style={{ margin: -20 }} />
          <LogoFull variant="dark" size={0.9} />
        </div>
      </div>
      <p className="text-xs text-brand-stone mt-8 text-center">
        Минимальный отступ от края логотипа — высота буквы «М» в названии бренда
      </p>
    </div>
  </Section>
);
