import type { Drill, Rng } from "./types.ts";

interface TimelineMilestone {
  order: number;
  year: number;
  dateLabel: string;
  label: string;
  phase: "ideology" | "prewar" | "wartime" | "justice";
  coreDate?: boolean;
}

const MILESTONES: TimelineMilestone[] = [
  {
    order: 1,
    year: 1933,
    dateLabel: "30 January 1933",
    label: "Adolf Hitler is appointed Chancellor of Germany",
    phase: "ideology",
    coreDate: true,
  },
  {
    order: 2,
    year: 1933,
    dateLabel: "1–7 April 1933",
    label: "National boycott of Jewish shops and Civil Service Law dismissals",
    phase: "prewar",
  },
  {
    order: 3,
    year: 1935,
    dateLabel: "15 September 1935",
    label: "Nuremberg Race Laws strip German Jews of citizenship",
    phase: "prewar",
    coreDate: true,
  },
  {
    order: 4,
    year: 1938,
    dateLabel: "July 1938",
    label: "Évian Conference fails to expand international refugee quotas",
    phase: "prewar",
  },
  {
    order: 5,
    year: 1938,
    dateLabel: "9–10 November 1938",
    label: "Kristallnacht ('Night of Broken Glass') nationwide violent pogrom",
    phase: "prewar",
    coreDate: true,
  },
  {
    order: 6,
    year: 1939,
    dateLabel: "1 September 1939",
    label: "German invasion of Poland places millions of Polish Jews under Nazi rule",
    phase: "wartime",
    coreDate: true,
  },
  {
    order: 7,
    year: 1940,
    dateLabel: "November 1940",
    label: "Warsaw Ghetto is sealed, confining over 400,000 people",
    phase: "wartime",
    coreDate: true,
  },
  {
    order: 8,
    year: 1941,
    dateLabel: "June 1941",
    label: "Invasion of the USSR begins Einsatzgruppen mass shootings",
    phase: "wartime",
    coreDate: true,
  },
  {
    order: 9,
    year: 1941,
    dateLabel: "29–30 September 1941",
    label: "Massacre of 33,771 Kyiv Jews at Babi Yar",
    phase: "wartime",
  },
  {
    order: 10,
    year: 1942,
    dateLabel: "20 January 1942",
    label: "Wannsee Conference coordinates Europe-wide 'Final Solution' logistics",
    phase: "wartime",
    coreDate: true,
  },
  {
    order: 11,
    year: 1943,
    dateLabel: "April–May 1943",
    label: "Warsaw Ghetto Uprising resists SS forces for nearly a month",
    phase: "wartime",
    coreDate: true,
  },
  {
    order: 12,
    year: 1943,
    dateLabel: "October 1943",
    label: "Danish rescue ferries ~7,200 Jews across the sea to neutral Sweden",
    phase: "wartime",
  },
  {
    order: 13,
    year: 1945,
    dateLabel: "27 January 1945",
    label: "Soviet Red Army liberates the Auschwitz-Birkenau camp complex",
    phase: "justice",
    coreDate: true,
  },
  {
    order: 14,
    year: 1948,
    dateLabel: "9 December 1948",
    label: "United Nations adopts the Genocide Convention",
    phase: "justice",
    coreDate: true,
  },
];

interface TermCard {
  term: string;
  accept: string[];
  clues: [string, string, string];
  note: string;
}

