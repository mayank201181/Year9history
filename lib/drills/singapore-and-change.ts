import type { Drill } from "./types.ts";

interface Milestone {
  year: number;
  label: string;
  accept: string[];
  desc: string;
}

const MILESTONES: Milestone[] = [
  {
    year: 1942,
    label: "Fall of Singapore",
    accept: ["Fall of Singapore", "Japanese Occupation", "Syonan-to"],
    desc: "British forces surrendered Singapore to Imperial Japan on 15 February, shattering the myth of British invincibility",
  },
  {
    year: 1945,
    label: "End of Japanese Occupation",
    accept: ["End of Japanese Occupation", "British return", "end of occupation", "surrender of Japan"],
    desc: "Imperial Japan surrendered and the British Military Administration returned to post-war Singapore",
  },
  {
    year: 1950,
    label: "Maria Hertogh riots",
    accept: ["Maria Hertogh riots", "Maria Hertogh", "Hertogh riots"],
    desc: "a colonial court custody ruling sparked deadly racial and religious unrest, exposing British insensitivity",
  },
  {
    year: 1954,
    label: "Founding of the PAP",
    accept: ["Founding of the PAP", "PAP founded", "PAP"],
    desc: "Lee Kuan Yew and allies founded the People's Action Party to campaign against colonial rule",
  },
  {
    year: 1955,
    label: "Rendel Constitution",
    accept: ["Rendel Constitution", "Rendel", "Hock Lee bus riots", "Hock Lee"],
    desc: "constitutional reforms created Singapore's first majority-elected assembly with David Marshall as Chief Minister (the same year as the Hock Lee bus riots)",
  },
  {
    year: 1959,
    label: "Internal Self-Government",
    accept: ["Internal Self-Government", "Self-Government", "1959 Self-Government"],
    desc: "the PAP won 43 of 51 seats and Lee Kuan Yew became Prime Minister controlling domestic affairs",
  },
  {
    year: 1960,
    label: "Founding of HDB",
    accept: ["Founding of HDB", "HDB founded", "HDB"],
    desc: "the Housing & Development Board was created under Lim Kim San to replace the slow colonial SIT",
  },
  {
    year: 1961,
    label: "Bukit Ho Swee fire & EDB",
    accept: ["Bukit Ho Swee fire", "Bukit Ho Swee", "EDB", "Bukit Ho Swee fire & EDB"],
    desc: "a massive squatter fire left 16,000 homeless and the Economic Development Board (EDB) was founded",
  },
  {
    year: 1963,
    label: "Merger with Malaysia",
    accept: ["Merger with Malaysia", "Merger", "Formation of Malaysia"],
    desc: "Singapore joined Malaya, Sabah, and Sarawak on 16 September seeking a Common Market and decolonisation",
  },
  {
    year: 1964,
    label: "1964 Racial Riots",
    accept: ["1964 Racial Riots", "Racial Riots", "Home Ownership Scheme"],
    desc: "bloody July and September communal riots killed 36 people during Merger (the same year HDB launched Home Ownership)",
  },
  {
    year: 1965,
    label: "Separation & Independence",
    accept: ["Separation & Independence", "Separation", "Independence"],
    desc: "Singapore exited Malaysia on 9 August to become an independent sovereign republic",
  },
  {
    year: 1966,
    label: "Bilingual Education Policy",
    accept: ["Bilingual Education Policy", "Bilingualism", "Bilingual Policy"],
    desc: "schools adopted compulsory English alongside Mother Tongue languages for unity and global trade",
  },
  {
    year: 1967,
    label: "National Service",
    accept: ["National Service", "NS"],
    desc: "compulsory two-year military service was introduced to build a citizen defence force and national unity",
  },
  {
    year: 1972,
    label: "Tanjong Pagar Container Terminal",
    accept: ["Tanjong Pagar Container Terminal", "Tanjong Pagar", "PSA Container Terminal"],
    desc: "PSA opened Singapore's first container shipping berths, cementing maritime leadership on the Strait of Malacca",
  },
  {
    year: 1981,
    label: "Opening of Changi Airport",
    accept: ["Opening of Changi Airport", "Changi Airport", "Changi"],
    desc: "Singapore's new international airport opened on reclaimed coastal land, replacing cramped Paya Lebar",
  },
  {
    year: 1989,
    label: "HDB Ethnic Integration Policy",
    accept: ["HDB Ethnic Integration Policy", "Ethnic Integration Policy", "EIP"],
    desc: "ethnic quotas were introduced in HDB blocks and estates to prevent racial enclaves from re-forming",
  },
];

interface MergerCause {
  clue: string;
  category: "Economic" | "Political" | "Communal";
  stage: "Merger" | "Separation" | "Post-1965";
  stageAccept: string[];
  detail: string;
}

