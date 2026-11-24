import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "causes-of-vietnam-war",
  title: "Causes of the Vietnam War",
  strand: "Why Did Wars Start?",
  icon: "🚁",
  summary:
    "How Vietnamese decolonisation collided with Cold War Containment, the Domino Theory, Diem's failing regime and the 1964 Gulf of Tonkin flashpoint — and how Vietnam compares with 1914.",
  intro:
    "Unlike the First World War — which exploded across Europe in 37 days during summer 1914 — the American war in Vietnam grew through **twenty years of creeping escalation** from 1945 to 1965. To Vietnamese nationalists led by Ho Chi Minh, it was a struggle for **territory and independence** from foreign empires. To Washington policymakers, it was a front-line **ideological battle** in the global Cold War to stop Communist 'dominoes' from falling across Southeast Asia — right down to Malaya and Singapore. In this guide you will trace each step from French Indochina to the 1964 Gulf of Tonkin flashpoint and compare why 20th-century wars started in 1914 versus 1965.",
  guide: [
    {
      id: "indochina-decolonisation",
      heading: "Territory & Decolonisation: French Indochina to 1954",
      discovery: {
        problem:
          "On **2 September 1945**, Vietnamese leader **Ho Chi Minh** stood before hundreds of thousands of cheering people in Hanoi to declare Vietnam independent. Shockingly, the opening lines of his speech copied the **United States Declaration of Independence** word for word (*'All men are created equal...'*). Why did a Communist revolutionary quote America's founding document — and why did the United States end up fighting him anyway?",
        idea:
          "To Ho Chi Minh, Vietnamese **anti-colonial nationalism** came first: he hoped anti-imperialist America would back Vietnam's freedom from France. Yet as the **Cold War** froze over after 1947, Washington saw Ho Chi Minh's **Communism** rather than his nationalism — and chose to fund France's colonial return instead.",
      },
      body: `Long before American Marines landed in Vietnam in 1965, Vietnam was locked in a bitter struggle over **territory and decolonisation**. Since the late 1800s, France had ruled **French Indochina** — modern-day **Vietnam**, **Laos** and **Cambodia** — extracting rice, coal and rubber while denying Vietnamese citizens political freedom.

### WWII, Japanese Occupation & the Rise of the Viet Minh

During the **Second World War**, **Japan occupied French Indochina (1940–1945)**, humiliating French colonial rulers and shattering the myth of European invincibility across Southeast Asia (just as Japan's 1942 capture of Singapore shook British rule). In **1941**, **Ho Chi Minh** — a committed nationalist AND Communist — founded the **Viet Minh** (*League for the Independence of Vietnam*), a guerrilla movement that fought Japanese occupation (even receiving US OSS weapons!) and prepared to claim independence once Japan surrendered.

When Japan collapsed in August 1945, Ho Chi Minh proclaimed the **Democratic Republic of Vietnam** on **2 September 1945**. France, eager to restore its bruised imperial pride, sent troops back to re-conquer its former colony. The resulting **First Indochina War (1946–1954)** pitted heavily armed French forces against Viet Minh guerrillas supplied by newly Communist China (after 1949) and the USSR.

### Dien Bien Phu & the 1954 Geneva Accords

- **Battle of Dien Bien Phu (March–May 1954):** French commanders built a fortified airbase in a remote valley hoping to lure the Viet Minh into open battle. Instead, Viet Minh General **Vo Nguyen Giap** hauled heavy artillery pieces by hand and bicycle up the surrounding jungle ridges, pounding the French airstrip until **10,000 French troops surrendered on 7 May 1954**. French colonial power in Indochina was finished.
- **Geneva Accords (July 1954):** International diplomats met in Switzerland to end the war. The agreement:
  1. Granted full independence to **Laos** and **Cambodia** and ended French rule.
  2. **Temporarily** divided Vietnam along the **17th parallel** (separated by a Demilitarised Zone, or DMZ): Communist **North Vietnam** under Ho Chi Minh (capital: **Hanoi**) and non-Communist **South Vietnam** under Bao Dai and Prime Minister Ngo Dinh Diem (capital: **Saigon**).
  3. Promised **nationwide free elections in July 1956** to reunify Vietnam under one government.

Crucially, **neither the United States nor South Vietnam signed the Geneva Accords** — setting the stage for a temporary line on the map to harden into a permanent Cold War battlefront.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic map of French Indochina divided at the 17th parallel by the 1954 Geneva Accords">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">From French Indochina to the 17th Parallel (1954 Geneva Accords)</text>

  <rect x="24" y="42" width="235" height="190" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="141" y="61" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Timeline of Decolonisation</text>
  <rect x="38" y="72" width="207" height="32" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="141" y="92" text-anchor="middle" font-size="10.2" font-weight="600" fill="var(--ink)">1940–45: Japan occupies Indochina</text>
  <rect x="38" y="111" width="207" height="32" rx="7" fill="var(--surface)" stroke="var(--brand)"/>
  <text x="141" y="131" text-anchor="middle" font-size="10.2" font-weight="600" fill="var(--ink)">1945: Ho declares Independence</text>
  <rect x="38" y="150" width="207" height="32" rx="7" fill="var(--surface)" stroke="var(--bad)"/>
  <text x="141" y="170" text-anchor="middle" font-size="10.2" font-weight="600" fill="var(--bad)">May 1954: Dien Bien Phu defeat</text>
  <rect x="38" y="189" width="207" height="32" rx="7" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="141" y="209" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--brand)">Jul 1954: Geneva Accords (17th Parallel)</text>

  <rect x="282" y="42" width="254" height="190" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <rect x="352" y="54" width="166" height="62" rx="9" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="435" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">NORTH VIETNAM</text>
  <text x="435" y="90" text-anchor="middle" font-size="10" fill="var(--ink)">Ho Chi Minh &amp; Viet Minh (Hanoi)</text>
  <text x="435" y="105" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Communist · Backed by China &amp; USSR</text>

  <line x1="295" y1="133" x2="526" y2="133" stroke="var(--brand)" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="348" y="122" width="174" height="22" rx="6" fill="var(--brand)"/>
  <text x="435" y="137" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">17th Parallel (DMZ) · 1956 Vote</text>

  <rect x="352" y="152" width="166" height="66" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="435" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">SOUTH VIETNAM</text>
  <text x="435" y="188" text-anchor="middle" font-size="10" fill="var(--ink)">Ngo Dinh Diem (Saigon)</text>
  <text x="435" y="203" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Anti-Communist · US Aid</text>

  <rect x="292" y="68" width="50" height="52" rx="7" fill="var(--surface)" stroke="var(--good)" stroke-width="1.1"/>
  <text x="317" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Laos</text>
  <rect x="292" y="152" width="50" height="58" rx="7" fill="var(--surface)" stroke="var(--good)" stroke-width="1.1"/>
  <text x="317" y="185" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Cambodia</text>
</svg>`,
      diagramCaption:
        "France's defeat at Dien Bien Phu led to the 1954 Geneva Accords, which freed Laos and Cambodia and temporarily split Vietnam at the 17th parallel pending 1956 reunification elections.",
      workedExamples: [
        {
          title: "Why Ho Chi Minh appealed to ordinary Vietnamese peasants",
          problem:
            "Explain how Ho Chi Minh and the Viet Minh built mass popular support in Vietnam between 1941 and 1954.",
          steps: [
            "**Anti-colonial nationalism:** Unlike French officials and Japanese occupiers, the Viet Minh promised Vietnamese self-rule and independence from foreign empires.",
            "**Practical peasant reforms:** In Viet Minh-held areas, they cut harsh rents, redistributed landlords' fields, and fought famine — winning deep loyalty across rural villages.",
            "**Military proof of success:** Defeating a major European colonial power at **Dien Bien Phu (May 1954)** made Ho Chi Minh a national hero across both North and South Vietnam.",
          ],
          answer:
            "Ho Chi Minh combined Vietnamese nationalism with land reforms and anti-colonial resistance against both Japan and France, culminating in the stunning 1954 victory at Dien Bien Phu.",
          yourTurn: {
            question:
              "Which line of latitude temporarily divided North and South Vietnam under the July 1954 Geneva Accords? (e.g. '38th parallel' or '38')",
            answer: {
              type: "text",
              accept: ["17th parallel", "17th", "17", "17 parallel", "seventeenth parallel"],
              display: "17th parallel",
            },
            solution:
              "The 1954 Geneva Accords temporarily divided Vietnam at the **17th parallel** (do not confuse this with the 38th parallel in Korea!).",
          },
        },
      ],
      keyPoints: [
        "**French Indochina** consisted of **Vietnam, Laos and Cambodia**; Japanese WWII occupation (1940–45) shattered French colonial authority.",
        "**Ho Chi Minh** founded the **Viet Minh (1941)** and declared Vietnamese independence on **2 September 1945**.",
        "General Vo Nguyen Giap's victory at **Dien Bien Phu (May 1954)** forced France to leave Indochina.",
        "The **1954 Geneva Accords** temporarily divided Vietnam at the **17th parallel**, promising nationwide reunification elections in **July 1956**.",
      ],
      whyItWorks:
        "Starting the Vietnam story in 1945–54 rather than 1965 reveals the core misunderstanding at the heart of the war: Vietnamese people largely viewed it as a **nationalist war of decolonisation**, whereas Washington viewed it through the lens of global **Cold War Communism**.",
      strategies: [
        "Never confuse the **17th parallel** (Vietnam, 1954) with the **38th parallel** (Korea, 1945/1953).",
        "Always note that the 1954 division was meant to be **temporary** — explaining why cancelling the 1956 elections sparked guerrilla resistance.",
      ],
      thinkDeeper:
        "If Ho Chi Minh was BOTH a Vietnamese nationalist AND a dedicated Communist, which identity mattered more to his supporters — and why did the United States treat the two as inseparable?",
    },

    {
      id: "cold-war-ideology-domino",
      heading: "Cold War Ideology: Containment & the Domino Theory",
      discovery: {
        problem:
          "Vietnam was a small agricultural country over 13,000 kilometres from Washington, D.C., with almost no vital American factories or oilfields. Why did **four successive US Presidents** (Truman, Eisenhower, Kennedy and Johnson) pour billions of dollars — and eventually half a million soldiers — into stopping a Communist government in Saigon?",
        idea:
          "Because in the **Cold War**, territory mattered primarily as a symbol of **ideology**. US policymakers believed in **Containment** and the **Domino Theory**: losing even one small Southeast Asian country could trigger a chain reaction toppling Laos, Cambodia, Thailand, **Malaya and Singapore** into the Communist camp.",
      },
      body: `After 1945, the wartime alliance between the **United States** and the **Soviet Union (USSR)** shattered into the **Cold War** — a global ideological conflict between **Capitalist democracy** (private enterprise, multi-party elections) and **Communism** (one-party state control, planned economy, anti-capitalist revolution).

### Containment & Asian Shocks (1947–1953)

- **The Truman Doctrine (1947):** President Harry S. Truman pledged US economic and military aid to any country resisting Communist takeover. This strategy was called **Containment** — don't necessarily invade existing Communist countries, but **stop Communism from spreading anywhere new**.
- **Two Asian Earthquakes:** In **1949**, Mao Zedong's Communists won the Chinese Civil War, turning the world's most populous nation Communist ("Who lost China?" panicked US politics). Then in **1950–1953**, Communist North Korea invaded South Korea, pulling US and UN forces into the bloody **Korean War**.
- **US Funding of France:** Alarmed that Ho Chi Minh was now receiving weapons from Communist China, Truman — and then Eisenhower — reversed America's traditional anti-colonialism. By **1954, the United States was paying roughly 80% of France's war costs** in Indochina!

### Eisenhower's Domino Theory (April 1954) — Including Malaya & Singapore

As the French garrison was collapsing at Dien Bien Phu on **7 April 1954**, US President **Dwight D. Eisenhower** explained Southeast Asia's strategic importance using a vivid metaphor:

> *"You have a row of dominoes set up, you knock over the first one, and what will happen to the last one is the certainty that it will go over very quickly."*

Washington feared that if **Vietnam** fell to Communism, neighbouring **Laos** and **Cambodia** would immediately fall, followed by **Thailand**, **Burma**, **Malaya** and **Singapore** (and potentially Indonesia, the Philippines, even threatening Japan and Australia!).

For students studying in **Singapore**, this connection is remarkably real: between **1948 and 1960**, British and Commonwealth forces were actively fighting Communist insurgents in the **Malayan Emergency**, while left-wing strikes and political battles rocked Singapore itself. Both Washington and London genuinely worried that a Communist victory in Vietnam would embolden Communist movements across Malaya and Singapore — key global hubs for rubber, tin and the Straits of Malacca shipping lane. Following Geneva, the US formed **SEATO** (Southeast Asia Treaty Organization, September 1954) and poured over **$1.6 billion** into building an anti-Communist South Vietnam.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram illustrating Eisenhower's 1954 Cold War Domino Theory chain from Vietnam to Laos, Cambodia, Thailand, Malaya and Singapore">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Cold War Containment &amp; Eisenhower's Domino Theory (1954)</text>

  <rect x="20" y="42" width="235" height="44" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.3"/>
  <text x="137" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Communist Bloc (USSR + China 1949)</text>
  <text x="137" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Supplies weapons &amp; aid to North Vietnam</text>

  <rect x="305" y="42" width="235" height="44" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>
  <text x="422" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">US Containment Policy (1947–)</text>
  <text x="422" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Funds 80% of France's war, then South Vietnam</text>

  <text x="280" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">VS</text>

  <g transform="translate(36, 114) rotate(16 32 45)">
    <rect x="0" y="0" width="64" height="90" rx="7" fill="var(--bad)" stroke="var(--ink)" stroke-width="1.2"/>
    <text x="32" y="42" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">Vietnam</text>
    <text x="32" y="58" text-anchor="middle" font-size="9" fill="#fff7ed">1st Domino</text>
  </g>
  <g transform="translate(132, 114) rotate(11 32 45)">
    <rect x="0" y="0" width="64" height="90" rx="7" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
    <text x="32" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Laos</text>
  </g>
  <g transform="translate(226, 114) rotate(7 32 45)">
    <rect x="0" y="0" width="64" height="90" rx="7" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4"/>
    <text x="32" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Cambodia</text>
  </g>
  <g transform="translate(320, 114) rotate(4 32 45)">
    <rect x="0" y="0" width="64" height="90" rx="7" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
    <text x="32" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Thailand</text>
  </g>
  <g transform="translate(414, 114) rotate(1 46 45)">
    <rect x="0" y="0" width="96" height="90" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>
    <text x="48" y="38" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Malaya &amp;</text>
    <text x="48" y="53" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Singapore</text>
    <text x="48" y="70" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">(1948–60 Emergency)</text>
  </g>

  <line x1="25" y1="218" x2="535" y2="218" stroke="var(--ink-2)" stroke-width="2"/>
  <text x="280" y="237" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-2)">US leaders feared losing South Vietnam would trigger Communist takeovers across all of Southeast Asia</text>
</svg>`,
      diagramCaption:
        "President Eisenhower's 1954 Domino Theory linked Vietnam directly to the security of Laos, Cambodia, Thailand, Malaya and Singapore — turning a regional colonial war into a global Cold War test.",
      workedExamples: [
        {
          title: "Explaining why the US funded France's colonial war",
          problem:
            "Before 1945 the United States opposed European empires, yet by 1954 it was paying 80% of France's war costs in Indochina. Explain why US policy shifted.",
          steps: [
            "**Cold War shift (1947–1950):** The Truman Doctrine committed the US to **Containment**, and Mao's 1949 Communist victory in China plus the 1950–53 Korean War made Asia a top Cold War battleground.",
            "**Reframing Ho Chi Minh:** Rather than seeing Ho Chi Minh as an anti-colonial freedom fighter, Washington viewed him as an agent of Soviet and Chinese Communism.",
            "**Domino fear:** Under Eisenhower's Domino Theory, keeping France fighting in Indochina seemed essential to stop Communism spilling into Thailand, Malaya and Singapore.",
          ],
          answer:
            "After China became Communist (1949) and the Korean War began (1950), Cold War Containment outweighed American anti-colonialism: the US funded 80% of France's war to stop Ho Chi Minh and prevent Southeast Asian 'dominoes' from falling.",
          yourTurn: {
            question:
              "Which US President famously coined the 'Domino Theory' in an April 1954 press conference?",
            answer: {
              type: "text",
              accept: ["Eisenhower", "Dwight D. Eisenhower", "Dwight Eisenhower", "President Eisenhower"],
              display: "Dwight D. Eisenhower",
            },
            solution:
              "President **Dwight D. Eisenhower** introduced the Domino Theory on 7 April 1954 while French forces were surrounded at Dien Bien Phu.",
          },
        },
      ],
      keyPoints: [
        "**Containment** (Truman Doctrine, 1947) aimed to stop Communism spreading to any new country.",
        "**Mao's 1949 Communist victory in China** and the **1950–53 Korean War** convinced Washington that Asia was a vital Cold War front.",
        "Eisenhower's **Domino Theory (1954)** argued that if Vietnam fell, Laos, Cambodia, Thailand, **Malaya and Singapore** would follow — heightened by the real **Malayan Emergency (1948–60)**.",
        "By 1954 the US paid **80%** of France's war costs, then backed anti-Communist South Vietnam through financial aid and **SEATO (1954)**.",
      ],
      whyItWorks:
        "Understanding the **Domino Theory** explains why Cold War ideology overrode local realities: Washington treated Vietnam as a universal test of US credibility against Moscow and Beijing, overlooking deep Vietnamese nationalism and historic Vietnamese suspicion of China.",
      strategies: [
        "Connect **ideology** (Containment & Domino Theory) with **regional geography** (Laos, Cambodia, Thailand, Malaya & Singapore).",
        "Mention specific Cold War shocks (**1949 China**, **1950–53 Korea**) to explain *why* US fear peaked in 1954.",
      ],
      thinkDeeper:
        "When Saigon finally fell to Communism in 1975, Laos and Cambodia did become Communist — yet Thailand, Malaysia and Singapore remained staunchly non-Communist. What does that reveal about the strengths and blind spots of Eisenhower's Domino Theory?",
    },

    {
      id: "diem-viet-cong-escalation",
      heading: "Ngo Dinh Diem, the Viet Cong & Rising Tensions",
      discovery: {
        problem:
          "The 1954 Geneva Accords promised **free nationwide reunification elections in July 1956**. Why did the **United States** — a proud democracy — actively encourage South Vietnam's leader **Ngo Dinh Diem** to **cancel** those free elections?",
        idea:
          "Because US intelligence warned (and President Eisenhower later confirmed in his memoirs) that **Ho Chi Minh would have won roughly 80% of the vote** as Vietnam's independence hero! Stopping Communism outweighed holding democratic elections — a choice that triggered guerrilla war in the South.",
      },
      body: `Between **1955 and 1963**, South Vietnam fell into a downward spiral of dictatorship, peasant anger, guerrilla warfare and growing American involvement.

### Ngo Dinh Diem's Unpopular Regime (1955–1963)

The US pinned its hopes on **Ngo Dinh Diem**, a fiercely anti-Communist Catholic nationalist who became President of South Vietnam in 1955 (after a rigged referendum). Backing Diem backfired badly for four reasons:

1. **Cancelling the 1956 Elections:** Diem (supported by Washington) refused to hold the Geneva elections, declaring South Vietnam had never signed Geneva — dashing hopes of peaceful reunification.
2. **Corruption & Repression:** Diem filled top jobs with his own family (especially his ruthless brother **Ngo Dinh Nhu**), reversed Viet Minh land reforms so wealthy landlords regained peasant fields, and imprisoned or executed tens of thousands of suspected dissidents.
3. **The Strategic Hamlets Programme (1962):** Designed with US advisers to separate villagers from Communist guerrillas, South Vietnamese troops forced rural peasants to abandon their ancestral homes and graves for fortified barbed-wire compounds. Instead of winning "hearts and minds", it **infuriated ordinary farmers**.
4. **The Buddhist Crisis (1963):** Although roughly **70–80%** of South Vietnamese were Buddhists, Diem's Catholic elite banned Buddhist flags during Vesak celebrations and raided pagodas. In June 1963, Buddhist monk **Thich Quang Duc** set himself alight on a Saigon street in protest — shocking the world on television. Losing faith in Diem, Washington tacitly approved a **South Vietnamese army coup** that overthrew and assassinated Diem on **2 November 1963** (just three weeks before JFK's own assassination!).

### Rise of the NLF / Viet Cong & JFK's 'Advisers'

Blocked from peaceful reunification and alienated by Diem's repression, southern opponents of Diem — guided and supplied by North Vietnam along the jungle network called the **Ho Chi Minh Trail** (running through Laos and Cambodia) — formed the **National Liberation Front (NLF)** in **December 1960**. Their armed fighters were nicknamed the **Viet Cong (VC)**. Blending into villages and fighting guerrilla ambushes, the Viet Cong steadily gained control over much of South Vietnam's countryside.

Fearing South Vietnam would collapse and embarrass the US during the Cold War, **President John F. Kennedy (1961–1963)** dramatically expanded US involvement:
- Under Eisenhower (1960), there were around **900** US military advisers in South Vietnam.
- By November 1963, JFK had increased US **"advisers"** to over **16,000** (including US Army Green Berets and helicopter pilots flying South Vietnamese troops into combat).

Though JFK still hesitated to send regular US ground divisions, America was now too deeply committed — financially, militarily and politically — to walk away when Diem's fall plunged Saigon into chaos.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escalation cycle in South Vietnam from 1955 to 1963 showing cancelled elections, Diem's repression, Viet Cong growth and JFK's expansion of US advisers">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">South Vietnam's Spiral Into Guerrilla War (1956–1963)</text>

  <rect x="24" y="42" width="152" height="72" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>
  <text x="100" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">1. 1956 Vote Blocked</text>
  <text x="100" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink)">Diem &amp; US cancel</text>
  <text x="100" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink)">elections (Ho ~80%)</text>
  <text x="100" y="104" text-anchor="middle" font-size="9" fill="var(--ink-2)">Peaceful unity ends</text>

  <line x1="176" y1="78" x2="201" y2="78" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="201,74 208,78 201,82" fill="var(--ink-2)"/>

  <rect x="209" y="42" width="152" height="72" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.3"/>
  <text x="285" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">2. Diem's Repression</text>
  <text x="285" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink)">Corruption · Landlords</text>
  <text x="285" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink)">Strategic Hamlets (1962)</text>
  <text x="285" y="104" text-anchor="middle" font-size="9" fill="var(--ink-2)">Buddhist Crisis (1963)</text>

  <line x1="361" y1="78" x2="386" y2="78" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="386,74 393,78 386,82" fill="var(--ink-2)"/>

  <rect x="394" y="42" width="144" height="72" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4"/>
  <text x="466" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">3. NLF / Viet Cong</text>
  <text x="466" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink)">Formed Dec 1960</text>
  <text x="466" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink)">Supplied via Ho Chi</text>
  <text x="466" y="104" text-anchor="middle" font-size="9" fill="var(--ink-2)">Minh Trail from North</text>

  <path d="M 466 114 L 466 136 L 145 136 L 145 152" fill="none" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="141,152 145,159 149,152" fill="var(--bad)"/>

  <rect x="36" y="160" width="228" height="72" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="150" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">4. JFK Expands US 'Advisers'</text>
  <text x="150" y="195" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink)">900 (1960) → 16,000+ (Nov 1963)</text>
  <text x="150" y="211" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Green Berets, helicopters &amp; funding</text>
  <text x="150" y="224" text-anchor="middle" font-size="9" fill="var(--ink-2)">Deeper US prestige on the line</text>

  <line x1="264" y1="196" x2="294" y2="196" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="294,192 301,196 294,200" fill="var(--bad)"/>

  <rect x="302" y="160" width="236" height="72" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="420" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">5. Nov 1963 Coup &amp; Instability</text>
  <text x="420" y="195" text-anchor="middle" font-size="10" fill="var(--ink)">Diem overthrown &amp; assassinated</text>
  <text x="420" y="211" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Weak Saigon coups follow → US faces</text>
  <text x="420" y="224" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">choice: withdraw or fight directly</text>
</svg>`,
      diagramCaption:
        "Cancelling the 1956 elections and Diem's harsh policies drove peasants into the arms of the Viet Cong, pulling JFK from 900 advisers to 16,000 and leaving Saigon unstable after Diem's 1963 assassination.",
      workedExamples: [
        {
          title: "Why the Strategic Hamlets Programme backfired",
          problem:
            "Explain why the 1962 Strategic Hamlets Programme increased support for the Viet Cong rather than defeating them.",
          steps: [
            "**State the intended aim:** Diem and US advisers moved South Vietnamese peasants into guarded villages to cut the Viet Cong off from food, shelter and recruits.",
            "**Explain the peasant impact:** Villagers were forcibly uprooted from fertile farmland and sacred ancestral graves, often with little compensation, while corrupt officials stole aid money.",
            "**Link to escalation:** Deep resentment pushed many previously neutral peasants to cooperate with or join the NLF / Viet Cong, weakening Saigon's hold over the countryside.",
          ],
          answer:
            "By forcing peasants off ancestral farmland into barbed-wire compounds run by corrupt officials, Strategic Hamlets alienated the rural population and boosted recruitment for the Viet Cong.",
          yourTurn: {
            question:
              "Approximately how many US military 'advisers' were in South Vietnam by the end of President Kennedy's presidency in late 1963? (Enter a whole number, e.g. 5000.)",
            answer: { type: "number", value: 16000, tolerance: 500, display: "16,000" },
            solution:
              "JFK raised US military advisers from around 900 under Eisenhower to roughly **16,000** by November 1963.",
          },
        },
      ],
      keyPoints: [
        "Diem and the US blocked the **1956 Geneva elections** because intelligence estimated Ho Chi Minh would win around **80%** of the vote.",
        "**Ngo Dinh Diem's** corruption, landlord favouritism, **Strategic Hamlets (1962)** and anti-Buddhist persecution (**1963 Buddhist Crisis**) destroyed his popularity.",
        "The **National Liberation Front (NLF / Viet Cong)** formed in **December 1960**, supplied from North Vietnam via the **Ho Chi Minh Trail**.",
        "**President Kennedy** expanded US military **'advisers'** from **900 to 16,000** (1961–63); Diem's assassination in **November 1963** left Saigon even weaker.",
      ],
      whyItWorks:
        "Tracing 1955–63 explains the tragedy of US involvement: Washington backed Diem because he was anti-Communist, yet Diem's unpopularity created the very Viet Cong insurgency that pulled America deeper into combat.",
      strategies: [
        "Always distinguish **Viet Minh** (1941–54, fighting Japan & France) from **Viet Cong / NLF** (formed 1960, southern Communist guerrillas fighting Diem & the US).",
        "Use specific numbers to impress examiners: **80%** projected Ho Chi Minh vote, **900 → 16,000** JFK advisers, **December 1960** NLF founded.",
      ],
      thinkDeeper:
        "When Washington quietly gave South Vietnamese generals the green light to overthrow Ngo Dinh Diem in November 1963, did that solve America's Vietnam dilemma — or make US withdrawal even harder?",
    },

    {
      id: "gulf-of-tonkin-comparison",
      heading: "Flashpoint: Gulf of Tonkin (1964) & Comparing WWI vs Vietnam",
      discovery: {
        problem:
          "Compare two famous summer flashpoints fifty years apart: **28 June 1914 (Sarajevo)** and **2–4 August 1964 (Gulf of Tonkin)**. In Sarajevo, a royal heir was murdered in broad daylight before hundreds of witnesses; in the Gulf of Tonkin, **not a single American sailor was killed**, and the second attack probably never happened! Why did BOTH flashpoints trigger massive wars?",
        idea:
          "A flashpoint does not need to be huge on its own — it only needs to give leaders who are **already primed by long-term ideology, territory and fear** the political excuse to escalate. Just as Vienna used Sarajevo (backed by Germany's 'blank cheque'), President Lyndon B. Johnson used the Gulf of Tonkin to win Congress's 'blank cheque' for full war.",
      },
      body: `By **1964**, South Vietnam was reeling from coups after Diem's death, while the Viet Cong controlled large parts of the countryside. New US President **Lyndon B. Johnson (LBJ)** faced an election in November 1964 and feared being accused of "losing Vietnam" to Communism as Democrats had been blamed for "losing China" in 1949.

### The Flashpoint: Gulf of Tonkin (August 1964) & Escalation (1965)

- **2 August 1964:** North Vietnamese torpedo boats attacked the US destroyer **USS *Maddox***, which was gathering intelligence in the **Gulf of Tonkin** off North Vietnam's coast (leaving one bullet hole and zero US casualties).
- **4 August 1964:** During a stormy night, radar operators on **USS *Maddox*** and **USS *Turner Joy*** reported a second torpedo attack. Even the ship's captain soon radioed doubts — and later declassified NSA records confirmed the **second attack almost certainly never occurred** (storm waves and jumpy sonar!).
- **7 August 1964 — Gulf of Tonkin Resolution:** Presenting the reports as unprovoked Communist aggression, LBJ persuaded the US Congress to pass the **Gulf of Tonkin Resolution** almost unanimously (416–0 in the House; 88–2 in the Senate). It authorised the President to take **"all necessary measures"** to repel attacks and prevent further aggression — acting as LBJ's legal **"blank cheque"** for war without a formal declaration of war!
- **Full US Military Escalation (1965):** After Viet Cong guerrillas attacked the US airbase at **Pleiku (February 1965)**, LBJ launched **Operation Rolling Thunder** (March 1965 — sustained aerial bombing of North Vietnam) and landed **3,500 US Marines at Da Nang (8 March 1965)** — the first official American ground combat troops. By 1968, over **500,000** US troops were fighting in Vietnam.

### Big Picture Comparison: Why Did Wars Start in WWI (1914) vs Vietnam (1954–65)?

| Lens | First World War (1914) | Vietnam War (1954–1965) | Key Similarity or Contrast |
|---|---|---|---|
| **Ideology** | Imperialism (*Weltpolitik*), aggressive & Slavic nationalism, Great Power honour | Cold War **Communism vs Capitalism**, Containment, Domino Theory vs anti-colonial nationalism | Both turned local conflicts into matters of prestige — Vietnam was a sharper clash of opposing economic/political systems |
| **Territory** | European borderlands & empires: Alsace-Lorraine, Bosnia, Morocco, neutral Belgium | Decolonisation of French Indochina, artificial **17th parallel**, strategic Southeast Asian dominoes | WWI was rival empires fighting *for* European/colonial dominance; Vietnam began as a former colony fighting *against* foreign rule |
| **Flashpoint** | **Sarajevo (28 June 1914)** + 5 July German 'blank cheque' | **Gulf of Tonkin (Aug 1964)** + Gulf of Tonkin Resolution ('blank cheque') | Both flashpoints acted as pretexts backed by a 'blank cheque' — though Tonkin's 2nd incident was disputed |
| **Speed & Trigger** | **Rapid 37-day explosion** (rigid alliances & Schlieffen rail timetables) | **Slow 20-year creeping escalation** (French funding → 1956 vote → JFK advisers → LBJ troops) | Biggest structural contrast: WWI snapped shut in weeks; Vietnam escalated step by step over decades |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison chart contrasting the causes of WWI 1914 and the Vietnam War across Ideology, Territory, Flashpoint and Speed">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Comparing 20th-Century War Origins: WWI (1914) vs Vietnam (1964–65)</text>

  <rect x="18" y="38" width="110" height="28" rx="6" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="73" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Lens</text>
  <rect x="134" y="38" width="200" height="28" rx="6" fill="var(--surface-2)" stroke="var(--bad)"/>
  <text x="234" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">First World War (1914)</text>
  <rect x="340" y="38" width="202" height="28" rx="6" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="441" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Vietnam War (1954–65)</text>

  <rect x="18" y="72" width="110" height="38" rx="6" fill="var(--surface-2)"/>
  <text x="73" y="95" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Ideology</text>
  <rect x="134" y="72" width="200" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="234" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink)">Weltpolitik, Nationalism,</text>
  <text x="234" y="102" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Empire &amp; Great Power Honour</text>
  <rect x="340" y="72" width="202" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="441" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink)">Cold War Containment &amp; Domino</text>
  <text x="441" y="102" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Theory vs Anti-Colonial Communism</text>

  <rect x="18" y="116" width="110" height="38" rx="6" fill="var(--surface-2)"/>
  <text x="73" y="139" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Territory</text>
  <rect x="134" y="116" width="200" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="234" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink)">Alsace-Lorraine, Bosnia (1908),</text>
  <text x="234" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Morocco &amp; Neutral Belgium</text>
  <rect x="340" y="116" width="202" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="441" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink)">French Indochina, 17th Parallel</text>
  <text x="441" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">&amp; SE Asia (Laos to Singapore)</text>

  <rect x="18" y="160" width="110" height="38" rx="6" fill="var(--surface-2)"/>
  <text x="73" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Flashpoint</text>
  <rect x="134" y="160" width="200" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="234" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink)">Sarajevo (28 Jun 1914) +</text>
  <text x="234" y="190" text-anchor="middle" font-size="9.5" fill="var(--bad)">German 'Blank Cheque' (5 Jul)</text>
  <rect x="340" y="160" width="202" height="38" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="441" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink)">Gulf of Tonkin (Aug 1964) +</text>
  <text x="441" y="190" text-anchor="middle" font-size="9.5" fill="var(--brand)">Congress Resolution ('Blank Cheque')</text>

  <rect x="18" y="204" width="110" height="34" rx="6" fill="var(--surface-2)"/>
  <text x="73" y="225" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Escalation</text>
  <rect x="134" y="204" width="200" height="34" rx="6" fill="var(--surface)" stroke="var(--bad)"/>
  <text x="234" y="225" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Sudden 37-day chain reaction</text>
  <rect x="340" y="204" width="202" height="34" rx="6" fill="var(--surface)" stroke="var(--brand)"/>
  <text x="441" y="225" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Gradual 20-year creep (1945–65)</text>
</svg>`,
      diagramCaption:
        "Both WWI and Vietnam combined ideology, contested territory and a decisive flashpoint — yet WWI snapped shut in 37 days through rigid alliances, whereas US involvement in Vietnam escalated gradually over two decades.",
      workedExamples: [
        {
          title: "Comparing the Sarajevo and Gulf of Tonkin flashpoints",
          problem:
            "Identify **one major similarity** and **one major difference** between the Sarajevo assassination (1914) and the Gulf of Tonkin incident (1964) as triggers of war.",
          steps: [
            "**Similarity (pretext + 'blank cheque'):** In both cases, leaders already eager or primed to escalate used a dramatic flashpoint to obtain a 'blank cheque' — Austria-Hungary used Sarajevo to win Germany's 5 July blank cheque, and President Lyndon B. Johnson used Gulf of Tonkin to win Congress's 7 August Resolution giving him full military power.",
            "**Difference (speed & certainty):** Sarajevo was an undeniable double assassination that exploded into continental war in just **37 days** through rigid mobilisation timetables; by contrast, the second Gulf of Tonkin attack (4 August) probably never happened and served as the climax of **twenty years of gradual US escalation** (culminating in Operation Rolling Thunder and Da Nang Marines in March 1965).",
          ],
          answer:
            "Both flashpoints acted as pretexts backed by a 'blank cheque' (Germany's 5 July pledge vs Congress's Tonkin Resolution), but Sarajevo triggered a sudden 37-day alliance explosion whereas Gulf of Tonkin capped two decades of creeping US involvement.",
          yourTurn: {
            question:
              "What was the code name of the sustained US bombing campaign against North Vietnam launched by President Lyndon B. Johnson in March 1965?",
            answer: {
              type: "text",
              accept: ["Operation Rolling Thunder", "Rolling Thunder"],
              display: "Operation Rolling Thunder",
            },
            solution:
              "**Operation Rolling Thunder** began in March 1965, accompanied days later by 3,500 US Marines landing at Da Nang.",
          },
        },
      ],
      keyPoints: [
        "In **August 1964**, North Vietnamese boats fired on **USS *Maddox*** (2 Aug), followed by a **disputed second incident** (4 Aug) that almost certainly never happened.",
        "The **Gulf of Tonkin Resolution (7 August 1964)** gave President **Lyndon B. Johnson** power to take 'all necessary measures' — a virtual blank cheque without a formal declaration of war.",
        "In **March 1965**, LBJ escalated into full American war via **Operation Rolling Thunder** (bombing North Vietnam) and landing **3,500 US Marines at Da Nang**.",
        "Comparing **WWI vs Vietnam**: both combined **ideology**, **territory** and a **flashpoint**, yet WWI erupted in a rapid **37-day alliance explosion** while Vietnam resulted from **20 years of gradual Cold War escalation**.",
      ],
      whyItWorks:
        "Comparing two 20th-century wars across identical thematic lenses (**Ideology, Territory, Flashpoints**) prevents tunnel vision: you start spotting deeper patterns in history — such as how leaders seize flashpoints to justify actions they already felt pressured by ideology to take.",
      strategies: [
        "In any comparative WWI vs Vietnam essay, structure paragraphs by **theme** (Ideology, Territory, Flashpoint) rather than writing half an essay on WWI and half on Vietnam.",
        "Use direct comparison words throughout: *'Similarly...'*, *'Whereas in 1914...'*, *'A crucial contrast lies in...'*.",
      ],
      thinkDeeper:
        "Which mattered MORE in causing full US military intervention in Vietnam in 1965: **Cold War ideology (Containment & Domino Theory)**, or **local failures inside South Vietnam (Diem's unpopularity & Viet Cong strength)**? Explain how the two interacted.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Which three modern countries made up French Indochina?",
        back: "**Vietnam, Laos and Cambodia** — ruled as French colonies until 1954.",
      },
      {
        front: "Who was Ho Chi Minh and what organisation did he found in 1941?",
        back: "Vietnam's leading nationalist and Communist revolutionary; he founded the **Viet Minh** to fight Japanese WWII occupiers and returning French colonial rule.",
      },
      {
        front: "What happened at the Battle of Dien Bien Phu in May 1954?",
        back: "Viet Minh forces led by General Vo Nguyen Giap surrounded and defeated 10,000 French troops, ending French colonial rule in Indochina.",
      },
      {
        front: "What were the three key terms of the July 1954 Geneva Accords?",
        back: "1) Independence for Laos & Cambodia; 2) Vietnam **temporarily** divided at the **17th parallel**; 3) Nationwide reunification elections promised for **July 1956**.",
      },
      {
        front: "What was the US Cold War policy of Containment (Truman Doctrine, 1947)?",
        back: "Using economic, diplomatic and military aid to stop Communism from spreading to any new country.",
      },
      {
        front: "What was President Eisenhower's Domino Theory (April 1954)?",
        back: "The fear that if Vietnam fell to Communism, neighbouring states — Laos, Cambodia, Thailand, **Malaya and Singapore** — would topple one by one like falling dominoes.",
      },
      {
        front: "Roughly what percentage of France's war costs in Indochina was the US paying by 1954?",
        back: "Approximately **80%** — showing how Cold War Containment overrode US anti-colonialism even before Geneva.",
      },
      {
        front: "Why were the promised 1956 Vietnamese reunification elections cancelled?",
        back: "South Vietnam's Ngo Dinh Diem (backed by the US) refused to hold them because intelligence estimated Ho Chi Minh would win around **80%** of the vote.",
      },
      {
        front: "Why did Ngo Dinh Diem become deeply unpopular in South Vietnam (1955–63)?",
        back: "Family corruption, landlord-friendly policies, forcing peasants into **Strategic Hamlets (1962)**, and persecuting the Buddhist majority (sparking the **1963 Buddhist Crisis**).",
      },
      {
        front: "What was the difference between the Viet Minh and the Viet Cong (NLF)?",
        back: "**Viet Minh** (1941–54): nationalist-communist league fighting Japan & France. **Viet Cong / NLF** (formed Dec 1960): South Vietnamese Communist guerrillas fighting Diem & the US.",
      },
      {
        front: "What was the Ho Chi Minh Trail?",
        back: "A vital network of jungle paths and roads running through Laos and Cambodia used by North Vietnam to send troops, weapons and supplies to the Viet Cong in the South.",
      },
      {
        front: "How did President John F. Kennedy escalate US involvement between 1961 and 1963?",
        back: "JFK expanded US military **'advisers'** from roughly **900** (under Eisenhower) to over **16,000** by November 1963, supplying helicopters and Green Berets.",
      },
      {
        front: "What happened during the August 1964 Gulf of Tonkin Incident?",
        back: "North Vietnamese patrol boats fired on **USS *Maddox*** (2 Aug), followed by a disputed second attack (4 Aug) that later evidence showed almost certainly never happened.",
      },
      {
        front: "What power did the Gulf of Tonkin Resolution (7 August 1964) give President Lyndon B. Johnson?",
        back: "Congress authorised LBJ to take **'all necessary measures'** in Southeast Asia — a virtual blank cheque leading to **Operation Rolling Thunder** and US Marines landing at **Da Nang (March 1965)**.",
      },
      {
        front: "What is the sharpest contrast between how WWI (1914) and the Vietnam War (1965) escalated?",
        back: "WWI erupted in a sudden **37-day** alliance chain reaction after Sarajevo; US war in Vietnam grew through **20 years of creeping escalation** (1945–65).",
      },
    ],
    mustKnow: [
      "Identify the three states of French Indochina and explain how WWII Japanese occupation weakened French rule.",
      "Explain Ho Chi Minh's dual identity as a Vietnamese nationalist and Communist, and the significance of Dien Bien Phu (May 1954).",
      "State the exact terms of the 1954 Geneva Accords (17th parallel, temporary split, 1956 elections) and why the US did not sign.",
      "Explain Cold War Containment (1947), 1949 China, the Korean War (1950–53) and US funding of 80% of France's war.",
      "Explain Eisenhower's 1954 Domino Theory — including how Malaya and Singapore (during the 1948–60 Malayan Emergency) fit into US fears.",
      "Explain why Ngo Dinh Diem and the US blocked the 1956 elections and why Diem's regime lost peasant support (Strategic Hamlets, 1963 Buddhist Crisis).",
      "Distinguish the Viet Minh from the NLF / Viet Cong and explain the role of the Ho Chi Minh Trail.",
      "Trace US escalation from Eisenhower (~900 advisers) to JFK (16,000 advisers) to LBJ (Gulf of Tonkin 1964, Rolling Thunder & Da Nang 1965).",
      "Explain why historians call the Gulf of Tonkin Resolution LBJ's 'blank cheque' and why the 4 August incident is controversial.",
      "Compare WWI (1914) and the Vietnam War across **Ideology**, **Territory**, **Flashpoints** and **Speed of Escalation**.",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: 'The Vietnam War began in 1965 when America suddenly invaded a peaceful country.'",
        right: "Write instead ✅: 'Full US combat escalation in March 1965 was the climax of twenty years of conflict — from Vietnamese anti-colonial war against France (1946–54) to civil insurgency in South Vietnam and creeping US aid and advisers.'",
      },
      {
        wrong: "Never write ❌: 'The 1954 Geneva Accords permanently split Vietnam at the 38th parallel.'",
        right: "Write instead ✅: 'The Geneva Accords **temporarily** divided Vietnam at the **17th parallel** (the 38th parallel divided Korea!) with reunification elections promised for July 1956.'",
      },
      {
        wrong: "Never write ❌: 'The Viet Minh and the Viet Cong were the exact same army fighting in the exact same war.'",
        right: "Write instead ✅: 'The **Viet Minh** (founded 1941) fought Japan and France up to Dien Bien Phu (1954), whereas the **Viet Cong / NLF** (formed December 1960) were South Vietnamese Communist guerrillas fighting Diem and the US.'",
      },
      {
        wrong: "Never write ❌: 'North Vietnam launched two massive, undisputed battleships attacks killing hundreds of Americans in the Gulf of Tonkin.'",
        right: "Write instead ✅: 'On 2 August 1964 torpedo boats damaged USS *Maddox* with zero US deaths, while the reported 4 August second attack almost certainly never happened — yet LBJ used it to pass the Gulf of Tonkin Resolution.'",
      },
      {
        wrong: "Never write ❌: 'Ho Chi Minh was purely a puppet taking orders from Moscow and Beijing.'",
        right: "Write instead ✅: 'Although Ho Chi Minh was a committed Communist who accepted Soviet and Chinese aid, he was also a fierce Vietnamese nationalist pursuing independence from foreign rule.'",
      },
      {
        wrong: "Never write ❌: 'Every Southeast Asian domino fell to Communism after 1975 just as Eisenhower predicted.'",
        right: "Write instead ✅: 'Although Laos and Cambodia became Communist in 1975, Thailand, Malaysia and Singapore remained staunchly non-Communist — showing the Domino Theory underestimated local nationalism and resilience.'",
      },
    ],
    examMistakes: [
      "Mixing up the **17th parallel** (Vietnam, 1954) with the **38th parallel** (Korea).",
      "Confusing **Viet Minh** (1941–54 vs Japan/France) with **Viet Cong / NLF** (1960+ vs Diem/US).",
      "Forgetting the **four US presidents** in chronological order: **Truman → Eisenhower → Kennedy (JFK) → Johnson (LBJ)**.",
      "Writing that the US declared formal war in August 1964 — Congress never passed a formal declaration of war; it passed the **Gulf of Tonkin Resolution**.",
      "Ignoring the **local South Vietnamese causes** (Diem's corruption, Strategic Hamlets, Buddhist Crisis) and blaming the war *only* on Cold War ideology.",
      "In WWI vs Vietnam comparison essays, describing WWI for two paragraphs and Vietnam for two paragraphs without making **direct side-by-side comparisons**.",
      "Forgetting to link the Domino Theory to real regional fears like the **Malayan Emergency (1948–60)** and **Singapore**.",
    ],
    mnemonics: [
      {
        topic: "Four US Presidents Escalating in Vietnam (1945–68)",
        device: "T–E–K–J ('They Escalated Korea's Junction')",
        explanation: "**T**ruman (Containment & French aid) → **E**isenhower (Domino Theory, 80% French costs, ~900 advisers) → **K**ennedy (16,000 advisers & Strategic Hamlets) → **J**ohnson (Gulf of Tonkin 1964, Rolling Thunder & ground troops 1965).",
      },
      {
        topic: "Why Diem Failed in South Vietnam",
        device: "E–C–S–B",
        explanation: "**E**lections cancelled (1956) · **C**orruption & landlords · **S**trategic Hamlets (1962) · **B**uddhist Crisis (1963).",
      },
      {
        topic: "Comparing WWI vs Vietnam",
        device: "I–T–F–S",
        explanation: "**I**deology · **T**erritory · **F**lashpoint · **S**peed of Escalation (37 days vs 20 years).",
      },
    ],
    realWorld: [
      {
        title: "Singapore & the Malayan Emergency (1948–1960)",
        detail: "When Eisenhower warned about Southeast Asian dominoes in 1954, British and Commonwealth forces were already battling Malayan Communist Party guerrillas just north of the Johor Causeway, while Singapore's Lee Kuan Yew later argued US involvement in Vietnam bought non-Communist Southeast Asia vital time to stabilise.",
        emoji: "🦁",
      },
      {
        title: "War Powers & Executive 'Blank Cheques'",
        detail: "Because the 1964 Gulf of Tonkin Resolution let LBJ wage massive war without a formal congressional declaration, the US Congress later passed the **War Powers Resolution (1973)** to restrict presidential warmaking.",
        emoji: "⚖️",
      },
      {
        title: "Media & Television in Foreign Policy",
        detail: "Malcolm Browne's photograph of Buddhist monk Thich Quang Duc's June 1963 protest shocked President Kennedy and the world — showing how instant visual media can overturn governments' foreign policies.",
        emoji: "📸",
      },
      {
        title: "Intelligence Failures & Flashpoints",
        detail: "The disputed 4 August 1964 radar readings in the Gulf of Tonkin are still taught in modern political science alongside later intelligence disputes as a warning against rushing into war on unverified reports.",
        emoji: "📡",
      },
      {
        title: "From Cold War Enemies to ASEAN Partners",
        detail: "Vietnam joined **ASEAN** in 1995 alongside Singapore, Malaysia and Thailand, and today the United States and Vietnam are major trading and strategic partners — proving Cold War ideological enemies can transform completely.",
        emoji: "🤝",
      },
    ],
    videos: [
      {
        title: "Origins of the Vietnam War — Indochina, Dien Bien Phu & Domino Theory",
        channel: "GCSE History / Simple History Search",
        url: "https://www.youtube.com/results?search_query=causes+of+vietnam+war+dien+bien+phu+geneva+domino+theory+GCSE",
      },
      {
        title: "Ngo Dinh Diem, the Viet Cong & JFK's Advisers Explained",
        channel: "History Matters / BBC Bitesize Search",
        url: "https://www.youtube.com/results?search_query=ngo+dinh+diem+viet+cong+strategic+hamlets+buddhist+crisis+vietnam",
      },
      {
        title: "The Gulf of Tonkin Incident (1964) & LBJ's Escalation",
        channel: "Oversimplified / Cold War History Search",
        url: "https://www.youtube.com/results?search_query=gulf+of+tonkin+incident+1964+resolution+operation+rolling+thunder",
      },
      {
        title: "Cold War in Southeast Asia: Domino Theory, Malaya & Singapore",
        channel: "Southeast Asian History Search",
        url: "https://www.youtube.com/results?search_query=domino+theory+cold+war+southeast+asia+malaya+singapore+vietnam",
      },
    ],
    formulas: [
      {
        name: "French Indochina",
        formula: "Vietnam + Laos + Cambodia",
        note: "French Southeast Asian empire shattered by WWII Japanese occupation (1940–45) and Dien Bien Phu (1954).",
      },
      {
        name: "Viet Minh (1941)",
        formula: "Ho Chi Minh's nationalist-communist independence league",
        note: "Fought Japanese occupiers and French colonial troops, winning at Dien Bien Phu (May 1954).",
      },
      {
        name: "Battle of Dien Bien Phu (May 1954)",
        formula: "General Vo Nguyen Giap's decisive defeat of 10,000 French troops",
        note: "Ended French colonial rule in Indochina and forced the Geneva peace talks.",
      },
      {
        name: "Geneva Accords (July 1954)",
        formula: "Temporary split at 17th parallel + promised July 1956 elections",
        note: "Laos & Cambodia became independent; neither the US nor South Vietnam signed the Accords.",
      },
      {
        name: "Containment (Truman Doctrine, 1947)",
        formula: "Stop Communism spreading to any new country",
        note: "Intensified after Mao's 1949 China victory and the 1950–53 Korean War; US paid ~80% of France's war by 1954.",
      },
      {
        name: "Domino Theory (Eisenhower, April 1954)",
        formula: "Vietnam → Laos → Cambodia → Thailand → Malaya & Singapore",
        note: "US Cold War fear that losing one state would trigger Communist takeovers across Southeast Asia.",
      },
      {
        name: "Ngo Dinh Diem (1955–1963)",
        formula: "US-backed authoritarian President of South Vietnam",
        note: "Cancelled 1956 elections, backed landlords, alienated Buddhists (1963 crisis), assassinated in Nov 1963 coup.",
      },
      {
        name: "Strategic Hamlets Programme (1962)",
        formula: "Forced relocation of South Vietnamese peasants into fortified villages",
        note: "Intended to isolate Viet Cong, but backfired by infuriating uprooted rural families.",
      },
      {
        name: "NLF / Viet Cong (Dec 1960)",
        formula: "South Vietnamese Communist guerrilla movement opposing Diem & US",
        note: "Supplied from North Vietnam via the jungle network known as the Ho Chi Minh Trail.",
      },
      {
        name: "JFK's 'Advisers' Escalation (1961–63)",
        formula: "~900 advisers (1960) → 16,000+ advisers (Nov 1963)",
        note: "Deepened American political and military commitment before regular combat divisions arrived.",
      },
      {
        name: "Gulf of Tonkin Incident & Resolution (Aug 1964)",
        formula: "USS Maddox (2 Aug) + disputed 4 Aug attack → 7 Aug Congressional 'blank cheque'",
        note: "Authorised LBJ to take 'all necessary measures' without a formal declaration of war.",
      },
      {
        name: "1965 Full US Escalation",
        formula: "Operation Rolling Thunder (bombing) + 3,500 Marines at Da Nang (March 1965)",
        note: "Marked the transition from advisory aid to full-scale American war (reaching 500,000+ troops by 1968).",
      },
    ],
  },
};
