"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type EraKey = "all" | "laws" | "armed" | "pincer" | "transition";

interface ApartheidMilestone {
  year: number;
  title: string;
  era: Exclude<EraKey, "all">;
  stateAction: string;
  resistanceAction: string;
  impact: string;
  internalPressure: number; // 0-100
  globalPressure: number; // 0-100
}

const SA_EVENTS: ApartheidMilestone[] = [
  {
    year: 1948,
    title: "National Party Election Victory",
    era: "laws",
    stateAction: "D.F. Malan’s National Party wins white-only vote and begins codifying apartheid (‘apartness’).",
    resistanceAction: "ANC Youth League (Mandela, Tambo, Sisulu) urges mass civil disobedience over polite petitions.",
    impact: "Colonial segregation hardened into an interlocking national statutory system.",
    internalPressure: 18,
    globalPressure: 5,
  },
  {
    year: 1950,
    title: "Population Registration & Group Areas",
    era: "laws",
    stateAction: "Racial classification at birth; segregated urban zones uprooting 3.5m people (Sophiatown, District Six).",
    resistanceAction: "ANC & SA Indian Congress prepare joint multiracial Defiance Campaign (1952).",
    impact: "Established the legal foundation of petty and grand apartheid.",
    internalPressure: 26,
    globalPressure: 8,
  },
  {
    year: 1953,
    title: "Bantu Education & Separate Amenities",
    era: "laws",
    stateAction: "Verwoerd restricts Black schooling (~10× spending gap); unequal public facilities legalised.",
    resistanceAction: "8,000+ volunteers join 1952 Defiance Campaign; 3,000 delegates sign 1955 Freedom Charter.",
    impact: "ANC grows to ~100,000 members with a non-racial blueprint, yet laws tighten further.",
    internalPressure: 36,
    globalPressure: 12,
  },
  {
    year: 1959,
    title: "Bantustans Act (13% Land Divide)",
    era: "laws",
    stateAction: "Assigns ~70%+ Black majority to 10 fragmented ethnic homelands covering just 13% of land.",
    resistanceAction: "20,000 women march in 1956; Robert Sobukwe forms Pan Africanist Congress (PAC) in 1959.",
    impact: "Used to justify denying Black South Africans citizenship and votes in the rich 87%.",
    internalPressure: 42,
    globalPressure: 18,
  },
  {
    year: 1960,
    title: "Sharpeville Massacre (21 March)",
    era: "armed",
    stateAction: "Police fire on peaceful PAC anti-pass crowd, killing 69; ANC and PAC banned in April.",
    resistanceAction: "Mandela co-founds Umkhonto we Sizwe (MK, Dec 1961) for targeted infrastructure sabotage.",
    impact: "Decisive turning point: closed legal peaceful opposition and triggered early capital flight.",
    internalPressure: 52,
    globalPressure: 38,
  },
  {
    year: 1964,
    title: "Rivonia Trial & Robben Island",
    era: "armed",
    stateAction: "Liliesleaf Farm raid; Mandela and 7 comrades receive life sentences instead of execution.",
    resistanceAction: "Mandela’s ‘I am Prepared to Die’ speech goes global; Oliver Tambo leads ANC in exile.",
    impact: "Internal organisation crushed for a decade, yet Mandela becomes a lasting global icon.",
    internalPressure: 22,
    globalPressure: 44,
  },
  {
    year: 1976,
    title: "Soweto Uprising & Steve Biko",
    era: "pincer",
    stateAction: "Afrikaans school decree; police shoot pupils (Hector Pieterson) & murder Steve Biko (1977).",
    resistanceAction: "Black Consciousness sparks nationwide youth revolt; thousands flee to bolster MK.",
    impact: "Ignites unstoppable youth generation, 1977 UN mandatory arms ban & Gleneagles sports boycott.",
    internalPressure: 72,
    globalPressure: 68,
  },
  {
    year: 1985,
    title: "UDF, COSATU & Bank Loan Freeze",
    era: "pincer",
    stateAction: "Botha’s 1983 Tricameral Parliament excludes Black majority; States of Emergency impose force.",
    resistanceAction: "UDF boycotts & COSATU strikes make townships ungovernable; Desmond Tutu champions sanctions.",
    impact: "Chase Manhattan freezes loans (1985) & US Congress passes 1986 Anti-Apartheid Act; Rand crashes.",
    internalPressure: 94,
    globalPressure: 90,
  },
  {
    year: 1990,
    title: "De Klerk Speech & Mandela Freed",
    era: "transition",
    stateAction: "Facing economic crisis, unrest & 1989 Berlin Wall fall, de Klerk unbans ANC/PAC (2 Feb).",
    resistanceAction: "Nelson Mandela walks free (11 Feb) after 27 years and leads ANC into CODESA talks.",
    impact: "42 years of National Party refusal give way to formal negotiations for democracy.",
    internalPressure: 96,
    globalPressure: 95,
  },
  {
    year: 1994,
    title: "27 April Multiracial Democracy & TRC",
    era: "transition",
    stateAction: "Interim constitution ends white minority rule; de Klerk joins Government of National Unity.",
    resistanceAction: "ANC wins 62.6%; Mandela becomes President; Archbishop Tutu chairs the TRC (1995–98).",
    impact: "Political apartheid dismantled without civil war, though deep economic inequalities endure.",
    internalPressure: 100,
    globalPressure: 100,
  },
];