const TERM_CARDS: TermCard[] = [
  {
    term: "Nuremberg Laws",
    accept: ["Nuremberg Laws", "The Nuremberg Laws", "Nuremberg Race Laws"],
    clues: [
      "September 1935 Nazi statutes stripping German Jews of citizenship and banning mixed marriages",
      "The 1935 legal decrees that defined Jewish status by the ancestry of a person's grandparents",
      "Pair of 1935 German laws consisting of the Reich Citizenship Law and Blood Protection Law",
    ],
    note: "Enacted 15 September 1935, turning racial antisemitism into formal state law.",
  },
  {
    term: "Kristallnacht",
    accept: ["Kristallnacht", "Night of Broken Glass"],
    clues: [
      "The 9–10 November 1938 nationwide violent pogrom burning over 1,400 synagogues",
      "November 1938 state-led attack after which ~30,000 Jewish men were sent to concentration camps",
      "The 'Night of Broken Glass' that shifted Nazi persecution from legal exclusion to open terror",
    ],
    note: "Marked the decisive shift to open, state-orchestrated mass violence in November 1938.",
  },
  {
    term: "Évian Conference",
    accept: ["Évian Conference", "Evian Conference", "Evian", "Évian"],
    clues: [
      "July 1938 international summit of 32 countries where almost none raised refugee visa quotas",
      "1938 French spa-town meeting exposing foreign reluctance to admit Jews fleeing Germany and Austria",
      "International refugee gathering in July 1938 where only the Dominican Republic offered large quotas",
    ],
    note: "Showed the severe international immigration barriers trapping refugees before WWII.",
  },
  {
    term: "Kindertransport",
    accept: ["Kindertransport", "The Kindertransport"],
    clues: [
      "Rescue operation (1938–39) bringing nearly 10,000 unaccompanied mostly Jewish children to Britain",
      "Humanitarian effort organised after Kristallnacht to evacuate children from Nazi-ruled Europe",
      "Pre-war British refugee initiative that saved thousands of Jewish children without their parents",
    ],
    note: "Operated from December 1938 until the outbreak of WWII in September 1939.",
  },
  {
    term: "Aktion T4",
    accept: ["Aktion T4", "T4", "Action T4", "T4 programme", "T4 program"],
    clues: [
      "Nazi mass murder programme targeting people with physical and mental disabilities from 1939",
      "Secret Nazi killing operation that developed fixed gas chambers later expanded in death camps",
      "Programme named after a Berlin address (Tiergartenstraße 4) murdering over 250,000 disabled people",
    ],
    note: "Pioneered gas-chamber methods and personnel later used in Operation Reinhard extermination camps.",
  },
  {
    term: "Warsaw Ghetto",
    accept: ["Warsaw Ghetto", "The Warsaw Ghetto", "Warsaw"],
    clues: [
      "Largest Nazi ghetto in occupied Poland, sealed in November 1940 with over 400,000 residents",
      "Walled district in Poland's capital where starvation, typhus, and the 1943 Uprising occurred",
      "Overcrowded 1.3-square-mile sealed zone from which hundreds of thousands were deported to Treblinka",
    ],
    note: "Site of both Emanuel Ringelblum's Oyneg Shabes archive and the April–May 1943 Uprising.",
  },
  {
    term: "Einsatzgruppen",
    accept: ["Einsatzgruppen", "The Einsatzgruppen"],
    clues: [
      "SS mobile killing squads carrying out mass shootings across occupied Soviet lands from June 1941",
      "Nazi paramilitary units responsible for the 'Holocaust by bullets' and the Babi Yar massacre",
      "Four mobile SS units following the German army in Operation Barbarossa to murder Jews and Roma",
    ],
    note: "Murdered approximately 1.5–2 million Jews in mass shootings alongside Soviet POWs and Roma.",
  },
  {
    term: "Wannsee Conference",
    accept: ["Wannsee Conference", "The Wannsee Conference", "Wannsee"],
    clues: [
      "20 January 1942 Berlin meeting chaired by Reinhard Heydrich to coordinate the 'Final Solution'",
      "Meeting of 15 senior SS and civil ministry bureaucrats aligning Europe-wide deportation logistics",
      "January 1942 conference whose minutes were recorded by Adolf Eichmann using coded euphemisms",
    ],
    note: "Coordinated—rather than invented—the continent-wide bureaucracy of mass murder.",
  },
  {
    term: "Auschwitz-Birkenau",
    accept: ["Auschwitz-Birkenau", "Auschwitz", "Auschwitz Birkenau", "Birkenau"],
    clues: [
      "Largest Nazi camp complex, combining forced labour with Zyklon B extermination chambers",
      "Camp in occupied Poland where ~1.1 million people were murdered before liberation on 27 Jan 1945",
      "Extermination and labour complex whose liberation date became International Holocaust Remembrance Day",
    ],
    note: "Approximately 960,000 of the 1.1 million people murdered at Auschwitz were European Jews.",
  },
  {
    term: "Zyklon B",
    accept: ["Zyklon B", "Zyklon-B"],
    clues: [
      "Hydrogen-cyanide-based pesticide pellets used inside the gas chambers at Auschwitz-Birkenau",
      "Toxic chemical agent dropped into sealed chambers disguised as showers at Birkenau",
      "Cyanide compound used for industrial mass murder at Auschwitz and Majdanek",
    ],
    note: "Distinct from the carbon-monoxide exhaust used at Operation Reinhard camps like Treblinka.",
  },
  {
    term: "Oyneg Shabes",
    accept: ["Oyneg Shabes", "Oneg Shabbat", "Ringelblum Archive", "Oyneg Shabes archive"],
    clues: [
      "Secret Warsaw Ghetto archive founded by Emanuel Ringelblum to preserve truthful testimonies",
      "Underground documentary resistance project buried in milk cans and tin boxes in Warsaw",
      "Clandestine collection of ghetto diaries and reports ensuring Nazi crimes could not be hidden",
    ],
    note: "Two of the three buried caches were recovered after WWII and form vital primary sources.",
  },
  {
    term: "Oskar Schindler",
    accept: ["Oskar Schindler", "Schindler"],
    clues: [
      "German industrialist who protected ~1,100–1,200 Jewish prisoners by listing them as essential workers",
      "Factory owner recognised as Righteous Among the Nations for shielding workers from Auschwitz",
      "Businessman in Kraków and Brünnlitz who spent his fortune bribing SS officials to save lives",
    ],
    note: "Honoured by Yad Vashem as Righteous Among the Nations.",
  },
  {
    term: "Nuremberg Trials",
    accept: ["Nuremberg Trials", "The Nuremberg Trials", "Nuremberg Tribunal"],
    clues: [
      "1945–46 international court trying 22 major Nazi leaders for Crimes against Humanity",
      "Post-war Allied tribunal that rejected 'following superior orders' as a legal defence",
      "Landmark war-crimes proceedings held in the city where the 1935 Nazi Race Laws were announced",
    ],
    note: "Established enduring principles of individual accountability in international law.",
  },
  {
    term: "Raphael Lemkin",
    accept: ["Raphael Lemkin", "Lemkin", "Rafał Lemkin", "Rafal Lemkin"],
    clues: [
      "Polish-Jewish jurist who coined the legal term 'genocide' in 1944",
      "Lawyer who lost nearly his whole family and campaigned for the 1948 UN Genocide Convention",
      "Legal scholar who combined Greek *genos* (people) and Latin *-cide* (killing) to name a crime",
    ],
    note: "His scholarship shaped the UN Convention on the Prevention and Punishment of the Crime of Genocide.",
  },
  {
    term: "Aryanisation",
    accept: ["Aryanisation", "Aryanization", "Arisierung"],
    clues: [
      "Nazi policy forcing Jewish owners to hand over shops, businesses, and assets to non-Jews",
      "Systematic economic seizure of Jewish livelihoods that accelerated sharply after Kristallnacht",
      "Forced transfer of Jewish-owned German enterprises at a fraction of their real value",
    ],
    note: "Impoverished German Jews and blocked many from affording the steep costs of emigration.",
  },
];

