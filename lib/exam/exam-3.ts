import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-3",
  title: "Year 9 History Mock 3: Protest Movements (US Civil Rights, Anti-Apartheid & Modern)",
  calculator: false,
  minutes: 45,
  questions: [
    // Q01 — short (warmup)
    {
      id: "exam-3-q01",
      kind: "short",
      topicId: "us-civil-rights",
      guideRef: "jim-crow-brown-v-board",
      difficulty: "warmup",
      question:
        "In which year did the US Supreme Court deliver its landmark *Brown v. Board of Education* ruling declaring racially segregated public schools unconstitutional?",
      answer: { type: "number", value: 1954 },
      traps: [
        { spec: { type: "number", value: 1896 }, feedback: "1896 was *Plessy v. Ferguson*, which upheld segregation; *Brown v. Board* overturned it in schools fifty-eight years later." },
        { spec: { type: "number", value: 1957 }, feedback: "1957 was the Little Rock Nine crisis enforcing school desegregation, three years after the Supreme Court ruling." },
        { spec: { type: "number", value: 1964 }, feedback: "1964 was the federal Civil Rights Act, a full decade after *Brown v. Board of Education*." },
      ],
      hints: [
        "This legal victory led by NAACP lawyer Thurgood Marshall took place one year before the Montgomery Bus Boycott began.",
        "It occurred in the mid-1950s, ten years before the Civil Rights Act of 1964.",
      ],
      solution: [
        "In May **1954**, the Supreme Court unanimously ruled in *Brown v. Board of Education* that 'separate educational facilities are inherently unequal'.",
        "Although many Southern states resisted implementation, the ruling gave the Civil Rights Movement crucial legal momentum.",
      ],
      commonError: "Confusing 1954 (*Brown v. Board*) with 1957 (Little Rock Nine) or 1964 (Civil Rights Act).",
    },

    // Q02 — mcq (warmup) — answerIndex: 0
    {
      id: "exam-3-q02",
      kind: "mcq",
      topicId: "us-civil-rights",
      guideRef: "jim-crow-brown-v-board",
      difficulty: "warmup",
      question:
        "What legal phrase from the 1896 *Plessy v. Ferguson* Supreme Court decision was used across the American South to justify Jim Crow segregation laws?",
      options: [
        "Separate but equal",
        "All deliberate speed",
        "By any means necessary",
        "One person, one vote",
      ],
      answerIndex: 0,
      hints: [
        "Southern lawmakers claimed segregated schools and buses met the Constitution as long as facilities existed for both races.",
        "In reality, facilities for African Americans were chronically underfunded and inferior.",
      ],
      explanation:
        "In *Plessy v. Ferguson* (1896), the Supreme Court ruled that racial segregation did not violate the Constitution so long as facilities were **'separate but equal'** — a fiction that entrenched Jim Crow laws for nearly six decades. 'All deliberate speed' came from the 1955 *Brown II* follow-up order, and 'by any means necessary' was associated with Malcolm X.",
    },

    // Q03 — short (core)
    {
      id: "exam-3-q03",
      kind: "short",
      topicId: "us-civil-rights",
      guideRef: "montgomery-direct-action",
      difficulty: "core",
      question:
        "For how many days did Black residents sustain the Montgomery Bus Boycott (1955–1956) before segregated seating on Montgomery city buses ended?",
      answer: { type: "number", value: 381, display: "381 days" },
      traps: [
        { spec: { type: "number", value: 365 }, feedback: "The boycott lasted slightly longer than a single calendar year — from 5 December 1955 to 20 December 1956." },
        { spec: { type: "number", value: 240 }, feedback: "240 miles was the length of Gandhi's Salt March in India, not the duration of the Montgomery Bus Boycott." },
      ],
      hints: [
        "It began on 5 December 1955 after Rosa Parks's arrest and ended on 20 December 1956.",
        "That is just over one full year (more than 365 days).",
      ],
      solution: [
        "Montgomery's Black community organised carpools, shared rides, and walked miles to work from 5 December 1955 to 20 December 1956.",
        "The boycott lasted **381** days, cutting bus revenue sharply until the Supreme Court's ruling in *Browder v. Gayle* took effect.",
      ],
      commonError: "Writing 365 days instead of the exact 381-day span, or confusing it with the 240-mile Salt March.",
    },

    // Q04 — mcq (core) — answerIndex: 2
    {
      id: "exam-3-q04",
      kind: "mcq",
      topicId: "us-civil-rights",
      guideRef: "montgomery-direct-action",
      difficulty: "core",
      question:
        "Why did television coverage of the 1963 Birmingham campaign prove a turning point for the US Civil Rights Movement?",
      options: [
        "Local Alabama police immediately volunteered to march peacefully alongside student demonstrators in uniform",
        "Southern governors banned all television ownership across America, ending news coverage of protests",
        "Images of police dogs and fire hoses used on peaceful young marchers shocked viewers and pushed federal action",
        "Television stations broadcast secret agreements showing the NAACP had abandoned non-violent protests",
      ],
      answerIndex: 2,
      hints: [
        "Think about Police Commissioner Eugene 'Bull' Connor's violent tactics against peaceful demonstrators, including children.",
        "Consider how Cold War embarrassment and Northern public outrage affected President John F. Kennedy.",
      ],
      explanation:
        "When Bull Connor ordered police dogs and high-pressure fire hoses against peaceful young marchers in Birmingham, Alabama, television cameras broadcast the stark contrast between non-violent discipline and state brutality into millions of American and foreign homes. Outrage and Cold War embarrassment pushed President Kennedy to introduce a federal civil rights bill.",
    },

    // Q05 — mcq (core) with SVG — answerIndex: 3
    {
      id: "exam-3-q05",
      kind: "mcq",
      topicId: "us-civil-rights",
      guideRef: "mlk-legislation-1964-1965",
      difficulty: "core",
      question:
        "Study the diagram tracing how different tactics built momentum in the US Civil Rights Movement. Which landmark federal law was passed directly after the 1965 Selma-to-Montgomery marches?",
      diagram:
        '<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage diagram showing US Civil Rights tactics moving from court rulings to boycotts, direct action, and 1965 federal law">' +
        '<rect x="0" y="0" width="560" height="235" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">How Multi-Tactic Pressure Won Federal Change (1950s–1965)</text>' +
        '<rect x="18" y="48" width="118" height="136" rx="8" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.8"/>' +
        '<text x="77" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#4c1d95">1. Courts</text>' +
        '<text x="77" y="92" text-anchor="middle" font-size="10" fill="#1e293b">NAACP legal</text>' +
        '<text x="77" y="107" text-anchor="middle" font-size="10" fill="#1e293b">challenges to</text>' +
        '<text x="77" y="122" text-anchor="middle" font-size="10" fill="#1e293b">segregated</text>' +
        '<text x="77" y="137" text-anchor="middle" font-size="10" fill="#1e293b">public schools</text>' +
        '<line x1="138" y1="116" x2="152" y2="116" stroke="#64748b" stroke-width="2"/>' +
        '<polygon points="154,116 147,111 147,121" fill="#64748b"/>' +
        '<rect x="156" y="48" width="118" height="136" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>' +
        '<text x="215" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#0c4a6e">2. Boycotts</text>' +
        '<text x="215" y="92" text-anchor="middle" font-size="10" fill="#1e293b">Montgomery</text>' +
        '<text x="215" y="107" text-anchor="middle" font-size="10" fill="#1e293b">community</text>' +
        '<text x="215" y="122" text-anchor="middle" font-size="10" fill="#1e293b">carpools &amp; fare</text>' +
        '<text x="215" y="137" text-anchor="middle" font-size="10" fill="#1e293b">pressure</text>' +
        '<line x1="276" y1="116" x2="290" y2="116" stroke="#64748b" stroke-width="2"/>' +
        '<polygon points="292,116 285,111 285,121" fill="#64748b"/>' +
        '<rect x="294" y="48" width="118" height="136" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>' +
        '<text x="353" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">3. Direct Action</text>' +
        '<text x="353" y="92" text-anchor="middle" font-size="10" fill="#1e293b">Sit-ins, Freedom</text>' +
        '<text x="353" y="107" text-anchor="middle" font-size="10" fill="#1e293b">Rides, Birmingham</text>' +
        '<text x="353" y="122" text-anchor="middle" font-size="10" fill="#1e293b">&amp; 1963 March</text>' +
        '<text x="353" y="137" text-anchor="middle" font-size="10" fill="#1e293b">on Washington</text>' +
        '<line x1="414" y1="116" x2="428" y2="116" stroke="#64748b" stroke-width="2"/>' +
        '<polygon points="430,116 423,111 423,121" fill="#64748b"/>' +
        '<rect x="432" y="48" width="110" height="136" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>' +
        '<text x="487" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">4. Selma (1965)</text>' +
        '<text x="487" y="92" text-anchor="middle" font-size="10" fill="#1e293b">Bloody Sunday</text>' +
        '<text x="487" y="107" text-anchor="middle" font-size="10" fill="#1e293b">outcry forces</text>' +
        '<text x="487" y="125" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">[ 1965 Law ? ]</text>' +
        '<text x="487" y="145" text-anchor="middle" font-size="10" fill="#1e293b">by US Congress</text>' +
        '<text x="280" y="212" text-anchor="middle" font-size="11" fill="#475569">Grassroots courage + media visibility compelled federal lawmakers to dismantle Southern Jim Crow laws</text>' +
        '</svg>',
      options: [
        "The Civil Rights Act, banning segregation in public accommodations nationwide",
        "The Indian Independence Act, which ended British colonial governance overseas",
        "The Jim Crow Restoration Act, which protected state literacy tests in Alabama",
        "The Voting Rights Act, which banned literacy tests and sent federal registrars South",
      ],
      answerIndex: 3,
      hints: [
        "Ask what specific right African Americans in Selma, Alabama were marching to demand in March 1965.",
        "Distinguish the 1964 law (desegregation of public places) from the 1965 law (ballot access).",
      ],
      explanation:
        "Televised brutality against peaceful marchers crossing the Edmund Pettus Bridge on 'Bloody Sunday' (7 March 1965) shocked the nation and led Congress to pass the **Voting Rights Act of 1965**, banning discriminatory literacy tests and sending federal registrars to oversee Southern voter registration. The Civil Rights Act had already been passed in July 1964.",
    },

    // Q06 — short (core)
    {
      id: "exam-3-q06",
      kind: "short",
      topicId: "us-civil-rights",
      guideRef: "mlk-legislation-1964-1965",
      difficulty: "core",
      question:
        "Name the US President who succeeded John F. Kennedy and signed both landmark 1964 and 1965 federal civil rights acts into law.",
      answer: {
        type: "text",
        accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson", "President Johnson", "Lyndon Baines Johnson"],
        display: "Lyndon B. Johnson",
      },
      traps: [
        { spec: { type: "text", accept: ["John F. Kennedy", "John Kennedy", "JFK", "Kennedy"] }, feedback: "President Kennedy proposed the civil rights bill in 1963, but he was assassinated in November 1963 before it became law." },
        { spec: { type: "text", accept: ["Dwight Eisenhower", "Eisenhower", "Dwight D. Eisenhower"] }, feedback: "Eisenhower sent federal troops to Little Rock in 1957, but he had left office in January 1961." },
      ],
      hints: [
        "He was a former Texas senator who succeeded John F. Kennedy after November 1963.",
        "He used his deep knowledge of Congress to push both landmark bills past Southern filibusters.",
      ],
      solution: [
        "After John F. Kennedy's assassination in November 1963, President **Lyndon B. Johnson** (LBJ) drove the civil rights agenda through Congress.",
        "He signed the Civil Rights Act in July 1964 and the Voting Rights Act in August 1965.",
      ],
      commonError: "Crediting John F. Kennedy with signing the 1964 and 1965 laws, even though he was assassinated in November 1963.",
    },

    // Q07 — mcq (core) — answerIndex: 1
    {
      id: "exam-3-q07",
      kind: "mcq",
      topicId: "us-civil-rights",
      guideRef: "malcolm-x-black-power",
      difficulty: "core",
      question:
        "Why did Malcolm X and later **Black Power** activists win growing support in Northern US cities during the mid-1960s?",
      options: [
        "Northern states passed brand-new Jim Crow bus segregation laws after the 1965 federal reforms",
        "Federal laws ended Southern legal segregation but did not cure Northern urban poverty, bad housing, or police brutality",
        "Martin Luther King Jr. retired from activism in 1964 and urged all demonstrators to leave Northern cities",
        "Black Power leaders promised immediate federal tax cuts to white suburban factory owners in Chicago and Detroit",
      ],
      answerIndex: 1,
      hints: [
        "Compare *de jure* legal segregation in the South with economic and housing inequality in Northern cities like Harlem, Chicago, and Watts.",
        "Think about why young urban activists grew impatient with slow integration and emphasised pride, self-defence, and community power.",
      ],
      explanation:
        "Even after the 1964 Civil Rights Act and 1965 Voting Rights Act dismantled legal Jim Crow in the South, African Americans in Northern ghettos still faced entrenched poverty, unemployment, segregated housing, and police violence. Malcolm X and Black Power leaders spoke directly to this frustration, advocating Black pride, economic self-reliance, and self-defence.",
    },

    // Q08 — short (warmup)
    {
      id: "exam-3-q08",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "apartheid-system-1948",
      difficulty: "warmup",
      question:
        "In which year did the National Party win South Africa's white-dominated general election and begin formalising the apartheid system in law?",
      answer: { type: "number", value: 1948 },
      traps: [
        { spec: { type: "number", value: 1952 }, feedback: "1952 was the ANC's Defiance Campaign protesting apartheid laws that had already been introduced four years earlier." },
        { spec: { type: "number", value: 1960 }, feedback: "1960 was the Sharpeville Massacre, twelve years after the National Party took power." },
        { spec: { type: "number", value: 1994 }, feedback: "1994 was the end of apartheid and South Africa's first multiracial democratic election, not when apartheid began." },
      ],
      hints: [
        "It happened just three years after the end of the Second World War, in the same year the UN adopted the Universal Declaration of Human Rights.",
        "Apartheid lasted forty-six years, ending in 1994.",
      ],
      solution: [
        "The Afrikaner-led National Party won the whites-only election in May **1948** under D.F. Malan.",
        "It immediately began passing sweeping racial segregation statutes known collectively as apartheid ('apartness').",
      ],
      commonError: "Confusing 1948 (start of official apartheid) with 1960 (Sharpeville) or 1994 (end of apartheid).",
    },

    // Q09 — short (core)
    {
      id: "exam-3-q09",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "apartheid-system-1948",
      difficulty: "core",
      question:
        "What everyday name was given to the apartheid laws requiring Black South Africans aged 16 and over to carry identity booklets restricting where they could live, work, and travel?",
      answer: {
        type: "text",
        accept: ["Pass Laws", "Pass Law", "The Pass Laws", "Dompas"],
        display: "Pass Laws",
      },
      traps: [
        { spec: { type: "text", accept: ["Group Areas Act"] }, feedback: "The Group Areas Act divided towns into segregated residential zones; this question asks for the identity-booklet controls on daily movement." },
        { spec: { type: "text", accept: ["Bantu Education Act"] }, feedback: "The Bantu Education Act restricted schooling for Black children, not travel and employment identity booklets." },
      ],
      hints: [
        "Without an endorsed booklet signed by an employer, a Black citizen could be arrested on the spot.",
        "Peaceful protesters burned these hated booklets in March 1960.",
      ],
      solution: [
        "Under the **Pass Laws**, Black South Africans had to carry a *dompas* (reference book) at all times to prove permission to enter white-designated urban areas.",
        "Hundreds of thousands of people were arrested every year for technical pass offences, making the laws a focal point of mass resistance.",
      ],
      commonError: "Confusing the Pass Laws (movement/employment identity booklets) with the Group Areas Act (residential zoning).",
    },

    // Q10 — short (core)
    {
      id: "exam-3-q10",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "sharpeville-armed-struggle",
      difficulty: "core",
      question:
        "Name the South African township where police shot dead 69 unarmed anti-pass demonstrators on 21 March 1960, prompting the banning of the ANC and PAC.",
      answer: {
        type: "text",
        accept: ["Sharpeville", "Sharpeville Township"],
        display: "Sharpeville",
      },
      traps: [
        { spec: { type: "text", accept: ["Soweto"] }, feedback: "The Soweto Uprising occurred sixteen years later in June 1976 over Afrikaans schooling, not in March 1960." },
        { spec: { type: "text", accept: ["Robben Island"] }, feedback: "Robben Island was the prison island where Nelson Mandela was held from 1964, not the site of the 1960 massacre." },
      ],
      hints: [
        "Do not confuse this 1960 massacre with the 1976 student uprising in Soweto.",
        "Today 21 March is commemorated in South Africa as Human Rights Day in memory of the victims here.",
      ],
      solution: [
        "On 21 March 1960, police opened fire on a peaceful crowd gathered outside a police station in **Sharpeville**, killing 69 people (many shot in the back).",
        "Global outrage followed, and when the regime banned the ANC and PAC, anti-apartheid leaders concluded that peaceful legal protest alone had been closed off.",
      ],
      commonError: "Confusing Sharpeville (1960 anti-pass massacre) with Soweto (1976 student uprising).",
    },

    // Q11 — mcq (core) — answerIndex: 2
    {
      id: "exam-3-q11",
      kind: "mcq",
      topicId: "anti-apartheid-south-africa",
      guideRef: "sharpeville-armed-struggle",
      difficulty: "core",
      question:
        "Why did Nelson Mandela and ANC leaders form *Umkhonto we Sizwe* (MK, 'Spear of the Nation') in 1961?",
      options: [
        "The ANC had always rejected peaceful methods from its founding in 1912 and wanted immediate guerrilla warfare",
        "The British government ordered Mandela to build an army to invade neighbouring Rhodesia on London's behalf",
        "After the 1960 township killings and banning of the ANC, peaceful channels were crushed so they turned to targeted sabotage",
        "South Africa's National Party invited MK to join a coalition government to patrol segregated white suburbs",
      ],
      answerIndex: 2,
      hints: [
        "Recall the sequence of events: 1952 Defiance Campaign (peaceful) → 1955 Freedom Charter (peaceful) → 1960 Sharpeville & banning of the ANC.",
        "Initially, what targets did MK focus on — random civilians or state infrastructure like power pylons and pass offices?",
      ],
      explanation:
        "For nearly fifty years, the ANC pursued peaceful petitions, boycotts, and civil disobedience. After the 1960 Sharpeville Massacre and the total banning of the ANC and PAC, Mandela argued that the regime had closed every legal non-violent avenue — leading to MK's controlled sabotage campaign against state installations while initially seeking to avoid loss of life.",
    },

    // Q12 — short (core)
    {
      id: "exam-3-q12",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "soweto-1976-sanctions",
      difficulty: "core",
      question:
        "In which year did thousands of Black schoolchildren in Soweto march peacefully against being forced to study subjects in Afrikaans, triggering a nationwide uprising?",
      answer: { type: "number", value: 1976 },
      traps: [
        { spec: { type: "number", value: 1960 }, feedback: "1960 was the Sharpeville Massacre; the Soweto student uprising took place sixteen years later." },
        { spec: { type: "number", value: 1964 }, feedback: "1964 was the Rivonia Trial sentencing Nelson Mandela to life imprisonment, twelve years before Soweto." },
        { spec: { type: "number", value: 1990 }, feedback: "1990 was when Nelson Mandela was released from prison, fourteen years after Soweto." },
      ],
      hints: [
        "It began on 16 June in the mid-1970s, inspired by Steve Biko's Black Consciousness Movement.",
        "Sam Nzima's famous photograph of the dying 12-year-old Hector Pieterson shocked the world that summer.",
      ],
      solution: [
        "On 16 June **1976**, up to 20,000 students in Soweto protested the compulsory imposition of Afrikaans in Black secondary schools.",
        "Police gunfire killed hundreds of young people over the following months, galvanising internal youth resistance and global sanctions.",
      ],
      commonError: "Confusing 1976 (Soweto Uprising) with 1960 (Sharpeville Massacre).",
    },

    // Q13 — short (core)
    {
      id: "exam-3-q13",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "end-of-apartheid-1994",
      difficulty: "core",
      question:
        "Name the South African President who unbanned the ANC and released Nelson Mandela from prison in February 1990.",
      answer: {
        type: "text",
        accept: ["F.W. de Klerk", "FW de Klerk", "F. W. de Klerk", "de Klerk", "Frederik Willem de Klerk", "President de Klerk"],
        display: "F.W. de Klerk",
      },
      traps: [
        { spec: { type: "text", accept: ["P.W. Botha", "PW Botha", "Botha"] }, feedback: "P.W. Botha was de Klerk's hardline predecessor who declared States of Emergency and refused to free Mandela unconditionally." },
        { spec: { type: "text", accept: ["Desmond Tutu", "Tutu"] }, feedback: "Archbishop Desmond Tutu was a leading anti-apartheid churchman and Nobel laureate, not South Africa's State President." },
      ],
      hints: [
        "He replaced hardline President P.W. Botha in 1989 and realised apartheid was economically and politically unsustainable.",
        "He later shared the 1993 Nobel Peace Prize with Nelson Mandela.",
      ],
      solution: [
        "On 2 February 1990, President **F.W. de Klerk** stunned Parliament by unbanning the ANC, PAC, and Communist Party.",
        "Nine days later, on 11 February 1990, Nelson Mandela walked free after twenty-seven years in prison.",
      ],
      commonError: "Confusing F.W. de Klerk (who dismantled apartheid from 1990) with P.W. Botha (his hardline predecessor).",
    },

    // Q14 — mcq (core) with SVG — answerIndex: 0
    {
      id: "exam-3-q14",
      kind: "mcq",
      topicId: "anti-apartheid-south-africa",
      guideRef: "end-of-apartheid-1994",
      difficulty: "core",
      question:
        "Study the diagram contrasting the pillars of apartheid control with the converging pressures facing South Africa by 1989. Which combination best explains why the National Party entered negotiations with the ANC?",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing apartheid pillars of control on the left facing converging internal and international pressures on the right by 1989">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Why the Apartheid State Reached Breaking Point by 1989</text>' +
        '<rect x="20" y="46" width="218" height="176" rx="10" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/>' +
        '<text x="129" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Pillars of State Control</text>' +
        '<rect x="34" y="80" width="190" height="28" rx="5" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="129" y="98" text-anchor="middle" font-size="11" fill="#1e293b">Racial Classification Laws</text>' +
        '<rect x="34" y="114" width="190" height="28" rx="5" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="129" y="132" text-anchor="middle" font-size="11" fill="#1e293b">Forced Segregated Zones</text>' +
        '<rect x="34" y="148" width="190" height="28" rx="5" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="129" y="166" text-anchor="middle" font-size="11" fill="#1e293b">Strict Movement Controls</text>' +
        '<rect x="34" y="182" width="190" height="28" rx="5" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<text x="129" y="200" text-anchor="middle" font-size="11" fill="#1e293b">Inferior Segregated Schooling</text>' +
        '<line x1="306" y1="134" x2="246" y2="134" stroke="#b91c1c" stroke-width="3"/>' +
        '<polygon points="244,134 254,128 254,140" fill="#b91c1c"/>' +
        '<text x="278" y="122" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Converging</text>' +
        '<text x="278" y="150" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Crisis</text>' +
        '<rect x="314" y="46" width="226" height="176" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>' +
        '<text x="427" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">Key Pressures (Late 1980s)</text>' +
        '<rect x="328" y="80" width="198" height="28" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="427" y="98" text-anchor="middle" font-size="10.5" fill="#1e293b">Internal civic &amp; union unrest</text>' +
        '<rect x="328" y="114" width="198" height="28" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="427" y="132" text-anchor="middle" font-size="10.5" fill="#1e293b">Foreign debt &amp; disinvestment</text>' +
        '<rect x="328" y="148" width="198" height="28" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="427" y="166" text-anchor="middle" font-size="10.5" fill="#1e293b">Global cultural &amp; sport boycotts</text>' +
        '<rect x="328" y="182" width="198" height="28" rx="5" fill="#ffffff" stroke="#fdba74"/>' +
        '<text x="427" y="200" text-anchor="middle" font-size="10.5" fill="#1e293b">Fall of Berlin Wall (1989)</text>' +
        '</svg>',
      options: [
        "Township resistance, crippling economic sanctions, and the Cold War's end made white minority rule unsustainable",
        "A direct military invasion by United Nations tank armies captured Pretoria and forced surrender overnight",
        "South Africa's economy was booming so rapidly that white voters no longer needed foreign trade or loans",
        "The ANC agreed to preserve segregated Bantustans permanently in return for joining international cricket",
      ],
      answerIndex: 0,
      hints: [
        "Look at all four pressure boxes on the right side of the diagram — notice both INTERNAL and EXTERNAL factors.",
        "How did the fall of the Berlin Wall in 1989 and waning Soviet influence weaken Pretoria's old Cold War justification?",
      ],
      explanation:
        "No single event ended apartheid alone; instead, mass internal civic resistance (UDF, COSATU strikes, rent boycotts), severe international economic sanctions and disinvestment, sporting isolation, and the end of the Cold War (which removed fear of Soviet takeover) converged to persuade pragmatic National Party leaders to negotiate before total civil war erupted.",
    },

    // Q15 — short (warmup)
    {
      id: "exam-3-q15",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "warmup",
      question:
        "Approximately how many miles did Mahatma Gandhi and his followers walk from Sabarmati Ashram to Dandi during the 1930 Salt March? Give a single number.",
      answer: { type: "number", value: 240, display: "240 miles" },
      traps: [
        { spec: { type: "number", value: 381 }, feedback: "381 was the number of days the Montgomery Bus Boycott lasted, not the mileage of the Salt March." },
        { spec: { type: "number", value: 24 }, feedback: "24 was the number of DAYS the Salt March took, not the distance in miles (roughly 10 miles per day)." },
      ],
      hints: [
        "They marched roughly 10 miles a day for 24 days in March–April 1930.",
        "Multiply 24 days by 10 miles per day.",
      ],
      solution: [
        "Gandhi and 78 initial marchers walked for 24 days at roughly 10 miles a day, gathering thousands of supporters.",
        "The total distance from Sabarmati Ashram to Dandi on the Arabian Sea coast was approximately **240** miles.",
      ],
      commonError: "Confusing 24 days (duration) with 240 miles (distance), or confusing 240 miles with 381 days (Montgomery).",
    },

    // Q16 — mcq (core) — answerIndex: 3
    {
      id: "exam-3-q16",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "core",
      question:
        "How did Mahatma Gandhi's Indian independence campaigns directly shape Martin Luther King Jr.'s strategy in the US Civil Rights Movement?",
      options: [
        "King copied Gandhi by forming an armed guerrilla brigade to sabotage Southern state railway bridges",
        "King argued that Gandhi's tactics worked only in rural farming villages and rejected boycotts in American cities",
        "King invited British colonial officials from India to supervise American voter registration offices in Alabama",
        "King adapted disciplined non-violent civil disobedience and boycotts to expose unjust laws and win moral sympathy",
      ],
      answerIndex: 3,
      hints: [
        "Remember King's 1959 visit to India, where he said he came 'as a pilgrim' to study Gandhi's methods.",
        "Compare the Indian cloth/salt boycotts with Montgomery buses, sit-ins, and Birmingham marches.",
      ],
      explanation:
        "Martin Luther King Jr. deeply studied Gandhi's *Satyagraha* and visited India in 1959. He adapted disciplined non-violent civil disobedience, mass economic boycotts, and willingness to accept unjust arrest without retaliation so that television and news cameras exposed the moral bankruptcy of Jim Crow segregation.",
    },

    // Q17 — mcq (core) — answerIndex: 1
    {
      id: "exam-3-q17",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "modern-protests-digital-age",
      difficulty: "core",
      question:
        "What is a widely recognised **limitation** of 21st-century hashtag and social-media-driven protests compared with 20th-century organisations such as the NAACP or ANC?",
      options: [
        "Social media posts cannot cross national borders and only reach readers living in the same town",
        "Leaderless viral movements can struggle to maintain long-term discipline or negotiate concrete legal reforms",
        "Modern digital campaigns cost far more money to launch than printing millions of paper leaflets by hand",
        "Young people under twenty-five are legally barred from participating in climate strikes or online petitions",
      ],
      answerIndex: 1,
      hints: [
        "Think about what happens after a hashtag stops trending: who sits down at the negotiating table with lawmakers?",
        "Contrast rapid online viral reach with years of organised grassroots endurance.",
      ],
      explanation:
        "While smartphones and social media allow rapid, low-cost global mobilisation across borders, historians and sociologists note that decentralised viral campaigns often fade quickly when algorithms shift, attract superficial clicks, and lack clear negotiating structures to turn online outrage into lasting legislation.",
    },

    // Q18 — short (warmup)
    {
      id: "exam-3-q18",
      kind: "short",
      topicId: "modern-protest-movements",
      guideRef: "modern-protests-digital-age",
      difficulty: "warmup",
      question:
        "Give the one-word informal term used by critics to describe low-effort online activism — such as clicking 'like' or sharing a hashtag — that feels supportive without driving real-world action.",
      answer: {
        type: "text",
        accept: ["Slacktivism", "Clicktivism"],
        display: "Slacktivism",
      },
      traps: [
        { spec: { type: "text", accept: ["Boycott"] }, feedback: "A boycott involves actively withdrawing economic spending over time, not low-effort online clicking." },
        { spec: { type: "text", accept: ["Propaganda"] }, feedback: "Propaganda is biased information spread to shape opinion, not passive online 'liking' of causes." },
      ],
      hints: [
        "It blends the words 'slacker' and 'activism' into a single portmanteau word.",
        "Critics argue it can give people a warm moral feeling without pressuring governments to change laws.",
      ],
      solution: [
        "Critics call effortless digital gestures such as liking posts or changing profile frames **slacktivism** (sometimes also called clicktivism).",
        "Unlike a 381-day bus boycott or sustained voter drive, slacktivism rarely imposes political or economic cost on decision-makers.",
      ],
      commonError: "Confusing slacktivism with genuine digital organising (such as coordinating global climate strikes).",
    },

    // Q19 — short (core)
    {
      id: "exam-3-q19",
      kind: "short",
      topicId: "anti-apartheid-south-africa",
      guideRef: "end-of-apartheid-1994",
      difficulty: "core",
      question:
        "In which year did South Africa hold its first fully democratic multiracial election, resulting in Nelson Mandela becoming President?",
      answer: { type: "number", value: 1994 },
      traps: [
        { spec: { type: "number", value: 1990 }, feedback: "1990 was the year Nelson Mandela was freed from prison; four years of tense negotiations followed before democratic elections." },
        { spec: { type: "number", value: 1991 }, feedback: "1991 saw the repeal of major apartheid statutes and the start of CODESA talks, three years before the first multiracial election." },
        { spec: { type: "number", value: 1989 }, feedback: "1989 was when F.W. de Klerk became President, five years before South Africa's first multiracial election." },
      ],
      hints: [
        "It took place in April, four years after Mandela's release from Victor Verster Prison in 1990.",
        "Millions of South Africans queued peacefully for hours to cast their first democratic ballots.",
      ],
      solution: [
        "Following the CODESA constitutional negotiations, South Africa held its first fully multiracial election in April **1994**.",
        "The ANC won a clear majority, and Nelson Mandela was inaugurated as South Africa's first Black President on 10 May **1994**.",
      ],
      commonError: "Confusing 1990 (Mandela's release) with 1994 (South Africa's first multiracial election).",
    },

    // Q20 — mcq (challenge) — answerIndex: 2
    {
      id: "exam-3-q20",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "comparing-protest-success",
      difficulty: "challenge",
      question:
        "Which core ingredient of protest success was shared by India's 1930 Salt & Khadi boycotts, the 1955–56 Montgomery Bus Boycott, and 1980s Anti-Apartheid sanctions?",
      options: [
        "Every campaign relied solely on private letters sent secretly to sympathetic monarchs without public protest",
        "Every campaign won complete victory within thirty days without facing arrests, violence, or financial hardship",
        "Every campaign paired moral public appeal with sustained economic leverage that made injustice costly to maintain",
        "Every campaign depended entirely on social media hashtags to recruit foreign tourists to boycott local beaches",
      ],
      answerIndex: 2,
      hints: [
        "Look for the common engine behind cloth boycotts, empty city buses, and foreign disinvestment.",
        "Notice how all three hit BOTH the conscience AND the wallet of those in power.",
      ],
      explanation:
        "Across all three movements, moral clarity alone was strengthened by sustained **economic pressure**: khadi boycotts hit British textiles, empty buses pushed Montgomery transit toward bankruptcy, and global sanctions plus bank refusals drove apartheid South Africa into debt crisis. Combining moral legitimacy with economic leverage repeatedly made unjust systems too costly to preserve.",
    },

    // Q21 — mcq (challenge) — answerIndex: 0
    {
      id: "exam-3-q21",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "quit-india-ww2",
      difficulty: "challenge",
      question:
        "Comparing the Indian Independence Movement with South Africa's Anti-Apartheid struggle, what major strategic divergence emerged in South Africa after 1960 that contrasted with Gandhi's lifelong commitment in India?",
      options: [
        "Facing total party bans and lethal force, the ANC added an armed sabotage wing while Gandhi upheld strict non-violence",
        "South African activists abandoned international support entirely, whereas Gandhi demanded foreign UN army invasions",
        "Gandhi accepted permanent racial voting restrictions in India, whereas the ANC refused to participate in elections",
        "South African students never marched in the streets, whereas Indian independence relied exclusively on secret courts",
      ],
      answerIndex: 0,
      hints: [
        "Compare Gandhi's response when protests turned violent (e.g. Chauri Chaura 1922) with Mandela's decision after Sharpeville (1960).",
        "Remember that even in India, other figures like Subhas Chandra Bose differed from Gandhi, while in South Africa the ANC itself created MK.",
      ],
      explanation:
        "Mahatma Gandhi remained committed to strict *Satyagraha* throughout his life, even halting campaigns when crowds turned violent. In South Africa, after the 1960 Sharpeville Massacre and the banning of all Black political parties, Nelson Mandela and ANC leaders concluded that non-violence alone could not move a police state and added controlled armed sabotage (*Umkhonto we Sizwe*) alongside civic and international pressure.",
    },

    // Q22 — written (4 marks, challenge) with SVG Comparative Matrix
    {
      id: "exam-3-q22",
      kind: "written",
      topicId: "modern-protest-movements",
      guideRef: "modern-protests-digital-age",
      difficulty: "challenge",
      marks: 4,
      question:
        "Using the comparative matrix and your own historical knowledge, evaluate how far digital technology has made 21st-century protest campaigns more effective than 20th-century movements such as US Civil Rights.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparative table contrasting 20th-century grassroots protest movements with 21st-century digital-age protests across speed, organisation, pressure, and risks">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Comparing Protest Eras: 20th-Century Grassroots vs Digital Age</text>' +
        '<rect x="18" y="42" width="524" height="190" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.6"/>' +
        '<rect x="18" y="42" width="524" height="32" rx="8" fill="#1e293b"/>' +
        '<text x="72" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">Dimension</text>' +
        '<text x="234" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="#c4b5fd">20th Century (e.g. Civil Rights)</text>' +
        '<text x="434" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="#7dd3fc">21st Century (Digital / Youth)</text>' +
        '<line x1="128" y1="42" x2="128" y2="232" stroke="#cbd5e1"/>' +
        '<line x1="336" y1="42" x2="336" y2="232" stroke="#cbd5e1"/>' +
        '<line x1="18" y1="112" x2="542" y2="112" stroke="#e2e8f0"/>' +
        '<line x1="18" y1="152" x2="542" y2="152" stroke="#e2e8f0"/>' +
        '<line x1="18" y1="192" x2="542" y2="192" stroke="#e2e8f0"/>' +
        '<text x="72" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Mobilisation</text>' +
        '<text x="232" y="96" text-anchor="middle" font-size="10.5" fill="#1e293b">Churches, unions, local committees</text>' +
        '<text x="439" y="96" text-anchor="middle" font-size="10.5" fill="#1e293b">Instant global hashtags &amp; livestreams</text>' +
        '<text x="72" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Leadership</text>' +
        '<text x="232" y="136" text-anchor="middle" font-size="10.5" fill="#1e293b">Structured (NAACP, SCLC, SNCC)</text>' +
        '<text x="439" y="136" text-anchor="middle" font-size="10.5" fill="#1e293b">Decentralised / often leaderless</text>' +
        '<text x="72" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Core Strength</text>' +
        '<text x="232" y="176" text-anchor="middle" font-size="10.5" fill="#1e293b">Sustained boycotts &amp; clear laws</text>' +
        '<text x="439" y="176" text-anchor="middle" font-size="10.5" fill="#1e293b">Low cost &amp; rapid worldwide scale</text>' +
        '<text x="72" y="216" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Main Risk</text>' +
        '<text x="232" y="216" text-anchor="middle" font-size="10.5" fill="#1e293b">Slow reach; leaders targeted</text>' +
        '<text x="439" y="216" text-anchor="middle" font-size="10.5" fill="#1e293b">Shallow clicks; censorship &amp; fade-out</text>' +
        '</svg>',
      hints: [
        "Give a concrete strength of digital protests (e.g. Fridays for Future climate strikes or #MeToo spreading globally within days).",
        "Give a clear drawback (e.g. slacktivism, short online attention spans, leaderless fragmentation, or state surveillance).",
        "Compare directly with 20th-century grassroots strength (e.g. NAACP/SCLC winning the 1964–65 federal laws) and reach a clear verdict.",
      ],
      modelAnswer:
        "Smartphones and social media have boosted protest speed and global reach dramatically: youth climate strikes such as Fridays for Future and campaigns like #MeToo mobilised millions across continents at almost zero cost. However, viral visibility does not automatically equal lasting political power, because online campaigns often suffer from slacktivism, rapid burnout, leaderless fragmentation, and state censorship or surveillance. By contrast, 20th-century organisations like the NAACP and SCLC built deep local discipline through churches and carpools, sustaining boycotts and marches that forced concrete legislation such as the 1964 Civil Rights Act and 1965 Voting Rights Act. Overall, digital tools make launching awareness far easier, yet lasting reform still requires offline organisation and clear policy goals.",
      markScheme: [
        {
          point: "Explains a strength of 21st-century digital protests with an example (speed, global reach, low cost; e.g. Fridays for Future, #MeToo, climate strikes).",
          keywords: ["fridays for future", "climate", "metoo", "#metoo", "global", "speed", "low cost"],
        },
        {
          point: "Explains a limitation of digital protests (slacktivism, short attention span, leaderless fragmentation, or state censorship/surveillance).",
          keywords: ["slacktivism", "leaderless", "fragmentation", "censorship", "surveillance", "burnout"],
        },
        {
          point: "Contrasts with 20th-century grassroots organisational endurance and concrete legislative gains (e.g. NAACP/SCLC, boycotts, 1964/1965 Acts).",
          keywords: ["naacp", "sclc", "churches", "1964", "1965", "legislation", "boycotts"],
        },
        {
          point: "Reaches a balanced overall judgment linking digital reach with the ongoing need for offline organisation and clear goals.",
          keywords: ["overall", "offline", "lasting", "however", "clear policy", "goals"],
        },
      ],
      commonError: "Assuming newer technology automatically means greater effectiveness without comparing legislative outcomes and long-term organisation.",
    },

    // Q23 — written (3 marks, challenge)
    {
      id: "exam-3-q23",
      kind: "written",
      topicId: "us-civil-rights",
      guideRef: "montgomery-direct-action",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain how the Montgomery Bus Boycott (1955–56) successfully combined community organisation, economic pressure, and court action to end segregated seating on city buses.",
      hints: [
        "Point 1: How did ordinary residents keep commuting to work for over a year without boarding buses?",
        "Point 2: Why did empty buses hurt the city transit company and downtown white shopkeepers?",
        "Point 3: Which federal institution delivered the final legally binding victory in late 1956?",
      ],
      modelAnswer:
        "First, local churches, the Women's Political Council, and the MIA built an intricate network of carpools, volunteer drivers, and shared rides so residents could keep working across 381 days. Second, because African American riders provided roughly seventy percent of bus fares, emptying the buses pushed the transit company close to bankruptcy and hurt downtown businesses. Third, NAACP lawyers simultaneously challenged segregation in federal courts, culminating in the Supreme Court ruling *Browder v. Gayle*, which legally struck down bus segregation.",
      markScheme: [
        {
          point: "Explains grassroots community organisation sustaining the boycott (carpools, churches, MIA/Women's Political Council, walking across 381 days).",
          keywords: ["carpools", "churches", "381", "women's political council", "mia", "drivers"],
        },
        {
          point: "Explains economic leverage (Black passengers formed the majority of fares, threatening bus company bankruptcy and hurting white businesses).",
          keywords: ["fares", "bankruptcy", "seventy", "70%", "revenue", "businesses"],
        },
        {
          point: "Explains legal victory via federal courts / Supreme Court (*Browder v. Gayle*) declaring bus segregation unconstitutional.",
          keywords: ["supreme court", "browder", "unconstitutional", "naacp", "federal courts"],
        },
      ],
      commonError: "Crediting only Rosa Parks's arrest without explaining the 381-day carpool network, fare losses, and Supreme Court ruling.",
    },

    // Q24 — written (3 marks, challenge)
    {
      id: "exam-3-q24",
      kind: "written",
      topicId: "anti-apartheid-south-africa",
      guideRef: "soweto-1976-sanctions",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain how the Soweto Uprising transformed both internal resistance inside South Africa and global responses to apartheid.",
      hints: [
        "Point 1: Mention why students marched (compulsory Afrikaans schooling) and how youth/Black Consciousness energised nationwide resistance.",
        "Point 2: Mention the lethal police crackdown and iconic international media images (e.g. Hector Pieterson).",
        "Point 3: Mention how foreign outrage intensified economic sanctions, divestment, and cultural/sporting boycotts.",
      ],
      modelAnswer:
        "Sparked by Black teenagers protesting compulsory Afrikaans instruction under Bantu Education, the revolt spread nationwide and showed a fearless new generation shaped by Steve Biko's Black Consciousness Movement refusing to submit. When police shot unarmed schoolchildren — immortalised in the photograph of dying twelve-year-old Hector Pieterson — global shock shattered Pretoria's attempts to defend apartheid abroad. Internationally, the bloodshed accelerated economic sanctions, foreign company disinvestment, an arms embargo, and cultural and sporting boycotts that deepened South Africa's isolation.",
      markScheme: [
        {
          point: "Explains internal spark and shift (students opposing compulsory Afrikaans schooling, Black Consciousness / fearless youth generation spreading nationwide).",
          keywords: ["afrikaans", "black consciousness", "biko", "bantu education", "nationwide", "youth"],
        },
        {
          point: "Explains brutal state violence and media impact (police shooting children, Hector Pieterson photograph exposing brutality worldwide).",
          keywords: ["hector pieterson", "pieterson", "photograph", "police shot", "children", "shock"],
        },
        {
          point: "Explains stronger international measures (economic sanctions, disinvestment, arms embargo, cultural or sporting boycotts).",
          keywords: ["sanctions", "disinvestment", "embargo", "sporting", "boycotts", "isolation"],
        },
      ],
      commonError: "Describing only the events of 16 June 1976 without explaining the wider internal and international consequences.",
    },

    // Q25 — written (4 marks, challenge)
    {
      id: "exam-3-q25",
      kind: "written",
      topicId: "modern-protest-movements",
      guideRef: "comparing-protest-success",
      difficulty: "challenge",
      marks: 4,
      question:
        "'Moral courage alone rarely defeats an entrenched system; economic leverage and favourable timing are also crucial.' How far do you agree, using evidence from at least **two** historical movements you have studied?",
      hints: [
        "Acknowledge why moral courage and discipline matter (winning public sympathy and exposing state hypocrisy).",
        "Test the claim against Movement 1 (e.g. India: Satyagraha & khadi/salt boycotts + Britain's WWII bankruptcy and Attlee's election).",
        "Test the claim against Movement 2 (e.g. US Civil Rights: Birmingham/Selma + bus fare losses & Cold War image; OR Anti-Apartheid: township defiance + global sanctions & Cold War ending), then conclude clearly.",
      ],
      modelAnswer:
        "I largely agree that moral bravery is essential as a foundation, yet economic pressure and favourable timing usually decide when entrenched regimes finally yield. First, disciplined peaceful courage — such as Gandhi's 1930 Salt March or marchers enduring police dogs in Birmingham — exposed injustice and won wide moral sympathy. Second, in India, cloth boycotts hurt British textile exports, while WWII bankruptcy and Clement Attlee's 1945 Labour victory removed London's financial ability and will to govern. Third, in South Africa, decades of bravery inside townships had to combine with crippling international sanctions, foreign bank loan refusals, and the 1989 collapse of the Soviet Union before F.W. de Klerk agreed to negotiate. Therefore, moral discipline ignites resistance and legitimacy, but economic leverage and geopolitical timing convert protest into lasting legal victory.",
      markScheme: [
        {
          point: "Explains the vital role of moral courage/non-violence in exposing hypocrisy and winning public sympathy (with concrete example).",
          keywords: ["salt march", "birmingham", "sympathy", "legitimacy", "disciplined", "exposed"],
        },
        {
          point: "Analyses economic leverage and/or timing in Movement 1 (e.g. India: khadi/textiles + WWII debt/Attlee; OR US Civil Rights: bus fares + Cold War/LBJ).",
          keywords: ["textile", "attlee", "bankruptcy", "wwii", "fares", "cold war", "lbj"],
        },
        {
          point: "Analyses economic leverage and/or timing in Movement 2 (e.g. Anti-Apartheid: sanctions, disinvestment, debt crisis, 1989 Soviet collapse/de Klerk).",
          keywords: ["sanctions", "bank", "disinvestment", "soviet", "de klerk", "1989", "negotiate"],
        },
        {
          point: "Reaches a clear evaluative judgment weighing moral protest alongside economic and contextual pressures.",
          keywords: ["largely agree", "therefore", "foundation", "convert", "combine", "together"],
        },
      ],
      commonError: "Writing about only one protest movement when the question explicitly requires evidence from at least two.",
    },
  ],
};
