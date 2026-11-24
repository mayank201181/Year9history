import type { Drill, DrillItem, Rng } from "./types.ts";

interface PowerInfo {
  name: string;
  bloc: "Triple Entente" | "Triple Alliance";
  side1914: "Allied" | "Central";
  role: string;
}

const ACTIVE_POWERS: readonly PowerInfo[] = [
  { name: "Britain", bloc: "Triple Entente", side1914: "Allied", role: "guaranteed Belgian neutrality under the 1839 Treaty of London" },
  { name: "France", bloc: "Triple Entente", side1914: "Allied", role: "sought to recover Alsace-Lorraine lost in 1871" },
  { name: "Russia", bloc: "Triple Entente", side1914: "Allied", role: "acted as Slavic protector of Serbia and mobilised on 30 July" },
  { name: "Germany", bloc: "Triple Alliance", side1914: "Central", role: "pursued Weltpolitik and issued the 5 July blank cheque" },
  { name: "Austria-Hungary", bloc: "Triple Alliance", side1914: "Central", role: "annexed Bosnia in 1908 and issued the 23 July ultimatum to Serbia" },
  { name: "Serbia", bloc: "Triple Entente", side1914: "Allied", role: "nearly doubled in size during the 1912–13 Balkan Wars and faced Austria's ultimatum" },
  { name: "Belgium", bloc: "Triple Entente", side1914: "Allied", role: "refused German armies free passage in August 1914" },
];

const TREATY_EVENTS: readonly { year: number; label: string; powers: string }[] = [
  { year: 1839, label: "Treaty of London guaranteeing Belgian neutrality", powers: "Britain & Belgium" },
  { year: 1871, label: "German annexation of Alsace-Lorraine from France", powers: "Germany & France" },
  { year: 1879, label: "Dual Alliance signed between Germany and Austria-Hungary", powers: "Germany & Austria-Hungary" },
  { year: 1882, label: "Triple Alliance formed when Italy joined Germany and Austria-Hungary", powers: "Germany, Austria-Hungary & Italy" },
  { year: 1894, label: "Franco-Russian Military Alliance signed", powers: "France & Russia" },
  { year: 1904, label: "Entente Cordiale signed between Britain and France", powers: "Britain & France" },
  { year: 1905, label: "First Moroccan Crisis (Tangier) & completion of Schlieffen Plan", powers: "Germany, France & Britain" },
  { year: 1906, label: "Britain launches HMS Dreadnought", powers: "Britain & Germany" },
  { year: 1907, label: "Anglo-Russian Entente completes the Triple Entente", powers: "Britain, France & Russia" },
  { year: 1908, label: "Bosnian Crisis — Austria-Hungary annexes Bosnia-Herzegovina", powers: "Austria-Hungary, Serbia & Russia" },
  { year: 1911, label: "Second Moroccan Crisis — Germany sends SMS Panther to Agadir", powers: "Germany, France & Britain" },
  { year: 1912, label: "First Balkan War begins against the Ottoman Empire", powers: "Balkan League & Ottoman Empire" },
  { year: 1914, label: "Outbreak of the First World War (August)", powers: "Europe's Great Powers" },
];

const JULY_STEPS: readonly { day: number; date: string; acceptDates: string[]; event: string; actor: string }[] = [
  {
    day: 0,
    date: "28 June",
    acceptDates: ["28 June", "June 28", "28th June", "28 June 1914"],
    event: "Gavrilo Princip assassinates Archduke Franz Ferdinand in Sarajevo",
    actor: "Black Hand / Bosnian Serb nationalists",
  },
  {
    day: 7,
    date: "5 July",
    acceptDates: ["5 July", "July 5", "5th July", "5 July 1914"],
    event: "Germany issues its unconditional 'blank cheque' to Austria-Hungary",
    actor: "Germany",
  },
  {
    day: 25,
    date: "23 July",
    acceptDates: ["23 July", "July 23", "23rd July", "23 July 1914"],
    event: "Austria-Hungary delivers its harsh 48-hour ultimatum to Serbia",
    actor: "Austria-Hungary",
  },
  {
    day: 30,
    date: "28 July",
    acceptDates: ["28 July", "July 28", "28th July", "28 July 1914"],
    event: "Austria-Hungary declares war on Serbia",
    actor: "Austria-Hungary",
  },
  {
    day: 32,
    date: "30 July",
    acceptDates: ["30 July", "July 30", "30th July", "30 July 1914"],
    event: "Russia orders full mobilisation to protect Slavic Serbia",
    actor: "Russia",
  },
  {
    day: 34,
    date: "1 August",
    acceptDates: ["1 August", "August 1", "1st August", "1 August 1914"],
    event: "Germany declares war on Russia",
    actor: "Germany",
  },
  {
    day: 36,
    date: "3 August",
    acceptDates: ["3 August", "August 3", "3rd August", "3 August 1914"],
    event: "Germany declares war on France under the Schlieffen Plan",
    actor: "Germany",
  },
  {
    day: 37,
    date: "4 August",
    acceptDates: ["4 August", "August 4", "4th August", "4 August 1914"],
    event: "Germany invades neutral Belgium and Britain declares war on Germany",
    actor: "Britain",
  },
];

