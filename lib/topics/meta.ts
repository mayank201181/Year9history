// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 History.
// Source: Middle School Curriculum Overview p. 19.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Why Did Wars Start?",
  "Protest & Conflict",
  "Singapore & Change",
];

export const TOPIC_META: TopicMeta[] = [
  // ========================= WHY DID WARS START? ==========================
  {
    id: "causes-of-ww1",
    title: "Causes of the First World War (1914)",
    strand: "Why Did Wars Start?",
    icon: "⚔️",
    curriculum: "Year 9 Term 1 — Why Did Wars Start in the 20th Century? Ideology, Territory & Flashpoints in WWI",
    sections: [
      {
        id: "main-alliances-ideology",
        heading: "Ideology, Nationalism & the Alliance System",
        covers: "Europe's Great Powers in 1914; nationalism (Slavic nationalism vs Austro-Hungarian Empire), imperial ideology (Weltpolitik) and the two rival blocs: Triple Alliance (Germany, Austria-Hungary, Italy) vs Triple Entente (Britain, France, Russia).",
      },
      {
        id: "militarism-territory",
        heading: "Militarism, Arms Races & Territorial Rivalries",
        covers: "Anglo-German naval race (HMS Dreadnought), conscription & war plans (Schlieffen Plan); territorial flashzones: Alsace-Lorraine, Moroccan Crises (1905/1911) and the Balkan 'powder keg' (Bosnian Crisis 1908, Balkan Wars 1912–13).",
      },
      {
        id: "sarajevo-july-crisis",
        heading: "Flashpoint: Sarajevo & the July Crisis (1914)",
        covers: "28 June 1914 assassination of Archduke Franz Ferdinand by Gavrilo Princip (Black Hand); Germany's 'blank cheque', Austrian ultimatum to Serbia, chain reaction of mobilisations, German invasion of neutral Belgium & Britain's entry (4 August 1914).",
      },
      {
        id: "weighing-ww1-causes",
        heading: "Weighing & Linking Causes: Historiography of 1914",
        covers: "Distinguishing long-term conditions (MAIN + territory) from the short-term trigger (Sarajevo); debating responsibility (Fischer thesis vs 'sleepwalkers' shared blame) in top-band causation essays.",
      },
    ],
  },
  {
    id: "causes-of-vietnam-war",
    title: "Causes of the Vietnam War",
    strand: "Why Did Wars Start?",
    icon: "🚁",
    curriculum: "Year 9 Term 1 — Why Did Wars Start in the 20th Century? Ideology, Territory & Flashpoints in the Vietnam War",
    sections: [
      {
        id: "indochina-decolonisation",
        heading: "Territory & Decolonisation: French Indochina to 1954",
        covers: "French colonial rule, Japanese occupation in WWII, Ho Chi Minh & the Viet Minh nationalist-communist struggle, Battle of Dien Bien Phu (1954) and the Geneva Accords temporarily dividing Vietnam at the 17th parallel.",
      },
      {
        id: "cold-war-ideology-domino",
        heading: "Cold War Ideology: Containment & the Domino Theory",
        covers: "Communism vs Capitalism after 1945; Truman Doctrine & Containment; Eisenhower's Domino Theory (fear that if Vietnam fell to Communism, Laos, Cambodia, Thailand, Malaya & Singapore would follow); US funding of France then South Vietnam.",
      },
      {
        id: "diem-viet-cong-escalation",
        heading: "Ngo Dinh Diem, the Viet Cong & Rising Tensions",
        covers: "Why the promised 1956 reunification elections never happened; Ngo Dinh Diem's unpopular authoritarian regime in South Vietnam (strategic hamlets, Buddhist crisis); formation of the NLF / Viet Cong & US 'advisers' under JFK.",
      },
      {
        id: "gulf-of-tonkin-comparison",
        heading: "Flashpoint: Gulf of Tonkin (1964) & Comparing WWI vs Vietnam",
        covers: "August 1964 Gulf of Tonkin incident & Resolution giving President Lyndon B. Johnson power for full military escalation (Operation Rolling Thunder & 1965 ground troops); comparing the roles of ideology, territory & flashpoints in WWI vs Vietnam.",
      },
    ],
  },

  // ========================= PROTEST & CONFLICT ===========================
  {
    id: "the-holocaust",
    title: "The Holocaust: Persecution, Resistance & Memory",
    strand: "Protest & Conflict",
    icon: "🕯️",
    curriculum: "Year 9 Term 2 — The Holocaust: Antisemitism, Escalation 1933–45, Resistance & Historical Significance",
    sections: [
      {
        id: "roots-nazi-ideology",
        heading: "Long-Term Antisemitism & Nazi Racial Ideology",
        covers: "Historical European antisemitism vs Nazi pseudo-scientific racial ideology (Aryan supremacy, scapegoating Jews for WWI defeat & Depression, propaganda in schools and media after 1933).",
      },
      {
        id: "escalation-1933-1939",
        heading: "Step-by-Step Escalation (1933–1939)",
        covers: "Boycott of Jewish shops (1933), exclusion from professions, Nuremberg Laws (1935 stripping citizenship & banning mixed marriages), Kristallnacht ('Night of Broken Glass', November 1938) and obstacles to emigration.",
      },
      {
        id: "ghettos-final-solution",
        heading: "WWII, Ghettos & the 'Final Solution'",
        covers: "Invasion of Poland (1939) & USSR (1941), forced ghettos (e.g. Warsaw), Einsatzgruppen mobile killing squads, Wannsee Conference (Jan 1942) coordinating industrial extermination camps (Auschwitz-Birkenau, Treblinka) murdering six million Jews plus Roma, disabled people & political prisoners.",
      },
      {
        id: "resistance-justice-remembrance",
        heading: "Resistance, Rescuers, Liberation & Significance",
        covers: "Armed & spiritual resistance (Warsaw Ghetto Uprising 1943, partisans, underground archives), rescuers ('Righteous Among the Nations' e.g. Oskar Schindler, Danish rescue), bystanders vs perpetrators, Nuremberg Trials, UN Genocide Convention (1948) & why remembrance matters.",
      },
    ],
  },
  {
    id: "indian-independence",
    title: "Indian Independence & Satyagraha",
    strand: "Protest & Conflict",
    icon: "🕊️",
    curriculum: "Year 9 Term 2 — How & Why Did Protest Movements Work? Indian Independence, Gandhi & Partition",
    sections: [
      {
        id: "british-raj-amritsar",
        heading: "The British Raj, Nationalism & Amritsar (1919)",
        covers: "British economic and political control in India, Indian National Congress & Muslim League, WWI contribution & broken promises, Rowlatt Acts and the 1919 Jallianwala Bagh (Amritsar) Massacre turning public opinion decisively against British rule.",
      },
      {
        id: "gandhi-satyagraha-salt-march",
        heading: "Gandhi, Satyagraha & the Salt March (1930)",
        covers: "Satyagraha ('truth-force' / non-violent civil disobedience), Non-Cooperation & boycott of British cloth (khadi), the 240-mile Dandi Salt March (1930) exposing moral hypocrisy and uniting ordinary Indians globally.",
      },
      {
        id: "quit-india-ww2",
        heading: "Quit India (1942), WWII & Multiple Pressures",
        covers: "Quit India movement, Britain's WWII economic exhaustion and changing postwar politics (Attlee's Labour government 1945), plus the roles of Nehru, Jinnah and Subhas Chandra Bose alongside Gandhi.",
      },
      {
        id: "independence-partition-1947",
        heading: "1947 Independence, Partition & Assessing Success",
        covers: "Communal tensions, Mountbatten Plan & hurried Radcliffe Line creating India and Pakistan (August 1947), mass displacement and violence; evaluating how far non-violent protest alone achieved independence.",
      },
    ],
  },
  {
    id: "us-civil-rights",
    title: "The US Civil Rights Movement",
    strand: "Protest & Conflict",
    icon: "✊",
    curriculum: "Year 9 Term 2 — How & Why Did Protest Movements Work? US Civil Rights (1954–68)",
    sections: [
      {
        id: "jim-crow-brown-v-board",
        heading: "Jim Crow Segregation & Legal Challenges",
        covers: "Jim Crow laws in the US South ('separate but equal' — Plessy v. Ferguson 1896), voter disenfranchisement & KKK terror; NAACP legal strategy culminating in Brown v. Board of Education (1954) & Little Rock Nine (1957).",
      },
      {
        id: "montgomery-direct-action",
        heading: "Montgomery, Sit-Ins & Non-Violent Direct Action",
        covers: "Rosa Parks & the 381-day Montgomery Bus Boycott (1955–56) using economic pressure; Greensboro Sit-Ins (1960), Freedom Rides (1961), Birmingham Campaign (1963) & the power of television exposing brutality.",
      },
      {
        id: "mlk-legislation-1964-1965",
        heading: "Martin Luther King Jr., Selma & Federal Laws (1964–65)",
        covers: "1963 March on Washington ('I Have a Dream'), President Lyndon B. Johnson & the Civil Rights Act (1964, ending public segregation), Selma-to-Montgomery marches (1965) & Voting Rights Act (1965).",
      },
      {
        id: "malcolm-x-black-power",
        heading: "Malcolm X, Black Power & Assessing Progress",
        covers: "Frustration in northern ghettos over poverty and police brutality; Malcolm X's emphasis on self-defence and pride; Stokely Carmichael & Black Panthers' community programmes; weighing legal gains vs continuing economic inequality.",
      },
    ],
  },
  {
    id: "anti-apartheid-south-africa",
    title: "Anti-Apartheid in South Africa",
    strand: "Protest & Conflict",
    icon: "🌍",
    curriculum: "Year 9 Term 2 — How & Why Did Protest Movements Work? Anti-Apartheid Movement (1948–94)",
    sections: [
      {
        id: "apartheid-system-1948",
        heading: "The Architecture of Apartheid (1948)",
        covers: "National Party election 1948 formalising racial segregation: Population Registration Act, Group Areas Act, Pass Laws, Bantu Education Act and Bantustans/homelands denying the Black majority the vote.",
      },
      {
        id: "sharpeville-armed-struggle",
        heading: "Defiance Campaign, Sharpeville (1960) & Rivonia Trial",
        covers: "Early peaceful protests (ANC Defiance Campaign 1952, Freedom Charter 1955); Sharpeville Massacre (21 March 1960, 69 killed), banning of ANC/PAC, formation of Umkhonto we Sizwe (MK) sabotage wing and Nelson Mandela's life sentence at Robben Island (1964).",
      },
      {
        id: "soweto-1976-sanctions",
        heading: "Soweto Uprising (1976), Internal Resistance & Global Sanctions",
        covers: "Black Consciousness (Steve Biko), Soweto student uprising against Afrikaans schooling (1976), UDF mass civic resistance, Desmond Tutu, and international economic, cultural and sporting boycotts/sanctions.",
      },
      {
        id: "end-of-apartheid-1994",
        heading: "Dismantling Apartheid & 1994 Democracy",
        covers: "Why President F.W. de Klerk unbanned the ANC and released Mandela (1990): economic crisis, townships ungovernable, end of the Cold War; CODESA talks, April 1994 multiracial elections & Truth and Reconciliation Commission.",
      },
    ],
  },
  {
    id: "modern-protest-movements",
    title: "Modern Protests & Historian's Source Skills",
    strand: "Protest & Conflict",
    icon: "📢",
    curriculum: "Year 9 Term 2 — Bringing Protests Up to Date, Comparing Movements & Source Provenance (NOP)",
    sections: [
      {
        id: "modern-protests-digital-age",
        heading: "21st-Century Protests: Digital, Youth & Climate Movements",
        covers: "How social media, smartphones and global networks accelerate modern mobilisation (e.g. Fridays for Future / youth climate strikes, #MeToo, anti-racism & democracy movements) — strengths (speed, global reach) vs limits ('slacktivism', leaderless fragmentation, state censorship).",
      },
      {
        id: "comparing-protest-success",
        heading: "Why Do Some Protest Movements Succeed?",
        covers: "Comparing India, US Civil Rights, South Africa & modern movements across key ingredients: clear goals, moral discipline/public sympathy, economic/political leverage, leadership & favourable timing.",
      },
      {
        id: "source-provenance-nop",
        heading: "Evaluating Historical Sources with NOP & Own Knowledge",
        covers: "Nature, Origin and Purpose (NOP); why biased/propaganda sources are STILL highly useful to historians ('useful FOR what?'); cross-referencing sources and testing claims against contextual knowledge.",
      },
      {
        id: "historical-interpretations",
        heading: "Why Historians Disagree: Evaluating Interpretations",
        covers: "Distinguishing contemporary primary sources from later historical interpretations; explaining why historians emphasise different causes or leaders (e.g. 'Great Man' vs grassroots protest) and judging interpretations with evidence.",
      },
    ],
  },

  // ========================= SINGAPORE & CHANGE ===========================
  {
    id: "singapore-and-change",
    title: "Singapore and Change (Combined Humanities)",
    strand: "Singapore & Change",
    icon: "🦁",
    curriculum: "Year 9 Term 3 — Combined Humanities Project: History, Politics, Geography & Economics of Change in Singapore",
    sections: [
      {
        id: "colony-to-self-government",
        heading: "From WWII Occupation to Self-Government (1942–1959)",
        covers: "Fall of Singapore (Feb 1942) & Japanese Occupation shattering the myth of British invincibility; post-war shortages, Maria Hertogh & Hock Lee bus riots, Rendel Constitution, rise of the PAP and 1959 internal self-government with Lee Kuan Yew as Prime Minister.",
      },
      {
        id: "merger-and-independence-1965",
        heading: "Merger with Malaysia (1963) & Separation (1965)",
        covers: "Why Singapore sought Merger (common market, security, decolonisation), political & economic disagreements (Malaysian Malaysia, 1964 racial riots, tax/common-market disputes) and sudden Independence on 9 August 1965.",
      },
      {
        id: "economic-urban-transformation",
        heading: "Economic & Urban Transformation: Jurong, HDB & Global Hub",
        covers: "From entrepôt trade and British military withdrawal to export-led industrialisation (EDB, Jurong Industrial Estate), attracting MNCs, Changi Airport & PSA port, and solving slums/squatters via HDB public housing after the 1961 Bukit Ho Swee fire.",
      },
      {
        id: "society-politics-enquiry",
        heading: "Multiracialism, Governance & Independent Enquiry Skills",
        covers: "Building national identity through bilingual education, National Service, Ethnic Integration Policy (HDB quotas) & meritocracy; designing a Year 9 Combined Humanities enquiry question linking History, Geography, Economics & Politics.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
