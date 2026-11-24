import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "us-civil-rights-m1",
    title: "MCQ Paper 1 — Jim Crow, Courts & Early Direct Action",
    questions: [
      {
        id: "us-civil-rights-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jim-crow-brown-v-board",
        question: "Which 1896 US Supreme Court ruling legally established the 'separate but equal' doctrine behind Southern Jim Crow laws?",
        options: [
          "Plessy v. Ferguson",
          "Brown v. Board of Education",
          "Browder v. Gayle",
          "Boynton v. Virginia",
        ],
        answerIndex: 0,
        hints: [
          "This 19th-century case involved segregated railway carriages in Louisiana.",
          "It stood as federal precedent for 58 years until 1954.",
        ],
        explanation:
          "In 1896, **Plessy v. Ferguson** upheld segregated facilities under the doctrine of 'separate but equal'. *Brown v. Board* (1954), *Browder v. Gayle* (1956), and *Boynton v. Virginia* (1960) all overturned forms of segregation decades later.",
      },
      {
        id: "us-civil-rights-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jim-crow-brown-v-board",
        question: "How did Southern states bypass the 15th Amendment to prevent most Black citizens from voting before 1965?",
        options: [
          "By banning all political parties across Southern states",
          "By imposing poll taxes and rigged literacy tests on voters",
          "By passing federal laws restricting voting to city residents",
          "By raising the legal voting age in the South to thirty",
        ],
        answerIndex: 1,
        hints: [
          "The barriers looked 'race-neutral' on paper so states could claim they obeyed the Constitution.",
        ],
        explanation:
          "Southern states used **poll taxes**, unfairly administered **literacy tests**, and intimidation to disenfranchise Black voters without mentioning race explicitly in state statutes. Voting was never limited to thirty-year-olds or city residents.",
      },
      {
        id: "us-civil-rights-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "jim-crow-brown-v-board",
        question: "Who led the NAACP legal team that won the unanimous 1954 ruling in Brown v. Board of Education?",
        options: [
          "Bayard Rustin",
          "Philip Randolph",
          "Thurgood Marshall",
          "James Farmer",
        ],
        answerIndex: 2,
        hints: [
          "He later became the first Black Justice on the US Supreme Court in 1967.",
        ],
        explanation:
          "**Thurgood Marshall** was chief counsel of the NAACP Legal Defense Fund and argued *Brown v. Board* (1954). Bayard Rustin and A. Philip Randolph organised the 1963 March on Washington, while James Farmer led CORE.",
      },
      {
        id: "us-civil-rights-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jim-crow-brown-v-board",
        question: "Why did school desegregation remain extremely slow across the Deep South during the decade after Brown v. Board (1954)?",
        options: [
          "The NAACP halted all legal cases after winning in Kansas",
          "The Supreme Court later reversed its decision in 1956",
          "Northern parents protested against federal school funding",
          "Brown II set no strict deadline, enabling Massive Resistance",
        ],
        answerIndex: 3,
        hints: [
          "Think about the vague wording used in the 1955 follow-up ruling (*Brown II*).",
          "Southern governors exploited a missing timetable to stall integration.",
        ],
        explanation:
          "In *Brown II* (1955), the Supreme Court ordered integration 'with all deliberate speed' without a binding deadline, allowing Southern states to organise **Massive Resistance** and delay integration for years. The Court never reversed *Brown*.",
      },
      {
        id: "us-civil-rights-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jim-crow-brown-v-board",
        question: "Why did President Dwight D. Eisenhower send 1,000 federal paratroopers to Little Rock Central High School in September 1957?",
        options: [
          "To enforce federal court authority against Governor Faubus",
          "To pass a sweeping new federal Voting Rights Act immediately",
          "To arrest NAACP lawyers campaigning in Arkansas schools",
          "To rebuild Central High School after an arson attack",
        ],
        answerIndex: 0,
        hints: [
          "Remember what Arkansas Governor Orval Faubus did with the state National Guard.",
          "Eisenhower acted to protect constitutional supremacy and America's Cold War reputation.",
        ],
        explanation:
          "Governor Orval Faubus used Arkansas National Guard troops to defy a federal desegregation order. Eisenhower deployed the **101st Airborne Division** to uphold federal court authority and stop international Cold War embarrassment.",
      },
      {
        id: "us-civil-rights-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jim-crow-brown-v-board",
        question: "What did Governor Faubus's decision to close all Little Rock public high schools in 1958–59 ('the Lost Year') reveal?",
        options: [
          "Federal troops permanently ended racism across Arkansas",
          "Court orders alone could not easily overcome state defiance",
          "White Southern parents strongly welcomed school integration",
          "The NAACP agreed to keep segregated schools indefinitely",
        ],
        answerIndex: 1,
        hints: [
          "Closing schools kept Black and white students out of class for a full academic year.",
          "Compare legal victory on paper with stubborn local resistance.",
        ],
        explanation:
          "Shutting every public high school in Little Rock showed how far segregationists would go to resist federal orders, proving that **court rulings alone** could not swiftly dismantle Jim Crow without broader federal laws and mass pressure.",
      },
      {
        id: "us-civil-rights-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "montgomery-direct-action",
        question: "How did the Montgomery Bus Boycott (1955–56) apply direct pressure on the city's white leadership?",
        options: [
          "Protesters blocked federal highways linking Alabama cities",
          "Activists organised armed guards around bus depots nightly",
          "Black riders withdrew fares for 381 days, crippling revenue",
          "Boycotters persuaded Congress to ban city bus companies",
        ],
        answerIndex: 2,
        hints: [
          "Black passengers made up roughly three-quarters of Montgomery's bus riders.",
        ],
        explanation:
          "Black citizens made up roughly **75% of bus riders** in Montgomery. Sustaining a disciplined **381-day boycott** through walking and carpools pushed the bus company toward bankruptcy while the NAACP won *Browder v. Gayle* in federal court.",
      },
      {
        id: "us-civil-rights-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "Which statement most accurately explains Rosa Parks's role in starting the 1955 Montgomery Bus Boycott?",
        options: [
          "She was an uninvolved passenger acting with no prior links",
          "She was appointed by President Eisenhower to test state laws",
          "She worked for the bus company to protest low driver wages",
          "She was an experienced NAACP secretary whose arrest rallied allies",
        ],
        answerIndex: 3,
        hints: [
          "Avoid the popular myth that she was simply too tired from work.",
          "Think about her connection to the NAACP and the Women's Political Council.",
        ],
        explanation:
          "**Rosa Parks** was a respected NAACP secretary trained in civil rights strategy. Her arrest gave Jo Ann Robinson's Women's Political Council and the newly formed Montgomery Improvement Association the respected test case they needed.",
      },
      {
        id: "us-civil-rights-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "What officially brought the 381-day Montgomery Bus Boycott to a victorious end in December 1956?",
        options: [
          "The Supreme Court ruling in Browder v. Gayle took effect",
          "The Civil Rights Act outlawed all segregated bus routes",
          "Governor Faubus signed a desegregation bill in Alabama",
          "The Montgomery bus company permanently closed all routes",
        ],
        answerIndex: 0,
        hints: [
          "Economic pressure kept the boycott alive, while a legal challenge worked through federal courts.",
          "Remember the year was 1956—eight years before the 1964 Civil Rights Act.",
        ],
        explanation:
          "In November 1956, the US Supreme Court upheld **Browder v. Gayle**, declaring Alabama's bus segregation unconstitutional; when the ruling took effect on **20 December 1956**, integrated buses rolled again.",
      },
      {
        id: "us-civil-rights-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "montgomery-direct-action",
        question: "Which youth-led civil rights organisation grew directly out of the 1960 Greensboro lunch-counter sit-ins?",
        options: [
          "The National Association for the Advancement of Colored People",
          "The Student Nonviolent Coordinating Committee (SNCC)",
          "The Southern Christian Leadership Conference (SCLC)",
          "The Nation of Islam led by Elijah Muhammad",
        ],
        answerIndex: 1,
        hints: [
          "Veteran organiser Ella Baker helped students form an independent group in April 1960.",
        ],
        explanation:
          "Following the **Greensboro Sit-Ins (Feb 1960)**, Ella Baker convened student activists at Shaw University to launch **SNCC** (Student Nonviolent Coordinating Committee). NAACP (1909) and SCLC (1957) already existed.",
      },
      {
        id: "us-civil-rights-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "Why did the 1960 sit-ins succeed in desegregating Woolworth's and other Southern lunch counters within months?",
        options: [
          "Federal troops guarded every restaurant in North Carolina",
          "Congress immediately outlawed segregated shops in 1960",
          "Occupied seats cut business profits and drew bad publicity",
          "White shopkeepers volunteered to integrate without protests",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens to a busy lunch counter when disciplined students fill every stool all day.",
          "Combine lost sales with national press attention.",
        ],
        explanation:
          "By politely occupying seats day after day across 55+ cities, sit-in protesters slashed store sales and brought embarrassing national publicity to chains like Woolworth's, persuading owners to desegregate to restore profits.",
      },
      {
        id: "us-civil-rights-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "What was the main strategic goal of the 1961 Freedom Rides organised by CORE and continued by SNCC?",
        options: [
          "To register Black voters across rural Mississippi counties",
          "To campaign against US involvement in the Vietnam War",
          "To build Black-owned bus companies in Northern cities",
          "To force federal enforcement of interstate bus desegregation",
        ],
        answerIndex: 3,
        hints: [
          "Supreme Court rulings already banned segregation on interstate buses, yet Southern terminals ignored them.",
          "CORE wanted to provoke federal authorities into enforcing existing federal law.",
        ],
        explanation:
          "Although *Morgan v. Virginia* (1946) and *Boynton v. Virginia* (1960) banned segregation in interstate transit, Deep South terminals ignored them. The **Freedom Rides (1961)** forced Attorney General Robert Kennedy and the **ICC** to enforce desegregation.",
      },
      {
        id: "us-civil-rights-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "What concrete federal action followed the mob firebombing and beatings of Freedom Riders in Alabama in May 1961?",
        options: [
          "The ICC issued strict rules desegregating interstate terminals",
          "President Kennedy immediately passed the Voting Rights Act",
          "Federal judges banned CORE from travelling across state lines",
          "Southern governors arrested every Klan member in Birmingham",
        ],
        answerIndex: 0,
        hints: [
          "Look at the federal agency that regulated buses and trains crossing state borders.",
          "The new regulations took effect in November 1961.",
        ],
        explanation:
          "After deploying federal marshals to protect riders in Montgomery, Attorney General Robert Kennedy petitioned the **Interstate Commerce Commission (ICC)**, which issued binding rules ending segregated signs in interstate bus terminals from November 1961.",
      },
      {
        id: "us-civil-rights-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "jim-crow-brown-v-board",
        question: "How did the 1955 murder of 14-year-old Emmett Till in Mississippi affect the emerging Civil Rights Movement?",
        options: [
          "It persuaded Mississippi juries to convict Klan leaders quickly",
          "His open-casket photos shocked Americans and galvanised activists",
          "It ended NAACP legal work across Southern courtrooms forever",
          "It led President Eisenhower to abolish Southern poll taxes",
        ],
        answerIndex: 1,
        hints: [
          "Consider what Emmett Till's mother, Mamie Till-Mobley, insisted on at his Chicago funeral.",
          "How did publishing those images in *Jet* magazine affect Black youth and northern audiences?",
        ],
        explanation:
          "Mamie Till-Mobley held an open-casket funeral so the world could see what racism had done; after an all-white jury acquitted his killers, the shock helped energise the generation of activists who led Montgomery and SNCC.",
      },
      {
        id: "us-civil-rights-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "montgomery-direct-action",
        question: "Why did civil rights activists deliberately pair legal challenges with non-violent direct action between 1955 and 1961?",
        options: [
          "Courts banned protesters from ever marching in public streets",
          "Direct action replaced all need for federal Supreme Court cases",
          "Protests enforced court rulings that Southern states ignored",
          "Economic boycotts were illegal unless ordered by state judges",
        ],
        answerIndex: 2,
        hints: [
          "Think about why *Brown* (1954) and *Boynton* (1960) changed very little on their own.",
          "How did Montgomery and the Freedom Rides connect street action with federal courts?",
        ],
        explanation:
          "Court verdicts like *Brown* (1954) and *Boynton* (1960) struck down segregation on paper, but Southern states defied them. **Direct action** created economic and public pressure that forced federal enforcement and local compliance.",
      },
    ],
  },
  {
    id: "us-civil-rights-m2",
    title: "MCQ Paper 2 — Birmingham, 1964–65 Laws & Black Power",
    questions: [
      {
        id: "us-civil-rights-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "montgomery-direct-action",
        question: "Why did television broadcasts from Birmingham, Alabama in May 1963 prove so damaging to segregationists?",
        options: [
          "They showed police using fire hoses and dogs on peaceful youth",
          "They revealed that Southern shops supported full integration",
          "They proved that Birmingham protesters carried illegal rifles",
          "They featured Governor Wallace endorsing the Civil Rights Bill",
        ],
        answerIndex: 0,
        hints: [
          "Recall Police Commissioner Eugene 'Bull' Connor's reaction to the Children's Crusade.",
        ],
        explanation:
          "Network TV broadcast **Bull Connor** turning high-pressure fire hoses and police dogs on peaceful schoolchildren, horrifying millions of Americans and persuading President Kennedy to propose sweeping civil rights legislation.",
      },
      {
        id: "us-civil-rights-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "In his 'Letter from Birmingham Jail' (April 1963), what key argument did Martin Luther King Jr. make to white clergy who urged him to 'wait'?",
        options: [
          "Courts should stop hearing segregation cases for five years",
          "Justice too long delayed is justice denied, justifying direct action",
          "Activists should abandon non-violence and form armed militias",
          "Protesters should obey every local segregation ordinance strictly",
        ],
        answerIndex: 1,
        hints: [
          "Moderate white ministers criticised MLK's marches as 'unwise and untimely'.",
          "How did MLK distinguish just laws from unjust segregation laws?",
        ],
        explanation:
          "MLK Jr. argued that 'wait' had almost always meant 'never' for Black Americans, and that citizens have a moral duty to peacefully disobey unjust segregation laws while openly accepting the legal penalty.",
      },
      {
        id: "us-civil-rights-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mlk-legislation-1964-1965",
        question: "What was the official full title and purpose of the 28 August 1963 rally where MLK Jr. delivered 'I Have a Dream'?",
        options: [
          "The National March Against Northern Housing Taxes",
          "The Southern Freedom Rally for Immediate Statehood",
          "The March on Washington for Jobs and Freedom",
          "The Selma Memorial March for Rural Land Reform",
        ],
        answerIndex: 2,
        hints: [
          "A. Philip Randolph and Bayard Rustin tied civil rights to economic opportunity as well as legal equality.",
        ],
        explanation:
          "About 250,000 people attended the **March on Washington for Jobs and Freedom** (28 August 1963), linking demands for federal civil rights legislation with fair employment and decent wages.",
      },
      {
        id: "us-civil-rights-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "Which major change did President Lyndon B. Johnson secure by signing the Civil Rights Act of 2 July 1964?",
        options: [
          "It abolished all state literacy tests across rural Southern counties",
          "It created free federal breakfast clinics in Northern city schools",
          "It replaced all state governors in the Deep South with judges",
          "It outlawed segregation in public places and job discrimination",
        ],
        answerIndex: 3,
        hints: [
          "Remember the distinction between 1964 (public spaces & employment) and 1965 (ballot access).",
          "Think of 'Whites Only' signs in restaurants, hotels, and theatres.",
        ],
        explanation:
          "The **Civil Rights Act (1964)** outlawed legal segregation in public accommodations (hotels, restaurants, theatres), banned employment discrimination, and empowered federal enforcement of school desegregation. Literacy tests were abolished later in 1965.",
      },
      {
        id: "us-civil-rights-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "Why did civil rights activists launch the Selma-to-Montgomery marches in March 1965 despite the 1964 Civil Rights Act?",
        options: [
          "Southern registrars still used literacy tests to block Black voters",
          "The 1964 Act applied only to Northern cities outside Alabama",
          "Supreme Court judges had cancelled the 1964 Act in early 1965",
          "Activists wanted to repeal federal desegregation of lunch counters",
        ],
        answerIndex: 0,
        hints: [
          "Check what percentage of Black adults were registered to vote in Dallas County (Selma) in early 1965.",
          "Which key democratic power had the 1964 statute failed to fully protect?",
        ],
        explanation:
          "The 1964 Act ended public segregation but left Southern **literacy tests** and local registrar obstruction intact; fewer than 2% of Black adults in Selma were registered, prompting the 1965 voting-rights campaign.",
      },
      {
        id: "us-civil-rights-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mlk-legislation-1964-1965",
        question: "What happened on 'Bloody Sunday' (7 March 1965) during the first Selma-to-Montgomery march?",
        options: [
          "President Johnson signed the Voting Rights Act in Montgomery",
          "Alabama state troopers beat peaceful marchers on Edmund Pettus Bridge",
          "Federal marshals escorted 25,000 demonstrators to the state capitol",
          "SNCC students staged a silent lunch-counter boycott in Selma",
        ],
        answerIndex: 1,
        hints: [
          "John Lewis was among roughly 600 marchers attacked in front of television cameras.",
        ],
        explanation:
          "On **7 March 1965**, Alabama state troopers attacked ~600 peaceful voting-rights marchers with clubs and tear gas on the **Edmund Pettus Bridge**. Televised nationwide, the brutality accelerated the **Voting Rights Act (1965)**.",
      },
      {
        id: "us-civil-rights-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "Which statistic best demonstrates the immediate impact of the Voting Rights Act of August 1965?",
        options: [
          "Black home ownership doubled across Chicago within six months",
          "Every Southern state elected a Black governor by November 1966",
          "Mississippi Black voter registration rose from ~7% to ~60% by 1967",
          "Unemployment in Watts fell to zero within one year of the law",
        ],
        answerIndex: 2,
        hints: [
          "Focus on what the Voting Rights Act specifically changed—electoral registration in the Deep South.",
          "Remember the dramatic leap in Mississippi between 1964 and 1967.",
        ],
        explanation:
          "By outlawing literacy tests and sending federal registrars, the **Voting Rights Act (1965)** raised Black voter registration in Mississippi from roughly **6.7% (1964) to 59.8% (1967)** and registered over 250,000 new Black voters by late 1965.",
      },
      {
        id: "us-civil-rights-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "malcolm-x-black-power",
        question: "Why did devastating urban riots erupt in Watts (Los Angeles, 1965) and Detroit (1967) even after the 1964 and 1965 Acts?",
        options: [
          "California and Michigan reintroduced Southern Jim Crow signs",
          "Northern Black residents opposed the end of Southern poll taxes",
          "The Supreme Court banned Black citizens from owning businesses",
          "Federal laws did not fix urban poverty, slums, or police brutality",
        ],
        answerIndex: 3,
        hints: [
          "Think about the difference between legal (*de jure*) segregation in the South and lived (*de facto*) inequality in Northern/Western cities.",
          "What triggered the Watts riot just five days after the Voting Rights Act?",
        ],
        explanation:
          "The 1964–65 laws dismantled legal Jim Crow in the South, but left **de facto** problems in Northern and Western ghettos untouched: chronic unemployment, poor housing, underfunded schools, and harsh policing.",
      },
      {
        id: "us-civil-rights-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "malcolm-x-black-power",
        question: "How did Malcolm X's early message with the Nation of Islam differ most sharply from Martin Luther King Jr.'s strategy?",
        options: [
          "He rejected integration and urged self-defence 'by any means necessary'",
          "He campaigned exclusively for federal court lawsuits in Kansas",
          "He urged Black Americans to vote faithfully for Southern governors",
          "He promoted interracial lunch-counter sit-ins across small towns",
        ],
        answerIndex: 0,
        hints: [
          "Contrast MLK's Christian non-violence and integration with Malcolm X's view of Black pride and self-protection.",
          "Recall his famous phrase regarding defending oneself against racist violence.",
        ],
        explanation:
          "As Nation of Islam spokesperson, **Malcolm X** argued that strict non-violence left Black people defenceless and urged pride, economic self-reliance, and self-defence **'by any means necessary'** rather than integration.",
      },
      {
        id: "us-civil-rights-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "malcolm-x-black-power",
        question: "How did Malcolm X's political outlook change after his 1964 pilgrimage (Hajj) to Mecca?",
        options: [
          "He stopped criticising racial injustice in Northern US cities",
          "He rejected racial hatred and welcomed multiracial solidarity",
          "He joined Southern segregationists to oppose federal voting laws",
          "He abandoned all concern for Black pride and African heritage",
        ],
        answerIndex: 1,
        hints: [
          "Think about what Malcolm X witnessed in Mecca when Muslims of every race worshipped together.",
          "Notice that he founded the Organization of Afro-American Unity after breaking with Elijah Muhammad.",
        ],
        explanation:
          "Witnessing multiracial brotherhood on the **Hajj (April 1964)** — weeks after breaking with the Nation of Islam — convinced Malcolm X to reject blanket hatred of white people and seek broader coalitions against racism before his 1965 assassination.",
      },
      {
        id: "us-civil-rights-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "malcolm-x-black-power",
        question: "Who popularised the slogan 'Black Power' during the June 1966 Meredith March Against Fear in Mississippi?",
        options: [
          "Thurgood Marshall",
          "Lyndon B. Johnson",
          "Stokely Carmichael",
          "Bayard Rustin",
        ],
        answerIndex: 2,
        hints: [
          "He was the newly elected chairman of SNCC in 1966 and later took the name Kwame Ture.",
        ],
        explanation:
          "SNCC chairman **Stokely Carmichael** popularised **'Black Power'** in June 1966, calling for independent Black political control, economic self-reliance, and cultural dignity.",
      },
      {
        id: "us-civil-rights-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "malcolm-x-black-power",
        question: "Which pairing accurately reflects the dual programme of the Black Panther Party founded in Oakland in 1966?",
        options: [
          "Federal Senate lobbying paired with Southern bus boycotts",
          "Silent church vigils paired with Supreme Court school lawsuits",
          "Strict pacifist marches paired with overseas trade embargoes",
          "Armed community police patrols paired with Free Breakfast clinics",
        ],
        answerIndex: 3,
        hints: [
          "Remember Huey Newton and Bobby Seale's Ten-Point Program.",
          "They combined visible self-defence with practical 'Survival Programs' for poor families.",
        ],
        explanation:
          "Founded by Huey P. Newton and Bobby Seale, the **Black Panthers** combined legal open-carry patrols monitoring police brutality with community **'Survival Programs'** such as Free Breakfast for Children and free health clinics.",
      },
      {
        id: "us-civil-rights-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "What was the main purpose of the FBI's secret COINTELPRO operations against Black Power groups in the late 1960s?",
        options: [
          "To infiltrate, divide, and disrupt militant Black organisations",
          "To fund Free Breakfast kitchens in Oakland public schools",
          "To protect SNCC voter registrars from Southern police raids",
          "To negotiate treaties between the Black Panthers and Congress",
        ],
        answerIndex: 0,
        hints: [
          "FBI Director J. Edgar Hoover viewed the Black Panthers as a major internal threat.",
          "Think about covert surveillance, informants, and efforts to provoke internal splits.",
        ],
        explanation:
          "Under J. Edgar Hoover, **COINTELPRO** used wiretaps, infiltrators, forged letters, and coordinated police raids to fracture and destroy the Black Panther Party and undermine civil rights leaders.",
      },
      {
        id: "us-civil-rights-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "Why did Dr. Martin Luther King Jr. launch the Poor People's Campaign shortly before his assassination in April 1968?",
        options: [
          "He believed the 1964 Civil Rights Act had been repealed by Congress",
          "He recognised that legal rights alone could not end deep poverty",
          "He wanted to replace the NAACP with a single rural farming union",
          "He decided to abandon voting-rights activism in Northern cities",
        ],
        answerIndex: 1,
        hints: [
          "Connect MLK's post-1965 work in Chicago and Memphis with economic inequality.",
          "Ask what good an integrated restaurant is if a family cannot afford a meal.",
        ],
        explanation:
          "By 1967–68, MLK Jr. recognised that abolishing legal segregation was only half the battle: economic justice, decent wages, and housing reform were essential to lift Black and poor Americans out of poverty.",
      },
      {
        id: "us-civil-rights-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "What did the 1968 Fair Housing Act (Civil Rights Act of 1968) ban, and what major challenge still remained?",
        options: [
          "It banned poll taxes, though Southern railways stayed segregated",
          "It banned school uniforms, though private colleges stayed closed",
          "It banned housing discrimination, though wealth gaps stayed wide",
          "It banned urban police forces, though federal courts stayed shut",
        ],
        answerIndex: 2,
        hints: [
          "Passed days after MLK's assassination in April 1968, this law targeted selling and renting homes.",
          "Compare outlawing discrimination on paper with reversing decades of unequal wealth and redlining.",
        ],
        explanation:
          "The **Fair Housing Act (April 1968)** prohibited racial discrimination in the sale or rental of housing, yet decades of unequal wealth, redlining, and residential segregation left deep *de facto* divides across American cities.",
      },
    ],
  },
  {
    id: "us-civil-rights-m3",
    title: "MCQ Paper 3 — Causation, Sources & Historical Judgements",
    questions: [
      {
        id: "us-civil-rights-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "Why did SCLC's 1963 Birmingham campaign succeed where its 1961–62 Albany, Georgia campaign had largely stalled?",
        options: [
          "Birmingham's safety commissioner used televised brutality",
          "Albany already had fully integrated schools before protesters came",
          "President Eisenhower sent paratroopers to occupy Birmingham shops",
          "Birmingham protesters abandoned boycotts to run in state elections",
        ],
        answerIndex: 0,
        hints: [
          "Compare Albany Police Chief Laurie Pritchett's calm mass arrests with Bull Connor's response in Birmingham.",
          "Which key ingredient turned Northern public opinion overnight?",
        ],
        explanation:
          "In Albany, Police Chief Laurie Pritchett made quiet arrests that gave TV cameras little drama. In **Birmingham**, **Bull Connor's** fire hoses and attack dogs provoked nationwide television outrage that forced JFK to act.",
      },
      {
        id: "us-civil-rights-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "jim-crow-brown-v-board",
        question: "A historian reads a 1957 speech by Arkansas Governor Orval Faubus claiming integration would cause 'chaos' and blaming 'outside agitators'. Why is this source STILL useful to a historian?",
        options: [
          "It proves that Black students secretly caused violence in schools",
          "It reveals the political arguments used to justify segregation",
          "It offers an objective statistical record of Arkansas school budgets",
          "It demonstrates that President Eisenhower opposed Brown v. Board",
        ],
        answerIndex: 1,
        hints: [
          "In Year 9 History, never reject a biased source as 'useless'—ask: useful *for what*?",
          "Consider what a segregationist governor's rhetoric reveals about Massive Resistance.",
        ],
        explanation:
          "Even though Faubus's speech is biased propaganda, it is highly useful for showing **how segregationist politicians framed resistance**—claiming to defend 'law and order' against 'outsiders' to rally white Southern voters.",
      },
      {
        id: "us-civil-rights-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "How did the Cold War rivalry with the Soviet Union indirectly help the US Civil Rights Movement between 1954 and 1965?",
        options: [
          "Soviet armies funded SNCC voter drives throughout Mississippi",
          "US presidents ignored Southern racism to focus solely on Europe",
          "Global coverage of US racism damaged America's democratic image",
          "The United Nations replaced Jim Crow courts with global tribunals",
        ],
        answerIndex: 2,
        hints: [
          "Think about how Moscow used photos of Little Rock (1957) and Birmingham (1963) in newly independent Asian and African nations.",
          "Why did American presidents worry about appearing hypocritical abroad?",
        ],
        explanation:
          "As the US competed with the USSR for allies in newly independent African and Asian nations, televised images of Little Rock, Birmingham, and Selma embarrassed Washington—pushing Eisenhower, JFK, and LBJ toward federal action.",
      },
      {
        id: "us-civil-rights-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "Which sequence lists four major Civil Rights milestones in the exact chronological order in which they happened?",
        options: [
          "Montgomery Boycott → Brown v. Board → Selma March → Sit-Ins",
          "Little Rock Nine → Greensboro Sit-Ins → Brown v. Board → Selma",
          "Civil Rights Act → Birmingham March → Freedom Rides → Brown",
          "Brown v. Board → Montgomery Boycott → Greensboro Sit-Ins → Selma",
        ],
        answerIndex: 3,
        hints: [
          "Check the dates: 1954, 1955–56, 1960, and 1965.",
          "Remember the legal breakthrough in education came first.",
        ],
        explanation:
          "The accurate chronological sequence is **Brown v. Board (1954)** → **Montgomery Bus Boycott (1955–56)** → **Greensboro Sit-Ins (1960)** → **Selma Marches (1965)**.",
      },
      {
        id: "us-civil-rights-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mlk-legislation-1964-1965",
        question: "Why do many historians reject a pure 'Great Man' explanation crediting Martin Luther King Jr. alone for civil rights legislation?",
        options: [
          "Grassroots women, students, and local groups drove key campaigns",
          "Martin Luther King Jr. played no significant part in Birmingham",
          "Federal laws were passed purely due to Supreme Court petitions",
          "Southern governors voluntarily ended Jim Crow before 1963",
        ],
        answerIndex: 0,
        hints: [
          "Think of Jo Ann Robinson, Ella Baker, the Greensboro Four, Freedom Riders, and Selma's local organisers.",
          "A balanced explanation keeps MLK's vital role while crediting wider grassroots organisation.",
        ],
        explanation:
          "While MLK Jr. was an extraordinary speaker and strategist, the movement depended on **grassroots organisers**—including Black women's networks (WPC), SNCC students, CORE riders, NAACP lawyers, and thousands of ordinary marchers.",
      },
      {
        id: "us-civil-rights-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "What do historians mean by the 'radical flank effect' when comparing Malcolm X and Black Power with MLK Jr.?",
        options: [
          "Militant protests permanently stopped Congress passing any laws",
          "Militant voices made white leaders likelier to deal with moderates",
          "Black Power groups merged directly into President Johnson's cabinet",
          "Non-violent marchers copied armed patrols during the 1963 March",
        ],
        answerIndex: 1,
        hints: [
          "Ask yourself: if white politicians feared growing militant anger in cities, how did that change their view of MLK's peaceful demands?",
          "Contrast negotiating with non-violent reformers versus facing wider unrest.",
        ],
        explanation:
          "The **radical flank effect** argues that assertive voices like Malcolm X and Black Power warned white politicians that ignoring peaceful reformers risked far deeper unrest—making compromise with moderates like MLK look more urgent.",
      },
      {
        id: "us-civil-rights-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "What crucial feature did the 1955–56 Montgomery Bus Boycott and the 1960 Greensboro Sit-Ins have in common?",
        options: [
          "Both were planned inside the White House by federal cabinet teams",
          "Both relied on armed volunteers patrolling city streets at night",
          "Both hit white-owned businesses financially to force negotiation",
          "Both aimed solely at repealing poll taxes in federal elections",
        ],
        answerIndex: 2,
        hints: [
          "Look at the economic pressure applied to Montgomery City Lines and Woolworth's department stores.",
          "Why did business owners push city leaders to compromise?",
        ],
        explanation:
          "Both campaigns used **economic leverage**—starving Montgomery's bus company of 75% of its fares and slashing Woolworth's lunch-counter revenue—to make maintaining segregation financially costly.",
      },
      {
        id: "us-civil-rights-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "Why was President Lyndon B. Johnson able to pass the 1964 Civil Rights Act after President Kennedy's bill had stalled in Congress?",
        options: [
          "Johnson cancelled all Southern Senate seats during the 1964 vote",
          "Southern senators unanimously backed immediate school integration",
          "The Supreme Court bypassed Congress and signed the bill directly",
          "Johnson combined post-assassination sympathy with Senate mastery",
        ],
        answerIndex: 3,
        hints: [
          "Remember LBJ's long prior career as Senate Majority Leader from Texas.",
          "How did he frame the bill after JFK's murder in November 1963?",
        ],
        explanation:
          "As a former Senate Majority Leader, **LBJ** framed the bill as a memorial to JFK and used unmatched legislative bargaining to assemble the bipartisan two-thirds vote needed to break a 54-day Southern filibuster.",
      },
      {
        id: "us-civil-rights-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "Why is the 1968 Kerner Commission report especially strong evidence that Civil Rights progress remained incomplete?",
        options: [
          "It was a presidential inquiry admitting stark racial inequality",
          "It was a Black Panther pamphlet calling for immediate revolution",
          "It was a segregationist brochure defending Southern poll taxes",
          "It was a foreign newspaper article written without US statistics",
        ],
        answerIndex: 0,
        hints: [
          "Apply NOP (Origin & Purpose): who appointed the Kerner Commission in 1967?",
          "Why does an official government admission carry strong historical weight?",
        ],
        explanation:
          "Appointed by President Johnson himself, the **Kerner Commission (1968)** carried official authority when it concluded white racism and urban poverty were splitting America into 'two societies—separate and unequal.'",
      },
      {
        id: "us-civil-rights-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mlk-legislation-1964-1965",
        question: "How did Freedom Summer (1964) in Mississippi expose the extreme danger faced by grassroots voting-rights activists?",
        options: [
          "Mississippi closed every university campus throughout the summer",
          "Three civil rights workers were murdered by the KKK near Neshoba",
          "Federal marshals arrested SNCC volunteers for holding peaceful rallies",
          "Black churches refused to host any voter-registration workshops",
        ],
        answerIndex: 1,
        hints: [
          "Recall the names James Chaney, Andrew Goodman, and Michael Schwerner.",
          "Their disappearance sparked a massive FBI search and national shock.",
        ],
        explanation:
          "During **Freedom Summer (1964)**, KKK members (assisted by local police) murdered activists **James Chaney, Andrew Goodman, and Michael Schwerner**, showing why federal protection was vital for Black voters.",
      },
      {
        id: "us-civil-rights-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "montgomery-direct-action",
        question: "Which detail best explains how Mahatma Gandhi's Indian independence struggle influenced the US Civil Rights Movement?",
        options: [
          "US activists adopted armed guerrilla raids across rural states",
          "US courts borrowed British parliamentary statutes on school fees",
          "Leaders like MLK adapted non-violent civil disobedience tactics",
          "American boycotters focused solely on making home-spun textiles",
        ],
        answerIndex: 2,
        hints: [
          "Connect Gandhi's *satyagraha* (Salt March & boycotts) with Bayard Rustin and MLK Jr.",
          "Think about exposing moral hypocrisy through disciplined peaceful protest.",
        ],
        explanation:
          "Advised by **Bayard Rustin** and inspired by Gandhi's *satyagraha* (even visiting India in 1959), **MLK Jr.** adapted boycotts, marches, and disciplined non-violent civil disobedience to expose Jim Crow's moral hypocrisy.",
      },
      {
        id: "us-civil-rights-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "Which historical judgement best balances the achievements and limits of the US Civil Rights Movement by 1968?",
        options: [
          "It achieved total economic equality while leaving Jim Crow intact",
          "It failed completely in both Southern law and Northern politics",
          "It solved Northern urban poverty before tackling Southern voting",
          "It dismantled legal segregation yet left deep economic divides",
        ],
        answerIndex: 3,
        hints: [
          "Separate *de jure* legal/political gains (1964, 1965, 1968) from *de facto* economic and housing realities.",
          "Avoid extreme 'total success' or 'total failure' claims.",
        ],
        explanation:
          "By 1968, the movement had scored monumental **legal and political** victories (ending *de jure* Jim Crow and securing Southern ballot access), yet **economic and housing** gaps (*de facto* inequality) remained deeply entrenched.",
      },
      {
        id: "us-civil-rights-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "jim-crow-brown-v-board",
        question: "Why did NAACP lawyers cite psychologists Kenneth and Mamie Clark's 'doll tests' during Brown v. Board of Education (1954)?",
        options: [
          "To prove segregation damaged Black children's sense of self-worth",
          "To prove segregated schools cost Southern states too much tax",
          "To argue that bus routes in Topeka were geographically too long",
          "To demonstrate that white parents preferred separate classrooms",
        ],
        answerIndex: 0,
        hints: [
          "Remember Chief Justice Warren's ruling that separate schools are *inherently* unequal.",
          "Even if buildings had identical budgets, what harm did forced separation cause children?",
        ],
        explanation:
          "The Clarks' doll experiments showed that legally enforced segregation implanted a sense of inferiority in Black children—helping convince the Supreme Court that separate schools could **never** be truly equal.",
      },
      {
        id: "us-civil-rights-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "malcolm-x-black-power",
        question: "What was the symbolic significance of Tommie Smith and John Carlos raising gloved fists at the 1968 Mexico City Olympics?",
        options: [
          "It celebrated the immediate end of poverty across US inner cities",
          "It broadcast Black Power and human-rights demands to global TV",
          "It protested against President Eisenhower's Little Rock decision",
          "It announced the merger of SNCC and the US Olympic Committee",
        ],
        answerIndex: 1,
        hints: [
          "Think about how many millions of viewers worldwide watched the Olympic medal ceremony.",
          "They stood barefoot in black socks to represent Black poverty while raising fists for pride and human rights.",
        ],
        explanation:
          "By raising black-gloved fists during the US national anthem on a global Olympic broadcast, Smith and Carlos projected **Black Power** pride and ongoing American racial injustice to hundreds of millions worldwide.",
      },
      {
        id: "us-civil-rights-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mlk-legislation-1964-1965",
        question: "Why did voting rights prove more transformative in the long run than desegregating lunch counters alone?",
        options: [
          "Lunch counters immediately reopened as whites-only clubs in 1966",
          "Voting immediately doubled every Black worker's hourly pay rate",
          "Ballots enabled Black citizens to elect officials and reshape power",
          "The Voting Rights Act banned all federal income taxes in Alabama",
        ],
        answerIndex: 2,
        hints: [
          "Think about who appointed Southern sheriffs, school boards, and local judges.",
          "Once Black citizens voted in large numbers, how did politicians have to treat them?",
        ],
        explanation:
          "Desegregating lunch counters ended daily indignities, but **the ballot** redistributed political power—allowing Black citizens to vote out segregationist sheriffs and elect thousands of Black local, state, and federal officials.",
      },
    ],
  },
];