const DIPLOMATIC_DEDUCTIONS: readonly { prompt: string; accept: string[]; display: string; explanation: string }[] = [
  { prompt: "Which 1882 bloc included Germany, Austria-Hungary and Italy?", accept: ["Triple Alliance"], display: "Triple Alliance", explanation: "Germany, Austria-Hungary and Italy signed the Triple Alliance in 1882." },
  { prompt: "Which 1907 bloc linked Britain, France and Russia?", accept: ["Triple Entente"], display: "Triple Entente", explanation: "The Triple Entente united Britain, France and Russia through looser understandings completed in 1907." },
  { prompt: "Which Triple Alliance member stayed neutral in August 1914 and joined the Allies in 1915?", accept: ["Italy"], display: "Italy", explanation: "Italy claimed the 1882 pact was defensive, stayed neutral in 1914, and entered on the Allied side in 1915." },
  { prompt: "Which 1904 agreement settled colonial rivalries between Britain and France?", accept: ["Entente Cordiale", "The Entente Cordiale"], display: "Entente Cordiale", explanation: "Britain and France signed the Entente Cordiale ('friendly understanding') in 1904." },
  { prompt: "Which 1879 treaty first allied Germany with Austria-Hungary?", accept: ["Dual Alliance", "The Dual Alliance"], display: "Dual Alliance", explanation: "Bismarck signed the Dual Alliance between Germany and Austria-Hungary in 1879." },
  { prompt: "Which 1839 treaty committed Britain to defend Belgian neutrality?", accept: ["Treaty of London", "The Treaty of London", "1839 Treaty of London"], display: "Treaty of London", explanation: "The 1839 Treaty of London guaranteed Belgian neutrality; Germany called it 'a scrap of paper'." },
  { prompt: "Which country feared 'encirclement' (*Einkreisung*) between allied France and Russia?", accept: ["Germany"], display: "Germany", explanation: "After the 1894 Franco-Russian Alliance and 1907 Triple Entente, Germany feared being trapped in a two-front war." },
  { prompt: "Which Great Power posed as the Slavic protector of Serbia?", accept: ["Russia", "Imperial Russia"], display: "Russia", explanation: "Pan-Slavic ties bound Russia to Serbia, driving Tsar Nicholas II to mobilise on 30 July 1914." },
  { prompt: "Which multi-ethnic empire feared that Serbian nationalism would tear it apart from within?", accept: ["Austria-Hungary", "Austro-Hungarian Empire", "Austria Hungary"], display: "Austria-Hungary", explanation: "Austria-Hungary ruled Czechs, Poles, Croats and Bosnian Serbs and dreaded an imperial breakup." },
  { prompt: "Which country built the Royal Navy under the 'Two-Power Standard'?", accept: ["Britain", "Great Britain", "UK", "United Kingdom"], display: "Britain", explanation: "Britain maintained the Two-Power Standard so the Royal Navy stayed larger than the next two rival fleets combined." },
  { prompt: "Which country pursued *Weltpolitik* ('a place in the sun') under Kaiser Wilhelm II?", accept: ["Germany"], display: "Germany", explanation: "Kaiser Wilhelm II's *Weltpolitik* sought overseas colonies and a global battle fleet after 1890." },
  { prompt: "Which French border province was annexed by Germany in 1871?", accept: ["Alsace-Lorraine", "Alsace Lorraine"], display: "Alsace-Lorraine", explanation: "Germany took Alsace-Lorraine in 1871, fuelling lasting French desire for revenge (*revanchism*)." },
  { prompt: "Which North African territory sparked diplomatic crises between Germany and France in 1905 and 1911?", accept: ["Morocco"], display: "Morocco", explanation: "Germany challenged France in Tangier (1905) and Agadir (1911), accidentally tightening the Entente." },
  { prompt: "Which Balkan province did Austria-Hungary annex in 1908, infuriating Serbia?", accept: ["Bosnia", "Bosnia-Herzegovina", "Bosnia and Herzegovina"], display: "Bosnia-Herzegovina", explanation: "Austria-Hungary annexed Bosnia-Herzegovina in 1908, humiliating Russia and sparking Serb fury." },
  { prompt: "Which declining empire lost nearly all its European lands in the 1912–13 Balkan Wars?", accept: ["Ottoman Empire", "Ottoman", "Turkey", "Turkish Empire"], display: "Ottoman Empire", explanation: "Ottoman withdrawal created the Balkan power vacuum contested by Serbia, Austria-Hungary and Russia." },
  { prompt: "Which Balkan kingdom nearly doubled in size during the 1912–13 Balkan Wars?", accept: ["Serbia"], display: "Serbia", explanation: "Serbia's rapid growth in 1912–13 alarmed Austria-Hungary and fuelled dreams of a Greater Serbia." },
  { prompt: "Which neutral Western European nation refused German armies free passage in August 1914?", accept: ["Belgium"], display: "Belgium", explanation: "King Albert I refused free passage; Germany's invasion of Belgium triggered Britain's entry on 4 August." },
  { prompt: "Which German war plan aimed to defeat France in 6 weeks before turning east to Russia?", accept: ["Schlieffen Plan", "The Schlieffen Plan", "Schlieffen"], display: "Schlieffen Plan", explanation: "General Alfred von Schlieffen designed Germany's rigid two-front timetable via neutral Belgium." },
  { prompt: "Which French offensive war plan aimed to storm straight into Alsace-Lorraine?", accept: ["Plan XVII", "Plan 17"], display: "Plan XVII", explanation: "France's Plan XVII relied on attacking rapidly across the border to recover Alsace-Lorraine." },
  { prompt: "Which British battleship launched in 1906 made older warships obsolete overnight?", accept: ["HMS Dreadnought", "Dreadnought"], display: "HMS Dreadnought", explanation: "HMS Dreadnought reset the naval scoreboard in 1906 and triggered the Anglo-German naval race." },
  { prompt: "Which German gunboat was sent to Agadir during the 1911 Moroccan Crisis?", accept: ["SMS Panther", "Panther"], display: "SMS Panther", explanation: "Germany sent SMS *Panther* to Agadir in 1911, provoking Britain's Mansion House warning." },
  { prompt: "Which German Chancellor dismissed the 1839 Treaty of London as 'a scrap of paper'?", accept: ["Bethmann-Hollweg", "Theobald von Bethmann-Hollweg", "Bethmann Hollweg"], display: "Bethmann-Hollweg", explanation: "Chancellor Bethmann-Hollweg expressed shock on 4 August 1914 that Britain fought over a 'scrap of paper'." },
  { prompt: "Which German statesman was dismissed in 1890 before Germany switched to *Weltpolitik*?", accept: ["Bismarck", "Otto von Bismarck"], display: "Otto von Bismarck", explanation: "Bismarck had carefully kept France isolated; his dismissal in 1890 allowed the 1894 Franco-Russian Alliance." },
  { prompt: "Which 1919 peace treaty clause placed 'War Guilt' on Germany and its allies?", accept: ["Article 231", "Treaty of Versailles Article 231", "231"], display: "Article 231", explanation: "Article 231 of the Treaty of Versailles assigned legal responsibility to Germany and its allies." },
  { prompt: "Which German historian argued in 1961 that Germany deliberately risked war for European hegemony?", accept: ["Fritz Fischer", "Fischer"], display: "Fritz Fischer", explanation: "Fritz Fischer's 1961 thesis sparked modern debate over German primary responsibility." },
  { prompt: "Which historian wrote *The Sleepwalkers* (2012), arguing all Great Powers shared blame?", accept: ["Christopher Clark", "Clark"], display: "Christopher Clark", explanation: "Christopher Clark argued European leaders stumbled blindly into war through shared miscalculation." },
  { prompt: "Which secret Serbian nationalist society supplied weapons for the Sarajevo assassination?", accept: ["Black Hand", "The Black Hand", "Crna Ruka"], display: "Black Hand", explanation: "The Black Hand (*Crna Ruka*) armed Gavrilo Princip to fight for a Greater Serbia." },
  { prompt: "Which city was the capital of Bosnia where Archduke Franz Ferdinand was killed?", accept: ["Sarajevo"], display: "Sarajevo", explanation: "Sarajevo was the Bosnian capital where Princip shot Franz Ferdinand on 28 June 1914." },
  { prompt: "Which 19-year-old Bosnian Serb nationalist shot Archduke Franz Ferdinand?", accept: ["Gavrilo Princip", "Princip"], display: "Gavrilo Princip", explanation: "Gavrilo Princip fired two fatal shots on 28 June 1914 after the Archduke's car took a wrong turn." },
  { prompt: "Which Russian monarch ordered full mobilisation on 30 July 1914?", accept: ["Tsar Nicholas II", "Nicholas II", "Tsar Nicholas 2", "Nicholas 2"], display: "Tsar Nicholas II", explanation: "Tsar Nicholas II refused to abandon Serbia and ordered full Russian mobilisation on 30 July." },
];

