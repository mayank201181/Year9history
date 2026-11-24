import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-1",
  title: "Year 9 History Mock 1: Why Did Wars Start? (WWI & Vietnam)",
  calculator: false,
  minutes: 45,
  questions: [
    // Q01 — short (warmup)
    {
      id: "exam-1-q01",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "militarism-territory",
      difficulty: "warmup",
      question:
        "In which year did Austria-Hungary annex Bosnia-Herzegovina, triggering the Bosnian Crisis that bitterly inflamed tensions with Serbia and Russia?",
      answer: { type: "number", value: 1908 },
      traps: [
        { spec: { type: "number", value: 1914 }, feedback: "1914 was the Sarajevo assassination and outbreak of WWI; the Bosnian Crisis occurred six years earlier." },
        { spec: { type: "number", value: 1905 }, feedback: "1905 was the First Moroccan Crisis between Germany and France, three years before the Bosnian Crisis." },
        { spec: { type: "number", value: 1912 }, feedback: "1912 was the start of the First Balkan War, four years after Austria-Hungary annexed Bosnia." },
      ],
      hints: [
        "It took place six years before the Sarajevo assassination of 1914.",
        "This Balkan crisis humiliated Russia and Serbia after Germany backed Austria-Hungary.",
      ],
      solution: [
        "In October **1908**, Austria-Hungary formally annexed Bosnia-Herzegovina from the weakening Ottoman Empire.",
        "Serbia was outraged and Russia was forced to back down when Germany threatened support for Vienna, vowing not to retreat again in 1914.",
      ],
      commonError: "Confusing the 1908 Bosnian Crisis with the 1912–13 Balkan Wars or the 1914 July Crisis.",
    },

    // Q02 — mcq (warmup) — answerIndex: 2
    {
      id: "exam-1-q02",
      kind: "mcq",
      topicId: "causes-of-ww1",
      guideRef: "main-alliances-ideology",
      difficulty: "warmup",
      question: "Which three European Great Powers made up the **Triple Entente** by 1907?",
      options: [
        "Germany, Austria-Hungary, and Italy",
        "Britain, Germany, and Russia",
        "Britain, France, and Russia",
        "France, Serbia, and Austria-Hungary",
      ],
      answerIndex: 2,
      hints: [
        "Distinguish the Triple Entente from the rival Triple Alliance led by Germany.",
        "Think of the two agreements signed in 1904 (Entente Cordiale) and 1907.",
      ],
      explanation:
        "The Triple Entente linked **Britain, France, and Russia** through the Franco-Russian Alliance (1894), the Entente Cordiale (1904), and the Anglo-Russian Convention (1907). Germany, Austria-Hungary, and Italy belonged to the rival Triple Alliance.",
    },

    // Q03 — mcq (core) with SVG — answerIndex: 0
    {
      id: "exam-1-q03",
      kind: "mcq",
      topicId: "causes-of-ww1",
      guideRef: "main-alliances-ideology",
      difficulty: "core",
      question:
        "Study the schematic of Europe's rival alliance blocs in 1914. Why did this alliance structure make a regional crisis in the Balkans so dangerous for the whole continent?",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic of Europe\'s two rival alliance blocs in 1914 facing each other across Central Europe with the Balkans flashzone below">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">European Alliance Blocs &amp; Tensions (1914)</text>' +
        '<rect x="24" y="44" width="210" height="122" rx="10" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>' +
        '<text x="129" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#4c1d95">Entente Bloc (1907)</text>' +
        '<rect x="44" y="78" width="170" height="22" rx="5" fill="#ffffff" stroke="#c4b5fd"/>' +
        '<text x="129" y="93" text-anchor="middle" font-size="12" fill="#1e293b">Western Naval Power</text>' +
        '<rect x="44" y="106" width="170" height="22" rx="5" fill="#ffffff" stroke="#c4b5fd"/>' +
        '<text x="129" y="121" text-anchor="middle" font-size="12" fill="#1e293b">Western Land Power</text>' +
        '<rect x="44" y="134" width="170" height="22" rx="5" fill="#ffffff" stroke="#c4b5fd"/>' +
        '<text x="129" y="149" text-anchor="middle" font-size="12" fill="#1e293b">Eastern Ally (backs Serbia)</text>' +
        '<rect x="326" y="44" width="210" height="122" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>' +
        '<text x="431" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412">Central Bloc (1882)</text>' +
        '<rect x="346" y="78" width="170" height="22" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="431" y="93" text-anchor="middle" font-size="12" fill="#1e293b">Germany</text>' +
        '<rect x="346" y="106" width="170" height="22" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="431" y="121" text-anchor="middle" font-size="12" fill="#1e293b">Austria-Hungary</text>' +
        '<rect x="346" y="134" width="170" height="22" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="431" y="149" text-anchor="middle" font-size="12" fill="#1e293b">Italy (neutral in 1914)</text>' +
        '<line x1="242" y1="105" x2="318" y2="105" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/>' +
        '<polygon points="242,105 251,100 251,110" fill="#dc2626"/>' +
        '<polygon points="318,105 309,100 309,110" fill="#dc2626"/>' +
        '<text x="280" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Rivalry &amp;</text>' +
        '<text x="280" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Suspicion</text>' +
        '<rect x="165" y="186" width="230" height="46" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>' +
        '<text x="280" y="206" text-anchor="middle" font-size="12" font-weight="700" fill="#78350f">Balkans Flashzone (1914)</text>' +
        '<text x="280" y="223" text-anchor="middle" font-size="11" fill="#92400e">Regional dispute between empires</text>' +
        '<line x1="165" y1="205" x2="129" y2="168" stroke="#6d28d9" stroke-width="1.8"/>' +
        '<line x1="395" y1="205" x2="431" y2="168" stroke="#c2410c" stroke-width="1.8"/>' +
        '</svg>',
      options: [
        "Commitments and mutual fear meant a clash between Austria-Hungary and Serbia risked pulling in Russia, Germany, and France",
        "Every European state had signed a single legal treaty promising immediate war against the Ottoman Empire in the Balkans",
        "The alliances prevented Britain and France from building any navies, leaving Central Europe defenceless against Russia",
        "Italy controlled the railways of both blocs and ordered all armies to mobilise simultaneously every summer after 1907",
      ],
      answerIndex: 0,
      hints: [
        "Trace the arrows linking the Balkans flashzone to both rival blocs.",
        "Think about what happened when Russia backed Serbia while Germany backed Austria-Hungary.",
      ],
      explanation:
        "Because Russia saw itself as Serbia's protector and Germany pledged backing to Austria-Hungary, a local Austro-Serbian clash risked escalating into a chain reaction drawing in France and Britain as well. The alliances were rival defensive blocs, not a unified treaty against the Ottoman Empire, and Italy stayed neutral in 1914.",
    },

    // Q04 — short (warmup)
    {
      id: "exam-1-q04",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "militarism-territory",
      difficulty: "warmup",
      question:
        "Name the revolutionary British battleship launched in 1906 whose all-big-gun design made older warships obsolete and intensified the Anglo-German naval race.",
      answer: {
        type: "text",
        accept: ["Dreadnought", "HMS Dreadnought"],
        display: "HMS Dreadnought",
      },
      traps: [
        { spec: { type: "text", accept: ["Lusitania", "RMS Lusitania"] }, feedback: "RMS Lusitania was a British passenger liner sunk in 1915, not the 1906 battleship." },
        { spec: { type: "text", accept: ["Bismarck"] }, feedback: "The Bismarck was a German battleship from the Second World War, not 1906." },
      ],
      hints: [
        "Its name literally means 'fear nothing'.",
        "It gave its name to an entire class of modern pre-1914 battleships.",
      ],
      solution: [
        "Britain launched **HMS Dreadnought** in 1906, combining steam turbines with ten 12-inch heavy guns.",
        "Germany responded by accelerating its own dreadnought-building programme, heightening Anglo-German rivalry.",
      ],
      commonError: "Confusing HMS Dreadnought (1906 naval arms race) with wartime ships like the Lusitania (1915).",
    },

    // Q05 — short (core)
    {
      id: "exam-1-q05",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "militarism-territory",
      difficulty: "core",
      question:
        "Name Germany's pre-1914 military war plan designed to knock France out swiftly through neutral territory before turning east to fight Russia.",
      answer: {
        type: "text",
        accept: ["Schlieffen Plan", "The Schlieffen Plan", "Schlieffen"],
        display: "Schlieffen Plan",
      },
      traps: [
        { spec: { type: "text", accept: ["Plan XVII", "Plan 17"] }, feedback: "Plan XVII was France's offensive war plan to recapture Alsace-Lorraine, not Germany's plan." },
        { spec: { type: "text", accept: ["Weltpolitik"] }, feedback: "Weltpolitik was Germany's broader imperial foreign policy, whereas this question asks for the specific military invasion plan." },
      ],
      hints: [
        "It was named after the German Chief of the General Staff who drafted it in 1905.",
        "It aimed to solve Germany's fear of a two-front war by defeating France in six weeks.",
      ],
      solution: [
        "Germany feared being encircled by France in the west and Russia in the east.",
        "The **Schlieffen Plan** assumed Russia would take six weeks to mobilise, giving Germany time to swing through neutral Belgium and defeat France first.",
      ],
      commonError: "Confusing Germany's Schlieffen Plan with France's Plan XVII or Germany's diplomatic policy of Weltpolitik.",
    },

    // Q06 — mcq (core) — answerIndex: 3
    {
      id: "exam-1-q06",
      kind: "mcq",
      topicId: "causes-of-ww1",
      guideRef: "militarism-territory",
      difficulty: "core",
      question: "Why did historians and contemporary diplomats describe the Balkans as the **'powder keg of Europe'** before 1914?",
      options: [
        "The region produced nearly all of the gunpowder and naval steel used by British and German factories",
        "France and Britain were fighting direct colonial wars against each other for control of Greek ports",
        "Austria-Hungary had already granted full independence to every Slavic nationality in South-Eastern Europe",
        "Ottoman decline fuelled rival Slavic nationalism and clashes between Serbia, Austria-Hungary, and Russia",
      ],
      answerIndex: 3,
      hints: [
        "Think about the 1908 Bosnian Crisis and the 1912–13 Balkan Wars.",
        "Consider why Austria-Hungary felt threatened by a stronger, expanding Serbia backed by Russia.",
      ],
      explanation:
        "As the Ottoman Empire weakened, newly assertive Balkan states — especially Serbia — pushed Pan-Slavic nationalism, directly threatening the multi-ethnic Austro-Hungarian Empire. After the 1908 Bosnian Crisis and 1912–13 Balkan Wars, tensions between Serbia, Austria-Hungary, and Russia left the region ready to ignite. 'Powder keg' was a political metaphor, not a reference to gunpowder factories.",
    },

    // Q07 — short (core)
    {
      id: "exam-1-q07",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "sarajevo-july-crisis",
      difficulty: "core",
      question:
        "Give the name of the Austro-Hungarian heir whose assassination in Sarajevo on 28 June 1914 triggered the July Crisis.",
      answer: {
        type: "text",
        accept: ["Archduke Franz Ferdinand", "Franz Ferdinand"],
        display: "Archduke Franz Ferdinand",
      },
      traps: [
        { spec: { type: "text", accept: ["Gavrilo Princip", "Princip"] }, feedback: "Gavrilo Princip was the Bosnian Serb assassin, not the Austro-Hungarian heir who was killed." },
        { spec: { type: "text", accept: ["Kaiser Wilhelm II", "Wilhelm II", "Kaiser Wilhelm"] }, feedback: "Kaiser Wilhelm II was the Emperor of Germany, not the heir to Austria-Hungary." },
      ],
      hints: [
        "He held the Habsburg royal title 'Archduke' and was visiting Bosnia's capital with his wife Sophie.",
        "Be careful not to write the name of his assassin (Gavrilo Princip) by mistake.",
      ],
      solution: [
        "On 28 June 1914, **Archduke Franz Ferdinand** — heir to the Austro-Hungarian throne — was assassinated in Sarajevo by Gavrilo Princip.",
        "Austria-Hungary blamed Serbia for backing Bosnian Serb nationalists and issued an ultimatum in July.",
      ],
      commonError: "Writing the assassin's name (Gavrilo Princip) instead of the victim's name (Archduke Franz Ferdinand).",
    },

    // Q08 — short (core)
    {
      id: "exam-1-q08",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "sarajevo-july-crisis",
      difficulty: "core",
      question:
        "Which neutral European country did Germany invade in August 1914, prompting Britain to honour the 1839 Treaty of London and declare war?",
      answer: {
        type: "text",
        accept: ["Belgium"],
        display: "Belgium",
      },
      traps: [
        { spec: { type: "text", accept: ["France"] }, feedback: "France was Germany's main western enemy, not the neutral country protected by the 1839 Treaty of London." },
        { spec: { type: "text", accept: ["Serbia"] }, feedback: "Austria-Hungary invaded Serbia; Britain entered the war over German forces crossing a neutral western neighbour." },
        { spec: { type: "text", accept: ["Poland"] }, feedback: "Germany's invasion of Poland triggered the Second World War in 1939, not Britain's entry in August 1914." },
      ],
      hints: [
        "Germany's Schlieffen Plan sent troops through this small coastal nation to outflank French frontier fortresses.",
        "Germany's Chancellor dismissed the 1839 treaty guaranteeing its neutrality as a 'scrap of paper'.",
      ],
      solution: [
        "To execute the Schlieffen Plan, German armies crossed into neutral **Belgium** on 4 August 1914.",
        "Britain had guaranteed Belgian neutrality in the 1839 Treaty of London and declared war on Germany that same night.",
      ],
      commonError: "Confusing 1914 (German invasion of Belgium) with 1939 (German invasion of Poland).",
    },

    // Q09 — mcq (core) — answerIndex: 1
    {
      id: "exam-1-q09",
      kind: "mcq",
      topicId: "causes-of-ww1",
      guideRef: "weighing-ww1-causes",
      difficulty: "core",
      question:
        "How does historian Christopher Clark's **'sleepwalkers'** interpretation of 1914 differ from Fritz Fischer's famous thesis?",
      options: [
        "Clark argues that Britain secretly plotted the Sarajevo assassination, whereas Fischer blames France alone",
        "Clark argues that all Great Powers shared blame through miscalculation, whereas Fischer blames German expansionism",
        "Clark argues that military alliances played no part in July 1914, whereas Fischer ignores the alliance system",
        "Clark argues that WWI began accidentally in 1918, whereas Fischer places full responsibility on neutral Belgium",
      ],
      answerIndex: 1,
      hints: [
        "Think about what the metaphor 'sleepwalkers' suggests about intent versus collective stumbling.",
        "Fritz Fischer focused heavily on Germany's pre-1914 pursuit of Weltpolitik and its 'blank cheque'.",
      ],
      explanation:
        "In *The Sleepwalkers* (2012), Christopher Clark argues that leaders across Vienna, Berlin, St Petersburg, Paris, and London miscalculated and stumbled into war together, sharing responsibility. By contrast, Fritz Fischer (1961) placed primary guilt on Germany's deliberate expansionist ambitions.",
    },

    // Q10 — short (warmup)
    {
      id: "exam-1-q10",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "indochina-decolonisation",
      difficulty: "warmup",
      question:
        "Name the decisive May 1954 battle in northern Vietnam where Viet Minh forces defeated the French garrison, ending French colonial rule in Indochina.",
      answer: {
        type: "text",
        accept: ["Dien Bien Phu", "Battle of Dien Bien Phu"],
        display: "Dien Bien Phu",
      },
      traps: [
        { spec: { type: "text", accept: ["Saigon", "Fall of Saigon"] }, feedback: "The fall of Saigon ended the Vietnam War in 1975, not French colonial rule in 1954." },
        { spec: { type: "text", accept: ["Geneva", "Geneva Accords"] }, feedback: "Geneva was the Swiss city where the peace conference was held AFTER this decisive battlefield defeat." },
      ],
      hints: [
        "General Vo Nguyen Giap's troops hauled heavy artillery up surrounding hills to bombard the French valley fortress.",
        "Its three-word Vietnamese name became a global symbol of anti-colonial victory.",
      ],
      solution: [
        "In May 1954, Viet Minh forces besieged and captured the French fortified base at **Dien Bien Phu**.",
        "The humiliating defeat convinced France to negotiate withdrawal at the Geneva Conference later that summer.",
      ],
      commonError: "Confusing the battle (Dien Bien Phu) with the peace settlement that followed it (the Geneva Accords).",
    },

    // Q11 — short (core)
    {
      id: "exam-1-q11",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "indochina-decolonisation",
      difficulty: "core",
      question:
        "At which line of latitude (the ___th parallel) did the 1954 Geneva Accords temporarily divide North and South Vietnam? Give the number only.",
      answer: { type: "number", value: 17, display: "17" },
      traps: [
        { spec: { type: "number", value: 38 }, feedback: "The 38th parallel divided North and South Korea, not Vietnam." },
        { spec: { type: "number", value: 49 }, feedback: "The 49th parallel forms much of the US-Canada border, not the 1954 line in Vietnam." },
      ],
      hints: [
        "Do not confuse Vietnam's dividing line with Korea's 38th parallel.",
        "Vietnam sits much closer to the equator, between 8°N and 23°N.",
      ],
      solution: [
        "The 1954 Geneva Accords created a temporary demilitarised zone at the **17th** parallel.",
        "North Vietnam was governed by Ho Chi Minh's Viet Minh, while South Vietnam came under a non-communist regime backed by the USA.",
      ],
      commonError: "Writing 38 (the Korean dividing line) instead of 17 (the Vietnamese dividing line).",
    },

    // Q12 — mcq (core) with SVG — answerIndex: 3
    {
      id: "exam-1-q12",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "cold-war-ideology-domino",
      difficulty: "core",
      question:
        "Study the diagram illustrating President Eisenhower's **Domino Theory** in Southeast Asia. How did this Cold War theory drive US involvement in Vietnam?",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the Domino Theory showing falling tiles from South Vietnam through Laos, Cambodia, Thailand, Malaya, and Singapore">' +
        '<rect x="0" y="0" width="560" height="245" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Cold War Strategic Fear: The Domino Theory (1954)</text>' +
        '<rect x="26" y="42" width="110" height="34" rx="6" fill="#fee2e2" stroke="#b91c1c" stroke-width="1.5"/>' +
        '<text x="81" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">China &amp; USSR</text>' +
        '<line x1="81" y1="76" x2="88" y2="102" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4,3"/>' +
        '<polygon points="88,104 82,95 92,94" fill="#b91c1c"/>' +
        '<g transform="translate(88,162) rotate(26)">' +
        '<rect x="-26" y="-58" width="52" height="92" rx="6" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>' +
        '<text x="0" y="-14" text-anchor="middle" font-size="10" font-weight="700" fill="#7f1d1d">South</text>' +
        '<text x="0" y="1" text-anchor="middle" font-size="10" font-weight="700" fill="#7f1d1d">Vietnam</text>' +
        '</g>' +
        '<g transform="translate(174,166) rotate(18)">' +
        '<rect x="-26" y="-58" width="52" height="92" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>' +
        '<text x="0" y="-6" text-anchor="middle" font-size="10" font-weight="700" fill="#7c2d12">Laos</text>' +
        '</g>' +
        '<g transform="translate(260,168) rotate(11)">' +
        '<rect x="-26" y="-58" width="52" height="92" rx="6" fill="#fef08a" stroke="#a16207" stroke-width="2"/>' +
        '<text x="0" y="-6" text-anchor="middle" font-size="10" font-weight="700" fill="#713f12">Cambodia</text>' +
        '</g>' +
        '<g transform="translate(346,168) rotate(5)">' +
        '<rect x="-26" y="-58" width="52" height="92" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>' +
        '<text x="0" y="-6" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">Thailand</text>' +
        '</g>' +
        '<g transform="translate(432,168)">' +
        '<rect x="-26" y="-58" width="52" height="92" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
        '<text x="0" y="-13" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">Malaya &amp;</text>' +
        '<text x="0" y="2" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">Singapore</text>' +
        '</g>' +
        '<line x1="36" y1="210" x2="524" y2="210" stroke="#94a3b8" stroke-width="2"/>' +
        '<text x="280" y="230" text-anchor="middle" font-size="11" fill="#475569">Eisenhower&apos;s 1954 Southeast Asia Chain-Reaction Model</text>' +
        '</svg>',
      options: [
        "It persuaded Washington to withdraw all advisers from Asia and let France rebuild its colonial empire alone",
        "It convinced US leaders that Ho Chi Minh wanted to unite with Thailand against Soviet influence in Asia",
        "It encouraged the United States to sign a permanent military alliance with Communist China in 1954",
        "It convinced US leaders that defending South Vietnam was vital to prevent Communism spreading across Southeast Asia",
      ],
      answerIndex: 3,
      hints: [
        "Follow the chain of dominoes from South Vietnam toward Malaya and Singapore.",
        "Ask why a relatively small, distant country became a top priority for US Cold War presidents.",
      ],
      explanation:
        "Eisenhower's Domino Theory argued that if South Vietnam fell to Communism, neighbouring Laos, Cambodia, Thailand, Malaya, and Singapore would topple next. This strategic fear convinced successive US presidents to pour money, military advisers, and eventually combat troops into Vietnam. Rather than leaving France to fight alone, the US had already funded most of France's war before stepping in directly.",
    },

    // Q13 — short (core)
    {
      id: "exam-1-q13",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "cold-war-ideology-domino",
      difficulty: "core",
      question:
        "Give the one-word name of the US Cold War foreign policy, linked to the 1947 Truman Doctrine, aimed at stopping Communism from spreading to new countries.",
      answer: {
        type: "text",
        accept: ["Containment"],
        display: "Containment",
      },
      traps: [
        { spec: { type: "text", accept: ["Appeasement"] }, feedback: "Appeasement was Britain and France's 1930s policy of making concessions to Hitler, not US Cold War policy." },
        { spec: { type: "text", accept: ["Isolationism"] }, feedback: "Isolationism meant staying out of overseas conflicts; after 1947 the USA intervened globally to block Communist expansion." },
        { spec: { type: "text", accept: ["Domino Theory"] }, feedback: "The Domino Theory was the fear justifying intervention; this question asks for the one-word policy of 'holding Communism in'." },
      ],
      hints: [
        "Think of the verb meaning 'to keep something inside a boundary so it cannot spread'.",
        "It guided US intervention in Greece, Korea, and Vietnam.",
      ],
      solution: [
        "Under the 1947 Truman Doctrine, the United States adopted **Containment**.",
        "Rather than directly invading the USSR, the USA aimed to block Communism from expanding into further countries.",
      ],
      commonError: "Writing 'Domino Theory' (the strategic fear) or 'Appeasement' (1930s Europe) instead of 'Containment'.",
    },

    // Q14 — mcq (core) — answerIndex: 0
    {
      id: "exam-1-q14",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "diem-viet-cong-escalation",
      difficulty: "core",
      question:
        "Why did the nationwide Vietnamese reunification elections promised by the 1954 Geneva Accords for 1956 never take place?",
      options: [
        "South Vietnam's US-backed president cancelled them because intelligence predicted Ho Chi Minh would win",
        "Ho Chi Minh refused to allow any voting in the North because he wanted French colonial officials to govern until 1965",
        "The United Nations outlawed all Asian elections after the Korean War to prevent border disputes along the cease-fire line",
        "A devastating typhoon destroyed Saigon's parliament in 1955 and both Vietnamese governments agreed to stay divided forever",
      ],
      answerIndex: 0,
      hints: [
        "Ask who stood to win a free nationwide election in 1956 after defeating French colonial rule.",
        "Even President Eisenhower privately wrote that roughly 80% of Vietnamese voters would have chosen Ho Chi Minh.",
      ],
      explanation:
        "Ngo Dinh Diem — supported by the United States — blocked the 1956 elections because US intelligence and Eisenhower himself estimated that Ho Chi Minh, hailed as the hero who defeated France, would have won overwhelmingly. Cancelling the vote shattered hopes of peaceful reunification and fuelled armed resistance in the South.",
    },

    // Q15 — short (core)
    {
      id: "exam-1-q15",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "diem-viet-cong-escalation",
      difficulty: "core",
      question:
        "Name the US-backed ruler of South Vietnam (1955–1963) whose corrupt, authoritarian regime and persecution of Buddhists alienated much of the population.",
      answer: {
        type: "text",
        accept: ["Ngo Dinh Diem", "Diem", "President Diem"],
        display: "Ngo Dinh Diem",
      },
      traps: [
        { spec: { type: "text", accept: ["Ho Chi Minh"] }, feedback: "Ho Chi Minh led Communist North Vietnam, not US-backed South Vietnam." },
        { spec: { type: "text", accept: ["Lyndon Johnson", "Lyndon B. Johnson", "LBJ"] }, feedback: "Lyndon B. Johnson was the President of the United States, not the leader of South Vietnam." },
      ],
      hints: [
        "He was an anti-Communist Catholic politician who blocked the 1956 elections.",
        "He was overthrown and assassinated in a South Vietnamese military coup in November 1963.",
      ],
      solution: [
        "**Ngo Dinh Diem** governed South Vietnam from 1955 until his overthrow in November 1963.",
        "His favouritism toward relatives, cancellation of land reform, and crackdown on Buddhist protesters weakened South Vietnam from within.",
      ],
      commonError: "Confusing South Vietnam's leader Ngo Dinh Diem with North Vietnam's leader Ho Chi Minh.",
    },

    // Q16 — mcq (core) — answerIndex: 2
    {
      id: "exam-1-q16",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "diem-viet-cong-escalation",
      difficulty: "core",
      question:
        "Why did the South Vietnamese and US **Strategic Hamlets** programme (1962) largely backfire and increase support for the Viet Cong?",
      options: [
        "It paid peasants generous wages in gold, encouraging them to migrate permanently into North Vietnamese factories",
        "It dismantled all South Vietnamese army checkpoints, allowing Northern tanks to roll freely into Saigon",
        "It forced peasants off ancestral lands into guarded villages, breeding deep resentment that Viet Cong recruiters exploited",
        "It handed control of rural schools directly to French officials, sparking a boycott by US military advisers",
      ],
      answerIndex: 2,
      hints: [
        "Think about how rural Vietnamese families felt about leaving their ancestral graves and rice fields behind.",
        "The programme was meant to isolate peasants from guerrillas, but consider its emotional and economic impact.",
      ],
      explanation:
        "The Strategic Hamlets programme forcibly relocated millions of rural villagers away from their ancestral lands and burial grounds into fortified, poorly supplied compounds. Rather than winning 'hearts and minds', the policy bred bitter anger toward Diem's government and drove many peasants to sympathise with or join the Viet Cong.",
    },

    // Q17 — short (warmup)
    {
      id: "exam-1-q17",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "gulf-of-tonkin-comparison",
      difficulty: "warmup",
      question:
        "In which year did President Lyndon B. Johnson begin Operation Rolling Thunder and send the first US ground combat Marines ashore at Da Nang, turning Vietnam into a full American war?",
      answer: { type: "number", value: 1965 },
      traps: [
        { spec: { type: "number", value: 1964 }, feedback: "1964 was the Gulf of Tonkin Incident and Resolution; Operation Rolling Thunder and US ground combat Marines arrived the following spring." },
        { spec: { type: "number", value: 1954 }, feedback: "1954 was the Geneva Conference ending French rule, eleven years before US ground combat troops landed." },
        { spec: { type: "number", value: 1968 }, feedback: "1968 was the Tet Offensive, three years after the first US combat troops landed at Da Nang." },
      ],
      hints: [
        "This major ground escalation occurred in March, seven months after the August 1964 Gulf of Tonkin Resolution.",
        "By the end of this year, nearly 200,000 US troops were stationed in South Vietnam.",
      ],
      solution: [
        "Using powers granted by the August 1964 Gulf of Tonkin Resolution, President Johnson launched Operation Rolling Thunder and landed US combat Marines at Da Nang in March **1965**.",
        "This marked the decisive shift from US military 'advisers' to full-scale American combat intervention.",
      ],
      commonError: "Confusing 1964 (Gulf of Tonkin Resolution) with 1965 (Operation Rolling Thunder and arrival of US ground combat troops).",
    },

    // Q18 — mcq (core) — answerIndex: 1
    {
      id: "exam-1-q18",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "gulf-of-tonkin-comparison",
      difficulty: "core",
      question:
        "Which statement most accurately compares the **Sarajevo assassination (1914)** with the **Gulf of Tonkin Incident (1964)** as historical flashpoints?",
      options: [
        "Both incidents caused full-scale superpower wars to break out within forty-eight hours across five continents",
        "Both served as short-term triggers that activated pre-existing strategic commitments and escalated wider conflicts",
        "Sarajevo was a disputed naval clash at sea, whereas Gulf of Tonkin was the assassination of a royal heir in Saigon",
        "Neither incident influenced government decision-making because both wars had already officially begun years earlier",
      ],
      answerIndex: 1,
      hints: [
        "Compare what both events had in common structurally, even though one was an assassination and the other a naval clash.",
        "Did either flashpoint create tensions from scratch, or did it ignite years of underlying rivalry?",
      ],
      explanation:
        "Both Sarajevo (1914) and the Gulf of Tonkin (1964) acted as short-term catalysts that turned long-standing tensions into major wars: Sarajevo triggered Europe's alliance and mobilisation chain, while Gulf of Tonkin gave Johnson congressional authority to turn Cold War containment into full US military escalation. Neither caused war within 48 hours across five continents.",
    },

    // Q19 — short (core)
    {
      id: "exam-1-q19",
      kind: "short",
      topicId: "modern-protest-movements",
      guideRef: "source-provenance-nop",
      difficulty: "core",
      question:
        "In Year 9 History source evaluation, what three words does the provenance acronym **NOP** stand for?",
      answer: {
        type: "text",
        accept: [
          "Nature, Origin, Purpose",
          "Nature Origin Purpose",
          "Nature, Origin and Purpose",
          "Nature, Origin, and Purpose",
          "Nature Origin and Purpose",
        ],
        display: "Nature, Origin, Purpose",
      },
      traps: [
        { spec: { type: "text", accept: ["Name, Order, Place", "Name Order Place"] }, feedback: "Check the three historian questions: What type of source is it? Who made it and when? Why was it produced?" },
        { spec: { type: "text", accept: ["Notes, Opinion, Proof", "Notes Opinion Proof"] }, feedback: "NOP examines provenance — the source's type, creator/date, and intended aim." },
      ],
      hints: [
        "N asks what type of source it is (diary, poster, speech, treaty).",
        "O asks who created it, where, and when; P asks why it was created.",
      ],
      solution: [
        "**N** = **Nature** (the type of source, e.g. propaganda poster, private letter, government report).",
        "**O** = **Origin** (author, date, and place of creation).",
        "**P** = **Purpose** (why the author created it and who the target audience was).",
      ],
      commonError: "Listing 'bias' as one of the letters instead of analysing Nature, Origin, and Purpose to explain a source's perspective.",
    },

    // Q20 — mcq (core) — answerIndex: 2
    {
      id: "exam-1-q20",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "source-provenance-nop",
      difficulty: "core",
      question:
        "A historian examines a 1914 German government poster claiming Russia forced Germany into a purely defensive war. Why is this heavily biased source **still useful** to a historian?",
      options: [
        "It proves beyond doubt that Russia alone bore responsibility for starting the First World War in August 1914",
        "Government posters always contain verified military statistics that are more accurate than diplomatic archives",
        "It reveals how German authorities used propaganda to justify the war and rally public support inside Germany",
        "Biased sources are only useful if a historian deletes the author's claims and looks exclusively at the date",
      ],
      answerIndex: 2,
      hints: [
        "Never dismiss a source simply as 'useless because it is biased' — always ask: 'Useful FOR what?'",
        "What does propaganda tell us about the government that printed it?",
      ],
      explanation:
        "A biased propaganda poster is unreliable as an objective account of who caused WWI, yet it is **highly useful** as evidence of official German messaging — showing how the state framed the conflict as self-defence to unite its own citizens. Top-band historians always ask 'useful for what?' rather than discarding biased sources.",
    },

    // Q21 — mcq (challenge) — answerIndex: 0
    {
      id: "exam-1-q21",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "indochina-decolonisation",
      difficulty: "challenge",
      question:
        "Why do many historians argue that US policymakers fundamentally misread Ho Chi Minh's Viet Minh movement in the late 1940s and 1950s?",
      options: [
        "They viewed it purely as a puppet of Moscow and Beijing, underestimating its deep anti-colonial Vietnamese nationalism",
        "They believed Ho Chi Minh was a loyal French ally who wanted to preserve European colonial rule across Indochina",
        "They assumed the Viet Minh had no rural peasant support and operated only inside wealthy Saigon banking districts",
        "They mistakenly thought Vietnam shared a land border with the Soviet Union and controlled Japan's postwar navy",
      ],
      answerIndex: 0,
      hints: [
        "Remember the two overlapping forces driving the Viet Minh: Communism AND anti-colonial independence.",
        "Think about how Cold War glasses led Washington to treat a local independence struggle purely as a Soviet plot.",
      ],
      explanation:
        "Looking through a Cold War lens, US leaders treated Ho Chi Minh primarily as an agent of global Soviet-Chinese Communism. In reality, while Ho Chi Minh was a committed Communist, his movement drew immense strength from centuries of Vietnamese nationalism and anti-colonial resistance against French rule — a local reality US policy repeatedly underestimated.",
    },

    // Q22 — written (4 marks, challenge) with SVG NOP Card
    {
      id: "exam-1-q22",
      kind: "written",
      topicId: "modern-protest-movements",
      guideRef: "source-provenance-nop",
      difficulty: "challenge",
      marks: 4,
      question:
        "Study Source A on the provenance card. Using its content, its NOP provenance, and your own contextual knowledge, evaluate how useful Source A is to a historian investigating why the USA intervened in Vietnam.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Archival provenance card for Source A, a 1964 US State Department public briefing pamphlet about Vietnam">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<rect x="18" y="16" width="524" height="218" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
        '<rect x="18" y="16" width="524" height="36" rx="10" fill="#1e293b"/>' +
        '<text x="36" y="39" font-size="13" font-weight="700" fill="#ffffff">SOURCE A — ARCHIVAL PROVENANCE CARD</text>' +
        '<rect x="34" y="64" width="158" height="44" rx="6" fill="#ede9fe" stroke="#c4b5fd"/>' +
        '<text x="44" y="81" font-size="10" font-weight="700" fill="#5b21b6">NATURE</text>' +
        '<text x="44" y="97" font-size="11" fill="#1e293b">Public briefing pamphlet</text>' +
        '<rect x="201" y="64" width="166" height="44" rx="6" fill="#e0f2fe" stroke="#7dd3fc"/>' +
        '<text x="211" y="81" font-size="10" font-weight="700" fill="#0369a1">ORIGIN</text>' +
        '<text x="211" y="97" font-size="11" fill="#1e293b">US State Dept, Sept 1964</text>' +
        '<rect x="376" y="64" width="150" height="44" rx="6" fill="#fef3c7" stroke="#fcd34d"/>' +
        '<text x="386" y="81" font-size="10" font-weight="700" fill="#92400e">AUDIENCE</text>' +
        '<text x="386" y="97" font-size="11" fill="#1e293b">US voters &amp; Congress</text>' +
        '<rect x="34" y="122" width="492" height="96" rx="6" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="46" y="143" font-size="11.5" font-style="italic" fill="#1e293b">&quot;The struggle in South Viet-Nam is not a local quarrel. It is a calculated</text>' +
        '<text x="46" y="161" font-size="11.5" font-style="italic" fill="#1e293b">assault directed from Hanoi and backed by Communist powers. Should free</text>' +
        '<text x="46" y="179" font-size="11.5" font-style="italic" fill="#1e293b">South Viet-Nam fall, every free nation in Southeast Asia would stand in</text>' +
        '<text x="46" y="197" font-size="11.5" font-style="italic" fill="#1e293b">grave peril. America stands firm to defend liberty and halt aggression.&quot;</text>' +
        '</svg>',
      hints: [
        "Start by identifying what the text tells us directly about official US Cold War motives.",
        "Analyse NOP: why would the US State Department publish this pamphlet in September 1964, right after the Gulf of Tonkin Resolution?",
        "Use own knowledge to spot what the pamphlet leaves out (e.g. Saigon's unpopularity or Vietnamese nationalism), then give a balanced verdict.",
      ],
      modelAnswer:
        "Source A is very useful for showing official American ideology: its claim that South Vietnam's fall would endanger every nation in Southeast Asia directly reflects Containment and the Domino Theory. Looking at its origin and purpose, it was an official government pamphlet issued in September 1964 — immediately after the Gulf of Tonkin Resolution and before a presidential election — designed to persuade American citizens and politicians to support military escalation. However, its propagandistic purpose limits its reliability as a complete account: from contextual knowledge, it ignores Vietnamese anti-colonial nationalism, the cancelled 1956 elections, and the deep unpopularity of South Vietnam's regime. Overall, the document is highly valuable as evidence of Washington's official justification, though historians must cross-reference it with Vietnamese and independent records to grasp the full causes.",
      markScheme: [
        {
          point: "Identifies useful evidence from content linking to Cold War ideology (Containment / Domino Theory / anti-Communism).",
          keywords: ["domino", "containment", "ideology", "communist", "southeast asia"],
        },
        {
          point: "Analyses NOP provenance (official US government pamphlet published Sept 1964 to persuade public/Congress after Gulf of Tonkin).",
          keywords: ["persuade", "propaganda", "tonkin", "government", "pamphlet", "public"],
        },
        {
          point: "Uses contextual knowledge to note limitations or omissions (e.g. Vietnamese nationalism, Diem/Saigon unpopularity, cancelled 1956 elections).",
          keywords: ["nationalism", "diem", "unpopular", "1956", "anti-colonial", "ignores", "omits"],
        },
        {
          point: "Reaches a balanced overall judgment ('useful for official US motives, limited for full picture / needs cross-referencing').",
          keywords: ["overall", "valuable", "cross-reference", "justification", "motives", "complete"],
        },
      ],
      commonError: "Dismissing the pamphlet as 'completely useless because it is biased' instead of explaining what it IS useful for (official US motives and messaging).",
    },

    // Q23 — written (3 marks, challenge)
    {
      id: "exam-1-q23",
      kind: "written",
      topicId: "causes-of-ww1",
      guideRef: "sarajevo-july-crisis",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain how Germany's 'blank cheque' and rigid military timetables escalated the July Crisis into a European-wide war by early August 1914.",
      hints: [
        "Step 1: How did German support change Austria-Hungary's attitude toward Serbia?",
        "Step 2: How did Russia respond to protect its Slavic ally?",
        "Step 3: Why did Germany's Schlieffen Plan timetables leave almost no room for diplomacy once mobilisation began?",
      ],
      modelAnswer:
        "First, Berlin's unconditional pledge emboldened Austria-Hungary to send Serbia a harsh ultimatum designed to be rejected, leading to an Austro-Hungarian declaration of war on 28 July. Second, Russia began mobilising its huge army to defend Serbia, which alarmed German generals who feared fighting on two fronts. Third, because Germany's Schlieffen Plan relied on strict railway schedules to crush France rapidly via neutral Belgium before Russia was ready, mobilisation automatically triggered German invasions westward, drawing France and Britain into general conflict.",
      markScheme: [
        {
          point: "Unconditional German backing emboldened Austria-Hungary to issue a harsh ultimatum and attack Serbia.",
          keywords: ["ultimatum", "serbia", "emboldened", "austria-hungary", "unconditional"],
        },
        {
          point: "Russian mobilisation to defend Serbia triggered German fears of a two-front conflict.",
          keywords: ["russia", "mobilis", "two-front", "two front"],
        },
        {
          point: "Schlieffen Plan railway schedules led Germany to invade France via neutral Belgium, bringing in Britain.",
          keywords: ["schlieffen", "belgium", "britain", "railway", "france"],
        },
      ],
      commonError: "Writing only about the Sarajevo assassination without tracing the diplomatic and mobilisation chain reaction across July–August 1914.",
    },

    // Q24 — written (3 marks, challenge)
    {
      id: "exam-1-q24",
      kind: "written",
      topicId: "causes-of-ww1",
      guideRef: "weighing-ww1-causes",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain the difference between a **long-term underlying condition** and a **short-term trigger**, and show how they interacted to produce war in 1914.",
      hints: [
        "Give a concrete WWI example of a long-term condition (from MAIN or territorial rivalries).",
        "Give the specific short-term trigger from June 1914.",
        "Explain why the trigger alone would not have caused a world war without the deeper tensions already built up.",
      ],
      modelAnswer:
        "A long-term condition develops over decades and builds deep instability — for example, Europe's rival alliance blocs, the Anglo-German naval arms race, and intense Balkan nationalism. A short-term trigger is a sudden immediate spark, such as the assassination of Archduke Franz Ferdinand in Sarajevo on 28 June 1914. The two interacted like dry firewood and a match: earlier crises had been contained, but by 1914 years of mistrust, imperial rivalry, and rigid war plans meant one assassination could ignite the entire continent.",
      markScheme: [
        {
          point: "Defines long-term condition with concrete WWI example(s) such as alliances, naval arms race, imperialism, or nationalism.",
          keywords: ["decades", "alliance", "naval", "arms race", "nationalism", "imperial"],
        },
        {
          point: "Defines short-term trigger as an immediate spark, naming Sarajevo / Archduke Franz Ferdinand.",
          keywords: ["spark", "sarajevo", "assassination", "franz ferdinand", "catalyst"],
        },
        {
          point: "Explains the causal interaction — the spark only caused continental war because Europe was already primed by deeper rivalries.",
          keywords: ["firewood", "ignite", "mistrust", "primed", "contained", "match"],
        },
      ],
      commonError: "Listing causes from MAIN without explicitly explaining how long-term tensions and the short-term spark interacted.",
    },

    // Q25 — written (4 marks, challenge)
    {
      id: "exam-1-q25",
      kind: "written",
      topicId: "causes-of-vietnam-war",
      guideRef: "gulf-of-tonkin-comparison",
      difficulty: "challenge",
      marks: 4,
      question:
        "Compare the roles of **ideology** and **territory** in causing the First World War (1914) and the Vietnam War in the 1950s and 1960s.",
      hints: [
        "For WWI, identify territorial disputes (Alsace-Lorraine, Balkans, colonies) alongside nationalist/militarist ideology.",
        "For Vietnam, identify territorial decolonisation/division (Indochina, 17th parallel) alongside Cold War anti-Communist ideology.",
        "Finish with a direct comparative judgment: which factor looked more decisive in each war?",
      ],
      modelAnswer:
        "In 1914, territorial rivalry was central: France resented losing Alsace-Lorraine, Austria-Hungary feared losing Balkan provinces to Serbia, and European powers competed for overseas colonies. Ideologically, WWI was fuelled by aggressive nationalism, militarism, and German Weltpolitik rather than competing economic systems. In Vietnam, territory mattered through French colonial control and the 1954 division at the 17th parallel, which nationalists under Ho Chi Minh fought to reunify. However, global Cold War ideology — US Containment and the Domino Theory opposing Communism — played a far greater role in transforming a local decolonisation struggle into a major American war.",
      markScheme: [
        {
          point: "Explains WWI territorial rivalries (Alsace-Lorraine, Balkans, or colonial competition).",
          keywords: ["alsace", "balkan", "colon", "serbia", "provinces"],
        },
        {
          point: "Explains WWI ideological drivers (nationalism, militarism, or Weltpolitik).",
          keywords: ["nationalism", "militarism", "weltpolitik"],
        },
        {
          point: "Explains Vietnam's territorial/decolonisation dimension (French rule, reunification, or 17th parallel).",
          keywords: ["french", "17th", "reunif", "decolonis", "ho chi minh"],
        },
        {
          point: "Explains Vietnam's Cold War ideological driver (Containment / Domino Theory / Communism vs Capitalism) with direct comparison to WWI.",
          keywords: ["cold war", "containment", "domino", "communis", "capitalis"],
        },
      ],
      commonError: "Describing WWI and Vietnam in two separate paragraphs without making a clear comparative link between ideology and territory.",
    },
  ],
};
