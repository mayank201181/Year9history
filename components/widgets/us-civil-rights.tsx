"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

interface MilestoneEvent {
  year: number;
  label: string;
  category: "legal" | "direct" | "power";
  method: string;
  resistance: string;
  outcome: string;
  msVoterPct: number;
  legalProgress: number; // 0-100 index of de jure dismantling
}

const EVENTS: MilestoneEvent[] = [
  {
    year: 1954,
    label: "Brown v. Board of Education",
    category: "legal",
    method: "NAACP Supreme Court constitutional challenge (Thurgood Marshall)",
    resistance: "Southern Manifesto & Massive Resistance stalled school integration",
    outcome: "Unanimous 9–0 ruling overturned Plessy in schools; under 2% integrated by 1964",
    msVoterPct: 4,
    legalProgress: 20,
  },
  {
    year: 1956,
    label: "Montgomery Bus Boycott Victory",
    category: "direct",
    method: "381-day economic boycott (~75% riders), carpools & Browder v. Gayle",
    resistance: "Home bombings, mass arrests & police harassment of carpool drivers",
    outcome: "Supreme Court struck down Alabama bus segregation; launched MLK Jr.",
    msVoterPct: 5,
    legalProgress: 32,
  },
  {
    year: 1957,
    label: "Little Rock Nine",
    category: "legal",
    method: "Nine Black teenagers enforcing federal school desegregation",
    resistance: "Governor Orval Faubus deployed Arkansas National Guard & closed schools in 1958",
    outcome: "President Eisenhower sent 1,000 paratroopers (101st Airborne) to uphold federal law",
    msVoterPct: 5,
    legalProgress: 40,
  },
  {
    year: 1960,
    label: "Greensboro Sit-Ins & SNCC",
    category: "direct",
    method: "Student lunch-counter sit-ins across 55+ cities slashing store profits",
    resistance: "Mob abuse, arrests, and closures of segregated counters",
    outcome: "Woolworth’s desegregated by July 1960; birth of youth-led SNCC",
    msVoterPct: 6,
    legalProgress: 50,
  },
  {
    year: 1961,
    label: "CORE & SNCC Freedom Rides",
    category: "direct",
    method: "Interracial interstate buses testing Boynton v. Virginia enforcement",
    resistance: "Bus firebombed in Anniston; riders savagely beaten in Birmingham",
    outcome: "Federal marshals deployed; ICC banned segregated interstate terminals (Nov 1961)",
    msVoterPct: 6,
    legalProgress: 58,
  },
  {
    year: 1963,
    label: "Birmingham & March on Washington",
    category: "direct",
    method: "Children’s Crusade televised confrontation & 250,000-strong Lincoln Memorial rally",
    resistance: "Bull Connor’s fire hoses & police dogs; 16th Street Baptist Church bombing",
    outcome: "National & Cold War TV outrage forced JFK to propose the Civil Rights Bill",
    msVoterPct: 7,
    legalProgress: 70,
  },
  {
    year: 1964,
    label: "Civil Rights Act (2 July 1964)",
    category: "legal",
    method: "LBJ Senate bargaining backed by nationwide protest momentum & Freedom Summer",
    resistance: "54-day Southern Senate filibuster; KKK murder of 3 Mississippi volunteers",
    outcome: "Outlawed de jure public segregation & job discrimination; voting barriers remained",
    msVoterPct: 7,
    legalProgress: 84,
  },
  {
    year: 1965,
    label: "Selma & Voting Rights Act (Aug 1965)",
    category: "legal",
    method: "Selma-to-Montgomery marches; Bloody Sunday televised nationwide",
    resistance: "State troopers beat ~600 peaceful marchers on Edmund Pettus Bridge",
    outcome: "Literacy tests abolished; federal registrars lifted Mississippi registration to ~60%",
    msVoterPct: 35,
    legalProgress: 94,
  },
  {
    year: 1966,
    label: "Black Power & Black Panthers",
    category: "power",
    method: "Stokely Carmichael’s Black Power; Panther Ten-Point Program & Free Breakfasts",
    resistance: "White moderate backlash & covert FBI COINTELPRO disruption",
    outcome: "Boosted Black pride & urban survival aid, exposing untouched de facto poverty",
    msVoterPct: 52,
    legalProgress: 96,
  },
  {
    year: 1968,
    label: "Fair Housing Act & Kerner Report",
    category: "power",
    method: "Poor People’s Campaign & response to urban riots (Watts 1965, Detroit 1967)",
    resistance: "MLK assassinated (4 Apr 1968); deep housing & wealth gaps remained",
    outcome: "Fair Housing Act passed, yet Kerner Report warned of ‘two societies, separate and unequal’",
    msVoterPct: 60,
    legalProgress: 100,
  },
];