const MAIN_CARDS: readonly { clue: string; category: "Militarism" | "Alliances" | "Imperialism" | "Nationalism"; reason: string }[] = [
  { clue: "Britain launched HMS Dreadnought in 1906, sparking a race that reached 29 vs 17 ships by 1914.", category: "Militarism", reason: "Competitive battleship building is a classic feature of Militarism and the arms race." },
  { clue: "Germany's Schlieffen Plan required attacking France through neutral Belgium within six weeks.", category: "Militarism", reason: "Rigid offensive war plans dominating diplomacy illustrate Militarism." },
  { clue: "European defence spending more than doubled between 1890 and 1914 alongside mass conscription.", category: "Militarism", reason: "Surging military budgets and mass conscription define Militarism." },
  { clue: "France drafted Plan XVII to charge across the frontier in an all-out offensive.", category: "Militarism", reason: "Offensive army timetables and glorification of attack belong to Militarism." },
  { clue: "German generals held huge political sway over Kaiser Wilhelm II during the December 1912 War Council.", category: "Militarism", reason: "Military elites overruling civilian diplomacy is the core of Militarism." },
  { clue: "Russia embarked on a vast army and railway modernisation scheme projected to finish by 1917.", category: "Militarism", reason: "Large-scale military rearmament programmes belong under Militarism." },
  { clue: "British crowds chanted 'We want eight and we won't wait!' demanding more modern battleships.", category: "Militarism", reason: "Public pressure to expand naval armaments reflects pre-1914 Militarism." },
  { clue: "Germany passed the Naval Laws of 1898 and 1900 under Admiral Tirpitz to build a High Seas Fleet.", category: "Militarism", reason: "Deliberately building a battle fleet to rival Britain is Militarism." },

  { clue: "Germany, Austria-Hungary and Italy formed the Triple Alliance in 1882.", category: "Alliances", reason: "Signing rival Great Power diplomatic blocs belongs under Alliances." },
  { clue: "France and Russia signed a mutual military alliance in 1894 to counter Germany.", category: "Alliances", reason: "Formal mutual-defence pacts between Great Powers illustrate Alliances." },
  { clue: "Britain, France and Russia completed the Triple Entente in 1907.", category: "Alliances", reason: "The Triple Entente created the second armed diplomatic camp (Alliances)." },
  { clue: "Germany issued its 5 July 1914 'blank cheque' promising unconditional support to Austria-Hungary.", category: "Alliances", reason: "Backing a treaty partner unconditionally during a crisis illustrates Alliances." },
  { clue: "Britain upheld the 1839 Treaty of London guaranteeing neutral Belgium's independence.", category: "Alliances", reason: "Treaty obligations connecting Great Powers to smaller states belong under Alliances." },
  { clue: "Germany feared 'encirclement' (*Einkreisung*) by allied France on the west and Russia on the east.", category: "Alliances", reason: "Fear of hostile diplomatic blocs surrounding a country reflects Alliances." },
  { clue: "Britain and France held secret naval talks agreeing Britain would guard the Channel and France the Mediterranean.", category: "Alliances", reason: "Co-ordinating military roles between friendly powers belongs under Alliances." },
  { clue: "Austria-Hungary relied on its 1879 Dual Alliance with Berlin before risking confrontation with Russia.", category: "Alliances", reason: "Depending on a Great Power treaty partner to deter rivals illustrates Alliances." },

  { clue: "Kaiser Wilhelm II demanded Germany's overseas 'place in the sun' under *Weltpolitik*.", category: "Imperialism", reason: "Seeking overseas colonies and global empire is Imperialism." },
  { clue: "In 1905 Kaiser Wilhelm II rode into Tangier to challenge French colonial ambitions in Morocco.", category: "Imperialism", reason: "Competing over North African colonies is a textbook example of Imperialism." },
  { clue: "Germany sent the gunboat SMS *Panther* to Agadir in 1911 and gained part of the French Congo.", category: "Imperialism", reason: "Bargaining over African colonial territory belongs under Imperialism." },
  { clue: "Britain guarded its global maritime empire and sea routes to India through naval supremacy.", category: "Imperialism", reason: "Protecting overseas colonies and imperial trade routes is Imperialism." },
  { clue: "Austria-Hungary annexed Bosnia-Herzegovina in 1908 to expand Habsburg imperial control.", category: "Imperialism", reason: "One empire formally annexing foreign territory is Imperialism." },
  { clue: "European Great Powers scrambled for African markets, raw materials and overseas prestige in the late 1800s.", category: "Imperialism", reason: "Overseas colonial expansion ('Scramble for Africa') defines Imperialism." },
  { clue: "The decline of the Ottoman Empire left South-East Europe open to rival imperial ambitions.", category: "Imperialism", reason: "Great Powers competing to expand into a dying empire's land reflects Imperialism." },
  { clue: "France established a colonial protectorate over Morocco after the 1906 Algeciras Conference.", category: "Imperialism", reason: "Extending colonial protectorates over overseas territories is Imperialism." },

  { clue: "Gavrilo Princip and the Black Hand fought to unite all South Slavs into a 'Greater Serbia'.", category: "Nationalism", reason: "Militant struggle for ethnic self-rule and national unity is Nationalism." },
  { clue: "French *revanchism* kept alive bitter patriotic anger over losing Alsace-Lorraine in 1871.", category: "Nationalism", reason: "Patriotic grievance to recover a lost homeland province illustrates Nationalism." },
  { clue: "Czechs, Poles, Croats and Bosnian Serbs resented living under German- and Hungarian-led Habsburg rule.", category: "Nationalism", reason: "Subject peoples demanding independence from a multi-ethnic empire is Nationalism." },
  { clue: "Russia felt bound by Pan-Slavic kinship to protect fellow Slavs in Serbia during July 1914.", category: "Nationalism", reason: "Ethnic solidarity across Slavic peoples (Pan-Slavism) belongs under Nationalism." },
  { clue: "Serbia's territorial doubling in the 1912–13 Balkan Wars stoked proud dreams of Slavic liberation.", category: "Nationalism", reason: "Surging ethnic pride and dreams of uniting co-nationals reflect Nationalism." },
  { clue: "Archduke Franz Ferdinand's visit to Sarajevo fell on Vidovdan (28 June), Serbia's sacred national day.", category: "Nationalism", reason: "Provoking patriotic historical memory of a nation's heritage belongs under Nationalism." },
  { clue: "European newspapers whipped up intense patriotic hatred and pride before August 1914.", category: "Nationalism", reason: "Jingoistic mass patriotism celebrating national superiority is Nationalism." },
  { clue: "Young men across Berlin, Paris, London and Vienna cheered enthusiastically for their nation as war began.", category: "Nationalism", reason: "Fierce popular devotion to one's nation-state exemplifies Nationalism." },
];

