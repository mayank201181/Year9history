import type { Drill, DrillItem, Rng } from "./types.ts";

interface Milestone {
  label: string;
  year: number;
  note: string;
}

const MILESTONES: Milestone[] = [
  { label: "Plessy v. Ferguson ('separate but equal')", year: 1896, note: "1896 Supreme Court ruling legalising Jim Crow." },
  { label: "Founding of the NAACP", year: 1909, note: "1909 launch of the National Association for the Advancement of Colored People." },
  { label: "Brown v. Board of Education", year: 1954, note: "May 1954 unanimous 9–0 ruling overturning segregated public schools." },
  { label: "Start of the Montgomery Bus Boycott", year: 1955, note: "December 1955 boycott launched after Rosa Parks's arrest." },
  { label: "Browder v. Gayle desegregating Montgomery buses", year: 1956, note: "Late 1956 Supreme Court victory ending the 381-day boycott." },
  { label: "Little Rock Nine crisis", year: 1957, note: "September 1957 deployment of the 101st Airborne to Central High." },
  { label: "Greensboro Woolworth's Sit-Ins", year: 1960, note: "February 1960 student sit-ins that sparked SNCC." },
  { label: "CORE & SNCC Freedom Rides", year: 1961, note: "May 1961 interstate bus campaign forcing ICC desegregation rules." },
  { label: "Birmingham Campaign & March on Washington", year: 1963, note: "Spring–August 1963 televised protests and MLK's 'I Have a Dream'." },
  { label: "Civil Rights Act & Freedom Summer", year: 1964, note: "July 1964 federal ban on public segregation and job discrimination." },
  { label: "Selma Marches & Voting Rights Act", year: 1965, note: "March–August 1965 Bloody Sunday and federal ban on literacy tests." },
  { label: "Stokely Carmichael's 'Black Power' & founding of the Black Panthers", year: 1966, note: "1966 turn toward self-determination and Oakland survival programmes." },
  { label: "Detroit & Newark urban riots", year: 1967, note: "Summer 1967 urban uprisings investigated by the Kerner Commission." },
  { label: "Assassination of MLK Jr. & Fair Housing Act", year: 1968, note: "April 1968 turning point closing the core 1954–68 legislative era." },
];

const CORE_MILESTONES = MILESTONES.slice(2); // 1954–1968 (12 events)

interface CampaignCard {
  answer: string;
  accept: string[];
  clues: [string, string, string];
  note: string;
}