type CategoryFilter = "all" | "legal" | "direct" | "power";

function ProtestLawTracker() {
  const [step, setStep] = useState(5);
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const visibleEvents = filter === "all" ? EVENTS : EVENTS.filter((e) => e.category === filter);
  const clampedStep = Math.min(step, visibleEvents.length - 1);
  const current = visibleEvents[clampedStep];

  const handleFilter = (next: CategoryFilter) => {
    setFilter(next);
    setStep(0);
  };

  const chartW = 540;
  const chartH = 185;
  const padL = 46;
  const padR = 20;
  const padT = 24;
  const padB = 34;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const xForYear = (yr: number) => padL + ((yr - 1954) / (1968 - 1954)) * plotW;
  const yForPct = (pct: number) => padT + plotH - (pct / 100) * plotH;

  const legalPath = EVENTS.map((e, i) => `${i === 0 ? "M" : "L"}${xForYear(e.year).toFixed(1)},${yForPct(e.legalProgress).toFixed(1)}`).join(" ");
  const voterPath = EVENTS.map((e, i) => `${i === 0 ? "M" : "L"}${xForYear(e.year).toFixed(1)},${yForPct(e.msVoterPct).toFixed(1)}`).join(" ");

  const catLabel =
    current.category === "legal"
      ? "Courts & Federal Law"
      : current.category === "direct"
        ? "Non-Violent Direct Action"
        : "Black Power & Urban Justice";

  return (
    <WidgetFrame
      title="Protest Methods & Federal Law Tracker (1954–1968)"
      tryThis={[
        "Scrub from **1954** to **1965** and watch why Mississippi voter registration stays flat until *after* Selma.",
        "Switch the filter to **Non-Violent Direct Action** to see how boycotts, sit-ins, and TV drove federal breakthroughs.",
        "Move to **1968** and compare *de jure* legal progress (100%) with the Kerner Commission’s warning on urban poverty.",
      ]}
      caption={
        <>
          <strong>{current.year} — {current.label}:</strong> {current.outcome}.
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Filter milestones by protest pillar"
            value={filter}
            onChange={handleFilter}
            options={[
              { value: "all", label: "All (1954–68)" },
              { value: "legal", label: "Courts & Laws" },
              { value: "direct", label: "Direct Action" },
              { value: "power", label: "Black Power" },
            ]}
          />
        </div>

        <Slider
          label={`Milestone (${clampedStep + 1} of ${visibleEvents.length})`}
          value={clampedStep}
          min={0}
          max={Math.max(0, visibleEvents.length - 1)}
          step={1}
          onChange={setStep}
          format={() => `${current.year}: ${current.label}`}
        />

        <svg
          viewBox={`0 0 ${chartW} ${chartH}`}
          className="w-full h-auto rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Line graph tracking legal desegregation milestones and Mississippi Black voter registration from 1954 to 1968"
        >
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={padL} x2={chartW - padR} y1={yForPct(v)} y2={yForPct(v)} stroke="var(--line)" strokeDasharray="3 3" />
              <text x={padL - 8} y={yForPct(v) + 3} fontSize={9.5} textAnchor="end" fill="var(--ink-2)">
                {v}%
              </text>
            </g>
          ))}
          {[1954, 1957, 1960, 1963, 1965, 1968].map((yr) => (
            <text key={yr} x={xForYear(yr)} y={chartH - 12} fontSize={9.5} textAnchor="middle" fill="var(--ink-2)">
              {yr}
            </text>
          ))}

          <path d={legalPath} fill="none" stroke="var(--brand)" strokeWidth={2.5} />
          <path d={voterPath} fill="none" stroke="var(--good)" strokeWidth={2.5} />

          {EVENTS.map((e) => {
            const active = e.year === current.year && e.label === current.label;
            return (
              <g key={`${e.year}-${e.label}`}>
                <circle
                  cx={xForYear(e.year)}
                  cy={yForPct(e.legalProgress)}
                  r={active ? 6 : 3.5}
                  fill={active ? "var(--brand)" : "var(--surface)"}
                  stroke="var(--brand)"
                  strokeWidth={2}
                />
                <circle
                  cx={xForYear(e.year)}
                  cy={yForPct(e.msVoterPct)}
                  r={active ? 6 : 3.5}
                  fill={active ? "var(--good)" : "var(--surface)"}
                  stroke="var(--good)"
                  strokeWidth={2}
                />
              </g>
            );
          })}

          <line
            x1={xForYear(current.year)}
            x2={xForYear(current.year)}
            y1={padT}
            y2={padT + plotH}
            stroke="var(--ink-2)"
            strokeWidth={1}
            strokeDasharray="4 2"
          />

          <rect x={padL + 8} y={6} width={10} height={8} rx={2} fill="var(--brand)" />
          <text x={padL + 22} y={13} fontSize={10} fontWeight={700} fill="var(--ink)">
            De Jure Legal Dismantling Index
          </text>
          <rect x={padL + 218} y={6} width={10} height={8} rx={2} fill="var(--good)" />
          <text x={padL + 232} y={13} fontSize={10} fontWeight={700} fill="var(--ink)">
            Mississippi Black Voter Reg. %
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Pillar" value={catLabel} tone="brand" />
          <Readout label="MS Black Voters" value={`~${current.msVoterPct}%`} tone="good" />
          <Readout label="Legal Progress" value={`${current.legalProgress}%`} tone="ink" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">Protest Method &amp; Leverage</div>
            <p className="mt-1 text-ink">{current.method}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-bad">Opposition &amp; Resistance</div>
            <p className="mt-1 text-ink">{current.resistance}</p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type DimensionKey = "goal" | "method" | "allies" | "wins" | "limits";

