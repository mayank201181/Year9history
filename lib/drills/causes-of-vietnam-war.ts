import type { Drill, DrillItem, Rng } from "./types.ts";

const VIETNAM_EVENTS: readonly { year: number; label: string }[] = [
  { year: 1940, label: "Japan occupies French Indochina during WWII" },
  { year: 1941, label: "Ho Chi Minh founds the Viet Minh independence league" },
  { year: 1945, label: "Ho Chi Minh declares Vietnamese independence in Hanoi" },
  { year: 1947, label: "Truman Doctrine announces US Cold War Containment policy" },
  { year: 1948, label: "Malayan Emergency begins against Communist guerrillas" },
  { year: 1949, label: "Mao Zedong's Communists win the Chinese Civil War" },
  { year: 1950, label: "Korean War begins in East Asia" },
  { year: 1954, label: "Battle of Dien Bien Phu & Geneva Accords (17th parallel)" },
  { year: 1956, label: "Ngo Dinh Diem cancels promised reunification elections" },
  { year: 1960, label: "National Liberation Front (Viet Cong) formed in South Vietnam" },
  { year: 1962, label: "Strategic Hamlets Programme relocates South Vietnamese peasants" },
  { year: 1963, label: "Buddhist Crisis & US-backed coup assassinating Ngo Dinh Diem" },
  { year: 1964, label: "Gulf of Tonkin Incident & Congressional Resolution" },
  { year: 1965, label: "Operation Rolling Thunder & 3,500 US Marines land at Da Nang" },
];