const CAMPAIGN_CARDS: CampaignCard[] = [
  {
    answer: "NAACP",
    accept: ["NAACP", "National Association for the Advancement of Colored People"],
    clues: [
      "Which civil rights organisation funded Thurgood Marshall's courtroom assault on segregated education?",
      "Which organisation founded in 1909 employed Rosa Parks as a local secretary and led constitutional lawsuits against Jim Crow?",
      "Which legal-action group brought *Brown v. Board of Education* (1954) to the US Supreme Court?",
    ],
    note: "The **NAACP** spearheaded constitutional court challenges against Jim Crow.",
  },
  {
    answer: "Little Rock Nine",
    accept: ["Little Rock Nine", "The Little Rock Nine", "Little Rock 9"],
    clues: [
      "What group of nine Black teenagers faced Governor Orval Faubus's National Guard at Central High School in 1957?",
      "Which group of students—including Elizabeth Eckford—required 1,000 soldiers of the 101st Airborne Division to attend classes in Arkansas?",
      "Which 1957 school-integration pioneers exposed Massive Resistance on global television before Arkansas closed its high schools in 1958?",
    ],
    note: "The **Little Rock Nine** integrated Central High School under federal protection in September 1957.",
  },
  {
    answer: "Montgomery Bus Boycott",
    accept: ["Montgomery Bus Boycott", "The Montgomery Bus Boycott", "Montgomery Boycott"],
    clues: [
      "Which 381-day Alabama protest combined a 300-car volunteer pool with a 75% loss of bus passengers?",
      "Which 1955–56 campaign propelled 26-year-old Dr. Martin Luther King Jr. into national leadership?",
      "Which city-wide boycott began after Rosa Parks's arrest and ended when *Browder v. Gayle* took effect?",
    ],
    note: "The **Montgomery Bus Boycott (1955–56)** proved disciplined economic pressure could cripple segregation.",
  },
  {
    answer: "Women's Political Council",
    accept: ["Women's Political Council", "Womens Political Council", "WPC"],
    clues: [
      "Which Montgomery organisation led by Jo Ann Robinson printed tens of thousands of flyers overnight to launch the 1955 bus boycott?",
      "Which Black women's civic group had been planning a bus boycott in Montgomery long before December 1955?",
      "Which grassroots organisation (abbreviated WPC) mobilised Montgomery's Black community hours after Rosa Parks was jailed?",
    ],
    note: "Jo Ann Robinson and the **Women's Political Council (WPC)** ignited the Montgomery Bus Boycott overnight.",
  },
  {
    answer: "SCLC",
    accept: ["SCLC", "Southern Christian Leadership Conference"],
    clues: [
      "Which church-based civil rights organisation was co-founded by Martin Luther King Jr. in 1957 to coordinate Southern protests?",
      "Which organisation planned the 1963 Birmingham Campaign ('Project C') and the 1965 Selma campaign?",
      "Which non-violent coalition of Southern ministers (four-letter acronym) grew out of the Montgomery Bus Boycott?",
    ],
    note: "The **SCLC** (Southern Christian Leadership Conference) coordinated church-led non-violent direct action.",
  },
  {
    answer: "Greensboro Sit-Ins",
    accept: ["Greensboro Sit-Ins", "Greensboro Sit Ins", "Greensboro Sit-In", "Greensboro"],
    clues: [
      "Which February 1960 protest began when four Black freshmen sat peacefully at a whites-only Woolworth's lunch counter?",
      "Which North Carolina student campaign spread to over 55 cities in 13 states and forced Woolworth's to desegregate?",
      "Which 1960 lunch-counter protest directly inspired the creation of SNCC two months later?",
    ],
    note: "The **Greensboro Sit-Ins (1960)** put college students at the cutting edge of non-violent direct action.",
  },
  {
    answer: "SNCC",
    accept: ["SNCC", "Student Nonviolent Coordinating Committee", "Student Non-Violent Coordinating Committee"],
    clues: [
      "Which youth-led organisation did Ella Baker help launch at Shaw University in April 1960?",
      "Which student civil rights group rescued the 1961 Freedom Rides, led 1964 Freedom Summer, and was later chaired by Stokely Carmichael?",
      "Which four-letter student committee trained young volunteers in non-violent discipline across the rural Deep South?",
    ],
    note: "**SNCC** (Student Nonviolent Coordinating Committee) brought grassroots youth energy to sit-ins and voter drives.",
  },
  {
    answer: "CORE",
    accept: ["CORE", "Congress of Racial Equality"],
    clues: [
      "Which interracial direct-action group led by James Farmer launched the 1961 Freedom Rides?",
      "Which four-letter civil rights organisation pioneered Gandhian sit-ins in the 1940s and sent integrated buses into Alabama in May 1961?",
      "Which organisation partnered with SNCC during the 1961 Freedom Rides and 1964 Mississippi Freedom Summer?",
    ],
    note: "**CORE** (Congress of Racial Equality) launched the 1961 Freedom Rides to test federal transit rulings.",
  },
  {
    answer: "Freedom Rides",
    accept: ["Freedom Rides", "The Freedom Rides", "Freedom Riders"],
    clues: [
      "Which May 1961 campaign tested Southern compliance with federal bans on segregated interstate buses and terminals?",
      "Which protest saw an interstate bus firebombed in Anniston, Alabama and forced the ICC to outlaw segregated bus stations?",
      "Which interracial bus journey pushed Attorney General Robert F. Kennedy to send federal marshals to Montgomery?",
    ],
    note: "The **1961 Freedom Rides** compelled the Interstate Commerce Commission (ICC) to enforce desegregation.",
  },
  {
    answer: "Birmingham Campaign",
    accept: ["Birmingham Campaign", "Birmingham", "Project C", "Children's Crusade"],
    clues: [
      "Which spring 1963 Alabama protest saw Bull Connor turn fire hoses and police dogs on peaceful marchers on national TV?",
      "Which SCLC campaign ('Project C') produced MLK's *Letter from Birmingham Jail* and pushed JFK to propose a Civil Rights Bill?",
      "Which May 1963 protest included the 'Children's Crusade' confronting segregation in America's most fiercely segregated city?",
    ],
    note: "The **Birmingham Campaign (1963)** used televised moral contrast to trigger JFK's Civil Rights Bill.",
  },
  {
    answer: "March on Washington",
    accept: ["March on Washington", "The March on Washington", "March on Washington for Jobs and Freedom"],
    clues: [
      "Which 28 August 1963 rally organised by A. Philip Randolph and Bayard Rustin drew ~250,000 people to the Lincoln Memorial?",
      "At which landmark 1963 demonstration did Dr. Martin Luther King Jr. deliver his 'I Have a Dream' speech?",
      "Which massive interracial rally demanded both federal civil rights legislation and economic justice ('Jobs and Freedom') in 1963?",
    ],
    note: "The **March on Washington (1963)** unified ~250,000 citizens behind federal civil rights legislation.",
  },
  {
    answer: "Selma Marches",
    accept: ["Selma Marches", "Selma", "Selma to Montgomery", "Selma-to-Montgomery", "Bloody Sunday"],
    clues: [
      "Which March 1965 Alabama voting-rights campaign included 'Bloody Sunday' on the Edmund Pettus Bridge?",
      "Which 54-mile march led by John Lewis, Hosea Williams, and MLK Jr. directly triggered the Voting Rights Act of 1965?",
      "Which televised 1965 confrontation prompted President Johnson to address Congress declaring 'We shall overcome'?",
    ],
    note: "The **Selma-to-Montgomery Marches (1965)** exposed voting brutality and drove passage of the Voting Rights Act.",
  },
];

