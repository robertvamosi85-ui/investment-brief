const BRIEF = {

  meta: {
    date: "Thursday, July 9, 2026",
    eurusd: "1.1419",
    eurusd_direction: "rising",
    eurusd_driver: "EUR/USD climbed to 1.1419 driven by rising oil prices from US-Iran conflict escalation, renewed ECB rate hike expectations (markets pricing 30+ bps of additional tightening) and a weaker USD as the Warsh-era Fed signals fewer cuts than previously expected.",
    eurusd_outlook: "EUR/USD likely holds 1.13-1.15 range next week ahead of July 23 ECB and July 29 Fed meetings; USD positions face continued mild headwinds if oil-driven European inflation keeps ECB hawkish.",
    eurusd_weekly_change: "+0.4%"
  },

  vitals: {
    fear_greed: { value: 43, last_week: 52, label: "Fear", interpretation: "The index slid from Neutral (52) last week to Fear (43) this week, reflecting investor anxiety over semiconductor rotation selling, elevated oil prices from the Iran conflict, and uncertainty ahead of major earnings season. A Fear reading at 43 is not extreme panic — it suggests cautious positioning rather than capitulation, which historically precedes relief rallies when earnings beat." },
    vix: { value: 18.85, last_week: 16.13, label: "Elevated", interpretation: "VIX jumped from 16.1 to 18.85, a notable spike driven by Wednesday's semiconductor sector sell-off where Applied Materials fell 10% and broader chip stocks rotated sharply. VIX at 18-19 is elevated but not alarming — the danger zone is typically above 25. The move signals option buyers are paying more for protection heading into mega-cap earnings season starting July 22 (Tesla) and July 29 (Meta, Microsoft, Alphabet)." },
    put_call: { value: 0.69, last_week: 0.78, label: "Bullish tilt", interpretation: "The put/call ratio dropped to 0.69 from 0.78 last week, indicating that call buying (bullish bets) is outpacing put buying (hedges). This is a moderately bullish signal — investors are positioning for upside despite the VIX spike. A reading below 0.7 can also signal complacency, but in the current context with earnings season approaching, it more likely reflects deliberate upside positioning on AI and semiconductor names ahead of results." }
  },

  regime: {
    title: "AI vs. Macro: Capex Committed, Revenue Proof Pending",
    description: "The dominant narrative is a tension between confirmed AI infrastructure commitment ($725B hyperscaler capex in 2026, up 77% YoY) and growing demands for proof that this spending translates into proportional revenue. Investors rotated within tech this week — selling overstretched semi equipment names and rotating into beneficiaries of confirmed contracts (Broadcom on Apple deal) and memory recovery plays. The Warsh-led Fed holds hawkishly, the ECB hiked for the first time since 2023, and Iran war oil prices inject inflation risk. Thesis 01 (AI infrastructure) and Thesis 02 (Europe strategic autonomy) are best supported; Thesis 04 (GLP-1) faces near-term headwinds from Wegovy pill data.",
    tailwinds: ["Hyperscaler capex at $725B — largest infrastructure buildout in history locked in", "SK Hynix Nasdaq listing (July 10, $29B) signals memory cycle confidence", "Shipping freight rates surging 9% week-on-week — trade fragmentation creating pricing power"],
    headwinds: ["Fed hawkish hold, Goldman projects no rate cuts until 2027", "SMIC 5nm-class pilot production signals China closing the chip gap faster than expected", "Novo Nordisk Wegovy pill slowdown flags GLP-1 competition risk entering margin compression"]
  },

  league: {
    winners: [
      { rank: 1, name: "Western Digital (WDC)", sector: "Memory / Storage", change: "+7.0%", reason: "DRAM pricing surged 93-98% QoQ in Q1 2026; SK Hynix Nasdaq listing hype lifts all memory sector names." },
      { rank: 2, name: "Alibaba (BABA)", sector: "Consumer / EM Tech", change: "+5.1%", reason: "Hong Kong shares gain on cheap valuation and China AI narrative recovery; still -49% from 52-week high offering deep value thesis." },
      { rank: 3, name: "Marvell Technology (MRVL)", sector: "Semiconductors", change: "+4.1%", reason: "AI custom chip and data center networking demand accelerates; analyst upgrades ahead of earnings." },
      { rank: 4, name: "TSMC (TSM)", sector: "Semiconductors", change: "+4.1%", reason: "Analyst price target raises; CoWoS packaging sold out through 2026 at 90,000+ wafers/month underpins premium pricing power." },
      { rank: 5, name: "Broadcom (AVGO)", sector: "Semiconductors", change: "+4.0%", reason: "Apple extended custom ASIC partnership through 2031 with $30B commitment; 20% of Broadcom revenue secured for 5 years." },
      { rank: 6, name: "Northrop Grumman (NOC)", sector: "US Defense", change: "+3.5%", reason: "NATO spending surge narrative; US defense budgets rising with Iran conflict backdrop elevating geopolitical threat assessments." },
      { rank: 7, name: "KLA Corp (KLAC)", sector: "Semi Equipment", change: "+3.0%", reason: "Process control equipment demand rising with advanced node ramp at TSMC and Samsung; recovery from prior rotation selling." },
      { rank: 8, name: "Lam Research (LRCX)", sector: "Semi Equipment", change: "+3.0%", reason: "Etch and deposition equipment orders recovering; DRAM capacity build drives demand for Lam's core deposition tools." },
      { rank: 9, name: "Intel (INTC)", sector: "Semiconductors", change: "+3.0%", reason: "Broader semi sector rebound; CHIPS Act disbursements progressing; foundry turnaround narrative incrementally supported." },
      { rank: 10, name: "RTX Corp", sector: "US Defense", change: "+3.0%", reason: "Iran conflict and NATO spending narratives; Pratt & Whitney engine orders rising; defense budget tailwind intact." },
      { rank: 11, name: "Teradyne (TER)", sector: "Semi Equipment", change: "+2.8%", reason: "Test equipment demand recovering with memory and semi cycle upturn; DRAM pricing surge a positive leading indicator." },
      { rank: 12, name: "Constellation Energy (CEG)", sector: "Energy / Nuclear", change: "+2.8%", reason: "Nuclear power demand for AI data centers; long-term power purchase agreement momentum continues with hyperscalers." },
      { rank: 13, name: "Vistra Energy (VST)", sector: "Energy / Power", change: "+2.5%", reason: "Data center electricity demand tailwind; power grid investment narrative intact across AI infrastructure buildout." },
      { rank: 14, name: "Oracle (ORCL)", sector: "Cloud / AI", change: "+2.5%", reason: "AI cloud infrastructure wins accelerating; OCI government and enterprise contracts growing ahead of earnings." },
      { rank: 15, name: "Comfort Systems (FIX)", sector: "HVAC / Industrial", change: "+2.0%", reason: "Data center cooling and HVAC installation demand; hyperscaler buildout drives infrastructure services nationwide." },
      { rank: 16, name: "Booking Holdings (BKNG)", sector: "Travel / Consumer", change: "+1.5%", reason: "Summer travel demand holding firm; international bookings resilient despite macro uncertainty." },
      { rank: 17, name: "Netflix (NFLX)", sector: "Consumer / Media", change: "+1.5%", reason: "Content pipeline and advertising tier growth; subscriber numbers holding above analyst estimates." },
      { rank: 18, name: "Robinhood (HOOD)", sector: "Fintech", change: "+1.5%", reason: "Record retail trading volumes (65% above 2025 average daily) driving transaction revenue; SK Hynix IPO demand boosts Q3 outlook." },
      { rank: 19, name: "GE HealthCare (GEHC)", sector: "Healthcare / Tech", change: "+1.0%", reason: "AI diagnostics and imaging demand growth; GLP-1 drug patient expansion driving more diagnostic workups." },
      { rank: 20, name: "Walmart (WMT)", sector: "Consumer Staples", change: "+1.0%", reason: "Defensive positioning on macro anxiety; consumer trade-down narrative from discretionary to Walmart value proposition." }
    ],
    losers: [
      { rank: 1, name: "Sandisk (SNDK)", sector: "Memory / Storage", change: "-10.6%", reason: "Reports of delays in hybrid bonding development critical to next-generation memory packaging overshadowed memory sector recovery." },
      { rank: 2, name: "Applied Materials (AMAT)", sector: "Semi Equipment", change: "-10.0%", reason: "Rotation out of semi equipment names that had rallied sharply; valuation reset ahead of earnings; SOXX -11% from June 22 peak." },
      { rank: 3, name: "BE Semiconductor (BESI)", sector: "Semi Equipment", change: "-7.4%", reason: "Media reports of hybrid bonding development delays directly impact BESI whose next-gen roadmap depends on this packaging technology." },
      { rank: 4, name: "O'Reilly Automotive (ORLY)", sector: "Consumer / Auto Parts", change: "-7.0%", reason: "Shares fell to lowest since January 2025; consumer spending concern on discretionary auto maintenance as macro anxiety rises." },
      { rank: 5, name: "AMC Entertainment", sector: "Consumer / Leisure", change: "-5.0%", reason: "Registered direct offering of 95.25M shares raising $200M triggered dilution concerns; long-term financial stability questioned." },
      { rank: 6, name: "Palantir (PLTR)", sector: "AI / Data Analytics", change: "-5.0%", reason: "High-valuation AI software profit taking; investors rotating from 50x+ revenue multiple names to confirmed-revenue hardware plays." },
      { rank: 7, name: "Shopify (SHOP)", sector: "Consumer / E-Commerce", change: "-3.7%", reason: "Margin concerns and leadership questions ahead of Q2 earnings; valuation pressure as AI-native commerce alternatives emerge." },
      { rank: 8, name: "Global Ship Lease (GSL)", sector: "Shipping", change: "-3.5%", reason: "Profit taking from May all-time high at $41.64; charter rate [daily rental price for one ship] repricing discussion weighs on near-term view despite strong WCI." },
      { rank: 9, name: "Rheinmetall (RHM)", sector: "EU Defence", change: "-2.5%", reason: "Germany canceled the multi-billion euro F126 frigate program Rheinmetall expected to lead; sector-wide profit-taking after NATO summit rally." },
      { rank: 10, name: "UnitedHealth (UNH)", sector: "Healthcare", change: "-2.5%", reason: "Ongoing regulatory and legal scrutiny; prior CEO murder case legal aftermath weighing on management credibility and earnings visibility." },
      { rank: 11, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "-2.5%", reason: "Deutsche Bank flagged Wegovy pill momentum slowdown in dispensing data; planned 50% price cuts in 2027 compress forward cash flow." },
      { rank: 12, name: "Nvidia (NVDA)", sector: "Semiconductors / AI", change: "-2.0%", reason: "Down ~18% from June high; rotation selling; worst performer in its own chip group in 2026 YTD despite AI revenue dominance." },
      { rank: 13, name: "Hello Group (MOMO)", sector: "EM / China Social", change: "-2.0%", reason: "China regulatory risk premium on social platforms; EM tech caution outside the Alibaba value-recovery trade." },
      { rank: 14, name: "Celsius Holdings (CELH)", sector: "Consumer / Beverages", change: "-2.0%", reason: "Energy drink competition intensifying; distribution model uncertainty ahead of Q2 earnings." },
      { rank: 15, name: "StealthGas (GASS)", sector: "Shipping / Gas", change: "-2.0%", reason: "LPG shipping rates softer vs container freight surge; sector divergence as container WCI rises but gas shipping sees muted tailwind." },
      { rank: 16, name: "FinVolution (FINV)", sector: "EM / Fintech", change: "-1.5%", reason: "China EM risk premium rising; fintech regulatory environment uncertainty; Alibaba recovery not yet broadening to smaller names." },
      { rank: 17, name: "Tesla (TSLA)", sector: "EV / Auto", change: "-0.8%", reason: "Shares fell 7.5% on Q2 delivery beat day (480K vs 406K consensus) — classic sell-the-news; Musk distraction concerns persist into earnings." },
      { rank: 18, name: "Amazon (AMZN)", sector: "Consumer / Cloud", change: "-1.7%", reason: "Rotation from growth to value; tariff headwinds for retail segment; antitrust and regulatory risks adding multiple compression." },
      { rank: 19, name: "Alphabet (GOOGL)", sector: "Tech / Cloud", change: "-1.7%", reason: "DOJ antitrust search remedies remain unresolved; AI search cannibalization concern despite $460B Google Cloud backlog." },
      { rank: 20, name: "Microsoft (MSFT)", sector: "Tech / Cloud", change: "-1.3%", reason: "Pre-earnings consolidation ahead of Q4 FY2026 results late July; capex-to-revenue narrative requires confirmation from upcoming results." }
    ]
  },

  sectors: [
    { name: "US Technology", change: "+2.0%", direction: "up", driver: "Memory rebound (DRAM +93-98% QoQ) and Broadcom Apple deal drove semis; broad AI infrastructure capex narrative sustained by $725B commitment." },
    { name: "US Healthcare", change: "-0.9%", direction: "down", driver: "Novo Nordisk Wegovy pill slowdown and UnitedHealth regulatory drag; GE HealthCare gains not enough to offset sector pressure." },
    { name: "US Financials", change: "-1.6%", direction: "down", driver: "Hawkish Fed (no cuts until 2027) and ECB rate hike signal squeeze on NIM [net interest margin]; broader risk-off sentiment." },
    { name: "US Industrials", change: "+0.3%", direction: "up", driver: "Data center HVAC and infrastructure services (Comfort Systems) offset general industrial caution; defence capex tailwind." },
    { name: "US Energy", change: "+1.5%", direction: "up", driver: "Oil bid on US-Iran conflict renewal; nuclear power (Constellation, Vistra) bid higher on AI electricity demand for data centers." },
    { name: "US Consumer Discretionary", change: "-0.5%", direction: "down", driver: "Tesla selloff, O'Reilly drop, AMC dilution; rate-sensitive consumer outlook weighs on discretionary spending names." },
    { name: "US Consumer Staples", change: "+0.2%", direction: "up", driver: "Defensive rotation into Walmart; staples bid as macro anxiety rises and consumer trade-down narrative strengthens." },
    { name: "US Materials", change: "flat", direction: "flat", driver: "Mixed signals; rare earth demand steady on AI supply chain but no major catalyst; China tariff impact balanced by domestic demand." },
    { name: "US Real Estate", change: "-0.8%", direction: "down", driver: "Hawkish Fed signals no cuts until 2027; REITs [real estate investment trusts] under duration pressure from elevated discount rates." },
    { name: "US Utilities", change: "-0.5%", direction: "down", driver: "Higher-for-longer rates compress utility valuations despite data center power demand narrative providing partial offset." },
    { name: "US Comm Services", change: "+0.5%", direction: "up", driver: "Netflix strength and Meta AI ad monetization story; Alphabet antitrust overhang partially offsets sector gains." },
    { name: "EU Defence", change: "-0.5%", direction: "down", driver: "Rheinmetall fell on Germany F126 frigate cancellation; broader sector profit-taking after NATO summit-driven multi-week rally." },
    { name: "EU Banks", change: "-0.8%", direction: "down", driver: "ECB rate hike paradoxically pressures bank valuations as growth fears mount; NIM [net interest margin] trajectory uncertain." },
    { name: "EU Industrials", change: "+0.3%", direction: "up", driver: "Infrastructure spending narrative intact; German 555B EUR 2027 budget supports long-term industrial order books." },
    { name: "EU Luxury", change: "-0.5%", direction: "down", driver: "China consumer demand uncertainty; LVMH and peers facing softer Asia spending and travel retail data." },
    { name: "EU Autos", change: "-1.0%", direction: "down", driver: "EV competition from China; tariff uncertainty on cross-border parts supply chains; consumer confidence softening in key markets." },
    { name: "EU Insurance", change: "flat", direction: "flat", driver: "Munich Re and Hannover Re stable; natural disaster claims within modelled range; interest rate environment improving for reserves." }
  ],

  flows: [
    { label: "US Equities", amount: "+$8B", direction: "in", pct: 60, note: "Record retail buying (65% above 2025 average daily volume) offset by cautious institutional positioning ahead of earnings season; net positive but not a strong inflow week." },
    { label: "European Equities", amount: "+$2B", direction: "in", pct: 40, note: "Modest inflows as EU defence and industrial narratives attract capital; ECB rate hike and growth concerns temper enthusiasm at current valuations." },
    { label: "EM Equities", amount: "+$3B", direction: "in", pct: 55, note: "Sixth inflow in 8 weeks per EPFR; EMEA and GEM funds absorbed redemptions from Asia ex-Japan and LatAm; EM dividend funds at highest since Dec 2024." },
    { label: "Gold & Commodities", amount: "+$1.5B", direction: "in", pct: 50, note: "Iran war keeps oil bid; gold holds as dollar hedge amid Iran-driven inflation concerns and de-dollarization narrative." },
    { label: "Fixed Income", amount: "+$15.6B", direction: "in", pct: 75, note: "Strong bond inflows across high yield and EM bonds; investors locking in elevated rates ahead of any eventual Fed pivot in 2027." },
    { label: "Cash / Money Markets", amount: "+$47.7B", direction: "in", pct: 85, note: "Total MMF assets at record $7.95T; retail MMF grew $3.6B; the $7.95T cash wall is still building — rotation to equities remains structurally unrealized." }
  ],

  trends: [
    { num: "01", title: "AI infrastructure entering the physical world", detail: "The Broadcom-Apple $30B custom ASIC deal for AI server chips (codenamed Baltra, TSMC 3nm, 2027 deployment) is the clearest example yet of AI infrastructure becoming physical reality. Hyperscaler capex reached $725B committed for 2026 — the largest infrastructure buildout in history. CoWoS [Chip-on-Wafer-on-Substrate] capacity sold out through 2026 at 90,000+ wafers/month. DRAM and HBM [high-bandwidth memory] prices surged 80-98% QoQ in Q1 2026.", status: "CONFIRMED", evidence: "Apple commits $30B to Broadcom for AI server chips through 2031; $725B total hyperscaler capex in 2026, up 77% YoY; DRAM prices +93-98% QoQ in Q1 2026.", type: "structural" },
    { num: "02", title: "Europe's strategic autonomy moment", detail: "Europe's Re-Arm 2030 plan (800B EUR defence spending) is accelerating, with the AGILE fast-track funding tool approved in April 2026 to move defence technologies from development to deployment in 1-3 years. Germany's 555B EUR 2027 budget includes massive defence and infrastructure allocations. The EU's 1B EUR R&D defense round targets autonomous systems and AI for warfare. Rheinmetall's drop on F126 frigate cancellation shows project-level execution risk is real — individual winners require selectivity.", status: "CONFIRMED", evidence: "Germany 555B EUR 2027 budget filed; EU AGILE fast-track 1B EUR round launched; Rheinmetall F126 cancellation is a warning shot on execution risk amid broadly intact thesis.", type: "structural" },
    { num: "03", title: "Dollar hegemony softening", detail: "EUR/USD holding at 1.14+, up from lows as ECB turns hawkish and the Iran war raises questions about petrodollar dominance. Dollar reserve share has fallen from 70%+ in 1999 to approximately 50% today. Iran conflict and US-China trade fragmentation are accelerating alternative payment discussions. Deutsche Bank flagged the Iran war as a potential catalyst for petrodollar erosion that could become structural.", status: "CONFIRMED", evidence: "EUR/USD at 1.1419; ECB first rate hike since 2023 increases euro attractiveness; dollar reserve share declining; Iran war elevating petrodollar erosion discussions.", type: "structural" },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", detail: "Novo Nordisk's Wegovy pill (oral GLP-1 semaglutide) captured 65% of new US prescriptions but Deutsche Bank flagged a momentum slowdown in dispensing data this week. Planned 50% Wegovy and 35% Ozempic list price cuts effective January 2027 will compress cash flows materially. Medicare expansion of GLP-1 coverage is bullish long-term volume but bearish near-term margin. The competitive landscape is intensifying as rival oral formulations advance.", status: "WEAKENED", evidence: "Deutsche Bank flagged Wegovy pill momentum slowdown in dispensing data; NVO -2.5%; planned 2027 price cuts will compress forward cash flow estimates materially.", type: "structural" },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", detail: "Drewry's World Container Index [a weekly composite of shipping rates across 8 major trade lanes] surged 9% to $4,530 per 40ft container on July 2, with Asia-Europe routes rising sharply (Shanghai-Genoa +10% to $6,360, Shanghai-Rotterdam +7% to $4,682). China-to-US volumes are down ~30% YoY as tariffs divert trade to Southeast Asian origins. Only one blank sailing announced on Asia-Europe next week — carriers managing supply discipline.", status: "CONFIRMED", evidence: "Drewry WCI surged 9% to $4,530 week of July 2; Asia-Europe +7-10%; China-US volumes -30% YoY as trade route fragmentation accelerates.", type: "cyclical" },
    { num: "06", title: "Retail cash rotation to equities building", detail: "Total money market [short-term cash savings accounts paying near-Fed-funds rate] assets hit $7.95T (+$47.7B weekly) — cash rotation has not happened at scale yet. However, retail equity buying is at historic levels: May-June daily volumes ran 65% above 2025 average, with June 12 setting the all-time record for single-day retail net buying, 50% above prior record. A bifurcated picture: retail is buying equities aggressively while also maintaining record MMF balances.", status: "UNCHANGED", evidence: "MMF assets at $7.95T (+$47.7B weekly); retail equity buying 65% above 2025 average daily; June 12 set all-time record retail net buying day — rotation building but not yet structural.", type: "cyclical" }
  ],

  executive: {
    biggest_mover: { name: "SK Hynix (pre-Nasdaq listing)", change: "+sector", reason: "SK Hynix's upcoming $29B Nasdaq ADR listing on July 10 (ticker: SKHY) — the largest foreign ADR listing in history, surpassing Alibaba's $21.9B in 2014 — catalyzed the entire memory sector this week, lifting Western Digital 7%, DRAM peers broadly, and validating the HBM cycle thesis at institutional scale. The listing at $166/ADR reflects SK Hynix's 60% global HBM market share and 72% operating profit margins on AI memory chips, confirming that this is not a speculative listing but a blue-chip debut at peak profitability." },
    key_risk: { name: "SMIC 5nm-class pilot production via DUV", reason: "SMIC confirmed volume production of its N+3 node (5nm-class using multi-patterning DUV rather than EUV) with yields at 20-40%, far below TSMC's >90%. This is still an AMBER structural signal, not a near-term trade signal: it shows China is closing the semiconductor gap faster than consensus expected via DUV loophole techniques, which long-term compresses the geopolitical monopoly premiums embedded in ASML, NVIDIA, and TSMC valuations over a 2-3 year period." },
    conviction_call: { name: "SK Hynix (SKHY) — Nasdaq debut July 10", observation: "The July 10 Nasdaq debut of SK Hynix (SKHY) is the single most important event next week for the AI trade and the most fundmentally compelling debut in years. With 60% HBM [high-bandwidth memory] market share, 72% operating margins, $29B raised to fund new capacity through 2028, and NVIDIA as its anchor customer, this is not a speculative IPO — it is a blue-chip listing of a company already printing record profits at the epicenter of the AI infrastructure buildout. For EUR-based investors, note the USD/KRW and EUR/USD crossrate adds 5-8% of FX exposure to manage." },
    macro_pulse: { name: "FOMC Minutes (July 8, Warsh era)", observation: "The first set of Fed minutes under Chair Kevin Warsh confirmed the new communication style: no dot plot participation, no forward guidance, deliberately terse statements. Markets read this as a prolonged hawkish hold with no cuts until 2027 at the earliest (Goldman base case), making the July 29 FOMC meeting the real moment of truth for whether Warsh blinks on growth risks or holds the line on tariff-driven inflation above 3%." },
    tags: [
      { label: "EUR/USD: 1.1419 rising +0.4%", type: "green" },
      { label: "Fed: Hawkish hold, no cut 2026", type: "red" },
      { label: "ECB: First hike since 2023 (Jun)", type: "amber" },
      { label: "Tariffs: China-US volumes -30% YoY", type: "red" },
      { label: "AI capex: $725B committed 2026", type: "green" },
      { label: "EU defence: Re-Arm 800B EUR", type: "green" },
      { label: "Semis: DRAM +93% QoQ in Q1 2026", type: "green" },
      { label: "Shipping: WCI +9% to $4,530", type: "green" }
    ]
  },

  macro: {
    us: "The US economy is navigating a delicate balance in mid-2026: GDP growth is projected at 2.1% for Q2, labor markets remain resilient (private payrolls grew over 2.5x the 2025 monthly average in Q1), but inflation is sticky at an annualized 6.0% headline CPI for the current quarter and 3.5% for full-year 2026 — well above the Fed's 2% target. The Kevin Warsh-led Fed delivered a hawkish hold at its June meeting with a deliberately terse statement stripped of forward guidance, and Goldman Sachs now projects no rate cuts until June 2027. The Iran war is keeping oil prices elevated, adding to tariff-driven goods inflation, and the $3.75T fiscal deficit trajectory remains a structural dollar headwind. The Stargate AI initiative ($500B OpenAI/SoftBank/Oracle) is the wild card that could further concentrate US AI infrastructure dominance or strain capital markets if execution falters.",
    europe: "Europe is at an inflection point in July 2026: the ECB raised rates by 25bps in June for the first time since 2023, hiking to counter energy inflation driven by the Iran war and the oil price shock, now projecting headline inflation at 3.0% for 2026 (revised up from 2.6%). Economic growth is sluggish at 0.8% for 2026, constrained by the energy shock and subdued household consumption, but structural spending on defence (Re-Arm Europe 800B EUR) and infrastructure (Germany 555B EUR 2027 budget) provides a multi-year floor under industrial and defence names. Marine Le Pen's confirmed 2027 French presidential bid adds political risk premium to French assets. The July 23 ECB decision will be the first real test of whether the June hike was a one-off or the start of a new tightening cycle — with core inflation at 2.5% and services sticky, the answer matters for EUR/USD and EU bank valuations.",
    asia: "Asia's macro picture diverges sharply in July 2026: China is growing at 4.8% GDP (above consensus 4.6%) but remains near deflation with industrial overcapacity spreading from heavy industry to clean tech, and domestic household demand structurally weak despite policy support. The BOJ raised rates to 1.0% as expected and the next meeting (July 30) shows 96% probability of no change — the JPY carry trade [cheap yen borrowing to fund global asset purchases] remains a latent systemic risk if BOJ surprises. Korea is the week's standout story: SK Hynix's $29B Nasdaq listing July 10 and combined Samsung-SK Hynix $520B domestic investment plan underscore Korea's role as the foundational layer of the global AI infrastructure stack. Southeast Asian economies (Vietnam, Thailand, Indonesia) are gaining transpacific trade share as China-US volumes decline 30% YoY.",
    forward: "Next week: SK Hynix Nasdaq debut July 10 (SKHY) — watch first-day institutional allocation and trading for memory cycle sentiment. ASML Q2 earnings July 15 (preview of EUV order book). TSMC Q2 earnings July 16 (CoWoS pricing and capacity guidance). Tesla Q2 earnings July 22 (first Mag7 result — EV demand vs Musk distraction). ECB July 23 (second hike or pause?). US CPI July 15 (a print above 3.5% kills any 2026 rate-cut hope). July 29: FOMC, Meta, Alphabet, Microsoft all report — the most data-dense day of the summer. Investors are also watching Amazon (late July), Apple (early August), and NVIDIA (August 26) to complete the Mag7 earnings sweep."
  },

  mag7: [
    { name: "Apple", ticker: "AAPL", price: "$315", change: "+0.5%", pe: "~38x", pe_plain: "paying 38 years of annual earnings", target: "$310-325", theme: "AI server chip via Broadcom deal", news: "Apple committed $30B to Broadcom for US-made custom ASIC chips through 2031 — its largest domestic manufacturing pledge ever. The AI server chip (codenamed Baltra, TSMC 3nm N3P process) targets Apple Intelligence cloud processing by 2027 when on-device AI pushes requests off-device. Apple Intelligence features are driving incremental iPhone upgrade cycles, though the pace remains slower than bulls projected entering 2026.", earnings: "Late July / Early August 2026 (Q3 FY2026)", earnings_proximity: "soon", verdict: "HOLD", verdict_reason: "AI server chip deal confirms long-term architecture but near-term iPhone upgrade cycle is modest and 38x trailing PE is full — wait for Q3 FY2026 results for clarity on Apple Intelligence adoption curve." },
    { name: "Microsoft", ticker: "MSFT", price: "$388", change: "-1.3%", pe: "~35x", pe_plain: "paying 35 years of annual earnings", target: "$420-450", theme: "Azure AI revenue accelerating at $37B ARR", news: "Azure AI revenue is at a $37B annual run rate [ARR — the contracted annual value of AI subscriptions], up 123% YoY, with Azure cloud growth forecasted at 39-40% at constant currency for fiscal Q4 FY2026. Microsoft raised capex 84% YoY but AI is producing proportional revenue growth — making this the clearest capex-to-revenue success story among the four hyperscalers. Q4 FY2026 results expected late July are the most anticipated earnings of the summer.", earnings: "Late July 2026 (Q4 FY2026)", earnings_proximity: "soon", verdict: "BUY", verdict_reason: "Azure AI revenue growing 123% YoY at $37B ARR with 40% cloud growth guidance is the strongest AI monetization proof point among Mag7; pre-earnings dip to $388 is a reasonable entry ahead of likely beat." },
    { name: "Amazon", ticker: "AMZN", price: "$241", change: "-1.7%", pe: "~45x", pe_plain: "paying 45 years of annual earnings", target: "$250-280", theme: "AWS AI chip at $20B ARR", news: "Amazon's AWS custom AI chip business (Trainium3 at 2.52 PFLOPS FP8) hit a $20B revenue run rate, and AWS grew 28% with $44.2B quarterly capex. The retail segment faces tariff headwinds on China-sourced inventory, with consumer spending uncertainty entering H2 2026. Amazon leads all four hyperscalers in total AI capex at ~$200B for 2026, but the revenue-to-capex ratio remains the widest gap among the four.", earnings: "Late July 2026 (Q2 2026)", earnings_proximity: "soon", verdict: "HOLD", verdict_reason: "AWS AI revenue is real but Amazon retail faces tariff headwinds; at 45x PE with the widest capex-to-AI-revenue gap among hyperscalers, wait for Q2 earnings confirmation on AWS monetization trajectory." },
    { name: "Alphabet", ticker: "GOOGL", price: "$361", change: "-1.7%", pe: "~23x", pe_plain: "paying 23 years of annual earnings", target: "$380-420", theme: "Google Cloud $460B backlog + antitrust overhang", news: "Google Cloud backlog jumped to over $460B as enterprise AI contracts accelerate. Alphabet spent $35.67B on capex in Q1 2026, more than doubling YoY. The DOJ antitrust remedies for Google Search remain unresolved, creating a binary risk overhang on the stock. Google TPU v7 Ironwood at 4,614 TFLOPS is now described by analysts as on par with NVIDIA Blackwell for inference workloads — a structural custom silicon development watch.", earnings: "Late July 2026 (Q2 2026)", earnings_proximity: "soon", verdict: "WATCH", verdict_reason: "23x PE is the cheapest in Mag7 with real and growing AI revenue, but DOJ antitrust Search remedy is a binary event risk — do not build a full position before July resolution clarity." },
    { name: "Meta", ticker: "META", price: "$613", change: "+1.0%", pe: "~22x", pe_plain: "paying 22 years of annual earnings", target: "$650-720", theme: "AI ad monetization + Llama open ecosystem", news: "Meta raised 2026 capex guidance to $125-145B (from $115-135B) citing higher AI chip and data center component costs. The Llama AI model ecosystem is driving developer adoption and enterprise AI ad tool deployment across Facebook and Instagram, with revenue per user rising. Meta's AI ads business is improving click-through and conversion rates measurably. Q2 earnings expected July 29 alongside Microsoft and Alphabet.", earnings: "July 29, 2026", earnings_proximity: "soon", verdict: "BUY", verdict_reason: "Cheapest Mag7 at 22x forward PE with AI revenue clearly monetizing through advertising; $125-145B capex is being deployed into a proven return, not a speculative one — strongest risk/reward in Mag7." },
    { name: "Nvidia", ticker: "NVDA", price: "$197", change: "-2.0%", pe: "~45x", pe_plain: "paying 45 years of annual earnings forward", target: "$250-300", theme: "GPU dominance under multi-year pressure from custom silicon and SMIC", news: "NVIDIA is down ~18% from its June high, the worst performer in its own chip peer group in 2026 YTD. The H100/B200 Blackwell GPU remains dominant (80-85% data center AI share) but multiple pressures are building: SMIC 5nm-class pilot production, Google TPU v7 on par with Blackwell for inference, and hyperscaler custom silicon absorbing 15-20% of deployed AI FLOPS. China export restrictions continue to cap H20 chip sales. Q2 FY2027 earnings August 26 will be the key confirmation catalyst.", earnings: "August 26, 2026", earnings_proximity: "upcoming", verdict: "WATCH", verdict_reason: "NVIDIA's near-term dominance intact but stock is -18% from June high and still at 45x forward PE — the June correction is healthy but requires earnings confirmation of B200 ramp and China revenue replacement before re-entering." },
    { name: "Tesla", ticker: "TSLA", price: "$393", change: "-0.8%", pe: "~120x", pe_plain: "paying 120 years of annual earnings trailing", target: "$280-360", theme: "Robotaxi expansion vs delivery volatility and Musk distraction", news: "Tesla's Q2 deliveries beat consensus by 18% (480,126 vs 406,024 analyst consensus) yet shares fell 7.5% on the day — a classic sell-the-news reaction [price drops after good news that was already priced in]. Robotaxi service launched in Miami July 3, extending beyond Texas and California. Rivian's new R2 SUV directly targets Model Y with a competitive price and range, raising competitive pressure. Earnings July 22 — the first Mag7 report this season.", earnings: "July 22, 2026", earnings_proximity: "imminent", verdict: "CAUTION", verdict_reason: "120x trailing PE for a company with execution risk, active Musk distraction, and incoming Model Y competition from Rivian R2 — the delivery beat was already sold; watch July 22 earnings for robotaxi revenue timeline before reassessing." }
  ],

  theses: [
    { num: "01", title: "AI infrastructure entering the physical world", status: "CONFIRMED", evidence: "Apple-Broadcom $30B ASIC deal, $725B hyperscaler capex committed for 2026, CoWoS sold out through 2026, HBM prices at record levels — AI is now a physical supply chain event.", instruments: "NVDA, AVGO, TSM, KLAC, LRCX, AMAT, Palantir, Pure Storage, ServiceNow, CrowdStrike",
      highlights: [
        { name: "Broadcom (AVGO)", change: "+4.0%", note: "Apple ASIC partnership extended to 2031 with $30B commitment. Broadcom's custom AI chip business (15B chips, Fort Collins fab expansion) is now the clearest secular growth story in the AI hardware stack below NVIDIA." },
        { name: "TSMC (TSM)", change: "+4.1%", note: "CoWoS packaging at 90,000+ wafers/month remains the single most critical bottleneck in AI chip production. Analyst target raises and solid demand visibility through 2026 underpin the stock despite broader semi rotation." },
        { name: "Palantir (PLTR)", change: "-5.0%", note: "High-valuation AI software facing rotation pressure as investors pivot to confirmed-revenue hardware plays. The AI OS [operating system for AI deployments] thesis is intact but 50x+ revenue multiple requires flawless execution." },
        { name: "Constellation Energy (CEG)", change: "+2.8%", note: "Nuclear power is becoming a core AI infrastructure play as data center electricity demand forces hyperscalers to sign long-term PPAs [power purchase agreements] with nuclear operators at premium prices." }
      ]
    },
    { num: "02", title: "Europe's strategic autonomy moment", status: "CONFIRMED", evidence: "Re-Arm Europe 800B EUR programme active; EU AGILE fast-track tool launched; Germany 555B EUR budget filed — structural spending is real, though individual names face project-level execution risk.", instruments: "Rheinmetall, Safran, Thales, HEICO, Howmet, Siemens, GE, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall (RHM)", change: "-2.5%", note: "Germany's cancellation of the F126 frigate program was a project-specific setback, not a thesis breaker. Rheinmetall's tank ammunition and ground vehicle programs remain on track with the broader 800B EUR defence budget as backdrop." },
        { name: "Safran", change: "flat", note: "Jet engine components and aerospace systems benefiting from rising European defence procurement; relatively stable despite sector rotation; ASML Q2 results July 15 will be an industrial read-across." },
        { name: "VanEck Defense ETF", change: "+0.5%", note: "Diversified EU and US defence exposure; the thesis plays out over 3-5 years as spending commitments translate to order books and then revenue — weekly noise should be traded through." }
      ]
    },
    { num: "03", title: "Dollar hegemony softening", status: "CONFIRMED", evidence: "EUR/USD at 1.14+; ECB first hike since 2023 increases euro attractiveness; dollar reserve share declining; Iran war elevating petrodollar erosion discussions in markets.", instruments: "iShares Physical Gold, WisdomTree Bitcoin ETP, EUR/USD, iShares MSCI EM, Gold Fields",
      highlights: [
        { name: "EUR/USD", change: "+0.4%", note: "EUR/USD at 1.1419, rising on ECB hawkishness and Iran-driven oil inflation in Europe. Paradoxically, the Iran conflict is strengthening EUR relative to USD by raising ECB rate expectations above Fed expectations." },
        { name: "iShares Physical Gold", change: "+0.8%", note: "Gold holding as a hedge against both dollar weakness and Iran-driven geopolitical risk. Institutional allocation to gold is rising as petrodollar erosion concerns resurface with each month of the Iran conflict." },
        { name: "WisdomTree Bitcoin ETP", change: "+2.0%", note: "Bitcoin benefiting from de-dollarization narrative and institutional adoption acceleration. The ETF wrapper provides EUR-based access without custody complexity for professional portfolio exposure." }
      ]
    },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", status: "WEAKENED", evidence: "Deutsche Bank flagged Wegovy pill momentum slowdown in dispensing data; NVO -2.5%; planned 2027 price cuts will materially compress forward cash flow. Structurally intact but near-term execution risk elevated.", instruments: "Novo Nordisk, McKesson, GE HealthCare, Veeva Systems, HCA Healthcare",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "-2.5%", note: "Wegovy oral pill holds 65% of new US prescriptions but Deutsche Bank flagged dispensing data slowdown. Planned 50% price cut in 2027 means the stock is pricing in 2026 peak economics — a valuation risk if the pill share plateaus sooner than expected." },
        { name: "GE HealthCare (GEHC)", change: "+1.0%", note: "GLP-1 patient expansion is actually a tailwind for imaging and diagnostics — obesity patients require more MRI scans, cardiac monitoring, and metabolic workups, benefiting GE HealthCare's installed base revenue." },
        { name: "McKesson (MCK)", change: "flat", note: "Drug distribution and specialty pharmacy channels for GLP-1 drugs are a steady tailwind; McKesson's logistics role in Wegovy/Ozempic supply chain is defensively positioned regardless of price competition between manufacturers." }
      ]
    },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", status: "CONFIRMED", evidence: "Drewry WCI surged 9% to $4,530; Asia-Europe routes +7-10%; China-US volumes -30% YoY as trade routes fragment to Southeast Asian origins; carriers managing capacity with near-zero blank sailings.", instruments: "INSW, GSL, Danaos, TEN, StealthGas",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "-3.5%", note: "Profit taking from May all-time high ($41.64) is normal healthy consolidation. GSL's 100% contracted fleet [all ships have signed multi-year charter agreements locking in daily rates] means the cash flow is secured regardless of spot rate weekly noise." },
        { name: "Danaos (DAC)", change: "+1.0%", note: "Container shipping rate surge (WCI +9%) validates the thesis. Danaos' long-term charter contracts mean weekly rate moves are less relevant than the floor they provide — the thesis plays through contract renewals at elevated rates in 2026-2027." },
        { name: "International Seaways (INSW)", change: "flat", note: "Tanker shipping stable; Iran oil conflict has not yet disrupted INSW's routes; watching for rerouting demand as Hormuz Strait tension creates longer voyage distances which translate directly into higher revenue per voyage." }
      ]
    },
    { num: "06", title: "Retail cash rotation to equities building", status: "UNCHANGED", evidence: "MMF assets at $7.95T (+$47.7B weekly); retail equity buying 65% above 2025 average — bifurcated: retail buying aggressively but cash balances also growing. Structural rotation not yet triggered.", instruments: "Vanguard S&P 500, iShares Core S&P 500, Interactive Brokers, Robinhood, SPDR Russell 2000",
      highlights: [
        { name: "Robinhood (HOOD)", change: "+1.5%", note: "Record retail trading volumes (65% above 2025 average in May-June) are directly positive for Robinhood's transaction revenue [commission earned on each trade]. Retail cash rotation when it comes will benefit the platform disproportionately as the entry point for retail capital." },
        { name: "Interactive Brokers (IBKR)", change: "+0.5%", note: "Client margin lending and trading volumes rising; SK Hynix Nasdaq IPO allocation demand and earnings season activity will drive commission revenues higher in Q3 2026. IBKR is the professional retail and semi-institutional gateway." },
        { name: "iShares Core S&P 500 (IVV)", change: "+0.5%", note: "When MMF rotation finally comes, broad market ETFs [exchange-traded funds tracking an index] are the primary destination; IVV flows data in July will be the earliest indicator of whether the $7.95T cash wall has begun to move." }
      ]
    }
  ],

  discoveries: [
    { num: "01", company: "SK Hynix", sector: "Semiconductors / Memory", headline: "SK Hynix to list on Nasdaq July 10 as SKHY in record $29B ADR offering — largest foreign company ADR debut in history", detail: "SK Hynix's Nasdaq debut at $166/ADR (10 ADRs = 1 Korean common share) eclipses Alibaba's 2014 $21.9B record. The company holds 60% global HBM [high-bandwidth memory — stacked memory chips required for AI GPU training] market share with 72% operating margins. Proceeds fund new HBM packaging fabs and EUV [extreme ultraviolet lithography] equipment purchases through 2028. This is not a speculative tech IPO — it is a blue-chip listing of a company posting record profits at the epicenter of the AI infrastructure buildout, with NVIDIA as its anchor customer.", tag: "BULL" },
    { num: "02", company: "Apple / Broadcom", sector: "Semiconductors / AI Hardware", headline: "Apple commits $30B to Broadcom for US-made custom AI server chips through 2031 in largest US domestic manufacturing pledge", detail: "The 5-year deal covers multiple generations of custom ASIC [application-specific integrated circuit — chips designed for one task, not general computing] products. The AI server chip (codenamed Baltra, TSMC 3nm N3P, targeting 2027 deployment) will process Apple Intelligence cloud requests when on-device processing is insufficient. This confirms that AI inference [running AI model responses] is becoming a physical manufacturing story, not just software, and that Apple's AI strategy requires more infrastructure investment than previously modelled by analysts.", tag: "BULL" },
    { num: "03", company: "SMIC (China)", sector: "Semiconductors / Geopolitics", headline: "SMIC confirms 5nm-class N+3 node volume production via DUV lithography — without EUV machines, yields at 20-40%", detail: "China's SMIC has achieved pilot/volume production at its N+3 node (5nm-class) using multiple-patterning DUV [deep ultraviolet — older lithography technology] rather than ASML's restricted EUV. Yields are 20-40% vs TSMC's >90%, making cost-competitive volume production still distant. However, this compresses the geopolitical premium [the extra price investors pay for ASML, TSMC, and NVIDIA because they have no Chinese competition] embedded in Western semiconductor valuations. The gap between China and the frontier is closing faster than most Western analysts assumed as recently as 2024.", tag: "BEAR" },
    { num: "04", company: "Drewry / Container Shipping", sector: "Shipping / Trade", headline: "World Container Index surges 9% in one week to $4,530 per 40ft box — largest weekly jump since Red Sea disruptions", detail: "The Drewry WCI [a weekly composite of container shipping rates across 8 major trade lanes] surge reflects carrier capacity discipline (near-zero blank sailings), trade route fragmentation as China-US volumes fall 30% YoY, and seasonal pre-restocking demand. Charter rates [daily rental for a container ship] are following spot rates. For thesis 05 shipping names (GSL, Danaos, INSW, TEN), contracted fleet structures mean spot rate spikes matter primarily as validation of elevated market rates at upcoming contract renewals.", tag: "BULL" },
    { num: "05", company: "Hyperscalers (Aggregate)", sector: "AI / Cloud Infrastructure", headline: "Combined 2026 AI capex from four hyperscalers hits $725B — up 77% YoY; analysts projecting $1T+ for 2027", detail: "The four hyperscalers will spend $725B on AI infrastructure in 2026, with Amazon leading at ~$200B, Microsoft $190B, Google $175-185B, Meta raising its range mid-year to $125-145B citing higher component pricing. The critical question facing this: these commitments create multi-year fixed costs that must be justified by AI-attributable revenue growth. Microsoft's $37B AI ARR [annual recurring revenue — contracted annual subscription value] is the most visible proof point; Google, Amazon, and Meta are earlier in the monetization curve, creating a capex-to-revenue [spending vs proportional income] gap that markets will scrutinize at Q2 earnings.", tag: "WATCH" },
    { num: "06", company: "Novo Nordisk", sector: "Healthcare / GLP-1", headline: "Deutsche Bank flags Wegovy oral pill momentum slowdown — planned 50% list price cut in 2027 compresses cash flow outlook", detail: "NVO's Wegovy oral pill captured 65% of new US prescriptions but prescription growth is now decelerating per Deutsche Bank's dispensing data analysis. The planned 2027 price cuts (Wegovy -50%, Ozempic -35%) respond to Medicare expansion pressure but destroy near-term unit economics [the profit earned from selling one dose]. Lilly's competing oral GLP-1 (orforglipron) is advancing through Phase 3 trials, adding competitive pressure. The GLP-1 thesis is structurally intact but NVO specifically is entering a 12-18 month margin compression period.", tag: "BEAR" },
    { num: "07", company: "Retail / Institutional", sector: "Markets / Fund Flows", headline: "US money market assets hit $7.95T record while retail equity buying hits all-time single-day record on June 12 — the great cash bifurcation", detail: "The 'cash rotation' trade thesis is simultaneously more and less true than headlines suggest. Retail is buying equities at historic rates (June 12 was the all-time record for retail net buying, 50% above prior record), yet total MMF [money market fund] assets are still growing ($7.95T, +$47.7B weekly). This bifurcation means new money is going to both stocks and cash simultaneously — the $7.95T wall has not started flowing into equities at scale, but when sentiment turns decisively bullish (likely post-earnings season if results beat), the rotation potential is enormous.", tag: "WATCH" },
    { num: "08", company: "Google / Alphabet", sector: "AI / Custom Silicon", headline: "Google TPU v7 Ironwood at 4,614 TFLOPS — analysts call it 'on par with NVIDIA Blackwell' for inference workloads, eroding GPU moat", detail: "Google's TPU v7 Ironwood delivers 4,614 TFLOPS [trillion floating-point operations per second — a measure of AI computing speed] which independent benchmarks show is competitive with NVIDIA's Blackwell B200 for inference [running AI model responses, as opposed to training models from scratch]. With Google at 6-8% deployed AI accelerator market share (concentrated within Google Cloud), this is AMBER for NVIDIA's moat: inference workloads are price-elastic, and Google can now credibly undercut NVIDIA pricing on internal and external workloads. Training remains NVIDIA-dominated but the inference window is narrowing.", tag: "BEAR" }
  ],

  risers: [],

  ai_trade: {
    status: "CAUTION",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings — a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "GREEN",
        finding: "All four hyperscalers are committing at record levels: Amazon ~$200B, Microsoft ~$190B, Google $175-185B, Meta raised to $125-145B mid-year citing higher component costs. No hedge language detected — Meta actually raised guidance, the strongest possible GREEN signal.",
        implication: "Semi supply chain is undersupplied relative to committed demand through at least mid-2027; HBM, CoWoS, and advanced packaging names remain capacity-constrained with pricing power intact."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "DRAM contract prices surged 93-98% QoQ in Q1 2026; industry revenue hit $97B (+81% QoQ). HBM annual pricing mechanism prevents full quarterly pass-through but trend is strongly upward. TrendForce updated DRAM spot prices on June 30, 2026 showing sustained elevation with HBM contract prices expected to surge multiples higher in 2027.",
        implication: "SK Hynix and Samsung Q2 earnings will show record margins. Memory names (WDC, MU) are lagging indicators of this cycle and have catch-up potential relative to the DRAM pricing data already in hand."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Microsoft is the clearest AI revenue success ($37B ARR, 123% growth). But total hyperscaler AI capex at $725B is still multiples of combined AI-attributable revenue across all four. Google Cloud's $460B backlog is signed contracts, not yet revenue. Amazon AWS AI chip business at $20B ARR vs $200B capex is a 10x gap in spending vs income.",
        implication: "The gap is narrowing for Microsoft but widening in aggregate. If Q2 earnings (late July) do not show accelerating AI revenue at Amazon and Google specifically, markets will question whether the $725B capex is being deployed efficiently — a narrative shift that would hit semiconductor hardware names."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "Mag7 consensus 2027 forward P/E contracted from 31x to 22x over the past year — driven by rising EPS [earnings per share] estimates, not P/E compression. Meta at 22x forward and Microsoft at 35x both have rising EPS revisions (fundamentals working). But NVIDIA at 45x forward requires >50% EPS growth to justify; Tesla at 120x trailing is pure optionality premium.",
        implication: "For Mag7 ex-Tesla, the trade is fundamentally supported with rising earnings. Tesla and NVIDIA carry the highest optionality risk where multiple expansion meets uncertain EPS path — these two are the sentiment barometers to watch for regime change signals."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "SMIC achieved volume production of N+3 (5nm-class) via multi-patterning DUV without EUV. Yields are 20-40% (vs TSMC >90%), Huawei Ascend 910C/950 targeting 1.6M logic dies in 2026. China is closing the gap via DUV loophole — this is no longer theoretical. Big Fund III ($47.5B) continues to fund SMIC capacity expansion at advanced nodes.",
        implication: "Long-term AMBER: ASML's EUV monopoly premium is partially at risk as SMIC scales DUV-based 5nm. Near-term (12-18 months), volume and yield constraints mean no commercial threat, but the geopolitical premium will compress gradually as the gap narrows in the market's perception over 2-3 years."
      }
    ]
  },

  semis: {
    status: "WATCH",
    regions: [
      {
        region: "Korea",
        info: "Korea supplies ~95% of global HBM [high-bandwidth memory]. Production disruption propagates to NVIDIA allocation within 4-6 weeks. Samsung strike losing share to SK Hynix = rotation within sector, not a sector exit.",
        signal: "GREEN",
        finding: "No labor disruption. SK Hynix struck a landmark deal paying 10% of operating profits to employees (~$476K/employee bonus this year). Samsung workers received large lump sum. Samsung and SK Hynix announced combined $520B mega-investment in southwestern Korea chip plants. SK Hynix Nasdaq listing (SKHY, July 10) at $29B — the week's defining event.",
        implication: "Korea semis are in expansion mode, not stress. SKHY Nasdaq listing broadens investor base and lowers cost of capital for HBM capacity expansion through 2028 — structurally bullish for the AI memory cycle."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "BOJ held at 1.0% as expected; next meeting July 30 shows 96% probability of no change. TSMC Kumamoto ramp proceeding on schedule. Tokyo Electron orders stable with memory cycle recovery. Board member Tamura noted policy rate should gradually move toward 2% neutral — a multi-year path.",
        implication: "Japan risk is low this week. BOJ July 30 meeting is the next watch date; if Tamura hawkish comments gain board consensus, JPY carry unwind risk returns in August — a global tech selloff trigger to monitor."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "SMIC achieved 5nm-class pilot production on N+3 node via DUV — meaningful advancement beyond 7nm benchmark. Yields at 20-40% mean no near-term volume threat. TSMC CoWoS remains sold out through 2026. No Taiwan political escalation or rare earth embargo signal detected this week.",
        implication: "The China AMBER is a structural signal, not a near-term trade signal. ASML and TSMC geopolitical premiums will compress gradually as SMIC demonstrates advancing capability — a 2-3 year repricing, not a quarterly catalyst."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "GREEN",
        finding: "No new export control expansion announced. The MATCH Act (proposal to ban DUV tool exports to China) is still in legislative consultation — not enacted. CHIPS Act disbursements to Intel ($52.7B allocated) proceeding. ASML EUV deliveries on schedule globally.",
        implication: "US policy environment is stable for now. The MATCH Act is the next binary risk event for ASML — if enacted, it compresses DUV tool revenue but increases EUV strategic value. Intel Ohio fab progress is the domestic capacity watch item for 2026-2027."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "SMEE delivered first 28nm-capable tools to Chinese fabs, but subsequent reporting questions whether SSC800/10 is actually 28nm or a less advanced KrF system. SMEE's EUV prototype (Shenzhen, Dec 2025) has 100-150W source power vs ASML's 1,000W target — a 10x gap in source power alone. SemiAnalysis projects fully indigenized DUV tools by 2030, not before.",
        implication: "ASML's EUV moat is intact for 3-5 years. ASML Q2 results July 15 will show continued order strength from TSMC and Samsung confirming demand; watch SMEE 28nm ramp data for the first quantitative signal of the DUV moat compressing."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix holds ~60% HBM revenue share, Samsung ~30%, Micron ~10% and growing. No Samsung yield or labor disruption this week — generous worker bonuses resolved immediate industrial relations tension. Micron's HBM3E is shipping but faces 18-month volume ramp to challenge SK Hynix meaningfully. SKHY Nasdaq listing confirms SK Hynix confidence in sustained HBM dominance.",
        implication: "SK Hynix + Samsung maintaining >90% HBM share for at least 6-8 more quarters. Micron is a watch for 2027-2028 market share shift. Buy the leader (SKHY), watch the challenger (MU) for a later-cycle rotation entry point."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Google TPU v7 Ironwood benchmarks at 4,614 TFLOPS, described as 'on par with Blackwell' for inference. Custom silicon now holds ~15-20% of deployed AI accelerator FLOPS across hyperscaler internal workloads. AWS Trainium3 is the cost-performance leader for inference. NVIDIA still dominates training (>85%) but inference is being competed away at ~2-3 percentage points per year.",
        implication: "NVIDIA's inference TAM is being compressed by Google, AWS, and Meta custom silicon. Training dominance is intact but is a smaller part of the eventual compute pie as inference scales faster. The 45x forward P/E embeds an optimistic TAM assumption being incrementally challenged."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS capacity at ~90,000 wafers/month heading to 120,000+ by end-2026; still oversubscribed. TSMC outsourcing some packaging steps to ASE and Amkor (ASE projects advanced packaging sales to double in 2026). Samsung and Intel Foundry pursuing CoWoS-equivalent capability but neither has achieved equivalent yield at volume.",
        implication: "TSMC CoWoS monopoly will gradually loosen as ASE/Amkor absorb outsourced volume and Samsung builds capability. Pricing power is intact through 2026. Any relief will be incremental — the bottleneck shifts upstream to 3nm/2nm wafer capacity next, not away from TSMC's control."
      }
    ]
  }

};
