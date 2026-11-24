import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1955, printing boycott leaflets in Montgomery took an entire midnight shift on a hand-cranked mimeograph machine; in 2019, a teenager's climate placard reached 150 countries from a single smartphone. Why did the older, slower campaign still win binding legal change faster?",
  didYouKnow: [
    "Jo Ann Robinson and two students stayed up all night on 1 December 1955 mimeographing 35,000 paper flyers at Alabama State College to launch the Montgomery Bus Boycott—the 1950s equivalent of going viral.",
    "Activist Tarana Burke coined 'Me Too' in 2006 to help young survivors in Alabama—eleven full years before the phrase became a global hashtag in October 2017.",
    "Political scientist Erica Chenoweth's study of 323 resistance campaigns between 1900 and 2006 found that mass non-violent campaigns succeeded roughly twice as often as violent insurgencies.",
    "In April 1930, British colonial authorities initially tried to ignore Gandhi's 240-mile Salt March as a harmless stunt—until international journalists turned Dharasana into front-page news from London to New York.",
    "Historians call deliberately cropped photos and selective headlines 'framing bias'—even an unedited photograph only shows what the photographer chose to keep inside the lens.",
  ],
  activities: [
    {
      title: "The Courtroom Source Trial (NOP Challenge)",
      emoji: "⚖️",
      materials: [
        "Two contrasting headlines or posts about the same current or historical protest",
        "A highlighter or two coloured pens",
        "A scrap of paper divided into Content, N, O, P, and Own Knowledge",
      ],
      steps: [
        "Pick two sources reacting to the same event (for example, an official government press release and an activist flyer from Birmingham 1963 or Soweto 1976).",
        "Underline one loaded adjective or emotional phrase in each source.",
        "Fill in Nature, Origin, and Purpose for both sources—then list ONE fact each source deliberately left out (omission).",
        "Write one verdict sentence starting with: 'Source A is unreliable for ___, yet highly useful for ___ because...'",
      ],
      maths:
        "This trains your brain to stop writing 'biased = useless' and instead turn every author's agenda into usable historical evidence.",
    },
    {
      title: "Great Man vs Grassroots Museum Curator",
      emoji: "🏛️",
      materials: [
        "Six index cards or sticky notes",
        "One protest movement (India, US Civil Rights, South Africa, or Fridays for Future)",
      ],
      steps: [
        "Imagine you can display ONLY 3 artefacts in a museum gallery about your chosen movement.",
        "Round 1 ('Great Man' exhibition): Pick 3 items centred on famous national speeches or treaties.",
        "Round 2 ('Grassroots' exhibition): Replace all 3 with items from ordinary participants—a boycott carpool map, a hand-spun khadi shirt, a student placard, or a union strike rota.",
        "Compare the two galleries and write 2 sentences explaining how a visitor's interpretation changes depending on what the curator chooses to display.",
      ],
      maths:
        "Exhibitions are historical interpretations: changing which evidence sits in the spotlight changes how audiences explain historical causation.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Reliability vs Utility Matrix",
      svg: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reliability versus Utility four-quadrant matrix for historical sources">
  <rect x="0" y="0" width="560" height="245" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Why "Biased" Does NOT Mean "Useless": Reliability vs Utility</text>

  <line x1="70" y1="205" x2="525" y2="205" stroke="var(--ink-2)" stroke-width="1.8" />
  <line x1="70" y1="42" x2="70" y2="205" stroke="var(--ink-2)" stroke-width="1.8" />

  <text x="298" y="232" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Factual Reliability (Neutral Accuracy) →</text>
  <text x="24" y="125" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)" transform="rotate(-90 24 125)">Utility for Attitudes →</text>

  <rect x="82" y="48" width="206" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="185" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">LOW Reliability / HIGH Utility</text>
  <text x="185" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">Propaganda posters &amp; partisan editorials</text>
  <text x="185" y="102" text-anchor="middle" font-size="10" fill="var(--ink-2)">Priceless for attitudes, fears &amp; rhetoric!</text>

  <rect x="304" y="48" width="212" height="70" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="410" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">HIGH Reliability / HIGH Utility</text>
  <text x="410" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">Candid confidential memos &amp; corroborated</text>
  <text x="410" y="102" text-anchor="middle" font-size="10" fill="var(--ink-2)">eyewitness accounts tested by context</text>

  <rect x="82" y="128" width="206" height="68" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.4" />
  <text x="185" y="148" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">LOW Reliability / Narrow Scope</text>
  <text x="185" y="166" text-anchor="middle" font-size="10" fill="var(--ink)">Unverified rumours or hearsay</text>
  <text x="185" y="182" text-anchor="middle" font-size="10" fill="var(--ink-2)">Must cross-reference before trusting</text>

  <rect x="304" y="128" width="212" height="68" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4" />
  <text x="410" y="148" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">HIGH Reliability / Narrow Scope</text>
  <text x="410" y="166" text-anchor="middle" font-size="10" fill="var(--ink)">Raw bus-ticket sales or rainfall tables</text>
  <text x="410" y="182" text-anchor="middle" font-size="10" fill="var(--ink-2)">Great for facts; silent on human feelings</text>
</svg>`,
      caption: "Top-left is the historian's favourite surprise: biased propaganda can have low factual reliability yet huge utility for studying attitudes.",
    },
    {
      title: "Why Historians Disagree (FECP Wheel)",
      svg: `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four FECP reasons why historians reach different interpretations">
  <rect x="0" y="0" width="560" height="235" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Why Honest Historians Disagree: The FECP Framework</text>

  <rect x="24" y="44" width="246" height="78" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="38" y="65" font-size="12" font-weight="800" fill="var(--brand)">F — Focus (Lens)</text>
  <text x="38" y="84" font-size="10.5" fill="var(--ink)">Top-down leaders ('Great Man') vs</text>
  <text x="38" y="100" font-size="10.5" fill="var(--ink)">bottom-up grassroots social history.</text>

  <rect x="290" y="44" width="246" height="78" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="304" y="65" font-size="12" font-weight="800" fill="var(--good)">E — Evidence Selected</text>
  <text x="304" y="84" font-size="10.5" fill="var(--ink)">Declassified cabinet files vs oral</text>
  <text x="304" y="100" font-size="10.5" fill="var(--ink)">interviews with ordinary protesters.</text>

  <rect x="24" y="138" width="246" height="78" rx="10" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="38" y="159" font-size="12" font-weight="800" fill="var(--warn)">C — Context of Era</text>
  <text x="38" y="178" font-size="10.5" fill="var(--ink)">Later eras ask new questions—e.g.</text>
  <text x="38" y="194" font-size="10.5" fill="var(--ink)">recovering women &amp; youth voices.</text>

  <rect x="290" y="138" width="246" height="78" rx="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5" />
  <text x="304" y="159" font-size="12" font-weight="800" fill="var(--ink)">P — Purpose &amp; Audience</text>
  <text x="304" y="178" font-size="10.5" fill="var(--ink)">Cinema biopic or popular biography</text>
  <text x="304" y="194" font-size="10.5" fill="var(--ink)">vs academic economic monograph.</text>
</svg>`,
      caption: "Use FECP to explain disagreement between interpretations without accusing scholars of inventing facts.",
    },
  ],
  history: {
    title: "The Night 35,000 Flyers Built a Movement — Before the Internet Existed",
    story:
      "When Rosa Parks was arrested in Montgomery on Thursday 1 December 1955, there were no smartphones, hashtags, or group chats. That very midnight, English professor Jo Ann Robinson—president of Montgomery's Women's Political Council—slipped into Alabama State College with a colleague and two students. Working through the night on a hand-inked mimeograph machine, they printed and cut 35,000 paper leaflets urging Black residents to stay off city buses on Monday morning. By Friday afternoon, volunteers had hand-delivered flyers to barbershops, beauty parlours, factories, and churches across town. When Monday dawned, the buses rolled past nearly empty—and stayed empty for 381 days. For decades, early 'Great Man' histories barely mentioned Robinson's name, focusing almost entirely on Martin Luther King Jr.'s speeches. Only when later grassroots historians interviewed local women organisers in the 1980s did her midnight print run take its rightful place in history—a reminder of both how much offline organising matters and why historical interpretations evolve over time.",
  },
};
