import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-4",
  title: "Year 9 History Full End-of-Year Mock Paper (All 8 Units & Singapore)",
  calculator: false,
  minutes: 45,
  questions: [
    // Q01 — short (warmup) — causes-of-ww1
    {
      id: "exam-4-q01",
      kind: "short",
      topicId: "causes-of-ww1",
      guideRef: "main-alliances-ideology",
      difficulty: "warmup",
      question:
        "Give the one-word German term for Kaiser Wilhelm II's pre-1914 foreign policy aimed at securing colonies, a global navy, and Germany's 'place in the sun'.",
      answer: {
        type: "text",
        accept: ["Weltpolitik"],
        display: "Weltpolitik",
      },
      traps: [
        { spec: { type: "text", accept: ["Lebensraum"] }, feedback: "Lebensraum ('living space') was Hitler's Nazi expansionist ideology in the 1930s–40s, not Kaiser Wilhelm II's pre-1914 imperial policy." },
        { spec: { type: "text", accept: ["Schlieffen Plan", "Schlieffen"] }, feedback: "The Schlieffen Plan was Germany's military war plan, whereas this question asks for the broader foreign policy meaning 'world policy'." },
      ],
      hints: [
        "Translated literally from German, it means 'world policy'.",
        "It alarmed Britain and France by challenging their overseas empires and naval supremacy.",
      ],
      solution: [
        "From the late 1890s, Kaiser Wilhelm II pursued **Weltpolitik** ('world policy').",
        "Its drive for overseas colonies and a large battle fleet provoked crises in Morocco (1905, 1911) and fuelled the Anglo-German naval race.",
      ],
      commonError: "Confusing Weltpolitik (Kaiser Wilhelm II's pre-1914 imperial policy) with Lebensraum (Nazi Germany's WWII expansionism).",
    },

    // Q02 — mcq (core) — causes-of-ww1 — answerIndex: 0
    {
      id: "exam-4-q02",
      kind: "mcq",
      topicId: "causes-of-ww1",
      guideRef: "militarism-territory",
      difficulty: "core",
      question:
        "Which disputed border region, annexed by Germany after defeating France in 1871, fuelled lasting French resentment and military rivalry before 1914?",
      options: [
        "Alsace-Lorraine",
        "Bosnia-Herzegovina",
        "French Indochina",
        "The Sudetenland",
      ],
      answerIndex: 0,
      hints: [
        "This rich industrial territory lay directly along the Franco-German frontier.",
        "French military planning (Plan XVII) centred on recovering these two provinces.",
      ],
      explanation:
        "Germany annexed **Alsace-Lorraine** at the end of the Franco-Prussian War (1871), leaving a deep desire for revenge (*revanche*) in France and cementing hostility between the two rivals before 1914. Bosnia-Herzegovina was a Balkan flashpoint annexed by Austria-Hungary in 1908, and the Sudetenland belonged to 1938 pre-WWII diplomacy.",
    },

    // Q03 — short (warmup) — causes-of-vietnam-war
    {
      id: "exam-4-q03",
      kind: "short",
      topicId: "causes-of-vietnam-war",
      guideRef: "indochina-decolonisation",
      difficulty: "warmup",
      question:
        "Name the Vietnamese nationalist and communist leader who founded the Viet Minh, declared Vietnam's independence in 1945, and led North Vietnam.",
      answer: {
        type: "text",
        accept: ["Ho Chi Minh"],
        display: "Ho Chi Minh",
      },
      traps: [
        { spec: { type: "text", accept: ["Ngo Dinh Diem", "Diem"] }, feedback: "Ngo Dinh Diem was the US-backed ruler of South Vietnam, not the founder of the Viet Minh." },
        { spec: { type: "text", accept: ["Mao Zedong", "Mao"] }, feedback: "Mao Zedong led Communist China, not Vietnam's Viet Minh movement." },
      ],
      hints: [
        "His name means 'He Who Enlightens', and Saigon was later renamed after him in 1976.",
        "He quoted the US Declaration of Independence when proclaiming Vietnamese independence in Hanoi in September 1945.",
      ],
      solution: [
        "**Ho Chi Minh** founded the Viet Minh in 1941 to resist Japanese occupation and French colonial rule.",
        "After the 1954 Geneva Accords, he became President of North Vietnam and remained the central symbol of Vietnamese reunification.",
      ],
      commonError: "Confusing Ho Chi Minh (North Vietnam) with Ngo Dinh Diem (South Vietnam).",
    },

    // Q04 — mcq (core) — causes-of-vietnam-war — answerIndex: 2
    {
      id: "exam-4-q04",
      kind: "mcq",
      topicId: "causes-of-vietnam-war",
      guideRef: "cold-war-ideology-domino",
      difficulty: "core",
      question:
        "Why did President Eisenhower's administration argue during the 1950s that events in Vietnam directly threatened Malaya and Singapore?",
      options: [
        "Vietnam shared an international land bridge running straight into Singapore's central harbour",
        "Malaya and Singapore had signed a secret pact inviting North Vietnam to run their tin mines",
        "Under the Domino Theory, US leaders feared a Communist Vietnam would trigger takeovers across Southeast Asia",
        "Eisenhower wanted Britain to hand Malaya and Singapore directly to France after Dien Bien Phu",
      ],
      answerIndex: 2,
      hints: [
        "Think about the famous Cold War metaphor describing neighbouring countries toppling one after another.",
        "Connect Vietnam's regional geography with Britain's simultaneous anti-Communist emergency in Malaya.",
      ],
      explanation:
        "Eisenhower's **Domino Theory** held that if South Vietnam fell to Communism, Laos, Cambodia, Thailand, Malaya, and Singapore would topple in sequence like falling dominoes. This Cold War ideology — not any physical land bridge or secret trade pact — drew the USA ever deeper into Southeast Asia.",
    },

    // Q05 — short (core) — the-holocaust
    {
      id: "exam-4-q05",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "ghettos-final-solution",
      difficulty: "core",
      question:
        "Name the largest Nazi concentration and extermination camp complex in occupied Poland, whose liberation on 27 January 1945 is now marked annually as International Holocaust Remembrance Day.",
      answer: {
        type: "text",
        accept: ["Auschwitz-Birkenau", "Auschwitz", "Auschwitz Birkenau"],
        display: "Auschwitz-Birkenau",
      },
      traps: [
        { spec: { type: "text", accept: ["Treblinka"] }, feedback: "Treblinka was a major Nazi extermination camp where around 800,000–900,000 Jews were murdered, but it was dismantled in 1943, not liberated on 27 January 1945." },
        { spec: { type: "text", accept: ["Dachau"] }, feedback: "Dachau was the first Nazi concentration camp inside Germany (opened 1933), not the largest extermination complex in occupied Poland." },
      ],
      hints: [
        "Over 1.1 million people — the vast majority European Jews, alongside Poles, Roma, and Soviet POWs — were murdered at this complex.",
        "Its twin sites combined forced labour with industrial gas chambers and crematoria.",
      ],
      solution: [
        "**Auschwitz-Birkenau** was the largest Nazi camp complex, where more than 1.1 million people were systematically murdered.",
        "Soviet troops liberated the surviving prisoners on 27 January 1945, the date the United Nations designated as International Holocaust Remembrance Day.",
      ],
      commonError: "Confusing Auschwitz-Birkenau (occupied Poland, liberated January 1945) with Dachau (southern Germany) or Treblinka (closed 1943).",
    },

    // Q06 — mcq (core) — the-holocaust — answerIndex: 1
    {
      id: "exam-4-q06",
      kind: "mcq",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "core",
      question:
        "Why were the **Nuremberg Trials (1945–1946)** a landmark turning point in international law and human rights?",
      options: [
        "They ruled that soldiers and government ministers could never be tried for actions ordered by a head of state",
        "They established that individual leaders are personally accountable for war crimes and crimes against humanity",
        "They pardoned every senior Nazi official in exchange for promises to rebuild European railways after the war",
        "They created Europe's first military alliance system to replace the Triple Entente and Triple Alliance",
      ],
      answerIndex: 1,
      hints: [
        "Remember the famous defence rejected by the Nuremberg judges: 'I was only following orders.'",
        "Think about the legal precedent set for later international war-crimes tribunals.",
      ],
      explanation:
        "At Nuremberg, Allied tribunals rejected the defence of 'superior orders' and established the principle of individual criminal accountability under international law for war crimes, crimes against peace, and crimes against humanity — paving the way for the 1948 UN Genocide Convention and modern international criminal courts.",
    },

    // Q07 — short (warmup) — indian-independence
    {
      id: "exam-4-q07",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "independence-partition-1947",
      difficulty: "warmup",
      question:
        "In which year did British India achieve independence and undergo Partition into the two separate nations of India and Pakistan?",
      answer: { type: "number", value: 1947 },
      traps: [
        { spec: { type: "number", value: 1942 }, feedback: "1942 was the Quit India Movement during WWII; actual independence came five years later." },
        { spec: { type: "number", value: 1945 }, feedback: "1945 saw the end of WWII and Attlee's election in Britain; independence took place two years later." },
        { spec: { type: "number", value: 1950 }, feedback: "1950 was when India adopted its Republic Constitution, three years after gaining independence from Britain." },
      ],
      hints: [
        "Lord Mountbatten moved the handover date forward to mid-August, two years after the end of the Second World War.",
        "Pakistan marked independence on 14 August and India on 15 August of this year.",
      ],
      solution: [
        "British rule in India ended in August **1947** under the Indian Independence Act.",
        "Partition created the separate states of India and Pakistan at the exact same moment.",
      ],
      commonError: "Confusing 1947 (Independence and Partition) with 1945 (WWII end) or 1950 (India's Republic Day).",
    },

    // Q08 — mcq (core) — indian-independence — answerIndex: 3
    {
      id: "exam-4-q08",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "core",
      question:
        "Why was Mahatma Gandhi's campaign urging Indians to boycott imported British cloth and spin **khadi** so effective as a form of protest?",
      options: [
        "It forced the British army to abandon all Indian railways because trains depended entirely on cotton fuel",
        "It prevented Indian villagers from speaking English inside colonial courthouses across Bengal and Punjab",
        "It allowed only wealthy Indian factory owners to participate, keeping rural peasants out of politics",
        "It hurt British textile exports economically while letting ordinary Indians practise daily non-violent defiance",
      ],
      answerIndex: 3,
      hints: [
        "Consider BOTH the economic effect on Lancashire mills in Britain AND the unifying effect inside India.",
        "Did spinning cotton require wealth or weapons, or could millions of ordinary villagers join in?",
      ],
      explanation:
        "Boycotting British factory textiles struck directly at a pillar of Britain's imperial profits in Lancashire while turning an everyday act — spinning and wearing simple hand-spun *khadi* — into accessible, peaceful mass participation across class and gender lines.",
    },

    // Q09 — short (core) — us-civil-rights
    {
      id: "exam-4-q09",
      kind: "short",
      topicId: "us-civil-rights",
      guideRef: "mlk-legislation-1964-1965",
      difficulty: "core",
      question:
        "In which year did the US Congress pass the landmark **Civil Rights Act**, outlawing racial segregation in public accommodations and discrimination in employment?",
      answer: { type: "number", value: 1964 },
      traps: [
        { spec: { type: "number", value: 1954 }, feedback: "1954 was the *Brown v. Board of Education* Supreme Court ruling, ten years before the Civil Rights Act." },
        { spec: { type: "number", value: 1963 }, feedback: "1963 was the Birmingham Campaign and March on Washington; the Civil Rights Act was signed into law the following summer." },
        { spec: { type: "number", value: 1965 }, feedback: "1965 was the Voting Rights Act following Selma, one year after the Civil Rights Act." },
      ],
      hints: [
        "It was signed by President Lyndon B. Johnson in July, one year after the 1963 March on Washington.",
        "It came one year before the 1965 Voting Rights Act.",
      ],
      solution: [
        "President Lyndon B. Johnson signed the **Civil Rights Act** on 2 July **1964**.",
        "It formally ended Jim Crow segregation in public facilities such as hotels, restaurants, and theatres across the United States.",
      ],
      commonError: "Confusing 1964 (Civil Rights Act) with 1963 (March on Washington) or 1965 (Voting Rights Act).",
    },

    // Q10 — mcq (core) — us-civil-rights — answerIndex: 1
    {
      id: "exam-4-q10",
      kind: "mcq",
      topicId: "us-civil-rights",
      guideRef: "montgomery-direct-action",
      difficulty: "core",
      question:
        "What non-violent direct-action tactic did four Black university students spark at a whites-only Woolworth's lunch counter in Greensboro, North Carolina, in February 1960?",
      options: [
        "An armed occupation of federal courthouses across northern states",
        "Peaceful sit-ins that spread across Southern cities and desegregated lunch counters",
        "A boycott of international cricket tours protesting overseas colonial empires",
        "A nationwide school walkout protesting compulsory foreign-language textbooks",
      ],
      answerIndex: 1,
      hints: [
        "The 'Greensboro Four' politely asked for coffee, were refused service, and remained quietly in their seats until closing time.",
        "Within months, tens of thousands of students copied their tactic across more than fifty cities.",
      ],
      explanation:
        "The Greensboro Four launched the **sit-in movement** (February 1960). By calmly occupying segregated lunch counters and enduring harassment without retaliating, students cost segregated stores business and publicity, desegregating Woolworth's counters within months and inspiring the creation of SNCC. Walkouts over language textbooks refer to Soweto (1976), not Greensboro.",
    },

    // Q11 — short (core) — anti-apartheid-south-africa
    {
      id: "exam-4-q11",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "soweto-1976-sanctions",
      difficulty: "core",
      question:
        "Name the South African anti-apartheid activist who founded the Black Consciousness Movement to rebuild Black pride and self-reliance before dying from police brutality in custody in 1977.",
      answer: {
        type: "text",
        accept: ["Steve Biko", "Stephen Biko", "Bantu Stephen Biko", "Biko"],
        display: "Steve Biko",
      },
      traps: [
        { spec: { type: "text", accept: ["Nelson Mandela", "Mandela"] }, feedback: "Nelson Mandela was imprisoned on Robben Island from 1964 to 1982 and became President in 1994; he did not die in police custody in 1977." },
        { spec: { type: "text", accept: ["Desmond Tutu", "Tutu"] }, feedback: "Archbishop Desmond Tutu championed international sanctions and chaired the TRC; he did not found the Black Consciousness Movement." },
      ],
      hints: [
        "His writings and speeches inspired the student generation that marched in Soweto in 1976.",
        "His murder in police detention in September 1977 triggered worldwide condemnation and tightened the UN arms embargo.",
      ],
      solution: [
        "**Steve Biko** led the Black Consciousness Movement, teaching that psychological liberation and pride were essential before political freedom could be won.",
        "His death after severe beatings in police custody in 1977 exposed the cruelty of the apartheid police state globally.",
      ],
      commonError: "Confusing Steve Biko (Black Consciousness Movement) with Nelson Mandela (ANC) or Archbishop Desmond Tutu.",
    },

    // Q12 — mcq (core) — anti-apartheid-south-africa — answerIndex: 2
    {
      id: "exam-4-q12",
      kind: "mcq",
      topicId: "anti-apartheid-south-africa",
      guideRef: "apartheid-system-1948",
      difficulty: "core",
      question:
        "What was the primary aim of South Africa's **1953 Bantu Education Act** under the apartheid regime?",
      options: [
        "To fund integrated multiracial universities offering equal engineering degrees to every South African",
        "To replace all state classrooms with free mission schools managed independently by foreign charities",
        "To give Black children deliberately inferior schooling designed to limit them to low-paid manual labour",
        "To teach Black and white students identical science curricula using equal per-pupil government budgets",
      ],
      answerIndex: 2,
      hints: [
        "Recall Minister Hendrik Verwoerd's notorious remark that there was 'no place for the Bantu in the European community above the level of certain forms of labour'.",
        "Under the Act, spending per white pupil was many times higher than spending per Black pupil.",
      ],
      explanation:
        "The 1953 Bantu Education Act brought Black schools under central apartheid control, closed independent mission schools, slashed per-pupil funding, and narrowed the curriculum to train Black youths strictly for manual and subservient jobs — deepening inequality and later fuelling the 1976 Soweto student revolt.",
    },

    // Q13 — short (warmup) — singapore-and-change
    {
      id: "exam-4-q13",
      kind: "short",
      topicId: "singapore-and-change",
      guideRef: "colony-to-self-government",
      difficulty: "warmup",
      question:
        "In which year did Singapore fall to Imperial Japan on 15 February, beginning the three-and-a-half-year Japanese Occupation?",
      answer: { type: "number", value: 1942 },
      traps: [
        { spec: { type: "number", value: 1941 }, feedback: "Japanese forces bombed Singapore and landed in northern Malaya in December 1941, but Singapore surrendered two months later." },
        { spec: { type: "number", value: 1945 }, feedback: "1945 was when Japan surrendered and the Occupation ENDED, not when Singapore fell." },
        { spec: { type: "number", value: 1959 }, feedback: "1959 was when Singapore gained internal self-government, seventeen years after the Fall of Singapore." },
      ],
      hints: [
        "General Percival surrendered at the Ford Factory in Bukit Timah in February during the Second World War.",
        "The Occupation lasted from early in this year until September 1945.",
      ],
      solution: [
        "British forces surrendered Singapore to General Yamashita on 15 February **1942**.",
        "Renamed Syonan-to ('Light of the South'), Singapore endured severe hardship under Japanese military rule until September 1945.",
      ],
      commonError: "Writing 1941 (start of the Pacific War in December) or 1945 (end of the Occupation) instead of 1942.",
    },

    // Q14 — mcq (core) — singapore-and-change — answerIndex: 0
    {
      id: "exam-4-q14",
      kind: "mcq",
      topicId: "singapore-and-change",
      guideRef: "colony-to-self-government",
      difficulty: "core",
      question:
        "How did the **Fall of Singapore and the Japanese Occupation** transform political attitudes in post-war Singapore?",
      options: [
        "It shattered the myth of British invincibility and convinced locals they had to govern and defend themselves",
        "It persuaded most Singaporeans that British colonial rule should continue permanently without local elections",
        "It immediately solved post-war housing shortages and ended all trade union strikes across the island",
        "It united Singapore and Malaysia into an independent federation before Japan surrendered in 1945",
      ],
      answerIndex: 0,
      hints: [
        "Before 1942, Britain had promoted Singapore as an 'Impregnable Fortress'. What happened to that image after 15 February 1942?",
        "Think about why anti-colonial sentiment and demands for self-government surged after 1945.",
      ],
      explanation:
        "Britain's swift defeat in 1942 destroyed the colonial myth of white British superiority and invincibility. Combined with post-war food shortages, unemployment, and housing distress, the Occupation convinced a new generation of Singaporeans that they could no longer rely on colonial rulers and must demand self-government.",
    },

    // Q15 — short (warmup) — singapore-and-change
    {
      id: "exam-4-q15",
      kind: "short",
      topicId: "singapore-and-change",
      guideRef: "colony-to-self-government",
      difficulty: "warmup",
      question:
        "In which year did Singapore achieve full internal self-government, with Lee Kuan Yew sworn in as its first Prime Minister after the PAP's landslide election win?",
      answer: { type: "number", value: 1959 },
      traps: [
        { spec: { type: "number", value: 1955 }, feedback: "1955 saw the partial Rendel Constitution election won by David Marshall's Labour Front, not full internal self-government under Lee Kuan Yew." },
        { spec: { type: "number", value: 1963 }, feedback: "1963 was Merger with Malaysia, four years after internal self-government." },
        { spec: { type: "number", value: 1965 }, feedback: "1965 was full sovereign Independence after Separation from Malaysia, six years after internal self-government." },
      ],
      hints: [
        "This milestone came four years after the 1955 Rendel Constitution and four years before Merger in 1963.",
        "In this election, the People's Action Party won 43 of 51 Legislative Assembly seats.",
      ],
      solution: [
        "In May **1959**, the PAP won a decisive victory under the new Constitution granting full internal self-government.",
        "Lee Kuan Yew became Singapore's first Prime Minister, though Britain retained control over defence and foreign affairs until 1963.",
      ],
      commonError: "Confusing 1959 (internal self-government) with 1963 (Merger) or 1965 (full Independence).",
    },

    // Q16 — mcq (core) with SVG HDB Chart — singapore-and-change — answerIndex: 3
    {
      id: "exam-4-q16",
      kind: "mcq",
      topicId: "singapore-and-change",
      guideRef: "economic-urban-transformation",
      difficulty: "core",
      question:
        "Study the bar chart showing the dramatic expansion of Singapore's population housed in **HDB public flats** from 1960 to 1985. Which devastating urban disaster created urgent public momentum for this rapid rehousing drive?",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing percentage of Singapore population living in HDB public housing rising from 9 percent in 1960 to 84 percent in 1985">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Share of Singapore Population Living in HDB Flats (1960–1985)</text>' +
        '<line x1="72" y1="202" x2="516" y2="202" stroke="#475569" stroke-width="1.8"/>' +
        '<line x1="72" y1="46" x2="72" y2="202" stroke="#475569" stroke-width="1.8"/>' +
        '<line x1="72" y1="165" x2="516" y2="165" stroke="#e2e8f0" stroke-dasharray="4,3"/>' +
        '<line x1="72" y1="127" x2="516" y2="127" stroke="#e2e8f0" stroke-dasharray="4,3"/>' +
        '<line x1="72" y1="90" x2="516" y2="90" stroke="#e2e8f0" stroke-dasharray="4,3"/>' +
        '<line x1="72" y1="52" x2="516" y2="52" stroke="#e2e8f0" stroke-dasharray="4,3"/>' +
        '<text x="64" y="206" text-anchor="end" font-size="10.5" fill="#475569">0%</text>' +
        '<text x="64" y="169" text-anchor="end" font-size="10.5" fill="#475569">25%</text>' +
        '<text x="64" y="131" text-anchor="end" font-size="10.5" fill="#475569">50%</text>' +
        '<text x="64" y="94" text-anchor="end" font-size="10.5" fill="#475569">75%</text>' +
        '<text x="64" y="56" text-anchor="end" font-size="10.5" fill="#475569">100%</text>' +
        '<rect x="108" y="188" width="68" height="14" rx="4" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<text x="142" y="182" text-anchor="middle" font-size="11.5" font-weight="700" fill="#4c1d95">9%</text>' +
        '<text x="142" y="220" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">1960</text>' +
        '<rect x="214" y="149" width="68" height="53" rx="4" fill="#a78bfa" stroke="#6d28d9" stroke-width="1.4"/>' +
        '<text x="248" y="143" text-anchor="middle" font-size="11.5" font-weight="700" fill="#4c1d95">35%</text>' +
        '<text x="248" y="220" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">1970</text>' +
        '<rect x="320" y="126" width="68" height="76" rx="4" fill="#7c3aed" stroke="#4c1d95" stroke-width="1.4"/>' +
        '<text x="354" y="120" text-anchor="middle" font-size="11.5" font-weight="700" fill="#4c1d95">51%</text>' +
        '<text x="354" y="220" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">1975</text>' +
        '<rect x="426" y="76" width="68" height="126" rx="4" fill="#5b21b6" stroke="#3b0764" stroke-width="1.4"/>' +
        '<text x="460" y="70" text-anchor="middle" font-size="11.5" font-weight="700" fill="#3b0764">84%</text>' +
        '<text x="460" y="220" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">1985</text>' +
        '<text x="280" y="240" text-anchor="middle" font-size="10.5" fill="#475569">Replacing overcrowded slums and squatter huts with modern high-rise public housing estates</text>' +
        '</svg>',
      options: [
        "The 1950 Maria Hertogh riots outside Sultan Mosque",
        "The 1955 Hock Lee bus workers' strike and riots",
        "The 1964 communal riots during Merger with Malaysia",
        "The 1961 Bukit Ho Swee fire that left 16,000 homeless",
      ],
      answerIndex: 3,
      hints: [
        "Look closely at the year in the question: 1961 — one year after HDB was created.",
        "This massive blaze swept through wooden attap squatter settlements, proving the urgent need for safe brick-and-concrete flats.",
      ],
      explanation:
        "On 25 May 1961, the **Bukit Ho Swee fire** destroyed densely packed wooden squatter huts and left around 16,000 people homeless. HDB under Lim Kim San rehoused victims in newly built emergency flats within nine months, winning vital public trust and accelerating Singapore's transformation from slums to modern public housing.",
    },

    // Q17 — short (core) — singapore-and-change
    {
      id: "exam-4-q17",
      kind: "short",
      topicId: "singapore-and-change",
      guideRef: "merger-and-independence-1965",
      difficulty: "core",
      question:
        "In which year did Singapore separate from Malaysia to become a fully independent sovereign republic on 9 August?",
      answer: { type: "number", value: 1965 },
      traps: [
        { spec: { type: "number", value: 1959 }, feedback: "1959 was internal self-government from Britain, six years before Separation from Malaysia." },
        { spec: { type: "number", value: 1963 }, feedback: "1963 was when Singapore JOINED Malaysia in Merger; Separation occurred two years later." },
        { spec: { type: "number", value: 1967 }, feedback: "1967 was when Singapore introduced National Service and co-founded ASEAN, two years after Independence." },
      ],
      hints: [
        "Merger with Malaysia lasted just under two years, from September 1963 to August of this year.",
        "Singapore celebrates National Day every 9 August to mark this milestone.",
      ],
      solution: [
        "Following political disagreements over 'Malaysian Malaysia', disputes over the Common Market and taxation, and the 1964 racial riots, Singapore separated from Malaysia on 9 August **1965**.",
        "Suddenly independent without a hinterland or natural resources, Singapore had to build its own economy, defence, and national identity.",
      ],
      commonError: "Confusing 1963 (Merger with Malaysia) with 1965 (Separation and full Independence).",
    },

    // Q18 — short (core) — singapore-and-change
    {
      id: "exam-4-q18",
      kind: "short",
      topicId: "singapore-and-change",
      guideRef: "economic-urban-transformation",
      difficulty: "core",
      question:
        "Name the swampy region in western Singapore that the Economic Development Board cleared and developed in the 1960s into Singapore's flagship industrial estate.",
      answer: {
        type: "text",
        accept: ["Jurong", "Jurong Industrial Estate", "Jurong Town"],
        display: "Jurong",
      },
      traps: [
        { spec: { type: "text", accept: ["Changi"] }, feedback: "Changi is in eastern Singapore, famous for Singapore's international airport opened in 1981, not the 1960s western swampland industrial estate." },
        { spec: { type: "text", accept: ["Bukit Ho Swee"] }, feedback: "Bukit Ho Swee was the site of the 1961 fire and HDB emergency flats, not the western industrial estate." },
      ],
      hints: [
        "Critics initially nicknamed the project 'Goh's Folly' after Finance Minister Goh Keng Swee because it began as crocodile-infested swampland.",
        "Today it remains a major manufacturing, port, and petrochemical zone in western Singapore.",
      ],
      solution: [
        "Starting in 1961, the Economic Development Board (EDB) transformed swampland at **Jurong** into the Jurong Industrial Estate.",
        "Complete with factory sites, deep-water wharves, utilities, and worker flats, it anchored Singapore's shift from entrepôt trade to export manufacturing.",
      ],
      commonError: "Confusing Jurong (western industrial estate) with Changi (eastern airport) or Bukit Ho Swee (1961 HDB rehousing).",
    },

    // Q19 — mcq (core) with SVG Economic Shift — singapore-and-change — answerIndex: 1
    {
      id: "exam-4-q19",
      kind: "mcq",
      topicId: "singapore-and-change",
      guideRef: "economic-urban-transformation",
      difficulty: "core",
      question:
        "Study the infographic contrasting Singapore's economy in the mid-1960s with 1990. Why did Singapore's leaders actively court foreign **multinational corporations (MNCs)** in the late 1960s and 1970s?",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Infographic comparing Singapore\'s vulnerable mid-1960s entrepot economy with its diversified 1990 global hub economy">' +
        '<rect x="0" y="0" width="560" height="245" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Singapore&apos;s Economic Transformation: Mid-1960s to 1990</text>' +
        '<rect x="22" y="46" width="222" height="174" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>' +
        '<text x="133" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">Mid-1960s Vulnerabilities</text>' +
        '<text x="36" y="94" font-size="11" fill="#1e293b">• Over-reliant on entrepôt trade</text>' +
        '<text x="36" y="116" font-size="11" fill="#1e293b">• No Common Market hinterland</text>' +
        '<text x="36" y="138" font-size="11" fill="#1e293b">• High unemployment (~9–10%)</text>' +
        '<text x="36" y="160" font-size="11" fill="#1e293b">• British military withdrawal</text>' +
        '<text x="46" y="176" font-size="10" fill="#7c2d12">(bases = ~20% of GDP)</text>' +
        '<text x="36" y="202" font-size="11" font-weight="700" fill="#9a3412">GDP / capita: ~US$500</text>' +
        '<line x1="252" y1="133" x2="306" y2="133" stroke="#15803d" stroke-width="3.2"/>' +
        '<polygon points="310,133 299,126 299,140" fill="#15803d"/>' +
        '<text x="280" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#14532d">EDB Pivot</text>' +
        '<text x="280" y="151" text-anchor="middle" font-size="10" fill="#14532d">Export Hub</text>' +
        '<rect x="316" y="46" width="222" height="174" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>' +
        '<text x="427" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d">1990 Global Hub Economy</text>' +
        '<text x="330" y="94" font-size="11" fill="#1e293b">• Export electronics &amp; refining</text>' +
        '<text x="330" y="116" font-size="11" fill="#1e293b">• PSA container port &amp; Changi</text>' +
        '<text x="330" y="138" font-size="11" fill="#1e293b">• Finance &amp; high-tech services</text>' +
        '<text x="330" y="160" font-size="11" fill="#1e293b">• Near-full employment &amp; skills</text>' +
        '<text x="330" y="202" font-size="11" font-weight="700" fill="#14532d">GDP / capita: ~US$12,700</text>' +
        '</svg>',
      options: [
        "Singapore had vast domestic coal mines and wanted foreign firms to keep all goods strictly inside local shops",
        "With no hinterland and British bases closing, MNCs brought fast jobs, technology, capital, and global export markets",
        "Singapore's leaders rejected international shipping and planned to close the port in favour of small rice farms",
        "Malaysia ordered Singapore to invite American electronics factories in exchange for rejoining the federation",
      ],
      answerIndex: 1,
      hints: [
        "Read the four vulnerabilities in the left box — especially loss of the Common Market and Britain's 1968 base withdrawal announcement.",
        "Why couldn't Singapore rely on selling goods only to its own tiny domestic population of under two million?",
      ],
      explanation:
        "Cut off from a Malaysian Common Market and facing the economic shock of Britain's military withdrawal (which removed roughly 20% of GDP and tens of thousands of jobs), Singapore lacked natural resources and a large domestic market. Attracting MNCs rapidly delivered foreign capital, technical skills, factory jobs, and instant access to global export markets.",
    },

    // Q20 — short (core) — singapore-and-change
    {
      id: "exam-4-q20",
      kind: "short",
      topicId: "singapore-and-change",
      guideRef: "society-politics-enquiry",
      difficulty: "core",
      question:
        "Give the exact three-word name of the policy Singapore introduced in 1989 to maintain balanced racial proportions in HDB blocks and neighbourhoods so ethnic enclaves would not form.",
      answer: {
        type: "text",
        accept: ["Ethnic Integration Policy", "The Ethnic Integration Policy"],
        display: "Ethnic Integration Policy",
      },
      traps: [
        { spec: { type: "text", accept: ["Group Areas Act"] }, feedback: "The Group Areas Act was South Africa's apartheid law forcing racial SEPARATION; Singapore's 1989 housing policy promoted racial mixing and integration." },
        { spec: { type: "text", accept: ["National Service"] }, feedback: "National Service (1967) is Singapore's defence conscription policy, not the 1989 HDB housing quota policy." },
      ],
      hints: [
        "Its initials are EIP, and it applies to HDB flat purchases and resales across Singapore.",
        "Think of the three words: [race/community adjective] + [mixing/unity noun] + [government plan].",
      ],
      solution: [
        "In 1989, Singapore introduced the **Ethnic Integration Policy** (EIP) across all HDB estates.",
        "By setting balanced proportions for Chinese, Malay, Indian, and Other residents in each block and neighbourhood, it ensured neighbours of all communities lived side by side.",
      ],
      commonError: "Confusing Singapore's Ethnic Integration Policy (designed to mix communities) with apartheid's Group Areas Act (designed to segregate them).",
    },

    // Q21 — mcq (challenge) — modern-protest-movements — answerIndex: 2
    {
      id: "exam-4-q21",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "historical-interpretations",
      difficulty: "challenge",
      question:
        "One historian writes a biography crediting Martin Luther King Jr. alone for US civil rights laws, while another focuses on unnamed women, students, and local church volunteers. What historical debate does this contrast illustrate?",
      options: [
        "A disagreement over whether primary sources should ever be dated before publication",
        "A dispute over whether the US Civil Rights Movement occurred before or after the First World War",
        "The tension between 'Great Man' leadership interpretations and 'history from below' grassroots interpretations",
        "A legal conflict over whether historians are permitted to quote speeches from the 1960s in textbooks",
      ],
      answerIndex: 2,
      hints: [
        "Compare spotlighting one famous charismatic leader versus spotlighting thousands of ordinary everyday organisers.",
        "Think of the two classic historical frameworks: top-down ('Great Man') vs bottom-up ('grassroots').",
      ],
      explanation:
        "This contrast illustrates a classic historiographical debate: **'Great Man' interpretations** credit iconic leaders (such as King, Gandhi, Mandela, or Lee Kuan Yew) with driving change, whereas **grassroots ('history from below') interpretations** show how everyday people — such as Montgomery's carpool drivers, Greensboro students, and township youths — created the pressure leaders harnessed.",
    },

    // Q22 — written (4 marks, challenge) — singapore-and-change
    {
      id: "exam-4-q22",
      kind: "written",
      topicId: "singapore-and-change",
      guideRef: "society-politics-enquiry",
      difficulty: "challenge",
      marks: 4,
      question:
        "Explain how Singapore's post-Separation policies in **housing**, **education**, and **defence** worked together to build a cohesive multiracial nation.",
      hints: [
        "Housing: explain how HDB homeownership and ethnic quotas built shared neighbourhoods and a personal stake in Singapore.",
        "Education: explain how bilingualism (English + Mother Tongue) bridged communities while keeping cultural heritage alive.",
        "Defence: explain how National Service (1967) deterred threats and united young citizens across race and class; then tie everything to multiracialism/meritocracy.",
      ],
      modelAnswer:
        "After the 1964 racial riots and sudden Separation, Singapore's leaders intentionally engineered social cohesion across daily life. In housing, rapid HDB homeownership gave families an economic stake in stability, while the Ethnic Integration Policy prevented segregated enclaves so neighbours interacted across communities. In schooling, bilingualism established English as a shared working and economic bridge while Mother Tongue classes preserved Chinese, Malay, and Tamil heritage. In defence, introducing National Service in 1967 built credible security after British military withdrawal while bringing young men of every background together in shared training. Together with meritocracy, these linked policies forged a resilient civic identity across diverse groups.",
      markScheme: [
        {
          point: "Explains housing's role (HDB homeownership giving citizens a stake and/or Ethnic Integration Policy preventing enclaves).",
          keywords: ["hdb", "homeownership", "enclaves", "ethnic integration", "stake", "neighbours"],
        },
        {
          point: "Explains bilingual education (English as common working language linking communities + Mother Tongue preserving cultural heritage).",
          keywords: ["bilingual", "english", "mother tongue", "heritage", "common"],
        },
        {
          point: "Explains defence / National Service (1967) securing sovereignty after British withdrawal while uniting young citizens across backgrounds.",
          keywords: ["national service", "1967", "british", "training", "security", "sovereignty"],
        },
        {
          point: "Synthesises how these policies reinforced multiracial social cohesion and/or meritocracy after 1964 riot tensions.",
          keywords: ["meritocracy", "cohesion", "1964", "riots", "civic", "identity"],
        },
      ],
      commonError: "Describing only economic growth (Jurong/EDB) instead of focusing on the three social nation-building pillars asked in the question.",
    },

    // Q23 — written (3 marks, challenge) — causes-of-ww1
    {
      id: "exam-4-q23",
      kind: "written",
      topicId: "causes-of-ww1",
      guideRef: "weighing-ww1-causes",
      difficulty: "challenge",
      marks: 3,
      question:
        "Compare how **rival alliances and superpower blocs** drove military escalation in the First World War (1914) versus the Vietnam War (1954–65).",
      hints: [
        "WWI: mention the Triple Alliance vs Triple Entente chain reaction after Sarajevo.",
        "Vietnam: mention Cold War superpower rivalry (USA backing South Vietnam vs USSR/China backing North Vietnam).",
        "Compare the pace or mechanism: rapid weeks-long treaty/mobilisation chain in 1914 vs decade-long ideological escalation in Vietnam.",
      ],
      modelAnswer:
        "In 1914, Europe's rival Triple Alliance and Triple Entente locked Great Powers into mutual fear so that after Sarajevo, Germany's blank cheque, Russian mobilisation, and the Schlieffen Plan dragged five empires into total war within weeks. In Vietnam, Cold War superpower blocs operated differently: the USA backed South Vietnam under Containment and the Domino Theory while the USSR and China supplied North Vietnam, turning a local decolonisation struggle into a proxy conflict. Thus, whereas WWI exploded rapidly through rigid treaty commitments and railway timetables, Vietnam escalated gradually over eleven years from advisers to ground combat troops after the 1964 Gulf of Tonkin Resolution.",
      markScheme: [
        {
          point: "Explains WWI alliance escalation (Triple Alliance vs Triple Entente, blank cheque, mobilisation / Schlieffen Plan after Sarajevo).",
          keywords: ["triple alliance", "triple entente", "entente", "sarajevo", "mobilis", "schlieffen", "blank cheque"],
        },
        {
          point: "Explains Vietnam Cold War bloc rivalry (USA Containment / Domino Theory vs Soviet/Chinese support turning decolonisation into proxy conflict).",
          keywords: ["cold war", "containment", "domino", "ussr", "soviet", "china", "proxy"],
        },
        {
          point: "Makes an explicit structural comparison (rapid weeks-long treaty/timetable chain in 1914 vs gradual decade-long escalation to 1964–65 in Vietnam).",
          keywords: ["weeks", "gradually", "whereas", "timetables", "advisers", "tonkin"],
        },
      ],
      commonError: "Writing two unrelated summaries without explicitly comparing HOW bloc commitments caused escalation differently in each war.",
    },

    // Q24 — written (4 marks, challenge) with SVG NOP Card — modern-protest-movements
    {
      id: "exam-4-q24",
      kind: "written",
      topicId: "modern-protest-movements",
      guideRef: "source-provenance-nop",
      difficulty: "challenge",
      marks: 4,
      question:
        "Study Source A on the provenance card. Using its content, its NOP provenance, and your own contextual knowledge, evaluate how useful Source A is to a historian studying Singapore's economic transformation in the late 1960s.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Archival provenance card for Source A, a 1968 Singapore Economic Development Board promotional brochure for overseas factory investors">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<rect x="18" y="16" width="524" height="218" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
        '<rect x="18" y="16" width="524" height="36" rx="10" fill="#1e293b"/>' +
        '<text x="36" y="39" font-size="13" font-weight="700" fill="#ffffff">SOURCE A — ARCHIVAL PROVENANCE CARD</text>' +
        '<rect x="34" y="64" width="152" height="44" rx="6" fill="#ede9fe" stroke="#c4b5fd"/>' +
        '<text x="44" y="81" font-size="10" font-weight="700" fill="#5b21b6">NATURE</text>' +
        '<text x="44" y="97" font-size="11" fill="#1e293b">Promotional brochure</text>' +
        '<rect x="195" y="64" width="174" height="44" rx="6" fill="#e0f2fe" stroke="#7dd3fc"/>' +
        '<text x="205" y="81" font-size="10" font-weight="700" fill="#0369a1">ORIGIN</text>' +
        '<text x="205" y="97" font-size="11" fill="#1e293b">Singapore EDB, 1968</text>' +
        '<rect x="378" y="64" width="148" height="44" rx="6" fill="#dcfce7" stroke="#86efac"/>' +
        '<text x="388" y="81" font-size="10" font-weight="700" fill="#14532d">AUDIENCE</text>' +
        '<text x="388" y="97" font-size="11" fill="#1e293b">Foreign MNC executives</text>' +
        '<rect x="34" y="122" width="492" height="96" rx="6" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="46" y="143" font-size="11.5" font-style="italic" fill="#1e293b">&quot;Invest in Asia&apos;s most dynamic export hub! Singapore offers foreign</text>' +
        '<text x="46" y="161" font-size="11.5" font-style="italic" fill="#1e293b">manufacturers ready-built industrial parks, a deep-water port, tax</text>' +
        '<text x="46" y="179" font-size="11.5" font-style="italic" fill="#1e293b">incentives, and a disciplined, English-speaking workforce committed to</text>' +
        '<text x="46" y="197" font-size="11.5" font-style="italic" fill="#1e293b">industrial peace. Build your global factory in Singapore today.&quot;</text>' +
        '</svg>',
      hints: [
        "Content: what real features of Singapore's export-industrial strategy does the extract show (industrial parks, port, tax incentives, English-speaking workforce)?",
        "NOP Provenance: why did the EDB publish an upbeat brochure specifically in 1968 targeting foreign MNC bosses?",
        "Own knowledge & limits: what hardships or anxieties of 1968 (e.g. British military withdrawal crisis, high unemployment, tough labour laws, squatter resettlement) would a sales brochure deliberately leave out?",
      ],
      modelAnswer:
        "Source A is highly useful for illustrating Singapore's deliberate shift toward export-led manufacturing: its references to tax incentives, ready-built industrial parks, deep-water shipping, and an English-speaking labour force accurately match real EDB policies at Jurong. Analysing provenance, this is an official 1968 promotional brochure aimed at foreign executives; its persuasive sales purpose explains the confident tone right after Britain announced its military base withdrawal, when Singapore desperately needed overseas investment. However, from contextual knowledge, its marketing purpose creates clear omissions: it hides severe 1960s unemployment, anxiety over losing British defence spending, strict 1968 labour laws curtailing strikes, and the disruption felt by relocated farmers and squatters. Overall, the brochure is very valuable for revealing government economic strategy, though historians must cross-reference it with worker accounts and unemployment data.",
      markScheme: [
        {
          point: "Identifies useful content evidence reflecting real post-1965 EDB policies (export manufacturing, tax incentives, port, English-speaking workforce, Jurong).",
          keywords: ["export", "tax incentives", "jurong", "english", "industrial parks", "port"],
        },
        {
          point: "Analyses NOP provenance (official 1968 EDB promotional brochure designed to persuade foreign MNCs to invest after British withdrawal announcement).",
          keywords: ["brochure", "persuade", "persuasive", "marketing", "mnc", "executives", "investors"],
        },
        {
          point: "Uses contextual knowledge to note limitations/omissions (high unemployment, British military withdrawal crisis, strict 1968 labour laws, resettlement hardship).",
          keywords: ["unemployment", "withdrawal", "british", "labour laws", "strikes", "squatters", "omissions", "hides"],
        },
        {
          point: "Reaches a balanced judgment on utility ('valuable for government strategy/priorities, must cross-reference for workers' lived reality').",
          keywords: ["overall", "valuable", "strategy", "cross-reference", "worker", "data"],
        },
      ],
      commonError: "Saying the brochure is 'not useful because it is an advert' instead of showing why an advert is strong evidence of government strategy while noting its omissions.",
    },

    // Q25 — written (4 marks, challenge) — the-holocaust
    {
      id: "exam-4-q25",
      kind: "written",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "challenge",
      marks: 4,
      question:
        "Drawing on your study of the Holocaust and 20th-century protest movements, explain why historians argue that **remembrance**, **international law**, and **active civic courage** remain vital in the modern world.",
      hints: [
        "Point 1 (Holocaust warning): explain what the step-by-step escalation from propaganda and bystander silence to genocide teaches future generations.",
        "Point 2 (International law): cite concrete post-1945 safeguards such as the Nuremberg Trials and the 1948 UN Genocide Convention.",
        "Point 3 (Civic courage): connect Holocaust rescuers/resisters with later campaigns (India, US Civil Rights, or Anti-Apartheid) showing ordinary people can challenge injustice.",
        "Point 4 (Modern world): link these historical lessons to defending human rights against prejudice, scapegoating, or apathy today.",
      ],
      modelAnswer:
        "First, remembering the six million Jews and millions of others murdered under Nazi rule warns every generation how racist propaganda, gradual legal exclusion, and bystander apathy can escalate into state-sponsored genocide. Second, concrete legal milestones born directly from those atrocities — notably the Nuremberg Trials rejecting 'following orders' and the 1948 UN Genocide Convention — uphold international accountability for human rights abuses. Third, from Holocaust rescuers like Oskar Schindler and Warsaw Ghetto fighters to Gandhi's Satyagraha, US Civil Rights marchers, and South Africa's anti-apartheid activists, history proves that ordinary people exercising disciplined solidarity can confront oppression. Finally, studying these past struggles equips young citizens today to recognise scapegoating and disinformation early and speak up before discrimination becomes normalised.",
      markScheme: [
        {
          point: "Explains the historical warning of the Holocaust (how propaganda, gradual legal exclusion, and bystander apathy can escalate to genocide).",
          keywords: ["propaganda", "bystander", "apathy", "genocide", "six million", "exclusion"],
        },
        {
          point: "Cites post-1945 international legal safeguards born from Holocaust memory (Nuremberg Trials and/or 1948 UN Genocide Convention).",
          keywords: ["nuremberg", "1948", "convention", "accountability", "following orders", "tribunals"],
        },
        {
          point: "Links rescuers/resisters and 20th-century protest movements (e.g. Schindler, Warsaw, Gandhi, Civil Rights, Anti-Apartheid) showing ordinary people can challenge injustice.",
          keywords: ["schindler", "warsaw", "gandhi", "satyagraha", "civil rights", "apartheid", "rescuers"],
        },
        {
          point: "Connects these lessons to modern civic vigilance (spotting scapegoating, prejudice, or disinformation before discrimination normalises).",
          keywords: ["scapegoating", "disinformation", "normalised", "prejudice", "speak up", "vigilance"],
        },
      ],
      commonError: "Writing general moral slogans without anchoring each point in specific Year 9 historical evidence (Nuremberg, 1948 Convention, rescuers, and protest campaigns).",
    },
  ],
};