interface DimensionComparison {
  label: string;
  mlk: string;
  malcolm: string;
  panthers: string;
  synthesis: string;
}

const DIMENSIONS: Record<DimensionKey, DimensionComparison> = {
  goal: {
    label: "Core Goal",
    mlk: "Full racial integration, constitutional rights, and the ‘Beloved Community’; later expanded to economic justice (Poor People’s Campaign).",
    malcolm: "Black pride, economic self-reliance, and human rights; initially favoured separation in the Nation of Islam, later welcomed multiracial solidarity after his 1964 Hajj.",
    panthers: "Ten-Point Program: jobs, decent housing, fair trials, community control, and an immediate end to police brutality.",
    synthesis: "Notice how MLK’s 1968 anti-poverty focus and Malcolm X’s 1964–65 international human-rights vision moved closer together over time.",
  },
  method: {
    label: "Tactics & Self-Defence",
    mlk: "Strict Gandhian non-violent direct action (boycotts, marches, sit-ins) designed to expose segregationist brutality on national television.",
    malcolm: "Rejected turning the other cheek; argued for active self-defence ‘by any means necessary’ when Black citizens faced racist attacks.",
    panthers: "Legal open-carry patrols monitoring Oakland police combined with community ‘Survival Programs’ (Free Breakfast for Children, clinics).",
    synthesis: "Avoid stereotypes: Malcolm X defended *self-defence*, not unprovoked aggression, while Black Panthers fed thousands of pupils alongside policing patrols.",
  },
  allies: {
    label: "Allies & Support Base",
    mlk: "Southern Black churches, interracial coalitions, white Northern liberals, and strategic pressure on Presidents Kennedy and Johnson.",
    malcolm: "Northern urban working-class Black communities, young urban activists, and global anti-colonial solidarity across Africa and Asia.",
    panthers: "Urban Black youth in California and Northern cities, plus multiracial ‘Rainbow Coalition’ alliances with poor white and Latino groups.",
    synthesis: "Geography shaped strategy: church-based non-violence thrived in the Jim Crow South; urban alienation fuelled Malcolm X and the Panthers in Northern and Western ghettos.",
  },
  wins: {
    label: "Key Achievements",
    mlk: "Montgomery desegregation (1956), Birmingham breakthrough (1963), Civil Rights Act (1964), Voting Rights Act (1965), Nobel Peace Prize (1964).",
    malcolm: "Transformed Black cultural pride worldwide, inspired Black Power and Anti-Apartheid Black Consciousness (Steve Biko), and exposed Northern ghetto injustice.",
    panthers: "Free Breakfast for Children inspired permanent federal school breakfast funding; brought police accountability and urban poverty to national headlines.",
    synthesis: "Historians note a ‘radical flank effect’: militant voices made federal politicians more urgent about negotiating with MLK Jr. before urban unrest spread.",
  },
  limits: {
    label: "Limits & Obstacles",
    mlk: "Legal statutes struggled to fix de facto housing slums, urban unemployment, or white backlash in Northern cities like Chicago (1966).",
    malcolm: "Assassinated in February 1965 just as his post-Hajj OAAU was beginning; alienated moderate white voters who misunderstood his rhetoric.",
    panthers: "Target of intense FBI COINTELPRO surveillance, infiltration, and police shootouts; scared moderate voters toward Richard Nixon’s ‘law and order’.",
    synthesis: "Every strand faced fierce resistance—proving how deeply entrenched both legal segregation and structural economic inequality were in 1960s America.",
  },
};