const MERGER_CAUSES: MergerCause[] = [
  {
    clue: "Singapore sought tariff-free access to Malaya's larger hinterland through a Common Market",
    category: "Economic",
    stage: "Merger",
    stageAccept: ["Merger", "Why Merger", "1963"],
    detail: "Securing a Common Market was Singapore's primary economic motive for joining Malaysia in 1963.",
  },
  {
    clue: "Kuala Lumpur delayed establishing the promised Common Market after September 1963",
    category: "Economic",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "Delayed Common Market implementation created severe economic frustration during Merger.",
  },
  {
    clue: "The federal government proposed raising Singapore's revenue contribution from 40% to 60%",
    category: "Economic",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "Disputes over federal tax contributions were a major economic fracture pushing Separation.",
  },
  {
    clue: "Kuala Lumpur ordered the closure of Singapore's Bank of China branch",
    category: "Economic",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "Closing the Bank of China threatened Singapore's regional trade finance—an economic dispute.",
  },
  {
    clue: "Britain announced its 1968 'East of Suez' military withdrawal threatening roughly 20% of Singapore's GDP",
    category: "Economic",
    stage: "Post-1965",
    stageAccept: ["Post-1965", "Post-1965 Crisis", "After 1965"],
    detail: "Losing British base jobs and ~20% of GDP was a grave post-1965 economic shock.",
  },
  {
    clue: "High unemployment and declining colonial entrepôt trade pushed Singapore to look for a larger domestic market",
    category: "Economic",
    stage: "Merger",
    stageAccept: ["Merger", "Why Merger", "1963"],
    detail: "Economic vulnerability made Merger look essential before 1963.",
  },
  {
    clue: "The PAP launched its 'Malaysian Malaysia' campaign demanding equal citizenship rights regardless of race",
    category: "Political",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "'Malaysian Malaysia' clashed directly with the federal Alliance Party's race-based political system.",
  },
  {
    clue: "The PAP broke an informal understanding by contesting seats in the 1964 Malaysian federal election",
    category: "Political",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "Electoral rivalry between the PAP and UMNO/MCA was a major political cause of Separation.",
  },
  {
    clue: "Britain would only grant Singapore full decolonisation if it merged into a wider Malaysian federation",
    category: "Political",
    stage: "Merger",
    stageAccept: ["Merger", "Why Merger", "1963"],
    detail: "Achieving independence from British rule was a central political motive for 1963 Merger.",
  },
  {
    clue: "Tunku Abdul Rahman feared an independent Singapore might turn communist, leading to Operation Coldstore (1963)",
    category: "Political",
    stage: "Merger",
    stageAccept: ["Merger", "Why Merger", "1963"],
    detail: "Cold War anti-communist security concerns persuaded Malaya to accept Merger alongside Sabah and Sarawak.",
  },
  {
    clue: "Newly independent Singapore had only two small infantry battalions and urgently needed to build National Service",
    category: "Political",
    stage: "Post-1965",
    stageAccept: ["Post-1965", "Post-1965 Crisis", "After 1965"],
    detail: "Lack of a standing defence force was an urgent post-1965 sovereignty crisis.",
  },
  {
    clue: "Bloody Chinese–Malay riots erupted during the 21 July 1964 Prophet Muhammad's Birthday procession",
    category: "Communal",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "The July 1964 racial riots were a decisive communal flashpoint shattering trust.",
  },
  {
    clue: "Renewed September 1964 racial riots brought the death toll to 36 and led to island-wide curfews",
    category: "Communal",
    stage: "Separation",
    stageAccept: ["Separation", "Why Separation", "1965"],
    detail: "Recurring communal violence convinced Tunku Abdul Rahman that separation was needed to avoid wider bloodshed.",
  },
  {
    clue: "Tunku initially hesitated over Merger because Singapore's Chinese majority would alter Malaya's ethnic balance",
    category: "Communal",
    stage: "Merger",
    stageAccept: ["Merger", "Why Merger", "1963"],
    detail: "Communal demographic worries explained why Sabah and Sarawak were added to Malaysia in 1963.",
  },
  {
    clue: "After 1965, leaders feared separate racial enclaves could spark fresh communal violence unless new policies fostered mixing",
    category: "Communal",
    stage: "Post-1965",
    stageAccept: ["Post-1965", "Post-1965 Crisis", "After 1965"],
    detail: "Post-1965 communal fragility drove bilingualism, National Service, and eventually the 1989 HDB EIP.",
  },
];

interface KeyFactRecall {
  clue: string;
  answer: string;
  accept: string[];
  solution: string;
  hint: string;
}

