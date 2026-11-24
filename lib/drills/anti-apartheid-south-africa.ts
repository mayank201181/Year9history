import type { Drill, DrillItem, Rng } from "./types.ts";

interface LawCard {
  answer: string;
  accept: string[];
  clues: [string, string, string];
  note: string;
}

const LAW_CARDS: LawCard[] = [
  {
    answer: "National Party",
    accept: ["National Party", "The National Party", "NP"],
    clues: [
      "Which Afrikaner-led political party won the May 1948 white-minority election and built statutory apartheid?",
      "Which party led by D.F. Malan (and later Verwoerd, Botha, and de Klerk) ruled South Africa from 1948 to 1994?",
      "Which ruling party codified racial segregation into the official policy of 'apartness' in 1948?",
    ],
    note: "The **National Party (NP)** governed South Africa from 1948 until the 1994 democratic elections.",
  },
  {
    answer: "Population Registration Act",
    accept: ["Population Registration Act", "Population Registration Act 1950", "Population Registration"],
    clues: [
      "Which 1950 law classified every South African at birth as White, Coloured, Indian/Asian, or Black (Bantu)?",
      "Which foundational apartheid statute assigned racial labels that determined every citizen's housing, schooling, and voting rights?",
      "Which 1950 racial classification act tore mixed-heritage families apart using arbitrary official tests?",
    ],
    note: "The **Population Registration Act (1950)** formed the legal foundation for every other apartheid statute.",
  },
  {
    answer: "Group Areas Act",
    accept: ["Group Areas Act", "Group Areas Act 1950", "Group Areas"],
    clues: [
      "Which 1950 law carved South African cities into racially segregated residential and business zones?",
      "Which apartheid statute triggered the forced removal of over 3.5 million Black, Coloured, and Indian residents?",
      "Which 1950 law enabled the state to bulldoze Sophiatown (1955) and District Six (1966) as whites-only areas?",
    ],
    note: "The **Group Areas Act (1950)** uprooted over 3.5 million people from their homes.",
  },
  {
    answer: "Pass Laws",
    accept: ["Pass Laws", "The Pass Laws", "Pass Law", "Dompas", "Abolition of Passes Act"],
    clues: [
      "Which laws required all Black South Africans aged 16+ to carry a reference book (dompas) at all times?",
      "Which influx-control system policed cheap Black migrant labour in white cities and arrested hundreds of thousands yearly?",
      "Which hated identity-book laws sparked both the 1956 Women's March and the 1960 Sharpeville protest?",
    ],
    note: "The **Pass Laws** (dompas) tightly regulated Black movement into white-designated cities.",
  },
  {
    answer: "Bantu Education Act",
    accept: ["Bantu Education Act", "Bantu Education", "Bantu Education Act 1953"],
    clues: [
      "Which 1953 law designed by Hendrik Verwoerd restricted Black schooling to prepare pupils only for unskilled labour?",
      "Which apartheid education law created a roughly 10-to-1 per-pupil state spending gap favouring white children?",
      "Which 1953 statute placed Black schools under strict central state control, stripping mission schools of independence?",
    ],
    note: "The **Bantu Education Act (1953)** intentionally limited Black academic opportunity to preserve cheap labour.",
  },
  {
    answer: "Bantustans",
    accept: ["Bantustans", "Homelands", "Bantustan", "Homeland"],
    clues: [
      "What were the ten fragmented ethnic territories covering just ~13% of South Africa's land assigned to the Black majority?",
      "What 'homelands' (such as Transkei and KwaZulu) did grand apartheid create to strip Black South Africans of national citizenship?",
      "Which territories created after the 1959 Bantu Self-Government Act were used to deny the ~70%+ Black majority the vote?",
    ],
    note: "**Bantustans (homelands)** allocated 13% of poor land to over 70% of the population to justify political exclusion.",
  },
  {
    answer: "Separate Amenities Act",
    accept: ["Separate Amenities Act", "Reservation of Separate Amenities Act", "Separate Amenities Act 1953"],
    clues: [
      "Which 1953 'petty apartheid' statute legalised segregated beaches, buses, benches, and hospitals without requiring equality?",
      "Which law differed from America's *Plessy v. Ferguson* by explicitly allowing non-white public facilities to be inferior?",
      "Which 1953 statute put up 'Europeans Only' and 'Non-Europeans' signs across South African parks, lifts, and beaches?",
    ],
    note: "The **Reservation of Separate Amenities Act (1953)** codified everyday 'petty apartheid'.",
  },
  {
    answer: "Suppression of Communism Act",
    accept: ["Suppression of Communism Act", "Suppression of Communism Act 1950", "Suppression of Communism"],
    clues: [
      "Which 1950 law defined 'communism' so broadly that the regime could ban almost any anti-apartheid activist or newspaper?",
      "Which statute let South African ministers issue 'banning orders' silencing critics without a fair trial?",
      "Which 1950 security law weaponised Cold War fears to outlaw radical and peaceful opposition alike?",
    ],
    note: "The **Suppression of Communism Act (1950)** gave the state sweeping powers to silence dissent.",
  },
  {
    answer: "Hendrik Verwoerd",
    accept: ["Hendrik Verwoerd", "Verwoerd", "Dr Verwoerd"],
    clues: [
      "Which Native Affairs Minister (and later Prime Minister 1958–66) is widely known as the chief architect of 'grand apartheid'?",
      "Which minister defended the 1953 Bantu Education Act by asking why Black pupils should study mathematics?",
      "Which National Party leader promoted the 1959 Bantustan ('separate development') system before his 1966 assassination?",
    ],
    note: "**Hendrik Verwoerd** engineered Bantu Education (1953) and the Bantustans ('grand apartheid').",
  },
  {
    answer: "Sophiatown",
    accept: ["Sophiatown"],
    clues: [
      "Which famous multiracial Johannesburg jazz suburb was forcibly demolished in 1955 under the Group Areas Act?",
      "Which vibrant Black freehold community near Johannesburg was bulldozed and rebuilt as a white suburb named 'Triomf'?",
      "Which 1955 forced removal became one of the earliest and most notorious symbols of the Group Areas Act?",
    ],
    note: "**Sophiatown** (Johannesburg, 1955) was demolished under the Group Areas Act and renamed 'Triomf'.",
  },
  {
    answer: "District Six",
    accept: ["District Six", "District 6"],
    clues: [
      "Which historic inner-city Cape Town neighbourhood was declared whites-only in 1966, uprooting ~60,000 Coloured residents?",
      "Which multiracial Cape Town community was bulldozed under the Group Areas Act and left largely bare for decades?",
      "Which numbered Cape Town district became an enduring symbol of forced removals under apartheid?",
    ],
    note: "**District Six** in Cape Town was declared whites-only in 1966, forcibly removing roughly 60,000 residents.",
  },
  {
    answer: "Grand Apartheid",
    accept: ["Grand Apartheid"],
    clues: [
      "What term do historians use for apartheid's large-scale engineering of land (Group Areas), labour (Pass Laws), and citizenship (Bantustans)?",
      "Contrast 'petty apartheid' (benches and beaches) with the structural territorial and political exclusion known as what?",
      "Which level of apartheid remained intact even when P.W. Botha relaxed minor public-facility segregation in the 1980s?",
    ],
    note: "**Grand Apartheid** maintained white monopoly over land, labour, and parliamentary sovereignty.",
  },
];

