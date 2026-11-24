import type { Drill, Rng } from "./types.ts";

interface IndiaMilestone {
  order: number;
  year: number;
  dateLabel: string;
  label: string;
  phase: "raj" | "satyagraha" | "ww2" | "partition";
  coreDate?: boolean;
}

const MILESTONES: IndiaMilestone[] = [
  {
    order: 1,
    year: 1858,
    dateLabel: "1858",
    label: "British Crown begins direct rule over India (the British Raj)",
    phase: "raj",
    coreDate: true,
  },
  {
    order: 2,
    year: 1885,
    dateLabel: "1885",
    label: "Indian National Congress (INC) is founded",
    phase: "raj",
    coreDate: true,
  },
  {
    order: 3,
    year: 1906,
    dateLabel: "1906",
    label: "All-India Muslim League is founded in Dhaka",
    phase: "raj",
    coreDate: true,
  },
  {
    order: 4,
    year: 1919,
    dateLabel: "March 1919",
    label: "Rowlatt Acts allow British police detention without trial",
    phase: "raj",
  },
  {
    order: 5,
    year: 1919,
    dateLabel: "13 April 1919",
    label: "Jallianwala Bagh (Amritsar) Massacre shatters British moral authority",
    phase: "raj",
    coreDate: true,
  },
  {
    order: 6,
    year: 1920,
    dateLabel: "1920",
    label: "Gandhi launches the Non-Cooperation Movement and khadi cloth boycott",
    phase: "satyagraha",
    coreDate: true,
  },
  {
    order: 7,
    year: 1922,
    dateLabel: "February 1922",
    label: "Gandhi suspends Non-Cooperation after violence at Chauri Chaura",
    phase: "satyagraha",
    coreDate: true,
  },
  {
    order: 8,
    year: 1929,
    dateLabel: "December 1929",
    label: "Congress declares Purna Swaraj (Complete Independence) at Lahore",
    phase: "satyagraha",
    coreDate: true,
  },
  {
    order: 9,
    year: 1930,
    dateLabel: "March–April 1930",
    label: "Gandhi leads the 240-mile Dandi Salt March to defy colonial salt laws",
    phase: "satyagraha",
    coreDate: true,
  },
  {
    order: 10,
    year: 1931,
    dateLabel: "March 1931",
    label: "Gandhi–Irwin Pact frees peaceful prisoners before London talks",
    phase: "satyagraha",
  },
  {
    order: 11,
    year: 1940,
    dateLabel: "March 1940",
    label: "Muslim League passes the Lahore Resolution calling for Pakistan",
    phase: "ww2",
    coreDate: true,
  },
  {
    order: 12,
    year: 1942,
    dateLabel: "8 August 1942",
    label: "Gandhi and Congress launch the Quit India ('Do or Die') Movement",
    phase: "ww2",
    coreDate: true,
  },
  {
    order: 13,
    year: 1945,
    dateLabel: "July 1945",
    label: "Clement Attlee's Labour Party wins power in Britain",
    phase: "ww2",
    coreDate: true,
  },
  {
    order: 14,
    year: 1946,
    dateLabel: "February 1946",
    label: "Royal Indian Navy (RIN) Mutiny erupts in Bombay and Karachi",
    phase: "partition",
    coreDate: true,
  },
  {
    order: 15,
    year: 1946,
    dateLabel: "16 August 1946",
    label: "Direct Action Day sparks devastating communal killings in Calcutta",
    phase: "partition",
  },
  {
    order: 16,
    year: 1947,
    dateLabel: "14–15 August 1947",
    label: "Independence and Partition create Pakistan and India along the Radcliffe Line",
    phase: "partition",
    coreDate: true,
  },
];

interface KeyConcept {
  term: string;
  accept: string[];
  clues: [string, string, string];
  note: string;
}