const KEY_RECALLS: KeyFactRecall[] = [
  { clue: "the tariff-free regional market Singapore hoped Merger with Malaysia would guarantee", answer: "Common Market", accept: ["Common Market", "a common market"], solution: "Singapore pursued a **Common Market** with Malaysia.", hint: "Two words: 'Common ______'." },
  { clue: "the PAP's multiracial slogan demanding equal rights regardless of race during Merger", answer: "Malaysian Malaysia", accept: ["Malaysian Malaysia"], solution: "The PAP championed **Malaysian Malaysia**.", hint: "Two words repeating Malaysia." },
  { clue: "the Malayan/Malaysian Prime Minister who proposed Merger (1961) and decided on Separation (1965)", answer: "Tunku Abdul Rahman", accept: ["Tunku Abdul Rahman", "Tunku", "Abdul Rahman"], solution: "**Tunku Abdul Rahman** led Malaya and Malaysia during Merger and Separation.", hint: "Starts with 'Tunku'." },
  { clue: "the February 1963 internal security sweep that detained over 100 left-wing figures before Merger", answer: "Operation Coldstore", accept: ["Operation Coldstore", "Coldstore"], solution: "**Operation Coldstore** occurred in February 1963.", hint: "Operation ____store." },
  { clue: "Indonesia's 1963–1966 campaign of trade boycotts and sabotage (including the 1965 MacDonald House bombing)", answer: "Konfrontasi", accept: ["Konfrontasi", "Confrontation"], solution: "Indonesia's opposition to Malaysia was called **Konfrontasi**.", hint: "Indonesian word for Confrontation (starts with K)." },
  { clue: "the 1955 constitutional reform creating Singapore's first majority-elected assembly", answer: "Rendel Constitution", accept: ["Rendel Constitution", "Rendel"], solution: "The **Rendel Constitution** (1955) granted partial self-government.", hint: "Named after Sir George Rendel." },
  { clue: "Singapore's first Chief Minister from the Labour Front in 1955", answer: "David Marshall", accept: ["David Marshall", "Marshall"], solution: "**David Marshall** became Chief Minister in 1955.", hint: "Surname: Marshall." },
  { clue: "Singapore's first Head of State (Yang di-Pertuan Negara, 1959) and first President (1965)", answer: "Yusof bin Ishak", accept: ["Yusof bin Ishak", "Yusof Ishak"], solution: "**Yusof bin Ishak** was Singapore's first President.", hint: "Featured on Singapore banknotes." },
  { clue: "the name Imperial Japan gave occupied Singapore ('Light of the South', 1942–1945)", answer: "Syonan-to", accept: ["Syonan-to", "Syonan", "Syonanto"], solution: "Occupied Singapore was renamed **Syonan-to**.", hint: "Starts with 'Syonan'." },
  { clue: "the December 1950 custody crisis that triggered deadly racial and religious riots", answer: "Maria Hertogh riots", accept: ["Maria Hertogh riots", "Maria Hertogh", "Hertogh riots"], solution: "The **Maria Hertogh riots** took place in December 1950.", hint: "Named after the Dutch girl in the court dispute." },
  { clue: "the May 1955 strike by bus workers and Chinese middle-school students", answer: "Hock Lee bus riots", accept: ["Hock Lee bus riots", "Hock Lee", "Hock Lee riots"], solution: "The **Hock Lee bus riots** broke out in May 1955.", hint: "Named after the Hock Lee bus company." },
  { clue: "the strategic phrase for Britain's 1968 announcement withdrawing military bases from Singapore", answer: "East of Suez", accept: ["East of Suez", "East of Suez withdrawal"], solution: "Britain announced its **East of Suez** withdrawal in January 1968.", hint: "Three words: 'East of ____'." },
  { clue: "the Force 136 resistance hero captured and killed by Japanese forces during the Occupation", answer: "Lim Bo Seng", accept: ["Lim Bo Seng"], solution: "**Lim Bo Seng** was a celebrated Force 136 resistance hero.", hint: "His memorial stands at the Esplanade." },
  { clue: "Singapore's first Prime Minister elected under 1959 internal self-government", answer: "Lee Kuan Yew", accept: ["Lee Kuan Yew", "LKY"], solution: "**Lee Kuan Yew** became Prime Minister in June 1959.", hint: "Co-founder of the PAP (initials LKY)." },
  { clue: "the exact year deadly July and September racial riots killed 36 people inside Malaysia", answer: "1964", accept: ["1964"], solution: "The Merger-era racial riots erupted in **1964**.", hint: "Between 1963 Merger and 1965 Separation." },
  { clue: "the exact date of Singapore's Separation from Malaysia and full independence (Day Month Year)", answer: "9 August 1965", accept: ["9 August 1965", "9 Aug 1965", "August 9 1965", "9th August 1965"], solution: "Singapore became sovereign on **9 August 1965**.", hint: "Singapore's National Day plus the year 1965." },
];

interface TransformItem {
  clue: string;
  problemSolved: string;
  answer: string;
  accept: string[];
  detail: string;
}

const TRANSFORM_ITEMS: TransformItem[] = [
  {
    clue: "the 1961 statutory board advised by Albert Winsemius to attract global MNCs",
    problemSolved: "high unemployment and loss of Malaysia's Common Market after 1965",
    answer: "EDB",
    accept: ["EDB", "Economic Development Board"],
    detail: "The Economic Development Board (EDB) spearheaded export-oriented industrialisation.",
  },
  {
    clue: "western Singapore swampland turned into factories by Dr Goh Keng Swee (mocked early as 'Goh's Folly')",
    problemSolved: "lack of industrial factory sites for manufacturing jobs",
    answer: "Jurong Industrial Estate",
    accept: ["Jurong Industrial Estate", "Jurong", "Jurong Estate"],
    detail: "Jurong Industrial Estate anchored Singapore's manufacturing transformation.",
  },
  {
    clue: "the 1960 housing board led by Lim Kim San that built concrete flats within 9 months of a major fire",
    problemSolved: "overcrowded, unsanitary, fire-prone squatter slums and shophouses",
    answer: "HDB",
    accept: ["HDB", "Housing and Development Board", "Housing & Development Board"],
    detail: "HDB cleared slums and today houses roughly 80% of resident households.",
  },
  {
    clue: "the May 1961 squatter settlement fire that left 16,000 people homeless overnight",
    problemSolved: "slum fire danger exposed in May 1961 that accelerated urgent HDB building",
    answer: "Bukit Ho Swee",
    accept: ["Bukit Ho Swee", "Bukit Ho Swee fire"],
    detail: "The 1961 Bukit Ho Swee fire catalysed rapid public housing construction.",
  },
  {
    clue: "the mandatory retirement savings fund unlocked in 1968 so families could buy HDB flats",
    problemSolved: "working families unable to pay cash down payments for the 1964 Home Ownership Scheme",
    answer: "CPF",
    accept: ["CPF", "Central Provident Fund"],
    detail: "Central Provident Fund (CPF) savings made mass home ownership affordable.",
  },
  {
    clue: "the port authority that opened East Asia's early container berths at Tanjong Pagar in 1972",
    problemSolved: "modernising maritime shipping along the Strait of Malacca for container trade",
    answer: "PSA",
    accept: ["PSA", "Port of Singapore Authority", "PSA port"],
    detail: "PSA bet early on containerisation (1972), growing toward Tuas Mega Port.",
  },
  {
    clue: "the international airport opened on reclaimed coastal land in 1981 to replace cramped Paya Lebar",
    problemSolved: "hemmed-in inland runway space and residential aircraft noise at Paya Lebar",
    answer: "Changi Airport",
    accept: ["Changi Airport", "Changi"],
    detail: "Changi Airport (1981) turned coastal reclaimed land into a premier global aviation hub.",
  },
  {
    clue: "ultra-clean membrane-purified reclaimed water forming part of Singapore's Four National Taps",
    problemSolved: "heavy dependence on imported freshwater from Johor",
    answer: "NEWater",
    accept: ["NEWater", "newater"],
    detail: "NEWater strengthens water independence alongside catchment, imports, and desalination.",
  },
  {
    clue: "expanding Singapore's coastline from ~581 km² in 1965 to ~735 km² today (+25% area)",
    problemSolved: "severe physical land scarcity for Marina Bay, Changi, Jurong Island, and Tuas",
    answer: "land reclamation",
    accept: ["land reclamation", "reclamation"],
    detail: "Coastal land reclamation expanded Singapore's area by roughly a quarter since 1965.",
  },
  {
    clue: "the colonial model of importing raw regional goods like rubber and tin and re-exporting them without factories",
    problemSolved: "an older trade structure that could not generate enough jobs after 1965",
    answer: "entrepôt trade",
    accept: ["entrepot trade", "entrepôt trade", "entrepot", "entrepôt"],
    detail: "Singapore pivoted away from pure entrepôt trade toward export-led manufacturing and services.",
  },
  {
    clue: "foreign global companies (such as Texas Instruments, Shell, and HP) invited by the EDB to invest in factories",
    problemSolved: "shortage of local industrial capital, technology, and global export markets after 1965",
    answer: "MNCs",
    accept: ["MNCs", "MNC", "multinational corporations", "multinationals"],
    detail: "Welcoming MNCs brought immediate jobs, technology transfer, and global export access.",
  },
  {
    clue: "the four-part water security strategy combining local catchment, Johor imports, NEWater, and desalination",
    problemSolved: "lack of natural freshwater rivers or large lakes on a tiny island",
    answer: "Four National Taps",
    accept: ["Four National Taps", "4 National Taps", "National Taps"],
    detail: "The Four National Taps diversified Singapore's water supply to ensure resilience.",
  },
  {
    clue: "the UN Dutch economist whose 1960–61 mission advised creating the EDB and welcoming foreign investment",
    problemSolved: "needing an expert long-term industrialisation blueprint in 1960–61",
    answer: "Albert Winsemius",
    accept: ["Albert Winsemius", "Winsemius", "Dr Albert Winsemius"],
    detail: "Dr Albert Winsemius advised Singapore's economic transformation for over two decades.",
  },
  {
    clue: "Singapore's anti-corruption bureau enforcing clean governance to boost investor trust",
    problemSolved: "preventing graft so foreign MNCs and citizens could trust meritocratic institutions",
    answer: "CPIB",
    accept: ["CPIB", "Corrupt Practices Investigation Bureau"],
    detail: "The CPIB underpinned clean, corruption-free governance.",
  },
  {
    clue: "HDB's 1989 ethnic quota rule for public housing blocks and estates",
    problemSolved: "re-emerging racial enclaves in resale HDB estates during the 1980s",
    answer: "EIP",
    accept: ["EIP", "Ethnic Integration Policy"],
    detail: "The Ethnic Integration Policy (1989) safeguards everyday multiracial mixing in HDB estates.",
  },
];

