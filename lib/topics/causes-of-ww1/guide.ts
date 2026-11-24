import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "causes-of-ww1",
  title: "Causes of the First World War (1914)",
  strand: "Why Did Wars Start?",
  icon: "⚔️",
  summary:
    "How rival ideologies, imperial territory disputes, alliances, militarism and the Sarajevo flashpoint dragged Europe into total war in August 1914.",
  intro:
    "In June 1914, Europe was the wealthiest and most interconnected continent on Earth — yet five weeks after a single shooting in Sarajevo, millions of soldiers were marching into the First World War. Historians study 1914 through three core lenses — **Ideology**, **Territory** and **Flashpoints** — alongside the classic **MAIN** framework (Militarism, Alliances, Imperialism, Nationalism). In this guide you will trace how long-term rivalries turned Europe into a powder keg, why the July Crisis spiralled out of control, and why historians still argue fiercely over who was most to blame.",
  guide: [
    {
      id: "main-alliances-ideology",
      heading: "Ideology, Nationalism & the Alliance System",
      discovery: {
        problem:
          "Imagine six rival schools competing in a tournament. Three sign a secret pledge to defend each other if any fight breaks out, so the other three form a rival pact for protection. One afternoon, a minor argument starts between a small friend of Group A and a member of Group B. Why might this tiny quarrel end with all six schools fighting, even if most students never wanted a brawl?",
        idea:
          "Alliances were designed as **deterrents** — to make rivals too afraid to attack. Yet once Europe split into two armed camps, every local crisis threatened the credibility of an entire bloc. Backing down looked like fatal weakness, so a local dispute in the Balkans could trigger continent-wide commitments.",
      },
      body: `By 1914, six **Great Powers** dominated European diplomacy: **Britain**, **France**, **Russia**, **Germany**, **Austria-Hungary** and **Italy**. Historians group the long-term tensions between them under the acronym **MAIN** — **M**ilitarism, **A**lliances, **I**mperialism and **N**ationalism — and notice how **ideology** (beliefs about empire, race, honour and national destiny) supercharged all four.

### Rival Ideologies and Two Kinds of Nationalism

Under **Kaiser Wilhelm II** (who became Emperor in 1888), Germany abandoned Chancellor Otto von Bismarck's cautious diplomacy for ***Weltpolitik*** ("World Policy"): an aggressive imperial ideology demanding Germany's **"place in the sun"** through overseas colonies and a global battle fleet. Britain's governing ideology rested on preserving its global empire and maritime supremacy through the **Two-Power Standard** (keeping the Royal Navy larger than the next two biggest navies combined).

**Nationalism** — intense pride in one's nation and the desire for self-rule — pulled Europe in two opposite directions:

- **Unifying / aggressive nationalism** bonded newly united nations like **Germany** (unified in 1871) and **Serbia** (which dreamed of a "Greater Serbia" uniting all South Slavs).
- **Centrifugal (empire-splitting) nationalism** threatened the sprawling, multi-ethnic **Austro-Hungarian Empire**, where German-speaking Austrians and Hungarians ruled over Czechs, Poles, Croats, Slovenes and Bosnian Serbs. Vienna feared that if Serb nationalism broke away Bosnia, the entire Habsburg Empire would collapse like a house of cards.

### The Two Rival Alliance Blocs

To avoid fighting alone, the Great Powers stitched together two competing diplomatic camps:

| Feature | Triple Alliance (1882) | Triple Entente (1907) |
|---|---|---|
| **Core members** | Germany, Austria-Hungary, Italy | Britain, France, Russia |
| **How it formed** | Dual Alliance (Germany & Austria-Hungary, 1879) + Italy (1882) | Franco-Russian Alliance (1894) + Entente Cordiale (Britain & France, 1904) + Anglo-Russian Entente (1907) |
| **Binding force** | Formal military defence treaty (though Italy had an escape clause if an ally was the aggressor) | Looser "friendly understanding" — Britain had **no automatic obligation** to fight, though military staff talks deepened ties |
| **1914 reality** | Germany & Austria-Hungary fought as the **Central Powers**; **Italy stayed neutral in 1914** and joined the Allies in 1915 | Britain, France and Russia fought together as the **Allied Powers** |
| **Key smaller links** | Germany backed Austria-Hungary in the Balkans | Russia posed as protector of **Serbia**; Britain guaranteed **Belgian neutrality** (1839 Treaty of London) |

Germany felt trapped by **"encirclement"** (*Einkreisung*), wedged between France to the west and Russia to the east. Meanwhile, Britain and France feared that an unchecked Germany would dominate mainland Europe. Alliances did not automatically fire guns, but they ensured that no Great Power could treat a crisis as somebody else's problem.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing the Triple Entente and Triple Alliance blocs in 1914 plus Serbia and Belgium">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Europe's Two Armed Camps on the Eve of War (1914)</text>
  <rect x="20" y="42" width="235" height="145" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="137" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">TRIPLE ENTENTE (1907)</text>
  <rect x="35" y="74" width="95" height="32" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="82" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Britain</text>
  <rect x="145" y="74" width="95" height="32" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="192" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">France</text>
  <rect x="90" y="120" width="95" height="32" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="137" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Russia</text>
  <text x="137" y="174" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">1894 Franco-Russian · 1904 &amp; 1907 Ententes</text>

  <rect x="305" y="42" width="235" height="145" rx="12" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="422" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">TRIPLE ALLIANCE (1882)</text>
  <rect x="320" y="74" width="95" height="32" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.2"/>
  <text x="367" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Germany</text>
  <rect x="430" y="74" width="95" height="32" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.2"/>
  <text x="477" y="94" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Austria-Hungary</text>
  <rect x="360" y="120" width="125" height="32" rx="8" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="422" y="140" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Italy (neutral 1914)</text>
  <text x="422" y="174" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Dual Alliance (1879) + Italy (1882)</text>

  <line x1="258" y1="108" x2="302" y2="108" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="280" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">VS</text>

  <rect x="28" y="202" width="160" height="34" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="108" y="223" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Belgium (1839 Treaty)</text>
  <line x1="82" y1="187" x2="82" y2="202" stroke="var(--good)" stroke-width="1.5"/>

  <rect x="210" y="202" width="145" height="34" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="282" y="223" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Serbia (Slavic ally)</text>
  <line x1="165" y1="187" x2="250" y2="202" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="355" y1="219" x2="430" y2="187" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="462" y="218" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--bad)">Balkan clash zone</text>
</svg>`,
      diagramCaption:
        "By 1907 Europe was divided into two rival blocs, while smaller states — Serbia and neutral Belgium — acted as tripwires connecting local disputes to Great Power treaties.",
      workedExamples: [
        {
          title: "Explaining why Germany feared 'encirclement'",
          problem:
            "Explain how the formation of the Triple Entente (1894–1907) increased German insecurity before 1914.",
          steps: [
            "**Point (name the diplomatic shift):** In 1894 France and Russia signed a military alliance, and by 1907 Britain had resolved colonial disputes with both via the Entente Cordiale (1904) and Anglo-Russian Entente (1907).",
            "**Evidence (geographical reality):** On the map of Europe, Germany now sat directly between France on its western border and Russia on its eastern border, with Britain controlling the North Sea.",
            "**Explanation (impact on German policy):** German leaders labelled this *Einkreisung* (encirclement). Convinced they might face a two-front war, they tightened their reliance on Austria-Hungary and drew up aggressive pre-emptive military plans.",
          ],
          answer:
            "The Triple Entente placed Germany geographically between France and Russia with Britain at sea, creating fear of encirclement and a two-front war that made German leaders more willing to back Austria-Hungary aggressively.",
          yourTurn: {
            question:
              "Which German emperor championed the aggressive imperial ideology of Weltpolitik ('a place in the sun') after 1888?",
            answer: {
              type: "text",
              accept: ["Kaiser Wilhelm II", "Wilhelm II", "Kaiser Wilhelm 2", "Wilhelm 2", "William II"],
              display: "Kaiser Wilhelm II",
            },
            solution:
              "Kaiser Wilhelm II dismissed Otto von Bismarck in 1890 and pursued Weltpolitik — demanding overseas colonies and a large battle fleet to rival Britain.",
          },
        },
        {
          title: "Distinguishing the Triple Entente from the Triple Alliance",
          problem:
            "Why is it inaccurate to claim that the Triple Entente legally forced Britain to declare war on Germany in 1914?",
          steps: [
            "**Define the Entente accurately:** *Entente* is French for 'friendly understanding'. The 1904 Entente Cordiale and 1907 Anglo-Russian Entente settled colonial rivalries (e.g. Egypt, Morocco, Persia) rather than signing an automatic mutual-defence pact.",
            "**Identify what created pressure instead:** Informal Anglo-French military and naval talks created a moral expectation of support, while Germany's invasion of neutral Belgium (violating the 1839 Treaty of London) gave Britain the legal and political trigger to declare war.",
          ],
          answer:
            "The Triple Entente was a loose friendly understanding rather than a binding military alliance; Britain had no automatic treaty obligation to fight for France or Russia, and instead entered over Belgian neutrality and fear of German dominance.",
        },
      ],
      keyPoints: [
        "**MAIN** summarises the four long-term structural causes: **Militarism, Alliances, Imperialism, Nationalism**.",
        "The **Triple Alliance (1882)** linked Germany, Austria-Hungary and Italy (though Italy stayed neutral in 1914 and joined the Allies in 1915).",
        "The **Triple Entente (1907)** linked Britain, France and Russia through looser agreements (1894, 1904, 1907) rather than one rigid treaty.",
        "German ***Weltpolitik*** clashed directly with British naval and imperial ideology, while **Slavic nationalism** threatened to break apart the multi-ethnic Austro-Hungarian Empire.",
      ],
      whyItWorks:
        "Seeing the Alliance System through the lens of **security dilemmas** explains the paradox of 1914: every treaty one state signed to feel *safer* made its neighbours feel *more threatened*, prompting counter-alliances that locked Europe into two rival blocs.",
      strategies: [
        "Always specify **which** alliance and **which** members — never confuse the Triple Alliance (Central Powers) with the Triple Entente (Allies).",
        "Distinguish **aggressive unifying nationalism** (Germany, Serbia) from **empire-splitting nationalism** (Slavs inside Austria-Hungary).",
      ],
      thinkDeeper:
        "If alliances were meant to preserve peace through deterrence, why did Bismarck's alliance web keep Europe peaceful from 1871 to 1890, whereas the 1907–1914 bloc system ended in catastrophe?",
    },

    {
      id: "militarism-territory",
      heading: "Militarism, Arms Races & Territorial Rivalries",
      discovery: {
        problem:
          "In 1906 Britain launched **HMS Dreadnought**, a battleship so heavily armed and fast that it made every older warship in the world obsolete overnight — including Britain's own giant fleet! Why did launching this super-weapon make Britain *less* secure in the short term?",
        idea:
          "By resetting the scoreboard to zero, HMS Dreadnought gave Germany a sudden chance to catch up in modern battleships. Both sides plunged into a wildly expensive **Anglo-German naval race** that bred mutual suspicion and nationalist press hysteria.",
      },
      body: `Alliances created the diplomatic wiring, but **militarism** and **territorial flashzones** loaded the continent with explosives. **Militarism** meant more than owning large armies: it was a political culture in which generals held huge sway over monarchs and parliaments, mass **conscription** trained millions of young men, and military timetables overrode diplomacy.

### The Arms Race & Rigid War Plans

- **Anglo-German Naval Race (1906–1914):** Germany's Naval Laws (1898, 1900) under Admiral Tirpitz aimed to build a fleet strong enough to challenge Britain in the North Sea. After Britain unveiled **HMS Dreadnought (1906)**, crowds chanted *"We want eight and we won't wait!"* By 1914 Britain had won the race (**29 dreadnoughts to Germany's 17**), yet the competition convinced British leaders that Germany sought European hegemony.
- **Land armies:** Between 1890 and 1914, European defence spending more than doubled. Russia's massive army modernisation programme alarmed German generals, who feared that by 1917 Russia would be unbeatable.
- **The Schlieffen Plan (1905):** To solve Germany's nightmare of a two-front war against France and Russia, General Alfred von Schlieffen designed a high-speed gamble: assume slow-moving Russia would take **6 weeks** to mobilise; swing the main German army through **neutral Belgium** to capture Paris and knock out France first; then rush troops east by railway to fight Russia. Its fatal flaw was **rigidity** — once Russia mobilised, German generals insisted they *had* to attack France and Belgium immediately, turning any Eastern crisis into a Western European war! (France's own offensive **Plan XVII** aimed to charge straight into Alsace-Lorraine.)

### Territorial Rivalries: From Alsace-Lorraine to the Balkans

Three major territorial flashzones repeatedly pushed Europe to the brink between 1905 and 1913:

1. **Alsace-Lorraine (Western Europe):** Germany had annexed this coal- and iron-rich border province from France after the **1871 Franco-Prussian War**. French desire for revenge (*revanchism*) ensured France and Germany could never become genuine partners.
2. **The Moroccan Crises (1905 & 1911 — North Africa):** Seeking to test the new Anglo-French Entente Cordiale, Kaiser Wilhelm II rode into **Tangier (1905)** declaring Morocco independent; at the 1906 Algeciras Conference, Britain solidly backed France and left Germany isolated. In **1911**, Germany sent the gunboat **SMS *Panther*** to **Agadir** when France sent troops to Fez. Again Britain stood firmly beside France (David Lloyd George's Mansion House warning), turning a colonial dispute into tighter Anglo-French naval planning.
3. **The Balkan "Powder Keg" (South-East Europe):** As the Ottoman ("Turkish") Empire weakened, Austria-Hungary, Russia and rising Balkan nations scrambled for territory:
   - **Bosnian Crisis (1908):** Austria-Hungary suddenly annexed **Bosnia-Herzegovina**, home to millions of Serbs. Serbia was furious and appealed to Russia, but Germany backed Austria-Hungary and forced Russia to back down — leaving Tsar Nicholas II sworn never to be humiliated again.
   - **Balkan Wars (1912–1913):** Serbia led a Balkan League that pushed the Ottomans out of nearly all of Europe, **doubling Serbia's territory** and population. To Vienna, a confident, expanded Serbia was now an existential threat to the Austro-Hungarian Empire.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dreadnought naval race bar chart comparing Britain 29 and Germany 17 in 1914 alongside the Schlieffen Plan two-front diagram">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="140" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Naval Race: Dreadnoughts (1914)</text>
  <rect x="20" y="38" width="240" height="192" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <line x1="55" y1="192" x2="240" y2="192" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="55" y1="60" x2="55" y2="192" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="48" y="74" text-anchor="end" font-size="10" fill="var(--ink-2)">30</text>
  <text x="48" y="132" text-anchor="end" font-size="10" fill="var(--ink-2)">15</text>
  <text x="48" y="194" text-anchor="end" font-size="10" fill="var(--ink-2)">0</text>
  <rect x="78" y="76" width="52" height="116" rx="5" fill="var(--brand)"/>
  <text x="104" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">29</text>
  <text x="104" y="209" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Britain</text>
  <rect x="162" y="124" width="52" height="68" rx="5" fill="var(--bad)"/>
  <text x="188" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">17</text>
  <text x="188" y="209" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Germany</text>
  <text x="140" y="224" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Britain kept its lead, but trust collapsed</text>

  <text x="415" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The Schlieffen Plan Gamble</text>
  <rect x="280" y="38" width="260" height="192" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <rect x="296" y="118" width="66" height="42" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="329" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">France</text>
  <rect x="310" y="56" width="70" height="32" rx="7" fill="var(--surface)" stroke="var(--good)" stroke-width="1.3"/>
  <text x="345" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Belgium</text>
  <rect x="385" y="102" width="68" height="46" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="419" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Germany</text>
  <rect x="470" y="102" width="58" height="46" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="499" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Russia</text>
  <path d="M 408 102 C 398 70, 385 68, 380 70" fill="none" stroke="var(--bad)" stroke-width="2.2"/>
  <path d="M 326 88 C 318 100, 320 110, 324 118" fill="none" stroke="var(--bad)" stroke-width="2.2"/>
  <text x="430" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">1. Sweep West (6 wks)</text>
  <line x1="453" y1="125" x2="470" y2="125" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="3 2"/>
  <text x="410" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink)">2. Rush East via rail before</text>
  <text x="410" y="195" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink)">Russia finishes mobilising</text>
  <text x="410" y="216" text-anchor="middle" font-size="9.5" fill="var(--bad)">Risk: invading Belgium pulls in Britain!</text>
</svg>`,
      diagramCaption:
        "Left: Britain won the Dreadnought arms race 29–17 by 1914, yet naval rivalry poisoned Anglo-German relations. Right: Germany's Schlieffen Plan relied on invading neutral Belgium to beat France in six weeks.",
      workedExamples: [
        {
          title: "How the Moroccan Crises backfired on Germany",
          problem:
            "Explain how the Moroccan Crises of 1905 and 1911 increased tension in Europe without starting a war.",
          steps: [
            "**State Germany's aim:** Kaiser Wilhelm II intervened in Tangier (1905) and sent the gunboat SMS *Panther* to Agadir (1911) hoping to win colonial influence and split the new Anglo-French Entente Cordiale.",
            "**Show the diplomatic outcome:** Instead of splitting them, Britain viewed German threats as bullying and backed France at Algeciras (1906) and in 1911, leaving Germany humiliated with only a strip of French Congo.",
            "**Explain the consequence for 1914:** Britain and France began secret military and naval staff talks (agreeing Britain would guard the Channel while France guarded the Mediterranean), while Kaiser Wilhelm II resolved never to back down in a future crisis.",
          ],
          answer:
            "Both Moroccan Crises backfired on Germany: they tightened Anglo-French military co-operation, deepened mutual distrust, and made Germany determined not to suffer another diplomatic retreat.",
          yourTurn: {
            question:
              "Which territory did Austria-Hungary annex in 1908, infuriating Serbia and humiliating Russia?",
            answer: {
              type: "text",
              accept: ["Bosnia", "Bosnia-Herzegovina", "Bosnia and Herzegovina"],
              display: "Bosnia-Herzegovina",
            },
            solution:
              "Austria-Hungary annexed Bosnia-Herzegovina in 1908. Because Bosnia contained a large Serb population, Serbia was outraged and Russia vowed never to back down again.",
          },
        },
      ],
      keyPoints: [
        "The **Anglo-German naval race** accelerated after Britain launched **HMS Dreadnought (1906)**; by 1914 Britain led 29 to 17.",
        "**Germany's Schlieffen Plan** aimed to defeat France in 6 weeks via **neutral Belgium** before turning east to Russia — making mobilisation equivalent to war.",
        "French bitterness over losing **Alsace-Lorraine (1871)** kept Western Europe permanently tense.",
        "The **Moroccan Crises (1905, 1911)** strengthened the Entente Cordiale, while the **Bosnian Crisis (1908)** and **Balkan Wars (1912–13)** turned the Balkans into Europe's powder keg.",
      ],
      whyItWorks:
        "Military plans like the Schlieffen Plan operated like railway timetables: once a Great Power began mobilising millions of reservists by train, halting the process risked chaos and defeat. Thus **militarism removed diplomatic breathing room** during a crisis.",
      strategies: [
        "Link each pre-1914 crisis to **how it changed attitudes in 1914** (e.g. 1908 made Russia refuse to back down in 1914; 1911 hardened German resentment).",
        "When explaining the Schlieffen Plan, always mention **two-front war**, **6 weeks**, and **neutral Belgium**.",
      ],
      thinkDeeper:
        "Britain clearly won the Dreadnought naval race by 1914, and by 1912 Anglo-German naval tensions had actually cooled slightly. Why, then, do historians still count militarism and the arms race as major causes of war in 1914?",
    },

    {
      id: "sarajevo-july-crisis",
      heading: "Flashpoint: Sarajevo & the July Crisis (1914)",
      discovery: {
        problem:
          "Archduke Franz Ferdinand was assassinated on **28 June 1914**, yet Britain did not declare war on Germany until **4 August 1914** — 37 days later! Why did war NOT break out on 29 June, and what kept the crisis escalating across five summer weeks?",
        idea:
          "Assassinating a royal heir did not automatically trigger a European war. It took a deliberate chain of decisions during the **July Crisis** — Germany's 'blank cheque', Austria-Hungary's harsh ultimatum, Russian mobilisation, and Germany's invasion of neutral Belgium — to turn a Bosnian murder into a world war.",
      },
      body: `Historians call **Sarajevo** the **flashpoint** (or short-term trigger) of the First World War. On **28 June 1914**, **Archduke Franz Ferdinand**, heir to the Austro-Hungarian throne, visited Sarajevo, the capital of Bosnia — provocatively on Serbia's national day (Vidovdan).

### The Assassination (28 June 1914)

A Bosnian Serb nationalist group armed and trained by the Serbian secret society the **Black Hand** (*Crna Ruka*) planned to kill the Archduke to break Bosnia free from Habsburg rule. That morning, a bomb bounced off the royal car and wounded officers behind it. Later, the Archduke insisted on visiting the injured in hospital; his driver took a **wrong turn** and stalled right beside a café where 19-year-old **Gavrilo Princip** was standing. Princip fired two shots, killing Franz Ferdinand and his wife Sophie.

### The July Crisis: Five Weeks from Spark to World War

Austria-Hungary had long wanted an excuse to crush Serbia, yet it dared not move without German backing in case Russia intervened. Look at how each decision triggered the next domino:

1. **5 July — Germany's "Blank Cheque":** Kaiser Wilhelm II and Chancellor Bethmann-Hollweg promised Austria-Hungary unconditional support (*Blankoscheck*) whatever action Vienna chose against Serbia — assuming Russia might back down as in 1908.
2. **23 July — The Austrian Ultimatum:** Austria-Hungary handed Serbia a ferocious **48-hour ultimatum** deliberately written to be rejected. Serbia accepted **nine of ten demands**, refusing only to let Austrian officials police inside sovereign Serbia.
3. **28 July — War Begins in the Balkans:** Austria-Hungary declared war on Serbia and shelled Belgrade.
4. **30 July — Russian Full Mobilisation:** Determined not to betray Serbia or repeat the 1908 humiliation, **Tsar Nicholas II** ordered full Russian mobilisation along both the Austrian and German borders.
5. **1 August — Germany Declares War on Russia:** Because Germany's **Schlieffen Plan** depended on striking before Russia finished mobilising, Berlin treated Russian mobilisation as an act of war and declared war on Russia.
6. **3 August — Germany Declares War on France:** Executing the Schlieffen timetable, Germany declared war on Russia's ally France and demanded free passage through neutral Belgium.
7. **4 August — Invasion of Belgium & Britain Enters:** Belgian King Albert I refused passage; German troops crossed the Belgian frontier anyway. Chancellor Bethmann-Hollweg dismissed Britain's **1839 Treaty of London** guarantee of Belgian neutrality as a mere **"scrap of paper"**. At 11 pm London time on **4 August 1914**, Britain declared war on Germany.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step-by-step chain reaction of the 1914 July Crisis from Sarajevo on 28 June to British declaration of war on 4 August">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">The July Crisis Chain Reaction (28 June – 4 August 1914)</text>

  <rect x="18" y="42" width="120" height="72" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>
  <text x="78" y="59" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">28 June</text>
  <text x="78" y="75" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Sarajevo</text>
  <text x="78" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Princip kills</text>
  <text x="78" y="103" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Franz Ferdinand</text>

  <line x1="138" y1="78" x2="155" y2="78" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="155,74 162,78 155,82" fill="var(--ink-2)"/>

  <rect x="163" y="42" width="120" height="72" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.3"/>
  <text x="223" y="59" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">5 July</text>
  <text x="223" y="75" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Blank Cheque</text>
  <text x="223" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Germany promises</text>
  <text x="223" y="103" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">full Austrian backing</text>

  <line x1="283" y1="78" x2="300" y2="78" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="300,74 307,78 300,82" fill="var(--ink-2)"/>

  <rect x="308" y="42" width="108" height="72" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.3"/>
  <text x="362" y="59" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">23–28 July</text>
  <text x="362" y="75" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Ultimatum &amp; War</text>
  <text x="362" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Austria attacks</text>
  <text x="362" y="103" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Serbia (28 Jul)</text>

  <line x1="416" y1="78" x2="433" y2="78" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="433,74 440,78 433,82" fill="var(--ink-2)"/>

  <rect x="441" y="42" width="102" height="72" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>
  <text x="492" y="59" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">30 July</text>
  <text x="492" y="75" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Russia Mobilises</text>
  <text x="492" y="90" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Tsar backs</text>
  <text x="492" y="103" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Slavic Serbia</text>

  <path d="M 492 114 L 492 132 L 96 132 L 96 146" fill="none" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="92,146 96,153 100,146" fill="var(--bad)"/>

  <rect x="18" y="154" width="160" height="76" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4"/>
  <text x="98" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">1 &amp; 3 August</text>
  <text x="98" y="188" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Schlieffen Triggered</text>
  <text x="98" y="204" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Germany declares war on</text>
  <text x="98" y="218" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Russia (1 Aug) &amp; France (3 Aug)</text>

  <line x1="178" y1="192" x2="196" y2="192" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="196,188 203,192 196,196" fill="var(--bad)"/>

  <rect x="204" y="154" width="162" height="76" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.4"/>
  <text x="285" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">4 August (Morning)</text>
  <text x="285" y="188" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Belgium Invaded</text>
  <text x="285" y="204" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Germany breaks 1839 Treaty</text>
  <text x="285" y="218" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">("a scrap of paper")</text>

  <line x1="366" y1="192" x2="384" y2="192" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="384,188 391,192 384,196" fill="var(--bad)"/>

  <rect x="392" y="154" width="151" height="76" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="467" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">4 August (11 pm)</text>
  <text x="467" y="188" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">Britain Declares War</text>
  <text x="467" y="204" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Defends Belgium &amp; blocks</text>
  <text x="467" y="218" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">German control of Channel</text>
</svg>`,
      diagramCaption:
        "Seven decisive steps transformed a single assassination in Sarajevo on 28 June into a continent-wide war by 4 August 1914.",
      workedExamples: [
        {
          title: "Why the 'Blank Cheque' was a turning point",
          problem:
            "Explain why Germany's 'blank cheque' of 5 July 1914 was decisive in turning the Sarajevo assassination into a European war.",
          steps: [
            "**Define the event:** On 5 July 1914, Kaiser Wilhelm II promised Austria-Hungary unconditional German support against Serbia.",
            "**Explain Austria-Hungary's dilemma before 5 July:** Vienna feared attacking Serbia alone because Russia might intervene to protect fellow Slavs.",
            "**Show the causal impact:** Emboldened by Germany's guarantee, Austria-Hungary sent an intentionally unacceptable ultimatum on 23 July and declared war on 28 July — setting off Russian mobilisation and the Schlieffen timetable.",
          ],
          answer:
            "Without Germany's unconditional 'blank cheque', Austria-Hungary would almost certainly have hesitated to attack Serbia for fear of Russia; German backing emboldened Vienna to issue an unacceptable ultimatum and start the war.",
          yourTurn: {
            question:
              "What was the name of the Serbian nationalist secret society linked to arming Gavrilo Princip in Sarajevo?",
            answer: {
              type: "text",
              accept: ["Black Hand", "The Black Hand", "Crna Ruka"],
              display: "Black Hand",
            },
            solution:
              "The Black Hand (Crna Ruka) was a Serbian nationalist secret society aiming to unite all South Slavs into a Greater Serbia; it supplied weapons to Princip and his fellow conspirators.",
          },
        },
        {
          title: "Why Britain declared war on 4 August 1914",
          problem:
            "Was Britain's entry into WWI on 4 August 1914 purely about protecting 'plucky little Belgium'?",
          steps: [
            "**Immediate legal & moral trigger:** Germany violated Belgian neutrality guaranteed by Britain in the **1839 Treaty of London**, uniting a previously divided British Cabinet and public.",
            "**Underlying strategic motive:** British Foreign Secretary Sir Edward Grey feared that if Germany crushed France and occupied Belgian Channel ports (like Antwerp and Ostend), Germany would directly threaten Britain's naval survival and empire.",
          ],
          answer:
            "No — Belgian neutrality under the 1839 Treaty of London was the vital legal and public trigger, but it combined with Britain's deeper strategic fear of a hostile Germany dominating mainland Europe and the Channel coast.",
        },
      ],
      keyPoints: [
        "**28 June 1914:** Gavrilo Princip (armed by the **Black Hand**) assassinated Archduke Franz Ferdinand in Sarajevo.",
        "**5 July 1914:** Germany's **'blank cheque'** encouraged Austria-Hungary to send a harsh ultimatum (23 July) and declare war on Serbia (28 July).",
        "**30 July–3 August:** Russian full mobilisation triggered Germany's rigid **Schlieffen Plan** declarations of war on Russia (1 Aug) and France (3 Aug).",
        "**4 August 1914:** Germany's invasion of **neutral Belgium** broke the **1839 Treaty of London** and brought **Britain** into the war.",
      ],
      whyItWorks:
        "Tracing the July Crisis chronologically prevents the most common Year 9 mistake — assuming the assassination instantly started WWI. Every link between 28 June and 4 August required human choices shaped by alliances, fear and war plans.",
      strategies: [
        "Memorise the exact July Crisis chain in order: **Sarajevo → Blank Cheque → Ultimatum → War on Serbia → Russian Mobilisation → Schlieffen / Belgium → Britain**.",
        "Always pair Britain's **1839 Treaty of London** duty with its strategic fear of German dominance over Western Europe.",
      ],
      thinkDeeper:
        "Could Europe still have stopped the war on 29 July 1914 — after Austria-Hungary shelled Belgrade, but before Russia ordered full mobilisation? Which single leader had the greatest power to halt the slide to war?",
    },

    {
      id: "weighing-ww1-causes",
      heading: "Weighing & Linking Causes: Historiography of 1914",
      discovery: {
        problem:
          "Suppose a warehouse is stacked floor-to-ceiling with gunpowder barrels, leaking gas pipes and spilled oil. Someone carelessly strikes a match, and the building explodes. A court asks: *Was the match or the gunpowder more to blame?* How does this metaphor help historians explain 1914?",
        idea:
          "The **match** is the **flashpoint** (Sarajevo, 28 June 1914) — it explains **when** the explosion happened. The **gunpowder and gas** are the **long-term conditions** (MAIN + territorial disputes + rival ideologies) — they explain **why** a single Balkan spark blew up the entire continent.",
      },
      body: `Top-band Year 9 History essays never just list causes like groceries ("First there was Militarism. Second there were Alliances..."). Instead, historians **weigh**, **categorise** and **link** causes — and debate rival **historical interpretations** (**historiography**).

### Long-Term Conditions vs Short-Term Flashpoint

- **Long-term conditions (1871–1914):** Imperial ideology (*Weltpolitik*), the Alliance System, Militarism (Dreadnoughts & Schlieffen Plan), Alsace-Lorraine and Slavic nationalism created a volatile system where Great Powers expected war.
- **Medium-term escalators (1905–1913):** The Moroccan Crises (1905, 1911), Bosnian Crisis (1908) and Balkan Wars (1912–13) eroded diplomatic trust so each side refused to back down one more time.
- **Short-term flashpoint (28 June–4 August 1914):** Sarajevo provided the spark, and the July Crisis choices lit the fuse.

Notice how causes **interlock**: *Nationalism* motivated Gavrilo Princip; *Imperialism & Nationalism* made Austria-Hungary desperate to crush Serbia; *Alliances* drew Russia and Germany in; and *Militarism* (the Schlieffen Plan) forced Germany to attack France through Belgium, dragging in Britain!

### The Great Historical Debate: Who Was Most to Blame?

| Interpretation | Key Historian(s) | Core Argument | Best Evidence Used |
|---|---|---|---|
| **War Guilt / German Primary Responsibility** | **Treaty of Versailles Art. 231** (1919); **Fritz Fischer** (1961, *Germany's Aims in the First World War*) | Germany deliberately pushed for European dominance (*Weltpolitik*) and welcomed a **preventive war** in 1914 before Russia finished rearming. | 1912 German "War Council"; 5 July **'blank cheque'** urging Vienna to strike Serbia; Schlieffen Plan attacking neutral Belgium & France. |
| **Shared Blame / 'Sleepwalkers'** | **Christopher Clark** (2012, *The Sleepwalkers*); Sidney Fay; Margaret MacMillan | No single villain planned a world war; **all Great Powers** made reckless gambles, trapped by mutual fear, alliance anxieties and rigid mobilisation timetables — "watchful, yet blind" like sleepwalkers. | Serbian Black Hand terrorism; Austria-Hungary's reckless ultimatum; Russian full mobilisation (30 July); French support for Russia; Britain's unclear signals before 4 August. |

### Writing a Top-Band Causation Judgement

To reach the highest grade band, build a **sustained line of argument**:
1. **Weigh causes explicitly** (e.g. argue why one underlying cause mattered more than another — such as Militarism turning a diplomatic stand-off into irreversible war).
2. **Show links between causes** ("Alliances alone did not cause fighting, because they existed peacefully from 1907 to 1913; they only became lethal when combined with militarist war plans and Balkan nationalism").
3. **Evaluate counter-arguments** ("Although the Fischer thesis convincingly highlights Germany's 'blank cheque', Clark's *Sleepwalkers* view reminds us that Austria-Hungary initiated the ultimatum and Russia was first to order full Great Power mobilisation").`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causation web linking MAIN long-term conditions to the Sarajevo flashpoint alongside the Fischer versus Sleepwalkers historiography spectrum">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="145" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">How 1914 Causes Interlocked</text>
  <rect x="18" y="38" width="254" height="194" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>

  <rect x="34" y="50" width="222" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="145" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Long-Term Conditions (1871–1914)</text>
  <text x="145" y="80" text-anchor="middle" font-size="9.5" fill="var(--ink)">MAIN · Weltpolitik · Alsace-Lorraine</text>

  <line x1="145" y1="86" x2="145" y2="100" stroke="var(--ink-2)" stroke-width="2"/>
  <polygon points="141,100 145,107 149,100" fill="var(--ink-2)"/>

  <rect x="34" y="108" width="222" height="36" rx="8" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="145" y="124" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Medium-Term Crises (1905–13)</text>
  <text x="145" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Morocco (05/11) · Bosnia (08) · Balkans (12–13)</text>

  <line x1="145" y1="144" x2="145" y2="158" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="141,158 145,165 149,158" fill="var(--bad)"/>

  <rect x="34" y="166" width="222" height="50" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="145" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Short-Term Flashpoint (Summer 1914)</text>
  <text x="145" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink)">Sarajevo spark + July Crisis decisions</text>
  <text x="145" y="210" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">→ World War (4 August 1914)</text>

  <text x="415" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Historiography Debate</text>
  <rect x="288" y="38" width="254" height="194" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <line x1="312" y1="88" x2="518" y2="88" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="322" cy="88" r="8" fill="var(--bad)"/>
  <circle cx="508" cy="88" r="8" fill="var(--good)"/>
  <text x="322" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Fischer (1961)</text>
  <text x="322" y="75" text-anchor="middle" font-size="9" fill="var(--ink-2)">German prime guilt</text>
  <text x="508" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Clark (2012)</text>
  <text x="508" y="75" text-anchor="middle" font-size="9" fill="var(--ink-2)">Shared miscalculation</text>

  <rect x="300" y="108" width="110" height="110" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.1"/>
  <text x="355" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Fischer Evidence</text>
  <text x="355" y="143" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Weltpolitik</text>
  <text x="355" y="159" text-anchor="middle" font-size="9.2" fill="var(--ink)">• 1912 War Council</text>
  <text x="355" y="175" text-anchor="middle" font-size="9.2" fill="var(--ink)">• 5 Jul Blank Cheque</text>
  <text x="355" y="191" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Schlieffen invasion</text>
  <text x="355" y="207" text-anchor="middle" font-size="9.2" fill="var(--ink)">  of neutral Belgium</text>

  <rect x="420" y="108" width="110" height="110" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.1"/>
  <text x="475" y="125" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Sleepwalkers</text>
  <text x="475" y="143" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Serbian Black Hand</text>
  <text x="475" y="159" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Austrian ultimatum</text>
  <text x="475" y="175" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Russian mobilisation</text>
  <text x="475" y="191" text-anchor="middle" font-size="9.2" fill="var(--ink)">• French encouragement</text>
  <text x="475" y="207" text-anchor="middle" font-size="9.2" fill="var(--ink)">• Mutual crisis panic</text>
</svg>`,
      diagramCaption:
        "Left: Long-term MAIN conditions, medium-term crises and the Sarajevo flashpoint worked together. Right: Historians debate whether Germany drove war deliberately (Fischer) or all Great Powers 'sleepwalked' into disaster (Clark).",
      workedExamples: [
        {
          title: "Weighing and linking Militarism vs Alliances",
          problem:
            "How would you link **Alliances** and **Militarism** in an analytical paragraph answering: *'How far was the Alliance System the main cause of the First World War?'*",
          steps: [
            "**Make a nuanced claim:** Acknowledge the importance of alliances, then explain their limit on their own.",
            "**Test with chronology:** Both the Triple Alliance (1882) and Triple Entente (1907) existed during the Moroccan Crises (1905, 1911) and Bosnian Crisis (1908) without causing a world war.",
            "**Show the crucial link:** Alliances only turned the 1914 Sarajevo crisis into world war because **militarism** — specifically Germany's rigid **Schlieffen Plan** — equated Russian mobilisation with an immediate invasion of France and Belgium. Thus militarism acted as the accelerator that made the alliance trap inescapable.",
          ],
          answer:
            "Alliances created the diplomatic structure for a wide war, but they had existed peacefully through earlier crises; it was their interaction with militarism (above all Germany's Schlieffen Plan) that made the July Crisis escalate past the point of return.",
          yourTurn: {
            question:
              "Which German historian argued in 1961 that Germany bore primary responsibility for deliberately pursuing European hegemony and risking war in 1914?",
            answer: {
              type: "text",
              accept: ["Fritz Fischer", "Fischer"],
              display: "Fritz Fischer",
            },
            solution:
              "Fritz Fischer (1961) caused a huge historical debate by arguing from German archives that Berlin sought European dominance and used the July Crisis as a deliberate chance for a preventive war.",
          },
        },
      ],
      keyPoints: [
        "Always distinguish **long-term conditions** (MAIN + territory + ideology), **medium-term crises** (1905–13) and the **short-term flashpoint** (Sarajevo, 28 June 1914).",
        "Top-band causation answers **link causes together** rather than treating M, A, I and N as isolated boxes.",
        "The **Fischer thesis (1961)** places primary blame on Germany's aggressive aims, 1912 War Council and 1914 'blank cheque'.",
        "**Christopher Clark's *The Sleepwalkers* (2012)** argues responsibility was shared across Serbia, Austria-Hungary, Russia, Germany, France and Britain through mutual fear and miscalculation.",
      ],
      whyItWorks:
        "History is not memorising one 'right' villain — it is weighing evidence. Comparing Fischer and Clark teaches you to support your own judgement while testing counter-evidence honestly, the exact skill rewarded at IGCSE and IB History.",
      strategies: [
        "Use connective language that shows **relative importance**: *'fundamental precondition'*, *'catalyst'*, *'accelerator'*, *'immediate trigger'*.",
        "In any 'blame' essay, test **both** German responsibility (Fischer) and shared miscalculation (Clark) before reaching a justified conclusion.",
      ],
      thinkDeeper:
        "If every European power in 1914 genuinely claimed it was fighting a 'defensive war', how can historians still judge that some governments bore greater responsibility than others?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What does the acronym MAIN stand for in the causes of WWI?",
        back: "**M**ilitarism, **A**lliances, **I**mperialism and **N**ationalism — the four core long-term structural causes of the First World War.",
      },
      {
        front: "Who were the three original members of the Triple Alliance (1882), and what happened in 1914?",
        back: "Germany, Austria-Hungary and Italy. In 1914, Italy stayed neutral (arguing Austria-Hungary was the aggressor) and joined the Allies in 1915.",
      },
      {
        front: "Who were the three members of the Triple Entente (1907), and how binding was it?",
        back: "Britain, France and Russia. Unlike the Triple Alliance, Britain's Ententes (1904, 1907) were looser 'friendly understandings' rather than an automatic mutual-defence treaty.",
      },
      {
        front: "What was German *Weltpolitik*?",
        back: "Kaiser Wilhelm II's aggressive 'World Policy' seeking overseas colonies, global prestige ('a place in the sun') and a battle fleet to rival Britain.",
      },
      {
        front: "Why was HMS Dreadnought (1906) a turning point in the naval race?",
        back: "Britain's revolutionary all-big-gun battleship made every older warship obsolete overnight, resetting the scoreboard and triggering an intense Anglo-German building race (Britain led 29–17 by 1914).",
      },
      {
        front: "What was Germany's Schlieffen Plan?",
        back: "Germany's war plan to avoid a two-front war: defeat France in 6 weeks by sweeping through neutral Belgium, then send troops east by rail before Russia finished mobilising.",
      },
      {
        front: "Why was Alsace-Lorraine a permanent source of Franco-German tension?",
        back: "Germany annexed Alsace-Lorraine from France after the 1871 Franco-Prussian War, fuelling French *revanchism* (desire to recover the lost provinces).",
      },
      {
        front: "How did the Moroccan Crises (1905 & 1911) backfire on Germany?",
        back: "Germany challenged French influence in Tangier (1905) and Agadir (1911, SMS *Panther*) to split the Entente, but Britain backed France firmly and Anglo-French military ties grew much closer.",
      },
      {
        front: "Why did the 1908 Bosnian Crisis make war in 1914 much more likely?",
        back: "Austria-Hungary annexed Bosnia-Herzegovina; Serbia was furious and Russia was forced to back down by Germany, leaving Tsar Nicholas II sworn never to be humiliated again.",
      },
      {
        front: "What happened in Sarajevo on 28 June 1914?",
        back: "Bosnian Serb nationalist Gavrilo Princip (armed by the Black Hand) assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, and his wife Sophie.",
      },
      {
        front: "What was Germany's 'blank cheque' of 5 July 1914?",
        back: "Germany's unconditional promise to support Austria-Hungary whatever action Vienna took against Serbia, emboldening Austria-Hungary to issue its harsh ultimatum.",
      },
      {
        front: "Why did Britain declare war on Germany on 4 August 1914?",
        back: "Germany invaded neutral Belgium, breaking the 1839 Treaty of London ('a scrap of paper'), while Britain also feared a hostile Germany dominating mainland Europe and Channel ports.",
      },
      {
        front: "What is the Fischer Thesis (1961)?",
        back: "German historian Fritz Fischer's argument that Germany deliberately pursued European hegemony and used the July Crisis as a planned opportunity for a preventive war before Russia finished rearming.",
      },
      {
        front: "What is Christopher Clark's *Sleepwalkers* (2012) thesis?",
        back: "The argument that no single nation planned a world war; instead all Great Powers shared responsibility through mutual fear, reckless gambles and miscalculation — 'sleepwalking' into disaster.",
      },
      {
        front: "How did the Balkan Wars (1912–1913) alarm Austria-Hungary?",
        back: "Serbia nearly doubled its territory as Ottoman rule collapsed, convincing Austrian leaders that rising Slavic nationalism would soon tear apart the multi-ethnic Habsburg Empire.",
      },
    ],
    mustKnow: [
      "Recall all six European Great Powers in 1914 and place each in the Triple Alliance or Triple Entente (including Italy's 1914 neutrality).",
      "Define Militarism, Alliances, Imperialism and Nationalism (MAIN) with at least one concrete pre-1914 example for each.",
      "Explain why Kaiser Wilhelm II's *Weltpolitik* and the HMS Dreadnought naval race alarmed Britain.",
      "Explain how the Schlieffen Plan worked and why its rigidity turned a Balkan conflict into a Western European war.",
      "Compare the impact of the Moroccan Crises (1905, 1911), Bosnian Crisis (1908) and Balkan Wars (1912–13).",
      "Sequence the seven key steps of the July Crisis from 28 June 1914 to 4 August 1914 accurately.",
      "Explain why Germany's 'blank cheque' and Russia's 30 July mobilisation escalated the crisis past diplomacy.",
      "Explain both the legal (1839 Treaty of London) and strategic reasons Britain declared war on 4 August 1914.",
      "Distinguish long-term underlying causes from medium-term crises and the short-term flashpoint (Sarajevo).",
      "Compare the Fischer thesis (German primary responsibility) against Clark's *Sleepwalkers* (shared blame) using specific evidence.",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: 'WWI started solely because Archduke Franz Ferdinand was assassinated.'",
        right: "Write instead ✅: 'The Sarajevo assassination was the short-term flashpoint (spark), but it only triggered a world war because long-term MAIN tensions, territorial rivalries and July Crisis decisions escalated a local Balkan dispute.'",
      },
      {
        wrong: "Never write ❌: 'Italy fought on Germany's side in 1914 because it was in the Triple Alliance.'",
        right: "Write instead ✅: 'Although Italy belonged to the 1882 Triple Alliance, it remained neutral in August 1914 — claiming Austria-Hungary was the aggressor — and joined the Allied Powers in 1915.'",
      },
      {
        wrong: "Never write ❌: 'The Triple Entente legally forced Britain to declare war on Germany.'",
        right: "Write instead ✅: 'The Triple Entente was a loose friendly understanding rather than a binding military alliance; Britain declared war on 4 August 1914 after Germany violated Belgian neutrality (1839 Treaty of London) and threatened the Channel coast.'",
      },
      {
        wrong: "Never write ❌: 'Germany won the naval race because it built more Dreadnoughts than Britain.'",
        right: "Write instead ✅: 'Britain won the Dreadnought naval race decisively (29 to 17 by 1914), yet the fierce competition still poisoned Anglo-German trust and drove Britain closer to France.'",
      },
      {
        wrong: "Never write ❌: 'All historians agree Germany alone caused the First World War.'",
        right: "Write instead ✅: 'While Fritz Fischer (1961) argued Germany bore primary guilt through Weltpolitik and the blank cheque, historians such as Christopher Clark (*The Sleepwalkers*, 2012) argue blame was shared across all Great Powers.'",
      },
      {
        wrong: "Never write ❌: 'The Schlieffen Plan succeeded in quickly defeating France.'",
        right: "Write instead ✅: 'The Schlieffen Plan failed because Belgian resistance, British intervention, Russian speed and French counter-attacks at the Marne stalled Germany's advance into Western Front trench warfare.'",
      },
    ],
    examMistakes: [
      "Confusing the **Triple Alliance** (Germany, Austria-Hungary, Italy) with the **Triple Entente** (Britain, France, Russia).",
      "Listing M, A, I and N in four disconnected paragraphs without explaining **how the causes interacted** or which mattered most.",
      "Jumping straight from 28 June (Sarajevo) to 4 August (world war) while skipping the **'blank cheque'**, **Austrian ultimatum** and **Russian mobilisation**.",
      "Writing 'Germany invaded Belgium because it hated Belgium' instead of explaining the **Schlieffen Plan's** need to outflank French border fortresses in 6 weeks.",
      "Mixing up the **1908 Bosnian Crisis** (Austria-Hungary annexing Bosnia) with the **1912–13 Balkan Wars** (Balkan states expelling Ottoman rule and doubling Serbia).",
      "Forgetting to name **specific evidence** (dates, treaties, leaders like Wilhelm II, Gavrilo Princip, Bethmann-Hollweg, Tsar Nicholas II).",
      "Describing *what* happened in a narrative story instead of answering *why* it caused war (always end paragraphs with 'Therefore, this made war more likely because...').",
    ],
    mnemonics: [
      {
        topic: "Four Long-Term Causes of WWI",
        device: "MAIN",
        explanation: "**M**ilitarism (arms race & Schlieffen Plan), **A**lliances (Triple Alliance vs Triple Entente), **I**mperialism (*Weltpolitik* & colonial crises), **N**ationalism (Slavic & Great Power rivalry).",
      },
      {
        topic: "July Crisis Escalation Chain",
        device: "S–B–U–R–S–B (Six Steps to War)",
        explanation: "**S**arajevo assassination (28 Jun) → **B**lank cheque (5 Jul) → **U**ltimatum & war on Serbia (23–28 Jul) → **R**ussian mobilisation (30 Jul) → **S**chlieffen Plan vs Russia/France (1–3 Aug) → **B**elgium invaded & Britain declares war (4 Aug).",
      },
      {
        topic: "Essay Causation Structure",
        device: "PEEL + Link",
        explanation: "**P**oint (name the cause), **E**vidence (specific date/treaty/figure), **E**xplain (how it pushed Europe toward war), **L**ink (connect to another cause or weigh relative importance).",
      },
    ],
    realWorld: [
      {
        title: "NATO Article 5 & Modern Deterrence",
        detail: "Modern alliance clauses like NATO's Article 5 ('an attack on one is an attack on all') deliberately echo the 1914 deterrence puzzle — aiming to prevent aggression while avoiding blind automatic escalation.",
        emoji: "🛡️",
      },
      {
        title: "The Security Dilemma in Arms Races",
        detail: "Political scientists still cite the 1906 HMS Dreadnought race as the classic textbook 'security dilemma': one country upgrades its weapons to feel safe, forcing rivals to upgrade too and leaving everyone less secure.",
        emoji: "⚓",
      },
      {
        title: "Diplomatic Hotlines After 1914",
        detail: "After historians saw how slow telegrams and misread signals sped up the July Crisis, Cold War leaders installed direct hotlines (such as Washington–Moscow in 1963) so superpowers could talk during flashpoints.",
        emoji: "☎️",
      },
      {
        title: "Singapore's Connection to 1914–18",
        detail: "Even far from Europe, WWI reached Singapore immediately: German cruiser SMS *Emden* raided Allied shipping near Penang in 1914, the 1915 Singapore Mutiny shook colonial troops, and Singapore's Cenotaph on Esplanade Park commemorates volunteers who fell in the war.",
        emoji: "🦁",
      },
      {
        title: "How History Debates Shape National Identity",
        detail: "When Fritz Fischer published his 1961 book blaming Germany, it ignited massive public debate in West Germany over how nations confront uncomfortable pasts — showing why historiography still matters today.",
        emoji: "📚",
      },
    ],
    videos: [
      {
        title: "The Causes of World War One — MAIN & the July Crisis",
        channel: "Oversimplified / BBC Bitesize Search",
        url: "https://www.youtube.com/results?search_query=causes+of+world+war+1+MAIN+july+crisis+GCSE+history",
      },
      {
        title: "The July Crisis 1914 — From Sarajevo to August 4",
        channel: "Extra History Search",
        url: "https://www.youtube.com/results?search_query=extra+history+semianalysis+july+crisis+1914+sarajevo",
      },
      {
        title: "The Schlieffen Plan & Dreadnought Naval Race Explained",
        channel: "Simple History / Imperial War Museums Search",
        url: "https://www.youtube.com/results?search_query=schlieffen+plan+hms+dreadnought+naval+race+ww1",
      },
      {
        title: "Who Started WWI? Fischer Thesis vs Christopher Clark's Sleepwalkers",
        channel: "History Historiography Search",
        url: "https://www.youtube.com/results?search_query=fischer+thesis+christopher+clark+sleepwalkers+ww1+causes",
      },
    ],
    formulas: [
      {
        name: "MAIN Causes",
        formula: "Militarism · Alliances · Imperialism · Nationalism",
        note: "The four structural long-term tensions underlying the outbreak of WWI in 1914.",
      },
      {
        name: "Triple Alliance (1882)",
        formula: "Germany + Austria-Hungary + Italy",
        note: "Defensive bloc formed from the 1879 Dual Alliance; Italy stayed neutral in 1914 and joined the Allies in 1915.",
      },
      {
        name: "Triple Entente (1907)",
        formula: "Britain + France + Russia",
        note: "Built from the 1894 Franco-Russian Alliance, 1904 Entente Cordiale and 1907 Anglo-Russian Entente.",
      },
      {
        name: "Weltpolitik",
        formula: "Kaiser Wilhelm II's aggressive 'World Policy' for colonies & naval power",
        note: "Demanded Germany's 'place in the sun', directly threatening British imperial ideology.",
      },
      {
        name: "HMS Dreadnought (1906)",
        formula: "Britain 29 vs Germany 17 Dreadnoughts by 1914",
        note: "All-big-gun battleship that rendered older fleets obsolete and ignited the Anglo-German naval race.",
      },
      {
        name: "Schlieffen Plan (1905)",
        formula: "Beat France via neutral Belgium in 6 weeks → shift East vs Russia",
        note: "Germany's rigid two-front war timetable; violating Belgium triggered British entry on 4 August 1914.",
      },
      {
        name: "Alsace-Lorraine",
        formula: "Border territory annexed by Germany from France in 1871",
        note: "Fuelled lasting French revanchism and France's offensive Plan XVII.",
      },
      {
        name: "Moroccan Crises (1905 & 1911)",
        formula: "Tangier (1905) & Agadir / SMS Panther (1911)",
        note: "German colonial challenges that backfired by tightening the Anglo-French Entente.",
      },
      {
        name: "Balkan 'Powder Keg' (1908–1913)",
        formula: "Bosnian Crisis (1908) + Balkan Wars (1912–13)",
        note: "Ottoman decline, Habsburg annexation of Bosnia and Serbia doubling in size made South-East Europe explosive.",
      },
      {
        name: "Blank Cheque (5 July 1914)",
        formula: "Unconditional German backing for Austria-Hungary against Serbia",
        note: "Gave Vienna the confidence to issue its harsh 23 July ultimatum despite the risk of Russian intervention.",
      },
      {
        name: "Treaty of London (1839)",
        formula: "British guarantee of Belgian neutrality ('a scrap of paper')",
        note: "Violated by Germany on 4 August 1914, giving Britain its immediate trigger to declare war.",
      },
      {
        name: "Fischer Thesis vs Sleepwalkers",
        formula: "Fischer (1961): German prime guilt · Clark (2012): Shared miscalculation",
        note: "Core historiographical debate over responsibility for the outbreak of the First World War.",
      },
    ],
  },
};