const KEY_CONCEPTS: KeyConcept[] = [
  {
    term: "British Raj",
    accept: ["British Raj", "The British Raj", "Raj"],
    clues: [
      "Period of direct British Crown rule over India beginning in 1858 after the 1857 Rebellion",
      "Colonial administration that called India the 'Jewel in the Crown' of the British Empire",
      "British imperial rule in India ending on 14–15 August 1947",
    ],
    note: "Lasted from 1858 to 1947, relying on Indian resources, markets, taxes, and troops.",
  },
  {
    term: "Rowlatt Acts",
    accept: ["Rowlatt Acts", "Rowlatt Act", "The Rowlatt Acts"],
    clues: [
      "March 1919 colonial decrees permitting detention without trial and press censorship in peacetime",
      "Repressive laws passed after WWI that outraged Indians expecting self-government",
      "Emergency legislation in 1919 whose protests led directly toward the Amritsar Massacre",
    ],
    note: "Extended wartime repression into peacetime despite unanimous opposition by Indian legislators.",
  },
  {
    term: "Amritsar Massacre",
    accept: ["Amritsar Massacre", "Jallianwala Bagh Massacre", "Jallianwala Bagh", "Amritsar"],
    clues: [
      "13 April 1919 shooting where General Dyer fired without warning on unarmed Baisakhi festival-goers",
      "Walled-garden tragedy in Punjab killing 379 (British figure) to over 1,000 (Congress estimate)",
      "Turning point that led Rabindranath Tagore to renounce his British knighthood in protest",
    ],
    note: "Destroyed British moral authority and transformed nationalism into a mass freedom struggle.",
  },
  {
    term: "Satyagraha",
    accept: ["Satyagraha", "satyagraha"],
    clues: [
      "Gandhi's principle of 'truth-force'—active, disciplined non-violent civil disobedience",
      "Strategy of openly defying unjust laws while refusing physical retaliation under attack",
      "Non-violent protest philosophy first developed by Gandhi in South Africa and used across India",
    ],
    note: "Placed the British Raj in a strategic lose–lose dilemma by exposing imperial brutality.",
  },
  {
    term: "Khadi",
    accept: ["Khadi", "khadi", "khaddar"],
    clues: [
      "Hand-spun, hand-woven Indian cotton cloth promoted by Gandhi to boycott British textiles",
      "Simple white cloth made on the spinning wheel (*charkha*) symbolising *Swadeshi* self-reliance",
      "Home-spun fabric whose mass adoption hit Lancashire factory textile exports directly",
    ],
    note: "Combined direct economic pressure on Britain with visual unity across caste and class.",
  },
  {
    term: "Chauri Chaura",
    accept: ["Chauri Chaura", "Chauri-Chaura"],
    clues: [
      "Town where protesters burned a police station in February 1922, killing 22 policemen",
      "Site of violence that caused Gandhi to immediately suspend the Non-Cooperation Movement",
      "1922 incident demonstrating Gandhi's unwavering insistence on strict non-violence (*Ahimsa*)",
    ],
    note: "Showed Gandhi would rather pause a nationwide campaign than allow violence to corrupt it.",
  },
  {
    term: "Dandi Salt March",
    accept: ["Dandi Salt March", "Salt March", "Salt Satyagraha", "The Salt March"],
    clues: [
      "240-mile, 24-day walk (March–April 1930) from Sabarmati Ashram to the coast to pick up sea salt",
      "1930 campaign defying the British salt monopoly and sparking over 60,000 arrests nationwide",
      "Historic march followed by peaceful volunteers being beaten at the Dharasana Salt Works",
    ],
    note: "United rural villagers, city workers, and tens of thousands of women while captivating global media.",
  },
  {
    term: "Purna Swaraj",
    accept: ["Purna Swaraj", "purna swaraj", "Complete Independence"],
    clues: [
      "December 1929 Lahore Congress resolution demanding complete independence rather than dominion status",
      "Hindi/Sanskrit phrase meaning 'complete self-rule', celebrated symbolically on 26 January 1930",
      "Goal declared under Jawaharlal Nehru's Congress presidency just before the 1930 Salt March",
    ],
    note: "Marked Congress's formal break with limited reform inside the British Empire.",
  },
  {
    term: "Quit India",
    accept: ["Quit India", "Quit India Movement", "The Quit India Movement"],
    clues: [
      "August 1942 wartime Congress campaign launched with Gandhi's call 'Do or Die'",
      "1942 upheaval bringing ~100,000 arrests and jailing Congress leaders until 1944–45",
      "Wartime demand for immediate British exit whose repression let the Muslim League expand freely",
    ],
    note: "Proved Britain lacked Indian consent while inadvertently strengthening Jinnah's political position.",
  },
  {
    term: "Subhas Chandra Bose",
    accept: ["Subhas Chandra Bose", "Bose", "Netaji", "Subhash Chandra Bose"],
    clues: [
      "Radical Indian nationalist who rejected non-violence and led the Indian National Army (INA)",
      "Leader allied with Japan in WWII whose officers faced the explosive 1945–46 Red Fort trials",
      "Nationalist known as *Netaji* who argued armed pressure was needed alongside peaceful protest",
    ],
    note: "Though the INA was defeated in Burma in 1944, its 1945–46 trials shook British faith in the Indian Army.",
  },
  {
    term: "Clement Attlee",
    accept: ["Clement Attlee", "Attlee"],
    clues: [
      "British Labour Prime Minister elected in July 1945 who backed Indian decolonisation",
      "Post-war UK leader who replaced Churchill and prioritised rebuilding Britain (including the NHS)",
      "Prime Minister who appointed Lord Mountbatten to oversee Britain's withdrawal from India",
    ],
    note: "Labour's 1945 victory shifted British policy decisively away from holding India by force.",
  },
  {
    term: "Muhammad Ali Jinnah",
    accept: ["Muhammad Ali Jinnah", "Jinnah", "Mohammed Ali Jinnah"],
    clues: [
      "Leader of the All-India Muslim League who championed the 1940 Lahore demand for Pakistan",
      "Statesman who became Pakistan's first Governor-General on 14 August 1947",
      "Leader who warned Muslims risked permanent minority status in a Congress-led united India",
    ],
    note: "Known in Pakistan as *Quaid-e-Azam*; led the Muslim League from 1940 to 1947.",
  },
  {
    term: "Jawaharlal Nehru",
    accept: ["Jawaharlal Nehru", "Nehru", "Pandit Nehru"],
    clues: [
      "Secular socialist Congress leader who became independent India's first Prime Minister in 1947",
      "Leader who presided over the 1929 *Purna Swaraj* declaration and gave the 'Tryst with Destiny' speech",
      "Close Gandhi ally who argued for a united, secular republic with a strong central government",
    ],
    note: "Led independent India as Prime Minister from 15 August 1947 until 1964.",
  },
  {
    term: "Radcliffe Line",
    accept: ["Radcliffe Line", "The Radcliffe Line", "Radcliffe border"],
    clues: [
      "Hurried August 1947 border drawn in ~5 weeks dividing Punjab and Bengal between India and Pakistan",
      "Partition boundary drawn by a British lawyer who had never previously visited India",
      "Border announced on 17 August 1947—two days after independence—triggering panic among millions",
    ],
    note: "Named after Sir Cyril Radcliffe; its sudden publication intensified Partition displacement and violence.",
  },
  {
    term: "Mountbatten Plan",
    accept: ["Mountbatten Plan", "The Mountbatten Plan", "3 June Plan"],
    clues: [
      "June 1947 proposal bringing Britain's departure forward by 10 months to August 1947",
      "Last Viceroy's settlement partitioning British India into two sovereign dominions",
      "Accelerated withdrawal plan designed by Britain's final Viceroy to avoid being trapped in civil war",
    ],
    note: "Advanced departure from June 1948 to 14–15 August 1947.",
  },
];