interface Milestone {
  label: string;
  year: number;
  note: string;
}

const SA_MILESTONES: Milestone[] = [
  { label: "National Party wins election & starts statutory apartheid", year: 1948, note: "May 1948 election of D.F. Malan's National Party." },
  { label: "Population Registration & Group Areas Acts", year: 1950, note: "1950 foundational racial classification and urban zoning laws." },
  { label: "ANC Defiance Campaign & Pass Laws Act", year: 1952, note: "1952 mass civil disobedience by 8,000+ volunteers." },
  { label: "Bantu Education Act passed", year: 1953, note: "1953 Verwoerd school law entrenching unequal funding." },
  { label: "Freedom Charter adopted at Kliptown", year: 1955, note: "26 June 1955 Congress of the People non-racial blueprint." },
  { label: "20,000 Women's March to Pretoria", year: 1956, note: "9 August 1956 multiracial women's protest against pass laws." },
  { label: "Bantustans Act & founding of the PAC", year: 1959, note: "1959 homelands law and Robert Sobukwe's breakaway PAC." },
  { label: "Sharpeville Massacre & banning of ANC/PAC", year: 1960, note: "21 March 1960 police shooting of 69 anti-pass demonstrators." },
  { label: "Formation of Umkhonto we Sizwe (MK)", year: 1961, note: "December 1961 launch of the ANC's targeted sabotage wing." },
  { label: "Rivonia Trial life sentences (Robben Island)", year: 1964, note: "June 1964 life imprisonment of Mandela and seven comrades." },
  { label: "Soweto Student Uprising", year: 1976, note: "16 June 1976 youth march against compulsory Afrikaans schooling." },
  { label: "Murder of Steve Biko, Gleneagles & UN arms embargo", year: 1977, note: "1977 custody murder of Biko and decisive global embargoes." },
  { label: "Founding of the United Democratic Front (UDF)", year: 1983, note: "1983 civic coalition resisting Botha's Tricameral Parliament." },
  { label: "US Comprehensive Anti-Apartheid Act", year: 1986, note: "1986 US sanctions law overriding President Reagan's veto." },
  { label: "De Klerk unbans ANC & releases Nelson Mandela", year: 1990, note: "February 1990 turning point freeing Mandela after 27 years." },
  { label: "First multiracial democratic elections (President Mandela)", year: 1994, note: "27 April 1994 'one person, one vote' democracy." },
];