interface LensCase {
  caseStudy: string;
  historyEvidence: string;
  historyQ: string;
  politicsEvidence: string;
  politicsQ: string;
  geographyEvidence: string;
  geographyQ: string;
  economicsEvidence: string;
  economicsQ: string;
  closedQ: string;
  descriptiveQ: string;
  strongQ: string;
}

const LENS_CASES: LensCase[] = [
  {
    caseStudy: "HDB Public Housing",
    historyEvidence: "1961 archival photographs of the Bukit Ho Swee squatter fire evaluated with NOP",
    historyQ: "How did the 1961 Bukit Ho Swee fire accelerate change from colonial SIT flats to HDB New Towns?",
    politicsEvidence: "the 1989 Ethnic Integration Policy quota laws and parliamentary debates over minority resale buyers",
    politicsQ: "How did HDB home ownership and 1989 EIP laws strengthen political stability and multiracial governance?",
    geographyEvidence: "spatial maps showing high-rise New Towns (Toa Payoh, Tampines) integrating MRT lines and green parks",
    geographyQ: "How did self-contained HDB New Towns optimise scarce urban land and transport connectivity?",
    economicsEvidence: "data on 1968 CPF housing withdrawals, household asset values, and rising resale affordability",
    economicsQ: "How did unlocking CPF savings affect household wealth and affordability in Singapore's housing market?",
    closedQ: "In what exact year was the Housing & Development Board (HDB) founded?",
    descriptiveQ: "Describe everything about HDB flats in Singapore.",
    strongQ: "To what extent did HDB housing policy achieve both economic growth and multiracial cohesion (1960–2000)?",
  },
  {
    caseStudy: "Jurong Industrial Estate",
    historyEvidence: "1961 speeches by Dr Goh Keng Swee defending 'Goh's Folly' against early political sceptics",
    historyQ: "Why did Singapore pivot from colonial entrepôt trade to Jurong factories between 1961 and 1970?",
    politicsEvidence: "labour-relations legislation and strong state industrial planning designed to ensure stability",
    politicsQ: "How far did state intervention and industrial-relations laws enable Singapore's economic planning?",
    geographyEvidence: "land-use maps showing mangrove swamps cleared and industrial zones separated from residential estates",
    geographyQ: "How did transforming western mangrove coastlines reshape Jurong's physical environment and zoning?",
    economicsEvidence: "EDB foreign direct investment figures, MNC factory exports, and falling unemployment rates",
    economicsQ: "How did EDB tax incentives and MNC factories raise productivity and cut unemployment after 1965?",
    closedQ: "Who was the minister nicknamed after 'Goh's Folly' in Jurong?",
    descriptiveQ: "Tell me all the factories located in Jurong Industrial Estate.",
    strongQ: "How successfully has Jurong Industrial Estate balanced rapid economic growth with environmental sustainability since 1961?",
  },
  {
    caseStudy: "Changi Airport",
    historyEvidence: "1975 cabinet records explaining the turning-point decision to relocate from Paya Lebar to Changi",
    historyQ: "What caused Singapore's leaders in 1975 to abandon Paya Lebar expansion in favour of Changi?",
    politicsEvidence: "national infrastructure governance and parliamentary debates on aviation carbon taxes for Terminal 5",
    politicsQ: "How do government aviation policies balance national competitiveness with climate commitments?",
    geographyEvidence: "coastal land reclamation maps and flight-path noise contours keeping jets over the sea",
    geographyQ: "How did coastal reclamation at Changi overcome inland space limits and reduce urban noise pollution?",
    economicsEvidence: "aviation tourism revenue, air-cargo export values, and hospitality employment statistics",
    economicsQ: "How heavily does Singapore's service economy depend on Changi's global air connectivity?",
    closedQ: "Did Changi Airport officially open in 1981?",
    descriptiveQ: "List all the shops and terminals inside Changi Airport.",
    strongQ: "To what extent has Changi Airport's expansion since 1981 balanced economic connectivity with environmental sustainability?",
  },
  {
    caseStudy: "PSA Container Port & Tuas Mega Port",
    historyEvidence: "1972 archival shipping logs documenting East Asia's early gamble on containerisation at Tanjong Pagar",
    historyQ: "How did PSA's 1972 containerisation decision transform Singapore's colonial harbour legacy?",
    politicsEvidence: "maritime security agreements and state ownership coordinating strategic trade-route resilience",
    politicsQ: "Why does the Singapore state treat maritime port infrastructure as a core national-security priority?",
    geographyEvidence: "location on the Strait of Malacca chokepoint and reclaimed coastal megaport layout at Tuas",
    geographyQ: "How does Singapore's geographical location on the Strait of Malacca shape Tuas Mega Port planning?",
    economicsEvidence: "annual container throughput (TEUs), transhipment GDP share, and supply-chain cost savings",
    economicsQ: "How does automated container transhipment protect Singapore's trade competitiveness against rival ports?",
    closedQ: "What does the three-letter acronym PSA stand for?",
    descriptiveQ: "Write everything you know about ships visiting Singapore's port.",
    strongQ: "How far has PSA's transition from Tanjong Pagar (1972) to Tuas Mega Port secured Singapore's economic future?",
  },
  {
    caseStudy: "Water Security & Four National Taps",
    historyEvidence: "the 1961 and 1962 Johor water agreements and 1965 Separation fears over water vulnerability",
    historyQ: "How did 1965 Separation anxieties accelerate Singapore's long-term drive for water self-sufficiency?",
    politicsEvidence: "bilateral diplomatic negotiations with Malaysia and state water-pricing legislation",
    politicsQ: "Why has water self-sufficiency been treated as an essential pillar of Singapore's sovereign security?",
    geographyEvidence: "drainage-basin catchment maps (Marina Barrage), NEWater purification cycles, and desalination plants",
    geographyQ: "How do local urban catchments and NEWater overcome Singapore's lack of natural freshwater rivers?",
    economicsEvidence: "unit production costs of desalination energy versus catchment water and household water tariffs",
    economicsQ: "What are the economic costs and opportunity costs of achieving water independence through desalination?",
    closedQ: "How many 'National Taps' are in Singapore's water strategy?",
    descriptiveQ: "Describe what NEWater is and where reservoirs are located.",
    strongQ: "To what extent have the Four National Taps achieved sustainable water security for Singapore since 1965?",
  },
  {
    caseStudy: "National Service (NS)",
    historyEvidence: "1967 eyewitness diaries of the first conscripts reacting to Britain's 'East of Suez' troop withdrawal",
    historyQ: "Why did Britain's 1968 military withdrawal announcement make 1967 National Service an urgent turning point?",
    politicsEvidence: "compulsory citizenship legislation (Enlistment Act) and Total Defence national-unity doctrine",
    politicsQ: "How does compulsory National Service redefine the relationship between citizenship duties and state defence?",
    geographyEvidence: "defending a tiny island lacking strategic land depth and setting aside offshore training islands like Pulau Tekong",
    geographyQ: "How does Singapore's small territorial footprint shape military training land use and Total Defence?",
    economicsEvidence: "opportunity cost of two years out of the civilian labour force versus investor confidence from security",
    economicsQ: "What are the economic opportunity costs and investor-confidence gains of maintaining citizen conscription?",
    closedQ: "In what year was compulsory National Service first introduced in Singapore?",
    descriptiveQ: "Describe a normal day for a soldier during National Service.",
    strongQ: "How successfully has National Service balanced defence deterrence, social cohesion, and economic costs since 1967?",
  },
  {
    caseStudy: "Bilingual Education Policy",
    historyEvidence: "1966 Ministry of Education circulars comparing colonial vernacular schools with post-independence reforms",
    historyQ: "How did 1966 bilingual reforms transform Singapore's divided colonial-era language school system?",
    politicsEvidence: "national language laws balancing official multiracial equality among Chinese, Malay, and Tamil communities",
    politicsQ: "How did choosing English as a neutral working language help manage ethnic politics after 1965?",
    geographyEvidence: "global network connectivity linking Singapore's English-speaking workforce with Asia-Pacific and Western hubs",
    geographyQ: "How did bilingualism strengthen Singapore's geographical role as an East–West global bridge?",
    economicsEvidence: "multinational hiring surveys showing how English fluency attracted global banks and tech firms",
    economicsQ: "How much did English-medium bilingual education boost Singapore's human capital and MNC wages?",
    closedQ: "Which common working language was paired with Mother Tongue in 1966?",
    descriptiveQ: "Tell me about the languages spoken in Singapore schools.",
    strongQ: "To what extent has Singapore's 1966 Bilingual Policy achieved both economic competitiveness and cultural preservation?",
  },
  {
    caseStudy: "Land Reclamation & Urban Space",
    historyEvidence: "archival 1965 vs 2025 coastline surveys charting six decades of state engineering",
    historyQ: "How has Singapore's approach to coastal land reclamation evolved from 1965 to the 2020s?",
    politicsEvidence: "regional diplomatic restrictions on sand exports and long-term state land-acquisition laws",
    politicsQ: "How do regional sand-export bans and state land laws affect Singapore's long-term urban governance?",
    geographyEvidence: "expansion from ~581 km² to ~735 km², coastal polders, and impacts on coral reefs and mangroves",
    geographyQ: "How does adding ~25% more coastal land affect marine biodiversity and sea-level rise vulnerability?",
    economicsEvidence: "high-value commercial land revenues at Marina Bay and Tuas compared with sand-import expenses",
    economicsQ: "Do the commercial economic returns of Marina Bay justify the rising financial costs of land reclamation?",
    closedQ: "What was Singapore's approximate land area in square kilometres in 1965?",
    descriptiveQ: "Tell me all the places in Singapore built on reclaimed land.",
    strongQ: "To what extent have the economic gains of land reclamation outweighed its environmental costs since 1965?",
  },
  {
    caseStudy: "Meritocracy & Clean Governance",
    historyEvidence: "1959 PAP anti-corruption manifestos contrasting colonial patronage with post-1959 CPIB reforms",
    historyQ: "How did post-1959 anti-corruption reforms break with earlier colonial administrative practices?",
    politicsEvidence: "parliamentary debates over CPIB independence, social mobility, and fair representation",
    politicsQ: "How does meritocracy balance equal legal opportunity against debates over inherited social advantage?",
    geographyEvidence: "spatial distribution of top schools, enrichment centres, and neighbourhood estate amenities",
    geographyQ: "Does urban neighbourhood distribution influence unequal access to educational enrichment across Singapore?",
    economicsEvidence: "Gini income inequality trends, global competitiveness indices, and private tuition spending data",
    economicsQ: "How does meritocratic human-capital investment drive GDP growth while raising modern inequality trade-offs?",
    closedQ: "What does the four-letter acronym CPIB stand for?",
    descriptiveQ: "Explain what meritocracy is in Singapore.",
    strongQ: "How successfully has Singapore's meritocratic model maintained social mobility alongside rapid economic growth?",
  },
  {
    caseStudy: "Singapore Green Plan 2030",
    historyEvidence: "comparing Lee Kuan Yew's 1967 'Garden City' tree-planting launch with today's 'City in Nature' plan",
    historyQ: "What continuity and change link the 1967 'Garden City' vision to the 2021 Singapore Green Plan 2030?",
    politicsEvidence: "carbon-tax legislation, public consultation policies, and international COP climate pledges",
    politicsQ: "How do Singapore's climate policies balance national energy security with global political pledges?",
    geographyEvidence: "urban heat-island mitigation, 1 million trees planting corridors, and coastal sea-wall defences",
    geographyQ: "How do 'City in Nature' green corridors and coastal defences protect a low-lying tropical island?",
    economicsEvidence: "green-finance jobs, solar-import investments, and household electricity cost trade-offs",
    economicsQ: "What are the economic costs and green-growth opportunities of decarbonising Singapore by 2050?",
    closedQ: "What target year is named in the Singapore Green Plan 2030?",
    descriptiveQ: "List all the parks and trees included in the Green Plan.",
    strongQ: "To what extent can the Singapore Green Plan 2030 reconcile rapid economic growth with climate resilience?",
  },
];

