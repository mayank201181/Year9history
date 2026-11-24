import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "anti-apartheid-south-africa-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "apartheid-system-1948",
      question: "In which year did the National Party win South Africa's general election and begin codifying statutory apartheid?",
      answer: { type: "number", value: 1948, display: "1948" },
      traps: [
        { spec: { type: "number", value: 1950 }, feedback: "1950 saw the Population Registration and Group Areas Acts; the National Party won power two years earlier." },
        { spec: { type: "number", value: 1960 }, feedback: "1960 was the Sharpeville Massacre, twelve years after apartheid began." },
      ],
      hints: ["It occurred three years after the end of World War II."],
      solution: ["The National Party under D.F. Malan won the white-minority election in **May 1948**."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "apartheid-system-1948",
      question: "Which apartheid law required every Black South African over age 16 to carry an identity reference book (dompas) in white areas?",
      options: [
        "The Bantu Education Act",
        "The Separate Amenities Act",
        "The 1952 Pass Laws Act",
        "The Mixed Marriages Act",
      ],
      answerIndex: 2,
      hints: ["Failure to produce this booklet on demand meant immediate arrest."],
      explanation:
        "The **1952 Pass Laws** (Natives Abolition of Passes and Co-ordination of Documents Act) forced Black citizens aged 16+ to carry a **dompas** policing movement into white cities.",
    },
    {
      id: "anti-apartheid-south-africa-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "apartheid-system-1948",
      question: "Approximately what percentage of South Africa's land was allocated to the ten Black Bantustans (homelands)?",
      answer: { type: "number", value: 13, display: "13%" },
      traps: [
        { spec: { type: "number", value: 87 }, feedback: "87% was the rich land reserved for the white minority—the Bantustans received only the remaining 13%." },
      ],
      hints: ["The white minority kept 87% of South Africa's territory."],
      solution: ["Just **13%** of South Africa's land was assigned to the ~70%+ Black majority under the Bantustan system."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "sharpeville-armed-struggle",
      question: "In which year did the Sharpeville Massacre take place, killing 69 peaceful anti-pass demonstrators?",
      answer: { type: "number", value: 1960, display: "1960" },
      traps: [
        { spec: { type: "number", value: 1976 }, feedback: "1976 was the Soweto Uprising; Sharpeville happened sixteen years earlier." },
        { spec: { type: "number", value: 1964 }, feedback: "1964 was the Rivonia Trial verdict; Sharpeville happened four years earlier." },
      ],
      hints: [
        "It happened on 21 March—at the start of a new decade.",
        "Shortly afterward, the government banned both the ANC and PAC.",
      ],
      solution: ["The **Sharpeville Massacre** took place on **21 March 1960**, transforming the anti-apartheid struggle."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "sharpeville-armed-struggle",
      question: "What was the name (or two-letter abbreviation) of the ANC's armed sabotage wing co-founded by Nelson Mandela in December 1961?",
      answer: {
        type: "text",
        accept: ["Umkhonto we Sizwe", "MK", "Spear of the Nation"],
        display: "Umkhonto we Sizwe (MK)",
      },
      traps: [
        { spec: { type: "text", accept: ["PAC"] }, feedback: "PAC was the Pan Africanist Congress led by Robert Sobukwe; Mandela's armed wing was MK." },
        { spec: { type: "text", accept: ["UDF"] }, feedback: "UDF was the peaceful civic United Democratic Front founded in 1983." },
      ],
      hints: [
        "Its Zulu/Xhosa name translates to 'Spear of the Nation'.",
        "It is widely known by the two initials M and K.",
      ],
      solution: ["**Umkhonto we Sizwe (MK)** carried out targeted infrastructure sabotage after legal peaceful protest was banned."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "soweto-1976-sanctions",
      question: "What immediate grievance brought thousands of Black students onto the streets of Soweto on 16 June 1976?",
      options: [
        "A decree forcing half of high-school lessons into Afrikaans",
        "A new tax doubling student rail fares across Cape Town",
        "A ban preventing white pupils from studying science courses",
        "A decision releasing Nelson Mandela onto the mainland early",
      ],
      answerIndex: 0,
      hints: [
        "Students rejected learning mathematics and social studies in 'the language of the oppressor'.",
        "This sparked a massive crackdown killing 12-year-old Hector Pieterson.",
      ],
      explanation:
        "Pupils marched peacefully in **Soweto (16 June 1976)** against compulsory **Afrikaans** instruction in Black secondary schools, symbolising wider outrage over Bantu Education.",
    },
    {
      id: "anti-apartheid-south-africa-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "soweto-1976-sanctions",
      question: "Name the South African student leader who founded the Black Consciousness Movement before being murdered in police custody in September 1977.",
      answer: {
        type: "text",
        accept: ["Steve Biko", "Biko", "Stephen Biko", "Bantu Stephen Biko"],
        display: "Steve Biko",
      },
      traps: [
        { spec: { type: "text", accept: ["Desmond Tutu", "Tutu"] }, feedback: "Archbishop Desmond Tutu won the 1984 Nobel Peace Prize and chaired the TRC; Black Consciousness was led by Steve Biko." },
        { spec: { type: "text", accept: ["Oliver Tambo", "Tambo"] }, feedback: "Oliver Tambo led the ANC in exile; Black Consciousness was led inside South Africa by Steve Biko." },
      ],
      hints: [
        "He famously wrote that 'the most potent weapon in the hands of the oppressor is the mind of the oppressed'.",
        "His initials are S.B.",
      ],
      solution: ["**Steve Biko** led Black Consciousness (SASO/BCM) to build psychological pride and unity before his murder in 1977."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "end-of-apartheid-1994",
      question: "Which South African President announced the unbanning of the ANC and PAC on 2 February 1990?",
      options: [
        "Hendrik Verwoerd",
        "Daniel Malan",
        "P.W. Botha",
        "F.W. de Klerk",
      ],
      answerIndex: 3,
      hints: [
        "He succeeded the hardline P.W. Botha in 1989 and jointly won the 1993 Nobel Peace Prize with Mandela.",
        "He later served as a Deputy President in the 1994 Government of National Unity.",
      ],
      explanation:
        "President **F.W. de Klerk** unbanned the ANC, PAC, and SACP on **2 February 1990** and released Nelson Mandela nine days later.",
    },
    {
      id: "anti-apartheid-south-africa-quiz-q09",
      kind: "short",
      difficulty: "warmup",
      guideRef: "end-of-apartheid-1994",
      question: "In which year did South Africa hold its first multiracial democratic elections, making Nelson Mandela President?",
      answer: { type: "number", value: 1994, display: "1994" },
      traps: [
        { spec: { type: "number", value: 1990 }, feedback: "1990 was when Mandela was released from prison; CODESA talks took four more years before the 1994 elections." },
      ],
      hints: ["It happened on 27 April—four years after Mandela's release."],
      solution: ["South Africa's first multiracial 'one person, one vote' elections took place on **27 April 1994**."],
    },
    {
      id: "anti-apartheid-south-africa-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "sharpeville-armed-struggle",
      marks: 3,
      question: "Explain why the Sharpeville Massacre (21 March 1960) was a major turning point in anti-apartheid tactics.",
      hints: [
        "State what happened to the peaceful demonstrators and how the apartheid government responded immediately.",
        "Explain how Mandela and the ANC changed strategy in December 1961.",
      ],
      modelAnswer:
        "When police opened fire on peaceful PAC anti-pass protesters, killing 69 people, the apartheid regime declared a State of Emergency and banned both the ANC and PAC. Because legal peaceful opposition was now outlawed and answered with bullets, Nelson Mandela and ANC leaders concluded non-violence alone could not work. In December 1961 they co-founded Umkhonto we Sizwe (MK) to carry out targeted sabotage against state infrastructure.",
      markScheme: [
        {
          point: "Identifies police killing 69 peaceful anti-pass protesters at Sharpeville.",
          keywords: ["69", "police", "fired", "shot", "pass", "pac"],
        },
        {
          point: "Explains immediate state crackdown (banning of ANC and PAC / State of Emergency closing legal peaceful protest).",
          keywords: ["banned", "outlawed", "anc", "state of emergency", "illegal"],
        },
        {
          point: "Links crackdown to the formation of Umkhonto we Sizwe (MK) and targeted sabotage.",
          keywords: ["mk", "umkhonto", "sabotage", "armed", "1961", "spear"],
        },
      ],
      commonError: "Writing only 'people were sad and got violent' without explaining the **banning of the ANC/PAC** and MK's specific focus on infrastructure sabotage.",
    },
  ],
  papers: [
    {
      id: "anti-apartheid-south-africa-p1",
      title: "Practice Paper 1 — Apartheid Laws, Sharpeville & Rivonia",
      questions: [
        {
          id: "anti-apartheid-south-africa-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "apartheid-system-1948",
          question: "In Afrikaans, what literal English word does **apartheid** mean?",
          answer: {
            type: "text",
            accept: ["apartness", "separateness", "separation", "being apart"],
            display: "apartness",
          },
          hints: ["Look at the first five letters of the word 'apart-heid'."],
          solution: ["**Apartheid** translates literally from Afrikaans as **'apartness'** (or separateness)."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "apartheid-system-1948",
          question: "Name the 1953 law designed by Hendrik Verwoerd that restricted Black South African pupils to an underfunded curriculum aimed at unskilled labour.",
          answer: {
            type: "text",
            accept: ["Bantu Education Act", "Bantu Education", "Bantu Education Act 1953", "Bantu Education Act of 1953"],
            display: "Bantu Education Act",
          },
          traps: [
            { spec: { type: "text", accept: ["Group Areas Act"] }, feedback: "The Group Areas Act (1950) enforced segregated residential zones; the 1953 school law was the Bantu Education Act." },
          ],
          hints: ["It used the regime's official term 'Bantu' for Black Africans."],
          solution: ["The **Bantu Education Act (1953)** starved Black schooling and limited academic opportunity to secure cheap labour."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "apartheid-system-1948",
          question: "Name ONE famous multiracial neighbourhood bulldozed and declared whites-only under the 1950 Group Areas Act (either in Johannesburg in 1955 or Cape Town in 1966).",
          answer: {
            type: "text",
            accept: ["Sophiatown", "District Six", "District 6"],
            display: "Sophiatown or District Six",
          },
          hints: [
            "In Johannesburg, a lively jazz hub was replaced by a white suburb renamed 'Triomf'.",
            "In Cape Town, a historic inner-city community was known by a numbered 'District'.",
          ],
          solution: ["**Sophiatown** (Johannesburg, 1955) and **District Six** (Cape Town, 1966) became notorious symbols of Group Areas forced removals."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "apartheid-system-1948",
          question: "How did the Reservation of Separate Amenities Act (1953) differ legally from America's 1896 *Plessy v. Ferguson* doctrine?",
          options: [
            "It expressly allowed non-white facilities to be inferior",
            "It required equal budgets for Black and white city parks",
            "It only applied to private businesses inside Bantustans",
            "It granted Black passengers free seats on white trains",
          ],
          answerIndex: 0,
          hints: [
            "*Plessy* claimed facilities had to be 'separate *but equal*'.",
            "South Africa's 1953 statute openly dropped even the pretence of equality.",
          ],
          explanation:
            "Unlike *Plessy*'s 'separate but equal' formula, South Africa's **1953 Separate Amenities Act** explicitly stated that segregated benches, beaches, hospitals, and buses did **not** have to be equal.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sharpeville-armed-struggle",
          question: "In which year did ~3,000 multiracial delegates adopt the **Freedom Charter** at the Congress of the People in Kliptown?",
          answer: { type: "number", value: 1955, display: "1955" },
          traps: [
            { spec: { type: "number", value: 1952 }, feedback: "1952 was the Defiance Campaign; the Freedom Charter was adopted three years later." },
          ],
          hints: ["It happened on 26 June, midway through the 1950s."],
          solution: ["The **Freedom Charter** was adopted on **26 June 1955** at Kliptown."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          question: "How many total years did Nelson Mandela spend in prison between his 1962 arrest and his release in February 1990?",
          answer: { type: "number", value: 27, display: "27 years" },
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "Mandela spent 18 years specifically on Robben Island, plus 9 further years at Pollsmoor and Victor Verster—totalling 27 years." },
          ],
          hints: [
            "He was arrested in August 1962 and freed on 11 February 1990.",
            "He spent 18 of those years on Robben Island and 9 more on the mainland.",
          ],
          solution: ["Nelson Mandela spent **27 years** in prison (1962–1990), including 18 years on Robben Island."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          question: "What was the main achievement of the 1952 ANC Defiance Campaign despite the regime passing harsher laws against protesters?",
          options: [
            "It forced Prime Minister Malan to repeal Population Registration",
            "It surged ANC membership toward 100,000 and united mass protest",
            "It persuaded Britain to impose an immediate global oil embargo",
            "It established ten independent parliamentary seats in Pretoria",
          ],
          answerIndex: 1,
          hints: [
            "Look at how many volunteers participated (over 8,000) and what happened to ANC membership.",
            "It transformed the ANC from a small polite lobby into a mass movement.",
          ],
          explanation:
            "Although the regime crushed the **1952 Defiance Campaign** with whipping and jail sentences, over 8,000 peaceful volunteers transformed the ANC into a mass movement of roughly **100,000 members**.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "apartheid-system-1948",
          marks: 4,
          question: "Explain how TWO different apartheid statutes worked together to maintain white minority political and economic power after 1948.",
          hints: [
            "Pick any two major laws (e.g. Pass Laws + Bantustans, or Population Registration + Bantu Education, or Group Areas + Pass Laws).",
            "Explain *what* each law did using specific detail, and *how* they reinforced white political/economic dominance.",
          ],
          modelAnswer:
            "First, the Bantu Education Act (1953) deliberately restricted Black pupils to an inferior, underfunded curriculum—with white pupils receiving roughly ten times more state funding—so Black citizens remained trapped in cheap, unskilled labour without threatening skilled white jobs. Second, the Bantustan (homelands) system assigned over 70% of the population to just 13% of South Africa's land, stripping them of national citizenship and voting rights in the richest 87% of the country. Together, these laws kept the white economy supplied with controlled low-wage labour while locking out Black parliamentary representation.",
          markScheme: [
            {
              point: "Accurately names and describes a first specific apartheid statute (e.g. Population Registration, Group Areas, Pass Laws, Bantu Education, or Bantustans).",
              keywords: ["bantu education", "pass laws", "dompas", "population registration", "group areas", "bantustan", "homelands"],
            },
            {
              point: "Explains clearly how the first law supported white economic or social control with concrete detail (e.g. 10× spending gap, cheap labour, 3.5 million removals).",
              keywords: ["unskilled", "cheap", "10", "ten times", "3.5 million", "arrest", "classified", "migrant"],
            },
            {
              point: "Accurately names and describes a second distinct apartheid statute with concrete evidence (e.g. 13% land, stripping citizenship/voting rights).",
              keywords: ["13%", "87%", "citizenship", "voting", "vote", "segregated zones", "sophiatown", "district six"],
            },
            {
              point: "Explains how the laws interlocked to lock in white political monopoly and/or economic dominance.",
              keywords: ["together", "parliament", "cheap labour", "representation", "control", "locked", "dominance"],
            },
          ],
          commonError: "Listing law titles only ('Group Areas and Pass Laws were unfair') without explaining *how* they reinforced white political and economic power.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          question: "Name the secret farm outside Johannesburg raided by police in July 1963 that led directly to the Rivonia Trial.",
          answer: {
            type: "text",
            accept: ["Liliesleaf Farm", "Liliesleaf", "Lilliesleaf Farm", "Lilliesleaf"],
            display: "Liliesleaf Farm",
          },
          hints: [
            "MK leaders including Walter Sisulu, Govan Mbeki, and Ahmed Kathrada met secretly there.",
            "Its name combines a flower ('Lilies') and 'leaf'.",
          ],
          solution: ["Police raided **Liliesleaf Farm** in Rivonia in July 1963, seizing MK's Operation Mayibuye plans and arresting senior leaders."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          question: "Why did the apartheid state charge 156 anti-apartheid leaders with high treason in the marathon 1956–61 Treason Trial?",
          options: [
            "To reward ANC delegates for peacefully signing the Charter",
            "To tie up leaders in court for years and cripple mass organising",
            "To comply with United Nations demands for open racial hearings",
            "To negotiate immediate multiracial voting in Cape Province",
          ],
          answerIndex: 1,
          hints: [
            "Even though all 156 defendants were eventually acquitted in 1961, think about what five years in court did to their daily activism.",
            "Remember the Freedom Charter had just galvanised multiracial opposition in 1955.",
          ],
          explanation:
            "Although the courts eventually acquitted all 156 defendants in 1961, dragging Mandela, Sisulu, Luthuli, and others through five years of proceedings drained leadership energy and funds.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          question: "On which notorious island off Cape Town did Nelson Mandela spend 18 years of his life sentence?",
          answer: {
            type: "text",
            accept: ["Robben Island", "Robben"],
            display: "Robben Island",
          },
          hints: [
            "Prisoners there broke limestone in a blinding quarry and secretly educated one another ('Robben Island University').",
            "Its name begins with 'R'.",
          ],
          solution: ["Mandela, Walter Sisulu, Ahmed Kathrada, and Govan Mbeki were imprisoned on **Robben Island**."],
        },
        {
          id: "anti-apartheid-south-africa-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          marks: 4,
          question: "Evaluate both the **short-term setback** and the **long-term significance** of the 1963–64 Rivonia Trial for the anti-apartheid struggle.",
          hints: [
            "Short-term setback: who was jailed and what happened to organised internal resistance during the late 1960s?",
            "Long-term significance: Mandela's courtroom speech, escaping the death penalty, Robben Island solidarity, and global awareness.",
          ],
          modelAnswer:
            "In the short term, the Rivonia Trial was a devastating blow: arresting senior MK leaders at Liliesleaf Farm and sentencing Nelson Mandela, Walter Sisulu, and six comrades to life imprisonment on Robben Island effectively crushed organised internal ANC/MK activity for the rest of the 1960s. However, in the long term, the trial strengthened the movement's moral cause: Mandela's courtroom speech ('I am Prepared to Die') articulated a compelling non-racial vision reported worldwide, global pressure prevented executions, and Mandela became an enduring international symbol while Oliver Tambo rebuilt the ANC in exile.",
          markScheme: [
            {
              point: "Explains the severe short-term setback (imprisonment of key ANC/MK leadership on Robben Island, smashing internal organisation in the late 1960s).",
              keywords: ["crushed", "leadership", "robben island", "life imprisonment", "silenced", "late 1960s", "liliesleaf"],
            },
            {
              point: "Cites Mandela's famous 'I am Prepared to Die' speech communicating a non-racial democratic ideal globally.",
              keywords: ["prepared to die", "speech", "non-racial", "ideal", "worldwide", "courtroom"],
            },
            {
              point: "Notes how international pressure spared their lives and/or turned Mandela into a lasting global symbol.",
              keywords: ["symbol", "icon", "spared", "death penalty", "execution", "international"],
            },
            {
              point: "Recognises continuity in exile (Oliver Tambo) or survival of leadership on Robben Island.",
              keywords: ["tambo", "exile", "long term", "however", "moral"],
            },
          ],
          commonError: "Describing only that Mandela went to jail without balancing the short-term organisational collapse against the long-term global moral impact.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "apartheid-system-1948",
          question: "Why did Prime Minister Hendrik Verwoerd claim in 1959 that creating Bantustans gave Black South Africans 'self-determination'?",
          options: [
            "Because Bantustans controlled South Africa's central reserve bank",
            "Because the ANC had requested ten fragmented rural homelands",
            "To disguise permanent disenfranchisement under respectable language",
            "To prepare for immediate multiracial general elections by 1965",
          ],
          answerIndex: 2,
          hints: [
            "Remember that 1959–60 was the era of African decolonisation (British PM Macmillan's 'Wind of Change' speech).",
            "How did Pretoria try to rebrand racial exclusion to deflect international criticism?",
          ],
          explanation:
            "As African colonies won independence, Verwoerd rebranded apartheid as 'separate development'—trying to disguise stripping Black citizens of voting rights in 87% of South Africa as 'homeland self-rule'.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sharpeville-armed-struggle",
          marks: 3,
          question: "Why did Nelson Mandela insist that early MK sabotage operations (1961–63) should avoid causing civilian deaths?",
          hints: [
            "Think about both moral principle (the 1955 Freedom Charter's non-racial goal) and practical politics.",
            "How would killing white civilians affect international sympathy and future reconciliation?",
          ],
          modelAnswer:
            "First, Mandela remained committed to the 1955 Freedom Charter vision of a shared non-racial South Africa, knowing civilian bloodshed would deepen racial hatred and make future reconciliation nearly impossible. Second, targeting infrastructure like power pylons and empty pass offices aimed to hurt the regime's economy and warn white leaders to negotiate. Third, avoiding civilian casualties helped protect vital international moral sympathy for the ANC.",
          markScheme: [
            {
              point: "Links to preserving future reconciliation / non-racial Freedom Charter vision without permanent racial bitterness.",
              keywords: ["reconciliation", "hatred", "non-racial", "freedom charter", "bitterness", "shared"],
            },
            {
              point: "Explains the tactical aim of sabotaging economic/state symbols (pylons, pass offices) to pressure negotiation.",
              keywords: ["pylons", "pass offices", "infrastructure", "economy", "negotiate"],
            },
            {
              point: "Notes the need to preserve international / domestic moral legitimacy.",
              keywords: ["international", "sympathy", "moral", "legitimacy", "support"],
            },
          ],
          commonError: "Saying only 'Mandela was a nice person' without linking tactical restraint to economic sabotage, reconciliation, and global sympathy.",
        },
        {
          id: "anti-apartheid-south-africa-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "sharpeville-armed-struggle",
          marks: 4,
          question: "Compare the effectiveness of **non-violent resistance in the 1950s** with **armed sabotage (MK) in 1961–64** in challenging apartheid.",
          hints: [
            "Evaluate 1950s non-violence (Defiance Campaign boosted ANC to 100,000; Freedom Charter unified goals; Women's March—yet repealed no apartheid laws and met bullets at Sharpeville).",
            "Evaluate early MK (showed defiance and gained global attention at Rivonia—yet lacked military power to topple the state and suffered Liliesleaf arrests), then reach a balanced judgement.",
          ],
          modelAnswer:
            "Non-violent campaigns in the 1950s—such as the 1952 Defiance Campaign, 1955 Freedom Charter, and 1956 Women's March—built a broad multiracial mass movement of ~100,000 ANC members and defined democratic goals, yet failed to repeal a single apartheid law and ended in police bullets at Sharpeville (1960). Early MK sabotage (1961–63) showed the state that resistance refused to surrender and produced Mandela's global Rivonia speech, yet over 200 small infrastructure attacks could not militarily threaten the powerful apartheid army before Liliesleaf Farm was raided. Overall, neither strategy toppled apartheid in the short term, though 1950s non-violence built the enduring moral blueprint that later mass campaigns drew upon.",
          markScheme: [
            {
              point: "Evaluates achievements of 1950s non-violence (mass membership ~100,000, Defiance Campaign, Freedom Charter, Women's March).",
              keywords: ["100,000", "defiance", "freedom charter", "women", "mass", "multiracial"],
            },
            {
              point: "Identifies limits of 1950s non-violence (no laws repealed, harsher penalties, Sharpeville bullets & party bans).",
              keywords: ["sharpeville", "no laws", "repeal", "banned", "bullets"],
            },
            {
              point: "Evaluates strengths and limits of early MK (symbolic defiance/Rivonia global profile vs small scale/Liliesleaf raid).",
              keywords: ["liliesleaf", "rivonia", "military", "army", "symbolic", "raid", "small"],
            },
            {
              point: "Reaches a clear comparative judgement weighing both phases.",
              keywords: ["overall", "neither", "blueprint", "however", "short term", "moral"],
            },
          ],
          commonError: "Describing each period separately without directly weighing their strengths, limits, and relative effectiveness.",
        },
      ],
    },
    {
      id: "anti-apartheid-south-africa-p2",
      title: "Practice Paper 2 — Soweto, Global Sanctions & 1994 Transition",
      questions: [
        {
          id: "anti-apartheid-south-africa-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "soweto-1976-sanctions",
          question: "In which year did the Soweto Uprising begin on 16 June when pupils marched against compulsory Afrikaans schooling?",
          answer: { type: "number", value: 1976, display: "1976" },
          traps: [
            { spec: { type: "number", value: 1960 }, feedback: "1960 was the Sharpeville Massacre; the Soweto student uprising took place 16 years later." },
          ],
          hints: ["It occurred 16 years after the 1960 Sharpeville Massacre."],
          solution: ["The **Soweto Uprising** began on **16 June 1976**, now commemorated annually as South Africa's Youth Day."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "soweto-1976-sanctions",
          question: "Name the 12-year-old boy whose dying image in Sam Nzima's famous photograph became the global symbol of the 1976 Soweto Uprising.",
          answer: {
            type: "text",
            accept: ["Hector Pieterson", "Pieterson", "Hector Peterson", "Peterson"],
            display: "Hector Pieterson",
          },
          hints: ["His initials are H.P., and a museum in Soweto bears his name today."],
          solution: ["Sam Nzima's photograph of Mbuyisa Makhubo carrying dying 12-year-old **Hector Pieterson** shocked the world."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "soweto-1976-sanctions",
          question: "What does the acronym **UDF**—the broad non-racial civic coalition launched in 1983 against Botha's Tricameral Parliament—stand for?",
          answer: {
            type: "text",
            accept: ["United Democratic Front", "The United Democratic Front"],
            display: "United Democratic Front",
          },
          hints: [
            "It brought together over 400 church, student, civic, and community groups inside South Africa.",
            "U = United, D = Democratic, F = Front.",
          ],
          solution: ["The **United Democratic Front (UDF)** coordinated rent, consumer, and school boycotts throughout the 1980s."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "soweto-1976-sanctions",
          question: "How did COSATU (founded 1985) complement the UDF's civic boycotts in pressuring the apartheid regime?",
          options: [
            "By organising powerful Black trade-union strikes and stay-aways",
            "By deploying international peacekeeping armies into Pretoria",
            "By contesting all-white seats inside the National Party caucus",
            "By encouraging foreign banks to extend long-term state credit",
          ],
          answerIndex: 0,
          hints: [
            "COSATU stood for Congress of South African Trade Unions.",
            "Remember apartheid's economic dependence on Black mine and factory labour.",
          ],
          explanation:
            "**COSATU** mobilised hundreds of thousands of Black mine, factory, and transport workers in strikes and stay-aways, hitting apartheid directly in its economic engine.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "soweto-1976-sanctions",
          question: "In which year did the US Congress override President Reagan's veto to pass the Comprehensive Anti-Apartheid Act?",
          answer: { type: "number", value: 1986, display: "1986" },
          traps: [
            { spec: { type: "number", value: 1977 }, feedback: "1977 was the UN mandatory arms embargo and Gleneagles Agreement; the US Comprehensive Anti-Apartheid Act came nine years later." },
            { spec: { type: "number", value: 1985 }, feedback: "1985 was Chase Manhattan Bank's loan refusal; Congress passed the Comprehensive Anti-Apartheid Act the following year." },
          ],
          hints: [
            "It followed the 1985 State of Emergency and Chase Manhattan banking crisis.",
            "It occurred one year after 1985 and four years before Mandela's release.",
          ],
          solution: ["Congress overrode Reagan's veto to enact the **Comprehensive Anti-Apartheid Act in October 1986**."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          question: "How many years elapsed from the start of statutory apartheid (1948) to South Africa's first multiracial democratic elections (1994)?",
          answer: { type: "number", value: 46, display: "46 years" },
          hints: [
            "Subtract 1948 from 1994.",
            "That span covered nearly half a century of legalised white minority rule.",
          ],
          solution: ["1994 − 1948 = **46 years** of statutory apartheid rule."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          question: "Why did white South African business leaders secretly fly to Lusaka to meet the banned ANC in the mid-1980s?",
          options: [
            "They sought ANC help to expand the Pass Laws across mines",
            "They saw sanctions and strikes making apartheid bad for business",
            "They wanted the ANC to endorse P.W. Botha's State of Emergency",
            "They hoped to buy weapons from MK for rural farm militias",
          ],
          answerIndex: 1,
          hints: [
            "Think about how falling Rand values, loan freezes, and COSATU strikes affected major companies like Anglo American.",
            "Business elites began concluding that negotiated reform was the only way to save South Africa's economy.",
          ],
          explanation:
            "With sanctions, disinvestment, currency collapse, and labour strikes crushing profits, top South African executives met Oliver Tambo's ANC in Lusaka (1985) and pressed Pretoria to negotiate.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "soweto-1976-sanctions",
          marks: 4,
          question: "Explain how **sporting/cultural boycotts** and **economic sanctions** weakened apartheid South Africa in DIFFERENT ways during the 1970s and 1980s.",
          hints: [
            "For sporting/cultural boycotts, cite specific examples (Olympics, 1977 Gleneagles, Sun City, 1988 Wembley) and explain their impact on *white morale and global awareness*.",
            "For economic sanctions, cite specific examples (1985 Chase Manhattan loan freeze, 1986 US Act, disinvestment) and explain their impact on *regime finances and business pressure*.",
          ],
          modelAnswer:
            "Sporting and cultural boycotts—such as expulsion from the Olympics, the 1977 Gleneagles Agreement isolating Springbok rugby and cricket, and the 1988 Wembley Concert watched by 600 million people—primarily damaged white South African morale and global legitimacy, making white citizens feel like international outcasts. By contrast, economic and financial sanctions—especially Chase Manhattan Bank's 1985 loan freeze, the 1986 US Comprehensive Anti-Apartheid Act, and disinvestment by firms like Barclays and IBM—struck apartheid's financial survival by crashing the Rand and starving the state of capital, persuading white business leaders to demand negotiations.",
          markScheme: [
            {
              point: "Cites concrete sporting/cultural boycott examples (Olympics, Gleneagles 1977, rugby/cricket, Sun City, or 1988 Wembley).",
              keywords: ["gleneagles", "olympics", "rugby", "cricket", "wembley", "sun city"],
            },
            {
              point: "Explains the distinct psychological/moral impact of sports & culture (shattered white morale/identity, global awareness).",
              keywords: ["morale", "outcast", "pariah", "psychological", "awareness", "legitimacy"],
            },
            {
              point: "Cites concrete economic/financial sanctions examples (1985 Chase Manhattan loan freeze, 1986 US Act, UN arms embargo, corporate disinvestment).",
              keywords: ["chase manhattan", "1985", "1986", "disinvestment", "barclays", "ibm", "arms embargo", "loan"],
            },
            {
              point: "Explains the distinct financial/political impact of economic sanctions (currency/Rand collapse, recession, white business pressing Pretoria to negotiate).",
              keywords: ["rand", "capital", "recession", "business", "negotiations", "unaffordable", "survival"],
            },
          ],
          commonError: "Lumping all boycotts together as 'making South Africa poor' instead of contrasting **psychological morale** (sports/culture) with **financial survival** (banks/sanctions).",
        },
        {
          id: "anti-apartheid-south-africa-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          question: "What does the acronym **CODESA**—the 1991–93 multiparty talks that negotiated South Africa's democratic transition—stand for?",
          answer: {
            type: "text",
            accept: ["Convention for a Democratic South Africa", "Convention for Democratic South Africa"],
            display: "Convention for a Democratic South Africa",
          },
          hints: [
            "C = Convention, DE = Democratic, SA = South Africa.",
            "It convened after Mandela's 1990 release to plan an interim constitution.",
          ],
          solution: ["**CODESA** stands for the **Convention for a Democratic South Africa**."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          question: "Which major obstacle nearly derailed the 1990–93 transition talks between Mandela's release and the April 1994 elections?",
          options: [
            "A sudden refusal by Nelson Mandela to allow white voting",
            "A unanimous vote by African nations to restore Bantustans",
            "Immediate withdrawal of all United Nations election observers",
            "Severe political violence including Boipatong and Chris Hani's murder",
          ],
          answerIndex: 3,
          hints: [
            "Remember clashes between ANC and IFP supporters alongside far-right white extremist attacks.",
            "Recall the tense crisis of April 1993.",
          ],
          explanation:
            "Thousands died in township clashes (such as the **1992 Boipatong massacre**) and the **April 1993 assassination of Chris Hani**, pushing South Africa to the edge of civil war before Mandela and de Klerk stabilised talks.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          question: "Who chaired South Africa's Truth and Reconciliation Commission (TRC, 1995–98)?",
          answer: {
            type: "text",
            accept: ["Desmond Tutu", "Archbishop Desmond Tutu", "Archbishop Tutu", "Tutu"],
            display: "Archbishop Desmond Tutu",
          },
          hints: [
            "He was the Anglican Archbishop of Cape Town who had won the 1984 Nobel Peace Prize.",
            "His surname begins with 'T'.",
          ],
          solution: ["**Archbishop Desmond Tutu** chaired the TRC, guiding hearings built on restorative justice (*ubuntu*)."],
        },
        {
          id: "anti-apartheid-south-africa-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          marks: 4,
          question: "Explain THREE distinct reasons why President F.W. de Klerk chose to unban the ANC and free Nelson Mandela in February 1990.",
          hints: [
            "Reason 1: Economic/financial collapse (sanctions, 1985 debt crisis, costly border wars).",
            "Reason 2: Internal resistance (UDF/COSATU making townships ungovernable).",
            "Reason 3: End of the Cold War (1989 Fall of the Berlin Wall) changing the strategic balance—plus link how they reinforced one another.",
          ],
          modelAnswer:
            "First, South Africa's economy was sliding into crisis due to the 1985 banking freeze, global sanctions, corporate disinvestment, and expensive regional wars in Angola and Namibia, leading white business elites to urge reform. Second, internal mass resistance led by the UDF and COSATU unions had made townships ungovernable, proving white minority rule could not survive permanently without full civil war. Third, the Fall of the Berlin Wall in November 1989 ended the Cold War—removing both the ANC's Soviet weapons backing and Western tolerance for Pretoria's 'anti-communist' excuse. Together, these converging pressures convinced de Klerk that negotiating in 1990 was his party's last chance to secure white minority safeguards.",
          markScheme: [
            {
              point: "Explains economic crisis (sanctions, disinvestment, 1985 loan freeze, costly border wars, or business pressure).",
              keywords: ["economy", "economic", "sanctions", "disinvestment", "debt", "business", "angola"],
            },
            {
              point: "Explains internal ungovernability (UDF boycotts, COSATU strikes, youth resistance making force unsustainable).",
              keywords: ["ungovernable", "udf", "cosatu", "strikes", "townships", "civil war"],
            },
            {
              point: "Explains the 1989 end of the Cold War (Berlin Wall / Soviet collapse altering both ANC backing and Western attitudes).",
              keywords: ["cold war", "berlin wall", "1989", "soviet", "communist"],
            },
            {
              point: "Explains de Klerk's pragmatic strategic calculation (negotiating from relative strength / securing minority safeguards).",
              keywords: ["converging", "safeguards", "pragmatic", "last chance", "negotiating", "together"],
            },
          ],
          commonError: "Giving only one reason ('because of sanctions') or claiming de Klerk acted purely out of sudden personal generosity.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "end-of-apartheid-1994",
          question: "In what percentage range did the ANC win South Africa's landmark April 1994 multiracial national election?",
          options: [
            "Around 35% of the vote",
            "Around 48% of the vote",
            "Around 63% of the vote",
            "Around 91% of the vote",
          ],
          answerIndex: 2,
          hints: [
            "The ANC won a clear majority, falling just short of a two-thirds (66.7%) supermajority.",
            "That result encouraged cooperative power-sharing in the Government of National Unity.",
          ],
          explanation:
            "The ANC won **62.6%** of the national vote (just below two-thirds), the National Party won **20.4%**, and the IFP won **10.5%**—producing a broad **Government of National Unity** under President Mandela.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "end-of-apartheid-1994",
          marks: 3,
          question: "Assess the Truth and Reconciliation Commission (TRC, 1995–98) by explaining ONE major success and ONE major limitation.",
          hints: [
            "Explain how truth-for-amnesty worked (restorative justice) and why it helped avoid civil war.",
            "Explain why some victims' families criticised amnesty OR note that economic inequality remained unresolved.",
          ],
          modelAnswer:
            "Operating under restorative justice, the TRC offered amnesty only for full, public confession of politically motivated crimes while giving thousands of victims a national platform to testify. Its major success was uncovering hidden apartheid atrocities and fostering peaceful reconciliation that helped South Africa avoid retaliatory civil war. However, a serious limitation was that families such as Steve Biko's felt confessed murderers walked free without punishment, while deep economic inequalities in land and wealth remained largely unchanged.",
          markScheme: [
            {
              point: "Accurately explains the TRC's restorative mechanism (amnesty in exchange for full public truthful confession / victims' hearings).",
              keywords: ["amnesty", "confession", "restorative", "testify", "truthful", "public"],
            },
            {
              point: "Explains a major success (uncovered hidden crimes, prevented civil war / revenge killings, promoted reconciliation).",
              keywords: ["civil war", "atrocities", "reconciliation", "revenge", "peaceful", "uncovered"],
            },
            {
              point: "Explains a major limitation (victims' families denied retributive justice/punishment OR continuing land/wealth inequality).",
              keywords: ["biko", "walked free", "punishment", "economic", "wealth", "land", "inequality"],
            },
          ],
          commonError: "Describing the TRC as a criminal court that jailed apartheid leaders instead of a restorative truth-for-amnesty commission.",
        },
        {
          id: "anti-apartheid-south-africa-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "end-of-apartheid-1994",
          marks: 4,
          question: "'Internal resistance inside South Africa was more important than international pressure in ending apartheid.' How far do you agree?",
          hints: [
            "Argue for internal resistance (Soweto 1976, Steve Biko, UDF boycotts, COSATU strikes making townships ungovernable).",
            "Argue for international pressure (1977 arms embargo, Gleneagles sports ban, 1985 bank freeze, 1986 US Act, 1989 Cold War end).",
            "Synthesise the feedback loop between them and deliver a clear, justified judgement.",
          ],
          modelAnswer:
            "Internal resistance was fundamental because Black South Africans themselves—from Steve Biko's Black Consciousness and 1976 Soweto youth to 1980s UDF boycotts and COSATU mine strikes—made townships ungovernable and proved minority rule had no future. Yet international pressure was also crucial: sporting boycotts (Gleneagles 1977) shattered white morale, the 1985 Chase Manhattan loan freeze and 1986 US Anti-Apartheid Act crippled state finances, and the 1989 end of the Cold War stripped Pretoria of Western tolerance. Crucially, both forces formed a feedback loop—foreign banks only pulled out in 1985 *because* township unrest made South Africa too risky. Therefore, I largely agree: external sanctions accelerated collapse, but relentless internal resistance was the primary engine that triggered those sanctions and forced 1990 talks.",
          markScheme: [
            {
              point: "Evidences internal resistance specifically (Soweto 1976, Biko, UDF, COSATU strikes, ungovernable townships).",
              keywords: ["soweto", "biko", "udf", "cosatu", "ungovernable", "strikes"],
            },
            {
              point: "Evidences international pressure specifically (Gleneagles/sports, 1985 bank freeze, 1986 US Act, disinvestment, Cold War 1989).",
              keywords: ["gleneagles", "chase manhattan", "1985", "1986", "sanctions", "cold war", "morale"],
            },
            {
              point: "Links the two factors causally (internal unrest scared investors/banks into imposing sanctions).",
              keywords: ["feedback", "triggered", "risky", "because", "accelerated", "pulled out"],
            },
            {
              point: "Delivers a clear, justified overall judgement answering 'How far do you agree?'.",
              keywords: ["largely agree", "therefore", "primary", "engine", "fundamental", "overall"],
            },
          ],
          commonError: "Writing two disconnected lists ('internal things' then 'external things') without linking how township unrest caused the 1985 financial crisis.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "anti-apartheid-south-africa-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "apartheid-system-1948",
      question: "Under Grand Apartheid, ~70% of South Africa's population was assigned to 13% of the land while ~18% (white citizens) controlled 87%. What key strategic aim lay behind splitting that 13% into ten *separate* ethnic Bantustans rather than one unified Black territory?",
      options: [
        "Divide-and-rule: fracturing Black unity along ethnic tribal lines",
        "Improving railway efficiency between Johannesburg and Cape Town",
        "Ensuring each Bantustan owned equal shares of deep gold deposits",
        "Complying with the 1955 Freedom Charter adopted at Kliptown",
      ],
      answerIndex: 0,
      hints: [
        "Think about the classic imperial strategy of turning a large majority into smaller competing minorities.",
        "Each homeland (Transkei for Xhosa, KwaZulu for Zulu, etc.) was tied to a single language group.",
      ],
      explanation:
        "Splitting the Black majority into ten ethnic homelands was calculated **divide-and-rule**: Pretoria aimed to fracture unified African nationalism (ANC) by promoting rival ethnic identities.",
    },
    {
      id: "anti-apartheid-south-africa-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sharpeville-armed-struggle",
      question: "What was the surname of the Pan Africanist Congress (PAC) founder who broke away from the ANC in 1959, led the March 1960 anti-pass campaign, and was kept in solitary confinement on Robben Island under a special annual parliamentary renewal clause?",
      answer: {
        type: "text",
        accept: ["Sobukwe", "Robert Sobukwe"],
        display: "Sobukwe (Robert Sobukwe)",
      },
      hints: [
        "He was an Africanist lecturer at the University of the Witwatersrand whose first name was Robert.",
        "His seven-letter surname begins with 'So...'.",
      ],
      solution: ["**Robert Sobukwe** founded the PAC in 1959 and led the peaceful March 1960 pass-law defiance campaign; Parliament passed a special annual detention clause targeting him specifically."],
    },
    {
      id: "anti-apartheid-south-africa-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "soweto-1976-sanctions",
      question: "Why did Steve Biko's Black Consciousness Movement define 'Black' politically to include African, Coloured, and Indian South Africans together?",
      options: [
        "Because the Population Registration Act grouped all three as one",
        "To overcome apartheid's divide-and-rule categories through shared solidarity",
        "Because Coloured and Indian citizens already held equal voting rights",
        "To persuade P.W. Botha to expand the 1983 Tricameral Parliament",
      ],
      answerIndex: 1,
      hints: [
        "Remember how the 1950 Population Registration Act deliberately split non-white groups into separate tiers.",
        "How did uniting all oppressed groups under one proud 'Black' identity fight that strategy?",
      ],
      explanation:
        "Apartheid deliberately divided African, Coloured, and Indian South Africans with unequal privileges; **Steve Biko** forged a shared political identity uniting all oppressed communities against white supremacy.",
    },
    {
      id: "anti-apartheid-south-africa-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sharpeville-armed-struggle",
      marks: 4,
      question: "Using NOP (Nature, Origin, Purpose) and contextual knowledge, evaluate how useful Nelson Mandela's 1964 Rivonia Trial speech (*'I am Prepared to Die'*) is to a historian investigating why the ANC turned to sabotage.",
      hints: [
        "Identify Nature & Origin (a four-hour statement from the dock in Pretoria Supreme Court, April 1964, facing the death penalty).",
        "Explain Purpose (defending MK's turn to sabotage to South Africans and international press while articulating a non-racial democratic ideal).",
        "Weigh its high usefulness against a thoughtful limitation (e.g. crafted strategically for a global courtroom audience, omits rival PAC or later 1980s viewpoints).",
      ],
      modelAnswer:
        "Delivered from the dock of the Pretoria Supreme Court in April 1964 while facing possible execution, Mandela's statement is a high-stakes primary courtroom speech whose purpose was to explain MK's sabotage to the world and defend a non-racial democratic South Africa. It is deeply useful because it captures first-hand why ANC leaders abandoned strict non-violence after Sharpeville and the 1960 banning, while stressing their deliberate effort to avoid civilian casualties. However, because Mandela consciously spoke to win global moral sympathy and avoid the gallows, a historian must cross-reference it with internal MK operational records, PAC accounts, and state archives to build a complete picture.",
      markScheme: [
        {
          point: "Accurately states Nature and Origin (statement from the dock in Pretoria Supreme Court, April 1964, facing the death penalty).",
          keywords: ["dock", "courtroom", "april", "pretoria", "execution", "death penalty"],
        },
        {
          point: "Explains Purpose (justifying sabotage after peaceful paths closed / appealing to international opinion & non-racial ideals).",
          keywords: ["justify", "explain", "world", "international", "non-racial", "democratic"],
        },
        {
          point: "Explains high utility using own knowledge (links directly to Sharpeville/banning and MK's initial infrastructure-only policy).",
          keywords: ["sharpeville", "banning", "banned", "civilian", "first-hand", "non-violence"],
        },
        {
          point: "Identifies a nuanced limitation and suggests cross-referencing (strategic courtroom persuasion; needs MK records / PAC / state sources).",
          keywords: ["sympathy", "cross-reference", "pac", "archives", "limitation", "gallows", "complete"],
        },
      ],
      commonError: "Calling the speech 'unreliable because he was on trial' without explaining *why* his courtroom purpose makes it priceless evidence of ANC self-justification and global messaging.",
    },
    {
      id: "anti-apartheid-south-africa-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "soweto-1976-sanctions",
      question: "Why did President P.W. Botha's August 1985 'Rubicon Speech' accelerate apartheid's financial collapse instead of calming international markets?",
      options: [
        "Botha unexpectedly announced immediate majority rule overnight",
        "Botha abolished the Johannesburg Stock Exchange during the address",
        "Botha's defiant refusal to reform dashed hopes and triggered capital flight",
        "Botha invited COSATU leaders to take over the treasury ministry",
      ],
      answerIndex: 2,
      hints: [
        "Diplomats and investors had been led to expect major reforms and possibly Mandela's release.",
        "Instead, Botha wagged his finger angrily and refused to bow to world pressure.",
      ],
      explanation:
        "Investors expected major reforms in Botha's 1985 **Rubicon Speech**; when he stubbornly refused to bend, **Chase Manhattan Bank** and global lenders lost all confidence, triggering a sudden debt crisis and Rand crash.",
    },
    {
      id: "anti-apartheid-south-africa-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "end-of-apartheid-1994",
      question: "How many days passed between President F.W. de Klerk's landmark parliamentary speech unbanning the ANC (2 February 1990) and Nelson Mandela walking free from prison (11 February 1990)?",
      answer: { type: "number", value: 9, display: "9 days" },
      hints: [
        "Subtract 2 from 11 in February 1990.",
        "Those dramatic days reshaped South African and world history.",
      ],
      solution: ["11 − 2 = **9 days** separated de Klerk's unbanning speech (2 February) and Mandela's historic walk to freedom (11 February 1990)."],
    },
    {
      id: "anti-apartheid-south-africa-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "end-of-apartheid-1994",
      question: "Historian X credits Mandela and de Klerk's statesmanship for ending apartheid peacefully; Historian Y credits unnamed Soweto students, UDF organisers, and striking workers. What historiographical debate does this illustrate?",
      options: [
        "Primary written decrees versus archaeological oral artefacts",
        "Economic Marxism versus purely environmental geography",
        "Short-term diplomatic accidents versus ancient colonial treaties",
        "Top-down 'Great Man' leadership versus bottom-up grassroots history",
      ],
      answerIndex: 3,
      hints: [
        "Compare this directly with the debate over MLK Jr./LBJ versus ordinary activists in US Civil Rights.",
        "Look at who drives historical change: elite negotiators at the top or mass movements from below?",
      ],
      explanation:
        "This classic Year 9 historiographical debate contrasts **top-down leadership ('Great Man' history)** with **bottom-up social history**—and the strongest essays explain how grassroots pressure forced elites to the table where statesmanship prevented civil war.",
    },
    {
      id: "anti-apartheid-south-africa-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "end-of-apartheid-1994",
      marks: 4,
      question: "Compare why protest succeeded in the **US Civil Rights Movement (1954–65)** and the **Anti-Apartheid Movement (1948–94)**, identifying ONE major similarity and ONE major difference in how each overcame state opposition.",
      hints: [
        "Similarity: e.g. economic pressure (Montgomery/sit-ins vs COSATU/sanctions), youth courage (Greensboro/Birmingham children vs Soweto 1976), global visual media (fire hoses/Bloody Sunday vs Hector Pieterson), or ongoing post-victory economic gaps.",
        "Difference: US activists leveraged a federal Constitution, Supreme Court, and sympathetic president over Southern states, whereas South Africa's national apartheid state banned peaceful parties, forcing a mix of MK sabotage, mass ungovernability, and global sanctions.",
      ],
      modelAnswer:
        "One major similarity is that both movements combined fearless youth activism with powerful media images and economic leverage: televised brutality at Birmingham (1963) and Selma (1965) mirrored Sam Nzima's photo of Hector Pieterson at Soweto (1976), while Montgomery's bus boycott paralleled COSATU strikes and global disinvestment in making racial oppression too costly. One fundamental difference lay in political structure: US activists could use non-violence to compel a federal Supreme Court and President Johnson to overrule Southern states, whereas South Africa's national apartheid government held total control, shot crowds at Sharpeville, and banned the ANC—forcing South Africans to rely on armed sabotage (MK), township ungovernability (UDF), and international financial sanctions alongside Cold War shifts to reach democracy in 1994.",
      markScheme: [
        {
          point: "Identifies a clear, specific similarity supported by evidence from BOTH movements (media/TV photos, youth courage, or economic leverage).",
          keywords: ["birmingham", "selma", "soweto", "pieterson", "montgomery", "cosatu", "economic", "media"],
        },
        {
          point: "Identifies the structural political difference (US federal system/Constitution/LBJ vs South Africa's centralised apartheid state with no higher domestic court).",
          keywords: ["federal", "supreme court", "johnson", "centralised", "national", "overrule", "structure"],
        },
        {
          point: "Explains how that difference shaped contrasting tactics (pure US non-violence vs South African MK sabotage, UDF ungovernability, and global sanctions).",
          keywords: ["sharpeville", "banned", "mk", "sabotage", "sanctions", "udf", "cold war"],
        },
        {
          point: "Reaches a clear comparative insight about how protest movements adapt methods to their political context.",
          keywords: ["difference", "similarity", "structure", "forcing", "paralleled", "mirrored"],
        },
      ],
      commonError: "Writing everything you know about one movement without making direct side-by-side comparisons explaining *why* their tactics differed.",
    },
  ],
};