const RESISTANCE_CARDS: LawCard[] = [
  {
    answer: "Defiance Campaign",
    accept: ["Defiance Campaign", "1952 Defiance Campaign", "The Defiance Campaign"],
    clues: [
      "Which 1952 joint ANC and South African Indian Congress campaign saw 8,000+ volunteers peacefully court arrest?",
      "Which non-violent civil disobedience campaign surged ANC membership from ~7,000 to roughly 100,000?",
      "Which early 1950s campaign saw protesters openly walk through 'Europeans Only' entrances to fill apartheid jails?",
    ],
    note: "The **1952 Defiance Campaign** transformed the ANC into a mass protest organisation.",
  },
  {
    answer: "Freedom Charter",
    accept: ["Freedom Charter", "The Freedom Charter"],
    clues: [
      "Which 1955 document adopted at Kliptown declared: 'South Africa belongs to all who live in it, black and white'?",
      "Which multiracial democratic blueprint signed by ~3,000 delegates sparked the five-year Treason Trial?",
      "Which 26 June 1955 manifesto laid out the ANC's enduring vision for a non-racial South Africa?",
    ],
    note: "The **Freedom Charter (1955)** articulated the enduring non-racial vision of democratic South Africa.",
  },
  {
    answer: "PAC",
    accept: ["PAC", "Pan Africanist Congress", "Pan-Africanist Congress"],
    clues: [
      "Which Africanist party broke away from the ANC in 1959 under Robert Sobukwe?",
      "Which organisation organised the peaceful anti-pass protest that ended in the 21 March 1960 Sharpeville Massacre?",
      "Which liberation movement (three-letter initials) was banned alongside the ANC in April 1960?",
    ],
    note: "The **Pan Africanist Congress (PAC)** organised the March 1960 anti-pass campaign at Sharpeville.",
  },
  {
    answer: "Sharpeville Massacre",
    accept: ["Sharpeville Massacre", "Sharpeville", "The Sharpeville Massacre"],
    clues: [
      "At which 21 March 1960 tragedy did police kill 69 unarmed anti-pass demonstrators, many shot in the back?",
      "Which 1960 police shooting triggered the banning of the ANC/PAC and pushed Mandela toward sabotage?",
      "Which turning-point massacre sparked international investment flight and South Africa's 1961 exit from the Commonwealth?",
    ],
    note: "The **Sharpeville Massacre (21 March 1960)** ended legal peaceful protest and triggered armed sabotage.",
  },
  {
    answer: "Umkhonto we Sizwe",
    accept: ["Umkhonto we Sizwe", "MK", "Spear of the Nation"],
    clues: [
      "What was the armed sabotage wing ('Spear of the Nation') co-founded by Nelson Mandela in December 1961?",
      "Which underground wing initially targeted power pylons and pass offices at night while avoiding civilian deaths?",
      "Which armed organisation's headquarters at Liliesleaf Farm was raided by police in July 1963?",
    ],
    note: "**Umkhonto we Sizwe (MK)** carried out infrastructure sabotage after legal protest was outlawed.",
  },
  {
    answer: "Oliver Tambo",
    accept: ["Oliver Tambo", "Tambo"],
    clues: [
      "Who led the ANC in international exile from Lusaka and London while Nelson Mandela spent 27 years in prison?",
      "Which former law partner of Mandela escaped South Africa after Sharpeville to build global support for sanctions?",
      "Which exiled ANC president met white South African business leaders in Lusaka during the mid-1980s?",
    ],
    note: "**Oliver Tambo** sustained the ANC internationally for nearly 30 years in exile.",
  },
  {
    answer: "Steve Biko",
    accept: ["Steve Biko", "Biko", "Stephen Biko"],
    clues: [
      "Which student leader founded SASO and the Black Consciousness Movement before being murdered in police custody in 1977?",
      "Who declared: 'The most potent weapon in the hands of the oppressor is the mind of the oppressed'?",
      "Which 1970s leader united African, Coloured, and Indian youth under proud political Black solidarity?",
    ],
    note: "**Steve Biko** revitalised Black psychological pride and resistance in the 1970s.",
  },
  {
    answer: "Soweto Uprising",
    accept: ["Soweto Uprising", "Soweto", "The Soweto Uprising"],
    clues: [
      "Which 16 June 1976 student march against compulsory Afrikaans instruction erupted into nationwide youth revolt?",
      "During which 1976 uprising was dying 12-year-old Hector Pieterson photographed by Sam Nzima?",
      "Which youth uprising sent thousands of angry teenagers into exile to bolster MK and spurred the 1977 UN arms embargo?",
    ],
    note: "The **Soweto Uprising (1976)** shattered the quiet of the late 1960s and mobilised a fearless new generation.",
  },
  {
    answer: "UDF",
    accept: ["UDF", "United Democratic Front", "The United Democratic Front"],
    clues: [
      "Which broad non-racial coalition of 400+ civic, church, and student groups formed in 1983 against the Tricameral Parliament?",
      "Which internal resistance coalition organised township rent, consumer, and school boycotts in the mid-1980s?",
      "Which three-letter civic alliance worked alongside COSATU unions to make South Africa's townships ungovernable?",
    ],
    note: "The **United Democratic Front (UDF)** coordinated mass civic resistance across 1980s townships.",
  },
  {
    answer: "COSATU",
    accept: ["COSATU", "Congress of South African Trade Unions"],
    clues: [
      "Which powerful Black trade union federation founded in 1985 organised nationwide stay-aways and mine strikes?",
      "Which labour federation hit apartheid directly in its industrial engine alongside the UDF's civic boycotts?",
      "What six-letter acronym stands for the Congress of South African Trade Unions?",
    ],
    note: "**COSATU** leveraged Black industrial labour through nationwide stay-aways and strikes.",
  },
  {
    answer: "Desmond Tutu",
    accept: ["Desmond Tutu", "Archbishop Desmond Tutu", "Archbishop Tutu", "Tutu"],
    clues: [
      "Which Anglican Archbishop won the 1984 Nobel Peace Prize and campaigned globally for economic sanctions?",
      "Which moral leader later chaired South Africa's Truth and Reconciliation Commission (1995–98)?",
      "Who countered Western opponents of sanctions by arguing Black South Africans would endure short-term hardship for freedom?",
    ],
    note: "**Archbishop Desmond Tutu** championed peaceful resistance, global sanctions, and later the TRC.",
  },
  {
    answer: "Gleneagles Agreement",
    accept: ["Gleneagles Agreement", "The Gleneagles Agreement", "Gleneagles"],
    clues: [
      "Which 1977 Commonwealth agreement isolated apartheid South Africa from international rugby, cricket, and other sports?",
      "Which landmark sporting boycott shattered white South African morale by cutting off international tours?",
      "Which 1977 pact named after a Scottish venue committed Commonwealth nations to sever sporting links with Pretoria?",
    ],
    note: "The **Gleneagles Agreement (1977)** turned international sport into a powerful psychological weapon against apartheid.",
  },
  {
    answer: "Comprehensive Anti-Apartheid Act",
    accept: ["Comprehensive Anti-Apartheid Act", "Anti-Apartheid Act", "US Anti-Apartheid Act", "1986 Anti-Apartheid Act"],
    clues: [
      "Which 1986 US federal sanctions statute did Congress pass by overriding President Ronald Reagan's veto?",
      "Which landmark 1986 American law banned new US corporate investment, bank loans, and South African air links?",
      "Which US Congressional sanctions act dealt a severe financial blow to Pretoria in October 1986?",
    ],
    note: "The **US Comprehensive Anti-Apartheid Act (1986)** escalated financial pressure over Reagan's veto.",
  },
  {
    answer: "Chase Manhattan Bank",
    accept: ["Chase Manhattan Bank", "Chase Manhattan"],
    clues: [
      "Which major New York bank triggered South Africa's August 1985 debt crisis by refusing to roll over short-term loans?",
      "Which US bank's 1985 refusal to lend after Botha's 'Rubicon' speech caused the South African Rand to plunge?",
      "Which international lender led the August 1985 financial freeze that convinced white South African business leaders to urge talks?",
    ],
    note: "**Chase Manhattan Bank's** August 1985 loan freeze triggered a crippling debt and currency crisis.",
  },
];

