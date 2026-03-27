// Вкладки брендбука: usage, carriers, catalog, series, site, site-light
import SeriesCatalog from "@/components/SeriesCatalog";
import {
  BRAND_TAGLINE, BRAND_SLOGAN, IMG_MOCKUP, IMG_DOOR,
  MDKLogo, LogoMark, LogoFull, Section, products,
} from "./BrandbookShared";

// ─── USAGE ────────────────────────────────────────────────────────────────────

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

// ─── CARRIERS ─────────────────────────────────────────────────────────────────

export const TabCarriers = () => (
  <Section id="carriers" label="05б · Правила применения на носителях">
    <p className="text-brand-stone text-sm mb-10">
      Как использовать фирменный стиль на каждом типе носителя — цвета, сочетания, ограничения.
    </p>

    <div className="flex gap-6 mb-10 flex-wrap">
      {[
        { col: "#3B1F2B", label: "Баклажан", role: "Основной тёмный фон" },
        { col: "#C9A0B0", label: "Кварц", role: "Акцентный цвет" },
        { col: "#F0DFE5", label: "Пудра", role: "Светлый фон / инверсия" },
        { col: "#A07888", label: "Пепельная роза", role: "Вспомогательный текст" },
        { col: "#5C2D45", label: "Слива", role: "Тёмный акцент / рамки" },
      ].map(({ col, label, role }) => (
        <div key={col} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-sm flex-shrink-0" style={{ background: col }} />
          <div>
            <p className="text-xs text-brand-cream leading-none">{label}</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>{role}</p>
          </div>
        </div>
      ))}
    </div>

    {/* ВЫВЕСКА */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>01</span>
        <span className="text-brand-cream text-sm font-medium">Вывеска / Витрина</span>
        <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <div className="rounded-xl overflow-hidden">
          <div className="flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#3B1F2B", border: "2px solid rgba(201,160,176,0.3)" }}>
            <MDKLogo size={0.45} />
            <div className="h-px w-16" style={{ background: "rgba(201,160,176,0.4)" }} />
            <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#A07888", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>Международная дверная компания</p>
          </div>
          <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
            <p className="text-xs" style={{ color: "#C9A0B0" }}>Основной</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Баклажан + Пудра</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <div className="flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#F0DFE5", border: "2px solid rgba(92,45,69,0.2)" }}>
            <MDKLogo size={0.45} />
            <div className="h-px w-16" style={{ background: "rgba(92,45,69,0.3)" }} />
            <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 7, color: "#A07888", letterSpacing: 3, textTransform: "uppercase", textAlign: "center" }}>Международная дверная компания</p>
          </div>
          <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
            <p className="text-xs" style={{ color: "#C9A0B0" }}>Инверсия</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Пудра + Баклажан</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-60">
          <div className="relative flex flex-col items-center justify-center py-12 px-6 gap-4" style={{ background: "#888", border: "2px dashed rgba(255,100,100,0.4)" }}>
            <MDKLogo size={0.45} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 rotate-12" style={{ background: "rgba(255,80,80,0.7)" }} />
            </div>
          </div>
          <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
            <p className="text-xs" style={{ color: "#cc6060" }}>Не использовать</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Произвольный фон</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
        <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для вывески</p>
        <p style={{ color: "#A07888" }}>Фон — только <span style={{ color: "#F0DFE5" }}>Баклажан #3B1F2B</span> или <span style={{ color: "#F0DFE5" }}>Пудра #F0DFE5</span>. Минимальная высота логотипа на вывеске — 60 мм. Охранная зона — 1× высота буквы «М» со всех сторон.</p>
      </div>
    </div>

    {/* СОЦСЕТИ */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>02</span>
        <span className="text-brand-cream text-sm font-medium">Социальные сети</span>
        <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        <div className="flex flex-col gap-2">
          <div className="rounded-2xl flex items-center justify-center aspect-square" style={{ background: "#3B1F2B", border: "1.5px solid rgba(201,160,176,0.25)" }}>
            <MDKLogo size={0.32} />
          </div>
          <p className="text-xs text-center" style={{ color: "#A07888" }}>Аватар · 400×400</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-xl flex flex-col items-center justify-center aspect-square gap-3 px-4" style={{ background: "linear-gradient(145deg, #2B1520 0%, #3B1F2B 100%)" }}>
            <MDKLogo size={0.28} />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: "italic", color: "#C9A0B0", fontSize: 9, textAlign: "center", letterSpacing: 1 }}>{BRAND_SLOGAN}</p>
          </div>
          <p className="text-xs text-center" style={{ color: "#A07888" }}>Пост · 1080×1080</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-xl flex flex-col items-center justify-center gap-4 px-4 py-6" style={{ background: "linear-gradient(180deg, #200D17 0%, #5C2D45 100%)", aspectRatio: "9/16", minHeight: 120 }}>
            <MDKLogo size={0.22} />
            <div className="h-px w-10" style={{ background: "rgba(201,160,176,0.4)" }} />
            <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#A07888", letterSpacing: 2, textTransform: "uppercase", textAlign: "center" }}>{BRAND_TAGLINE}</p>
          </div>
          <p className="text-xs text-center" style={{ color: "#A07888" }}>Сторис · 1080×1920</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-xl flex items-center justify-center px-4" style={{ background: "#3B1F2B", aspectRatio: "16/9", border: "1px solid rgba(201,160,176,0.2)" }}>
            <MDKLogo size={0.26} />
          </div>
          <p className="text-xs text-center" style={{ color: "#A07888" }}>Обложка · 1920×1080</p>
        </div>
      </div>
      <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
        <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для соцсетей</p>
        <p style={{ color: "#A07888" }}>На аватаре — только знак без подписи. В постах слоган набирается <span style={{ color: "#F0DFE5" }}>Cormorant Garamond Italic</span>. Хэштеги и геометка — <span style={{ color: "#F0DFE5" }}>Montserrat Light</span>, цвет Пепельная роза.</p>
      </div>
    </div>

    {/* ДОКУМЕНТЫ */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>03</span>
        <span className="text-brand-cream text-sm font-medium">Документы / Бланки</span>
        <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-3">
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
          <div className="px-6 pt-6 pb-4" style={{ background: "#F0DFE5" }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <MDKLogo size={0.26} />
                <p style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 6, color: "#A07888", letterSpacing: 2, marginTop: 4, textTransform: "uppercase" }}>{BRAND_TAGLINE}</p>
              </div>
              <div className="text-right">
                <p style={{ fontFamily: "Montserrat", fontSize: 8, color: "#A07888" }}>mdk-doors.ru</p>
                <p style={{ fontFamily: "Montserrat", fontSize: 8, color: "#A07888", marginTop: 2 }}>+7 (800) 000-00-00</p>
              </div>
            </div>
            <div className="h-px mb-4" style={{ background: "rgba(92,45,69,0.2)" }} />
            <div className="space-y-1.5">
              {["Коммерческое предложение", "Договор поставки", "Счёт на оплату"].map(t => (
                <div key={t} className="h-2 rounded-sm" style={{ background: "rgba(92,45,69,0.1)", width: t.length * 5 }} />
              ))}
            </div>
            <div className="mt-4 h-px" style={{ background: "rgba(92,45,69,0.15)" }} />
            <div className="mt-3 flex justify-end">
              <p style={{ fontFamily: "Montserrat", fontSize: 6, color: "#A07888", letterSpacing: 1 }}>МДК · {new Date().getFullYear()}</p>
            </div>
          </div>
          <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
            <p className="text-xs" style={{ color: "#C9A0B0" }}>Бланк документа</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Пудровый фон · логотип тёмный</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
          <div className="px-6 py-8 flex flex-col justify-between gap-6" style={{ background: "#3B1F2B", minHeight: 160 }}>
            <div className="flex items-center justify-between">
              <MDKLogo size={0.22} />
              <div className="w-10 h-6 rounded-sm" style={{ background: "#5C2D45", border: "1px solid rgba(201,160,176,0.2)" }} />
            </div>
            <div className="space-y-1">
              {["Кому:", "Адрес получателя"].map((l) => (
                <div key={l} className="flex gap-2 items-center">
                  <span style={{ fontFamily: "Montserrat", fontSize: 7, color: "#6A3A4E" }}>{l}</span>
                  <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Montserrat", fontSize: 6.5, color: "#6A3A4E", letterSpacing: 1 }}>mdk-doors.ru · +7 (800) 000-00-00</p>
          </div>
          <div className="px-4 py-2 text-center" style={{ background: "#2B1520" }}>
            <p className="text-xs" style={{ color: "#C9A0B0" }}>Конверт / упаковка</p>
            <p className="text-xs mt-0.5" style={{ color: "#6A3A4E" }}>Баклажан · логотип пудровый</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg px-5 py-4 text-xs" style={{ background: "#2B1520", borderLeft: "3px solid #5C2D45" }}>
        <p style={{ color: "#C9A0B0" }} className="mb-1">Правила для документов</p>
        <p style={{ color: "#A07888" }}>Шрифт основного текста — <span style={{ color: "#F0DFE5" }}>Montserrat Regular 10pt</span>. Заголовки разделов — <span style={{ color: "#F0DFE5" }}>Cormorant Garamond 14pt</span>. Цвет текста документа — не фирменный, стандартный чёрный #1A1A1A.</p>
      </div>
    </div>

    {/* СВОДНАЯ ТАБЛИЦА */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A0B0" }}>04</span>
        <span className="text-brand-cream text-sm font-medium">Сводные правила</span>
        <div className="h-px flex-1" style={{ background: "rgba(201,160,176,0.15)" }} />
      </div>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(201,160,176,0.2)" }}>
        <table className="w-full text-xs">
          <thead>
            <tr style={{ background: "#3B1F2B", borderBottom: "1px solid rgba(201,160,176,0.15)" }}>
              <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Носитель</th>
              <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Фон</th>
              <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Логотип</th>
              <th className="text-left px-5 py-3 font-normal tracking-widest uppercase" style={{ color: "#A07888" }}>Акцент</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Вывеска (улица)", "Баклажан #3B1F2B", "Пудра", "Кварц #C9A0B0"],
              ["Вывеска (интерьер)", "Пудра #F0DFE5", "Баклажан", "Слива #5C2D45"],
              ["Аватар соцсетей", "Баклажан #3B1F2B", "Пудра", "—"],
              ["Пост / сторис", "Градиент тёмный", "Пудра", "Кварц"],
              ["Обложка ВК/ФБ", "Баклажан #3B1F2B", "Пудра", "Кварц"],
              ["Бланк документа", "Пудра #F0DFE5", "Баклажан", "Слива"],
              ["Конверт / упаковка", "Баклажан #3B1F2B", "Пудра", "Слива"],
              ["Визитная карточка", "Баклажан #3B1F2B", "Пудра", "Кварц"],
              ["Печать / штамп", "Пудра #F0DFE5", "Баклажан", "—"],
            ].map(([carrier, bg, logo, accent], i) => (
              <tr key={carrier} style={{ background: i % 2 === 0 ? "#2B1520" : "#321826", borderBottom: "1px solid rgba(201,160,176,0.08)" }}>
                <td className="px-5 py-3" style={{ color: "#F0DFE5" }}>{carrier}</td>
                <td className="px-5 py-3 font-mono" style={{ color: "#A07888" }}>{bg}</td>
                <td className="px-5 py-3" style={{ color: "#C9A0B0" }}>{logo}</td>
                <td className="px-5 py-3" style={{ color: "#A07888" }}>{accent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Section>
);

// ─── CATALOG ──────────────────────────────────────────────────────────────────

export const TabCatalog = () => (
  <Section id="catalog" label="05 · Продуктовые карточки">
    <div className="rounded-xl overflow-hidden border border-brand-gold border-opacity-20 mb-6">
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden min-h-72 flex items-center justify-center" style={{ background: "#F0DFE5" }}>
          <img src={IMG_DOOR} alt="Дверь в эмалевом покрытии" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(to right, transparent, #F0DFE5)" }} />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-gold text-brand-dark text-xs font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-sm">
              Premium Line
            </span>
          </div>
        </div>
        <div className="bg-brand-charcoal p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MDKLogo col="cream" size={0.28} />
              <p className="font-sans text-xs text-brand-stone tracking-widest uppercase" style={{ fontSize: 8 }}>{BRAND_TAGLINE}</p>
            </div>
            <h3 className="font-display text-3xl text-brand-cream font-light mb-1">Классик Эмаль</h3>
            <p className="font-sans text-xs text-brand-gold tracking-widest uppercase mb-6">Флагманская модель</p>
            <div className="space-y-3">
              {[
                ["Покрытие", "Эмаль глянец, износостойкая"],
                ["Декор", "Накладной багет «Ампир»"],
                ["Цвет", "RAL 9003 Белый / под заказ"],
                ["Полотно", "HDF, массив сосны"],
                ["Размеры", "2000×700, 2000×800, 2000×900"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <span className="text-xs text-brand-stone uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">{k}</span>
                  <span className="text-xs text-brand-cream">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-brand-gold border-opacity-20 flex items-end justify-between">
            <div>
              <p className="text-xs text-brand-stone uppercase tracking-wider mb-1">Цена</p>
              <p className="font-display text-2xl text-brand-gold">от 32 500 ₽</p>
            </div>
            <p className="font-display text-xs text-brand-stone italic">{BRAND_SLOGAN}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((p) => (
        <div key={p.name} className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20 bg-brand-charcoal flex flex-col">
          <div className="relative h-48 bg-brand-dark overflow-hidden flex items-center justify-center">
            <img src={IMG_DOOR} alt={p.name} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
            <div className="absolute top-3 right-3">
              <LogoMark size={0.3} />
            </div>
            <div className="absolute bottom-3 left-4">
              <span className="font-sans text-xs text-brand-gold tracking-widest uppercase opacity-70">{p.series}</span>
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h4 className="font-display text-xl text-brand-cream mb-3">{p.name}</h4>
            <div className="space-y-2 flex-1">
              <div className="flex justify-between">
                <span className="text-xs text-brand-stone">Покрытие</span>
                <span className="text-xs text-brand-cream">{p.finish}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-brand-stone">Декор</span>
                <span className="text-xs text-brand-cream text-right max-w-32">{p.bagette}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-brand-stone">Цвет</span>
                <span className="text-xs text-brand-cream">{p.color}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-brand-gold border-opacity-20">
              <p className="font-display text-xl text-brand-gold">{p.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 rounded-lg border border-brand-gold border-opacity-20 p-8 bg-brand-charcoal">
      <p className="text-xs text-brand-stone tracking-widest uppercase mb-5">Палитра эмалевых покрытий</p>
      <div className="flex flex-wrap gap-4">
        {[
          { name: "RAL 9003", label: "Белый", color: "#F4F4F4" },
          { name: "RAL 9010", label: "Чисто-белый", color: "#FEFEFE" },
          { name: "RAL 7044", label: "Серый шёлк", color: "#B8B4A8" },
          { name: "RAL 1013", label: "Жемчужный", color: "#EDE8D9" },
          { name: "RAL 7016", label: "Антрацит", color: "#383E42" },
          { name: "RAL 3005", label: "Бордо", color: "#5E1A1E" },
        ].map((ec) => (
          <div key={ec.name} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-brand-gold border-opacity-30 flex-shrink-0" style={{ background: ec.color }} />
            <div>
              <p className="text-xs text-brand-cream">{ec.label}</p>
              <p className="text-xs text-brand-stone font-mono">{ec.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ─── SERIES ───────────────────────────────────────────────────────────────────

export const TabSeries = () => (
  <Section id="series" label="06 · Каталог серий">
    <SeriesCatalog />
  </Section>
);

// ─── SITE ─────────────────────────────────────────────────────────────────────

export const TabSite = ({ siteViewMode, setSiteViewMode }: {
  siteViewMode: "desktop" | "mobile";
  setSiteViewMode: (m: "desktop" | "mobile") => void;
}) => (
  <Section id="site" label="07 · Сайт · B2B-главная">
    <p className="text-brand-stone text-sm mb-8">
      Главная страница сайта в стилистике брендбука — для оптовых партнёров и дилеров.
    </p>

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
        href="/"
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
          <span style={{ fontFamily: "Montserrat", fontSize: 10, color: "#A07888", letterSpacing: 0.5 }}>mdk-doors.ru</span>
        </div>
      </div>
      <div
        className="relative overflow-hidden mx-auto transition-all duration-300"
        style={{
          width: siteViewMode === "mobile" ? 390 : "100%",
          height: siteViewMode === "mobile" ? 700 : 720,
          background: "#200D17",
        }}
      >
        <iframe src="/" title="МДК — B2B сайт" style={{ width: "100%", height: "100%", border: "none", display: "block" }} scrolling="yes" />
      </div>
    </div>

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
