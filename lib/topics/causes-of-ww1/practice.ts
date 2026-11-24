import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "causes-of-ww1-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "main-alliances-ideology",
      question:
        "Which three Great Powers formed the Triple Entente by 1907?",
      options: [
        "Britain, France and Russia",
        "Germany, Austria-Hungary and Italy",
        "France, Serbia and Ottoman Empire",
        "Germany, Britain and Belgium",
      ],
      answerIndex: 0,
      hints: [
        "Recall the 1894 Franco-Russian Alliance, 1904 Entente Cordiale and 1907 Anglo-Russian Entente.",
        "These three later fought together as the Allied Powers in 1914.",
      ],
      explanation:
        "Britain, France and Russia formed the Triple Entente by 1907. Germany, Austria-Hungary and Italy made up the rival Triple Alliance (1882).",
    },
    {
      id: "causes-of-ww1-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "militarism-territory",
      question:
        "In what year did Britain launch HMS Dreadnought, igniting the Anglo-German battleship race?",
      answer: { type: "number", value: 1906, display: "1906" },
      traps: [
        {
          spec: { type: "number", value: 1914 },
          feedback: "1914 was when WWI began — HMS Dreadnought was launched eight years earlier.",
        },
        {
          spec: { type: "number", value: 1905 },
          feedback: "1905 was the First Moroccan Crisis and Schlieffen Plan — Dreadnought launched one year later.",
        },
      ],
      hints: [
        "It launched just after the First Moroccan Crisis (1905) and eight years before WWI.",
      ],
      solution: [
        "Britain launched **HMS Dreadnought** in **1906**.",
        "Its all-big-gun design made older warships obsolete overnight, prompting an intense naval race with Germany.",
      ],
    },
    {
      id: "causes-of-ww1-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "militarism-territory",
      question:
        "Which country did Germany's Schlieffen Plan rely on invading to outflank French fortresses rapidly?",
      options: [
        "Neutral Switzerland in the Alps",
        "Neutral Belgium on the Western flank",
        "Neutral Denmark on the Baltic coast",
        "Neutral Spain across the Pyrenees",
      ],
      answerIndex: 1,
      hints: [
        "Think about the 1839 Treaty of London that Britain invoked on 4 August 1914.",
        "Flat northern plains gave German armies a faster road to Paris than attacking France's heavily fortified border.",
      ],
      explanation:
        "The Schlieffen Plan sent the main German army sweeping through neutral Belgium to defeat France in six weeks — a fatal gamble that triggered British intervention.",
    },
    {
      id: "causes-of-ww1-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "sarajevo-july-crisis",
      question:
        "Name the Bosnian city where Archduke Franz Ferdinand was assassinated on 28 June 1914.",
      answer: { type: "text", accept: ["Sarajevo"], display: "Sarajevo" },
      traps: [
        {
          spec: { type: "text", accept: ["Belgrade"] },
          feedback: "Belgrade was Serbia's capital (shelled on 29 July) — the assassination happened in the capital of Bosnia.",
        },
        {
          spec: { type: "text", accept: ["Vienna"] },
          feedback: "Vienna was Austria-Hungary's capital — Franz Ferdinand was visiting Bosnia when he was shot.",
        },
      ],
      hints: [
        "It was the capital of Bosnia-Herzegovina, annexed by Austria-Hungary in 1908.",
      ],
      solution: [
        "Archduke Franz Ferdinand and his wife Sophie were assassinated in **Sarajevo** on 28 June 1914.",
      ],
    },
    {
      id: "causes-of-ww1-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "militarism-territory",
      question:
        "How did the 1905 and 1911 Moroccan Crises change European alignments before 1914?",
      options: [
        "They convinced Britain to join the Triple Alliance alongside Germany",
        "They ended colonial competition peacefully through German control of Tangier",
        "They strengthened Anglo-French military co-operation and left Germany isolated",
        "They prompted Russia to abandon Serbia during the 1912–13 Balkan Wars",
      ],
      answerIndex: 2,
      hints: [
        "Germany intervened in Tangier (1905) and Agadir (1911) hoping to split Britain and France.",
        "Instead of breaking the Entente Cordiale, German pressure had the exact opposite effect.",
      ],
      explanation:
        "Britain backed France firmly at Algeciras (1906) and during the 1911 Agadir crisis (SMS *Panther*), leading to closer Anglo-French naval and military talks while frustrating Germany.",
    },
    {
      id: "causes-of-ww1-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "sarajevo-july-crisis",
      question:
        "What famous two-word nickname do historians give to Germany's 5 July 1914 promise of unconditional support to Austria-Hungary?",
      answer: {
        type: "text",
        accept: ["blank cheque", "blank check", "the blank cheque", "the blank check"],
        display: "blank cheque",
      },
      hints: [
        "Think of a banking metaphor where someone signs a payment slip and lets the recipient fill in any amount.",
        "Two words: 'blank ____'.",
      ],
      solution: [
        "Historians call Germany's 5 July 1914 promise the **blank cheque** (*Blankoscheck*).",
        "It encouraged Vienna to send Serbia an intentionally unacceptable ultimatum despite the risk of Russian intervention.",
      ],
    },
    {
      id: "causes-of-ww1-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "sarajevo-july-crisis",
      question:
        "Which Great Power was the first to order full mobilisation on 30 July 1914 after Austria-Hungary declared war on Serbia?",
      options: [
        "Britain, defending Belgian Channel ports",
        "Italy, defending its Alpine border",
        "France, defending Alsace-Lorraine",
        "Russia, backing fellow Slavic Serbia",
      ],
      answerIndex: 3,
      hints: [
        "Which empire considered itself the protector of Slavs and refused to suffer another 1908 Bosnian humiliation?",
        "Tsar Nicholas II approved the order on 30 July, triggering Germany's Schlieffen timetable.",
      ],
      explanation:
        "Tsar Nicholas II ordered full Russian mobilisation on 30 July 1914 to defend Serbia, which led Germany to declare war on Russia (1 August) and France (3 August).",
    },
    {
      id: "causes-of-ww1-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "militarism-territory",
      question:
        "How many more Dreadnought battleships did Britain have than Germany by August 1914? (Britain had 29; Germany had 17.)",
      answer: { type: "number", value: 12, display: "12" },
      traps: [
        {
          spec: { type: "number", value: 46 },
          feedback: "You added 29 + 17 instead of finding the margin between the two fleets.",
        },
      ],
      hints: [
        "Subtract Germany's total (17) from Britain's total (29).",
        "{{29 - 17 = 12}}.",
      ],
      solution: [
        "Britain had **29** dreadnoughts and Germany had **17** in August 1914.",
        "Margin: {{29 - 17 = 12}} more dreadnoughts for Britain.",
      ],
    },
    {
      id: "causes-of-ww1-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "weighing-ww1-causes",
      question:
        "How does Christopher Clark's *Sleepwalkers* (2012) interpretation differ from Fritz Fischer's (1961) thesis?",
      options: [
        "Clark argues all Great Powers shared blame via miscalculation, not Germany alone",
        "Clark argues Belgium deliberately provoked Germany into breaking the 1839 Treaty",
        "Clark argues the First World War began over African colonies rather than Bosnia",
        "Clark argues Austria-Hungary refused to declare war on Serbia during July 1914",
      ],
      answerIndex: 0,
      hints: [
        "Fischer emphasised German primary responsibility (*Weltpolitik* and preventive war).",
        "What does the word 'sleepwalkers' imply about all the European governments in 1914?",
      ],
      explanation:
        "Whereas Fritz Fischer placed prime responsibility on German expansionism, Christopher Clark argued that leaders across Serbia, Austria-Hungary, Russia, Germany, France and Britain all stumbled into war through mutual fear and miscalculation.",
    },
    {
      id: "causes-of-ww1-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "sarajevo-july-crisis",
      question:
        "Explain two reasons why Britain declared war on Germany on 4 August 1914.",
      marks: 2,
      hints: [
        "Think first of the legal obligation Germany violated that morning.",
        "Second, consider Britain's strategic security concern regarding Western Europe and the Channel.",
      ],
      modelAnswer:
        "First, Germany invaded neutral Belgium, violating the 1839 Treaty of London which Britain had pledged to uphold. Second, Britain feared that a German victory over France would leave a hostile power controlling Channel ports and threatening British naval security.",
      markScheme: [
        {
          point: "Germany violated Belgian neutrality / broke the 1839 Treaty of London",
          keywords: ["belgium", "belgian", "neutral", "1839", "treaty of london"],
        },
        {
          point: "Strategic fear of German dominance over Western Europe / Channel ports / naval threat",
          keywords: ["channel", "dominate", "dominance", "naval", "security", "ports", "balance of power"],
        },
      ],
      commonError:
        "Writing only 'because of the Triple Entente' — remember the Entente did not legally force Britain to fight; Belgian neutrality and strategic balance of power did.",
    },
  ],

  papers: [
    {
      id: "causes-of-ww1-p1",
      title: "Practice Paper 1 — MAIN, Alliances, Arms Races & Crises",
      questions: [
        {
          id: "causes-of-ww1-p1-q01",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "main-alliances-ideology",
          question:
            "Which German word describes Kaiser Wilhelm II's push for overseas colonies and a global battle fleet after 1890?",
          options: [
            "Weltpolitik",
            "Revanchism",
            "Entente",
            "Vidovdan",
          ],
          answerIndex: 0,
          hints: [
            "Literally translated from German, it means 'World Policy'.",
            "It replaced Bismarck's cautious European focus with a demand for 'a place in the sun'.",
          ],
          explanation:
            "*Weltpolitik* ('World Policy') was Germany's aggressive imperial strategy under Kaiser Wilhelm II, directly provoking rivalry with Britain.",
        },
        {
          id: "causes-of-ww1-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "main-alliances-ideology",
          question:
            "In what year was the Triple Alliance formed when Italy joined Germany and Austria-Hungary?",
          answer: { type: "number", value: 1882, display: "1882" },
          traps: [
            {
              spec: { type: "number", value: 1879 },
              feedback: "1879 was the Dual Alliance between Germany and Austria-Hungary — Italy joined three years later.",
            },
            {
              spec: { type: "number", value: 1907 },
              feedback: "1907 was when the rival Triple Entente was completed.",
            },
          ],
          hints: [
            "Germany and Austria-Hungary signed the Dual Alliance in 1879; Italy joined three years later.",
          ],
          solution: [
            "Italy joined Germany and Austria-Hungary in **1882** to form the **Triple Alliance**.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "militarism-territory",
          question:
            "Name the border province Germany annexed from France in 1871, fuelling lasting French desire for revenge.",
          answer: {
            type: "text",
            accept: ["Alsace-Lorraine", "Alsace Lorraine", "Alsace and Lorraine"],
            display: "Alsace-Lorraine",
          },
          hints: [
            "It is a hyphenated name of two rich industrial regions along the Franco-German border.",
          ],
          solution: [
            "Germany annexed **Alsace-Lorraine** after defeating France in the 1871 Franco-Prussian War.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "main-alliances-ideology",
          question:
            "Which sequence of agreements built the Triple Entente step by step between 1894 and 1907?",
          options: [
            "Dual Alliance (1879), Treaty of London (1839) and Balkan League (1912)",
            "Franco-Russian Alliance (1894), Entente Cordiale (1904) and Anglo-Russian Entente (1907)",
            "Schlieffen Plan (1905), Algeciras Pact (1906) and Bosnian Annexation (1908)",
            "Agadir Accord (1911), Triple Alliance (1882) and Treaty of Versailles (1919)",
          ],
          answerIndex: 1,
          hints: [
            "First France allied with Russia (1894), then Britain settled colonial disputes with France (1904) and finally Russia (1907).",
            "Look for the three exact dates: 1894, 1904 and 1907.",
          ],
          explanation:
            "The Triple Entente grew in three steps: the Franco-Russian Alliance (1894), the Anglo-French Entente Cordiale (1904) and the Anglo-Russian Entente (1907).",
        },
        {
          id: "causes-of-ww1-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "What was the name of the German gunboat sent to the Moroccan port of Agadir during the Second Moroccan Crisis in 1911?",
          answer: {
            type: "text",
            accept: ["Panther", "SMS Panther", "The Panther"],
            display: "SMS Panther",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Dreadnought", "HMS Dreadnought"] },
              feedback: "HMS Dreadnought was Britain's revolutionary 1906 battleship — the German gunboat at Agadir was named after a big cat.",
            },
          ],
          hints: [
            "It was a German gunboat named after a dark jungle predator.",
            "Prefix optional: SMS ______.",
          ],
          solution: [
            "Germany sent the gunboat **SMS Panther** to Agadir in July 1911, provoking Britain's Mansion House warning and tightening the Entente.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "According to the Schlieffen Plan, approximately how many weeks did German planners assume slow-moving Russia would take to mobilise fully?",
          options: [
            "Two weeks",
            "Four weeks",
            "Six weeks",
            "Twelve weeks",
          ],
          answerIndex: 2,
          hints: [
            "This time window was how long Germany gave itself to capture Paris and defeat France.",
            "In reality, Russia mobilised in roughly ten days — shattering German assumptions!",
          ],
          explanation:
            "General Schlieffen assumed Russia's vast size and weak railways would require six weeks to mobilise, giving Germany six weeks to knock out France via Belgium first.",
        },
        {
          id: "causes-of-ww1-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "How many years elapsed between Britain's launch of HMS Dreadnought (1906) and the outbreak of the First World War (1914)?",
          answer: { type: "number", value: 8, display: "8 years" },
          hints: [
            "Subtract 1906 from 1914.",
            "{{1914 - 1906 = 8}}.",
          ],
          solution: [
            "{{1914 - 1906 = 8}} years of intense Anglo-German dreadnought construction separated 1906 from 1914.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "Which declining empire's retreat from South-East Europe created the territorial vacuum known as the 'Balkan powder keg'?",
          options: [
            "The British Empire",
            "The Spanish Empire",
            "The Belgian Empire",
            "The Ottoman Empire",
          ],
          answerIndex: 3,
          hints: [
            "Often nicknamed 'the sick man of Europe' in the 19th century.",
            "During the 1912–13 Balkan Wars, Serbia and its neighbours pushed this Turkish empire almost completely out of Europe.",
          ],
          explanation:
            "The weakening Ottoman Empire lost control of Bosnia (annexed by Austria-Hungary in 1908) and nearly all its remaining European lands in the 1912–13 Balkan Wars, triggering fierce Austria-Serbia-Russia rivalry.",
        },
        {
          id: "causes-of-ww1-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "main-alliances-ideology",
          question:
            "Which policy required Britain's Royal Navy to remain at least as large as the next two biggest navies combined?",
          answer: {
            type: "text",
            accept: ["Two-Power Standard", "Two Power Standard", "2-Power Standard", "2 Power Standard"],
            display: "Two-Power Standard",
          },
          hints: [
            "It literally refers to matching the next 'two' naval powers together.",
            "Three words: ____-Power Standard.",
          ],
          solution: [
            "Britain's **Two-Power Standard** aimed to keep the Royal Navy superior to the next two largest rival fleets combined, explaining why German Naval Laws alarmed London.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "main-alliances-ideology",
          question:
            "Why did Italy choose neutrality in August 1914 despite signing the 1882 Triple Alliance with Germany and Austria-Hungary?",
          options: [
            "Italy argued the pact was defensive and Austria-Hungary was the aggressor",
            "Italy had been expelled from the Triple Alliance after the 1905 Moroccan Crisis",
            "Germany ordered Italy to stay neutral so Britain would not blockade Venice",
            "Serbia signed a military treaty handing Bosnia to Italy in July 1914",
          ],
          answerIndex: 0,
          hints: [
            "Check the exact legal trigger of the Triple Alliance: it only applied if a member was *attacked*.",
            "Italy also coveted Italian-speaking territories still ruled by Austria-Hungary!",
          ],
          explanation:
            "Italy legally invoked the defensive clause of the Triple Alliance — noting that Austria-Hungary had declared war on Serbia first — and stayed neutral until joining the Allies in 1915.",
        },
        {
          id: "causes-of-ww1-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "In what year did Austria-Hungary formally annex Bosnia-Herzegovina, sparking the Bosnian Crisis?",
          answer: { type: "number", value: 1908, display: "1908" },
          traps: [
            {
              spec: { type: "number", value: 1914 },
              feedback: "1914 was the Sarajevo assassination — Austria-Hungary annexed Bosnia six years earlier.",
            },
            {
              spec: { type: "number", value: 1912 },
              feedback: "1912 was the start of the Balkan Wars — the Bosnian Crisis happened four years earlier.",
            },
          ],
          hints: [
            "It happened between the First Moroccan Crisis (1905) and the Second Moroccan Crisis (1911).",
            "Six years before the Sarajevo assassination.",
          ],
          solution: [
            "Austria-Hungary annexed Bosnia-Herzegovina in **1908**, enraging Serbia and humiliating Russia.",
          ],
        },
        {
          id: "causes-of-ww1-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "main-alliances-ideology",
          question:
            "Explain two ways in which the Alliance System increased European tension before 1914.",
          marks: 2,
          hints: [
            "Think about how Germany viewed Britain, France and Russia after 1907 (*encirclement*).",
            "Think about what rival blocs did to local disputes in places like Morocco or the Balkans.",
          ],
          modelAnswer:
            "First, the formation of the Triple Entente surrounding Germany created deep fear of encirclement and a two-front war, pushing Berlin toward aggressive military planning. Second, dividing Europe into two armed camps meant that any local quarrel risked pulling in rival Great Powers to prove loyalty to their partners.",
          markScheme: [
            {
              point: "Created German fear of encirclement / two-front war",
              keywords: ["encirclement", "einkreisung", "two-front", "two front", "surrounded"],
            },
            {
              point: "Turned local disputes into bloc confrontations / dragged allies in to preserve credibility",
              keywords: ["local", "armed camps", "two blocs", "rival blocs", "dragged", "credibility", "loyalty"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "Explain how the Anglo-German naval race after 1906 damaged trust between Britain and Germany.",
          marks: 3,
          hints: [
            "Mention HMS Dreadnought (1906) and why it reset the naval contest.",
            "Include Germany's Naval Laws / *Weltpolitik* and the British reaction (Two-Power Standard / 29 vs 17).",
            "Link the arms race directly to British diplomatic alignment with France and Russia.",
          ],
          modelAnswer:
            "When Britain launched HMS Dreadnought in 1906, older warships became obsolete overnight, allowing Germany under Kaiser Wilhelm II's Weltpolitik to compete directly with the Royal Navy. Britain felt its Two-Power Standard and maritime empire were directly threatened, triggering intense public panic and a costly building surge that ended 29 to 17 by 1914. Even though Britain kept its lead, mutual suspicion drove London into tighter military talks with France and Russia.",
          markScheme: [
            {
              point: "HMS Dreadnought made older ships obsolete / let Germany try to catch up",
              keywords: ["dreadnought", "obsolete", "weltpolitik"],
            },
            {
              point: "Threatened Britain's Two-Power Standard / naval supremacy / built 29 vs 17",
              keywords: ["two-power", "two power", "29", "17", "supremacy", "empire"],
            },
            {
              point: "Poisoned trust and drove Britain closer to France/Russia",
              keywords: ["suspicion", "distrust", "closer to france", "military talks", "entente"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "militarism-territory",
          question:
            "Explain why Germany's Schlieffen Plan made it far harder to resolve a European diplomatic crisis peacefully.",
          marks: 4,
          hints: [
            "State the core two-front dilemma Germany tried to solve.",
            "Explain the 6-week Russian mobilisation timetable and the sweep through neutral Belgium.",
            "Show why its rigidity meant Russian mobilisation forced immediate offensive war against France and Belgium.",
          ],
          modelAnswer:
            "Germany designed the plan to avoid fighting France and Russia simultaneously on two fronts. Planners gambled that slow-moving Russia would take six weeks to mobilise, so Germany had to defeat France rapidly first by swinging through neutral Belgium. Because the timetable was completely rigid, once Russia began mobilising in July 1914 German generals insisted they had to attack France immediately before losing their narrow time window. Worse still, marching through Belgium automatically violated the 1839 Treaty of London and dragged Britain into the conflict.",
          markScheme: [
            {
              point: "Designed to solve Germany's two-front war dilemma against France and Russia",
              keywords: ["two-front", "two front", "simultaneously"],
            },
            {
              point: "Relied on defeating France in six weeks before Russia fully mobilised",
              keywords: ["six weeks", "6 weeks", "mobilise", "mobilize"],
            },
            {
              point: "Rigid timetable turned Russian mobilisation into instant war without diplomatic pause",
              keywords: ["rigid", "timetable", "immediately", "generals"],
            },
            {
              point: "Sweeping through neutral Belgium violated the 1839 Treaty and brought in Britain",
              keywords: ["belgium", "1839", "britain", "neutral"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "militarism-territory",
          question:
            "How far did the Bosnian Crisis (1908) and Balkan Wars (1912–13) make war in South-East Europe almost inevitable by 1914?",
          marks: 4,
          hints: [
            "Explain what happened in 1908 (Austrian annexation of Bosnia) and how it hardened Serbia and Russia.",
            "Explain the outcome of the 1912–13 Balkan Wars (Serbia doubled in size, alarming Vienna).",
            "Add balance: explain why war was NOT yet fully inevitable before June 1914 (crises had still been contained diplomatically).",
          ],
          modelAnswer:
            "In 1908 Austria-Hungary annexed Bosnia-Herzegovina, infuriating Serbian nationalists and humiliating Tsar Nicholas II when Germany forced Russia to retreat — leaving Russia determined never to back down again. Then the 1912–13 Balkan Wars drove back the Ottoman Empire and nearly doubled Serbia's territory, convincing Vienna that Slavic nationalism posed an existential threat to the Habsburg Empire. Together these crises turned the Balkans into an explosive powder keg where neither Vienna nor St Petersburg felt able to compromise. However, war was not yet completely inevitable because Great Power diplomacy had still contained the 1912–13 fighting; it took the 1914 Sarajevo flashpoint and Germany's blank cheque to ignite general war.",
          markScheme: [
            {
              point: "1908 annexation of Bosnia angered Serbia and left Russia sworn never to back down again",
              keywords: ["annexed", "humiliated", "humiliating", "back down", "tsar"],
            },
            {
              point: "1912–13 Balkan Wars doubled Serbia's size as Ottoman rule collapsed, alarming Vienna",
              keywords: ["doubled", "ottoman", "existential", "habsburg", "slavic"],
            },
            {
              point: "Removed willingness to compromise / turned Balkans into an explosive powder keg",
              keywords: ["powder keg", "compromise", "explosive"],
            },
            {
              point: "Balanced judgement: diplomacy had still contained earlier crises until Sarajevo / blank cheque",
              keywords: ["however", "contained", "sarajevo", "blank cheque", "flashpoint"],
            },
          ],
        },
      ],
    },

    {
      id: "causes-of-ww1-p2",
      title: "Practice Paper 2 — Sarajevo, July Crisis & Historiography",
      questions: [
        {
          id: "causes-of-ww1-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sarajevo-july-crisis",
          question:
            "Give the exact day and month in 1914 when Archduke Franz Ferdinand was assassinated in Sarajevo (e.g. '15 May').",
          answer: {
            type: "text",
            accept: ["28 June", "June 28", "28th June", "June 28th", "28 June 1914", "June 28 1914"],
            display: "28 June",
          },
          traps: [
            {
              spec: { type: "text", accept: ["28 July", "July 28", "28th July"] },
              feedback: "28 July was when Austria-Hungary declared war on Serbia — the assassination happened exactly one month earlier.",
            },
            {
              spec: { type: "text", accept: ["4 August", "August 4", "4th August"] },
              feedback: "4 August was when Britain declared war on Germany — Sarajevo was in late June.",
            },
          ],
          hints: [
            "It happened at the end of June, exactly one month before Austria-Hungary declared war on Serbia (28 July).",
          ],
          solution: [
            "Archduke Franz Ferdinand was assassinated on **28 June 1914**.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sarajevo-july-crisis",
          question:
            "Name the 19-year-old Bosnian Serb nationalist who shot Archduke Franz Ferdinand in Sarajevo.",
          answer: {
            type: "text",
            accept: ["Gavrilo Princip", "Princip"],
            display: "Gavrilo Princip",
          },
          hints: [
            "He was armed by the Black Hand and fired two shots after the royal car stalled outside a Sarajevo café.",
          ],
          solution: [
            "**Gavrilo Princip** fired the two fatal shots that killed Archduke Franz Ferdinand and Sophie.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "How many of Austria-Hungary's ten ultimatum demands of 23 July 1914 did Serbia agree to accept?",
          options: [
            "None of the ten demands",
            "Five of the ten demands",
            "Nine of the ten demands",
            "All ten of the demands",
          ],
          answerIndex: 2,
          hints: [
            "Serbia surprised Europe with a remarkably conciliatory response — rejecting only the clause allowing Austrian police onto Serbian soil.",
            "Even Kaiser Wilhelm II initially remarked that Serbia's reply removed every reason for war!",
          ],
          explanation:
            "Serbia accepted nine of the ten demands, refusing only point six (allowing Austro-Hungarian officials to conduct judicial investigations inside sovereign Serbia).",
        },
        {
          id: "causes-of-ww1-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "How many days passed between the Sarajevo assassination (28 June 1914) and Britain's declaration of war on Germany (4 August 1914)? (Remember June has 30 days and July has 31 days.)",
          answer: { type: "number", value: 37, display: "37 days" },
          traps: [
            {
              spec: { type: "number", value: 36 },
              feedback: "Check the days in July: July has 31 days (2 remaining in June + 31 in July + 4 in August).",
            },
            {
              spec: { type: "number", value: 30 },
              feedback: "30 days takes you only to 28 July (Austria declaring war on Serbia) — keep counting to 4 August!",
            },
          ],
          hints: [
            "Count the remaining days in June ({{30 - 28 = 2}}), add all 31 days of July, then add 4 days in August.",
            "{{2 + 31 + 4 = 37}}.",
          ],
          solution: [
            "Remaining days in June: {{30 - 28 = 2}}.",
            "All of July: 31 days. Days in August: 4 days.",
            "Total: {{2 + 31 + 4 = 37}} days — showing that the July Crisis unfolded over five tense weeks.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "Which international treaty guaranteed Belgian neutrality and was mocked by German Chancellor Bethmann-Hollweg as 'a scrap of paper'?",
          options: [
            "The 1882 Triple Alliance Treaty",
            "The 1904 Entente Cordiale Treaty",
            "The 1919 Treaty of Versailles",
            "The 1839 Treaty of London",
          ],
          answerIndex: 3,
          hints: [
            "Britain signed this guarantee 75 years before the First World War began.",
            "It was signed in Britain's capital city in 1839.",
          ],
          explanation:
            "Britain had guaranteed Belgian neutrality under the 1839 Treaty of London. Germany's violation of Belgium on 4 August 1914 triggered Britain's declaration of war that night.",
        },
        {
          id: "causes-of-ww1-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "On what exact date in August 1914 did Britain declare war on Germany? (Format: e.g. '10 August'.)",
          answer: {
            type: "text",
            accept: ["4 August", "August 4", "4th August", "August 4th", "4 August 1914", "August 4 1914"],
            display: "4 August",
          },
          traps: [
            {
              spec: { type: "text", accept: ["1 August", "August 1", "1st August"] },
              feedback: "1 August was when Germany declared war on Russia — Britain entered three days later after Belgium was invaded.",
            },
            {
              spec: { type: "text", accept: ["3 August", "August 3", "3rd August"] },
              feedback: "3 August was when Germany declared war on France — Britain declared war the next night.",
            },
          ],
          hints: [
            "Germany declared war on Russia on 1 August, on France on 3 August, and invaded Belgium the following morning.",
            "Britain's ultimatum expired at 11 pm London time on that day.",
          ],
          solution: [
            "Britain declared war on Germany at 11 pm London time on **4 August 1914** after Germany invaded neutral Belgium.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "weighing-ww1-causes",
          question:
            "Which historian published *Germany's Aims in the First World War* in 1961, arguing Germany deliberately risked war for European dominance?",
          options: [
            "Fritz Fischer",
            "Christopher Clark",
            "Gavrilo Princip",
            "Alfred von Schlieffen",
          ],
          answerIndex: 0,
          hints: [
            "His thesis directly revived the debate over German primary responsibility ('War Guilt').",
            "Not Christopher Clark, who wrote *The Sleepwalkers* in 2012.",
          ],
          explanation:
            "West German historian Fritz Fischer shocked readers in 1961 by using archival evidence (like the 1912 War Council and 1914 blank cheque) to argue Germany bore prime responsibility for WWI.",
        },
        {
          id: "causes-of-ww1-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "weighing-ww1-causes",
          question:
            "What one-word title metaphor did historian Christopher Clark use in 2012 to describe Europe's leaders stumbling into war in 1914?",
          answer: {
            type: "text",
            accept: ["Sleepwalkers", "The Sleepwalkers", "Sleepwalker"],
            display: "Sleepwalkers",
          },
          hints: [
            "He wrote that European statesmen were 'watchful, yet unseeing', walking blindly into disaster like people moving in their sleep.",
            "It is a single compound plural noun starting with 'S'.",
          ],
          solution: [
            "Christopher Clark titled his influential 2012 study ***The Sleepwalkers***, emphasising shared miscalculation across all Great Powers.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "weighing-ww1-causes",
          question:
            "Which clause of the 1919 Treaty of Versailles placed legal 'War Guilt' on Germany and its allies?",
          options: [
            "Article 14",
            "Article 231",
            "Plan XVII",
            "Two-Power Standard",
          ],
          answerIndex: 1,
          hints: [
            "It is a three-digit article number from the 1919 peace treaty signed in France.",
            "It provided the legal basis for demanding post-war reparations from Germany.",
          ],
          explanation:
            "Article 231 of the 1919 Treaty of Versailles assigned responsibility for war damages to Germany and its allies, sparking a century-long historical debate over war guilt.",
        },
        {
          id: "causes-of-ww1-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "weighing-ww1-causes",
          question:
            "Which statement best explains why historians distinguish **long-term conditions** from a **short-term flashpoint**?",
          options: [
            "Short-term flashpoints happened in the 1870s whereas long-term causes occurred in July 1914",
            "Long-term conditions explain why war never lasted beyond one month in 1914",
            "Long-term conditions explain why Europe was explosive; the flashpoint explains when it ignited",
            "Short-term flashpoints make long-term alliances and militarism completely irrelevant to essays",
          ],
          answerIndex: 2,
          hints: [
            "Think back to the warehouse filled with gunpowder barrels and a single lit match.",
            "One explains the *timing* of August 1914; the other explains the *scale* of a continent-wide explosion.",
          ],
          explanation:
            "Long-term structural causes (MAIN, ideology, territorial disputes) explain why Europe was volatile enough for global war, while the Sarajevo flashpoint explains the immediate timing of July–August 1914.",
        },
        {
          id: "causes-of-ww1-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "Which country did Germany declare war on FIRST on 1 August 1914?",
          answer: {
            type: "text",
            accept: ["Russia", "Imperial Russia"],
            display: "Russia",
          },
          traps: [
            {
              spec: { type: "text", accept: ["France"] },
              feedback: "Germany declared war on France two days later (3 August) — on 1 August it declared war on the eastern power that had just mobilised.",
            },
            {
              spec: { type: "text", accept: ["Serbia"] },
              feedback: "Austria-Hungary declared war on Serbia (28 July) — Germany's first declaration on 1 August was against Serbia's giant protector.",
            },
          ],
          hints: [
            "This eastern Great Power had just ordered full mobilisation on 30 July.",
            "Its ruler was Tsar Nicholas II, protector of Serbia.",
          ],
          solution: [
            "Germany declared war on **Russia** on **1 August 1914**, then on France on 3 August.",
          ],
        },
        {
          id: "causes-of-ww1-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "Explain two reasons why Austria-Hungary reacted so aggressively to the Sarajevo assassination of 28 June 1914.",
          marks: 2,
          hints: [
            "First, think about what Slavic nationalism and an expanded Serbia threatened inside the Habsburg Empire.",
            "Second, think about what Germany promised Vienna on 5 July 1914.",
          ],
          modelAnswer:
            "First, Habsburg leaders feared that rising Serbian nationalism — boosted by Serbia doubling in size during the 1912–13 Balkan Wars — would inspire Slavic peoples to tear the multi-ethnic empire apart unless Serbia was crushed permanently. Second, Germany's 'blank cheque' on 5 July gave Vienna unconditional backing, making Austria-Hungary confident enough to send an unacceptable ultimatum despite the risk of Russian intervention.",
          markScheme: [
            {
              point: "Fear that Serbian / Slavic nationalism would break apart the multi-ethnic Habsburg Empire",
              keywords: ["slavic", "habsburg", "multi-ethnic", "break apart", "tear", "balkan wars", "doubling"],
            },
            {
              point: "Germany's 'blank cheque' (5 July) gave unconditional backing against Russia",
              keywords: ["blank cheque", "blank check", "5 july", "unconditional", "germany"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "sarajevo-july-crisis",
          question:
            "Trace the chain reaction between 28 July and 4 August 1914 that turned a local Balkan war into a general European war.",
          marks: 3,
          hints: [
            "Start with Russia's response on 30 July after Austria-Hungary declared war on Serbia.",
            "Explain Germany's Schlieffen Plan declarations on 1 and 3 August.",
            "Finish with Germany's invasion of Belgium and Britain's entry on 4 August.",
          ],
          modelAnswer:
            "After Austria-Hungary declared war on Serbia, Tsar Nicholas II ordered full Russian mobilisation on 30 July to protect fellow Slavs and avoid another 1908 humiliation. Treating mobilisation as an act of war under its rigid Schlieffen Plan timetable, Germany declared war on Russia on 1 August and on Russia's ally France on 3 August. When German armies crossed into neutral Belgium on 4 August — breaking the 1839 Treaty of London — Britain declared war on Germany that night.",
          markScheme: [
            {
              point: "Russia ordered full mobilisation (30 July) to back Serbia",
              keywords: ["russia", "russian", "mobilisation", "mobilization", "30 july", "tsar"],
            },
            {
              point: "Germany triggered the Schlieffen Plan, declaring war on Russia (1 Aug) and France (3 Aug)",
              keywords: ["schlieffen", "1 august", "3 august", "france"],
            },
            {
              point: "Germany invaded neutral Belgium, triggering Britain's declaration of war (4 August / 1839 Treaty)",
              keywords: ["belgium", "neutral", "1839", "britain"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "weighing-ww1-causes",
          question:
            "Compare the **Fischer Thesis** (1961) with Christopher Clark's ***Sleepwalkers*** (2012) interpretation of who caused the First World War.",
          marks: 4,
          hints: [
            "State Fritz Fischer's core claim (German prime guilt / preventive war).",
            "Give at least one piece of evidence Fischer uses (e.g. *Weltpolitik*, 1912 War Council, blank cheque).",
            "State Christopher Clark's core claim (shared blame / mutual miscalculation).",
            "Give evidence Clark uses (Serbia, Austria-Hungary, Russia, France or Britain's actions).",
          ],
          modelAnswer:
            "Fritz Fischer argued that German elites bore primary responsibility, deliberately pursuing European hegemony and welcoming a preventive war before Russia finished rearming. He supported this using *Weltpolitik*, the December 1912 War Council and Germany's reckless 5 July 'blank cheque'. By contrast, Christopher Clark argued that no single villain engineered global war; instead every Great Power stumbled blindly through mutual fear and miscalculation. Clark pointed to Black Hand terrorism, Vienna's intentionally harsh ultimatum, Russia's full mobilisation on 30 July and British diplomatic ambiguity to show responsibility was widely shared.",
          markScheme: [
            {
              point: "Fischer argues Germany bore primary responsibility / sought hegemony or preventive war",
              keywords: ["primary", "hegemony", "preventive", "deliberately", "expansion"],
            },
            {
              point: "Fischer evidence: Weltpolitik / 1912 War Council / blank cheque / Schlieffen invasion",
              keywords: ["weltpolitik", "1912", "war council", "blank cheque", "schlieffen"],
            },
            {
              point: "Clark argues shared responsibility / mutual fear and miscalculation across powers",
              keywords: ["shared", "miscalculation", "all", "no single", "stumbled"],
            },
            {
              point: "Clark evidence: Black Hand / Austrian ultimatum / Russian mobilisation / French or British role",
              keywords: ["black hand", "ultimatum", "mobilisation", "mobilization", "ambiguity", "vienna"],
            },
          ],
        },
        {
          id: "causes-of-ww1-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "weighing-ww1-causes",
          question:
            "'The assassination of Archduke Franz Ferdinand was the main cause of the First World War.' How far do you agree with this statement? Write a balanced essay response with a clear judgement.",
          marks: 6,
          hints: [
            "Agree partially: explain why Sarajevo (28 June 1914) was the vital short-term flashpoint that triggered Vienna's ultimatum.",
            "Challenge with Alliances: explain how the rival blocs spread a Balkan quarrel across Europe.",
            "Challenge with Militarism & Territory: cite Dreadnoughts / Schlieffen Plan / Belgian neutrality / Bosnian Crisis.",
            "Challenge with Nationalism / Ideology: explain Slavic nationalism and *Weltpolitik*.",
            "Show a clear **link** between causes and finish with a weighed **judgement**.",
          ],
          modelAnswer:
            "I largely disagree with the statement: although Sarajevo on 28 June 1914 was the indispensable short-term flashpoint that gave Austria-Hungary its pretext to crush Serbia, it would never have sparked a world war without deeper long-term conditions. First, the Alliance System divided Europe into the Triple Alliance and Triple Entente, turning a local Balkan murder into a test of bloc credibility backed by Germany's 5 July 'blank cheque' and Russian support for Serbia. Second, Militarism — above all Germany's rigid Schlieffen Plan and the Anglo-German Dreadnought race — removed diplomatic breathing room, converting Russian full mobilisation on 30 July into an immediate invasion of France and neutral Belgium that brought Britain in on 4 August. Third, rival ideologies like German *Weltpolitik* and explosive Slavic nationalism (heightened by the 1908 Bosnian Crisis and 1912–13 Balkan Wars) had already stripped away mutual trust. Crucially, these causes interlocked: nationalism produced Princip's pistol, alliances spread the crisis, and militarist timetables accelerated it past stopping. Therefore, Sarajevo explains *when* war erupted, but long-term MAIN tensions — especially militarism and rival alliances — were far more fundamental in explaining *why* Europe exploded.",
          markScheme: [
            {
              point: "Role of Sarajevo as short-term trigger / flashpoint giving Vienna its pretext",
              keywords: ["flashpoint", "trigger", "spark", "pretext", "28 june"],
            },
            {
              point: "Role of Alliances (Triple Alliance / Triple Entente / blank cheque / Russia backing Serbia)",
              keywords: ["alliance", "triple entente", "triple alliance", "blank cheque"],
            },
            {
              point: "Role of Militarism (Schlieffen Plan / Dreadnoughts / rigid mobilisation timetable / Belgium)",
              keywords: ["militarism", "schlieffen", "dreadnought", "mobilisation", "belgium"],
            },
            {
              point: "Role of Nationalism, Territory or Ideology (Slavic nationalism / Weltpolitik / Bosnian Crisis / Balkan Wars)",
              keywords: ["nationalism", "weltpolitik", "bosnian", "balkan wars", "slavic", "alsace"],
            },
            {
              point: "Explicit causal link showing how factors interacted together",
              keywords: ["interlocked", "interacted", "combined", "accelerated", "link"],
            },
            {
              point: "Clear sustained judgement weighing long-term conditions against the short-term spark",
              keywords: ["therefore", "disagree", "fundamental", "explains when", "far more"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "causes-of-ww1-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "main-alliances-ideology",
      question:
        "Why did Chancellor Otto von Bismarck's dismissal by Kaiser Wilhelm II in 1890 represent a major long-term turning point toward 1914?",
      options: [
        "Wilhelm II dropped Bismarck's Russian treaty, allowing the 1894 Franco-Russian Alliance",
        "Bismarck had already launched the Schlieffen invasion of neutral Belgium in 1889",
        "Wilhelm II dismantled the German army and handed Alsace-Lorraine back to France",
        "Bismarck had signed the Triple Entente with Britain and France before retiring",
      ],
      answerIndex: 0,
      hints: [
        "Bismarck's golden rule of European diplomacy was simple: keep France isolated and NEVER let France ally with Russia.",
        "When Wilhelm II refused to renew the Reinsurance Treaty with Russia in 1890, who immediately approached St Petersburg?",
      ],
      explanation:
        "Bismarck carefully kept Russia linked to Berlin so France stayed isolated. After Wilhelm II dismissed him and let the Russian treaty lapse in 1890, France allied with Russia in 1894 — creating Germany's two-front encirclement nightmare.",
    },
    {
      id: "causes-of-ww1-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "militarism-territory",
      question:
        "During the 1911 Agadir Crisis, Britain's Chancellor David Lloyd George delivered the Mansion House speech warning Germany not to treat Britain 'as if she were of no account'. Why was this speech historically significant?",
      options: [
        "It announced Britain's immediate withdrawal from the 1904 Entente Cordiale",
        "It signalled Britain would back France militarily against German bullying",
        "It promised Germany complete control of neutral Belgium in exchange for Morocco",
        "It triggered Austria-Hungary's formal annexation of Bosnia-Herzegovina",
      ],
      answerIndex: 1,
      hints: [
        "Lloyd George had previously been seen as a peaceful, pro-reform politician — so his sharp warning shocked Berlin.",
        "Think about how this crisis reshaped Anglo-French military co-operation after 1911.",
      ],
      explanation:
        "Even a leading British radical politician warned Germany firmly off Agadir. Germany backed down humiliated, while Britain and France moved into secret naval and military planning.",
    },
    {
      id: "causes-of-ww1-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sarajevo-july-crisis",
      question:
        "In late July 1914, Kaiser Wilhelm II and Tsar Nicholas II exchanged frantic personal telegrams trying to halt escalation — what famous two-word nickname do historians give these messages? (Hint: they were cousins!)",
      answer: {
        type: "text",
        accept: ["Willy-Nicky", "Willy Nicky", "Willy-Nicky telegrams", "Willy Nicky telegrams"],
        display: "Willy-Nicky",
      },
      hints: [
        "Shorten the first names 'Wilhelm' and 'Nicholas' into family nicknames.",
        "Combine them with a hyphen: _____-_____.",
      ],
      solution: [
        "The **Willy-Nicky** telegrams (29 July–1 August 1914) between Kaiser Wilhelm II and Tsar Nicholas II show both cousins hesitating at the brink — yet powerless to halt their own generals' mobilisation timetables.",
      ],
    },
    {
      id: "causes-of-ww1-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "weighing-ww1-causes",
      question:
        "Historians note that Germany's military leadership feared Russian army modernisation would be complete by 1917. How does this detail strengthen the **Fischer Thesis**?",
      options: [
        "It proves Russia invaded Berlin in July 1914 before Austria declared war on Serbia",
        "It shows German generals preferred waiting peacefully until 1920 to negotiate treaties",
        "It suggests Berlin viewed summer 1914 as its best window for a preventive war",
        "It demonstrates that Britain secretly funded Russia to build dreadnoughts in Bosnia",
      ],
      answerIndex: 2,
      hints: [
        "Ask yourself: if your generals believe a rival will become unbeatable in three years, how does that affect your choices during a crisis today?",
        "Connect 'better now than 1917' to the concept of a *preventive war*.",
      ],
      explanation:
        "German Chief of Staff Helmuth von Moltke feared that by 1917 Russia's expanded railways and army would defeat the Schlieffen Plan — supporting Fischer's claim that Berlin deliberately accepted war in 1914 as a 'now or never' preventive strike.",
    },
    {
      id: "causes-of-ww1-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "militarism-territory",
      question:
        "What was the name of France's pre-1914 offensive war plan designed to charge straight across the border to recapture Alsace-Lorraine?",
      answer: {
        type: "text",
        accept: ["Plan XVII", "Plan 17"],
        display: "Plan XVII",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Schlieffen Plan", "Schlieffen"] },
          feedback: "The Schlieffen Plan was Germany's war plan — France's offensive plan had a Roman numeral (17).",
        },
      ],
      hints: [
        "It is named 'Plan' followed by the Roman numeral for seventeen.",
        "In Roman numerals, 17 is XVII.",
      ],
      solution: [
        "France's **Plan XVII** emphasised all-out offensive spirit (*élan*) to storm Alsace-Lorraine — showing that offensive militarism existed on both sides, not only in Germany.",
      ],
    },
    {
      id: "causes-of-ww1-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "weighing-ww1-causes",
      question:
        "Why might a historian argue that **Britain** bears a share of responsibility for the July Crisis escalating into war, even though Britain was the last major Great Power to declare war?",
      marks: 3,
      hints: [
        "Think about what Sir Edward Grey refused to say clearly to Germany before 4 August.",
        "Consider Britain's earlier naval race and secret military conversations with France after 1905–1911.",
        "Link this evidence to Christopher Clark's *Sleepwalkers* argument.",
      ],
      modelAnswer:
        "Critics argue that Foreign Secretary Sir Edward Grey failed to warn Berlin unambiguously in late July that Britain would fight if France were attacked, encouraging German leaders to gamble wrongly on British neutrality. In addition, Britain's fierce naval competition and secret Anglo-French military talks after the Moroccan Crises had already hardened Europe's two-bloc division while giving France confidence of British support. This ambiguity supports Christopher Clark's *Sleepwalkers* view that misread diplomatic signals across multiple capitals worsened the crisis.",
      markScheme: [
        {
          point: "Sir Edward Grey's diplomatic ambiguity / failure to warn Germany clearly encouraged Berlin's gamble on British neutrality",
          keywords: ["grey", "ambiguity", "ambiguous", "warn", "neutrality", "gamble"],
        },
        {
          point: "Earlier naval rivalry / secret Anglo-French talks hardened European blocs",
          keywords: ["naval", "secret", "talks", "moroccan", "blocs"],
        },
        {
          point: "Links to shared responsibility / Sleepwalkers misread signals",
          keywords: ["sleepwalkers", "clark", "signals", "shared", "miscalculation"],
        },
      ],
    },
    {
      id: "causes-of-ww1-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sarajevo-july-crisis",
      question:
        "Evaluate the counterfactual: *'If Germany had withheld its blank cheque on 5 July 1914, the First World War would have been avoided.'* Explain both sides before reaching a judgement.",
      marks: 4,
      hints: [
        "Argument YES: show how Vienna feared confronting Russia alone and needed Berlin's backing to issue the harsh ultimatum.",
        "Argument NO: show how deep long-term MAIN tensions, Balkan instability and German fear of 1917 Russian rearmament still remained.",
        "Finish with a nuanced judgement distinguishing *delaying* war from *permanently preventing* it.",
      ],
      modelAnswer:
        "Without Berlin's unconditional guarantee, Austro-Hungarian ministers — especially sceptical Hungarian Prime Minister Tisza — would almost certainly have settled for diplomatic concessions from Belgrade rather than risking a solitary war against Russia, defusing the immediate July Crisis. However, withholding support in 1914 would not have erased the underlying gunpowder: Slavic nationalism still threatened the Habsburg Empire, the Schlieffen Plan remained rigid, and German generals still dreaded Russia completing its military modernisation by 1917. Therefore, withholding the blank cheque would likely have prevented war in August 1914, yet another Balkan flashpoint could still have ignited Europe within a few years unless Great Powers also reformed their alliances and arms build-up.",
      markScheme: [
        {
          point: "For: Vienna dared not confront Russia alone and likely would have accepted diplomacy/concessions",
          keywords: ["alone", "russia", "concessions", "diplomatic", "defusing", "hesitated"],
        },
        {
          point: "Against: Long-term MAIN/Balkan pressures still persisted (Slavic nationalism / Schlieffen / 1917 Russian rearmament)",
          keywords: ["underlying", "slavic", "schlieffen", "1917", "rearmament", "gunpowder"],
        },
        {
          point: "Another flashpoint could still have triggered conflict later",
          keywords: ["another flashpoint", "later", "within a few years", "still have"],
        },
        {
          point: "Nuanced judgement distinguishing preventing August 1914 from permanent peace",
          keywords: ["therefore", "august 1914", "delay", "unless", "likely"],
        },
      ],
    },
    {
      id: "causes-of-ww1-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "weighing-ww1-causes",
      question:
        "Compare the relative importance of **Ideology** and **Territory** in driving Europe toward war by 1914. Which played the bigger role, and how did they reinforce each other?",
      marks: 4,
      hints: [
        "Cite concrete **territorial** disputes (Alsace-Lorraine, Morocco, Bosnia-Herzegovina, Balkan Wars).",
        "Cite concrete **ideological** drivers (*Weltpolitik*, Social Darwinism / Great Power honour, Slavic nationalism / Pan-Slavism).",
        "Explain how ideology and territory reinforced each other (land became a symbol of national honour and survival).",
        "Conclude with a supported judgement on which played the bigger role.",
      ],
      modelAnswer:
        "Territorial rivalries created concrete, unresolvable flashzones across Europe — notably France's bitterness over losing Alsace-Lorraine in 1871, colonial friction in Morocco (1905/1911), and Austria-Hungary's 1908 annexation of Bosnia contested by Serbia. Yet ideology was what made those border disputes deadly: German *Weltpolitik* demanded imperial expansion, British ideology prized naval supremacy, and Pan-Slavic nationalism convinced both Serbs and Habsburgs that compromise meant national extinction. The two constantly reinforced each other, because contested provinces like Bosnia and Alsace-Lorraine were valued far more as symbols of ideological honour than for their farmland alone. Overall, ideology played the slightly larger role because it transformed negotiable border quarrels into questions of survival and prestige where backing down became unthinkable.",
      markScheme: [
        {
          point: "Specific territorial evidence (Alsace-Lorraine / Morocco / Bosnia / Balkans)",
          keywords: ["alsace", "morocco", "bosnia", "flashzones", "provinces"],
        },
        {
          point: "Specific ideological evidence (Weltpolitik / Pan-Slavism / nationalism / honour / naval supremacy)",
          keywords: ["weltpolitik", "pan-slav", "honour", "honor", "supremacy", "nationalism"],
        },
        {
          point: "Shows how ideology and territory reinforced each other (land symbolising prestige/survival)",
          keywords: ["reinforced", "symbols", "prestige", "survival", "extinction"],
        },
        {
          point: "Clear comparative judgement weighing which played the bigger role",
          keywords: ["overall", "larger role", "bigger role", "negotiable", "unthinkable"],
        },
      ],
    },
  ],
};