interface TransitionItem {
  prompt: string;
  answer: string;
  accept: string[];
  hint: string;
  explanation: string;
}

const TRANSITION_TIER1: TransitionItem[] = [
  { prompt: "Which South African President unbanned the ANC, PAC, and SACP in his landmark 2 February 1990 speech?", answer: "F.W. de Klerk", accept: ["F.W. de Klerk", "FW de Klerk", "de Klerk", "Frederik Willem de Klerk"], hint: "He shared the 1993 Nobel Peace Prize with Nelson Mandela.", explanation: "President **F.W. de Klerk** initiated the 1990 dismantling of apartheid under converging economic, internal, and Cold War pressures." },
  { prompt: "What acronym stands for the 1991–93 multiparty talks ('Convention for a Democratic South Africa') that negotiated the democratic transition?", answer: "CODESA", accept: ["CODESA", "Convention for a Democratic South Africa"], hint: "Six-letter acronym starting with C.", explanation: "**CODESA** negotiated South Africa's interim democratic constitution between 1991 and 1993." },
  { prompt: "Which popular ANC and SACP leader's assassination by far-right extremists in April 1993 nearly sparked civil war before Mandela calmed the nation on TV?", answer: "Chris Hani", accept: ["Chris Hani", "Hani"], hint: "His initials are C.H.", explanation: "**Chris Hani's** murder in April 1993 tested the transition; Mandela's televised appeal prevented civil war and locked in the 1994 election date." },
  { prompt: "Which post-apartheid commission (1995–98), chaired by Archbishop Desmond Tutu, offered amnesty in exchange for full public confession?", answer: "Truth and Reconciliation Commission", accept: ["Truth and Reconciliation Commission", "TRC", "The TRC"], hint: "Abbreviated TRC.", explanation: "The **Truth and Reconciliation Commission (TRC)** prioritised restorative justice and truth-telling over retributive trials." },
  { prompt: "What type of justice—emphasising healing, public truth-telling, and *ubuntu* rather than revenge—guided South Africa's TRC?", answer: "Restorative justice", accept: ["Restorative justice", "Restorative", "Ubuntu"], hint: "Contrast *retributive* justice (punishment) with *rest...* justice (healing).", explanation: "**Restorative justice** aimed to uncover hidden crimes while preventing retaliatory racial civil war." },
  { prompt: "What major global geopolitical event in November 1989 removed Moscow's backing for the ANC and ended Western Cold War tolerance for Pretoria?", answer: "Fall of the Berlin Wall", accept: ["Fall of the Berlin Wall", "End of the Cold War", "Berlin Wall", "Cold War ending"], hint: "Happened in Germany three months before de Klerk's February 1990 speech.", explanation: "The **Fall of the Berlin Wall (Nov 1989)** and end of the Cold War reshaped strategic calculations in Pretoria." },
  { prompt: "Which hardline South African leader (1978–89) introduced the 1983 Tricameral Parliament, States of Emergency, and the defiant 1985 'Rubicon' speech?", answer: "P.W. Botha", accept: ["P.W. Botha", "PW Botha", "Botha", "Pieter Willem Botha"], hint: "Succeeded by F.W. de Klerk in 1989.", explanation: "**P.W. Botha's** 'Total Strategy' combined cosmetic reforms with harsh repression before failing financially." },
  { prompt: "What was the name of P.W. Botha's 1983 three-chamber parliament that gave limited chambers to Coloured and Indian voters while excluding the Black majority?", answer: "Tricameral Parliament", accept: ["Tricameral Parliament", "Tricameral", "The Tricameral Parliament"], hint: "Prefix 'Tri-' means three.", explanation: "The **1983 Tricameral Parliament** provoked the formation of the United Democratic Front (UDF)." },
  { prompt: "What coalition cabinet did President Nelson Mandela form in May 1994—including de Klerk as a Deputy President—to reassure minorities and prevent civil war?", answer: "Government of National Unity", accept: ["Government of National Unity", "GNU"], hint: "Three main words: Government of N___ U___.", explanation: "The **Government of National Unity** shared executive representation across major parties after the 1994 vote." },
  { prompt: "In which month and year did Nelson Mandela walk free from Victor Verster Prison after 27 years behind bars?", answer: "February 1990", accept: ["February 1990", "Feb 1990", "11 February 1990", "11 Feb 1990", "February 11 1990", "February 11, 1990"], hint: "Specifically on the 11th day of the second month of 1990.", explanation: "Nelson Mandela was released on **11 February 1990**." },
  { prompt: "In which month and year did South Africa hold its first 'one person, one vote' multiracial democratic elections?", answer: "April 1994", accept: ["April 1994", "27 April 1994", "April 27 1994", "April 27, 1994"], hint: "Specifically 27 April—celebrated today as Freedom Day.", explanation: "South Africa's historic multiracial elections began on **27 April 1994**." },
  { prompt: "Which massive 1988 London stadium concert celebrating Mandela's 70th birthday was broadcast to roughly 600 million viewers worldwide?", answer: "Wembley Concert", accept: ["Wembley Concert", "Wembley", "Wembley Stadium", "Free Nelson Mandela Concert", "Mandela 70th Birthday Tribute"], hint: "Held at England's most famous football stadium.", explanation: "The **1988 Wembley Concert** turned 'Free Nelson Mandela' into a global youth movement." },
  { prompt: "Which 1992 township massacre during CODESA talks killed dozens of residents and briefly forced Mandela to suspend negotiations?", answer: "Boipatong Massacre", accept: ["Boipatong Massacre", "Boipatong"], hint: "Starts with 'Boi...'.", explanation: "The **Boipatong Massacre (June 1992)** highlighted how perilous political violence was during the 1990–94 transition." },
  { prompt: "At which 1995 global sporting final in Johannesburg did President Mandela famously wear a green-and-gold Springbok jersey to unite South Africans?", answer: "Rugby World Cup", accept: ["Rugby World Cup", "1995 Rugby World Cup", "Rugby World Cup Final"], hint: "Springboks Captain François Pienaar lifted the trophy alongside Mandela.", explanation: "Mandela used the **1995 Rugby World Cup** to transform a former symbol of white apartheid into a unifying national emblem." },
  { prompt: "Which two leaders jointly received the 1993 Nobel Peace Prize for negotiating the peaceful dismantling of apartheid?", answer: "Mandela and de Klerk", accept: ["Mandela and de Klerk", "Nelson Mandela and F.W. de Klerk", "Nelson Mandela and FW de Klerk", "de Klerk and Mandela", "FW de Klerk and Nelson Mandela"], hint: "The ANC leader freed in 1990 and the National Party President who freed him.", explanation: "**Nelson Mandela and F.W. de Klerk** shared the 1993 Nobel Peace Prize." },
];