interface AnalysisCase {
  title: string;
  extract: string;
  focus: string;
  correct: string;
  flawed: [string, string, string, string];
  why: string;
}

const ANALYSIS_CASES: AnalysisCase[] = [
  {
    title: "General Dyer's Hunter Commission Testimony (1919)",
    extract: "Brigadier-General Dyer states he fired until ammunition ran low at Amritsar to create a 'moral effect' across Punjab.",
    focus: "Source Provenance & Turning Point",
    correct: "Reveals British rule rested on intimidation when challenged, explaining why moderates lost faith in the Raj",
    flawed: [
      "Proves the Baisakhi crowd inside Jallianwala Bagh fired artillery rifles at British soldiers first",
      "Shows that the British Parliament immediately executed Dyer and ended the Raj in 1920",
      "Demonstrates that Gandhi supported martial law in Punjab throughout the 1920s",
      "Confirms that only ten people were injured during the 13 April 1919 gathering",
    ],
    why: "Dyer's own admission of seeking a 'moral effect'—followed by British fundraising for him—destroyed Britain's moral claim to rule.",
  },
  {
    title: "Webb Miller's Dharasana Salt Works Dispatch (May 1930)",
    extract: "An American reporter wires worldwide accounts of police beating unarmed Indian volunteers who refuse to raise a hand in retaliation.",
    focus: "Satyagraha & Media Leverage",
    correct: "Shows how disciplined non-violence turned British police force into global diplomatic embarrassment",
    flawed: [
      "Proves that British police refused to arrest any protesters during the 1930 Civil Disobedience campaign",
      "Demonstrates that the 1930 Salt March immediately forced Britain to withdraw from India in 1931",
      "Shows that foreign journalists were completely banned from reporting on Indian protests during 1930",
      "Proves Gandhi abandoned non-violence at Dharasana and ordered armed retaliation against police",
    ],
    why: "International press sympathy pressured Viceroy Irwin into the 1931 Gandhi–Irwin Pact, though independence took 17 more years.",
  },
  {
    title: "Lancashire Cotton Mill Export Figures (1920–1932)",
    extract: "Trade statistics recording sharp drops in British factory cloth imports into India during Congress boycott campaigns.",
    focus: "Economic Leverage (*Swadeshi*)",
    correct: "Demonstrates that *khadi* boycotts combined moral protest with measurable economic damage to British trade",
    flawed: [
      "Proves that Gandhi opposed boycotts because he wanted to protect Lancashire mill profits",
      "Shows that Indian consumers increased purchases of imported British textiles throughout 1930",
      "Indicates that economic pressure had zero role in Gandhi's Non-Cooperation or Salt campaigns",
      "Proves India produced no raw cotton of its own under the British Raj",
    ],
    why: "Boycotting foreign cloth hit the economic profitability of empire while uniting rich and poor Indians in self-reliance.",
  },
  {
    title: "Chauri Chaura Suspension Notice (February 1922)",
    extract: "Gandhi halts the nationwide Non-Cooperation Movement after protesters burn a police station, killing 22 policemen.",
    focus: "Discipline of *Ahimsa*",
    correct: "Proves Gandhi's commitment to non-violence was principled and strict, even when halting protest frustrated allies",
    flawed: [
      "Shows Gandhi called off Non-Cooperation because Britain had already granted full independence in 1922",
      "Proves Gandhi endorsed burning colonial police stations whenever crowds grew angry",
      "Demonstrates that no Indians participated in the 1920–22 boycott of British courts and schools",
      "Indicates that Chauri Chaura happened during the 1947 Partition riots in Punjab",
    ],
    why: "Gandhi insisted impure violent methods would corrupt Indian freedom, even though suspending the campaign angered radicals.",
  },
  {
    title: "Women Picketers in Bombay (1930)",
    extract: "Photographs of Kamaladevi Chattopadhyay and Sarojini Naidu leading thousands of women making salt and picketing foreign cloth shops.",
    focus: "Grassroots Mobilisation",
    correct: "Shows Satyagraha transformed Indian public life by bringing tens of thousands of women into active politics",
    flawed: [
      "Proves that Gandhi barred women from participating in marches or selling illegal salt in 1930",
      "Shows that British colonial authorities exempted female protesters from arrest under the Salt Laws",
      "Demonstrates that Indian independence relied solely on Gandhi acting alone without grassroots support",
      "Indicates that women joined Indian politics only after independence was won in August 1947",
    ],
    why: "Mass inclusion of women and rural villagers turned elite petitions into an unstoppable national movement.",
  },
  {
    title: "Quit India Police Intelligence Summary (1942–1944)",
    extract: "British files noting ~100,000 Congress arrests alongside rapid membership growth in Jinnah's Muslim League.",
    focus: "Unintended Consequences of 1942",
    correct: "Highlights Quit India's paradox: it proved Britain lacked consent yet left the Muslim League free to grow",
    flawed: [
      "Shows that Muhammad Ali Jinnah joined Gandhi in launching the August 1942 Quit India Movement",
      "Proves Britain immediately freed Gandhi and Nehru in September 1942 to run provincial ministries",
      "Demonstrates that zero Indian soldiers fought for the Allies during the Second World War",
      "Indicates that the Muslim League lost all popular support between 1942 and 1946",
    ],
    why: "With Congress leaders jailed until 1944–45, Jinnah organised freely and consolidated support for the 1940 Pakistan demand.",
  },
  {
    title: "UK Sterling Balance Ledger (1945)",
    extract: "Treasury accounts showing bankrupt post-war Britain owes India roughly £1.3 billion for WWII supplies and troops.",
    focus: "WWII Structural Exhaustion",
    correct: "Explains why post-war Britain lacked the financial strength to afford a costly colonial garrison in India",
    flawed: [
      "Proves India owed Britain billions in war reparations at the end of the Second World War",
      "Shows Britain emerged from WWII wealthier than in 1914 and eager to expand colonial wars",
      "Demonstrates that WWII had no influence on the timing of Britain's 1947 withdrawal",
      "Proves Clement Attlee's Labour government tripled defence budgets to occupy Delhi permanently",
    ],
    why: "WWII reversed imperial economics, aligning with Attlee's 1945 Labour priorities (domestic welfare and NHS) to hasten exit.",
  },
  {
    title: "Red Fort INA Trial & RIN Mutiny Reports (1945–1946)",
    extract: "British military dispatches warning of cross-religious solidarity over INA officers and 20,000 mutinous Indian sailors.",
    focus: "Collapse of Imperial Military Control",
    correct: "Convinced London that Indian armed forces could no longer be relied upon to suppress mass revolt",
    flawed: [
      "Proves Subhas Chandra Bose's INA defeated the British Army decisively on the battlefield in 1944",
      "Shows that Indian sailors mutinied in order to demand Winston Churchill remain Prime Minister",
      "Demonstrates that Hindu, Muslim, and Sikh troops refused to express sympathy for INA defendants",
      "Proves Britain had ample loyal British troops stationed in India to rule indefinitely by force",
    ],
    why: "Even though the INA lost militarily in Burma, the 1945–46 trials and Feb 1946 RIN Mutiny broke Britain's coercive power.",
  },
  {
    title: "Clement Attlee's 1956 Retrospective Remark",
    extract: "Former PM Attlee claims Gandhi's influence on Britain's 1947 decision was 'minimal' compared with WWII and military unrest.",
    focus: "Evaluating Historical Interpretations (NOP)",
    correct: "Useful evidence of British military fears in 1946, yet one-sided because it downplays decades of Gandhian protest",
    flawed: [
      "Final objective proof that Gandhi's Satyagraha had zero effect on British legitimacy in India",
      "Completely worthless because Clement Attlee was not in office during the 1945–47 transfer of power",
      "Proof that Britain left India solely out of spontaneous generosity without any Indian pressure",
      "Evidence that the Royal Indian Navy Mutiny and INA trials never took place in 1945–46",
    ],
    why: "Cross-referencing Attlee's view against Indian evidence shows how long-term Satyagraha and 1945–46 shocks worked together.",
  },
  {
    title: "Calcutta Direct Action Day Reports (August 1946)",
    extract: "News dispatches describing over 4,000 killed in sectarian riots after the 1946 Cabinet Mission federal plan collapsed.",
    focus: "Breakdown of Unity toward Partition",
    correct: "Demonstrates how rising communal violence convinced many leaders that avoiding civil war meant Partition",
    flawed: [
      "Shows that Congress and the Muslim League unanimously signed the Cabinet Mission Plan in August 1946",
      "Proves that sectarian tensions first began only after Britain left India on 15 August 1947",
      "Demonstrates that Lord Mountbatten ordered Direct Action Day to slow down independence",
      "Indicates that communal violence was confined solely to southern Indian coastal towns",
    ],
    why: "The Great Calcutta Killings shattered trust in a united federal compromise and hardened calls for Partition.",
  },
  {
    title: "Sir Cyril Radcliffe's Five-Week Commission (July 1947)",
    extract: "Records of a British lawyer—never having visited India—drawing borders across Punjab and Bengal published on 17 August 1947.",
    focus: "Why Partition Turned Catastrophic",
    correct: "Shows how Mountbatten's rushed 10-month acceleration and delayed border release intensified panic and massacres",
    flawed: [
      "Shows that Britain spent five full years consulting local villages before gradually adjusting frontiers",
      "Proves that Punjab and Bengal had no mixed communities, making borders effortless to divide",
      "Demonstrates that Radcliffe published the final boundary line six months before independence day",
      "Indicates that fewer than 100,000 refugees crossed the borders between India and Pakistan in 1947",
    ],
    why: "Haste, outdated maps, divided security forces, and the 17 August reveal contributed to 10–15M displaced and ~1M deaths.",
  },
  {
    title: "Gandhi's 15 August 1947 Fast in Calcutta",
    extract: "While Jawaharlal Nehru delivers 'Tryst with Destiny' in Delhi, Gandhi refuses to celebrate and fasts for peace in Calcutta.",
    focus: "Assessing Success & Limits of 1947",
    correct: "Captures the bittersweet verdict of 1947: anti-colonial independence succeeded, yet unity and peace failed",
    flawed: [
      "Shows that Gandhi was sworn in as independent India's first Prime Minister in Calcutta",
      "Proves Gandhi enthusiastically campaigned for the hurried Partition of Punjab and Bengal",
      "Demonstrates that zero communal violence occurred anywhere in Bengal or Punjab during August 1947",
      "Indicates that Gandhi opposed India becoming independent from British rule in 1947",
    ],
    why: "True historical evaluation celebrates the end of empire while confronting the human tragedy of Partition.",
  },
];