const LENS_CARDS: readonly { clue: string; lens: "Ideology" | "Territory" | "Flashpoint"; reason: string }[] = [
  { clue: "German *Weltpolitik* preached that a great nation must expand globally or decline.", lens: "Ideology", reason: "A belief system about national destiny and expansion is **Ideology**." },
  { clue: "Pan-Slavism taught that Russia had a sacred cultural mission to defend fellow Slavic peoples.", lens: "Ideology", reason: "A shared political-cultural creed shaping foreign policy is **Ideology**." },
  { clue: "Social Darwinism convinced many European elites that war was a natural test of national fitness.", lens: "Ideology", reason: "A worldview glorifying struggle and survival of the fittest is **Ideology**." },
  { clue: "Britain's ruling belief in maritime supremacy and the Two-Power Standard shaped its view of Germany.", lens: "Ideology", reason: "Deeply held national strategic beliefs belong under **Ideology**." },
  { clue: "French *revanchism* treated recovering honour from the 1871 defeat as a sacred patriotic duty.", lens: "Ideology", reason: "An emotional nationalist doctrine driving politics is **Ideology**." },
  { clue: "Militarist culture taught schoolboys and officers that dying for national honour was noble.", lens: "Ideology", reason: "Cultural beliefs glorifying military values belong under **Ideology**." },
  { clue: "Serbian radical nationalism ('Unification or Death') inspired young activists against Habsburg rule.", lens: "Ideology", reason: "A militant nationalist belief system is **Ideology**." },
  { clue: "Habsburg dynastic ideology insisted the multi-ethnic empire could never grant ethnic autonomy without collapsing.", lens: "Ideology", reason: "A ruling political doctrine about empire survival is **Ideology**." },
  { clue: "Great Power codes of 'honour' convinced monarchs that backing down diplomatically meant humiliation.", lens: "Ideology", reason: "Shared elite beliefs about prestige and honour are **Ideology**." },
  { clue: "Kaiser Wilhelm II's vision of Germany winning its 'place in the sun' drove overseas rivalry.", lens: "Ideology", reason: "An expansionist imperial vision is **Ideology**." },

  { clue: "Germany's annexation of the border province of Alsace-Lorraine in 1871 divided France and Germany.", lens: "Territory", reason: "Disputed ownership of a specific border province is **Territory**." },
  { clue: "Austria-Hungary formally annexed Bosnia-Herzegovina in 1908, blocking Serbia's access to the sea.", lens: "Territory", reason: "Annexing a contested province and blocking sea access is **Territory**." },
  { clue: "France and Germany clashed over colonial control of Morocco in 1905 and 1911.", lens: "Territory", reason: "Rivalry over North African colonial land belongs under **Territory**." },
  { clue: "Serbia nearly doubled its land area during the 1912–13 Balkan Wars as Ottoman rule shrank.", lens: "Territory", reason: "Changing borders and land expansion in the Balkans is **Territory**." },
  { clue: "Germany demanded part of the French Congo as compensation after the 1911 Agadir Crisis.", lens: "Territory", reason: "Trading colonial land in Africa is **Territory**." },
  { clue: "Britain feared Germany occupying Belgian Channel ports such as Antwerp and Ostend.", lens: "Territory", reason: "Strategic control of coastal ports and geography is **Territory**." },
  { clue: "Germany felt geographically squeezed between France to the west and Russia to the east.", lens: "Territory", reason: "Geographic position and contested land borders belong under **Territory**." },
  { clue: "Italy secretly coveted Italian-speaking Habsburg provinces along the Adriatic coast.", lens: "Territory", reason: "Rival claims over borderlands and coastal provinces are **Territory**." },
  { clue: "Russia desired warm-water sea access through the Ottoman-controlled Turkish Straits.", lens: "Territory", reason: "Competition for strategic waterways and coastlines is **Territory**." },
  { clue: "Alsace-Lorraine contained valuable iron and coal deposits prized by both Paris and Berlin.", lens: "Territory", reason: "Resource-rich contested borderlands are **Territory**." },

  { clue: "On 28 June 1914 Gavrilo Princip shot Archduke Franz Ferdinand after a wrong turn in Sarajevo.", lens: "Flashpoint", reason: "The immediate violent spark that ignited the crisis is a **Flashpoint**." },
  { clue: "On 5 July 1914 Germany gave Austria-Hungary its 'blank cheque' of unconditional backing.", lens: "Flashpoint", reason: "A critical July Crisis decision escalating the spark is part of the **Flashpoint**." },
  { clue: "On 23 July 1914 Austria-Hungary handed Serbia a ferocious 48-hour ultimatum.", lens: "Flashpoint", reason: "An immediate ultimatum tipping a crisis into war belongs to the **Flashpoint**." },
  { clue: "On 28 July 1914 Austria-Hungary declared war on Serbia and shelled Belgrade.", lens: "Flashpoint", reason: "The first declaration of war igniting active fighting is a **Flashpoint**." },
  { clue: "On 30 July 1914 Tsar Nicholas II signed Russia's order for full mobilisation.", lens: "Flashpoint", reason: "The sudden July mobilisation triggering rival war timetables is part of the **Flashpoint**." },
  { clue: "On 4 August 1914 German soldiers crossed into neutral Belgium, triggering Britain's ultimatum.", lens: "Flashpoint", reason: "The border crossing that immediately brought Britain into war is a **Flashpoint**." },
  { clue: "A failed bomb earlier on 28 June 1914 led the Archduke to visit the hospital, placing his car before Princip.", lens: "Flashpoint", reason: "The immediate Sarajevo incident sparking the July Crisis is the **Flashpoint**." },
  { clue: "On 1 August 1914 Germany declared war on Russia after Russia refused to halt mobilisation.", lens: "Flashpoint", reason: "An acute August 1914 escalation step belongs under **Flashpoint**." },
  { clue: "On 3 August 1914 Germany declared war on France and demanded free passage through Belgium.", lens: "Flashpoint", reason: "A sudden July/August war declaration belongs under **Flashpoint**." },
  { clue: "Chancellor Bethmann-Hollweg dismissed the 1839 Treaty of London as 'a scrap of paper' on 4 August.", lens: "Flashpoint", reason: "The final diplomatic rupture on the night war erupted belongs under **Flashpoint**." },
];