interface EvidenceCase {
  title: string;
  extract: string;
  category: string;
  correct: string;
  flawed: [string, string, string, string];
  why: string;
}

const EVIDENCE_CASES: EvidenceCase[] = [
  {
    title: "1936 Nazi School Biology Textbook",
    extract: "A state-approved German school textbook instructing pupils to rank human groups by head measurements.",
    category: "State Propaganda & Indoctrination",
    correct: "Useful evidence of how the Nazi state used education to normalise false racial theories among youth",
    flawed: [
      "Reliable scientific proof showing how European universities conducted neutral medical research",
      "Useless to historians because biased propaganda cannot reveal anything about Nazi society",
      "Evidence that German parents openly protested against school curricula across Berlin in 1936",
      "Proof that Nazi racial ideology only began after the invasion of Poland in September 1939",
    ],
    why: "Biased propaganda is untrue about its targets yet highly valuable as evidence of how the dictatorship indoctrinated citizens.",
  },
  {
    title: "Reich Citizenship Decree (September 1935)",
    extract: "An official statute issued at Nuremberg defining citizenship by ancestry and stripping German Jews of civic rights.",
    category: "Legal Escalation (1933–1939)",
    correct: "Demonstrates how the regime used formal law to isolate Jews socially before open mass violence",
    flawed: [
      "Shows that Jewish citizens could retain German citizenship simply by converting to Christianity",
      "Marks the moment the Nazi regime built industrial gas chambers inside German cities",
      "Proves that Nazi anti-Jewish measures were improvised only after the Battle of Stalingrad",
      "Indicates that German courts successfully overturned antisemitic decrees during the 1930s",
    ],
    why: "The Nuremberg Laws defined Jewish status by grandparents' ancestry, turning prejudice into legal exclusion.",
  },
  {
    title: "British Editorial (12 November 1938)",
    extract: "A London newspaper condemning the burning of German synagogues while arguing Depression unemployment prevents expanding visas.",
    category: "International Response & Emigration Barriers",
    correct: "Shows foreign public outrage after Kristallnacht existed alongside strict limits on admitting refugees",
    flawed: [
      "Proves that British journalists knew nothing about Kristallnacht until after liberation in 1945",
      "Demonstrates that Western democracies immediately opened unrestricted borders for all German Jews",
      "Shows that British newspapers endorsed Nazi street attacks against synagogues and shops",
      "Proves Britain declared war on Germany in November 1938 to rescue concentration camp prisoners",
    ],
    why: "Sympathy in foreign newspapers rarely translated into generous adult visa quotas during the Great Depression.",
  },
  {
    title: "Wannsee Protocol Minutes (20 January 1942)",
    extract: "Administrative minutes recorded by Adolf Eichmann using coded terms like 'resettlement' while listing Jewish populations across Europe.",
    category: "Bureaucracy of the 'Final Solution'",
    correct: "Reveals that senior civilian ministries and the SS coordinated continental genocide behind coded language",
    flawed: [
      "Proves that no mass killing of Jews or disabled people had taken place before January 1942",
      "Shows that German railway and civil officials had no awareness of deportations to occupied Poland",
      "Demonstrates that the meeting was called to arrange safe overseas emigration for Polish Jews",
      "Indicates that Adolf Hitler personally chaired the session alongside Allied Red Cross observers",
    ],
    why: "Mass shootings and early gassings began in 1941; Wannsee aligned the entire German state apparatus for Europe-wide deportations.",
  },
  {
    title: "Emanuel Ringelblum's Buried Milk Cans",
    extract: "Thousands of diaries, drawings, and reports hidden underground inside the sealed Warsaw Ghetto by the Oyneg Shabes team.",
    category: "Spiritual & Documentary Resistance",
    correct: "Illustrates non-violent resistance aimed at preserving victims' voices and proving Nazi crimes",
    flawed: [
      "Shows that Warsaw Ghetto residents had official German permission to publish independent newspapers",
      "Proves that resistance only occurred when prisoners possessed heavy artillery and military aircraft",
      "Indicates that conditions inside the Warsaw Ghetto were well-supplied with food and medicine",
      "Demonstrates that Polish Jews did not attempt any armed revolt in Warsaw during 1943",
    ],
    why: "Documenting truth under mortal danger directly defied the Nazi aim of total cultural erasure.",
  },
  {
    title: "Mordechai Anielewicz's Letter (April 1943)",
    extract: "A message smuggled out during the Warsaw Ghetto Uprising describing poorly armed fighters resisting SS forces for weeks.",
    category: "Armed Resistance",
    correct: "Refutes the myth of passive submission by documenting organised armed courage against overwhelming odds",
    flawed: [
      "Shows that Allied airborne divisions landed inside Warsaw in April 1943 to arm the ghetto",
      "Proves that ghetto fighters possessed equal tanks and artillery to the German SS garrison",
      "Indicates that the uprising persuaded Nazi leaders to permanently halt all deportations in Poland",
      "Demonstrates that armed defiance occurred only after Soviet troops had already liberated Warsaw",
    ],
    why: "Around 750 lightly armed fighters held off German troops for nearly a month despite starvation and minimal weaponry.",
  },
  {
    title: "Sobibór Escape Testimony (October 1943)",
    extract: "Accounts by survivors who broke through barbed wire during the Sobibór extermination camp uprising.",
    category: "Armed Resistance",
    correct: "Proves organised defiance occurred even inside death camps, prompting the Nazis to demolish Sobibór",
    flawed: [
      "Shows that Sobibór was a peacetime political prison located outside Munich since 1933",
      "Indicates that camp guards peacefully released all prisoners following international protests",
      "Proves that every prisoner who escaped easily crossed a nearby neutral border within hours",
      "Demonstrates that prisoner uprisings never occurred at Treblinka or Auschwitz-Birkenau",
    ],
    why: "Revolts at Sobibór (Oct 1943), Treblinka (Aug 1943), and Birkenau (Oct 1944) show extraordinary courage under extreme terror.",
  },
  {
    title: "Danish Fishermen's Logbooks (October 1943)",
    extract: "Records of small fishing boats crossing the Øresund strait at night carrying Jewish families to neutral Sweden.",
    category: "Collective Rescue",
    correct: "Highlights how leaked warnings, local solidarity, and proximity to neutral Sweden saved over 90% of Danish Jews",
    flawed: [
      "Shows that rescuing Jews carried identical geographic and legal conditions in Denmark and Poland",
      "Proves that Denmark defeated the German army militarily to secure independence in 1943",
      "Indicates that neutral Sweden refused entry to Jewish boats crossing from occupied Denmark",
      "Demonstrates that rescuers acted only after receiving large cash subsidies from the Nazi state",
    ],
    why: "Geography, intact local networks, and Georg Ferdinand Duckwitz's leak enabled ~7,200 people to reach Sweden.",
  },
  {
    title: "Irena Sendler's Buried Glass Jars",
    extract: "Coded lists of ~2,500 Jewish children smuggled out of the Warsaw Ghetto by the Żegota rescue network, buried so families might reunite.",
    category: "Individual & Network Rescue",
    correct: "Shows extraordinary moral courage under occupied Poland's penalty of execution for rescuers' families",
    flawed: [
      "Proves that sheltering Jewish children in occupied Poland carried only a minor administrative fine",
      "Shows that German occupation officials helped Żegota place children with Polish families",
      "Indicates that no non-Jewish Polish citizens risked their lives to rescue Jews during WWII",
      "Demonstrates that all 2,500 rescued children were flown directly to Britain via the Kindertransport",
    ],
    why: "In occupied Poland, helping Jews risked the death of one's entire family, making Żegota's rescues exceptionally perilous.",
  },
  {
    title: "Oskar Schindler's Factory Personnel List (1944)",
    extract: "A typed roster classifying ~1,100–1,200 Jewish prisoners as indispensable workers to keep them out of extermination camps.",
    category: "Individual Rescue",
    correct: "Demonstrates how an individual within the German system used personal wealth and status to save lives",
    flawed: [
      "Proves that all German wartime industrialists refused to exploit forced labour from Nazi camps",
      "Shows that Schindler was an Allied diplomat stationed inside neutral Switzerland during WWII",
      "Indicates that SS camp commanders voluntarily freed Jewish workers without bribes or persuasion",
      "Demonstrates that Schindler's workers were never in danger of deportation to Auschwitz-Birkenau",
    ],
    why: "Schindler risked arrest and spent his fortune bribing officials to protect workers listed on his factory roster.",
  },
  {
    title: "Dawid Sierakowiak's Łódź Ghetto Diary",
    extract: "Notebooks written between 1939 and 1943 by a Jewish teenager recording hunger, grief, and study inside the Łódź Ghetto.",
    category: "Primary Eyewitness Source",
    correct: "Offers vivid immediate evidence of daily suffering, though limited to one teenager's perspective in one ghetto",
    flawed: [
      "Provides a complete statistical overview of Nazi decision-making across every country in Europe",
      "Is historically unreliable because teenagers living through events cannot record daily conditions accurately",
      "Shows that ghetto residents knew all details of the 1942 Wannsee Conference as it happened",
      "Was written decades after 1945 and therefore contains only distant hindsight memories",
    ],
    why: "Contemporary diaries give unmatched immediacy but must be cross-referenced with wider records for continental context.",
  },
  {
    title: "Nuremberg Tribunal Defence Plea (1946)",
    extract: "A senior Nazi official arguing in court that he cannot be guilty because he was strictly following superior orders.",
    category: "Post-War International Justice",
    correct: "Illustrates the defence rejected at Nuremberg, creating the principle of individual accountability for atrocities",
    flawed: [
      "Shows the legal argument that acquitted all 22 major Nazi defendants at the 1945–46 tribunal",
      "Proves that international tribunals had already prosecuted Crimes against Humanity since 1919",
      "Demonstrates that civil servants were immune from prosecution if they wore military uniforms",
      "Indicates that prosecutors lacked captured German administrative records to disprove defendants' claims",
    ],
    why: "The Nuremberg Principles firmly established that 'superior orders' never excuse Crimes against Humanity.",
  },
  {
    title: "UN Genocide Convention (9 December 1948)",
    extract: "An international treaty defining the intentional destruction of a national, ethnic, racial, or religious group as a crime.",
    category: "Long-Term Historical Significance",
    correct: "Built directly on Raphael Lemkin's 1944 concept to turn Holocaust remembrance into binding international law",
    flawed: [
      "Was drafted by the League of Nations in 1935 in immediate response to the Nuremberg Race Laws",
      "Restricted legal protection solely to prisoners of war captured on active battlefields",
      "Guaranteed that no mass atrocities or genocides ever took place anywhere after 1948",
      "Was adopted before the liberation of Auschwitz-Birkenau and the Nuremberg Trials began",
    ],
    why: "Coined by Lemkin in 1944 and codified in December 1948, the convention created a permanent legal framework against genocide.",
  },
  {
    title: "1941 Einsatzgruppen Situation Report",
    extract: "A classified SS operational report tallying mass shootings of Jewish civilians and Soviet prisoners in occupied Ukraine.",
    category: "Perpetrator Evidence",
    correct: "Provides chilling direct proof from perpetrators themselves of systematic mass murder prior to Wannsee",
    flawed: [
      "Shows that mass shootings began only after the extermination camp at Auschwitz closed in 1945",
      "Proves that German military units in the Soviet Union refused to coordinate with SS squads",
      "Demonstrates that Nazi officials hid death tolls even inside secret internal SS statistics",
      "Indicates that Einsatzgruppen operated primarily inside neutral Western European cities",
    ],
    why: "Captured Nazi administrative records themselves served as decisive evidence at Nuremberg and for modern historians.",
  },
];

