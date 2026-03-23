import { useState, useRef } from "react";

const TECH_INFO = {
  thickness: 40,
  stdWidths: "600 / 700 / 800",
  stdHeight: 2000,
  customWidth: "от 600 до 1000 мм (шаг 50 мм)",
  customHeight: "от 1900 до 2300 мм (шаг 50 мм)",
};

const COLORS_ENAMEL = ["Белый", "Кремовый", "Мокко"];

type Model = {
  name: string;
  alias?: string;
};

type Series = {
  id: string;
  title: string;
  models: Model[];
  options: { decosspan: boolean; patina: boolean };
  colors?: string[];
};

const SERIES: Series[] = [
  {
    id: "aelita",
    title: "Аэлита",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Аэлита 1", alias: "багет 3" },
      { name: "Аэлита 1 ДО", alias: "багет 3 ДО" },
      { name: "Аэлита 2", alias: "багет 1" },
      { name: "Аэлита 2 ДО", alias: "багет 1 ДО" },
      { name: "Аэлита 12", alias: "багет 1.3" },
      { name: "Аэлита 12 ДО", alias: "багет 1.3 ДО" },
      { name: "Аэлита 22", alias: "багет 1 двойная рамка" },
      { name: "Аэлита 22 ДО", alias: "багет 1 двойная рамка ДО" },
    ],
  },
  {
    id: "garmoniya",
    title: "Гармония",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Гармония 1" },
      { name: "Гармония 1 ДО" },
      { name: "Гармония 2", alias: "Гармония 3" },
      { name: "Гармония 2 ДО", alias: "Гармония 3 ДО" },
      { name: "Гармония 22", alias: "Вирджиния" },
      { name: "Гармония 22 ДО", alias: "Вирджиния ДО" },
    ],
  },
  {
    id: "gloriya",
    title: "Глория",
    options: { decosspan: true, patina: true },
    colors: COLORS_ENAMEL,
    models: [
      { name: "Глория 2", alias: "Глория 2" },
      { name: "Глория 2 ДО", alias: "Глория 2 ДО" },
      { name: "Глория 4", alias: "Виктория 2" },
      { name: "Глория 4 ДО", alias: "Виктория 2 ДО" },
      { name: "Глория 12", alias: "Багет MD 3" },
      { name: "Глория 12 ДО", alias: "Багет MD 3 ДО" },
      { name: "Глория 14", alias: "Афродита" },
      { name: "Глория 14 ДО", alias: "Афродита ДО" },
    ],
  },
  {
    id: "gratsiya",
    title: "Грация",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Грация 2", alias: "багет 8" },
      { name: "Грация 2 ДО", alias: "багет 8 ДО" },
      { name: "Грация 12", alias: "багет 8.1" },
      { name: "Грация 12 ДО", alias: "багет 8.1 ДО" },
    ],
  },
  {
    id: "london",
    title: "Лондон",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Лондон 1" },
      { name: "Лондон 1 ДО", alias: "багет 5.1 английская решётка" },
    ],
  },
  {
    id: "napol",
    title: "Неаполь",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Неаполь 1", alias: "багет Неаполь 1" },
      { name: "Неаполь 1 ДО", alias: "Неаполь 1 английская решётка" },
      { name: "Неаполь 2", alias: "багет Неаполь 2" },
      { name: "Неаполь 2 ДО", alias: "багет Неаполь 2 ДО" },
    ],
  },
  {
    id: "premium",
    title: "Премиум",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Премиум 1", alias: "багет Премиум 1" },
      { name: "Премиум 1 ДО", alias: "Премиум 1 английская решётка" },
      { name: "Премиум 2 ДО", alias: "Премиум 2 английская решётка" },
      { name: "Премиум 21", alias: "Премьер 9" },
      { name: "Премиум 22", alias: "Премьер 8" },
      { name: "Премиум 22 ДО", alias: "Премьер 8 ДО" },
    ],
  },
  {
    id: "stella",
    title: "Стелла",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Стелла 22" },
      { name: "Стелла 22 ДО", alias: "Стелла 2" },
    ],
  },
  {
    id: "extra",
    title: "Экстра",
    options: { decosspan: true, patina: true },
    models: [
      { name: "Экстра 2", alias: "багет 18" },
      { name: "Экстра 2 ДО" },
      { name: "Экстра 3", alias: "багет 4" },
      { name: "Экстра 3 ДО" },
      { name: "Экстра 12 ДО", alias: "багет 6.1" },
      { name: "Экстра 12 ДО (2)" },
    ],
  },
];

