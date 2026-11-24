import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "indian-independence-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "british-raj-amritsar",
      question:
        "In which year did the British Crown begin direct rule over India (the British Raj) following the 1857 Rebellion?",
      answer: { type: "number", value: 1858, display: "1858" },
      traps: [
        {
          spec: { type: "number", value: 1857 },
          feedback: "1857 was the year of the Indian Rebellion; direct British Crown rule (the Government of India Act) began the year after.",
        },
      ],
      hints: [
        "It happened one year after the 1857 Indian Uprising ended East India Company rule.",
      ],
      solution: [
        "The Government of India Act 1858 transferred power from the East India Company directly to the British Crown.",
      ],
    },
    {
      id: "indian-independence-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "british-raj-amritsar",
      question:
        "Which event on 13 April 1919 shattered British moral authority in India and turned moderate nationalists toward mass resistance?",
      options: [
        "The Jallianwala Bagh Massacre in Amritsar",
        "The signing of the Gandhi–Irwin Pact in Delhi",
        "The drawing of the Radcliffe Line across Bengal",
        "The launch of the Quit India campaign in Bombay",
      ],
      answerIndex: 0,
      hints: [
        "Brigadier-General Reginald Dyer ordered troops to fire without warning on unarmed Baisakhi festival-goers.",
      ],
      explanation:
        "The Jallianwala Bagh (Amritsar) Massacre on 13 April 1919 killed 379 (official) to over 1,000 (Congress estimate) unarmed civilians—shattering faith in British justice, especially after British elites raised money for Dyer.",
    },
    {
      id: "indian-independence-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "gandhi-satyagraha-salt-march",
      question:
        "Give the Sanskrit-derived term championed by Mahatma Gandhi meaning 'truth-force' or disciplined non-violent civil disobedience.",
      answer: {
        type: "text",
        accept: ["Satyagraha", "satyagraha"],
        display: "Satyagraha",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Swadeshi", "Khadi", "Ahimsa"] },
          feedback: "Close—Ahimsa means non-violence and Swadeshi means economic self-reliance; Gandhi's term for 'truth-force' begins with Sat-.",
        },
      ],
      hints: [
        "It combines *satya* (truth) and *agraha* (firmness).",
        "It begins with the letter S.",
      ],
      solution: [
        "**Satyagraha** ('truth-force') meant openly disobeying unjust laws peacefully while refusing to retaliate with violence.",
      ],
    },
    {
      id: "indian-independence-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "gandhi-satyagraha-salt-march",
      question:
        "In which year did Mahatma Gandhi lead the 240-mile Dandi Salt March?",
      answer: { type: "number", value: 1930, display: "1930" },
      traps: [
        {
          spec: { type: "number", value: 1920 },
          feedback: "1920 was the start of the Non-Cooperation Movement; the Dandi Salt March happened ten years later.",
        },
        {
          spec: { type: "number", value: 1942 },
          feedback: "1942 was the Quit India Movement; the Salt March took place twelve years earlier.",
        },
      ],
      hints: [
        "It followed Congress's December 1929 *Purna Swaraj* declaration.",
        "The march ran from 12 March to 6 April of this year.",
      ],
      solution: [
        "Gandhi led the 240-mile, 24-day Dandi Salt March from 12 March to 6 April **1930**.",
      ],
    },
    {
      id: "indian-independence-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "gandhi-satyagraha-salt-march",
      question:
        "Why did Gandhi urge Indians to spin and wear hand-woven *khadi* cloth during the 1920s and 1930s?",
      options: [
        "To increase tax revenue for Lancashire textile factories",
        "To hurt British cloth exports while uniting Indians in self-reliance",
        "To prepare uniform coats for the armed Indian National Army",
        "To replace salt production along the Gujarat coastline",
      ],
      answerIndex: 1,
      hints: [
        "Think about the economic boycott (*Swadeshi*) targeting Britain's cotton mills.",
        "Wearing simple white hand-spun cloth also bridged class and caste divides.",
      ],
      explanation:
        "Promoting *khadi* combined direct economic pressure on Lancashire textile imports with a powerful visual symbol of Indian unity and self-reliance (*Swadeshi*).",
    },
    {
      id: "indian-independence-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "quit-india-ww2",
      question:
        "Name the radical Indian nationalist who rejected non-violence and led the Indian National Army (INA) alongside Japan during WWII.",
      answer: {
        type: "text",
        accept: ["Subhas Chandra Bose", "Bose", "Netaji Subhas Chandra Bose", "Subhash Chandra Bose"],
        display: "Subhas Chandra Bose",
      },
      hints: [
        "He was popularly known as *Netaji* ('Respected Leader').",
        "His surname starts with B.",
      ],
      solution: [
        "Subhas Chandra Bose led the INA (*Azad Hind Fauj*). Although defeated militarily in 1944, the 1945–46 Red Fort INA trials sparked massive nationalist solidarity.",
      ],
    },
    {
      id: "indian-independence-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "quit-india-ww2",
      question:
        "Name the British Labour Prime Minister elected in July 1945 whose government committed to ending British rule in India.",
      answer: {
        type: "text",
        accept: ["Clement Attlee", "Attlee", "Clement Richard Attlee"],
        display: "Clement Attlee",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Winston Churchill", "Churchill"] },
          feedback: "Churchill staunchly opposed Indian independence and lost the July 1945 general election to Labour.",
        },
      ],
      hints: [
        "His Labour government prioritised domestic rebuilding (including the NHS) over costly empire.",
        "His surname starts with A.",
      ],
      solution: [
        "Clement Attlee led the Labour Party to victory in July 1945 and appointed Lord Mountbatten to oversee the transfer of power.",
      ],
    },
    {
      id: "indian-independence-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "independence-partition-1947",
      question:
        "Which two religiously mixed provinces were sliced in two by the hurried Radcliffe Line in August 1947?",
      options: [
        "Gujarat and Tamil Nadu",
        "Rajasthan and Mysore",
        "Punjab and Bengal",
        "Kerala and Assam",
      ],
      answerIndex: 2,
      hints: [
        "One lay in the northwest (bordering West Pakistan) and the other in the east (bordering East Pakistan, later Bangladesh).",
        "Both suffered catastrophic communal violence and refugee displacement.",
      ],
      explanation:
        "Sir Cyril Radcliffe was given barely five weeks to partition the mixed provinces of Punjab (creating West Pakistan) and Bengal (creating East Pakistan), displacing 10–15 million people.",
    },
    {
      id: "indian-independence-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "gandhi-satyagraha-salt-march",
      marks: 3,
      question:
        "Explain three reasons why Gandhi's 1930 coastal march placed British colonial authorities in a severe strategic dilemma.",
      hints: [
        "Mention why salt united ordinary Indians across class, gender, and region.",
        "Explain what happened if Britain did *nothing* vs if police *beat/arrested* peaceful marchers.",
        "Include the role of global press coverage (e.g. Dharasana).",
      ],
      modelAnswer:
        "First, targeting the colonial salt tax united poor villagers, urban citizens, and tens of thousands of women across India around an everyday necessity. Second, if Viceroy Irwin ignored open defiance at Dandi, British authority looked powerless. Third, when police arrested over 60,000 peaceful volunteers and beat unresisting demonstrators at Dharasana in front of global journalists like Webb Miller, worldwide outrage shattered British moral legitimacy.",
      markScheme: [
        {
          point: "Mass unity across class, gender, and regions over an everyday necessity (salt)",
          keywords: ["salt", "necessity", "everyday", "united", "women", "villag", "poor"],
        },
        {
          point: "Doing nothing made British law/authority appear weak and unenforceable",
          keywords: ["ignor", "powerless", "weak", "authority", "nothing", "defiance"],
        },
        {
          point: "Using arrests/police brutality (e.g. Dharasana / 60,000 jailed) provoked global press outrage and moral defeat",
          keywords: ["dharasana", "journalist", "press", "media", "global", "outrage", "moral", "60,000", "webb miller"],
        },
      ],
    },
    {
      id: "indian-independence-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "independence-partition-1947",
      marks: 3,
      question:
        "Identify three distinct factors beyond Gandhi's campaigns that forced Britain to withdraw in August 1947.",
      hints: [
        "Think about Britain's economy after WWII (sterling debt owed to India) and the July 1945 British election.",
        "Think about military unrest inside Indian armed forces (INA trials, Feb 1946 RIN Mutiny).",
        "Think about rising communal tension and fear of civil war (Jinnah / Direct Action Day).",
      ],
      modelAnswer:
        "First, the Second World War left Britain near bankruptcy, owing India roughly £1.3 billion in war debts and unable to fund colonial rule. Second, Clement Attlee's Labour government elected in July 1945 favoured decolonisation and domestic rebuilding such as the NHS. Third, mass protests over the INA trials and the February 1946 Royal Indian Navy Mutiny proved Britain could no longer trust Indian troops to enforce the Raj, while escalating communal riots threatened civil war.",
      markScheme: [
        {
          point: "WWII economic exhaustion / debt (~£1.3bn owed to India)",
          keywords: ["wwii", "second world war", "bankrupt", "debt", "1.3", "afford", "exhaust"],
        },
        {
          point: "Clement Attlee's July 1945 Labour government favouring decolonisation / domestic welfare",
          keywords: ["attlee", "labour", "1945", "election", "nhs", "decolonis"],
        },
        {
          point: "Military unrest (INA trials / Subhas Chandra Bose / 1946 RIN Navy Mutiny) OR escalating communal crisis/civil war threat",
          keywords: ["ina", "bose", "mutiny", "navy", "rin", "troops", "communal", "civil war", "jinnah"],
        },
      ],
    },
  ],
  papers: [
    {
      id: "indian-independence-p1",
      title: "Practice Paper 1: British Raj, Amritsar (1919) & Satyagraha (1920–1935)",
      questions: [
        {
          id: "indian-independence-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "british-raj-amritsar",
          question:
            "In which year was the Indian National Congress (INC) founded?",
          answer: { type: "number", value: 1885, display: "1885" },
          traps: [
            {
              spec: { type: "number", value: 1906 },
              feedback: "1906 was when the All-India Muslim League was founded; Congress was founded 21 years earlier.",
            },
          ],
          hints: [
            "It was founded in the late nineteenth century, 21 years before the Muslim League (1906).",
          ],
          solution: [
            "The Indian National Congress was founded in **1885**.",
          ],
        },
        {
          id: "indian-independence-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "british-raj-amritsar",
          question:
            "In which year was the All-India Muslim League founded in Dhaka?",
          answer: { type: "number", value: 1906, display: "1906" },
          hints: [
            "It was founded in the first decade of the twentieth century, 21 years after the INC (1885).",
          ],
          solution: [
            "The All-India Muslim League was founded in **1906** to represent Muslim political interests.",
          ],
        },
        {
          id: "indian-independence-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "british-raj-amritsar",
          question:
            "Approximately how many Indian soldiers and labourers served the British Empire during the First World War (1914–1918)?",
          options: [
            "Around 150,000",
            "Around 500,000",
            "Over 1.3 million",
            "Over 6.5 million",
          ],
          answerIndex: 2,
          hints: [
            "Roughly 74,000 Indian soldiers lost their lives fighting across Europe, East Africa, and the Middle East.",
            "During WWII (1939–45), the figure rose even higher to over 2.5 million.",
          ],
          explanation:
            "Over 1.3 million Indians served Britain during WWI, generating strong expectations of meaningful post-war self-government that made the 1919 Rowlatt Acts feel like a bitter betrayal.",
        },
        {
          id: "indian-independence-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "british-raj-amritsar",
          question:
            "Name the repressive March 1919 colonial laws that allowed British police in India to imprison suspected nationalists without trial.",
          answer: {
            type: "text",
            accept: ["Rowlatt Acts", "The Rowlatt Acts", "Rowlatt Act", "The Rowlatt Act"],
            display: "Rowlatt Acts",
          },
          hints: [
            "Named after the British judge Sir Sidney Rowlatt who chaired the committee.",
            "Starts with R.",
          ],
          solution: [
            "The **Rowlatt Acts** (March 1919) extended wartime detention without trial and censorship into peacetime, triggering protests across Punjab.",
          ],
        },
        {
          id: "indian-independence-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "british-raj-amritsar",
          question:
            "Name the British Brigadier-General who ordered troops to open fire without warning on unarmed civilians at Jallianwala Bagh on 13 April 1919.",
          answer: {
            type: "text",
            accept: ["Reginald Dyer", "Dyer", "General Dyer", "Brigadier-General Reginald Dyer", "Brigadier General Reginald Dyer"],
            display: "Reginald Dyer",
          },
          hints: [
            "His surname starts with D; he testified before the Hunter Commission that he sought a 'moral effect' across Punjab.",
            "He was later forced to resign, yet supporters in Britain raised a large public fund for him.",
          ],
          solution: [
            "Brigadier-General **Reginald Dyer** blocked the narrow entrance to Jallianwala Bagh and ordered ~1,650 rounds fired into the unarmed crowd.",
          ],
        },
        {
          id: "indian-independence-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "british-raj-amritsar",
          question:
            "What happened when Nobel laureate Rabindranath Tagore learned of the 1919 Jallianwala Bagh Massacre?",
          options: [
            "He urged Indian soldiers to volunteer for British martial law patrols",
            "He supported the Hunter Commission's praise for Brigadier-General Dyer",
            "He drafted the 1919 Rowlatt Acts for the Imperial Legislative Council",
            "He renounced his British knighthood in protest against colonial violence",
          ],
          answerIndex: 3,
          hints: [
            "He wrote a famous letter to Viceroy Lord Chelmsford rejecting his colonial honour.",
            "His protest showed how Amritsar alienated even moderate Indian thinkers from British rule.",
          ],
          explanation:
            "Tagore's public renunciation of his knighthood symbolised how Amritsar alienated even moderate, internationally celebrated Indian thinkers from the British Raj.",
        },
        {
          id: "indian-independence-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "Name the hand-spun Indian cotton cloth promoted by Gandhi to boycott imported British textiles and foster Indian self-reliance.",
          answer: {
            type: "text",
            accept: ["khadi", "Khadi", "khaddar"],
            display: "khadi",
          },
          hints: [
            "It was spun on the traditional spinning wheel (*charkha*).",
            "Five-letter word starting with K.",
          ],
          solution: [
            "Wearing **khadi** directly reduced British Lancashire textile imports while serving as a unifying badge of *Swadeshi* (self-reliance).",
          ],
        },
        {
          id: "indian-independence-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "Name the town where an angry crowd burned a police station in February 1922, prompting Gandhi to suspend the Non-Cooperation Movement.",
          answer: {
            type: "text",
            accept: ["Chauri Chaura", "Chauri-Chaura"],
            display: "Chauri Chaura",
          },
          hints: [
            "Twenty-two policemen were killed in this violent clash in Uttar Pradesh.",
            "A two-word name starting with C... C...",
          ],
          solution: [
            "Following the violence at **Chauri Chaura** (February 1922), Gandhi halted Non-Cooperation to uphold strict *Ahimsa* (non-violence).",
          ],
        },
        {
          id: "indian-independence-p1-q09",
          kind: "short",
          difficulty: "warmup",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "How many days did Gandhi's 240-mile march from Sabarmati Ashram to Dandi last (12 March – 5 April 1930, breaking the salt law on 6 April)?",
          answer: { type: "number", value: 24, display: "24 days" },
          traps: [
            {
              spec: { type: "number", value: 240 },
              feedback: "240 was the approximate number of *miles* walked; the march lasted 24 days (averaging ~10 miles per day).",
            },
          ],
          hints: [
            "Gandhi averaged roughly 10 miles per day across 240 miles.",
          ],
          solution: [
            "From 12 March to 6 April 1930, the Dandi Salt March lasted **24 days**.",
          ],
        },
        {
          id: "indian-independence-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "Which prominent Indian woman leader stepped forward after Gandhi's arrest in May 1930 to lead peaceful volunteers at the Dharasana Salt Works?",
          options: [
            "Sarojini Naidu",
            "Indira Gandhi",
            "Queen Victoria",
            "Rosa Parks",
          ],
          answerIndex: 0,
          hints: [
            "She was a celebrated poet, first Indian woman President of Congress, and close colleague of Gandhi.",
            "Her initials are S.N.",
          ],
          explanation:
            "Sarojini Naidu (alongside tens of thousands of Indian women such as Kamaladevi Chattopadhyay) played a vital leadership role in the 1930 Salt Satyagraha, leading the disciplined raid at Dharasana.",
        },
        {
          id: "indian-independence-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "In which year did the Indian National Congress declare *Purna Swaraj* (Complete Independence) at its Lahore session under Jawaharlal Nehru?",
          answer: { type: "number", value: 1929, display: "1929" },
          traps: [
            {
              spec: { type: "number", value: 1947 },
              feedback: "1947 was when independence was achieved; Congress formally *declared* Purna Swaraj as its goal in December 1929.",
            },
          ],
          hints: [
            "It took place in December of the year right before the 1930 Salt March.",
            "26 January 1930 was then celebrated nationwide as the first symbolic Independence Day.",
          ],
          solution: [
            "Congress passed the *Purna Swaraj* resolution at Lahore in December **1929** (and celebrated 26 January 1930 as Independence Day).",
          ],
        },
        {
          id: "indian-independence-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "gandhi-satyagraha-salt-march",
          question:
            "What happened immediately following the 1930 Salt March when Viceroy Lord Irwin signed the March 1931 Gandhi–Irwin Pact?",
          options: [
            "Britain transferred control of the Indian army directly to Congress ministers",
            "Congress permanently abandoned its demand for complete independence from Britain",
            "Sir Cyril Radcliffe was appointed to draw the border between Punjab and Bengal",
            "Peaceful prisoners were freed, coastal salt-making allowed, and Gandhi attended London talks",
          ],
          answerIndex: 3,
          hints: [
            "Gandhi suspended Civil Disobedience temporarily in exchange for specific concessions and an invitation to the Second Round Table Conference.",
            "Think about which concessions directly addressed the 1930 Salt Satyagraha prisoners and coastal salt collection.",
          ],
          explanation:
            "Under the 1931 Gandhi–Irwin Pact, Britain released non-violent political prisoners, allowed coastal residents to make salt for personal use, and invited Gandhi to the London Round Table Conference as an equal negotiator.",
        },
        {
          id: "indian-independence-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "british-raj-amritsar",
          marks: 4,
          question:
            "Explain how WWI service, colonial repression, and events in Punjab during 1919 reshaped the Indian freedom struggle.",
          hints: [
            "Mention the 1.3 million Indians who served in WWI and expected meaningful self-government.",
            "Explain the betrayal of the March 1919 Rowlatt Acts (detention without trial).",
            "Detail the 13 April Jallianwala Bagh shooting by General Dyer and British sympathy/fundraising afterwards.",
            "Conclude with the impact: moderates like Tagore and Gandhi turned from polite cooperation to mass protest.",
          ],
          modelAnswer:
            "Over 1.3 million Indian soldiers served Britain in the First World War, raising hopes of genuine self-rule. Instead, Britain passed the March 1919 Rowlatt Acts permitting detention without trial and censorship. When peaceful families gathered at Jallianwala Bagh in Amritsar on 13 April, Brigadier-General Dyer blocked the exit and ordered troops to fire without warning, killing 379 (British figure) to over 1,000 (Congress estimate). Public British fundraising for Dyer shattered faith in imperial justice—leading Tagore to renounce his knighthood and Gandhi to launch mass Non-Cooperation.",
          markScheme: [
            {
              point: "WWI Indian sacrifice (~1.3 million troops) raising expectations of self-government",
              keywords: ["1.3", "million", "soldiers", "troops", "self-rule", "self-government", "expect"],
            },
            {
              point: "March 1919 Rowlatt Acts allowing imprisonment without trial / censorship",
              keywords: ["rowlatt", "without trial", "detention", "censorship"],
            },
            {
              point: "Amritsar / Jallianwala Bagh shooting by General Dyer without warning (379–1,000+ killed)",
              keywords: ["amritsar", "jallianwala", "dyer", "unarmed", "379", "1,000"],
            },
            {
              point: "Shift from elite cooperation to mass protest (Tagore returning knighthood / British praise for Dyer / 1920 Non-Cooperation)",
              keywords: ["tagore", "knighthood", "fund", "non-cooperation", "mass", "gandhi", "legitimacy"],
            },
          ],
        },
        {
          id: "indian-independence-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "gandhi-satyagraha-salt-march",
          marks: 4,
          question:
            "Describe how Mahatma Gandhi's methods of peaceful civil resistance operated between 1920 and 1931, using specific historical examples.",
          hints: [
            "Define *Satyagraha* ('truth-force') and strict *Ahimsa* (citing Chauri Chaura 1922).",
            "Explain *Swadeshi* economic boycott of British textiles and hand-spun *khadi*.",
            "Cite the 240-mile 1930 Dandi Salt March and mass participation (60,000+ jailed, women, Dharasana).",
          ],
          modelAnswer:
            "Gandhi's philosophy of Satyagraha ('truth-force') meant openly disobeying unjust laws while upholding strict non-violence (Ahimsa)—proven when he halted the 1920–22 Non-Cooperation Movement after protesters killed policemen at Chauri Chaura. Economically, Swadeshi boycotts rejected imported British cloth in favour of hand-spun khadi, hurting Lancashire mills while uniting rich and poor. In 1930, Gandhi walked 240 miles to Dandi to defy the colonial salt monopoly; over 60,000 Indians—including thousands of women—were jailed, and police beatings of unresisting volunteers at Dharasana sparked global outrage leading to the 1931 Gandhi–Irwin Pact.",
          markScheme: [
            {
              point: "Defines Satyagraha ('truth-force') and strict non-violence / Chauri Chaura (1922)",
              keywords: ["satyagraha", "truth-force", "ahimsa", "chauri chaura", "unjust"],
            },
            {
              point: "Economic boycott (*Swadeshi*) of British textiles / spinning *khadi* hurting Lancashire",
              keywords: ["khadi", "swadeshi", "boycott", "lancashire", "cloth", "spinning"],
            },
            {
              point: "1930 Dandi Salt March (240 miles / salt monopoly) mobilising masses and women",
              keywords: ["salt", "dandi", "240", "women", "60,000"],
            },
            {
              point: "Moral/media impact (Dharasana beatings / Webb Miller / 1931 Gandhi–Irwin Pact)",
              keywords: ["dharasana", "irwin", "press", "global", "outrage", "webb miller"],
            },
          ],
        },
        {
          id: "indian-independence-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "gandhi-satyagraha-salt-march",
          marks: 4,
          question:
            "Read this 1930 dispatch by American reporter Webb Miller at Dharasana: *'Not one of the marchers even raised an arm to fend off the blows... They went down like ten-pins.'* Evaluate how useful this eyewitness report is for a historian studying why Indian protest succeeded.",
          hints: [
            "Note its Nature, Origin, and Purpose: eyewitness American journalist wiring reports to global newspapers in May 1930.",
            "Explain its strengths: vivid direct proof of Satyagraha discipline and how global media exposed British brutality.",
            "Explain its limits: covers one incident in 1930—cannot explain why Britain still ruled for 17 more years or later WWII/military factors.",
          ],
          modelAnswer:
            "Webb Miller's dispatch is highly useful because, as an independent American journalist on the scene in May 1930, he provides credible contemporary proof of the extraordinary discipline of Satyagrahis—refusing to retaliate under lathi blows—and explains how global press coverage embarrassed Britain into the 1931 Gandhi–Irwin talks. However, historians must also recognise its limits: it captures a single dramatic protest in 1930 and cannot by itself explain Britain's remaining 17 years of rule, nor later decisive pressures like WWII debt, Attlee's 1945 Labour government, and the 1946 military mutiny.",
          markScheme: [
            {
              point: "Analyses provenance (independent American journalist on scene in May 1930 / global audience)",
              keywords: ["independent", "journalist", "global", "newspapers", "contemporary", "press"],
            },
            {
              point: "Explains usefulness for Satyagraha discipline and moral/diplomatic leverage over Britain",
              keywords: ["satyagraha", "discipline", "moral", "embarrass", "irwin", "brutality", "sympathy"],
            },
            {
              point: "Identifies limitation: covers only one moment in 1930 (Britain ruled 17 more years)",
              keywords: ["limit", "single", "one", "17", "1947", "alone", "however"],
            },
            {
              point: "Links to wider omitted factors needed to explain 1947 (WWII exhaustion / Attlee / military unrest)",
              keywords: ["wwii", "debt", "attlee", "labour", "mutiny", "ina", "bose"],
            },
          ],
        },
      ],
    },
    {
      id: "indian-independence-p2",
      title: "Practice Paper 2: Quit India (1942), Multiple Leaders & Partition (1947)",
      questions: [
        {
          id: "indian-independence-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "quit-india-ww2",
          question:
            "In which year did the All-India Muslim League pass the Lahore Resolution calling for autonomous/independent Muslim-majority states (Pakistan)?",
          answer: { type: "number", value: 1940, display: "1940" },
          traps: [
            {
              spec: { type: "number", value: 1906 },
              feedback: "1906 was when the Muslim League was founded; it passed the Lahore Resolution 34 years later during WWII.",
            },
          ],
          hints: [
            "It took place in March of the second year of the Second World War.",
          ],
          solution: [
            "The Muslim League adopted the Lahore Resolution in March **1940** under Muhammad Ali Jinnah.",
          ],
        },
        {
          id: "indian-independence-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "quit-india-ww2",
          question:
            "Name the slogan spoken by Mahatma Gandhi when launching the August 1942 Quit India Movement (three words).",
          answer: {
            type: "text",
            accept: ["Do or Die", "do or die"],
            display: "Do or Die",
          },
          hints: [
            "Gandhi urged Indians to either free India or die in the attempt.",
            "Three short words: D... or D...",
          ],
          solution: [
            "On 8 August 1942, Gandhi gave the famous call **'Do or Die'** (*Karo ya Maro*), demanding immediate British departure.",
          ],
        },
        {
          id: "indian-independence-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "quit-india-ww2",
          question:
            "Approximately how many Indian volunteer troops fought for the Allies during the Second World War (1939–1945)?",
          options: [
            "Around 250,000",
            "Around 750,000",
            "Over 9.0 million",
            "Over 2.5 million",
          ],
          answerIndex: 3,
          hints: [
            "It was the largest all-volunteer army in human history—almost double India's 1.3 million WWI contribution.",
            "Indian troops fought across North Africa, Italy, Malaya, and Burma during 1939–1945.",
          ],
          explanation:
            "Over 2.5 million Indian volunteers fought across North Africa, Italy, Malaya, and Burma—while Britain accumulated ~£1.3 billion in war debt owed to India.",
        },
        {
          id: "indian-independence-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "quit-india-ww2",
          question:
            "In which year did the Royal Indian Navy (RIN) Mutiny break out across Bombay and Karachi, warning London that Indian armed forces could no longer be relied upon?",
          answer: { type: "number", value: 1946, display: "1946" },
          traps: [
            {
              spec: { type: "number", value: 1942 },
              feedback: "1942 was Quit India; the RIN Mutiny happened in February of the year *after* WWII ended.",
            },
          ],
          hints: [
            "It took place in February, one year after WWII ended and one year before Independence.",
            "It happened shortly after the 1945–46 Red Fort INA trials sparked mass strikes.",
          ],
          solution: [
            "Over 20,000 Indian sailors mutinied in February **1946**, accelerating Britain's decision to send the Cabinet Mission and exit India.",
          ],
        },
        {
          id: "indian-independence-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "independence-partition-1947",
          question:
            "Name the leader of the All-India Muslim League who became Pakistan's first Governor-General in August 1947.",
          answer: {
            type: "text",
            accept: ["Muhammad Ali Jinnah", "Jinnah", "Mohammed Ali Jinnah", "M. A. Jinnah", "M A Jinnah"],
            display: "Muhammad Ali Jinnah",
          },
          hints: [
            "Known in Pakistan as *Quaid-e-Azam* ('Great Leader').",
            "His surname starts with J.",
          ],
          solution: [
            "**Muhammad Ali Jinnah** led the Muslim League to the creation of Pakistan on 14 August 1947.",
          ],
        },
        {
          id: "indian-independence-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "independence-partition-1947",
          question:
            "Name India's first Prime Minister, who delivered the famous 'Tryst with Destiny' speech on the night of 14–15 August 1947.",
          answer: {
            type: "text",
            accept: ["Jawaharlal Nehru", "Nehru", "Pandit Nehru", "Pandit Jawaharlal Nehru"],
            display: "Jawaharlal Nehru",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Gandhi", "Mahatma Gandhi"] },
              feedback: "Gandhi never held government office and spent 15 August 1947 fasting in Calcutta; his close Congress colleague became Prime Minister.",
            },
          ],
          hints: [
            "He presided over the 1929 Lahore Congress (*Purna Swaraj*) and championed a secular, united India.",
            "His surname starts with N.",
          ],
          solution: [
            "**Jawaharlal Nehru** became independent India's first Prime Minister on 15 August 1947.",
          ],
        },
        {
          id: "indian-independence-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "independence-partition-1947",
          question:
            "What happened on 16 August 1946 when Jinnah called for 'Direct Action Day' after the Cabinet Mission Plan broke down?",
          options: [
            "Britain announced a ten-year delay in granting Indian provincial autonomy",
            "Indian sailors launched the Royal Indian Navy strike in Bombay harbour",
            "Gandhi walked 240 miles to Dandi to boil sea salt in Gujarat",
            "Terrible communal riots killed thousands in Calcutta and spread across northern India",
          ],
          answerIndex: 3,
          hints: [
            "This tragedy is also known historically as the 'Great Calcutta Killings'.",
            "It convinced many political leaders that avoiding civil war meant accepting Partition.",
          ],
          explanation:
            "Direct Action Day (16 August 1946) degenerated into horrific communal violence killing over 4,000 in Calcutta within days and spreading to Bihar, Bengal, and Punjab—deepening the slide toward Partition.",
        },
        {
          id: "indian-independence-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "independence-partition-1947",
          question:
            "Name the British lawyer—who had never visited India—given roughly five weeks in 1947 to draw the Partition border dividing Punjab and Bengal.",
          answer: {
            type: "text",
            accept: ["Cyril Radcliffe", "Sir Cyril Radcliffe", "Radcliffe"],
            display: "Sir Cyril Radcliffe",
          },
          hints: [
            "The new international frontier was named the '____ Line' after him.",
            "His surname starts with R.",
          ],
          solution: [
            "**Sir Cyril Radcliffe** drew the Radcliffe Line in ~5 weeks using outdated maps, leaving millions stranded when published on 17 August 1947.",
          ],
        },
        {
          id: "indian-independence-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "independence-partition-1947",
          question:
            "By how many months did Lord Mountbatten bring Britain's withdrawal deadline forward—from June 1948 to August 1947?",
          answer: { type: "number", value: 10, display: "10 months" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Count from August 1947 to June 1948: Sep, Oct, Nov, Dec, Jan, Feb, Mar, Apr, May, Jun = 10 months.",
            },
          ],
          hints: [
            "Count the months between August 1947 and June 1948.",
            "September through June gives the exact number of months cut from the British schedule.",
          ],
          solution: [
            "Bringing departure from June 1948 to August 1947 cut **10 months** off Britain's original exit timetable.",
          ],
        },
        {
          id: "indian-independence-p2-q10",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "independence-partition-1947",
          question:
            "On which exact dates in August 1947 did Pakistan and India formally become independent sovereign nations?",
          options: [
            "Pakistan on 14 August and India on 15 August",
            "India on 1 August and Pakistan on 15 August",
            "Both nations together on 17 August 1947",
            "Pakistan on 6 April and India on 8 August",
          ],
          answerIndex: 0,
          hints: [
            "Mountbatten attended Karachi's transfer ceremony one day before midnight celebrations in New Delhi.",
          ],
          explanation:
            "Pakistan celebrates Independence Day on 14 August 1947 and India on 15 August 1947—while the Radcliffe Line border was not announced until two days later on 17 August.",
        },
        {
          id: "indian-independence-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "quit-india-ww2",
          question:
            "How many years elapsed between Gandhi's 1930 Dandi Salt March and Indian Independence in 1947?",
          answer: { type: "number", value: 17, display: "17 years" },
          hints: [
            "Subtract 1930 from 1947—this gap reminds historians that Satyagraha did not produce instant independence.",
            "Compute 1947 − 1930.",
          ],
          solution: [
            "1947 − 1930 = **17 years**, underscoring why WWII and 1945–46 shifts were also vital alongside Gandhi's 1930 breakthrough.",
          ],
        },
        {
          id: "indian-independence-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "quit-india-ww2",
          question:
            "Why did the 1945–46 Red Fort trials of three Indian National Army (INA) officers—one Hindu, one Muslim, one Sikh—backfire so dramatically on British authorities?",
          options: [
            "All three defendants escaped to Tokyo before the trial opened in Delhi",
            "Trying Hindu, Muslim, and Sikh officers together sparked mass cross-religious unity against the Raj",
            "The Indian National Congress demanded that Britain execute the INA officers immediately",
            "No Indian newspapers were permitted to print stories about the court hearings",
          ],
          answerIndex: 1,
          hints: [
            "British authorities hoped public trials would brand the INA as traitors—instead, the opposite happened.",
            "Remember the names Prem Sahgal, Shah Nawaz Khan, and Gurbaksh Singh Dhillon.",
          ],
          explanation:
            "Putting a Hindu, a Muslim, and a Sikh officer on trial together inside Delhi's symbolic Red Fort united Indians across religious lines in mass protests—and rattled British faith in the Indian Army's loyalty.",
        },
        {
          id: "indian-independence-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "quit-india-ww2",
          marks: 4,
          question:
            "Compare the roles and political aims of Jawaharlal Nehru, Muhammad Ali Jinnah, and Subhas Chandra Bose in the 1940s.",
          hints: [
            "State Nehru's role (secular Congress leader seeking a unified central state; India's first Prime Minister).",
            "State Jinnah's role (Muslim League leader advocating the 1940 Lahore demand for Pakistan to protect Muslim minority rights).",
            "State Bose's role (rejected non-violence, led armed INA with Japan; INA trials stirred anti-colonial militancy).",
            "Add a brief comparative point showing how their differing visions complicated a single peaceful settlement.",
          ],
          modelAnswer:
            "Jawaharlal Nehru led the Indian National Congress toward a united, secular republic with a strong central government, becoming India's first Prime Minister. By contrast, Muhammad Ali Jinnah of the Muslim League feared Muslims would be permanently outvoted and campaigned from the 1940 Lahore Resolution for a separate homeland, Pakistan. Meanwhile, Subhas Chandra Bose rejected Gandhian non-violence altogether, leading the armed Indian National Army (INA) alongside Japan—whose 1945–46 Red Fort trials sparked massive cross-community solidarity. Together, these contrasting strategies accelerated Britain's exit while deepening the political deadlock over unity versus Partition.",
          markScheme: [
            {
              point: "Nehru: Congress leader championing a secular, united India with strong centre / first PM",
              keywords: ["secular", "united", "congress", "prime minister", "central"],
            },
            {
              point: "Jinnah: Muslim League leader demanding Pakistan / safeguards (1940 Lahore Resolution) against minority domination",
              keywords: ["muslim league", "pakistan", "lahore", "minority", "separate"],
            },
            {
              point: "Bose: rejected non-violence, led armed INA with Japan / Red Fort trials shaking military loyalty",
              keywords: ["ina", "armed", "japan", "non-violence", "red fort", "trials"],
            },
            {
              point: "Explicit comparison or link explaining how contrasting visions shaped 1947",
              keywords: ["contrast", "whereas", "deadlock", "partition", "exit", "differ"],
            },
          ],
        },
        {
          id: "indian-independence-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "independence-partition-1947",
          marks: 4,
          question:
            "Explain why the August 1947 division of British India resulted in such catastrophic displacement and loss of life.",
          hints: [
            "Explain Lord Mountbatten rushing the departure forward by 10 months (from June 1948 to August 1947).",
            "Explain Sir Cyril Radcliffe's five-week deadline, lack of Indian knowledge, and outdated maps dividing mixed Punjab and Bengal.",
            "Note the delayed 17 August announcement and pre-existing communal distrust since 1946 Direct Action Day.",
            "Include accurate human-cost figures (10–15 million refugees, ~500,000 to over 1 million dead).",
          ],
          modelAnswer:
            "First, Lord Mountbatten accelerated British departure by ten months—from June 1948 to August 1947—leaving far too little time for orderly planning. Second, Sir Cyril Radcliffe, who had never visited India, was given barely five weeks and outdated maps to slice through religiously mixed Punjab and Bengal; worse, the border was announced on 17 August, two days after handover, creating sudden panic. Third, communal violence had already escalated sharply since August 1946's Direct Action Day, while colonial troops and police were splitting apart—leaving 10 to 15 million fleeing refugees unprotected as roughly 500,000 to over 1 million people were killed.",
          markScheme: [
            {
              point: "Mountbatten rushing withdrawal forward by 10 months (June 1948 → Aug 1947)",
              keywords: ["mountbatten", "10 months", "ten months", "rushed", "accelerated", "1948"],
            },
            {
              point: "Radcliffe's 5-week rushed border across mixed Punjab & Bengal (never visited India / published 17 Aug)",
              keywords: ["radcliffe", "five weeks", "5 weeks", "punjab", "bengal", "17 august", "never visited"],
            },
            {
              point: "Pre-existing communal hatred (Direct Action Day 1946) + divided/inadequate security forces",
              keywords: ["direct action", "calcutta", "communal", "police", "security", "troops"],
            },
            {
              point: "Accurate scale of human tragedy (10–15 million displaced and ~500,000–1 million killed)",
              keywords: ["10", "15 million", "refugees", "million", "500,000"],
            },
          ],
        },
        {
          id: "indian-independence-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "independence-partition-1947",
          marks: 4,
          question:
            "'Peaceful civil disobedience was the main reason British rule ended in 1947.' How far do you agree with this judgement? Support both sides and reach a conclusion.",
          hints: [
            "Argue FOR: Satyagraha (1920–22, 1930 Salt March, 1942 Quit India) united ordinary Indians, hurt Lancashire cloth trade, and destroyed Britain's moral legitimacy.",
            "Argue AGAINST 'alone/main': WWII bankrupted Britain (£1.3bn debt), Attlee's 1945 Labour government backed decolonisation, and INA trials + 1946 RIN Mutiny broke military reliability.",
            "Conclude clearly by explaining how long-term Satyagraha and short-term WWII shocks interacted.",
          ],
          modelAnswer:
            "I partly agree, because Satyagraha was indispensable in eroding the foundations of the Raj. Gandhi's Non-Cooperation khadi boycotts hit Lancashire textile profits, while the 1930 Salt March and 1942 Quit India united rural peasants and women, stripping Britain of moral legitimacy worldwide. However, peaceful protest did not achieve independence in 1930 or 1942. Equally decisive were Second World War exhaustion—leaving Britain owing India £1.3 billion—Clement Attlee's pro-decolonisation Labour government (1945), and military unrest during the INA trials and February 1946 Royal Indian Navy Mutiny. Overall, Satyagraha made India ungovernable long-term, while WWII and military breakdown forced Britain's 1947 departure.",
          markScheme: [
            {
              point: "Evidence FOR Satyagraha (Salt March, khadi boycott, Quit India, moral delegitimisation, mass unity)",
              keywords: ["satyagraha", "salt", "khadi", "quit india", "moral", "legitimacy", "lancashire"],
            },
            {
              point: "Evidence for WWII economic exhaustion & Clement Attlee's 1945 Labour government",
              keywords: ["wwii", "second world war", "debt", "1.3", "attlee", "labour", "1945"],
            },
            {
              point: "Evidence for armed/military pressure (Bose's INA trials & 1946 RIN Mutiny)",
              keywords: ["ina", "bose", "mutiny", "navy", "rin", "military"],
            },
            {
              point: "Balanced, sustained overall judgement linking long-term protest with short-term 1945–46 triggers",
              keywords: ["overall", "partly", "however", "long-term", "ungovernable", "together", "combin"],
            },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "indian-independence-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "quit-india-ww2",
      question:
        "Historians sometimes debate whether British withdrawal in 1947 was a case of 'Indian push' (nationalist resistance) or 'British pull' (post-war weakness and Labour priorities). Which analysis best explains how both interacted?",
      options: [
        "Decades of nationalist mass protest raised the cost of ruling India just as WWII destroyed Britain's capacity to pay",
        "British pull alone mattered because zero Indian protests took place anywhere between 1931 and 1947",
        "Indian push alone mattered because Britain emerged from WWII wealthier than before 1939",
        "Neither factor mattered because the United Nations physically expelled British soldiers from Delhi",
      ],
      answerIndex: 0,
      hints: [
        "Think about the 'cost–benefit' equation of empire: what raised the *cost* of keeping India, and what reduced Britain's *ability* to pay that cost?",
        "Notice how extreme single-factor claims ignore verified facts like Quit India (1942) or Britain's £1.3bn debt.",
      ],
      explanation:
        "Top-band historiography links both forces: Satyagraha, Quit India, and 1946 military unrest drove up the political and military cost of holding India ('push'), precisely when WWII bankruptcy and Attlee's Labour priorities broke Britain's ability and willingness to pay it ('pull').",
    },
    {
      id: "indian-independence-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "british-raj-amritsar",
      question:
        "How many years elapsed between the Jallianwala Bagh Massacre in Amritsar (1919) and Indian Independence (1947)?",
      answer: { type: "number", value: 28, display: "28 years" },
      traps: [
        {
          spec: { type: "number", value: 27 },
          feedback: "Check the subtraction carefully: 1947 − 1919 = 28 years.",
        },
      ],
      hints: [
        "Amritsar occurred on 13 April 1919; Independence occurred in August 1947.",
        "Calculate 1947 − 1919.",
      ],
      solution: [
        "1947 − 1919 = **28 years** of sustained political struggle, boycotts, negotiations, and wartime upheaval.",
      ],
    },
    {
      id: "indian-independence-ch-q03",
      kind: "written",
      difficulty: "challenge",
      guideRef: "quit-india-ww2",
      marks: 5,
      question:
        "Explain the paradox of the August 1942 'Quit India' Movement: why did historians judge it both a long-term breakthrough against British rule AND a setback for a united India?",
      hints: [
        "Breakthrough side: proved even under wartime martial law that Britain lacked Indian consent (~100,000 arrested, massive strikes/sabotage).",
        "Setback side: British mass arrests locked Congress leaders (Gandhi, Nehru) in jail until 1944–45.",
        "Consequence for unity: Jinnah's Muslim League stayed out of Quit India, backed Britain's war effort, and expanded hugely among Muslim voters before 1945–46 elections.",
      ],
      modelAnswer:
        "Quit India was a breakthrough against colonial power because the sheer scale of strikes, protests, and ~100,000 arrests proved Britain could hold India only through massive wartime force rather than consent—warning London that post-war governance would be unsustainable. Yet it simultaneously undermined Indian unity. Because British authorities immediately imprisoned Gandhi, Jawaharlal Nehru, and Congress organisers until 1944–45, the party was silenced during crucial war years. Meanwhile, Muhammad Ali Jinnah's Muslim League cooperated with Britain's war effort, campaigned freely for the 1940 Lahore Pakistan demand, and swept Muslim seats in the 1945–46 elections, making Partition far more likely.",
      markScheme: [
        {
          point: "Breakthrough: massive strikes/protests (~100,000 jailed) proved Britain had lost Indian consent",
          keywords: ["100,000", "consent", "force", "strikes", "unsustainable", "proved"],
        },
        {
          point: "Setback mechanism: Gandhi, Nehru, and top Congress leaders jailed until 1944–45",
          keywords: ["prison", "jailed", "gandhi", "nehru", "silenced", "1944", "1945"],
        },
        {
          point: "Muslim League (Jinnah) did not join / cooperated with British war effort",
          keywords: ["jinnah", "muslim league", "cooperat", "war effort", "freely"],
        },
        {
          point: "Muslim League expanded support for Pakistan (1940 Lahore demand / 1945–46 elections)",
          keywords: ["pakistan", "lahore", "election", "support", "seats", "grew"],
        },
        {
          point: "Explicit balanced link showing how both consequences occurred simultaneously",
          keywords: ["however", "yet", "meanwhile", "simultaneously", "partition", "likely"],
        },
      ],
    },
    {
      id: "indian-independence-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "british-raj-amritsar",
      question:
        "Compare two 1919 sources on Amritsar: (Source A) General Dyer's testimony claiming firing prevented a province-wide rebellion; (Source B) Rabindranath Tagore's letter renouncing his knighthood over the shooting of unarmed citizens. Why do these two contemporary sources conflict so sharply?",
      options: [
        "Because neither Dyer nor Tagore lived in India during the spring of 1919",
        "Because Dyer sought to justify harsh military force while Tagore spoke for Indian moral outrage",
        "Because Source A was written in 1947 after Partition whereas Source B was written in 1885",
        "Because Tagore had commanded the British Gurkha regiment stationed inside Jallianwala Bagh",
      ],
      answerIndex: 1,
      hints: [
        "Apply NOP (Origin & Purpose) to both authors: a British military commander defending his actions before an inquiry vs an Indian humanist protesting colonial brutality.",
        "Remember that differing purposes explain why eyewitnesses to the same event produce sharply conflicting accounts.",
      ],
      explanation:
        "Both are genuine 1919 primary sources, yet their Origins and Purposes clash: Dyer was defending his career and imperial order before the Hunter Commission, while Tagore was expressing Indian grief and rejecting British claims of moral superiority.",
    },
    {
      id: "indian-independence-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "independence-partition-1947",
      marks: 5,
      question:
        "Assess who—or what—bore primary responsibility for the tragedy of 1947 Partition: British colonial decisions, rival Indian political leaders, or long-term communal divisions? Give a weighed judgement.",
      hints: [
        "British decisions: colonial 'divide and rule' (separate electorates), Mountbatten cutting 10 months off the schedule, Radcliffe's 5-week rushed border announced on 17 August.",
        "Indian political leaders: failure of Congress (Nehru's strong-centre vision) and Muslim League (Jinnah's Direct Action Day & insistence on Pakistan) to compromise on the 1946 Cabinet Mission.",
        "Underlying tension: rising sectarian distrust in mixed provinces like Punjab and Bengal after 1946 riots.",
        "Conclude by clearly weighing *who* accelerated the catastrophe most sharply.",
      ],
      modelAnswer:
        "Responsibility was shared across all three factors, though British haste magnified a political deadlock into catastrophe. Long-term colonial 'divide and rule' policies—such as separate religious electorates since 1909—institutionalised rival identities. In 1946, Indian leaders failed to salvage the Cabinet Mission federal compromise: Congress insisted on a strong central state while Jinnah's Muslim League demanded Pakistan and triggered deadly Calcutta riots through Direct Action Day. Yet Britain's final exit decisions turned division into bloodbath: Lord Mountbatten cut ten months off the schedule, gave Sir Cyril Radcliffe barely five weeks to slice mixed Punjab and Bengal, and hid the borders until 17 August. Overall, Indian political deadlock made division likely, while Britain's rushed execution turned it into humanitarian disaster.",
      markScheme: [
        {
          point: "Long-term British 'divide and rule' / separate religious electorates (1909+)",
          keywords: ["divide and rule", "separate electorate", "1909", "institutional"],
        },
        {
          point: "British rushed withdrawal in 1947 (Mountbatten cutting 10 months / Radcliffe's 5-week border / 17 Aug delay)",
          keywords: ["mountbatten", "radcliffe", "five weeks", "10 months", "ten months", "17 august", "haste"],
        },
        {
          point: "Indian political deadlock (Congress/Nehru strong centre vs Jinnah/Muslim League Pakistan & failed 1946 Cabinet Mission)",
          keywords: ["cabinet mission", "nehru", "jinnah", "pakistan", "deadlock", "compromise"],
        },
        {
          point: "Escalating communal violence (Direct Action Day 1946 / Calcutta / mixed Punjab & Bengal)",
          keywords: ["direct action", "calcutta", "punjab", "bengal", "riots", "sectarian"],
        },
        {
          point: "Weighed conclusion distinguishing why division happened vs why it became so violent",
          keywords: ["overall", "shared", "however", "yet", "disaster", "bloodbath", "catastrophe"],
        },
      ],
    },
    {
      id: "indian-independence-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "gandhi-satyagraha-salt-march",
      question:
        "Why do modern historians emphasise *grassroots* participants—peasants, textile workers, students, and women like Kamaladevi Chattopadhyay—rather than studying Mahatma Gandhi alone?",
      options: [
        "Because Gandhi never attended any public marches or boycotts inside India after 1915",
        "Because historians no longer regard Gandhi's Salt March as a significant historical event",
        "Because mass campaigns only worked when millions of ordinary Indians risked jail and boycotted goods",
        "Because British Viceroys refused to read newspapers or correspond with Congress leaders",
      ],
      answerIndex: 2,
      hints: [
        "Think about the 'Great Man' vs 'history from below' (subaltern/grassroots) debate in historical interpretations.",
        "One individual picking up salt could be ignored; 60,000 ordinary citizens filling British jails could not.",
      ],
      explanation:
        "While Gandhi provided visionary strategy and moral leadership, non-violent campaigns only became unstoppable because tens of thousands of ordinary villagers, workers, students, and women risked arrest, spun *khadi*, and picketed shops across every province.",
    },
    {
      id: "indian-independence-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "independence-partition-1947",
      marks: 4,
      question:
        "Compare the strategic effectiveness of non-violent mass protest in India (1919–1947) with armed militancy (such as Subhas Chandra Bose's INA). Why did each exert a different kind of pressure on Britain?",
      hints: [
        "Non-violent protest: mobilized millions (men & women), created economic damage (*khadi* boycott), and won global moral sympathy without giving Britain an easy pretext to crush 'terrorists'.",
        "Armed militancy (INA): failed on the battlefield in 1944, YET the 1945–46 Red Fort trials and February 1946 RIN Navy Mutiny scared London by proving Indian armed forces were no longer loyal.",
        "Conclude how both types of pressure combined in 1945–47.",
      ],
      modelAnswer:
        "Non-violent Satyagraha succeeded in building broad participation across rural villages, cities, and women—delivering sustained economic pressure through khadi boycotts while exposing British hypocrisy to global media at Dharasana without justifying full military retaliation. By contrast, armed action through the Indian National Army failed militarily against Allied forces in Burma in 1944. Nevertheless, armed militancy exerted a distinct psychological shock after WWII: the 1945–46 Red Fort trials united Hindu, Muslim, and Sikh protesters and inspired the February 1946 Royal Indian Navy Mutiny, shattering London's trust in Indian soldiers. Together, Satyagraha eroded Britain's moral and economic hold while military unrest ended its ability to rule by force.",
      markScheme: [
        {
          point: "Non-violent Satyagraha built mass inclusive participation (villagers/women), economic boycott, and moral/media leverage",
          keywords: ["satyagraha", "khadi", "dharasana", "moral", "women", "boycott", "media"],
        },
        {
          point: "Notes military defeat of INA in 1944 yet powerful symbolic shock of 1945–46 Red Fort trials",
          keywords: ["burma", "defeat", "1944", "red fort", "trials", "sikh", "symbolic"],
        },
        {
          point: "Links military unrest (1946 RIN Navy Mutiny) to Britain losing trust in Indian armed forces",
          keywords: ["mutiny", "rin", "navy", "1946", "loyal", "trust", "soldiers"],
        },
        {
          point: "Clear synthesis contrasting how both pressures worked together against the Raj",
          keywords: ["together", "contrast", "distinct", "force", "eroded", "whereas"],
        },
      ],
    },
    {
      id: "indian-independence-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "quit-india-ww2",
      question:
        "Approximately how many billion pounds (£) in war debt ('sterling balances') did Britain owe India by the end of WWII in 1945? Give your answer to 1 decimal place (e.g. 2.5).",
      answer: { type: "number", value: 1.3, tolerance: 0.05, display: "£1.3 billion" },
      traps: [
        {
          spec: { type: "number", value: 13 },
          feedback: "Check the decimal point: Britain owed India roughly £1.3 billion (not £13 billion).",
        },
      ],
      hints: [
        "WWII flipped the imperial financial relationship so that London owed Delhi over a billion pounds.",
        "The figure cited in the guide is between 1.0 and 1.5 billion.",
      ],
      solution: [
        "By 1945, Britain owed India roughly **£1.3 billion** in sterling balances, proving it could no longer afford to police the Raj.",
      ],
    },
  ],
};
