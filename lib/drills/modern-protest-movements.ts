import type { Drill } from "./types.ts";

interface NopScenario {
  event: string;
  year: number;
  nature: string;
  origin: string;
  purpose: string;
  enquiryFact: string;
  enquiryAttitude: string;
  omission: string;
}

const NOP_SCENARIOS: NopScenario[] = [
  {
    event: "the 1930 Dandi Salt March",
    year: 1930,
    nature: "a confidential British colonial telegram",
    origin: "Viceroy Lord Irwin in New Delhi in April 1930",
    purpose: "to advise London privately on whether arresting Gandhi would backfire",
    enquiryFact: "exact turnout numbers across Indian villages",
    enquiryAttitude: "private British strategic anxieties about creating a martyr",
    omission: "ordinary villagers' deep economic resentment of the salt monopoly",
  },
  {
    event: "the 1963 Birmingham civil rights marches",
    year: 1963,
    nature: "a front-page newspaper editorial",
    origin: "a segregationist Alabama newspaper editor in May 1963",
    purpose: "to persuade white readers that protesters were outside troublemakers",
    enquiryFact: "how many local Black residents supported desegregation",
    enquiryAttitude: "how segregationist elites tried to discredit civil rights marchers",
    omission: "police use of fire hoses and dogs against unarmed schoolchildren",
  },
  {
    event: "the 1963 Birmingham Campaign",
    year: 1963,
    nature: "an open letter published in national press",
    origin: "Martin Luther King Jr. writing from Birmingham Jail in April 1963",
    purpose: "to convince moderate white clergymen that non-violent action could not wait",
    enquiryFact: "city council budget debates behind closed doors",
    enquiryAttitude: "King's moral arguments justifying civil disobedience to moderates",
    omission: "tactical disagreements among younger SNCC activists",
  },
  {
    event: "the 1960 Sharpeville Massacre",
    year: 1960,
    nature: "a secret cabinet briefing memo",
    origin: "a South African finance official in Pretoria in April 1960",
    purpose: "to warn ministers honestly that foreign investors were pulling out capital",
    enquiryFact: "eyewitness accounts of the first shots fired at the police station",
    enquiryAttitude: "candid official fears about economic fallout after Sharpeville",
    omission: "Black township residents' anger over daily Pass Law arrests",
  },
  {
    event: "the 1976 Soweto Uprising",
    year: 1976,
    nature: "an official police press release",
    origin: "South African police headquarters in Johannesburg in June 1976",
    purpose: "to justify lethal police force to domestic and foreign audiences",
    enquiryFact: "whether marching pupils were armed or peaceful",
    enquiryAttitude: "how the apartheid state attempted to excuse shooting unarmed youths",
    omission: "students' peaceful objections to compulsory Afrikaans-medium schooling",
  },
  {
    event: "the 1955–56 Montgomery Bus Boycott",
    year: 1955,
    nature: "a mimeographed community flyer",
    origin: "Jo Ann Robinson and the Women's Political Council in December 1955",
    purpose: "to rally Black commuters to stay off city buses on Monday morning",
    enquiryFact: "how white city bus executives reacted in private meetings",
    enquiryAttitude: "how grassroots women organisers mobilised local neighbourhoods",
    omission: "long-term legal arguments NAACP lawyers later filed in federal court",
  },
  {
    event: "the 1919 Amritsar (Jallianwala Bagh) Massacre",
    year: 1919,
    nature: "an official military inquiry testimony",
    origin: "Brigadier-General Reginald Dyer speaking to the Hunter Commission in 1919",
    purpose: "to defend his decision to open fire as necessary to produce a 'moral effect'",
    enquiryFact: "Indian families' personal reasons for gathering during Baisakhi",
    enquiryAttitude: "colonial military attitudes towards harsh repression in Punjab",
    omission: "blocked narrow exits that trapped unarmed men, women, and children",
  },
  {
    event: "the 1965 Selma-to-Montgomery marches",
    year: 1965,
    nature: "a live television news broadcast",
    origin: "an American network camera crew on the Edmund Pettus Bridge in March 1965",
    purpose: "to inform national TV viewers immediately about state trooper assaults",
    enquiryFact: "private telephone talks between President Johnson and Southern senators",
    enquiryAttitude: "why televised violence shocked millions of northern Americans into action",
    omission: "months of quiet local voter-registration work led by SNCC beforehand",
  },
  {
    event: "the 2019 Fridays for Future global climate strikes",
    year: 2019,
    nature: "a viral Instagram reel and poster",
    origin: "a student organising group in Stockholm in September 2019",
    purpose: "to recruit teenagers worldwide to walk out ahead of the UN Climate Summit",
    enquiryFact: "representative polling of rural voters across every continent",
    enquiryAttitude: "the urgent moral slogans youth activists used to frame climate action",
    omission: "economic worries of workers employed in fossil-fuel regions",
  },
  {
    event: "the 1930 Indian cloth boycott",
    year: 1930,
    nature: "a printed nationalist rally handbill",
    origin: "local Indian National Congress volunteers in Gujarat in 1930",
    purpose: "to urge shoppers to buy homespun khadi cloth and boycott British textiles",
    enquiryFact: "exact profit figures inside Lancashire cotton mills",
    enquiryAttitude: "how Congress linked everyday clothing choices to anti-colonial pride",
    omission: "reluctance among some poorer families who found khadi more expensive",
  },
];