function StrategyComparatorLab() {
  const [dim, setDim] = useState<DimensionKey>("method");
  const [deFactoWeight, setDeFactoWeight] = useState(50); // 0 = Jim Crow South, 100 = Northern Ghetto
  const [tvLeverage, setTvLeverage] = useState(65); // 0 = Low media sympathy, 100 = High TV outrage

  const info = DIMENSIONS[dim];

  // Historical analytical model: non-violent federal pressure peaks when targeting clear de jure Jim Crow + high TV outrage;
  // Black Power / community survival pressure peaks when confronting de facto Northern ghetto poverty & low federal sympathy.
  const nonViolentScore = Math.round(((100 - deFactoWeight) * 0.55 + tvLeverage * 0.45));
  const blackPowerScore = Math.round((deFactoWeight * 0.65 + (100 - tvLeverage) * 0.35));

  const diagnosis =
    nonViolentScore >= blackPowerScore + 12
      ? "In the Jim Crow South with high television scrutiny (like Birmingham 1963 or Selma 1965), disciplined non-violent direct action had maximum leverage to force federal laws."
      : blackPowerScore >= nonViolentScore + 12
        ? "In Northern and Western ghettos facing de facto poverty and sceptical federal politics (like Oakland or Watts after 1965), Black Power’s focus on pride, self-defence, and survival clinics addressed urgent needs federal laws missed."
        : "In mixed conditions, historians highlight the ‘radical flank effect’: non-violent campaigns negotiated legal breakthroughs while militant voices pressed politicians not to stall on economic justice.";

  return (
    <WidgetFrame
      title="Strategy Comparator: MLK Jr. vs Malcolm X & Black Power"
      tryThis={[
        "Inspect all five tabs (**Goal**, **Method**, **Allies**, **Wins**, **Limits**) to compare strategies without cartoon stereotypes.",
        "Slide **Context** toward *Jim Crow South (0%)* and **TV Sympathy** to *90%*—watch which lever surges.",
        "Now slide **Context** toward *Northern Urban Ghetto (90%)* and **TV Sympathy** to *25%*—see why Black Power resonated so strongly after 1965.",
      ]}
      caption={diagnosis}
    >
      <div className="space-y-4">
        <Segmented
          label="Comparison dimension"
          value={dim}
          onChange={setDim}
          options={[
            { value: "goal", label: "Goal" },
            { value: "method", label: "Method" },
            { value: "allies", label: "Allies" },
            { value: "wins", label: "Wins" },
            { value: "limits", label: "Limits" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="min-w-0 rounded-xl border border-brand/40 bg-brand-soft/40 p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">MLK Jr. &amp; SCLC</div>
            <p className="mt-1.5 leading-relaxed text-ink">{info.mlk}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink">Malcolm X (NOI → OAAU)</div>
            <p className="mt-1.5 leading-relaxed text-ink">{info.malcolm}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Black Panther Party</div>
            <p className="mt-1.5 leading-relaxed text-ink">{info.panthers}</p>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-xs font-medium text-ink-2">
          <strong className="text-ink">Historian’s Synthesis ({info.label}):</strong> {info.synthesis}
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-xl border border-line bg-surface p-3 sm:grid-cols-2">
          <Slider
            label="Setting: South (de jure) → North (de facto)"
            value={deFactoWeight}
            min={0}
            max={100}
            step={5}
            onChange={setDeFactoWeight}
            format={(v) => (v < 35 ? `${v}% (Jim Crow South)` : v > 65 ? `${v}% (Urban Ghetto)` : `${v}% (Mixed)`)}
          />
          <Slider
            label="National TV & Federal Sympathy"
            value={tvLeverage}
            min={0}
            max={100}
            step={5}
            onChange={setTvLeverage}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Non-Violent Federal Leverage" value={`${nonViolentScore} / 100`} tone="brand" />
          <Readout label="Black Power / Survival Resonance" value={`${blackPowerScore} / 100`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "protest-law-tracker",
    title: "Protest Methods & Federal Law Tracker (1954–68)",
    blurb: "Scrub across the 1954–68 timeline to see how courts, boycotts, and television pushed voter registration and federal law.",
    Component: ProtestLawTracker,
  },
  {
    id: "mlk-malcolm-comparator",
    title: "MLK Jr. vs Malcolm X & Black Power Comparator",
    blurb: "Compare goals, methods, and achievements side-by-side and test how Southern vs Northern conditions shaped protest strategy.",
    Component: StrategyComparatorLab,
  },
];
