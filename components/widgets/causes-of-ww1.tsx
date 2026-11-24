"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type ScenarioId = "historical" | "no-blank-cheque" | "no-russian-mob" | "spare-belgium";

interface CrisisStep {
  date: string;
  day: number;
  title: string;
  actor: string;
  detail: string;
  warCount: number;
  status: Record<"serbia" | "austria" | "russia" | "germany" | "france" | "belgium" | "britain", "peace" | "alert" | "mobilised" | "war">;
}

const HISTORICAL_STEPS: CrisisStep[] = [
  {
    date: "28 June",
    day: 0,
    title: "Assassination in Sarajevo",
    actor: "Black Hand / Princip",
    detail:
      "Gavrilo Princip kills Archduke Franz Ferdinand and Sophie in Sarajevo. Europe is shocked, yet no army mobilises yet — diplomacy still has room to work.",
    warCount: 0,
    status: { serbia: "alert", austria: "alert", russia: "peace", germany: "peace", france: "peace", belgium: "peace", britain: "peace" },
  },
  {
    date: "5 July",
    day: 7,
    title: "Germany's 'Blank Cheque'",
    actor: "Germany",
    detail:
      "Kaiser Wilhelm II promises Austria-Hungary unconditional support against Serbia, gambling Russia will back down as in 1908. Vienna now feels free to crush Serbia.",
    warCount: 0,
    status: { serbia: "alert", austria: "alert", russia: "alert", germany: "alert", france: "peace", belgium: "peace", britain: "peace" },
  },
  {
    date: "23 July",
    day: 25,
    title: "Austrian 48-Hour Ultimatum",
    actor: "Austria-Hungary",
    detail:
      "Vienna delivers ten ferocious demands designed to be rejected. Serbia accepts nine of ten, refusing only Austrian police operating on sovereign Serbian soil.",
    warCount: 0,
    status: { serbia: "mobilised", austria: "mobilised", russia: "alert", germany: "alert", france: "alert", belgium: "peace", britain: "peace" },
  },
  {
    date: "28 July",
    day: 30,
    title: "Austria-Hungary Declares War on Serbia",
    actor: "Austria-Hungary",
    detail:
      "Austrian artillery shells Belgrade. What started as a terrorist murder is now a shooting war in the Balkans, forcing Russia to choose between Serbia and humiliation.",
    warCount: 2,
    status: { serbia: "war", austria: "war", russia: "alert", germany: "alert", france: "alert", belgium: "peace", britain: "peace" },
  },
  {
    date: "30 July",
    day: 32,
    title: "Russia Orders Full Mobilisation",
    actor: "Russia",
    detail:
      "Refusing another 1908 defeat, Tsar Nicholas II orders full mobilisation along both Austrian and German borders. Germany's 6-week Schlieffen countdown begins ticking!",
    warCount: 2,
    status: { serbia: "war", austria: "war", russia: "mobilised", germany: "mobilised", france: "alert", belgium: "peace", britain: "alert" },
  },
  {
    date: "1 August",
    day: 34,
    title: "Germany Declares War on Russia",
    actor: "Germany",
    detail:
      "Convinced that waiting will let Russia crush the Schlieffen Plan, Germany declares war on Russia. France begins mobilising to honour its 1894 alliance.",
    warCount: 4,
    status: { serbia: "war", austria: "war", russia: "war", germany: "war", france: "mobilised", belgium: "alert", britain: "alert" },
  },
  {
    date: "3 August",
    day: 36,
    title: "Germany Declares War on France",
    actor: "Germany",
    detail:
      "Executing the Schlieffen timetable, Germany declares war on France and demands 'free passage' through neutral Belgium. King Albert I refuses.",
    warCount: 5,
    status: { serbia: "war", austria: "war", russia: "war", germany: "war", france: "war", belgium: "mobilised", britain: "alert" },
  },
  {
    date: "4 August",
    day: 37,
    title: "Belgium Invaded — Britain Enters",
    actor: "Germany & Britain",
    detail:
      "German armies cross into Belgium, mocking the 1839 Treaty of London as a 'scrap of paper'. Britain declares war at 11 pm — Europe's local Balkan crisis is now a World War.",
    warCount: 7,
    status: { serbia: "war", austria: "war", russia: "war", germany: "war", france: "war", belgium: "war", britain: "war" },
  },
];

