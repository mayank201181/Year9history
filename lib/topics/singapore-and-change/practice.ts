import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "singapore-and-change-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "colony-to-self-government",
      question: "In what year did the Fall of Singapore to Imperial Japan shatter the myth of British invincibility?",
      answer: { type: "number", value: 1942, display: "1942" },
      traps: [
        { spec: { type: "number", value: 1945 }, feedback: "1945 was when Japan surrendered and British rule returned; Singapore fell on 15 February 1942." },
      ],
      solution: [
        "British forces surrendered Singapore to Imperial Japan on **15 February 1942**.",
      ],
      hints: ["It occurred on 15 February during the Second World War, three years before Japan's 1945 surrender."],
    },
    {
      id: "singapore-and-change-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "colony-to-self-government",
      question: "In what year did the PAP win power under Prime Minister Lee Kuan Yew, achieving full **internal self-government**?",
      answer: { type: "number", value: 1959, display: "1959" },
      traps: [
        { spec: { type: "number", value: 1965 }, feedback: "1965 was full sovereign independence; internal self-government began in June 1959." },
        { spec: { type: "number", value: 1955 }, feedback: "1955 was the Rendel Constitution (partial self-government under David Marshall); full internal self-government came in 1959." },
      ],
      solution: [
        "The PAP won 43 of 51 seats in May **1959**, beginning internal self-government with Lee Kuan Yew as Prime Minister.",
      ],
      hints: ["Four years after the 1955 Rendel Constitution and six years before 1965 independence."],
    },
    {
      id: "singapore-and-change-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "merger-and-independence-1965",
      question: "On what exact date did Singapore separate from Malaysia to become a fully independent sovereign republic?",
      options: [
        "9 August 1965",
        "15 February 1942",
        "16 September 1963",
        "25 May 1961",
      ],
      answerIndex: 0,
      explanation:
        "Singapore became independent on 9 August 1965 (National Day). The other dates mark the Fall of Singapore (1942), Merger with Malaysia (1963), and the Bukit Ho Swee fire (1961).",
      hints: ["Remember Singapore's National Day date!"],
    },
    {
      id: "singapore-and-change-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "merger-and-independence-1965",
      question: "What two-word economic arrangement—promising tariff-free trade with Malaysia's hinterland—was Singapore's main economic reason for seeking Merger in 1963?",
      answer: { type: "text", accept: ["Common Market", "common market", "a common market"], display: "Common Market" },
      solution: [
        "Singapore sought a **Common Market** with Malaya so its new factories could sell goods tariff-free across the federation.",
      ],
      hints: [
        "Two words: 'Common ______'.",
        "Its delay by Kuala Lumpur became a major economic cause of Separation.",
      ],
    },
    {
      id: "singapore-and-change-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "economic-urban-transformation",
      question: "What 3-letter statutory board founded in 1960 replaced overcrowded squatter slums with high-rise public flats across Singapore?",
      answer: { type: "text", accept: ["HDB", "Housing and Development Board", "Housing & Development Board"], display: "HDB" },
      traps: [
        { spec: { type: "text", accept: ["SIT", "Singapore Improvement Trust"] }, feedback: "SIT was the slow colonial agency (only ~23,000 flats in 32 years); HDB replaced it in 1960." },
        { spec: { type: "text", accept: ["EDB", "Economic Development Board"] }, feedback: "EDB (1961) attracted industries and MNCs; public housing was built by HDB (1960)." },
      ],
      solution: [
        "The **Housing & Development Board (HDB)** was founded in 1960 under Lim Kim San and transformed Singapore's housing landscape.",
      ],
      hints: ["Stands for Housing & Development Board."],
    },
    {
      id: "singapore-and-change-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "economic-urban-transformation",
      question: "Which estate was carved out of western Singapore swampland under Dr Goh Keng Swee to launch export-oriented manufacturing?",
      options: [
        "Orchard Road Estate",
        "Jurong Industrial Estate",
        "Sentosa Resort Estate",
        "Bukit Timah Reserve",
      ],
      answerIndex: 1,
      explanation:
        "Initially mocked as 'Goh's Folly', Jurong Industrial Estate became the backbone of Singapore's industrialisation, attracting foreign MNCs and creating tens of thousands of factory jobs.",
      hints: [
        "Critics early on called it 'Goh's Folly'.",
        "It sits in western Singapore.",
      ],
    },
    {
      id: "singapore-and-change-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "economic-urban-transformation",
      question: "In what year did **Changi Airport** officially open on reclaimed coastal land to replace cramped Paya Lebar Airport?",
      answer: { type: "number", value: 1981, display: "1981" },
      traps: [
        { spec: { type: "number", value: 1972 }, feedback: "1972 was when PSA opened Tanjong Pagar Container Terminal; Changi Airport opened in 1981." },
      ],
      solution: [
        "**Changi Airport** opened in **1981**, turning reclaimed coastal land into one of the world's premier aviation hubs.",
      ],
      hints: [
        "It opened at the very start of the 1980s.",
        "Nine years after the 1972 Tanjong Pagar Container Terminal.",
      ],
    },
    {
      id: "singapore-and-change-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "society-politics-enquiry",
      question: "What 3-letter policy introduced in 1989 set balanced ethnic quotas in HDB blocks and neighbourhoods to prevent racial enclaves?",
      answer: { type: "text", accept: ["EIP", "Ethnic Integration Policy", "HDB Ethnic Integration Policy"], display: "EIP (Ethnic Integration Policy)" },
      solution: [
        "The **Ethnic Integration Policy (EIP)** (1989) prevents ethnic clustering in HDB estates and promotes everyday multiracial mixing.",
      ],
      hints: [
        "Stands for Ethnic Integration Policy.",
        "Three letters: E-I-P.",
      ],
    },
    {
      id: "singapore-and-change-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "society-politics-enquiry",
      question: "In what year did Singapore introduce compulsory **National Service (NS)** to build a citizen defence force and strengthen shared identity?",
      options: [
        "1955",
        "1989",
        "1967",
        "1945",
      ],
      answerIndex: 2,
      explanation:
        "Compulsory National Service began in 1967—two years after sudden 1965 independence and just ahead of Britain's 1968 announcement of military withdrawal.",
      hints: [
        "Two years after 1965 independence and one year after the 1966 Bilingual Education Policy.",
        "Look for a late-1960s year.",
      ],
    },
    {
      id: "singapore-and-change-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "society-politics-enquiry",
      question: "A student analyses Singapore's **NEWater** plants and coastal **land reclamation** (+25% area) for their project. Which Combined Humanities lens is most central to these two case studies?",
      options: [
        "Politics (party manifestos and election laws)",
        "History (ancient colonial treaty archives)",
        "Economics (bank interest and tax policy)",
        "Geography (land use and water sustainability)",
      ],
      answerIndex: 3,
      explanation:
        "Physical land scarcity, coastal reclamation, and water-resource engineering sit squarely within Geography—while also linking tightly to Economics (costs/growth) and Politics (national security).",
      hints: [
        "Choose among History, Politics, Geography, and Economics.",
        "Land area and water systems concern physical space and natural resource management.",
      ],
    },
  ],
  papers: [
    {
      id: "singapore-and-change-p1",
      title: "Practice Paper 1: Road to Independence & Economic Transformation",
      questions: [
        {
          id: "singapore-and-change-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "colony-to-self-government",
          question: "Which December 1950 unrest in Singapore—triggered by a colonial court custody ruling—exposed British insensitivity to local religious and racial feelings?",
          answer: { type: "text", accept: ["Maria Hertogh riots", "Maria Hertogh", "Hertogh riots"], display: "Maria Hertogh riots" },
          traps: [
            { spec: { type: "text", accept: ["Hock Lee bus riots", "Hock Lee", "Hock Lee riots"] }, feedback: "The Hock Lee bus riots occurred in May 1955 over union/worker strikes; December 1950 was the Maria Hertogh riots." },
          ],
          solution: [
            "The **Maria Hertogh riots** (December 1950) killed 18 people and revealed how out of touch colonial authorities were with local religious sensitivities.",
          ],
          hints: ["Named after the Dutch girl at the centre of the 1950 custody dispute."],
        },
        {
          id: "singapore-and-change-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "colony-to-self-government",
          question: "Which May 1955 labour and student clash in Singapore demonstrated growing trade-union and anti-colonial momentum?",
          answer: { type: "text", accept: ["Hock Lee bus riots", "Hock Lee riots", "Hock Lee", "Hock Lee bus strike"], display: "Hock Lee bus riots" },
          solution: [
            "The **Hock Lee bus riots** (May 1955) united striking bus workers and Chinese middle-school students against colonial police.",
          ],
          hints: ["Named after the bus company where workers went on strike in May 1955."],
        },
        {
          id: "singapore-and-change-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "colony-to-self-government",
          question: "Who became Singapore's first Malayan-born *Yang di-Pertuan Negara* (Head of State) in December 1959 and later Singapore's first President in 1965?",
          answer: { type: "text", accept: ["Yusof bin Ishak", "Yusof Ishak", "Encik Yusof bin Ishak"], display: "Yusof bin Ishak" },
          traps: [
            { spec: { type: "text", accept: ["Lee Kuan Yew"] }, feedback: "Lee Kuan Yew was Singapore's first Prime Minister; Yusof bin Ishak was Head of State (Yang di-Pertuan Negara) and first President." },
          ],
          solution: [
            "**Yusof bin Ishak** served as Singapore's Head of State from 1959 and became its first President on 9 August 1965 (his portrait appears on Singapore banknotes).",
          ],
          hints: ["His portrait appears on Singapore's currency notes."],
        },
        {
          id: "singapore-and-change-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "merger-and-independence-1965",
          question: "How many months did Singapore remain inside Malaysia between Merger (16 September 1963) and Separation (9 August 1965)? (Give the nearest whole number of months.)",
          answer: { type: "number", value: 23, display: "23 months" },
          solution: [
            "From September 1963 to September 1965 would be 24 months; separating on 9 August 1965 meant Merger lasted just under two years—**23 months**.",
          ],
          hints: [
            "Count months from September 1963 to August 1965.",
            "Just one month short of two full years (24 months).",
          ],
        },
        {
          id: "singapore-and-change-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "merger-and-independence-1965",
          question: "Which security operation in February 1963 detained over 100 left-wing politicians and unionists in Singapore just months before Merger?",
          options: [
            "Operation Coldstore",
            "Operation Rolling Thunder",
            "Operation Barbarossa",
            "Operation Market Garden",
          ],
          answerIndex: 0,
          explanation:
            "Operation Coldstore (February 1963) weakened radical left-wing opposition (Barisan Sosialis) ahead of Merger in September 1963—a key piece of Cold War political context. The others were Vietnam or WWII operations.",
          hints: [
            "Its name starts with 'Cold'—fitting the Cold War anti-communist context of 1963.",
            "Eliminate Vietnam War and WWII European operations.",
          ],
        },
        {
          id: "singapore-and-change-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "merger-and-independence-1965",
          question: "In what year did deadly July and September racial riots kill 36 people in Singapore during Merger, pushing Tunku Abdul Rahman towards Separation?",
          answer: { type: "number", value: 1964, display: "1964" },
          traps: [
            { spec: { type: "number", value: 1950 }, feedback: "1950 was the Maria Hertogh riots under British rule; the racial riots during Merger occurred in July and September 1964." },
            { spec: { type: "number", value: 1965 }, feedback: "1965 was Separation itself; the racial riots erupted the year before, in July and September 1964." },
          ],
          solution: [
            "The communal riots erupted on 21 July **1964** (Prophet Muhammad's Birthday procession) and again in September **1964**.",
          ],
          hints: [
            "Exactly halfway between Merger (1963) and Separation (1965).",
            "21 July is now marked as Racial Harmony Day in Singapore.",
          ],
        },
        {
          id: "singapore-and-change-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "What traditional colonial trade model—importing regional raw goods like rubber and tin and re-exporting them without manufacturing—did Singapore outgrow after 1965?",
          answer: { type: "text", accept: ["entrepôt", "entrepot", "entrepot trade", "entrepôt trade"], display: "entrepôt trade" },
          solution: [
            "Singapore's colonial economy relied on **entrepôt trade**, which could not provide enough jobs after 1965, prompting a pivot to export-led manufacturing.",
          ],
          hints: [
            "A French-derived word starting with 'e' meaning a re-export trading hub.",
            "E-n-t-r-e-p-ô-t.",
          ],
        },
        {
          id: "singapore-and-change-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "Who led the Housing & Development Board (HDB) from 1960 and orchestrated the rapid rebuilding of Bukit Ho Swee after the May 1961 fire?",
          options: [
            "David Marshall",
            "Lim Kim San",
            "Albert Winsemius",
            "Lim Bo Seng",
          ],
          answerIndex: 1,
          explanation:
            "Lim Kim San chaired HDB from 1960, cutting red tape to erect over 50,000 flats in five years—including flats at Bukit Ho Swee within nine months of the disaster.",
          hints: [
            "He was the first chairman of HDB, sometimes called 'Mr HDB'.",
            "Distinguish him from WWII hero Lim Bo Seng and UN economist Albert Winsemius.",
          ],
        },
        {
          id: "singapore-and-change-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "What 3-letter mandatory savings fund was unlocked in 1968 so ordinary citizens could afford to purchase HDB flats under the Home Ownership Scheme?",
          answer: { type: "text", accept: ["CPF", "Central Provident Fund"], display: "CPF (Central Provident Fund)" },
          solution: [
            "Unlocking **Central Provident Fund (CPF)** savings in 1968 allowed working families to buy HDB homes without draining take-home cash wages.",
          ],
          hints: [
            "Stands for Central Provident Fund.",
            "Three letters: C-P-F.",
          ],
        },
        {
          id: "singapore-and-change-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "What branded name does Singapore give to its ultra-clean, high-grade reclaimed water—one of its Four National Taps?",
          answer: { type: "text", accept: ["NEWater", "newater"], display: "NEWater" },
          solution: [
            "**NEWater** (advanced membrane-purified reclaimed water) is a pillar of Singapore's Four National Taps alongside local catchment, imported Johor water, and desalination.",
          ],
          hints: [
            "A single compound word combining 'NEW' and 'water'.",
            "Spelled with capital N-E-W: ____ater.",
          ],
        },
        {
          id: "singapore-and-change-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "Which maritime chokepoint gives Singapore's PSA port (Tanjong Pagar 1972 → Tuas Mega Port) its unmatched strategic shipping advantage?",
          options: [
            "The Panama Canal",
            "The Strait of Gibraltar",
            "The Strait of Malacca",
            "The English Channel",
          ],
          answerIndex: 2,
          explanation:
            "Sitting at the southern entrance to the Strait of Malacca places Singapore directly on the busiest maritime artery linking East Asia with India, the Middle East, and Europe.",
          hints: [
            "It separates the Malay Peninsula from Sumatra.",
            "Check your Southeast Asian geography!",
          ],
        },
        {
          id: "singapore-and-change-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "colony-to-self-government",
          question: "Which pair correctly names two local resistance heroes who risked torture and death during Singapore's 1942–45 Japanese Occupation?",
          options: [
            "David Marshall and Albert Winsemius",
            "Lim Kim San and Goh Keng Swee",
            "Tunku Abdul Rahman and Arthur Percival",
            "Lim Bo Seng and Elizabeth Choy",
          ],
          answerIndex: 3,
          explanation:
            "Lim Bo Seng (Force 136 resistance network) and Elizabeth Choy (who smuggled aid to Allied POWs and endured Kempeitai torture) became enduring symbols of local courage during Syonan-to.",
          hints: [
            "Remember Force 136 and the local heroine who smuggled medicine and news to Allied prisoners.",
            "The other pairs were post-war ministers, economists, or British/Malayan officials.",
          ],
        },
        {
          id: "singapore-and-change-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "colony-to-self-government",
          marks: 4,
          question: "Explain how the period 1942–1959 moved Singapore step by step from British Crown Colony to internal self-government.",
          modelAnswer:
            "First, Britain's rapid defeat on 15 February 1942 and the brutal Syonan-to occupation shattered the myth of British invincibility, convincing locals they had to govern and defend themselves. Second, post-war shortages and unrest—especially the 1950 Maria Hertogh riots and 1955 Hock Lee bus riots—exposed colonial weakness and fuelled anti-colonial activism. Third, Britain made staged constitutional concessions starting with the 1955 Rendel Constitution, which created partial self-government under Chief Minister David Marshall. Finally, in June 1959 the PAP under Lee Kuan Yew won 43 of 51 seats to secure full internal self-government over domestic affairs, though Britain retained defence and foreign affairs.",
          markScheme: [
            { point: "1942 Fall of Singapore / Syonan-to occupation shattered the myth of British invincibility.", keywords: ["1942", "invincib", "syonan", "myth", "shattered", "japanese"] },
            { point: "Post-war hardships and named unrest (Maria Hertogh 1950 and/or Hock Lee 1955) weakened colonial legitimacy.", keywords: ["maria hertogh", "hock lee", "1950", "1955", "shortages", "riots"] },
            { point: "1955 Rendel Constitution granted partial self-government (David Marshall / Lim Yew Hock).", keywords: ["rendel", "marshall", "partial", "lim yew hock", "assembly"] },
            { point: "1959 PAP victory under Lee Kuan Yew secured domestic control while Britain kept defence and foreign affairs.", keywords: ["pap", "lee kuan yew", "defence", "foreign affairs", "domestic", "43"] },
          ],
          commonError: "Calling 1959 'full independence' instead of noting that Britain still kept defence and foreign affairs.",
          hints: [
            "Walk chronologically through four links: 1942 war shock → 1950/55 unrest → 1955 Rendel → 1959 PAP.",
            "Use specific names and dates: Syonan-to, Maria Hertogh, Hock Lee, Rendel, David Marshall, Lee Kuan Yew.",
            "State clearly what Britain still kept in 1959 (defence and foreign affairs).",
          ],
        },
        {
          id: "singapore-and-change-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "merger-and-independence-1965",
          marks: 4,
          question: "Why did Singapore's 1963 Merger with Malaysia collapse into Separation on 9 August 1965? Explain at least TWO distinct categories of causes.",
          modelAnswer:
            "Merger collapsed through interacting economic, political, and communal fractures. Economically, Kuala Lumpur delayed establishing the promised Common Market while seeking to raise Singapore's federal tax contribution from 40% to 60% and close the Bank of China branch. Politically, the PAP's multiracial 'Malaysian Malaysia' campaign and entry into the 1964 federal election clashed directly with the Alliance Party's race-based Bumiputera privileges. These bitter rivalries inflamed the deadly July and September 1964 racial riots (36 killed), convincing Prime Minister Tunku Abdul Rahman that separation was the only way to avoid wider communal bloodshed.",
          markScheme: [
            { point: "Economic causes: delayed Common Market, federal tax hike (40%→60%), or Bank of China dispute.", keywords: ["common market", "40%", "60%", "tax", "revenue", "bank of china"] },
            { point: "Political/ideological clash: PAP's 'Malaysian Malaysia' / 1964 federal election vs Alliance race-based Bumiputera politics.", keywords: ["malaysian malaysia", "bumiputera", "privileges", "race-based", "alliance", "umno", "1964 election"] },
            { point: "Communal trigger: July/September 1964 racial riots (36 killed) shattering trust.", keywords: ["1964", "riots", "racial", "communal", "36", "july"] },
            { point: "Links directly to Tunku Abdul Rahman's decision for separation to prevent wider bloodshed.", keywords: ["tunku", "bloodshed", "violence", "distrust", "avoid"] },
          ],
          commonError: "Describing only political personality clashes while omitting economic disputes and the 1964 racial riots.",
          hints: [
            "Organise clearly into Economic, Political/Ideological, and Communal causes.",
            "Include specific details: Common Market, 40% to 60% tax share, 'Malaysian Malaysia', 1964 riots.",
            "Explain why Tunku Abdul Rahman ultimately concluded separation was necessary.",
          ],
        },
        {
          id: "singapore-and-change-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "economic-urban-transformation",
          marks: 4,
          question: "How did Singapore overcome the loss of Malaysia's hinterland (1965) and Britain's military withdrawal announcement (1968) to build a thriving global economy?",
          modelAnswer:
            "Losing the Common Market and roughly 20% of GDP from British bases forced Singapore to shift rapidly from entrepôt trade to export-oriented industrialisation. Through the Economic Development Board (EDB) and Dr Goh Keng Swee's Jurong Industrial Estate, Singapore actively courted global multinational corporations (MNCs) like Texas Instruments and Shell by offering clean governance, industrial peace, English-skilled workers, and tax incentives. Simultaneously, Singapore leveraged its Strait of Malacca location by investing early in PSA container berths (Tanjong Pagar, 1972) and opening Changi Airport (1981) on reclaimed land, later climbing the value chain into finance and high-tech industries.",
          markScheme: [
            { point: "Identifies the strategic economic pivot from colonial entrepôt trade to export-oriented industrialisation (noting the ~20% GDP base shock).", keywords: ["entrepot", "entrepôt", "export", "industrialisation", "20%", "gdp"] },
            { point: "Names EDB and Jurong Industrial Estate / Dr Goh Keng Swee / Albert Winsemius.", keywords: ["edb", "economic development board", "jurong", "goh keng swee", "winsemius"] },
            { point: "Explains how Singapore attracted global MNCs (clean governance, English-educated workforce, stability, tax incentives).", keywords: ["mnc", "multinational", "english", "stability", "tax", "clean", "corruption"] },
            { point: "Links to global connectivity hubs (PSA container port 1972 / Strait of Malacca / Changi Airport 1981) and climbing the value chain.", keywords: ["psa", "container", "tanjong pagar", "changi", "1981", "malacca", "value chain", "finance"] },
          ],
          commonError: "Saying 'Singapore became rich by building factories' without naming EDB, Jurong, MNCs, PSA, or Changi.",
          hints: [
            "Begin with the scale of the post-1965/1968 crisis (no Common Market + ~20% GDP from British bases).",
            "Explain EDB + Jurong + why MNCs chose Singapore.",
            "Add global hub infrastructure (PSA container port 1972 and Changi Airport 1981) plus moving into higher-skill sectors.",
          ],
        },
      ],
    },
    {
      id: "singapore-and-change-p2",
      title: "Practice Paper 2: Urban Change, Multiracialism & Combined Humanities Enquiry",
      questions: [
        {
          id: "singapore-and-change-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "society-politics-enquiry",
          question: "In what year did Singapore introduce its **Bilingual Education Policy**, teaching English alongside each student's Mother Tongue?",
          answer: { type: "number", value: 1966, display: "1966" },
          traps: [
            { spec: { type: "number", value: 1967 }, feedback: "1967 was National Service; the Bilingual Education Policy began in 1966." },
          ],
          solution: [
            "Singapore launched its **Bilingual Education Policy** in **1966**, one year after independence.",
          ],
          hints: ["One year after 1965 independence and one year before 1967 National Service."],
        },
        {
          id: "singapore-and-change-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "society-politics-enquiry",
          question: "What 4-letter anti-corruption agency reinforced meritocracy and clean governance in Singapore?",
          answer: { type: "text", accept: ["CPIB", "Corrupt Practices Investigation Bureau"], display: "CPIB" },
          solution: [
            "The **Corrupt Practices Investigation Bureau (CPIB)** enforced strict zero-tolerance anti-corruption standards, boosting public trust and MNC investment.",
          ],
          hints: ["Stands for Corrupt Practices Investigation Bureau."],
        },
        {
          id: "singapore-and-change-p2-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "society-politics-enquiry",
          question: "Which mnemonic lists the four lenses integrated in Tanglin's Term 3 Combined Humanities project?",
          options: [
            "H-P-G-E (History, Politics, Geography, Economics)",
            "M-A-I-N (Militarism, Alliances, Imperialism, Nationalism)",
            "F-E-C-P (Focus, Evidence, Context, Purpose)",
            "S-I-T (Singapore Improvement Trust)",
          ],
          answerIndex: 0,
          explanation:
            "H-P-G-E stands for History, Politics, Geography, and Economics—the four Combined Humanities lenses. MAIN is WWI causes, FECP is historical interpretations, and SIT was the colonial housing trust.",
          hints: ["Match the first letters of the four humanities subjects."],
        },
        {
          id: "singapore-and-change-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "How many months after the May 1961 Bukit Ho Swee fire did HDB begin completing new concrete flats on the devastated site?",
          answer: { type: "number", value: 9, display: "9 months" },
          solution: [
            "Under Lim Kim San's rapid emergency drive, concrete HDB flats rose on the Bukit Ho Swee site in just **9 months**.",
          ],
          hints: [
            "Less than one year—a single-digit number of months.",
            "Look back at the Section 3 discovery opener.",
          ],
        },
        {
          id: "singapore-and-change-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          question: "In the **M-B-N-E** mnemonic for Singapore's four nation-building pillars, what does **E** stand for?",
          options: [
            "Entrepôt colonial trade privileges",
            "Ethnic Integration Policy (1989 HDB quotas)",
            "East of Suez British naval bases",
            "Emergency Japanese banana-note rationing",
          ],
          answerIndex: 1,
          explanation:
            "M-B-N-E stands for Meritocracy, Bilingualism (1966), National Service (1967), and **Ethnic Integration Policy (1989)**.",
          hints: [
            "Recall the 1989 HDB housing quota policy preventing racial enclaves.",
            "M = Meritocracy, B = Bilingualism, N = National Service, E = ?",
          ],
        },
        {
          id: "singapore-and-change-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "If Singapore's land area grew from roughly 581 km² in 1965 to about 735 km² today through land reclamation, how many square kilometres of land were added?",
          answer: { type: "number", value: 154, display: "154 km²" },
          solution: [
            "Subtract the 1965 area from today's area: `735 − 581 = 154 km²`.",
            "That equals roughly a 25–26% expansion of the island's physical land area.",
          ],
          hints: [
            "Subtract 581 from 735.",
            "735 − 581 = ?",
          ],
        },
        {
          id: "singapore-and-change-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          question: "A Year 9 student drafts this Combined Humanities enquiry question: *'Tell me about Singapore's economy.'* What is the BIGGEST weakness of this question?",
          options: [
            "It focuses too narrowly on a single afternoon in 1965",
            "It asks an evaluative judgement instead of listing dates",
            "It is vague and descriptive with no timeframe, debate, or multi-lens focus",
            "It includes too many geographical and political perspectives at once",
          ],
          answerIndex: 2,
          explanation:
            "'Tell me about…' invites unfocused description rather than evidence-based argument. Strong enquiries specify a theme/timeframe and use an evaluative stem such as 'To what extent…'.",
          hints: [
            "Does 'Tell me about…' invite a debatable judgement or a loose textbook summary?",
            "Check the 3-Check Rule: debatable, focused, multi-lens.",
          ],
        },
        {
          id: "singapore-and-change-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          question: "Which Combined Humanities lens (History, Politics, Geography, or Economics) is MOST directly tested when analysing how the 1989 EIP laws balanced minority housing rights against multiracial governance?",
          answer: { type: "text", accept: ["Politics", "politics"], display: "Politics" },
          traps: [
            { spec: { type: "text", accept: ["Geography"] }, feedback: "Urban layouts are Geography, whereas laws, citizenship rights, and state governance belong primarily to **Politics**." },
          ],
          solution: [
            "Questions about laws, state policy, governance, and balancing rights with social stability sit squarely in **Politics**.",
          ],
          hints: [
            "Choose among History, Politics, Geography, and Economics.",
            "Laws, state power, and citizenship rights belong to which lens?",
          ],
        },
        {
          id: "singapore-and-change-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          question: "In which year did PSA open Singapore's first container shipping terminal at Tanjong Pagar, transforming maritime logistics?",
          options: [
            "1955",
            "1960",
            "1989",
            "1972",
          ],
          answerIndex: 3,
          explanation:
            "PSA opened the Tanjong Pagar Container Terminal in 1972—a bold early gamble on containerisation that cemented Singapore's lead on the Strait of Malacca.",
          hints: [
            "Seven years after 1965 independence and nine years before Changi Airport (1981).",
            "It took place in the early 1970s.",
          ],
        },
        {
          id: "singapore-and-change-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          question: "What two-word national defence concept—combining military, civil, economic, social, digital, and psychological readiness alongside National Service—does Singapore use to protect its sovereignty?",
          answer: { type: "text", accept: ["Total Defence", "Total Defense", "total defence"], display: "Total Defence" },
          solution: [
            "**Total Defence** mobilises the whole society—not only soldiers—to safeguard a small nation's security and resilience.",
          ],
          hints: [
            "First word means 'complete/whole' ('Total'); second word means protection ('Defence').",
            "Look back at the National Service bullet in Section 4.",
          ],
        },
        {
          id: "singapore-and-change-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          question: "Which evidence belongs primarily to the **History** lens in a Combined Humanities study of Changi Airport?",
          options: [
            "Evaluating a 1975 cabinet speech justifying moving from Paya Lebar to Changi using NOP",
            "Mapping current flight-path noise contours across eastern coastal estates",
            "Calculating aviation's share of Singapore's current GDP and tourism revenue",
            "Debating today's parliamentary carbon tax bills on jet fuel",
          ],
          answerIndex: 0,
          explanation:
            "Using NOP to evaluate a 1975 primary speech explaining causation and change over time is core History; flight-path maps are Geography, GDP share is Economics, and today's bills are Politics.",
          hints: [
            "Look for causation over time and primary-source evaluation (NOP).",
            "Separate 1975 archival evidence from maps (Geography), GDP (Economics), and current bills (Politics).",
          ],
        },
        {
          id: "singapore-and-change-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "economic-urban-transformation",
          marks: 4,
          question: "Explain how the **1961 Bukit Ho Swee fire** and **HDB public housing** reshaped Singapore both geographically and socially/politically.",
          modelAnswer:
            "The May 1961 Bukit Ho Swee fire left 16,000 squatters homeless, exposing the extreme hazards of overcrowded wooden kampungs and galvanising Lim Kim San's HDB to build concrete flats on the site within nine months. Geographically, high-rise New Towns like Queenstown and Toa Payoh replaced fire-prone slums and conserved scarce island land while integrating schools, clinics, and transit. Socially and politically, the 1964 Home Ownership Scheme—backed by CPF savings from 1968—turned ~80% of resident households into HDB residents with a direct asset and stake in national stability, though at the trade-off of losing traditional kampung communities.",
          markScheme: [
            { point: "Explains the catalyst: 1961 Bukit Ho Swee fire (16,000 homeless) spurring Lim Kim San / HDB rapid building (9 months).", keywords: ["16,000", "squatter", "lim kim san", "nine months", "9 months", "wooden", "kampung"] },
            { point: "Geographical impact: high-rise New Towns (Queenstown/Toa Payoh/Tampines) solving slums and maximising scarce land.", keywords: ["high-rise", "new towns", "scarce land", "queenstown", "toa payoh", "tampines", "slums"] },
            { point: "Social/political impact: 1964 Home Ownership + 1968 CPF giving ~80% of households an asset and stake in stability.", keywords: ["home ownership", "cpf", "1964", "1968", "80%", "stake", "stability"] },
            { point: "Includes a balanced trade-off or later social policy link (loss of kampung heritage OR 1989 EIP multiracial quotas).", keywords: ["trade-off", "heritage", "displaced", "eip", "ethnic integration", "1989", "enclaves"] },
          ],
          commonError: "Describing only the fire without explaining New Town urban planning, CPF Home Ownership, or social trade-offs.",
          hints: [
            "Start with the 1961 fire (16,000 homeless) and Lim Kim San's 9-month rebuild.",
            "Include Geography (high-rise New Towns on scarce land) AND Politics/Economics (1964 Home Ownership + 1968 CPF → citizen stake).",
            "Add one balanced point on trade-offs (kampung heritage lost) or 1989 EIP integration.",
          ],
        },
        {
          id: "singapore-and-change-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          marks: 4,
          question: "Explain how TWO of Singapore's post-1965 nation-building policies (choose from meritocracy, bilingualism, National Service, or HDB EIP) aimed to unite a diverse population—and identify ONE ongoing challenge or trade-off.",
          modelAnswer:
            "First, the 1966 Bilingual Education Policy made English the neutral common working language connecting ethnic groups and global MNCs, while Mother Tongue lessons (Mandarin, Malay, Tamil) preserved cultural roots. Second, the 1989 HDB Ethnic Integration Policy (EIP) imposed block and estate ethnic quotas to prevent racial enclaves like those seen before the 1964 riots, fostering everyday mixing in shared estates. Compulsory National Service (1967) similarly mixed youths across backgrounds while building Total Defence. However, trade-offs remain: EIP quotas can occasionally narrow minority homeowners' resale buyer pool, and unequal family wealth sparks ongoing debate over keeping meritocracy truly fair.",
          markScheme: [
            { point: "Policy 1 explained accurately with mechanism (e.g. 1966 Bilingualism: neutral English + Mother Tongue heritage, OR Meritocracy: ability over race/CPIB).", keywords: ["english", "mother tongue", "1966", "ability", "effort", "cpib", "neutral"] },
            { point: "Policy 2 explained accurately with mechanism (e.g. 1967 NS: shared barracks/Total Defence, OR 1989 EIP: block quotas preventing enclaves).", keywords: ["1967", "defence", "barracks", "1989", "quotas", "enclaves", "mixing"] },
            { point: "Connects policies explicitly to historical context (post-1964 racial riots / post-1965 survival / colonial divisions).", keywords: ["1964", "riots", "unity", "cohesion", "survival", "identity", "multiracial"] },
            { point: "Evaluates a realistic ongoing trade-off or debate (EIP resale limits, meritocracy & wealth inequality, or heritage/language loss).", keywords: ["resale", "buyer", "inequality", "wealth", "tuition", "trade-off", "debate", "fair"] },
          ],
          commonError: "Naming two policies without explaining *how* they promoted unity or forgetting to include a balanced trade-off.",
          hints: [
            "Pick two policies from M-B-N-E and state their dates and exact mechanisms.",
            "Link back to the historical memory of the 1964 riots or post-1965 vulnerability.",
            "Include one realistic modern trade-off (e.g. EIP resale pool limits or wealth gaps in meritocracy).",
          ],
        },
        {
          id: "singapore-and-change-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "society-politics-enquiry",
          marks: 4,
          question: "A classmate plans a Year 9 Combined Humanities project titled: *'When was Jurong Industrial Estate built and what factories are there?'* Diagnose why this title is weak, rewrite it into a strong evaluative enquiry question, and show how TWO different humanities lenses will answer it.",
          modelAnswer:
            "The draft title is weak because it asks closed descriptive facts with no debate, timeframe of evaluation, or multi-lens judgement. A stronger enquiry question is: 'To what extent did Jurong Industrial Estate successfully balance rapid economic growth with environmental and urban sustainability between 1961 and 2025?' Through the Economics lens, I would analyse EDB tax incentives, MNC investment, job creation, and the shift from basic factories to high-value manufacturing. Through the Geography lens, I would examine coastal land reclamation, clearing of mangrove swamps, industrial zoning away from housing, and modern Green Plan 2030 sustainability challenges.",
          markScheme: [
            { point: "Diagnoses why the draft title is weak (closed/descriptive trivia with no debate or evaluation).", keywords: ["closed", "descriptive", "no debate", "factual", "trivia", "no evaluation"] },
            { point: "Rewrites into a focused, debatable evaluative enquiry question using stems like 'To what extent…' or 'How successfully…'.", keywords: ["to what extent", "how successfully", "how far", "balance", "evaluate"] },
            { point: "Explains concrete evidence from Lens 1 (e.g. Economics: EDB, MNCs, jobs, export growth; OR History: 1961/1965 crisis, Dr Goh Keng Swee, NOP sources).", keywords: ["economics", "edb", "mnc", "jobs", "export", "history", "goh keng swee", "1965", "nop"] },
            { point: "Explains concrete evidence from a SECOND distinct lens (e.g. Geography: swamp reclamation, zoning, environment/Green Plan 2030; OR Politics: state planning, labour laws).", keywords: ["geography", "reclamation", "mangrove", "swamp", "sustainability", "green plan", "politics", "planning"] },
          ],
          commonError: "Rewriting the title into another factual question ('Why did Jurong grow?') instead of an evaluative 'To what extent…' enquiry.",
          hints: [
            "First explain what is wrong with 'When… and what…?' (closed factual recall, zero debate).",
            "Start your upgraded question with 'To what extent…' or 'How successfully…' and include a clear timeframe.",
            "Show specific evidence from TWO named lenses (e.g. Economics + Geography, or History + Politics).",
          ],
        },
        {
          id: "singapore-and-change-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "economic-urban-transformation",
          marks: 4,
          question: "Using BOTH Geography and Economics lenses, explain how Singapore turned physical resource scarcity (tiny island land and no freshwater rivers) into strengths—and identify ONE environmental or economic trade-off.",
          modelAnswer:
            "Geographically, Singapore overcame tiny land size through coastal land reclamation—expanding from ~581 km² in 1965 to ~735 km² today (~25% growth) to create Marina Bay, Changi Airport (1981), and Tuas Mega Port—and solved water vulnerability through the Four National Taps, including ultra-clean NEWater and desalination. Economically, investing heavily in these world-class hubs turned Singapore's strategic Strait of Malacca position into high-value aviation, maritime transhipment (PSA), and MNC investment, massively raising GDP and employment. However, major trade-offs include the high energy cost of desalination, reliance on imported sand affecting regional coastal ecosystems, and loss of natural mangroves and coastal habitats.",
          markScheme: [
            { point: "Geography solution: land reclamation (~581→735 km² / +25%) AND/OR Four National Taps (NEWater, desalination, catchment).", keywords: ["reclamation", "581", "735", "25%", "four national taps", "newater", "desalination"] },
            { point: "Economics solution: leveraging Strait of Malacca / Changi / PSA / MNC hubs to grow trade, jobs, and GDP.", keywords: ["changi", "psa", "malacca", "mnc", "gdp", "trade", "hub", "transhipment", "jobs"] },
            { point: "Explicitly integrates how physical engineering enabled economic competitiveness.", keywords: ["overcame", "strategic", "competit", "enabled", "invest", "scarcity"] },
            { point: "Evaluates a realistic environmental or economic trade-off (sand imports, marine/mangrove loss, desalination energy/carbon costs).", keywords: ["sand", "mangrove", "marine", "energy", "cost", "carbon", "habitat", "ecosystem", "trade-off"] },
          ],
          commonError: "Writing only about Geography (water/reclamation) without connecting to Economics (ports, MNCs, cost trade-offs).",
          hints: [
            "Include concrete Geography facts: ~581 → ~735 km² (+25% reclamation) and the Four National Taps (NEWater/desalination).",
            "Connect directly to Economics: Changi Airport, PSA port on the Strait of Malacca, MNC jobs, and hub competitiveness.",
            "Conclude with a concrete environmental or cost trade-off (e.g. imported sand, mangrove loss, or energy-intensive desalination).",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "singapore-and-change-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "colony-to-self-government",
      question: "Comparing Britain's withdrawal from India (1947) and Singapore (1955–63), why did Singapore achieve full sovereignty via a **different constitutional path** from India?",
      options: [
        "Singapore fought a prolonged ten-year guerrilla war against British forces until 1965",
        "Britain steered small Singapore through 1959 self-government into 1963 Merger first",
        "Singapore remained directly governed as a British Crown Colony until the late 1980s",
        "British India merged into Malaysia in 1963 before separating peacefully two years later",
      ],
      answerIndex: 1,
      explanation:
        "Unlike vast India (which became sovereign directly in 1947 alongside Partition), Cold War Britain doubted tiny Singapore's viability and pushed decolonisation through staged 1955/1959 self-government and 1963 Merger with Malaysia—making 1965 independence an unplanned separation.",
      hints: [
        "Contrast direct 1947 decolonisation in India with Singapore's 1959 → 1963 Merger → 1965 Separation route.",
        "Why did London hesitate to grant tiny Singapore immediate standalone sovereignty in 1959?",
      ],
    },
    {
      id: "singapore-and-change-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "merger-and-independence-1965",
      question: "Roughly what percentage of Singapore's GDP was generated by British military bases prior to Britain's 1968 'East of Suez' withdrawal announcement? (Give a number.)",
      answer: { type: "number", value: 20, display: "20%" },
      solution: [
        "British naval and air bases contributed roughly **20%** (one-fifth) of Singapore's GDP and employed tens of thousands of workers, making the 1968 withdrawal announcement an acute economic emergency.",
      ],
      hints: [
        "It was roughly one-fifth of the entire economy.",
        "A multiple of 10 between 10 and 30.",
      ],
    },
    {
      id: "singapore-and-change-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "merger-and-independence-1965",
      question: "During Merger (1963–65), Kuala Lumpur proposed raising Singapore's federal revenue contribution from 40% to what percentage, deepening economic friction? (Give a number.)",
      answer: { type: "number", value: 60, display: "60%" },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "40% was the original agreed share; Kuala Lumpur proposed raising it to 60%." },
      ],
      solution: [
        "Kuala Lumpur proposed lifting Singapore's contribution to federal funds from 40% to **60%**, while simultaneously delaying the promised Common Market.",
      ],
      hints: [
        "It jumped by 20 percentage points above 40%.",
        "40 + 20 = ?",
      ],
    },
    {
      id: "singapore-and-change-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "society-politics-enquiry",
      question: "A historian cross-references two primary sources from August 1965: (1) Lee Kuan Yew's televised separation broadcast in Singapore; (2) Tunku Abdul Rahman's speech to the Malaysian Parliament in Kuala Lumpur. Using NOP, why are BOTH sources essential together?",
      options: [
        "One broadcast is a primary source while the other is a modern museum interpretation",
        "Official parliamentary speeches by leaders never have any political purpose or audience",
        "Each reflects its leader's audience—contrasting Singaporean survival and KL riot fears",
        "Both Prime Ministers were actually debating the 1955 Rendel Constitution instead",
      ],
      answerIndex: 2,
      explanation:
        "Applying Term 2 NOP skills to Term 3 Singapore History: Lee spoke to reassure shocked Singaporeans while projecting determination, whereas Tunku spoke to Malaysian MPs justifying separation to prevent racial violence—cross-referencing both illuminates both sides of 9 August 1965.",
      hints: [
        "Compare the Purpose and target audience of each Prime Minister on 9 August 1965.",
        "Why does cross-referencing Singaporean and Malaysian perspectives beat relying on only one speech?",
      ],
    },
    {
      id: "singapore-and-change-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "economic-urban-transformation",
      question: "Before HDB was created in 1960, what 3-letter British colonial housing agency had built only ~23,000 flats across 32 years?",
      answer: { type: "text", accept: ["SIT", "Singapore Improvement Trust"], display: "SIT (Singapore Improvement Trust)" },
      traps: [
        { spec: { type: "text", accept: ["HDB"] }, feedback: "HDB (1960) was the post-1959 statutory board that replaced the slow colonial agency (SIT)." },
      ],
      solution: [
        "The colonial **Singapore Improvement Trust (SIT)** built only ~23,000 units in 32 years, whereas HDB built over 50,000 flats in its first five years alone.",
      ],
      hints: [
        "Stands for Singapore Improvement Trust.",
        "It built iconic art-deco walk-up flats in Tiong Bahru before HDB took over in 1960.",
      ],
    },
    {
      id: "singapore-and-change-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "merger-and-independence-1965",
      marks: 4,
      question: "Source A is an excerpt from Prime Minister Lee Kuan Yew's televised press conference on 9 August 1965: *'For me, it is a moment of anguish. All my life, my whole adult life, I have believed in merger and the unity of the two territories.'* Evaluate how useful Source A is for a historian studying the 1965 Separation using NOP and Own Knowledge.",
      modelAnswer:
        "Source A is exceptionally useful for revealing the genuine shock and anxiety of Singapore's leadership on the day of Separation. Its origin—spoken live by Prime Minister Lee Kuan Yew on 9 August 1965—and unscripted emotional tone corroborate own knowledge that Singapore had fought hard for Merger to gain a Common Market and faced sudden isolation without an army or natural resources. However, its nature as a public televised press conference with the purpose of reassuring shaken citizens and signalling goodwill abroad means it omits sharper behind-the-scenes disputes—such as Kuala Lumpur's 60% tax demand, the 'Malaysian Malaysia' clash, and Tunku Abdul Rahman's perspective after the 1964 riots—so historians must cross-reference it with Malaysian parliamentary records.",
      markScheme: [
        { point: "Analyses Origin & Tone/Content (Lee Kuan Yew speaking live on 9 Aug 1965; emotional 'moment of anguish' reveals genuine shock/unplanned exit).", keywords: ["anguish", "live", "unscripted", "shock", "anxiety", "unplanned", "emotion"] },
        { point: "Tests with Own Knowledge confirming why he was anxious (loss of Common Market, no army, no resources, Konfrontasi).", keywords: ["common market", "army", "resources", "konfrontasi", "hinterland", "own knowledge"] },
        { point: "Evaluates Nature & Purpose limits (public broadcast aiming to reassure citizens/manage diplomacy → omits full disputes like 60% tax / Malaysian Malaysia / 1964 riots).", keywords: ["public", "broadcast", "purpose", "reassure", "omit", "malaysian malaysia", "1964", "60%"] },
        { point: "Balanced utility judgement recommending cross-referencing with Malaysian/Tunku perspectives.", keywords: ["useful for", "cross-referenc", "tunku", "malaysian", "both", "however"] },
      ],
      commonError: "Saying the speech is 'biased and useless' because Lee Kuan Yew cried, or accepting it without noting what a public broadcast omits.",
      hints: [
        "Connect Term 2's C + NOP + OK method directly to Term 3 Singapore History!",
        "State clearly what the unscripted emotion IS useful for showing (corroborated by Own Knowledge of 1965 vulnerabilities).",
        "Identify what a public diplomatic broadcast leaves out and why cross-referencing with Kuala Lumpur's view matters.",
      ],
    },
    {
      id: "singapore-and-change-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "society-politics-enquiry",
      marks: 4,
      question: "Design a complete 4-lens Combined Humanities research plan for the enquiry: *'To what extent has Singapore's transformation since 1965 been a model of sustainable success?'* Give ONE concrete piece of evidence or analytical point for EACH of the four lenses (History, Politics, Geography, Economics).",
      modelAnswer:
        "History: Compare the 1961 Bukit Ho Swee squatter crisis and 1965 Separation speeches (tested with NOP) against later housing and sovereignty milestones to measure continuity and change over sixty years. Politics: Evaluate how strong state planning, meritocracy, National Service (1967), and the 1989 HDB Ethnic Integration Policy built multiracial stability alongside ongoing debates over civic voice and minority resale limits. Geography: Assess how coastal land reclamation (~581 to ~735 km²), HDB New Towns, Four National Taps (NEWater), and the Singapore Green Plan 2030 overcome tiny island scarcity while balancing mangrove loss and sea-level rise. Economics: Analyse how EDB industrialisation, Jurong MNCs, PSA port, and Changi Airport lifted living standards from entrepôt vulnerability, balanced against rising living costs and an ageing workforce.",
      markScheme: [
        { point: "History lens: concrete historical evidence/skill (change over time, 1961 Bukit Ho Swee, 1965 Separation, or NOP primary sources).", keywords: ["bukit ho swee", "1965", "separation", "nop", "primary", "continuity", "change over time"] },
        { point: "Politics lens: concrete governance/social policy evidence (meritocracy, NS 1967, EIP 1989, state planning, rights vs stability).", keywords: ["meritocracy", "national service", "1967", "eip", "1989", "governance", "civic", "multiracial"] },
        { point: "Geography lens: concrete spatial/environmental evidence (reclamation, New Towns, Four National Taps/NEWater, Green Plan 2030, sea-level/mangroves).", keywords: ["reclamation", "735", "newater", "four national taps", "green plan", "mangrove", "sea-level", "new towns"] },
        { point: "Economics lens: concrete resource/growth evidence (EDB, Jurong, MNCs, PSA, Changi, GDP/living costs/ageing workforce).", keywords: ["edb", "jurong", "mnc", "psa", "changi", "gdp", "living costs", "ageing", "entrepot", "entrepôt"] },
      ],
      commonError: "Blending all four points into vague general statements without naming specific Singapore policies, dates, or data under each distinct lens.",
      hints: [
        "Use four clear labels: History, Politics, Geography, Economics.",
        "Put at least two concrete Singapore facts/policies under every single lens.",
        "Include both achievements AND a trade-off/challenge so your plan truly answers 'To what extent…'.",
      ],
    },
    {
      id: "singapore-and-change-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "economic-urban-transformation",
      marks: 4,
      question: "'Singapore's post-1965 survival owed more to bold government policies (EDB, HDB, NS, EIP) than to its strategic geographical location.' Write a balanced Combined Humanities judgement weighing BOTH sides.",
      modelAnswer:
        "Singapore's strategic position on the Strait of Malacca undeniably gave it a huge head start: major East-West shipping lanes fed colonial entrepôt trade and later made PSA's Tanjong Pagar container terminal (1972) and Changi Airport (1981) globally competitive. However, geography alone did not guarantee prosperity—other regional ports share the same sea lane, and Singapore suffered severe geographical handicaps including tiny land area, zero minerals, and imported water dependence. Bold state policies unlocked that location: Dr Goh Keng Swee's EDB and Jurong estate attracted MNCs through clean CPIB governance, HDB and CPF built social stability, and National Service plus the 1989 EIP safeguarded security and multiracial harmony. Overall, strategic geography provided the opportunity, but visionary, disciplined policy was more decisive in turning vulnerability into sustained success.",
      markScheme: [
        { point: "Weighs strategic geography with concrete evidence (Strait of Malacca shipping lanes, entrepôt roots, PSA 1972, Changi 1981).", keywords: ["malacca", "shipping", "entrepot", "entrepôt", "psa", "1972", "changi", "1981"] },
        { point: "Notes geographical handicaps / why location alone was insufficient (tiny area, no minerals/oil, water scarcity, rival regional ports).", keywords: ["minerals", "handicap", "water", "scarcity", "rival", "alone", "tiny"] },
        { point: "Weighs bold state policies with concrete evidence (EDB/Jurong/MNCs, CPIB clean governance, HDB/CPF, NS/EIP).", keywords: ["edb", "jurong", "mnc", "cpib", "hdb", "cpf", "national service", "eip", "1989"] },
        { point: "Reaches an explicit, reasoned overall judgement integrating both factors.", keywords: ["overall", "decisive", "opportunity", "more important", "judgement", "combined"] },
      ],
      commonError: "Picking one factor exclusively instead of evaluating how policy unlocked geographical potential while overcoming geographical scarcity.",
      hints: [
        "Argue FOR geography first: Strait of Malacca → entrepôt → PSA (1972) & Changi (1981).",
        "Counter with geography's severe limits (no oil/minerals, water vulnerability) and show how specific policies (EDB, HDB/CPF, CPIB, NS, EIP) made the decisive difference.",
        "Finish with a clear 'Overall…' comparative judgement.",
      ],
    },
  ],
};