interface MovementItem {
  clue: string;
  movement: "India" | "US Civil Rights" | "South Africa" | "Modern Digital";
  accept: string[];
  ingredient: "clear goal" | "moral discipline" | "economic leverage" | "organisation" | "external timing";
  ingredientAccept: string[];
  year: number;
  shortLabel: string;
  detail: string;
}

const MOVEMENT_ITEMS: MovementItem[] = [
  {
    clue: "the 240-mile Dandi Salt March challenging a British monopoly tax",
    movement: "India",
    accept: ["India", "Indian Independence", "Indian Independence Movement"],
    ingredient: "clear goal",
    ingredientAccept: ["clear goal", "clear goals", "focused goal", "goal"],
    year: 1930,
    shortLabel: "Salt March",
    detail: "Repealing the British Salt Tax gave every Indian household a concrete, unifying target.",
  },
  {
    clue: "spinning homespun khadi cloth to boycott imported Lancashire textiles",
    movement: "India",
    accept: ["India", "Indian Independence", "Indian Independence Movement"],
    ingredient: "economic leverage",
    ingredientAccept: ["economic leverage", "economic pressure", "economic"],
    year: 1920,
    shortLabel: "Khadi Cloth Boycott",
    detail: "Boycotting British cloth hit Lancashire textile mills financially.",
  },
  {
    clue: "Britain's WWII bankruptcy and Clement Attlee's 1945 Labour election victory",
    movement: "India",
    accept: ["India", "Indian Independence", "Indian Independence Movement"],
    ingredient: "external timing",
    ingredientAccept: ["external timing", "timing", "external context", "favourable timing"],
    year: 1945,
    shortLabel: "Attlee Elected (Post-WWII)",
    detail: "Post-WWII exhaustion made holding the Raj unaffordable for Britain.",
  },
  {
    clue: "mass nationwide branches of the Indian National Congress coordinating civil disobedience",
    movement: "India",
    accept: ["India", "Indian Independence", "Indian Independence Movement"],
    ingredient: "organisation",
    ingredientAccept: ["organisation", "organization", "leadership", "deep organisation"],
    year: 1942,
    shortLabel: "Quit India Movement",
    detail: "INC branches sustained nationwide campaigning even when national leaders were jailed.",
  },
  {
    clue: "Black commuters withdrawing roughly 70% of city bus fares for 381 days in Montgomery",
    movement: "US Civil Rights",
    accept: ["US Civil Rights", "Civil Rights", "USA", "US", "United States"],
    ingredient: "economic leverage",
    ingredientAccept: ["economic leverage", "economic pressure", "economic"],
    year: 1955,
    shortLabel: "Montgomery Bus Boycott",
    detail: "Withholding ~70% of fares imposed direct financial pain on Montgomery's bus company.",
  },
  {
    clue: "televised footage of fire hoses and police dogs attacking peaceful marchers in Birmingham",
    movement: "US Civil Rights",
    accept: ["US Civil Rights", "Civil Rights", "USA", "US", "United States"],
    ingredient: "moral discipline",
    ingredientAccept: ["moral discipline", "moral sympathy", "public sympathy", "moral"],
    year: 1963,
    shortLabel: "Birmingham Campaign",
    detail: "Disciplined non-violence under TV cameras exposed brutal repression and won moral sympathy.",
  },
  {
    clue: "Cold War embarrassment when Soviet media broadcast Southern segregation footage globally",
    movement: "US Civil Rights",
    accept: ["US Civil Rights", "Civil Rights", "USA", "US", "United States"],
    ingredient: "external timing",
    ingredientAccept: ["external timing", "timing", "external context", "favourable timing"],
    year: 1964,
    shortLabel: "US Civil Rights Act",
    detail: "Cold War rivalry pressured Presidents Kennedy and Johnson to pass federal civil rights laws.",
  },
  {
    clue: "NAACP lawyers, SCLC church networks, and SNCC student organisers working across the South",
    movement: "US Civil Rights",
    accept: ["US Civil Rights", "Civil Rights", "USA", "US", "United States"],
    ingredient: "organisation",
    ingredientAccept: ["organisation", "organization", "leadership", "deep organisation"],
    year: 1960,
    shortLabel: "Greensboro Sit-Ins & SNCC",
    detail: "Coordinated legal, church, and student institutions gave the movement lasting staying power.",
  },
  {
    clue: "the targeted demand to strike down literacy tests through a federal Voting Rights Act",
    movement: "US Civil Rights",
    accept: ["US Civil Rights", "Civil Rights", "USA", "US", "United States"],
    ingredient: "clear goal",
    ingredientAccept: ["clear goal", "clear goals", "focused goal", "goal"],
    year: 1965,
    shortLabel: "Selma & Voting Rights Act",
    detail: "Selma focused national attention on one unmistakable legislative target: Black voting rights.",
  },
  {
    clue: "1980s international banking sanctions, sports boycotts, and foreign divestment hitting the rand",
    movement: "South Africa",
    accept: ["South Africa", "Anti-Apartheid", "Anti-Apartheid Movement"],
    ingredient: "economic leverage",
    ingredientAccept: ["economic leverage", "economic pressure", "economic"],
    year: 1985,
    shortLabel: "Global Sanctions on Apartheid",
    detail: "Refused bank loans and international divestment pushed South Africa's economy into crisis.",
  },
  {
    clue: "the 1989 fall of the Berlin Wall ending Western fears of an ANC-Soviet alliance",
    movement: "South Africa",
    accept: ["South Africa", "Anti-Apartheid", "Anti-Apartheid Movement"],
    ingredient: "external timing",
    ingredientAccept: ["external timing", "timing", "external context", "favourable timing"],
    year: 1989,
    shortLabel: "End of Cold War",
    detail: "The end of the Cold War stripped Pretoria of its claim to be an essential Western ally.",
  },
  {
    clue: "shocking press photographs of Hector Pieterson during the 1976 Soweto student uprising",
    movement: "South Africa",
    accept: ["South Africa", "Anti-Apartheid", "Anti-Apartheid Movement"],
    ingredient: "moral discipline",
    ingredientAccept: ["moral discipline", "moral sympathy", "public sympathy", "moral"],
    year: 1976,
    shortLabel: "Soweto Uprising",
    detail: "Global outrage over armed police shooting marching schoolchildren shattered apartheid's image.",
  },
  {
    clue: "the ANC, United Democratic Front (UDF), and COSATU unions sustaining township resistance",
    movement: "South Africa",
    accept: ["South Africa", "Anti-Apartheid", "Anti-Apartheid Movement"],
    ingredient: "organisation",
    ingredientAccept: ["organisation", "organization", "leadership", "deep organisation"],
    year: 1983,
    shortLabel: "UDF Civic Coalition",
    detail: "Civic, union, and political coalitions made apartheid townships ungovernable by the late 1980s.",
  },
  {
    clue: "protests targeting South Africa's Pass Laws before the 1960 Sharpeville Massacre",
    movement: "South Africa",
    accept: ["South Africa", "Anti-Apartheid", "Anti-Apartheid Movement"],
    ingredient: "clear goal",
    ingredientAccept: ["clear goal", "clear goals", "focused goal", "goal"],
    year: 1960,
    shortLabel: "Sharpeville Massacre",
    detail: "Burning hated Pass Books focused protest on a concrete daily symbol of apartheid control.",
  },
  {
    clue: "Fridays for Future student walkouts using placards to appeal to adult leaders' conscience",
    movement: "Modern Digital",
    accept: ["Modern Digital", "Modern", "Modern Protests", "Digital", "21st Century"],
    ingredient: "moral discipline",
    ingredientAccept: ["moral discipline", "moral sympathy", "public sympathy", "moral"],
    year: 2019,
    shortLabel: "Global Climate Strikes",
    detail: "Peaceful youth strikes projected sharp moral urgency ahead of UN climate summits.",
  },
  {
    clue: "the #MeToo campaign pressuring studios and legislators to restrict workplace non-disclosure agreements",
    movement: "Modern Digital",
    accept: ["Modern Digital", "Modern", "Modern Protests", "Digital", "21st Century"],
    ingredient: "clear goal",
    ingredientAccept: ["clear goal", "clear goals", "focused goal", "goal"],
    year: 2017,
    shortLabel: "Global #MeToo Wave",
    detail: "Focused workplace harassment reforms achieved concrete legal changes in several jurisdictions.",
  },
];