const NAV_ROWS = [
  ["Аэлита", "Грация", "Премиум"],
  ["Гармония", "Лондон", "Стелла"],
  ["Глория", "Неаполь", "Экстра"],
];

function TechTable() {
  return (
    <div className="mt-6 rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
      <div className="bg-brand-dark px-5 py-3 border-b border-brand-gold border-opacity-10">
        <p className="text-xs text-brand-stone tracking-widest uppercase">Техническая информация</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-brand-dark border-b border-brand-gold border-opacity-10">
              <th className="text-left px-4 py-3 text-brand-stone font-normal tracking-wider uppercase">Модели</th>
              <th className="text-center px-4 py-3 text-brand-stone font-normal tracking-wider uppercase">Толщина, мм</th>
              <th className="text-center px-4 py-3 text-brand-stone font-normal tracking-wider uppercase" colSpan={2}>Стандартные размеры</th>
              <th className="text-center px-4 py-3 text-brand-stone font-normal tracking-wider uppercase" colSpan={2}>Нестандартные размеры</th>
            </tr>
            <tr className="bg-brand-dark border-b border-brand-gold border-opacity-10">
              <th className="px-4 py-2" />
              <th className="px-4 py-2" />
              <th className="text-center px-4 py-2 text-brand-stone font-normal text-xs">Ширина, мм</th>
              <th className="text-center px-4 py-2 text-brand-stone font-normal text-xs">Высота, мм</th>
              <th className="text-center px-4 py-2 text-brand-stone font-normal text-xs">Ширина, мм</th>
              <th className="text-center px-4 py-2 text-brand-stone font-normal text-xs">Высота, мм</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-brand-charcoal">
              <td className="px-4 py-3 text-brand-cream">Все модели серии</td>
              <td className="px-4 py-3 text-center text-brand-gold font-mono">{TECH_INFO.thickness}</td>
              <td className="px-4 py-3 text-center text-brand-cream font-mono">{TECH_INFO.stdWidths}</td>
              <td className="px-4 py-3 text-center text-brand-cream font-mono">{TECH_INFO.stdHeight}</td>
              <td className="px-4 py-3 text-center text-brand-stone">{TECH_INFO.customWidth}</td>
              <td className="px-4 py-3 text-center text-brand-stone">{TECH_INFO.customHeight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PriceTable({ series }: { series: Series }) {
  const colColors = series.colors ?? ["Белый", "Кремовый", "Мокко"];

  return (
    <div className="rounded-lg overflow-hidden border border-brand-gold border-opacity-20">
      <div className="bg-brand-dark px-5 py-3 border-b border-brand-gold border-opacity-10 flex items-center justify-between">
        <p className="text-xs text-brand-stone tracking-widest uppercase">Стоимость</p>
        <p className="text-xs text-brand-gold opacity-60">— цены уточняются у менеджера —</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-brand-dark border-b border-brand-gold border-opacity-10">
              <th className="text-left px-4 py-3 text-brand-stone font-normal tracking-wider uppercase min-w-52">Модель</th>
              <th className="text-center px-3 py-3 text-brand-stone font-normal tracking-wider uppercase" colSpan={2}>Опция исполнения</th>
              <th className="text-center px-3 py-3 text-brand-stone font-normal tracking-wider uppercase">Вид багета</th>
              <th className="text-center px-3 py-3 text-brand-stone font-normal tracking-wider uppercase" colSpan={colColors.length}>Цвет покрытия</th>
            </tr>
            <tr className="bg-brand-dark border-b border-brand-gold border-opacity-10">
              <th className="px-4 py-2" />
              <th className="text-center px-3 py-2 text-brand-stone font-normal" style={{ fontSize: 10 }}>Декошпан</th>
              <th className="text-center px-3 py-2 text-brand-stone font-normal" style={{ fontSize: 10 }}>Патина</th>
              <th className="px-3 py-2" />
              {colColors.map((c) => (
                <th key={c} className="text-center px-3 py-2 text-brand-stone font-normal" style={{ fontSize: 10 }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {series.models.map((m, i) => (
              <tr
                key={m.name}
                className={`border-b border-brand-gold border-opacity-10 hover:bg-brand-gold hover:bg-opacity-5 transition-colors ${
                  i % 2 === 0 ? "bg-brand-charcoal" : "bg-brand-dark"
                }`}
              >
                <td className="px-4 py-3">
                  <p className="text-brand-cream">{m.name}</p>
                  {m.alias && <p className="text-brand-stone mt-0.5" style={{ fontSize: 10 }}>{m.alias}</p>}
                </td>
                <td className="px-3 py-3 text-center">
                  <div className="w-4 h-4 rounded border border-brand-gold border-opacity-30 mx-auto" />
                </td>
                <td className="px-3 py-3 text-center">
                  <div className="w-4 h-4 rounded border border-brand-gold border-opacity-30 mx-auto" />
                </td>
                <td className="px-3 py-3 text-center">
                  <div className="w-4 h-4 rounded border border-brand-gold border-opacity-30 mx-auto" />
                </td>
                {colColors.map((c) => (
                  <td key={c} className="px-3 py-3 text-center text-brand-stone">—</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SeriesBlock({ series, seriesRefs }: { series: Series; seriesRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>> }) {
  return (
    <div
      ref={(el) => { seriesRefs.current[series.id] = el; }}
      className="mb-16"
    >
      {/* Series header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-8 bg-brand-gold opacity-50" />
        <h2 className="font-display text-3xl text-brand-cream font-light tracking-[0.1em]">{series.title}</h2>
        <span className="font-sans text-xs text-brand-stone tracking-widest uppercase">серия</span>
        <div className="h-px flex-1 bg-brand-gold opacity-20" />
        <span className="text-xs text-brand-stone">{series.models.length} моделей</span>
      </div>

      <div className="space-y-5">
        <PriceTable series={series} />
        <TechTable />
      </div>
    </div>
  );
}

export default function SeriesCatalog() {
  const [activeSeries, setActiveSeries] = useState<string>("aelita");
  const seriesRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollTo = (id: string) => {
    setActiveSeries(id);
    const el = seriesRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const seriesById = Object.fromEntries(SERIES.map((s) => [s.title, s.id]));

  return (
    <div>
      {/* Navigator */}
      <div className="rounded-xl border border-brand-gold border-opacity-30 overflow-hidden mb-10 sticky top-16 z-10">
        <div className="bg-brand-charcoal px-6 py-3 border-b border-brand-gold border-opacity-20 flex items-center justify-between">
          <p className="font-sans text-xs text-brand-gold tracking-[0.25em] uppercase font-semibold">
            Навигатор по сериям
          </p>
          <p className="font-sans text-xs text-brand-stone">Багетные межкомнатные двери</p>
        </div>
        <div className="bg-brand-dark p-4">
          <div className="grid grid-cols-3 gap-2">
            {NAV_ROWS.map((row, ri) =>
              row.map((title) => {
                const id = seriesById[title];
                return (
                  <button
                    key={title}
                    onClick={() => scrollTo(id)}
                    className={`px-4 py-2.5 rounded text-xs tracking-wider uppercase transition-all duration-200 text-left ${
                      activeSeries === id
                        ? "bg-brand-gold text-brand-dark font-semibold"
                        : "bg-brand-charcoal text-brand-stone hover:text-brand-cream hover:bg-brand-gold hover:bg-opacity-10 border border-brand-gold border-opacity-10"
                    }`}
                  >
                    {title}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* All series */}
      <div>
        {SERIES.map((series) => (
          <SeriesBlock key={series.id} series={series} seriesRefs={seriesRefs} />
        ))}
      </div>
    </div>
  );
}