function ApartheidTimelineExplorer() {
  const [era, setEra] = useState<EraKey>("all");
  const [idx, setIdx] = useState(6);

  const filtered = era === "all" ? SA_EVENTS : SA_EVENTS.filter((e) => e.era === era);
  const safeIdx = Math.min(idx, filtered.length - 1);
  const active = filtered[safeIdx];

  const handleEra = (next: EraKey) => {
    setEra(next);
    setIdx(0);
  };

  const w = 540;
  const h = 185;
  const padL = 44;
  const padR = 18;
  const padT = 24;
  const padB = 32;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const xPos = (yr: number) => padL + ((yr - 1948) / (1994 - 1948)) * plotW;
  const yPos = (val: number) => padT + plotH - (val / 100) * plotH;

  const internalLine = SA_EVENTS.map((e, i) => `${i === 0 ? "M" : "L"}${xPos(e.year).toFixed(1)},${yPos(e.internalPressure).toFixed(1)}`).join(" ");
  const globalLine = SA_EVENTS.map((e, i) => `${i === 0 ? "M" : "L"}${xPos(e.year).toFixed(1)},${yPos(e.globalPressure).toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="Apartheid Laws & Resistance Timeline (1948–1994)"
      tryThis={[
        "Scrub from **1960 (Sharpeville)** to **1964 (Rivonia)** and notice the temporary dip in internal pressure while global awareness kept rising.",
        "Jump to **1976 (Soweto)** and **1985 (UDF/Bank Freeze)** to see both curves surge together in the 1980s pincer.",
        "Filter by **1948–59 Laws** to review the five interlocking pillars of apartheid.",
      ]}
      caption={
        <>
          <strong>{active.year} — {active.title}:</strong> {active.impact}
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Filter timeline by phase"
          value={era}
          onChange={handleEra}
          options={[
            { value: "all", label: "All (1948–94)" },
            { value: "laws", label: "1948–59 Laws" },
            { value: "armed", label: "1960–64 MK" },
            { value: "pincer", label: "1976–86 Pincer" },
            { value: "transition", label: "1990–94 Vote" },
          ]}
        />

        <Slider
          label={`Milestone (${safeIdx + 1} of ${filtered.length})`}
          value={safeIdx}
          min={0}
          max={Math.max(0, filtered.length - 1)}
          step={1}
          onChange={setIdx}
          format={() => `${active.year}: ${active.title}`}
        />

        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Chart showing rising internal resistance pressure and international sanctions pressure on apartheid South Africa from 1948 to 1994"
        >
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={padL} x2={w - padR} y1={yPos(v)} y2={yPos(v)} stroke="var(--line)" strokeDasharray="3 3" />
              <text x={padL - 7} y={yPos(v) + 3} fontSize={9.5} textAnchor="end" fill="var(--ink-2)">
                {v}
              </text>
            </g>
          ))}
          {[1948, 1960, 1964, 1976, 1985, 1990, 1994].map((yr) => (
            <text key={yr} x={xPos(yr)} y={h - 10} fontSize={9.5} textAnchor="middle" fill="var(--ink-2)">
              {yr}
            </text>
          ))}

          <path d={internalLine} fill="none" stroke="var(--brand)" strokeWidth={2.5} />
          <path d={globalLine} fill="none" stroke="var(--good)" strokeWidth={2.5} />

          <line
            x1={xPos(active.year)}
            x2={xPos(active.year)}
            y1={padT}
            y2={padT + plotH}
            stroke="var(--ink-2)"
            strokeWidth={1}
            strokeDasharray="4 2"
          />

          {SA_EVENTS.map((e) => {
            const isSel = e.year === active.year && e.title === active.title;
            return (
              <g key={`${e.year}-${e.title}`}>
                <circle
                  cx={xPos(e.year)}
                  cy={yPos(e.internalPressure)}
                  r={isSel ? 6 : 3.3}
                  fill={isSel ? "var(--brand)" : "var(--surface)"}
                  stroke="var(--brand)"
                  strokeWidth={2}
                />
                <circle
                  cx={xPos(e.year)}
                  cy={yPos(e.globalPressure)}
                  r={isSel ? 6 : 3.3}
                  fill={isSel ? "var(--good)" : "var(--surface)"}
                  stroke="var(--good)"
                  strokeWidth={2}
                />
              </g>
            );
          })}

          <rect x={padL + 8} y={6} width={10} height={8} rx={2} fill="var(--brand)" />
          <text x={padL + 22} y={13} fontSize={10} fontWeight={700} fill="var(--ink)">
            Internal Resistance Pressure
          </text>
          <rect x={padL + 196} y={6} width={10} height={8} rx={2} fill="var(--good)" />
          <text x={padL + 210} y={13} fontSize={10} fontWeight={700} fill="var(--ink)">
            International Pressure &amp; Sanctions
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Selected Year" value={active.year} tone="ink" />
          <Readout label="Internal Pressure" value={`${active.internalPressure} / 100`} tone="brand" />
          <Readout label="Global Isolation" value={`${active.globalPressure} / 100`} tone="good" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-bad">Apartheid State Action</div>
            <p className="mt-1 text-ink">{active.stateAction}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">Anti-Apartheid Response</div>
            <p className="mt-1 text-ink">{active.resistanceAction}</p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function PressureWeighingLab() {
  const [internal, setInternal] = useState(40);
  const [sanctions, setSanctions] = useState(30);
  const [coldWar, setColdWar] = useState(15);
  const [leadership, setLeadership] = useState(15);

  const total = Math.max(1, internal + sanctions + coldWar + leadership);
  const pInternal = Math.round((internal / total) * 100);
  const pSanctions = Math.round((sanctions / total) * 100);
  const pColdWar = Math.round((coldWar / total) * 100);
  const pLeadership = Math.max(0, 100 - pInternal - pSanctions - pColdWar);

  const maxShare = Math.max(pInternal, pSanctions, pColdWar, pLeadership);
  const nonZeroFactors = [pInternal, pSanctions, pColdWar, pLeadership].filter((p) => p >= 10).length;

  let verdict: string;
  if (maxShare >= 68) {
    verdict =
      "Careful! Giving one cause nearly all the credit creates a ‘monocausal’ essay. Top-band Year 9 historians prove how multiple pressures reinforced each other—for example, UDF/COSATU unrest triggered the 1985 Chase Manhattan banking freeze, while the 1989 Fall of the Berlin Wall opened the negotiating window.";
  } else if (pInternal >= 30 && pSanctions >= 20 && nonZeroFactors >= 3) {
    verdict =
      "Strong historiographical balance! You recognise the core 1980s feedback loop—internal resistance (Soweto, UDF, COSATU) destabilised apartheid and drove global financial sanctions—while still crediting the 1989 Cold War shift and Mandela/de Klerk’s statesmanship in avoiding civil war.";
  } else if (pSanctions > pInternal + 15) {
    verdict =
      "Sanctions-first interpretation: foreign loan freezes (1985) and the 1986 US Act certainly hit Pretoria’s finances hard—just remember to ask *why* Western banks lost confidence in 1985 (internal township ungovernability!).";
  } else if (pLeadership >= 35) {
    verdict =
      "‘Great Man’ leadership emphasis: Mandela’s restraint after Chris Hani’s murder and de Klerk’s February 1990 speech were vital for peaceful transition, yet structural pressures (economy, strikes, Cold War) forced de Klerk to the negotiating table first.";
  } else {
    verdict =
      "Interesting weighting! In a causation essay, support your largest factor with specific dates (1976 Soweto, 1985 loan freeze, Nov 1989 Berlin Wall, Feb 1990 speech) and explain how it linked to the other causes.";
  }

  const barW = 520;
  const w1 = (pInternal / 100) * barW;
  const w2 = (pSanctions / 100) * barW;
  const w3 = (pColdWar / 100) * barW;
  const w4 = Math.max(0, barW - w1 - w2 - w3);

  return (
    <WidgetFrame
      title="Causation Weighing Lab: Why Did Apartheid End by 1994?"
      tryThis={[
        "Drag **Internal Resistance** to 90 and the other sliders low—read the historian’s warning against monocausal essays.",
        "Now test a **feedback-loop balance** (e.g. ~40% Internal, ~30% Sanctions, ~15% Cold War, ~15% Leadership).",
        "Try giving **Mandela & De Klerk Leadership** 50%+ to explore the debate between ‘Great Man’ history and structural forces.",
      ]}
      caption={verdict}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Internal Resistance (Soweto, UDF, COSATU)"
            value={internal}
            min={0}
            max={100}
            step={5}
            onChange={setInternal}
            format={() => `${pInternal}% share`}
          />
          <Slider
            label="Global Sanctions & Sports Boycotts"
            value={sanctions}
            min={0}
            max={100}
            step={5}
            onChange={setSanctions}
            format={() => `${pSanctions}% share`}
          />
          <Slider
            label="End of Cold War (Nov 1989 Berlin Wall)"
            value={coldWar}
            min={0}
            max={100}
            step={5}
            onChange={setColdWar}
            format={() => `${pColdWar}% share`}
          />
          <Slider
            label="Mandela & De Klerk Leadership"
            value={leadership}
            min={0}
            max={100}
            step={5}
            onChange={setLeadership}
            format={() => `${pLeadership}% share`}
          />
        </div>

        <svg
          viewBox="0 0 540 94"
          className="w-full h-auto rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Stacked horizontal bar showing relative causal weight assigned to four explanations for the end of apartheid"
        >
          <text x={270} y={19} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="var(--ink)">
            Your Causation Model for the Collapse of Apartheid (100% Total)
          </text>
          <rect x={10} y={30} width={w1} height={30} rx={3} fill="var(--brand)" />
          <rect x={10 + w1} y={30} width={w2} height={30} rx={3} fill="var(--good)" />
          <rect x={10 + w1 + w2} y={30} width={w3} height={30} rx={3} fill="var(--ink-2)" />
          <rect x={10 + w1 + w2 + w3} y={30} width={w4} height={30} rx={3} fill="var(--bad)" />

          {pInternal >= 12 ? (
            <text x={10 + w1 / 2} y={49} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--surface)">
              {pInternal}%
            </text>
          ) : null}
          {pSanctions >= 12 ? (
            <text x={10 + w1 + w2 / 2} y={49} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--surface)">
              {pSanctions}%
            </text>
          ) : null}
          {pColdWar >= 12 ? (
            <text x={10 + w1 + w2 + w3 / 2} y={49} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--surface)">
              {pColdWar}%
            </text>
          ) : null}
          {pLeadership >= 12 ? (
            <text x={10 + w1 + w2 + w3 + w4 / 2} y={49} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--surface)">
              {pLeadership}%
            </text>
          ) : null}

          <rect x={16} y={71} width={10} height={10} rx={2} fill="var(--brand)" />
          <text x={30} y={80} fontSize={10} fill="var(--ink)">Internal</text>
          <rect x={132} y={71} width={10} height={10} rx={2} fill="var(--good)" />
          <text x={146} y={80} fontSize={10} fill="var(--ink)">Sanctions</text>
          <rect x={262} y={71} width={10} height={10} rx={2} fill="var(--ink-2)" />
          <text x={276} y={80} fontSize={10} fill="var(--ink)">Cold War (1989)</text>
          <rect x={414} y={71} width={10} height={10} rx={2} fill="var(--bad)" />
          <text x={428} y={80} fontSize={10} fill="var(--ink)">Leadership</text>
        </svg>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Internal" value={`${pInternal}%`} tone="brand" />
          <Readout label="Sanctions" value={`${pSanctions}%`} tone="good" />
          <Readout label="Cold War" value={`${pColdWar}%`} tone="ink" />
          <Readout label="Leadership" value={`${pLeadership}%`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "apartheid-laws-resistance-timeline",
    title: "Apartheid Laws & Resistance Timeline (1948–94)",
    blurb: "Scrub across 46 years to see how apartheid laws sparked successive waves of internal resistance and global pressure.",
    Component: ApartheidTimelineExplorer,
  },
  {
    id: "apartheid-pressure-weighing-lab",
    title: "Internal Resistance vs Global Sanctions Weighing Lab",
    blurb: "Weigh the four causes behind apartheid’s collapse and test your historiographical judgement against exam criteria.",
    Component: PressureWeighingLab,
  },
];