interface DigitalCase {
  context: string;
  concept: "citizen journalism" | "slacktivism" | "tactical freeze" | "state censorship" | "leaderless" | "global reach";
  accept: string[];
  symptom: string;
  explanation: string;
}

const DIGITAL_CONTEXTS = [
  "a youth climate strike campaign",
  "a global #MeToo workplace accountability wave",
  "an urban anti-racism protest movement",
  "a student pro-democracy movement",
  "a cross-border environmental boycott",
  "a viral human-rights awareness campaign",
  "a citywide housing-rights protest",
  "a digital anti-corruption movement",
];

const DIGITAL_CONCEPTS: Omit<DigitalCase, "context">[] = [
  {
    concept: "citizen journalism",
    accept: ["citizen journalism", "eyewitness video"],
    symptom: "bystanders film police misconduct on smartphones and upload the unedited footage within minutes, bypassing state press offices",
    explanation: "Ordinary eyewitnesses broadcasting live proof directly via smartphones is called citizen journalism.",
  },
  {
    concept: "slacktivism",
    accept: ["slacktivism", "clicktivism"],
    symptom: "two million users add a campaign frame to their profile photos and click 'like', yet fewer than 200 attend local council meetings or join boycotts",
    explanation: "Low-effort online gestures that fail to translate into sustained offline pressure are called slacktivism.",
  },
  {
    concept: "tactical freeze",
    accept: ["tactical freeze", "the tactical freeze"],
    symptom: "a viral hashtag attracts half a million marchers in one week, but when ministers ignore the rally, activists have no offline committees able to switch tactics",
    explanation: "Scaling overnight before building offline decision-making institutions produces what Zeynep Tufekci calls a tactical freeze.",
  },
  {
    concept: "state censorship",
    accept: ["state censorship", "internet shutdown", "censorship", "surveillance"],
    symptom: "authorities cut mobile data across protest districts, block encrypted messaging apps, and deploy facial-recognition tracking on marchers",
    explanation: "Governments counter online networks using state censorship, internet shutdowns, and digital surveillance.",
  },
  {
    concept: "leaderless",
    accept: ["leaderless", "horizontal", "leaderless fragmentation"],
    symptom: "arresting one prominent activist fails to stop the march, yet ministers complain nobody has authority to negotiate a binding compromise deal",
    explanation: "A leaderless (horizontal) structure resists decapitation yet struggles to broker binding formal settlements.",
  },
  {
    concept: "global reach",
    accept: ["global reach", "speed", "viral reach"],
    symptom: "one teenager's placard photograph spreads across 150 countries in months without any party budget or television network",
    explanation: "Social media's signature strength is rapid, low-cost global reach across borders.",
  },
];