const HISTORIOGRAPHY_CARDS: readonly { clue: string; view: "Fischer" | "Sleepwalkers"; reason: string }[] = [
  { clue: "Germany's 5 July 'blank cheque' deliberately pushed Vienna toward war despite risking Russian intervention.", view: "Fischer", reason: "Highlighting Berlin's reckless encouragement supports **Fischer** (German primary responsibility)." },
  { clue: "At the December 1912 War Council, German generals talked of war 'the sooner the better' while Tirpitz asked for 18 months.", view: "Fischer", reason: "Evidence of early German planning for war by mid-1914 is classic **Fischer** evidence." },
  { clue: "Kaiser Wilhelm II's *Weltpolitik* sought European hegemony and overseas colonies at rivals' expense.", view: "Fischer", reason: "Linking aggressive German expansionism to 1914 supports **Fischer**." },
  { clue: "German generals welcomed war in 1914 as a 'preventive war' before Russia completed rearmament in 1917.", view: "Fischer", reason: "Arguing Germany chose 1914 deliberately as a preventive strike supports **Fischer**." },
  { clue: "Germany's Schlieffen Plan deliberately violated neutral Belgium and attacked France first.", view: "Fischer", reason: "Emphasising Germany's offensive invasion of western neighbours backs **Fischer**." },
  { clue: "Chancellor Bethmann-Hollweg's 'September Programme' listed vast German annexation goals across Europe.", view: "Fischer", reason: "Fritz Fischer famously cited the 1914 September Programme to prove German expansionist aims." },
  { clue: "Germany rejected Britain's late-July proposals for an international peace conference.", view: "Fischer", reason: "Berlin blocking diplomatic mediation in July 1914 supports **Fischer**." },
  { clue: "Germany declared war on BOTH Russia (1 August) and France (3 August) before either invaded German soil.", view: "Fischer", reason: "Highlighting Germany's pre-emptive Great Power war declarations supports **Fischer**." },
  { clue: "Germany aggressively provoked Britain through the 1898/1900 Naval Laws and 1905/1911 Moroccan Crises.", view: "Fischer", reason: "Showing a long-term pattern of German provocation backs **Fischer**." },
  { clue: "German diplomats quietly urged Austria-Hungary not to accept Serbia's conciliatory reply to the ultimatum.", view: "Fischer", reason: "Berlin discouraging compromise in late July backs **Fischer**." },
  { clue: "Germany mocked the 1839 Treaty of London guaranteeing Belgian neutrality as 'a scrap of paper'.", view: "Fischer", reason: "German contempt for international treaties supports **Fischer**." },
  { clue: "Germany's authoritarian elite allegedly hoped a victorious foreign war would silence socialist unrest at home.", view: "Fischer", reason: "Fischer argued domestic German political fears helped push Berlin toward war." },
  { clue: "Kaiser Wilhelm II dismissed Bismarck's peaceful diplomacy in 1890 for aggressive global ambitions.", view: "Fischer", reason: "Blaming Germany's shift to expansionism supports **Fischer**." },
  { clue: "Article 231 of the Treaty of Versailles anticipated later historians who stressed German war guilt.", view: "Fischer", reason: "Linking 1914 primarily to German aggression aligns with **Fischer**." },
  { clue: "German military planners widened the Kiel Canal specifically by June 1914 so dreadnoughts could pass through.", view: "Fischer", reason: "Fischer highlighted mid-1914 military readiness as deliberate German preparation." },

  { clue: "Serbian military intelligence officers secretly backed the Black Hand terrorists who shot Franz Ferdinand.", view: "Sleepwalkers", reason: "Highlighting Serbian culpability alongside others fits Clark's **Sleepwalkers** (shared blame)." },
  { clue: "Austria-Hungary drafted an intentionally unacceptable ultimatum and was the first power to declare war (28 July).", view: "Sleepwalkers", reason: "Showing Vienna's independent drive for war backs **Sleepwalkers**." },
  { clue: "Tsar Nicholas II ordered the first full Great Power mobilisation on 30 July, alarming Berlin.", view: "Sleepwalkers", reason: "Emphasising Russia's escalatory mobilisation supports **Sleepwalkers**." },
  { clue: "French President Poincaré visited St Petersburg in July 1914 and strongly encouraged Russian firmness.", view: "Sleepwalkers", reason: "Pointing to French encouragement of Russia supports **Sleepwalkers**." },
  { clue: "British Foreign Secretary Sir Edward Grey failed to warn Germany clearly in time that Britain would intervene.", view: "Sleepwalkers", reason: "Blaming British diplomatic ambiguity and misread signals fits **Sleepwalkers**." },
  { clue: "No European capital genuinely planned or foresaw a four-year global trench catastrophe in June 1914.", view: "Sleepwalkers", reason: "Stressing blindness and unintended escalation is the heart of **Sleepwalkers**." },
  { clue: "All six Great Powers were trapped in a mutual 'security dilemma' where defensive moves looked aggressive.", view: "Sleepwalkers", reason: "Viewing 1914 as a systemic mutual trap fits **Sleepwalkers**." },
  { clue: "France's own Plan XVII relied on an aggressive offensive surge into Alsace-Lorraine.", view: "Sleepwalkers", reason: "Showing offensive militarism existed on both sides supports **Sleepwalkers**." },
  { clue: "Kaiser Wilhelm II initially reacted to Serbia's reply by saying every cause for war had vanished.", view: "Sleepwalkers", reason: "Evidence of German hesitation and confusion challenges lone-villain blame and supports **Sleepwalkers**." },
  { clue: "The frantic 'Willy-Nicky' telegrams show both Kaiser and Tsar trying and failing to stop mobilisation.", view: "Sleepwalkers", reason: "Leaders overwhelmed by events they could not control exemplifies **Sleepwalkers**." },
  { clue: "Russia's refusal to suffer another 1908 Bosnian humiliation drove reckless prestige politics in St Petersburg.", view: "Sleepwalkers", reason: "Pointing to Russian prestige motives broadens blame beyond Berlin (**Sleepwalkers**)." },
  { clue: "Slow telegraphs, poor communication and rigid rail schedules left statesmen with hours instead of weeks.", view: "Sleepwalkers", reason: "Emphasising systemic crisis failure across all capitals supports **Sleepwalkers**." },
  { clue: "Both Triple Alliance and Triple Entente leaders feared losing alliance credibility more than risking war.", view: "Sleepwalkers", reason: "Shared bloc anxieties across all Great Powers characterise **Sleepwalkers**." },
  { clue: "Historian Christopher Clark described Europe's 1914 statesmen as 'watchful, yet unseeing'.", view: "Sleepwalkers", reason: "That exact phrase comes from Christopher Clark's ***The Sleepwalkers*** (2012)." },
  { clue: "Britain, France and Russia had all expanded their empires and defence budgets dramatically before 1914.", view: "Sleepwalkers", reason: "Showing imperial and military rivalry across every power supports **Sleepwalkers**." },
];