interface StateVoterStat {
  state: string;
  beforePct: number; // 1964/65 rounded clean integer % for exact county calculations
  afterPct: number; // 1967 rounded clean integer %
  exactNote: string;
}

const VOTER_STATS: StateVoterStat[] = [
  { state: "Mississippi", beforePct: 7, afterPct: 60, exactNote: "Mississippi jumped from ~6.7% (1964) to ~59.8% (1967)." },
  { state: "Alabama", beforePct: 19, afterPct: 52, exactNote: "Alabama rose from ~19.3% (1965) to ~51.6% (1967)." },
  { state: "Georgia", beforePct: 27, afterPct: 53, exactNote: "Georgia rose from ~27.4% (1965) to ~52.6% (1967)." },
  { state: "Louisiana", beforePct: 32, afterPct: 59, exactNote: "Louisiana climbed from ~31.6% (1965) to ~58.9% (1967)." },
  { state: "South Carolina", beforePct: 37, afterPct: 51, exactNote: "South Carolina increased from ~37.3% (1965) to ~51.2% (1967)." },
  { state: "Virginia", beforePct: 38, afterPct: 56, exactNote: "Virginia grew from ~38.3% (1965) to ~55.6% (1967)." },
];

const COUNTY_POPULATIONS = [1000, 2000, 3000, 4000, 5000, 6000, 8000, 9000, 10000, 12000, 15000, 20000];

interface IdeologyPrompt {
  prompt: string;
  answer: string;
  accept: string[];
  hint: string;
  explanation: string;
}

