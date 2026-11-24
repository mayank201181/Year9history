import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "causes-of-vietnam-war-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "indochina-decolonisation",
      question:
        "Which Vietnamese victory in May 1954 ended French colonial rule in Indochina?",
      options: [
        "Battle of Dien Bien Phu",
        "Battle of the Marne",
        "Battle of Ap Bac",
        "Battle of Pleiku",
      ],
      answerIndex: 0,
      hints: [
        "General Vo Nguyen Giap hauled artillery onto ridges surrounding a French valley base.",
        "Roughly 10,000 French troops surrendered on 7 May 1954, leading straight to the Geneva Accords.",
      ],
      explanation:
        "Viet Minh forces defeated France decisively at the Battle of Dien Bien Phu in May 1954, forcing France to negotiate withdrawal at Geneva.",
    },
    {
      id: "causes-of-vietnam-war-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "indochina-decolonisation",
      question:
        "In what year were the Geneva Accords signed, temporarily dividing Vietnam at the 17th parallel?",
      answer: { type: "number", value: 1954, display: "1954" },
      traps: [
        {
          spec: { type: "number", value: 1956 },
          feedback: "1956 was the year the promised reunification elections were supposed to happen — the Accords were signed two years earlier.",
        },
        {
          spec: { type: "number", value: 1964 },
          feedback: "1964 was the Gulf of Tonkin Incident — Geneva happened ten years earlier right after Dien Bien Phu.",
        },
      ],
      hints: [
        "It took place in July of the same year France lost at Dien Bien Phu.",
      ],
      solution: [
        "The **Geneva Accords** were signed in **July 1954**, dividing Vietnam temporarily at the 17th parallel.",
      ],
    },
    {
      id: "causes-of-vietnam-war-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cold-war-ideology-domino",
      question:
        "What did Eisenhower's **Domino Theory (1954)** warn would happen if Indochina / Vietnam became Communist?",
      options: [
        "France would immediately rejoin the Soviet Union in Europe",
        "Laos, Cambodia, Thailand, Malaya and Singapore would fall next",
        "China would withdraw from Communism and sign SEATO treaties",
        "Japan would re-occupy French Indochina within six months",
      ],
      answerIndex: 1,
      hints: [
        "Picture a row of standing Southeast Asian countries stretching southward toward the Straits of Malacca.",
        "Remember the Malayan Emergency (1948–60) made this regional fear feel urgent to Britain and the US.",
      ],
      explanation:
        "Eisenhower warned that losing Vietnam would trigger a regional chain reaction toppling Laos, Cambodia, Thailand, Burma, Malaya and Singapore into Communism.",
    },
    {
      id: "causes-of-vietnam-war-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "diem-viet-cong-escalation",
      question:
        "Name the authoritarian, US-backed Catholic President of South Vietnam (1955–1963) who cancelled the 1956 elections.",
      answer: {
        type: "text",
        accept: ["Ngo Dinh Diem", "Diem"],
        display: "Ngo Dinh Diem",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ho Chi Minh", "Ho"] },
          feedback: "Ho Chi Minh was the Communist leader of North Vietnam — the anti-Communist ruler of South Vietnam was Ngo Dinh Diem.",
        },
      ],
      hints: [
        "His family's corruption, Strategic Hamlets and persecution of Buddhists led to his overthrow in November 1963.",
      ],
      solution: [
        "**Ngo Dinh Diem** ruled South Vietnam from 1955 until he was overthrown and assassinated in November 1963.",
      ],
    },
    {
      id: "causes-of-vietnam-war-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "diem-viet-cong-escalation",
      question:
        "Why did the 1962 **Strategic Hamlets Programme** weaken South Vietnam instead of defeating the Viet Cong?",
      options: [
        "It gave free rifles and jungle supplies directly to North Vietnamese regiments",
        "It withdrew all American military advisers back to Hawaii before 1963",
        "It uprooted peasants from ancestral farmland into guarded compounds, fuelling anger",
        "It organised free democratic elections across North and South Vietnam in 1962",
      ],
      answerIndex: 2,
      hints: [
        "Think about how traditional rural Vietnamese families reacted to being forced off ancestral land and graves.",
        "Rather than isolating guerrillas, it helped the NLF / Viet Cong recruit angry villagers.",
      ],
      explanation:
        "Forcing peasants off their farms into barbed-wire compounds run by corrupt officials deeply alienated rural communities and boosted support for the Viet Cong.",
    },
    {
      id: "causes-of-vietnam-war-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "diem-viet-cong-escalation",
      question:
        "What two-word nickname was commonly given to the Communist guerrilla fighters of the National Liberation Front (NLF) in South Vietnam?",
      answer: {
        type: "text",
        accept: ["Viet Cong", "Vietcong", "VC"],
        display: "Viet Cong",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Viet Minh", "Vietminh"] },
          feedback: "The Viet Minh fought Japan and France up to 1954 — the South Vietnamese Communist guerrillas formed in 1960 were the Viet Cong.",
        },
      ],
      hints: [
        "It begins with 'Viet' — do not confuse them with the 1941–54 Viet Minh!",
        "Abbreviated 'VC', short for 'Vietnamese Communists'.",
      ],
      solution: [
        "The armed fighters of the NLF (founded December 1960) were widely called the **Viet Cong**.",
      ],
    },
    {
      id: "causes-of-vietnam-war-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "What sweeping authority did Congress grant President Lyndon B. Johnson in the **Gulf of Tonkin Resolution (August 1964)**?",
      options: [
        "Permission to sell South Vietnam back to France under Geneva terms",
        "Orders to reduce US military advisers in Saigon below 500 personnel",
        "Authority to form a joint Communist cabinet with Ho Chi Minh in Hanoi",
        "Power to take 'all necessary measures' in Vietnam without a formal war declaration",
      ],
      answerIndex: 3,
      hints: [
        "Historians compare this 7 August 1964 resolution to a presidential 'blank cheque'.",
        "LBJ used it in March 1965 to launch Operation Rolling Thunder and land Marines at Da Nang.",
      ],
      explanation:
        "Passed almost unanimously (only two Senators opposed), the Gulf of Tonkin Resolution gave LBJ open-ended power to escalate militarily in Vietnam without Congress formally declaring war.",
    },
    {
      id: "causes-of-vietnam-war-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "How many years elapsed between the Geneva Accords dividing Vietnam (1954) and the Gulf of Tonkin Resolution (1964)?",
      answer: { type: "number", value: 10, display: "10 years" },
      hints: [
        "Subtract 1954 from 1964.",
        "{{1964 - 1954 = 10}}.",
      ],
      solution: [
        "{{1964 - 1954 = 10}} years of gradual escalation separated Geneva (1954) from the Gulf of Tonkin flashpoint (1964).",
      ],
    },
    {
      id: "causes-of-vietnam-war-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Which contrast accurately compares the escalation of **WWI (1914)** with the **Vietnam War (1945–1965)**?",
      options: [
        "WWI exploded in 37 days via alliances; Vietnam escalated gradually over 20 years",
        "Vietnam exploded in 37 days via alliances; WWI escalated gradually over 20 years",
        "Both wars lacked any flashpoint and began after peaceful international referendums",
        "WWI was driven by Cold War Containment; Vietnam was driven by the Schlieffen Plan",
      ],
      answerIndex: 0,
      hints: [
        "Compare 28 June–4 August 1914 against 1945 → 1954 → 1961 → 1965 in Vietnam.",
        "One snapped shut via rigid railway mobilisation plans; the other crept step by step across four US presidents.",
      ],
      explanation:
        "WWI erupted within 37 days of Sarajevo because rigid alliances and mobilisation schedules accelerated the crisis, whereas American combat in Vietnam followed twenty years of gradual Cold War escalation.",
    },
    {
      id: "causes-of-vietnam-war-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "diem-viet-cong-escalation",
      question:
        "Explain two reasons why the promised July 1956 Vietnamese reunification elections never took place.",
      marks: 2,
      hints: [
        "Think about who US intelligence predicted would win roughly 80% of a free vote.",
        "Think about the legal pretext Ngo Dinh Diem and the US used regarding the Geneva Accords.",
      ],
      modelAnswer:
        "First, US intelligence — and President Eisenhower himself — estimated that nationalist hero Ho Chi Minh would win around 80% of the nationwide vote, handing all of Vietnam to Communism. Second, Ngo Dinh Diem refused to participate by arguing that South Vietnam had never signed the 1954 Geneva Accords, while Washington backed his cancellation to uphold Containment.",
      markScheme: [
        {
          point: "Fear that Ho Chi Minh / Communists would win (~80% of the vote)",
          keywords: ["80%", "ho chi minh", "win", "communism", "communist"],
        },
        {
          point: "Diem / US never signed Geneva Accords or US Containment overrode democracy",
          keywords: ["never signed", "not sign", "didn't sign", "containment", "diem"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "causes-of-vietnam-war-p1",
      title: "Practice Paper 1 — Indochina, Cold War Ideology & Diem's Regime",
      questions: [
        {
          id: "causes-of-vietnam-war-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "indochina-decolonisation",
          question:
            "Name the Vietnamese nationalist and Communist leader who founded the Viet Minh in 1941 and declared independence in 1945.",
          answer: {
            type: "text",
            accept: ["Ho Chi Minh"],
            display: "Ho Chi Minh",
          },
          hints: [
            "He led North Vietnam from Hanoi and gave his name to the jungle supply trail running through Laos and Cambodia.",
          ],
          solution: [
            "**Ho Chi Minh** founded the Viet Minh in 1941 and proclaimed Vietnamese independence on 2 September 1945.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "indochina-decolonisation",
          question:
            "Along which numbered parallel of latitude did the 1954 Geneva Accords temporarily divide Vietnam? (e.g. '38th parallel' or '38')",
          answer: {
            type: "text",
            accept: ["17th parallel", "17th", "17", "17 parallel", "seventeenth parallel"],
            display: "17th parallel",
          },
          traps: [
            {
              spec: { type: "text", accept: ["38th parallel", "38th", "38", "38 parallel"] },
              feedback: "The 38th parallel divided North and South Korea — Vietnam was divided further south at the 17th parallel.",
            },
          ],
          hints: [
            "Not 38 (Korea) — Vietnam's DMZ sat at a smaller prime number between 15 and 20.",
          ],
          solution: [
            "The 1954 Geneva Accords divided Vietnam temporarily at the **17th parallel**.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "indochina-decolonisation",
          question:
            "Which Viet Minh general planned the decisive siege victory over France at Dien Bien Phu in May 1954?",
          options: [
            "Vo Nguyen Giap",
            "Ngo Dinh Diem",
            "Ngo Dinh Nhu",
            "Thich Quang Duc",
          ],
          answerIndex: 0,
          hints: [
            "He famously organised tens of thousands of porters to drag heavy artillery up steep mountain ridges.",
            "Do not confuse him with South Vietnam's president (Diem) or the protesting Buddhist monk (Thich Quang Duc).",
          ],
          explanation:
            "General **Vo Nguyen Giap** masterminded the Viet Minh siege of Dien Bien Phu, forcing 10,000 French troops to surrender on 7 May 1954.",
        },
        {
          id: "causes-of-vietnam-war-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "cold-war-ideology-domino",
          question:
            "In what year did Mao Zedong's Communists win the Chinese Civil War, dramatically increasing US fears of Communism spreading into Indochina?",
          answer: { type: "number", value: 1949, display: "1949" },
          traps: [
            {
              spec: { type: "number", value: 1954 },
              feedback: "1954 was Dien Bien Phu and Geneva — Mao's Communist revolution in China took place five years earlier.",
            },
            {
              spec: { type: "number", value: 1945 },
              feedback: "1945 was the end of WWII — China became Communist four years later.",
            },
          ],
          hints: [
            "It happened two years after the 1947 Truman Doctrine and one year before the 1950 Korean War.",
            "Right at the end of the 1940s.",
          ],
          solution: [
            "China became Communist under Mao Zedong in **1949**, transforming Vietnam into an urgent Cold War front for Washington.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cold-war-ideology-domino",
          question:
            "Which 1947 US presidential announcement established the Cold War policy of **Containment**?",
          options: [
            "The Geneva Accords",
            "The Truman Doctrine",
            "The Treaty of London",
            "The Strategic Hamlets Plan",
          ],
          answerIndex: 1,
          hints: [
            "Named after President Harry S. Truman, who pledged US aid to countries resisting Communist takeover.",
            "It shaped American foreign policy across Europe and Asia for decades.",
          ],
          explanation:
            "President Harry S. Truman announced the **Truman Doctrine** in March 1947, launching Containment to halt the spread of Communism.",
        },
        {
          id: "causes-of-vietnam-war-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "cold-war-ideology-domino",
          question:
            "What five-letter acronym stood for the anti-Communist Southeast Asian collective defence pact created in September 1954 after the Geneva Accords?",
          answer: {
            type: "text",
            accept: ["SEATO"],
            display: "SEATO",
          },
          traps: [
            {
              spec: { type: "text", accept: ["NATO"] },
              feedback: "NATO was the North Atlantic alliance in Europe — its 1954 Southeast Asian counterpart began with 'S-E'.",
            },
            {
              spec: { type: "text", accept: ["ASEAN"] },
              feedback: "ASEAN was formed later in 1967 — the 1954 US-led Cold War alliance was SEATO.",
            },
          ],
          hints: [
            "Take the initials of **S**outh**e**ast **A**sia **T**reaty **O**rganization.",
            "Five capital letters ending in ATO (like NATO).",
          ],
          solution: [
            "**SEATO** (Southeast Asia Treaty Organization, 1954) placed South Vietnam under a Cold War security umbrella.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cold-war-ideology-domino",
          question:
            "Which real 1948–1960 conflict directly south of Thailand made the Domino Theory seem dangerously plausible to British and American leaders in Malaya and Singapore?",
          options: [
            "The Franco-Prussian War",
            "The Bosnian Annexation Crisis",
            "The Malayan Emergency",
            "The First Balkan War",
          ],
          answerIndex: 2,
          hints: [
            "British and Commonwealth troops fought Malayan Communist Party guerrillas in jungles north of Singapore for twelve years.",
            "It began in 1948 and officially ended in 1960.",
          ],
          explanation:
            "The **Malayan Emergency (1948–1960)** saw British and Commonwealth forces combating Communist insurgents in Malaya alongside left-wing unrest in Singapore, reinforcing Western fears of falling Asian dominoes.",
        },
        {
          id: "causes-of-vietnam-war-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "diem-viet-cong-escalation",
          question:
            "In what year was the National Liberation Front (NLF / Viet Cong) formally established in South Vietnam?",
          answer: { type: "number", value: 1960, display: "1960" },
          traps: [
            {
              spec: { type: "number", value: 1941 },
              feedback: "1941 was when Ho Chi Minh founded the Viet Minh — the NLF / Viet Cong was formed nearly twenty years later in December 1960.",
            },
            {
              spec: { type: "number", value: 1964 },
              feedback: "1964 was the Gulf of Tonkin — the NLF was founded four years earlier.",
            },
          ],
          hints: [
            "It formed in December at the start of the 1960s, four years after the cancelled 1956 elections.",
            "One year before JFK became US President in 1961.",
          ],
          solution: [
            "The **National Liberation Front (NLF / Viet Cong)** was founded in **December 1960** to overthrow Diem and reunify Vietnam.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "diem-viet-cong-escalation",
          question:
            "What proportion of South Vietnam's population practised Buddhism while being ruled by Ngo Dinh Diem's Catholic inner circle?",
          options: [
            "Roughly 5–10% of the population",
            "Roughly 20–25% of the population",
            "Roughly 40–45% of the population",
            "Roughly 70–80% of the population",
          ],
          answerIndex: 3,
          hints: [
            "Diem belonged to a small Catholic minority (around 10%), while the vast majority of South Vietnamese were Buddhists.",
            "This stark imbalance explains why banning Buddhist flags triggered nationwide outrage in 1963.",
          ],
          explanation:
            "Roughly 70–80% of South Vietnamese were Buddhists. Diem's favouritism toward fellow Catholics and violent crackdowns on Buddhist protests sparked the fatal 1963 Buddhist Crisis.",
        },
        {
          id: "causes-of-vietnam-war-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "diem-viet-cong-escalation",
          question:
            "Calculate the increase in US military advisers in South Vietnam under President Kennedy, rising from 900 (1960) to 16,000 (November 1963).",
          answer: { type: "number", value: 15100, display: "15,100" },
          traps: [
            {
              spec: { type: "number", value: 16900 },
              feedback: "You added 16,000 + 900 instead of subtracting 900 from 16,000 to find the increase.",
            },
          ],
          hints: [
            "Subtract Eisenhower's starting figure (900) from Kennedy's late-1963 total (16,000).",
            "{{16000 - 900 = 15100}}.",
          ],
          solution: [
            "Increase under JFK: {{16000 - 900 = 15100}} additional US military advisers.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "diem-viet-cong-escalation",
          question:
            "How did North Vietnam keep the Viet Cong supplied with weapons, food and fighters inside South Vietnam despite the 17th parallel DMZ?",
          options: [
            "Via the camouflaged Ho Chi Minh Trail winding through Laos and Cambodia",
            "By shipping heavy artillery directly through the port of Singapore",
            "By flying commercial airliners straight into Saigon's airport every week",
            "Through tunnels dug under the South China Sea to the Philippines",
          ],
          answerIndex: 0,
          hints: [
            "Think of the vast jungle network bypassing the fortified border by crossing two former French Indochinese neighbours.",
            "Named after North Vietnam's revolutionary founder.",
          ],
          explanation:
            "North Vietnam moved troops and thousands of tonnes of supplies south along the **Ho Chi Minh Trail**, a jungle network threading through Laos and Cambodia.",
        },
        {
          id: "causes-of-vietnam-war-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "indochina-decolonisation",
          question:
            "Explain two outcomes of France's defeat at Dien Bien Phu (May 1954) for the future of Vietnam.",
          marks: 2,
          hints: [
            "First, mention what happened to French colonial power in Indochina.",
            "Second, state what the July 1954 Geneva Accords did to Vietnam's map and elections.",
          ],
          modelAnswer:
            "First, the surrender of 10,000 French soldiers forced France to end its colonial rule and withdraw from Indochina, granting independence to Laos and Cambodia. Second, it led directly to the July 1954 Geneva Accords, which temporarily divided Vietnam at the 17th parallel with nationwide reunification elections promised for 1956.",
          markScheme: [
            {
              point: "Ended French colonial rule / forced French withdrawal from Indochina",
              keywords: ["colonial", "withdraw", "withdrawal", "ended", "indochina"],
            },
            {
              point: "Led to the Geneva Accords temporarily dividing Vietnam at the 17th parallel (with 1956 elections)",
              keywords: ["geneva", "17th", "parallel", "1956", "divided"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "cold-war-ideology-domino",
          question:
            "Explain why Cold War ideology — specifically **Containment** and the **Domino Theory** — pushed the United States into supporting France and then South Vietnam.",
          marks: 3,
          hints: [
            "Explain the 1947 Truman Doctrine / Containment and the shocks of China (1949) & Korea (1950–53).",
            "Explain Eisenhower's 1954 Domino Theory (naming regional neighbours including Malaya and Singapore).",
            "Give concrete US action (paying 80% of France's war costs, SEATO, funding South Vietnam).",
          ],
          modelAnswer:
            "Under the 1947 Truman Doctrine, Washington committed to stopping Communism from spreading to any new nation — a fear sharpened dramatically after Mao's 1949 victory in China and the 1950–53 Korean War. President Eisenhower's April 1954 metaphor warned that if Vietnam became Communist, Laos, Cambodia, Thailand, Malaya and Singapore would topple one after another (especially worrying during the Malayan Emergency). Driven by this fear, America bankrolled roughly 80% of France's colonial war and then poured aid and SEATO backing into anti-Communist South Vietnam.",
          markScheme: [
            {
              point: "Truman Doctrine (1947) / 1949 China / Korean War heightened US alarm over Asian Communism",
              keywords: ["truman", "1949", "china", "korea", "korean", "spreading"],
            },
            {
              point: "Eisenhower's 1954 fear that Laos, Cambodia, Thailand, Malaya & Singapore would topple next",
              keywords: ["eisenhower", "laos", "cambodia", "malaya", "singapore", "topple"],
            },
            {
              point: "Concrete US action: paid ~80% of France's war / created SEATO / funded Saigon",
              keywords: ["80%", "seato", "funded", "bankrolled", "aid"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "diem-viet-cong-escalation",
          question:
            "Explain why Ngo Dinh Diem's policies between 1955 and 1963 actually strengthened the Viet Cong insurgency in South Vietnam.",
          marks: 4,
          hints: [
            "Start with cancelling the 1956 elections (cutting off peaceful unity).",
            "Mention corruption, nepotism and reversing land reforms in favour of rich landlords.",
            "Explain the Strategic Hamlets Programme (1962) uprooting peasants.",
            "Explain religious repression and the 1963 Buddhist Crisis.",
          ],
          modelAnswer:
            "First, by cancelling the 1956 reunification elections, Saigon blocked peaceful unity and convinced southern nationalists that only armed struggle could unite Vietnam. Second, Diem's corrupt nepotism and landlord-friendly policies reversed popular Viet Minh rent cuts, alienating poor rural farmers. Third, the 1962 Strategic Hamlets scheme forcibly uprooted villagers from ancestral land into barbed-wire compounds, pushing angry peasants to join or shelter the NLF. Finally, his Catholic elite's persecution of the 70–80% Buddhist majority triggered the 1963 Buddhist Crisis — including Thich Quang Duc's protest — destroying government legitimacy and sparking the November 1963 coup.",
          markScheme: [
            {
              point: "Blocked 1956 elections, shutting off peaceful reunification",
              keywords: ["1956", "elections", "peaceful", "reunification"],
            },
            {
              point: "Corruption / nepotism / reversing land reform in favour of wealthy landlords",
              keywords: ["corrupt", "corruption", "nepotism", "landlords", "land"],
            },
            {
              point: "Strategic Hamlets (1962) forcibly relocated peasants from ancestral farms, boosting recruitment",
              keywords: ["strategic hamlets", "uprooted", "barbed-wire", "ancestral", "compounds"],
            },
            {
              point: "Persecution of Buddhist majority / 1963 Buddhist Crisis / Thich Quang Duc destroyed legitimacy",
              keywords: ["buddhist", "catholic", "thich quang duc", "1963", "coup"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "diem-viet-cong-escalation",
          question:
            "How far did President **John F. Kennedy (1961–1963)** make full-scale American war in Vietnam unavoidable?",
          marks: 4,
          hints: [
            "Show how JFK deepened US commitment (900 → 16,000 advisers, Green Berets, helicopters, backing the Nov 1963 coup against Diem).",
            "Explain why this raised American Cold War prestige so high that withdrawing became politically costly.",
            "Add balance: JFK refused to send regular US ground combat divisions and some historians note he still hesitated.",
            "Conclude with a weighed judgement pointing to LBJ's choices in 1964–65.",
          ],
          modelAnswer:
            "Kennedy significantly narrowed America's exit routes by multiplying military advisers from 900 to 16,000, deploying Green Berets and helicopter units, and approving the November 1963 coup that toppled Ngo Dinh Diem. By staking US Cold War prestige so publicly on Saigon's survival — while leaving a chaotic succession of coups behind — JFK made withdrawal politically explosive for his successor. However, full ground war was not yet completely unavoidable in November 1963, because Kennedy still refused to deploy regular American combat divisions and questioned whether US troops could win a Vietnamese civil war. Therefore, JFK built the springboard of escalation, yet President Johnson still made the decisive leap into full war after August 1964.",
          markScheme: [
            {
              point: "JFK expanded advisers from 900 to 16,000 (helicopters / Green Berets) and backed the Nov 1963 Diem coup",
              keywords: ["16,000", "16000", "900", "advisers", "coup", "helicopters"],
            },
            {
              point: "Staked US prestige and left unstable Saigon regimes, raising political cost of withdrawal",
              keywords: ["prestige", "chaotic", "withdrawal", "unstable", "exit"],
            },
            {
              point: "Balance: JFK refused to send regular US combat divisions before his assassination",
              keywords: ["however", "refused", "combat divisions", "ground troops", "questioned"],
            },
            {
              point: "Clear judgement distinguishing JFK's foundation from LBJ's decisive 1964–65 leap",
              keywords: ["therefore", "johnson", "lbj", "1964", "decisive"],
            },
          ],
        },
      ],
    },

    {
      id: "causes-of-vietnam-war-p2",
      title: "Practice Paper 2 — Gulf of Tonkin (1964) & Comparing WWI vs Vietnam",
      questions: [
        {
          id: "causes-of-vietnam-war-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "In what month and year did the Gulf of Tonkin Incident and Resolution take place? (e.g. 'May 1954')",
          answer: {
            type: "text",
            accept: ["August 1964", "Aug 1964"],
            display: "August 1964",
          },
          traps: [
            {
              spec: { type: "text", accept: ["March 1965", "Mar 1965"] },
              feedback: "March 1965 was Operation Rolling Thunder and Marines landing at Da Nang — Gulf of Tonkin happened seven months earlier.",
            },
            {
              spec: { type: "text", accept: ["August 1914", "Aug 1914"] },
              feedback: "August 1914 was the outbreak of WWI — Gulf of Tonkin happened exactly fifty years later!",
            },
          ],
          hints: [
            "Remarkably, it occurred in the exact same month as the outbreak of WWI — fifty years later!",
          ],
          solution: [
            "The **Gulf of Tonkin Incident** (2 & 4 August) and **Resolution** (7 August) occurred in **August 1964**.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Name the US President who secured the Gulf of Tonkin Resolution in August 1964 and sent US combat troops to Vietnam in 1965.",
          answer: {
            type: "text",
            accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson", "President Johnson"],
            display: "Lyndon B. Johnson",
          },
          traps: [
            {
              spec: { type: "text", accept: ["John F. Kennedy", "Kennedy", "JFK"] },
              feedback: "JFK expanded advisers to 16,000 before his assassination in November 1963 — his vice president escalated into full war in 1964–65.",
            },
          ],
          hints: [
            "Often known by his three-letter initials (LBJ), he succeeded JFK in November 1963.",
          ],
          solution: [
            "President **Lyndon B. Johnson (LBJ)** passed the Gulf of Tonkin Resolution and launched full US combat operations in 1965.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Where did the first 3,500 official US combat Marines land on 8 March 1965 to guard an American airbase?",
          options: [
            "Hanoi",
            "Da Nang",
            "Dien Bien Phu",
            "Singapore",
          ],
          answerIndex: 1,
          hints: [
            "It was a coastal city and major US airbase in central South Vietnam (not Hanoi in the North!).",
            "This landing happened right alongside the launch of Operation Rolling Thunder.",
          ],
          explanation:
            "On 8 March 1965, 3,500 US Marines waded ashore at **Da Nang** to protect the US airbase used for Operation Rolling Thunder — marking the start of regular US ground combat.",
        },
        {
          id: "causes-of-vietnam-war-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Out of 90 US Senators voting on the Gulf of Tonkin Resolution on 7 August 1964, 88 voted in favour. How many Senators voted AGAINST it?",
          answer: { type: "number", value: 2, display: "2" },
          hints: [
            "The resolution passed almost unanimously in Congress (416–0 in the House).",
            "Subtract 88 from 90 to find the tiny dissenting minority (Wayne Morse and Ernest Gruening).",
          ],
          solution: [
            "Only **2** Senators (Wayne Morse of Oregon and Ernest Gruening of Alaska) voted against the Gulf of Tonkin Resolution.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Which statement accurately contrasts the **two attacks** reported in the Gulf of Tonkin in August 1964?",
          options: [
            "Both attacks sank American aircraft carriers in broad daylight near Saigon",
            "The 2 August attack never occurred, whereas the 4 August attack destroyed USS Maddox",
            "North Vietnamese boats fired on USS Maddox on 2 August, while 4 August almost certainly never happened",
            "Neither attack involved any US Navy vessel operating anywhere near North Vietnam",
          ],
          answerIndex: 2,
          hints: [
            "Remember USS *Maddox* took one bullet hole with zero deaths on 2 August during an intelligence patrol.",
            "What did stormy night sonar echoes and later declassified NSA documents reveal about 4 August?",
          ],
          explanation:
            "On 2 August North Vietnamese patrol boats really did clash with USS *Maddox* (zero US casualties), whereas the 4 August night incident was almost certainly a false radar alarm in rough seas.",
        },
        {
          id: "causes-of-vietnam-war-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "How many years separated the outbreak of the First World War (August 1914) from the Gulf of Tonkin Resolution (August 1964)?",
          answer: { type: "number", value: 50, display: "50 years" },
          hints: [
            "Subtract 1914 from 1964.",
            "Half a century!",
          ],
          solution: [
            "{{1964 - 1914 = 50}} years separated the two fateful August flashpoints of the 20th century.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "In March 1965, what was the main military target of **Operation Rolling Thunder**?",
          options: [
            "French colonial bases across western Laos and Cambodia",
            "Soviet naval shipyards in Vladivostok and the Black Sea",
            "British Commonwealth airfields stationed in Singapore and Malaya",
            "North Vietnamese supply routes, bridges, depots and industrial sites",
          ],
          answerIndex: 3,
          hints: [
            "Rolling Thunder was a sustained American bombing campaign intended to pressure Hanoi into stopping support for the Viet Cong.",
            "It lasted over three years from March 1965 to November 1968.",
          ],
          explanation:
            "Operation Rolling Thunder was a sustained US bombing campaign targeting North Vietnam's infrastructure and supply routes to force Ho Chi Minh's government to abandon the Viet Cong.",
        },
        {
          id: "causes-of-vietnam-war-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Which US Navy destroyer took fire from North Vietnamese torpedo boats in the Gulf of Tonkin on 2 August 1964?",
          answer: {
            type: "text",
            accept: ["USS Maddox", "Maddox"],
            display: "USS Maddox",
          },
          hints: [
            "Three letters 'USS' followed by a six-letter name beginning with M.",
            "It was later joined by USS *Turner Joy* on the stormy night of 4 August.",
          ],
          solution: [
            "The US destroyer **USS Maddox** was attacked by North Vietnamese patrol boats on 2 August 1964.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "What key **structural difference** explains why WWI erupted across six major powers in five weeks whereas US combat in Vietnam developed slowly?",
          options: [
            "Europe in 1914 was wired by rival alliance treaties and rigid rail mobilisation plans",
            "In 1964 the United States had no aeroplanes, radios or aircraft carriers in Asia",
            "In 1914 Europe had no competing ideologies or territorial border disputes",
            "In 1964 South Vietnam was a member of Europe's 1882 Triple Alliance treaty",
          ],
          answerIndex: 0,
          hints: [
            "Compare the Schlieffen Plan's 6-week countdown and European Great Power blocs with America's gradual Cold War involvement.",
            "In Vietnam, US presidents chose whether to escalate step by step across two decades.",
          ],
          explanation:
            "In 1914 interlocking European alliances and rigid mobilisation timetables (above all Germany's Schlieffen Plan) forced split-second escalations; in Vietnam there was no equivalent automatic multi-power rail countdown.",
        },
        {
          id: "causes-of-vietnam-war-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Which statement best explains how **Decolonisation** and the **Cold War** collided in Vietnam between 1945 and 1965?",
          options: [
            "France gave Vietnam full independence in 1945, ending all Cold War interest in Asia",
            "Vietnamese fought an anti-colonial war for unity while the US viewed it as global Containment",
            "Britain and France united with Ho Chi Minh to expel the United States from Singapore",
            "Both North and South Vietnam rejected Communism and Capitalism to join the Ottoman Empire",
          ],
          answerIndex: 1,
          hints: [
            "Compare how Ho Chi Minh viewed the struggle versus how Truman, Eisenhower, JFK and LBJ viewed it.",
            "Notice how two completely different frames (Territory/Decolonisation vs Cold War Ideology) overlapped in one country.",
          ],
          explanation:
            "To Ho Chi Minh and many Vietnamese, the struggle was primarily decolonisation and national unification; to Washington, it was a vital Cold War Containment front against global Communism.",
        },
        {
          id: "causes-of-vietnam-war-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "What exact year did President Johnson launch Operation Rolling Thunder and land the first 3,500 US Marines at Da Nang?",
          answer: { type: "number", value: 1965, display: "1965" },
          traps: [
            {
              spec: { type: "number", value: 1964 },
              feedback: "1964 was the Gulf of Tonkin Resolution — Operation Rolling Thunder and Da Nang Marines followed in March of the next year.",
            },
          ],
          hints: [
            "It happened in March of the year immediately following the August 1964 Gulf of Tonkin Resolution.",
            "The exact same year Singapore became an independent republic!",
          ],
          solution: [
            "In **March 1965**, LBJ began Operation Rolling Thunder and landed 3,500 Marines at Da Nang.",
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Explain two reasons why the **Gulf of Tonkin Incident (August 1964)** was a major turning point in US involvement in Vietnam.",
          marks: 2,
          hints: [
            "First, explain what legal authority Congress gave LBJ on 7 August 1964.",
            "Second, state the concrete 1965 military escalations it enabled (bombing + ground troops).",
          ],
          modelAnswer:
            "First, President Johnson used the reports of attacks on USS *Maddox* to pass the Gulf of Tonkin Resolution almost unanimously (88–2 in the Senate), handing him a virtual blank cheque to take 'all necessary measures' without a formal war declaration. Second, using that authority after the Pleiku raid, LBJ shifted America from advisers to direct combat in March 1965 through Operation Rolling Thunder and landing 3,500 US Marines at Da Nang.",
          markScheme: [
            {
              point: "Congress passed the Gulf of Tonkin Resolution giving LBJ a 'blank cheque' / 'all necessary measures' without formal declaration of war",
              keywords: ["resolution", "blank cheque", "all necessary measures", "congress", "88"],
            },
            {
              point: "Enabled direct 1965 US escalation: Operation Rolling Thunder / Da Nang combat Marines",
              keywords: ["rolling thunder", "da nang", "marines", "1965", "combat"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Explain **three similarities** between the causes of the First World War (1914) and the causes of the Vietnam War (1954–1965).",
          marks: 3,
          hints: [
            "Similarity 1: Both involved a dramatic **flashpoint** backed by a **'blank cheque'** (Sarajevo + 5 July vs Gulf of Tonkin + 7 August Resolution).",
            "Similarity 2: Both were driven by **ideology & credibility fears** (Great Power honour/*Weltpolitik* vs Containment/Domino Theory).",
            "Similarity 3: Both saw powerful empires underestimate fierce **local nationalism** (Serbian vs Vietnamese).",
          ],
          modelAnswer:
            "First, both conflicts relied on a dramatic flashpoint backed by an unchecked 'blank cheque': Austria-Hungary used Sarajevo backed by Germany's 5 July pledge, while LBJ used the Gulf of Tonkin to win Congress's 7 August Resolution. Second, deep ideological credibility fears pushed leaders to escalate rather than look weak — Great Power honour and *Weltpolitik* in 1914, and Cold War Containment and the Domino Theory in Vietnam. Third, in both eras powerful states fatally underestimated local nationalism, whether Bosnian Serb resistance against Austria-Hungary or Vietnamese anti-colonial unity under Ho Chi Minh.",
          markScheme: [
            {
              point: "Flashpoint + 'blank cheque' parallel (Sarajevo / 5 July vs Gulf of Tonkin / 7 August Resolution)",
              keywords: ["blank cheque", "sarajevo", "tonkin", "flashpoint"],
            },
            {
              point: "Ideology and credibility / fear of looking weak (Weltpolitik / honour vs Containment / Domino Theory)",
              keywords: ["credibility", "containment", "domino", "weltpolitik", "honour", "weak"],
            },
            {
              point: "Underestimating fierce local nationalism (Serbian/Slavic vs Vietnamese)",
              keywords: ["nationalism", "serb", "slavic", "ho chi minh", "local"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "Explain **two major differences** between how the First World War (1914) started and how full US military involvement in Vietnam (1965) began.",
          marks: 4,
          hints: [
            "Difference 1 (Speed & mechanism): 37-day chain reaction via alliances & Schlieffen rail timetables vs 20-year gradual escalation across four US presidents.",
            "Difference 2 (Nature of Ideology & Territory): Rival European empires competing for hegemony & borderlands (Alsace-Lorraine/Bosnia) vs Cold War Communism vs Capitalism colliding with Asian decolonisation (French Indochina / 17th parallel).",
            "Develop each difference with specific evidence from BOTH wars for full marks!",
          ],
          modelAnswer:
            "A first major difference was the speed and mechanism of escalation: WWI snapped shut in just 37 days between 28 June and 4 August 1914 because rigid European alliances and Germany's Schlieffen Plan timetable left diplomats almost no pause. By contrast, American combat in Vietnam developed slowly over twenty years — from Truman and Eisenhower paying 80% of France's war to JFK's 16,000 advisers and LBJ's 1965 Marines at Da Nang. A second key difference lay in ideology and territory: in 1914 rival European empires fought over imperial hegemony and borderlands like Alsace-Lorraine and Bosnia, whereas Vietnam began as an anti-colonial struggle against France whose temporary 17th parallel became a Cold War clash between Capitalism and Communism.",
          markScheme: [
            {
              point: "Difference 1 named: sudden 37-day escalation (alliances / Schlieffen Plan) in WWI",
              keywords: ["37 days", "schlieffen", "rapid", "sudden", "alliances"],
            },
            {
              point: "Difference 1 contrasted with Vietnam's slow 20-year creeping escalation (80% aid / 16,000 advisers / 1965 Marines)",
              keywords: ["twenty years", "20 years", "gradual", "slowly", "16,000", "advisers", "da nang"],
            },
            {
              point: "Difference 2 named: rival European empires & borderlands (Alsace-Lorraine / Bosnia / Weltpolitik) in 1914",
              keywords: ["empires", "alsace", "bosnia", "hegemony", "borderlands"],
            },
            {
              point: "Difference 2 contrasted with decolonisation (Indochina / 17th parallel) & Cold War Communism vs Capitalism in Vietnam",
              keywords: ["decolonisation", "anti-colonial", "17th", "communism", "capitalism", "cold war"],
            },
          ],
        },
        {
          id: "causes-of-vietnam-war-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "gulf-of-tonkin-comparison",
          question:
            "'Cold War ideology was the main cause of American involvement in the Vietnam War.' How far do you agree with this statement? Include balanced evidence and a sustained conclusion.",
          marks: 6,
          hints: [
            "Agree strongly (Ideology): Truman Doctrine Containment, 1949 China, Korean War, Eisenhower's Domino Theory (Laos, Cambodia, Thailand, Malaya & Singapore), US paying 80% of France's war.",
            "Challenge 1 (Territory & Decolonisation): French Indochina, Dien Bien Phu (1954), 17th parallel division, Ho Chi Minh's Vietnamese nationalism.",
            "Challenge 2 (Local South Vietnamese failures): Cancelled 1956 elections, Diem's corruption, Strategic Hamlets, 1963 Buddhist Crisis, NLF / Viet Cong & JFK's 16,000 advisers.",
            "Challenge 3 (Flashpoint & LBJ): August 1964 Gulf of Tonkin Incident/Resolution and March 1965 escalation.",
            "Link the factors explicitly and write a clear, sustained conclusion weighing which mattered most.",
          ],
          modelAnswer:
            "I largely agree that Cold War ideology was the single most fundamental driver of US intervention, though it only produced full-scale war when combined with Vietnamese decolonisation, Saigon's internal collapse and the 1964 flashpoint. Under the 1947 Truman Doctrine of Containment — intensified by Mao's 1949 victory in China and the 1950–53 Korean War — President Eisenhower's Domino Theory warned that losing Vietnam would topple Laos, Cambodia, Thailand, Malaya and Singapore into Communism, pushing America to pay 80% of France's colonial war by 1954. Yet territory and decolonisation created the conflict in the first place: Ho Chi Minh's Viet Minh defeated France at Dien Bien Phu (May 1954), and the Geneva Accords drew a temporary 17th parallel that split a nationalist country in two. Furthermore, local failures in South Vietnam pulled America deeper step by step — blocking the 1956 elections, Ngo Dinh Diem's corruption, the 1962 Strategic Hamlets programme and the 1963 Buddhist Crisis boosted the Viet Cong, driving JFK from 900 to 16,000 advisers. Finally, the disputed August 1964 Gulf of Tonkin flashpoint handed LBJ his Congressional Resolution to launch Operation Rolling Thunder and send Marines to Da Nang in March 1965. Crucially, these causes interlocked: local weakness created the crisis, yet without Containment and the Domino Theory Washington would never have cared enough to fight half a world away. Therefore, Cold War ideology was the decisive underlying cause explaining why a Vietnamese war of independence became an American war.",
          markScheme: [
            {
              point: "Cold War Ideology: Containment / 1949 China / Korea / Domino Theory (incl. Malaya & Singapore) / 80% French war funding",
              keywords: ["containment", "domino", "1949", "malaya", "singapore", "80%"],
            },
            {
              point: "Territory & Decolonisation: French Indochina / Dien Bien Phu (1954) / Geneva 17th parallel / Ho Chi Minh nationalism",
              keywords: ["dien bien phu", "17th", "geneva", "decolonisation", "nationalist"],
            },
            {
              point: "Local South Vietnam failures: 1956 elections blocked / Diem / Strategic Hamlets / Buddhist Crisis / Viet Cong / JFK advisers",
              keywords: ["1956", "diem", "strategic hamlets", "buddhist", "viet cong", "16,000"],
            },
            {
              point: "Short-term flashpoint: Gulf of Tonkin (Aug 1964) Resolution / LBJ / Rolling Thunder / Da Nang (1965)",
              keywords: ["gulf of tonkin", "resolution", "rolling thunder", "da nang", "1965"],
            },
            {
              point: "Explicit causal link showing how global ideology interacted with local Saigon collapse",
              keywords: ["interlocked", "combined", "without containment", "never have cared"],
            },
            {
              point: "Sustained judgement clearly answering 'how far' with reasoned conclusion",
              keywords: ["therefore", "largely agree", "decisive", "fundamental", "underlying"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "causes-of-vietnam-war-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cold-war-ideology-domino",
      question:
        "Why did **Singapore's founding Prime Minister Lee Kuan Yew** later express a nuanced view of US intervention in Vietnam during the 1960s?",
      options: [
        "He argued US involvement bought non-Communist Southeast Asia vital time to stabilise economically",
        "He demanded that Singapore immediately join Communist North Vietnam against SEATO",
        "He claimed the 1948–1960 Malayan Emergency had been caused by Germany's Schlieffen Plan",
        "He argued Vietnam had no geographic or political links with neighbouring Southeast Asia",
      ],
      answerIndex: 0,
      hints: [
        "Remember Singapore's vulnerable situation in 1965: newly independent, battling poverty and Communist influence after the Malayan Emergency.",
        "Think about the idea of 'buying time' for ASEAN states like Singapore, Malaysia and Thailand to grow strong.",
      ],
      explanation:
        "While historians debate the Domino Theory fiercely, Lee Kuan Yew argued that US resistance in Vietnam bought non-Communist Southeast Asian states (including newly independent Singapore and ASEAN neighbours) a decade to build economic stability and resist Communism.",
    },
    {
      id: "causes-of-vietnam-war-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Declassified White House tapes reveal that even in early 1965 President Lyndon B. Johnson privately doubted Vietnam was 'worth fighting for', yet escalated anyway. What best explains this paradox?",
      options: [
        "LBJ had signed a secret pact with France promising to conquer Hanoi before 1966",
        "LBJ feared losing Cold War credibility abroad and facing political ruin at home if Saigon fell",
        "Congress legally forced a reluctant LBJ to deploy 500,000 US troops against his wishes",
        "The Soviet Union had already invaded California, forcing US retaliation in Asia",
      ],
      answerIndex: 1,
      hints: [
        "Think of LBJ's twin fears: looking weak in the Cold War AND losing support for his domestic 'Great Society' reforms if Republicans attacked him for 'losing Vietnam'.",
        "Compare this fear of losing credibility with European statesmen in July 1914!",
      ],
      explanation:
        "LBJ felt trapped by domestic anti-Communist politics (remembering 'Who lost China?' in 1949) and Cold War credibility — fearing that abandoning Saigon would wreck both US global standing and his domestic reform agenda.",
    },
    {
      id: "causes-of-vietnam-war-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Which US law did Congress pass in **1973** specifically to restrict future presidents from waging undeclared wars like LBJ did after the 1964 Gulf of Tonkin Resolution? (Three words, ending in 'Act' or 'Resolution'.)",
      answer: {
        type: "text",
        accept: ["War Powers Resolution", "War Powers Act", "The War Powers Resolution", "The War Powers Act"],
        display: "War Powers Resolution",
      },
      hints: [
        "It deals with the president's 'War Powers' under the US Constitution.",
        "Passed in 1973 requiring presidents to notify Congress within 48 hours of sending armed forces abroad.",
      ],
      solution: [
        "Congress passed the **War Powers Resolution (1973)** to prevent any future president from using an open-ended 'blank cheque' like the 1964 Gulf of Tonkin Resolution.",
      ],
    },
    {
      id: "causes-of-vietnam-war-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Historian **David Halberstam** described JFK and LBJ's elite advisers as *'The Best and the Brightest'*, while **Christopher Clark** called 1914 statesmen *'The Sleepwalkers'*. What common lesson do BOTH phrases highlight about why wars start?",
      options: [
        "Only uneducated leaders without maps or advisers ever start major 20th-century wars",
        "International wars happen purely by random weather events with zero human responsibility",
        "Intelligent, confident elites can still stumble into disaster through hubris and blind spots",
        "Modern wars always end within six weeks whenever trained generals design timetables",
      ],
      answerIndex: 2,
      hints: [
        "Think about what highly educated leaders in 1914 (Berlin, Vienna, London) and 1964 (Washington) had in common.",
        "Both groups were convinced they could control escalation — yet misread their opponents' determination.",
      ],
      explanation:
        "Both phrases capture tragic elite overconfidence: brilliant policymakers in both 1914 and 1964 underestimated local nationalism, overestimated their ability to control escalation, and trapped themselves through rigid assumptions.",
    },
    {
      id: "causes-of-vietnam-war-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "diem-viet-cong-escalation",
      question:
        "Name the Buddhist monk whose widely photographed June 1963 self-immolation protest in Saigon shocked President Kennedy and accelerated US loss of faith in Ngo Dinh Diem.",
      answer: {
        type: "text",
        accept: ["Thich Quang Duc", "Quang Duc"],
        display: "Thich Quang Duc",
      },
      hints: [
        "His three-word Vietnamese name starts with the monastic title 'Thich'.",
        "Photographed by AP journalist Malcolm Browne on a Saigon intersection in June 1963.",
      ],
      solution: [
        "**Thich Quang Duc** protested Diem's anti-Buddhist repression in June 1963, galvanising global outrage and helping trigger Washington's break with Diem.",
      ],
    },
    {
      id: "causes-of-vietnam-war-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "cold-war-ideology-domino",
      question:
        "Evaluate the historical accuracy of Eisenhower's **Domino Theory (1954)** using evidence from Southeast Asia between 1948 and 1975.",
      marks: 3,
      hints: [
        "Evidence FOR its partial accuracy: Laos and Cambodia DID become Communist alongside Vietnam in 1975, and the 1948–60 Malayan Emergency showed genuine Communist insurgency.",
        "Evidence AGAINST its accuracy: Thailand, Malaysia, Singapore and Indonesia stayed firmly non-Communist, and Communist Vietnam even fought wars against Communist Cambodia and China!",
        "End with a balanced verdict on what the Domino Theory got right and what it missed.",
      ],
      modelAnswer:
        "The theory had partial truth: after Saigon fell in 1975, neighbouring Laos and Cambodia did become Communist, and earlier fears had been fuelled by real regional insurgencies such as the 1948–60 Malayan Emergency. However, the broader chain reaction failed to materialise — Thailand, Malaysia, Singapore and Indonesia remained staunchly non-Communist, and Communist Vietnam later fought border wars against Communist Cambodia and China rather than forming one united bloc. Overall, the Domino Theory exaggerated ideological unity while fatally underestimating local Southeast Asian nationalism and economic resilience.",
      markScheme: [
        {
          point: "Partial support: Laos and Cambodia fell to Communism in 1975 / real 1948–60 Malayan Emergency insurgency",
          keywords: ["laos", "cambodia", "1975", "malayan emergency", "partial"],
        },
        {
          point: "Flaws: Thailand, Malaysia, Singapore stayed non-Communist / Vietnam later clashed with China & Cambodia",
          keywords: ["thailand", "malaysia", "singapore", "non-communist", "china"],
        },
        {
          point: "Judgement: exaggerated monolithic Communism and underestimated local nationalism/resilience",
          keywords: ["overall", "exaggerated", "nationalism", "resilience", "underestimated"],
        },
      ],
    },
    {
      id: "causes-of-vietnam-war-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Compare the role of **'blank cheques'** in 1914 (Germany to Austria-Hungary) and 1964 (US Congress to President Lyndon B. Johnson). How were they similar, and how were they different?",
      marks: 4,
      hints: [
        "Explain the 5 July 1914 German 'blank cheque' (international promise between two empires after Sarajevo).",
        "Explain the 7 August 1964 Gulf of Tonkin Resolution (domestic legislative vote giving LBJ 'all necessary measures').",
        "State a clear **similarity** (both removed restraints on escalation immediately after a flashpoint).",
        "State a clear **difference** (inter-state alliance pledge sparking a 37-day continental war vs domestic democratic vote enabling gradual unilateral superpower escalation).",
      ],
      modelAnswer:
        "On 5 July 1914, Kaiser Wilhelm II gave Austria-Hungary an unconditional diplomatic guarantee against Serbia, emboldening Vienna to issue its harsh ultimatum after Sarajevo. Fifty years later, on 7 August 1964, Congress passed the Gulf of Tonkin Resolution (88–2 in the Senate), authorising 'all necessary measures' after the disputed USS *Maddox* incidents. Both were strikingly similar because each removed political brakes immediately after a summer flashpoint, allowing leaders to escalate without restraint. However, they differed sharply in structure and pace: 1914 was a secret inter-state alliance promise that triggered a multi-power European explosion in 37 days, whereas 1964 was a public domestic congressional vote handing one superpower president open-ended authority to wage an undeclared war over the coming years.",
      markScheme: [
        {
          point: "Explains 5 July 1914 German guarantee to Austria-Hungary after Sarajevo",
          keywords: ["5 july", "wilhelm", "vienna", "ultimatum", "sarajevo"],
        },
        {
          point: "Explains 7 August 1964 Gulf of Tonkin Resolution ('all necessary measures' / 88–2)",
          keywords: ["7 august", "resolution", "all necessary measures", "88", "maddox"],
        },
        {
          point: "Clear similarity: both removed restraints/brakes after a flashpoint to enable escalation",
          keywords: ["similar", "brakes", "restraint", "flashpoint", "escalate"],
        },
        {
          point: "Clear difference: secret inter-state alliance sparking 37-day war vs public domestic legislative vote for gradual undeclared war",
          keywords: ["however", "differed", "inter-state", "domestic", "37 days", "undeclared"],
        },
      ],
    },
    {
      id: "causes-of-vietnam-war-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "gulf-of-tonkin-comparison",
      question:
        "Drawing on BOTH the First World War (1914) and the Vietnam War (1954–1965), evaluate the claim: *'Flashpoints do not cause wars — long-term ideology and territory do.'*",
      marks: 4,
      hints: [
        "Support the claim using WWI: Sarajevo (28 June 1914) only blew up Europe because of MAIN, *Weltpolitik*, Alsace-Lorraine, Bosnia and rigid alliances.",
        "Support the claim using Vietnam: Gulf of Tonkin (Aug 1964) only led to Rolling Thunder & Da Nang because of 20 years of decolonisation, Containment, Domino Theory and Diem's failure.",
        "Challenge / nuance the claim: flashpoints STILL matter enormously because they determine *timing*, break diplomatic deadlocks, and supply the political pretext ('blank cheques') leaders need.",
        "Finish with a crisp synthesis judgement.",
      ],
      modelAnswer:
        "There is strong evidence backing this view across both conflicts. In 1914, Gavrilo Princip's shots in Sarajevo would have remained a local Balkan murder without long-term *Weltpolitik*, Slavic nationalism, contested territories like Bosnia and Alsace-Lorraine, and rigid mobilisation plans. Likewise, the disputed August 1964 Gulf of Tonkin clash caused zero American deaths and only ignited full war because twenty years of Vietnamese decolonisation, the 17th parallel split, Cold War Containment, the Domino Theory and Diem's failure had already loaded the fuse. Nevertheless, dismissing flashpoints completely goes too far: Sarajevo and Tonkin provided the indispensable timing and political pretexts that unlocked 'blank cheques' and swept away domestic hesitation. Ultimately, long-term ideology and territory are the necessary fuel explaining *why* 20th-century wars happen, while flashpoints act as the decisive catalysts explaining *when* and *how* restraint finally breaks.",
      markScheme: [
        {
          point: "WWI evidence: Sarajevo needed long-term MAIN / Weltpolitik / Bosnia / Alsace-Lorraine to ignite world war",
          keywords: ["sarajevo", "weltpolitik", "bosnia", "alsace", "princip", "slavic"],
        },
        {
          point: "Vietnam evidence: Gulf of Tonkin needed decolonisation / 17th parallel / Containment / Domino Theory / Diem's failure",
          keywords: ["tonkin", "17th", "containment", "domino", "diem", "decolonisation"],
        },
        {
          point: "Nuance / counter-argument: flashpoints still matter critically for timing, pretexts and unlocking 'blank cheques'",
          keywords: ["nevertheless", "timing", "pretexts", "blank cheques", "catalysts"],
        },
        {
          point: "Clear synthesis judgement distinguishing fuel (why) from catalyst (when/how)",
          keywords: ["ultimately", "fuel", "why", "when", "restraint"],
        },
      ],
    },
  ],
};
