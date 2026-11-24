import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "modern-protest-movements-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "modern-protests-digital-age",
      question: "What term describes low-effort online activism (such as clicking 'like' or sharing a hashtag) that feels supportive without creating sustained offline pressure?",
      answer: { type: "text", accept: ["slacktivism", "clicktivism"], display: "slacktivism" },
      traps: [
        { spec: { type: "text", accept: ["satyagraha"] }, feedback: "Satyagraha is Gandhi's active non-violent civil disobedience—the opposite of low-effort online sharing!" },
      ],
      solution: [
        "Recall the key limitation of social-media-only protest.",
        "Low-effort online gestures without sustained offline action are called **slacktivism** (or clicktivism).",
      ],
      hints: ["It combines the words 'slacker' and 'activism'."],
    },
    {
      id: "modern-protest-movements-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "modern-protests-digital-age",
      question: "Which activist originally coined the phrase 'Me Too' in 2006 to support survivors through community organising, over a decade before the 2017 hashtag?",
      options: [
        "Tarana Burke",
        "Rosa Parks",
        "Ella Baker",
        "Winnie Mandela",
      ],
      answerIndex: 0,
      explanation:
        "Tarana Burke founded the grassroots 'Me Too' movement in 2006 before social media propelled it globally in October 2017. Rosa Parks and Ella Baker were US Civil Rights figures, and Winnie Mandela fought apartheid in South Africa.",
      hints: ["Think of the 2006 community organiser behind #MeToo."],
    },
    {
      id: "modern-protest-movements-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "source-provenance-nop",
      question: "In the historian's NOP framework, what does the letter **N** stand for?",
      answer: { type: "text", accept: ["Nature", "nature"], display: "Nature" },
      traps: [
        { spec: { type: "text", accept: ["Nationality", "Neutrality", "Number"] }, feedback: "NOP stands for Nature, Origin, Purpose—N refers to the type or format of the source." },
      ],
      solution: [
        "NOP stands for **Nature**, **Origin**, and **Purpose**.",
        "Nature identifies the format or genre of the source (e.g. private diary, government telegram, speech, cartoon).",
      ],
      hints: ["It tells you what TYPE or format of document you are reading."],
    },
    {
      id: "modern-protest-movements-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "source-provenance-nop",
      question: "In the historian's NOP framework, what does the letter **P** stand for?",
      answer: { type: "text", accept: ["Purpose", "purpose"], display: "Purpose" },
      traps: [
        { spec: { type: "text", accept: ["Primary", "Perspective", "Provenance"] }, feedback: "P stands for Purpose—WHY the source was created and for which audience." },
      ],
      solution: [
        "NOP stands for Nature, Origin, and **Purpose**.",
        "Purpose examines why the creator made the source and what effect they wanted on their audience.",
      ],
      hints: ["It answers the question: WHY was this source created?"],
    },
    {
      id: "modern-protest-movements-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "source-provenance-nop",
      question: "A 1963 segregationist newspaper editorial calls Birmingham marchers 'dangerous outsiders'. How should a historian judge its utility?",
      options: [
        "Useless because bias automatically destroys all historical value",
        "Useful for revealing segregationist attitudes and rhetoric, though unreliable for local Black support",
        "Completely accurate because printed newspapers never reflect political goals",
        "A secondary interpretation rather than a primary contemporary document",
      ],
      answerIndex: 1,
      explanation:
        "Never dismiss a source as 'biased = useless'. While unreliable for neutral facts about local Black support, the editorial is very useful evidence of how segregationist elites tried to discredit civil rights protesters.",
      hints: [
        "Remember the golden rule: bias IS evidence.",
        "Ask 'Useful FOR what?'—attitudes vs neutral statistics.",
      ],
    },
    {
      id: "modern-protest-movements-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-protest-success",
      question: "Roughly what percentage of Montgomery's city bus fares were paid by Black commuters before the 1955–56 boycott created severe economic leverage? (Give a number.)",
      answer: { type: "number", value: 70, tolerance: 5, display: "70%" },
      solution: [
        "Black commuters made up around 70% of Montgomery's bus riders.",
        "Refusing to ride for 381 days hit the bus company's revenue directly, giving moral protest strong economic leverage.",
      ],
      hints: [
        "More than two-thirds of the bus company's paying customers joined the boycott.",
        "It is a round multiple of 10 between 60 and 80.",
      ],
    },
    {
      id: "modern-protest-movements-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "comparing-protest-success",
      question: "Which international turning point in 1989 strengthened pressure on F.W. de Klerk to unban the ANC and negotiate an end to apartheid?",
      options: [
        "The outbreak of the First World War across European empires",
        "The signing of the 1954 Geneva Accords dividing Vietnam",
        "The end of the Cold War removing Western backing for Pretoria",
        "Britain's 1947 decision to partition colonial British India",
      ],
      answerIndex: 2,
      explanation:
        "Once the Berlin Wall fell in 1989 and Cold War rivalry faded, Western states no longer viewed apartheid South Africa as an anti-communist shield—intensifying economic pressure on de Klerk.",
      hints: [
        "Check the date: 1989 marks the fall of the Berlin Wall.",
        "How did that reshape Western attitudes towards Pretoria and the ANC?",
      ],
    },
    {
      id: "modern-protest-movements-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "historical-interpretations",
      question: "What two-word label describes a top-down historical interpretation that explains major change mainly through iconic individual leaders like Gandhi, MLK, or Mandela?",
      answer: { type: "text", accept: ["Great Man", "great man history", "great man theory"], display: "Great Man" },
      traps: [
        { spec: { type: "text", accept: ["grassroots", "bottom-up"] }, feedback: "Grassroots (bottom-up) focuses on ordinary citizens; the top-down leader focus is called 'Great Man' history." },
      ],
      solution: [
        "Top-down accounts centred on famous individuals are called **'Great Man'** interpretations.",
        "Historians contrast them with **grassroots** (bottom-up) interpretations highlighting ordinary activists.",
      ],
      hints: [
        "It is contrasted with 'grassroots' history.",
        "Think of the classic phrase '_____ ___' history.",
      ],
    },
    {
      id: "modern-protest-movements-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "historical-interpretations",
      question: "Why is a 2022 museum exhibition about the 1930 Salt March classified as a 'historical interpretation'?",
      options: [
        "Because museums only exhibit fictional artwork from novels",
        "Because Mahatma Gandhi personally wrote the 2022 gallery labels",
        "Because every museum refuses to display any primary artefacts",
        "Because curators select and frame evidence after the event to present an argument",
      ],
      answerIndex: 3,
      explanation:
        "Even when displaying primary artefacts inside glass cases, a 2022 exhibition selects what to emphasise, writes explanatory panels, and constructs a later viewpoint—making the exhibition itself a historical interpretation.",
      hints: [
        "Compare primary items inside a case with the 2022 narrative created by curators.",
        "When was the exhibition designed, and what are curators doing with the evidence?",
      ],
    },
    {
      id: "modern-protest-movements-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "source-provenance-nop",
      question: "What is the historical term for comparing two or more sources from different viewpoints to test where claims corroborate or contradict each other?",
      answer: { type: "text", accept: ["cross-referencing", "cross referencing", "corroboration", "cross-checking"], display: "cross-referencing" },
      solution: [
        "Comparing multiple sources against each other is called **cross-referencing** (checking for corroboration or contradiction).",
      ],
      hints: [
        "It is a hyphenated term starting with 'cross-'.",
        "You compare Source A against Source B to test reliability.",
      ],
    },
  ],
  papers: [
    {
      id: "modern-protest-movements-p1",
      title: "Practice Paper 1: Digital Protests & Comparative Success",
      questions: [
        {
          id: "modern-protest-movements-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "modern-protests-digital-age",
          question: "In what year did Greta Thunberg begin her solo Friday school strike outside the Swedish Parliament?",
          answer: { type: "number", value: 2018, display: "2018" },
          traps: [
            { spec: { type: "number", value: 2019 }, feedback: "September 2019 was the peak global climate strike of 4+ million people; Greta began sitting alone in August 2018." },
          ],
          solution: [
            "Greta Thunberg started her solo strike in **August 2018**.",
            "Within 13 months (September 2019), Fridays for Future mobilised over 4 million people worldwide.",
          ],
          hints: ["It was one year before the September 2019 global climate strikes."],
        },
        {
          id: "modern-protest-movements-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "modern-protests-digital-age",
          question: "What two-word term describes ordinary eyewitnesses using smartphones to film and broadcast injustices directly, bypassing traditional media gatekeepers?",
          answer: { type: "text", accept: ["citizen journalism", "citizen journalist"], display: "citizen journalism" },
          solution: [
            "When ordinary bystanders film and publish real-time evidence on phones—as during the 2020 anti-racism protests—historians call it **citizen journalism**.",
          ],
          hints: ["First word: an ordinary member of the public ('citizen'); second word: reporting news."],
        },
        {
          id: "modern-protest-movements-p1-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "comparing-protest-success",
          question: "How many days did the Montgomery Bus Boycott (1955–56) last before US federal courts ended bus segregation in the city?",
          options: [
            "381 days",
            "14 days",
            "90 days",
            "1,200 days",
          ],
          answerIndex: 0,
          explanation:
            "Black residents sustained carpools and walked to work for 381 days (December 1955 to December 1956), demonstrating extraordinary grassroots staying power alongside NAACP legal action.",
          hints: ["It lasted just over one full calendar year (365 days)."],
        },
        {
          id: "modern-protest-movements-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-protest-success",
          question: "What Hindi word for homespun Indian cloth became a symbol of economic boycott against British Lancashire textile mills?",
          answer: { type: "text", accept: ["khadi", "khaddar"], display: "khadi" },
          traps: [
            { spec: { type: "text", accept: ["satyagraha"] }, feedback: "Satyagraha means 'truth-force' (non-violent civil disobedience); homespun cloth is called khadi." },
          ],
          solution: [
            "Gandhi encouraged Indians to spin and wear homespun cloth called **khadi**.",
            "Boycotting imported British textiles hit Lancashire mills economically while uniting Indians visually.",
          ],
          hints: [
            "It is a 5-letter word starting with 'k'.",
            "Gandhi spun cotton on a charkha wheel to produce it.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "modern-protests-digital-age",
          question: "Why did pro-democracy protesters in Hong Kong (2014 & 2019) use encrypted messaging apps and AirDrop?",
          options: [
            "To invite official state broadcasters to edit their slogans",
            "To coordinate decentralised crowds rapidly while evading censorship",
            "To register every marcher's home address with police stations",
            "To prevent overseas journalists from reading any protest demands",
          ],
          answerIndex: 1,
          explanation:
            "Encrypted platforms like Telegram and peer-to-peer tools like AirDrop let horizontal protest networks adapt routes in real time and communicate around state monitoring—though states still deployed digital countermeasures.",
          hints: [
            "Think about why activists choose encrypted apps instead of open public broadcasts.",
            "They wanted rapid coordination and privacy from state surveillance.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-protest-success",
          question: "Which British Prime Minister's Labour government took office in 1945 and accelerated Britain's decision to leave India by 1947? (Surname is sufficient.)",
          answer: { type: "text", accept: ["Attlee", "Clement Attlee"], display: "Clement Attlee" },
          traps: [
            { spec: { type: "text", accept: ["Churchill", "Winston Churchill"] }, feedback: "Winston Churchill strongly opposed Indian independence and lost the July 1945 general election to Clement Attlee." },
          ],
          solution: [
            "**Clement Attlee** became British Prime Minister in July 1945 after Labour defeated Winston Churchill.",
            "Attlee's government recognised that post-WWII Britain lacked the money and political will to hold India against mass protest.",
          ],
          hints: [
            "He defeated Winston Churchill in Britain's July 1945 election.",
            "His surname begins with 'A'.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "comparing-protest-success",
          question: "Which pair correctly matches a protest movement with a key piece of **external timing** that helped its breakthrough?",
          options: [
            "Indian Independence — Collapse of the Berlin Wall in 1989",
            "US Civil Rights — Britain's 1945 post-war bankruptcy",
            "Anti-Apartheid — End of the Cold War removing Western backing for Pretoria",
            "Fridays for Future — Signing of the 1965 Voting Rights Act",
          ],
          answerIndex: 2,
          explanation:
            "Matching exact dates and geopolitics: WWII/1945 applies to India, Cold War rivalry (1960s) applies to US Civil Rights, and the end of the Cold War (1989) removed apartheid's strategic shield in South Africa.",
          hints: [
            "Check that the dates of each movement align with the global event paired next to it.",
            "Which event occurred in 1989 just before Mandela's 1990 release?",
          ],
        },
        {
          id: "modern-protest-movements-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "modern-protests-digital-age",
          question: "In what year did the #MeToo hashtag explode globally on social media, eleven years after Tarana Burke originally coined the phrase?",
          answer: { type: "number", value: 2017, display: "2017" },
          traps: [
            { spec: { type: "number", value: 2006 }, feedback: "2006 is when Tarana Burke founded the grassroots phrase; 11 years later, the viral hashtag wave began in October 2017." },
          ],
          solution: [
            "Tarana Burke coined 'Me Too' in 2006; eleven years later (`2006 + 11 = 2017`), the hashtag went globally viral in October **2017**.",
          ],
          hints: [
            "Add 11 years to 2006.",
            "It happened in October of the year before Greta Thunberg's 2018 school strike.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "comparing-protest-success",
          question: "According to Erica Chenoweth's historical research across 300+ campaigns, why do mass non-violent movements succeed roughly twice as often as violent campaigns?",
          options: [
            "Because armies never fire on peaceful demonstrators anywhere in history",
            "Because violent groups are banned from printing posters or leaflets",
            "Because non-violent protests require fewer than fifty people to win",
            "Because broad peaceful participation builds larger coalitions and stronger economic leverage",
          ],
          answerIndex: 3,
          explanation:
            "Lower personal barriers allow families, elders, workers, and students to join peaceful movements in far higher numbers, multiplying economic leverage and encouraging defections inside the regime.",
          hints: [
            "Think about who feels able to join a peaceful boycott versus an armed guerrilla unit.",
            "How does coalition size affect boycotts, strikes, and regime loyalty?",
          ],
        },
        {
          id: "modern-protest-movements-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "In the mnemonic **C + NOP + OK**, what two words does **OK** stand for?",
          answer: { type: "text", accept: ["Own Knowledge", "own knowledge"], display: "Own Knowledge" },
          solution: [
            "**C + NOP + OK** stands for Content + Nature, Origin, Purpose + **Own Knowledge**.",
            "Testing a source's claims against contextual own knowledge lets you verify accuracy and spot omissions.",
          ],
          hints: [
            "It refers to the verified historical context you bring from your own revision.",
            "First word: 'Own'; second word: 'Knowledge'.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "Why might a politician's private diary entry from 1965 be more candid about their doubts than their televised speech from the same week?",
          options: [
            "A private diary was not written to persuade voters or protect a public image",
            "Politicians were legally punished if they told any truths on television",
            "Diaries are always secondary interpretations written by later historians",
            "Private diaries automatically contain exact national census statistics",
          ],
          answerIndex: 0,
          explanation:
            "Comparing Nature and Purpose: a televised speech aims to inspire voters and project confidence, whereas a private diary has no public audience to impress—making candid admissions of doubt far more likely.",
          hints: [
            "Compare the Purpose and intended audience of a private diary versus a broadcast speech.",
            "Who was meant to read each source?",
          ],
        },
        {
          id: "modern-protest-movements-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "historical-interpretations",
          question: "What does the 'C' stand for in the **FECP** checklist explaining why historians disagree?",
          options: [
            "Cost of printing paper books in university libraries",
            "Context of the era in which the historian is writing",
            "Chronological order of dates inside a primary diary",
            "Censorship of every documentary shown on public TV",
          ],
          answerIndex: 1,
          explanation:
            "FECP stands for Focus, Evidence, **Context** (the era and questions of the historian's own time), and Purpose/audience. Shifting historical eras prompt historians to ask fresh questions and recover overlooked groups.",
          hints: [
            "Recall why 1980s historians noticed women civil rights organisers more than 1960s authors did.",
            "FECP = Focus, Evidence, ______, Purpose.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "modern-protests-digital-age",
          marks: 4,
          question: "Explain TWO strengths and TWO limitations of using smartphones and social media in 21st-century protest campaigns.",
          modelAnswer:
            "One major strength is instant global reach at very low cost, enabling youth campaigns like Fridays for Future to mobilise millions across 150 countries rapidly. A second strength is citizen journalism, where eyewitness video bypasses traditional gatekeepers to expose abuses immediately. However, a key limitation is slacktivism, where clicking likes replaces sustained offline sacrifice. A second limitation is that leaderless networks struggle to negotiate binding laws and remain vulnerable to state internet shutdowns or censorship.",
          markScheme: [
            { point: "Strength 1: Rapid, low-cost global reach / mobilisation (with relevant example such as Fridays for Future or #MeToo).", keywords: ["global", "rapid", "instant", "millions", "low cost", "fridays for future", "metoo"] },
            { point: "Strength 2: Citizen journalism / eyewitness video bypassing traditional media gatekeepers.", keywords: ["citizen journalism", "eyewitness", "video", "gatekeepers", "footage"] },
            { point: "Limitation 1: Slacktivism / short attention spans failing to sustain offline pressure.", keywords: ["slacktivism", "clicktivism", "offline", "attention span", "likes"] },
            { point: "Limitation 2: Leaderless bargaining weakness OR state censorship / internet shutdowns / surveillance.", keywords: ["leaderless", "negotiate", "shutdown", "censorship", "surveillance", "disinformation"] },
          ],
          commonError: "Listing only strengths (or only weaknesses) instead of balancing two strengths with two limitations.",
          hints: [
            "Structure clearly into two strengths (e.g. speed/reach + eyewitness filming) and two limitations.",
            "Use precise terms like 'citizen journalism', 'slacktivism', 'leaderless', or 'internet shutdowns'.",
            "Anchor at least one point in a named 21st-century movement such as Fridays for Future, #MeToo, or 2020 anti-racism protests.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "comparing-protest-success",
          marks: 4,
          question: "Why did economic pressure help 20th-century protest campaigns achieve political breakthroughs? Support your explanation with specific evidence from TWO different movements.",
          modelAnswer:
            "Moral marches raised sympathy, but economic leverage forced authorities to calculate the financial cost of continuing injustice. In India, Gandhi's khadi boycott of imported British textiles damaged Lancashire mills and made ruling the Raj increasingly unprofitable. In the United States, Black commuters withdrew around 70% of bus fares during the 381-day Montgomery Bus Boycott, crippling the transport firm until desegregation. Similarly, 1980s global banking sanctions and divestment pushed South Africa's economy into crisis and forced F.W. de Klerk to negotiate.",
          markScheme: [
            { point: "Explains the mechanism: raising the financial cost of injustice forces authorities/businesses to concede.", keywords: ["financial", "cost", "revenue", "unprofitable", "leverage", "profits", "crisis"] },
            { point: "Specific evidence from Movement 1 (e.g. India's khadi cloth boycott / salt monopoly / Lancashire mills).", keywords: ["khadi", "textile", "lancashire", "salt", "india"] },
            { point: "Specific evidence from Movement 2 (e.g. Montgomery Bus Boycott 70% fares / 381 days OR South Africa sanctions / divestment / rand crisis).", keywords: ["montgomery", "bus", "70%", "381", "sanctions", "divestment", "south africa", "apartheid"] },
            { point: "Links economic pressure to a concrete political breakthrough or negotiation.", keywords: ["desegregation", "independence", "negotiate", "de klerk", "concede", "breakthrough"] },
          ],
          commonError: "Describing only one movement or failing to explain *why* lost revenue pressured governments into changing laws.",
          hints: [
            "Pick two movements from India, US Civil Rights, and South Africa.",
            "Name the exact economic weapon used in each (khadi boycott, Montgomery bus fares, international sanctions/divestment).",
            "Explain how financial pain forced decision-makers to compromise.",
          ],
        },
        {
          id: "modern-protest-movements-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "comparing-protest-success",
          marks: 4,
          question: "'Favourable external timing mattered more than protesters' own tactics in ending colonial rule or racial segregation.' Write a balanced judgement weighing BOTH sides using specific historical evidence.",
          modelAnswer:
            "External timing certainly created decisive openings: Britain's exhaustion after the Second World War and Attlee's 1945 government made holding India unaffordable, while the 1989 end of the Cold War removed Western protection for apartheid. However, external shocks would not have ended injustice without sustained internal resistance. Decades of Indian civil disobedience like the 1930 Salt March, US grassroots sit-ins and Birmingham marches, and Soweto and UDF civic strikes made old regimes ungovernable. Overall, internal tactics created the pressure while external timing tipped that pressure into victory.",
          markScheme: [
            { point: "Supports external timing with specific evidence (WWII/Attlee 1945, US Cold War embarrassment, or 1989 Cold War end).", keywords: ["wwii", "second world war", "attlee", "1945", "cold war", "1989"] },
            { point: "Counters with internal protest tactics using specific evidence (Salt March, Montgomery/Birmingham/Selma, Soweto/UDF/sanctions campaign).", keywords: ["salt march", "1930", "montgomery", "birmingham", "selma", "soweto", "udf", "sit-ins", "boycott"] },
            { point: "Explains the interaction between internal resistance and external context.", keywords: ["ungovernable", "interaction", "combined", "tipped", "without", "opened"] },
            { point: "Reaches a clear, supported overall judgement.", keywords: ["overall", "judgement", "therefore", "more important", "both", "essential"] },
          ],
          commonError: "Arguing only one side without weighing how external shocks and internal organising interacted.",
          hints: [
            "Paragraph 1: Give concrete proof for external timing (e.g. WWII/1945 or Cold War 1960s/1989).",
            "Paragraph 2: Give concrete proof for internal tactics (e.g. Salt March, Birmingham, Soweto).",
            "Finish with an explicit 'Overall…' sentence showing how both forces interacted.",
          ],
        },
      ],
    },
    {
      id: "modern-protest-movements-p2",
      title: "Practice Paper 2: NOP Source Utility & Historical Interpretations",
      questions: [
        {
          id: "modern-protest-movements-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "source-provenance-nop",
          question: "In the NOP source evaluation framework, what does the letter **O** stand for?",
          answer: { type: "text", accept: ["Origin", "origin"], display: "Origin" },
          traps: [
            { spec: { type: "text", accept: ["Opinion", "Omission", "Outcome"] }, feedback: "O stands for Origin—who created the source, when, and where." },
          ],
          solution: [
            "NOP stands for Nature, **Origin**, and Purpose.",
            "Origin identifies who created the source, their role, when it was made, and where.",
          ],
          hints: ["It tells you WHO created the source, WHEN, and WHERE."],
        },
        {
          id: "modern-protest-movements-p2-q02",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "source-provenance-nop",
          question: "Which term describes the combined background details of a source—its Nature, Origin, and Purpose?",
          options: [
            "Provenance",
            "Chronology",
            "Slacktivism",
            "Industrialisation",
          ],
          answerIndex: 0,
          explanation:
            "Provenance means the origin story and context of a source (Nature, Origin, and Purpose), which helps historians judge how and why the content was shaped.",
          hints: ["It starts with 'P' and refers to a document's background details."],
        },
        {
          id: "modern-protest-movements-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "historical-interpretations",
          question: "What single word describes a bottom-up historical interpretation that focuses on ordinary citizens, students, and local branches rather than famous national leaders?",
          answer: { type: "text", accept: ["grassroots", "grass-roots", "bottom-up"], display: "grassroots" },
          solution: [
            "Bottom-up social history emphasising ordinary protesters is called **grassroots** history.",
          ],
          hints: ["Think of plants growing from the ground up: 'grass_____'."],
        },
        {
          id: "modern-protest-movements-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "A 1930 Indian National Congress rally poster urges villagers to boil sea salt and refuse British cloth. Which statement best evaluates its utility?",
          options: [
            "It has zero historical value because propaganda posters are completely biased",
            "It is useful for studying Congress's slogans and mobilisation tactics, though one-sided on support",
            "It proves that every single person in British India supported the 1930 Salt March",
            "It is an academic interpretation written decades after Indian independence",
          ],
          answerIndex: 1,
          explanation:
            "Because its Nature (poster) and Purpose (persuade villagers to join boycotts) aim to rally action, it is priceless for studying nationalist messaging—yet own knowledge reminds us not all Indians agreed with Congress tactics.",
          hints: [
            "Identify what a persuasive rally poster CAN prove (slogans, goals, imagery) versus what it cannot prove alone (universal support).",
            "Reject any answer claiming bias makes a source useless.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "If a source has LOW factual reliability (e.g. regime propaganda) yet HIGH value for studying the regime's fears and rhetoric, what word describes that value for an enquiry?",
          answer: { type: "text", accept: ["utility", "usefulness"], display: "utility" },
          traps: [
            { spec: { type: "text", accept: ["reliability", "bias"] }, feedback: "Reliability is factual trustworthiness; value for answering a specific historical enquiry is called **utility** (or usefulness)." },
          ],
          solution: [
            "Historians separate **reliability** (factual trustworthiness) from **utility** (usefulness for a specific enquiry).",
          ],
          hints: [
            "It is the pair word contrasted with 'reliability'.",
            "Starts with 'u' (7 letters) or 'usefulness'.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "Read this extract from Viceroy Lord Irwin's confidential April 1930 telegram to London: 'Arresting Gandhi prematurely would risk making him a martyr.' Why does its Origin and Nature increase trust in this admission?",
          options: [
            "Irwin was secretly a founding leader of the Indian National Congress",
            "Telegrams from Delhi were printed on public posters for schoolchildren",
            "As top colonial ruler writing confidentially to London, Irwin had to assess risks candidly",
            "Irwin wrote the telegram thirty years later after reading Gandhi's autobiography",
          ],
          answerIndex: 2,
          explanation:
            "As Viceroy (Origin) sending a confidential government telegram (Nature) to brief superiors in London (Purpose), Irwin needed honest strategic advice rather than public boasting.",
          hints: [
            "Check who Lord Irwin was (British Viceroy) and whether the telegram was public or confidential.",
            "Why would a private brief to London admit genuine official anxiety?",
          ],
        },
        {
          id: "modern-protest-movements-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "historical-interpretations",
          question: "Which item is a contemporary **primary source** rather than a later **historical interpretation**?",
          options: [
            "A 2020 university textbook chapter on the US Civil Rights Movement",
            "A 2015 cinema biopic dramatising the Selma marches",
            "A 2018 museum display panel comparing Gandhi and Mandela",
            "A 1965 live television news broadcast filmed on the Edmund Pettus Bridge",
          ],
          answerIndex: 3,
          explanation:
            "The 1965 live TV broadcast was created at the time of the event (contemporary primary source), whereas the 2020 textbook, 2015 film, and 2018 museum panel are all later historical interpretations.",
          hints: [
            "Check the creation date of each item against the event it depicts.",
            "Only one item was produced *during* the event itself.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "historical-interpretations",
          question: "In the **FECP** checklist for why historians disagree, what does the letter **F** stand for?",
          answer: { type: "text", accept: ["Focus", "focus"], display: "Focus" },
          solution: [
            "FECP stands for **Focus** (analytical lens), **Evidence** selected, **Context** of the era written, and **Purpose**/audience.",
          ],
          hints: [
            "A political historian zooms in on parliaments while a social historian zooms in on ordinary marchers.",
            "A 5-letter word starting with 'F' meaning what the historian concentrates on.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "historical-interpretations",
          question: "Why is it an exam mistake to criticise a 2018 historian's interpretation of the 1960 Sharpeville Massacre by writing 'the author was not alive in 1960, so they cannot know what happened'?",
          options: [
            "Historians use archives, cross-referencing, and hindsight rather than eyewitness presence",
            "Every historian writing about South Africa must have been born before 1950",
            "No primary sources survived from South Africa during the 1960s",
            "Interpretations are supposed to be guesses with zero documentary evidence",
          ],
          answerIndex: 0,
          explanation:
            "Attacking a historian for 'not being there' confuses a historical interpretation with an eyewitness source. Later historians actually gain wider archive access and hindsight—you should test their argument with evidence instead.",
          hints: [
            "Do historians rely on personal memory or on studying archives and cross-referencing?",
            "What advantage can a 2018 scholar actually have over a single 1960 eyewitness?",
          ],
        },
        {
          id: "modern-protest-movements-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          question: "What single word describes a crucial fact that a source deliberately leaves out because it would undermine the creator's purpose?",
          answer: { type: "text", accept: ["omission", "omissions"], display: "omission" },
          solution: [
            "Noticing an **omission** (what a source leaves unsaid) using your Own Knowledge is a hallmark of high-level source analysis.",
          ],
          hints: [
            "Derived from the verb 'omit' (to leave out).",
            "Starts with 'o' and ends with '-sion'.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "historical-interpretations",
          question: "Which woman organiser helped launch the 1955 Montgomery Bus Boycott via the Women's Political Council and is frequently cited by grassroots historians?",
          options: [
            "Margaret Thatcher",
            "Jo Ann Robinson",
            "Queen Victoria",
            "Indira Gandhi",
          ],
          answerIndex: 1,
          explanation:
            "Jo Ann Robinson mimeographed thousands of boycott flyers overnight after Rosa Parks's arrest, proving that organised grassroots networks—not just famous male speakers—powered Montgomery.",
          hints: [
            "She led the Women's Political Council in Montgomery, Alabama.",
            "Eliminate British and Indian heads of government.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          marks: 4,
          question: "Source X is a front-page editorial from a segregationist Alabama newspaper in May 1963 claiming that Birmingham protests were 'caused solely by outside agitators with no support from local Black citizens'. Evaluate how useful Source X is for studying the 1963 Birmingham Campaign using NOP and Own Knowledge.",
          modelAnswer:
            "Source X is unreliable for factual support levels because my own knowledge confirms thousands of local Birmingham residents and schoolchildren marched voluntarily after years of Jim Crow discrimination. Its nature as a partisan newspaper editorial with the purpose of discrediting protesters and reassuring white segregationist readers explains why it exaggerates outsider control and omits local grievances and police brutality. Nevertheless, it is highly useful for showing the attitudes and 'outside agitator' propaganda tactics segregationist elites used to resist desegregation.",
          markScheme: [
            { point: "Tests content against Own Knowledge (local residents/children marched voluntarily against Jim Crow / police brutality).", keywords: ["local", "children", "schoolchildren", "jim crow", "brutality", "voluntarily", "own knowledge"] },
            { point: "Analyses Nature/Origin (partisan/segregationist editorial from May 1963) and Purpose (discredit marchers / reassure white readers).", keywords: ["purpose", "discredit", "persuade", "reassure", "editorial", "propaganda"] },
            { point: "Identifies an omission or distortion caused by provenance (omits local grievances / police dogs / hoses).", keywords: ["omit", "exaggerat", "hoses", "dogs", "grievances", "one-sided"] },
            { point: "Balanced utility judgement stating what it IS useful FOR (revealing segregationist attitudes/rhetoric, NOT useless).", keywords: ["useful for", "attitudes", "rhetoric", "mindset", "resist", "highly useful"] },
          ],
          commonError: "Writing 'this editorial is biased so it is useless' instead of explaining what it reveals about segregationist attitudes.",
          hints: [
            "Never call the source 'useless'—state clearly what it IS useful for and what it is NOT reliable for.",
            "Use NOP (Nature = editorial, Origin = May 1963 Alabama, Purpose = discredit marchers) and spot what it omits.",
            "Test its 'no local support' claim against Own Knowledge of the Birmingham Children's Crusade.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "source-provenance-nop",
          marks: 3,
          question: "Why is a confidential 1960 government telegram assessing panic among investors after the Sharpeville Massacre useful in a DIFFERENT way from a public anti-apartheid rally poster from the same year?",
          modelAnswer:
            "The confidential telegram's private nature and briefing purpose mean officials had less incentive to boast, making it strong evidence of candid regime anxieties over economic fallout. In contrast, the public rally poster aimed to inspire outrage and mobilise supporters, so it is less reliable for official policy yet highly useful for revealing protesters' slogans, emotional framing, and grassroots solidarity. Cross-referencing both gives a fuller picture of how Sharpeville shook both rulers and activists.",
          markScheme: [
            { point: "Explains the value of the private telegram (confidential nature/purpose encourages candid admission of regime/economic fears).", keywords: ["confidential", "private", "candid", "anxiet", "fears", "honest", "brief"] },
            { point: "Explains the value of the public poster (persuasive purpose reveals activist slogans, emotions, and mobilisation framing).", keywords: ["slogans", "mobilise", "persuade", "inspire", "activist", "framing", "solidarity"] },
            { point: "Notes the benefit of cross-referencing contrasting viewpoints for a fuller historical picture.", keywords: ["cross-referenc", "both", "fuller", "contrast", "perspectives", "compare"] },
          ],
          commonError: "Claiming the government telegram is automatically '100% unbiased' or dismissing the poster as 'just propaganda'.",
          hints: [
            "Compare the Nature and Purpose of a private official brief versus a public persuasive poster.",
            "Ask what each source is uniquely useful FOR.",
            "Finish by noting why historians cross-reference both viewpoints.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "historical-interpretations",
          marks: 4,
          question: "Explain TWO reasons why honest, well-trained historians can publish very different interpretations of why apartheid ended in 1994.",
          modelAnswer:
            "First, historians adopt different focuses or lenses: a top-down political historian may spotlight negotiations between Nelson Mandela and F.W. de Klerk, whereas a bottom-up social historian focuses on Soweto youths, township boycotts, and COSATU union strikes. Second, historians select and weight different evidence—cabinet minutes and diplomatic memos highlight elite decisions and Cold War shifts, while oral histories and local leaflets highlight grassroots civic pressure. Changes in era and audience (such as biography versus academic study) further shape which causes get emphasised.",
          markScheme: [
            { point: "Reason 1: Different focus / analytical lens (e.g. top-down political leaders vs bottom-up grassroots/economic focus).", keywords: ["focus", "lens", "top-down", "bottom-up", "political", "social", "grassroots"] },
            { point: "Specific South African example linked to Reason 1 (e.g. Mandela/de Klerk vs Soweto/UDF/COSATU/sanctions).", keywords: ["mandela", "de klerk", "soweto", "cosatu", "udf", "township", "sanctions"] },
            { point: "Reason 2: Different selection/weighting of evidence, era context, or audience/purpose.", keywords: ["evidence", "archives", "oral histor", "context", "era", "audience", "purpose", "biography"] },
            { point: "Explains clearly that disagreement reflects differing emphasis/questions rather than inventing false facts.", keywords: ["emphasis", "emphasise", "highlight", "weight", "questions", "argument"] },
          ],
          commonError: "Saying historians disagree because one historian 'lied' or 'wasn't alive in South Africa'.",
          hints: [
            "Use two letters from FECP (Focus, Evidence, Context of era, Purpose/audience).",
            "Anchor your explanation in concrete South African examples (Mandela/de Klerk vs UDF/Soweto/sanctions).",
            "Explain *how* each difference produces a different argument without claiming either scholar faked facts.",
          ],
        },
        {
          id: "modern-protest-movements-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "historical-interpretations",
          marks: 4,
          question: "Interpretation Z claims: 'The US Civil Rights Act of 1964 and Voting Rights Act of 1965 happened mainly because Martin Luther King Jr. gave brilliant speeches.' How convincing is Interpretation Z? Use specific own knowledge to support AND challenge the claim.",
          modelAnswer:
            "Interpretation Z is partially convincing because King's oratory—such as his 1963 'I Have a Dream' speech at the March on Washington—and his strategic discipline in Birmingham and Selma focused national television attention and won crucial moral sympathy. However, this 'Great Man' view overlooks vital grassroots actors, including Rosa Parks, Jo Ann Robinson's Women's Political Council, the Greensboro sit-in students, SNCC, and NAACP lawyers who won Brown v. Board (1954). It also omits President Lyndon B. Johnson's legislative skill in Congress and Cold War diplomatic pressure. Overall, King was a vital catalyst, but federal laws required grassroots organising and federal political action together.",
          markScheme: [
            { point: "Supports Interpretation Z with specific own knowledge of King's impact (e.g. March on Washington / 'I Have a Dream' / Birmingham / Selma media impact).", keywords: ["i have a dream", "march on washington", "birmingham", "selma", "television", "moral", "sympathy"] },
            { point: "Challenges the 'Great Man' claim with grassroots evidence (e.g. Rosa Parks, Jo Ann Robinson, Greensboro sit-ins, SNCC, NAACP/Brown v. Board).", keywords: ["grassroots", "rosa parks", "jo ann robinson", "greensboro", "sncc", "naacp", "brown", "students", "sit-in"] },
            { point: "Adds wider political/contextual factor (e.g. President Lyndon B. Johnson / Congress / Cold War pressure).", keywords: ["johnson", "lbj", "congress", "cold war", "federal", "great man"] },
            { point: "Reaches a balanced overall judgement (partially convincing / catalyst alongside other forces).", keywords: ["partially", "overall", "catalyst", "together", "however", "limited"] },
          ],
          commonError: "Either completely agreeing with Interpretation Z or rejecting King's importance altogether.",
          hints: [
            "First show where Interpretation Z IS convincing with specific evidence of King's speeches and campaigns.",
            "Next challenge its 'Great Man' oversimplification with grassroots activists (SNCC, Greensboro, NAACP, women organisers).",
            "Include federal politics (LBJ) or Cold War pressure, then finish with a clear 'Overall…' judgement.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "modern-protest-movements-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "source-provenance-nop",
      question: "A student evaluates a 1976 Soweto student leaflet and writes: 'This leaflet is reliable because the students were eyewitnesses who really lived in Soweto.' What crucial flaw weakens this evaluation?",
      options: [
        "Eyewitnesses cannot produce primary sources during their own lifetimes",
        "Being an eyewitness explains Origin, yet ignores Purpose and possible exaggeration to rally peers",
        "Student leaflets from 1976 are secondary interpretations written by professors",
        "Soweto protesters never opposed Afrikaans-language schooling policies",
      ],
      answerIndex: 1,
      explanation:
        "Eyewitness Origin gives direct personal insight into grievances, yet a protest leaflet's Purpose is to rally fellow pupils to strike—so it may simplify or dramatise events and still requires cross-referencing and own knowledge.",
      hints: [
        "Does being an eyewitness automatically mean a document has no persuasive Purpose?",
        "Think about the difference between Origin (eyewitness) and Purpose (persuading others to strike).",
      ],
    },
    {
      id: "modern-protest-movements-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "modern-protests-digital-age",
      question: "What two-word phrase did sociologist Zeynep Tufekci coin to describe how ultra-fast digital protest movements scale rapidly before building offline structures, leaving them stuck when regimes refuse to concede?",
      answer: { type: "text", accept: ["tactical freeze", "the tactical freeze"], display: "tactical freeze" },
      solution: [
        "Zeynep Tufekci calls this vulnerability a **tactical freeze**.",
        "Because digital networks skip slow institution-building, they can struggle to pivot tactics or negotiate once initial viral energy peaks.",
      ],
      hints: [
        "First word relates to protest methods ('tactical'); second word means getting stuck in place ('freeze').",
        "It appears in the 'Why does this work?' box of Section 1.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "comparing-protest-success",
      question: "Why did India's 1947 independence and the 1964–65 US Civil Rights laws BOTH demonstrate that protest success can be dramatic yet incomplete?",
      options: [
        "Neither campaign achieved any meaningful change in laws or constitutional sovereignty",
        "Both countries immediately abandoned national elections and dissolved their courts",
        "Major legal wins came alongside violent Partition in South Asia and US wealth gaps",
        "Both protest movements were crushed permanently before gaining public sympathy",
      ],
      answerIndex: 2,
      explanation:
        "Nuanced historical evaluation distinguishes constitutional breakthroughs (sovereignty in 1947; ending Jim Crow laws in 1964–65) from tragic or unfinished consequences (communal Partition violence in 1947; continuing northern urban poverty and wealth gaps in the US).",
      hints: [
        "Recall what happened in August 1947 alongside Indian independence.",
        "Recall why Malcolm X and northern urban activists argued the 1964–65 laws were not yet enough.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-protest-success",
      question: "Which 1956 US Supreme Court ruling legally ended bus segregation in Montgomery after the 381-day boycott? (Format: X v. Y)",
      answer: { type: "text", accept: ["Browder v. Gayle", "Browder v Gayle", "Browder versus Gayle"], display: "Browder v. Gayle" },
      traps: [
        { spec: { type: "text", accept: ["Brown v. Board", "Brown v Board", "Brown v. Board of Education"] }, feedback: "Brown v. Board (1954) desegregated public schools; bus segregation in Montgomery was struck down by Browder v. Gayle (1956)." },
        { spec: { type: "text", accept: ["Plessy v. Ferguson", "Plessy v Ferguson"] }, feedback: "Plessy v. Ferguson (1896) established 'separate but equal'; Browder v. Gayle (1956) ended Montgomery bus segregation." },
      ],
      solution: [
        "While the economic boycott crippled bus finances, NAACP lawyers won **Browder v. Gayle** (1956), showing how legal strategy and grassroots economic pressure worked together.",
      ],
      hints: [
        "Do not confuse it with Brown v. Board (1954), which concerned schools.",
        "Named after Aurelia Browder and Montgomery Mayor W.A. Gayle.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "source-provenance-nop",
      question: "Which 1963 document did Martin Luther King Jr. write from jail to persuade eight moderate white Alabama clergymen that non-violent direct action could no longer wait?",
      answer: { type: "text", accept: ["Letter from Birmingham Jail", "A Letter from Birmingham Jail", "Birmingham Jail Letter"], display: "Letter from Birmingham Jail" },
      solution: [
        "King's **Letter from Birmingham Jail** (April 1963) countered moderate clergymen's criticism and became a cornerstone statement of non-violent civil disobedience.",
      ],
      hints: [
        "Its title names the format ('Letter') and the Alabama city jail where King was held.",
        "Written in April 1963 during the Birmingham campaign.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "source-provenance-nop",
      marks: 4,
      question: "Source A is a staged 1930 newsreel shot by a British colonial film unit showing calm streets in Bombay. Source B is an eyewitness dispatch by American journalist Webb Miller describing police beating peaceful salt marchers at Dharasana. Explain how a historian uses NOP and cross-referencing to evaluate BOTH sources together.",
      modelAnswer:
        "Source A's nature as an official colonial newsreel with the purpose of reassuring British audiences that the Raj remained in control explains why it omits violent crackdowns; yet it is useful for revealing imperial propaganda priorities. Source B, written by an independent American eyewitness journalist, provides vivid corroboration of non-violent discipline and brutality at Dharasana, though a historian still checks whether its dramatic prose aimed to move foreign readers. Cross-referencing both against own knowledge of over 60,000 arrests exposes the colonial film's deliberate omissions while showing how international media amplified Gandhi's moral leverage.",
      markScheme: [
        { point: "Evaluates Source A's provenance (official colonial purpose to reassure audiences → explains omissions, yet useful for studying imperial propaganda).", keywords: ["reassure", "propaganda", "omit", "omissions", "control", "imperial"] },
        { point: "Evaluates Source B's provenance (independent foreign eyewitness origin → strong credibility on brutality, while noting journalist purpose/audience).", keywords: ["independent", "foreign", "eyewitness", "journalist", "audience", "moral"] },
        { point: "Applies Own Knowledge to test both sources (e.g. mass civil disobedience / 60,000 arrests / Salt March nationwide impact).", keywords: ["60,000", "arrests", "salt march", "civil disobedience", "own knowledge", "dandi"] },
        { point: "Explains the value of cross-referencing both sources together (exposes omissions and reveals international media impact).", keywords: ["cross-referenc", "together", "corroborat", "contrast", "exposes", "media"] },
      ],
      commonError: "Calling Source A completely useless and Source B completely unbiased without applying NOP to both.",
      hints: [
        "Apply Nature, Origin, and Purpose to BOTH Source A and Source B—even eyewitness journalists have an audience.",
        "Explain what Source A IS still useful for despite its omissions.",
        "Bring in Own Knowledge (mass arrests / global press outrage) to show what cross-referencing uncovers.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "historical-interpretations",
      marks: 4,
      question: "In 2075, two future historians argue about the 2018–2020 youth climate strikes: Historian 1 writes a biography centred on Greta Thunberg; Historian 2 writes a digital-social history centred on anonymous school organisers and social-media algorithms. Using FECP, explain why their interpretations diverge and how a judge should test them.",
      modelAnswer:
        "First, they diverge in focus and lens: Historian 1 applies a top-down 'Great Man' approach highlighting Greta Thunberg's speeches and symbolic leadership, while Historian 2 applies a bottom-up grassroots lens examining local youth branches and platform networks. Second, they select contrasting evidence and write for different audiences: a biography mines speeches and interviews to tell a compelling personal arc, whereas a digital-social study mines local posts, attendance data, and algorithm logs. To test how convincing each account is, a reader should cross-check both against verified evidence—such as global turnout across 150 countries and actual emissions policy outcomes—to see how leadership and grassroots networks interacted.",
      markScheme: [
        { point: "Identifies Focus/Lens difference ('Great Man' top-down vs grassroots/digital bottom-up).", keywords: ["great man", "top-down", "bottom-up", "grassroots", "lens", "focus"] },
        { point: "Identifies Evidence / Purpose & Audience difference (speeches/biography vs local posts/data/academic study).", keywords: ["evidence", "biography", "audience", "purpose", "data", "interviews", "speeches"] },
        { point: "Explains how to test/evaluate interpretations using verified contextual evidence (turnout, 150 countries, policy/emissions outcomes).", keywords: ["test", "verify", "verified", "150", "turnout", "emissions", "policy", "cross-check"] },
        { point: "Synthesises how iconic visibility and local networks interacted rather than choosing blindly.", keywords: ["interact", "both", "together", "leadership", "networks", "balanced"] },
      ],
      commonError: "Treating the question as a personal opinion about climate change instead of applying historical interpretation concepts (FECP).",
      hints: [
        "Apply the FECP reasons why historians disagree (Focus, Evidence, Context, Purpose/audience).",
        "Connect the two future historians directly to the 'Great Man' vs grassroots debate.",
        "Explain how a historian tests how convincing each interpretation is using concrete evidence.",
      ],
    },
    {
      id: "modern-protest-movements-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "comparing-protest-success",
      marks: 4,
      question: "Design a historically grounded strategy explaining how a 21st-century youth movement could avoid 'slacktivism' and 'tactical freeze', drawing explicit lessons from TWO 20th-century protest movements you have studied.",
      modelAnswer:
        "To avoid slacktivism, a modern movement must convert online outrage into clear, winnable targets backed by sustained economic leverage—just as Montgomery residents sustained a 381-day bus boycott withdrawing 70% of fares, or Indians spun khadi cloth to hit British textile profits. To avoid tactical freeze, it should invest early in resilient offline chapters and accountable committees able to negotiate laws, mirroring how the NAACP combined court challenges with SCLC churches and SNCC youth branches, or how the ANC, UDF, and COSATU coordinated internal strikes alongside international sanctions. Combining viral digital visibility with focused offline organisation bridges awareness into binding reform.",
      markScheme: [
        { point: "Addresses overcoming slacktivism through clear goals and sustained offline/economic leverage.", keywords: ["clear", "winnable", "economic", "leverage", "sustained", "offline", "divestment", "boycott"] },
        { point: "Addresses overcoming tactical freeze through resilient offline organisation/committees/negotiators.", keywords: ["committees", "chapters", "organisation", "negotiate", "accountable", "branches", "institutions"] },
        { point: "Explicit lesson drawn from 20th-century Movement 1 (India: khadi/Salt March/INC OR US: Montgomery/NAACP/SCLC/SNCC).", keywords: ["montgomery", "naacp", "sclc", "sncc", "khadi", "salt march", "inc", "381"] },
        { point: "Explicit lesson drawn from a SECOND distinct 20th-century movement (e.g. South Africa: ANC/UDF/COSATU/sanctions, or second of India/US).", keywords: ["anc", "udf", "cosatu", "sanctions", "south africa", "apartheid", "india", "lancashire"] },
      ],
      commonError: "Giving vague modern advice ('post more videos') without drawing explicit structural lessons from two historical movements.",
      hints: [
        "Tackle BOTH vulnerabilities named in the prompt: slacktivism AND tactical freeze.",
        "Pull one concrete lesson from each of two distinct 20th-century movements (India, US Civil Rights, or Anti-Apartheid).",
        "Connect digital strengths (awareness) with historic strengths (clear goals, economic leverage, offline committees).",
      ],
    },
  ],
};
