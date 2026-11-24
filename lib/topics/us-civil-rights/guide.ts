import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "us-civil-rights",
  title: "The US Civil Rights Movement",
  strand: "Protest & Conflict",
  icon: "✊",
  summary: "How court victories, boycotts, television, and Black Power challenged Jim Crow segregation and transformed American democracy (1954–68).",
  intro:
    "Nearly a century after slavery ended in 1865, Black Americans in the US South were still legally segregated in schools, buses, and restaurants, and systematically blocked from voting. Between 1954 and 1968, ordinary students, seamstresses, lawyers, and ministers forced the world's most powerful democracy to confront its own contradictions. As a Year 9 historian, your job is not just to memorise dates—it is to investigate **how and why protest methods worked**, how courts, grassroots action, media, and presidents interacted, and where legal victories still fell short of full equality.",
  guide: [
    {
      id: "jim-crow-brown-v-board",
      heading: "Jim Crow Segregation & Legal Challenges",
      discovery: {
        problem:
          "Imagine a 1950 Southern state claiming its segregated Black and white high schools are 'equal', even though the state spends four times more per white pupil and refuses to buy science labs for the Black school. If you are an NAACP lawyer, would you argue for a slightly bigger budget for the Black school—or attack the idea of separation itself?",
        idea:
          "The NAACP realised fighting school-by-school for equal funding would take centuries and leave racial inferiority intact. By proving in **Brown v. Board of Education (1954)** that segregation itself caused psychological harm and violated the 14th Amendment, Thurgood Marshall struck down the legal foundation of Jim Crow—yet a Supreme Court ruling alone could not force racist governors to obey without federal backing, as Little Rock (1957) proved.",
      },
      body:
        "After Reconstruction collapsed in the late 1870s, Southern states passed **Jim Crow laws** enforcing strict racial segregation in every sphere of public life—from classrooms and hospitals to water fountains and cemeteries. In **Plessy v. Ferguson (1896)**, the US Supreme Court gave segregation federal constitutional blessing under the doctrine of **'separate but equal'**. In practice, facilities for Black citizens were consistently underfunded and inferior.\n\n" +
        "Segregation was protected by political exclusion and terror:\n" +
        "- **Disenfranchisement**: Southern states bypassed the 15th Amendment (which guaranteed Black men the vote) using **poll taxes**, impossibly rigged **literacy tests**, and 'grandfather clauses'. By 1954, fewer than 10% of eligible Black adults were registered to vote in Deep South states such as Mississippi and Alabama.\n" +
        "- **Violence and intimidation**: The **Ku Klux Klan (KKK)** and White Citizens' Councils used lynchings, bombings, and economic reprisals (firing Black workers who tried to register) while all-white juries routinely acquitted perpetrators—shockingly exposed in the 1955 murder of 14-year-old **Emmett Till** in Mississippi.\n\n" +
        "The **NAACP** (National Association for the Advancement of Colored People), led in court by chief counsel **Thurgood Marshall**, mounted a patient constitutional assault on Jim Crow:\n\n" +
        "| Landmark Event | Date | What Happened | Significance & Limit |\n" +
        "|---|---|---|---|\n" +
        "| **Plessy v. Ferguson** | 1896 | Supreme Court upheld segregated railway cars as 'separate but equal'. | Legalised Jim Crow segregation across the South for 58 years. |\n" +
        "| **Brown v. Board of Education** | May 1954 | Unanimous 9–0 Supreme Court ruling declared segregated public schools 'inherently unequal'. | Overturned *Plessy* in education; inspired hope, but *Brown II* (1955) set no firm deadline ('with all deliberate speed'). |\n" +
        "| **Little Rock Nine** | Sept 1957 | Nine Black teenagers enrolled at Central High School, Arkansas; Governor Orval Faubus deployed National Guard troops to block them. | President Dwight D. Eisenhower sent **1,000 soldiers of the 101st Airborne Division** to escort them, proving federal law outranked state governors—though Faubus closed all Little Rock high schools the next year. |\n\n" +
        "The **Little Rock crisis** became a crucial lesson for the movement. Photographs of 15-year-old **Elizabeth Eckford** walking calmly past a screaming white mob horrified both northern Americans and Cold War allies abroad. Yet by 1964—ten full years after *Brown*—fewer than 2% of Black children in the Deep South attended integrated schools. Court rulings created the legal weapon, but grassroots protest would be needed to make the law real.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escalation ladder from Plessy v. Ferguson 1896 to Brown v. Board 1954 and federal troops at Little Rock 1957"><rect width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">From Legalised Segregation to Federal Enforcement (1896–1957)</text><rect x="20" y="48" width="155" height="142" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="2"/><text x="97" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">1896: Plessy v. Ferguson</text><text x="97" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">"Separate but equal"</text><text x="97" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Jim Crow laws legalised</text><text x="97" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Poll taxes &amp; literacy tests</text><text x="97" y="146" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">block Black voting</text><text x="97" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">State Law Dominates</text><path d="M179 118 L197 118" stroke="var(--brand)" stroke-width="2.5"/><polygon points="196,113 205,118 196,123" fill="var(--brand)"/><rect x="207" y="48" width="155" height="142" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/><text x="284" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1954: Brown v. Board</text><text x="284" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">NAACP &amp; Thurgood Marshall</text><text x="284" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">9–0 Supreme Court ruling</text><text x="284" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Segregated schools are</text><text x="284" y="146" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">"inherently unequal"</text><text x="284" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Legal Victory, No Deadline</text><path d="M366 118 L384 118" stroke="var(--good)" stroke-width="2.5"/><polygon points="383,113 392,118 383,123" fill="var(--good)"/><rect x="394" y="48" width="146" height="142" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="2"/><text x="467" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">1957: Little Rock Nine</text><text x="467" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">Gov. Faubus blocks entry</text><text x="467" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Eisenhower deploys 101st</text><text x="467" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Airborne paratroopers</text><text x="467" y="146" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Global TV watches crisis</text><text x="467" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Federal Power Tested</text><rect x="20" y="204" width="520" height="32" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="280" y="224" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">Key Limit: By 1964, under 2% of Deep South Black pupils were in integrated schools — courts alone were not enough.</text></svg>',
      diagramCaption:
        "How NAACP legal challenges broke 'separate but equal' in law (1954) and forced federal troops to intervene in Arkansas (1957), while revealing the gap between court rulings and reality on the ground.",
      workedExamples: [
        {
          title: "Evaluating Significance: Brown v. Board of Education (1954)",
          problem:
            "Explain why historians argue **Brown v. Board of Education (1954)** was a turning point for the Civil Rights Movement, even though most Southern schools stayed segregated for another decade.",
          steps: [
            "**Step 1 — State the constitutional breakthrough**: In a unanimous 9–0 verdict, Chief Justice Earl Warren ruled that segregated schools were 'inherently unequal', overturning the 1896 *Plessy v. Ferguson* precedent in education.",
            "**Step 2 — Show the psychological and political momentum**: It proved the NAACP's legal strategy could defeat Jim Crow in the nation's highest court, inspiring activists to challenge segregation on buses and lunch counters.",
            "**Step 3 — Balance with the limitation**: Because *Brown II* (1955) set no firm timetable ('all deliberate speed'), Southern states launched 'Massive Resistance' and KKK violence surged—meaning federal intervention (as at Little Rock in 1957) and mass protest were still essential.",
          ],
          answer:
            "*Brown* destroyed the legal legitimacy of 'separate but equal' and energised activists, even though Southern resistance delayed practical desegregation until the 1960s.",
          yourTurn: {
            question:
              "Which 1896 US Supreme Court ruling established the 'separate but equal' doctrine that *Brown v. Board of Education* overturned in schools?",
            answer: {
              type: "text",
              accept: ["Plessy v. Ferguson", "Plessy v Ferguson", "Plessy versus Ferguson"],
              display: "Plessy v. Ferguson",
            },
            solution:
              "**Plessy v. Ferguson (1896)** upheld state segregation laws as constitutional under the phrase 'separate but equal', providing legal cover for Jim Crow until *Brown v. Board* (1954).",
          },
        },
        {
          title: "Cold War Context at Little Rock (1957)",
          problem:
            "Why did President Dwight D. Eisenhower—who had privately been cautious about rushing desegregation—deploy 1,000 federal paratroopers to Little Rock Central High School in September 1957?",
          steps: [
            "**Step 1 — Constitutional authority**: Governor Orval Faubus had used state National Guard troops to defy a federal court order; allowing a governor to overrule the Supreme Court threatened the US federal system.",
            "**Step 2 — Cold War image**: Television images of mobs abusing Black schoolchildren in Little Rock were broadcast globally, handing Soviet propaganda ammunition to portray American democracy as hypocritical.",
            "**Step 3 — Conclude**: Eisenhower acted primarily to uphold constitutional law and protect US international credibility—showing that federal support often depended on national and global pressure.",
          ],
          answer:
            "Eisenhower intervened to uphold federal constitutional authority over Governor Faubus and to halt severe Cold War propaganda damage abroad.",
        },
      ],
      keyPoints: [
        "**Jim Crow laws** enforced racial segregation in the US South, backed by *Plessy v. Ferguson* (1896), voter disenfranchisement (poll taxes, literacy tests), and KKK terror.",
        "**Brown v. Board of Education (1954)**, argued by NAACP lawyer Thurgood Marshall, unanimously ruled segregated schools 'inherently unequal'.",
        "**Massive Resistance** followed: Southern states stalled integration using *Brown II*'s vague phrase 'with all deliberate speed'.",
        "**Little Rock Nine (1957)** proved federal troops (101st Airborne Division) could enforce court orders when state governors resisted, while revealing how deeply entrenched segregation remained.",
      ],
      whyItWorks:
        "In the American federal system, the Supreme Court can declare state laws unconstitutional, but it has no army or police force of its own. Legal victories therefore worked as a **lever**: they put segregationist governors on the wrong side of the US Constitution, forcing presidents to choose between enforcing federal law or looking weak before the world.",
      strategies: [
        "**Distinguish de jure vs de facto change**: Always check whether a court ruling changed *the law on paper* or *daily life on the ground*.",
        "**Connect domestic protest to Cold War context**: Mention how Soviet criticism of US racism pressured Presidents Eisenhower, Kennedy, and Johnson to act.",
      ],
      thinkDeeper:
        "In 1958, Governor Orval Faubus simply closed all public high schools in Little Rock for an entire year rather than integrate them. What does this 'Lost Year' reveal about the limits of relying only on courtrooms and troops to change hearts and minds?",
    },
    {
      id: "montgomery-direct-action",
      heading: "Montgomery, Sit-Ins & Non-Violent Direct Action",
      discovery: {
        problem:
          "If Black citizens make up 75% of a city's bus passengers—and are forced to give up their seats to white riders—how can they force the city to desegregate without throwing a single punch or waiting ten years for politicians to care?",
        idea:
          "Withdraw their money! During the **381-day Montgomery Bus Boycott (1955–56)**, Black residents walked and ran disciplined carpools until the bus company lost tens of thousands of dollars—combining **economic pressure** with an NAACP court challenge (*Browder v. Gayle*) to desegregate the buses.",
      },
      body:
        "While NAACP lawyers fought in courtrooms, grassroots activists discovered an even more explosive strategy: **non-violent direct action**. Inspired partly by **Mahatma Gandhi's** *satyagraha* in India, Black churches, women's networks, and university students confronted segregation openly, peacefully, and in full view of the press.\n\n" +
        "Four landmark campaigns proved how economic pressure and media visibility worked together:\n\n" +
        "1. **Montgomery Bus Boycott (Dec 1955 – Dec 1956, 381 days)**: On 1 December 1955, NAACP secretary **Rosa Parks** was arrested for refusing to surrender her seat on a Montgomery bus (building on earlier defiance by 15-year-old **Claudette Colvin** and leaflet organisation by Jo Ann Robinson's **Women's Political Council**). The **Montgomery Improvement Association (MIA)**, led by 26-year-old minister **Dr. Martin Luther King Jr.**, sustained a total boycott for 381 days via an extraordinary 300-car volunteer pool. With ~75% of riders gone, the bus company neared bankruptcy, and in November 1956 the Supreme Court upheld *Browder v. Gayle*, outlawing Alabama's bus segregation.\n" +
        "2. **Greensboro Sit-Ins (Feb 1960)**: Four Black freshmen from North Carolina A&T sat politely at a whites-only Woolworth's lunch counter in Greensboro and refused to leave when denied service. Within weeks, **sit-ins** spread to over 55 cities across 13 states. Facing lost sales and bad publicity, Woolworth's desegregated in July 1960. The energy birthed **SNCC** (Student Nonviolent Coordinating Committee), guided by veteran organiser **Ella Baker**.\n" +
        "3. **Freedom Rides (May 1961)**: Organised by **CORE** (Congress of Racial Equality) and sustained by SNCC, integrated groups of Black and white activists rode interstate buses through the Deep South to test whether federal desegregation rulings were enforced. In Anniston, Alabama, a white mob firebombed a bus; riders were savagely beaten in Birmingham and Montgomery. Shocked by the violence, Attorney General **Robert F. Kennedy** sent federal marshals and pushed the Interstate Commerce Commission (ICC) to enforce strict interstate bus desegregation from November 1961.\n" +
        "4. **Birmingham Campaign (April–May 1963)**: Targeting America's most fiercely segregated city ('Bombingham'), SCLC launched marches and boycotts—culminating in the **Children's Crusade**, where thousands of school pupils marched peacefully. Police Commissioner **Eugene 'Bull' Connor** unleashed high-pressure **fire hoses and police dogs** on teenagers. Broadcast into tens of millions of living rooms on **network television**, the footage triggered national outrage and convinced President **John F. Kennedy** to introduce a sweeping Civil Rights Bill in June 1963.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Engine of Non-Violent Direct Action showing Peaceful Disruption, Economic Loss, Brutal Reaction on TV, and Federal Intervention"><rect width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">How Non-Violent Direct Action Forced Change (1955–1963)</text><rect x="22" y="48" width="120" height="122" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><text x="82" y="69" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">1. Peaceful Action</text><text x="82" y="90" text-anchor="middle" font-size="10" fill="var(--ink)">Boycotts, sit-ins,</text><text x="82" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">Freedom Rides,</text><text x="82" y="122" text-anchor="middle" font-size="10" fill="var(--ink)">Birmingham marches</text><text x="82" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Strict discipline</text><path d="M145 109 L160 109" stroke="var(--brand)" stroke-width="2.2"/><polygon points="159,104 167,109 159,114" fill="var(--brand)"/><rect x="169" y="48" width="120" height="122" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.8"/><text x="229" y="69" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">2. Economic Hit</text><text x="229" y="90" text-anchor="middle" font-size="10" fill="var(--ink)">75% bus riders stop</text><text x="229" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">Shop &amp; lunch-counter</text><text x="229" y="122" text-anchor="middle" font-size="10" fill="var(--ink)">profits plunge</text><text x="229" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-2)">Business pressure</text><path d="M292 109 L307 109" stroke="var(--bad)" stroke-width="2.2"/><polygon points="306,104 314,109 306,114" fill="var(--bad)"/><rect x="316" y="48" width="112" height="122" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8"/><text x="372" y="69" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">3. TV Exposure</text><text x="372" y="90" text-anchor="middle" font-size="10" fill="var(--ink)">Fire hoses &amp; dogs</text><text x="372" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">Firebombed buses</text><text x="372" y="122" text-anchor="middle" font-size="10" fill="var(--ink)">seen nationwide</text><text x="372" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">Moral shock</text><path d="M431 109 L446 109" stroke="var(--good)" stroke-width="2.2"/><polygon points="445,104 453,109 445,114" fill="var(--good)"/><rect x="455" y="48" width="88" height="122" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/><text x="499" y="69" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">4. Result</text><text x="499" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Court &amp; ICC</text><text x="499" y="108" text-anchor="middle" font-size="10" fill="var(--ink)">desegregation</text><text x="499" y="124" text-anchor="middle" font-size="10" fill="var(--ink)">JFK proposes</text><text x="499" y="140" text-anchor="middle" font-size="10" fill="var(--ink)">1964 Bill</text><rect x="22" y="186" width="521" height="48" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="282" y="206" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Why Discipline Mattered: When activists stayed calm under attack, TV viewers saw</text><text x="282" y="223" text-anchor="middle" font-size="11" fill="var(--ink-2)">a crystal-clear moral contrast between peaceful citizens and violent segregationists.</text></svg>',
      diagramCaption:
        "The four-stage mechanism explaining why non-violent direct action defeated Jim Crow where quiet lobbying failed.",
      workedExamples: [
        {
          title: "Comparing Boycotts and Sit-Ins",
          problem:
            "How did the **Montgomery Bus Boycott (1955–56)** and the **Greensboro Sit-Ins (1960)** both use **economic leverage**, yet differ in leadership and scale?",
          steps: [
            "**Step 1 — Shared economic weapon**: Montgomery starved a bus company of ~75% of its fares for 381 days; Greensboro sit-ins occupied lunch-counter seats so white customers stayed away, slashing Woolworth's sales.",
            "**Step 2 — Contrast leadership & grassroots energy**: Montgomery was coordinated through established Black churches and the MIA under Martin Luther King Jr. (with crucial behind-the-scenes work by the Women's Political Council), whereas Greensboro was sparked spontaneously by four college freshmen and spread rapidly via student networks (SNCC).",
            "**Step 3 — Contrast geographic scale**: Montgomery targeted one city's transit system (paired with a federal lawsuit), while sit-ins erupted across 55+ cities in 13 states within months.",
          ],
          answer:
            "Both campaigns hit white businesses financially, but Montgomery combined church-led community stamina with a court case, while Greensboro triggered a rapid, student-led regional wave.",
          yourTurn: {
            question: "For how many days did the Montgomery Bus Boycott last from December 1955 to December 1956?",
            answer: {
              type: "number",
              value: 381,
              display: "381 days",
            },
            solution:
              "The Montgomery Bus Boycott lasted **381 days** (5 December 1955 to 20 December 1956), ending only when the Supreme Court ruling in *Browder v. Gayle* took effect.",
          },
        },
        {
          title: "Why Birmingham (1963) Worked Where Albany (1961–62) Stalled",
          problem:
            "In Albany, Georgia (1961–62), Police Chief Laurie Pritchett made polite mass arrests without TV-friendly violence, and the protest stalled. Why did SCLC achieve a breakthrough in **Birmingham (1963)** instead?",
          steps: [
            "**Step 1 — Contrast police tactics**: Unlike Pritchett in Albany, Birmingham's Eugene 'Bull' Connor lost his temper on camera, ordering fire hoses and attack dogs against peaceful young marchers.",
            "**Step 2 — Explain the media multiplier**: By 1963, over 90% of US homes owned a television. Viewers watched the brutality on evening news, creating unstoppable moral pressure on President Kennedy.",
            "**Step 3 — Link to federal action**: Faced with domestic outrage and Cold War embarrassment, JFK went on national television in June 1963 to call civil rights a 'moral issue' and propose the Civil Rights Bill.",
          ],
          answer:
            "Birmingham succeeded because Bull Connor's televised brutality against disciplined non-violent marchers forced Northern public opinion and President Kennedy to back federal legislation.",
        },
      ],
      keyPoints: [
        "**Rosa Parks** was not simply a 'tired seamstress'—she was an experienced NAACP secretary whose arrest triggered a planned boycott led by the Women's Political Council and MIA.",
        "The **381-day Montgomery Bus Boycott** proved that disciplined community organisation, economic pressure, and court action (*Browder v. Gayle*) could defeat segregation.",
        "**Greensboro Sit-Ins (1960)** and **Freedom Rides (1961)** brought youth activists (**SNCC** and **CORE**) to the forefront and forced federal intervention on interstate transport.",
        "**Birmingham (1963)** demonstrated the decisive power of **television**, turning Bull Connor's fire hoses and police dogs into a catalyst for federal civil rights law.",
      ],
      whyItWorks:
        "Non-violent direct action worked like a **moral spotlight**. As MLK Jr. explained in his *Letter from Birmingham Jail* (April 1963), protesters did not create tension—they exposed the hidden injustice already built into Jim Crow so that white moderates and federal politicians could no longer ignore it.",
      strategies: [
        "**Build multi-factor chains**: Never write 'television ended segregation'. Write: *disciplined non-violence → violent segregationist overreaction → televised shock → presidential legislation*.",
        "**Credit grassroots women and youth**: Top-band Year 9 answers name Rosa Parks, Jo Ann Robinson, Ella Baker, SNCC students, and Freedom Riders alongside Martin Luther King Jr.",
      ],
      thinkDeeper:
        "SCLC leaders argued fiercely over whether to allow schoolchildren to march in Birmingham's 'Children's Crusade' in May 1963, knowing they risked arrest and police violence. Was involving children morally justified as a protest tactic, or a step too far? Weigh both viewpoints with historical evidence.",
    },
    {
      id: "mlk-legislation-1964-1965",
      heading: "Martin Luther King Jr., Selma & Federal Laws (1964–65)",
      discovery: {
        problem:
          "After the **Civil Rights Act of 1964** banned 'Whites Only' signs in restaurants and hotels, why did civil rights leaders immediately risk beatings on a bridge in **Selma, Alabama (1965)**? What crucial democratic power was still missing?",
        idea:
          "Desegregating lunch counters meant little if Black citizens still could not **vote** out racist sheriffs, judges, and governors! Because the 1964 Act left Southern literacy tests intact, the Selma campaign forced Congress to pass the **Voting Rights Act of 1965**.",
      },
      body:
        "Between August 1963 and August 1965, grassroots protests and presidential politics aligned to produce the two most transformative laws in modern American history.\n\n" +
        "**The March on Washington (28 August 1963)**\n" +
        "Masterminded by veteran organisers **A. Philip Randolph** and **Bayard Rustin**, roughly **250,000 Black and white Americans** rallied peacefully at the Lincoln Memorial for 'Jobs and Freedom'. Dr. Martin Luther King Jr.'s **'I Have a Dream'** speech framed civil rights as the fulfilment of the American Declaration of Independence, winning huge sympathy—though Southern Dixiecrats in Congress still tried to block JFK's bill.\n\n" +
        "**President Lyndon B. Johnson & the Civil Rights Act (2 July 1964)**\n" +
        "After JFK's assassination in November 1963, Texan President **Lyndon B. Johnson (LBJ)** used both the nation's grief and his unmatched mastery of Senate bargaining to break a 54-day Southern filibuster. The **Civil Rights Act of 1964**:\n" +
        "- **Outlawed segregation** in all public accommodations (hotels, restaurants, cinemas, parks).\n" +
        "- **Banned employment discrimination** on the basis of race, colour, religion, sex, or national origin (creating the EEOC).\n" +
        "- **Empowered the federal government** to cut funding from segregated schools and sue non-compliant districts.\n\n" +
        "**Selma & the Voting Rights Act (6 August 1965)**\n" +
        "Even after 1964, fewer than 2% of Black adults in Dallas County (Selma), Alabama, were allowed to register to vote. During SNCC's **Freedom Summer (1964)** in Mississippi, three voter-registration workers (**Chaney, Goodman, and Schwerner**) had been murdered by the KKK. In March 1965, SCLC and SNCC organised a 54-mile march from Selma to Montgomery. On **'Bloody Sunday' (7 March 1965)**, Alabama state troopers clubbed and tear-gassed ~600 peaceful marchers (including young SNCC chairman **John Lewis**) on the **Edmund Pettus Bridge**. Television networks interrupted Sunday evening programming to show the bloodshed. Within eight days, LBJ addressed Congress using the movement's own anthem—**'We shall overcome'**—and on **6 August 1965** signed the **Voting Rights Act**:\n\n" +
        "| Legislation | Date | Core Provisions | Immediate Measurable Impact |\n" +
        "|---|---|---|---|\n" +
        "| **Civil Rights Act** | 2 July 1964 | Ended legal Jim Crow segregation in public spaces & jobs; sped up school integration. | Dismantled 'Whites Only' signs across the South; legally ended *de jure* segregation. |\n" +
        "| **Voting Rights Act** | 6 Aug 1965 | Outlawed literacy tests; sent federal registrars & required federal approval ('preclearance') for voting changes. | Over **250,000** Black voters registered by end of 1965; Mississippi Black registration jumped from **~6.7% (1964) to ~59.8% (1967)**. |",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing Black voter registration in Mississippi and Alabama before and after the 1965 Voting Rights Act"><rect width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Impact of the 1965 Voting Rights Act on Black Voter Registration</text><line x1="70" y1="196" x2="520" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/><line x1="70" y1="54" x2="70" y2="196" stroke="var(--ink-2)" stroke-width="1.5"/><text x="62" y="199" text-anchor="end" font-size="10" fill="var(--ink-2)">0%</text><text x="62" y="152" text-anchor="end" font-size="10" fill="var(--ink-2)">25%</text><text x="62" y="105" text-anchor="end" font-size="10" fill="var(--ink-2)">50%</text><text x="62" y="58" text-anchor="end" font-size="10" fill="var(--ink-2)">75%</text><line x1="70" y1="149" x2="520" y2="149" stroke="var(--line)" stroke-dasharray="4 4"/><line x1="70" y1="102" x2="520" y2="102" stroke="var(--line)" stroke-dasharray="4 4"/><line x1="70" y1="55" x2="520" y2="55" stroke="var(--line)" stroke-dasharray="4 4"/><rect x="110" y="183" width="44" height="13" rx="3" fill="var(--bad)"/><text x="132" y="178" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">6.7%</text><rect x="162" y="83" width="44" height="113" rx="3" fill="var(--good)"/><text x="184" y="77" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">59.8%</text><text x="158" y="214" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Mississippi</text><rect x="260" y="160" width="44" height="36" rx="3" fill="var(--bad)"/><text x="282" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">19.3%</text><rect x="312" y="99" width="44" height="97" rx="3" fill="var(--good)"/><text x="334" y="93" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">51.6%</text><text x="308" y="214" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Alabama</text><rect x="410" y="144" width="44" height="52" rx="3" fill="var(--bad)"/><text x="432" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">27.4%</text><rect x="462" y="97" width="44" height="99" rx="3" fill="var(--good)"/><text x="484" y="91" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">52.6%</text><text x="458" y="214" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Georgia</text><rect x="148" y="226" width="12" height="10" rx="2" fill="var(--bad)"/><text x="165" y="235" font-size="10.5" fill="var(--ink-2)">Before VRA (1964/65)</text><rect x="302" y="226" width="12" height="10" rx="2" fill="var(--good)"/><text x="319" y="235" font-size="10.5" fill="var(--ink-2)">After VRA (1967)</text></svg>',
      diagramCaption:
        "Black voter registration surged within two years of the Voting Rights Act (1965), showing why federal enforcement—not just paper promises—made the difference.",
      workedExamples: [
        {
          title: "Weighing Roles: MLK Jr. vs President Lyndon B. Johnson",
          problem:
            "'President Lyndon B. Johnson was more important than Martin Luther King Jr. in securing the 1964–65 civil rights laws.' How would you write a balanced Year 9 judgement on this claim?",
          steps: [
            "**Step 1 — Evidence for LBJ's decisive role**: Only a president with deep Congressional skill could overcome the 54-day Southern filibuster to pass the 1964 Civil Rights Act and drive the 1965 Voting Rights Act through Congress.",
            "**Step 2 — Evidence for MLK Jr. and grassroots activists**: Without Birmingham (1963), the March on Washington, Freedom Summer (1964), and Bloody Sunday at Selma (1965), LBJ would have lacked the urgent public mandate needed to defeat Southern opposition—as LBJ himself allegedly told King, 'Make me do it.'",
            "**Step 3 — Reach a nuanced synthesis**: Neither could have succeeded alone. Grassroots protest and MLK's moral leadership created the unstoppable political pressure; LBJ converted that pressure into enforceable federal statutes.",
          ],
          answer:
            "LBJ's legislative skill turned demands into federal law, but MLK Jr. and grassroots activists at Birmingham and Selma created the moral crisis that made those laws politically possible.",
          yourTurn: {
            question:
              "Which landmark 1965 US federal law outlawed literacy tests and deployed federal registrars across the South?",
            answer: {
              type: "text",
              accept: ["Voting Rights Act", "Voting Rights Act of 1965", "1965 Voting Rights Act"],
              display: "Voting Rights Act (1965)",
            },
            solution:
              "The **Voting Rights Act (6 August 1965)** banned discriminatory literacy tests and authorised federal officials to supervise voter registration.",
          },
        },
        {
          title: "Distinguishing the 1964 Act from the 1965 Act",
          problem:
            "A student writes: 'The Civil Rights Act of 1964 gave Black Americans the vote.' Explain why this is inaccurate and correct it.",
          steps: [
            "**Step 1 — Identify the error**: The 1964 Civil Rights Act focused on desegregating **public accommodations** (restaurants, hotels, schools) and banning **employment discrimination**—it did NOT outlaw Southern literacy tests.",
            "**Step 2 — Supply the accurate law**: Voting rights were secured a year later by the **Voting Rights Act of 1965** following the Selma marches.",
            "**Step 3 — Explain why the distinction matters**: Knowing what 1964 left unfinished explains *why* protesters had to march across the Edmund Pettus Bridge in March 1965.",
          ],
          answer:
            "The 1964 Civil Rights Act ended legal segregation in public spaces and jobs; it was the 1965 Voting Rights Act that abolished literacy tests and secured ballot access.",
        },
      ],
      keyPoints: [
        "The **1963 March on Washington** (~250,000 people; MLK's *'I Have a Dream'*) built broad national support for federal legislation.",
        "The **Civil Rights Act (1964)** ended *de jure* Jim Crow segregation in public facilities and banned workplace discrimination.",
        "**'Bloody Sunday' at Selma (7 March 1965)** exposed violent suppression of Black voting rights on national TV, accelerating Congressional action.",
        "The **Voting Rights Act (1965)** abolished literacy tests and triggered a dramatic surge in Black voter registration across the Deep South.",
      ],
      whyItWorks:
        "Federal legislation only passed when **bottom-up grassroots disruption** (Birmingham, Selma, Freedom Summer) met **top-down executive determination** (LBJ's mastery of Congress). Protest supplied the moral urgency; presidential politics turned urgency into binding national law.",
      strategies: [
        "**Never blur 1964 and 1965**: Remember **64 = Public Space & Jobs**, **65 = Ballot Box**.",
        "**Use hard numbers to prove impact**: Citing Mississippi's jump from **6.7% to 59.8%** turns a vague claim ('more people voted') into top-band evidence.",
      ],
      thinkDeeper:
        "Even after winning the 1964 and 1965 Acts, LBJ warned privately that the Democratic Party had 'lost the South for a generation.' Why did winning legal rights in the South soon expose a very different—and harder—struggle in America's Northern cities?",
    },
    {
      id: "malcolm-x-black-power",
      heading: "Malcolm X, Black Power & Assessing Progress",
      discovery: {
        problem:
          "Just **five days** after President Johnson signed the 1965 Voting Rights Act, a devastating six-day uprising erupted in **Watts, Los Angeles**—a city that had NO Jim Crow laws and where Black residents could already vote. Why were young Black Americans outside the South still furious?",
        idea:
          "Legal rights in the South did not fix **de facto segregation** in the North and West: chronic poverty, twice-higher unemployment, segregated slums, poor schools, and routine police brutality. That frustration fuelled **Malcolm X**, **Black Power**, and the **Black Panther Party**.",
      },
      body:
        "By 1965–66, a sharp debate split the Civil Rights Movement. While MLK Jr. preached integration and Christian non-violence, millions of Black Americans in Northern and Western ghettos felt federal laws had done nothing to put food on their tables or stop police violence.\n\n" +
        "**Malcolm X (1925–1965)**\n" +
        "As the electrifying spokesperson of the **Nation of Islam (NOI)**, Malcolm X rejected integration as begging for acceptance from an oppressive white society. Instead, he championed **Black pride**, economic self-reliance, and active **self-defence 'by any means necessary'**—mocking the 1963 March on Washington as the 'Farce on Washington'. Crucially, historians note his **evolution in 1964**: after making the Islamic pilgrimage (**Hajj**) to Mecca and seeing Muslims of all races worship as equals, he broke with the NOI, founded the Organisation of Afro-American Unity, and became open to multiracial alliances against racism before his assassination in **February 1965**.\n\n" +
        "**Stokely Carmichael & 'Black Power' (1966)**\n" +
        "Tired of seeing peaceful SNCC activists beaten and murdered, SNCC chairman **Stokely Carmichael** (later Kwame Ture) galvanised crowds in June 1966 with the rallying cry **'Black Power!'**. It meant building independent Black political control, economic institutions, and cultural dignity ('Black is Beautiful'), memorably symbolised by **Tommie Smith and John Carlos** raising gloved fists at the **1968 Mexico City Olympics**.\n\n" +
        "**The Black Panther Party (founded October 1966)**\n" +
        "Founded in Oakland, California by **Huey P. Newton** and **Bobby Seale**, the Black Panthers published a **Ten-Point Program** demanding jobs, decent housing, fair trials, and an end to police brutality. Alongside armed community patrols monitoring police (legal under California's open-carry laws at the time), the Panthers ran vital **'Survival Programs'**—most famously **Free Breakfast for Children** (feeding tens of thousands of pupils weekly) and free medical clinics. However, violent shootouts and relentless disruption by the FBI's secret **COINTELPRO** programme weakened the party by the early 1970s.\n\n" +
        "**Weighing Progress by 1968**\n" +
        "In his final years, MLK Jr. himself pivoted toward economic justice (**Poor People's Campaign**) and opposed the Vietnam War before his assassination in Memphis on **4 April 1968**. Days later, Congress passed the **Fair Housing Act (1968)**.\n\n" +
        "| Dimension | Major Achievements (1954–68) | Persistent Limits & Unfinished Business |\n" +
        "|---|---|---|\n" +
        "| **Legal & Political** | Jim Crow dismantled (1964); Black voting rights enforced (1965); Black elected officials rose sharply. | White backlash ('Southern Strategy'); resistance to school busing & housing integration. |\n" +
        "| **Economic & Social** | Growing Black middle class; cultural pride ('Black is Beautiful'); Fair Housing Act (1968). | Black poverty remained ~3× white rate; Kerner Commission (1968) warned of 'two societies, separate and unequal'. |",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison chart of Martin Luther King Jr. Non-Violent Integration versus Malcolm X and Black Power"><rect width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Two Visions of Freedom: Comparing Strategies (1955–1968)</text><rect x="20" y="42" width="250" height="190" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/><text x="145" y="64" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">MLK Jr. &amp; SCLC (Mainstream)</text><text x="34" y="88" font-size="10.5" fill="var(--ink)">• Goal: Integration &amp; federal civil rights</text><text x="34" y="108" font-size="10.5" fill="var(--ink)">• Method: Strict non-violent direct action</text><text x="34" y="128" font-size="10.5" fill="var(--ink)">• Allies: Interracial coalitions &amp; churches</text><text x="34" y="148" font-size="10.5" fill="var(--ink)">• Base: Primarily Jim Crow US South</text><text x="34" y="168" font-size="10.5" fill="var(--ink)">• Win: 1964 &amp; 1965 federal statutes</text><text x="34" y="192" font-size="10" font-weight="700" fill="var(--brand)">Shift by 1968: Tackled urban poverty</text><text x="34" y="208" font-size="10" fill="var(--ink-2)">(Poor People&apos;s Campaign &amp; anti-war)</text><rect x="290" y="42" width="250" height="190" rx="10" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/><text x="415" y="64" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Malcolm X &amp; Black Power</text><text x="304" y="88" font-size="10.5" fill="var(--ink)">• Goal: Self-determination &amp; Black pride</text><text x="304" y="108" font-size="10.5" fill="var(--ink)">• Method: Self-defence &amp; community aid</text><text x="304" y="128" font-size="10.5" fill="var(--ink)">• Allies: Black-led independence first</text><text x="304" y="148" font-size="10.5" fill="var(--ink)">• Base: Northern &amp; Western urban ghettos</text><text x="304" y="168" font-size="10.5" fill="var(--ink)">• Win: Cultural pride &amp; survival clinics</text><text x="304" y="192" font-size="10" font-weight="700" fill="var(--ink)">Limit: Scared white moderates &amp;</text><text x="304" y="208" font-size="10" fill="var(--ink-2)">faced intense FBI COINTELPRO targeting</text></svg>',
      diagramCaption:
        "Comparing MLK Jr.'s non-violent integration strategy with Malcolm X and Black Power—notice how both responded to different realities and even converged on economic justice by the late 1960s.",
      workedExamples: [
        {
          title: "Did Black Power Help or Harm the Civil Rights Movement?",
          problem:
            "Evaluate the view that **Black Power and the Black Panthers harmed the Civil Rights Movement** by alienating white supporters.",
          steps: [
            "**Step 1 — Argument that it harmed support**: Militant slogans, armed Panther patrols, and urban riots in Watts (1965) and Detroit (1967) alarmed moderate white voters, contributing to a 'white backlash' and Richard Nixon's 1968 'law and order' victory. SNCC also lost vital funding after expelling white members.",
            "**Step 2 — Argument that it achieved crucial gains**: Black Power addressed urgent urban poverty and police brutality that Southern legal reforms ignored; the Black Panthers' Free Breakfast programme and clinics gave practical community support; and Malcolm X's emphasis on pride transformed Black cultural identity worldwide.",
            "**Step 3 — Balanced judgement**: Rather than simply 'harming' the movement, Black Power exposed the limits of legal-only reform—and ironically made MLK's moderate demands look more acceptable to worried white politicians ('radical flank effect').",
          ],
          answer:
            "Black Power cost moderate white sympathy and drew FBI repression, yet it won lasting cultural pride, aided urban communities directly, and highlighted economic injustice.",
          yourTurn: {
            question:
              "Which California-founded organisation (1966) combined armed self-defence patrols with community 'Survival Programs' such as Free Breakfast for Children?",
            answer: {
              type: "text",
              accept: ["Black Panther Party", "Black Panthers", "The Black Panthers", "The Black Panther Party"],
              display: "Black Panther Party",
            },
            solution:
              "The **Black Panther Party** (founded in Oakland in October 1966 by Huey P. Newton and Bobby Seale) paired its Ten-Point Program and community policing patrols with social programmes like Free Breakfast for Children.",
          },
        },
        {
          title: "Interpreting the 1968 Kerner Commission",
          problem:
            "After riots hit Detroit and Newark in 1967, President Johnson's **Kerner Commission (1968)** concluded: *'Our nation is moving toward two societies, one black, one white—separate and unequal.'* What does this official source prove about the limits of Civil Rights progress by 1968?",
          steps: [
            "**Step 1 — Use NOP (Origin)**: This was a mainstream presidential commission appointed by LBJ—not a radical protest group—giving its criticism huge credibility.",
            "**Step 2 — Link quote to context**: Echoing *Plessy*'s phrase 'separate and equal' in reverse ('separate and unequal'), it admitted that despite the 1964 and 1965 Acts, white racism and chronic poverty still trapped millions of Black Americans in decaying urban ghettos.",
            "**Step 3 — Historical judgement**: Legal equality (*de jure*) had been largely won in the South, but economic and residential equality (*de facto*) remained far from complete.",
          ],
          answer:
            "Even a presidential inquiry admitted that legal laws of 1964–65 had failed to cure structural urban poverty, housing segregation, and police tensions.",
        },
      ],
      keyPoints: [
        "**Urban riots** (Watts 1965, Newark & Detroit 1967) revealed deep anger over *de facto* segregation, unemployment, and police brutality outside the South.",
        "**Malcolm X** championed Black pride, self-reliance, and self-defence ('by any means necessary'), later broadening toward multiracial cooperation after his 1964 Hajj to Mecca.",
        "**Stokely Carmichael** popularised **Black Power (1966)**; the **Black Panthers** combined a Ten-Point Program with Free Breakfast programmes while facing FBI **COINTELPRO** disruption.",
        "By **1968**, *de jure* segregation was abolished (1964, 1965, 1968 Fair Housing Act), yet profound economic and housing inequalities persisted.",
      ],
      whyItWorks:
        "Sociologists call the interaction between MLK Jr. and Malcolm X the **'radical flank effect'**: militant voices who rejected gradualism made white politicians far more anxious to negotiate with non-violent leaders before anger boiled over into wider unrest.",
      strategies: [
        "**Avoid cartoon stereotypes**: Never reduce Malcolm X to 'violent' vs MLK to 'peaceful'—Malcolm X advocated *self-defence*, not unprovoked attacks, and evolved significantly in 1964.",
        "**Split your conclusion into legal vs economic**: Top-band 'How successful was the movement?' essays weigh huge *legal/political* success against incomplete *economic/social* progress.",
      ],
      thinkDeeper:
        "If Dr. Martin Luther King Jr. had survived beyond April 1968, how much closer were his goals (the Poor People's Campaign) to Malcolm X's final vision than historians used to admit?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What doctrine did Plessy v. Ferguson (1896) establish?",
        back: "'Separate but equal'—legally permitting Southern Jim Crow segregation for 58 years.",
      },
      {
        front: "What did Brown v. Board of Education (1954) decide?",
        back: "Unanimous 9–0 US Supreme Court ruling that segregated public schools were 'inherently unequal', overturning Plessy in education.",
      },
      {
        front: "Who was the NAACP's chief lawyer in Brown v. Board?",
        back: "Thurgood Marshall (who later became the first Black US Supreme Court Justice in 1967).",
      },
      {
        front: "Why did President Eisenhower send the 101st Airborne Division to Little Rock in 1957?",
        back: "Governor Orval Faubus used state National Guard troops to block the Little Rock Nine from Central High School, defying federal court authority.",
      },
      {
        front: "How long did the Montgomery Bus Boycott (1955–56) last and what ended it?",
        back: "381 days; sustained economic pressure (75% of riders) combined with the Supreme Court upholding Browder v. Gayle outlawing Alabama bus segregation.",
      },
      {
        front: "What protest began in Greensboro, North Carolina in February 1960?",
        back: "The Woolworth's lunch-counter sit-ins by four Black college freshmen, spreading to 55+ cities and inspiring the creation of SNCC.",
      },
      {
        front: "What were the 1961 Freedom Rides testing?",
        back: "Whether Deep South states enforced federal Supreme Court bans on segregated interstate buses and terminals—leading to strict ICC desegregation rules.",
      },
      {
        front: "Why was Birmingham (1963) a decisive turning point?",
        back: "Police Chief 'Bull' Connor used fire hoses and dogs on peaceful marchers (including children) on national TV, pushing JFK to propose the Civil Rights Bill.",
      },
      {
        front: "What happened at the March on Washington on 28 August 1963?",
        back: "~250,000 demonstrators rallied at the Lincoln Memorial for Jobs and Freedom, where MLK Jr. delivered his 'I Have a Dream' speech.",
      },
      {
        front: "What did the Civil Rights Act of 1964 abolish?",
        back: "Legal segregation in public accommodations (restaurants, hotels, schools) and discrimination in employment based on race, colour, religion, sex, or national origin.",
      },
      {
        front: "What happened on 'Bloody Sunday' (7 March 1965) at Selma?",
        back: "Alabama state troopers clubbed and tear-gassed ~600 peaceful voting-rights marchers on the Edmund Pettus Bridge, broadcast live on TV.",
      },
      {
        front: "What did the Voting Rights Act of 1965 change?",
        back: "Outlawed Southern literacy tests and sent federal registrars—sending Mississippi Black voter registration from ~6.7% (1964) to ~59.8% (1967).",
      },
      {
        front: "How did Malcolm X's views evolve after his 1964 pilgrimage (Hajj) to Mecca?",
        back: "He left the Nation of Islam, rejected racial separatism, and grew open to multiracial alliances against racism while keeping Black pride and self-defence.",
      },
      {
        front: "Who popularised the slogan 'Black Power' in June 1966?",
        back: "SNCC chairman Stokely Carmichael (Kwame Ture), calling for Black political control, economic independence, and cultural pride.",
      },
      {
        front: "Name two contrasting activities of the Black Panther Party (1966).",
        back: "Armed community patrols monitoring police brutality AND grassroots 'Survival Programs' like Free Breakfast for Children and free health clinics.",
      },
      {
        front: "What is the difference between de jure and de facto segregation?",
        back: "De jure segregation is enforced by written law (Jim Crow South); de facto segregation exists in practice through poverty, housing patterns, and discrimination (Northern ghettos).",
      },
    ],
    mustKnow: [
      "Explain how Jim Crow laws, *Plessy v. Ferguson* (1896), literacy tests, and KKK terror maintained white supremacy in the US South.",
      "Assess both the breakthrough and the limits of *Brown v. Board of Education* (1954) and the Little Rock Nine crisis (1957).",
      "Explain how economic pressure and community organisation made the 381-day Montgomery Bus Boycott succeed.",
      "Compare the tactics and results of the Greensboro Sit-Ins (1960), Freedom Rides (1961), and Birmingham Campaign (1963).",
      "Analyse why network television became a decisive strategic weapon in Birmingham (1963) and Selma (1965).",
      "Distinguish clearly between the Civil Rights Act (1964) and the Voting Rights Act (1965), using voter registration evidence.",
      "Weigh the roles of grassroots activists, MLK Jr., and federal presidents (Eisenhower, JFK, LBJ) in securing legal change.",
      "Explain why frustration in Northern and Western cities sparked riots (Watts 1965, Detroit 1967) despite Southern legal victories.",
      "Compare MLK Jr.'s strategy with Malcolm X, Stokely Carmichael's Black Power, and the Black Panthers without stereotypes.",
      "Reach a balanced judgement on how far the Civil Rights Movement had achieved full equality by 1968.",
    ],
    misconceptions: [
      {
        wrong: "Rosa Parks was just a random tired passenger who refused to move on the spur of the moment.",
        right: "Rosa Parks was a trained NAACP secretary and seasoned activist; her arrest catalysed a boycott quickly mobilised by Jo Ann Robinson's Women's Political Council.",
      },
      {
        wrong: "Brown v. Board of Education (1954) immediately integrated all schools in America.",
        right: "Brown overturned segregated schools in law, but Southern 'Massive Resistance' meant fewer than 2% of Deep South Black pupils were in integrated schools a decade later.",
      },
      {
        wrong: "The Civil Rights Act of 1964 gave Black Americans the right to vote.",
        right: "The 1964 Act ended public segregation and job discrimination; the Voting Rights Act of 1965 banned literacy tests and enforced voting access.",
      },
      {
        wrong: "Martin Luther King Jr. led every single campaign of the Civil Rights Movement.",
        right: "Students (SNCC), CORE Freedom Riders, NAACP lawyers, and local women organisers like Ella Baker and Fannie Lou Hamer initiated and sustained many pivotal campaigns.",
      },
      {
        wrong: "Malcolm X told Black Americans to attack white people violently.",
        right: "Malcolm X advocated self-defence ('by any means necessary') against racist violence—not unprovoked aggression—and moved toward multiracial solidarity after his 1964 Hajj.",
      },
      {
        wrong: "Racism and segregation only existed in the Southern states.",
        right: "Northern and Western cities practised severe de facto segregation in housing, schools, and jobs, triggering major uprisings in Watts (1965) and Detroit (1967).",
      },
    ],
    examMistakes: [
      "Confusing the 1964 Civil Rights Act (public spaces and employment) with the 1965 Voting Rights Act (literacy tests and ballot access).",
      "Writing a 'narrative story' listing events in order without explaining *why* a tactic (economic loss, TV shock, federal pressure) forced change.",
      "Ignoring the role of grassroots organisations (NAACP, WPC, SNCC, CORE) and attributing everything to MLK Jr. alone ('Great Man' history).",
      "Dismissing Black Power or the Black Panthers purely as 'violent' while omitting their Free Breakfast programmes, clinics, and cultural pride.",
      "Forgetting the Cold War context—US presidents feared Soviet propaganda exploiting televised Southern racism.",
      "Treating 'civil rights' as finished in 1965 instead of distinguishing between legal (*de jure*) gains and unresolved economic (*de facto*) inequality.",
      "Failing to evaluate source provenance (NOP): e.g. accepting a Southern governor's claim about 'outside agitators' at face value instead of analysing its political purpose.",
    ],
    mnemonics: [
      {
        topic: "Order of Key Milestones (1954–65)",
        device: "B-M-L-S-F-B-W-C-S-V",
        explanation:
          "**B**rown (54) → **M**ontgomery (55) → **L**ittle Rock (57) → **S**it-ins (60) → **F**reedom Rides (61) → **B**irmingham (63) → **W**ashington March (63) → **C**ivil Rights Act (64) → **S**elma (65) → **V**oting Rights Act (65).",
      },
      {
        topic: "1964 vs 1965 Federal Laws",
        device: "64 = Door, 65 = Vote Alive",
        explanation:
          "19**64** Civil Rights Act opened the **door** to integrated restaurants, hotels, schools, and jobs; 19**65** Voting Rights Act made the **vote alive** by banning literacy tests.",
      },
      {
        topic: "Why Non-Violent Direct Action Worked",
        device: "M-E-T-F (Moral, Economic, Television, Federal)",
        explanation:
          "**M**oral discipline + **E**conomic pressure + **T**elevision shock forced **F**ederal intervention.",
      },
    ],
    realWorld: [
      {
        title: "Modern Protest Tactics Worldwide",
        detail:
          "Sit-ins, boycotts, and smartphone-filmed confrontations used in 21st-century climate and anti-racism movements directly adapt the media-spotlight strategy pioneered in Greensboro, Birmingham, and Selma.",
        emoji: "📱",
      },
      {
        title: "Free School Breakfast Programmes",
        detail:
          "The US federal government's nationwide School Breakfast Program expanded permanently in 1975 partly in response to the massive popularity and success of the Black Panthers' Free Breakfast for Children programme.",
        emoji: "🥣",
      },
      {
        title: "The Civil Rights Act & Workplace Equality Today",
        detail:
          "Title VII of the 1964 Civil Rights Act did not just ban racial discrimination—it also outlawed workplace discrimination based on sex and religion, reshaping employment law for every American.",
        emoji: "⚖️",
      },
      {
        title: "Voting Rights Debates in the 21st Century",
        detail:
          "In 2013 (*Shelby County v. Holder*), the US Supreme Court struck down the 1965 Voting Rights Act's federal 'preclearance' formula, reigniting modern debates over voter ID laws and ballot access.",
        emoji: "🗳️",
      },
      {
        title: "Iconic Olympic Protest Legacy",
        detail:
          "Tommie Smith and John Carlos's gloved fists on the 1968 Mexico City podium inspired generations of athletes to use global sports broadcasts to highlight racial injustice.",
        emoji: "🏅",
      },
    ],
    videos: [
      {
        title: "Brown v. Board of Education & Little Rock Nine Explained",
        channel: "YouTube Search — History Revision",
        url: "https://www.youtube.com/results?search_query=Brown+v+Board+of+Education+Little+Rock+Nine+GCSE+History",
      },
      {
        title: "Montgomery Bus Boycott, Sit-Ins & Freedom Rides",
        channel: "YouTube Search — Civil Rights Direct Action",
        url: "https://www.youtube.com/results?search_query=Montgomery+Bus+Boycott+Greensboro+Sit+Ins+Freedom+Rides+history",
      },
      {
        title: "Birmingham 1963, Selma & Voting Rights Act 1965",
        channel: "YouTube Search — Civil Rights Legislation",
        url: "https://www.youtube.com/results?search_query=Birmingham+1963+Selma+Bloody+Sunday+Voting+Rights+Act+1965",
      },
      {
        title: "Malcolm X, Black Power & the Black Panther Party",
        channel: "YouTube Search — Black Power History",
        url: "https://www.youtube.com/results?search_query=Malcolm+X+Black+Power+Black+Panthers+GCSE+history",
      },
    ],
    formulas: [
      {
        name: "Jim Crow Laws",
        formula: "State and local statutes enforcing racial segregation across the US South from the late 1870s until 1964.",
      },
      {
        name: "Plessy v. Ferguson (1896)",
        formula: "US Supreme Court ruling legalising segregation under the doctrine of 'separate but equal'.",
      },
      {
        name: "NAACP",
        formula: "National Association for the Advancement of Colored People (1909); led legal challenges against Jim Crow.",
      },
      {
        name: "Brown v. Board of Education (1954)",
        formula: "Unanimous 9–0 Supreme Court decision ruling segregated public schools 'inherently unequal'.",
      },
      {
        name: "Montgomery Bus Boycott (1955–56)",
        formula: "381-day boycott triggered by Rosa Parks's arrest, combining economic pressure with Browder v. Gayle.",
      },
      {
        name: "SCLC",
        formula: "Southern Christian Leadership Conference (1957); church-based non-violent group led by Dr. Martin Luther King Jr.",
      },
      {
        name: "SNCC",
        formula: "Student Nonviolent Coordinating Committee (1960); youth-led organisation born out of the Greensboro sit-ins.",
      },
      {
        name: "CORE",
        formula: "Congress of Racial Equality; interracial direct-action group that launched the 1961 Freedom Rides.",
      },
      {
        name: "Civil Rights Act (1964)",
        formula: "Federal law banning segregation in public accommodations and discrimination in employment.",
      },
      {
        name: "Voting Rights Act (1965)",
        formula: "Federal law outlawing literacy tests and empowering federal registrars to protect Black voting rights.",
      },
      {
        name: "De jure vs De facto Segregation",
        formula: "De jure = segregation by written law; de facto = segregation in practice through poverty, housing, and custom.",
      },
      {
        name: "Black Power (1966)",
        formula: "Slogan popularised by Stokely Carmichael calling for Black political control, economic self-reliance, and cultural pride.",
      },
      {
        name: "Black Panther Party (1966)",
        formula: "Oakland-based militant movement combining a Ten-Point Program, armed patrols, and Free Breakfast survival programmes.",
      },
      {
        name: "COINTELPRO",
        formula: "Secret FBI programme that infiltrated and disrupted civil rights and Black Power organisations in the 1960s.",
      },
    ],
  },
};
