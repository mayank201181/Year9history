"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

interface EraSnapshot {
  year: number;
  eraLabel: string;
  constitutional: string;
  economic: string;
  urbanSocial: string;
  landKm2: number;
  hdbPct: number;
  turningPoint: string;
}

const ERAS: EraSnapshot[] = [
  {
    year: 1942,
    eraLabel: "1942–45: Fall of Singapore",
    constitutional: "British Crown Colony falls to Imperial Japan (15 Feb 1942 → Syonan-to), shattering the myth of British invincibility.",
    economic: "Entrepôt trade collapses under war occupation; acute shortages, rationing, and worthless ‘banana notes’ hyperinflation.",
    urbanSocial: "Sook Ching trauma and severe overcrowding; local resistance heroes (Lim Bo Seng, Elizabeth Choy) inspire self-reliance.",
    landKm2: 581,
    hdbPct: 5,
    turningPoint: "After 1945, colonial prestige could never return to normal.",
  },
  {
    year: 1955,
    eraLabel: "1955: Rendel & Unrest",
    constitutional: "Rendel Constitution grants partial self-government; Labour Front’s David Marshall becomes Singapore’s first Chief Minister.",
    economic: "Post-war unemployment and labour militancy surge; colonial entrepôt trade cannot absorb a booming young population.",
    urbanSocial: "Maria Hertogh (1950) and Hock Lee bus riots (1955) expose colonial insensitivity and deep slum/squatter poverty.",
    landKm2: 581,
    hdbPct: 8,
    turningPoint: "Unrest and elected politics force Britain toward internal self-government.",
  },
  {
    year: 1959,
    eraLabel: "1959: Internal Self-Gov",
    constitutional: "PAP wins 43/51 seats; Lee Kuan Yew becomes Prime Minister (Yusof bin Ishak Head of State). UK retains defence & foreign affairs.",
    economic: "Urgent job creation planned; UN economist Albert Winsemius advises creating EDB and pivoting to manufacturing.",
    urbanSocial: "Only ~9% live in colonial SIT flats; overcrowded shophouses and fire-prone squatter settlements dominate the island.",
    landKm2: 581,
    hdbPct: 9,
    turningPoint: "Domestic self-rule begins—yet full independence is still six years away.",
  },
  {
    year: 1963,
    eraLabel: "1963: Merger with Malaysia",
    constitutional: "Singapore joins Malaya, Sabah, and Sarawak (16 Sept 1963) for decolonisation and security after Operation Coldstore.",
    economic: "EDB (1961) and Dr Goh Keng Swee’s Jurong Industrial Estate launch, counting on a tariff-free Malaysian Common Market.",
    urbanSocial: "Following the May 1961 Bukit Ho Swee fire (16,000 homeless), Lim Kim San’s HDB builds concrete flats in 9 months.",
    landKm2: 582,
    hdbPct: 18,
    turningPoint: "Economic disputes, ‘Malaysian Malaysia’, and 1964 racial riots soon tear Merger apart.",
  },
  {
    year: 1965,
    eraLabel: "1965: Sudden Independence",
    constitutional: "Separation on 9 August 1965 creates an anxious sovereign republic with no standing army amid Konfrontasi.",
    economic: "Cut off from Malaysia’s Common Market—soon hit by Britain’s 1968 troop withdrawal announcement (~20% of GDP).",
    urbanSocial: "HDB Home Ownership (1964) begins; Bilingual Education (1966) and National Service (1967) launch nation-building.",
    landKm2: 582,
    hdbPct: 23,
    turningPoint: "Existential vulnerability forces Singapore to treat the entire world as its market.",
  },
  {
    year: 1972,
    eraLabel: "1972: MNCs & PSA Containers",
    constitutional: "National Service and Total Defence mature as British bases close; clean CPIB governance builds global investor trust.",
    economic: "Export-led industrialisation booms: EDB courts global MNCs (Texas Instruments, HP, Shell) and PSA opens Tanjong Pagar container berths.",
    urbanSocial: "Unlocking CPF savings (1968) supercharges HDB Home Ownership across New Towns like Queenstown and Toa Payoh.",
    landKm2: 586,
    hdbPct: 42,
    turningPoint: "Early containerisation turns the Strait of Malacca into a premier global transhipment hub.",
  },
  {
    year: 1981,
    eraLabel: "1981: Changi & Higher Skills",
    constitutional: "Stable technocratic planning underpins multi-decade infrastructure projects and rising international stature.",
    economic: "Changi Airport opens on reclaimed coast (replacing Paya Lebar); economy shifts from basic assembly toward finance and electronics.",
    urbanSocial: "Over two-thirds of residents move from kampungs into modern HDB estates—raising living standards while transforming heritage.",
    landKm2: 618,
    hdbPct: 70,
    turningPoint: "Global aviation and maritime hubs reinforce Singapore’s move up the value chain.",
  },
  {
    year: 1989,
    eraLabel: "1989: HDB EIP & Cohesion",
    constitutional: "Ethnic Integration Policy (EIP, 1989) introduces HDB block and neighbourhood quotas to prevent racial enclaves.",
    economic: "High-skill manufacturing, banking, and logistics drive rapid GDP per capita convergence with developed economies.",
    urbanSocial: "MRT network expands and ~80% of resident households live in HDB flats—balancing social mixing against resale trade-offs.",
    landKm2: 626,
    hdbPct: 84,
    turningPoint: "Deliberate multiracial housing rules institutionalise lessons from the 1964 riots.",
  },
  {
    year: 2025,
    eraLabel: "2020s: Sustainable Global Hub",
    constitutional: "Governance balances long-term planning with wider civic debate, social mobility, and demographic ageing.",
    economic: "Knowledge hub (semiconductors, finance, biomedical, Tuas Mega Port, Changi T5) facing global competition and living-cost pressures.",
    urbanSocial: "Land area ~735 km² (+25% reclamation); Four National Taps (NEWater) and Green Plan 2030 target climate resilience.",
    landKm2: 735,
    hdbPct: 80,
    turningPoint: "Today’s enquiry asks how Singapore balances growth with climate, heritage, and equity.",
  },
];