interface InterpEvent {
  topic: string;
  year: number;
  primaryExample: string;
  secondaryExample: string;
  greatManClaim: string;
  grassrootsClaim: string;
}

const INTERP_EVENTS: InterpEvent[] = [
  {
    topic: "Indian Independence (1947)",
    year: 1947,
    primaryExample: "a 1930 eyewitness newspaper dispatch from Dandi",
    secondaryExample: "a 2019 historian's monograph reassessing British withdrawal from India",
    greatManClaim: "Mahatma Gandhi's personal moral genius single-handedly broke British rule in India",
    grassrootsClaim: "millions of unnamed Indian villagers boycotting cloth and boiling illegal salt made the Raj ungovernable",
  },
  {
    topic: "the Montgomery Bus Boycott (1955–56)",
    year: 1955,
    primaryExample: "Rosa Parks's original December 1955 arrest record",
    secondaryExample: "a 2021 television documentary analysing the Montgomery Bus Boycott",
    greatManClaim: "Martin Luther King Jr.'s soaring church sermons alone sustained the boycott to victory",
    grassrootsClaim: "ordinary Black domestic workers walking miles and Women's Political Council carpools kept buses empty for 381 days",
  },
  {
    topic: "the 1964–65 US Civil Rights laws",
    year: 1964,
    primaryExample: "a 1965 live TV news clip filmed on the Edmund Pettus Bridge",
    secondaryExample: "a 2016 university textbook chapter evaluating the Civil Rights Act",
    greatManClaim: "President Lyndon B. Johnson's backroom skill in Congress was the real reason civil rights bills passed",
    grassrootsClaim: "Greensboro sit-in freshmen, Freedom Riders, and local SNCC voter-registration workers forced Washington to act",
  },
  {
    topic: "the end of South African Apartheid (1994)",
    year: 1994,
    primaryExample: "a 1976 hand-printed leaflet carried by Soweto high school pupils",
    secondaryExample: "a 2020 museum gallery panel explaining why apartheid collapsed",
    greatManClaim: "Nelson Mandela's forgiveness and F.W. de Klerk's 1990 speech were the decisive causes of democracy",
    grassrootsClaim: "township rent boycotts, COSATU factory strikes, and Soweto youth protests paralysed the apartheid state from below",
  },
  {
    topic: "the 2018–19 Youth Climate Strikes",
    year: 2019,
    primaryExample: "a September 2019 livestream filmed by a student marcher in Berlin",
    secondaryExample: "a 2024 academic journal article comparing youth climate activism with 1960s protests",
    greatManClaim: "Greta Thunberg's dramatic UN speeches almost single-handedly put climate change on the global agenda",
    grassrootsClaim: "thousands of unnamed local student chapters across 150 countries organised weekly walkouts in their own towns",
  },
  {
    topic: "the #MeToo Movement (2006–2017)",
    year: 2017,
    primaryExample: "an October 2017 social-media thread sharing firsthand workplace testimony",
    secondaryExample: "a 2022 sociology book assessing the legal legacy of #MeToo",
    greatManClaim: "a handful of famous Hollywood celebrities created the entire #MeToo movement overnight in 2017",
    grassrootsClaim: "Tarana Burke's decade of community organising and millions of everyday workers sharing stories drove reform",
  },
  {
    topic: "the 1919 Amritsar turning point",
    year: 1919,
    primaryExample: "a 1919 British Hunter Commission hearing transcript",
    secondaryExample: "a 2018 BBC history podcast debating the legacy of Amritsar",
    greatManClaim: "Nehru and Gandhi's speeches after 1919 were the sole force turning Indians against empire",
    grassrootsClaim: "widespread ordinary outrage among Punjabi families, merchants, and students shattered trust in British rule",
  },
  {
    topic: "the 1960 Sharpeville turning point",
    year: 1960,
    primaryExample: "a March 1960 press photograph taken outside Sharpeville police station",
    secondaryExample: "a 2015 historian's biography comparing ANC and PAC strategies",
    greatManClaim: "Robert Sobukwe and Nelson Mandela alone shifted South African politics after 1960",
    grassrootsClaim: "ordinary township residents publicly refusing to carry Pass Books forced the crisis into global headlines",
  },
];

