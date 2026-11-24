import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "singapore-and-change",
  title: "Singapore and Change (Combined Humanities)",
  strand: "Singapore & Change",
  icon: "🦁",
  summary: "Trace Singapore's journey from WWII occupation and sudden 1965 independence to a global hub, and master 4-lens Combined Humanities enquiry.",
  intro:
    "How did a small island with no oil, no minerals, crowded wooden squatter slums, and an unexpected separation from Malaysia in 1965 reinvent itself into one of the world's most connected global hubs within a single generation? In Tanglin's Term 3 **Combined Humanities** project, you examine Singapore through four interlocking lenses—**History, Politics, Geography, and Economics**—from the Fall of Singapore (1942) to modern urban sustainability and independent enquiry design.",
  guide: [
    {
      id: "colony-to-self-government",
      heading: "From WWII Occupation to Self-Government (1942–1959)",
      discovery: {
        problem:
          "Before February 1942, British colonial officials boasted that Singapore was an 'impregnable fortress' protecting Southeast Asia. Yet Imperial Japanese troops crossed the Johor Strait and captured the entire island in just one week. When British rule returned in September 1945, why could colonial authority never recover the unquestioned prestige it once held?",
        idea:
          "The **Fall of Singapore (15 February 1942)** shattered the myth of British invincibility forever. Three and a half years of brutal Japanese Occupation (*Syonan-to*), followed by post-war housing shortages, strikes, and riots, convinced ordinary Singaporeans that an Asian people could—and must—govern and defend themselves.",
      },
      body: `Singapore's constitutional journey from British Crown Colony to internal self-government spanned seventeen turbulent years (1942–1959), driven by war shock, post-war hardship, and rising anti-colonial politics.

### 1. Fall of Singapore (15 February 1942) & Japanese Occupation (1942–1945)
- British defences expected a sea assault, leaving the northern approach from Malaya exposed; General Arthur Percival surrendered on **15 February 1942**.
- Renamed **Syonan-to** ("Light of the South"), occupied Singapore endured severe trauma: the **Sook Ching** massacre targeting Chinese civilians suspected of anti-Japanese sympathies, acute food and medicine shortages, rationing, and worthless Japanese "banana notes" hyperinflation.
- Local heroes such as **Lim Bo Seng** (Force 136) and **Elizabeth Choy** risked torture to resist occupation—proving locals were willing to sacrifice for their own homeland.

### 2. Post-War Shortages & Unrest (1945–1955)
- Returning under the British Military Administration (BMA), colonial authorities struggled with ruined docks, overcrowded shophouses, black markets, and unemployment.
- **Maria Hertogh Riots (December 1950):** A colonial court ruling over a Dutch girl raised by a Malay Muslim family inflamed deep religious and racial sensitivities, leaving 18 dead and exposing British insensitivity to local communities.
- **Hock Lee Bus Riots (May 1955):** Striking bus workers joined by Chinese middle-school students clashed violently with police, demonstrating the growing power of trade unions, anti-colonial students, and left-wing politics.

### 3. Constitutional Ladder to 1959 Self-Government
- **Rendel Constitution (1955):** Created the first majority-elected Legislative Assembly (partial self-government). **David Marshall** (Labour Front) became Singapore's first Chief Minister, followed by **Lim Yew Hock**, who negotiated the London *Merdeka* (independence) talks.
- **Rise of the PAP & 1959 General Election:** Founded in 1954 by **Lee Kuan Yew** and allies, the **People's Action Party (PAP)** won 43 of 51 seats in May 1959.
- **Internal Self-Government (June 1959):** Singapore gained full control over domestic affairs (housing, education, trade, finance), with **Lee Kuan Yew** as first Prime Minister and **Yusof bin Ishak** as *Yang di-Pertuan Negara* (Head of State, later Singapore's first President). Britain retained control over **defence and foreign affairs**.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Constitutional ladder of Singapore from 1942 to 1959 internal self-government">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Singapore's Constitutional Ladder (1942–1959)</text>

  <rect x="20" y="168" width="122" height="62" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="81" y="187" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">1942–1945</text>
  <text x="81" y="203" text-anchor="middle" font-size="10" fill="var(--ink)">Fall of Singapore</text>
  <text x="81" y="218" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">British myth shattered</text>

  <line x1="142" y1="186" x2="158" y2="152" stroke="var(--line)" stroke-width="2" />

  <rect x="152" y="130" width="122" height="62" rx="8" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="213" y="149" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">1950 &amp; 1955</text>
  <text x="213" y="165" text-anchor="middle" font-size="10" fill="var(--ink)">Maria Hertogh &amp;</text>
  <text x="213" y="180" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Hock Lee bus riots</text>

  <line x1="274" y1="148" x2="290" y2="114" stroke="var(--line)" stroke-width="2" />

  <rect x="284" y="92" width="122" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="345" y="111" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">1955 Rendel</text>
  <text x="345" y="127" text-anchor="middle" font-size="10" fill="var(--ink)">Partial self-gov</text>
  <text x="345" y="142" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">David Marshall (CM)</text>

  <line x1="406" y1="110" x2="422" y2="76" stroke="var(--line)" stroke-width="2" />

  <rect x="416" y="48" width="126" height="68" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2" />
  <text x="479" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">June 1959</text>
  <text x="479" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Internal Self-Gov</text>
  <text x="479" y="99" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">PAP / Lee Kuan Yew</text>
  <text x="479" y="111" text-anchor="middle" font-size="9" fill="var(--ink-2)">(UK keeps defence)</text>

  <text x="280" y="242" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Note: 1959 was internal self-government, NOT yet full sovereign independence (1965).</text>
</svg>`,
      diagramCaption: "Each step transferred more power from British officials to elected Singaporean leaders between 1942 and 1959.",
      workedExamples: [
        {
          title: "Explaining Why 1942–1945 Was a Political Turning Point",
          problem:
            "Explain why the Japanese Occupation (1942–1945) accelerated demands for self-government in Singapore after Britain returned.",
          steps: [
            "Identify the pre-war belief: Before 1942, British colonial prestige rested on the claim that the Empire guaranteed invincible security.",
            "Show what changed in 1942: Britain's rapid surrender on 15 February 1942 shattered the myth of European military superiority.",
            "Connect to post-war politics: Having survived Syonan-to hardships on their own—and facing severe post-war housing and job shortages under the BMA—locals increasingly demanded elected local leadership rather than colonial rule.",
          ],
          answer:
            "The rapid Fall of Singapore on 15 February 1942 destroyed the myth of British invincibility; enduring occupation hardships and post-war BMA shortages convinced Singaporeans they needed to govern and defend themselves.",
          yourTurn: {
            question:
              "Under Singapore's 1959 constitution granting internal self-government, which two major areas did Britain STILL control? (Name either one.)",
            answer: {
              type: "text",
              accept: ["defence", "defense", "foreign affairs", "external affairs", "defence and foreign affairs", "defense and foreign affairs"],
              display: "defence and foreign affairs",
            },
            solution:
              "In 1959 Singapore won internal self-government (housing, education, economy), while Britain retained control over **defence** and **foreign affairs**.",
          },
        },
      ],
      keyPoints: [
        "The Fall of Singapore (15 February 1942) and Japanese Occupation (*Syonan-to*) shattered the myth of British invincibility.",
        "Post-war shortages, the 1950 Maria Hertogh riots, and the 1955 Hock Lee bus riots exposed colonial weakness and heightened political activism.",
        "The 1955 Rendel Constitution granted partial self-government under Chief Minister David Marshall (followed by Lim Yew Hock).",
        "In 1959 the PAP won power under Prime Minister Lee Kuan Yew, achieving **internal self-government**—NOT yet full independence.",
      ],
      whyItWorks:
        "Seeing 1942–1959 as a chain of causation—military humiliation → economic hardship → social unrest → staged constitutional concessions—prevents the common mistake of treating 1959 and 1965 as interchangeable.",
      strategies: [
        "Always distinguish **1955 (Rendel partial self-government)**, **1959 (full internal self-government)**, and **1965 (sovereign independence)**.",
        "Link specific unrest episodes (Maria Hertogh 1950, Hock Lee 1955) to what they revealed about colonial legitimacy.",
      ],
      thinkDeeper:
        "Why did Britain respond to post-war unrest with gradual constitutional concessions (Rendel 1955 → 1959) rather than clinging to pure Crown Colony rule?",
    },
    {
      id: "merger-and-independence-1965",
      heading: "Merger with Malaysia (1963) & Separation (1965)",
      discovery: {
        problem:
          "On 9 August 1965, Prime Minister Lee Kuan Yew appeared on television with tears in his eyes to announce Singapore's sudden independence. In India, independence in 1947 was greeted with massive celebration—so why did Singapore's leader weep when his country became fully independent?",
        idea:
          "Singapore's leaders genuinely believed a tiny island without natural resources, water self-sufficiency, or an army could not survive economically or militarily without Malaysia's hinterland. Separation was NOT a triumphant war of liberation—it was an abrupt, anxious divorce after 23 turbulent months inside Malaysia.",
      },
      body: `Between 1961 and 1965, Singapore swung from desperately pursuing **Merger with Malaysia** to confronting sudden, unplanned sovereignty on **9 August 1965**.

### 1. Why Singapore & Malaya Formed Malaysia (16 September 1963)
- **Singapore's Economic Need:** With rapid population growth, high unemployment, and declining colonial entrepôt trade, Lee Kuan Yew and the PAP urgently sought a **Common Market** giving Singapore's new factories tariff-free access to Malaya's hinterland.
- **Decolonisation & Security:** Britain would only grant full independence from colonial rule via Merger. Meanwhile, Malayan Prime Minister **Tunku Abdul Rahman**—initially hesitant because Singapore's Chinese majority could alter Malaya's ethnic balance—agreed to a wider Federation of Malaysia (Malaya, Singapore, Sabah, and Sarawak) partly to contain radical left-wing/communist influence in Singapore (preceded by **Operation Coldstore** in February 1963).

### 2. Why Merger Broke Down in 23 Months (1963–1965)
Three interlocking fractures tore the union apart:
1. **Economic Disputes:** Kuala Lumpur delayed establishing the promised **Common Market**, demanded Singapore increase its revenue contribution to the federal government (from 40% to 60%), and ordered the closure of Singapore's Bank of China branch.
2. **Political & Ideological Clash:** Malaysia's ruling Alliance Party operated on race-based politics and special privileges (*Bumiputera* rights) for Malays. The PAP broke an informal understanding by contesting the 1964 Malaysian federal election and championed **"Malaysian Malaysia"**—equal opportunities regardless of race—infuriating UMNO ultras.
3. **Communal Tension & 1964 Racial Riots:** Heated political speeches and newspaper campaigns inflamed racial suspicion. On **21 July 1964** (during Prophet Muhammad's Birthday procession) and again in September 1964, bloody Chinese–Malay riots erupted in Singapore, killing 36 people and forcing island-wide curfews.

### 3. Separation & Existential Crisis (9 August 1965)
- Convinced that keeping Singapore inside Malaysia risked further communal bloodshed, **Tunku Abdul Rahman** decided on separation; the Separation Agreement took effect on **9 August 1965**.
- Newly independent Singapore faced daunting survival threats: **no Common Market or natural resources**, high unemployment, **Konfrontasi** (Indonesian hostility, 1963–66, including the 1965 MacDonald House bombing), **no standing army** (only two infantry battalions), and Britain's shocking **1968 announcement of military withdrawal ("East of Suez")**, which threatened roughly 20% of Singapore's GDP and tens of thousands of jobs.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three fault lines causing the 1965 Separation of Singapore from Malaysia">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Why Merger (1963) Collapsed into Separation (9 August 1965)</text>

  <rect x="18" y="42" width="166" height="114" rx="10" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="101" y="63" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">1. Economic Friction</text>
  <text x="28" y="83" font-size="10" fill="var(--ink)">• Common Market delayed</text>
  <text x="28" y="100" font-size="10" fill="var(--ink)">• Federal revenue share</text>
  <text x="28" y="114" font-size="10" fill="var(--ink)">  raised 40% → 60%</text>
  <text x="28" y="131" font-size="10" fill="var(--ink)">• Bank of China row</text>

  <rect x="197" y="42" width="166" height="114" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="280" y="63" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">2. Political Clash</text>
  <text x="207" y="83" font-size="10" fill="var(--ink)">• Alliance race-based</text>
  <text x="207" y="97" font-size="10" fill="var(--ink)">  privileges vs PAP's</text>
  <text x="207" y="113" font-size="10" font-weight="700" fill="var(--brand)">  'Malaysian Malaysia'</text>
  <text x="207" y="131" font-size="10" fill="var(--ink)">• 1964 election clash</text>

  <rect x="376" y="42" width="166" height="114" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="459" y="63" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">3. Communal Riots</text>
  <text x="386" y="83" font-size="10" fill="var(--ink)">• July &amp; Sept 1964</text>
  <text x="386" y="97" font-size="10" fill="var(--ink)">  racial riots (36 dead)</text>
  <text x="386" y="114" font-size="10" fill="var(--ink)">• Deep mutual distrust</text>
  <text x="386" y="131" font-size="10" fill="var(--ink)">• Fear of wider violence</text>

  <line x1="101" y1="156" x2="210" y2="184" stroke="var(--warn)" stroke-width="1.8" />
  <line x1="280" y1="156" x2="280" y2="184" stroke="var(--brand)" stroke-width="1.8" />
  <line x1="459" y1="156" x2="350" y2="184" stroke="var(--bad)" stroke-width="1.8" />

  <rect x="65" y="184" width="430" height="52" rx="10" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8" />
  <text x="280" y="205" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">9 AUGUST 1965: SUDDEN SOVEREIGN INDEPENDENCE</text>
  <text x="280" y="223" text-anchor="middle" font-size="10" fill="var(--ink-2)">No hinterland · No standing army · Konfrontasi · Later 1968 UK troop withdrawal</text>
</svg>`,
      diagramCaption: "Economic disputes, ideological clashes over multiracial equality, and the 1964 racial riots converged to end Merger in August 1965.",
      workedExamples: [
        {
          title: "Categorising Causes of Separation (Economic vs Political)",
          problem:
            "Explain one **economic** disagreement and one **political** disagreement that caused Singapore and Malaysia to separate in August 1965.",
          steps: [
            "Economic cause: Singapore joined expecting a tariff-free Common Market, but Kuala Lumpur delayed it while raising Singapore's federal tax contribution from 40% to 60%.",
            "Political cause: The federal Alliance government defended race-based Malay special privileges, whereas Lee Kuan Yew's PAP campaigned for a 'Malaysian Malaysia' with equal rights for all races and contested the 1964 federal election.",
            "Link to consequence: These clashes fuelled the bloody 1964 racial riots and convinced Tunku Abdul Rahman that separation was necessary to prevent wider bloodshed.",
          ],
          answer:
            "Economically, Kuala Lumpur delayed the Common Market and hiked Singapore's tax contribution from 40% to 60%. Politically, the PAP's multiracial 'Malaysian Malaysia' campaign clashed head-on with the Alliance's race-based politics, escalating tensions after the 1964 riots.",
          yourTurn: {
            question:
              "What two-word slogan did Lee Kuan Yew and the PAP champion during Merger to argue for equal rights regardless of ethnicity?",
            answer: {
              type: "text",
              accept: ["Malaysian Malaysia", "malaysian malaysia"],
              display: "Malaysian Malaysia",
            },
            solution:
              "The PAP championed a **'Malaysian Malaysia'**—arguing the federation should belong equally to all citizens regardless of race, clashing with race-based political privileges.",
          },
        },
      ],
      keyPoints: [
        "Singapore joined Malaysia (16 September 1963) seeking a **Common Market**, decolonisation from Britain, and political stability.",
        "Merger collapsed in 23 months due to **economic friction** (Common Market delays, tax hikes), **political clash** ('Malaysian Malaysia' vs race-based politics), and the **1964 racial riots**.",
        "Independence on **9 August 1965** was sudden and anxious—not won by a war of liberation—leaving Singapore with no hinterland, high unemployment, and no army.",
        "Britain's 1968 decision to withdraw military bases ('East of Suez') removed roughly 20% of GDP, forcing urgent economic and defence reinvention.",
      ],
      whyItWorks:
        "Understanding WHY Singapore wept rather than cheered in 1965 explains almost every bold policy that followed—from courting global MNCs and rapid HDB building to National Service and racial integration quotas.",
      strategies: [
        "Always classify Separation causes into three clear buckets: **Economic**, **Political/Ideological**, and **Communal (1964 riots)**.",
        "Connect 1965 vulnerabilities directly to post-1965 solutions (no Common Market → global export hub; 1964 riots → multiracialism & EIP; British withdrawal → National Service & MNCs).",
      ],
      thinkDeeper:
        "How might Singapore's economy and identity look today if the promised Malaysian Common Market had worked smoothly after 1963?",
    },
    {
      id: "economic-urban-transformation",
      heading: "Economic & Urban Transformation: Jurong, HDB & Global Hub",
      discovery: {
        problem:
          "On 25 May 1961, a devastating fire swept through crowded wooden attap squatter huts in **Bukit Ho Swee**, leaving 16,000 people homeless in a single afternoon. Yet just **nine months later**, modern concrete apartment blocks were rising on the ashes. Meanwhile, critics laughed at Dr Goh Keng Swee's plan to turn crocodile-filled Jurong swamps into factories—calling it 'Goh's Folly'. How did Singapore transform both its skyline and economy so dramatically?",
        idea:
          "Cut off from Malaysia's hinterland after 1965, Singapore turned tiny size into agility: pairing **export-oriented industrialisation (EDB, Jurong, MNCs)** with **world-class global connectivity (PSA port & Changi Airport)** and a **housing revolution (HDB & CPF Home Ownership)** that gave ordinary families both modern homes and a stake in national stability.",
      },
      body: `Singapore's economic and urban transformation links **History, Geography, and Economics** directly—showing how state planning overcame extreme scarcity of land, water, and raw materials.

### 1. From Entrepôt to Export-Led Industrial Hub (Economics)
- Historically, Singapore depended on **entrepôt trade** (importing raw goods like rubber and tin, then re-exporting them). After 1965, losing the Malaysian Common Market and facing Britain's 1968 troop withdrawal meant entrepôt trade could never create enough jobs.
- Advised by UN economist **Albert Winsemius**, Singapore created the **Economic Development Board (EDB, 1961)** and cleared swampland to build the **Jurong Industrial Estate** (championed by Finance Minister **Dr Goh Keng Swee**).
- Rather than relying solely on local markets, Singapore pivoted to **export-oriented industrialisation**—actively inviting **multinational corporations (MNCs)** (such as Shell, Texas Instruments, and Hewlett-Packard) by offering clean, corruption-free governance, English-literate skilled workers, industrial peace, and tax incentives. Over decades, the economy climbed the value chain from textiles and basic electronics to finance, biomedical science, and precision semiconductors.

### 2. Strategic Geography: PSA Port, Changi Airport, Land & Water
- **Maritime & Aviation Hub:** Singapore leveraged its strategic chokepoint on the **Strait of Malacca**. The **Port of Singapore Authority (PSA)** bet boldly on containerisation at **Tanjong Pagar (1972)**—now expanding into the automated **Tuas Mega Port**. **Changi Airport (opened 1981)** was built on reclaimed coastal land to replace cramped Paya Lebar, linking Singapore directly to global trade and tourism.
- **Overcoming Physical Scarcity:** Through **land reclamation**, Singapore expanded its land area by roughly **25%** (from ~581 km² in 1965 to ~735 km² today). To reduce reliance on imported water from Johor, Singapore engineered the **Four National Taps**: (1) local catchment reservoirs, (2) imported water, (3) **NEWater** (ultra-clean reclaimed water), and (4) desalinated seawater.

### 3. The Housing Revolution: Bukit Ho Swee (1961) → HDB Public Housing
- In 1959, hundreds of thousands lived in cramped, fire-prone shophouses and wooden squatter kampungs; the British Singapore Improvement Trust (SIT) had built only ~23,000 flats in 32 years.
- Founded in **1960** under **Lim Kim San**, the **Housing & Development Board (HDB)** responded urgently to the **May 1961 Bukit Ho Swee fire** (16,000 homeless), completing over 50,000 flats in its first five years.
- Self-contained **New Towns** (Queenstown, Toa Payoh, Tampines) placed schools, clinics, hawker centres, parks, and MRT stations near homes. Crucially, the **1964 Home Ownership Scheme**—and allowing citizens to use **Central Provident Fund (CPF)** savings from **1968**—turned renters into homeowners (today ~80% of resident households live in HDB flats), giving families a tangible economic stake in Singapore's stability.`,
      diagram: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four pillars of Singapore economic and urban transformation since 1960">
  <rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Four Pillars of Singapore's Economic &amp; Urban Transformation</text>

  <rect x="20" y="42" width="250" height="88" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="34" y="63" font-size="12" font-weight="800" fill="var(--brand)">1. Industrialisation (EDB &amp; MNCs)</text>
  <text x="34" y="82" font-size="10.2" fill="var(--ink)">• Jurong swamps → Jurong Industrial Estate</text>
  <text x="34" y="98" font-size="10.2" fill="var(--ink)">• Export-led growth courting global MNCs</text>
  <text x="34" y="114" font-size="10.2" fill="var(--ink-2)">• Skills shift: factories → finance &amp; tech</text>

  <rect x="290" y="42" width="250" height="88" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="304" y="63" font-size="12" font-weight="800" fill="var(--good)">2. Public Housing (HDB &amp; CPF)</text>
  <text x="304" y="82" font-size="10.2" fill="var(--ink)">• 1961 Bukit Ho Swee fire → rapid HDB build</text>
  <text x="304" y="98" font-size="10.2" fill="var(--ink)">• 1964 Home Ownership + 1968 CPF funding</text>
  <text x="304" y="114" font-size="10.2" fill="var(--ink-2)">• ~80% of resident households in HDB flats</text>

  <rect x="20" y="148" width="250" height="88" rx="10" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="34" y="169" font-size="12" font-weight="800" fill="var(--warn)">3. Global Connectivity (PSA &amp; Changi)</text>
  <text x="34" y="188" font-size="10.2" fill="var(--ink)">• Strait of Malacca strategic trade route</text>
  <text x="34" y="204" font-size="10.2" fill="var(--ink)">• 1972 Tanjong Pagar containers → Tuas Port</text>
  <text x="34" y="220" font-size="10.2" fill="var(--ink-2)">• 1981 Changi Airport on reclaimed coast</text>

  <rect x="290" y="148" width="250" height="88" rx="10" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.5" />
  <text x="304" y="169" font-size="12" font-weight="800" fill="var(--info)">4. Geography &amp; Resource Security</text>
  <text x="304" y="188" font-size="10.2" fill="var(--ink)">• Land reclamation: ~581 → ~735 km² (+25%)</text>
  <text x="304" y="204" font-size="10.2" fill="var(--ink)">• Four National Taps (NEWater, desalination)</text>
  <text x="304" y="220" font-size="10.2" fill="var(--ink-2)">• 'City in Nature' &amp; Green Plan 2030</text>
</svg>`,
      diagramCaption: "Industrial policy, public housing, global transport hubs, and geographic engineering reinforced each other after 1960.",
      workedExamples: [
        {
          title: "Linking Urban Geography and Political Economy in HDB Policy",
          problem:
            "How did the HDB Home Ownership Scheme (1964, expanded with CPF in 1968) solve BOTH a geographical urban problem and a political/economic challenge?",
          steps: [
            "Geographical / urban problem: High-rise concrete New Towns cleared overcrowded, unsanitary, fire-prone wooden squatter kampungs (exposed by the 1961 Bukit Ho Swee fire) while maximising scarce island land.",
            "Political / economic challenge: Allowing families to buy affordable flats with CPF savings gave ordinary citizens a valuable asset and a personal stake in defending national stability, curbing unrest and attracting foreign MNCs.",
            "Note a balanced trade-off: Rapid redevelopment also displaced traditional kampung communities and required long-term planning for ageing leases and housing affordability.",
          ],
          answer:
            "Geographically, high-rise HDB New Towns cleared fire-prone squatter slums and used scarce land efficiently; politically and economically, CPF-funded home ownership gave citizens a direct asset and stake in Singapore's stability.",
          yourTurn: {
            question:
              "Which statutory board established in 1961 spearheaded Singapore's export-led industrialisation and attracted foreign multinational corporations (MNCs)? (Give the 3-letter acronym or full name.)",
            answer: {
              type: "text",
              accept: ["EDB", "Economic Development Board", "the Economic Development Board"],
              display: "EDB (Economic Development Board)",
            },
            solution:
              "The **Economic Development Board (EDB)**, created in 1961 following Albert Winsemius's recommendations, marketed Singapore to global MNCs and developed Jurong Industrial Estate.",
          },
        },
      ],
      keyPoints: [
        "Losing the Malaysian Common Market pushed Singapore from colonial entrepôt trade to **export-led industrialisation** via the **EDB (1961)**, **Jurong Industrial Estate**, and global **MNCs**.",
        "Strategic geography powered **PSA** container shipping (1972 → Tuas Mega Port) and **Changi Airport (1981)**, turning Singapore into a global hub.",
        "After the **1961 Bukit Ho Swee fire**, the **HDB (1960)** cleared slums and used **Home Ownership (1964) + CPF (1968)** to house ~80% of resident households.",
        "Land reclamation (+~25% area) and the **Four National Taps** (including NEWater and desalination) overcame natural resource scarcity—though raising environmental and heritage trade-offs.",
      ],
      whyItWorks:
        "Singapore's transformation is a classic **virtuous cycle** across disciplines: clean housing and bilingual schools created a healthy, skilled workforce → skilled workers and stable politics attracted MNCs → MNC taxes funded Changi Airport, MRT lines, NEWater, and better HDB estates.",
      strategies: [
        "Whenever you write about Jurong, HDB, Changi, or NEWater, name at least TWO humanities lenses (e.g. Geography + Economics) to score top Combined Humanities credit.",
        "Always pair rapid progress with **trade-offs** (loss of kampung heritage, marine impacts of sand reclamation, cost of living, or ageing population).",
      ],
      thinkDeeper:
        "Why did Singapore choose to welcome foreign multinational corporations (MNCs) in the late 1960s at a time when many newly independent countries rejected foreign companies as 'neo-colonialism'?",
    },
    {
      id: "society-politics-enquiry",
      heading: "Multiracialism, Governance & Independent Enquiry Skills",
      discovery: {
        problem:
          "After the traumatic 1964 racial riots and sudden 1965 Separation, Singapore was home to Chinese, Malay, Indian, Eurasian, and other communities who often lived in separate ethnic enclaves, attended separate language schools, and spoke different dialects. How could a brand-new nation forge shared loyalty—and how do you investigate that story in a **Combined Humanities** project?",
        idea:
          "Singapore engineered social cohesion deliberately through four interlocking pillars—**meritocracy**, **bilingual education**, **National Service (NS)**, and the **HDB Ethnic Integration Policy (EIP)**—and studying how well these policies worked requires combining **History, Politics, Geography, and Economics** inside one sharp, debatable enquiry question.",
      },
      body: `Economic growth alone could not keep Singapore united if racial mistrust or external attack tore the country apart. Section 4 brings together Singapore's nation-building governance AND the **Combined Humanities Enquiry Skills** needed for your Year 9 Term 3 project.

### 1. Four Pillars of Multiracialism & Governance
- **Meritocracy:** Opportunities and government roles are awarded by ability and effort rather than race, religion, or family status, paired with strict anti-corruption enforcement (**CPIB**). *(Ongoing debate: how to prevent wealthier families from passing down unequal advantages and keep social mobility open.)*
- **Bilingual Education Policy (1966):** Every student learns **English** (neutral working language connecting ethnic groups and global business) alongside their **Mother Tongue** (Mandarin, Malay, or Tamil) to anchor cultural identity.
- **National Service (NS, 1967):** Following British military withdrawal plans, compulsory two-year service for young male citizens and permanent residents built a credible citizen defence force (**Total Defence**) while mixing youths across ethnic and income backgrounds in shared barracks.
- **HDB Ethnic Integration Policy (EIP, 1989):** Sets balanced ethnic quotas for each HDB block and neighbourhood so that racial enclaves (which worsened the 1964 riots) cannot re-form—ensuring daily interaction in corridors, playgrounds, and hawker centres. *(Trade-off: can occasionally restrict minority sellers' resale buyer pool, prompting recent policy tweaks.)*

### 2. Governance & Contemporary Debates of Change
- Singapore's model blends long-term technocratic planning, social stability, and high living standards with ongoing debates over **balancing rapid change with heritage conservation**, **ageing demographics**, **rising housing/living costs**, **press and civic space**, and **environmental sustainability (Singapore Green Plan 2030)**.

### 3. Designing a Top-Band Combined Humanities Enquiry
Your Term 3 project integrates **four lenses** around ONE focused question:
| Lens | Core Questions Asked About Singapore | Example Evidence |
|---|---|---|
| **History** | What changed, what stayed the same, and what caused turning points? | 1961 Bukit Ho Swee photos, 1965 Separation speeches, NOP primary sources |
| **Politics** | How did laws, state power, citizenship, and governance balance rights & stability? | 1959/1965 constitutional milestones, NS (1967), EIP quotas (1989), parliamentary debates |
| **Geography** | How did space, land scarcity, urban planning, and environment shape change? | Land reclamation maps (+25%), HDB New Town layouts, Four National Taps, Green Plan 2030 |
| **Economics** | How were scarce resources allocated to grow jobs, trade, and living standards? | EDB/MNC investment, GDP per capita, CPF savings, PSA container throughput |

### Weak vs Strong Enquiry Questions
- ❌ *Weak (closed trivia):* "When was HDB created?" *(Answerable in one word—no debate!)*
- ❌ *Weak (too vague/descriptive):* "Tell me everything about Singapore since 1965." *(No argument or focus!)*
- ✅ *Strong (evaluative, time-bound, multi-lens):* **"To what extent did HDB public housing policy achieve both economic development and multiracial cohesion in Singapore between 1960 and 2000?"**`,
      diagram: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-lens Combined Humanities enquiry wheel linking History, Politics, Geography, and Economics">
  <rect x="0" y="0" width="560" height="255" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The 4-Lens Combined Humanities Enquiry Model</text>

  <rect x="20" y="42" width="190" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="115" y="62" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">HISTORY</text>
  <text x="32" y="81" font-size="10" fill="var(--ink)">• Causation &amp; turning points</text>
  <text x="32" y="97" font-size="10" fill="var(--ink)">• Change &amp; continuity</text>
  <text x="32" y="113" font-size="10" fill="var(--ink)">• Primary sources (NOP)</text>

  <rect x="350" y="42" width="190" height="84" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="445" y="62" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">POLITICS</text>
  <text x="362" y="81" font-size="10" fill="var(--ink)">• Governance &amp; laws</text>
  <text x="362" y="97" font-size="10" fill="var(--ink)">• Multiracialism, NS, EIP</text>
  <text x="362" y="113" font-size="10" fill="var(--ink)">• Stability vs civic voice</text>

  <rect x="20" y="152" width="190" height="84" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="115" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">GEOGRAPHY</text>
  <text x="32" y="191" font-size="10" fill="var(--ink)">• Land reclamation &amp; urban</text>
  <text x="32" y="207" font-size="10" fill="var(--ink)">• Four National Taps</text>
  <text x="32" y="223" font-size="10" fill="var(--ink)">• Green Plan 2030</text>

  <rect x="350" y="152" width="190" height="84" rx="10" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="445" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warn)">ECONOMICS</text>
  <text x="362" y="191" font-size="10" fill="var(--ink)">• Scarcity &amp; opportunity cost</text>
  <text x="362" y="207" font-size="10" fill="var(--ink)">• EDB, MNCs, global trade</text>
  <text x="362" y="223" font-size="10" fill="var(--ink)">• Living standards &amp; CPF</text>

  <line x1="210" y1="88" x2="232" y2="112" stroke="var(--brand)" stroke-width="2" />
  <line x1="350" y1="88" x2="328" y2="112" stroke="var(--bad)" stroke-width="2" />
  <line x1="210" y1="186" x2="232" y2="162" stroke="var(--good)" stroke-width="2" />
  <line x1="350" y1="186" x2="328" y2="162" stroke="var(--warn)" stroke-width="2" />

  <circle cx="280" cy="138" r="52" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2" />
  <text x="280" y="129" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">FOCUSED</text>
  <text x="280" y="143" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">ENQUIRY</text>
  <text x="280" y="157" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">"To what extent…"</text>
</svg>`,
      diagramCaption: "Strong Combined Humanities projects weave all four lenses together to answer one focused, debatable enquiry question.",
      workedExamples: [
        {
          title: "Upgrading a Weak Research Question into a Combined Humanities Enquiry",
          problem:
            "A student drafts this project title: *'What is Changi Airport and when did it open?'* Explain why this is a weak enquiry question and rewrite it into a strong 4-lens Combined Humanities enquiry question.",
          steps: [
            "Diagnose the weakness: 'What is… and when…?' is a closed factual recall question—you can answer it in two sentences ('Singapore's international airport, opened in 1981') with no debate, no evaluation, and no multi-lens analysis.",
            "Choose an evaluative command stem: 'To what extent…' or 'How successfully…' so you must weigh benefits against trade-offs.",
            "Weave in time, place, and Combined Humanities lenses (Economics, Geography, Politics, History): e.g. *'To what extent has Changi Airport's expansion since 1981 balanced Singapore's economic growth with environmental and urban sustainability?'*",
          ],
          answer:
            "Weak because it asks closed descriptive facts with no debate. Upgraded: 'To what extent has Changi Airport's development since 1981 balanced Singapore's economic growth with geographical land scarcity and environmental sustainability?'",
          yourTurn: {
            question:
              "In what year did Singapore introduce the **HDB Ethnic Integration Policy (EIP)** setting ethnic quotas in public housing blocks to prevent racial enclaves?",
            answer: {
              type: "number",
              value: 1989,
              display: "1989",
            },
            solution:
              "Singapore introduced the **Ethnic Integration Policy (EIP)** in **1989**—nearly thirty years after HDB's founding in 1960—to prevent ethnic enclaves from re-emerging in public estates.",
          },
        },
      ],
      keyPoints: [
        "Nation-building rested on **meritocracy**, **bilingual education (1966)**, **National Service (1967)**, and the **HDB Ethnic Integration Policy (1989)**.",
        "Every major policy involves real-world trade-offs (e.g. rapid growth vs heritage/environment; EIP social cohesion vs resale restrictions; meritocracy vs widening inequality).",
        "A top Combined Humanities enquiry weaves **History, Politics, Geography, and Economics** around ONE focused, debatable question.",
        "Avoid closed ('When…?') or overly broad ('All about Singapore') titles; use evaluative stems like **'To what extent…'** or **'How successfully…'**.",
      ],
      whyItWorks:
        "Real-world challenges in Singapore—like building Changi Terminal 5 or planning an ageing city—never stay neatly inside one school subject. Practising the 4-lens Combined Humanities method teaches you to think like a policy analyst who sees historical roots, geographic limits, economic incentives, and political trade-offs together.",
      strategies: [
        "Test your enquiry question with the 3-Check Rule: Is it **debatable**? Is it **focused** in time/theme? Can it draw on **at least 3–4 humanities lenses**?",
        "Show nuance by weighing achievements AND ongoing challenges (e.g. Singapore Green Plan 2030, ageing society, or keeping meritocracy inclusive).",
      ],
      thinkDeeper:
        "Does the HDB Ethnic Integration Policy (1989) prove that social harmony sometimes requires active government rules—or could everyday mixing happen naturally without quotas?",
    },
  ],
  learn: {
    flashcards: [
      { front: "When was the Fall of Singapore, and why was it a political turning point?", back: "**15 February 1942**. Britain's rapid surrender to Japan shattered the myth of British invincibility and accelerated post-war demands for self-government." },
      { front: "What were the Maria Hertogh (1950) and Hock Lee bus (1955) riots?", back: "Two major post-war outbreaks of unrest exposing British colonial insensitivity, religious/racial tensions, and rising union and student anti-colonial activism." },
      { front: "What did the 1955 Rendel Constitution achieve?", back: "Granted **partial self-government** with Singapore's first majority-elected Legislative Assembly; **David Marshall** became the first Chief Minister." },
      { front: "What changed in June 1959, and what did Britain STILL control?", back: "The PAP won power with **Lee Kuan Yew** as Prime Minister under full **internal self-government**; Britain still controlled **defence and foreign affairs**." },
      { front: "Why did Singapore seek Merger with Malaysia in 1963?", back: "To secure a **Common Market** with Malaya's hinterland, gain independence from Britain, and counter left-wing/communist instability." },
      { front: "Name the three fault lines that caused Separation on 9 August 1965.", back: "1) **Economic** (Common Market delays, tax hike 40%→60%), 2) **Political** ('Malaysian Malaysia' vs race-based privileges), 3) **Communal** (July & Sept 1964 racial riots)." },
      { front: "Why did the 1961 Bukit Ho Swee fire transform Singapore's urban landscape?", back: "The fire left 16,000 squatters homeless and spurred **Lim Kim San's HDB** into rapid high-rise public housing construction—building flats on the site within nine months." },
      { front: "How did the EDB (1961) and Jurong Industrial Estate transform Singapore's economy?", back: "Championed by **Dr Goh Keng Swee** (advised by Albert Winsemius), they turned swampland into factories and courted global **MNCs** for **export-led industrialisation**." },
      { front: "How did CPF (1968) supercharge the 1964 HDB Home Ownership Scheme?", back: "Allowing citizens to use mandatory **Central Provident Fund (CPF)** savings to pay for HDB flats made home ownership affordable for ordinary families—now ~80% of resident households." },
      { front: "What are Singapore's Four National Taps?", back: "1) Local catchment reservoirs, 2) Imported water from Johor, 3) **NEWater** (reclaimed water), and 4) Desalinated seawater." },
      { front: "Why was National Service (NS) introduced in 1967?", back: "To build a credible citizen defence force ahead of Britain's military withdrawal AND forge shared national identity across ethnic and class lines." },
      { front: "What is the HDB Ethnic Integration Policy (EIP, 1989)?", back: "Ethnic quotas in HDB blocks and estates designed to prevent racial enclaves (lessons from 1964 riots) and promote everyday multiracial mixing." },
      { front: "What is Singapore's Bilingual Education Policy (1966)?", back: "Students learn **English** as a neutral global working language plus their **Mother Tongue** (Mandarin, Malay, Tamil) to preserve cultural heritage." },
      { front: "What are the four lenses of a Combined Humanities enquiry?", back: "**History** (change/causation/sources), **Politics** (governance/policy/rights), **Geography** (space/land/environment), and **Economics** (scarcity/trade/living standards)." },
    ],
    mustKnow: [
      "Trace the constitutional steps from 1942 Fall of Singapore → 1955 Rendel → 1959 Internal Self-Government → 1963 Merger → 9 August 1965 Independence.",
      "Distinguish clearly between 1959 internal self-government and 1965 full sovereign independence.",
      "Explain why Singapore sought Merger in 1963 AND classify the economic, political, and communal causes of Separation in 1965.",
      "Explain how Singapore shifted from entrepôt trade to export-led industrialisation (EDB, Jurong, MNCs) after 1965 and Britain's 1968 troop withdrawal announcement.",
      "Connect the 1961 Bukit Ho Swee fire, HDB New Towns, Home Ownership (1964), and CPF (1968) to urban and social stability.",
      "Explain how PSA container port (1972/Tuas), Changi Airport (1981), land reclamation (+25%), and the Four National Taps overcame geographical constraints.",
      "Evaluate Singapore's four nation-building policies: meritocracy, bilingualism (1966), National Service (1967), and HDB EIP (1989), including trade-offs.",
      "Classify historical, political, geographical, and economic evidence accurately in a Combined Humanities case study.",
      "Draft a focused, debatable, evaluative Combined Humanities enquiry question ('To what extent…').",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'Singapore became an independent country in 1959 when Lee Kuan Yew became Prime Minister.'",
        right: "Write instead: 'In June 1959 Singapore achieved internal self-government (Britain kept defence and foreign affairs); full sovereign independence came on 9 August 1965.'",
      },
      {
        wrong: "Never write: 'Singapore fought a violent war of independence to break free from Malaysia in 1965.'",
        right: "Write instead: 'Singapore actively sought Merger in 1963 and separated unexpectedly by political agreement on 9 August 1965 after economic, ideological, and communal clashes.'",
      },
      {
        wrong: "Never write: 'The HDB Ethnic Integration Policy (EIP) started right away in 1960 when HDB was formed.'",
        right: "Write instead: 'HDB was formed in 1960 to solve urgent slum shortages; ethnic quotas under the EIP were introduced later in 1989 when ethnic clustering began re-appearing.'",
      },
      {
        wrong: "Never write: 'Singapore became rich automatically because of its natural oil and mineral resources.'",
        right: "Write instead: 'Singapore had zero oil or mineral reserves and overcame scarcity through strategic location (PSA/Changi), EDB/MNC policy, clean governance, and human capital.'",
      },
      {
        wrong: "Never write: 'A Combined Humanities enquiry just means writing four separate mini-essays on unrelated topics.'",
        right: "Write instead: 'A strong Combined Humanities enquiry integrates History, Politics, Geography, and Economics to evaluate ONE focused central question.'",
      },
      {
        wrong: "Never write: 'Singapore's rapid development brought only pure benefits with zero challenges or trade-offs.'",
        right: "Write instead: 'Rapid transformation dramatically raised living standards, while creating real trade-offs including lost kampung heritage, land/environmental pressures, and ageing-society costs.'",
      },
    ],
    examMistakes: [
      "Confusing 1955 (Rendel partial self-government), 1959 (internal self-government), 1963 (Merger), and 1965 (Independence).",
      "Listing only political disagreements for 1965 Separation while forgetting economic friction (Common Market delays, tax contribution row) and the 1964 racial riots.",
      "Describing HDB purely as 'building tall flats' without linking it to Bukit Ho Swee (1961), CPF Home Ownership (1964/68), and EIP (1989).",
      "Forgetting the shock of Britain's 1968 'East of Suez' military withdrawal announcement (~20% of GDP) when explaining urgent industrialisation and National Service.",
      "Writing a closed factual question ('When was Changi built?') instead of an evaluative, debatable enquiry question ('To what extent…').",
      "Ignoring Geography or Economics in a Combined Humanities essay and writing purely a History timeline.",
      "Presenting Singapore's policies uncritically without evaluating realistic trade-offs (e.g. EIP resale constraints, meritocracy vs inequality, reclamation vs marine ecology).",
    ],
    mnemonics: [
      {
        topic: "1942–1965 Constitutional Milestones",
        device: "F-R-S-M-I (Five Rapid Steps Made Independence)",
        explanation: "**F**all of Singapore (1942) → **R**endel Constitution (1955) → **S**elf-Government (1959) → **M**erger (1963) → **I**ndependence (1965).",
      },
      {
        topic: "Four Nation-Building Pillars",
        device: "M-B-N-E (Multiracial Building Needs Everyone)",
        explanation: "**M**eritocracy, **B**ilingualism (1966), **N**ational Service (1967), **E**thnic Integration Policy (1989).",
      },
      {
        topic: "Combined Humanities Lenses",
        device: "H-P-G-E",
        explanation: "**H**istory, **P**olitics, **G**eography, **E**conomics — weave all four around one debatable enquiry question.",
      },
    ],
    realWorld: [
      {
        title: "Walking Through Bukit Ho Swee & Tiong Bahru Today",
        detail: "Within minutes of Tanglin, Tiong Bahru's pre-war SIT art-deco flats sit right beside post-1961 HDB slabs in Bukit Ho Swee—a living architectural timeline of Singapore's housing revolution.",
        emoji: "🏢",
      },
      {
        title: "Changi Terminal 5 & Tuas Mega Port",
        detail: "Both megaprojects continue Singapore's 1970s–80s gamble on global connectivity while confronting 21st-century climate realities like rising sea levels and carbon emissions.",
        emoji: "✈️",
      },
      {
        title: "NEWater & the Singapore Green Plan 2030",
        detail: "Turning water vulnerability into high-tech NEWater recycling and 'City in Nature' green corridors shows Geography, Economics, and Politics working together today.",
        emoji: "💧",
      },
      {
        title: "Your Year 9 Term 3 Combined Humanities Project",
        detail: "Whether you investigate housing, aviation, water security, or multiracialism, testing primary sources with NOP alongside maps and economic data gives your project real scholarly depth.",
        emoji: "🔎",
      },
    ],
    videos: [
      {
        title: "Fall of Singapore 1942 & Road to Self-Government",
        channel: "CNA / History Search",
        url: "https://www.youtube.com/results?search_query=Fall+of+Singapore+1942+Syonan-to+self+government+documentary",
      },
      {
        title: "Merger (1963) and Separation of Singapore (9 August 1965)",
        channel: "Singapore History Search",
        url: "https://www.youtube.com/results?search_query=Singapore+merger+Malaysia+1963+separation+1965+documentary",
      },
      {
        title: "From Bukit Ho Swee Fire (1961) to HDB Public Housing",
        channel: "CNA Insider Search",
        url: "https://www.youtube.com/results?search_query=Bukit+Ho+Swee+fire+1961+HDB+Singapore+housing+history",
      },
      {
        title: "How Jurong Industrial Estate & Changi Built Modern Singapore",
        channel: "Economics & Urban Planning Search",
        url: "https://www.youtube.com/results?search_query=Singapore+economic+transformation+EDB+Jurong+Changi+documentary",
      },
    ],
    formulas: [
      { name: "Syonan-to (1942–45)", formula: "Japanese Occupation name for Singapore ('Light of the South') after Britain's surrender on 15 Feb 1942.", note: "Shattered the myth of British invincibility." },
      { name: "Rendel Constitution (1955)", formula: "Constitutional reform granting partial self-government with an elected majority; David Marshall became first Chief Minister." },
      { name: "Internal Self-Government (1959)", formula: "PAP won 43/51 seats; Lee Kuan Yew became Prime Minister controlling domestic affairs while Britain kept defence and foreign affairs." },
      { name: "Merger (16 Sept 1963)", formula: "Union of Singapore, Malaya, Sabah, and Sarawak into Malaysia seeking a Common Market, decolonisation, and security." },
      { name: "Malaysian Malaysia", formula: "PAP's political campaign for equal citizenship rights regardless of race, clashing with Alliance race-based privileges." },
      { name: "Separation (9 Aug 1965)", formula: "Abrupt exit of Singapore from Malaysia following economic disputes, political clashes, and the 1964 racial riots." },
      { name: "Entrepôt Trade", formula: "Traditional colonial trade model of importing raw goods and re-exporting them without local manufacturing." },
      { name: "EDB & Export-Led Growth", formula: "Economic Development Board (1961) + Jurong Industrial Estate courting global MNCs to manufacture goods for world markets." },
      { name: "HDB & CPF Home Ownership", formula: "Housing & Development Board (1960) paired with 1964 Home Ownership and 1968 CPF savings to house ~80% of resident households." },
      { name: "Four National Taps", formula: "Local catchment, imported water (Johor), NEWater (reclaimed), and desalinated seawater ensuring water security." },
      { name: "Ethnic Integration Policy (1989)", formula: "HDB block and neighbourhood ethnic quotas preventing racial enclaves and encouraging everyday multiracial mixing." },
      { name: "Combined Humanities Enquiry", formula: "A focused, debatable investigation ('To what extent…') integrating History, Politics, Geography, and Economics." },
    ],
  },
};
