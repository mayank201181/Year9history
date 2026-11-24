import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "the-holocaust-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "roots-nazi-ideology",
      question:
        "In which year was Adolf Hitler appointed Chancellor of Germany, enabling the Nazi Party to turn antisemitism into state law?",
      answer: { type: "number", value: 1933, display: "1933" },
      traps: [
        {
          spec: { type: "number", value: 1935 },
          feedback: "1935 was the year of the Nuremberg Laws—Hitler became Chancellor two years earlier.",
        },
        {
          spec: { type: "number", value: 1939 },
          feedback: "1939 was when WWII began in Europe; Nazi state persecution started six years earlier.",
        },
      ],
      hints: [
        "It happened shortly after the political crisis of the Great Depression in January of this year.",
        "The April boycott of Jewish shops and Civil Service Law followed just months later.",
      ],
      solution: [
        "Adolf Hitler was appointed Chancellor on 30 January 1933.",
        "Within months, the Nazi regime began issuing anti-Jewish decrees and dismantling democratic protections.",
      ],
    },
    {
      id: "the-holocaust-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "roots-nazi-ideology",
      question:
        "Which phrase describes the Nazi regime's false claim that Jews and socialists betrayed Germany at the end of the First World War?",
      options: [
        "The 'iron curtain' doctrine",
        "The 'domino theory' warning",
        "The 'separate but equal' rule",
        "The 'stab-in-the-back' myth",
      ],
      answerIndex: 3,
      hints: [
        "In German, this propaganda myth was called the *Dolchstoßlegende*.",
      ],
      explanation:
        "The 'stab-in-the-back' myth falsely blamed Jewish citizens and socialists for Germany's 1918 defeat. The other phrases belong to Cold War politics or US segregation history.",
    },
    {
      id: "the-holocaust-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "escalation-1933-1939",
      question:
        "Name the 1935 Nazi race decrees that stripped German Jews of citizenship and prohibited marriage between Jews and non-Jewish Germans.",
      answer: {
        type: "text",
        accept: ["Nuremberg Laws", "The Nuremberg Laws", "Nuremberg Race Laws", "Nuremberg decrees"],
        display: "Nuremberg Laws",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Kristallnacht", "Enabling Act", "Wannsee Protocol"] },
          feedback: "Check the date: the 1935 citizenship and marriage decrees were named after the city of the Nazi Party rally.",
        },
      ],
      hints: [
        "They were announced in September 1935 at the annual Nazi Party rally.",
        "The city's name was later also associated with the 1945–46 post-war trials.",
      ],
      solution: [
        "The Nuremberg Laws (15 September 1935) comprised the Reich Citizenship Law and the Law for the Protection of German Blood and German Honour.",
        "They defined Jewishness by grandparents' ancestry and stripped Jews of German citizenship.",
      ],
    },
    {
      id: "the-holocaust-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "escalation-1933-1939",
      question:
        "In which year did *Kristallnacht* ('Night of Broken Glass') take place across Germany and annexed Austria?",
      answer: { type: "number", value: 1938, display: "1938" },
      traps: [
        {
          spec: { type: "number", value: 1935 },
          feedback: "1935 was the Nuremberg Laws; Kristallnacht happened three years later in November.",
        },
        {
          spec: { type: "number", value: 1939 },
          feedback: "Kristallnacht took place in November of the year *before* the invasion of Poland.",
        },
      ],
      hints: [
        "It happened in November, four months after the Évian Conference.",
        "It took place less than a year before WWII started in September 1939.",
      ],
      solution: [
        "Kristallnacht occurred on 9–10 November 1938.",
        "Over 1,400 synagogues were burned or damaged and roughly 30,000 Jewish men were sent to concentration camps.",
      ],
    },
    {
      id: "the-holocaust-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "ghettos-final-solution",
      question:
        "Who were the *Einsatzgruppen* deployed following the June 1941 invasion of the Soviet Union?",
      options: [
        "Allied resistance couriers smuggling documents from Warsaw",
        "SS mobile killing squads carrying out mass shootings of civilians",
        "German court lawyers drafting the 1935 citizenship decrees",
        "Danish fishermen ferrying Jewish refugees across to Sweden",
      ],
      answerIndex: 1,
      hints: [
        "They operated behind the advancing German army during Operation Barbarossa.",
        "Their atrocities included the massacre at Babi Yar outside Kyiv.",
      ],
      explanation:
        "The Einsatzgruppen were SS mobile killing units that murdered roughly 1.5–2 million Jews, alongside Roma and Soviet POWs, through mass shootings across occupied Eastern Europe.",
    },
    {
      id: "the-holocaust-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "ghettos-final-solution",
      question:
        "Name the 20 January 1942 meeting in a Berlin suburb where 15 senior Nazi officials coordinated the Europe-wide logistics of the 'Final Solution'.",
      answer: {
        type: "text",
        accept: ["Wannsee Conference", "The Wannsee Conference", "Wannsee"],
        display: "Wannsee Conference",
      },
      hints: [
        "It was chaired by Reinhard Heydrich, with Adolf Eichmann taking the minutes.",
        "It is named after a lakeside villa on the outskirts of Berlin.",
      ],
      solution: [
        "The Wannsee Conference (20 January 1942) aligned SS offices and civilian ministries to coordinate the deportation and murder of European Jews.",
      ],
    },
    {
      id: "the-holocaust-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      guideRef: "ghettos-final-solution",
      question:
        "Approximately how many million European Jews were murdered by Nazi Germany and its collaborators during the Holocaust? Give your answer as a single whole number of millions.",
      answer: { type: "number", value: 6, display: "6 million" },
      traps: [
        {
          spec: { type: "number", value: 6000000 },
          feedback: "The question asks for the number of *millions* (type 6).",
        },
      ],
      hints: [
        "This represented roughly two-thirds of Europe's pre-war Jewish population.",
      ],
      solution: [
        "Approximately 6 million European Jews—including around 1.5 million children—were murdered during the Holocaust.",
      ],
    },
    {
      id: "the-holocaust-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "resistance-justice-remembrance",
      question:
        "Which uprising in April–May 1943 was the largest single Jewish armed revolt against Nazi forces during the Second World War?",
      options: [
        "The Sobibór Camp Escape",
        "The Danish Coastal Rescue",
        "The Warsaw Ghetto Uprising",
        "The Kindertransport Movement",
      ],
      answerIndex: 2,
      hints: [
        "Led by Mordechai Anielewicz and young fighters of the ŻOB and ŻZW.",
        "They held off heavily armed SS troops for almost a month inside Poland's capital.",
      ],
      explanation:
        "The Warsaw Ghetto Uprising (19 April – 16 May 1943) saw roughly 750 lightly armed Jewish fighters resist German forces for nearly four weeks. Sobibór was a major camp revolt in October 1943, while the Danish rescue and Kindertransport were non-military rescue operations.",
    },
    {
      id: "the-holocaust-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "escalation-1933-1939",
      marks: 3,
      question:
        "Explain three distinct obstacles that made it difficult for many Jewish families to leave Germany before September 1939.",
      hints: [
        "Think about what the Nazi government took from families before granting exit papers.",
        "Think about how foreign governments responded at the July 1938 Évian Conference.",
        "Also consider personal and family ties inside Germany.",
      ],
      modelAnswer:
        "First, the Nazi regime imposed steep emigration taxes and asset confiscation that stripped refugees of their savings before leaving. Second, foreign countries maintained strict immigration quotas and refused to expand visas, as shown at the 1938 Évian Conference. Third, many citizens had deep roots in Germany or elderly relatives unable to travel across borders.",
      markScheme: [
        {
          point: "Nazi financial restrictions (emigration taxes, seizing property/savings)",
          keywords: ["tax", "confiscat", "savings", "wealth", "property", "assets", "money"],
        },
        {
          point: "Foreign countries' strict immigration quotas / refusal of visas (e.g. Évian Conference)",
          keywords: ["quota", "visa", "evian", "évian", "foreign", "refused", "borders"],
        },
        {
          point: "Deep personal roots, hope that persecution would pass, or caring for elderly relatives",
          keywords: ["elderly", "relatives", "roots", "home", "hoped", "belong"],
        },
      ],
    },
    {
      id: "the-holocaust-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "resistance-justice-remembrance",
      marks: 3,
      question:
        "State three ways post-war international justice responded to the atrocities of 1933–1945.",
      hints: [
        "Think about the 1945–46 tribunal held in Germany and the legal principle it established.",
        "Think about the two landmark United Nations documents adopted in December 1948.",
      ],
      modelAnswer:
        "First, the Nuremberg Trials (1945–46) prosecuted 22 senior Nazi leaders for Crimes against Humanity. Second, Nuremberg established the legal principle that following superior orders is never an acceptable defence. Third, in December 1948 the United Nations adopted the Genocide Convention (using Raphael Lemkin's term) alongside the Universal Declaration of Human Rights.",
      markScheme: [
        {
          point: "Nuremberg Trials (1945–46) prosecuting Nazi leaders for Crimes against Humanity",
          keywords: ["nuremberg", "crimes against humanity", "tribunal", "prosecuted"],
        },
        {
          point: "Rejection of the 'following orders' defence / individual accountability",
          keywords: ["orders", "defence", "defense", "accountab", "excuse"],
        },
        {
          point: "1948 UN Genocide Convention (and/or Universal Declaration of Human Rights)",
          keywords: ["genocide", "convention", "1948", "lemkin", "human rights"],
        },
      ],
    },
  ],
  papers: [
    {
      id: "the-holocaust-p1",
      title: "Practice Paper 1: Antisemitism, Escalation & Wartime Genocide",
      questions: [
        {
          id: "the-holocaust-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "roots-nazi-ideology",
          question:
            "Name the Nazi Minister of Public Enlightenment and Propaganda who controlled newspapers, radio, cinema, and schools from 1933.",
          answer: {
            type: "text",
            accept: ["Joseph Goebbels", "Goebbels", "Dr Joseph Goebbels"],
            display: "Joseph Goebbels",
          },
          hints: [
            "His surname begins with G and he directed Nazi media censorship and propaganda films.",
          ],
          solution: [
            "Joseph Goebbels led the Reich Ministry of Public Enlightenment and Propaganda from March 1933.",
          ],
        },
        {
          id: "the-holocaust-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "escalation-1933-1939",
          question:
            "How many years elapsed between the passing of the Nuremberg Race Laws (1935) and *Kristallnacht* (1938)?",
          answer: { type: "number", value: 3, display: "3 years" },
          hints: [
            "Subtract 1935 from 1938.",
          ],
          solution: [
            "1938 − 1935 = 3 years (September 1935 to November 1938).",
          ],
        },
        {
          id: "the-holocaust-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "roots-nazi-ideology",
          question:
            "Why did Nazi ideology refer to the German national community as the *Volksgemeinschaft*?",
          options: [
            "To promote racial unity while excluding Jews, disabled people, and political dissenters",
            "To guarantee multi-party parliamentary voting rights for every resident in Germany",
            "To create a European customs union connecting German and French coal producers",
            "To protect independent trade unions and regional churches from state interference",
          ],
          answerIndex: 0,
          hints: [
            "Think about who was allowed inside the Nazi 'people's community' and who was cast out.",
            "Membership depended on Nazi racial criteria and total political conformity.",
          ],
          explanation:
            "*Volksgemeinschaft* ('people's community') was used to foster solidarity among racially 'approved' Germans while justifying the ruthless exclusion and persecution of minorities, disabled people, and political opponents.",
        },
        {
          id: "the-holocaust-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "escalation-1933-1939",
          question:
            "Name the July 1938 international conference in France where 32 nations discussed Jewish refugees fleeing Nazi rule, yet nearly all refused to increase immigration quotas.",
          answer: {
            type: "text",
            accept: ["Évian Conference", "Evian Conference", "Evian", "Évian"],
            display: "Évian Conference",
          },
          hints: [
            "It was held at a French spa town on Lake Geneva in July 1938.",
            "The town's name begins with E.",
          ],
          solution: [
            "The Évian Conference (July 1938) exposed the unwillingness of Western and global governments to expand refugee visas during the Great Depression.",
          ],
        },
        {
          id: "the-holocaust-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "escalation-1933-1939",
          question:
            "Approximately how many thousand Jewish men were arrested and sent to concentration camps (Dachau, Buchenwald, Sachsenhausen) during *Kristallnacht* in November 1938? Give your answer in thousands (e.g. type 15 for 15,000).",
          answer: { type: "number", value: 30, display: "30 thousand" },
          traps: [
            {
              spec: { type: "number", value: 30000 },
              feedback: "The question asks for the number of thousands—type 30.",
            },
          ],
          hints: [
            "It was the first mass internment of German Jews solely on the basis of being Jewish.",
            "The figure is between 25 thousand and 35 thousand.",
          ],
          solution: [
            "Roughly 30,000 Jewish men (30 thousand) were arrested during Kristallnacht and sent to Dachau, Buchenwald, and Sachsenhausen, where hundreds died from brutal treatment.",
          ],
        },
        {
          id: "the-holocaust-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "escalation-1933-1939",
          question:
            "What was meant by the Nazi policy of 'Aryanisation' (*Arisierung*), which accelerated sharply after November 1938?",
          options: [
            "Building new sports stadiums in Berlin for the 1936 Olympic Games",
            "The forced transfer of Jewish-owned businesses and property to non-Jewish Germans",
            "Translating medieval German literature into modern school poetry books",
            "Negotiating joint trade tariffs between Germany, Italy, and neutral Switzerland",
          ],
          answerIndex: 1,
          hints: [
            "Think about how the Nazi regime systematically stripped Jewish citizens of economic livelihoods.",
            "Owners were forced to sell shops and factories at a fraction of their true value or had them seized.",
          ],
          explanation:
            "'Aryanisation' systematically transferred Jewish-owned shops, banks, factories, and homes into non-Jewish hands at far below market value, impoverishing Jewish families while enriching Nazi supporters and the state.",
        },
        {
          id: "the-holocaust-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "ghettos-final-solution",
          question:
            "Name the Nazi mass murder programme begun in 1939 targeting people with physical and mental disabilities, which tested gas-chamber techniques later expanded in extermination camps.",
          answer: {
            type: "text",
            accept: ["Aktion T4", "T4", "T4 programme", "T4 program", "Action T4"],
            display: "Aktion T4",
          },
          hints: [
            "It was named after the Berlin street address (Tiergartenstraße 4) of its headquarters.",
            "Its short code combines the letter T with a single digit.",
          ],
          solution: [
            "Aktion T4 murdered over 250,000 people with disabilities and pioneered gas-chamber killing techniques and personnel later transferred to extermination camps in Poland.",
          ],
        },
        {
          id: "the-holocaust-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ghettos-final-solution",
          question:
            "Which largest Nazi ghetto in occupied Poland was sealed in November 1940, confining over 400,000 people inside roughly 1.3 square miles?",
          answer: {
            type: "text",
            accept: ["Warsaw Ghetto", "Warsaw", "The Warsaw Ghetto"],
            display: "Warsaw Ghetto",
          },
          hints: [
            "It was located in the capital city of Poland.",
          ],
          solution: [
            "The Warsaw Ghetto held over 400,000 people under starvation rations and disease before mass deportations to Treblinka in 1942 and the 1943 Uprising.",
          ],
        },
        {
          id: "the-holocaust-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ghettos-final-solution",
          question:
            "Which chemical agent was used inside the industrial gas chambers at Auschwitz-Birkenau?",
          options: [
            "Chlorine gas",
            "Mustard gas",
            "Zyklon B",
            "Tear gas",
          ],
          answerIndex: 2,
          hints: [
            "It was originally manufactured as a hydrogen-cyanide-based pesticide.",
            "Operation Reinhard camps like Treblinka mainly used carbon monoxide from engines, whereas Birkenau used pellets of this substance.",
          ],
          explanation:
            "At Auschwitz-Birkenau, SS perpetrators dropped Zyklon B pellets (hydrogen cyanide) into sealed gas chambers disguised as shower rooms. Chlorine and mustard gas were battlefield weapons from the First World War.",
        },
        {
          id: "the-holocaust-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "ghettos-final-solution",
          question:
            "Name the senior SS leader who chaired the Wannsee Conference on 20 January 1942.",
          answer: {
            type: "text",
            accept: ["Reinhard Heydrich", "Heydrich"],
            display: "Reinhard Heydrich",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Adolf Hitler", "Hitler"] },
              feedback: "Hitler did not attend Wannsee—Heinrich Himmler's deputy chaired the meeting while Adolf Eichmann took the minutes.",
            },
          ],
          hints: [
            "He was head of the Reich Security Main Office (RSHA) and Heinrich Himmler's deputy.",
            "His surname starts with H (and Adolf Eichmann served as his secretary at the conference).",
          ],
          solution: [
            "Reinhard Heydrich chaired the Wannsee Conference on 20 January 1942 to coordinate state agencies in executing the 'Final Solution'.",
          ],
        },
        {
          id: "the-holocaust-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ghettos-final-solution",
          question:
            "Why was the German invasion of the Soviet Union (Operation Barbarossa, 22 June 1941) a decisive turning point toward continental genocide?",
          options: [
            "It forced Nazi Germany to close all camps in Poland to save railway locomotives",
            "It persuaded Soviet leaders to open immediate refugee corridors into Siberia",
            "It ended the persecution of Roma and disabled people inside German cities",
            "It launched an ideological war of annihilation featuring Einsatzgruppen mass shootings",
          ],
          answerIndex: 3,
          hints: [
            "Think about what happened to Jewish communities in newly occupied Ukraine, Belarus, and the Baltic states from summer 1941.",
            "Mass shootings at sites like Babi Yar began immediately after this invasion.",
          ],
          explanation:
            "Operation Barbarossa was planned as an ideological war of racial annihilation. Behind the German army, Einsatzgruppen and collaborators carried out mass shootings of roughly 1.5–2 million Jews as well as Roma and Soviet POWs.",
        },
        {
          id: "the-holocaust-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "ghettos-final-solution",
          question:
            "Name the ravine outside Kyiv where 33,771 Jewish civilians were murdered by shooting over two days in September 1941.",
          answer: {
            type: "text",
            accept: ["Babi Yar", "Babyn Yar"],
            display: "Babi Yar",
          },
          hints: [
            "It is a two-word name starting with B, located on the outskirts of Ukraine's capital.",
            "It is one of the most notorious sites of Einsatzgruppen mass shootings.",
          ],
          solution: [
            "At Babi Yar (Babyn Yar) on 29–30 September 1941, Einsatzgruppe C and collaborators shot 33,771 Kyiv Jews in just 48 hours.",
          ],
        },
        {
          id: "the-holocaust-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "roots-nazi-ideology",
          marks: 4,
          question:
            "Explain how the Nazi regime used propaganda and education after 1933 to turn ordinary German citizens against Jewish neighbours.",
          hints: [
            "Name the ministry led by Joseph Goebbels and specific media outlets it controlled.",
            "Include what changed in schools and youth groups (textbooks, biology lessons, Hitler Youth).",
            "Explain the psychological goal: scapegoating and dehumanisation.",
          ],
          modelAnswer:
            "Under Joseph Goebbels, the Ministry of Public Enlightenment censored free press and flooded newspapers like Der Stürmer, radio, and films with antisemitic caricatures. School biology and history textbooks were rewritten to teach false 'Aryan' racial hierarchy to children and Hitler Youth members. By repeating the 'stab-in-the-back' scapegoating myth for WWI defeat and Depression hardship, officials systematically dehumanised Jewish people so exclusion appeared acceptable to bystanders.",
          markScheme: [
            {
              point: "Control of mass media via Goebbels's ministry (newspapers like Der Stürmer, radio, film)",
              keywords: ["goebbels", "stürmer", "sturmer", "radio", "film", "censored"],
            },
            {
              point: "Indoctrination of young people via rewritten school textbooks / Hitler Youth",
              keywords: ["textbook", "biology", "hitler youth", "indoctrinat", "children"],
            },
            {
              point: "Scapegoating Jews for national crises (WWI defeat / stab-in-the-back / Depression)",
              keywords: ["scapegoat", "stab", "depression", "defeat", "versailles", "blamed"],
            },
            {
              point: "Dehumanising victims to normalise exclusion and reduce public protest",
              keywords: ["dehumanis", "dehumaniz", "normalis", "normaliz", "inferior", "aryan"],
            },
          ],
        },
        {
          id: "the-holocaust-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "escalation-1933-1939",
          marks: 4,
          question:
            "Describe how anti-Jewish persecution escalated step by step from April 1933 to November 1938.",
          hints: [
            "Start with April 1933 (shop boycott and Civil Service dismissals).",
            "Explain the 1935 legal turning point (Nuremberg Laws stripping citizenship).",
            "Conclude with November 1938 (Kristallnacht mass violence, synagogues burned, ~30,000 arrested, 1bn RM fine).",
          ],
          modelAnswer:
            "In April 1933, persecution began with the one-day shop boycott and the Civil Service Law dismissing Jewish professionals from courts, schools, and offices. In September 1935, the Nuremberg Laws stripped away German citizenship and prohibited mixed marriages based on grandparent ancestry. By 1938, 'Aryanisation' seized Jewish businesses, culminating in November's Kristallnacht pogrom—burning over 1,400 synagogues, smashing 7,500 shops, arresting 30,000 Jewish men into concentration camps, and imposing a 1 billion Reichsmark fine.",
          markScheme: [
            {
              point: "1933 economic/professional exclusion (boycott and Civil Service Law)",
              keywords: ["boycott", "civil service", "dismiss", "profession"],
            },
            {
              point: "1935 Nuremberg Laws stripping citizenship and banning mixed marriage",
              keywords: ["nuremberg", "citizenship", "marriage", "1935"],
            },
            {
              point: "1938 Kristallnacht violence (synagogues burned, shops smashed, murders)",
              keywords: ["kristallnacht", "synagogue", "pogrom", "broken glass", "shops"],
            },
            {
              point: "Mass arrests (~30,000 men sent to camps) and economic seizure (Aryanisation / 1 billion fine)",
              keywords: ["30,000", "30000", "concentration", "aryanisation", "aryanization", "billion", "fine"],
            },
          ],
        },
        {
          id: "the-holocaust-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ghettos-final-solution",
          marks: 4,
          question:
            "Explain how the outbreak of World War II transformed Nazi policy from forced emigration into industrial mass murder.",
          hints: [
            "Explain the demographic shift after invading Poland (1939) and the USSR (1941).",
            "Trace the intermediate step of walled ghettos and lethal conditions.",
            "Include the 1941 Einsatzgruppen mass shootings and the 1942 Wannsee coordination of extermination camps.",
          ],
          modelAnswer:
            "Invading Poland in 1939 and the Soviet Union in 1941 placed millions of Eastern European Jews under German control while war sealed off emigration routes. Authorities first confined victims in overcrowded walled ghettos like Warsaw, where starvation and typhus killed tens of thousands. After June 1941, Einsatzgruppen mobile squads shot 1.5–2 million Jews in Eastern Europe. Finally, the January 1942 Wannsee Conference coordinated state ministries and railways to deport European Jews to industrial extermination camps such as Auschwitz-Birkenau and Treblinka.",
          markScheme: [
            {
              point: "Invasion of Poland (1939) / USSR (1941) brought millions more Jews under Nazi rule and closed emigration",
              keywords: ["poland", "soviet", "ussr", "millions", "emigration"],
            },
            {
              point: "Forced confinement in overcrowded walled ghettos causing starvation and disease",
              keywords: ["ghetto", "warsaw", "starvation", "typhus"],
            },
            {
              point: "Einsatzgruppen mass shootings from June 1941 (e.g. Babi Yar)",
              keywords: ["einsatzgruppen", "shoot", "mobile", "babi yar", "1941"],
            },
            {
              point: "Wannsee Conference (1942) coordinating deportations to extermination camps (Auschwitz / Treblinka)",
              keywords: ["wannsee", "extermination", "auschwitz", "treblinka", "gas chamber", "zyklon"],
            },
          ],
        },
      ],
    },
    {
      id: "the-holocaust-p2",
      title: "Practice Paper 2: Resistance, Rescuers, Liberation & Historical Significance",
      questions: [
        {
          id: "the-holocaust-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "resistance-justice-remembrance",
          question:
            "In which year did the Warsaw Ghetto Uprising take place (19 April – 16 May)?",
          answer: { type: "number", value: 1943, display: "1943" },
          traps: [
            {
              spec: { type: "number", value: 1944 },
              feedback: "1944 was the separate Polish Warsaw Uprising; the Jewish Warsaw Ghetto Uprising happened in April–May 1943.",
            },
          ],
          hints: [
            "It took place the year after the 1942 mass deportations from Warsaw to Treblinka.",
            "It was one year before the city-wide Polish Warsaw Uprising of 1944.",
          ],
          solution: [
            "The Warsaw Ghetto Uprising began on 19 April 1943 and lasted until 16 May 1943.",
          ],
        },
        {
          id: "the-holocaust-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "Name the historian who founded the secret *Oyneg Shabes* underground archive inside the Warsaw Ghetto to preserve truthful evidence for future generations.",
          answer: {
            type: "text",
            accept: ["Emanuel Ringelblum", "Ringelblum"],
            display: "Emanuel Ringelblum",
          },
          hints: [
            "His team buried thousands of testimonies and diaries in tin boxes and milk cans.",
            "His surname starts with R.",
          ],
          solution: [
            "Historian Emanuel Ringelblum led the Oyneg Shabes archive; two of the three buried caches were recovered after the war.",
          ],
        },
        {
          id: "the-holocaust-p2-q03",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "resistance-justice-remembrance",
          question:
            "To which neutral country did Danish rescuers ferry approximately 7,200 Danish Jews in October 1943?",
          options: [
            "Switzerland",
            "Portugal",
            "Ireland",
            "Sweden",
          ],
          answerIndex: 3,
          hints: [
            "Look across the narrow Øresund strait just east of Copenhagen.",
          ],
          explanation:
            "Over three weeks in October 1943, Danish fishermen, citizens, and resistance networks ferried ~7,200 Jews across the Øresund strait to safety in neutral Sweden, saving over 90% of Denmark's Jewish population.",
        },
        {
          id: "the-holocaust-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "Name the Polish social worker and member of the underground Żegota network who helped smuggle around 2,500 Jewish children out of the Warsaw Ghetto.",
          answer: {
            type: "text",
            accept: ["Irena Sendler", "Sendler", "Irena Sendlerowa"],
            display: "Irena Sendler",
          },
          hints: [
            "She recorded the children's real names on slips of paper buried in glass jars under an apple tree.",
            "Her initials are I.S.",
          ],
          solution: [
            "Irena Sendler (recognised as Righteous Among the Nations) risked torture and execution to save roughly 2,500 children from the Warsaw Ghetto.",
          ],
        },
        {
          id: "the-holocaust-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "resistance-justice-remembrance",
          question:
            "In which year was Auschwitz-Birkenau liberated by Soviet forces on 27 January?",
          answer: { type: "number", value: 1945, display: "1945" },
          traps: [
            {
              spec: { type: "number", value: 1944 },
              feedback: "Majdanek was liberated in July 1944; Auschwitz was liberated in January of the final year of WWII.",
            },
          ],
          hints: [
            "It happened in January of the final year of the Second World War in Europe.",
          ],
          solution: [
            "Soviet Red Army forces liberated Auschwitz-Birkenau on 27 January 1945, a date now observed as International Holocaust Remembrance Day.",
          ],
        },
        {
          id: "the-holocaust-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "Which official title honours non-Jewish rescuers such as Raoul Wallenberg (Sweden) and Chiune Sugihara (Japan), who issued passes and visas saving thousands of lives?",
          options: [
            "Wartime State Collaborators",
            "Righteous Among the Nations",
            "Silent European Bystanders",
            "Camp Sonderkommando Units",
          ],
          answerIndex: 1,
          hints: [
            "This official honour is awarded by Yad Vashem, the World Holocaust Remembrance Center.",
            "It recognises extraordinary moral courage without financial reward.",
          ],
          explanation:
            "Both Raoul Wallenberg (in Budapest, 1944–45) and Chiune Sugihara (in Kaunas, Lithuania, 1940) are recognised by Yad Vashem as Righteous Among the Nations for risking their careers and lives to save thousands of Jews.",
        },
        {
          id: "the-holocaust-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "Name the Polish-Jewish lawyer who coined the term 'genocide' in 1944 and campaigned for the 1948 UN Genocide Convention.",
          answer: {
            type: "text",
            accept: ["Raphael Lemkin", "Lemkin", "Rafał Lemkin", "Rafal Lemkin"],
            display: "Raphael Lemkin",
          },
          hints: [
            "He lost nearly fifty members of his own family during the Holocaust.",
            "His surname starts with L.",
          ],
          solution: [
            "Raphael Lemkin coined 'genocide' in 1944 from Greek *genos* (race/tribe) and Latin *-cide* (killing), shaping the 1948 UN Genocide Convention.",
          ],
        },
        {
          id: "the-holocaust-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "Name the German city where the International Military Tribunal tried 22 major Nazi leaders between November 1945 and October 1946.",
          answer: {
            type: "text",
            accept: ["Nuremberg", "Nürnberg", "Nurnberg"],
            display: "Nuremberg",
          },
          hints: [
            "Ironically, it was the same city where the 1935 Nazi Race Laws had been proclaimed.",
            "Its name starts with N.",
          ],
          solution: [
            "The Allied tribunal was deliberately held in Nuremberg—the symbolic site of Nazi Party rallies and the 1935 Race Laws—to represent the restoration of international law.",
          ],
        },
        {
          id: "the-holocaust-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "What happened after Jewish prisoners staged a courageous armed uprising and mass escape at the Sobibór extermination camp in October 1943?",
          options: [
            "Soviet paratroopers immediately occupied the camp and turned it into a hospital",
            "SS authorities halted all deportations from Western Europe for the rest of the war",
            "Around 300 prisoners broke out and the Nazis demolished the camp to erase the site",
            "Local German judges pardoned the prisoners and closed all Operation Reinhard camps",
          ],
          answerIndex: 2,
          hints: [
            "Think about how the SS reacted when an extermination camp's secrecy was breached by a revolt.",
            "Dozens of escapees survived until liberation despite intense manhunts.",
          ],
          explanation:
            "Led by Alexander Pechersky and Leon Feldhendler on 14 October 1943, roughly 300 prisoners broke out of Sobibór (about 50–60 survived the war). Alarmed by the revolt, Himmler ordered Sobibór dismantled and ploughed over.",
        },
        {
          id: "the-holocaust-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          question:
            "In which year did the United Nations adopt both the Genocide Convention (9 December) and the Universal Declaration of Human Rights (10 December)? Type the 4-digit year.",
          answer: { type: "number", value: 1948, display: "1948" },
          traps: [
            {
              spec: { type: "number", value: 1945 },
              feedback: "1945 was when WWII ended and the UN was founded; these two landmark treaties were adopted three years later.",
            },
          ],
          hints: [
            "It took place three years after the end of the Second World War.",
            "It came two years after the conclusion of the main Nuremberg Trial (1946).",
          ],
          solution: [
            "The UN Genocide Convention (9 December 1948) and the Universal Declaration of Human Rights (10 December 1948) were direct international responses to Nazi atrocities.",
          ],
        },
        {
          id: "the-holocaust-p2-q11",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "resistance-justice-remembrance",
          question:
            "A historian examines the surviving diary of teenager Dawid Sierakowiak, written inside the Łódź Ghetto between 1939 and 1943. What is a genuine *limitation* of relying solely on this source to study the Holocaust?",
          options: [
            "Diaries written during wartime are always invented fiction rather than eyewitness testimony",
            "His diary gives zero insight into hunger, forced labour, or daily emotions inside the ghetto",
            "He wrote under strict orders from Allied intelligence officers in London during 1942",
            "His experience reflects one ghetto and cannot capture events across other camps or countries",
          ],
          answerIndex: 3,
          hints: [
            "Think about what one teenager confined inside one sealed ghetto could know—and could *not* know.",
            "Remember to distinguish a source's strengths (immediate eyewitness detail) from its scope limits.",
          ],
          explanation:
            "Dawid Sierakowiak's diary is extraordinary primary evidence of starvation, grief, and resilience inside Łódź, yet one teenager isolated in a single sealed ghetto could not observe wider Nazi planning (like Wannsee) or experiences across other occupied countries.",
        },
        {
          id: "the-holocaust-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "escalation-1933-1939",
          question:
            "Name the British-organised rescue effort of 1938–1939 that brought nearly 10,000 unaccompanied mostly Jewish children to safety in Britain.",
          answer: {
            type: "text",
            accept: ["Kindertransport", "The Kindertransport", "Kinder transport"],
            display: "Kindertransport",
          },
          hints: [
            "The name is a German compound word literally meaning 'children's transport'.",
            "It began shortly after Kristallnacht in late 1938.",
          ],
          solution: [
            "The Kindertransport rescued nearly 10,000 children from Germany, Austria, Czechoslovakia, and Danzig before WWII broke out in September 1939.",
          ],
        },
        {
          id: "the-holocaust-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          marks: 4,
          question:
            "Explain the difference between armed and spiritual opposition to Nazi persecution, giving a named historical example of each.",
          hints: [
            "Define armed opposition (fighting back with weapons) and cite Warsaw Ghetto Uprising (1943), Sobibór, or partisans.",
            "Define spiritual/cultural opposition (preserving identity, faith, education, and truth) and cite Oyneg Shabes, secret schools, or diaries.",
          ],
          modelAnswer:
            "Armed fighting involved physically confronting Nazi forces with smuggled weapons—for instance, in the April–May 1943 Warsaw Ghetto Uprising, where roughly 750 fighters under Mordechai Anielewicz held off SS troops for almost a month (or prisoner revolts at Sobibór and Treblinka). Spiritual and cultural defiance meant preserving human dignity, learning, and truth when the regime sought total erasure—exemplified by Emanuel Ringelblum's secret Oyneg Shabes archive, which buried testimonies in milk cans inside Warsaw.",
          markScheme: [
            {
              point: "Explains armed defiance (physical combat / revolts with smuggled weapons)",
              keywords: ["weapon", "fight", "combat", "revolt", "uprising", "partisan"],
            },
            {
              point: "Named example of armed resistance (Warsaw Ghetto Uprising, Treblinka, Sobibór, Bielski partisans)",
              keywords: ["warsaw", "anielewicz", "sobibor", "sobibór", "treblinka", "bielski"],
            },
            {
              point: "Explains spiritual/cultural defiance (preserving identity, education, faith, or historical truth)",
              keywords: ["dignity", "identity", "truth", "culture", "school", "diary", "diaries", "memory"],
            },
            {
              point: "Named example of spiritual/cultural resistance (Oyneg Shabes / Ringelblum, Anne Frank, Terezin art)",
              keywords: ["oyneg", "ringelblum", "archive", "milk can", "anne frank", "terezin", "sierakowiak"],
            },
          ],
        },
        {
          id: "the-holocaust-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "resistance-justice-remembrance",
          marks: 4,
          question:
            "Why was saving Jewish lives far more achievable in Denmark (October 1943) than in German-occupied Poland? Give two clear contrasts with supporting evidence.",
          hints: [
            "Compare geography: Denmark lay across a narrow strait from neutral Sweden.",
            "Compare occupation conditions and Nazi punishments in Denmark vs Poland (family execution in Poland vs intact civic networks in Denmark).",
          ],
          modelAnswer:
            "First, geography mattered greatly: Denmark sat just across the narrow Øresund strait from neutral Sweden, allowing fishermen and citizens to ferry roughly 7,200 people (over 90% of Danish Jews) to safety in October 1943, whereas occupied Poland had no accessible neutral sanctuary. Second, Nazi occupation rule in Poland was vastly harsher—sheltering a Jewish person meant immediate execution of the helper's entire family—whereas Danish institutions and police remained largely intact until 1943, enabling rapid community-wide warning after Duckwitz's leak.",
          markScheme: [
            {
              point: "Geographic proximity of Denmark to neutral Sweden across the strait",
              keywords: ["sweden", "neutral", "strait", "boat", "ferry", "sea"],
            },
            {
              point: "Specific evidence of Danish collective action (~7,200 saved / over 90% / Duckwitz leak)",
              keywords: ["7,200", "7200", "90%", "fishermen", "duckwitz"],
            },
            {
              point: "Harsher Nazi occupation in Poland, including death penalty for helpers' entire families",
              keywords: ["death penalty", "execution", "entire family", "families", "harsher", "brutal"],
            },
            {
              point: "Larger Polish Jewish population / absence of nearby neutral borders or intact national police",
              keywords: ["no neutral", "sanctuary", "institutions", "police", "border", "intact"],
            },
          ],
        },
        {
          id: "the-holocaust-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "resistance-justice-remembrance",
          marks: 4,
          question:
            "Assess why remembering the events of 1933–1945 remains historically and civically significant in the twenty-first century.",
          hints: [
            "Link to international law created directly afterwards (Nuremberg Principles, 1948 Genocide Convention, Universal Declaration of Human Rights).",
            "Link to warning signs in human societies (dehumanising propaganda, gradual loss of minority rights, bystander silence).",
          ],
          modelAnswer:
            "Remembrance remains vital first because the Holocaust reshaped modern international law through the Nuremberg Trials—rejecting 'following orders'—and the 1948 UN Genocide Convention and Universal Declaration of Human Rights. Second, studying how a modern educated democracy descended into totalitarian genocide teaches citizens to recognise early warning signs such as scapegoating, dehumanising propaganda, and incremental erosion of minority rights. Finally, honouring six million Jewish victims and millions of others challenges modern antisemitism, racism, and bystander indifference.",
          markScheme: [
            {
              point: "Enduring legal legacy (Nuremberg Principles / Crimes against Humanity / rejecting 'orders')",
              keywords: ["nuremberg", "orders", "crimes against humanity", "international law"],
            },
            {
              point: "Global human rights treaties (1948 UN Genocide Convention / Universal Declaration of Human Rights)",
              keywords: ["genocide convention", "human rights", "1948", "united nations"],
            },
            {
              point: "Civic warning about propaganda, scapegoating, and gradual erosion of rights",
              keywords: ["warning", "propaganda", "scapegoat", "dehumanis", "minority", "incremental"],
            },
            {
              point: "Combating modern antisemitism, prejudice, and bystander silence / honouring victims",
              keywords: ["antisemitism", "bystander", "indifference", "prejudice", "victims", "six million"],
            },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "the-holocaust-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ghettos-final-solution",
      question:
        "Historians sometimes debate 'intentionalist' versus 'functionalist' explanations for how the 'Final Solution' emerged. Which statement accurately captures a balanced modern synthesis of both views?",
      options: [
        "Hitler's antisemitic ideology drove persecution, while wartime radicalisation shaped the path to camps",
        "Hitler held no antisemitic beliefs before 1941 and local mayors forced him to open death camps",
        "Extermination camps were already completely built inside Berlin before Hitler became Chancellor",
        "Foreign diplomats at the Évian Conference drew up the detailed railway timetables for Wannsee",
      ],
      answerIndex: 0,
      hints: [
        "Intentionalists stress Hitler's long-standing ideological hatred; functionalists stress wartime radicalisation and bureaucratic competition.",
        "Modern historians combine both: ideology provided the direction, while WWII conquests radicalised policy into industrial murder.",
      ],
      explanation:
        "Most contemporary historians synthesise both interpretations: Hitler's radical racial antisemitism set the ideological drive from the outset, while wartime occupation of Poland and the USSR, closed emigration, and bureaucratic radicalisation pushed policy step by step toward extermination camps in 1941–42.",
    },
    {
      id: "the-holocaust-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ghettos-final-solution",
      question:
        "How many months elapsed between the start of Operation Barbarossa (June 1941) and the Wannsee Conference (January 1942)?",
      answer: { type: "number", value: 7, display: "7 months" },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "Count carefully from June 1941 to January 1942: Jul, Aug, Sep, Oct, Nov, Dec, Jan = 7 months.",
        },
      ],
      hints: [
        "Operation Barbarossa began on 22 June 1941; Wannsee took place on 20 January 1942.",
        "Count forward month by month from June to January.",
      ],
      solution: [
        "June 1941 to January 1942 is 7 months—during which Einsatzgruppen shot over half a million Jews and early gassing began at Chełmno (December 1941), proving mass murder preceded Wannsee.",
      ],
    },
    {
      id: "the-holocaust-ch-q03",
      kind: "written",
      difficulty: "challenge",
      guideRef: "ghettos-final-solution",
      marks: 5,
      question:
        "'The January 1942 Wannsee Conference marked the beginning of Nazi mass murder.' Evaluate this claim carefully using chronological evidence.",
      hints: [
        "State clearly how far you agree or disagree—the claim is inaccurate about *beginning* mass murder.",
        "Cite at least two pre-1942 forms of mass murder (Aktion T4 from 1939, starvation in ghettos 1939–41, Einsatzgruppen shootings from June 1941 like Babi Yar, Chełmno gassing Dec 1941).",
        "Explain what Wannsee *actually* did (coordinated civilian ministries and SS logistics for continent-wide deportations).",
      ],
      modelAnswer:
        "This claim is historically inaccurate because systematic killing was already well underway before January 1942. From 1939, Aktion T4 murdered over 250,000 disabled people using gas chambers, while tens of thousands starved inside sealed Polish ghettos like Warsaw. Following the June 1941 invasion of the USSR, Einsatzgruppen squads shot hundreds of thousands of Jews—including 33,771 at Babi Yar in September 1941—and Chełmno began gassing victims in December 1941. Rather than inventing genocide, Reinhard Heydrich's meeting coordinated 15 SS and civilian bureaucrats to organise railways and deportations across all of Europe.",
      markScheme: [
        {
          point: "Clear judgement rejecting the claim that Wannsee *started* mass killing",
          keywords: ["inaccurate", "disagree", "already", "before", "not the start", "not begin"],
        },
        {
          point: "Pre-1942 evidence: Aktion T4 (disabled people) and/or lethal ghetto starvation (1939–41)",
          keywords: ["t4", "disabled", "ghetto", "starv", "warsaw"],
        },
        {
          point: "Pre-1942 evidence: Einsatzgruppen mass shootings from June 1941 (e.g. Babi Yar)",
          keywords: ["einsatzgruppen", "shoot", "babi yar", "1941", "barbarossa"],
        },
        {
          point: "Pre-1942 gassing (Chełmno, Dec 1941) OR accurate explanation of Wannsee's true role (coordinating logistics)",
          keywords: ["chelmno", "chełmno", "coordinat", "logistics", "bureaucrat"],
        },
        {
          point: "Identifies key actors/mechanisms at Wannsee (Heydrich, Eichmann, civil ministries, Europe-wide railways)",
          keywords: ["heydrich", "eichmann", "ministr", "railway", "deportation", "europe"],
        },
      ],
    },
    {
      id: "the-holocaust-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "escalation-1933-1939",
      question:
        "Read this extract from a British newspaper editorial written on 12 November 1938: *'The savage attacks on synagogues and Jewish homes across Germany have shocked civilised opinion worldwide, yet unemployment at home leaves little room to relax Britain's visa rules.'* What does this source most strongly reveal about 1938?",
      options: [
        "British newspapers supported Nazi violence and approved of the arrest of German Jews",
        "Foreign public condemnation of Kristallnacht coexisted with strict refusal to open borders",
        "Britain immediately declared war on Germany in November 1938 to halt persecution",
        "British readers had zero access to news reports about Kristallnacht until after 1945",
      ],
      answerIndex: 1,
      hints: [
        "Notice the contrast between the first half of the sentence (moral shock) and the second half (immigration policy).",
        "Connect this directly to the July 1938 Évian Conference and the Kindertransport exception.",
      ],
      explanation:
        "The editorial demonstrates a painful historical tension: Western publics widely condemned Kristallnacht in newspapers, yet Depression-era economic anxieties meant governments kept strict adult immigration barriers (with the Kindertransport for unaccompanied children a rare humanitarian exception).",
    },
    {
      id: "the-holocaust-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "roots-nazi-ideology",
      marks: 5,
      question:
        "How far was the catastrophe of 1933–1945 caused by Nazi ideology alone, rather than by wartime circumstances and wider human conformity? Give a balanced judgement.",
      hints: [
        "Explain the indispensable role of Nazi racial ideology (biological antisemitism, Aryan supremacy, Lebensraum).",
        "Weigh wartime circumstances (invading Poland and the USSR placed millions under Nazi rule and closed emigration).",
        "Weigh wider participation and conformity (railway/civil bureaucrats, local collaborators, bystander silence).",
        "Reach a sustained, reasoned conclusion linking ideology as the driving force with war and bureaucracy as enablers.",
      ],
      modelAnswer:
        "Nazi racial ideology was the indispensable driving force: Hitler's biological antisemitism, false 'Aryan' hierarchy, and scapegoating for WWI defeat defined Jewish existence as a racial threat from the outset. However, ideology alone does not explain how industrial genocide happened. Wartime conquests of Poland (1939) and the USSR (1941) trapped millions under Nazi control and radicalised policy into Einsatzgruppen shootings and death camps. Equally vital was human conformity: railway clerks, civil ministries, local collaborators, and silent bystanders enabled a bureaucratic machine. Overall, Nazi ideology supplied the lethal intent, while WWII and widespread bureaucratic conformity turned intent into continental genocide.",
      markScheme: [
        {
          point: "Analyses role of Nazi racial ideology (biological antisemitism / Aryan supremacy / scapegoating)",
          keywords: ["biological", "aryan", "scapegoat", "antisemitism", "racial"],
        },
        {
          point: "Analyses wartime radicalisation (conquest of Poland/USSR placing millions under control / closed exits)",
          keywords: ["poland", "ussr", "soviet", "millions", "radicalis", "radicaliz"],
        },
        {
          point: "Analyses bureaucratic/institutional cooperation (railways, ministries, collaborators)",
          keywords: ["railway", "bureaucrat", "ministr", "collaborat"],
        },
        {
          point: "Analyses bystander silence / conformity enabling incremental escalation",
          keywords: ["bystander", "silent", "silence", "indifferen", "obey"],
        },
        {
          point: "Sustained, balanced conclusion weighing how factors interacted",
          keywords: ["overall", "however", "intent", "enabl", "together", "combin"],
        },
      ],
    },
    {
      id: "the-holocaust-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "resistance-justice-remembrance",
      question:
        "Why do historians argue that the Nuremberg Trials (1945–1946) were a revolutionary turning point in international law, even though some critics noted they were conducted by the victorious Allies?",
      options: [
        "They abolished national armies across Europe and created a single world government",
        "They prosecuted only low-ranking soldiers while exempting senior Nazi cabinet ministers",
        "They established individual legal responsibility for Crimes against Humanity under open evidence",
        "They relied exclusively on secret witnesses without entering captured German records into court",
      ],
      answerIndex: 2,
      hints: [
        "Think about the huge volume of Nazi Germany's own captured administrative records submitted as evidence at Nuremberg.",
        "Recall the Nuremberg Principles regarding sovereign immunity and 'following superior orders'.",
      ],
      explanation:
        "Despite debates over 'victor's justice', Nuremberg transformed international law by holding individual leaders accountable for Crimes against Humanity, rejecting 'following orders' as a defence, and building a monumental public record from Nazi Germany's own captured documents.",
    },
    {
      id: "the-holocaust-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "resistance-justice-remembrance",
      marks: 4,
      question:
        "A classmate remarks, 'If people did not pick up weapons against the Nazis, they were not really resisting.' Write a historically rigorous reply evaluating this viewpoint.",
      hints: [
        "Challenge the narrow definition of defiance by noting the severe obstacles to armed action (starvation, scarce guns, collective reprisals).",
        "Point out that armed revolts *did* happen (Warsaw Ghetto Uprising 1943, Sobibór, Treblinka, partisans).",
        "Explain why spiritual, cultural, and documentary defiance (Oyneg Shabes archive, secret schools, religious observance, diaries) directly opposed Nazi dehumanisation.",
      ],
      modelAnswer:
        "That viewpoint defines opposition far too narrowly and overlooks the extreme reality of Nazi terror. First, armed revolts did occur despite near-impossible odds—including the month-long 1943 Warsaw Ghetto Uprising, camp revolts at Sobibór and Treblinka, and forest partisans—even though starvation, scarce guns, and mass reprisals against innocent families made fighting almost suicidal. Second, because the Nazi goal was total dehumanisation and erasure, spiritual and documentary acts—such as Emanuel Ringelblum's buried Oyneg Shabes archive, secret ghetto schools, and personal diaries—were vital forms of courage that preserved humanity and truth.",
      markScheme: [
        {
          point: "Directly evaluates and challenges the narrow definition",
          keywords: ["narrow", "overlook", "disagree", "incomplete", "not only", "more than"],
        },
        {
          point: "Explains extreme obstacles to armed action (starvation, lack of arms, collective reprisals)",
          keywords: ["starvation", "reprisal", "punish", "scarce", "suicidal", "families"],
        },
        {
          point: "Cites genuine armed revolts (Warsaw Ghetto Uprising, Sobibór, Treblinka, partisans)",
          keywords: ["warsaw", "sobibor", "sobibór", "treblinka", "partisan"],
        },
        {
          point: "Explains and exemplifies spiritual/documentary defiance (Oyneg Shabes, diaries, secret schools)",
          keywords: ["spiritual", "oyneg", "ringelblum", "archive", "diaries", "school", "dignity", "erasure"],
        },
      ],
    },
    {
      id: "the-holocaust-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "resistance-justice-remembrance",
      question:
        "To the nearest whole year, how many years elapsed between the liberation of Auschwitz-Birkenau (27 January 1945) and the United Nations adoption of the Genocide Convention (9 December 1948)?",
      answer: { type: "number", value: 4, display: "4 years" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "Subtracting calendar years alone (1948 − 1945 = 3) overlooks the extra 10½ months from January to December (3.87 years rounds to 4).",
        },
      ],
      hints: [
        "Count from late January 1945 to early December 1948: 3 full years plus nearly 11 more months.",
        "3.87 years rounds to the nearest whole year.",
      ],
      solution: [
        "From 27 January 1945 to 9 December 1948 is 3 years and 10.5 months (3.87 years), which rounds to **4 years**.",
      ],
    },
  ],
};