const SCENARIO_INFO: Record<ScenarioId, { label: string; stopAt: number; summary: string }> = {
  historical: {
    label: "Historical 1914",
    stopAt: 7,
    summary: "All seven dominoes fell across 37 days, dragging 7 European states (and their global empires) into WWI.",
  },
  "no-blank-cheque": {
    label: "No Blank Cheque",
    stopAt: 1,
    summary:
      "Counterfactual break at 5 July: Without unconditional German backing, Vienna dares not risk confronting Russia alone — likely forcing diplomatic concessions instead of an unacceptable ultimatum.",
  },
  "no-russian-mob": {
    label: "Russia Halts Mobilisation",
    stopAt: 3,
    summary:
      "Counterfactual break at 30 July: Had Tsar Nicholas II restricted Russia to diplomatic protest (as in 1908), Germany's Schlieffen timetable would not have triggered war against France and Belgium — though Austria vs Serbia would still be a localised Balkan war.",
  },
  "spare-belgium": {
    label: "Germany Spares Belgium",
    stopAt: 6,
    summary:
      "Counterfactual break at 4 August: A divided British Cabinet might have stayed neutral initially without the 1839 Treaty of London trigger — yet strategic fear of German dominance over France could still have drawn Britain in later.",
  },
};

function nodeFill(st: "peace" | "alert" | "mobilised" | "war"): string {
  if (st === "war") return "var(--bad)";
  if (st === "mobilised") return "var(--warn)";
  if (st === "alert") return "var(--brand-soft)";
  return "var(--surface)";
}

function nodeStroke(st: "peace" | "alert" | "mobilised" | "war"): string {
  if (st === "war") return "var(--bad)";
  if (st === "mobilised") return "var(--warn)";
  if (st === "alert") return "var(--brand)";
  return "var(--line)";
}

function nodeText(st: "peace" | "alert" | "mobilised" | "war"): string {
  if (st === "war") return "#ffffff";
  return "var(--ink)";
}

