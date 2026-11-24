import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "indian-independence",
  title: "Indian Independence & Satyagraha",
  strand: "Protest & Conflict",
  icon: "🕊️",
  summary:
    "How mass non-violent civil disobedience, the 1930 Salt March, wartime pressures, and rival nationalist visions ended the British Raj in 1947—and why independence came alongside the tragedy of Partition.",
  intro:
    "For nearly two centuries, British power shaped India—first through the East India Company and from **1858** directly under the British Crown (**the British Raj**). Yet in August **1947**, the world's largest colony won independence, inspiring anti-colonial and civil rights movements from Ghana to Alabama.\n\nWhy did British rule collapse? This enquiry examines how the shock of the **1919 Amritsar Massacre** transformed Indian nationalism, how **Mahatma Gandhi's *Satyagraha*** and the **1930 Dandi Salt March** trapped the Raj in a moral and economic dilemma, how **WWII exhaustion**, **Attlee's 1945 Labour government**, and figures like **Nehru, Jinnah, and Subhas Chandra Bose** accelerated decolonisation—and why historians judge that non-violent protest was vital yet not the sole cause of 1947 independence and Partition.",
  guide: [
    {
      id: "british-raj-amritsar",
      heading: "The British Raj, Nationalism & Amritsar (1919)",
      discovery: {
        problem:
          "During the First World War (1914–1918), over **1.3 million** Indian soldiers and labourers served across Europe, Africa, and the Middle East to help Britain win—hoping loyal service would earn Indian self-government. Yet by late 1919, millions of Indians had lost all faith in British rule. What happened in April 1919 to cause this dramatic turning point?",
        idea:
          "Instead of granting meaningful self-rule, Britain passed the repressive **Rowlatt Acts** (March 1919) allowing imprisonment without trial—and on **13 April 1919**, Brigadier-General Reginald Dyer ordered troops to open fire without warning on unarmed families gathered at **Jallianwala Bagh in Amritsar**, shattering Britain's claim to rule India fairly.",
      },
      body: "### The British Raj & Early Nationalist Movements\nFollowing the 1857 Indian Rebellion, the British Crown took direct control of India in **1858**—an era known as the **British Raj**. India was prized as the 'Jewel in the Crown' of the British Empire: it supplied raw cotton, tea, jute, and spices, served as a captive market for Lancashire factory cloth (undermining traditional Indian weavers), generated vast tax revenues, and provided the **British Indian Army** to police imperial interests across Asia and Africa.\n\nTwo major political organisations emerged to challenge British monopoly over government:\n- **Indian National Congress (INC, founded 1885):** Initially led by Western-educated lawyers and professionals requesting greater Indian participation in colonial councils, it later evolved into a mass movement demanding complete independence (*Purna Swaraj*).\n- **All-India Muslim League (founded 1906):** Established in Dhaka to safeguard the political, educational, and religious rights of India's Muslim minority—later led decisively by **Muhammad Ali Jinnah**.\n\n### WWI Promises Betrayed & the Rowlatt Acts (1919)\nOver **1.3 million** Indian troops fought for Britain in the First World War (~74,000 died), and Indian taxes helped fund the war effort. Although the 1917 Montagu Declaration promised gradual self-governing institutions, post-war reforms (the 1919 Government of India Act) kept real control over finance, policing, and defence in British hands. Worse still, in **March 1919**, Britain passed the **Rowlatt Acts**, extending wartime emergency powers into peacetime: police could arrest suspected nationalists without warrants, detain them for up to two years without trial, and censor newspapers.\n\n### The Jallianwala Bagh (Amritsar) Massacre (13 April 1919)\nProtests erupted across Punjab. On **13 April 1919**, during the Baisakhi harvest festival, thousands of unarmed men, women, and children gathered peacefully inside **Jallianwala Bagh**, a walled garden in Amritsar with narrow exits—most unaware that **Brigadier-General Reginald Dyer** had banned public gatherings. Dyer marched armed troops into the main entrance, gave **no warning to disperse**, and ordered sustained fire directly into the crowded exits until ammunition ran low (~1,650 rounds). The British Hunter Commission counted **379 dead and ~1,200 wounded**; Indian Congress investigations estimated **over 1,000 killed**.\n\nAlthough Dyer was later forced to resign, the House of Lords defended him and British newspapers raised a huge public fund to reward him. To Indians across every class—including Nobel Prize-winning poet **Rabindranath Tagore**, who renounced his British knighthood—Amritsar proved that the Raj rested on violence rather than justice.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causation flowchart showing how British Raj control, WWI service, the Rowlatt Acts, and the 1919 Amritsar Massacre transformed Indian nationalism">
  <rect width="560" height="250" rx="10" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Why 1919 Shattered British Moral Authority in India</text>
  <rect x="18" y="42" width="118" height="118" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="77" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">1. British Raj</text>
  <text x="77" y="75" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">1858–1918</text>
  <text x="77" y="94" text-anchor="middle" font-size="9.3" fill="var(--ink-2)">Economic extraction</text>
  <text x="77" y="108" text-anchor="middle" font-size="9.3" fill="var(--ink-2)">INC (1885) &amp; Muslim</text>
  <text x="77" y="122" text-anchor="middle" font-size="9.3" fill="var(--ink-2)">League (1906) form</text>
  <text x="77" y="138" text-anchor="middle" font-size="9.3" fill="var(--ink-2)">1.3M serve in WWI</text>
  <rect x="154" y="42" width="118" height="118" rx="8" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="213" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warn)">2. Rowlatt Acts</text>
  <text x="213" y="75" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">March 1919</text>
  <text x="213" y="94" text-anchor="middle" font-size="9.3" fill="var(--ink)">Broken WWI hopes</text>
  <text x="213" y="108" text-anchor="middle" font-size="9.3" fill="var(--ink)">Detention without</text>
  <text x="213" y="122" text-anchor="middle" font-size="9.3" fill="var(--ink)">trial &amp; press curbs</text>
  <text x="213" y="138" text-anchor="middle" font-size="9.3" fill="var(--ink)">Sparks protests</text>
  <rect x="290" y="42" width="118" height="118" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="349" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">3. Amritsar</text>
  <text x="349" y="75" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">13 April 1919</text>
  <text x="349" y="94" text-anchor="middle" font-size="9.3" fill="var(--ink)">Jallianwala Bagh</text>
  <text x="349" y="108" text-anchor="middle" font-size="9.3" fill="var(--ink)">Dyer blocks exit &amp;</text>
  <text x="349" y="122" text-anchor="middle" font-size="9.3" fill="var(--ink)">fires on unarmed</text>
  <text x="349" y="138" text-anchor="middle" font-size="9.3" fill="var(--ink)">379–1,000+ killed</text>
  <rect x="426" y="42" width="116" height="118" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="484" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">4. Turning Point</text>
  <text x="484" y="75" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">1919 Onwards</text>
  <text x="484" y="94" text-anchor="middle" font-size="9.3" fill="var(--ink)">Tagore returns title</text>
  <text x="484" y="108" text-anchor="middle" font-size="9.3" fill="var(--ink)">Elite petitions end</text>
  <text x="484" y="122" text-anchor="middle" font-size="9.3" fill="var(--ink)">Gandhi leads mass</text>
  <text x="484" y="138" text-anchor="middle" font-size="9.3" fill="var(--ink)">civil resistance</text>
  <line x1="136" y1="101" x2="150" y2="101" stroke="var(--ink-2)" stroke-width="2" />
  <polygon points="149,96 155,101 149,106" fill="var(--ink-2)" />
  <line x1="272" y1="101" x2="286" y2="101" stroke="var(--ink-2)" stroke-width="2" />
  <polygon points="285,96 291,101 285,106" fill="var(--ink-2)" />
  <line x1="408" y1="101" x2="422" y2="101" stroke="var(--ink-2)" stroke-width="2" />
  <polygon points="421,96 427,101 421,106" fill="var(--ink-2)" />
  <rect x="30" y="178" width="500" height="52" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="198" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Why Amritsar Changed Everything</text>
  <text x="280" y="216" text-anchor="middle" font-size="9.8" fill="var(--ink-2)">Violence—plus British sympathy for Dyer—destroyed the myth of benevolent British rule.</text>
</svg>`,
      diagramCaption:
        "Broken WWI expectations, the repressive Rowlatt Acts, and the Jallianwala Bagh Massacre turned Indian nationalism into a mass independence movement.",
      whyItWorks:
        "Empires survive cheaply only when subjects cooperate or view imperial law as legitimate. By firing on unarmed citizens at Amritsar and then publicly fundraising for General Dyer, Britain lost its moral legitimacy in the eyes of millions of moderate Indians.",
      keyPoints: [
        "Direct British Crown rule (the Raj, from 1858) relied on Indian raw materials, textile markets, taxation, and the British Indian Army.",
        "The Indian National Congress (1885) and All-India Muslim League (1906) became the two primary nationalist parties.",
        "Over 1.3 million Indians served Britain in WWI, raising hopes of self-rule—betrayed by the repressive March 1919 Rowlatt Acts.",
        "The 13 April 1919 Amritsar (Jallianwala Bagh) Massacre under Brigadier-General Dyer decisively turned Indian opinion from moderate reform toward full independence.",
      ],
      strategies: [
        "In causation answers, always link **WWI contribution** → **Rowlatt Acts** → **Amritsar Massacre** as a three-step chain explaining why 1919 radicalised Indian nationalism.",
        "Contrast official British casualty figures (379) with Indian Congress estimates (1,000+) when discussing historical evidence and bias.",
      ],
      workedExamples: [
        {
          title: "Explaining Why Amritsar (1919) Was a Turning Point",
          problem:
            "Explain two reasons why the Jallianwala Bagh Massacre (13 April 1919) transformed the Indian nationalist movement.",
          steps: [
            "Explain the shift in Indian political aims: before 1919, many moderate Congress leaders—including Gandhi—still hoped to win self-government by cooperating loyally with Britain after WWI.",
            "Show how the violence and British aftermath broke that trust: Dyer ordered fire without warning on unarmed civilians (379–1,000+ killed), yet British elites in the House of Lords and press raised money for him, proving British claims of 'fair play' were hollow.",
            "Identify the result: prominent moderates like Rabindranath Tagore renounced British honours, and millions joined Gandhi's nationwide Non-Cooperation Movement in 1920.",
          ],
          answer:
            "First, the unprovoked shooting of unarmed civilians exposed the violent reality behind British rule. Second, British public sympathy and fundraising for General Dyer convinced moderate nationalists like Gandhi and Tagore that India could never achieve justice through polite cooperation, sparking mass resistance.",
          yourTurn: {
            question:
              "In which year did both the Rowlatt Acts and the Jallianwala Bagh (Amritsar) Massacre take place?",
            answer: { type: "number", value: 1919, display: "1919" },
            solution:
              "The Rowlatt Acts were passed in March 1919 and the Jallianwala Bagh Massacre occurred on 13 April 1919.",
          },
        },
      ],
      thinkDeeper:
        "Why did British public support and fundraising for General Dyer after Amritsar arguably damage British rule in India almost as deeply as the shooting itself?",
    },
    {
      id: "gandhi-satyagraha-salt-march",
      heading: "Gandhi, Satyagraha & the Salt March (1930)",
      discovery: {
        problem:
          "Britain possessed modern rifles, prisons, railways, and censorship across India, whereas Indian protesters had no army. How could **picking up a handful of sea salt** on a beach in April 1930 shake the mightiest empire on Earth?",
        idea:
          "Through **Satyagraha** ('truth-force'—disciplined non-violent civil disobedience), Gandhi chose a universal injustice—the British salt tax—and placed the Raj in an impossible **lose–lose dilemma**: ignore the march and look powerless, or arrest and beat peaceful salt-makers in front of the world's press and lose all moral authority.",
      },
      body: "### Mohandas Gandhi & the Philosophy of Satyagraha\nHaving developed non-violent protest tactics fighting racial discrimination in South Africa, **Mahatma Gandhi** returned to India in **1915** and transformed the Indian National Congress from an English-speaking elite club into a mass movement reaching rural villages, peasants, and women.\n\nThree connected ideas powered Gandhi's campaigns:\n- **Satyagraha ('truth-force'):** Active, disciplined **non-violent civil disobedience**—refusing to obey unjust laws openly while accepting arrest without fighting back, exposing the oppressor's brutality to public conscience.\n- **Ahimsa (non-violence):** Strict rejection of physical hatred or retaliation. When protesters burned a police station at **Chauri Chaura** in February 1922 (killing 22 policemen), Gandhi shocked supporters by immediately calling off the **Non-Cooperation Movement (1920–22)** rather than allow violence to corrupt the cause.\n- **Swadeshi & Khadi (economic self-reliance):** Boycotting British courts, schools, titles, and factory-made Lancashire textiles while spinning hand-woven Indian cotton (**khadi**) on the **charkha** spinning wheel—hitting Britain's economy directly while uniting Indians across caste and class.\n\n### The 1930 Dandi Salt March (12 March – 6 April 1930)\nAfter Congress declared **Purna Swaraj** (Complete Independence) under Jawaharlal Nehru in December 1929, Gandhi targeted the **British Salt Laws**. Under Raj law, it was illegal for Indians to collect or sell their own natural salt—forcing even the poorest villagers in India's hot climate to pay British salt taxes.\n\nOn **12 March 1930**, Gandhi set off from **Sabarmati Ashram** (Ahmedabad) with 78 trained followers on a **240-mile (~385 km), 24-day march** to the sea at **Dandi**. Every day, international journalists cabled dispatches as crowds swelled into the tens of thousands. On **6 April 1930**, Gandhi lifted natural salt from the coastal mud, declaring he was shaking the foundations of the British Empire.\n\n### Global Impact & the British Dilemma\nMillions across India began boiling seawater, boycotting British cloth, and refusing taxes—including tens of thousands of women led by figures like **Sarojini Naidu** and **Kamaladevi Chattopadhyay**. British authorities arrested over **60,000** protesters (including Gandhi). In May 1930, when unarmed volunteers marched peacefully toward the **Dharasana Salt Works**, police struck them repeatedly with steel-tipped lathis while protesters refused even to raise an arm in self-defence. American reporter **Webb Miller** wired eyewitness accounts to 1,350 newspapers worldwide—causing global outrage and forcing Viceroy Lord Irwin to negotiate with Gandhi as an equal in the **1931 Gandhi–Irwin Pact**.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram illustrating how Gandhi's 1930 Salt March created a lose-lose strategic dilemma for the British Raj">
  <rect width="560" height="250" rx="10" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">How the 1930 Salt March Trapped the British Raj</text>
  <rect x="20" y="42" width="196" height="148" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="118" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Gandhi's Strategy</text>
  <text x="118" y="80" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--ink)">240 miles · 24 days (1930)</text>
  <text x="118" y="96" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Sabarmati Ashram → Dandi</text>
  <text x="34" y="118" font-size="9.4" fill="var(--ink)">• Salt affects every Indian</text>
  <text x="34" y="134" font-size="9.4" fill="var(--ink)">• Simple, peaceful defiance</text>
  <text x="34" y="150" font-size="9.4" fill="var(--ink)">• Unites villages &amp; women</text>
  <text x="34" y="166" font-size="9.4" fill="var(--ink)">• Press covers every mile</text>
  <line x1="216" y1="86" x2="262" y2="72" stroke="var(--ink-2)" stroke-width="2" />
  <polygon points="260,67 268,70 262,76" fill="var(--ink-2)" />
  <line x1="216" y1="146" x2="262" y2="160" stroke="var(--ink-2)" stroke-width="2" />
  <polygon points="262,155 268,162 260,164" fill="var(--ink-2)" />
  <rect x="270" y="42" width="270" height="66" rx="8" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="405" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warn)">British Option A: Do Nothing</text>
  <text x="405" y="77" text-anchor="middle" font-size="9.5" fill="var(--ink)">Indians openly break colonial tax laws;</text>
  <text x="405" y="92" text-anchor="middle" font-size="9.5" fill="var(--ink)">British authority looks weak &amp; collapses.</text>
  <rect x="270" y="124" width="270" height="66" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="405" y="142" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">British Option B: Arrest &amp; Beat Protesters</text>
  <text x="405" y="159" text-anchor="middle" font-size="9.5" fill="var(--ink)">60,000+ jailed &amp; Dharasana beatings filmed;</text>
  <text x="405" y="174" text-anchor="middle" font-size="9.5" fill="var(--ink)">global outrage destroys moral legitimacy.</text>
  <rect x="34" y="204" width="492" height="34" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="280" y="225" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--good)">Result: Moral Leverage + Economic Boycott (Khadi) Force Britain to Negotiate</text>
</svg>`,
      diagramCaption:
        "Disciplined non-violence turned Britain's superior firepower into a political liability whenever police attacked unarmed citizens.",
      whyItWorks:
        "Non-violent civil disobedience is NOT passive weakness—it is strategic political jujitsu. Because British officials claimed they were 'civilising' India, beating peaceful salt-makers in front of international reporters shattered that justification while khadi boycotts hurt British textile profits.",
      keyPoints: [
        "Satyagraha ('truth-force') meant actively disobeying unjust laws peacefully while refusing violence even under police attack.",
        "Boycotting British cloth and wearing hand-spun khadi united rich and poor Indians while hurting Lancashire textile exports.",
        "The 240-mile, 24-day Dandi Salt March (March–April 1930) targeted a universal tax affecting every Indian household.",
        "Over 60,000 Indians—including thousands of women—were jailed; worldwide reporting of police beatings at Dharasana exposed British hypocrisy.",
      ],
      strategies: [
        "When explaining *why* Satyagraha worked, cite **three levers together**: (1) mass unity across class/gender, (2) economic pressure via khadi/boycotts, and (3) moral/media leverage exposing colonial brutality.",
        "Mention **Chauri Chaura (1922)** to prove Gandhi's commitment to non-violence was disciplined and principled, not accidental.",
      ],
      workedExamples: [
        {
          title: "Why Did Gandhi Choose Salt in 1930?",
          problem:
            "Explain two reasons why choosing the British salt tax was a brilliant political strategy for launching the 1930 Civil Disobedience Campaign.",
          steps: [
            "Explain universal everyday relevance: salt was vital for survival in India's hot climate, so taxing it affected every villager, urban worker, Hindu, Muslim, man, and woman equally—far more relatable than abstract constitutional speeches.",
            "Explain moral clarity and symbolism: collecting free salt from India's own sea exposed the absurdity and greed of British monopoly laws to both Indians and international journalists.",
            "Link to outcome: the 24-day march built unstoppable nationwide momentum and triggered over 60,000 arrests.",
          ],
          answer:
            "First, salt was an everyday necessity in India's climate, uniting poor villagers and city dwellers across religious and social lines. Second, outlawing Indians from gathering natural sea salt visibly exposed colonial injustice to the world's press.",
          yourTurn: {
            question:
              "Approximately how many miles did Gandhi walk from Sabarmati Ashram to Dandi during the 1930 Salt March?",
            answer: { type: "number", value: 240, display: "240 miles" },
            solution:
              "Gandhi walked roughly 240 miles (~385 km) over 24 days from 12 March to 6 April 1930.",
          },
        },
      ],
      thinkDeeper:
        "Why did Gandhi's refusal to allow protesters to strike back at Dharasana in May 1930 make British police force *less* effective rather than more effective?",
    },
    {
      id: "quit-india-ww2",
      heading: "Quit India (1942), WWII & Multiple Pressures",
      discovery: {
        problem:
          "Gandhi's Salt March took place in **1930**, yet Britain did not leave India for another **17 years** (1947). Why did British rule finally collapse in the mid-1940s rather than in 1930?",
        idea:
          "Non-violent protest steadily eroded British authority, but the **Second World War (1939–1945)** delivered the decisive structural blow: Britain emerged financially bankrupt, elected **Clement Attlee's pro-decolonisation Labour government (1945)**, faced the massive **1942 Quit India** upheaval, and realised after the **INA trials** and **1946 Royal Indian Navy Mutiny** that it could no longer trust Indian forces to police the Raj.",
      },
      body: "By the 1940s, Indian independence was no longer driven by one leader or one tactic—multiple political, economic, and military pressures converged.\n\n### 1. WWII Outbreak & the Quit India Movement (August 1942)\nIn September 1939, Viceroy Lord Linlithgow declared India at war against Germany **without consulting** Indian elected representatives. Congress ministries resigned in protest, though over **2.5 million** Indian volunteers still fought heroically for the Allies across North Africa, Italy, and Burma. After the **Cripps Mission (March 1942)** failed to promise immediate wartime power-sharing, Gandhi and Congress launched the **Quit India Movement** on **8 August 1942** with the call *'Do or Die'*. British authorities immediately imprisoned Gandhi, **Jawaharlal Nehru**, and Congress leaders until 1944–45—sparking widespread strikes, railway sabotage, and mass arrests (~100,000 jailed). Crucially, with Congress leaders in prison, **Muhammad Ali Jinnah's Muslim League**—which supported the war effort—gained huge political ground and pushed its 1940 **Lahore Resolution** demanding a separate homeland, **Pakistan**.\n\n### 2. Rival Visions & Leaders Beyond Gandhi\nTop-band Year 9 historians look beyond a 'Gandhi alone' story:\n| Leader | Role & Strategy | Historical Impact |\n|---|---|---|\n| **Jawaharlal Nehru** | Secular socialist INC leader & close Gandhi ally | Championed *Purna Swaraj* (1929), led Congress negotiations, became India's first Prime Minister |\n| **Muhammad Ali Jinnah** | Leader of the All-India Muslim League | Argued Muslims risked permanent minority status in a Hindu-majority India; championed **Pakistan** (1940 Lahore Resolution) |\n| **Subhas Chandra Bose** | Radical nationalist who rejected non-violence | Formed the **Indian National Army (INA)** with Japanese backing; though defeated militarily in 1944, the 1945–46 **Red Fort INA trials** sparked huge cross-community protest |\n\n### 3. British WWII Exhaustion, Attlee (1945) & Military Unrest (1946)\nEven more decisively, WWII broke Britain's ability and willingness to hold India by force:\n- **Economic exhaustion:** Britain was near bankruptcy in 1945 and owed India roughly **£1.3 billion** in war debts ('sterling balances'); maintaining a vast garrison was unaffordable.\n- **Political change in Britain:** In July 1945, British voters replaced imperial traditionalist Winston Churchill with **Clement Attlee's Labour government**, which prioritised rebuilding Britain (including the NHS) and ending costly empire.\n- **Loss of military loyalty:** In **February 1946**, over 20,000 Indian sailors launched the **Royal Indian Navy (RIN) Mutiny** across Bombay and Karachi, supported by strikes ashore. Combined with protests over the **INA trials**, British generals warned London that the Indian armed forces could no longer be relied upon to suppress a nationwide revolt.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing four converging pressures between 1942 and 1946 that ended British rule in India">
  <rect width="560" height="250" rx="10" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Multiple Pressures Ending the British Raj (1942–1946)</text>
  <rect x="18" y="42" width="122" height="120" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="79" y="61" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--brand)">1. Mass Protest</text>
  <text x="79" y="79" text-anchor="middle" font-size="9.3" fill="var(--ink)">Gandhi &amp; Nehru</text>
  <text x="79" y="95" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Quit India (1942)</text>
  <text x="79" y="109" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">~100,000 jailed;</text>
  <text x="79" y="123" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Raj loses consent</text>
  <text x="79" y="137" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">of ordinary Indians</text>
  <rect x="152" y="42" width="122" height="120" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="213" y="61" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--good)">2. WWII &amp; Attlee</text>
  <text x="213" y="79" text-anchor="middle" font-size="9.3" fill="var(--ink)">Britain Bankrupt</text>
  <text x="213" y="95" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">£1.3bn war debt</text>
  <text x="213" y="109" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">owed to India;</text>
  <text x="213" y="123" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">1945 Labour govt</text>
  <text x="213" y="137" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">backs withdrawal</text>
  <rect x="286" y="42" width="122" height="120" rx="8" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="347" y="61" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--warn)">3. Military Unrest</text>
  <text x="347" y="79" text-anchor="middle" font-size="9.3" fill="var(--ink)">Bose &amp; Sailors</text>
  <text x="347" y="95" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">INA Red Fort</text>
  <text x="347" y="109" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">trials (1945–46)</text>
  <text x="347" y="123" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Feb 1946 RIN</text>
  <text x="347" y="137" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Navy Mutiny</text>
  <rect x="420" y="42" width="122" height="120" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="481" y="61" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--bad)">4. Political Split</text>
  <text x="481" y="79" text-anchor="middle" font-size="9.3" fill="var(--ink)">Jinnah &amp; League</text>
  <text x="481" y="95" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">1940 Lahore demand</text>
  <text x="481" y="109" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Gains strength while</text>
  <text x="481" y="123" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Congress jailed;</text>
  <text x="481" y="137" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">fear of civil war</text>
  <line x1="79" y1="162" x2="210" y2="190" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="213" y1="162" x2="255" y2="190" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="347" y1="162" x2="305" y2="190" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="481" y1="162" x2="350" y2="190" stroke="var(--ink-2)" stroke-width="1.5" />
  <rect x="64" y="188" width="432" height="46" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="280" y="207" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">1946–47 Verdict: Britain Cannot Afford or Enforce the Raj</text>
  <text x="280" y="224" text-anchor="middle" font-size="9.6" fill="var(--ink-2)">Decolonisation resulted from Indian resistance colliding with post-war British weakness.</text>
