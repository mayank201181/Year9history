"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

type SourceId = "irwin" | "alabama" | "mlk" | "soweto" | "climate";
type EnquiryMode = "attitudes" | "facts";

interface SourceRecord {
  id: SourceId;
  shortTitle: string;
  quote: string;
  nature: string;
  origin: string;
  purpose: string;
  ownKnowledge: string;
  omission: string;
  utilityAttitudes: number;
  utilityFacts: number;
  verdictAttitudes: string;
  verdictFacts: string;
}

const SOURCES: Record<SourceId, SourceRecord> = {
  irwin: {
    id: "irwin",
    shortTitle: "1930 Raj Telegram",
    quote: "“Gandhi’s march attracts curious villagers, though arrests too soon would risk making him a martyr.”",
    nature: "Confidential government telegram (private official brief)",
    origin: "Viceroy Lord Irwin in New Delhi, April 1930",
    purpose: "To brief London candidly on whether to arrest Gandhi during the Salt March",
    ownKnowledge: "Within weeks of Dandi (6 April 1930), over 60,000 Indians were arrested nationwide and international press exposed British beatings.",
    omission: "Understates deep villager resentment of the British Salt Tax monopoly.",
    utilityAttitudes: 92,
    utilityFacts: 58,
    verdictAttitudes: "Very high utility: private diplomatic nature encouraged honest admission of colonial anxieties about creating a martyr.",
    verdictFacts: "Moderate reliability alone: accurately reflects early official hesitation, yet underestimates the nationwide scale of protests.",
  },
  alabama: {
    id: "alabama",
    shortTitle: "1963 AL Editorial",
    quote: "“Birmingham’s street disorders are stirred up purely by paid outside agitators with zero backing from local residents.”",
    nature: "Partisan front-page newspaper editorial",
    origin: "Segregationist Alabama newspaper editor, May 1963",
    purpose: "To reassure white segregationist readers and delegitimise civil rights marchers",
    ownKnowledge: "Thousands of local Birmingham residents and schoolchildren marched voluntarily against Jim Crow; police attacked them with hoses and dogs.",
    omission: "Completely omits local segregation grievances and Bull Connor’s police brutality.",
    utilityAttitudes: 90,
    utilityFacts: 18,
    verdictAttitudes: "Very high utility! Bias IS evidence: exposes the exact ‘outside agitator’ propaganda tactic used to resist desegregation.",
    verdictFacts: "Very low factual reliability: directly contradicted by local turnout and television footage—must cross-reference.",
  },
  mlk: {
    id: "mlk",
    shortTitle: "1963 MLK Letter",
    quote: "“For years now I have heard the word ‘Wait!’ It rings in the ear of every Negro with piercing familiarity.”",
    nature: "Published open letter written from prison",
    origin: "Martin Luther King Jr., Birmingham Jail, April 1963",
    purpose: "To persuade moderate white clergymen and national readers that non-violent direct action could not wait",
    ownKnowledge: "Eight white Alabama clergymen had publicly criticised King’s marches days earlier; the letter became a moral rallying cry nationwide.",
    omission: "Smooths over strategic debates with younger, more militant activists in SNCC.",
    utilityAttitudes: 95,
    utilityFacts: 64,
    verdictAttitudes: "Exceptional utility for understanding King’s moral philosophy, rhetorical skill, and appeal to moderate Americans.",
    verdictFacts: "Useful for civil rights grievances, though as a persuasive open letter it should be paired with grassroots and opponent sources.",
  },
  soweto: {
    id: "soweto",
    shortTitle: "1976 Police Release",
    quote: "“Police opened fire in Soweto strictly in self-defence against violent rioters endangering public safety.”",
    nature: "Official state police press release",
    origin: "South African Police HQ, Johannesburg, June 1976",
    purpose: "To justify lethal force domestically and limit international diplomatic outrage",
    ownKnowledge: "Around 20,000 unarmed school pupils marched peacefully against compulsory Afrikaans schooling; Sam Nzima’s photo of Hector Pieterson exposed the shootings.",
    omission: "Omits students’ peaceful banners against Bantu Education and Afrikaans-medium lessons.",
    utilityAttitudes: 88,
    utilityFacts: 15,
    verdictAttitudes: "High utility for studying how the apartheid state constructed official excuses to defend repression.",
    verdictFacts: "Very low factual reliability: strongly contradicted by eyewitnesses, photographs, and casualties.",
  },
  climate: {
    id: "climate",
    shortTitle: "2019 Climate Post",
    quote: "“Our house is on fire! Walk out this Friday—4 million voices across 150 countries demand climate action NOW! #FridaysForFuture”",
    nature: "Viral social-media campaign post",
    origin: "Youth climate organisers online, September 2019",
    purpose: "To mobilise school students worldwide before the UN Climate Action Summit",
    ownKnowledge: "Over 4 million joined global strikes in September 2019, demonstrating massive youth reach—yet binding global fossil-fuel cuts remained elusive.",
    omission: "Omits economic transition worries among energy-sector workers and voters.",
    utilityAttitudes: 91,
    utilityFacts: 46,
    verdictAttitudes: "High utility for studying digital youth slogans, emotional framing, and global network speed.",
    verdictFacts: "Limited reliability for judging wider adult public opinion—must cross-reference with representative surveys and policy outcomes.",
  },
};