function JulyCrisisSimulator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [scenario, setScenario] = useState<ScenarioId>("historical");

  const cfg = SCENARIO_INFO[scenario];
  const effectiveIdx = Math.min(stepIndex, cfg.stopAt);
  const cur = HISTORICAL_STEPS[effectiveIdx];
  const blocked = scenario !== "historical" && stepIndex > cfg.stopAt;

  const nodes: Array<{ key: keyof CrisisStep["status"]; label: string; x: number; y: number }> = [
    { key: "britain", label: "Britain", x: 64, y: 58 },
    { key: "belgium", label: "Belgium", x: 162, y: 84 },
    { key: "france", label: "France", x: 118, y: 166 },
    { key: "germany", label: "Germany", x: 274, y: 102 },
    { key: "russia", label: "Russia", x: 472, y: 74 },
    { key: "austria", label: "Austria-H.", x: 356, y: 176 },
    { key: "serbia", label: "Serbia", x: 468, y: 204 },
  ];

  return (
    <WidgetFrame
      title="July Crisis 1914 Chain-Reaction Simulator"
      tryThis={[
        "Step from **28 June** to **4 August** and watch how alliances and the Schlieffen Plan pull each power from peace into war.",
        "Switch to **No Blank Cheque** or **Russia Halts Mobilisation** to test where the 1914 chain might have broken!",
      ]}
      caption={
        <div className="space-y-1.5">
          <div>
            <strong>
              {cur.date} 1914 — {cur.title} ({cur.actor}):
            </strong>{" "}
            {cur.detail}
          </div>
          {blocked ? (
            <div className="font-semibold text-good">
              🛑 Counterfactual brake active — {cfg.summary}
            </div>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented
            label="Counterfactual Scenario"
            value={scenario}
            onChange={(v) => setScenario(v)}
            options={[
              { value: "historical", label: "Historical 1914" },
              { value: "no-blank-cheque", label: "No Blank Cheque" },
              { value: "no-russian-mob", label: "Russia Halts" },
              { value: "spare-belgium", label: "Spare Belgium" },
            ]}
          />
          <Stepper
            label="Stage"
            value={stepIndex + 1}
            min={1}
            max={HISTORICAL_STEPS.length}
            onChange={(v) => setStepIndex(v - 1)}
            format={(v) => `${v}/8`}
          />
        </div>

        <Slider
          label="Timeline scrubber (28 June → 4 August 1914)"
          value={stepIndex}
          min={0}
          max={HISTORICAL_STEPS.length - 1}
          onChange={setStepIndex}
          format={(v) => HISTORICAL_STEPS[v].date}
        />

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Days Since Sarajevo" value={`+${cur.day}d`} tone="ink" />
          <Readout
            label="States at War"
            value={`${cur.warCount} / 7`}
            tone={cur.warCount >= 4 ? "bad" : cur.warCount > 0 ? "brand" : "good"}
          />
          <Readout
            label="Crisis Status"
            value={cur.warCount === 0 ? "Diplomacy" : cur.warCount <= 2 ? "Balkan War" : "World War"}
            tone={cur.warCount >= 4 ? "bad" : cur.warCount > 0 ? "brand" : "good"}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 250"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive European escalation network for the 1914 July Crisis"
          >
            {/* Diplomatic & escalation links */}
            <line x1="356" y1="176" x2="468" y2="204" stroke={effectiveIdx >= 3 ? "var(--bad)" : "var(--line)"} strokeWidth={effectiveIdx >= 3 ? 3 : 1.5} />
            <line x1="274" y1="102" x2="356" y2="176" stroke={effectiveIdx >= 1 ? "var(--bad)" : "var(--line)"} strokeWidth={effectiveIdx >= 1 ? 2.5 : 1.5} />
            <line x1="472" y1="74" x2="468" y2="204" stroke={effectiveIdx >= 4 ? "var(--brand)" : "var(--line)"} strokeWidth={effectiveIdx >= 4 ? 2.5 : 1.5} strokeDasharray="5 3" />
            <line x1="274" y1="102" x2="472" y2="74" stroke={effectiveIdx >= 5 ? "var(--bad)" : "var(--line)"} strokeWidth={effectiveIdx >= 5 ? 3 : 1.5} />
            <line x1="118" y1="166" x2="274" y2="102" stroke={effectiveIdx >= 6 ? "var(--bad)" : "var(--line)"} strokeWidth={effectiveIdx >= 6 ? 3 : 1.5} />
            <line x1="162" y1="84" x2="274" y2="102" stroke={effectiveIdx >= 7 ? "var(--bad)" : "var(--line)"} strokeWidth={effectiveIdx >= 7 ? 3 : 1.5} />
            <line x1="64" y1="58" x2="162" y2="84" stroke={effectiveIdx >= 7 ? "var(--good)" : "var(--line)"} strokeWidth={effectiveIdx >= 7 ? 3 : 1.5} strokeDasharray="4 3" />

            {nodes.map((n) => {
              const st = cur.status[n.key];
              return (
                <g key={n.key}>
                  <rect
                    x={n.x - 42}
                    y={n.y - 20}
                    width={84}
                    height={40}
                    rx={10}
                    fill={nodeFill(st)}
                    stroke={nodeStroke(st)}
                    strokeWidth={2}
                  />
                  <text x={n.x} y={n.y - 1} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={nodeText(st)}>
                    {n.label}
                  </text>
                  <text x={n.x} y={n.y + 13} textAnchor="middle" fontSize={9} fontWeight={600} fill={st === "war" ? "#fff7ed" : "var(--ink-2)"}>
                    {st.toUpperCase()}
                  </text>
                </g>
              );
            })}

            {/* Legend */}
            <rect x="14" y="218" width="12" height="12" rx="3" fill="var(--surface)" stroke="var(--line)" />
            <text x="31" y="228" fontSize="10" fill="var(--ink-2)">Peace</text>
            <rect x="82" y="218" width="12" height="12" rx="3" fill="var(--brand-soft)" stroke="var(--brand)" />
            <text x="99" y="228" fontSize="10" fill="var(--ink-2)">Alert</text>
            <rect x="145" y="218" width="12" height="12" rx="3" fill="var(--warn)" stroke="var(--warn)" />
            <text x="162" y="228" fontSize="10" fill="var(--ink-2)">Mobilised</text>
            <rect x="232" y="218" width="12" height="12" rx="3" fill="var(--bad)" stroke="var(--bad)" />
            <text x="249" y="228" fontSize="10" fill="var(--ink-2)">At War</text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

type PresetId = "fischer" | "sleepwalkers" | "balanced" | "custom";

function CauseWeightingLab() {
  const [preset, setPreset] = useState<PresetId>("balanced");
  const [militarism, setMilitarism] = useState(7);
  const [alliances, setAlliances] = useState(7);
  const [imperialism, setImperialism] = useState(5);
  const [nationalism, setNationalism] = useState(7);
  const [flashpoint, setFlashpoint] = useState(4);

  const applyPreset = (p: PresetId) => {
    setPreset(p);
    if (p === "fischer") {
      setMilitarism(9);
      setAlliances(6);
      setImperialism(9);
      setNationalism(5);
      setFlashpoint(3);
    } else if (p === "sleepwalkers") {
      setMilitarism(7);
      setAlliances(9);
      setImperialism(4);
      setNationalism(8);
      setFlashpoint(7);
    } else if (p === "balanced") {
      setMilitarism(7);
      setAlliances(7);
      setImperialism(5);
      setNationalism(7);
      setFlashpoint(4);
    }
  };

  const setManual = (setter: (v: number) => void) => (v: number) => {
    setPreset("custom");
    setter(v);
  };

  const items = [
    { key: "Militarism", val: militarism, color: "var(--bad)" },
    { key: "Alliances", val: alliances, color: "var(--brand)" },
    { key: "Imperialism", val: imperialism, color: "var(--warn)" },
    { key: "Nationalism", val: nationalism, color: "var(--good)" },
    { key: "Sarajevo Spark", val: flashpoint, color: "var(--info)" },
  ];
  const total = Math.max(1, items.reduce((s, it) => s + it.val, 0));
  const pcts = items.map((it) => ({ ...it, pct: Math.round((it.val / total) * 100) }));
  const top = [...pcts].sort((a, b) => b.val - a.val)[0];
  const longTermPct = Math.round(((militarism + alliances + imperialism + nationalism) / total) * 100);

  const fischerScore = militarism + imperialism;
  const clarkScore = alliances + nationalism + flashpoint;
  const closestHistorian =
    fischerScore >= clarkScore * 0.85 && imperialism >= 7 && militarism >= 7
      ? "Fritz Fischer (1961)"
      : alliances >= 7 && flashpoint >= 5
        ? "Christopher Clark (2012)"
        : "Balanced MAIN Synthesis";

  return (
    <WidgetFrame
      title="MAIN Cause Weighting & Historiography Lab"
      tryThis={[
        "Click **Fritz Fischer (1961)** vs **Christopher Clark (2012)** to see which causes each historian prioritises.",
        "Drag the five sliders to build your own causation argument and generate a Year 9 essay thesis.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            <strong>Essay Thesis Builder:</strong> Although Sarajevo ({pcts[4].pct}%) supplied the immediate spark in June 1914,{" "}
            <strong>{top.key}</strong> ({top.pct}%) combined with underlying MAIN pressures ({longTermPct}% total) to turn a Balkan murder into a European catastrophe — aligning closest with{" "}
            <strong>{closestHistorian}</strong>.
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Historian Weighting Preset"
          value={preset}
          onChange={applyPreset}
          options={[
            { value: "balanced", label: "Balanced MAIN" },
            { value: "fischer", label: "Fischer (1961)" },
            { value: "sleepwalkers", label: "Clark (2012)" },
            { value: "custom", label: "Custom" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Militarism (Dreadnoughts & Schlieffen)" value={militarism} min={1} max={10} onChange={setManual(setMilitarism)} />
          <Slider label="Alliances (Triple Alliance vs Entente)" value={alliances} min={1} max={10} onChange={setManual(setAlliances)} />
          <Slider label="Imperialism (Weltpolitik & Morocco)" value={imperialism} min={1} max={10} onChange={setManual(setImperialism)} />
          <Slider label="Nationalism (Slavs, Bosnia & Alsace)" value={nationalism} min={1} max={10} onChange={setManual(setNationalism)} />
          <Slider label="Sarajevo Flashpoint (28 June 1914)" value={flashpoint} min={1} max={10} onChange={setManual(setFlashpoint)} />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Primary Driver" value={`${top.key} (${top.pct}%)`} tone="brand" />
          <Readout label="Long-Term Share" value={`${longTermPct}%`} tone={longTermPct >= 70 ? "good" : "ink"} />
          <Readout label="Closest Historian" value={closestHistorian} tone="ink" />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 175"
            className="h-auto w-full"
            role="img"
            aria-label="Proportional horizontal bar chart comparing weights of MAIN causes and the Sarajevo flashpoint"
          >
            {pcts.map((it, idx) => {
              const y = 14 + idx * 31;
              const barW = Math.max(8, (it.pct / 100) * 340);
              return (
                <g key={it.key}>
                  <text x="128" y={y + 15} textAnchor="end" fontSize="11.5" fontWeight="700" fill="var(--ink)">
                    {it.key}
                  </text>
                  <rect x="138" y={y + 2} width="340" height="19" rx="6" fill="var(--surface)" stroke="var(--line)" />
                  <rect x="138" y={y + 2} width={barW} height="19" rx="6" fill={it.color} />
                  <text x="488" y={y + 15} fontSize="11.5" fontWeight="700" fill="var(--ink)">
                    {it.pct}%
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ww1-july-crisis-simulator",
    title: "July Crisis 1914 Chain-Reaction Simulator",
    blurb: "Step through 28 June–4 August 1914 and test counterfactuals like withholding Germany's blank cheque.",
    Component: JulyCrisisSimulator,
  },
  {
    id: "ww1-cause-weighting-lab",
    title: "MAIN Cause Weighting & Historiography Lab",
    blurb: "Weigh Militarism, Alliances, Imperialism, Nationalism and Sarajevo against Fischer and Clark.",
    Component: CauseWeightingLab,
  },
];