</svg>`,
      diagramCaption:
        "By 1946, British leaders faced mass Indian resistance, wartime debt, Labour priorities at home, and unrest inside Indian military units.",
      whyItWorks:
        "Historical outcomes rarely have a single cause. Linking long-term Indian nationalist mobilisation (1919–42) with short-term WWII shocks (1945 bankruptcy, Attlee's election, and 1946 military mutiny) explains *both* why Indians demanded freedom and *why* Britain finally conceded in 1947.",
      keyPoints: [
        "The August 1942 Quit India Movement demonstrated Britain had lost Indian consent, though jailing Congress leaders let the Muslim League expand its support.",
        "Subhas Chandra Bose's Indian National Army (INA) failed militarily, yet the 1945–46 INA trials and February 1946 RIN Mutiny showed Britain could no longer trust Indian troops.",
        "WWII left Britain financially exhausted (owing India ~£1.3 billion) and brought Clement Attlee's pro-decolonisation Labour government to power in July 1945.",
        "Nehru, Jinnah, and Bose all shaped the road to 1947 alongside Mahatma Gandhi.",
      ],
      strategies: [
        "Avoid the 'Great Man' trap: always weigh **Gandhi's protests** alongside **WWII exhaustion**, **Attlee's Labour government**, and **Nehru, Jinnah & Bose**.",
        "Explain the **unintended political consequence** of Quit India (1942): while Congress leaders sat in prison until 1945, Jinnah's Muslim League organised freely and strengthened its call for Pakistan.",
      ],
      workedExamples: [
        {
          title: "Explaining Why Britain Left After WWII",
          problem:
            "Explain two ways the Second World War accelerated the end of British rule in India.",
          steps: [
            "Economic and political impact on Britain: WWII drained Britain's treasury (leaving it owing India ~£1.3 billion in sterling balances) and led voters in July 1945 to elect Clement Attlee's Labour government, which prioritised domestic welfare over defending empire.",
            "Loss of military reliability in India: mass protests during the 1945–46 Red Fort trials of Subhas Chandra Bose's INA officers, followed by the February 1946 Royal Indian Navy Mutiny, convinced British commanders they could no longer rely on Indian armed forces to crush rebellion.",
          ],
          answer:
            "First, WWII bankrupted Britain and brought Attlee's Labour government to power in 1945, removing both the funds and political will to hold India. Second, the 1945–46 INA trials and 1946 Royal Indian Navy Mutiny showed Britain could no longer rely on Indian troops to enforce colonial rule.",
          yourTurn: {
            question:
              "In which year did Gandhi and the Indian National Congress launch the 'Quit India' Movement?",
            answer: { type: "number", value: 1942, display: "1942" },
            solution:
              "The Quit India Movement was launched on 8 August 1942 following the failure of the Cripps Mission.",
          },
        },
      ],
      thinkDeeper:
        "Why did British Prime Minister Clement Attlee later comment that Gandhi's impact on Britain's 1947 decision was 'minimal' compared with WWII and military unrest—and why do many historians challenge Attlee's remark as incomplete?",
    },
    {
      id: "independence-partition-1947",
      heading: "1947 Independence, Partition & Assessing Success",
      discovery: {
        problem:
          "Gandhi had spent thirty years campaigning for a **united, peaceful, independent India**. Yet when freedom arrived on **14–15 August 1947**, the subcontinent was sliced into two rival nations amid horrific violence that killed around a million people—and Gandhi spent Independence Day fasting in Calcutta. Why did triumph end in Partition?",
        idea:
          "Deepening political distrust between the **Indian National Congress** and **Jinnah's Muslim League**, the collapse of the 1946 Cabinet Mission Plan, catastrophic communal riots after **Direct Action Day (August 1946)**, and **Lord Mountbatten's** rushed withdrawal (giving Sir Cyril Radcliffe just five weeks to draw borders) turned decolonisation into a humanitarian catastrophe.",
      },
      body: "### Communal Deadlock & Direct Action Day (1946)\nAfter 1945, the urgent question was no longer *whether* Britain would leave, but *what* would replace the Raj. Congress leaders (**Nehru** and **Gandhi**) envisioned a single, secular, united India with a strong central government. **Muhammad Ali Jinnah** and the **Muslim League**, fearing Muslims (roughly a quarter of the population) would be permanently outvoted in a Hindu-majority democracy, insisted on strong provincial autonomy or an independent **Pakistan**.\n\nWhen the British **Cabinet Mission Plan (1946)**—a last compromise for a loose united federation—collapsed, Jinnah called **Direct Action Day** on **16 August 1946** to demonstrate Muslim League resolve. Terrible communal riots erupted in Calcutta (killing over 4,000 in days) and spread to Bengal, Bihar, and Punjab, convincing many politicians that a united India risked full-scale civil war.\n\n### The Mountbatten Plan & the Radcliffe Line (August 1947)\nArriving in March 1947 as the last Viceroy, **Lord Louis Mountbatten** feared British troops would be trapped in a bloody sectarian war. In June 1947 he announced the **Mountbatten Plan**, bringing British withdrawal forward by **ten months**—from June 1948 to **August 1947**—and partitioning British India into two sovereign dominions: **Pakistan** (West and East Pakistan, independent **14 August 1947**, led by Jinnah) and **India** (independent **15 August 1947**, with **Jawaharlal Nehru** as Prime Minister).\n\nBritish barrister **Sir Cyril Radcliffe**—who had **never visited India**—was given barely **five weeks** and outdated maps to draw the **Radcliffe Line** slicing through the mixed provinces of **Punjab** and **Bengal**. Worse still, Mountbatten delayed announcing the exact border until **17 August 1947**—two days *after* independence—so Britain would not be blamed during the handover celebrations. Overnight, millions discovered they were stranded on the 'wrong' side of a new international frontier.\n\n### Human Cost & Assessing How Far Non-Violence Succeeded\nPartition triggered the largest mass migration in modern history: **10 to 15 million** Hindus, Muslims, and Sikhs fled across the new borders amid horrific communal massacres, leaving an estimated **500,000 to over 1 million dead**. Devastated, Gandhi refused to celebrate in Delhi, instead fasting to calm riots in Calcutta before being assassinated by a Hindu extremist (Nathuram Godse) in January 1948.\n\n### Evaluating the Big Enquiry Question: How Far Did Non-Violent Protest Alone Achieve Independence?\nA top Year 9 judgement weighs **both sides**:\n- **Where Satyagraha succeeded:** Gandhi's campaigns (1920–22, 1930 Salt March, 1942 Quit India) politicised ordinary villagers and women, hit British textile trade via *khadi* boycotts, and destroyed Britain's moral claim to rule—ensuring India was ungovernable without Indian consent.\n- **Its clear limits:** Non-violent protest alone did **not** force immediate British departure in 1930 or 1942. WWII bankruptcy, Attlee's 1945 Labour government, US anti-colonial pressure, and the 1946 military unrest (INA trials & RIN mutiny) determined the *timing* of 1947—and Satyagraha could not bridge the Congress–Muslim League divide or stop Partition violence.",
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of 1946 to 1947 Partition events and balanced historical verdict on non-violent protest">
  <rect width="560" height="250" rx="10" fill="var(--surface)" />
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The Road to Independence &amp; Partition (1946–1947)</text>
  <rect x="18" y="40" width="122" height="106" rx="8" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="79" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="var(--warn)">Aug 1946</text>
  <text x="79" y="74" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Direct Action Day</text>
  <text x="79" y="92" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Cabinet Mission fails;</text>
  <text x="79" y="106" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Calcutta killings &amp;</text>
  <text x="79" y="120" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">spreading riots</text>
  <rect x="152" y="40" width="122" height="106" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="213" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">June 1947</text>
  <text x="213" y="74" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Mountbatten Plan</text>
  <text x="213" y="92" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Exit brought forward</text>
  <text x="213" y="106" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">by 10 months; two</text>
  <text x="213" y="120" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">nations agreed</text>
  <rect x="286" y="40" width="122" height="106" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" />
  <text x="347" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">Jul–Aug 1947</text>
  <text x="347" y="74" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Radcliffe Line</text>
  <text x="347" y="92" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Drawn in ~5 weeks</text>
  <text x="347" y="106" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">dividing Punjab &amp;</text>
  <text x="347" y="120" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Bengal; kept secret</text>
  <rect x="420" y="40" width="122" height="106" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="481" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">14–15 Aug 1947</text>
  <text x="481" y="74" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Two New States</text>
  <text x="481" y="92" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">Pakistan &amp; India;</text>
  <text x="481" y="106" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">10–15M displaced,</text>
  <text x="481" y="120" text-anchor="middle" font-size="9.2" fill="var(--ink-2)">~1 million killed</text>
  <line x1="140" y1="93" x2="149" y2="93" stroke="var(--ink-2)" stroke-width="1.8" />
  <line x1="274" y1="93" x2="283" y2="93" stroke="var(--ink-2)" stroke-width="1.8" />
  <line x1="408" y1="93" x2="417" y2="93" stroke="var(--ink-2)" stroke-width="1.8" />
  <rect x="24" y="164" width="512" height="68" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="183" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Historian's Balance: How Far Did Satyagraha Succeed?</text>
  <text x="280" y="201" text-anchor="middle" font-size="9.6" fill="var(--good)">✓ Essential: delegitimised British rule, united masses &amp; inspired global rights movements</text>
  <text x="280" y="218" text-anchor="middle" font-size="9.6" fill="var(--bad)">✗ Not alone: WWII exhaustion, Attlee &amp; military unrest drove 1947 timing; Partition tragedy</text>
</svg>`,
      diagramCaption:
        "Independence in August 1947 fulfilled anti-colonial freedom yet came with hurried borders and devastating Partition violence.",
      whyItWorks:
        "Weighing multiple factors against one another—rather than awarding 100% credit to a single person or cause—is the hallmark of top-band Year 9 historical evaluation.",
      keyPoints: [
        "Disagreements between Congress (united secular India) and the Muslim League (Pakistan) hardened after the 1946 Cabinet Mission failed and Direct Action Day sparked mass riots.",
        "Lord Mountbatten accelerated British withdrawal by 10 months to August 1947; Sir Cyril Radcliffe drew borders dividing Punjab and Bengal in just five weeks.",
        "Pakistan (14 August 1947) and India (15 August 1947) became independent, but Partition displaced 10–15 million people and killed roughly 500,000 to over 1 million.",
        "Non-violent protest was vital in undermining British legitimacy and uniting ordinary Indians, but WWII exhaustion, Attlee's Labour government, and military unrest were equally crucial to the 1947 exit.",
      ],
      strategies: [
        "Structure 'How far…?' essays with **three paragraphs**: (1) How far Satyagraha succeeded, (2) Other decisive pressures (WWII, Attlee, Bose/RIN Mutiny, communal crisis), and (3) a clear weighed judgement linking them.",
        "Be precise on Partition: name **Lord Mountbatten**, **Sir Cyril Radcliffe**, **Punjab and Bengal**, and **14–15 August 1947**.",
      ],
      workedExamples: [
        {
          title: "Explaining Why Partition Turned So Violent in 1947",
          problem:
            "Explain two reasons why the Partition of British India in August 1947 resulted in such severe violence and mass displacement.",
          steps: [
            "Point 1 — Hurried British timetable and borders: Lord Mountbatten brought departure forward by 10 months to August 1947, giving Sir Cyril Radcliffe (who had never visited India) barely five weeks to slice through religiously mixed Punjab and Bengal, and announcing the border two days *after* independence.",
            "Point 2 — Pre-existing communal tension and lack of security: severe riots since August 1946 (Direct Action Day) had destroyed trust between communities, while colonial police and troops were dividing into two new armies, leaving 10–15 million refugees unprotected as they crossed borders.",
          ],
          answer:
            "First, Mountbatten's rushed 10-month acceleration left Sir Cyril Radcliffe just five weeks to draw borders across mixed Punjab and Bengal—published two days after independence—creating instant panic. Second, mounting communal distrust since 1946 collided with an overstretched, dividing security force unable to protect 10–15 million fleeing refugees.",
          yourTurn: {
            question:
              "In which year did British India gain independence and undergo Partition into India and Pakistan?",
            answer: { type: "number", value: 1947, display: "1947" },
            solution:
              "Pakistan became independent on 14 August 1947 and India on 15 August 1947.",
          },
        },
      ],
      thinkDeeper:
        "Could an earlier or slower British withdrawal—sticking to the original June 1948 deadline—have prevented Partition violence, or had political trust between Congress and the Muslim League already broken beyond repair by August 1946?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "When did direct British Crown rule (the British Raj) begin in India, and why was India called the 'Jewel in the Crown'?",
        back: "Direct Crown rule began in 1858 after the 1857 Rebellion. India supplied raw materials, a huge market for British cloth, tax revenue, and the British Indian Army.",
      },
      {
        front: "When were the Indian National Congress (INC) and the All-India Muslim League founded?",
        back: "The INC was founded in 1885; the All-India Muslim League was founded in 1906 to represent Muslim political interests.",
      },
      {
        front: "What were the Rowlatt Acts (March 1919)?",
        back: "Repressive colonial laws extending WWI emergency powers into peacetime, allowing imprisonment without trial and press censorship—sparking outrage across India.",
      },
      {
        front: "What happened at Jallianwala Bagh in Amritsar on 13 April 1919?",
        back: "Brigadier-General Reginald Dyer blocked the exit of a walled garden and ordered troops to fire without warning on peaceful civilians, killing 379 (official) to over 1,000 (Congress estimate).",
      },
      {
        front: "What does Gandhi's principle of *Satyagraha* mean?",
        back: "'Truth-force'—disciplined, active non-violent civil disobedience refusing to obey unjust laws while accepting arrest without retaliating.",
      },
      {
        front: "Why did Gandhi encourage Indians to spin and wear *khadi* (hand-woven cloth)?",
        back: "Boycotting imported British textiles hurt Lancashire mills economically while uniting Indians across caste and class in economic self-reliance (*Swadeshi*).",
      },
      {
        front: "Why did Gandhi halt the Non-Cooperation Movement in February 1922?",
        back: "After angry protesters burned a police station at Chauri Chaura, killing 22 policemen—showing Gandhi insisted strictly on non-violence (*Ahimsa*).",
      },
      {
        front: "What was the 1930 Dandi Salt March?",
        back: "Gandhi's 240-mile, 24-day walk (12 March – 6 April 1930) from Sabarmati Ashram to Dandi to pick up natural sea salt in defiance of the British salt monopoly.",
      },
      {
        front: "Why was the May 1930 Dharasana Salt Works protest reported globally?",
        back: "American journalist Webb Miller witnessed police beating peaceful, unresisting marchers with steel-tipped lathis, sparking worldwide condemnation of British brutality.",
      },
      {
        front: "What was the Quit India Movement (August 1942), and what unexpected political consequence did it have?",
        back: "Launched by Gandhi ('Do or Die') demanding immediate British exit during WWII; Britain jailed Congress leaders until 1945, leaving Jinnah's Muslim League free to expand its influence.",
      },
      {
        front: "Who was Subhas Chandra Bose, and why did the 1945–46 INA trials alarm Britain?",
        back: "A radical nationalist who formed the Indian National Army (INA) with Japan; though defeated in battle, public solidarity across religions during the Red Fort INA trials showed Britain was losing army loyalty.",
      },
      {
        front: "How did WWII and Clement Attlee's 1945 Labour election victory affect India?",
        back: "WWII bankrupted Britain (leaving ~£1.3bn owed to India), and Attlee's Labour government prioritised domestic rebuilding (NHS) and decolonisation over defending empire.",
      },
      {
        front: "What was the February 1946 Royal Indian Navy (RIN) Mutiny?",
        back: "A strike and mutiny by over 20,000 Indian sailors in Bombay and Karachi, proving to British commanders that Indian armed forces could no longer be relied upon to suppress rebellion.",
      },
      {
        front: "What happened on Direct Action Day (16 August 1946)?",
        back: "Called by Jinnah after the Cabinet Mission Plan failed; led to catastrophic communal riots in Calcutta (~4,000+ killed) and spread across Bengal, Bihar, and Punjab.",
      },
      {
        front: "What was the Radcliffe Line (August 1947)?",
        back: "The rushed partition boundary drawn in roughly five weeks by British lawyer Sir Cyril Radcliffe—who had never visited India—dividing Punjab and Bengal between India and Pakistan.",
      },
      {
        front: "What was the human cost of the August 1947 Partition?",
        back: "Between 10 and 15 million people were displaced in history's largest mass migration, and an estimated 500,000 to over 1 million people were killed in communal violence.",
      },
    ],
    mustKnow: [
      "Explain why India was economically and militarily vital to the British Empire under the Raj (from 1858).",
      "Trace how Indian WWI service (1.3 million troops), the Rowlatt Acts, and the 1919 Amritsar Massacre turned Indian nationalism into a mass independence movement.",
      "Define *Satyagraha*, *Ahimsa*, and *Swadeshi* (*khadi* boycott) and explain how Gandhi's methods placed Britain in a strategic lose–lose dilemma.",
      "Describe the 240-mile Dandi Salt March (1930) and explain why targeting salt united ordinary Indians and won global sympathy.",
      "Explain the aims and roles of Jawaharlal Nehru, Muhammad Ali Jinnah, and Subhas Chandra Bose alongside Gandhi.",
      "Explain how WWII economic exhaustion, Attlee's 1945 Labour government, Quit India (1942), the INA trials, and the 1946 RIN Mutiny accelerated Britain's departure.",
      "Trace the steps from the failed 1946 Cabinet Mission and Direct Action Day to the Mountbatten Plan and rushed Radcliffe Line (August 1947).",
      "Give a balanced, multi-causal judgement evaluating how far non-violent protest alone achieved independence in 1947.",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'Gandhi single-handedly won Indian independence through peaceful marches alone.'",
        right: "Write instead: 'Gandhi's Satyagraha was vital in delegitimising British rule and mobilising millions, but WWII bankruptcy, Attlee's 1945 Labour government, military unrest (INA/RIN), and other Indian leaders were also crucial to Britain's 1947 exit.'",
      },
      {
        wrong: "Never write: 'The 1930 Salt March immediately forced Britain to grant Indian independence.'",
        right: "Write instead: 'The Salt March won worldwide moral sympathy and forced the 1931 Gandhi–Irwin talks, yet British rule continued for another 17 years until August 1947.'",
      },
      {
        wrong: "Never write: 'Satyagraha meant passively doing nothing and hoping Britain would leave.'",
        right: "Write instead: 'Satyagraha meant active, disciplined civil disobedience—openly breaking unjust laws, boycotting British cloth, and exposing colonial brutality to public opinion.'",
      },
      {
        wrong: "Never write: 'The Muslim League demanded Partition from the day it was founded in 1906.'",
        right: "Write instead: 'Founded in 1906 to protect Muslim political rights, the Muslim League only formally called for separate Muslim-majority states (Pakistan) in the 1940 Lahore Resolution.'",
      },
      {
        wrong: "Never write: 'The 1947 Partition borders were carefully planned over several years before Britain left.'",
        right: "Write instead: 'Mountbatten brought departure forward by 10 months, leaving Sir Cyril Radcliffe—who had never visited India—just five weeks to draw borders announced two days after independence.'",
      },
      {
        wrong: "Never write: 'Only men participated in Gandhi's Civil Disobedience Movement.'",
        right: "Write instead: 'Tens of thousands of Indian women—including leaders such as Sarojini Naidu and Kamaladevi Chattopadhyay—marched, made illegal salt, and picketed foreign cloth shops.'",
      },
    ],
    examMistakes: [
      "Confusing the dates of the three major Gandhi campaigns: Non-Cooperation (1920–22), Civil Disobedience / Salt March (1930), and Quit India (1942).",
      "Describing *what* happened on the Salt March without explaining *why* salt was chosen and *how* it created a British dilemma.",
      "Writing a one-sided 'Gandhi alone' essay that omits WWII debt, Attlee's 1945 Labour government, Bose's INA, and the 1946 Royal Indian Navy Mutiny.",
      "Forgetting that Pakistan became independent on 14 August 1947 and India on 15 August 1947—and that Partition divided Punjab and Bengal specifically.",
      "Ignoring the difference between British official death tolls at Amritsar (379) and Indian Congress estimates (1,000+) when discussing evidence.",
      "Overlooking why jailing Congress leaders after Quit India (1942) accidentally strengthened Jinnah's Muslim League before 1945–47 talks.",
      "Failing to evaluate Partition when judging the overall 'success' of the independence movement.",
    ],
    mnemonics: [
      {
        topic: "Gandhi's Three Major Mass Campaigns",
        device: "N-S-Q (1920 · 1930 · 1942)",
        explanation:
          "Non-Cooperation (1920–22, khadi & boycott) → Salt Satyagraha (1930, 240-mile Dandi march) → Quit India (1942, 'Do or Die').",
      },
      {
        topic: "Four Pressures Behind 1947 Independence",
        device: "S-W-A-M",
        explanation:
          "Satyagraha & mass boycott + WWII bankruptcy + Attlee's 1945 Labour government + Military unrest (INA trials & 1946 RIN Mutiny).",
      },
      {
        topic: "Partition Turning Points (1946–1947)",
        device: "C-D-M-R",
        explanation:
          "Cabinet Mission fails (1946) → Direct Action Day riots (Aug 1946) → Mountbatten Plan speeds exit (June 1947) → Radcliffe Line divides Punjab & Bengal (Aug 1947).",
      },
    ],
    realWorld: [
      {
        title: "Inspiration for the US Civil Rights Movement",
        detail:
          "Martin Luther King Jr. visited India in 1959 and explicitly modelled Montgomery, Greensboro sit-ins, and Selma marches on Gandhi's *Satyagraha* philosophy.",
        emoji: "✊",
      },
      {
        title: "Global Decolonisation After 1947",
        detail:
          "India's 1947 independence triggered a wave of decolonisation across Asia and Africa, inspiring Kwame Nkrumah in Ghana (1957) and anti-apartheid leaders in South Africa.",
        emoji: "🌍",
      },
      {
        title: "Enduring Geopolitics of South Asia",
        detail:
          "The hurried 1947 Partition borders shaped modern India, Pakistan, and later Bangladesh (1971), as well as the long-running dispute over Jammu and Kashmir.",
        emoji: "🗺️",
      },
      {
        title: "The Spinning Wheel (*Charkha*) & India's National Flag",
        detail:
          "Gandhi's emphasis on handmade *khadi* and self-reliance remains woven into Indian civic identity—reflected in the Ashoka Chakra wheel at the centre of India's flag.",
        emoji: "🇮🇳",
      },
      {
        title: "International Day of Non-Violence (2 October)",
        detail:
          "The United Nations marks Mahatma Gandhi's birthday each year as the International Day of Non-Violence to promote peaceful civic change.",
        emoji: "🕊️",
      },
    ],
    videos: [
      {
        title: "Indian Independence & Partition Explained",
        channel: "BBC Teach / History Matters",
        url: "https://www.youtube.com/results?search_query=Indian+Independence+and+Partition+1947+explained+GCSE+KS3",
      },
      {
        title: "Gandhi, Satyagraha and the 1930 Salt March",
        channel: "TED-Ed / BBC History",
        url: "https://www.youtube.com/results?search_query=Gandhi+Salt+March+1930+Satyagraha+history",
      },
      {
        title: "The Amritsar Massacre (1919) — Turning Point in the Raj",
        channel: "Imperial War Museums / BBC",
        url: "https://www.youtube.com/results?search_query=Amritsar+Massacre+Jallianwala+Bagh+1919+history",
      },
      {
        title: "Decolonisation and Nationalism Triumphant",
        channel: "CrashCourse World History",
        url: "https://www.youtube.com/results?search_query=Crash+Course+Decolonization+India+Gandhi+Partition",
      },
    ],
    formulas: [
      {
        name: "British Raj (1858–1947)",
        formula: "Direct rule of India by the British Crown after the 1857 Rebellion",
        note: "Relied on economic extraction, captive textile markets, taxation, and the British Indian Army.",
      },
      {
        name: "Rowlatt Acts (March 1919)",
        formula: "Colonial laws permitting detention without trial & censorship in peacetime",
        note: "Betrayed post-WWI Indian expectations of self-government and sparked protests across Punjab.",
      },
      {
        name: "Amritsar Massacre (13 April 1919)",
        formula: "Troops under General Dyer fired without warning on unarmed civilians at Jallianwala Bagh",
        note: "379 (British figure) to 1,000+ (Congress figure) killed; destroyed British moral authority.",
      },
      {
        name: "Satyagraha",
        formula: "'Truth-force' — disciplined non-violent civil disobedience against unjust laws",
        note: "Paired with *Ahimsa* (non-violence) to expose colonial brutality and win moral sympathy.",
      },
      {
        name: "Khadi & Swadeshi",
        formula: "Hand-spun Indian cotton & boycott of imported British factory cloth",
        note: "Hit British Lancashire mills economically while uniting Indians across social divides.",
      },
      {
        name: "Dandi Salt March (1930)",
        formula: "240-mile, 24-day walk from Sabarmati to Dandi defying the British salt monopoly",
        note: "Sparked 60,000+ arrests, mass female participation, and global outrage after Dharasana beatings.",
      },
      {
        name: "Quit India Movement (Aug 1942)",
        formula: "Wartime Congress campaign ('Do or Die') demanding immediate British exit",
        note: "Mass arrests of Congress leaders allowed Jinnah's Muslim League to expand political influence.",
      },
      {
        name: "Indian National Army (INA)",
        formula: "Armed force led by Subhas Chandra Bose allied with Japan during WWII",
        note: "1945–46 Red Fort INA trials sparked mass Indian solidarity and shook British faith in army loyalty.",
      },
      {
        name: "Royal Indian Navy Mutiny (Feb 1946)",
        formula: "Revolt by 20,000+ Indian sailors in Bombay & Karachi against British officers",
        note: "Convinced London that Indian armed forces could no longer be trusted to enforce the Raj.",
      },
      {
        name: "Mountbatten Plan & Radcliffe Line (1947)",
        formula: "Rushed British withdrawal (Aug 1947) & 5-week partition boundary dividing Punjab and Bengal",
        note: "Created Pakistan (14 Aug) and India (15 Aug) amid 10–15M displaced and ~1 million killed.",
      },
    ],
  },
};
