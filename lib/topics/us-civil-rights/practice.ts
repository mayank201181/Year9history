import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "us-civil-rights-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "jim-crow-brown-v-board",
      question: "In which year did the US Supreme Court deliver its unanimous ruling in *Brown v. Board of Education*?",
      answer: { type: "number", value: 1954, display: "1954" },
      traps: [
        { spec: { type: "number", value: 1896 }, feedback: "1896 was *Plessy v. Ferguson* ('separate but equal'), which *Brown* overturned in schools." },
        { spec: { type: "number", value: 1957 }, feedback: "1957 was the Little Rock Nine crisis enforcing *Brown* three years later." },
      ],
      hints: ["It occurred 58 years after *Plessy v. Ferguson* (1896)."],
      solution: [
        "On **17 May 1954**, the Supreme Court ruled unanimously (9–0) that segregated public schools were 'inherently unequal'.",
      ],
    },
    {
      id: "us-civil-rights-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "jim-crow-brown-v-board",
      question: "What was the main significance of President Eisenhower sending the 101st Airborne Division to Little Rock in 1957?",
      options: [
        "It proved federal authority outranked a defiant state governor",
        "It repealed Jim Crow laws in every Southern cinema immediately",
        "It ended the Montgomery Bus Boycott after more than one year",
        "It abolished literacy tests across rural Mississippi counties",
      ],
      answerIndex: 0,
      hints: ["Governor Orval Faubus had used state troops to block nine Black students."],
      explanation:
        "By federalising the National Guard and sending 1,000 paratroopers, Eisenhower proved the federal government would enforce Supreme Court orders over state defiance.",
    },
    {
      id: "us-civil-rights-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "montgomery-direct-action",
      question: "For how many days did the Montgomery Bus Boycott (1955–56) last?",
      answer: { type: "number", value: 381, display: "381 days" },
      traps: [
        { spec: { type: "number", value: 365 }, feedback: "It lasted slightly over a full year—from 5 December 1955 to 20 December 1956." },
      ],
      hints: ["It ran from 5 December 1955 to 20 December 1956—just over one year."],
      solution: [
        "From 5 December 1955 to 20 December 1956 (1956 was a leap year), Black Montgomery residents boycotted city buses for **381 days**.",
      ],
    },
    {
      id: "us-civil-rights-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "montgomery-direct-action",
      question: "In which North Carolina city did four Black college freshmen launch the famous Woolworth's lunch-counter sit-ins on 1 February 1960?",
      answer: {
        type: "text",
        accept: ["Greensboro", "Greensboro, North Carolina", "Greensboro NC"],
        display: "Greensboro",
      },
      traps: [
        { spec: { type: "text", accept: ["Montgomery"] }, feedback: "Montgomery (Alabama) was the 1955–56 bus boycott; the 1960 sit-ins began in North Carolina." },
        { spec: { type: "text", accept: ["Birmingham"] }, feedback: "Birmingham (Alabama) was the 1963 SCLC campaign; the 1960 sit-ins began in North Carolina." },
      ],
      hints: [
        "The four freshmen attended North Carolina A&T State University.",
        "The city name begins with 'Green...'.",
      ],
      solution: [
        "The sit-ins began in **Greensboro**, North Carolina on 1 February 1960 and rapidly spread to more than 55 Southern cities.",
      ],
    },
    {
      id: "us-civil-rights-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "montgomery-direct-action",
      question: "Which two groups organised and sustained the 1961 Freedom Rides to test interstate bus desegregation?",
      options: [
        "SCLC and the Black Panther Party",
        "CORE and SNCC",
        "Nation of Islam and NAACP",
        "Women's Political Council and FBI",
      ],
      answerIndex: 1,
      hints: [
        "James Farmer led the first group; young Nashville students stepped in to continue after the Alabama attacks.",
        "Think of the Congress of Racial Equality and the Student Nonviolent Coordinating Committee.",
      ],
      explanation:
        "**CORE** launched the 1961 Freedom Rides and **SNCC** volunteers stepped in after white mobs attacked the buses in Alabama, forcing ICC desegregation rules.",
    },
    {
      id: "us-civil-rights-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "mlk-legislation-1964-1965",
      question: "Which US President signed both the Civil Rights Act (1964) and the Voting Rights Act (1965) into federal law?",
      answer: {
        type: "text",
        accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson", "President Johnson", "Lyndon Baines Johnson"],
        display: "Lyndon B. Johnson (LBJ)",
      },
      traps: [
        { spec: { type: "text", accept: ["John F. Kennedy", "JFK", "Kennedy"] }, feedback: "JFK proposed the Civil Rights Bill in June 1963, but he was assassinated in November 1963 before Congress passed it." },
        { spec: { type: "text", accept: ["Dwight D. Eisenhower", "Eisenhower"] }, feedback: "Eisenhower was president during Little Rock (1957), leaving office in January 1961." },
      ],
      hints: [
        "He took office after JFK's assassination in November 1963.",
        "He was a Texan former Senate Majority Leader often known by three initials.",
      ],
      solution: [
        "President **Lyndon B. Johnson (LBJ)** used his legislative mastery to pass and sign the **Civil Rights Act (1964)** and **Voting Rights Act (1965)**.",
      ],
    },
    {
      id: "us-civil-rights-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "mlk-legislation-1964-1965",
      question: "Which barrier to Black political participation was specifically outlawed by the Voting Rights Act of 1965?",
      options: [
        "Segregated department-store lunch counters",
        "Whites-only interstate bus waiting rooms",
        "Discriminatory voter literacy tests",
        "Racial quotas in private Northern colleges",
      ],
      answerIndex: 2,
      hints: [
        "Public places were desegregated in 1964; 1965 focused on ballot registration.",
        "Southern registrars used impossible written exams to disqualify Black applicants.",
      ],
      explanation:
        "The **Voting Rights Act (1965)** banned rigged **literacy tests** and dispatched federal registrars to supervise Southern elections.",
    },
    {
      id: "us-civil-rights-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "malcolm-x-black-power",
      question: "Which organisation did Malcolm X serve as national spokesperson before breaking away in March 1964 shortly before his pilgrimage to Mecca?",
      answer: {
        type: "text",
        accept: ["Nation of Islam", "NOI", "The Nation of Islam"],
        display: "Nation of Islam",
      },
      traps: [
        { spec: { type: "text", accept: ["Black Panthers", "Black Panther Party"] }, feedback: "The Black Panther Party was founded in October 1966—more than a year after Malcolm X's assassination." },
        { spec: { type: "text", accept: ["SNCC"] }, feedback: "SNCC was led by student activists including John Lewis and later Stokely Carmichael." },
      ],
      hints: [
        "It was led by Elijah Muhammad and combined Islamic teachings with Black nationalism.",
        "Its abbreviation is NOI.",
      ],
      solution: [
        "Malcolm X rose to prominence as the charismatic spokesperson for the **Nation of Islam (NOI)** before leaving in 1964.",
      ],
    },
    {
      id: "us-civil-rights-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "malcolm-x-black-power",
      question: "Which community initiative became one of the most influential 'Survival Programs' run by the Black Panther Party?",
      options: [
        "Federal voter-registration courts across Alabama",
        "Desegregated interstate Greyhound bus fleets",
        "National television broadcasts from Montgomery",
        "Free Breakfast for Children in urban neighbourhoods",
      ],
      answerIndex: 3,
      hints: [
        "Alongside armed patrols monitoring police, the Panthers directly addressed urban childhood hunger.",
        "It fed tens of thousands of pupils before school each week.",
      ],
      explanation:
        "The Black Panthers' **Free Breakfast for Children** programme fed thousands of children in Oakland and other cities, demonstrating community self-reliance alongside their Ten-Point Program.",
    },
    {
      id: "us-civil-rights-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "montgomery-direct-action",
      marks: 3,
      question: "Explain how television coverage helped civil rights protesters win federal support in Birmingham (1963).",
      hints: [
        "Name the Birmingham police commissioner and the weapons used against peaceful marchers.",
        "Link the evening news broadcasts to Northern public shock and President Kennedy's decision.",
      ],
      modelAnswer:
        "In May 1963, Police Commissioner Bull Connor attacked peaceful marchers—including children—with high-pressure fire hoses and police dogs. Network television beamed this brutality into millions of American living rooms, sparking moral outrage across the North and abroad during the Cold War. Under intense public pressure, President John F. Kennedy announced a major Civil Rights Bill in June 1963.",
      markScheme: [
        {
          point: "Identifies Birmingham police violence (Bull Connor using fire hoses and/or attack dogs against peaceful marchers/children).",
          keywords: ["bull connor", "connor", "fire hoses", "hoses", "dogs"],
        },
        {
          point: "Explains how broadcasts shocked Northern/national or international Cold War opinion.",
          keywords: ["outrage", "shock", "horror", "sympathy", "cold war", "millions"],
        },
        {
          point: "Links public pressure to President Kennedy proposing the Civil Rights Bill (which led to the 1964 Act).",
          keywords: ["kennedy", "jfk", "civil rights bill", "1964", "legislation"],
        },
      ],
      commonError: "Saying only 'people watched it on TV and felt sad' without naming Bull Connor's tactics or linking the outrage to Kennedy proposing federal legislation.",
    },
  ],
  papers: [
    {
      id: "us-civil-rights-p1",
      title: "Practice Paper 1 — Courts, Boycotts & Direct Action",
      questions: [
        {
          id: "us-civil-rights-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "jim-crow-brown-v-board",
          question: "In which year did the US Supreme Court rule 'separate but equal' constitutional in *Plessy v. Ferguson*?",
          answer: { type: "number", value: 1896, display: "1896" },
          traps: [
            { spec: { type: "number", value: 1954 }, feedback: "1954 was *Brown v. Board*, which overturned *Plessy* in public education." },
          ],
          hints: ["It happened four years before the start of the 20th century."],
          solution: ["*Plessy v. Ferguson* was decided in **1896**, legally entrenching Jim Crow segregation for 58 years."],
        },
        {
          id: "us-civil-rights-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "jim-crow-brown-v-board",
          question: "How many years passed between *Plessy v. Ferguson* (1896) and *Brown v. Board of Education* (1954)?",
          answer: { type: "number", value: 58, display: "58 years" },
          hints: ["Subtract 1896 from 1954."],
          solution: ["1954 − 1896 = **58 years** of federally sanctioned 'separate but equal' schooling."],
        },
        {
          id: "us-civil-rights-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "jim-crow-brown-v-board",
          question: "Name the Arkansas Governor who deployed state National Guard troops to block the Little Rock Nine in September 1957.",
          answer: {
            type: "text",
            accept: ["Orval Faubus", "Faubus", "Governor Faubus", "Governor Orval Faubus"],
            display: "Orval Faubus",
          },
          traps: [
            { spec: { type: "text", accept: ["George Wallace", "Wallace"] }, feedback: "George Wallace was Governor of Alabama (famous for 'stand in the schoolhouse door' in 1963), not Arkansas." },
          ],
          hints: ["His surname begins with 'F' and he later closed all Little Rock high schools in 1958."],
          solution: ["Governor **Orval Faubus** defied the federal desegregation court order at Little Rock Central High School."],
        },
        {
          id: "us-civil-rights-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "jim-crow-brown-v-board",
          question: "Why did the NAACP choose education lawsuits rather than asking Southern legislatures to repeal Jim Crow laws in the early 1950s?",
          options: [
            "Disenfranchised Black voters lacked influence in state assemblies",
            "Federal courts were run exclusively by NAACP legal officers",
            "Southern state constitutions already banned segregated schools",
            "Education cases were much quicker than passing city ordinances",
          ],
          answerIndex: 0,
          hints: [
            "Remember who was allowed to vote in Southern state elections before 1965.",
            "Compare white-dominated Southern legislatures with the US Supreme Court.",
          ],
          explanation:
            "Because poll taxes and literacy tests blocked Black citizens from voting in the South, all-white state legislatures would never repeal Jim Crow—making federal constitutional courts the NAACP's sharpest lever.",
        },
        {
          id: "us-civil-rights-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "Approximately what percentage of Montgomery bus passengers were Black citizens at the start of the 1955 boycott?",
          answer: { type: "number", value: 75, tolerance: 5, display: "75%" },
          hints: [
            "Think about why losing Black riders pushed Montgomery City Lines close to bankruptcy.",
            "It was roughly three-quarters of all passengers.",
          ],
          solution: [
            "Black passengers made up roughly **75%** (three-quarters) of bus riders, giving the community massive economic leverage.",
          ],
        },
        {
          id: "us-civil-rights-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "Which organisation led by Jo Ann Robinson printed and distributed tens of thousands of leaflets overnight to launch the Montgomery Bus Boycott?",
          answer: {
            type: "text",
            accept: ["Women's Political Council", "Womens Political Council", "WPC", "The Women's Political Council"],
            display: "Women's Political Council (WPC)",
          },
          traps: [
            { spec: { type: "text", accept: ["SCLC"] }, feedback: "SCLC was founded later in 1957 after the boycott had ended." },
          ],
          hints: [
            "It was an organisation of Black professional women in Montgomery founded in 1946.",
            "Its initials are WPC.",
          ],
          solution: [
            "Jo Ann Robinson and the **Women's Political Council (WPC)** mimeographed ~50,000 flyers overnight after Rosa Parks's arrest, proving women's grassroots organising launched the boycott.",
          ],
        },
        {
          id: "us-civil-rights-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "How did ordinary Montgomery residents keep the bus boycott going for over a year despite white harassment and police fines?",
          options: [
            "They received free private taxis funded by Southern governors",
            "They ran a disciplined carpool network and walked miles daily",
            "They halted all work across Alabama factories until December",
            "They rode segregated trains instead of Montgomery city buses",
          ],
          answerIndex: 1,
          hints: [
            "Think about how domestic workers reached jobs across town without boarding a single bus.",
            "The MIA organised hundreds of volunteer drivers and pick-up stations.",
          ],
          explanation:
            "The Montgomery Improvement Association coordinated a 300-car volunteer pool with scheduled dispatch points while thousands walked, sustaining unity for **381 days**.",
        },
        {
          id: "us-civil-rights-p1-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "jim-crow-brown-v-board",
          marks: 4,
          question: "Explain TWO reasons why *Brown v. Board of Education* (1954) was significant, and ONE major limitation it faced.",
          hints: [
            "First explain the legal defeat of *Plessy v. Ferguson* and the morale boost to activists.",
            "Then explain *Brown II*'s 'all deliberate speed' loophole or Massive Resistance.",
          ],
          modelAnswer:
            "First, the unanimous 9–0 Supreme Court verdict declared segregated schools 'inherently unequal', overturning the 1896 Plessy v. Ferguson 'separate but equal' precedent in public education. Second, it proved NAACP legal strategy could defeat Jim Crow in federal court and inspired grassroots campaigns like Montgomery and Little Rock. However, a major limitation was that Brown II (1955) set no firm timetable ('all deliberate speed'), allowing Southern states to launch Massive Resistance so that under 2% of Deep South Black pupils were in integrated schools by 1964.",
          markScheme: [
            {
              point: "Overturned Plessy v. Ferguson ('separate but equal') in public education / declared segregation inherently unequal.",
              keywords: ["plessy", "separate but equal", "inherently unequal", "overturn", "unconstitutional"],
            },
            {
              point: "Boosted movement morale / inspired further civil rights challenges (e.g. Montgomery, Little Rock, NAACP momentum).",
              keywords: ["inspired", "momentum", "hope", "encouraged", "montgomery", "little rock"],
            },
            {
              point: "Identifies the limitation of vague enforcement ('all deliberate speed' / no deadline / Massive Resistance).",
              keywords: ["deliberate speed", "deadline", "timetable", "massive resistance", "faubus", "stalled"],
            },
            {
              point: "Provides concrete evidence of slow integration (e.g. under 2% in Deep South by 1964 or Lost Year school closures).",
              keywords: ["2%", "few", "decade", "closed", "lost year", "1964"],
            },
          ],
          commonError: "Praising *Brown* as ending school segregation immediately without acknowledging *Brown II* and Massive Resistance.",
        },
        {
          id: "us-civil-rights-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "What does the acronym **SNCC** stand for?",
          answer: {
            type: "text",
            accept: ["Student Nonviolent Coordinating Committee", "Student Non-Violent Coordinating Committee"],
            display: "Student Nonviolent Coordinating Committee",
          },
          hints: [
            "It was formed by college students in April 1960 after the Greensboro sit-ins.",
            "S = Student, N = Nonviolent, C = Coordinating, C = Committee.",
          ],
          solution: [
            "**SNCC** stands for the **Student Nonviolent Coordinating Committee**, guided initially by Ella Baker.",
          ],
        },
        {
          id: "us-civil-rights-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "Why did sit-in protesters dress neatly in suits and dresses and undergo training workshops before sitting at segregated counters?",
          options: [
            "To blend in secretly as restaurant staff during lunch hours",
            "To obey strict state dress-code statutes in North Carolina",
            "To maintain strict discipline and win public moral sympathy",
            "To prevent newspaper photographers from recognising students",
          ],
          answerIndex: 2,
          hints: [
            "Imagine how hostile bystanders poured ketchup, shouted slurs, and blew smoke at seated students.",
            "How would national newspaper readers compare polite students with abusive mobs?",
          ],
          explanation:
            "Workshops (like Rev. James Lawson's in Nashville) trained students to remain dignified and non-retaliatory so press photos created an undeniable moral contrast against racist hecklers.",
        },
        {
          id: "us-civil-rights-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          question: "Which federal agency issued strict rules effective November 1961 banning segregation in interstate bus terminals following the Freedom Rides?",
          answer: {
            type: "text",
            accept: ["Interstate Commerce Commission", "ICC", "The Interstate Commerce Commission"],
            display: "Interstate Commerce Commission (ICC)",
          },
          hints: [
            "Attorney General Robert F. Kennedy petitioned this federal transport regulator.",
            "Its initials are ICC.",
          ],
          solution: [
            "The **Interstate Commerce Commission (ICC)** ordered all 'Whites Only' signs removed from interstate bus terminals from November 1961.",
          ],
        },
        {
          id: "us-civil-rights-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          marks: 4,
          question: "Explain how the Montgomery Bus Boycott (1955–56) combined TWO different forms of pressure to defeat bus segregation.",
          hints: [
            "Form 1: Think about money—what share of riders were Black and how did they get to work?",
            "Form 2: Think about the US Supreme Court case decided in November 1956.",
          ],
          modelAnswer:
            "First, the boycott applied sustained economic pressure: because roughly 75% of Montgomery's bus riders were Black, walking and running a disciplined 300-car volunteer pool for 381 days drove Montgomery City Lines close to bankruptcy and hurt downtown shops. Second, the NAACP backed a constitutional lawsuit, Browder v. Gayle, through federal courts; in November 1956 the US Supreme Court struck down Alabama's bus segregation laws, forcing the city to desegregate permanently.",
          markScheme: [
            {
              point: "Explains economic pressure (Black riders were ~75% of fares, causing severe financial losses to the bus company/shops).",
              keywords: ["economic", "75%", "bankruptcy", "fares", "revenue", "money", "financial"],
            },
            {
              point: "Describes community organisation sustaining the 381-day boycott (carpools, walking, MIA/churches).",
              keywords: ["carpool", "carpools", "381", "walk", "mia", "churches"],
            },
            {
              point: "Identifies the parallel federal legal challenge (NAACP lawsuit / Browder v. Gayle).",
              keywords: ["browder", "lawsuit", "court", "legal", "naacp"],
            },
            {
              point: "Explains the decisive Supreme Court outcome (ruled Alabama bus segregation unconstitutional in late 1956).",
              keywords: ["supreme court", "unconstitutional", "1956", "desegregate", "struck down"],
            },
          ],
          commonError: "Mentioning only the economic boycott and forgetting the Supreme Court ruling (*Browder v. Gayle*) that actually forced the city council to back down.",
        },
        {
          id: "us-civil-rights-p1-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "montgomery-direct-action",
          question: "In what key way did the 1961 Freedom Rides differ strategically from the 1955–56 Montgomery Bus Boycott?",
          options: [
            "Freedom Riders focused purely on local county voting laws",
            "Freedom Riders refused all federal assistance from Washington",
            "Freedom Riders boycotted every shop across Northern cities",
            "Freedom Riders deliberately crossed state lines to compel federal action",
          ],
          answerIndex: 3,
          hints: [
            "Montgomery was a city-wide economic boycott inside Alabama.",
            "Why did CORE specifically choose *interstate* buses travelling from Washington, DC to New Orleans?",
          ],
          explanation:
            "Interstate travel fell directly under federal constitutional jurisdiction; by riding across state borders into the Deep South, Freedom Riders forced Attorney General Robert Kennedy and the ICC to intervene.",
        },
        {
          id: "us-civil-rights-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "montgomery-direct-action",
          marks: 3,
          question: "Why did the 1960 Greensboro sit-ins represent a turning point in the character of the Civil Rights Movement?",
          hints: [
            "Think about who initiated Greensboro compared with earlier NAACP lawsuits.",
            "Mention the rapid regional spread and the new organisation created in April 1960.",
          ],
          modelAnswer:
            "Greensboro shifted momentum toward young college students willing to take immediate direct action rather than waiting solely for slow court cases. Within weeks, sit-ins spread across more than 55 cities in 13 states, hitting national chains like Woolworth's financially until they desegregated. The wave also created SNCC (Student Nonviolent Coordinating Committee), which went on to lead Freedom Rides, Freedom Summer, and Selma.",
          markScheme: [
            {
              point: "Highlights youth/student initiative taking immediate direct action (beyond slow courtroom challenges).",
              keywords: ["students", "youth", "freshmen", "direct action", "young"],
            },
            {
              point: "Notes rapid regional spread and economic impact desegregating chains such as Woolworth's.",
              keywords: ["woolworth", "55", "spread", "sales", "profits", "desegregated"],
            },
            {
              point: "Identifies the birth of SNCC as a major grassroots force.",
              keywords: ["sncc", "student nonviolent", "ella baker"],
            },
          ],
          commonError: "Describing only what the four students ordered at the counter without explaining *why* the campaign changed the wider movement.",
        },
        {
          id: "us-civil-rights-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "jim-crow-brown-v-board",
          marks: 4,
          question: "'Between 1954 and 1961, federal courts were more important than grassroots protests in challenging Jim Crow.' How far do you agree?",
          hints: [
            "Give specific evidence for federal courts (*Brown*, *Browder v. Gayle*, *Boynton*).",
            "Give specific evidence for grassroots protests (Montgomery, Little Rock Nine courage, sit-ins, Freedom Rides) forcing enforcement, then deliver a clear judgement.",
          ],
          modelAnswer:
            "Federal courts were vital because rulings like Brown v. Board (1954) and Browder v. Gayle (1956) destroyed the constitutional basis of 'separate but equal' and gave activists legal legitimacy. However, court orders alone achieved little against Southern Massive Resistance—under 2% of Deep South Black pupils were in integrated schools a decade after Brown, and Southern bus stations ignored Boynton v. Virginia. It took grassroots action—Montgomery's 381-day boycott, Greensboro sit-ins, and the 1961 Freedom Rides—to apply economic and public pressure that forced federal enforcement. Overall, neither succeeded alone, but grassroots protests were slightly more decisive because they turned paper rulings into lived reality.",
          markScheme: [
            {
              point: "Supports the importance of federal courts with specific case evidence (e.g. Brown v. Board 1954, Browder v. Gayle 1956).",
              keywords: ["brown", "browder", "separate but equal", "constitutional", "supreme court"],
            },
            {
              point: "Identifies the limit of court rulings on their own (Massive Resistance, ignored rulings, slow school integration).",
              keywords: ["massive resistance", "ignored", "2%", "paper", "slow", "unenforced"],
            },
            {
              point: "Supports the importance of grassroots protest with specific examples (Montgomery boycott, sit-ins, Freedom Rides).",
              keywords: ["boycott", "sit-ins", "freedom rides", "economic", "pressure"],
            },
            {
              point: "Reaches a clear, justified overall judgement linking courts and grassroots action together.",
              keywords: ["overall", "however", "together", "reality", "enforcement", "decisive"],
            },
          ],
          commonError: "Arguing one side only instead of weighing BOTH federal courts and grassroots protest before concluding.",
        },
      ],
    },
    {
      id: "us-civil-rights-p2",
      title: "Practice Paper 2 — Legislation, Black Power & Evaluating Progress",
      questions: [
        {
          id: "us-civil-rights-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mlk-legislation-1964-1965",
          question: "In which month and year did approximately 250,000 demonstrators gather for the March on Washington for Jobs and Freedom?",
          answer: {
            type: "text",
            accept: ["August 1963", "Aug 1963", "28 August 1963", "August 28 1963", "August 28, 1963"],
            display: "August 1963",
          },
          traps: [
            { spec: { type: "text", accept: ["July 1964", "1964"] }, feedback: "July 1964 was when the Civil Rights Act was signed; the March on Washington took place a year earlier." },
          ],
          hints: ["It happened a few months after the May 1963 Birmingham protests and three months before JFK's assassination."],
          solution: ["The March on Washington took place on **28 August 1963**, where MLK Jr. delivered *'I Have a Dream'*."],
        },
        {
          id: "us-civil-rights-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mlk-legislation-1964-1965",
          question: "Name the bridge in Selma, Alabama where state troopers attacked peaceful voting-rights marchers on 'Bloody Sunday' (7 March 1965).",
          answer: {
            type: "text",
            accept: ["Edmund Pettus Bridge", "Edmund Pettus", "The Edmund Pettus Bridge"],
            display: "Edmund Pettus Bridge",
          },
          hints: [
            "Ironically, it was named after a Confederate general and former KKK leader.",
            "Its first name is Edmund.",
          ],
          solution: ["State troopers beat and tear-gassed marchers crossing the **Edmund Pettus Bridge** in Selma."],
        },
        {
          id: "us-civil-rights-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "mlk-legislation-1964-1965",
          question: "In 1964, about 6.7% of eligible Black citizens in Mississippi were registered to vote; by 1967, this rose to 59.8%. By how many percentage points did registration rise? (Give your answer to 1 decimal place.)",
          answer: { type: "number", value: 53.1, tolerance: 0.1, display: "53.1" },
          hints: [
            "Subtract the 1964 figure from the 1967 figure.",
            "Calculate 59.8 − 6.7.",
          ],
          solution: ["59.8 − 6.7 = **53.1 percentage points**, demonstrating the dramatic impact of the 1965 Voting Rights Act."],
        },
        {
          id: "us-civil-rights-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mlk-legislation-1964-1965",
          question: "Why did President Johnson's speech to Congress after Selma—echoing 'We shall overcome'—mark a historic political moment?",
          options: [
            "It showed a Southern president aligning federal power with protesters",
            "It announced the end of all US involvement in the Vietnam War",
            "It overturned Brown v. Board in favour of local school boards",
            "It formally appointed Malcolm X as federal attorney general",
          ],
          answerIndex: 0,
          hints: [
            "Remember LBJ was himself from Texas, a Southern state.",
            "Adopting the Civil Rights Movement's own anthem signalled full executive commitment to voting rights.",
          ],
          explanation:
            "For a Texan president to stand before Congress and adopt the movement's signature anthem **'We shall overcome'** showed that grassroots sacrifice in Selma had won the full backing of the White House for the 1965 Voting Rights Act.",
        },
        {
          id: "us-civil-rights-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "malcolm-x-black-power",
          question: "In which Los Angeles neighbourhood did a major six-day urban uprising erupt in August 1965, just five days after the Voting Rights Act was signed?",
          answer: {
            type: "text",
            accept: ["Watts", "Watts, Los Angeles", "Watts LA"],
            display: "Watts",
          },
          traps: [
            { spec: { type: "text", accept: ["Detroit"] }, feedback: "The major Detroit uprising took place two years later, in July 1967." },
            { spec: { type: "text", accept: ["Selma"] }, feedback: "Selma (Alabama) was the March 1965 voting-rights march; the August 1965 riot was in Los Angeles." },
          ],
          hints: ["It is a five-letter district in south-central Los Angeles beginning with 'W'."],
          solution: ["The **Watts** uprising (August 1965) exposed simmering frustration over unemployment, poverty, and police brutality outside the South."],
        },
        {
          id: "us-civil-rights-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          question: "Name ONE of the two co-founders who launched the Black Panther Party in Oakland, California in October 1966.",
          answer: {
            type: "text",
            accept: ["Huey P. Newton", "Huey Newton", "Newton", "Bobby Seale", "Seale"],
            display: "Huey P. Newton or Bobby Seale",
          },
          traps: [
            { spec: { type: "text", accept: ["Stokely Carmichael", "Carmichael"] }, feedback: "Stokely Carmichael popularised 'Black Power' in SNCC; Huey P. Newton and Bobby Seale co-founded the Black Panthers in Oakland." },
            { spec: { type: "text", accept: ["Malcolm X"] }, feedback: "Malcolm X inspired the Panthers, but he was assassinated in February 1965 before they were founded in October 1966." },
          ],
          hints: [
            "They met at Merritt College in Oakland and drafted the Ten-Point Program.",
            "Think of Huey P. N___ or Bobby S___.",
          ],
          solution: [
            "The Black Panther Party was co-founded in October 1966 by **Huey P. Newton** and **Bobby Seale**.",
          ],
        },
        {
          id: "us-civil-rights-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          question: "What fundamental difference separated *de jure* segregation in the South from *de facto* segregation in the North?",
          options: [
            "De facto segregation was strictly enforced by written state statutes",
            "De jure segregation was written in law; de facto existed in practice",
            "De jure segregation only affected private schools outside Alabama",
            "De facto segregation ended completely on 2 July 1964 nationwide",
          ],
          answerIndex: 1,
          hints: [
            "Recall the Latin roots: *jure* = law, *facto* = fact/practice.",
            "Why couldn't simply repealing Jim Crow laws instantly fix housing slums in Chicago or Watts?",
          ],
          explanation:
            "**De jure** segregation was imposed by explicit written Jim Crow laws; **de facto** segregation operated in practice through discriminatory housing practices, unequal wealth, and underfunded urban schools.",
        },
        {
          id: "us-civil-rights-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "mlk-legislation-1964-1965",
          marks: 4,
          question: "Compare the achievements of the **Civil Rights Act (1964)** and the **Voting Rights Act (1965)**, explaining why BOTH laws were necessary.",
          hints: [
            "Explain what 1964 achieved (public accommodations, employment, school enforcement).",
            "Explain what 1964 missed—and how 1965 fixed ballot access with hard registration results.",
          ],
          modelAnswer:
            "The Civil Rights Act of 1964 ended de jure Jim Crow segregation in public accommodations such as restaurants, hotels, and theatres, outlawed workplace discrimination, and enabled federal enforcement of school desegregation. However, it did not stop Southern registrars from using rigged literacy tests to exclude Black citizens from elections. Following the Selma campaign, the Voting Rights Act of 1965 abolished literacy tests and sent federal registrars into the South, raising Mississippi Black voter registration from roughly 6.7% to 59.8% by 1967. Together, the two statutes complemented each other because legal equality in public spaces had to be backed by lasting political power to elect accountable officials.",
          markScheme: [
            {
              point: "Accurately states key provisions of the 1964 Civil Rights Act (ended public segregation and/or employment discrimination).",
              keywords: ["public", "restaurants", "hotels", "employment", "workplace", "schools", "de jure"],
            },
            {
              point: "Identifies what the 1964 Act left unresolved (voting barriers / literacy tests remained in the South).",
              keywords: ["literacy tests", "registrars", "elections", "ballot", "unresolved", "still"],
            },
            {
              point: "Accurately explains the 1965 Voting Rights Act and its impact (banned literacy tests, federal observers, sharp registration jump).",
              keywords: ["federal registrars", "observers", "59.8", "60%", "250,000", "registration", "abolished"],
            },
            {
              point: "Explains clearly why both were necessary together (linking social/legal equality with democratic political power).",
              keywords: ["political power", "elect", "complemented", "together", "democratic", "officials"],
            },
          ],
          commonError: "Swapping the two laws or writing vaguely that 'both helped Black people get rights' without naming specific provisions.",
        },
        {
          id: "us-civil-rights-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          question: "In which year was Dr. Martin Luther King Jr. assassinated in Memphis, Tennessee, days before Congress passed the Fair Housing Act?",
          answer: { type: "number", value: 1968, display: "1968" },
          traps: [
            { spec: { type: "number", value: 1965 }, feedback: "1965 was the year Malcolm X was assassinated (21 February 1965); MLK Jr. was murdered three years later." },
            { spec: { type: "number", value: 1963 }, feedback: "1963 was JFK's assassination (November 1963); MLK Jr. was assassinated in April 1968." },
          ],
          hints: [
            "He was in Memphis supporting striking Black sanitation workers.",
            "It happened in the same year as the Mexico City Olympics and the Fair Housing Act.",
          ],
          solution: ["Dr. Martin Luther King Jr. was assassinated on **4 April 1968** in Memphis, Tennessee."],
        },
        {
          id: "us-civil-rights-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          question: "Why did many young SNCC activists begin embracing 'Black Power' over strict interracial non-violence by 1966?",
          options: [
            "They wanted to join Southern governors in opposing school buses",
            "They believed Northern cities had already eliminated racial poverty",
            "They rejected cultural pride and stopped organising Black voters",
            "They felt slow legal gains and persistent violence required self-reliance",
          ],
          answerIndex: 3,
          hints: [
            "Think about activists who endured Freedom Summer murders (1964) and Bloody Sunday beatings (1965).",
            "Why did patience with white liberal allies wear thin by 1966?",
          ],
          explanation:
            "After years of beatings, murders, and stubborn urban poverty, SNCC activists under Stokely Carmichael concluded Black communities needed **independent political control, self-defence, and cultural pride**.",
        },
        {
          id: "us-civil-rights-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          question: "What was the name of the 1968 presidential inquiry whose report warned America was moving toward 'two societies, one black, one white—separate and unequal'?",
          answer: {
            type: "text",
            accept: ["Kerner Commission", "The Kerner Commission", "Kerner Report", "Kerner"],
            display: "Kerner Commission",
          },
          hints: [
            "President Johnson appointed this body after the devastating 1967 riots in Detroit and Newark.",
            "It was named after Illinois Governor Otto K___.",
          ],
          solution: [
            "The **Kerner Commission** (1968) blamed white racism, poverty, and police hostility for the urban riots of 1965–67.",
          ],
        },
        {
          id: "us-civil-rights-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          marks: 4,
          question: "Explain TWO key differences between the strategies of Martin Luther King Jr. and Malcolm X (during his Nation of Islam years), and ONE way their concerns overlapped.",
          hints: [
            "Contrast integration vs separatism/self-reliance, and strict non-violence vs self-defence.",
            "For overlap, think about dignity, global awareness, or economic justice for poor Black families.",
          ],
          modelAnswer:
            "First, Martin Luther King Jr. pursued racial integration through interracial coalitions and federal legislation, whereas Malcolm X during his Nation of Islam years rejected integration and called for Black self-reliance and separation. Second, King insisted on strict Christian non-violent direct action even under attack, whereas Malcolm X advocated active self-defence 'by any means necessary' against racist violence. However, both leaders shared a fierce commitment to restoring Black dignity and confronting deep economic poverty—a concern MLK highlighted in his 1968 Poor People's Campaign while Malcolm X moved toward multiracial solidarity after his 1964 Hajj.",
          markScheme: [
            {
              point: "Contrasts goals/alliances: MLK sought integration and interracial coalitions vs Malcolm X's focus on Black independence/separatism (in NOI).",
              keywords: ["integration", "coalitions", "separatism", "self-reliance", "independence"],
            },
            {
              point: "Contrasts methods: MLK's strict non-violence vs Malcolm X's self-defence ('by any means necessary').",
              keywords: ["non-violent", "non-violence", "self-defence", "self-defense", "any means necessary"],
            },
            {
              point: "Identifies genuine overlap (dignity/pride, attacking systemic poverty/racism, or late-career convergence).",
              keywords: ["dignity", "poverty", "economic", "pride", "poor people", "hajj", "multiracial"],
            },
            {
              point: "Avoids crude stereotypes (distinguishes self-defence from aggression or notes Malcolm X's 1964 evolution).",
              keywords: ["1964", "mecca", "evolution", "racist violence", "attacked", "poor people's campaign"],
            },
          ],
          commonError: "Writing a simplistic caricature that 'MLK was good and peaceful while Malcolm X wanted violence against white people.'",
        },
        {
          id: "us-civil-rights-p2-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "malcolm-x-black-power",
          question: "Why did FBI Director J. Edgar Hoover target the Black Panther Party's Free Breakfast for Children programme alongside its armed patrols?",
          options: [
            "Because the breakfast clinics broke federal school-meal laws",
            "Because Hoover feared social aid won Panthers broad legitimacy",
            "Because the Panthers refused to feed children in Oakland",
            "Because Congress had ordered FBI agents to run local kitchens",
          ],
          answerIndex: 1,
          hints: [
            "Hoover famously called the Free Breakfast programme 'the greatest threat to internal security'.",
            "Think about how winning community loyalty made the Panthers politically stronger.",
          ],
          explanation:
            "Hoover recognised that feeding hungry children built deep grassroots loyalty and respect for the Panthers—so **COINTELPRO** spread rumours and harassed clinics to destroy their community base.",
        },
        {
          id: "us-civil-rights-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "malcolm-x-black-power",
          marks: 3,
          question: "Why did Black Power lose some white liberal allies in the late 1960s, yet still leave a lasting positive legacy?",
          hints: [
            "Explain white moderate anxiety over militant rhetoric, SNCC's shift, and urban riots.",
            "Explain lasting gains in cultural pride ('Black is Beautiful'), community programmes, and political confidence.",
          ],
          modelAnswer:
            "Militant slogans, armed Black Panther patrols, and television coverage of urban riots frightened moderate white voters and cut Northern donations to SNCC, contributing to a conservative backlash by 1968. Yet Black Power achieved lasting gains by instilling cultural pride ('Black is Beautiful'), establishing Black Studies programmes and community survival clinics, and forcing America to confront urban poverty and police brutality.",
          markScheme: [
            {
              point: "Explains loss of white liberal support (militant image/riots alarming moderates, declining SNCC funding, or white backlash).",
              keywords: ["moderates", "backlash", "frightened", "donations", "funding", "riots", "nixon"],
            },
            {
              point: "Identifies cultural/psychological legacy (Black pride, 'Black is Beautiful', Black Studies, global identity).",
              keywords: ["pride", "beautiful", "cultural", "studies", "identity", "olympics"],
            },
            {
              point: "Identifies practical/political legacy (survival clinics/breakfasts, highlighting urban poverty/police brutality).",
              keywords: ["breakfast", "clinics", "poverty", "police", "community", "survival"],
            },
          ],
          commonError: "Focusing only on why white voters reacted negatively without crediting Black Power's cultural and community achievements.",
        },
        {
          id: "us-civil-rights-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "malcolm-x-black-power",
          marks: 4,
          question: "'By 1968, the US Civil Rights Movement had succeeded.' Evaluate this statement by weighing legal/political gains against economic/social limits.",
          hints: [
            "Cite concrete legal/political achievements (1954, 1964, 1965, 1968 Fair Housing Act, voter registration surge).",
            "Cite concrete economic/social limits (Watts/Detroit riots, Kerner Commission, de facto housing & wealth gaps), then reach a balanced conclusion.",
          ],
          modelAnswer:
            "In legal and political terms, the movement was a historic triumph: Brown v. Board (1954), the Civil Rights Act (1964), the Voting Rights Act (1965), and the Fair Housing Act (1968) dismantled de jure Jim Crow and raised Southern Black voter registration dramatically—for example from 6.7% to 59.8% in Mississippi. However, in economic and social life, equality remained unfinished: urban uprisings in Watts (1965) and Detroit (1967), poverty rates roughly triple the white rate, and the 1968 Kerner Commission warning of 'two societies, separate and unequal' proved de facto segregation persisted. Therefore, the statement is only partly true: the movement won monumental constitutional and voting freedoms, but economic justice remained an ongoing struggle.",
          markScheme: [
            {
              point: "Evidences major legal/constitutional achievements (1964 Civil Rights Act, 1965 Voting Rights Act, 1968 Fair Housing Act, end of de jure Jim Crow).",
              keywords: ["1964", "1965", "fair housing", "de jure", "jim crow", "brown"],
            },
            {
              point: "Uses specific political impact evidence (e.g. Mississippi registration surge, 250,000+ voters, Black elected officials).",
              keywords: ["59.8", "6.7", "voter", "registration", "250,000", "elected"],
            },
            {
              point: "Evidences continuing economic/social limits (de facto segregation, Watts/Detroit riots, poverty/wealth gap, Kerner Commission).",
              keywords: ["de facto", "watts", "detroit", "kerner", "poverty", "unemployment", "two societies"],
            },
            {
              point: "Delivers a clear, balanced judgement distinguishing legal victory from unfinished economic equality.",
              keywords: ["partly", "therefore", "however", "unfinished", "ongoing", "monumental"],
            },
          ],
          commonError: "Writing a simple 'Yes, it succeeded' or 'No, it failed' instead of distinguishing between *de jure* legal wins and *de facto* economic limits.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "us-civil-rights-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "jim-crow-brown-v-board",
      question: "A 1956 Southern Manifesto signed by 101 US Congressmen condemned *Brown v. Board* as 'a clear abuse of judicial power'. What makes this primary source especially valuable to a historian studying 1950s resistance?",
      options: [
        "It shows elected national politicians organised Massive Resistance",
        "It proves the Supreme Court broke federal law during the 1954 case",
        "It reflects the views of Northern voters welcoming integrated buses",
        "It provides unbiased data on Southern school construction budgets",
      ],
      answerIndex: 0,
      hints: [
        "Look closely at the *Origin* (101 members of Congress, not just fringe extremists).",
        "What does mainstream political backing tell us about why desegregation stalled after 1954?",
      ],
      explanation:
        "Because 101 federal Senators and Representatives signed the **Southern Manifesto (1956)**, it proves **Massive Resistance** was not merely fringe KKK violence—it was backed by mainstream Southern political power.",
    },
    {
      id: "us-civil-rights-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "montgomery-direct-action",
      question: "Nine months before Rosa Parks's arrest, which 15-year-old Black Montgomery schoolgirl was arrested in March 1955 for refusing to give up her bus seat (and later served as a plaintiff in *Browder v. Gayle*)?",
      answer: {
        type: "text",
        accept: ["Claudette Colvin", "Colvin"],
        display: "Claudette Colvin",
      },
      hints: [
        "Local leaders waited for Rosa Parks to be the public face of the boycott, yet this teenager's testimony helped win the Supreme Court lawsuit.",
        "Her initials are C.C.",
      ],
      solution: [
        "**Claudette Colvin** refused to move on 2 March 1955 at age 15 and became one of four brave women plaintiffs in *Browder v. Gayle* (1956), which legally ended Montgomery bus segregation.",
      ],
    },
    {
      id: "us-civil-rights-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "montgomery-direct-action",
      question: "Why did Birmingham's SCLC strategists choose to launch 'Project C' (Confrontation) in spring 1963 specifically when Eugene 'Bull' Connor was still Commissioner of Public Safety?",
      options: [
        "Connor had quietly promised to integrate downtown shops in March",
        "They predicted Connor's violent temper would expose Jim Crow on TV",
        "Birmingham had no television crews available to film police raids",
        "Federal courts had already removed Connor from office in January",
      ],
      answerIndex: 1,
      hints: [
        "Remember the lesson SCLC learned from Albany Police Chief Laurie Pritchett's calm arrests.",
        "Birmingham was about to transition to a slightly more moderate mayor—so timing mattered.",
      ],
      explanation:
        "MLK Jr., Wyatt Tee Walker, and Fred Shuttlesworth understood that **Bull Connor's** predictable brutality on camera would dramatise the reality of Jim Crow to the entire nation and compel President Kennedy to intervene.",
    },
    {
      id: "us-civil-rights-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "montgomery-direct-action",
      marks: 4,
      question: "Using NOP (Nature, Origin, Purpose) and own knowledge, evaluate how useful Martin Luther King Jr.'s *Letter from Birmingham Jail* (April 1963) is to a historian studying why non-violent direct action was controversial.",
      hints: [
        "State Nature/Origin (an open letter written in prison by MLK Jr. to eight white Alabama clergy).",
        "Explain Purpose (defending direct action against 'wait' and persuading white moderates).",
        "Explain both its strengths (reveals split with white moderates and moral philosophy) and its limitation (one leader's perspective, not grassroots SNCC/segregationist voices).",
      ],
      modelAnswer:
        "Written in April 1963 from Birmingham jail as an open response to eight moderate white Alabama clergymen who called his marches 'untimely', the letter is an authentic primary source with a clear persuasive purpose: defending direct action against endless delay. It is highly useful because it reveals the hidden tension between activists and cautious white moderates—not just violent segregationists—and explains MLK's philosophy of peacefully breaking unjust laws. However, because its purpose is to win moderate sympathy and it reflects one SCLC leader's perspective, a historian must cross-reference it with student voices in SNCC, local Birmingham citizens, and white segregationist sources to see the full debate.",
      markScheme: [
        {
          point: "Identifies Nature and Origin accurately (open letter written from jail in April 1963 to eight white Alabama clergy).",
          keywords: ["clergy", "clergymen", "ministers", "april", "open", "alabama"],
        },
        {
          point: "Explains Purpose (persuading white moderates / justifying direct action against calls to 'wait').",
          keywords: ["persuade", "justify", "wait", "moderates", "untimely", "unjust laws"],
        },
        {
          point: "Explains strong historical utility using own knowledge (exposes friction with white moderates and core non-violent strategy).",
          keywords: ["tension", "philosophy", "morally", "direct action", "strategy", "delay"],
        },
        {
          point: "Identifies a thoughtful limitation / need to cross-reference with other viewpoints (SNCC, segregationists, ordinary residents).",
          keywords: ["one perspective", "cross-reference", "sncc", "segregationist", "limitation", "sympathy"],
        },
      ],
      commonError: "Dismissing the letter as 'biased so not useful'—a primary source's persuasive purpose is precisely *what* makes it valuable for studying arguments of the time.",
    },
    {
      id: "us-civil-rights-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "mlk-legislation-1964-1965",
      question: "Historian A emphasises President Lyndon B. Johnson's Senate bargaining for the 1964–65 laws; Historian B emphasises grassroots SNCC and Selma marchers. Why do historians disagree so sharply on this question?",
      options: [
        "Because no written records of the 1964 Senate debates survived",
        "Because one focuses purely on Northern riots rather than laws",
        "Because they weigh top-down political power vs bottom-up pressure",
        "Because Historian B denies that Lyndon B. Johnson was president",
      ],
      answerIndex: 2,
      hints: [
        "Think about Year 9 historical interpretations: 'top-down' (presidents/Congress) versus 'bottom-up' (ordinary activists).",
        "Both historians use real facts—they disagree on *emphasis* and relative importance.",
      ],
      explanation:
        "Historians legitimately disagree over causation depending on whether they focus on **top-down political leadership** (LBJ breaking the Senate filibuster) or **bottom-up grassroots activism** (Selma, Birmingham, Freedom Summer creating the irresistible crisis).",
    },
    {
      id: "us-civil-rights-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mlk-legislation-1964-1965",
      question: "Between *Brown v. Board* (1954) and the *Fair Housing Act* (1968), how many years did this core legislative phase of the Civil Rights Movement span?",
      answer: { type: "number", value: 14, display: "14 years" },
      hints: [
        "Subtract 1954 from 1968.",
        "This 1954–68 span is the classic Year 9 syllabus window for the US Civil Rights Movement.",
      ],
      solution: ["1968 − 1954 = **14 years**, witnessing *Brown*, Montgomery, Little Rock, sit-ins, Freedom Rides, Birmingham, March on Washington, 1964 Act, Selma, 1965 Act, Black Power, and the 1968 Fair Housing Act."],
    },
    {
      id: "us-civil-rights-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "malcolm-x-black-power",
      question: "Why did President Johnson's escalation of the Vietnam War (1965–68) indirectly weaken the momentum of the Civil Rights Movement?",
      options: [
        "It forced Congress to repeal the 1965 Voting Rights Act in 1967",
        "It caused Black soldiers to boycott all Southern voter drives",
        "It persuaded Northern states to introduce Jim Crow school laws",
        "It drained funds from anti-poverty programmes and split MLK and LBJ",
      ],
      answerIndex: 3,
      hints: [
        "Remember LBJ's 'Great Society' anti-poverty budget competing against billions spent in Vietnam.",
        "Think about what happened to the alliance between LBJ and MLK after King spoke out against Vietnam in April 1967.",
      ],
      explanation:
        "Billions spent fighting in Vietnam starved LBJ's Great Society anti-poverty programmes, while MLK Jr.'s moral condemnation of the war (April 1967) alienated LBJ and divided moderate civil rights allies.",
    },
    {
      id: "us-civil-rights-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "malcolm-x-black-power",
      marks: 4,
      question: "Compare how and why protest succeeded in **Montgomery (1955–56)** and **Selma (1965)**, explaining what this reveals about why protest movements work.",
      hints: [
        "Explain Montgomery's core mechanism (economic boycott + community discipline + federal court ruling).",
        "Explain Selma's core mechanism (televised police violence on Bloody Sunday + urgent White House/Congressional legislation).",
        "Draw a general historical conclusion about the ingredients that make protest movements work.",
      ],
      modelAnswer:
        "In Montgomery (1955–56), success came from sustained community discipline and economic leverage—75% of bus riders walked or carpooled for 381 days—paired with an NAACP legal victory in Browder v. Gayle. In Selma (1965), economic boycotts could not force white registrars to register voters; instead, televised brutality on the Edmund Pettus Bridge ('Bloody Sunday') horrified the nation and enabled President Johnson to drive the Voting Rights Act through Congress. Together, both campaigns reveal that protest movements succeed best when they combine clear goals, disciplined local organisation, and tailored leverage (economic, legal, or media-political) matched to their opponent's weak spot.",
      markScheme: [
        {
          point: "Explains Montgomery's mechanism accurately (economic boycott / carpools / 381 days + federal court Browder v. Gayle).",
          keywords: ["economic", "75%", "381", "carpool", "browder", "court"],
        },
        {
          point: "Explains Selma's mechanism accurately (Bloody Sunday / Edmund Pettus Bridge televised violence prompting LBJ and Voting Rights Act).",
          keywords: ["bloody sunday", "bridge", "televised", "television", "voting rights act", "johnson"],
        },
        {
          point: "Explicitly contrasts *why* each tactic fit its specific target (private bus company vs state electoral system).",
          keywords: ["registrars", "instead", "contrast", "different", "target", "weak"],
        },
        {
          point: "Synthesises a broader principle about why protest movements succeed (clear goals, discipline, and matched leverage).",
          keywords: ["clear goals", "discipline", "leverage", "combine", "organisation", "together"],
        },
      ],
      commonError: "Describing Montgomery and Selma separately without comparing *why* different levers worked against different targets.",
    },
  ],
};