const PRESIDENT_CARDS: readonly { clue: string; president: "Truman" | "Eisenhower" | "Kennedy" | "Johnson"; accept: string[]; reason: string }[] = [
  { clue: "Announced the 1947 Doctrine pledging US aid to contain Communism globally.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Harry S. Truman launched the 1947 Truman Doctrine of Containment." },
  { clue: "Began US financial support for France's colonial war in Indochina after China became Communist in 1949.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Truman initiated US funding of France in 1950 after China's 1949 revolution." },
  { clue: "Was US President when the Korean War broke out in June 1950, deepening US fears in Asia.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Truman led the US into the Korean War (1950) and expanded Asian Containment." },
  { clue: "Received Ho Chi Minh's 1945–46 letters appealing for US support against French colonialism, but ignored them.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Truman prioritised France as a European Cold War ally over Ho Chi Minh's appeals." },
  { clue: "Established the initial Military Assistance Advisory Group (MAAG) in Indochina in 1950.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Truman sent the first small military advisory mission to assist French forces in 1950." },
  { clue: "Faced fierce Republican criticism asking 'Who lost China?' after Mao's 1949 victory.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Backlash against Truman in 1949 terrified later presidents against 'losing Vietnam'." },
  { clue: "Shifted America from WWII anti-colonialism to backing European empires resisting Communism.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Truman's Cold War pivot placed Containment ahead of Asian decolonisation." },
  { clue: "Presided over the start of the Cold War between 1945 and January 1953.", president: "Truman", accept: ["Truman", "Harry Truman", "Harry S. Truman"], reason: "Harry S. Truman served from April 1945 to January 1953." },

  { clue: "Coined the 'Domino Theory' in an April 1954 press conference as Dien Bien Phu fell.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Dwight D. Eisenhower introduced the Domino Theory on 7 April 1954." },
  { clue: "Oversaw the US paying roughly 80% of France's war costs in Indochina by May 1954.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "By 1954 under Eisenhower, Washington bankrolled four-fifths of France's war." },
  { clue: "Declined to launch US air strikes to rescue trapped French troops at Dien Bien Phu in 1954.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower refused unilateral air intervention without British and congressional backing." },
  { clue: "Helped create SEATO (Southeast Asia Treaty Organization) in September 1954 after Geneva.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower's administration built SEATO to shield South Vietnam, Laos and Cambodia." },
  { clue: "Backed Ngo Dinh Diem in blocking the promised July 1956 reunification elections.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower later admitted Ho Chi Minh would have won roughly 80% of a 1956 vote." },
  { clue: "Left roughly 900 US military advisers in South Vietnam when leaving office in January 1961.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower kept US personnel around 900 advisers while pouring financial aid into Saigon." },
  { clue: "Warned that losing Vietnam could topple Laos, Cambodia, Thailand, Malaya and Singapore.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower's Domino Theory linked Indochina directly to Southeast Asia's wider security." },
  { clue: "Hosted Ngo Dinh Diem in Washington in 1957 as America's 'miracle man' of anti-Communist Asia.", president: "Eisenhower", accept: ["Eisenhower", "Dwight Eisenhower", "Dwight D. Eisenhower", "Ike"], reason: "Eisenhower publicly praised Diem despite growing corruption and repression in Saigon." },

  { clue: "Expanded US military 'advisers' in South Vietnam from roughly 900 to over 16,000 between 1961 and 1963.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "JFK dramatically increased US advisers to 16,000 while stopping short of regular combat divisions." },
  { clue: "Sent US Army Green Berets and helicopter units to support South Vietnamese counter-insurgency.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "Kennedy championed Special Forces and helicopters to fight Viet Cong guerrillas." },
  { clue: "Backed the 1962 Strategic Hamlets Programme relocating South Vietnamese peasants.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "Strategic Hamlets was launched under Kennedy and Diem in 1962 — and backfired badly." },
  { clue: "Was horrified by Malcolm Browne's June 1963 photograph of Buddhist monk Thich Quang Duc's protest.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "The 1963 Buddhist Crisis destroyed Kennedy's remaining faith in Ngo Dinh Diem." },
  { clue: "Gave tacit US approval for South Vietnamese generals to overthrow Ngo Dinh Diem in November 1963.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "Kennedy's administration signalled it would not block the coup — though JFK was shocked Diem was killed." },
  { clue: "Faced alarm after the Battle of Ap Bac (January 1963) exposed ARVN weaknesses against the Viet Cong.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "Ap Bac took place during Kennedy's presidency, showing Diem's army struggled despite US helicopters." },
  { clue: "Was assassinated in Dallas just three weeks after Ngo Dinh Diem's death in November 1963.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "JFK was assassinated on 22 November 1963, leaving Vietnam to Lyndon B. Johnson." },
  { clue: "Increased US involvement steadily in 1961–63 while still refusing to commit regular US ground divisions.", president: "Kennedy", accept: ["Kennedy", "John F. Kennedy", "JFK", "John Kennedy"], reason: "Kennedy expanded advisers and funding without yet sending regular US infantry divisions." },

  { clue: "Used the August 1964 Gulf of Tonkin Incident to pass a nearly unanimous Congressional Resolution.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "Lyndon B. Johnson secured the 7 August 1964 Gulf of Tonkin Resolution (88–2 in Senate)." },
  { clue: "Launched Operation Rolling Thunder — sustained bombing of North Vietnam — in March 1965.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "LBJ ordered Operation Rolling Thunder after the February 1965 Pleiku raid." },
  { clue: "Sent the first 3,500 regular US combat Marines ashore at Da Nang on 8 March 1965.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "LBJ crossed the threshold into regular US ground combat in March 1965." },
  { clue: "Escalated US troop numbers in Vietnam past 500,000 by 1968 using his 1964 'blank cheque'.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "Johnson oversaw the massive American troop build-up from 1965 to 1968." },
  { clue: "Ordered retaliatory air strikes against North Vietnam following the February 1965 raid on Pleiku.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "The Pleiku attack triggered LBJ's bombing escalation in early 1965." },
  { clue: "Used toughness during the August 1964 Gulf of Tonkin clash to defeat hawkish rival Barry Goldwater in November.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "LBJ feared looking 'soft on Communism' ahead of the November 1964 election." },
  { clue: "Became President in November 1963 inheriting 16,000 advisers and a chaotic post-Diem Saigon.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "Johnson succeeded JFK on 22 November 1963." },
  { clue: "Privately doubted Vietnam was worth fighting for in 1965 yet escalated to protect US Cold War credibility.", president: "Johnson", accept: ["Johnson", "Lyndon Johnson", "Lyndon B. Johnson", "LBJ"], reason: "White House tapes reveal LBJ felt trapped by Containment politics and fear of losing prestige." },
];

const SIDE_CARDS: readonly { clue: string; side: "Communist" | "Anti-Communist"; actor: "Viet Minh" | "Viet Cong" | "Diem" | "US"; reason: string }[] = [
  { clue: "Founded by Ho Chi Minh in 1941 to resist Japanese occupation and French colonialism.", side: "Communist", actor: "Viet Minh", reason: "Ho Chi Minh's **Viet Minh** led the Communist-nationalist struggle against Japan and France." },
  { clue: "Hauled heavy artillery up jungle hills by hand and bicycle at Dien Bien Phu in 1954.", side: "Communist", actor: "Viet Minh", reason: "General Vo Nguyen Giap's **Viet Minh** defeated France at Dien Bien Phu." },
  { clue: "Proclaimed Vietnamese independence in Hanoi on 2 September 1945.", side: "Communist", actor: "Viet Minh", reason: "Ho Chi Minh and the **Viet Minh** declared the Democratic Republic of Vietnam in 1945." },
  { clue: "Cut harsh peasant rents and redistributed landlords' fields during the 1946–54 war against France.", side: "Communist", actor: "Viet Minh", reason: "Popular peasant reforms helped the **Viet Minh** win rural support." },
  { clue: "Received heavy weapons from newly Communist China after 1949 to defeat French garrisons.", side: "Communist", actor: "Viet Minh", reason: "Chinese aid strengthened the **Viet Minh** prior to Dien Bien Phu." },
  { clue: "Captured 10,000 French soldiers on 7 May 1954, ending French Indochina.", side: "Communist", actor: "Viet Minh", reason: "The **Viet Minh** victory at Dien Bien Phu forced France to Geneva." },
  { clue: "Governed North Vietnam from Hanoi above the 17th parallel after July 1954.", side: "Communist", actor: "Viet Minh", reason: "Ho Chi Minh's **Viet Minh** leadership formed North Vietnam's Communist government." },
  { clue: "Expecting roughly 80% of the nationwide vote, pressed eagerly for the July 1956 Geneva elections.", side: "Communist", actor: "Viet Minh", reason: "Ho Chi Minh's **Viet Minh** movement was widely expected to win free 1956 elections." },

  { clue: "Officially founded in December 1960 as the National Liberation Front (NLF) inside South Vietnam.", side: "Communist", actor: "Viet Cong", reason: "The **Viet Cong** (NLF) formed in South Vietnam in December 1960." },
  { clue: "Received troops, weapons and food from North Vietnam along the jungle Ho Chi Minh Trail.", side: "Communist", actor: "Viet Cong", reason: "The **Viet Cong** relied on supplies sent south through Laos and Cambodia." },
  { clue: "Outfought a vastly larger US-equipped South Vietnamese force at Ap Bac in January 1963.", side: "Communist", actor: "Viet Cong", reason: "**Viet Cong** guerrillas stunned US advisers at the Battle of Ap Bac." },
  { clue: "Recruited angry rural villagers uprooted by Saigon's 1962 Strategic Hamlets Programme.", side: "Communist", actor: "Viet Cong", reason: "Peasant resentment against Strategic Hamlets boosted **Viet Cong** recruitment." },
  { clue: "Blended into South Vietnamese villages using ambushes, traps and night guerrilla tactics.", side: "Communist", actor: "Viet Cong", reason: "Guerrilla warfare inside South Vietnam was the hallmark of the **Viet Cong**." },
  { clue: "Raided the US airbase at Pleiku in February 1965, triggering Operation Rolling Thunder.", side: "Communist", actor: "Viet Cong", reason: "The **Viet Cong** raid on Pleiku killed 8 Americans and prompted LBJ's bombing campaign." },
  { clue: "Fought inside South Vietnam specifically to overthrow Saigon's government and reunify the country.", side: "Communist", actor: "Viet Cong", reason: "Toppling Diem/Saigon to reunify Vietnam was the NLF / **Viet Cong** mission." },
  { clue: "Steadily expanded control over South Vietnam's countryside during the chaos after Diem's 1963 coup.", side: "Communist", actor: "Viet Cong", reason: "Saigon's post-coup instability allowed the **Viet Cong** to seize large rural areas." },

  { clue: "Cancelled the promised July 1956 reunification elections, arguing South Vietnam never signed Geneva.", side: "Anti-Communist", actor: "Diem", reason: "**Ngo Dinh Diem** blocked the 1956 vote with US backing." },
  { clue: "Filled top Saigon ministries with family members such as secret-police chief Ngo Dinh Nhu.", side: "Anti-Communist", actor: "Diem", reason: "Corrupt family nepotism defined **Diem**'s regime in Saigon." },
  { clue: "Reversed Viet Minh land reforms so wealthy landlords recovered rents from poor southern farmers.", side: "Anti-Communist", actor: "Diem", reason: "**Diem**'s landlord-friendly rule alienated South Vietnamese peasants." },
  { clue: "Enforced the 1962 Strategic Hamlets Programme relocating villagers into barbed-wire compounds.", side: "Anti-Communist", actor: "Diem", reason: "**Diem**'s government implemented Strategic Hamlets, angering rural families." },
  { clue: "Banned Buddhist flags on Vesak and raided pagodas, sparking the 1963 Buddhist Crisis.", side: "Anti-Communist", actor: "Diem", reason: "**Diem**'s Catholic inner circle persecuted South Vietnam's Buddhist majority." },
  { clue: "Rigged a 1955 South Vietnamese referendum to become President of the Republic of Vietnam.", side: "Anti-Communist", actor: "Diem", reason: "**Diem** won over 98% in a notoriously rigged 1955 Saigon referendum." },
  { clue: "Was overthrown and assassinated in a November 1963 military coup in Saigon.", side: "Anti-Communist", actor: "Diem", reason: "South Vietnamese generals killed **Diem** on 2 November 1963." },
  { clue: "Imprisoned and executed tens of thousands of suspected political opponents across South Vietnam.", side: "Anti-Communist", actor: "Diem", reason: "Harsh authoritarian repression under **Diem** fuelled armed opposition." },

  { clue: "Bankrolled approximately 80% of France's war costs in Indochina by 1954 to uphold Containment.", side: "Anti-Communist", actor: "US", reason: "The **US** funded France's colonial war to contain Communism." },
  { clue: "Created SEATO in September 1954 to build an anti-Communist shield around Southeast Asia.", side: "Anti-Communist", actor: "US", reason: "The **US** led the creation of SEATO right after Geneva." },
  { clue: "Raised military advisers in South Vietnam from ~900 (1960) to over 16,000 by November 1963.", side: "Anti-Communist", actor: "US", reason: "The **US** escalated advisers sharply under President Kennedy." },
  { clue: "Deployed destroyer USS *Maddox* on intelligence patrols in the Gulf of Tonkin in August 1964.", side: "Anti-Communist", actor: "US", reason: "The **US** Navy destroyer USS *Maddox* was at the centre of the August 1964 clash." },
  { clue: "Passed the 7 August 1964 Resolution granting 'all necessary measures' without formally declaring war.", side: "Anti-Communist", actor: "US", reason: "The **US** Congress passed the Gulf of Tonkin Resolution 88–2 in the Senate." },
  { clue: "Launched Operation Rolling Thunder bombing raids against North Vietnam in March 1965.", side: "Anti-Communist", actor: "US", reason: "The **US** Air Force and Navy waged Operation Rolling Thunder." },
  { clue: "Landed 3,500 Marines at Da Nang on 8 March 1965 to open regular ground combat operations.", side: "Anti-Communist", actor: "US", reason: "The **US** Marine Corps landing at Da Nang marked regular American ground war." },
  { clue: "Guided foreign policy by the Truman Doctrine (1947) and Eisenhower's Domino Theory (1954).", side: "Anti-Communist", actor: "US", reason: "Containment and the Domino Theory were core **US** Cold War doctrines." },
];

const KEY_TERM_CLUES: readonly { prompt: string; accept: string[]; display: string; explanation: string }[] = [
  { prompt: "What collective colonial name covered Vietnam, Laos and Cambodia under France until 1954?", accept: ["French Indochina", "Indochina"], display: "French Indochina", explanation: "France governed Vietnam, Laos and Cambodia together as **French Indochina**." },
  { prompt: "Name the May 1954 valley battle where Vo Nguyen Giap's Viet Minh defeated 10,000 French troops.", accept: ["Dien Bien Phu", "Battle of Dien Bien Phu"], display: "Dien Bien Phu", explanation: "The **Battle of Dien Bien Phu** ended French colonial power in Indochina." },
  { prompt: "Which July 1954 international settlement temporarily split Vietnam and promised 1956 elections?", accept: ["Geneva Accords", "The Geneva Accords", "Geneva Agreement", "Geneva Agreements"], display: "Geneva Accords", explanation: "The **Geneva Accords** (July 1954) divided Vietnam temporarily at the 17th parallel." },
  { prompt: "Along which parallel of latitude did Geneva divide North and South Vietnam? (e.g. '17th parallel')", accept: ["17th parallel", "17th", "17", "17 parallel"], display: "17th parallel", explanation: "Vietnam was split at the **17th parallel** (Korea was at the 38th)." },
  { prompt: "Name the 1947 US policy aiming to prevent Communism from spreading to any new country.", accept: ["Containment", "Truman Doctrine"], display: "Containment", explanation: "The Truman Doctrine launched **Containment** in 1947." },
  { prompt: "Name President Eisenhower's April 1954 theory warning Southeast Asian countries would fall one by one.", accept: ["Domino Theory", "The Domino Theory"], display: "Domino Theory", explanation: "Eisenhower's **Domino Theory** linked Vietnam directly to Laos, Cambodia, Thailand, Malaya and Singapore." },
  { prompt: "Name the 1948–1960 anti-Communist jungle conflict north of Singapore that reinforced Domino fears.", accept: ["Malayan Emergency", "The Malayan Emergency"], display: "Malayan Emergency", explanation: "British forces battled Communist guerrillas in the **Malayan Emergency** (1948–60)." },
  { prompt: "Give the five-letter acronym for the anti-Communist Southeast Asia Treaty Organization (1954).", accept: ["SEATO"], display: "SEATO", explanation: "**SEATO** was created in September 1954 to shield non-Communist Southeast Asia." },
  { prompt: "Name the capital city of Communist North Vietnam led by Ho Chi Minh.", accept: ["Hanoi"], display: "Hanoi", explanation: "**Hanoi** was the capital of North Vietnam." },
  { prompt: "Name the capital city of anti-Communist South Vietnam under Ngo Dinh Diem.", accept: ["Saigon"], display: "Saigon", explanation: "**Saigon** was the capital of South Vietnam (renamed Ho Chi Minh City after 1975)." },
  { prompt: "Name the 1962 programme that forcibly moved South Vietnamese villagers into barbed-wire compounds.", accept: ["Strategic Hamlets", "Strategic Hamlets Programme", "Strategic Hamlet", "Strategic Hamlet Programme"], display: "Strategic Hamlets", explanation: "**Strategic Hamlets** alienated rural peasants and boosted Viet Cong recruitment." },
  { prompt: "Name the June 1963 protesting Buddhist monk whose Saigon self-immolation shocked the world.", accept: ["Thich Quang Duc", "Quang Duc"], display: "Thich Quang Duc", explanation: "**Thich Quang Duc**'s protest exposed Diem's persecution of South Vietnam's Buddhist majority." },
  { prompt: "What three-letter abbreviation stood for South Vietnam's National Liberation Front (founded Dec 1960)?", accept: ["NLF"], display: "NLF", explanation: "The **NLF** (National Liberation Front) was commonly nicknamed the Viet Cong." },
  { prompt: "Name the camouflaged supply route winding through Laos and Cambodia into South Vietnam.", accept: ["Ho Chi Minh Trail", "The Ho Chi Minh Trail"], display: "Ho Chi Minh Trail", explanation: "The **Ho Chi Minh Trail** carried troops and weapons from North Vietnam to the Viet Cong." },
  { prompt: "Name the US Navy destroyer attacked by North Vietnamese patrol boats on 2 August 1964.", accept: ["USS Maddox", "Maddox"], display: "USS Maddox", explanation: "**USS Maddox** clashed with North Vietnamese boats in the Gulf of Tonkin on 2 August 1964." },
  { prompt: "Name the August 1964 body of water where the naval flashpoint occurred off North Vietnam's coast.", accept: ["Gulf of Tonkin", "Tonkin", "Tonkin Gulf"], display: "Gulf of Tonkin", explanation: "The **Gulf of Tonkin** incident led straight to the 7 August 1964 Resolution." },
  { prompt: "Name the Congressional resolution (7 August 1964) giving LBJ power to take 'all necessary measures'.", accept: ["Gulf of Tonkin Resolution", "Tonkin Resolution", "The Gulf of Tonkin Resolution"], display: "Gulf of Tonkin Resolution", explanation: "The **Gulf of Tonkin Resolution** acted as LBJ's virtual blank cheque for war." },
  { prompt: "Name the sustained US aerial bombing campaign against North Vietnam begun in March 1965.", accept: ["Operation Rolling Thunder", "Rolling Thunder"], display: "Operation Rolling Thunder", explanation: "**Operation Rolling Thunder** began in March 1965 after the Pleiku raid." },
  { prompt: "Name the coastal city in South Vietnam where 3,500 US Marines landed on 8 March 1965.", accept: ["Da Nang", "Danang"], display: "Da Nang", explanation: "The first regular US combat troops landed at **Da Nang** in March 1965." },
  { prompt: "Name the US airbase attacked by the Viet Cong in February 1965, triggering Rolling Thunder.", accept: ["Pleiku"], display: "Pleiku", explanation: "The Viet Cong attack on **Pleiku** killed 8 Americans and triggered sustained US bombing." },
  { prompt: "Name the January 1963 battle where a small Viet Cong force outfought a much larger ARVN unit.", accept: ["Ap Bac", "Battle of Ap Bac"], display: "Ap Bac", explanation: "The **Battle of Ap Bac** exposed the weakness of South Vietnam's army despite US helicopters." },
  { prompt: "Name the Viet Minh general who masterminded the 1954 siege of Dien Bien Phu.", accept: ["Vo Nguyen Giap", "Giap", "General Giap"], display: "Vo Nguyen Giap", explanation: "General **Vo Nguyen Giap** commanded the Viet Minh victory at Dien Bien Phu." },
  { prompt: "Name the 1973 US law passed to prevent future presidents from waging undeclared wars like Vietnam.", accept: ["War Powers Resolution", "War Powers Act", "The War Powers Resolution", "The War Powers Act"], display: "War Powers Resolution", explanation: "The **War Powers Resolution** (1973) restricted presidential warmaking after the Tonkin blank cheque." },
  { prompt: "Name the Chinese Communist leader whose 1949 revolution heightened US alarm over Indochina.", accept: ["Mao Zedong", "Mao", "Mao Tse-tung"], display: "Mao Zedong", explanation: "**Mao Zedong**'s 1949 victory gave the Viet Minh a powerful Communist neighbour supplying arms." },
  { prompt: "Name the independence league founded by Ho Chi Minh in 1941 to fight Japan and France.", accept: ["Viet Minh", "Vietminh", "The Viet Minh"], display: "Viet Minh", explanation: "The **Viet Minh** led Vietnam's anti-colonial war up to 1954." },
  { prompt: "Name the South Vietnamese Communist guerrillas formed in December 1960 to fight Diem and the US.", accept: ["Viet Cong", "Vietcong", "VC", "The Viet Cong"], display: "Viet Cong", explanation: "The **Viet Cong** (NLF) fought guerrilla warfare inside South Vietnam." },
  { prompt: "Name the South Vietnamese leader overthrown and killed in a November 1963 coup.", accept: ["Ngo Dinh Diem", "Diem"], display: "Ngo Dinh Diem", explanation: "**Ngo Dinh Diem** lost US backing after the 1963 Buddhist Crisis." },
  { prompt: "Name the second US destroyer alongside USS *Maddox* during the disputed 4 August 1964 night alert.", accept: ["USS Turner Joy", "Turner Joy"], display: "USS Turner Joy", explanation: "**USS Turner Joy** and USS *Maddox* reported stormy sonar readings on 4 August 1964." },
  { prompt: "Name the US President who won the 1964 election after securing the Gulf of Tonkin Resolution.", accept: ["Lyndon B. Johnson", "Lyndon Johnson", "LBJ", "Johnson"], display: "Lyndon B. Johnson", explanation: "President **Lyndon B. Johnson** escalated into full US air and ground war in 1965." },
  { prompt: "Which country occupied French Indochina from 1940 to 1945, shattering French colonial authority?", accept: ["Japan", "Imperial Japan"], display: "Japan", explanation: "**Japan** occupied Indochina during WWII, just as it occupied Malaya and Singapore." },
];

const VIETNAM_LENS_CARDS: readonly { clue: string; lens: "Ideology" | "Territory" | "Flashpoint"; reason: string }[] = [
  { clue: "The 1947 Truman Doctrine committed America to containing Communism worldwide.", lens: "Ideology", reason: "Containment was the core Cold War political doctrine (**Ideology**)." },
  { clue: "Eisenhower's Domino Theory warned Communism would sweep across Southeast Asia.", lens: "Ideology", reason: "Fear of Communist ideological spread is **Ideology**." },
  { clue: "Mao Zedong's 1949 Communist victory in China panicked anti-Communist politicians in Washington.", lens: "Ideology", reason: "Superpower fear of global Communism belongs under **Ideology**." },
  { clue: "Ho Chi Minh blended Marxist Communism with fierce Vietnamese anti-colonial nationalism.", lens: "Ideology", reason: "Political creeds motivating revolutionary struggle belong under **Ideology**." },
  { clue: "US leaders feared being attacked domestically as 'soft on Communism' if Saigon fell.", lens: "Ideology", reason: "Cold War anti-Communist political pressure is **Ideology**." },
  { clue: "Diem's Catholic elite persecuted South Vietnam's Buddhist majority in 1963.", lens: "Ideology", reason: "Religious and authoritarian political beliefs belong under **Ideology**." },
  { clue: "SEATO (1954) was formed specifically to shield Southeast Asia from Communist expansion.", lens: "Ideology", reason: "Anti-Communist Cold War collective defence is driven by **Ideology**." },
  { clue: "Washington viewed Ho Chi Minh as a puppet of Moscow and Beijing rather than a nationalist.", lens: "Ideology", reason: "Seeing local politics through a rigid Cold War lens is **Ideology**." },
  { clue: "The United States reversed its traditional anti-colonialism to pay 80% of France's war costs.", lens: "Ideology", reason: "Prioritising anti-Communism over anti-colonialism reflects **Ideology**." },
  { clue: "Cancelling the 1956 elections placed stopping Communism ahead of democratic self-determination.", lens: "Ideology", reason: "Blocking a vote to prevent a Communist win is **Ideology**." },

  { clue: "France ruled Vietnam, Laos and Cambodia together as colonial French Indochina.", lens: "Territory", reason: "Imperial ownership over Southeast Asian lands is **Territory**." },
  { clue: "The 1954 Geneva Accords drew a temporary border splitting Vietnam along the 17th parallel.", lens: "Territory", reason: "Partitioning a country along a line of latitude is **Territory**." },
  { clue: "Japan occupied Indochina from 1940 to 1945 to seize strategic Asian land and resources.", lens: "Territory", reason: "Wartime occupation of colonial lands belongs under **Territory**." },
  { clue: "The Ho Chi Minh Trail wound through neighbouring Laos and Cambodia to supply the South.", lens: "Territory", reason: "Cross-border jungle supply routes and geography are **Territory**." },
  { clue: "Western leaders worried about strategic trade routes through Malaya and Singapore.", lens: "Territory", reason: "Protecting key regional geography and sea lanes is **Territory**." },
  { clue: "Diem reversed Viet Minh land reforms so rich landlords reclaimed peasants' fields.", lens: "Territory", reason: "Disputes over ownership of rural land belong under **Territory**." },
  { clue: "Strategic Hamlets forcibly uprooted peasants from ancestral farmland into fortified compounds.", lens: "Territory", reason: "Forcible control and relocation off ancestral land reflects **Territory**." },
  { clue: "France fought from 1946 to 1954 to re-conquer its lost Southeast Asian empire.", lens: "Territory", reason: "Fighting to hold overseas colonial borders is **Territory**." },
  { clue: "Laos and Cambodia gained territorial independence from France under the 1954 Geneva Accords.", lens: "Territory", reason: "Redrawing post-colonial borders belongs under **Territory**." },
  { clue: "Vietnamese nationalists fought to reunify North and South Vietnam into one sovereign homeland.", lens: "Territory", reason: "Struggling to unify divided national land is **Territory**." },

  { clue: "On 2 August 1964 North Vietnamese torpedo boats fired on destroyer USS *Maddox*.", lens: "Flashpoint", reason: "The acute naval clash sparking escalation is a **Flashpoint**." },
  { clue: "On 4 August 1964 stormy sonar readings produced a disputed report of a second attack.", lens: "Flashpoint", reason: "The immediate controversial incident triggering Congress is a **Flashpoint**." },
  { clue: "On 7 August 1964 Congress passed the Gulf of Tonkin Resolution by 88–2 in the Senate.", lens: "Flashpoint", reason: "The immediate legislative trigger handing LBJ war powers belongs under **Flashpoint**." },
  { clue: "On 7 February 1965 Viet Cong guerrillas raided the US airbase at Pleiku, killing 8 Americans.", lens: "Flashpoint", reason: "The specific attack immediately sparking Rolling Thunder is a **Flashpoint**." },
  { clue: "On 8 March 1965 3,500 US Marines waded ashore at Da Nang to start regular combat.", lens: "Flashpoint", reason: "The immediate deployment crossing the threshold to ground war is a **Flashpoint**." },
  { clue: "In June 1963 monk Thich Quang Duc's self-immolation ignited Saigon's political collapse.", lens: "Flashpoint", reason: "A sudden dramatic event tipping a crisis over the edge is a **Flashpoint**." },
  { clue: "On 2 November 1963 a military coup assassinated Ngo Dinh Diem, plunging Saigon into chaos.", lens: "Flashpoint", reason: "An acute political crisis event accelerating US intervention is a **Flashpoint**." },
  { clue: "On 7 May 1954 the fall of Dien Bien Phu instantly collapsed France's colonial war.", lens: "Flashpoint", reason: "The decisive shock event forcing immediate diplomatic partition is a **Flashpoint**." },
  { clue: "In March 1965 LBJ ordered the first sustained Operation Rolling Thunder bombing raids.", lens: "Flashpoint", reason: "The sudden transition from threats to sustained air war belongs under **Flashpoint**." },
  { clue: "LBJ went on live television on 4 August 1964 ordering retaliatory strikes on North Vietnam.", lens: "Flashpoint", reason: "Immediate retaliation during the Gulf of Tonkin crisis is a **Flashpoint**." },
];

const WWI_VS_VIETNAM_CARDS: readonly { clue: string; war: "WWI" | "Vietnam"; reason: string }[] = [
  { clue: "Triple Alliance (Germany, Austria-Hungary, Italy) vs Triple Entente (Britain, France, Russia).", war: "WWI", reason: "Europe's two pre-1914 alliance blocs caused **WWI**." },
  { clue: "Britain launched HMS Dreadnought in 1906, leading Germany 29 to 17 by 1914.", war: "WWI", reason: "The Anglo-German Dreadnought naval race belongs to **WWI**." },
  { clue: "Germany's Schlieffen Plan planned to defeat France via neutral Belgium in six weeks.", war: "WWI", reason: "The Schlieffen Plan was Germany's 1914 war plan (**WWI**)." },
  { clue: "French *revanchism* over losing Alsace-Lorraine in 1871 poisoned relations with Berlin.", war: "WWI", reason: "Alsace-Lorraine was a classic **WWI** territorial rivalry." },
  { clue: "Kaiser Wilhelm II intervened in Tangier (1905) and sent SMS *Panther* to Agadir (1911).", war: "WWI", reason: "The Moroccan Crises led up to **WWI**." },
  { clue: "Austria-Hungary annexed Bosnia-Herzegovina in 1908, humiliating Serbia and Russia.", war: "WWI", reason: "The 1908 Bosnian Crisis turned the Balkans into **WWI**'s powder keg." },
  { clue: "Gavrilo Princip of the Black Hand shot Archduke Franz Ferdinand on 28 June 1914.", war: "WWI", reason: "The Sarajevo assassination was the flashpoint of **WWI**." },
  { clue: "Germany gave Austria-Hungary its 5 July 'blank cheque' before Vienna's 48-hour ultimatum.", war: "WWI", reason: "The 5 July blank cheque accelerated the **WWI** July Crisis." },
  { clue: "Germany dismissed the 1839 Treaty of London guaranteeing Belgian neutrality as 'a scrap of paper'.", war: "WWI", reason: "Violating neutral Belgium brought Britain into **WWI** on 4 August 1914." },
  { clue: "Fritz Fischer (1961) debated Christopher Clark (*The Sleepwalkers*, 2012) over war responsibility.", war: "WWI", reason: "Fischer vs Clark is the flagship historiographical debate on **WWI**." },
  { clue: "Kaiser Wilhelm II's *Weltpolitik* demanded Germany's overseas 'place in the sun'.", war: "WWI", reason: "*Weltpolitik* was German imperial ideology before **WWI**." },
  { clue: "Tsar Nicholas II ordered full Russian mobilisation on 30 July 1914 to protect Slavic Serbia.", war: "WWI", reason: "Russian mobilisation was a key step in **WWI**'s July Crisis." },
  { clue: "Serbia nearly doubled in size during the 1912–13 Balkan Wars as Ottoman rule collapsed.", war: "WWI", reason: "The Balkan Wars heightened Austro-Serbian tension before **WWI**." },
  { clue: "Article 231 of the 1919 Treaty of Versailles placed legal 'War Guilt' on Germany.", war: "WWI", reason: "Treaty of Versailles Article 231 followed **WWI**." },
  { clue: "Germany feared 'encirclement' (*Einkreisung*) wedged between allied France and Russia.", war: "WWI", reason: "Encirclement anxiety shaped German planning before **WWI**." },
  { clue: "Europe slid from a single murder to continent-wide war in just 37 summer days.", war: "WWI", reason: "The rapid 37-day July Crisis chain reaction produced **WWI**." },

  { clue: "General Vo Nguyen Giap defeated 10,000 French soldiers at Dien Bien Phu in May 1954.", war: "Vietnam", reason: "Dien Bien Phu ended French colonial rule in **Vietnam**." },
  { clue: "The July 1954 Geneva Accords temporarily split a country along the 17th parallel.", war: "Vietnam", reason: "The 17th parallel division created North and South **Vietnam**." },
  { clue: "President Eisenhower warned of falling Southeast Asian dominoes from Laos to Singapore.", war: "Vietnam", reason: "The Domino Theory justified US involvement in **Vietnam**." },
  { clue: "By 1954 Washington was paying roughly 80% of France's colonial war costs in Indochina.", war: "Vietnam", reason: "US funding of France marked early American entanglement in **Vietnam**." },
  { clue: "Promised July 1956 reunification elections were cancelled because Ho Chi Minh would win ~80%.", war: "Vietnam", reason: "Blocking the 1956 vote triggered civil insurgency in **Vietnam**." },
  { clue: "Ngo Dinh Diem's Strategic Hamlets (1962) uprooted rural villagers into barbed-wire compounds.", war: "Vietnam", reason: "Strategic Hamlets backfired inside South **Vietnam**." },
  { clue: "Buddhist monk Thich Quang Duc's June 1963 Saigon protest shocked President Kennedy.", war: "Vietnam", reason: "The 1963 Buddhist Crisis destabilised South **Vietnam**." },
  { clue: "The National Liberation Front (Viet Cong) formed in December 1960 to fight guerrilla war.", war: "Vietnam", reason: "The Viet Cong led the southern guerrilla insurgency in **Vietnam**." },
  { clue: "JFK expanded US military 'advisers' from around 900 to 16,000 by November 1963.", war: "Vietnam", reason: "Kennedy's adviser build-up deepened US commitment in **Vietnam**." },
  { clue: "USS *Maddox* took fire on 2 August 1964, followed by a disputed night attack on 4 August.", war: "Vietnam", reason: "The Gulf of Tonkin Incident was the 1964 flashpoint for **Vietnam**." },
  { clue: "Congress passed the 7 August 1964 Resolution (88–2 in Senate) handing LBJ war powers.", war: "Vietnam", reason: "The Gulf of Tonkin Resolution enabled full US war in **Vietnam**." },
  { clue: "Operation Rolling Thunder and 3,500 Marines landing at Da Nang opened full combat in March 1965.", war: "Vietnam", reason: "March 1965 marked full US combat escalation in **Vietnam**." },
  { clue: "North Vietnam supplied southern guerrillas via the camouflaged Ho Chi Minh Trail.", war: "Vietnam", reason: "The Ho Chi Minh Trail sustained the Viet Cong in **Vietnam**." },
  { clue: "The 1948–1960 Malayan Emergency heightened Western fears of Communism reaching Singapore.", war: "Vietnam", reason: "Regional Malaya/Singapore Cold War fears directly drove US policy in **Vietnam**." },
  { clue: "The 1947 Truman Doctrine of Containment and Mao's 1949 revolution reshaped Asian policy.", war: "Vietnam", reason: "Cold War Containment drove four US presidents into **Vietnam**." },
  { clue: "Involvement crept gradually upward across twenty years and four US presidents (1945–65).", war: "Vietnam", reason: "Gradual 20-year escalation was the defining pattern of **Vietnam**." },
];

const COMPARE_CARDS: readonly { statement: string; kind: "Similarity" | "Difference"; reason: string }[] = [
  { statement: "Both 1914 and 1964 featured a dramatic summer flashpoint followed immediately by a 'blank cheque' removing restraints on escalation.", kind: "Similarity", reason: "Linking Sarajevo + 5 July to Gulf of Tonkin + 7 August highlights a **Similarity**." },
  { statement: "In both conflicts, powerful outside states fatally underestimated fierce local nationalism (Serbian vs Vietnamese).", kind: "Similarity", reason: "A shared blind spot across both eras is a **Similarity**." },
  { statement: "Both wars saw leaders escalate partly out of fear of losing Great Power 'credibility' or looking weak if they backed down.", kind: "Similarity", reason: "Shared prestige/credibility fears represent a **Similarity**." },
  { statement: "In neither conflict would the immediate flashpoint alone have caused a major war without pre-existing long-term tensions.", kind: "Similarity", reason: "Both followed the 'spark plus gunpowder' pattern — a **Similarity**." },
  { statement: "Both conflicts combined ideological beliefs, contested territory and acute human miscalculation.", kind: "Similarity", reason: "Shared presence of Ideology, Territory and Flashpoint is a **Similarity**." },
  { statement: "Both Germany's 5 July pledge and Congress's 7 August Resolution handed leaders wide, unchecked room to launch military action.", kind: "Similarity", reason: "Parallel escalation mandates represent a **Similarity**." },
  { statement: "In both eras, elites ('Sleepwalkers' in 1914 and 'Best and Brightest' in 1964) believed they could control escalation and win quickly.", kind: "Similarity", reason: "Shared elite overconfidence is a **Similarity**." },
  { statement: "Both conflicts grew out of earlier regional crises that eroded diplomatic trust (Morocco/Bosnia before 1914; Dien Bien Phu/Korea before 1964).", kind: "Similarity", reason: "Accumulating pre-war shocks represent a **Similarity**." },
  { statement: "In both wars, smaller states (Serbia & Belgium; South Vietnam & Laos) became strategic tripwires for major world powers.", kind: "Similarity", reason: "Smaller states triggering superpower/Great Power involvement is a **Similarity**." },
  { statement: "Both wars produced massive unintended long-term disasters far bloodier than leaders expected at the start.", kind: "Similarity", reason: "Shared unforeseen scale of war is a **Similarity**." },
  { statement: "In both 1914 and 1964, domestic politics and nationalist pride made compromise politically dangerous for leaders.", kind: "Similarity", reason: "Domestic pressure against backing down is a **Similarity**." },
  { statement: "Both wars drew global repercussions affecting Southeast Asia and Singapore (SMS *Emden* in 1914; Domino fears & ASEAN security in the 1960s).", kind: "Similarity", reason: "Shared global impact reaching Singapore is a **Similarity**." },
  { statement: "Both Austria-Hungary in 1914 and LBJ in 1964 used a short-term incident as a political pretext for actions already contemplated.", kind: "Similarity", reason: "Using a flashpoint as pretext is a **Similarity**." },
  { statement: "Both conflicts saw a major European colonial power (Austria-Hungary; France) struggling to hold onto rebellious subject populations.", kind: "Similarity", reason: "Imperial decline fueling local conflict is a **Similarity**." },
  { statement: "In both wars, military assumptions (6-week Schlieffen victory; quick US bombing victory in Rolling Thunder) proved dangerously wrong.", kind: "Similarity", reason: "Shared flawed military optimism is a **Similarity**." },

  { statement: "WWI exploded across Europe in just 37 days, whereas US combat in Vietnam followed 20 years of creeping escalation across four presidents.", kind: "Difference", reason: "Contrasting speed of escalation (37 days vs 20 years) is a **Difference**." },
  { statement: "WWI pitted rival European empires with similar capitalist/monarchical systems, whereas Vietnam pitted Cold War Capitalism against Communism.", kind: "Difference", reason: "Contrasting ideological structures is a **Difference**." },
  { statement: "WWI was wired by rigid European alliance blocs and rail mobilisation timetables, whereas Vietnam had no automatic multi-power mobilisation chain.", kind: "Difference", reason: "Contrasting mechanisms of escalation is a **Difference**." },
  { statement: "Sarajevo was an undeniable double assassination in broad daylight, whereas the 4 August 1964 Gulf of Tonkin attack almost certainly never happened.", kind: "Difference", reason: "Contrasting factual certainty of the two flashpoints is a **Difference**." },
  { statement: "WWI began over rival European empires expanding their borders, whereas Vietnam began as an anti-colonial decolonisation struggle against France.", kind: "Difference", reason: "Imperial rivalry vs decolonisation is a major **Difference**." },
  { statement: "In 1914, Germany's 'blank cheque' was a secret promise between two monarchs; in 1964, Tonkin was a public vote by a democratic Congress.", kind: "Difference", reason: "Inter-state monarchy pact vs domestic legislative vote is a **Difference**." },
  { statement: "WWI involved formal declarations of war between Great Powers, whereas the US Congress never formally declared war in Vietnam.", kind: "Difference", reason: "Formal war declarations vs undeclared Congressional resolution is a **Difference**." },
  { statement: "WWI erupted directly inside Europe's core Great Powers, whereas Vietnam was a Cold War proxy/peripheral conflict in Southeast Asia.", kind: "Difference", reason: "Direct Great Power clash vs peripheral Cold War war is a **Difference**." },
  { statement: "In 1914, European armies built massive Dreadnought fleets against peer rivals; in Vietnam, a nuclear superpower fought rural guerrilla insurgents.", kind: "Difference", reason: "Peer industrial arms race vs asymmetric guerrilla insurgency is a **Difference**." },
  { statement: "Vietnam was artificially partitioned along the 17th parallel by an international conference (Geneva 1954), unlike pre-1914 European border states.", kind: "Difference", reason: "Post-WWII Cold War partition vs historic European borders is a **Difference**." },
  { statement: "The nuclear age (Cold War) stopped the US and USSR from declaring direct war on each other over Vietnam, unlike Germany and Russia in 1914.", kind: "Difference", reason: "Nuclear deterrence avoiding direct superpower war is a sharp **Difference**." },
  { statement: "In Vietnam, internal collapse of a weak ally (Diem's Buddhist Crisis & coups) pulled the US in; in 1914, Austria-Hungary actively demanded war.", kind: "Difference", reason: "Weak ally collapsing vs aggressive ally demanding action is a **Difference**." },
  { statement: "Television and instant news photography (such as Thich Quang Duc in 1963) shaped Vietnam policy far more rapidly than 1914 newspapers.", kind: "Difference", reason: "Contrasting role of 1960s television media vs 1914 press is a **Difference**." },
  { statement: "In 1914, Italy broke away from the Triple Alliance to stay neutral; in Vietnam, no major SEATO treaty member switched sides to Hanoi.", kind: "Difference", reason: "Different alliance behaviour is a **Difference**." },
  { statement: "WWI's flashpoint killed a royal heir immediately; the Gulf of Tonkin incident resulted in zero American deaths on 2–4 August 1964.", kind: "Difference", reason: "Contrasting immediate casualties at the flashpoint is a **Difference**." },
];

export const drills: Drill[] = [
  {
    id: "causes-of-vietnam-war.indochina-vietnam-timeline",
    topicId: "causes-of-vietnam-war",
    title: "Indochina to 1965 Escalation Chronology",
    level: 1,
    guideRef: "indochina-decolonisation",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const pair = rng.shuffle(VIETNAM_EVENTS).slice(0, 2);
        const [earlier, later] = pair[0].year < pair[1].year ? [pair[0], pair[1]] : [pair[1], pair[0]];
        const flip = rng.bool(0.5);
        const firstShown = flip ? later : earlier;
        const secondShown = flip ? earlier : later;
        return {
          prompt: `Which milestone on the road to the Vietnam War happened **FIRST**? Type the **year** of the earlier event:\n- **${firstShown.label}** (${firstShown.year})\n- **${secondShown.label}** (${secondShown.year})`,
          answer: { type: "number", value: earlier.year, display: String(earlier.year) },
          traps: [
            {
              spec: { type: "number", value: later.year },
              feedback: `${later.year} was the LATER milestone — type the earlier year (${earlier.year}).`,
            },
          ],
          hint: `Compare ${firstShown.year} and ${secondShown.year} and enter the earlier year.`,
          solution: [
            `**${earlier.label}** took place in **${earlier.year}**, before **${later.label}** in ${later.year}.`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.shuffle(VIETNAM_EVENTS).slice(0, 2);
        const [earlier, later] = pair[0].year < pair[1].year ? [pair[0], pair[1]] : [pair[1], pair[0]];
        const diff = later.year - earlier.year;
        return {
          prompt: `How many years elapsed between **${earlier.label}** (${earlier.year}) and **${later.label}** (${later.year})?`,
          answer: { type: "number", value: diff, display: `${diff} years` },
          hint: `Subtract the earlier year from the later year: {{${later.year} - ${earlier.year}}}.`,
          solution: [
            `${earlier.year}: ${earlier.label}.`,
            `${later.year}: ${later.label}.`,
            `Gap: {{${later.year} - ${earlier.year} = ${diff}}} years.`,
          ],
        };
      }

      const triple = rng.shuffle(VIETNAM_EVENTS).slice(0, 3);
      const sorted = [...triple].sort((a, b) => a.year - b.year);
      const mid = sorted[1];
      return {
        prompt: `Put these three Vietnam War milestones in chronological order (years hidden):\n- ${triple[0].label}\n- ${triple[1].label}\n- ${triple[2].label}\n\nWhat **year** did the **middle (2nd)** event occur?`,
        answer: { type: "number", value: mid.year, display: String(mid.year) },
        traps: [
          {
            spec: { type: "number", value: sorted[0].year },
            feedback: `${sorted[0].year} was the EARLIEST of those three events — find the middle year.`,
          },
          {
            spec: { type: "number", value: sorted[2].year },
            feedback: `${sorted[2].year} was the LATEST of those three events — find the middle year.`,
          },
        ],
        hint: `Remember the arc: WWII/1945 → 1947–50 Cold War shocks → 1954 Dien Bien Phu & Geneva → 1956–63 Diem & JFK → 1964–65 LBJ.`,
        solution: [
          `1st: ${sorted[0].year} — ${sorted[0].label}`,
          `2nd (middle): **${mid.year}** — ${mid.label}`,
          `3rd: ${sorted[2].year} — ${sorted[2].label}`,
        ],
      };
    },
  },

  {
    id: "causes-of-vietnam-war.cold-war-domino-presidents",
    topicId: "causes-of-vietnam-war",
    title: "US Presidents, Containment & Domino Escalation",
    level: 1,
    guideRef: "cold-war-ideology-domino",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(PRESIDENT_CARDS);
        return {
          prompt: `Which US President does this Cold War / Vietnam action describe? Type **Truman**, **Eisenhower**, **Kennedy** or **Johnson**:\n\n"${card.clue}"`,
          answer: { type: "text", accept: card.accept, display: card.president },
          hint: "Follow T–E–K–J in time: Truman (1945–53), Eisenhower (1953–61), Kennedy (1961–63), Johnson (1963–69).",
          solution: [
            `President: **${card.president}**.`,
            card.reason,
          ],
        };
      }

      if (tier === 2) {
        const card = rng.pick(SIDE_CARDS);
        return {
          prompt: `Which group or leader does this Vietnam War fact describe? Type **Viet Minh**, **Viet Cong**, **Diem** or **US**:\n\n"${card.clue}"`,
          answer: {
            type: "text",
            accept:
              card.actor === "Viet Minh"
                ? ["Viet Minh", "Vietminh"]
                : card.actor === "Viet Cong"
                  ? ["Viet Cong", "Vietcong", "NLF", "VC"]
                  : card.actor === "Diem"
                    ? ["Diem", "Ngo Dinh Diem"]
                    : ["US", "USA", "United States", "America"],
            display: card.actor,
          },
          hint: "Viet Minh = 1941–54 vs Japan/France; Viet Cong = 1960+ guerrillas in South; Diem = Saigon dictator 1955–63; US = Containment superpower.",
          solution: [
            `Match: **${card.actor}**.`,
            card.reason,
          ],
        };
      }

      const item = rng.pick(KEY_TERM_CLUES);
      return {
        prompt: item.prompt,
        answer: { type: "text", accept: item.accept, display: item.display },
        hint: "Recall the exact treaty, battle, figure or programme from Indochina (1940) to March 1965.",
        solution: [item.explanation],
      };
    },
  },

  {
    id: "causes-of-vietnam-war.vietnam-actors-and-terms",
    topicId: "causes-of-vietnam-war",
    title: "Cold War Sides, Diem & Viet Cong Terms",
    level: 2,
    guideRef: "diem-viet-cong-escalation",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(SIDE_CARDS);
        return {
          prompt: `Which Cold War side in Vietnam does this clue belong to? Type **Communist** or **Anti-Communist**:\n\n"${card.clue}"`,
          answer: {
            type: "text",
            accept:
              card.side === "Communist"
                ? ["Communist", "Communists", "North"]
                : ["Anti-Communist", "Anti Communist", "Anticommunist", "Non-Communist", "Capitalist"],
            display: card.side,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: card.side === "Communist" ? ["Anti-Communist", "Anti Communist"] : ["Communist"],
              },
              feedback: `Check who is acting here: ${card.actor} belonged to the ${card.side} side.`,
            },
          ],
          hint: "Communist side = Ho Chi Minh, Viet Minh, North Vietnam, Viet Cong (backed by USSR & China). Anti-Communist side = France, Diem, South Vietnam, US.",
          solution: [
            `Side: **${card.side}** (${card.actor}).`,
            card.reason,
          ],
        };
      }

      if (tier === 2) {
        const item = rng.pick(KEY_TERM_CLUES);
        return {
          prompt: `Name the exact Vietnam War term, person, place or event:\n\n${item.prompt}`,
          answer: { type: "text", accept: item.accept, display: item.display },
          hint: "Think of the core vocabulary from Indochina, Cold War Domino Theory, Diem's regime and Gulf of Tonkin.",
          solution: [item.explanation],
        };
      }

      // Tier 3: Escalation figures & milestone pair differences + Domino sequence deductions
      const milestones: readonly { year: number; personnel: number; label: string }[] = [
        { year: 1960, personnel: 900, label: "End of Eisenhower's presidency (US advisers)" },
        { year: 1961, personnel: 3200, label: "JFK's first year in office (US advisers)" },
        { year: 1962, personnel: 11300, label: "Strategic Hamlets year under JFK (US advisers)" },
        { year: 1963, personnel: 16000, label: "Late 1963 at JFK's assassination (US advisers)" },
        { year: 1964, personnel: 23000, label: "Year of Gulf of Tonkin Resolution (US personnel)" },
        { year: 1965, personnel: 184000, label: "End of 1965 after Da Nang Marines & Rolling Thunder" },
        { year: 1966, personnel: 385000, label: "Second year of LBJ ground war" },
        { year: 1967, personnel: 485000, label: "Height of LBJ build-up prior to Tet" },
        { year: 1968, personnel: 536000, label: "Peak US troop presence in Vietnam" },
      ];
      const pair = rng.shuffle(milestones).slice(0, 2);
      const [early, late] = pair[0].year < pair[1].year ? [pair[0], pair[1]] : [pair[1], pair[0]];
      const increase = late.personnel - early.personnel;
      return {
        prompt: `US military escalation in Vietnam:\n- **${early.year}** (${early.label}): **${early.personnel.toLocaleString("en-GB")}** US personnel\n- **${late.year}** (${late.label}): **${late.personnel.toLocaleString("en-GB")}** US personnel\n\nBy how many personnel did US forces increase between ${early.year} and ${late.year}?`,
        answer: { type: "number", value: increase, display: increase.toLocaleString("en-GB") },
        traps: [
          {
            spec: { type: "number", value: early.personnel + late.personnel },
            feedback: "Subtract the earlier figure from the later figure instead of adding them.",
          },
        ],
        hint: `Compute {{${late.personnel} - ${early.personnel}}}.`,
        solution: [
          `${early.year}: ${early.personnel.toLocaleString("en-GB")} · ${late.year}: ${late.personnel.toLocaleString("en-GB")}.`,
          `Increase: {{${late.personnel} - ${early.personnel} = ${increase}}}.`,
        ],
      };
    },
  },

  {
    id: "causes-of-vietnam-war.ideology-territory-flashpoint",
    topicId: "causes-of-vietnam-war",
    title: "Ideology, Territory, Flashpoint & WWI vs Vietnam",
    level: 3,
    guideRef: "gulf-of-tonkin-comparison",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const card = rng.pick(VIETNAM_LENS_CARDS);
        return {
          prompt: `Classify this Vietnam War evidence under Tanglin's three Year 9 History lenses — type **Ideology**, **Territory** or **Flashpoint**:\n\n"${card.clue}"`,
          answer: { type: "text", accept: [card.lens], display: card.lens },
          hint: "Cold War beliefs/political doctrines = Ideology; borders/colonies/land/geography = Territory; acute crisis triggers = Flashpoint.",
          solution: [
            `Curriculum lens: **${card.lens}**.`,
            card.reason,
          ],
        };
      }

      if (tier === 2) {
        const card = rng.pick(WWI_VS_VIETNAM_CARDS);
        return {
          prompt: `Which 20th-century conflict does this cause or flashpoint belong to? Type **WWI** or **Vietnam**:\n\n"${card.clue}"`,
          answer: {
            type: "text",
            accept:
              card.war === "WWI"
                ? ["WWI", "WW1", "First World War", "World War 1", "World War One"]
                : ["Vietnam", "Vietnam War"],
            display: card.war,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: card.war === "WWI" ? ["Vietnam", "Vietnam War"] : ["WWI", "WW1"],
              },
              feedback: `Check the era and actors: ${card.reason}`,
            },
          ],
          hint: "WWI = European empires, 1871–1914, MAIN, Sarajevo; Vietnam = Indochina decolonisation, Cold War 1945–65, Containment, Gulf of Tonkin.",
          solution: [
            `Conflict: **${card.war}**.`,
            card.reason,
          ],
        };
      }

      const card = rng.pick(COMPARE_CARDS);
      return {
        prompt: `When comparing the causes of **WWI (1914)** and the **Vietnam War (1954–65)**, does this statement identify a **Similarity** or a **Difference**?\n\n"${card.statement}"`,
        answer: {
          type: "text",
          accept: card.kind === "Similarity" ? ["Similarity", "Similar"] : ["Difference", "Different", "Contrast"],
          display: card.kind,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: card.kind === "Similarity" ? ["Difference", "Contrast"] : ["Similarity"],
            },
            feedback: `Look at the connecting words: does it show what BOTH wars shared, or how they contrasted?`,
          },
        ],
        hint: "Check whether both wars shared this mechanism ('both', 'shared') or contrasted sharply ('whereas', 'unlike').",
        solution: [
          `Comparison type: **${card.kind}**.`,
          card.reason,
        ],
      };
    },
  },
];
