import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1961, critics nicknamed Dr Goh Keng Swee's mosquito-filled Jurong swampland 'Goh's Folly'—and on 9 August 1965, international newspapers doubted an island with no oil, no hinterland, and no army could survive. How did Singapore flip every geographical weakness into a global hub?",
  didYouKnow: [
    "In 1959, only about 9% of Singapore's population lived in public housing under the colonial Singapore Improvement Trust (SIT); today around 80% of resident households live in HDB flats.",
    "After the devastating 25 May 1961 Bukit Ho Swee fire left 16,000 squatters homeless, Lim Kim San's newly created HDB completed the first concrete flats on the site in just nine months.",
    "Through coastal land reclamation, Singapore has grown by roughly 154 km² since 1965 (from ~581 km² to ~735 km²)—an expansion of about 25% of the island's entire area!",
    "When Britain announced its 'East of Suez' military withdrawal in January 1968, British naval and air bases still accounted for roughly 20% of Singapore's GDP and tens of thousands of jobs.",
    "Singapore's first President, Yusof bin Ishak—whose portrait appears on Singapore banknotes today—first served as Yang di-Pertuan Negara (Head of State) under 1959 internal self-government.",
  ],
  activities: [
    {
      title: "Four-Lens Neighbourhood Fieldwalk (Combined Humanities Spyglass)",
      emoji: "🧭",
      materials: [
        "A notebook or tablet camera",
        "Four coloured sticky tabs (History, Politics, Geography, Economics)",
        "A short walk around an HDB estate, Bukit Ho Swee, Queenstown, or Marina Bay",
      ],
      steps: [
        "Choose ONE visible landmark near you (an HDB void deck, hawker centre, MRT interchange, canal reservoir, or container dock).",
        "Snap or sketch the site, then attach ONE observation under each of the 4 lenses: History (what stood here in 1960?), Politics (what public notices or EIP/community signs reflect state policy?), Geography (how does the design save space or manage tropical rain/heat?), Economics (what jobs, shops, or transport links power daily livelihoods?).",
        "Combine all four notes into ONE debatable Year 9 enquiry question beginning with 'To what extent…'",
      ],
      maths:
        "Combined Humanities is about seeing a single real-world place through four interconnected lenses rather than separating school subjects into silos.",
    },
    {
      title: "The 1965 Cabinet Crisis Room",
      emoji: "🗺️",
      materials: [
        "Four index cards labelled: Jobs/EDB, Housing/HDB, Defence/NS, Water/Land",
        "A 10-minute timer",
      ],
      steps: [
        "Imagine it is 10 August 1965—one day after Separation. You have zero natural resources, no Malaysian Common Market, two small infantry battalions, and high unemployment.",
        "Rank the four crisis cards from #1 (most urgent) to #4, and write ONE concrete action your ministry will take in the next five years.",
        "Now compare your cabinet plan against Singapore's real timeline: HDB/CPF (1964/68), Bilingualism (1966), National Service (1967), EDB/MNCs & Tanjong Pagar containers (1972), Changi (1981), and EIP (1989).",
      ],
      maths:
        "Prioritising scarce national budgets teaches both historical causation and the core Economics principle of opportunity cost.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Singapore's Four National Taps (Water Security Engineering)",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Singapore's Four National Taps water security strategy">
  <rect x="0" y="0" width="560" height="240" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Overcoming Scarcity: Singapore's Four National Taps</text>

  <rect x="20" y="44" width="120" height="114" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5" />
  <text x="80" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">1. Catchment</text>
  <text x="80" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">17 reservoirs</text>
  <text x="80" y="104" text-anchor="middle" font-size="10" fill="var(--ink)">(Marina Barrage)</text>
  <text x="80" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Collects tropical</text>
  <text x="80" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">rainwater</text>

  <rect x="153" y="44" width="120" height="114" rx="10" fill="var(--accent-soft)" stroke="var(--warn)" stroke-width="1.5" />
  <text x="213" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warn)">2. Imported</text>
  <text x="213" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Johor River</text>
  <text x="213" y="104" text-anchor="middle" font-size="10" fill="var(--ink)">(1962 Agreement)</text>
  <text x="213" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Historic link;</text>
  <text x="213" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">expires 2061</text>

  <rect x="286" y="44" width="120" height="114" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="346" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">3. NEWater</text>
  <text x="346" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Ultra-clean</text>
  <text x="346" y="104" text-anchor="middle" font-size="10" fill="var(--ink)">reclaimed water</text>
  <text x="346" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Weather-resilient</text>
  <text x="346" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">high-tech loop</text>

  <rect x="419" y="44" width="121" height="114" rx="10" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.5" />
  <text x="479" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--info)">4. Desalination</text>
  <text x="479" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Purified</text>
  <text x="479" y="104" text-anchor="middle" font-size="10" fill="var(--ink)">seawater</text>
  <text x="479" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Drought-proof,</text>
  <text x="479" y="138" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">higher energy cost</text>

  <rect x="55" y="176" width="450" height="46" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5" />
  <text x="280" y="196" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Combined Humanities Link: History (1962 treaty) + Geography (catchments)</text>
  <text x="280" y="212" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">+ Politics (sovereign security) + Economics (energy &amp; tariff trade-offs)</text>