const IDEOLOGY_TIER1: IdeologyPrompt[] = [
  { prompt: "Which leader declared Black Americans should defend themselves 'by any means necessary' while serving as Nation of Islam spokesperson?", answer: "Malcolm X", accept: ["Malcolm X", "El-Hajj Malik El-Shabazz"], hint: "He broke with the NOI after his 1964 Hajj to Mecca.", explanation: "**Malcolm X** championed Black pride, self-reliance, and self-defence 'by any means necessary'." },
  { prompt: "Which SNCC chairman popularised the slogan 'Black Power' during the June 1966 Meredith March in Mississippi?", answer: "Stokely Carmichael", accept: ["Stokely Carmichael", "Carmichael", "Kwame Ture"], hint: "He later adopted the name Kwame Ture.", explanation: "**Stokely Carmichael** popularised 'Black Power' in June 1966." },
  { prompt: "Which militant Oakland organisation founded in October 1966 published a Ten-Point Program and ran Free Breakfast for Children clinics?", answer: "Black Panther Party", accept: ["Black Panther Party", "Black Panthers", "The Black Panthers"], hint: "Co-founded by Huey P. Newton and Bobby Seale.", explanation: "The **Black Panther Party** combined community policing patrols with vital 'Survival Programs'." },
  { prompt: "Which federal law signed on 2 July 1964 outlawed segregation in public accommodations and discrimination in employment?", answer: "Civil Rights Act", accept: ["Civil Rights Act", "Civil Rights Act of 1964", "1964 Civil Rights Act"], hint: "Remember: 64 = Public Spaces & Jobs, 65 = Ballot Box.", explanation: "The **Civil Rights Act (1964)** dismantled legal Jim Crow in public facilities and workplaces." },
  { prompt: "Which federal law signed on 6 August 1965 outlawed voter literacy tests and deployed federal registrars across the South?", answer: "Voting Rights Act", accept: ["Voting Rights Act", "Voting Rights Act of 1965", "1965 Voting Rights Act"], hint: "Passed five months after Bloody Sunday in Selma.", explanation: "The **Voting Rights Act (1965)** secured ballot access and transformed Southern politics." },
  { prompt: "Which 1968 federal statute—passed days after MLK's assassination—outlawed racial discrimination in selling or renting homes?", answer: "Fair Housing Act", accept: ["Fair Housing Act", "Civil Rights Act of 1968", "1968 Fair Housing Act"], hint: "Also known as the Civil Rights Act of 1968.", explanation: "The **Fair Housing Act (April 1968)** targeted residential discrimination." },
  { prompt: "Which secret FBI programme led by J. Edgar Hoover infiltrated and disrupted the Black Panthers and civil rights groups?", answer: "COINTELPRO", accept: ["COINTELPRO"], hint: "Short for Counter Intelligence Program.", explanation: "**COINTELPRO** used wiretaps, informants, and covert raids to weaken Black Power groups." },
  { prompt: "Which 1968 presidential inquiry warned that America was moving toward 'two societies, one black, one white—separate and unequal'?", answer: "Kerner Commission", accept: ["Kerner Commission", "Kerner Report", "Kerner"], hint: "Appointed by LBJ to investigate the 1967 urban riots.", explanation: "The **Kerner Commission** linked urban riots to white racism, poverty, and police hostility." },
  { prompt: "Which Los Angeles district saw a six-day urban uprising in August 1965, just five days after the Voting Rights Act became law?", answer: "Watts", accept: ["Watts", "Watts, Los Angeles"], hint: "A five-letter neighbourhood in south-central Los Angeles.", explanation: "The **Watts** uprising showed that Southern legal victories did not solve urban ghetto poverty." },
  { prompt: "Which campaign did Dr. Martin Luther King Jr. launch in 1967–68 to demand jobs, fair wages, and an end to poverty for all races?", answer: "Poor People's Campaign", accept: ["Poor People's Campaign", "Poor Peoples Campaign"], hint: "It showed MLK pivoting from legal desegregation to economic justice.", explanation: "MLK's **Poor People's Campaign** sought to unite poor Americans of every race for economic rights." },
  { prompt: "Which Islamic pilgrimage in 1964 transformed Malcolm X's outlook toward multiracial solidarity against racism?", answer: "Hajj", accept: ["Hajj", "Pilgrimage to Mecca", "Mecca"], hint: "A four-letter Arabic term for the pilgrimage to Mecca.", explanation: "During the **Hajj** to Mecca, seeing Muslims of all races worship together reshaped Malcolm X's views." },
  { prompt: "What term describes segregation enforced by custom, housing poverty, and job discrimination rather than written law?", answer: "de facto", accept: ["de facto", "de facto segregation"], hint: "Contrast with *de jure* ('by law').", explanation: "**De facto** segregation persisted across Northern and Western cities long after Jim Crow laws fell." },
  { prompt: "What term describes segregation written explicitly into state and local statutes, as under Southern Jim Crow?", answer: "de jure", accept: ["de jure", "de jure segregation"], hint: "Latin for 'by law'—dismantled by the 1964 Civil Rights Act.", explanation: "**De jure** segregation was legally abolished by federal courts and the 1964–65 statutes." },
  { prompt: "Who co-founded the Black Panther Party alongside Bobby Seale in Oakland, California in October 1966?", answer: "Huey P. Newton", accept: ["Huey P. Newton", "Huey Newton", "Newton"], hint: "First name Huey, surname N___.", explanation: "**Huey P. Newton** and Bobby Seale drafted the Black Panther Ten-Point Program." },
  { prompt: "Which US President broke a 54-day Senate filibuster to sign both the 1964 Civil Rights Act and 1965 Voting Rights Act?", answer: "Lyndon B. Johnson", accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson"], hint: "Former Senate Majority Leader from Texas.", explanation: "President **Lyndon B. Johnson (LBJ)** turned grassroots protest pressure into binding federal law." },
];

const PERSPECTIVE_SPEAKERS: Array<{
  speaker: string;
  accept: string[];
  quotes: string[];
  rationale: string;
}> = [
  {
    speaker: "Martin Luther King Jr.",
    accept: ["Martin Luther King Jr.", "Martin Luther King Jr", "Martin Luther King", "MLK", "MLK Jr", "King"],
    quotes: [
      "\"Non-violent direct action seeks to create such a crisis that a community which has constantly refused to negotiate is forced to confront the issue.\"",
      "\"Justice too long delayed is justice denied; we cannot obey unjust Jim Crow statutes while waiting forever.\"",
      "\"What good is having the right to sit at an integrated lunch counter if a family cannot afford a hamburger?\"",
      "\"We must build interracial coalitions and appeal to America's conscience so federal laws guarantee equal citizenship.\"",
      "\"By refusing to strike back under fire hoses and batons, we expose the hidden violence of segregation to every television viewer.\"",
    ],
    rationale: "Reflects **Martin Luther King Jr.**'s blend of Gandhian non-violence, moral appeal, and later economic justice.",
  },
  {
    speaker: "Malcolm X",
    accept: ["Malcolm X", "El-Hajj Malik El-Shabazz"],
    quotes: [
      "\"Nobody can give you freedom or equality—if you are attacked by racist mobs, defend yourself by any means necessary.\"",
      "\"Why beg for acceptance in white institutions when Black communities should build their own pride and economic self-reliance?\"",
      "\"The 1963 rally at the Lincoln Memorial was diluted by white politicians into a harmless 'Farce on Washington'.\"",
      "\"Watching Muslims of every skin colour pray side by side in Mecca proved that racism—not white people as a race—is the real enemy.\"",
      "\"Ballots in the South mean little unless Black Americans also challenge Northern ghettos and frame racism as a global human-rights issue.\"",
    ],
    rationale: "Reflects **Malcolm X**'s self-defence, pride, Nation of Islam critique, and post-1964 internationalism.",
  },
  {
    speaker: "Stokely Carmichael",
    accept: ["Stokely Carmichael", "Carmichael", "Kwame Ture"],
    quotes: [
      "\"We have been saying 'freedom' for six years and we ain't got nothin'—what we gonna start saying now is Black Power!\"",
      "\"After years of SNCC workers being beaten and murdered, Black communities must lead their own political organisations independently.\"",
      "\"Integration alone should not mean absorbing Black identity; 'Black is Beautiful' means pride in our own culture and power.\"",
      "\"In counties where Black citizens form the majority, independent Black political control—not begging white liberals—is the goal.\"",
    ],
    rationale: "Reflects **Stokely Carmichael**'s 1966 SNCC pivot to Black Power, pride, and independent political control.",
  },
  {
    speaker: "Black Panther Party",
    accept: ["Black Panther Party", "Black Panthers", "The Black Panthers", "Panthers"],
    quotes: [
      "\"Our Ten-Point Program demands full employment, decent housing, fair trials by juries of our peers, and an immediate end to police brutality.\"",
      "\"Under California open-carry law, our community patrols legally monitor police stops to deter unlawful beatings in Oakland.\"",
      "\"Revolutionary action starts with survival: our Free Breakfast for Children programme feeds thousands of hungry pupils before school.\"",
      "\"FBI COINTELPRO agents target our free health clinics because serving the poor wins our movement deep community trust.\"",
    ],
    rationale: "Reflects the **Black Panther Party**'s Ten-Point Program, open-carry patrols, and Oakland survival programmes.",
  },
  {
    speaker: "Thurgood Marshall",
    accept: ["Thurgood Marshall", "Marshall", "NAACP"],
    quotes: [
      "\"Fighting county by county for equal school budgets would take a century—we must prove segregation itself violates the 14th Amendment.\"",
      "\"The Clark doll tests prove legally enforced separation harms Black children's self-esteem, making 'separate but equal' impossible.\"",
      "\"By winning *Brown v. Board* and *Browder v. Gayle* in federal court, we strip Jim Crow of its constitutional shield.\"",
      "\"Court victories cannot change hearts overnight, yet without overturning *Plessy v. Ferguson*, street protesters would lack federal law on their side.\"",
    ],
    rationale: "Reflects **Thurgood Marshall** and the NAACP's constitutional litigation strategy.",
  },
  {
    speaker: "Lyndon B. Johnson",
    accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson"],
    quotes: [
      "\"No memorial could more eloquently honour President Kennedy than the earliest possible passage of the Civil Rights Bill.\"",
      "\"After watching Alabama troopers club peaceful citizens on the Edmund Pettus Bridge, I tell Congress tonight: we shall overcome.\"",
      "\"Breaking a 54-day Southern filibuster took every Senate bargaining skill I learned over thirty years in Washington.\"",
      "\"We have abolished Jim Crow by statute, yet signing the Voting Rights Act may cost my party the white South for a generation.\"",
    ],
    rationale: "Reflects **President Lyndon B. Johnson**'s legislative leadership behind the 1964 and 1965 Acts.",
  },
];

export const drills: Drill[] = [
  {
    id: "us-civil-rights.chronology-gaps",
    topicId: "us-civil-rights",
    title: "Civil Rights Chronology & Milestone Spans",
    level: 1,
    guideRef: "jim-crow-brown-v-board",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const pool = CORE_MILESTONES;
        const idxA = rng.int(0, pool.length - 2);
        const idxB = rng.int(idxA + 1, pool.length - 1);
        const a = pool[idxA];
        const b = pool[idxB];
        const gap = b.year - a.year;
        const giveFirst = rng.bool();
        if (giveFirst) {
          return {
            prompt: `**${a.label}** took place in **${a.year}**. How many years later did **${b.label}** occur?`,
            answer: { type: "number", value: gap, display: `${gap} years` },
            hint: `Recall the year of ${b.label}, then subtract ${a.year}.`,
            solution: [
              `${a.label}: **${a.year}** (${a.note})`,
              `${b.label}: **${b.year}** (${b.note})`,
              `Gap = ${b.year} − ${a.year} = **${gap} years**.`,
            ],
          };
        }
        return {
          prompt: `**${b.label}** took place in **${b.year}**. How many years earlier did **${a.label}** occur?`,
          answer: { type: "number", value: gap, display: `${gap} years` },
          hint: `Recall the year of ${a.label}, then subtract it from ${b.year}.`,
          solution: [
            `${a.label}: **${a.year}** (${a.note})`,
            `${b.label}: **${b.year}** (${b.note})`,
            `Gap = ${b.year} − ${a.year} = **${gap} years**.`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.shuffle(MILESTONES).slice(0, 2);
        const [m1, m2] = pair;
        const earlier = m1.year < m2.year ? m1 : m2;
        const later = m1.year < m2.year ? m2 : m1;
        const askGap = rng.bool();
        if (askGap) {
          const gap = later.year - earlier.year;
          return {
            prompt: `How many years elapsed between **${m1.label}** and **${m2.label}**?`,
            answer: { type: "number", value: gap, display: `${gap} years` },
            hint: `Recall the dates of both events (one was in ${earlier.year < 1950 ? "the pre-1950 era" : "1954–68"}) and find the difference.`,
            solution: [
              `Earlier event: **${earlier.label}** (${earlier.year}).`,
              `Later event: **${later.label}** (${later.year}).`,
              `Elapsed time = ${later.year} − ${earlier.year} = **${gap} years**.`,
            ],
          };
        }
        return {
          prompt: `Which of these two milestones happened **earlier**: **${m1.label}** or **${m2.label}**? Type the **year** of the earlier event.`,
          answer: { type: "number", value: earlier.year, display: `${earlier.year}` },
          traps: [
            {
              spec: { type: "number", value: later.year },
              feedback: `${later.year} was ${later.label}, which came ${later.year - earlier.year} years *after* ${earlier.label}.`,
            },
          ],
          hint: `Place both events on the 1896–1968 Civil Rights timeline and enter the smaller year.`,
          solution: [
            `**${earlier.label}** occurred in **${earlier.year}**.`,
            `**${later.label}** occurred later in **${later.year}**.`,
          ],
        };
      }

      // Tier 3: 3-event span from full 14-event timeline (364 distinct triples!)
      const trio = rng.shuffle(MILESTONES).slice(0, 3);
      const years = trio.map((t) => t.year);
      const minY = Math.min(...years);
      const maxY = Math.max(...years);
      const span = maxY - minY;
      const earliest = trio.find((t) => t.year === minY)!;
      const latest = trio.find((t) => t.year === maxY)!;
      return {
        prompt: `Three Civil Rights milestones are listed in mixed order:\n- **${trio[0].label}**\n- **${trio[1].label}**\n- **${trio[2].label}**\n\nWhat is the total span in **years** from the earliest to the latest of these three events?`,
        answer: { type: "number", value: span, display: `${span} years` },
        hint: `Identify the earliest and latest events first, recall their two years, and subtract.`,
        solution: [
          `Dates: ${trio.map((t) => `${t.label} (${t.year})`).join("; ")}.`,
          `Earliest: **${earliest.label}** (${minY}); Latest: **${latest.label}** (${maxY}).`,
          `Total span = ${maxY} − ${minY} = **${span} years**.`,
        ],
      };
    },
  },
  {
    id: "us-civil-rights.campaign-matcher",
    topicId: "us-civil-rights",
    title: "Direct Action Campaigns & Organisations",
    level: 1,
    guideRef: "montgomery-direct-action",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(CAMPAIGN_CARDS);
        const clueIdx = rng.int(0, 2);
        return {
          prompt: card.clues[clueIdx],
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Focus on the key dates, leaders, or tactics mentioned in the clue.`,
          solution: [card.note],
        };
      }

      if (tier === 2) {
        const card = rng.pick(CAMPAIGN_CARDS);
        const clueIdx = rng.int(0, 2);
        const frames = [
          `A Year 9 historian is sorting revision cards on protest methods. ${card.clues[clueIdx]}`,
          `Evidence file check: ${card.clues[clueIdx]}`,
          `Exam quick-fire: ${card.clues[clueIdx]}`,
        ];
        return {
          prompt: frames[rng.int(0, frames.length - 1)],
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Think about the exact group or campaign name from 1954–65.`,
          solution: [card.note],
        };
      }

      // Tier 3: Economic leverage calculations (Montgomery boycott & Sit-in impact) + campaign matching
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const dailyRiders = rng.pick([8000, 10000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000]);
        const days = rng.pick([10, 20, 30, 50, 100, 200, 381]);
        const blackRidersPerDay = (dailyRiders * 3) / 4; // exact 75%
        const totalLostRides = blackRidersPerDay * days;
        return {
          prompt: `Black citizens made up roughly **75%** of Montgomery's bus riders. If a city bus system normally carried **${dailyRiders.toLocaleString("en-US")}** riders per day, how many bus rides did it lose over **${days} days** of a complete Black boycott?`,
          answer: { type: "number", value: totalLostRides, display: `${totalLostRides.toLocaleString("en-US")}` },
          hint: `First find 75% (three-quarters) of ${dailyRiders.toLocaleString("en-US")}, then multiply by ${days}.`,
          solution: [
            `75% of ${dailyRiders.toLocaleString("en-US")} daily riders = **${blackRidersPerDay.toLocaleString("en-US")}** rides lost each day.`,
            `Over ${days} days: ${blackRidersPerDay.toLocaleString("en-US")} × ${days} = **${totalLostRides.toLocaleString("en-US")}** lost rides.`,
            `This economic squeeze—sustained for **381 days**—drove Montgomery City Lines close to bankruptcy.`,
          ],
        };
      }
      if (mode === 1) {
        const dailySales = rng.pick([400, 500, 600, 800, 1000, 1200, 1500, 2000]);
        const dropPct = rng.pick([25, 30, 35, 40, 45, 50]);
        const days = rng.pick([10, 14, 20, 30, 60]);
        const lostPerDay = (dailySales * dropPct) / 100;
        const totalLost = lostPerDay * days;
        return {
          prompt: `During the 1960 sit-ins, occupied lunch counters sharply reduced store takings. If a segregated Woolworth's store averaged **$${dailySales}** per day and boycotts cut sales by **${dropPct}%** for **${days} days**, how many **dollars** in sales did the store lose?`,
          answer: { type: "number", value: totalLost, display: `$${totalLost.toLocaleString("en-US")}` },
          hint: `Calculate ${dropPct}% of $${dailySales} to get the daily loss, then multiply by ${days} days.`,
          solution: [
            `Daily loss = ${dropPct}% of $${dailySales} = **$${lostPerDay}**.`,
            `Total loss over ${days} days = $${lostPerDay} × ${days} = **$${totalLost.toLocaleString("en-US")}**.`,
            `Financial pain like this persuaded chains such as Woolworth's to desegregate by July 1960.`,
          ],
        };
      }
      const card = rng.pick(CAMPAIGN_CARDS);
      const clueIdx = rng.int(0, 2);
      return {
        prompt: `Connect this historical evidence to the exact campaign or organisation: ${card.clues[clueIdx]}`,
        answer: { type: "text", accept: card.accept, display: card.answer },
        hint: `Recall the major 1954–65 organisations (NAACP, WPC, SCLC, SNCC, CORE) and campaigns.`,
        solution: [card.note],
      };
    },
  },
  {
    id: "us-civil-rights.voting-rights-data",
    topicId: "us-civil-rights",
    title: "Voting Rights Act (1965) Data Analysis",
    level: 2,
    guideRef: "mlk-legislation-1964-1965",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const st = rng.pick(VOTER_STATS);
      const pop = rng.pick(COUNTY_POPULATIONS);
      const beforeVoters = (pop * st.beforePct) / 100;
      const afterVoters = (pop * st.afterPct) / 100;
      const gain = afterVoters - beforeVoters;

      if (tier === 1) {
        const askAfter = rng.bool();
        if (askAfter) {
          return {
            prompt: `After the **1965 Voting Rights Act**, Black voter registration in **${st.state}** climbed to roughly **${st.afterPct}%** by 1967. In a ${st.state} county with **${pop.toLocaleString("en-US")}** eligible Black adults, approximately how many were registered to vote in 1967?`,
            answer: { type: "number", value: afterVoters, display: `${afterVoters.toLocaleString("en-US")}` },
            hint: `Find ${st.afterPct}% of ${pop.toLocaleString("en-US")}: multiply by ${st.afterPct} and divide by 100.`,
            solution: [
              `${st.afterPct}% of ${pop.toLocaleString("en-US")} = (${st.afterPct} ÷ 100) × ${pop.toLocaleString("en-US")} = **${afterVoters.toLocaleString("en-US")}** voters.`,
              st.exactNote,
            ],
          };
        }
        return {
          prompt: `Before the **1965 Voting Rights Act**, literacy tests kept Black voter registration in **${st.state}** down to about **${st.beforePct}%**. In a ${st.state} county with **${pop.toLocaleString("en-US")}** eligible Black adults, roughly how many were registered before the Act?`,
          answer: { type: "number", value: beforeVoters, display: `${beforeVoters.toLocaleString("en-US")}` },
          hint: `Find ${st.beforePct}% of ${pop.toLocaleString("en-US")}.`,
          solution: [
            `${st.beforePct}% of ${pop.toLocaleString("en-US")} = **${beforeVoters.toLocaleString("en-US")}** registered voters.`,
            `Outlawing rigged literacy tests in August 1965 transformed political power across the South.`,
          ],
        };
      }

      if (tier === 2) {
        return {
          prompt: `Between 1964/65 and 1967, the **Voting Rights Act** lifted Black voter registration in **${st.state}** from roughly **${st.beforePct}%** to **${st.afterPct}%**. In a county of **${pop.toLocaleString("en-US")}** eligible Black adults, how many **additional** Black voters were registered after the Act?`,
          answer: { type: "number", value: gain, display: `${gain.toLocaleString("en-US")}` },
          traps: [
            {
              spec: { type: "number", value: afterVoters },
              feedback: `${afterVoters.toLocaleString("en-US")} is the *total* registered in 1967—subtract the ${beforeVoters.toLocaleString("en-US")} already registered before the Act.`,
            },
          ],
          hint: `Find the percentage-point increase (${st.afterPct}% − ${st.beforePct}% = ${st.afterPct - st.beforePct}%), then apply it to ${pop.toLocaleString("en-US")}.`,
          solution: [
            `Percentage-point rise = ${st.afterPct}% − ${st.beforePct}% = **${st.afterPct - st.beforePct}%**.`,
            `Additional voters = ${st.afterPct - st.beforePct}% of ${pop.toLocaleString("en-US")} = **${gain.toLocaleString("en-US")}**.`,
            st.exactNote,
          ],
        };
      }

      // Tier 3: Compare two Southern states' percentage-point gains OR calculate remaining unregistered citizens
      const compareMode = rng.bool();
      if (compareMode) {
        const pair = rng.shuffle(VOTER_STATS).slice(0, 2);
        const [s1, s2] = pair;
        const rise1 = s1.afterPct - s1.beforePct;
        const rise2 = s2.afterPct - s2.beforePct;
        const diff = Math.abs(rise1 - rise2);
        const bigger = rise1 >= rise2 ? s1 : s2;
        return {
          prompt: `Following the 1965 Voting Rights Act:\n- **${s1.state}** rose from **${s1.beforePct}%** to **${s1.afterPct}%**\n- **${s2.state}** rose from **${s2.beforePct}%** to **${s2.afterPct}%**\n\nBy how many **percentage points** did the larger state's gain exceed the smaller state's gain?`,
          answer: { type: "number", value: diff, display: `${diff}` },
          hint: `Work out each state's rise (${s1.afterPct}−${s1.beforePct} and ${s2.afterPct}−${s2.beforePct}), then find the difference between those two gains.`,
          solution: [
            `${s1.state} gain: ${s1.afterPct} − ${s1.beforePct} = **${rise1}** percentage points.`,
            `${s2.state} gain: ${s2.afterPct} − ${s2.beforePct} = **${rise2}** percentage points.`,
            `${bigger.state}'s jump was larger by **${diff}** percentage points—often because states with the harshest pre-1965 exclusion saw the steepest leaps once federal registrars arrived.`,
          ],
        };
      }
      const unregisteredAfter = pop - afterVoters;
      return {
        prompt: `Even after the **1965 Voting Rights Act** raised Black voter registration in **${st.state}** to **${st.afterPct}%** by 1967, obstacles such as intimidation still remained. In a county of **${pop.toLocaleString("en-US")}** eligible Black adults, how many were **still not registered** in 1967?`,
        answer: { type: "number", value: unregisteredAfter, display: `${unregisteredAfter.toLocaleString("en-US")}` },
        traps: [
          {
            spec: { type: "number", value: afterVoters },
            feedback: `${afterVoters.toLocaleString("en-US")} were *registered*; the question asks how many remained *unregistered*.`,
          },
        ],
        hint: `If ${st.afterPct}% were registered, then ${100 - st.afterPct}% were still unregistered.`,
        solution: [
          `Unregistered share = 100% − ${st.afterPct}% = **${100 - st.afterPct}%**.`,
          `${100 - st.afterPct}% of ${pop.toLocaleString("en-US")} = **${unregisteredAfter.toLocaleString("en-US")}** citizens.`,
          `This shows both the massive leap forward of 1965 and why grassroots registration work had to continue.`,
        ],
      };
    },
  },
  {
    id: "us-civil-rights.perspectives-black-power",
    topicId: "us-civil-rights",
    title: "Strategies, Voices & Black Power Diagnosis",
    level: 3,
    guideRef: "malcolm-x-black-power",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const item = rng.pick(IDEOLOGY_TIER1);
        const openers = [
          "",
          "Key concept check: ",
          "Year 9 revision prompt: ",
        ];
        return {
          prompt: `${openers[rng.int(0, openers.length - 1)]}${item.prompt}`,
          answer: { type: "text", accept: item.accept, display: item.answer },
          hint: item.hint,
          solution: [item.explanation],
        };
      }

      if (tier === 2) {
        const person = rng.pick(PERSPECTIVE_SPEAKERS);
        const quote = rng.pick(person.quotes);
        const contexts = [
          "Which leader or organisation best matches this historical viewpoint?",
          "A historian attributes the argument below to a key Civil Rights figure or group. Who is it?",
        ];
        return {
          prompt: `${rng.pick(contexts)}\n\n> ${quote}`,
          answer: { type: "text", accept: person.accept, display: person.speaker },
          hint: `Look closely at the strategy, vocabulary, and goal inside the quotation.`,
          solution: [person.rationale],
        };
      }

      // Tier 3: Combine speaker attribution (26 quotes × 2 analytical frames = 52 prompts) + core term/strategy diagnosis
      const useSpeaker = rng.bool(0.65);
      if (useSpeaker) {
        const person = rng.pick(PERSPECTIVE_SPEAKERS);
        const quote = rng.pick(person.quotes);
        const frames = [
          `Source attribution (NOP skill): Read this summary of a 1954–68 stance and name the **leader or organisation** behind it:\n\n> ${quote}`,
          `Comparing strategies: Which **Civil Rights figure or group** expressed this position during the struggle for equality?\n\n> ${quote}`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: person.accept, display: person.speaker },
          hint: `Decide whether this comes from courtroom strategy (Thurgood Marshall), non-violence (MLK Jr.), presidential politics (LBJ), or Black Power (Malcolm X / Stokely Carmichael / Black Panther Party).`,
          solution: [person.rationale],
        };
      }
      const item = rng.pick(IDEOLOGY_TIER1);
      return {
        prompt: `Evaluating progress & turning points: ${item.prompt}`,
        answer: { type: "text", accept: item.accept, display: item.answer },
        hint: item.hint,
        solution: [item.explanation],
      };
    },
  },
];