const SA_VOICES: Array<{
  speaker: string;
  accept: string[];
  quotes: string[];
  rationale: string;
}> = [
  {
    speaker: "Nelson Mandela",
    accept: ["Nelson Mandela", "Mandela"],
    quotes: [
      "\"I have cherished the ideal of a democratic and free society in which all persons live together in harmony—an ideal for which I am prepared to die.\"",
      "\"After Sharpeville and the banning of the ANC left peaceful protest silenced by bullets, targeted sabotage of infrastructure became our only remaining path.\"",
      "\"With Chris Hani murdered by extremists trying to spark chaos, we must answer with disciplined peace and fix the date for democratic elections.\"",
      "\"Forming a Government of National Unity and wearing the Springbok jersey shows that vengeance will never build our Rainbow Nation.\"",
    ],
    rationale: "Reflects **Nelson Mandela**'s journey from 1950s defiance and MK sabotage to the Rivonia speech and 1994 reconciliation.",
  },
  {
    speaker: "Steve Biko",
    accept: ["Steve Biko", "Biko", "Stephen Biko"],
    quotes: [
      "\"The most potent weapon in the hands of the oppressor is the mind of the oppressed.\"",
      "\"African, Coloured, and Indian South Africans must reject apartheid's divide-and-rule labels and stand united in proud Black solidarity.\"",
      "\"Before we can dismantle apartheid's parliament, Black communities must build psychological confidence and self-reliant local clinics.\"",
      "\"Waiting for white liberals to speak on our behalf only deepens dependency; liberation requires independent Black Consciousness.\"",
    ],
    rationale: "Reflects **Steve Biko**'s Black Consciousness philosophy of mental liberation, pride, and unity.",
  },
  {
    speaker: "Desmond Tutu",
    accept: ["Desmond Tutu", "Archbishop Desmond Tutu", "Archbishop Tutu", "Tutu"],
    quotes: [
      "\"Do not tell us economic sanctions will hurt Black workers—we are already suffering under apartheid and gladly accept short-term pain for freedom.\"",
      "\"True reconciliation requires restorative justice: perpetrators must confess the full public truth of political crimes before receiving amnesty.\"",
      "\"By giving thousands of victims a dignified national stage to speak, we heal wounds without tearing South Africa apart in civil war.\"",
      "\"Our church stands firmly for non-violent pressure inside the townships paired with decisive international economic sanctions.\"",
    ],
    rationale: "Reflects **Archbishop Desmond Tutu**'s moral leadership for sanctions and chairing the TRC.",
  },
  {
    speaker: "F.W. de Klerk",
    accept: ["F.W. de Klerk", "FW de Klerk", "de Klerk"],
    quotes: [
      "\"With the Berlin Wall fallen in 1989 and Soviet backing gone, now is our window to unban the ANC and negotiate minority safeguards.\"",
      "\"Loan freezes, global sanctions, and ungovernable townships prove our economy cannot survive another decade of white minority rule.\"",
      "\"On 2 February 1990 I announce the unbanning of the ANC, PAC, and SACP and the imminent release of Nelson Mandela.\"",
      "\"Negotiating through CODESA is not surrender—it is the only realistic path to avoid ruinous racial civil war.\"",
    ],
    rationale: "Reflects **President F.W. de Klerk**'s pragmatic realism behind the February 1990 pivot.",
  },
  {
    speaker: "Hendrik Verwoerd",
    accept: ["Hendrik Verwoerd", "Verwoerd"],
    quotes: [
      "\"What is the use of teaching a Black pupil mathematics when our system reserves skilled professions strictly for whites?\"",
      "\"By establishing ten ethnic Bantustans on 13% of the territory, we rebrand political exclusion as 'separate development'.\"",
      "\"Mission schools give African children false expectations of equality—centralised Bantu Education will align schooling with manual labour.\"",
      "\"Grand apartheid requires that Black workers remain temporary visitors in white cities regulated strictly by passbooks.\"",
    ],
    rationale: "Reflects **Hendrik Verwoerd**, architect of Bantu Education (1953) and the Bantustan homelands.",
  },
  {
    speaker: "Oliver Tambo",
    accept: ["Oliver Tambo", "Tambo"],
    quotes: [
      "\"While my comrades endure life sentences on Robben Island, I must lead the ANC in exile and lobby the world to isolate Pretoria.\"",
      "\"Meeting white South African business leaders in Lusaka proves that global sanctions and strikes are forcing economic elites to talk.\"",
      "\"From London to the United Nations, our diplomatic mission is to secure arms embargoes, sporting bans, and financial disinvestment.\"",
      "\"Keeping the banned ANC united across three decades abroad ensures Mandela returns to a movement ready to govern.\"",
    ],
    rationale: "Reflects **Oliver Tambo**'s vital leadership of the exiled ANC building international solidarity and sanctions.",
  },
];

