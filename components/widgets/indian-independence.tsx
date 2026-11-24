"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

interface MarchStage {
  day: number;
  miles: number;
  place: string;
  headline: string;
  momentum: string;
  britishDilemma: string;
  globalPress: string;
}

const MARCH_STAGES: MarchStage[] = [
  {
    day: 1,
    miles: 0,
    place: "Sabarmati Ashram (12 March 1930)",
    headline: "78 trained Satyagrahis set off after warning Viceroy Lord Irwin in advance",
    momentum: "Started with 78 disciplined marchers pledged to strict non-violence; villagers lined the road with flowers.",
    britishDilemma: "Viceroy Irwin dismissed the plan at first, joking that salt protests would not disturb his sleep.",
    globalPress: "International reporters gathered at Sabarmati—Gandhi deliberately marched slowly so news could travel daily.",
  },
  {
    day: 6,
    miles: 60,
    place: "Anand & Nadiad (17 March)",
    headline: "Village headmen resign colonial posts as crowds swell into thousands",
    momentum: "Ordinary Gujarati peasants, artisans, and local village officials joined or resigned British government jobs.",
    britishDilemma: "Officials grew uneasy: arresting Gandhi mid-march risked instant riots, yet letting him walk undermined authority.",
    globalPress: "Daily telegraph dispatches reached London, New York, and Paris as editors saw a dramatic David-vs-Goliath story.",
  },
  {
    day: 12,
    miles: 120,
    place: "Bharuch & Narmada Crossing (23 March)",
    headline: "Halfway mark reached as women campaigners persuade Gandhi to open the movement fully",
    momentum: "Activists such as Kamaladevi Chattopadhyay pressed for full women's participation in making salt and picketing.",
    britishDilemma: "British tax officers realised boycotts were spreading from salt to imported Lancashire cloth and liquor taxes.",
    globalPress: "Newsreels captured Gandhi's simple khadi robe, turning a rural walk into an iconic global symbol of peaceful protest.",
  },
  {
    day: 18,
    miles: 180,
    place: "Surat District (29 March)",
    headline: "Tens of thousands assemble as nationwide preparations begin along India's coasts",
    momentum: "Congress committees from Bengal to Tamil Nadu prepared to boil seawater simultaneously the moment Gandhi reached Dandi.",
    britishDilemma: "Colonial governors warned London that doing nothing would collapse obedience to British revenue laws nationwide.",
    globalPress: "Time magazine and British newspapers ran front-page coverage debating whether Britain still held moral consent.",
  },
  {
    day: 24,
    miles: 240,
    place: "Dandi Coast (6 April 1930)",
    headline: "Gandhi lifts natural sea salt from the shore, openly defying the British monopoly",
    momentum: "Millions nationwide boiled illegal salt; over 60,000 Indians—including thousands of women—were arrested in months.",
    britishDilemma: "The Raj finally arrested Gandhi and Congress leaders, yet prisons overflowed while boycotts intensified.",
    globalPress: "Gandhi's single photograph holding a lump of sea salt instantly communicated anti-colonial injustice worldwide.",
  },
  {
    day: 69,
    miles: 240,
    place: "Dharasana Salt Works (21 May 1930)",
    headline: "Unarmed volunteers led by Sarojini Naidu face police lathis without retaliating",
    momentum: "Even with Gandhi jailed, disciplined non-violent waves walked calmly forward as wounded marchers were carried away.",
    britishDilemma: "Using brute force against unresisting citizens trapped Britain in a devastating moral defeat—leading to 1931 talks.",
    globalPress: "American reporter Webb Miller wired eyewitness accounts to 1,350 newspapers worldwide, shocking international opinion.",
  },
];

type LensMode = "momentum" | "dilemma" | "media";

