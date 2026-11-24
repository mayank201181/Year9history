import type { ExamPaper } from "../types";

export const paper: ExamPaper = {
  id: "exam-2",
  title: "Year 9 History Mock 2: The Holocaust & Indian Independence",
  calculator: false,
  minutes: 45,
  questions: [
    // Q01 — short (warmup)
    {
      id: "exam-2-q01",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "escalation-1933-1939",
      difficulty: "warmup",
      question:
        "In which year did Nazi Germany enact the Nuremberg Laws, stripping German Jews of citizenship and outlawing marriages between Jews and non-Jews?",
      answer: { type: "number", value: 1935 },
      traps: [
        { spec: { type: "number", value: 1933 }, feedback: "1933 was when Hitler became Chancellor and the first shop boycotts began; the Nuremberg Laws followed two years later." },
        { spec: { type: "number", value: 1938 }, feedback: "1938 was the year of the November Pogrom (Kristallnacht), three years after the Nuremberg Laws." },
        { spec: { type: "number", value: 1942 }, feedback: "1942 was the year of the Wannsee Conference during the Second World War, seven years after the Nuremberg Laws." },
      ],
      hints: [
        "These laws came two years after Hitler took power in 1933.",
        "They were announced at the annual Nazi Party rally in September of the mid-1930s.",
      ],
      solution: [
        "In September **1935**, the Nazi regime passed the Nuremberg Laws.",
        "They legally stripped German Jews of Reich citizenship and defined Jewish identity in pseudo-scientific racial terms.",
      ],
      commonError: "Confusing 1935 (Nuremberg Laws) with 1933 (Hitler becoming Chancellor) or 1938 (Kristallnacht).",
    },

    // Q02 — mcq (warmup) — answerIndex: 1
    {
      id: "exam-2-q02",
      kind: "mcq",
      topicId: "the-holocaust",
      guideRef: "roots-nazi-ideology",
      difficulty: "warmup",
      question:
        "How did Nazi antisemitism differ fundamentally from earlier forms of religious prejudice in European history?",
      options: [
        "Nazi ideology focused strictly on economic taxes and left Jewish religious life untouched",
        "Nazi ideology used pseudo-scientific race theory to label Jews a biological group who could never assimilate",
        "Nazi ideology urged Jewish citizens to convert to Christianity so they could hold full legal equality",
        "Nazi ideology emerged only after 1945 and had no connection to earlier European stereotypes",
      ],
      answerIndex: 1,
      hints: [
        "Compare religious discrimination (based on faith) with Nazi racial ideology (based on ancestry and blood).",
        "Under the Nuremberg Laws, even people whose grandparents were Jewish were targeted regardless of their personal religion.",
      ],
      explanation:
        "Earlier medieval anti-Judaism targeted Jews primarily on religious grounds, sometimes allowing conversion. Nazi ideology distorted evolutionary ideas into false racial pseudo-science, classifying Jews by ancestry as a permanent biological enemy regardless of religious belief or assimilation into German society.",
    },

    // Q03 — short (core)
    {
      id: "exam-2-q03",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "escalation-1933-1939",
      difficulty: "core",
      question:
        "What German name — commonly rendered in English as the 'Night of Broken Glass' — refers to the state-orchestrated pogrom of 9–10 November 1938 against Jewish communities in Germany and Austria?",
      answer: {
        type: "text",
        accept: ["Kristallnacht", "Crystal Night", "November Pogrom", "Reichskristallnacht"],
        display: "Kristallnacht",
      },
      traps: [
        { spec: { type: "text", accept: ["Wannsee", "Wannsee Conference"] }, feedback: "The Wannsee Conference took place in January 1942 to coordinate the 'Final Solution', not in November 1938." },
        { spec: { type: "text", accept: ["Anschluss"] }, feedback: "The Anschluss was Germany's annexation of Austria in March 1938, eight months before the November Pogrom." },
      ],
      hints: [
        "The name refers to the shattered glass from thousands of attacked Jewish-owned shopfronts and synagogues.",
        "In German it combines the words for 'crystal' and 'night'.",
      ],
      solution: [
        "On 9–10 November 1938, SA paramilitaries and Nazi supporters burned hundreds of synagogues, vandalised thousands of businesses, murdered dozens of people, and sent around 30,000 Jewish men to concentration camps.",
        "This escalation is widely known as **Kristallnacht** (or the November Pogrom).",
      ],
      commonError: "Confusing Kristallnacht (November 1938) with the Night of the Long Knives (1934 political purge) or Wannsee (1942).",
    },

    // Q04 — mcq (core) with SVG — answerIndex: 3
    {
      id: "exam-2-q04",
      kind: "mcq",
      topicId: "the-holocaust",
      guideRef: "escalation-1933-1939",
      difficulty: "core",
      question:
        "Study the diagram showing the chronological escalation of Nazi persecution from 1933 to 1945. Why do historians emphasise that the Holocaust developed through **gradual, step-by-step stages** rather than beginning with extermination camps in 1933?",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage escalation diagram of Nazi persecution from early 1930s exclusion to wartime mass murder">' +
        '<rect x="0" y="0" width="560" height="245" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Step-by-Step Escalation of Nazi Persecution (1933–1945)</text>' +
        '<rect x="20" y="48" width="116" height="156" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/>' +
        '<text x="78" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Stage 1</text>' +
        '<text x="78" y="83" text-anchor="middle" font-size="10" fill="#475569">Early 1930s</text>' +
        '<line x1="34" y1="92" x2="122" y2="92" stroke="#cbd5e1"/>' +
        '<text x="78" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Social &amp; Economic</text>' +
        '<text x="78" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Exclusion</text>' +
        '<text x="78" y="147" text-anchor="middle" font-size="9.5" fill="#475569">Shop boycotts,</text>' +
        '<text x="78" y="161" text-anchor="middle" font-size="9.5" fill="#475569">job bans &amp; school</text>' +
        '<text x="78" y="175" text-anchor="middle" font-size="9.5" fill="#475569">propaganda</text>' +
        '<line x1="138" y1="126" x2="152" y2="126" stroke="#64748b" stroke-width="2"/>' +
        '<polygon points="154,126 147,121 147,131" fill="#64748b"/>' +
        '<rect x="156" y="48" width="116" height="156" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>' +
        '<text x="214" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Stage 2</text>' +
        '<text x="214" y="83" text-anchor="middle" font-size="10" fill="#92400e">Mid-1930s</text>' +
        '<line x1="170" y1="92" x2="258" y2="92" stroke="#fcd34d"/>' +
        '<text x="214" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Legal Stripping</text>' +
        '<text x="214" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">of Rights</text>' +
        '<text x="214" y="147" text-anchor="middle" font-size="9.5" fill="#475569">Citizenship</text>' +
        '<text x="214" y="161" text-anchor="middle" font-size="9.5" fill="#475569">revoked &amp; racial</text>' +
        '<text x="214" y="175" text-anchor="middle" font-size="9.5" fill="#475569">segregation laws</text>' +
        '<line x1="274" y1="126" x2="288" y2="126" stroke="#b45309" stroke-width="2"/>' +
        '<polygon points="290,126 283,121 283,131" fill="#b45309"/>' +
        '<rect x="292" y="48" width="116" height="156" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>' +
        '<text x="350" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">Stage 3</text>' +
        '<text x="350" y="83" text-anchor="middle" font-size="10" fill="#9a3412">Late 1930s</text>' +
        '<line x1="306" y1="92" x2="394" y2="92" stroke="#fdba74"/>' +
        '<text x="350" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">State-Directed</text>' +
        '<text x="350" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Violence</text>' +
        '<text x="350" y="147" text-anchor="middle" font-size="9.5" fill="#475569">Nationwide arson,</text>' +
        '<text x="350" y="161" text-anchor="middle" font-size="9.5" fill="#475569">mass arrests &amp;</text>' +
        '<text x="350" y="175" text-anchor="middle" font-size="9.5" fill="#475569">blocked escape</text>' +
        '<line x1="410" y1="126" x2="424" y2="126" stroke="#c2410c" stroke-width="2"/>' +
        '<polygon points="426,126 419,121 419,131" fill="#c2410c"/>' +
        '<rect x="428" y="48" width="112" height="156" rx="8" fill="#fee2e2" stroke="#991b1b" stroke-width="1.8"/>' +
        '<text x="484" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#7f1d1d">Stage 4</text>' +
        '<text x="484" y="83" text-anchor="middle" font-size="10" fill="#7f1d1d">1939–1945</text>' +
        '<line x1="442" y1="92" x2="526" y2="92" stroke="#fca5a5"/>' +
        '<text x="484" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Ghettos &amp;</text>' +
        '<text x="484" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e293b">Mass Murder</text>' +
        '<text x="484" y="147" text-anchor="middle" font-size="9.5" fill="#475569">Forced ghettos,</text>' +
        '<text x="484" y="161" text-anchor="middle" font-size="9.5" fill="#475569">mass shootings &amp;</text>' +
        '<text x="484" y="175" text-anchor="middle" font-size="9.5" fill="#475569">death camps</text>' +
        '<text x="280" y="226" text-anchor="middle" font-size="11" fill="#475569">Chronological Sequence of Nazi Anti-Jewish Policies (1933–1945)</text>' +
        '</svg>',
      options: [
        "Because Germany had no railway network or police force capable of arresting civilians before 1941",
        "Because early Nazi laws protected Jewish property rights until foreign armies invaded Poland in 1939",
        "Because European governments warmly welcomed all Jewish refugees until war closed shipping routes in 1942",
        "Because incremental legal exclusion and propaganda gradually isolated victims and conditioned bystanders to accept worse atrocities",
      ],
      answerIndex: 3,
      hints: [
        "Read how Stages 1 and 2 changed everyday society before Stage 4 began.",
        "Think about how stripping away neighbours' rights bit by bit eroded public empathy and opposition.",
      ],
      explanation:
        "Studying the step-by-step escalation shows how legal discrimination, propaganda, and economic exclusion stripped Jewish citizens of rights, wealth, and social protection over six years. Each stage normalised prejudice and conditioned wider society to look away, paving the path toward wartime ghettos and industrial mass murder. In reality, foreign immigration quotas also blocked many Jews from escaping well before 1939.",
    },

    // Q05 — short (core)
    {
      id: "exam-2-q05",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "ghettos-final-solution",
      difficulty: "core",
      question:
        "Give the German name for the mobile SS killing squads that followed the German army into Eastern Europe and the Soviet Union from 1941, carrying out mass shootings of Jewish communities.",
      answer: {
        type: "text",
        accept: ["Einsatzgruppen", "The Einsatzgruppen"],
        display: "Einsatzgruppen",
      },
      traps: [
        { spec: { type: "text", accept: ["Gestapo"] }, feedback: "The Gestapo was Nazi Germany's secret state police inside Germany and occupied cities, not the mobile mass-shooting units on the Eastern Front." },
        { spec: { type: "text", accept: ["Wehrmacht"] }, feedback: "The Wehrmacht was the regular German armed forces; although complicit in war crimes, the specific mobile SS killing squads had their own name." },
      ],
      hints: [
        "Literally translated, the German compound word means 'task forces' or 'deployment groups'.",
        "Their victims were forced to dig pits outside towns and villages across Ukraine, Belarus, and the Baltic states.",
      ],
      solution: [
        "Following the June 1941 invasion of the Soviet Union, four mobile SS units called the **Einsatzgruppen** conducted mass shootings across Eastern Europe.",
        "Alongside local collaborators, they murdered more than one million Jewish men, women, and children before the extermination camps were fully expanded.",
      ],
      commonError: "Confusing the Einsatzgruppen (mobile SS killing squads) with the Gestapo (secret police).",
    },

    // Q06 — short (core)
    {
      id: "exam-2-q06",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "ghettos-final-solution",
      difficulty: "core",
      question:
        "Name the January 1942 meeting held at a lakeside villa outside Berlin where senior Nazi officials coordinated the Europe-wide implementation of the 'Final Solution'.",
      answer: {
        type: "text",
        accept: ["Wannsee Conference", "The Wannsee Conference", "Wannsee"],
        display: "Wannsee Conference",
      },
      traps: [
        { spec: { type: "text", accept: ["Nuremberg Rally", "Nuremberg"] }, feedback: "Nuremberg was the site of the 1935 racial laws and the postwar 1945–46 war crimes trials, not the January 1942 coordination meeting." },
        { spec: { type: "text", accept: ["Munich Conference", "Munich"] }, feedback: "The Munich Conference took place in September 1938 over Czechoslovakia, not in January 1942." },
      ],
      hints: [
        "Chaired by Reinhard Heydrich, it took its name from a suburban lake south-west of Berlin.",
        "Government ministries met to align railways, deportations, and extermination camps across occupied Europe.",
      ],
      solution: [
        "On 20 January 1942, fifteen senior Nazi and state officials met at the **Wannsee Conference**.",
        "Rather than inventing mass murder from scratch — shootings and early gassings had already begun — the conference coordinated all branches of the German state to carry out the 'Final Solution' systematically.",
      ],
      commonError: "Writing 'Nuremberg' instead of the 'Wannsee Conference'.",
    },

    // Q07 — mcq (core) — answerIndex: 0
    {
      id: "exam-2-q07",
      kind: "mcq",
      topicId: "the-holocaust",
      guideRef: "ghettos-final-solution",
      difficulty: "core",
      question:
        "Alongside the systematic murder of six million European Jews, which other groups were also persecuted and murdered under Nazi racial and political policies?",
      options: [
        "Roma and Sinti people, people with disabilities, political prisoners, and Soviet prisoners of war",
        "Swiss bankers, Swedish diplomats, neutral Red Cross nurses, and Japanese military attachés",
        "Only German citizens who belonged to the Nazi Party and lived in Berlin before 1933",
        "Exclusively foreign soldiers captured in Western Europe after the Normandy landings of 1944",
      ],
      answerIndex: 0,
      hints: [
        "Remember that Nazi racial ideology targeted anyone labelled 'undesirable' or 'inferior', as well as political opponents.",
        "Recall the T4 programme against disabled people and the genocide of Roma and Sinti communities.",
      ],
      explanation:
        "While European Jews were uniquely targeted for total continent-wide annihilation, the Nazi regime also systematically murdered hundreds of thousands of Roma and Sinti people, over 200,000 people with physical and mental disabilities, millions of Soviet prisoners of war, Polish civilians, Jehovah's Witnesses, homosexual men, and political opponents.",
    },

    // Q08 — short (core)
    {
      id: "exam-2-q08",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "core",
      question:
        "In which year did Jewish resistance fighters in the Warsaw Ghetto launch the largest armed uprising against Nazi deportations?",
      answer: { type: "number", value: 1943 },
      traps: [
        { spec: { type: "number", value: 1939 }, feedback: "1939 was the German invasion of Poland; the sealed Warsaw Ghetto was created in 1940 and the uprising took place three years later." },
        { spec: { type: "number", value: 1941 }, feedback: "1941 was when Germany invaded the USSR; the Warsaw Ghetto Uprising began in April two years later." },
        { spec: { type: "number", value: 1945 }, feedback: "1945 was the final defeat of Nazi Germany and liberation of the camps, two years after the Warsaw Ghetto Uprising." },
      ],
      hints: [
        "It began on 19 April, the eve of Passover, after most residents had already been deported to Treblinka in summer 1942.",
        "Outgunned fighters held off heavily armed German forces for nearly a month, two years before the war ended.",
      ],
      solution: [
        "The Warsaw Ghetto Uprising broke out on 19 April **1943**.",
        "Led by young Jewish fighters such as Mordechai Anielewicz, the uprising demonstrated extraordinary courage and inspired later revolts in Treblinka and Sobibor.",
      ],
      commonError: "Confusing the 1943 Warsaw Ghetto Uprising with the 1944 Warsaw Uprising by the Polish Home Army.",
    },

    // Q09 — mcq (core) — answerIndex: 2
    {
      id: "exam-2-q09",
      kind: "mcq",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "core",
      question:
        "What do historians mean by **'spiritual resistance'** during the Holocaust?",
      options: [
        "Formal diplomatic treaties negotiated between neutral governments and Nazi military commanders",
        "Armed partisan raids on German railway lines and ammunition depots across Eastern Europe",
        "Preserving human dignity, secret schools, faith, art, and underground archives despite dehumanisation",
        "Refusing to pay wartime factory taxes while living safely outside German-occupied territories",
      ],
      answerIndex: 2,
      hints: [
        "Notice the word 'spiritual' — it contrasts with physical or armed combat.",
        "Think of Emanuel Ringelblum's buried Oyneg Shabes archive in Warsaw and secret ghetto classrooms.",
      ],
      explanation:
        "Spiritual resistance describes non-violent efforts by victims to uphold humanity, culture, faith, education, and historical truth when the Nazis sought to erase their identity and memory. Examples include secret ghetto schools, underground music and theatre, religious observance, and buried archives like Oyneg Shabes. Armed raids on railways were forms of physical/armed resistance.",
    },

    // Q10 — short (warmup)
    {
      id: "exam-2-q10",
      kind: "short",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "warmup",
      question:
        "In which year did the United Nations adopt the Convention on the Prevention and Punishment of the Crime of Genocide in direct response to the Holocaust?",
      answer: { type: "number", value: 1948 },
      traps: [
        { spec: { type: "number", value: 1945 }, feedback: "1945 was the end of WWII and founding of the UN; the Genocide Convention was adopted three years later." },
        { spec: { type: "number", value: 1946 }, feedback: "1946 saw the verdicts of the main Nuremberg Trial; the UN Genocide Convention followed two years later." },
        { spec: { type: "number", value: 1950 }, feedback: "It was adopted in December on the day before the Universal Declaration of Human Rights — two years earlier." },
      ],
      hints: [
        "It was adopted on 9 December, the same year as the Universal Declaration of Human Rights.",
        "This happened three years after the end of the Second World War.",
      ],
      solution: [
        "On 9 December **1948**, the United Nations General Assembly adopted the Genocide Convention.",
        "Using the legal term coined by Raphael Lemkin, it formally defined genocide as a crime under international law.",
      ],
      commonError: "Confusing 1948 (UN Genocide Convention) with 1945 (liberation and end of WWII).",
    },

    // Q11 — short (warmup)
    {
      id: "exam-2-q11",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "british-raj-amritsar",
      difficulty: "warmup",
      question:
        "In which year did British-led troops under Brigadier-General Dyer open fire on an unarmed crowd at Jallianwala Bagh in Amritsar?",
      answer: { type: "number", value: 1919 },
      traps: [
        { spec: { type: "number", value: 1914 }, feedback: "1914 was the start of WWI; Amritsar occurred the year after WWI ended, when Britain passed the Rowlatt Acts." },
        { spec: { type: "number", value: 1930 }, feedback: "1930 was the year of Gandhi's Dandi Salt March, eleven years after Amritsar." },
        { spec: { type: "number", value: 1942 }, feedback: "1942 was the Quit India Movement during WWII, twenty-three years after Amritsar." },
      ],
      hints: [
        "It took place in April, just five months after the end of the First World War.",
        "Indians had hoped wartime loyalty would bring self-rule, but Britain instead passed the repressive Rowlatt Acts.",
      ],
      solution: [
        "On 13 April **1919**, Brigadier-General Dyer ordered troops to fire without warning on thousands of unarmed people trapped inside Jallianwala Bagh.",
        "The massacre permanently damaged British moral authority in India.",
      ],
      commonError: "Confusing 1919 (Amritsar Massacre) with 1930 (Salt March) or 1942 (Quit India).",
    },

    // Q12 — mcq (warmup) — answerIndex: 1
    {
      id: "exam-2-q12",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "british-raj-amritsar",
      difficulty: "warmup",
      question:
        "Why was the Jallianwala Bagh (Amritsar) Massacre a decisive turning point in the Indian independence movement?",
      options: [
        "It forced the British Parliament to grant full independence to India before the end of 1920",
        "It shattered moderate Indians' faith in British fairness and shifted Congress toward demanding full self-rule",
        "It ended all cooperation between Mahatma Gandhi and the Indian National Congress for the next twenty years",
        "It convinced the Muslim League to disband and merge permanently with British colonial administrators",
      ],
      answerIndex: 1,
      hints: [
        "Think about how moderate Indian leaders (including Gandhi, who had supported Britain in WWI) reacted to Dyer's brutality.",
        "Note that Rabindranath Tagore returned his British knighthood in protest.",
      ],
      explanation:
        "Before 1919, many Indian National Congress moderates still hoped Britain would gradually grant fair constitutional reform after India's huge WWI sacrifice. The massacre — and the leniency shown to General Dyer by sections of the British press and House of Lords — destroyed trust in British rule and fuelled mass nationalism under Gandhi.",
    },

    // Q13 — short (core)
    {
      id: "exam-2-q13",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "core",
      question:
        "Give the one-word Sanskrit term — literally meaning 'truth-force' — that Mahatma Gandhi used for his philosophy of disciplined, non-violent civil disobedience.",
      answer: {
        type: "text",
        accept: ["Satyagraha"],
        display: "Satyagraha",
      },
      traps: [
        { spec: { type: "text", accept: ["Swaraj"] }, feedback: "Swaraj means 'self-rule' (the goal), whereas this question asks for Gandhi's method meaning 'truth-force'." },
        { spec: { type: "text", accept: ["Khadi"] }, feedback: "Khadi is hand-spun Indian cloth worn during boycotts, not the philosophy meaning 'truth-force'." },
        { spec: { type: "text", accept: ["Ahimsa"] }, feedback: "Ahimsa means non-violence in general; Gandhi coined a specific Sanskrit term meaning 'holding firmly to truth' ('truth-force')." },
      ],
      hints: [
        "It combines the Sanskrit root 'satya' (truth) with 'agraha' (insistence or holding firmly).",
        "Gandhi first developed it in South Africa before bringing it to India's freedom struggle.",
      ],
      solution: [
        "Gandhi coined **Satyagraha** ('truth-force') to distinguish active, courageous non-violent civil disobedience from weak 'passive resistance'.",
        "Participants willingly accepted arrest or hardship without retaliating, exposing the moral injustice of colonial laws.",
      ],
      commonError: "Confusing Satyagraha (the method: truth-force) with Swaraj (the goal: self-rule) or Khadi (hand-spun cloth).",
    },

    // Q14 — mcq (core) with SVG — answerIndex: 3
    {
      id: "exam-2-q14",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "core",
      question:
        "Study the schematic of the 1930 Dandi Salt March. Why did Gandhi's choice of **salt** prove so effective in uniting Indians and embarrassing the British Raj?",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic of the 1930 Dandi Salt March route from Sabarmati Ashram to Dandi on the Arabian Sea coast">' +
        '<rect x="0" y="0" width="560" height="245" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">The 1930 Dandi Salt March: Anatomy of a Protest Campaign</text>' +
        '<rect x="24" y="46" width="320" height="176" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.6"/>' +
        '<path d="M 54 182 Q 112 162 152 132 T 236 92 T 310 74" fill="none" stroke="#6d28d9" stroke-width="3.5" stroke-dasharray="7,4"/>' +
        '<circle cx="310" cy="74" r="9" fill="#6d28d9"/>' +
        '<circle cx="54" cy="182" r="9" fill="#0369a1"/>' +
        '<text x="294" y="60" text-anchor="end" font-size="11.5" font-weight="700" fill="#4c1d95">Sabarmati Ashram (Start: 12 Mar 1930)</text>' +
        '<text x="70" y="198" font-size="11.5" font-weight="700" fill="#0369a1">Dandi Coast (End: 6 Apr 1930)</text>' +
        '<text x="186" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">24 days · 240 miles on foot</text>' +
        '<text x="186" y="164" text-anchor="middle" font-size="10.5" fill="#475569">Thousands joined along village stops</text>' +
        '<rect x="358" y="46" width="178" height="52" rx="8" fill="#ede9fe" stroke="#c4b5fd"/>' +
        '<text x="447" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#4c1d95">March 12, 1930</text>' +
        '<text x="447" y="83" text-anchor="middle" font-size="10" fill="#1e293b">78 initial marchers set out</text>' +
        '<rect x="358" y="108" width="178" height="52" rx="8" fill="#dcfce7" stroke="#86efac"/>' +
        '<text x="447" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">April 6, 1930</text>' +
        '<text x="447" y="145" text-anchor="middle" font-size="10" fill="#1e293b">Salt gathered at Dandi shore</text>' +
        '<rect x="358" y="170" width="178" height="52" rx="8" fill="#fef3c7" stroke="#fcd34d"/>' +
        '<text x="447" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Mass Response</text>' +
        '<text x="447" y="207" text-anchor="middle" font-size="10" fill="#1e293b">60,000+ arrested; global press</text>' +
        '</svg>',
      options: [
        "Salt was a rare luxury bought only by wealthy British officers in London, hurting Parliament's personal wealth",
        "Breaking salt jars triggered an immediate mutiny across every British naval base in the Mediterranean Sea",
        "Gandhi secretly used the 24-day march to stockpile imported rifles along the Gujarat coastline for an uprising",
        "Everyone in India needed salt regardless of religion or class, so defying the tax united millions and exposed colonial hypocrisy",
      ],
      answerIndex: 3,
      hints: [
        "Think about who in India needed salt every single day — and who held the legal monopoly over making and taxing it.",
        "Why did taxing a basic mineral found freely along India's own coastline look morally indefensible to international journalists?",
      ],
      explanation:
        "Salt was an essential daily staple needed by every Indian across caste, class, and religious lines. Because the British Raj banned Indians from making their own salt and taxed it heavily, boiling seawater at Dandi was an act of peaceful defiance anyone could replicate — uniting millions and exposing Britain's harsh crackdown before global press cameras.",
    },

    // Q15 — short (core)
    {
      id: "exam-2-q15",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "gandhi-satyagraha-salt-march",
      difficulty: "core",
      question:
        "What Hindi word names the hand-spun, hand-woven Indian cloth that Gandhi encouraged people to make and wear instead of imported British factory textiles?",
      answer: {
        type: "text",
        accept: ["Khadi", "Khaddar"],
        display: "Khadi",
      },
      traps: [
        { spec: { type: "text", accept: ["Satyagraha"] }, feedback: "Satyagraha was Gandhi's philosophy of non-violent truth-force, not the name of hand-spun cloth." },
        { spec: { type: "text", accept: ["Charkha"] }, feedback: "The charkha is the spinning wheel itself; this question asks for the name of the hand-spun cloth." },
      ],
      hints: [
        "It was spun on the charkha (spinning wheel) and worn as a visible badge of economic self-reliance.",
        "Boycotting Lancashire factory cloth hit British textile exports directly.",
      ],
      solution: [
        "Gandhi urged Indians to spin and wear **khadi** — simple hand-spun cotton cloth.",
        "Wearing khadi reduced visible class differences among protesters while putting economic pressure on British cotton mills.",
      ],
      commonError: "Confusing khadi (the hand-spun cloth) with the charkha (the spinning wheel used to make it).",
    },

    // Q16 — short (core)
    {
      id: "exam-2-q16",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "quit-india-ww2",
      difficulty: "core",
      question:
        "In which year did the Indian National Congress launch the 'Quit India' movement demanding an immediate end to British rule during the Second World War?",
      answer: { type: "number", value: 1942 },
      traps: [
        { spec: { type: "number", value: 1930 }, feedback: "1930 was the Dandi Salt March; Quit India happened twelve years later during WWII." },
        { spec: { type: "number", value: 1939 }, feedback: "1939 was when WWII broke out in Europe; Quit India was launched after the failure of the Cripps Mission three years later." },
        { spec: { type: "number", value: 1947 }, feedback: "1947 was the year India finally gained independence, five years after Quit India." },
      ],
      hints: [
        "It occurred mid-way through the Second World War, in the same year Singapore fell to Japan.",
        "Gandhi delivered his famous 'Do or Die' speech in Bombay in August of this year.",
      ],
      solution: [
        "In August **1942**, following the failure of the Cripps Mission, Congress launched the **Quit India** campaign.",
        "Although British authorities swiftly jailed Gandhi and Congress leaders, widespread protests showed Britain could no longer rule India by consent.",
      ],
      commonError: "Confusing 1942 (Quit India) with 1947 (Independence) or 1930 (Salt March).",
    },

    // Q17 — mcq (core) — answerIndex: 0
    {
      id: "exam-2-q17",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "quit-india-ww2",
      difficulty: "core",
      question:
        "How did Clement Attlee's 1945 Labour election victory in Britain accelerate the end of the British Raj in India?",
      options: [
        "Labour favoured Indian self-rule and recognised that war-bankrupted Britain could no longer afford to hold India by force",
        "Labour sent two million extra British troops to India to crush the Indian National Congress and extend colonial rule",
        "Labour immediately abolished the Muslim League and made Jawaharlal Nehru Prime Minister of Britain and India",
        "Labour refused to negotiate with Indian politicians until Winston Churchill returned to office in 1951",
      ],
      answerIndex: 0,
      hints: [
        "Contrast Clement Attlee's Labour Party with Winston Churchill's strong opposition to Indian independence.",
        "Remember Britain's severe financial debts and postwar reconstruction needs in 1945.",
      ],
      explanation:
        "Unlike Winston Churchill, Prime Minister Clement Attlee and his 1945 Labour government were committed to decolonisation and knew war-exhausted, indebted Britain lacked the money and manpower to police a rebellious subcontinent. Attlee therefore prioritised a rapid transfer of power.",
    },

    // Q18 — short (core)
    {
      id: "exam-2-q18",
      kind: "short",
      topicId: "indian-independence",
      guideRef: "independence-partition-1947",
      difficulty: "core",
      question:
        "Give the name of the British lawyer who had never visited India before being given only five weeks in 1947 to draw the partition border between India and Pakistan.",
      answer: {
        type: "text",
        accept: ["Cyril Radcliffe", "Sir Cyril Radcliffe", "Radcliffe"],
        display: "Sir Cyril Radcliffe",
      },
      traps: [
        { spec: { type: "text", accept: ["Mountbatten", "Louis Mountbatten", "Lord Mountbatten"] }, feedback: "Lord Mountbatten was the last Viceroy who accelerated the timetable, not the lawyer who drew the boundary line." },
        { spec: { type: "text", accept: ["Attlee", "Clement Attlee"] }, feedback: "Clement Attlee was the British Prime Minister in London, not the chairman of the Boundary Commission." },
      ],
      hints: [
        "The hurried border across Punjab and Bengal is still named after him (the ___ Line).",
        "Do not confuse him with Viceroy Lord Mountbatten, who oversaw the overall handover.",
      ],
      solution: [
        "British barrister **Sir Cyril Radcliffe** chaired the 1947 Boundary Commission.",
        "Working from outdated maps in intense heat in just five weeks, he drew the Radcliffe Line dividing Punjab and Bengal, announced days after independence.",
      ],
      commonError: "Confusing Sir Cyril Radcliffe (who drew the border) with Lord Mountbatten (the Viceroy who announced the plan).",
    },

    // Q19 — mcq (core) — answerIndex: 2
    {
      id: "exam-2-q19",
      kind: "mcq",
      topicId: "indian-independence",
      guideRef: "independence-partition-1947",
      difficulty: "core",
      question:
        "Why did the Partition of August 1947 result in catastrophic displacement and communal violence across Punjab and Bengal?",
      options: [
        "Indian and Pakistani leaders signed a joint plan requiring every village to burn its own crops before moving",
        "The British Raj kept its boundary maps secret for ten years while continuing to govern both new countries",
        "Hurried borders cut through mixed communities with minimal security, leaving millions stranded as terrified minorities",
        "United Nations peacekeepers ordered all railway trains in northern India to stop running for six months",
      ],
      answerIndex: 2,
      hints: [
        "Consider the effects of Mountbatten bringing the handover date forward by ten months to August 1947.",
        "Millions of Hindus, Muslims, and Sikhs discovered overnight that their homes lay on the 'wrong' side of the new border.",
      ],
      explanation:
        "Lord Mountbatten accelerated independence from June 1948 to August 1947, leaving barely five weeks to draw the Radcliffe Line across deeply mixed provinces. With borders announced only after independence and inadequate policing to protect fleeing families, roughly 10–15 million people were uprooted and hundreds of thousands were killed in communal violence.",
    },

    // Q20 — mcq (core) — answerIndex: 3
    {
      id: "exam-2-q20",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "source-provenance-nop",
      difficulty: "core",
      question:
        "A historian researching life inside the Warsaw Ghetto examines a secret diary kept by a teenager in 1941 alongside official German administrative reports. What makes the secret diary especially valuable?",
      options: [
        "A single teenager's diary always gives exact Europe-wide deportation totals that archives omit",
        "Secret diaries are written purely for Nazi censors, so they reveal official government strategy",
        "Diaries are secondary interpretations written decades later with full hindsight of the war",
        "It captures raw human experience and daily resilience that sterile official Nazi bureaucracy hid or distorted",
      ],
      answerIndex: 3,
      hints: [
        "Apply NOP: compare the Nature and Purpose of a personal secret diary versus an official perpetrator report.",
        "What perspective do Nazi administrative tables deliberately erase?",
      ],
      explanation:
        "Official Nazi administrative documents used cold bureaucratic euphemisms and propaganda, erasing victims' humanity. A contemporary secret diary — written privately without expecting Nazi censors to approve it — provides irreplaceable insight into lived suffering, fear, dignity, and daily resilience, complementing archive statistics through cross-referencing.",
    },

    // Q21 — mcq (challenge) — answerIndex: 1
    {
      id: "exam-2-q21",
      kind: "mcq",
      topicId: "modern-protest-movements",
      guideRef: "historical-interpretations",
      difficulty: "challenge",
      question:
        "Why do two well-qualified historians studying the same archives on 1947 Indian independence still reach different conclusions about whether Gandhi or WWII mattered more?",
      options: [
        "One historian must have invented fake dates because archival evidence always leads to one single conclusion",
        "Historians weigh causation differently, placing different emphasis on individual leadership versus global economic pressures",
        "Primary sources from 1945–47 were completely destroyed, so historians must guess without any documents",
        "Only British historians study WWII economics while Indian historians are banned from reading London archives",
      ],
      answerIndex: 1,
      hints: [
        "Recall why historical interpretations differ even when scholars are honest and evidence-based.",
        "Think of the contrast between 'Great Man' / agency explanations and structural / economic explanations.",
      ],
      explanation:
        "Historical interpretation involves judgment, not copying one fixed list of facts. One scholar may emphasise human agency and moral mass protest (Gandhi and Congress making India ungovernable), while another stresses structural global shifts (WWII debt and British political change). Both use genuine evidence but weigh causal importance differently.",
    },

    // Q22 — written (4 marks, challenge)
    {
      id: "exam-2-q22",
      kind: "written",
      topicId: "the-holocaust",
      guideRef: "resistance-justice-remembrance",
      difficulty: "challenge",
      marks: 4,
      question:
        "Explain why historians distinguish between **perpetrators**, **bystanders**, **rescuers**, and **resisters** when studying the Holocaust, supporting each role with clear historical understanding or examples.",
      hints: [
        "Define each of the four roles clearly rather than lumping everyone outside the victims together.",
        "Include concrete examples: e.g. SS/officials (perpetrators), silent citizens (bystanders), Oskar Schindler or Denmark (rescuers), Warsaw Ghetto fighters or secret archives (resisters).",
        "Show how choices at every level shaped what happened.",
      ],
      modelAnswer:
        "Distinguishing these four roles shows that the genocide resulted from millions of human choices rather than one dictator acting alone. First, active criminals — such as SS commanders, Einsatzgruppen squads, and railway bureaucrats — planned and carried out the systematic murder of six million Jews and other targeted groups. Second, passive onlookers stayed silent out of fear, conformity, or indifference, which allowed legal exclusion and deportations to proceed unchallenged. Third, courageous helpers like Oskar Schindler and ordinary Danes who ferried Jewish neighbours to neutral Sweden risked death to save lives. Fourth, brave defiers fought back both through armed revolts like the 1943 Warsaw Ghetto Uprising and through spiritual defiance such as secret schools and buried archives.",
      markScheme: [
        {
          point: "Explains the role of perpetrators who planned, organised, or carried out persecution and mass murder (e.g. SS, Einsatzgruppen, bureaucrats).",
          keywords: ["ss", "einsatzgruppen", "bureaucrats", "planned", "murder", "commanders"],
        },
        {
          point: "Explains how bystanders' silence, fear, conformity, or indifference enabled persecution to escalate unchallenged.",
          keywords: ["silent", "silence", "indifference", "conformity", "unchallenged", "passive"],
        },
        {
          point: "Explains rescuers who risked their lives to shelter or save victims, with a valid example (e.g. Oskar Schindler, Danish rescue, Irena Sendler).",
          keywords: ["schindler", "danish", "danes", "sweden", "sendler", "save lives", "risked"],
        },
        {
          point: "Explains armed and/or spiritual resistance by victims with a valid example (e.g. Warsaw Ghetto Uprising, partisans, underground archives).",
          keywords: ["warsaw", "uprising", "spiritual", "archives", "partisans", "revolt"],
        },
      ],
      commonError: "Describing only perpetrators and victims while overlooking how bystander inaction enabled atrocities and how rescuers and resisters exercised moral courage.",
    },

    // Q23 — written (4 marks, challenge) with SVG Interpretations Card
    {
      id: "exam-2-q23",
      kind: "written",
      topicId: "modern-protest-movements",
      guideRef: "historical-interpretations",
      difficulty: "challenge",
      marks: 4,
      question:
        "Study Interpretations A and B on the card. Explain why the two historians disagree about the main cause of Indian independence in 1947, and give a supported judgment on how far you agree with Interpretation A.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison card showing two contrasting historians\' interpretations on why British rule in India ended in 1947">' +
        '<rect x="0" y="0" width="560" height="250" rx="10" fill="#ffffff"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#171a2f">Historical Interpretations: Why Did Britain Leave India in 1947?</text>' +
        '<rect x="20" y="42" width="252" height="190" rx="10" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>' +
        '<rect x="20" y="42" width="252" height="32" rx="10" fill="#6d28d9"/>' +
        '<text x="146" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">INTERPRETATION A (Dr R. Sen, 2010)</text>' +
        '<text x="34" y="96" font-size="11" fill="#1e293b">&quot;Above all, it was Gandhi&apos;s moral</text>' +
        '<text x="34" y="114" font-size="11" fill="#1e293b">leadership and mass non-violent</text>' +
        '<text x="34" y="132" font-size="11" fill="#1e293b">civil disobedience — from cloth</text>' +
        '<text x="34" y="150" font-size="11" fill="#1e293b">boycotts and the Salt March to</text>' +
        '<text x="34" y="168" font-size="11" fill="#1e293b">wartime mass protests — that</text>' +
        '<text x="34" y="186" font-size="11" fill="#1e293b">shattered British legitimacy and</text>' +
        '<text x="34" y="204" font-size="11" fill="#1e293b">won independence.&quot;</text>' +
        '<rect x="288" y="42" width="252" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>' +
        '<rect x="288" y="42" width="252" height="32" rx="10" fill="#0369a1"/>' +
        '<text x="414" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">INTERPRETATION B (Prof. H. Cole, 2016)</text>' +
        '<text x="302" y="96" font-size="11" fill="#1e293b">&quot;Britain left India primarily because</text>' +
        '<text x="302" y="114" font-size="11" fill="#1e293b">the Second World War left London</text>' +
        '<text x="302" y="132" font-size="11" fill="#1e293b">nearly bankrupt and exhausted. With</text>' +
        '<text x="302" y="150" font-size="11" fill="#1e293b">Attlee&apos;s Labour government elected</text>' +
        '<text x="302" y="168" font-size="11" fill="#1e293b">and Indian soldiers mutinying,</text>' +
        '<text x="302" y="186" font-size="11" fill="#1e293b">holding the empire became</text>' +
        '<text x="302" y="204" font-size="11" fill="#1e293b">economically impossible.&quot;</text>' +
        '</svg>',
      hints: [
        "Summarise the contrasting emphasis of Dr Sen (grassroots protest & moral leadership) versus Prof. Cole (WWII economic bankruptcy & British politics).",
        "Explain WHY they differ — they focus on different causal perspectives (internal protest agency vs external global crisis).",
        "Conclude with a balanced judgment showing how both factors reinforced each other rather than acting in isolation.",
      ],
      modelAnswer:
        "The two scholars reach different conclusions because they prioritise different types of historical causation. Dr Sen emphasises internal Indian agency, pointing to Gandhi's Satyagraha campaigns, the 1930 Salt March, and Quit India destroying British moral authority. By contrast, Prof. Cole stresses external structural pressures, highlighting Britain's massive WWII debts, Clement Attlee's 1945 Labour election victory, and the 1946 naval mutinies that made holding the Raj unaffordable. I partly agree with Sen because without decades of mass mobilisation by Gandhi, Nehru, Jinnah, and ordinary Indians, Britain would have faced little urgency to leave; however, WWII was the decisive catalyst that stripped Britain of the wealth and political will to resist Indian demands any longer.",
      markScheme: [
        {
          point: "Explains Interpretation A's argument with specific supporting evidence (Gandhi, Satyagraha, Salt March, Quit India, moral authority).",
          keywords: ["satyagraha", "salt march", "quit india", "gandhi", "moral"],
        },
        {
          point: "Explains Interpretation B's argument with specific supporting evidence (WWII debt/bankruptcy, Attlee's Labour government, military mutinies).",
          keywords: ["debt", "bankrupt", "attlee", "labour", "mutin"],
        },
        {
          point: "Explains why the historians disagree (different causal weight placed on internal protest agency vs external economic/structural pressures).",
          keywords: ["agency", "structural", "prioritise", "external", "internal", "weight"],
        },
        {
          point: "Reaches a balanced judgment linking both factors (mass protest made India ungovernable while WWII acted as the decisive catalyst).",
          keywords: ["partly", "catalyst", "ungovernable", "both", "together", "however"],
        },
      ],
      commonError: "Simply paraphrasing the two quotes without explaining WHY historians weigh causes differently or reaching a reasoned judgment.",
    },

    // Q24 — written (3 marks, challenge)
    {
      id: "exam-2-q24",
      kind: "written",
      topicId: "the-holocaust",
      guideRef: "roots-nazi-ideology",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain how Nazi ideology, propaganda, and pre-war laws between 1933 and 1939 systematically isolated German Jews from wider society.",
      hints: [
        "Point 1: Mention how schools, newspapers, and films spread racist scapegoating.",
        "Point 2: Mention economic and workplace exclusion (shop boycotts, bans from civil service, teaching, law, and medicine).",
        "Point 3: Mention legal stripping of citizenship (1935 Nuremberg Laws) and escalating terror (1938 Kristallnacht).",
      ],
      modelAnswer:
        "First, Goebbels' media machine, newspapers like Der Stürmer, and Nazi school textbooks constantly scapegoated Jews for Germany's 1918 defeat and economic collapse, encouraging non-Jewish citizens to view neighbours as racial outsiders. Second, economic exclusion — starting with the April 1933 shop boycott and bans from civil service, universities, law, and medicine — stripped families of livelihoods and daily social contact. Third, the 1935 Nuremberg Laws revoked German citizenship and banned mixed marriages, before the 1938 Kristallnacht pogrom unleashed open terror and mass arrests while strict foreign visa quotas blocked escape.",
      markScheme: [
        {
          point: "Explains role of antisemitic propaganda in media/schools scapegoating Jews for WWI defeat or economic crisis.",
          keywords: ["scapegoat", "goebbels", "textbooks", "newspapers", "1918", "outsiders"],
        },
        {
          point: "Explains economic and professional exclusion (1933 boycotts, dismissal from civil service, professions, or universities).",
          keywords: ["boycott", "civil service", "livelihood", "medicine", "universities", "professions"],
        },
        {
          point: "Explains legal stripping of rights and escalating violence (1935 Nuremberg Laws removing citizenship and/or 1938 Kristallnacht).",
          keywords: ["nuremberg", "citizenship", "kristallnacht", "marriages", "pogrom"],
        },
      ],
      commonError: "Jumping straight to wartime extermination camps instead of explaining how pre-war 1933–39 policies isolated Jews step by step inside Germany.",
    },

    // Q25 — written (3 marks, challenge)
    {
      id: "exam-2-q25",
      kind: "written",
      topicId: "indian-independence",
      guideRef: "independence-partition-1947",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain why historians view August 1947 in South Asia as both a landmark triumph of anti-colonialism and a profound human tragedy.",
      hints: [
        "Point 1 (Triumph): What did independence achieve after nearly 200 years of British rule, and how did it inspire later movements?",
        "Point 2 (Cause of tragedy): Mention the hurried Mountbatten Plan and Radcliffe Line dividing mixed provinces.",
        "Point 3 (Human cost): Mention the scale of displacement (millions of refugees) and communal bloodshed.",
      ],
      modelAnswer:
        "On one hand, independence was a historic triumph: it ended nearly two centuries of British imperial rule over hundreds of millions of people and inspired anti-colonial and civil rights movements worldwide through Gandhi's example of mass non-violence. On the other hand, the rushed Mountbatten timetable and the five-week Radcliffe Line split deeply intertwined communities in Punjab and Bengal into India and Pakistan overnight. This triggered one of history's largest forced migrations, uprooting over ten million refugees and costing hundreds of thousands of lives in terrible communal violence.",
      markScheme: [
        {
          point: "Explains the triumph: ended nearly two centuries of British imperial rule and inspired global decolonisation / non-violent movements.",
          keywords: ["imperial", "centuries", "inspired", "non-violence", "decolonis", "global"],
        },
        {
          point: "Explains the political/territorial source of tragedy: rushed Mountbatten timetable and Radcliffe boundary splitting Punjab and Bengal into India and Pakistan.",
          keywords: ["mountbatten", "radcliffe", "punjab", "bengal", "pakistan", "split"],
        },
        {
          point: "Identifies the severe human cost: millions of refugees displaced and hundreds of thousands killed in communal violence.",
          keywords: ["refugees", "migrations", "communal", "uprooting", "million", "violence"],
        },
      ],
      commonError: "Writing only about independence or only about Partition violence instead of explicitly balancing both sides of the question.",
    },
  ],
};