function NopSourceUtilityLab() {
  const [sourceId, setSourceId] = useState<SourceId>("alabama");
  const [enquiry, setEnquiry] = useState<EnquiryMode>("attitudes");
  const [lens, setLens] = useState<"N" | "O" | "P" | "OK">("P");

  const src = SOURCES[sourceId];
  const score = enquiry === "attitudes" ? src.utilityAttitudes : src.utilityFacts;
  const verdict = enquiry === "attitudes" ? src.verdictAttitudes : src.verdictFacts;
  const barWidth = Math.round((score / 100) * 320);
  const scoreTone = score >= 75 ? "good" : score >= 45 ? "brand" : "bad";
  const barFill = score >= 75 ? "var(--good)" : score >= 45 ? "var(--brand)" : "var(--bad)";

  const lensDetail =
    lens === "N"
      ? { title: "N — Nature (Format)", text: src.nature }
      : lens === "O"
        ? { title: "O — Origin (Who / When / Where)", text: src.origin }
        : lens === "P"
          ? { title: "P — Purpose (Why / Audience)", text: src.purpose }
          : { title: "OK — Own Knowledge & Omissions", text: `${src.ownKnowledge} Omission spotted: ${src.omission}` };

  return (
    <WidgetFrame
      title="NOP Source Utility & Bias Lab"
      tryThis={[
        "Select **1963 AL Editorial** or **1976 Police Release** and flip the enquiry between **Neutral Facts** and **Creator Attitudes**.",
        "Watch how a heavily biased source jumps from **low factual reliability** to **high utility**—proving why historians NEVER say ‘biased = useless’!",
      ]}
      caption={
        <span>
          <strong>Historian’s Verdict:</strong> {verdict}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose a Protest Source</div>
          <Segmented
            label="Choose protest source"
            value={sourceId}
            onChange={setSourceId}
            options={[
              { value: "alabama", label: "1963 Editorial" },
              { value: "irwin", label: "1930 Telegram" },
              { value: "mlk", label: "1963 MLK Letter" },
              { value: "soweto", label: "1976 Police" },
              { value: "climate", label: "2019 Post" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm italic text-ink">
          <div className="mb-1 text-xs font-extrabold not-italic uppercase tracking-wide text-brand">{src.shortTitle} — Content Extract</div>
          {src.quote}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Enquiry Question (“Useful FOR what?”)</div>
            <Segmented
              label="Select enquiry focus"
              value={enquiry}
              onChange={setEnquiry}
              options={[
                { value: "attitudes", label: "Creator Attitudes" },
                { value: "facts", label: "Neutral Facts" },
              ]}
            />
          </div>
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Inspect NOP + Own Knowledge</div>
            <Segmented
              label="Inspect NOP pillar"
              value={lens}
              onChange={setLens}
              options={[
                { value: "N", label: "Nature" },
                { value: "O", label: "Origin" },
                { value: "P", label: "Purpose" },
                { value: "OK", label: "Own Knowledge" },
              ]}
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 text-sm">
          <div className="font-extrabold text-brand">{lensDetail.title}</div>
          <p className="mt-1 text-ink">{lensDetail.text}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 items-center">
          <Readout
            label={enquiry === "attitudes" ? "Utility (Attitudes)" : "Reliability (Facts)"}
            value={`${score}%`}
            tone={scoreTone}
          />
          <div className="sm:col-span-2 min-w-0">
            <svg viewBox="0 0 380 68" className="w-full h-auto" role="img" aria-label={`Source utility gauge showing ${score} percent`}>
              <rect x="0" y="0" width="380" height="68" rx="10" fill="var(--surface-2)" />
              <text x="16" y="21" fontSize="11" fontWeight="800" fill="var(--ink)">
                {enquiry === "attitudes" ? "Utility for Studying Attitudes & Purpose" : "Reliability Alone for Neutral Facts"}
              </text>
              <rect x="16" y="32" width="320" height="16" rx="8" fill="var(--surface)" stroke="var(--line)" />
              <rect x="16" y="32" width={barWidth} height="16" rx="8" fill={barFill} />
              <text x="344" y="44" fontSize="11.5" fontWeight="800" fill="var(--ink)">{score}%</text>
              <text x="16" y="61" fontSize="9.5" fill="var(--ink-2)">
                {score >= 75 ? "High value for this enquiry" : score >= 45 ? "Partial value — cross-reference required" : "Weak for neutral facts — switch enquiry to attitudes!"}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type PresetId = "india" | "us" | "sa" | "modern" | "custom";

interface MovementScores {
  label: string;
  goal: number;
  moral: number;
  economic: number;
  org: number;
  timing: number;
  summary: string;
}

const MOVEMENT_PRESETS: Record<Exclude<PresetId, "custom">, MovementScores> = {
  india: {
    label: "Indian Independence (1919–47)",
    goal: 9,
    moral: 9,
    economic: 8,
    org: 9,
    timing: 9,
    summary: "Strong INC organisation, Salt March moral leverage, khadi boycotts, and Britain’s post-WWII exhaustion aligned to end the Raj—though communal tensions led to Partition.",
  },
  us: {
    label: "US Civil Rights (1954–68)",
    goal: 9,
    moral: 10,
    economic: 8,
    org: 9,
    timing: 8,
    summary: "Clear legal targets (desegregation & voting rights), TV exposure in Birmingham/Selma, bus boycotts, NAACP/SCLC/SNCC networks, and Cold War pressure delivered the 1964–65 Acts.",
  },
  sa: {
    label: "Anti-Apartheid (1948–94)",
    goal: 9,
    moral: 9,
    economic: 9,
    org: 9,
    timing: 8,
    summary: "Took 46 years because apartheid controlled the national state, until mass internal resistance (Soweto, UDF, COSATU) combined with 1980s sanctions and the 1989 Cold War end.",
  },
  modern: {
    label: "21st-Century Climate Strikes",
    goal: 5,
    moral: 9,
    economic: 4,
    org: 5,
    timing: 5,
    summary: "Extraordinary global visibility and youth moral urgency, yet broad multi-state targets, slacktivism risks, and lower direct economic leverage make binding treaty reform far harder.",
  },
};

function ProtestSuccessMatrix() {
  const [preset, setPreset] = useState<PresetId>("us");
  const [custom, setCustom] = useState({ goal: 7, moral: 8, economic: 5, org: 5, timing: 6 });

  const active = preset === "custom"
    ? {
        label: "Custom Campaign Sandbox",
        ...custom,
        summary:
          custom.economic >= 7 && custom.org >= 7 && custom.goal >= 7
            ? "Strong bargaining power: pairing clear targets with economic leverage and offline organisation avoids slacktivism and tactical freeze."
            : custom.moral >= 8 && (custom.org <= 5 || custom.economic <= 5)
              ? "High viral awareness, but watch out for slacktivism and tactical freeze: boost offline organisation and economic leverage to turn sympathy into law!"
              : "Balanced mix—raise your weakest ingredient to see how internal tactics interact with favourable external timing.",
      }
    : MOVEMENT_PRESETS[preset];

  const rows = [
    { key: "goal", name: "Clear, Focused Goal", value: active.goal, color: "var(--good)" },
    { key: "moral", name: "Moral Discipline & Media", value: active.moral, color: "var(--brand)" },
    { key: "economic", name: "Economic / Political Leverage", value: active.economic, color: "var(--warn)" },
    { key: "org", name: "Offline Organisation & Staying Power", value: active.org, color: "var(--info)" },
    { key: "timing", name: "Favourable External Timing", value: active.timing, color: "var(--brand-2)" },
  ];

  const totalScore = Math.round(((active.goal + active.moral + active.economic + active.org + active.timing) / 50) * 100);
  const riskLabel =
    active.org <= 5 && active.economic <= 5
      ? "High Slacktivism / Freeze Risk"
      : active.timing <= 4
        ? "Long Multi-Decade Struggle"
        : totalScore >= 80
          ? "High Breakthrough Potential"
          : "Partial / Gradual Reform";

  return (
    <WidgetFrame
      title="Cross-Movement Success Ingredients Matrix"
      tryThis={[
        "Compare **US Civil Rights** and **21st-Century Climate** to see which two bars drop sharpest.",
        "Switch to **Build Your Own** and test what happens when Moral Sympathy is 9/10 while Economic Leverage and Organisation sit below 5/10.",
      ]}
      caption={
        <span>
          <strong>Analytical Takeaway ({active.label}):</strong> {active.summary}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Select historical movement or sandbox"
          value={preset}
          onChange={setPreset}
          options={[
            { value: "india", label: "India" },
            { value: "us", label: "US Civil Rights" },
            { value: "sa", label: "South Africa" },
            { value: "modern", label: "Modern Climate" },
            { value: "custom", label: "Build Your Own" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Combined Leverage Index" value={`${totalScore} / 100`} tone={totalScore >= 75 ? "good" : totalScore >= 55 ? "brand" : "bad"} />
          <Readout label="Predicted Trajectory" value={riskLabel} tone={totalScore >= 75 ? "good" : "ink"} />
        </div>

        <svg viewBox="0 0 520 195" className="w-full h-auto" role="img" aria-label={`Bar chart of five protest success ingredients for ${active.label}`}>
          <rect x="0" y="0" width="520" height="195" rx="10" fill="var(--surface-2)" />
          {rows.map((r, i) => {
            const y = 20 + i * 34;
            const w = Math.round((r.value / 10) * 260);
            return (
              <g key={r.key}>
                <text x="14" y={y + 14} fontSize="11" fontWeight="700" fill="var(--ink)">{r.name}</text>
                <rect x="214" y={y + 2} width="260" height="16" rx="8" fill="var(--surface)" stroke="var(--line)" />
                <rect x="214" y={y + 2} width={w} height="16" rx="8" fill={r.color} />
                <text x="484" y={y + 14} fontSize="11.5" fontWeight="800" fill="var(--ink)">{r.value}/10</text>
              </g>
            );
          })}
        </svg>

        {preset === "custom" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 rounded-xl border border-line bg-surface p-3">
            <Slider label="Clear, Focused Goal" value={custom.goal} min={1} max={10} onChange={(v) => setCustom((c) => ({ ...c, goal: v }))} />
            <Slider label="Moral Discipline & Media" value={custom.moral} min={1} max={10} onChange={(v) => setCustom((c) => ({ ...c, moral: v }))} />
            <Slider label="Economic / Political Leverage" value={custom.economic} min={1} max={10} onChange={(v) => setCustom((c) => ({ ...c, economic: v }))} />
            <Slider label="Offline Organisation" value={custom.org} min={1} max={10} onChange={(v) => setCustom((c) => ({ ...c, org: v }))} />
            <Slider label="Favourable External Timing" value={custom.timing} min={1} max={10} onChange={(v) => setCustom((c) => ({ ...c, timing: v }))} />
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "nop-source-utility-lab",
    title: "NOP Source Utility & Bias Lab",
    blurb: "Test five real protest sources across different enquiry questions to see why biased sources still have high historical utility.",
    Component: NopSourceUtilityLab,
  },
  {
    id: "protest-success-matrix",
    title: "Cross-Movement Success Ingredients Matrix",
    blurb: "Compare India, US Civil Rights, South Africa, and 21st-century climate strikes—or design your own campaign to test slacktivism vs leverage.",
    Component: ProtestSuccessMatrix,
  },
];