export const drills: Drill[] = [
  {
    id: "singapore-and-change.timeline-milestones",
    topicId: "singapore-and-change",
    title: "Singapore 1942–1989 Timeline & Constitutional Milestones",
    level: 1,
    guideRef: "colony-to-self-government",
    generate(rng, tier) {
      if (tier === 1) {
        const m = rng.pick(MILESTONES);
        const stems = [
          `In what exact year did the **${m.label}** take place—when ${m.desc}?`,
          `Singapore timeline check: ${m.desc}. Give the exact **year** of this milestone (**${m.label}**).`,
          `Identify the exact year for **${m.label}** (${m.desc}).`,
        ];
        return {
          prompt: rng.pick(stems),
          answer: { type: "number", value: m.year, display: String(m.year) },
          solution: [
            `**${m.label}** took place in **${m.year}**.`,
            `Context: ${m.desc}.`,
          ],
          hint: `Think of the decade (${Math.floor(m.year / 10) * 10}s) and the F-R-S-M-I / transformation sequence.`,
        };
      }
      if (tier === 2) {
        const a = rng.pick(MILESTONES);
        const b = rng.pick(MILESTONES.filter((x) => Math.abs(x.year - a.year) >= 2));
        const earlier = a.year < b.year ? a : b;
        const later = a.year < b.year ? b : a;
        const firstShown = rng.bool() ? earlier : later;
        const secondShown = firstShown === earlier ? later : earlier;
        return {
          prompt: `Chronology check: which Singapore milestone happened **EARLIER**—**${firstShown.label}** or **${secondShown.label}**? (Type the earlier milestone's name.)`,
          answer: { type: "text", accept: earlier.accept, display: earlier.label },
          traps: [
            {
              spec: { type: "text", accept: later.accept },
              feedback: `${later.label} occurred in ${later.year}, which was ${later.year - earlier.year} years AFTER ${earlier.label} (${earlier.year}).`,
            },
          ],
          solution: [
            `**${earlier.label}** occurred in **${earlier.year}**, while **${later.label}** occurred in **${later.year}**.`,
            `Therefore **${earlier.label}** happened ${later.year - earlier.year} years earlier.`,
          ],
          hint: "Recall F-R-S-M-I (1942, 1955, 1959, 1963, 1965) and post-1965 milestones (1966, 1967, 1972, 1981, 1989).",
        };
      }
      // Tier 3: Exact chronological year-gap between two anchor milestones without printing years
      const a = rng.pick(MILESTONES);
      const b = rng.pick(MILESTONES.filter((x) => x.year !== a.year));
      const earlier = a.year < b.year ? a : b;
      const later = a.year < b.year ? b : a;
      const gap = later.year - earlier.year;
      return {
        prompt: `How many years separated **${earlier.label}** and **${later.label}** in Singapore's history?`,
        answer: { type: "number", value: gap, display: `${gap} years` },
        solution: [
          `**${earlier.label}** occurred in **${earlier.year}**; **${later.label}** occurred in **${later.year}**.`,
          `Difference: ${later.year} − ${earlier.year} = **${gap} years**.`,
        ],
        hint: `${earlier.label} occurred in ${earlier.year}. Now recall the year of ${later.label} and subtract.`,
      };
    },
  },
  {
    id: "singapore-and-change.merger-separation-checker",
    topicId: "singapore-and-change",
    title: "Merger (1963) & Separation (1965) Cause Classifier",
    level: 1,
    guideRef: "merger-and-independence-1965",
    generate(rng, tier) {
      if (tier === 1) {
        const c = rng.pick(MERGER_CAUSES);
        const frames = [
          `Classify this factor from Singapore's 1961–1968 history: *"${c.clue}."* Is it primarily **Economic**, **Political**, or **Communal**?`,
          `Factor sorting: *"${c.clue}."* Does this belong to the **Economic**, **Political**, or **Communal** category?`,
          `Exam classification: *"${c.clue}."* Type **Economic**, **Political**, or **Communal**.`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: [c.category, c.category.toLowerCase()], display: c.category },
          solution: [
            c.detail,
            `Category: **${c.category}**.`,
          ],
          hint: "Economic = trade/tax/jobs/GDP; Political = parties/rights/decolonisation/defence; Communal = racial tensions/riots/enclaves.",
        };
      }
      if (tier === 2) {
        const c = rng.pick(MERGER_CAUSES);
        const frames = [
          `Which phase of Singapore's journey does this describe? *"${c.clue}."* (Type: Merger, Separation, or Post-1965)`,
          `Match this evidence to the right turning point: *"${c.clue}."* (Type: Merger, Separation, or Post-1965)`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: c.stageAccept, display: c.stage },
          solution: [
            c.detail,
            `Phase: **${c.stage}**.`,
          ],
          hint: "Decide whether this explains why Singapore sought Merger (1963), why Merger collapsed into Separation (1965), or a survival crisis AFTER 1965.",
        };
      }
      const item = rng.pick(KEY_RECALLS);
      const frames = [
        `Identify this key 1942–1968 Singapore History term, figure, or date: **${item.clue}**.`,
        `Rapid recall (1942–1968): name **${item.clue}**.`,
      ];
      return {
        prompt: rng.pick(frames),
        answer: { type: "text", accept: item.accept, display: item.answer },
        solution: [item.solution],
        hint: item.hint,
      };
    },
  },
  {
    id: "singapore-and-change.transformation-metrics",
    topicId: "singapore-and-change",
    title: "Singapore Transformation Policies & Data Metrics",
    level: 2,
    guideRef: "economic-urban-transformation",
    generate(rng, tier) {
      if (tier === 1) {
        const t = rng.pick(TRANSFORM_ITEMS);
        const frames = [
          `Identify this Singapore transformation milestone or agency: **${t.clue}**.`,
          `Singapore urban & economic check: name **${t.clue}**.`,
          `Which agency, project, or concept is described here: **${t.clue}**?`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: t.accept, display: t.answer },
          solution: [t.detail],
          hint: `First letter: "${t.answer[0]}".`,
        };
      }
      if (tier === 2) {
        // Parameterised Geography/Economics transformation calculations (100+ unique prompts, clean integers!)
        const kind = rng.int(1, 3);
        if (kind === 1) {
          const cleanBase = rng.pick([560, 580, 600, 620, 640]);
          const pct = rng.pick([10, 15, 20, 25, 30]);
          const cleanAdded = (cleanBase * pct) / 100;
          const total = cleanBase + cleanAdded;
          return {
            prompt: `**Land Reclamation Metric:** Suppose an island baseline area of **${cleanBase} km²** expands by **${pct}%** through coastal land reclamation. What is the new total land area in km²?`,
            answer: { type: "number", value: total, display: `${total} km²` },
            solution: [
              `Find ${pct}% of ${cleanBase} km²: ${cleanBase} × ${pct / 100} = ${cleanAdded} km² added.`,
              `Add to the baseline: ${cleanBase} + ${cleanAdded} = **${total} km²** (mirroring Singapore's ~25% growth from ~581 to ~735 km²).`,
            ],
            hint: `Calculate ${pct}% of ${cleanBase}, then add it to ${cleanBase}.`,
          };
        }
        if (kind === 2) {
          const perYear = rng.int(8, 16) * 1000;
          const years = rng.int(3, 8);
          const built = perYear * years;
          return {
            prompt: `**HDB Construction Pace:** Under Lim Kim San's emergency programme after the 1961 Bukit Ho Swee fire, suppose HDB completes an average of **${perYear.toLocaleString("en-US")} flats per year** for **${years} years**. How many flats are built in total?`,
            answer: { type: "number", value: built, display: `${built.toLocaleString("en-US")} flats` },
            solution: [
              `Multiply annual rate by years: ${perYear.toLocaleString("en-US")} × ${years} = **${built.toLocaleString("en-US")} flats**.`,
              "In reality, HDB built over 50,000 flats in its first five years—outpacing the colonial SIT's 23,000 flats across 32 years.",
            ],
            hint: `Multiply ${perYear} × ${years}.`,
          };
        }
        const gdp = rng.int(12, 35) * 100; // S$ millions model
        const lossPct = rng.pick([15, 20, 25]);
        const loss = (gdp * lossPct) / 100;
        return {
          prompt: `**1968 British Withdrawal Economic Shock:** If a city-state's economy stands at **S$${gdp} million** and foreign military bases generate **${lossPct}%** of GDP, how many **S$ million** of economic output must new EDB/MNC industries replace when the bases close?`,
          answer: { type: "number", value: loss, display: `S$${loss} million` },
          solution: [
            `Calculate ${lossPct}% of S$${gdp} million: ${gdp} × ${lossPct / 100} = **S$${loss} million**.`,
            "Britain's 1968 'East of Suez' announcement threatened roughly 20% of Singapore's GDP, accelerating Jurong and MNC industrialisation.",
          ],
          hint: `Compute ${lossPct}% of ${gdp}.`,
        };
      }
      // Tier 3: Problem -> Policy/Infrastructure matcher
      const t = rng.pick(TRANSFORM_ITEMS);
      const frames = [
        `Post-1960 problem-solving: to address **${t.problemSolved}**, which Singapore agency, project, or policy did leaders deploy?`,
        `Link challenge to solution: Singapore faced **${t.problemSolved}**. Name the key Singapore agency, project, or strategy created in response.`,
      ];
      return {
        prompt: rng.pick(frames),
        answer: { type: "text", accept: t.accept, display: t.answer },
        solution: [
          `To tackle ${t.problemSolved}, Singapore relied on **${t.answer}**.`,
          t.detail,
        ],
        hint: `Hint: ${t.clue}.`,
      };
    },
  },
  {
    id: "singapore-and-change.four-lens-enquiry",
    topicId: "singapore-and-change",
    title: "Combined Humanities 4-Lens Enquiry Designer",
    level: 3,
    guideRef: "society-politics-enquiry",
    generate(rng, tier) {
      const c = rng.pick(LENS_CASES);
      if (tier === 1) {
        const lens = rng.pick(["History", "Politics", "Geography", "Economics"] as const);
        const ev =
          lens === "History"
            ? c.historyEvidence
            : lens === "Politics"
              ? c.politicsEvidence
              : lens === "Geography"
                ? c.geographyEvidence
                : c.economicsEvidence;
        return {
          prompt: `Combined Humanities project on **${c.caseStudy}**: you gather **${ev}**. Which of the four lenses does this evidence primarily represent? (Type: History, Politics, Geography, or Economics)`,
          answer: { type: "text", accept: [lens, lens.toLowerCase()], display: lens },
          solution: [
            `Examining ${ev} primarily uses the **${lens}** lens.`,
            "Remember H-P-G-E: History (change/sources), Politics (laws/governance), Geography (space/environment), Economics (scarcity/trade/costs).",
          ],
          hint: "History = change over time & archival sources; Politics = laws & governance; Geography = land/maps/environment; Economics = costs/jobs/GDP.",
        };
      }
      if (tier === 2) {
        const lens = rng.pick(["History", "Politics", "Geography", "Economics"] as const);
        const subQ =
          lens === "History"
            ? c.historyQ
            : lens === "Politics"
              ? c.politicsQ
              : lens === "Geography"
                ? c.geographyQ
                : c.economicsQ;
        return {
          prompt: `Research sub-question on **${c.caseStudy}**: *"${subQ}"* Which Combined Humanities lens leads this sub-question? (Type: History, Politics, Geography, or Economics)`,
          answer: { type: "text", accept: [lens, lens.toLowerCase()], display: lens },
          solution: [
            `This sub-question focuses on **${lens}** concepts inside the **${c.caseStudy}** enquiry.`,
            "Top-band Combined Humanities projects combine sub-questions from all four lenses to answer one central question.",
          ],
          hint: "Identify whether the sub-question focuses on past turning points (History), laws/state power (Politics), space/environment (Geography), or markets/jobs/costs (Economics).",
        };
      }
      // Tier 3: Enquiry Question Quality Evaluator
      const qType = rng.pick(["strong", "closed", "descriptive"] as const);
      const draft = qType === "strong" ? c.strongQ : qType === "closed" ? c.closedQ : c.descriptiveQ;
      const frames = [
        `Evaluate this draft Year 9 Combined Humanities enquiry title on **${c.caseStudy}**: *"${draft}"* Classify its quality: **strong** (evaluative & multi-lens), **closed** (one-word fact check), or **descriptive** (too vague/no debate).`,
        `Enquiry quality check (**${c.caseStudy}**): *"${draft}"* Is this question **strong**, **closed**, or **descriptive**?`,
      ];
      return {
        prompt: rng.pick(frames),
        answer: {
          type: "text",
          accept:
            qType === "strong"
              ? ["strong", "evaluative", "strong evaluative"]
              : qType === "closed"
                ? ["closed", "closed fact", "trivia"]
                : ["descriptive", "too descriptive", "vague"],
          display: qType,
        },
        traps: (["strong", "closed", "descriptive"] as const)
          .filter((x) => x !== qType)
          .map((wrong) => ({
            spec: { type: "text" as const, accept: [wrong] },
            feedback:
              qType === "strong"
                ? "Because it uses an evaluative stem ('To what extent…' / 'How successfully…') and weighs trade-offs across lenses, it is a STRONG enquiry question."
                : qType === "closed"
                  ? "This can be answered in one fact/word with zero debate—making it a CLOSED question."
                  : "'Describe / Tell me everything…' has no argument or evaluative stem—making it overly DESCRIPTIVE.",
          })),
        solution: [
          qType === "strong"
            ? `**Strong:** "${draft}" is focused, debatable, and opens up History, Politics, Geography, and Economics.`
            : qType === "closed"
              ? `**Closed:** "${draft}" asks a single factual trivia point with no room for debate—upgrade using "To what extent…".`
              : `**Descriptive:** "${draft}" invites an unfocused summary rather than weighing evidence and trade-offs.`,
        ],
        hint: "Check the 3-Check Rule: one-word fact = closed; 'describe/tell me everything' = descriptive; 'To what extent / How far' with focus = strong.",
      };
    },
  },
];