const FECP_CASES: {
  reason: "Focus" | "Evidence" | "Context" | "Purpose";
  accept: string[];
  desc: (topic: string) => string;
  explanation: string;
}[] = [
  {
    reason: "Focus",
    accept: ["Focus", "focus", "lens"],
    desc: (t) => `Historian A writes a top-down political history of ${t}, whereas Historian B writes a bottom-up social history of everyday families and workers`,
    explanation: "Choosing a political versus social analytical lens is a difference in **Focus** (F in FECP).",
  },
  {
    reason: "Evidence",
    accept: ["Evidence", "evidence", "sources", "archives"],
    desc: (t) => `Historian A bases their chapter on ${t} on newly declassified cabinet memos, whereas Historian B relies mainly on oral-history interviews with student activists`,
    explanation: "Selecting and weighting different source collections is a difference in **Evidence** (E in FECP).",
  },
  {
    reason: "Context",
    accept: ["Context", "context", "era"],
    desc: (t) => `Historian A wrote about ${t} shortly after the event when male political leaders dominated history writing, whereas Historian B wrote decades later when historians actively recovered women's and youth voices`,
    explanation: "Shifting social questions across the era in which each book is written is a difference in **Context** (C in FECP).",
  },
  {
    reason: "Purpose",
    accept: ["Purpose", "purpose", "audience"],
    desc: (t) => `Account A is a dramatic two-hour cinema biopic about ${t} aimed at general audiences, whereas Account B is a detailed university economic study`,
    explanation: "Writing for cinema entertainment versus scholarly analysis reflects a difference in **Purpose** and audience (P in FECP).",
  },
];