function pickDistinct<T>(rng: Rng, arr: readonly T[], count: number): T[] {
  return rng.shuffle(arr).slice(0, count);
}

export const drills: Drill[] = [
  {
    id: "indian-independence.chronology-order",
    topicId: "indian-independence",
    title: "Road to 1947: Chronology & Sequencing",
    level: 1,
    guideRef: "british-raj-amritsar",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      let chosen: IndiaMilestone[];
      if (tier === 1) {
        const phases = rng.shuffle(["raj", "satyagraha", "ww2", "partition"] as const).slice(0, 3);
        chosen = phases.map((ph) => rng.pick(MILESTONES.filter((m) => m.phase === ph)));
      } else {
        chosen = pickDistinct(rng, MILESTONES, 3);
      }
      const display = rng.shuffle(chosen);
      const sorted = [...display].sort((a, b) => a.order - b.order);
      const listBlock = display.map((m, i) => `**${i + 1}.** ${m.label}`).join("\n");
      const steps = sorted.map((m) => `**${m.dateLabel}** — ${m.label}`);

      if (tier === 1) {
        const earliestIdx = display.indexOf(sorted[0]) + 1;
        return {
          prompt: `Which of these milestones in Indian independence occurred **earliest**? Type its number (1, 2 or 3).\n\n${listBlock}`,
          answer: { type: "number", value: earliestIdx, display: String(earliestIdx) },
          hint: "Trace the four eras: British Raj & 1919 Amritsar → 1920–31 Satyagraha & Salt March → 1940–45 WWII & Quit India → 1946–47 Partition.",
          solution: [
            "Chronological sequence:",
            ...steps,
            `Therefore, **${earliestIdx}** occurred earliest.`,
          ],
        };
      }

      if (tier === 2) {
        const askLatest = rng.bool(0.5);
        const target = askLatest ? sorted[2] : sorted[0];
        const targetIdx = display.indexOf(target) + 1;
        return {
          prompt: `Which of these events occurred **${askLatest ? "latest" : "earliest"}**? Type its number (1, 2 or 3).\n\n${listBlock}`,
          answer: { type: "number", value: targetIdx, display: String(targetIdx) },
          hint: "Watch key dates closely: 1919 Amritsar, 1920 Non-Cooperation, 1930 Salt March, 1940 Lahore, 1942 Quit India, 1946 RIN/Direct Action, 1947 Partition.",
          solution: [
            "Chronological sequence:",
            ...steps,
            `Therefore, **${targetIdx}** occurred ${askLatest ? "latest" : "earliest"}.`,
          ],
        };
      }

      const orderNums = sorted.map((m) => display.indexOf(m) + 1);
      return {
        prompt: `Arrange these three milestones from **earliest to latest**. Type the three numbers separated by commas (e.g. \`3, 1, 2\`).\n\n${listBlock}`,
        answer: {
          type: "list",
          values: orderNums,
          ordered: true,
          display: orderNums.join(", "),
        },
        hint: "Identify the earliest and latest events first, then place the remaining milestone in the middle.",
        solution: [
          "From earliest to latest:",
          ...steps,
          `Correct chronological order: **${orderNums.join(", ")}**.`,
        ],
      };
    },
  },
  {
    id: "indian-independence.concepts-and-leaders",
    topicId: "indian-independence",
    title: "Satyagraha Concepts, Campaigns & Leaders",
    level: 1,
    guideRef: "gandhi-satyagraha-salt-march",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 3) {
        const card = rng.pick(KEY_CONCEPTS);
        const clue = rng.pick(card.clues);
        return {
          prompt: `Identify the exact historical term, campaign, or leader described below:\n\n**Clue:** ${clue}`,
          answer: { type: "text", accept: card.accept, display: card.term },
          hint: `Starts with **${card.term[0]}** (${card.term.split(" ").length} word${card.term.split(" ").length > 1 ? "s" : ""}).`,
          solution: [
            `Answer: **${card.term}**.`,
            card.note,
          ],
        };
      }

      const pool = pickDistinct(rng, KEY_CONCEPTS, 3);
      const target = pool[0];
      const options = rng.shuffle(pool);
      const correctIdx = options.indexOf(target) + 1;
      const clue = tier === 1 ? target.clues[0] : rng.pick([target.clues[1], target.clues[2]]);
      const optBlock = options.map((c, i) => `**${i + 1}.** ${c.term}`).join("\n");

      return {
        prompt: `Which historical term, campaign, or figure matches this description? Type **1**, **2**, or **3**.\n\n**Description:** ${clue}\n\n${optBlock}`,
        answer: { type: "number", value: correctIdx, display: String(correctIdx) },
        hint: "Match the date, tactic, or political role in the clue to the correct term or leader.",
        solution: [
          `Correct match: **${correctIdx}. ${target.term}**.`,
          target.note,
        ],
      };
    },
  },
  {
    id: "indian-independence.turning-point-spans",
    topicId: "indian-independence",
    title: "Turning-Point Dates & Timeline Gaps",
    level: 2,
    guideRef: "quit-india-ww2",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const dated = MILESTONES.filter((m) => m.coreDate && m.year >= 1885);
      let pair: [IndiaMilestone, IndiaMilestone];
      while (true) {
        const picked = pickDistinct(rng, dated, 2).sort((a, b) => a.year - b.year);
        if (picked[0].year < picked[1].year) {
          pair = [picked[0], picked[1]];
          break;
        }
      }
      const [earlier, later] = pair;
      const gap = later.year - earlier.year;

      if (tier === 1) {
        if (rng.bool(0.5)) {
          return {
            prompt: `**${earlier.label}** occurred in **${earlier.year}**. How many years later did this turning point take place?\n\n*${later.label}*`,
            answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
            hint: `Recall the year of "${later.label}" and subtract ${earlier.year}.`,
            solution: [
              `${earlier.label}: **${earlier.year}**.`,
              `${later.label}: **${later.year}**.`,
              `Span: ${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
            ],
          };
        }
        return {
          prompt: `**${later.label}** happened in **${later.year}**. How many years earlier did this milestone take place?\n\n*${earlier.label}*`,
          answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
          hint: `Recall the year of "${earlier.label}" and subtract it from ${later.year}.`,
          solution: [
            `${earlier.label}: **${earlier.year}**.`,
            `${later.label}: **${later.year}**.`,
            `Span: ${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
          ],
        };
      }

      if (tier === 2) {
        const phrasing = rng.bool(0.5)
          ? `How many years elapsed between these two turning points?\n\n- **First:** ${earlier.label}\n- **Second:** ${later.label}`
          : `Find the number of years separating **${earlier.label}** and **${later.label}**.`;
        return {
          prompt: phrasing,
          answer: { type: "number", value: gap, display: `${gap} year${gap === 1 ? "" : "s"}` },
          hint: "Identify the exact year of each milestone first, then subtract.",
          solution: [
            `${earlier.label} → **${earlier.year}**.`,
            `${later.label} → **${later.year}**.`,
            `${later.year} − ${earlier.year} = **${gap} year${gap === 1 ? "" : "s"}**.`,
          ],
        };
      }

      // Tier 3: Find exact year of the middle milestone flanked by two dated milestones
      let trio: [IndiaMilestone, IndiaMilestone, IndiaMilestone];
      while (true) {
        const picked = pickDistinct(rng, dated, 3).sort((a, b) => a.year - b.year);
        if (picked[0].year < picked[1].year && picked[1].year < picked[2].year) {
          trio = [picked[0], picked[1], picked[2]];
          break;
        }
      }
      const [first, mid, last] = trio;
      return {
        prompt: `Between **${first.label}** (${first.year}) and **${last.label}** (${last.year}), the event below took place. Type its exact 4-digit year:\n\n*${mid.label}*`,
        answer: { type: "number", value: mid.year, display: String(mid.year) },
        hint: `The date lies strictly between ${first.year} and ${last.year}.`,
        solution: [
          `${first.label} (${first.year}) came before, and ${last.label} (${last.year}) came after.`,
          `**${mid.label}** occurred in **${mid.dateLabel}** (**${mid.year}**).`,
        ],
      };
    },
  },
  {
    id: "indian-independence.causation-and-sources",
    topicId: "indian-independence",
    title: "Evaluating Sources, Causation & Historiography",
    level: 3,
    guideRef: "independence-partition-1947",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const c = rng.pick(ANALYSIS_CASES);
      const wrongTwo = pickDistinct(rng, c.flawed, 2);
      const choices = rng.shuffle([c.correct, ...wrongTwo]);
      const correctIdx = choices.indexOf(c.correct) + 1;
      const optBlock = choices.map((s, i) => `**${i + 1}.** ${s}`).join("\n");

      const header =
        tier === 1
          ? `**Evidence:** ${c.title} (${c.focus})\n*${c.extract}*\n\nWhich historical conclusion is accurate? Type **1**, **2**, or **3**.`
          : tier === 2
            ? `**Historian's Judgement:** ${c.title}\n*${c.extract}*\n\nWhich analysis best evaluates this evidence? Type **1**, **2**, or **3**.`
            : `**Critical Evaluation:** ${c.title}\n*${c.extract}*\n\nTwo conclusions below contain historical errors or single-cause distortions. Which statement (**1**, **2**, or **3**) is sound?`;

      return {
        prompt: `${header}\n\n${optBlock}`,
        answer: { type: "number", value: correctIdx, display: String(correctIdx) },
        hint: "Watch out for single-cause exaggerations ('only Gandhi', 'zero impact') and check dates carefully.",
        solution: [
          `Sound judgement: **${correctIdx}.** ${c.correct}.`,
          c.why,
        ],
      };
    },
  },
];
