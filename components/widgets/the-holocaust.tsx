"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

interface EscalationStage {
  year: string;
  shortLabel: string;
  title: string;
  mechanism: string;
  rightsRemaining: number;
  victimsAndImpact: string;
  analysis: string;
  tone: "brand" | "bad" | "ink";
}

const ESCALATION_STAGES: EscalationStage[] = [
  {
    year: "1933",
    shortLabel: "1933",
    title: "Boycott & Civil Service Law (April 1933)",
    mechanism: "Economic & professional exclusion",
    rightsRemaining: 78,
    victimsAndImpact: "German Jews & political opponents dismissed from courts, schools, and civil posts",
    analysis:
      "Immediately after Hitler became Chancellor (30 Jan 1933), the regime tested public reaction with the 1 April shop boycott, then turned to formal decrees like the 7 April Civil Service Law to isolate minorities gradually.",
    tone: "brand",
  },
  {
    year: "1935",
    shortLabel: "1935",
    title: "Nuremberg Race Laws (15 Sept 1935)",
    mechanism: "Legal stripping of citizenship",
    rightsRemaining: 56,
    victimsAndImpact: "German Jews redefined as 'subjects' without civic rights; mixed marriages banned",
    analysis:
      "The Nuremberg Laws codified racial antisemitism into law using grandparents' ancestry rather than religious faith, removing legal equality and deepening social separation between Jewish and non-Jewish neighbours.",
    tone: "brand",
  },
  {
    year: "Jul 1938",
    shortLabel: "Jul '38",
    title: "Évian Conference (July 1938)",
    mechanism: "International borders remain closed",
    rightsRemaining: 44,
    victimsAndImpact: "32 nations meet; nearly all refuse to expand visa quotas for refugees",
    analysis:
      "While Nazi emigration taxes confiscated family savings, the failure of foreign states at Évian to open visa quotas trapped hundreds of thousands inside Greater Germany and Austria.",
    tone: "ink",
  },
  {
    year: "Nov 1938",
    shortLabel: "Nov '38",
    title: "Kristallnacht (9–10 Nov 1938)",
    mechanism: "Nationwide state-directed violence",
    rightsRemaining: 26,
    victimsAndImpact: "1,400+ synagogues burned, ~30,000 Jewish men sent to camps, 1bn RM fine",
    analysis:
      "Kristallnacht marked the decisive pre-war turning point from legal exclusion to open physical terror, followed by rapid forced seizure of remaining Jewish businesses ('Aryanisation').",
    tone: "bad",
  },
  {
    year: "1939–40",
    shortLabel: "1939–40",
    title: "Invasion of Poland & Forced Ghettos",
    mechanism: "Wartime isolation & starvation",
    rightsRemaining: 14,
    victimsAndImpact: "Over 400,000 confined in Warsaw Ghetto; Aktion T4 begins murdering disabled people",
    analysis:
      "World War II brought millions of Polish Jews under Nazi occupation and closed exit routes. Overcrowded walled ghettos inflicted lethal hunger and typhus while Aktion T4 tested gas chambers.",
    tone: "bad",
  },
  {
    year: "Jun 1941",
    shortLabel: "1941",
    title: "Operation Barbarossa & Einsatzgruppen",
    mechanism: "Mobile mass shootings ('Holocaust by bullets')",
    rightsRemaining: 6,
    victimsAndImpact: "~1.5–2M Jews shot in Eastern Europe (incl. 33,771 at Babi Yar), plus Roma & Soviet POWs",
    analysis:
      "Following the June 1941 invasion of the Soviet Union, SS mobile squads assisted by military units and collaborators conducted systematic mass shootings across occupied Eastern Europe.",
    tone: "bad",
  },
  {
    year: "1942–45",
    shortLabel: "1942–45",
    title: "Wannsee Conference & Extermination Camps",
    mechanism: "Coordinated industrial genocide",
    rightsRemaining: 0,
    victimsAndImpact: "6M European Jews murdered across camps (Auschwitz-Birkenau, Treblinka) & millions of others",
    analysis:
      "The 20 January 1942 Wannsee Conference aligned SS and civilian ministries for Europe-wide rail deportations to six primary extermination camps in occupied Poland until Allied liberation in 1945.",
    tone: "bad",
  },
];