function TransformationTimelineExplorer() {
  const [idx, setIdx] = useState<number>(4); // Start at 1965 Independence
  const [focus, setFocus] = useState<"constitutional" | "economic" | "urbanSocial">("economic");

  const era = ERAS[idx];
  const landBar = Math.round(((era.landKm2 - 500) / 260) * 260);
  const hdbBar = Math.round((era.hdbPct / 100) * 260);
  const focusText =
    focus === "constitutional"
      ? era.constitutional
      : focus === "economic"
        ? era.economic
        : era.urbanSocial;

  return (
    <WidgetFrame
      title="Singapore 1942–Present Transformation Timeline Explorer"
      tryThis={[
        "Drag the timeline slider from **1959** to **1965** to **1989** and watch both **HDB Public Housing (%)** and **Land Area (km²)** transform.",
        "Switch between **Constitutional**, **Economic**, and **Urban & Social** lenses at 1965 and 2025 to spot continuity, change, and trade-offs.",
      ]}
      caption={
        <span>
          <strong>Key Turning Point ({era.year}):</strong> {era.turningPoint}
        </span>
      }
    >
      <div className="space-y-4">
        <Slider
          label="Timeline Milestone"
          value={idx}
          min={0}
          max={ERAS.length - 1}
          step={1}
          onChange={setIdx}
          format={(v) => ERAS[v].eraLabel}
        />

        <div className="flex flex-wrap gap-1.5">
          {ERAS.map((e, i) => (
            <button
              key={e.year}
              type="button"
              onClick={() => setIdx(i)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-extrabold transition ${
                i === idx
                  ? "border-brand bg-brand text-brand-ink"
                  : "border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {e.year}
            </button>
          ))}
        </div>

        <Segmented
          label="Select transformation lens"
          value={focus}
          onChange={setFocus}
          options={[
            { value: "constitutional", label: "Constitutional / Politics" },
            { value: "economic", label: "Economic" },
            { value: "urbanSocial", label: "Urban & Social" },
          ]}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm text-ink">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">{era.eraLabel}</div>
          <p className="mt-1 leading-relaxed">{focusText}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Physical Land Area" value={`~${era.landKm2} km²`} tone="brand" />
          <Readout label="Public Housing Share" value={`~${era.hdbPct}%`} tone="good" />
        </div>

        <svg viewBox="0 0 500 112" className="w-full h-auto" role="img" aria-label={`Singapore indicators in ${era.year}: land area ${era.landKm2} sq km and public housing ${era.hdbPct} percent`}>
          <rect x="0" y="0" width="500" height="112" rx="10" fill="var(--surface-2)" />
          <text x="16" y="34" fontSize="11.5" fontWeight="700" fill="var(--ink)">Land Area (km²)</text>
          <rect x="155" y="21" width="260" height="18" rx="8" fill="var(--surface)" stroke="var(--line)" />
          <rect x="155" y="21" width={Math.max(12, landBar)} height="18" rx="8" fill="var(--brand)" />
          <text x="425" y="34" fontSize="11.5" fontWeight="800" fill="var(--brand)">{era.landKm2} km²</text>

          <text x="16" y="76" fontSize="11.5" fontWeight="700" fill="var(--ink)">Public Housing (%)</text>
          <rect x="155" y="63" width="260" height="18" rx="8" fill="var(--surface)" stroke="var(--line)" />
          <rect x="155" y="63" width={Math.max(10, hdbBar)} height="18" rx="8" fill="var(--good)" />
          <text x="425" y="76" fontSize="11.5" fontWeight="800" fill="var(--good)">~{era.hdbPct}%</text>

          <text x="16" y="102" fontSize="9.5" fill="var(--ink-2)">
            Scale compares 1942–2025 transformation across land reclamation (+25% since 1965) and HDB home ownership.
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

type CaseId = "hdb" | "jurong" | "changi" | "water" | "multiracial";
type StemId = "when" | "describe" | "extent" | "howfar";

interface EnquiryCaseData {
  title: string;
  closedQ: string;
  descriptiveQ: string;
  extentQ: string;
  howFarQ: string;
  history: string;
  politics: string;
  geography: string;
  economics: string;
}

const ENQUIRY_CASES: Record<CaseId, EnquiryCaseData> = {
  hdb: {
    title: "HDB Public Housing",
    closedQ: "When was the Housing & Development Board (HDB) established in Singapore?",
    descriptiveQ: "Describe HDB apartment blocks and facilities in Singapore.",
    extentQ: "To what extent did HDB housing policy achieve both economic stability and multiracial cohesion (1960–2000)?",
    howFarQ: "How far did HDB New Towns and CPF Home Ownership solve urban poverty without losing community heritage?",
    history: "1961 Bukit Ho Swee fire (16,000 homeless) → Lim Kim San’s 9-month rebuild replacing colonial SIT flats.",
    politics: "1964 Home Ownership gives citizens a stake in stability; 1989 EIP quotas prevent ethnic enclaves.",
    geography: "High-rise New Towns (Queenstown, Toa Payoh, Tampines) optimise scarce land beside MRT & parks.",
    economics: "1968 CPF housing withdrawals unlock affordability (~80% HDB share) alongside modern resale debates.",
  },
  jurong: {
    title: "Jurong & Industrialisation",
    closedQ: "Who nicknamed Jurong Industrial Estate ‘Goh’s Folly’ in 1961?",
    descriptiveQ: "List the factories and businesses operating inside Jurong today.",
    extentQ: "To what extent did Jurong Industrial Estate balance rapid export growth with environmental sustainability (1961–2025)?",
    howFarQ: "How far were EDB incentives more decisive than geography in turning Singapore from entrepôt trade to MNC manufacturing?",
    history: "Post-1965 loss of Common Market + 1968 UK troop withdrawal drove Dr Goh Keng Swee’s pivot to world exports.",
    politics: "Clean anti-corruption governance (CPIB) and industrial peace laws reassured international investors.",
    geography: "Clearing western mangrove swamps, coastal reclamation, and industrial zoning away from housing.",
    economics: "EDB tax incentives, MNCs (Shell, TI, HP), falling unemployment, and climbing into high-tech value chains.",
  },
  changi: {
    title: "Changi & PSA Global Hub",
    closedQ: "In what year did Changi Airport replace Paya Lebar Airport?",
    descriptiveQ: "Describe the terminals, shipping cranes, and shops at Changi and PSA.",
    extentQ: "To what extent have Changi Airport and PSA port secured Singapore’s prosperity despite rising climate pressures (1972–2025)?",
    howFarQ: "How far did bold 1970s infrastructure gambles outweigh Singapore’s Strait of Malacca location?",
    history: "1972 Tanjong Pagar container gamble + 1975–81 shift from cramped Paya Lebar to coastal Changi.",
    politics: "Long-term state land planning and modern parliamentary debates on aviation carbon taxes & Terminal 5.",
    geography: "Strait of Malacca chokepoint, reclaimed coastal runways over the sea, and automated Tuas Mega Port.",
    economics: "Maritime transhipment, air-cargo logistics, tourism GDP, and staying ahead of rival regional hubs.",
  },
  water: {
    title: "Water & Green Plan 2030",
    closedQ: "How many National Taps make up Singapore’s water supply strategy?",
    descriptiveQ: "Tell me all the reservoirs and parks located in Singapore.",
    extentQ: "To what extent have the Four National Taps and Green Plan 2030 achieved sustainable resilience since 1965?",
    howFarQ: "How far can technological innovation overcome tiny-island resource scarcity and sea-level rise?",
    history: "1961–62 Johor water agreements and 1965 Separation anxieties sparked decades of water innovation.",
    politics: "Water self-sufficiency as sovereign security alongside bilateral diplomacy and carbon-tax laws.",
    geography: "17 urban catchments (Marina Barrage), NEWater loops, desalination, and ‘City in Nature’ corridors.",
    economics: "High energy costs of desalination vs water tariffs, green-finance jobs, and coastal protection budgets.",
  },
  multiracial: {
    title: "Multiracial Nation-Building",
    closedQ: "In what year did Singapore introduce compulsory National Service?",
    descriptiveQ: "List the four official languages and festivals celebrated in Singapore.",
    extentQ: "To what extent have Bilingualism, National Service, Meritocracy, and EIP forged unity since 1965?",
    howFarQ: "How far have state integration policies balanced social cohesion with individual equity and choice?",
    history: "1950 Maria Hertogh & 1964 Merger racial riots taught leaders that harmony could never be taken for granted.",
    politics: "1966 Bilingualism, 1967 NS, Meritocracy, and 1989 HDB EIP quotas actively engineered multiracial unity.",
    geography: "Replacing colonial ethnic enclaves with spatially integrated HDB estates and shared neighbourhood hubs.",
    economics: "English fluency boosted global MNC wages, while modern debates address meritocracy and wealth inequality.",
  },
};

function CombinedHumanitiesEnquiryBuilder() {
  const [caseId, setCaseId] = useState<CaseId>("hdb");
  const [stem, setStem] = useState<StemId>("extent");
  const [lenses, setLenses] = useState({ history: true, politics: true, geography: true, economics: true });

  const data = ENQUIRY_CASES[caseId];
  const questionText =
    stem === "when"
      ? data.closedQ
      : stem === "describe"
        ? data.descriptiveQ
        : stem === "extent"
          ? data.extentQ
          : data.howFarQ;

  const activeCount = Number(lenses.history) + Number(lenses.politics) + Number(lenses.geography) + Number(lenses.economics);
  const stemPoints = stem === "when" ? 15 : stem === "describe" ? 35 : 60;
  const lensPoints = activeCount * 10;
  const totalScore = Math.min(100, stemPoints + lensPoints);

  const rating =
    stem === "when"
      ? "Weak (Closed Fact Check)"
      : stem === "describe"
        ? "Developing (Too Descriptive)"
        : activeCount >= 4
          ? "Top-Band Combined Humanities!"
          : activeCount >= 3
            ? "Strong Multi-Lens Enquiry"
            : "Needs More Humanities Lenses";

  const tone = totalScore >= 90 ? "good" : totalScore >= 60 ? "brand" : "bad";

  const toggle = (key: keyof typeof lenses) => setLenses((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <WidgetFrame
      title="Combined Humanities 4-Lens Enquiry Builder"
      tryThis={[
        "Compare **When / What (Closed)** vs **To what extent…** to see why evaluative command stems unlock debate.",
        "Toggle **History, Politics, Geography, and Economics** lenses on/off to watch your Enquiry Score and 4-Quadrant Evidence Map update live.",
      ]}
      caption={
        <span>
          <strong>Design Feedback:</strong>{" "}
          {stem === "when"
            ? "Closed questions end in one fact with zero debate—switch to ‘To what extent…’ or ‘How far…’!"
            : stem === "describe"
              ? "‘Describe/List…’ encourages copying facts without evaluating trade-offs—upgrade your command stem!"
              : activeCount === 4
                ? "Excellent! Your question is focused, debatable, and integrates all four H-P-G-E lenses."
                : "Great evaluative stem—activate all 4 lenses (History, Politics, Geography, Economics) for top-band synthesis!"}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Pick a Singapore Case Study</div>
          <Segmented
            label="Pick Singapore case study"
            value={caseId}
            onChange={setCaseId}
            options={[
              { value: "hdb", label: "HDB Housing" },
              { value: "jurong", label: "Jurong / EDB" },
              { value: "changi", label: "Changi / PSA" },
              { value: "water", label: "Water / Green" },
              { value: "multiracial", label: "Multiracialism" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Choose Command Stem</div>
          <Segmented
            label="Choose enquiry command stem"
            value={stem}
            onChange={setStem}
            options={[
              { value: "when", label: "When / What (Closed)" },
              { value: "describe", label: "Describe (Vague)" },
              { value: "extent", label: "To what extent…" },
              { value: "howfar", label: "How far…" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Integrate Combined Humanities Lenses (H-P-G-E)</div>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { key: "history", label: "History" },
                { key: "politics", label: "Politics" },
                { key: "geography", label: "Geography" },
                { key: "economics", label: "Economics" },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggle(item.key)}
                className={`rounded-xl border px-3 py-1.5 text-sm font-bold transition ${
                  lenses[item.key]
                    ? "border-brand bg-brand-soft text-brand"
                    : "border-line bg-surface-2 text-ink-2"
                }`}
              >
                {lenses[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Generated Enquiry Title</div>
          <div className="mt-1 text-base font-extrabold text-ink">“{questionText}”</div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Enquiry Strength" value={`${totalScore} / 100`} tone={tone} />
          <Readout label="Assessment Band" value={rating} tone={tone} />
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className={`rounded-xl border p-3 text-sm ${lenses.history ? "border-brand bg-brand-soft/40" : "border-line bg-surface-2 opacity-45"}`}>
            <div className="font-extrabold text-brand">History Lens</div>
            <p className="mt-1 text-xs leading-relaxed text-ink">{data.history}</p>
          </div>
          <div className={`rounded-xl border p-3 text-sm ${lenses.politics ? "border-bad bg-bad-soft/40" : "border-line bg-surface-2 opacity-45"}`}>
            <div className="font-extrabold text-bad">Politics Lens</div>
            <p className="mt-1 text-xs leading-relaxed text-ink">{data.politics}</p>
          </div>
          <div className={`rounded-xl border p-3 text-sm ${lenses.geography ? "border-good bg-good-soft/40" : "border-line bg-surface-2 opacity-45"}`}>
            <div className="font-extrabold text-good">Geography Lens</div>
            <p className="mt-1 text-xs leading-relaxed text-ink">{data.geography}</p>
          </div>
          <div className={`rounded-xl border p-3 text-sm ${lenses.economics ? "border-warn bg-accent-soft/40" : "border-line bg-surface-2 opacity-45"}`}>
            <div className="font-extrabold text-warn">Economics Lens</div>
            <p className="mt-1 text-xs leading-relaxed text-ink">{data.economics}</p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "singapore-transformation-timeline",
    title: "Singapore 1942–Present Transformation Timeline Explorer",
    blurb: "Scrub across key milestones from 1942 to the 2020s to compare constitutional, economic, and urban-social transformation.",
    Component: TransformationTimelineExplorer,
  },
  {
    id: "combined-humanities-enquiry-builder",
    title: "Combined Humanities 4-Lens Enquiry Builder",
    blurb: "Draft and test a Year 9 Combined Humanities enquiry question while mapping History, Politics, Geography, and Economics evidence.",
    Component: CombinedHumanitiesEnquiryBuilder,
  },
];