function pickDistinct<T>(rng: Rng, arr: readonly T[], count: number): T[] {
  return rng.shuffle(arr).slice(0, count);
}

export const drills: Drill[] = [
  {
    id: "the-holocaust.chronology-order",
    topicId: "the-holocaust",
    title: "Chronology & Escalation Order (1933–1948)",
    level: 1,
    guideRef: "escalation-1933-1939",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      let chosen: TimelineMilestone[];
      if (tier === 1) {
        // Pick from distinct phases for friendly spacing
        const phases = rng.shuffle(["ideology", "prewar", "wartime", "justice"] as const).slice(0, 3);
        chosen = phases.map((ph) => rng.pick(MILESTONES.filter((m) => m.phase === ph)));
      } else {
        chosen = pickDistinct(rng, MILESTONES, 3);
      }
      const display = rng.shuffle(chosen);
      const sorted = [...display].sort((a, b) => a.order - b.order);
      const listBlock = display.map((m, i) => `**${i + 1}.** ${m.label}`).join("\n");
      const timelineSteps = sorted.map((m) => `**${m.dateLabel}** — ${m.label}`);

      if (tier === 1) {
        const earliestIdx = display.indexOf(sorted[0]) + 1;
        return {
          prompt: `Which of these historical milestones occurred **earliest**? Type its number (1, 2 or 3).\n\n${listBlock}`,
          answer: { type: "number", value: earliestIdx, display: String(earliestIdx) },
          hint: "Trace the sequence: Nazi takeover & pre-war decrees (1933–38) → WWII ghettos & mass murder (1939–43) → liberation & justice (1945–48).",
          solution: [
            "Place all three events in chronological order:",
            ...timelineSteps,
            `Therefore, **${earliestIdx}** occurred earliest.`,
          ],
        };
      }

      if (tier === 2) {
        const askLatest = rng.bool(0.5);
        const target = askLatest ? sorted[2] : sorted[0];
        const targetIdx = display.indexOf(target) + 1;
        return {
          prompt: `Which of these milestones occurred **${askLatest ? "latest" : "earliest"}**? Type its number (1, 2 or 3).\n\n${listBlock}`,
          answer: { type: "number", value: targetIdx, display: String(targetIdx) },
          hint: `Check the exact dates for each turning point—especially distinguishing 1933, 1935, 1938, 1939, 1941, 1942, 1943, 1945 and 1948.`,
          solution: [
            "Chronological sequence:",
            ...timelineSteps,
            `Therefore, **${targetIdx}** occurred ${askLatest ? "latest" : "earliest"}.`,
          ],
        };
      }

      // Tier 3: Full ordered sequence e.g. "2, 1, 3"
      const orderNums = sorted.map((m) => display.indexOf(m) + 1);
      return {
        prompt: `Put these three milestones into **chronological order from earliest to latest**. Type the three numbers separated by commas (e.g. \`2, 1, 3\`).\n\n${listBlock}`,
        answer: {
          type: "list",
          values: orderNums,
          ordered: true,
          display: orderNums.join(", "),
        },
        hint: "Find the earliest milestone first, then the latest, leaving the middle event between them.",
        solution: [
          "From earliest to latest:",
          ...timelineSteps,
          `Correct chronological order: **${orderNums.join(", ")}**.`,
        ],
      };
    },
  },
  {
    id: "the-holocaust.ideology-laws-match",
    topicId: "the-holocaust",
    title: "Key Terms, Policies & Historical Figures",
    level: 1,
    guideRef: "roots-nazi-ideology",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 3) {
        const card = rng.pick(TERM_CARDS);
        const clue = rng.pick(card.clues);
        return {
          prompt: `Identify the exact historical term, law, site, or person described below:\n\n**Clue:** ${clue}`,
          answer: { type: "text", accept: card.accept, display: card.term },
          hint: `Starts with **${card.term[0]}** (${card.term.split(" ").length} word${card.term.split(" ").length > 1 ? "s" : ""}).`,
          solution: [
            `Answer: **${card.term}**.`,
            card.note,
          ],
        };
      }

      const pool = pickDistinct(rng, TERM_CARDS, 3);
      const target = pool[0];
      const options = rng.shuffle(pool);
      const correctIdx = options.indexOf(target) + 1;
      const clue = tier === 1 ? target.clues[0] : rng.pick([target.clues[1], target.clues[2]]);
      const optBlock = options.map((c, i) => `**${i + 1}.** ${c.term}`).join("\n");

      return {
        prompt: `Which historical term or figure matches this description? Type **1**, **2**, or **3**.\n\n**Description:** ${clue}\n\n${optBlock}`,
        answer: { type: "number", value: correctIdx, display: String(correctIdx) },
        hint: "Read the date and mechanism in the clue carefully to distinguish pre-war laws, wartime killing methods, resistance, and justice.",
        solution: [
          `The matching answer is **${correctIdx}. ${target.term}**.`,
          target.note,
        ],
      };
    },
  },
  {
    id: "the-holocaust.timeline-span-analysis",
    topicId: "the-holocaust",
    title: "Turning-Point Dates & Escalation Spans",
    level: 2,
    guideRef: "ghettos-final-solution",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const coreEvents = MILESTONES.filter((m) => m.coreDate);
      // Pick two events with strictly different years
      let pair: [TimelineMilestone, TimelineMilestone];
      while (true) {
        const picked = pickDistinct(rng, coreEvents, 2).sort((a, b) => a.year - b.year);
        if (picked[0].year < picked[1].year) {
          pair = [picked[0], picked[1]];
          break;
        }
      }
      const [earlier, later] = pair;
      const gap = later.year - earlier.year;

      if (tier === 1) {
        const giveEarlier = rng.bool(0.5);
        if (giveEarlier) {
          return {
            prompt: `**${earlier.label}** occurred in **${earlier.year}**. How many years later did the following turning point occur?\n\n*${later.label}*`,
            answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
            hint: `Recall the year of "${later.label}" and subtract ${earlier.year}.`,
            solution: [
              `${earlier.label}: **${earlier.year}**.`,
              `${later.label}: **${later.year}**.`,
              `Span: ${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
            ],
          };
        }
        return {
          prompt: `**${later.label}** took place in **${later.year}**. How many years earlier did this turning point occur?\n\n*${earlier.label}*`,
          answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
          hint: `Recall the year of "${earlier.label}" and subtract it from ${later.year}.`,
          solution: [
            `${earlier.label}: **${earlier.year}**.`,
            `${later.label}: **${later.year}**.`,
            `Span: ${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
          ],
        };
      }

      if (tier === 2) {
        const phrasing = rng.bool(0.5)
          ? `How many years elapsed between these two turning points?\n\n- **First:** ${earlier.label}\n- **Second:** ${later.label}`
          : `Calculate the number of years from **${earlier.label}** to **${later.label}**.`;
        return {
          prompt: phrasing,
          answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
          hint: "Identify the exact 4-digit year of each turning point first, then find the difference.",
          solution: [
            `${earlier.label} → **${earlier.year}**.`,
            `${later.label} → **${later.year}**.`,
            `${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
          ],
        };
      }

      // Tier 3: Pick 3 distinct-year milestones and ask for exact year of middle milestone given flanking milestones
      let trio: [TimelineMilestone, TimelineMilestone, TimelineMilestone];
      while (true) {
        const picked = pickDistinct(rng, coreEvents, 3).sort((a, b) => a.year - b.year);
        if (picked[0].year < picked[1].year && picked[1].year < picked[2].year) {
          trio = [picked[0], picked[1], picked[2]];
          break;
        }
      }
      const [first, mid, last] = trio;
      return {
        prompt: `Between **${first.label}** (${first.year}) and **${last.label}** (${last.year}), the following event occurred. Give its exact 4-digit year:\n\n*${mid.label}*`,
        answer: { type: "number", value: mid.year, display: String(mid.year) },
        hint: `The year falls strictly between ${first.year} and ${last.year}.`,
        solution: [
          `${first.label} occurred in ${first.year}, and ${last.label} occurred in ${last.year}.`,
          `**${mid.label}** took place in **${mid.dateLabel}** (**${mid.year}**).`,
        ],
      };
    },
  },
  {
    id: "the-holocaust.evidence-and-roles",
    topicId: "the-holocaust",
    title: "Evaluating Sources, Resistance & Historical Claims",
    level: 3,
    guideRef: "resistance-justice-remembrance",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const c = rng.pick(EVIDENCE_CASES);
      const wrongTwo = pickDistinct(rng, c.flawed, 2);
      const statements = rng.shuffle([c.correct, ...wrongTwo]);
      const correctIdx = statements.indexOf(c.correct) + 1;
      const optBlock = statements.map((s, i) => `**${i + 1}.** ${s}`).join("\n");

      const header =
        tier === 1
          ? `**Source:** ${c.title} (${c.category})\n*${c.extract}*\n\nWhich statement is historically accurate? Type **1**, **2**, or **3**.`
          : tier === 2
            ? `**Evidence:** ${c.title}\n*${c.extract}*\n\nWhich historian's judgement best evaluates this evidence? Type **1**, **2**, or **3**.`
            : `**Source Critique:** ${c.title}\n*${c.extract}*\n\nTwo statements below contain historical myths or errors. Which statement (**1**, **2**, or **3**) is rigorously accurate?`;

      return {
        prompt: `${header}\n\n${optBlock}`,
        answer: { type: "number", value: correctIdx, display: String(correctIdx) },
        hint: "Check dates carefully and remember NOP: ask what the source proves about its context—and reject sweeping exaggerations.",
        solution: [
          `Correct judgement: **${correctIdx}.** ${c.correct}.`,
          c.why,
        ],
      };
    },
  },
];