export const drills: Drill[] = [
  {
    id: "modern-protest-movements.nop-analyser",
    topicId: "modern-protest-movements",
    title: "NOP Source Provenance & Utility Analyser",
    level: 1,
    guideRef: "source-provenance-nop",
    generate(rng, tier) {
      const sc = rng.pick(NOP_SCENARIOS);
      if (tier === 1) {
        const part = rng.pick(["Nature", "Origin", "Purpose"] as const);
        const clue = part === "Nature" ? sc.nature : part === "Origin" ? sc.origin : sc.purpose;
        const stems = [
          `While studying ${sc.event}, you note this provenance detail: **"${clue}"**. Which part of NOP does this identify? (Type: Nature, Origin, or Purpose)`,
          `Source enquiry on ${sc.event}: a student highlights **"${clue}"**. Does this describe the source's **Nature**, **Origin**, or **Purpose**?`,
        ];
        return {
          prompt: rng.pick(stems),
          answer: { type: "text", accept: [part, part[0]], display: part },
          traps: (["Nature", "Origin", "Purpose"] as const)
            .filter((x) => x !== part)
            .map((wrong) => ({
              spec: { type: "text" as const, accept: [wrong, wrong[0]] },
              feedback:
                wrong === "Nature"
                  ? "Nature means the type/format of document (e.g. telegram, editorial, poster)."
                  : wrong === "Origin"
                    ? "Origin means who created it, when, and where."
                    : "Purpose means why it was made and for which audience.",
            })),
          solution: [
            `Recall NOP: **Nature** = format/type, **Origin** = who/when/where, **Purpose** = why/audience.`,
            `"${clue}" identifies the source's **${part}**.`,
          ],
          hint: "Nature = document type; Origin = who/when/where; Purpose = why/audience.",
        };
      }
      if (tier === 2) {
        const mode = rng.pick(["attitudes", "facts", "omission"] as const);
        if (mode === "attitudes") {
          const stems = [
            `Source on ${sc.event}: ${sc.nature} by ${sc.origin}, created ${sc.purpose}. For an enquiry into **${sc.enquiryAttitude}**, is this source's utility **high** or **low**?`,
            `You are researching **${sc.enquiryAttitude}** during ${sc.event}. You find ${sc.nature} produced by ${sc.origin} (${sc.purpose}). Judge its utility for THIS enquiry: **high** or **low**?`,
          ];
          return {
            prompt: rng.pick(stems),
            answer: { type: "text", accept: ["high", "useful", "high utility"], display: "high" },
            traps: [
              { spec: { type: "text", accept: ["low", "useless", "biased"] }, feedback: "Never dismiss a biased source as useless! Because the enquiry specifically asks about attitudes/perspectives, its utility is HIGH." },
            ],
            solution: [
              `Check the exact enquiry question: it asks about **${sc.enquiryAttitude}**.`,
              `Even if one-sided on neutral facts, ${sc.nature} created ${sc.purpose} has **high** utility for revealing those exact attitudes and motives.`,
            ],
            hint: "Always ask 'Useful FOR what?'—bias is strong evidence when studying attitudes or propaganda.",
          };
        }
        if (mode === "facts") {
          const stems = [
            `Source on ${sc.event}: ${sc.nature} by ${sc.origin} (${sc.purpose}). If you rely on it ALONE to establish **${sc.enquiryFact}**, is its reliability **high** or **low**?`,
            `Enquiry on ${sc.event}: a student uses ONLY ${sc.nature} by ${sc.origin} (${sc.purpose}) to prove **${sc.enquiryFact}**. Is reliability for this claim **high** or **low**?`,
          ];
          return {
            prompt: rng.pick(stems),
            answer: { type: "text", accept: ["low", "limited", "low reliability"], display: "low" },
            traps: [
              { spec: { type: "text", accept: ["high"] }, feedback: "Because the creator had a specific narrow viewpoint and purpose, relying on it alone for outside facts has LOW reliability without cross-referencing." },
            ],
            solution: [
              `The source was created by ${sc.origin} ${sc.purpose}.`,
              `Using it alone for **${sc.enquiryFact}** gives **low** reliability—you must cross-reference it with other viewpoints and Own Knowledge.`,
            ],
            hint: "Does the creator have full access and neutral intent regarding this specific factual question?",
          };
        }
        const stems = [
          `Source on ${sc.event}: ${sc.nature} by ${sc.origin} (${sc.purpose}) completely leaves out **${sc.omission}**. What historical term describes a crucial fact left out by a source?`,
          `Testing ${sc.nature} on ${sc.event} against Own Knowledge shows it ignores **${sc.omission}**. What one-word term names something deliberately left out of a source?`,
        ];
        return {
          prompt: rng.pick(stems),
          answer: { type: "text", accept: ["omission", "omissions"], display: "omission" },
          solution: [
            `Leaving out **${sc.omission}** because it clashes with the author's purpose is called an **omission**.`,
            "Spotting omissions using Own Knowledge is a key top-band source skill.",
          ],
          hint: "Derived from the verb 'omit' (to leave out).",
        };
      }
      // Tier 3: deep evaluation concept matching across rich provenance combinations
      const task = rng.pick(["cross-ref", "own-knowledge", "utility-vs-reliability", "provenance"] as const);
      if (task === "cross-ref") {
        const sc2 = rng.pick(NOP_SCENARIOS.filter((x) => x.event !== sc.event));
        return {
          prompt: `To check whether ${sc.nature} by ${sc.origin} exaggerates claims about ${sc.event}, a historian compares it against a contrasting eyewitness account (just as when checking ${sc2.nature}). What hyphenated skill is the historian using?`,
          answer: { type: "text", accept: ["cross-referencing", "cross referencing", "corroboration"], display: "cross-referencing" },
          solution: [
            "Comparing two or more sources from different origins to test agreement and explain contradictions is **cross-referencing**.",
          ],
          hint: "Hyphenated skill starting with 'cross-' (comparing Source A with Source B).",
        };
      }
      if (task === "own-knowledge") {
        return {
          prompt: `You read ${sc.nature} on ${sc.event} (${sc.origin}) and notice it omits **${sc.omission}**. In the formula **C + NOP + OK**, which two-word element enabled you to spot that missing context?`,
          answer: { type: "text", accept: ["Own Knowledge", "own knowledge", "contextual knowledge"], display: "Own Knowledge" },
          solution: [
            "In **C + NOP + OK**, **Own Knowledge** (contextual knowledge) lets you test claims and spot omissions like " + sc.omission + ".",
          ],
          hint: "What does 'OK' stand for in C + NOP + OK?",
        };
      }
      if (task === "utility-vs-reliability") {
        return {
          prompt: `During ${sc.event}, ${sc.nature} created ${sc.purpose} is one-sided on neutral statistics, yet still priceless for revealing **${sc.enquiryAttitude}**. Which single word describes a source's value for a specific enquiry (distinct from reliability)?`,
          answer: { type: "text", accept: ["utility", "usefulness"], display: "utility" },
          traps: [
            { spec: { type: "text", accept: ["reliability"] }, feedback: "Reliability asks whether factual claims are trustworthy; value for a specific enquiry is **utility** (usefulness)." },
          ],
          solution: [
            "Reliability measures factual trustworthiness; value for answering a specific enquiry is **utility** (usefulness).",
          ],
          hint: "It is contrasted with reliability—starts with 'u'.",
        };
      }
      return {
        prompt: `When evaluating ${sc.nature} from ${sc.year} (${sc.origin}, created ${sc.purpose}), what single word describes the combined background details of Nature, Origin, and Purpose?`,
        answer: { type: "text", accept: ["provenance"], display: "provenance" },
        solution: [
          "Nature, Origin, and Purpose together make up a source's **provenance**.",
        ],
        hint: "A 10-letter word starting with 'p' meaning the background origin details of a source.",
      };
    },
  },
  {
    id: "modern-protest-movements.movement-matcher",
    topicId: "modern-protest-movements",
    title: "Protest Movement Comparative Matcher",
    level: 1,
    guideRef: "comparing-protest-success",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(MOVEMENT_ITEMS);
        const frames = [
          `Which protest movement used or experienced **${item.clue}**? (Type: India, US Civil Rights, South Africa, or Modern Digital)`,
          `Match this historical clue (${item.year}) to its movement: **${item.clue}**. (Type: India, US Civil Rights, South Africa, or Modern Digital)`,
          `Comparative protest check: **${item.clue}** belongs to which campaign? (Type: India, US Civil Rights, South Africa, or Modern Digital)`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: item.accept, display: item.movement },
          solution: [
            `**${item.shortLabel}** (${item.year}) belongs to **${item.movement}**.`,
            item.detail,
          ],
          hint: `Notice the year (${item.year}) and the specific place, organisation, or tactic named.`,
        };
      }
      if (tier === 2) {
        const item = rng.pick(MOVEMENT_ITEMS);
        const frames = [
          `In **${item.movement}** (${item.year}), **${item.clue}** best illustrates which of the 5 ingredients of protest success? (Type: clear goal, moral discipline, economic leverage, organisation, or external timing)`,
          `Categorise this factor from **${item.movement}**: **${item.clue}**. Which success ingredient is it? (Type: clear goal, moral discipline, economic leverage, organisation, or external timing)`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: item.ingredientAccept, display: item.ingredient },
          solution: [
            `${item.detail}`,
            `Therefore it primarily demonstrates **${item.ingredient}**.`,
          ],
          hint: "Choose among the 5 ingredients: clear goal, moral discipline, economic leverage, organisation, external timing.",
        };
      }
      // Tier 3: chronological gap across pairs of protest milestones (16 choose 2 = 120 distinct pairs!)
      const pool = MOVEMENT_ITEMS.filter((m, idx, arr) => arr.findIndex((x) => x.year === m.year) === idx);
      const a = rng.pick(pool);
      const b = rng.pick(pool.filter((x) => x.year !== a.year));
      const earlier = a.year < b.year ? a : b;
      const later = a.year < b.year ? b : a;
      const gap = later.year - earlier.year;
      return {
        prompt: `Cross-movement chronology: how many years separated **${earlier.shortLabel}** (${earlier.movement}, ${earlier.year}) and **${later.shortLabel}** (${later.movement}, ${later.year})?`,
        answer: { type: "number", value: gap, display: `${gap} years` },
        solution: [
          `Subtract the earlier milestone from the later milestone: ${later.year} − ${earlier.year} = **${gap} years**.`,
          `Comparing timelines shows how earlier tactics (like ${earlier.shortLabel}) inspired later campaigns (like ${later.shortLabel}).`,
        ],
        hint: `Compute ${later.year} − ${earlier.year}.`,
      };
    },
  },
  {
    id: "modern-protest-movements.digital-tradeoffs",
    topicId: "modern-protest-movements",
    title: "21st-Century Digital Protest Trade-Offs",
    level: 2,
    guideRef: "modern-protests-digital-age",
    generate(rng, tier) {
      const ctx = rng.pick(DIGITAL_CONTEXTS);
      const item = rng.pick(DIGITAL_CONCEPTS);
      if (tier === 1) {
        return {
          prompt: `During ${ctx}, ${item.symptom}. Which concept best describes this feature? (Type: citizen journalism, slacktivism, tactical freeze, state censorship, leaderless, or global reach)`,
          answer: { type: "text", accept: item.accept, display: item.concept },
          solution: [
            item.explanation,
            `Answer: **${item.concept}**.`,
          ],
          hint: "Pick the exact term from the list in brackets that matches the scenario.",
        };
      }
      if (tier === 2) {
        const isStrength = item.concept === "citizen journalism" || item.concept === "global reach";
        return {
          prompt: `In ${ctx}, ${item.symptom}. When evaluating 21st-century digital protest, is this primarily a **strength** or a **limitation**? (Type: strength or limitation)`,
          answer: {
            type: "text",
            accept: isStrength ? ["strength", "advantage", "pro"] : ["limitation", "limit", "weakness", "vulnerability", "con"],
            display: isStrength ? "strength" : "limitation",
          },
          traps: [
            {
              spec: { type: "text", accept: isStrength ? ["limitation", "weakness"] : ["strength", "advantage"] },
              feedback: isStrength
                ? "Bypassing gatekeepers and spreading globally at low cost are key digital STRENGTHS."
                : "Slacktivism, tactical freeze, state shutdowns, and leaderless bargaining gaps are key digital LIMITATIONS.",
            },
          ],
          solution: [
            item.explanation,
            `In evaluating 21st-century protest, this represents a major digital **${isStrength ? "strength" : "limitation"}**.`,
          ],
          hint: "Ask whether this feature helps the protest grow/expose injustice (strength) or blocks lasting legal reform (limitation).",
        };
      }
      // Tier 3: concise analytical recall WITHOUT giving the multiple-choice list
      return {
        prompt: `Diagnose this 21st-century protest case: in ${ctx}, ${item.symptom}. Name the exact historical/sociological term for this strength or vulnerability.`,
        answer: { type: "text", accept: item.accept, display: item.concept },
        solution: [
          item.explanation,
          `Exact term: **${item.concept}**.`,
        ],
        hint: `Think of the key digital protest terms from Section 1 (first letter: "${item.concept[0].toUpperCase()}").`,
      };
    },
  },
  {
    id: "modern-protest-movements.interpretation-lens",
    topicId: "modern-protest-movements",
    title: "Historical Interpretations & FECP Diagnostician",
    level: 3,
    guideRef: "historical-interpretations",
    generate(rng, tier) {
      const ev = rng.pick(INTERP_EVENTS);
      if (tier === 1) {
        const isPrimary = rng.bool();
        const artifact = isPrimary ? ev.primaryExample : ev.secondaryExample;
        const frames = [
          `For a study of **${ev.topic}**, classify **${artifact}**. (Type: primary source or historical interpretation)`,
          `Historian's sorting check on **${ev.topic}**: is **${artifact}** a **primary source** or a **historical interpretation**?`,
          `Source vs interpretation on **${ev.topic}**: you consult **${artifact}**. Which category does it belong to? (Type: primary source or historical interpretation)`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: isPrimary
            ? { type: "text", accept: ["primary source", "primary"], display: "primary source" }
            : { type: "text", accept: ["historical interpretation", "interpretation", "secondary interpretation"], display: "historical interpretation" },
          traps: [
            {
              spec: { type: "text", accept: isPrimary ? ["historical interpretation", "interpretation"] : ["primary source", "primary"] },
              feedback: isPrimary
                ? "This was created DURING the event itself, making it a contemporary primary source."
                : "This was created AFTER the event to select evidence and present an argument, making it a historical interpretation.",
            },
          ],
          solution: [
            isPrimary
              ? `Because ${artifact} dates from the time of ${ev.topic}, it is a **primary source**.`
              : `Because ${artifact} was created after ${ev.topic} to construct an argument from evidence, it is a **historical interpretation**.`,
          ],
          hint: "Check WHEN it was created: during the event = primary source; later account arguing why = historical interpretation.",
        };
      }
      if (tier === 2) {
        const isGreatMan = rng.bool();
        const claim = isGreatMan ? ev.greatManClaim : ev.grassrootsClaim;
        const frames = [
          `A historian writes about **${ev.topic}**: *"${claim}."* Which interpretation lens is this? (Type: Great Man or grassroots)`,
          `Read this argument on **${ev.topic}**: *"${claim}."* Does it reflect a **Great Man** (top-down) or **grassroots** (bottom-up) interpretation?`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: isGreatMan
            ? { type: "text", accept: ["Great Man", "great man history", "top-down", "top down"], display: "Great Man" }
            : { type: "text", accept: ["grassroots", "grass-roots", "bottom-up", "bottom up"], display: "grassroots" },
          traps: [
            {
              spec: { type: "text", accept: isGreatMan ? ["grassroots", "bottom-up"] : ["Great Man", "top-down"] },
              feedback: isGreatMan
                ? "Spotlighting one famous leader is a top-down 'Great Man' interpretation."
                : "Spotlighting ordinary citizens, students, or local networks is a bottom-up 'grassroots' interpretation.",
            },
          ],
          solution: [
            isGreatMan
              ? `Crediting iconic individual leaders as the decisive engine of ${ev.topic} is a **Great Man** (top-down) interpretation.`
              : `Crediting ordinary marchers, students, and local branches in ${ev.topic} is a **grassroots** (bottom-up) interpretation.`,
          ],
          hint: "Does the quote spotlight a famous individual at the top, or ordinary people at the base?",
        };
      }
      // Tier 3: FECP reason why two historians disagree
      const fecp = rng.pick(FECP_CASES);
      const frames = [
        `Why do these two accounts disagree? ${fecp.desc(ev.topic)}. Which **FECP** reason best explains the disagreement? (Type: Focus, Evidence, Context, or Purpose)`,
        `Diagnose the historical debate: ${fecp.desc(ev.topic)}. Identify the matching **FECP** factor: **Focus**, **Evidence**, **Context**, or **Purpose**.`,
      ];
      return {
        prompt: rng.pick(frames),
        answer: { type: "text", accept: fecp.accept, display: fecp.reason },
        solution: [
          fecp.explanation,
          "Remember FECP: Focus (lens), Evidence (archives), Context (era written), Purpose (audience).",
        ],
        hint: "Match to FECP: Focus (top-down vs bottom-up), Evidence (different archives), Context (different decades), Purpose (biopic vs academic study).",
      };
    },
  },
];
