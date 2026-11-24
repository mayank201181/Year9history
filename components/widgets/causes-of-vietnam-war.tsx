"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type PerspectiveId = "us" | "vietnam" | "singapore";

interface VietnamStage {
  year: string;
  title: string;
  president: string;
  troops: string;
  troopsNum: number;
  dominoRisk: number;
  usView: string;
  vietnamView: string;
  singaporeView: string;
}

const STAGES: VietnamStage[] = [
  {
    year: "1945",
    title: "Ho Chi Minh Declares Independence",
    president: "Truman",
    troops: "0 (OSS liaison)",
    troopsNum: 0,
    dominoRisk: 20,
    usView:
      "Washington initially favours decolonisation, but soon prioritises rebuilding France as a European ally against Soviet Communism.",
    vietnamView:
      "Quoting the US Declaration of Independence in Hanoi, Ho Chi Minh and the Viet Minh expect freedom after defeating Japanese occupiers.",
    singaporeView:
      "Following Japan's 1945 surrender, anti-colonial nationalism surges across Malaya and Singapore too — shattering the myth of European invincibility.",
  },
  {
    year: "1954",
    title: "Dien Bien Phu & Geneva (17th Parallel)",
    president: "Eisenhower",
    troops: "~340 advisers",
    troopsNum: 340,
    dominoRisk: 55,
    usView:
      "Having funded 80% of France's war, Eisenhower warns of the Domino Theory, refuses to sign Geneva, and forms SEATO to defend South Vietnam.",
    vietnamView:
      "General Giap's victory ends French rule, yet Geneva splits Vietnam temporarily at the 17th parallel pending promised July 1956 reunification elections.",
    singaporeView:
      "With British forces battling guerrillas in the Malayan Emergency (1948–60), France's defeat raises real alarm in Malaya and Singapore about Communist momentum.",
  },
  {
    year: "1956",
    title: "Reunification Elections Cancelled",
    president: "Eisenhower",
    troops: "~650 advisers",
    troopsNum: 650,
    dominoRisk: 65,
    usView:
      "Intelligence predicts Ho Chi Minh would win ~80% of the vote, so Washington backs Ngo Dinh Diem in blocking elections to uphold Containment.",
    vietnamView:
      "Peaceful reunification dies: the temporary 17th parallel hardens into a permanent border, convincing southern nationalists that armed struggle is unavoidable.",
    singaporeView:
      "Cold War ideological lines harden across Southeast Asia while left-wing strikes and political debates intensify in Singapore's path to self-government.",
  },
  {
    year: "1960",
    title: "Formation of the NLF / Viet Cong",
    president: "Eisenhower → JFK",
    troops: "~900 advisers",
    troopsNum: 900,
    dominoRisk: 72,
    usView:
      "Washington sees the new guerrilla movement as direct Northern Communist aggression supplied via the Ho Chi Minh Trail rather than southern anger at Diem.",
    vietnamView:
      "Southern peasants angered by Diem's corruption and landlord policies unite in the NLF (Viet Cong) to overthrow Saigon and reunify Vietnam.",
    singaporeView:
      "Although the Malayan Emergency officially ends in 1960, Singapore's leaders still watch Indochina warily as regional instability grows.",
  },
  {
    year: "1962–63",
    title: "Strategic Hamlets, Buddhist Crisis & JFK Advisers",
    president: "Kennedy (JFK)",
    troops: "16,000 advisers",
    troopsNum: 16000,
    dominoRisk: 82,
    usView:
      "JFK multiplies advisers from 900 to 16,000, then backs the November 1963 coup against Diem — staking US Cold War prestige directly on Saigon.",
    vietnamView:
      "Forced Strategic Hamlets and Thich Quang Duc's June 1963 Buddhist protest expose Saigon's crisis; Diem's assassination leaves weak military coups behind.",
    singaporeView:
      "As Singapore enters Merger with Malaysia (1963), chaos in South Vietnam convinces regional leaders that Southeast Asia's Cold War balance remains fragile.",
  },
  {
    year: "Aug 1964",
    title: "Gulf of Tonkin Incident & Resolution",
    president: "Johnson (LBJ)",
    troops: "23,000 personnel",
    troopsNum: 23000,
    dominoRisk: 90,
    usView:
      "Following attacks on USS Maddox (2 Aug) and a disputed 4 Aug radar alert, Congress passes the Resolution (88–2), handing LBJ a 'blank cheque'.",
    vietnamView:
      "Hanoi views US destroyer intelligence patrols and covert raids as provocations — and prepares for full-scale American intervention.",
    singaporeView:
      "Regional governments note America's sweeping Congressional mandate, signalling that the superpower is ready to commit massive force in Southeast Asia.",
  },
  {
    year: "Mar 1965",
    title: "Rolling Thunder & Marines at Da Nang",
    president: "Johnson (LBJ)",
    troops: "184,000 (end 1965)",
    troopsNum: 184000,
    dominoRisk: 98,
    usView:
      "After the Pleiku raid, LBJ launches sustained bombing (Rolling Thunder) and lands 3,500 Marines at Da Nang — crossing into full American ground war.",
    vietnamView:
      "An anti-colonial struggle that began against France in 1946 is now a full-scale war against the world's most powerful military.",
    singaporeView:
      "In the exact year Singapore becomes independent (1965), US intervention in Vietnam intensifies — later viewed by Lee Kuan Yew as buying ASEAN time to stabilise.",
  },
];

