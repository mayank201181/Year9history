import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Three emperors fighting in August 1914 — Britain's King George V, Germany's Kaiser Wilhelm II and Russia's Tsar Nicholas II — were first cousins who had attended Queen Victoria's funeral together just thirteen years earlier. How did one European family preside over a continent blowing itself apart?",
  didYouKnow: [
    "On 28 June 1914, **Gavrilo Princip** only got a clear shot at Archduke Franz Ferdinand because the royal chauffeur had not been told the route had changed after an earlier bomb attack — and stalled the car while reversing directly in front of Princip!",
    "During the final days of July 1914, Kaiser Wilhelm II and Tsar Nicholas II exchanged ten panicked personal telegrams in English signed **'Willy'** and **'Nicky'** — proving that even monarchs struggled to stop their own generals' mobilisation timetables.",
    "Although Italy was a formal member of the **1882 Triple Alliance**, Italian leaders refused to fight alongside Germany and Austria-Hungary in August 1914, arguing Austria-Hungary was the aggressor — and entered on the Allied side in 1915 instead.",
    "The naval race got so intense in 1909 that British voters chanted the rhyming slogan **'We want eight and we won't wait!'** to force Parliament to build eight new Dreadnoughts in a single year.",
    "The First World War was felt almost immediately in **Singapore**: in October 1914 the German light cruiser **SMS *Emden*** raided Allied ships in the Malacca Strait and Penang, and Singapore's Cenotaph on Esplanade Park still honours local volunteers who served.",
  ],
  activities: [
    {
      title: "The July Crisis Diplomatic Hotline Challenge",
      emoji: "📨",
      materials: [
        "6 index cards labelled Britain, France, Russia, Germany, Austria-Hungary and Serbia",
        "A timer set to 90 seconds per round",
        "A copy of the 28 June–4 August timeline",
      ],
      steps: [
        "Assign each player (or study partner) one European power and read out the **28 June Sarajevo** news bulletin.",
        "Run 4 fast 90-second diplomacy rounds (5 July, 23 July, 30 July, 3 August). Each player must decide whether to **Back Down**, **Threaten**, or **Mobilise** — while keeping their real 1914 fears in mind (e.g. Russia remembering 1908; Germany fearing a two-front war).",
        "After Round 4, reveal every country's secret choice at the same time and check whether Europe stayed at peace or fell into war.",
        "Debrief: identify the exact round where diplomacy broke down and compare it to **Fischer** vs **Clark's *Sleepwalkers***.",
      ],
      maths:
        "Historical causation and **game theory (the security dilemma)**: experiencing time pressure and incomplete information shows why rational leaders can collectively stumble into a catastrophic war none of them initially wanted.",
    },
    {
      title: "Build Your Own 1914 Causation Pie Chart",
      emoji: "🥧",
      materials: [
        "One blank sheet of paper and coloured pens",
        "100 percentage points to divide across 5 slices: Militarism, Alliances, Imperialism, Nationalism, Sarajevo Flashpoint",
      ],
      steps: [
        "Divide exactly **100%** across the five causes according to how important you judge each one to be (no slice may be 0%).",
        "Write one specific pre-1914 piece of evidence (date, treaty or crisis) inside each slice.",
        "Draw **three connecting arrows** between slices and label each arrow with a causal link (e.g. *'Nationalism → Alliances: Black Hand murder triggered Austria's ultimatum and Russian protection of Serbia'*).",
        "Convert your biggest slice plus two arrows into a 4-sentence thesis paragraph for an essay.",
      ],
      maths:
        "Historians never simply list causes — assigning proportional weights and drawing causal arrows turns descriptive notes into **top-band evaluative argument**.",
    },
  ],
  bonusDiagrams: [
    {
      title: "European Defence Spending Surge (1890–1914)",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing European Great Power defence spending rising sharply from 1890 to 1914">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">The Pre-War Arms Race: Great Power Defence Budgets (£ millions)</text>
  <line x1="65" y1="196" x2="525" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="65" y1="48" x2="65" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="58" y="56" text-anchor="end" font-size="10" fill="var(--ink-2)">£120m</text>
  <text x="58" y="126" text-anchor="end" font-size="10" fill="var(--ink-2)">£60m</text>
  <text x="58" y="198" text-anchor="end" font-size="10" fill="var(--ink-2)">£0</text>
  <line x1="65" y1="122" x2="525" y2="122" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3"/>

  <rect x="92" y="160" width="32" height="36" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <rect x="128" y="62" width="32" height="134" rx="4" fill="var(--bad)"/>
  <text x="126" y="213" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Germany</text>
  <text x="108" y="155" text-anchor="middle" font-size="9.5" fill="var(--brand)">29</text>
  <text x="144" y="57" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">111</text>

  <rect x="196" y="159" width="32" height="37" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <rect x="232" y="90" width="32" height="106" rx="4" fill="var(--brand)"/>
  <text x="230" y="213" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Russia</text>
  <text x="212" y="154" text-anchor="middle" font-size="9.5" fill="var(--brand)">30</text>
  <text x="248" y="85" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">88</text>

  <rect x="300" y="158" width="32" height="38" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <rect x="336" y="103" width="32" height="93" rx="4" fill="var(--brand)"/>
  <text x="334" y="213" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Britain</text>
  <text x="316" y="153" text-anchor="middle" font-size="9.5" fill="var(--brand)">31</text>
  <text x="352" y="98" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">77</text>

  <rect x="404" y="151" width="32" height="45" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <rect x="440" y="127" width="32" height="69" rx="4" fill="var(--brand)"/>
  <text x="438" y="213" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">France</text>
  <text x="420" y="146" text-anchor="middle" font-size="9.5" fill="var(--brand)">37</text>
  <text x="456" y="122" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">57</text>

  <rect x="160" y="226" width="12" height="10" rx="2" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>
  <text x="178" y="235" font-size="10.5" fill="var(--ink-2)">1890 spending</text>
  <rect x="285" y="226" width="12" height="10" rx="2" fill="var(--brand)"/>
  <text x="303" y="235" font-size="10.5" fill="var(--ink-2)">1914 Entente</text>
  <rect x="400" y="226" width="12" height="10" rx="2" fill="var(--bad)"/>
  <text x="418" y="235" font-size="10.5" fill="var(--ink-2)">1914 Germany</text>
</svg>`,
      caption:
        "Between 1890 and 1914, German defence spending nearly quadrupled and Russian spending almost tripled — illustrating the classic militarist arms race.",
    },
    {
      title: "The Powder Keg Metaphor: Conditions vs Flashpoint",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Powder keg metaphor showing long-term MAIN causes inside the barrel and Sarajevo as the lit match">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Why 1914 Exploded: Gunpowder (Long-Term) + Spark (Flashpoint)</text>

  <rect x="35" y="54" width="245" height="162" rx="18" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="2"/>
  <line x1="35" y1="88" x2="280" y2="88" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="35" y1="184" x2="280" y2="184" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="157" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">LONG-TERM GUNPOWDER (1871–1913)</text>
  <text x="157" y="110" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">• Militarism: Dreadnoughts &amp; Schlieffen</text>
  <text x="157" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">• Alliances: Triple Alliance vs Entente</text>
  <text x="157" y="150" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">• Imperialism: Weltpolitik &amp; Morocco</text>
  <text x="157" y="170" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">• Nationalism: Bosnia &amp; Alsace-Lorraine</text>
  <text x="157" y="204" text-anchor="middle" font-size="10" fill="var(--ink-2)">Explains WHY war became global</text>

  <path d="M 280 134 C 318 134, 326 112, 355 112" fill="none" stroke="var(--bad)" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="320" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">July Crisis</text>
  <text x="320" y="111" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">(5-week fuse)</text>

  <rect x="362" y="64" width="168" height="142" rx="14" fill="var(--brand-soft)" stroke="var(--bad)" stroke-width="2"/>
  <text x="446" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">THE FLASHPOINT</text>
  <text x="446" y="114" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">28 June 1914</text>
  <text x="446" y="134" text-anchor="middle" font-size="10.5" fill="var(--ink)">Sarajevo Assassination</text>
  <text x="446" y="151" text-anchor="middle" font-size="10" fill="var(--ink-2)">Gavrilo Princip &amp; Black Hand</text>
  <text x="446" y="170" text-anchor="middle" font-size="10" fill="var(--ink-2)">+ 5 Jul Blank Cheque</text>
  <text x="446" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Explains WHEN it ignited</text>
</svg>`,
      caption:
        "A match alone cannot destroy a building, and gunpowder alone does not light itself: top-band essays show how the Sarajevo spark ignited pre-existing MAIN gunpowder.",
    },
  ],
  history: {
    title: "The Night of the 'Scrap of Paper' — Berlin, 4 August 1914",
    story:
      "At 7 pm on 4 August 1914, the British Ambassador in Berlin, Sir Edward Goschen, walked into the Wilhelmstrasse office of German Chancellor Theobald von Bethmann-Hollweg to deliver Britain's final ultimatum: halt the invasion of neutral Belgium by midnight, or Britain and Germany were at war. Bethmann-Hollweg — usually a stiff, formal lawyer — completely lost his composure. Speaking in agitated English, he declared it was unbelievable that Britain would go to war 'just for a word — neutrality, a word which in wartime has so often been disregarded — just for a scrap of paper!' Goschen replied quietly that Britain's honour and solemn signature on the 1839 Treaty of London were at stake. Within hours, London newspapers printed 'Scrap of Paper' across front pages from Britain to Singapore, transforming a complex strategic dispute over the European balance of power into a moral crusade that drew millions of volunteers into four years of global war.",
  },
};