export const drills: Drill[] = [
  {
    id: "causes-of-ww1.alliance-bloc-matcher",
    topicId: "causes-of-ww1",
    title: "Alliances, Blocs & Great Power Roles",
    level: 1,
    guideRef: "main-alliances-ideology",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.65)) {
          const shuffled = rng.shuffle(ACTIVE_POWERS);
          const a = shuffled[0];
          const b = shuffled[1];
          const sameSide = a.side1914 === b.side1914;
          return {
            prompt: `In August 1914, were **${a.name}** and **${b.name}** on the same side or opposing sides? Type **Allies** or **Rivals**.`,
            answer: {
              type: "text",
              accept: sameSide ? ["Allies", "Ally", "Same side"] : ["Rivals", "Rival", "Opposing", "Opposing sides", "Enemies"],
              display: sameSide ? "Allies" : "Rivals",
            },
            hint: `Check whether ${a.name} and ${b.name} fought for the Allied Powers (Entente + Serbia + Belgium) or Central Powers (Germany & Austria-Hungary).`,
            solution: [
              `${a.name} fought on the **${a.side1914}** side; ${b.name} fought on the **${b.side1914}** side.`,
              `Therefore, in August 1914 they were **${sameSide ? "Allies" : "Rivals"}**.`,
            ],
          };
        }
        const core = rng.pick(ACTIVE_POWERS.slice(0, 5));
        const extraRole = rng.bool(0.5);
        return {
          prompt: extraRole
            ? `Which major pre-1914 bloc did **${core.name}** (which ${core.role}) belong to? Type **Triple Alliance** or **Triple Entente**.`
            : `Which pre-1914 diplomatic bloc included **${core.name}**? Type **Triple Alliance** or **Triple Entente**.`,
          answer: {
            type: "text",
            accept: [core.bloc],
            display: core.bloc,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [core.bloc === "Triple Alliance" ? "Triple Entente" : "Triple Alliance"],
              },
              feedback: `Swap them around! Triple Alliance = Germany, Austria-Hungary, Italy; Triple Entente = Britain, France, Russia.`,
            },
          ],
          hint: "Triple Alliance (1882) = Germany, Austria-Hungary, Italy; Triple Entente (1907) = Britain, France, Russia.",
          solution: [
            `**${core.name}** belonged to the **${core.bloc}**.`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.shuffle(TREATY_EVENTS.slice(0, 9));
        const [e1, e2] = pair[0].year < pair[1].year ? [pair[0], pair[1]] : [pair[1], pair[0]];
        const gap = e2.year - e1.year;
        return {
          prompt: `How many years passed between **${e1.label}** (${e1.year}) and **${e2.label}** (${e2.year})?`,
          answer: { type: "number", value: gap, display: `${gap} years` },
          traps: [
            {
              spec: { type: "number", value: e1.year + e2.year },
              feedback: "Subtract the earlier year from the later year rather than adding them.",
            },
          ],
          hint: `Compute {{${e2.year} - ${e1.year}}}.`,
          solution: [
            `Earlier milestone: ${e1.year} (${e1.label}).`,
            `Later milestone: ${e2.year} (${e2.label}).`,
            `Gap: {{${e2.year} - ${e1.year} = ${gap}}} years.`,
          ],
        };
      }

      const d = rng.pick(DIPLOMATIC_DEDUCTIONS);
      return {
        prompt: d.prompt,
        answer: { type: "text", accept: d.accept, display: d.display },
        hint: "Think carefully about the exact treaty, power, or historian linked to this pre-1914 clue.",
        solution: [d.explanation],
      };
    },
  },

  {
    id: "causes-of-ww1.crises-chronology",
    topicId: "causes-of-ww1",
    title: "Pre-1914 Crises & Arms Race Chronology",
    level: 1,
    guideRef: "militarism-territory",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const picked = rng.shuffle(TREATY_EVENTS).slice(0, 2);
        const [first, second] = picked[0].year < picked[1].year ? [picked[0], picked[1]] : [picked[1], picked[0]];
        const swap = rng.bool(0.5);
        const left = swap ? second : first;
        const right = swap ? first : second;
        return {
          prompt: `Which milestone happened **FIRST**? Type the **year** of the earlier event:\n- **${left.label}** (${left.year})\n- **${right.label}** (${right.year})`,
          answer: { type: "number", value: first.year, display: String(first.year) },
          traps: [
            {
              spec: { type: "number", value: second.year },
              feedback: `${second.year} was the LATER event — type the earlier year (${first.year}).`,
            },
          ],
          hint: `Compare ${left.year} and ${right.year} and pick the smaller (earlier) year.`,
          solution: [
            `**${first.label}** occurred in **${first.year}**, before **${second.label}** in ${second.year}.`,
          ],
        };
      }

      if (tier === 2) {
        const picked = rng.shuffle(TREATY_EVENTS).slice(0, 2);
        const [first, second] = picked[0].year < picked[1].year ? [picked[0], picked[1]] : [picked[1], picked[0]];
        const diff = second.year - first.year;
        return {
          prompt: `How many years elapsed between **${first.label}** (${first.year}) and **${second.label}** (${second.year})?`,
          answer: { type: "number", value: diff, display: `${diff} years` },
          hint: `Subtract the earlier year from the later year: {{${second.year} - ${first.year}}}.`,
          solution: [
            `${first.year}: ${first.label}.`,
            `${second.year}: ${second.label}.`,
            `Elapsed time: {{${second.year} - ${first.year} = ${diff}}} years.`,
          ],
        };
      }

      const triple = rng.shuffle(TREATY_EVENTS).slice(0, 3);
      const sorted = [...triple].sort((a, b) => a.year - b.year);
      const middle = sorted[1];
      return {
        prompt: `Consider these three events leading to 1914 (years hidden):\n- ${triple[0].label}\n- ${triple[1].label}\n- ${triple[2].label}\n\nWhat **year** did the **middle** event chronologically occur?`,
        answer: { type: "number", value: middle.year, display: String(middle.year) },
        traps: [
          {
            spec: { type: "number", value: sorted[0].year },
            feedback: `${sorted[0].year} was the EARLIEST of the three events — find the middle year.`,
          },
          {
            spec: { type: "number", value: sorted[2].year },
            feedback: `${sorted[2].year} was the LATEST of the three events — find the middle year.`,
          },
        ],
        hint: `Place all three events in chronological order first: ${sorted[0].label} came earliest and ${sorted[2].label} came latest.`,
        solution: [
          `1st: ${sorted[0].year} — ${sorted[0].label}`,
          `2nd (middle): **${middle.year}** — ${middle.label}`,
          `3rd: ${sorted[2].year} — ${sorted[2].label}`,
        ],
      };
    },
  },

  {
    id: "causes-of-ww1.july-crisis-chain",
    topicId: "causes-of-ww1",
    title: "July Crisis 1914 Chain-Reaction Sequence",
    level: 2,
    guideRef: "sarajevo-july-crisis",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const pair = rng.shuffle(JULY_STEPS).slice(0, 2);
        const [earlier, later] = pair[0].day < pair[1].day ? [pair[0], pair[1]] : [pair[1], pair[0]];
        const flip = rng.bool(0.5);
        const firstShown = flip ? later : earlier;
        const secondShown = flip ? earlier : later;
        return {
          prompt: `During the 1914 July Crisis, which step occurred **FIRST**? Type its **exact date** (e.g. \`5 July\` or \`1 August\`):\n- **${firstShown.date}:** ${firstShown.event}\n- **${secondShown.date}:** ${secondShown.event}`,
          answer: { type: "text", accept: earlier.acceptDates, display: earlier.date },
          traps: [
            {
              spec: { type: "text", accept: later.acceptDates },
              feedback: `${later.date} happened AFTER ${earlier.date} in the July Crisis chain.`,
            },
          ],
          hint: "Remember the calendar progression: late June → early July → late July → early August.",
          solution: [
            `**${earlier.date}** (${earlier.event}) came before **${later.date}** (${later.event}).`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.shuffle(JULY_STEPS).slice(0, 2);
        const [earlier, later] = pair[0].day < pair[1].day ? [pair[0], pair[1]] : [pair[1], pair[0]];
        const days = later.day - earlier.day;
        return {
          prompt: `In the 1914 July Crisis (June has 30 days; July has 31 days), how many **days** passed between:\n- **${earlier.date}:** ${earlier.event}\n- **${later.date}:** ${later.event}`,
          answer: { type: "number", value: days, display: `${days} days` },
          hint: `Count carefully across month boundaries (June = 30 days, July = 31 days).`,
          solution: [
            `From 28 June (day 0): **${earlier.date}** is day ${earlier.day} and **${later.date}** is day ${later.day}.`,
            `Interval: {{${later.day} - ${earlier.day} = ${days}}} days.`,
          ],
        };
      }

      const triple = rng.shuffle(JULY_STEPS).slice(0, 3);
      const sorted = [...triple].sort((a, b) => a.day - b.day);
      const mid = sorted[1];
      return {
        prompt: `Put these three July Crisis events into chronological order (dates hidden):\n- ${triple[0].event}\n- ${triple[1].event}\n- ${triple[2].event}\n\nType the **exact date** (e.g. \`23 July\` or \`3 August\`) of the **middle (2nd)** event.`,
        answer: { type: "text", accept: mid.acceptDates, display: mid.date },
        traps: [
          {
            spec: { type: "text", accept: sorted[0].acceptDates },
            feedback: `${sorted[0].date} was the FIRST of those three events — find the middle one.`,
          },
          {
            spec: { type: "text", accept: sorted[2].acceptDates },
            feedback: `${sorted[2].date} was the LAST of those three events — find the middle one.`,
          },
        ],
        hint: `Order the chain: Sarajevo (28 June) → Blank Cheque (5 July) → Ultimatum (23 July) → War on Serbia (28 July) → Russian mobilisation (30 July) → War on Russia (1 Aug) → France (3 Aug) → Belgium/Britain (4 Aug).`,
        solution: [
          `1st: ${sorted[0].date} — ${sorted[0].event}`,
          `2nd (middle): **${mid.date}** — ${mid.event}`,
          `3rd: ${sorted[2].date} — ${sorted[2].event}`,
        ],
      };
    },
  },

  {
    id: "causes-of-ww1.main-historiography-classifier",
    topicId: "causes-of-ww1",
    title: "Classify Evidence: MAIN, Lenses & Historiography",
    level: 3,
    guideRef: "weighing-ww1-causes",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(MAIN_CARDS);
        return {
          prompt: `Classify this pre-1914 evidence under **MAIN** (type **Militarism**, **Alliances**, **Imperialism** or **Nationalism**):\n\n"${card.clue}"`,
          answer: { type: "text", accept: [card.category], display: card.category },
          hint: "Ask: is this mainly about weapons/war plans (M), diplomatic blocs/treaties (A), overseas colonies/empire expansion (I), or ethnic pride/self-rule (N)?",
          solution: [
            `Best category: **${card.category}**.`,
            card.reason,
          ],
        };
      }

      if (tier === 2) {
        const card = rng.pick(LENS_CARDS);
        return {
          prompt: `Classify this WWI evidence into one of the three Year 9 History lenses — type **Ideology**, **Territory** or **Flashpoint**:\n\n"${card.clue}"`,
          answer: { type: "text", accept: [card.lens], display: card.lens },
          hint: "Beliefs/doctrines = Ideology; contested land/borders/colonies = Territory; acute June–August 1914 trigger steps = Flashpoint.",
          solution: [
            `Curriculum lens: **${card.lens}**.`,
            card.reason,
          ],
        };
      }

      const card = rng.pick(HISTORIOGRAPHY_CARDS);
      return {
        prompt: `Which historiographical interpretation does this evidence MOST strongly support? Type **Fischer** (German primary responsibility) or **Sleepwalkers** (Clark's shared miscalculation):\n\n"${card.clue}"`,
        answer: {
          type: "text",
          accept:
            card.view === "Fischer"
              ? ["Fischer", "Fritz Fischer", "Fischer Thesis"]
              : ["Sleepwalkers", "The Sleepwalkers", "Clark", "Christopher Clark"],
          display: card.view,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: card.view === "Fischer" ? ["Sleepwalkers", "Clark"] : ["Fischer", "Fritz Fischer"],
            },
            feedback: `Look closely at who is taking the escalatory step: ${card.view === "Fischer" ? "this highlights deliberate German initiative." : "this spreads responsibility beyond Germany alone."}`,
          },
        ],
        hint: "Ask: does this highlight deliberate German expansionism/preventive war (Fischer), or shared blunders across Serbia, Austria, Russia, France and Britain (Sleepwalkers)?",
        solution: [
          `Best match: **${card.view}**.`,
          card.reason,
        ],
      };
    },
  },
];