function VietnamEscalationExplorer() {
  const [stageIdx, setStageIdx] = useState(1);
  const [perspective, setPerspective] = useState<PerspectiveId>("us");

  const cur = STAGES[stageIdx];
  const captionText =
    perspective === "us" ? cur.usView : perspective === "vietnam" ? cur.vietnamView : cur.singaporeView;
  const perspLabel =
    perspective === "us"
      ? "Washington (Cold War Lens)"
      : perspective === "vietnam"
        ? "Vietnam (Decolonisation & Local Lens)"
        : "Malaya & Singapore (Regional Lens)";

  const maxLog = Math.log10(200000);
  const points = STAGES.map((st, idx) => {
    const x = 48 + idx * 78;
    const hRatio = st.troopsNum <= 0 ? 0 : Math.log10(st.troopsNum + 10) / maxLog;
    const y = 165 - hRatio * 120;
    return { x, y, st, idx };
  });
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y.toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="Indochina-to-1965 Creeping Escalation & Perspective Explorer"
      tryThis={[
        "Scrub from **1945** to **March 1965** to see how US personnel climbed from 0 to 184,000 across four presidents.",
        "Switch between **Washington**, **Vietnam** and **Malaya & Singapore** on the exact same year to compare why each side acted as it did!",
      ]}
      caption={
        <div>
          <strong>
            {cur.year} — {cur.title} ({perspLabel}):
          </strong>{" "}
          {captionText}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented
            label="Historical Perspective"
            value={perspective}
            onChange={setPerspective}
            options={[
              { value: "us", label: "Washington (US)" },
              { value: "vietnam", label: "Vietnam" },
              { value: "singapore", label: "Malaya & Singapore" },
            ]}
          />
          <Stepper
            label="Milestone"
            value={stageIdx + 1}
            min={1}
            max={STAGES.length}
            onChange={(v) => setStageIdx(v - 1)}
            format={(v) => `${v}/7`}
          />
        </div>

        <Slider
          label="Escalation Timeline (1945 → March 1965)"
          value={stageIdx}
          min={0}
          max={STAGES.length - 1}
          onChange={setStageIdx}
          format={(v) => STAGES[v].year}
        />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="US President" value={cur.president} tone="ink" />
          <Readout label="US Personnel" value={cur.troops} tone={stageIdx >= 5 ? "bad" : "brand"} />
          <Readout label="Domino Alarm Index" value={`${cur.dominoRisk}%`} tone={cur.dominoRisk >= 80 ? "bad" : "good"} />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 205"
            className="h-auto w-full"
            role="img"
            aria-label="Log-scale escalation chart showing gradual US troop growth in Vietnam from 1945 to 1965"
          >
            <line x1="36" y1="165" x2="532" y2="165" stroke="var(--ink-2)" strokeWidth={1.5} />
            <line x1="36" y1="35" x2="36" y2="165" stroke="var(--ink-2)" strokeWidth={1.5} />
            <text x="32" y="45" textAnchor="end" fontSize="9" fill="var(--ink-2)">184k</text>
            <text x="32" y="105" textAnchor="end" fontSize="9" fill="var(--ink-2)">1k+</text>
            <text x="32" y="167" textAnchor="end" fontSize="9" fill="var(--ink-2)">0</text>

            <path d={pathD} fill="none" stroke="var(--brand)" strokeWidth={3} />
            {points.map((p) => {
              const active = p.idx === stageIdx;
              const passed = p.idx <= stageIdx;
              return (
                <g key={p.st.year}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={active ? 8 : 5}
                    fill={active ? "var(--bad)" : passed ? "var(--brand)" : "var(--surface)"}
                    stroke={active ? "var(--bad)" : "var(--brand)"}
                    strokeWidth={2}
                  />
                  <text
                    x={p.x}
                    y={184}
                    textAnchor="middle"
                    fontSize={active ? 10.5 : 9.5}
                    fontWeight={active ? 700 : 600}
                    fill={active ? "var(--bad)" : "var(--ink-2)"}
                  >
                    {p.st.year}
                  </text>
                </g>
              );
            })}
            <text x="280" y="21" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--ink)">
              Creeping Escalation Curve (Log Scale of US Personnel, 1945–1965)
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

type LensKey = "ideology" | "territory" | "flashpoint" | "speed";

const LENS_DATA: Record<
  LensKey,
  {
    label: string;
    ww1Score: number;
    vietnamScore: number;
    ww1Fact: string;
    vietnamFact: string;
    verdictType: "Mostly Similar" | "Mixed — Shared & Different" | "Sharpest Contrast";
    synthesis: string;
  }
> = {
  ideology: {
    label: "Ideology",
    ww1Score: 75,
    vietnamScore: 95,
    ww1Fact: "Imperialism (Weltpolitik), Great Power honour, Pan-Slavism & aggressive nationalism.",
    vietnamFact: "Global Cold War Capitalism vs Communism (Truman Containment & Domino Theory) colliding with anti-colonial nationalism.",
    verdictType: "Mixed — Shared & Different",
    synthesis:
      "Both wars were fuelled by ideas of prestige and credibility, yet Vietnam featured a much sharper clash between opposing global economic systems (Capitalism vs Communism).",
  },
  territory: {
    label: "Territory",
    ww1Score: 85,
    vietnamScore: 80,
    ww1Fact: "Alsace-Lorraine (1871), Morocco (1905/11), Bosnia-Herzegovina (1908) & neutral Belgium.",
    vietnamFact: "Decolonisation of French Indochina, artificial 17th parallel split (1954) & strategic SE Asian dominoes (to Singapore).",
    verdictType: "Mixed — Shared & Different",
    synthesis:
      "WWI centred on rival European empires competing to expand borders and colonies; Vietnam began as a former colony fighting for unified sovereignty against foreign rule.",
  },
  flashpoint: {
    label: "Flashpoint",
    ww1Score: 80,
    vietnamScore: 70,
    ww1Fact: "Sarajevo assassination (28 June 1914) + Germany's 5 July 'blank cheque' to Vienna.",
    vietnamFact: "Gulf of Tonkin Incident (2–4 Aug 1964, disputed 2nd attack) + Congress Resolution ('blank cheque').",
    verdictType: "Mostly Similar",
    synthesis:
      "Striking similarity: both flashpoints acted as summer pretexts backed by an unchecked 'blank cheque' — though Sarajevo was an undeniable murder while Tonkin's 4 August clash almost certainly never happened.",
  },
  speed: {
    label: "Speed of Escalation",
    ww1Score: 98,
    vietnamScore: 25,
    ww1Fact: "37-day chain reaction (28 June → 4 August 1914) driven by alliances & Schlieffen rail timetables.",
    vietnamFact: "20-year gradual creep (1945 → 1954 → 1961 → 1965) across four US presidents (Truman to LBJ).",
    verdictType: "Sharpest Contrast",
    synthesis:
      "The biggest structural contrast between the two wars: 1914 snapped shut in five weeks via rigid mobilisation plans, whereas US combat in Vietnam escalated incrementally over two decades.",
  },
};

function CauseComparatorLab() {
  const [lens, setLens] = useState<LensKey>("ideology");
  const [ww1Rating, setWw1Rating] = useState(8);
  const [vietnamRating, setVietnamRating] = useState(9);

  const d = LENS_DATA[lens];
  const gap = Math.abs(ww1Rating - vietnamRating);
  const studentVerdict =
    gap <= 1
      ? "Equally decisive in both conflicts"
      : ww1Rating > vietnamRating
        ? `Stronger driver in WWI (+${gap} pts)`
        : `Stronger driver in Vietnam (+${gap} pts)`;

  return (
    <WidgetFrame
      title="WWI (1914) vs Vietnam (1964–65) Cause-Factor Comparator"
      tryThis={[
        "Switch between **Ideology**, **Territory**, **Flashpoint** and **Speed** to compare WWI and Vietnam side by side.",
        "Rate how decisive you think the active factor was in each war (1–10) to test your Year 9 essay comparison!",
      ]}
      caption={
        <div className="space-y-1.5">
          <div>
            <strong>Historical Comparison ({d.label} — {d.verdictType}):</strong> {d.synthesis}
          </div>
          <div className="text-ink-2">
            <strong>Your Weighting Thesis:</strong> Under the lens of <strong>{d.label}</strong>, you judge this factor to be{" "}
            <strong>{studentVerdict}</strong> (WWI {ww1Rating}/10 vs Vietnam {vietnamRating}/10).
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Comparison Lens"
          value={lens}
          onChange={(v) => {
            setLens(v);
            setWw1Rating(Math.round(LENS_DATA[v].ww1Score / 10));
            setVietnamRating(Math.round(LENS_DATA[v].vietnamScore / 10));
          }}
          options={[
            { value: "ideology", label: "Ideology" },
            { value: "territory", label: "Territory" },
            { value: "flashpoint", label: "Flashpoint" },
            { value: "speed", label: "Speed" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-bad">First World War (1914)</div>
            <p className="mt-1 text-ink">{d.ww1Fact}</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Vietnam War (1954–65)</div>
            <p className="mt-1 text-ink">{d.vietnamFact}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label={`Your WWI rating for ${d.label}`}
            value={ww1Rating}
            min={1}
            max={10}
            onChange={setWw1Rating}
            format={(v) => `${v}/10`}
          />
          <Slider
            label={`Your Vietnam rating for ${d.label}`}
            value={vietnamRating}
            min={1}
            max={10}
            onChange={setVietnamRating}
            format={(v) => `${v}/10`}
          />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Readout label="Historical Pattern" value={d.verdictType} tone="brand" />
          <Readout label="Your Verdict" value={studentVerdict} tone="ink" />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 120"
            className="h-auto w-full"
            role="img"
            aria-label="Side-by-side horizontal bar comparison of WWI and Vietnam weights for the selected historical lens"
          >
            <text x="125" y="42" textAnchor="end" fontSize="12" fontWeight="700" fill="var(--bad)">
              WWI (1914)
            </text>
            <rect x="136" y="25" width="350" height="24" rx="7" fill="var(--surface)" stroke="var(--line)" />
            <rect x="136" y="25" width={ww1Rating * 35} height="24" rx="7" fill="var(--bad)" />
            <text x="496" y="42" fontSize="12" fontWeight="700" fill="var(--ink)">
              {ww1Rating}/10
            </text>

            <text x="125" y="84" textAnchor="end" fontSize="12" fontWeight="700" fill="var(--brand)">
              Vietnam (1965)
            </text>
            <rect x="136" y="67" width="350" height="24" rx="7" fill="var(--surface)" stroke="var(--line)" />
            <rect x="136" y="67" width={vietnamRating * 35} height="24" rx="7" fill="var(--brand)" />
            <text x="496" y="84" fontSize="12" fontWeight="700" fill="var(--ink)">
              {vietnamRating}/10
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "vietnam-escalation-timeline",
    title: "Indochina-to-1965 Creeping Escalation & Perspective Explorer",
    blurb: "Scrub 1945–1965 and compare Washington, Vietnamese, and Malaya/Singapore perspectives at every milestone.",
    Component: VietnamEscalationExplorer,
  },
  {
    id: "ww1-vs-vietnam-comparator",
    title: "WWI (1914) vs Vietnam (1964–65) Cause-Factor Comparator",
    blurb: "Compare Ideology, Territory, Flashpoints and Escalation Speed across both 20th-century wars.",
    Component: CauseComparatorLab,
  },
];
