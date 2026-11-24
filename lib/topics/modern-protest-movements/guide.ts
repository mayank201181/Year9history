import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "modern-protest-movements",
  title: "Modern Protests & Historian's Source Skills",
  strand: "Protest & Conflict",
  icon: "📢",
  summary: "Compare 21st-century digital protests with historic movements, master NOP source evaluation, and weigh competing historical interpretations.",
  intro:
    "How does a single teenager with a cardboard sign spark global marches in 150 countries—and why do some viral campaigns fade while slower, older movements toppled empires and segregation? In this unit you connect 21st-century youth, climate, and digital protests back to Indian Independence, US Civil Rights, and Anti-Apartheid, before sharpening two essential Year 9 historian's tools: evaluating sources with **Nature, Origin, Purpose (NOP) + Own Knowledge** and explaining **why historians disagree**.",
  guide: [
    {
      id: "modern-protests-digital-age",
      heading: "21st-Century Protests: Digital, Youth & Climate Movements",
      discovery: {
        problem:
          "In August 2018, 15-year-old Greta Thunberg sat alone outside the Swedish Parliament holding a hand-painted sign reading *Skolstrejk för klimatet* ('School strike for climate'). Thirteen months later, in September 2019, over 4 million people marched across more than 150 countries in a single week. Yet global carbon emissions kept rising. How could a movement grow that quickly without a political party—and why did speed alone not guarantee new laws?",
        idea:
          "Smartphones, hashtags, and global social networks slashed the time and cost needed to spread a protest message from months to minutes. Yet rapid digital mobilisation brings built-in trade-offs: low-effort online sharing (**slacktivism**), leaderless structures that struggle to negotiate formal treaties, and governments that can counter with algorithms, censorship, or simply waiting out the news cycle.",
      },
      body: `Protest in the 21st century looks very different from the leaflet printing presses and church phone trees of the 1950s and 1960s. Social media platforms, encrypted messaging apps, and pocket smartphone cameras allow ordinary citizens—especially young people too young to vote—to coordinate demonstrations across continents almost overnight.

### Major 21st-Century Protest Waves
- **Youth Climate Strikes / Fridays for Future (2018–present):** Sparked by Greta Thunberg in Sweden and joined by millions of school students worldwide, using simple weekly strikes, eye-catching placards, and social media livestreams to pressure governments ahead of UN climate summits.
- **#MeToo (founded 2006; globalised 2017):** Originally created by activist **Tarana Burke** in 2006 to support survivors of sexual violence, the phrase exploded globally in October 2017 as a hashtag, exposing workplace harassment across film, media, politics, and law—leading to legal reforms on non-disclosure agreements in several countries.
- **Anti-Racism & Citizen Journalism (e.g. Black Lives Matter, 2013 & 2020):** Founded in 2013 and propelled worldwide in May–June 2020 after a teenager filmed the murder of George Floyd on a smartphone. Instant video proof made official denial impossible and triggered solidarity rallies from London to Sydney.
- **Digital Pro-Democracy Movements (e.g. Arab Spring 2010–11; Hong Kong 2014 & 2019):** Protesters used encrypted apps (such as Telegram), AirDrop, and crowd-sourced maps to organise decentralised marches and dodge riot police.

### Strengths vs Limits of Digital Protest
| Dimension | Digital Advantage | Digital Vulnerability / Limit |
|---|---|---|
| **Speed & Cost** | Viral posts reach millions globally within hours at almost zero cost | Short attention spans mean trending hashtags fade once algorithms shift |
| **Gatekeepers** | Bypasses state or corporate media through eyewitness smartphone video | Misinformation, edited clips, and online echo chambers polarise audiences |
| **Structure** | Horizontal, leaderless networks are harder to silence by arresting one person | Without recognised leaders, movements struggle to negotiate binding deals |
| **Participation** | Low barrier lets youth and isolated citizens join safely online | **Slacktivism**—clicking 'like' or reposting feels active without forcing economic or political costs |
| **State Response** | Encrypted tools help crowds adapt rapidly in real time | Governments can deploy internet blackouts, facial recognition, and surveillance |`,
      diagram: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of 20th-century organised protest and 21st-century digital protest">
  <rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">20th-Century Organised Protest vs 21st-Century Digital Protest</text>
  <rect x="18" y="40" width="250" height="198" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="143" y="61" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">20th-Century Mass Organisations</text>
  <text x="143" y="77" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(INC, SCLC/NAACP, ANC/UDF)</text>
  <rect x="30" y="88" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="40" y="107" font-size="11" fill="var(--ink)">Slower build: leaflets, unions &amp; churches</text>
  <rect x="30" y="125" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="40" y="144" font-size="11" fill="var(--ink)">Clear leadership able to negotiate laws</text>
  <rect x="30" y="162" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="40" y="181" font-size="11" fill="var(--ink)">High staying power in long boycotts</text>
  <rect x="30" y="199" width="226" height="28" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" />
  <text x="40" y="217" font-size="10.5" font-weight="700" fill="var(--bad)">Risk: banning or jailing key leaders</text>

  <rect x="292" y="40" width="250" height="198" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />
  <text x="417" y="61" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--good)">21st-Century Digital Networks</text>
  <text x="417" y="77" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(Climate Strikes, #MeToo, BLM)</text>
  <rect x="304" y="88" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="314" y="107" font-size="11" fill="var(--ink)">Instant global reach via smartphones</text>
  <rect x="304" y="125" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="314" y="144" font-size="11" fill="var(--ink)">Citizen video exposes abuses live</text>
  <rect x="304" y="162" width="226" height="30" rx="6" fill="var(--surface)" stroke="var(--line)" />
  <text x="314" y="181" font-size="11" fill="var(--ink)">Horizontal: no single leader to arrest</text>
  <rect x="304" y="199" width="226" height="28" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" />
  <text x="314" y="217" font-size="10.5" font-weight="700" fill="var(--bad)">Risk: slacktivism &amp; fragile bargaining</text>
</svg>`,
      diagramCaption: "Digital networks excel at rapid awareness and global reach, whereas older mass organisations often built deeper bargaining endurance.",
      workedExamples: [
        {
          title: "Evaluating Digital Protest Strength and Limit",
          problem:
            "A student argues: 'Social media has made modern protests completely unbeatable because millions can join in one day.' Give one specific strength that supports this claim and one major limitation that challenges it.",
          steps: [
            "Identify a concrete digital strength: instant low-cost mobilisation and eyewitness video (e.g. Fridays for Future reached 150+ countries within a year, or smartphone footage of George Floyd sparked global rallies).",
            "Identify a structural weakness: online engagement can stay at the level of 'slacktivism' (reposting without sustained pressure), and leaderless networks often lack formal representatives to negotiate binding laws.",
            "Conclude with balance: social media excels at rapid awareness, yet long-term change still requires sustained offline organisation.",
          ],
          answer:
            "Strength: smartphones and hashtags rapidly mobilise global crowds and expose abuses in real time. Limitation: slacktivism, short media attention spans, leaderless fragmentation, and state censorship often prevent viral outrage from turning into lasting legislation.",
          yourTurn: {
            question:
              "What term do historians and sociologists use for low-effort online activism—such as clicking 'like' or sharing a hashtag—that makes people feel involved without taking sustained offline action?",
            answer: {
              type: "text",
              accept: ["slacktivism", "clicktivism", "armchair activism"],
              display: "slacktivism",
            },
            solution:
              "Slacktivism (or clicktivism) describes low-effort online gestures like sharing hashtags or changing profile photos that do not impose real political or economic pressure.",
          },
        },
      ],
      keyPoints: [
        "21st-century protests harness smartphones, hashtags, and encrypted apps to mobilise millions globally at minimal cost.",
        "Citizen journalism bypasses traditional gatekeepers by filming injustices directly, as seen in 2020 anti-racism protests.",
        "Youth movements like Fridays for Future give non-voting students global visibility and moral urgency.",
        "Key limits include slacktivism, leaderless fragmentation during negotiations, short attention cycles, and digital state surveillance.",
      ],
      whyItWorks:
        "Sociologist Zeynep Tufekci calls this the 'tactical freeze': digital tools let a movement scale up overnight without building the slow decision-making committees, legal funds, and local branches that historic movements spent years forging. When a government refuses to budge, movements without offline organisational muscle struggle to adapt their tactics.",
      strategies: [
        "Pair every digital strength with its mirror-image vulnerability (speed vs short attention span; leaderless safety vs weak bargaining power).",
        "Distinguish between raising awareness (which viral campaigns do brilliantly) and securing binding legal or economic reform.",
      ],
      thinkDeeper:
        "Why did Tarana Burke's quiet 2006 grassroots #MeToo work matter just as much as the viral October 2017 hashtag wave?",
    },
    {
      id: "comparing-protest-success",
      heading: "Why Do Some Protest Movements Succeed?",
      discovery: {
        problem:
          "The 1955–56 Montgomery Bus Boycott forced bus desegregation in 381 days. India's independence campaign took nearly three decades from Amritsar (1919) to 1947. South Africa's Anti-Apartheid struggle lasted 46 years (1948–94). What shared ingredients pushed all three across the finish line—and why did some take far longer than others?",
        idea:
          "No single tactic wins automatically. Successful movements align five interacting ingredients: a **clear, focused goal**, **moral discipline that wins sympathy**, **real economic or political leverage**, **resilient organisation and leadership**, and **favourable external timing**.",
      },
      body: `Comparing protest movements across different centuries and continents prevents us from falling for one-size-fits-all myths such as "non-violence always works immediately" or "violence never plays a role". Instead, historians weigh **five core ingredients** across India, the US Civil Rights Movement, South Africa, and 21st-century campaigns.

### The Five Ingredients of Protest Success
1. **Clear, Focused Goals:** Concrete targets are easier to win than sweeping global transformations. Repealing the British Salt Tax, ending bus segregation in Montgomery, or abolishing South Africa's Pass Laws gave protesters visible milestones—whereas decarbonising the entire world economy involves hundreds of rival governments and industries.
2. **Moral Discipline & Public Sympathy:** Non-violent direct action (*satyagraha* in India; sit-ins and Selma marches in the US; early Defiance Campaigns in South Africa) creates a stark contrast when authorities reply with batons, police dogs, or gunfire. Media—newspapers in 1930, television in 1963–65, smartphones today—amplifies that moral shock.
3. **Economic & Political Leverage:** Governments rarely concede on conscience alone. Boycotting British textiles (*khadi*) hurt Lancashire mills; Black riders made up around 70% of Montgomery bus fares; international banking sanctions, sports boycotts, and township strikes pushed South Africa's economy into crisis by the late 1980s.
4. **Resilient Organisation & Leadership:** Iconic figures (Gandhi, Martin Luther King Jr., Nelson Mandela) inspired crowds, yet behind them stood deep institutions—the Indian National Congress, NAACP lawyers, Black churches, SNCC students, the ANC, UDF, and COSATU trade unions. When apartheid banned peaceful parties after Sharpeville (1960), South African resistance survived through underground networks, armed sabotage (*Umkhonto we Sizwe*), youth uprisings (Soweto 1976), and civic coalitions.
5. **Favourable Timing & External Context:** External shocks often tip the balance. World War II bankrupted Britain and brought Clement Attlee's Labour government to power in 1945; Cold War competition embarrassed the United States when Soviet media broadcast Birmingham police dogs; the fall of the Berlin Wall in 1989 ended South Africa's claim to be a vital anti-communist ally, pushing F.W. de Klerk to negotiate in 1990.

### Cross-Movement Comparison
| Movement | Moral / Media Shock | Economic / Political Leverage | Key External Timing |
|---|---|---|---|
| **Indian Independence (1919–47)** | Amritsar (1919) & Salt March (1930) | Boycott of British cloth & administration | Britain exhausted by WWII; Attlee elected (1945) |
| **US Civil Rights (1954–68)** | TV footage of Birmingham (1963) & Selma (1965) | Montgomery Bus Boycott; Black voter blocs & LBJ | Cold War rivalry damaged US global image |
| **Anti-Apartheid (1948–94)** | Sharpeville (1960) & Soweto (1976) photos | Global sanctions, divestment & township strikes | End of Cold War (1989) removed Western backing |
| **Modern Climate Strikes (2018+)** | Youth moral urgency & global viral reach | Growing green divestment, yet fossil-fuel reliance remains huge | Competing global crises & fragmented national interests |`,
      diagram: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five ingredients of protest success diagram linking internal tactics and external context">
  <rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Five Ingredients of Successful Protest Movements</text>
  <rect x="200" y="102" width="160" height="58" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <text x="280" y="127" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">LASTING POLITICAL</text>
  <text x="280" y="145" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">CHANGE</text>

  <line x1="150" y1="68" x2="215" y2="104" stroke="var(--line)" stroke-width="2" />
  <line x1="410" y1="68" x2="345" y2="104" stroke="var(--line)" stroke-width="2" />
  <line x1="145" y1="184" x2="215" y2="154" stroke="var(--line)" stroke-width="2" />
  <line x1="415" y1="184" x2="345" y2="154" stroke="var(--line)" stroke-width="2" />
  <line x1="280" y1="160" x2="280" y2="205" stroke="var(--line)" stroke-width="2" />

  <rect x="20" y="42" width="160" height="46" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />
  <text x="100" y="61" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">1. Clear, Focused Goal</text>
  <text x="100" y="77" text-anchor="middle" font-size="10" fill="var(--ink-2)">Salt Tax, bus seats, voting act</text>

  <rect x="380" y="42" width="160" height="46" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />
  <text x="460" y="61" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">2. Moral Sympathy</text>
  <text x="460" y="77" text-anchor="middle" font-size="10" fill="var(--ink-2)">Discipline &amp; media exposure</text>

  <rect x="20" y="168" width="160" height="46" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="100" y="187" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">3. Economic Leverage</text>
  <text x="100" y="203" text-anchor="middle" font-size="10" fill="var(--ink-2)">Boycotts, strikes, sanctions</text>

  <rect x="380" y="168" width="160" height="46" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="460" y="187" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">4. Deep Organisation</text>
  <text x="460" y="203" text-anchor="middle" font-size="10" fill="var(--ink-2)">Leaders + grassroots networks</text>

  <rect x="175" y="205" width="210" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="280" y="224" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">5. Favourable External Timing</text>
  <text x="280" y="239" text-anchor="middle" font-size="10" fill="var(--ink-2)">WWII, Cold War, 1989 shift</text>
</svg>`,
      diagramCaption: "Internal movement tactics (1–4) must usually intersect with favourable external context (5) to force lasting legal change.",
      workedExamples: [
        {
          title: "Comparing Leverage Across Two Protest Movements",
          problem:
            "Why did economic pressure work faster in the 1955–56 Montgomery Bus Boycott than in South Africa's Anti-Apartheid struggle?",
          steps: [
            "Compare the scale of the target: Montgomery targeted a single city's bus company where Black commuters paid roughly 70% of fares, creating an immediate local revenue crisis.",
            "Compare the political framework: US federal courts (Browder v. Gayle, 1956) could overrule Alabama segregation laws, whereas South Africa's white minority parliament controlled both the courts and security forces.",
            "Compare timing of leverage: South Africa only faced crippling global financial sanctions and bank loan refusals in the mid-1980s, decades after apartheid began in 1948.",
          ],
          answer:
            "Montgomery protesters immediately withdrew ~70% of a single bus company's income and had a US Supreme Court able to overturn local laws, whereas apartheid controlled an entire national state and required decades of internal resistance plus 1980s global sanctions to crack.",
          yourTurn: {
            question:
              "Which major international event in 1989 removed Western governments' Cold War fear of an ANC-aligned South Africa, helping push President F.W. de Klerk to negotiate?",
            answer: {
              type: "text",
              accept: ["end of the cold war", "fall of the berlin wall", "collapse of communism", "cold war ending", "fall of the soviet union"],
              display: "End of the Cold War / Fall of the Berlin Wall",
            },
            solution:
              "The end of the Cold War (symbolised by the fall of the Berlin Wall in 1989) removed apartheid's claim to be a strategic anti-communist ally of the West.",
          },
        },
      ],
      keyPoints: [
        "Successful movements combine internal tactics (clear goals, moral discipline, economic leverage, strong organisations) with external timing.",
        "Non-violent protest works best when media exposes state brutality to audiences that hold political or economic power over the regime.",
        "Economic pressure—cloth boycotts in India, bus boycotts in Alabama, and sanctions on South Africa—makes maintaining injustice financially unbearable.",
        "Comparing India, the US, South Africa, and modern movements shows that 'success' can be partial (e.g. India won independence but suffered Partition; US won voting laws yet kept economic inequality).",
      ],
      whyItWorks:
        "Political scientist Erica Chenoweth's research into over 300 campaigns found that mass non-violent movements succeed roughly twice as often as violent ones—not through magic, but because broad peaceful participation attracts wider coalitions, triggers defections inside the state, and multiplies economic leverage.",
      strategies: [
        "When writing a comparative essay, organise by **theme** (e.g. Economic Leverage, Media, External Context) rather than writing one disconnected paragraph per country.",
        "Always qualify 'success' by noting both breakthroughs won and unfinished struggles left behind.",
      ],
      thinkDeeper:
        "Would the US Civil Rights Movement have achieved the 1964 Civil Rights Act without the Cold War—or did grassroots protest force federal politicians' hands regardless?",
    },
    {
      id: "source-provenance-nop",
      heading: "Evaluating Historical Sources with NOP & Own Knowledge",
      discovery: {
        problem:
          "You are researching the 1963 Birmingham civil rights marches. You find a front-page editorial from a segregationist Alabama newspaper branding the marchers 'outside troublemakers threatening public order'. A classmate writes: *'This source is biased, so it is completely useless to a historian.'* Why would an examiner award that sentence almost zero marks?",
        idea:
          "In History, **bias does NOT make a source useless—bias IS evidence!** That editorial is unreliable as a neutral count of local Black opinion, yet it is *hugely useful* for showing how segregationist elites justified resisting desegregation and tried to turn white readers against the marchers.",
      },
      body: `Every historical source is like a witness in a courtroom: no witness sees everything, and almost every witness has a point of view. Your job as a historian is not to throw sources in the bin for having opinions, but to interrogate **what a source tells us**, **who made it and why**, and **what it is useful FOR**.

### The Golden Formula: Content + NOP + Own Knowledge
To evaluate any source at top Year 9 standard, combine three pillars:
1. **Content (What does it show/say?):** Quote a brief phrase or describe a concrete visual detail—and notice **omissions** (what has been deliberately left out?).
2. **Provenance — NOP:**
   - **N — Nature:** What *kind* of source is it? A secret government telegram, a private diary, a public rally speech, a political cartoon, a staged photograph, or a memoir written 30 years later? Each format shapes honesty and completeness.
   - **O — Origin:** *Who* created it, *when*, and *where*? Were they an eyewitness or second-hand? Were they a government official, an activist, or a foreign journalist? Was it made in the heat of the moment or with hindsight?
   - **P — Purpose:** *Why* was it made and for *whom*? Was the creator trying to win votes, reassure anxious superiors, raise donations, persuade foreign governments, or record private doubts?
3. **Own Knowledge (Contextual Testing):** Test the source's claims against verified historical facts you already know. Does contextual knowledge corroborate (back up) the source, contradict it, or expose an exaggeration?

### Reliability vs Utility — Never Confuse Them!
- **Reliability** asks: *Can we trust the factual accuracy of what this source claims?*
- **Utility (Usefulness)** asks: *How valuable is this source for answering a specific historical enquiry?*
- A piece of Nazi or apartheid propaganda has **low reliability** for objective facts, yet **high utility** for revealing the regime's fears, ideology, and persuasion tactics.
- **Cross-referencing** compares two or more sources from different viewpoints to see where independent accounts agree and where provenance explains why they clash.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Historian's NOP plus Own Knowledge source evaluation framework">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Historian's Source Evaluation Lens: Content + NOP + Own Knowledge</text>

  <rect x="18" y="42" width="160" height="122" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="98" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. CONTENT</text>
  <text x="28" y="85" font-size="10.5" fill="var(--ink)">• Quote exact claim</text>
  <text x="28" y="103" font-size="10.5" fill="var(--ink)">• Note tone &amp; imagery</text>
  <text x="28" y="121" font-size="10.5" fill="var(--ink)">• Spot omissions</text>
  <text x="28" y="139" font-size="10.5" fill="var(--ink-2)">(What is left unsaid?)</text>

  <rect x="198" y="42" width="164" height="122" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <text x="280" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">2. PROVENANCE (NOP)</text>
  <text x="208" y="85" font-size="10.5" font-weight="700" fill="var(--ink)">N: Nature (type/format)</text>
  <text x="208" y="106" font-size="10.5" font-weight="700" fill="var(--ink)">O: Origin (who/when/where)</text>
  <text x="208" y="127" font-size="10.5" font-weight="700" fill="var(--ink)">P: Purpose (why/audience)</text>
  <text x="208" y="148" font-size="10" fill="var(--ink-2)">Explain HOW NOP shapes it</text>

  <rect x="382" y="42" width="160" height="122" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />
  <text x="462" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">3. OWN KNOWLEDGE</text>
  <text x="392" y="85" font-size="10.5" fill="var(--ink)">• Test factual accuracy</text>
  <text x="392" y="103" font-size="10.5" fill="var(--ink)">• Add historical context</text>
  <text x="392" y="121" font-size="10.5" fill="var(--ink)">• Cross-reference with</text>
  <text x="392" y="139" font-size="10.5" fill="var(--ink)">other viewpoints</text>

  <line x1="98" y1="164" x2="210" y2="188" stroke="var(--brand)" stroke-width="1.8" />
  <line x1="280" y1="164" x2="280" y2="188" stroke="var(--brand)" stroke-width="1.8" />
  <line x1="462" y1="164" x2="350" y2="188" stroke="var(--good)" stroke-width="1.8" />

  <rect x="65" y="188" width="430" height="48" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />
  <text x="280" y="209" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">BALANCED UTILITY JUDGEMENT: "Useful FOR what?"</text>
  <text x="280" y="226" text-anchor="middle" font-size="10.5" fill="var(--ink)">Never dismiss as "biased = useless" — state what it reveals AND its limits</text>
</svg>`,
      diagramCaption: "Combine what is inside the source (Content), who made it and why (NOP), and your contextual Own Knowledge to judge utility.",
      workedExamples: [
        {
          title: "Evaluating a 1930 British Colonial Telegram on the Salt March",
          problem:
            "Source: A confidential telegram from Viceroy Lord Irwin in Delhi to the British Government in London, April 1930: *'Gandhi's march to the sea attracts curious villagers, though our district officers expect excitement to subside once monsoon rains arrive. Arresting him prematurely would risk making him a martyr.'* How useful is this source for studying the impact of the 1930 Salt March?",
          steps: [
            "Analyse Content: The telegram shows that villagers were gathering along Gandhi's route and reveals British anxiety that arresting Gandhi too soon could backfire and create a 'martyr'.",
            "Apply NOP: Nature = confidential government telegram (not public propaganda, so more candid about official fears); Origin = Viceroy Lord Irwin in April 1930 (top British administrator writing during the march); Purpose = to brief London and justify a cautious arrest strategy.",
            "Test with Own Knowledge: Irwin underestimated the march—within weeks of reaching Dandi on 6 April 1930, over 60,000 Indians were arrested nationwide and international newspapers exposed British repression.",
            "Balanced Utility Judgement: Very useful for understanding British strategic anxieties and initial miscalculations, though limited on its own for measuring Indian protesters' true determination.",
          ],
          answer:
            "Highly useful for revealing private British fears of making Gandhi a martyr (because its confidential nature encourages candour), though contextual knowledge shows Irwin underestimated the massive nationwide civil disobedience that followed.",
          yourTurn: {
            question:
              "In the NOP framework, which letter refers to WHY a source was created and WHICH audience it was intended to influence?",
            answer: {
              type: "text",
              accept: ["P", "Purpose", "p - purpose"],
              display: "P (Purpose)",
            },
            solution:
              "P stands for Purpose: why the creator produced the source (e.g. to persuade, justify, fundraise, or record private thoughts) and who was meant to read or see it.",
          },
        },
      ],
      keyPoints: [
        "NEVER write 'this source is biased so it is useless'—explain what the bias itself reveals about attitudes, fears, or propaganda.",
        "NOP stands for **Nature** (type of document), **Origin** (who/when/where), and **Purpose** (why/target audience).",
        "Always link provenance directly to the content and test claims against specific **Own Knowledge**.",
        "Judge utility against the specific enquiry question: a source can be weak for factual statistics yet priceless for studying ideology.",
      ],
      whyItWorks:
        "Every historical event leaves fragments created by human beings with goals. Treating provenance as a clue rather than a flaw unlocks two layers of evidence at once: the literal facts the source reports AND the unspoken mindset of the person who produced it.",
      strategies: [
        "Use the sentence stem: *'This source is useful for showing [X] because as a [Nature] by [Origin] aiming to [Purpose], it reveals… However, my own knowledge shows it omits/exaggerates [Y].'*",
        "Watch for private vs public nature: a confidential memo or personal diary often admits doubts that a public speech hides.",
      ],
      thinkDeeper:
        "Can a photograph ever be 'biased'? Think about what a photographer chooses to frame, what happens just outside the lens, and what caption an editor prints underneath.",
    },
    {
      id: "historical-interpretations",
      heading: "Why Historians Disagree: Evaluating Interpretations",
      discovery: {
        problem:
          "Two respected historians write books explaining how apartheid ended in 1994. Historian A highlights Nelson Mandela's statesmanship and President F.W. de Klerk's dramatic February 1990 speech. Historian B focuses on township rent boycotts, COSATU factory strikes, and international bank sanctions that forced de Klerk's hand. Neither historian lied about a single date—so why do they tell such different stories?",
        idea:
          "History is not a single fixed list of facts; it is an **argument built from evidence**. Historians reach different interpretations because they ask different questions, choose different **lenses** (such as top-down 'Great Man' history vs bottom-up 'grassroots' social history), emphasise different evidence, and write in different eras.",
      },
      body: `One of the biggest leaps in Year 9 History is distinguishing a **contemporary primary source** from a **historical interpretation**—and learning how to judge why two careful scholars disagree.

### Primary Source vs Historical Interpretation
- **Primary Source:** Evidence created *during* (or by a direct participant in) the period being studied—for example, Rosa Parks's 1955 arrest record, a 1963 newsreel, or a 1976 Soweto student flyer.
- **Historical Interpretation:** A *later* account created after the event that selects, connects, and evaluates evidence to make an argument—such as a historian's book, a museum exhibition, a TV documentary, or a school textbook.

### 'Great Man' History vs Grassroots History
A classic debate across all protest movements pits two interpretations against each other:
- **'Great Man' (Top-Down) Interpretation:** Credits towering leaders and elite decision-makers—Gandhi, Martin Luther King Jr., President Lyndon B. Johnson, Nelson Mandela, F.W. de Klerk—as the decisive engine of change.
  - *Strength:* Captures visionary strategy, charismatic speeches that unified supporters, and high-level negotiations.
  - *Limit:* Risks erasing thousands of ordinary marchers, women organisers (such as Jo Ann Robinson in Montgomery or Ella Baker in SNCC), students, and wider economic shocks.
- **Grassroots (Bottom-Up) Interpretation:** Credits ordinary citizens, local branches, students, workers, and community networks—the unnamed Indians boiling illegal salt, Montgomery residents carpooling for 381 days, Soweto school pupils in 1976.
  - *Strength:* Explains how mass pressure actually paralysed unjust systems on the ground.
  - *Limit:* Can understate how national figures focused media attention and brokered final legal settlements.

### Why Historians Disagree (F-E-C-P)
1. **Focus / Lens:** Political historians zoom in on parliaments and leaders; social historians zoom in on families, workers, and youths; economic historians track trade, boycotts, and GDP.
2. **Evidence Selected & Weighted:** Using cabinet archives highlights elite decisions, while oral-history interviews highlight ordinary activists.
3. **Context of the Historian's Era:** Earlier histories often centred famous male leaders; since the 1970s, historians have recovered women's, youth, and working-class voices—and newly declassified files constantly revise old conclusions.
4. **Purpose & Audience:** A gripping popular biography focuses on one hero, whereas an academic study weighs complex structural causes.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Great Man top-down versus Grassroots bottom-up historical interpretation pyramid">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Same Protest Event, Two Historical Lenses</text>

  <polygon points="280,44 175,214 385,214" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2" />
  <polygon points="280,44 236,115 324,115" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8" />
  <polygon points="236,115 205,165 355,165 324,115" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <polygon points="205,165 175,214 385,214 355,165" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8" />

  <text x="280" y="92" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">National Leaders</text>
  <text x="280" y="106" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Gandhi, MLK, Mandela</text>
  <text x="280" y="144" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warn)">Organisers &amp; Networks</text>
  <text x="280" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">NAACP, SNCC, UDF, Unions</text>
  <text x="280" y="188" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">Grassroots Protesters</text>
  <text x="280" y="203" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Boycotters, students, workers</text>

  <rect x="16" y="54" width="145" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4" />
  <text x="88" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Top-Down Lens</text>
  <text x="88" y="90" text-anchor="middle" font-size="9.8" fill="var(--ink)">'Great Man' history:</text>
  <text x="88" y="104" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">speeches &amp; talks</text>
  <line x1="161" y1="84" x2="246" y2="84" stroke="var(--brand)" stroke-width="1.6" />

  <rect x="399" y="152" width="145" height="62" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.4" />
  <text x="471" y="172" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Bottom-Up Lens</text>
  <text x="471" y="188" text-anchor="middle" font-size="9.8" fill="var(--ink)">Grassroots history:</text>
  <text x="471" y="202" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">mass everyday action</text>
  <line x1="399" y1="184" x2="365" y2="184" stroke="var(--good)" stroke-width="1.6" />

  <text x="280" y="236" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Best evaluation: weigh BOTH layers using verified evidence!</text>
</svg>`,
      diagramCaption: "Top-down and bottom-up interpretations examine different layers of the same protest movement rather than inventing facts.",
      workedExamples: [
        {
          title: "Judging a 'Great Man' Interpretation of Indian Independence",
          problem:
            "Interpretation A (from a 1958 biography): *'Without Mahatma Gandhi's spiritual genius and non-violent campaigns, the British Raj would never have surrendered India in 1947.'* How convincing is Interpretation A?",
          steps: [
            "Identify the interpretation's argument: It adopts a 'Great Man' view crediting Gandhi's leadership and non-violence as the decisive cause of independence.",
            "Support with Own Knowledge (where it IS convincing): Gandhi turned the Indian National Congress from an elite talking shop into a mass movement, and the 1930 Salt March and cloth boycotts shattered Britain's moral and economic grip.",
            "Challenge with Own Knowledge (what it leaves out): It ignores Britain's severe economic exhaustion after WWII, Clement Attlee's 1945 Labour government wanting decolonisation, and other leaders such as Nehru, Muhammad Ali Jinnah, and Subhas Chandra Bose—plus millions of ordinary Indians.",
            "Reach a balanced judgement: Partially convincing—Gandhi was vital for mass mobilisation, yet independence resulted from the interaction of grassroots pressure, multiple leaders, and WWII exhaustion.",
          ],
          answer:
            "Partially convincing: Gandhi was crucial in transforming nationalism into a mass moral force (e.g. 1930 Salt March), yet the biography overstates one leader by omitting Britain's post-WWII bankruptcy, Attlee's Labour government, other leaders (Nehru, Jinnah), and ordinary protesters.",
          yourTurn: {
            question:
              "Is a 2019 history documentary about the 1965 Selma marches classified as a 'primary source' or a 'historical interpretation'?",
            answer: {
              type: "text",
              accept: ["historical interpretation", "interpretation", "a historical interpretation", "secondary interpretation"],
              display: "historical interpretation",
            },
            solution:
              "A 2019 documentary is created long after 1965 and selects evidence to tell a structured argument, making it a historical interpretation (though it may include clips of primary newsreel footage inside it).",
          },
        },
      ],
      keyPoints: [
        "A primary source comes from the time of the event; a historical interpretation is a later argument constructed from evidence.",
        "Historians disagree not because one is lying, but due to differences in **Focus**, **Evidence**, **Context**, and **Purpose** (FECP).",
        "'Great Man' history spotlights iconic leaders, whereas grassroots history uncovers ordinary protesters, women, youth, and local networks.",
        "To evaluate an interpretation, explain what it argues, test it against specific own knowledge (both supporting and challenging), and reach a weighted judgement.",
      ],
      whyItWorks:
        "Treating interpretations as reasoned arguments rather than 'right vs wrong facts' is what separates Year 9 critical thinkers from memorisers. Testing every claim against concrete historical evidence lets you decide *how far* an interpretation convinces.",
      strategies: [
        "Do NOT apply a crude 'bias' attack to historians—explain *why* their focus, archive base, or audience led them to emphasise one cause over another.",
        "Use a balanced structure: *'Interpretation A is convincing to an extent because [specific evidence]… However, it is limited because it overlooks [counter-evidence]… Overall…'*",
      ],
      thinkDeeper:
        "Fifty years from now, how might two different historians disagree over whether Greta Thunberg or millions of anonymous social media users mattered more to the 2019 climate strikes?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What does NOP stand for in History source analysis?", back: "**Nature** (type of source), **Origin** (who made it, when, where), and **Purpose** (why it was made and for what audience)." },
      { front: "Why should you NEVER write 'this source is biased so it is useless'?", back: "Bias is valuable historical evidence—it reveals the attitudes, fears, values, and persuasion methods of the person or group who created the source." },
      { front: "What is the difference between reliability and utility?", back: "**Reliability** asks whether a source's factual claims can be trusted; **utility** asks how useful a source is for answering a specific historical enquiry." },
      { front: "What is 'slacktivism'?", back: "Low-effort online activism (such as clicking 'like' or sharing a hashtag) that creates a feeling of participation without applying sustained offline political or economic pressure." },
      { front: "What is citizen journalism in 21st-century protest?", back: "Ordinary eyewitnesses using smartphones and social media to film and broadcast events directly, bypassing traditional state or corporate media gatekeepers." },
      { front: "Why can leaderless digital movements struggle to win permanent laws?", back: "Without recognised spokespeople or formal committees, it is hard to negotiate binding settlements with governments or pivot tactics when initial viral energy fades." },
      { front: "Name the five ingredients of successful protest movements.", back: "1) Clear focused goals, 2) Moral discipline & sympathy, 3) Economic/political leverage, 4) Resilient organisation & leadership, 5) Favourable external timing." },
      { front: "How did external timing help end South African apartheid?", back: "The end of the Cold War in 1989 ended South Africa's value as a Western anti-communist ally, intensifying sanctions and pushing F.W. de Klerk to negotiate in 1990." },
      { front: "How did Cold War timing help the US Civil Rights Movement?", back: "Television footage of police brutality in Birmingham (1963) and Selma (1965) embarrassed the US globally during Cold War rivalry with the USSR, pressuring Washington to pass federal laws." },
      { front: "What is the difference between a primary source and a historical interpretation?", back: "A **primary source** is contemporary evidence from the time studied; a **historical interpretation** is a later account (book, documentary, museum display) arguing how to explain the past." },
      { front: "What is 'Great Man' (top-down) history?", back: "An interpretation that explains historical change mainly through the vision and actions of prominent leaders (e.g. Gandhi, MLK, Mandela, LBJ)." },
      { front: "What is 'grassroots' (bottom-up) history?", back: "An interpretation that explains historical change through the collective everyday action of ordinary people, students, workers, and local community networks." },
      { front: "What is cross-referencing?", back: "Comparing two or more sources from different origins to test where claims corroborate each other and where provenance explains contradictions." },
      { front: "Who originally coined 'Me Too' in 2006 before it went viral in 2017?", back: "Activist **Tarana Burke**, who built grassroots support for survivors over a decade before the hashtag spread globally on social media." },
    ],
    mustKnow: [
      "Explain at least two strengths and two limitations of 21st-century digital and youth protest movements.",
      "Compare Indian Independence, US Civil Rights, Anti-Apartheid, and modern protests using shared thematic factors.",
      "Explain why economic leverage and external timing often determine whether moral protest converts into legal reform.",
      "Apply Content + Nature, Origin, Purpose (NOP) + Own Knowledge to evaluate how useful a historical source is.",
      "Explain why a biased propaganda source can still be highly useful for a specific historical enquiry.",
      "Cross-reference two contrasting sources and explain why they differ using their provenance.",
      "Distinguish clearly between a primary source and a later historical interpretation.",
      "Contrast 'Great Man' (top-down) and grassroots (bottom-up) interpretations using named historical evidence.",
      "Explain four reasons why honest historians can reach different interpretations of the same event (FECP).",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'This source is biased, therefore it is useless to a historian.'",
        right: "Write instead: 'Although this source is one-sided and unreliable for neutral facts, it is highly useful for showing how its creator attempted to persuade their audience.'",
      },
      {
        wrong: "Never write: 'Primary sources are always more trustworthy than later books because eyewitnesses were there.'",
        right: "Write instead: 'Eyewitness sources offer immediacy, yet they can have a narrow view or strong purpose; later interpretations have hindsight and access to wider archives.'",
      },
      {
        wrong: "Never write: 'Two historians disagree because one of them got the facts wrong or made things up.'",
        right: "Write instead: 'Historians disagree because they ask different questions, focus on different lenses (e.g. elite politics vs grassroots activism), and weight different archives.'",
      },
      {
        wrong: "Never write: 'Social media guarantees that modern protests succeed faster than older movements.'",
        right: "Write instead: 'Social media accelerates awareness and global mobilisation, but slacktivism and leaderless structures can make long-term negotiation harder.'",
      },
      {
        wrong: "Never write: 'Non-violent marches alone automatically forced empires and regimes to give in.'",
        right: "Write instead: 'Non-violent discipline won crucial sympathy, yet lasting victory usually required economic leverage (boycotts/sanctions), deep organisation, and favourable external timing.'",
      },
      {
        wrong: "Never write: 'Nature means whether a source is natural or man-made.'",
        right: "Write instead: 'In NOP, Nature means the format or genre of the source—such as a private diary, secret telegram, public speech, newspaper cartoon, or memoir.'",
      },
    ],
    examMistakes: [
      "Listing N, O, and P mechanically ('It is a speech by X in 1963') without explaining HOW that provenance affects usefulness.",
      "Forgetting to bring in **Own Knowledge** to test whether a source's claims are accurate, exaggerated, or incomplete.",
      "Judging a source against a vague standard instead of the exact enquiry question ('useful FOR what?').",
      "Writing a comparative protest essay country-by-country instead of comparing thematic ingredients side by side.",
      "Confusing a historical interpretation (a historian's paragraph) with a contemporary primary source and attacking it for 'not being there at the time'.",
      "Agreeing 100% with a 'Great Man' interpretation without adding grassroots or contextual counter-evidence.",
      "Using vague phrases like 'people protested on social media' instead of naming specific campaigns (Fridays for Future, #MeToo, 2020 BLM, Hong Kong).",
    ],
    mnemonics: [
      {
        topic: "Source Evaluation",
        device: "C + NOP + OK",
        explanation: "**C**ontent (quote/omission) + **N**ature, **O**rigin, **P**urpose + **O**wn **K**nowledge → Balanced Utility Judgement.",
      },
      {
        topic: "Five Ingredients of Protest Success",
        device: "Go Make Every Organisation Thrive",
        explanation: "**G**oal (clear & focused), **M**oral discipline/sympathy, **E**conomic/political leverage, **O**rganisation & leadership, **T**iming (favourable external context).",
      },
      {
        topic: "Why Historians Disagree",
        device: "FECP",
        explanation: "**F**ocus (lens), **E**vidence selected, **C**ontext of the era written, **P**urpose & audience.",
      },
    ],
    realWorld: [
      {
        title: "Fact-Checking Viral Social Media Clips",
        detail: "Applying NOP to a 15-second online video—checking who uploaded it, when it was filmed, what happened before the clip started, and why it was posted—uses the exact same skill as evaluating a 1930 colonial telegram.",
        emoji: "📱",
      },
      {
        title: "Youth Climate Advocacy & COP Summits",
        detail: "Youth delegations now address UN climate conferences directly, illustrating both the agenda-setting power of Fridays for Future and the gap between speeches and binding emissions treaties.",
        emoji: "🌍",
      },
      {
        title: "Museum Curation & Public Memory",
        detail: "When museums decide which artefacts and voices to display in an exhibition on civil rights or empire, curators are constructing a historical interpretation shaped by audience and era.",
        emoji: "🏛️",
      },
      {
        title: "Ethical Consumer Boycotts Today",
        detail: "Modern campaigns urging consumers or pension funds to divest from polluting or unethical firms echo the economic leverage pioneered by India's khadi movement and 1980s anti-apartheid sanctions.",
        emoji: "🛒",
      },
    ],
    videos: [
      {
        title: "How to Evaluate Historical Sources Using NOP (Nature, Origin, Purpose)",
        channel: "History Skills Search",
        url: "https://www.youtube.com/results?search_query=GCSE+History+source+utility+nature+origin+purpose+NOP",
      },
      {
        title: "Why Do Historians Disagree? Historical Interpretations Explained",
        channel: "History Skills Search",
        url: "https://www.youtube.com/results?search_query=historical+interpretations+why+historians+disagree+KS3+GCSE",
      },
      {
        title: "Why Nonviolent Resistance Works — Erica Chenoweth TED Talk",
        channel: "TEDx Search",
        url: "https://www.youtube.com/results?search_query=Erica+Chenoweth+success+of+nonviolent+civil+resistance",
      },
      {
        title: "How Social Media Changed Protest Movements — Zeynep Tufekci",
        channel: "TED Search",
        url: "https://www.youtube.com/results?search_query=Zeynep+Tufekci+online+social+change+protest+movements",
      },
    ],
    formulas: [
      { name: "Nature (NOP)", formula: "The format or genre of a source (e.g. diary, secret telegram, speech, cartoon, memoir, photograph).", note: "Private formats often reveal candour; public formats often aim to persuade." },
      { name: "Origin (NOP)", formula: "Who created the source, when it was produced, and where it came from.", note: "Check eyewitness status, institutional role, and time gap after the event." },
      { name: "Purpose (NOP)", formula: "The reason a source was made and the intended audience it aimed to influence.", note: "Explains tone, emphasis, and deliberate omissions." },
      { name: "Provenance", formula: "The background details of a source—its Nature, Origin, and Purpose combined." },
      { name: "Utility (Usefulness)", formula: "How valuable a source is for answering a specific historical enquiry ('Useful FOR what?').", note: "A biased source can still have high utility for studying attitudes." },
      { name: "Reliability", formula: "How far a source's factual claims can be trusted when tested against provenance and own knowledge." },
      { name: "Cross-Referencing", formula: "Comparing two or more sources to verify agreement and explain contradictions through provenance." },
      { name: "Slacktivism", formula: "Low-effort digital engagement (likes, reposts, hashtags) that fails to build sustained offline pressure." },
      { name: "Citizen Journalism", formula: "Ordinary eyewitnesses capturing and broadcasting live events on smartphones, bypassing media gatekeepers." },
      { name: "Historical Interpretation", formula: "A later account (book, documentary, exhibition) that selects and weighs evidence to explain the past." },
      { name: "'Great Man' History", formula: "A top-down interpretation attributing major historical change primarily to iconic individual leaders." },
      { name: "Grassroots History", formula: "A bottom-up interpretation attributing change to collective action by ordinary citizens and local networks." },
    ],
  },
};