export const drills: Drill[] = [
  {
    id: "anti-apartheid-south-africa.apartheid-laws-data",
    topicId: "anti-apartheid-south-africa",
    title: "Apartheid Laws & Inequality Data Lab",
    level: 1,
    guideRef: "apartheid-system-1948",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(LAW_CARDS);
        const clueIdx = rng.int(0, 2);
        return {
          prompt: card.clues[clueIdx],
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Think about the foundational 1948–59 apartheid statutes and policies.`,
          solution: [card.note],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // 13% vs 87% Bantustan land share on clean multiples of 1000 km²
          const totalArea = rng.pick([10000, 20000, 30000, 40000, 50000, 60000, 80000, 100000, 120000, 150000, 200000, 250000]);
          const askBantustan = rng.bool();
          const pct = askBantustan ? 13 : 87;
          const area = (totalArea * pct) / 100;
          return {
            prompt: `Under Grand Apartheid, **13%** of South Africa's land was allocated to Black Bantustans and **87%** reserved for white control. In a representative region of **${totalArea.toLocaleString("en-US")} km²**, how many **km²** were allocated to **${askBantustan ? "Black Bantustans" : "white-designated South Africa"}**?`,
            answer: { type: "number", value: area, display: `${area.toLocaleString("en-US")}` },
            hint: `Calculate ${pct}% of ${totalArea.toLocaleString("en-US")}.`,
            solution: [
              `${pct}% of ${totalArea.toLocaleString("en-US")} km² = **${area.toLocaleString("en-US")} km²**.`,
              `This stark 13% vs 87% divide left over 70% of the population squeezed onto fragmented rural land.`,
            ],
          };
        }
        if (mode === 1) {
          // Bantu Education 10x spending gap
          const blackPerPupil = rng.pick([12, 15, 18, 20, 25, 30, 35, 40, 45, 50]);
          const pupils = rng.pick([100, 200, 300, 400, 500, 600, 800, 1000]);
          const whitePerPupil = blackPerPupil * 10;
          const totalWhite = whitePerPupil * pupils;
          return {
            prompt: `Under the **1953 Bantu Education Act**, state funding per white pupil was roughly **10 times** higher than per Black pupil. If a Black school received **R${blackPerPupil}** per pupil, how many **Rand** did the state spend on a white school of **${pupils}** pupils?`,
            answer: { type: "number", value: totalWhite, display: `${totalWhite.toLocaleString("en-US")}` },
            hint: `First multiply R${blackPerPupil} by 10 to find the white per-pupil rate, then multiply by ${pupils} pupils.`,
            solution: [
              `White per-pupil funding = 10 × R${blackPerPupil} = **R${whitePerPupil}**.`,
              `Total for ${pupils} pupils = R${whitePerPupil} × ${pupils} = **R${totalWhite.toLocaleString("en-US")}**.`,
            ],
          };
        }
        const card = rng.pick(LAW_CARDS);
        return {
          prompt: `Apartheid architecture check: ${card.clues[rng.int(0, 2)]}`,
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Recall the five core statutes (Population Registration, Group Areas, Pass Laws, Bantu Education, Bantustans).`,
          solution: [card.note],
        };
      }

      // Tier 3: Multi-step inequality gap calculations (spending gap + land gap)
      const useBudget = rng.bool();
      if (useBudget) {
        const blackPerPupil = rng.pick([14, 16, 18, 20, 22, 25, 28, 30, 36, 40]);
        const pupils = rng.pick([150, 200, 250, 300, 400, 500, 600, 750, 800, 1000]);
        const gapPerPupil = blackPerPupil * 9; // 10x - 1x = 9x gap
        const totalGap = gapPerPupil * pupils;
        return {
          prompt: `Under **Bantu Education**, white schools received roughly **10 times** the per-pupil funding of Black schools. If Black schools received **R${blackPerPupil}** per pupil, how many **extra Rand** would a Black school of **${pupils}** pupils need to match the funding of an equal-sized white school?`,
          answer: { type: "number", value: totalGap, display: `${totalGap.toLocaleString("en-US")}` },
          traps: [
            {
              spec: { type: "number", value: blackPerPupil * 10 * pupils },
              feedback: `That is the white school's *total* budget—subtract what the Black school already received (R${blackPerPupil * pupils}).`,
            },
          ],
          hint: `Find the per-pupil shortfall (10 × ${blackPerPupil} − ${blackPerPupil} = ${gapPerPupil}), then multiply by ${pupils}.`,
          solution: [
            `White per-pupil funding = R${blackPerPupil * 10}; Black per-pupil funding = R${blackPerPupil}.`,
            `Shortfall per pupil = R${gapPerPupil}.`,
            `Extra funding needed for ${pupils} pupils = ${gapPerPupil} × ${pupils} = **R${totalGap.toLocaleString("en-US")}**.`,
          ],
        };
      }
      const totalArea = rng.pick([20000, 30000, 40000, 50000, 60000, 80000, 100000, 120000, 150000, 200000, 250000, 300000]);
      const diffPct = 87 - 13; // 74 percentage points
      const diffArea = (totalArea * diffPct) / 100;
      return {
        prompt: `Under Grand Apartheid, **87%** of land was designated white and only **13%** allocated to Black Bantustans. Across a representative territory of **${totalArea.toLocaleString("en-US")} km²**, how many **more km²** were reserved for white control than for Black Bantustans?`,
        answer: { type: "number", value: diffArea, display: `${diffArea.toLocaleString("en-US")}` },
        hint: `Find the percentage gap (87% − 13% = 74%), then calculate 74% of ${totalArea.toLocaleString("en-US")}.`,
        solution: [
          `Percentage gap = 87% − 13% = **74%**.`,
          `Land difference = 74% of ${totalArea.toLocaleString("en-US")} = **${diffArea.toLocaleString("en-US")} km²**.`,
        ],
      };
    },
  },
  {
    id: "anti-apartheid-south-africa.chronology-spans",
    topicId: "anti-apartheid-south-africa",
    title: "Anti-Apartheid Chronology (1948–1994)",
    level: 1,
    guideRef: "sharpeville-armed-struggle",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const idxA = rng.int(0, SA_MILESTONES.length - 2);
        const idxB = rng.int(idxA + 1, SA_MILESTONES.length - 1);
        const a = SA_MILESTONES[idxA];
        const b = SA_MILESTONES[idxB];
        const gap = b.year - a.year;
        if (rng.bool()) {
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
        const pair = rng.shuffle(SA_MILESTONES).slice(0, 2);
        const [m1, m2] = pair;
        const earlier = m1.year < m2.year ? m1 : m2;
        const later = m1.year < m2.year ? m2 : m1;
        if (rng.bool()) {
          const gap = later.year - earlier.year;
          return {
            prompt: `How many years elapsed between **${m1.label}** and **${m2.label}**?`,
            answer: { type: "number", value: gap, display: `${gap} years` },
            hint: `Recall both years on the 1948–1994 timeline and subtract the earlier from the later.`,
            solution: [
              `Earlier: **${earlier.label}** (${earlier.year}).`,
              `Later: **${later.label}** (${later.year}).`,
              `Elapsed time = ${later.year} − ${earlier.year} = **${gap} years**.`,
            ],
          };
        }
        return {
          prompt: `Which of these two South African milestones happened **earlier**: **${m1.label}** or **${m2.label}**? Type the **year** of the earlier milestone.`,
          answer: { type: "number", value: earlier.year, display: `${earlier.year}` },
          traps: [
            {
              spec: { type: "number", value: later.year },
              feedback: `${later.year} was ${later.label}, which came ${later.year - earlier.year} years *after* ${earlier.label}.`,
            },
          ],
          hint: `Order both events across the 1948–1994 struggle and enter the smaller year.`,
          solution: [
            `**${earlier.label}** occurred first in **${earlier.year}**.`,
            `**${later.label}** occurred later in **${later.year}**.`,
          ],
        };
      }

      // Tier 3: 3-event span from 16 milestones (560 unique triples!)
      const trio = rng.shuffle(SA_MILESTONES).slice(0, 3);
      const minY = Math.min(trio[0].year, trio[1].year, trio[2].year);
      const maxY = Math.max(trio[0].year, trio[1].year, trio[2].year);
      const span = maxY - minY;
      const earliest = trio.find((t) => t.year === minY)!;
      const latest = trio.find((t) => t.year === maxY)!;
      return {
        prompt: `Three Anti-Apartheid milestones are listed in mixed order:\n- **${trio[0].label}**\n- **${trio[1].label}**\n- **${trio[2].label}**\n\nWhat is the total span in **years** from the earliest to the latest of these three milestones?`,
        answer: { type: "number", value: span, display: `${span} years` },
        hint: `Identify the earliest and latest events first, recall their years, and subtract.`,
        solution: [
          `Dates: ${trio.map((t) => `${t.label} (${t.year})`).join("; ")}.`,
          `Earliest: **${earliest.label}** (${minY}); Latest: **${latest.label}** (${maxY}).`,
          `Span = ${maxY} − ${minY} = **${span} years**.`,
        ],
      };
    },
  },
  {
    id: "anti-apartheid-south-africa.resistance-sanctions-match",
    topicId: "anti-apartheid-south-africa",
    title: "Resistance Campaigns & Global Sanctions",
    level: 2,
    guideRef: "soweto-1976-sanctions",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(RESISTANCE_CARDS);
        return {
          prompt: card.clues[rng.int(0, 2)],
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Focus on the date, leader, or type of pressure described.`,
          solution: [card.note],
        };
      }

      if (tier === 2) {
        const card = rng.pick(RESISTANCE_CARDS);
        const frames = [
          `Internal & external pressure review: ${card.clues[rng.int(0, 2)]}`,
          `Historical evidence match: ${card.clues[rng.int(0, 2)]}`,
          `Year 9 source file check: ${card.clues[rng.int(0, 2)]}`,
        ];
        return {
          prompt: rng.pick(frames),
          answer: { type: "text", accept: card.accept, display: card.answer },
          hint: `Distinguish 1950s peaceful groups, 1960–64 armed/exile groups, 1976–85 internal coalitions, and global sanctions.`,
          solution: [card.note],
        };
      }

      // Tier 3: Mix of economic strike/sanction impact calculations + high-level campaign identification
      if (rng.bool(0.55)) {
        const workers = rng.pick([40000, 50000, 60000, 80000, 100000, 120000, 150000, 200000, 250000, 300000]);
        const days = rng.pick([2, 3, 4, 5, 7, 10]);
        const lostWorkDays = workers * days;
        return {
          prompt: `During the mid-1980s, **COSATU** unions and the **UDF** called nationwide stay-aways to show apartheid's economic dependence on Black labour. If **${workers.toLocaleString("en-US")}** workers joined a **${days}-day** stay-away, how many total **worker-days** of production did South African employers lose?`,
          answer: { type: "number", value: lostWorkDays, display: `${lostWorkDays.toLocaleString("en-US")}` },
          hint: `Multiply the number of striking workers (${workers.toLocaleString("en-US")}) by ${days} days.`,
          solution: [
            `Lost worker-days = ${workers.toLocaleString("en-US")} × ${days} = **${lostWorkDays.toLocaleString("en-US")}**.`,
            `Massive labour stoppages like these alarmed white business leaders and accelerated pressure on Pretoria to negotiate.`,
          ],
        };
      }
      const card = rng.pick(RESISTANCE_CARDS);
      return {
        prompt: `Connect this turning point to the exact campaign, leader, or sanction: ${card.clues[rng.int(0, 2)]}`,
        answer: { type: "text", accept: card.accept, display: card.answer },
        hint: `Identify whether this belongs to 1950s defiance, Sharpeville/MK, Soweto/Biko, UDF/COSATU, or international boycotts.`,
        solution: [card.note],
      };
    },
  },
  {
    id: "anti-apartheid-south-africa.transition-voices-diagnosis",
    topicId: "anti-apartheid-south-africa",
    title: "Voices, Perspectives & 1994 Democracy",
    level: 3,
    guideRef: "end-of-apartheid-1994",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const item = rng.pick(TRANSITION_TIER1);
        const prefixes = ["", "1990–94 transition check: ", "Key historical concept: "];
        return {
          prompt: `${rng.pick(prefixes)}${item.prompt}`,
          answer: { type: "text", accept: item.accept, display: item.answer },
          hint: item.hint,
          solution: [item.explanation],
        };
      }

      if (tier === 2) {
        const voice = rng.pick(SA_VOICES);
        const quote = rng.pick(voice.quotes);
        const stems = [
          "Which key South African historical figure best matches this viewpoint?",
          "Source attribution check: Which leader expressed this argument during the apartheid era?",
        ];
        return {
          prompt: `${rng.pick(stems)}\n\n> ${quote}`,
          answer: { type: "text", accept: voice.accept, display: voice.speaker },
          hint: `Consider whether this represents apartheid ideology (Verwoerd), pragmatic reform (de Klerk), non-racial leadership (Mandela/Tambo/Tutu), or Black Consciousness (Biko).`,
          solution: [voice.rationale],
        };
      }

      // Tier 3: Mix of NOP perspective diagnosis + April 1994 democratic election vote-share analysis
      if (rng.bool(0.5)) {
        const districtVotes = rng.pick([10000, 20000, 25000, 40000, 50000, 60000, 80000, 100000, 120000, 200000]);
        const party = rng.pick([
          { name: "African National Congress (ANC)", pct: 63, actual: "62.6%" },
          { name: "National Party (NP)", pct: 20, actual: "20.4%" },
          { name: "Inkatha Freedom Party (IFP)", pct: 11, actual: "10.5%" },
        ]);
        const votes = (districtVotes * party.pct) / 100;
        return {
          prompt: `In South Africa's first multiracial election (**27 April 1994**), the **${party.name}** won roughly **${party.pct}%** of the national vote (exact: ${party.actual}). In a representative district casting **${districtVotes.toLocaleString("en-US")}** valid ballots at that same share, how many votes would the **${party.name}** win?`,
          answer: { type: "number", value: votes, display: `${votes.toLocaleString("en-US")}` },
          hint: `Calculate ${party.pct}% of ${districtVotes.toLocaleString("en-US")}.`,
          solution: [
            `${party.pct}% of ${districtVotes.toLocaleString("en-US")} = **${votes.toLocaleString("en-US")}** votes.`,
            `With the ANC winning 62.6% (and NP 20.4%, IFP 10.5%), Mandela formed a cooperative **Government of National Unity**.`,
          ],
        };
      }
      const voice = rng.pick(SA_VOICES);
      const quote = rng.pick(voice.quotes);
      const frames = [
        `Evaluating historical perspectives (NOP): Name the **leader** whose position is summarised below:\n\n> ${quote}`,
        `Comparing actors in South African history: Which **key figure** argued this stance?\n\n> ${quote}`,
      ];
      return {
        prompt: rng.pick(frames),
        answer: { type: "text", accept: voice.accept, display: voice.speaker },
        hint: `Match the specific policy, date, or philosophy to Mandela, Biko, Tutu, de Klerk, Verwoerd, or Tambo.`,
        solution: [voice.rationale],
      };
    },
  },
];