function EscalationTimelineExplorer() {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = ESCALATION_STAGES[stageIdx];

  return (
    <WidgetFrame
      title="Escalation of Persecution Explorer (1933–1945)"
      tryThis={[
        "Move the timeline step by step from 1933 to 1945 and observe how legal decrees paved the way for wartime mass murder.",
        "Compare Stage 2 (1935 Nuremberg Laws) with Stage 4 (Nov 1938 Kristallnacht): what shifted in the regime's methods?",
        "Compare Stage 6 (June 1941) with Stage 7 (1942–45) to see why Wannsee coordinated killing that was already underway.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">{stage.title}</p>
          <p className="mt-1 text-ink-2">{stage.analysis}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <Slider
          label="Historical Stage"
          value={stageIdx}
          min={0}
          max={ESCALATION_STAGES.length - 1}
          onChange={setStageIdx}
          format={(v) => `${ESCALATION_STAGES[v].year} (Stage ${v + 1}/${ESCALATION_STAGES.length})`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 190"
            className="h-auto w-full"
            role="img"
            aria-label="Chart showing progressive erosion of civic rights and escalation of Nazi persecution from 1933 to 1945"
          >
            <rect width="560" height="190" rx="8" fill="var(--surface)" />
            <text x="280" y="20" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ink)">
              Incremental Removal of Legal, Economic &amp; Human Protections (1933–1945)
            </text>
            <line x1="48" y1="36" x2="48" y2="146" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="48" y1="146" x2="536" y2="146" stroke="var(--line)" strokeWidth="1.5" />
            <text x="42" y="42" textAnchor="end" fontSize="9" fill="var(--ink-2)">Full</text>
            <text x="42" y="95" textAnchor="end" fontSize="9" fill="var(--ink-2)">Mid</text>
            <text x="42" y="148" textAnchor="end" fontSize="9" fill="var(--ink-2)">None</text>

            {ESCALATION_STAGES.map((st, idx) => {
              const x = 68 + idx * 72;
              const barHeight = Math.max(6, Math.round((st.rightsRemaining / 100) * 102));
              const y = 146 - barHeight;
              const active = idx === stageIdx;
              const past = idx <= stageIdx;
              const fillColor = active
                ? st.rightsRemaining <= 30
                  ? "var(--bad)"
                  : "var(--brand)"
                : past
                  ? "var(--brand-soft)"
                  : "var(--surface-2)";
              const strokeColor = active
                ? st.rightsRemaining <= 30
                  ? "var(--bad)"
                  : "var(--brand)"
                : "var(--line)";

              return (
                <g key={st.year}>
                  <rect
                    x={x - 18}
                    y={y}
                    width={36}
                    height={barHeight}
                    rx="4"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={active ? 2 : 1}
                  />
                  <text
                    x={x}
                    y={163}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight={active ? "800" : "600"}
                    fill={active ? "var(--ink)" : "var(--ink-2)"}
                  >
                    {st.shortLabel}
                  </text>
                  {active ? (
                    <circle cx={x} cy={Math.max(38, y - 8)} r="4" fill={st.rightsRemaining <= 30 ? "var(--bad)" : "var(--brand)"} />
                  ) : null}
                </g>
              );
            })}
            <text x="280" y="182" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
              Vertical axis illustrates surviving legal and civic protections under Nazi rule across each stage
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Period" value={stage.year} tone={stage.tone} />
          <Readout label="State Method" value={<span className="text-sm leading-snug">{stage.mechanism}</span>} tone="ink" />
          <Readout
            label="Historical Impact"
            value={<span className="text-sm leading-snug">{stage.victimsAndImpact}</span>}
            tone={stage.tone}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type EvidenceCategory = "armed" | "spiritual" | "rescue" | "justice";

interface CaseRecord {
  title: string;
  date: string;
  location: string;
  action: string;
  context: string;
  significance: string;
  nopTip: string;
}

const CASES_BY_CATEGORY: Record<EvidenceCategory, CaseRecord[]> = {
  armed: [
    {
      title: "Warsaw Ghetto Uprising",
      date: "19 April – 16 May 1943",
      location: "Warsaw, Occupied Poland",
      action: "Roughly 750 lightly armed fighters under Mordechai Anielewicz resisted SS forces for nearly a month.",
      context: "Over 400,000 Jews had been confined under starvation; mass deportations to Treblinka occurred in 1942.",
      significance: "Largest single Jewish armed revolt during WWII, refuting the myth of passive submission.",
      nopTip: "Cross-reference Mordechai Anielewicz's smuggled letters with German SS Stroop Report records.",
    },
    {
      title: "Sobibór Extermination Camp Revolt",
      date: "14 October 1943",
      location: "Sobibór, Occupied Poland",
      action: "Led by Alexander Pechersky and Leon Feldhendler, ~300 prisoners broke out through camp fences.",
      context: "Pure killing site under Operation Reinhard where escape carried near-certain death.",
      significance: "Alarmed Nazi commanders closed and demolished the Sobibór death camp shortly afterwards.",
      nopTip: "Compare post-war survivor testimonies with archaeological excavations of the demolished site.",
    },
  ],
  spiritual: [
    {
      title: "Oyneg Shabes Underground Archive",
      date: "1939 – 1943",
      location: "Warsaw Ghetto",
      action: "Historian Emanuel Ringelblum and volunteers buried thousands of testimonies in milk cans and tin boxes.",
      context: "Nazi authorities aimed to erase Jewish life and conceal evidence of systematic atrocities.",
      significance: "Preserved victims' authentic voices; now recognised in UNESCO's Memory of the World register.",
      nopTip: "As contemporary wartime records, these documents capture raw immediate truth without hindsight.",
    },
    {
      title: "Clandestine Ghetto Schools & Diaries",
      date: "1939 – 1944",
      location: "Łódź, Warsaw, Terezin & Amsterdam",
      action: "Secret teaching, cultural gatherings, artworks, and diaries (such as Anne Frank and Dawid Sierakowiak).",
      context: "Nazi bans prohibited Jewish schooling and sought to strip people of dignity and identity.",
      significance: "Maintained humanity, education, and cultural continuity in defiance of dehumanisation.",
      nopTip: "Recognise both strengths (intimate human detail) and limits (one person's confined perspective).",
    },
  ],
  rescue: [
    {
      title: "Rescue of the Danish Jews",
      date: "October 1943",
      location: "Denmark → Neutral Sweden",
      action: "Citizens, fishermen, police, and resistance ferried ~7,200 Jews (over 90%) across the Øresund strait.",
      context: "German official Georg Ferdinand Duckwitz leaked plans of the roundup; neutral Sweden lay close by.",
      significance: "Demonstrated the life-saving impact of collective civic solidarity combined with accessible sanctuary.",
      nopTip: "Compare Denmark's occupation conditions and geography carefully against occupied Poland.",
    },
    {
      title: "Oskar Schindler & Irena Sendler",
      date: "1940 – 1945",
      location: "Kraków, Brünnlitz & Warsaw",
      action: "Schindler protected ~1,100–1,200 factory workers; Sendler and Żegota smuggled ~2,500 children from Warsaw.",
      context: "In occupied Poland, helping Jews carried execution for the rescuer's entire family.",
      significance: "Honoured as Righteous Among the Nations, proving moral choice remained possible even under terror.",
      nopTip: "Evaluate how personal access (factory lists or social-work passes) enabled different rescue strategies.",
    },
  ],
  justice: [
    {
      title: "The Nuremberg Trials",
      date: "Nov 1945 – Oct 1946",
      location: "Nuremberg, Germany",
      action: "International Military Tribunal tried 22 major Nazi leaders for Crimes against Humanity and War Crimes.",
      context: "Allied liberation of camps in 1945 exposed crimes on a scale requiring new international legal standards.",
      significance: "Established individual accountability and ruled that 'following superior orders' is never a legal defence.",
      nopTip: "Prosecutors relied heavily on captured Nazi Germany administrative files rather than witness memory alone.",
    },
    {
      title: "UN Genocide Convention & Human Rights",
      date: "9–10 December 1948",
      location: "United Nations, Paris",
      action: "Adopted the Genocide Convention (building on Raphael Lemkin's 1944 term) and Universal Declaration of Human Rights.",
      context: "Global determination after WWII to define mass group destruction as a permanent international crime.",
      significance: "Created the modern international legal framework for genocide prevention and human rights.",
      nopTip: "Assess both long-term legal significance and ongoing challenges in enforcing international law.",
    },
  ],
};

function ResistanceEvidenceAnalyser() {
  const [category, setCategory] = useState<EvidenceCategory>("armed");
  const [caseIndex, setCaseIndex] = useState(0);

  const cases = CASES_BY_CATEGORY[category];
  const activeCase = cases[Math.min(caseIndex, cases.length - 1)];

  const handleCategoryChange = (next: EvidenceCategory) => {
    setCategory(next);
    setCaseIndex(0);
  };

  return (
    <WidgetFrame
      title="Resistance, Rescue & Post-War Justice Evidence Explorer"
      tryThis={[
        "Switch between Armed Resistance and Spiritual Resistance to see why historians define opposition broadly.",
        "Compare the Danish rescue with Irena Sendler in occupied Poland—how did local risk shape each rescue?",
        "Inspect International Justice to connect 1945–1948 legal milestones directly to Holocaust remembrance today.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">Historian&rsquo;s Source &amp; NOP Focus</p>
          <p className="mt-1 text-ink-2">{activeCase.nopTip}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Historical Dimension"
            value={category}
            onChange={handleCategoryChange}
            options={[
              { value: "armed", label: "Armed Resistance" },
              { value: "spiritual", label: "Spiritual Resistance" },
              { value: "rescue", label: "Rescuers" },
              { value: "justice", label: "Post-War Justice" },
            ]}
          />
          <Stepper
            label="Case Study"
            value={caseIndex + 1}
            min={1}
            max={cases.length}
            onChange={(v) => setCaseIndex(v - 1)}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 150"
            className="h-auto w-full"
            role="img"
            aria-label={`Historical analysis diagram for ${activeCase.title}`}
          >
            <rect width="560" height="150" rx="8" fill="var(--surface)" />
            <text x="280" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--ink)">
              {activeCase.title} ({activeCase.date})
            </text>
            <rect x="18" y="38" width="160" height="92" rx="8" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
            <text x="98" y="57" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--brand)">1. Historical Context</text>
            <text x="98" y="76" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">{activeCase.location}</text>
            <text x="98" y="96" textAnchor="middle" fontSize="9.2" fill="var(--ink)">Extreme constraints &amp;</text>
            <text x="98" y="110" textAnchor="middle" fontSize="9.2" fill="var(--ink)">moral choices under terror</text>

            <rect x="200" y="38" width="160" height="92" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
            <text x="280" y="57" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--brand)">2. Historical Action</text>
            <text x="280" y="78" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Documented agency</text>
            <text x="280" y="95" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">Verifiable dates, names</text>
            <text x="280" y="109" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">&amp; primary records</text>

            <rect x="382" y="38" width="160" height="92" rx="8" fill="var(--good-soft)" stroke="var(--good)" strokeWidth="1.5" />
            <text x="462" y="57" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--good)">3. Lasting Significance</text>
            <text x="462" y="78" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Challenges myths &amp;</text>
            <text x="462" y="95" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">shapes law, memory</text>
            <text x="462" y="109" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">&amp; human rights</text>

            <line x1="178" y1="84" x2="196" y2="84" stroke="var(--ink-2)" strokeWidth="1.8" />
            <polygon points="195,80 201,84 195,88" fill="var(--ink-2)" />
            <line x1="360" y1="84" x2="378" y2="84" stroke="var(--ink-2)" strokeWidth="1.8" />
            <polygon points="377,80 383,84 377,88" fill="var(--ink-2)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Context" value={<span className="text-sm leading-snug">{activeCase.context}</span>} tone="ink" />
          <Readout label="Action & Evidence" value={<span className="text-sm leading-snug">{activeCase.action}</span>} tone="brand" />
          <Readout label="Historical Significance" value={<span className="text-sm leading-snug">{activeCase.significance}</span>} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "escalation-timeline-1933-1945",
    title: "Escalation of Persecution Explorer (1933–1945)",
    blurb: "Trace step by step how legal exclusion in 1933 escalated through Kristallnacht and WWII into industrial genocide.",
    Component: EscalationTimelineExplorer,
  },
  {
    id: "resistance-evidence-analyser",
    title: "Resistance, Rescue & Post-War Justice Explorer",
    blurb: "Examine verified case studies of armed resistance, spiritual resistance, rescuers, and post-war international law.",
    Component: ResistanceEvidenceAnalyser,
  },
];
