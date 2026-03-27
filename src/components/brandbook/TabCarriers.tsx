import { BRAND_TAGLINE, BRAND_SLOGAN, MDKLogo, Section } from "./BrandbookShared";

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
              ["Вывеска (свет.)", "Пудра #F0DFE5", "Баклажан", "Слива #5C2D45"],
              ["Аватар соцсетей", "Баклажан #3B1F2B", "Пудра", "—"],
              ["Пост / сторис", "Баклажан→Слива", "Пудра + слоган", "Кварц"],
              ["Бланк документа", "Пудра #F0DFE5", "Баклажан", "Слива"],
              ["Конверт", "Баклажан #3B1F2B", "Пудра", "Слива"],
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