function SaltMarchStrategyExplorer() {
  const [stageIdx, setStageIdx] = useState(0);
  const [lens, setLens] = useState<LensMode>("momentum");

  const stage = MARCH_STAGES[stageIdx];
  const progressRatio = stage.miles / 240;

  const lensText =
    lens === "momentum"
      ? stage.momentum
      : lens === "dilemma"
        ? stage.britishDilemma
        : stage.globalPress;

  const lensHeading =
    lens === "momentum"
      ? "Grassroots Momentum & Unity"
      : lens === "dilemma"
        ? "Britain's Lose–Lose Strategic Dilemma"
        : "Global Press & Moral Leverage";

  return (
    <WidgetFrame
      title="1930 Dandi Salt March & Satyagraha Strategy Explorer"
      tryThis={[
        "Slide from Day 1 (Sabarmati) to Day 24 (Dandi) and Day 69 (Dharasana) to trace how momentum built.",
        "Switch the analytical lens to 'British Dilemma' at Day 1 vs Day 69—notice why Viceroy Irwin's early dismissal backfired.",
        "Switch to 'Global Press' to see why walking 240 miles slowly over 24 days was a masterstroke of media strategy.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">{lensHeading}</p>
          <p className="mt-1 text-ink-2">{lensText}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <Slider
              label="Campaign Milestone"
              value={stageIdx}
              min={0}
              max={MARCH_STAGES.length - 1}
              onChange={setStageIdx}
              format={(v) => `Stage ${v + 1}/${MARCH_STAGES.length}: Day ${MARCH_STAGES[v].day}`}
            />
          </div>
          <Segmented
            label="Analytical Lens"
            value={lens}
            onChange={setLens}
            options={[
              { value: "momentum", label: "Mass Unity" },
              { value: "dilemma", label: "British Dilemma" },
              { value: "media", label: "Global Press" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 155"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive route progress diagram from Sabarmati Ashram to Dandi and Dharasana during the 1930 Salt Satyagraha"
          >
            <rect width="560" height="155" rx="8" fill="var(--surface)" />
            <text x="280" y="22" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ink)">
              {stage.place}
            </text>
            <text x="280" y="38" textAnchor="middle" fontSize="9.6" fill="var(--ink-2)">
              {stage.headline}
            </text>

            {/* Route baseline */}
            <line x1="56" y1="86" x2="436" y2="86" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
            <line
              x1="56"
              y1="86"
              x2={56 + progressRatio * 380}
              y2="86"
              stroke="var(--brand)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Post-Dandi extension to Dharasana */}
            <line
              x1="436"
              y1="86"
              x2="510"
              y2="86"
              stroke={stageIdx === 5 ? "var(--bad)" : "var(--line)"}
              strokeWidth="4"
              strokeDasharray="6,4"
            />

            {[
              { x: 56, label: "Sabarmati", mi: "0 mi", idx: 0 },
              { x: 151, label: "Anand", mi: "60 mi", idx: 1 },
              { x: 246, label: "Bharuch", mi: "120 mi", idx: 2 },
              { x: 341, label: "Surat", mi: "180 mi", idx: 3 },
              { x: 436, label: "Dandi Sea", mi: "240 mi", idx: 4 },
              { x: 510, label: "Dharasana", mi: "May '30", idx: 5 },
            ].map((pt) => {
              const active = pt.idx === stageIdx;
              const reached = pt.idx <= stageIdx;
              const nodeColor =
                pt.idx === 5 && active
                  ? "var(--bad)"
                  : active
                    ? "var(--brand)"
                    : reached
                      ? "var(--good)"
                      : "var(--surface-2)";
              return (
                <g key={pt.label}>
                  <circle
                    cx={pt.x}
                    cy={86}
                    r={active ? 9 : 6}
                    fill={nodeColor}
                    stroke={active ? "var(--ink)" : "var(--line)"}
                    strokeWidth={active ? 2 : 1.5}
                  />
                  <text
                    x={pt.x}
                    y={112}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight={active ? "800" : "600"}
                    fill={active ? "var(--ink)" : "var(--ink-2)"}
                  >
                    {pt.label}
                  </text>
                  <text x={pt.x} y={126} textAnchor="middle" fontSize="8.8" fill="var(--ink-2)">
                    {pt.mi}
                  </text>
                </g>
              );
            })}
            <text x="280" y="146" textAnchor="middle" fontSize="9.2" fill="var(--ink-2)">
              Arabian Sea salt collection (6 April 1930) → Nationwide boycott &amp; Dharasana (May 1930)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Distance Walked" value={`${stage.miles} miles`} tone="brand" />
          <Readout label="Campaign Day" value={`Day ${stage.day}`} tone="ink" />
          <Readout
            label="Strategic Outcome"
            value={stageIdx < 4 ? "Building Pressure" : stageIdx === 4 ? "60,000+ Arrested" : "Global Outrage"}
            tone={stageIdx === 5 ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

function IndependenceCausationScales() {
  const [satyagraha, setSatyagraha] = useState(4);
  const [ww2Attlee, setWw2Attlee] = useState(3);
  const [militaryUnrest, setMilitaryUnrest] = useState(2);
  const [communalCrisis, setCommunalCrisis] = useState(1);

  const total = satyagraha + ww2Attlee + militaryUnrest + communalCrisis;
  const pct = (v: number) => (total === 0 ? 25 : Math.round((v / total) * 100));

  const pSat = pct(satyagraha);
  const pWw2 = pct(ww2Attlee);
  const pMil = pct(militaryUnrest);
  const pCom = pct(communalCrisis);

  const bars = [
    { label: "Gandhi & Satyagraha", val: satyagraha, pct: pSat, color: "var(--brand)", soft: "var(--brand-soft)" },
    { label: "WWII Debt & Attlee (1945)", val: ww2Attlee, pct: pWw2, color: "var(--good)", soft: "var(--good-soft)" },
    { label: "INA Trials & 1946 RIN Mutiny", val: militaryUnrest, pct: pMil, color: "var(--warn)", soft: "var(--warn-soft)" },
    { label: "Communal Crisis & Partition", val: communalCrisis, pct: pCom, color: "var(--bad)", soft: "var(--bad-soft)" },
  ];

  let school = "Multi-Causal Historical Synthesis";
  let verdict =
    "Your weighting reflects a balanced Year 9 synthesis: Satyagraha eroded Britain's moral hold long-term, while WWII exhaustion, Attlee's 1945 Labour government, military unrest, and communal deadlock determined the hurried 1947 exit.";
  let tone: "good" | "brand" | "bad" = "good";

  if (total === 0) {
    school = "Set Weights Above Zero";
    verdict = "Move the sliders to weigh how strongly each historical force drove Britain's 1947 withdrawal.";
    tone = "brand";
  } else if (pSat >= 65) {
    school = "Strong Nationalist / Gandhian Focus";
    verdict =
      "You emphasise Gandhi's Satyagraha and mass boycotts strongly. To reach top-band Year 9 evaluation, explain why Britain still ruled for 17 years after the 1930 Salt March—and integrate 1945 WWII debt and Attlee's election.";
    tone = "brand";
  } else if (pWw2 >= 60) {
    school = "Imperial Exhaustion Thesis";
    verdict =
      "You prioritise Britain's post-WWII bankruptcy (£1.3bn debt) and Clement Attlee's 1945 Labour government. Balance this by explaining why India was already politically ungovernable thanks to Amritsar, the Salt March, and Quit India.";
    tone = "brand";
  } else if (pMil >= 55) {
    school = "Militant / Military Pressure Focus";
    verdict =
      "You echo Clement Attlee's 1956 warning that the Red Fort INA trials and February 1946 Royal Indian Navy Mutiny shattered military trust. Remember to link this to how mass civil protest politicised Indian society first.";
    tone = "bad";
  } else if (pCom >= 50) {
    school = "Partition & Civil-War Urgency Focus";
    verdict =
      "You highlight why Lord Mountbatten accelerated departure by 10 months after 1946 Direct Action Day riots—explaining the *speed* of August 1947, though long-term Indian nationalism and WWII bankruptcy created the exit itself.";
    tone = "bad";
  }

  return (
    <WidgetFrame
      title="1947 Independence Causation & Historiography Weighing Scales"
      tryThis={[
        "Try setting Gandhi & Satyagraha to 10 and all other factors to 0—read why historians challenge single-cause essays.",
        "Test Clement Attlee's 1956 view by raising WWII Debt & Military Unrest while lowering Satyagraha.",
        "Find a balanced multi-causal weighting where at least three historical forces interact clearly.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">Historiographical Assessment: {school}</p>
          <p className="mt-1 text-ink-2">{verdict}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Gandhi & Satyagraha Protest"
            value={satyagraha}
            min={0}
            max={10}
            onChange={setSatyagraha}
            format={(v) => `${v}/10 (${pSat}%)`}
          />
          <Slider
            label="WWII Bankruptcy & Attlee (1945)"
            value={ww2Attlee}
            min={0}
            max={10}
            onChange={setWw2Attlee}
            format={(v) => `${v}/10 (${pWw2}%)`}
          />
          <Slider
            label="Bose's INA & 1946 RIN Mutiny"
            value={militaryUnrest}
            min={0}
            max={10}
            onChange={setMilitaryUnrest}
            format={(v) => `${v}/10 (${pMil}%)`}
          />
          <Slider
            label="Communal Crisis & Civil War Fear"
            value={communalCrisis}
            min={0}
            max={10}
            onChange={setCommunalCrisis}
            format={(v) => `${v}/10 (${pCom}%)`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 164"
            className="h-auto w-full"
            role="img"
            aria-label="Horizontal bar chart weighing four historical factors behind 1947 Indian independence"
          >
            <rect width="560" height="164" rx="8" fill="var(--surface)" />
            <text x="280" y="20" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ink)">
              Relative Causal Weight in Your 1947 Independence Judgement
            </text>
            {bars.map((b, i) => {
              const y = 36 + i * 30;
              const barW = Math.max(8, Math.round((b.pct / 100) * 290));
              return (
                <g key={b.label}>
                  <text x="196" y={y + 15} textAnchor="end" fontSize="10" fontWeight="700" fill="var(--ink)">
                    {b.label}
                  </text>
                  <rect x="206" y={y + 3} width="290" height="16" rx="5" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1" />
                  <rect x="206" y={y + 3} width={barW} height="16" rx="5" fill={b.color} />
                  <text x="506" y={y + 15} fontSize="10" fontWeight="800" fill="var(--ink)">
                    {b.pct}%
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Indian Protest Share" value={`${pSat + pMil}%`} tone="brand" />
          <Readout label="British & WWII Share" value={`${pWw2}%`} tone="good" />
          <Readout label="Essay Verdict" value={<span className="text-sm leading-snug">{school}</span>} tone={tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "satyagraha-salt-march-explorer",
    title: "1930 Dandi Salt March & Satyagraha Strategy Explorer",
    blurb: "Track the 240-mile march from Sabarmati to Dandi and explore Britain's strategic dilemma and global press impact.",
    Component: SaltMarchStrategyExplorer,
  },
  {
    id: "independence-causation-scales",
    title: "1947 Independence Causation & Historiography Scales",
    blurb: "Weigh Satyagraha, WWII exhaustion, military unrest, and communal crisis to test different historical interpretations.",
    Component: IndependenceCausationScales,
  },
];