</svg>`,
      caption: "Water security is one of the richest single case studies for weaving all four Combined Humanities lenses together.",
    },
    {
      title: "Land Reclamation & Urban Growth (1965 vs Present)",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Singapore land area and HDB public housing share in 1965 versus present">
  <rect x="0" y="0" width="560" height="230" rx="12" fill="var(--surface)" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Measuring Change in Singapore: 1959/1965 vs Present</text>

  <text x="30" y="62" font-size="12" font-weight="800" fill="var(--brand)">Physical Land Area (km²)</text>
  <text x="30" y="86" font-size="10.5" fill="var(--ink-2)">1965</text>
  <rect x="85" y="73" width="290" height="18" rx="6" fill="var(--line)" />
  <text x="385" y="86" font-size="11" font-weight="800" fill="var(--ink)">~581 km²</text>

  <text x="30" y="114" font-size="10.5" fill="var(--ink-2)">Today</text>
  <rect x="85" y="101" width="368" height="18" rx="6" fill="var(--brand)" />
  <text x="462" y="114" font-size="11" font-weight="800" fill="var(--brand)">~735 km² (+25%)</text>

  <text x="30" y="152" font-size="12" font-weight="800" fill="var(--good)">Resident Households in Public Housing (%)</text>
  <text x="30" y="176" font-size="10.5" fill="var(--ink-2)">1959</text>
  <rect x="85" y="163" width="36" height="18" rx="6" fill="var(--bad)" />
  <text x="130" y="176" font-size="11" font-weight="800" fill="var(--bad)">~9% (SIT era)</text>

  <text x="30" y="204" font-size="10.5" fill="var(--ink-2)">Today</text>
  <rect x="85" y="191" width="320" height="18" rx="6" fill="var(--good)" />
  <text x="414" y="204" font-size="11" font-weight="800" fill="var(--good)">~80% (HDB flats)</text>
</svg>`,
      caption: "Visualising scale helps anchor Geography and Economics evidence inside your Term 3 Combined Humanities report.",
    },
  ],
  history: {
    title: "From 'Goh's Folly' to a Global Powerhouse — The Gamble on Jurong Swamp",
    story:
      "In 1961, when Finance Minister Dr Goh Keng Swee took visitors out to western Singapore's Jurong district, they saw mostly mangrove swamps, prawn ponds, and wandering crocodiles. Critics openly mocked his plan to flatten hills, fill wetlands, build a deep-water port, and invite global manufacturers—dubbing the empty mudflats 'Goh's Folly'. Even after the first factory opened, investors arrived slowly, and sudden Separation from Malaysia in August 1965 wiped out the Malaysian Common Market Jurong had been designed to serve. Rather than abandoning the estate, Goh and the Economic Development Board (EDB) doubled down: if Malaysia could not be Singapore's market, the entire world would be. Armed with clean governance, English-literate schools, and rapid HDB housing for factory workers nearby, EDB officers flew straight to boardrooms in America, Europe, and Japan. Within a decade, Jurong hummed with shipyards, electronics plants, and global multinationals—turning 'Goh's Folly' into the foundation of Singapore's export-led miracle.",
  },
};
