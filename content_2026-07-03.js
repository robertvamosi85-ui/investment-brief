const BRIEF = {

  meta: {
    date: "Thursday, July 3, 2026",
    eurusd: "1.1452",
    eurusd_direction: "rising",
    eurusd_driver: "EUR/USD rebounded sharply to 1.1452, up 0.8% on the week, as the US economy added just 57,000 jobs in June vs. 110,000 expected — the biggest nonfarm payrolls miss in four months — sending the DXY below 101 and immediately pushing back July Fed rate-hike bets to zero.",
    eurusd_outlook: "Expect EUR/USD to trade in the 1.1380-1.1520 range next week; the jobs miss firmly removes a near-term Fed hike risk, which pressures USD and benefits EUR-based investors holding unhedged US equity positions through currency appreciation.",
    eurusd_weekly_change: "+0.8%"
  },

  vitals: {
    fear_greed: { value: 31, last_week: 28, label: "Fear", interpretation: "The CNN Fear & Greed Index edged up from 28 to 31 — still firmly in Fear territory but off last week's trough. The mild recovery reflects the Tesla delivery blowout and Medicare GLP-1 catalyst offsetting ongoing tech sector anxiety. At 31, institutional positioning remains defensive; contrarian setups are building in consumer and healthcare but the broader market has not yet capitulated." },
    vix: { value: 16.15, last_week: 18.44, label: "Calm", interpretation: "VIX dropped from a spike high of 18.44 last week to 16.15, retreating 2.65% on July 2 alone as the semiconductor panic subsided. The jobs miss paradoxically calmed markets by removing a Fed hike risk and flattening the rate-uncertainty tail. A VIX at 16 is in neutral territory; the semi-sector is no longer driving a broad fear spike, but the reading is not low enough to signal complacency." },
    put_call: { value: 0.72, last_week: 0.54, label: "Neutral", interpretation: "The CBOE equity put/call ratio rose from 0.54 to 0.72, reflecting a modest increase in hedging demand as investors bought protection after the tech sector's second consecutive down week. The ratio remains below 0.80, meaning net-bullish positioning persists, but the directional move signals growing caution versus the complacency of a week ago." }
  },

  regime: {
    title: "Payroll Pivot: From Rate-Hike Fear to Soft-Landing Hope",
    description: "The June jobs miss (57K vs 110K) was the week's defining print, sharply reversing the previous narrative of a Fed-hike-driven dollar rally. The dominant investor story is now soft-landing: jobs are cooling without recession, rate cuts remain on the calendar, and the AI revenue-vs-capex gap is still wide but not yet an imminent crisis. This regime favours Thesis 04 (GLP-1 healthcare) following the Medicare Bridge launch and Thesis 06 (retail cash rotation) as rate relief makes equities more attractive than money market funds. It headwinds Thesis 01 (AI infra) at the margin — the ROI scrutiny from last week has not been resolved — and Thesis 02 (EU defence) where the Rheinmetall shock is still reverberating.",
    tailwinds: ["Soft jobs data removes September Fed hike risk, supporting equity valuations broadly", "Medicare GLP-1 Bridge launch July 1 confirms healthcare structural growth runway", "Tesla delivery blowout (+25% YoY) validates EV demand recovery in Europe and international markets"],
    headwinds: ["AI capex-to-revenue gap widening — hyperscalers commit $725B but AI-attributable revenue disclosure remains opaque", "Tech sector (XLK) down second consecutive week as software valuations reset on AI disruption fears", "EUR strength vs USD creating FX drag on unhedged EUR-investor returns from US equity positions"]
  },

  league: {
    winners: [
      { rank: 1, name: "Tesla (TSLA)", sector: "Consumer Discretionary", change: "+13.6%", reason: "Q2 delivery blowout: 480,126 vehicles vs. 406,024 expected — a 34% quarter-over-quarter recovery driven by European demand surge and refreshed Model 3/Y lineup." },
      { rank: 2, name: "Eli Lilly (LLY)", sector: "Healthcare / GLP-1", change: "+7.8%", reason: "Medicare Bridge program launched July 1 covering GLP-1 obesity drugs at $50/month copay for eligible seniors; Zepbound and Foundayo included; 15-20M beneficiaries could qualify." },
      { rank: 3, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "+5.2%", reason: "Wegovy pill surpasses 3M prescriptions in five months; Medicare Bridge opens access for millions of seniors; oral GLP-1 [glucagon-like peptide-1 weight-loss] therapy becoming standard of care." },
      { rank: 4, name: "TSMC (TSM)", sector: "Semiconductors", change: "+4.8%", reason: "Monthly revenue rose 30% in May on sustained AI chip demand, setting up a record Q2 exceeding NT$1.23T; CEO confirmed CoWoS [chip packaging] sold out through end-2026." },
      { rank: 5, name: "SK Hynix (000660.KS)", sector: "Memory Semiconductors", change: "+4.2%", reason: "Named lead HBM4 [high-bandwidth memory] supplier for NVIDIA Vera Rubin at ~60-65% allocation; DRAM prices at multi-year highs; dethroned Samsung in revenue for first time in 26 years." },
      { rank: 6, name: "Micron Technology (MU)", sector: "Memory Semiconductors", change: "+3.8%", reason: "NVIDIA certified Micron as third HBM4 supplier for Vera Rubin platform alongside SK Hynix and Samsung; $540M-$770M advance payment received securing allocation through 2030." },
      { rank: 7, name: "MercadoLibre (MELI)", sector: "EM Fintech / E-Commerce", change: "+3.5%", reason: "Mercado Pago credit portfolio nearly doubled to $14.6B YoY; EM fund flows recovering as USD weakened on jobs miss; Latin America digital payments thesis intact." },
      { rank: 8, name: "Constellation Energy (CEG)", sector: "Nuclear Power", change: "+3.0%", reason: "Nuclear power demand narrative locked in as Microsoft and Amazon AI data center power agreements extend through 2030s; AI power grid constrained capacity premium increasing." },
      { rank: 9, name: "Vistra (VST)", sector: "Nuclear / Clean Energy", change: "+2.8%", reason: "AWS and Meta long-term power supply contracts at premium rates; Comanche Peak nuclear plant capacity factor above 94%; structural AI infrastructure power play." },
      { rank: 10, name: "Alibaba (BABA)", sector: "China Tech / E-Commerce", change: "+2.1%", reason: "Technical bounce from oversold RSI-25 levels; Chinese stocks rose as NASDAQ Golden Dragon Index climbed 2.93% on July 1; recovery from 26.7% YTD decline to that point." },
      { rank: 11, name: "Global Ship Lease (GSL)", sector: "Container Shipping", change: "+2.0%", reason: "Drewry World Container Index surged 9% to $4,530 per 40ft box; GSL expanded newbuilding program with five mid-size containership orders worth $413M to capitalise on rate environment." },
      { rank: 12, name: "Danaos Corporation (DAC)", sector: "Container Shipping", change: "+1.9%", reason: "Container rate environment improving sharply with WCI [World Container Index] at $4,530; Buy rating maintained with $174 target; annual meeting July 31." },
      { rank: 13, name: "Interactive Brokers (IBKR)", sector: "Financial Services", change: "+1.8%", reason: "Retail investor equity deployment at record pace — daily cash equity volumes 65% above 2025 levels; IBKR captures disproportionate share of active retail flow surge." },
      { rank: 14, name: "Berkshire Hathaway (BRK.B)", sector: "Conglomerate / Financials", change: "+1.7%", reason: "Defensive rotation into Buffett vehicle as tech volatility persists; Greg Abel leadership continuity reassuring; insurance underwriting income supported by elevated yields." },
      { rank: 15, name: "Walmart (WMT)", sector: "Consumer Staples", change: "+1.5%", reason: "Consumer staples outperform in soft-landing and rate-cut-friendly regime; WMT's AI supply chain and advertising revenue arm adding incremental earnings growth." },
      { rank: 16, name: "Netflix (NFLX)", sector: "Entertainment / Streaming", change: "+1.4%", reason: "Ad-supported tier subscriber growth continues to outpace estimates; World Cup content pipeline into H2; streaming resilient to tech sector rotation." },
      { rank: 17, name: "Progressive (PGR)", sector: "Insurance", change: "+1.3%", reason: "Auto insurance underwriting margins strong; elevated rate environment supporting investment income; defensive P&C [property and casualty] character attracting rotation." },
      { rank: 18, name: "Grab Holdings (GRAB)", sector: "EM / Southeast Asia", change: "+1.2%", reason: "EM fund flows recovering as USD weakens; Southeast Asia super-app fintech and food delivery margins improving; Vietnam and Indonesia trade rerouting tailwind." },
      { rank: 19, name: "Booking Holdings (BKNG)", sector: "Travel / Consumer", change: "+1.1%", reason: "Peak summer travel season provides earnings visibility; AI-enhanced conversion tools lifting revenue per user; European summer demand especially strong." },
      { rank: 20, name: "DoorDash (DASH)", sector: "Consumer Tech / Delivery", change: "+1.0%", reason: "Delivery platform expanding grocery and convenience verticals; AI route optimization improving unit economics; resilient consumer spending on convenience services." }
    ],
    losers: [
      { rank: 1, name: "ASML Holding (ASML)", sector: "Semiconductor Equipment", change: "-6.0%", reason: "July 1 selloff as Dutch government joins Pax Silica alliance expanding DUV export restrictions to China, threatening ~20% of projected 2026 systems revenue from Chinese customers." },
      { rank: 2, name: "Intuit (INTU)", sector: "Financial Software", change: "-5.8%", reason: "SaaSpocalypse narrative intensifies — AI agents threatening to automate TurboTax and QuickBooks core use cases; S&P 500 Software Index down 19% in H1 2026 YTD drag continues." },
      { rank: 3, name: "Intel (INTC)", sector: "Semiconductors", change: "-4.2%", reason: "Continued market share losses to AMD in data center; TSMC Arizona Phase 2 equipment installation delayed to Q3 2026; CHIPS Act disbursement pending operational milestones." },
      { rank: 4, name: "Zscaler (ZS)", sector: "Cybersecurity Software", change: "-4.1%", reason: "Cloud security software hit by sector rotation away from high-multiple SaaS; AI disruption fears compress valuations even as enterprise security spending grows." },
      { rank: 5, name: "AMD (AMD)", sector: "Semiconductors", change: "-3.8%", reason: "AI ROI scrutiny continues to pressure non-NVIDIA chip names; Instinct GPU demand narrative questioned as hyperscalers certify all three memory makers for NVIDIA Vera Rubin." },
      { rank: 6, name: "UnitedHealth Group (UNH)", sector: "Healthcare / Insurance", change: "-3.8%", reason: "DOJ antitrust investigation overhang and Medicare Advantage reimbursement uncertainty; GLP-1 drug costs through Medicare Bridge add insurer cost concern." },
      { rank: 7, name: "Shopify (SHOP)", sector: "E-Commerce Software", change: "-3.2%", reason: "SaaS multiple compression continues; AI agent-enabled commerce automation threatening merchant tools moat; Canadian dollar weakness adds FX headwind." },
      { rank: 8, name: "Rheinmetall (RHM.DE)", sector: "EU Defence", change: "-2.5%", reason: "Extended selling after last week's -18% F126 frigate cancellation shock; recovery capped by uncertainty over €2B write-down exposure; investor repositioning toward TKMS." },
      { rank: 9, name: "Pure Storage (PSTG)", sector: "Enterprise Storage", change: "-2.8%", reason: "Storage software margins under pressure from AI-driven hyperscaler self-build trend; enterprise IT spending slowing in mid-year refresh cycle." },
      { rank: 10, name: "Hello Group (MOMO)", sector: "China Social / EM", change: "-2.5%", reason: "China tech regulatory uncertainty; Goldman removed Alibaba from APAC conviction list signaling broader China tech reassessment; MOMO faces dating app revenue pressures." },
      { rank: 11, name: "Starbucks (SBUX)", sector: "Consumer Discretionary", change: "-2.4%", reason: "Same-store sales weakness persists in US; GLP-1 drug adoption reducing premium beverage consumption at the margin; turnaround under new CEO showing mixed signals." },
      { rank: 12, name: "Ulta Beauty (ULTA)", sector: "Consumer / Beauty", change: "-2.2%", reason: "GLP-1 drug adoption reducing premium beauty spend as consumers channel funds toward medication; competition from Sephora in mass-market accelerating." },
      { rank: 13, name: "Palantir (PLTR)", sector: "AI / Government Software", change: "-2.0%", reason: "Stock down ~29% YTD from peak despite July 1 upgrade to Buy at DA Davidson; European government contract renewal uncertainty; high 150x+ P/E leaves no room for execution risk." },
      { rank: 14, name: "Celsius Holdings (CELH)", sector: "Consumer / Beverages", change: "-2.0%", reason: "Energy drink category saturation and GLP-1 consumer behavior shift reducing stimulant beverage demand; distribution gains plateauing." },
      { rank: 15, name: "On Holding (ONON)", sector: "Consumer / Athletic", change: "-1.9%", reason: "Premium athletic apparel facing consumer spending prioritisation shifts; GLP-1 adoption changing body shape trends may impact sizing and returns dynamics." },
      { rank: 16, name: "PayPal (PYPL)", sector: "Fintech / Payments", change: "-1.8%", reason: "Market share pressure from Apple Pay and AI-native checkout solutions; transaction volume growth decelerating; strategic repositioning showing limited near-term catalysts." },
      { rank: 17, name: "StealthGas (GASS)", sector: "LPG Shipping", change: "-1.7%", reason: "LPG tanker charter rates [daily vessel rental prices] softened as Middle East route uncertainty reduces spot demand; smaller vessel segment underperforming container ships." },
      { rank: 18, name: "Garmin (GRMN)", sector: "Consumer Electronics", change: "-1.5%", reason: "Consumer electronics demand slowing in mid-year; smartwatch competition from Apple intensifying; aviation segment solid but insufficient to offset consumer softness." },
      { rank: 19, name: "Heidelberg Materials (HDMG)", sector: "EU Materials / Construction", change: "-1.4%", reason: "European construction activity weak; ECB rate plateau reducing building project economics; high-energy construction inputs remain elevated cost burden." },
      { rank: 20, name: "NICE Systems (NICE)", sector: "Enterprise Software / AI", change: "-1.2%", reason: "Contact center AI software facing direct competition from hyperscaler native tools; SaaS multiple reset compressing valuation despite solid earnings trajectory." }
    ]
  },

  sectors: [
    { name: "US Technology (XLK)", change: "-2.6%", direction: "down", driver: "Second consecutive down week as AI ROI scrutiny persists; software names hit hardest by SaaSpocalypse narrative; hardware names mixed with TSMC up but AMD and Intel weak." },
    { name: "US Healthcare (XLV)", change: "+2.6%", direction: "up", driver: "Medicare GLP-1 Bridge launch July 1 powered LLY +7.8% and NVO +5.2%; managed care weaker (UNH drug cost concerns) offset by drug and device outperformance." },
    { name: "US Communication Services (XLC)", change: "+2.4%", direction: "up", driver: "Netflix and streaming names outperformed; social media resilient; Alphabet flat ahead of July 22 earnings while Meta retreated 2% from record highs." },
    { name: "US Financials (XLF)", change: "+2.2%", direction: "up", driver: "Jobs miss removes rate-hike risk; insurance outperforms; Interactive Brokers benefits from retail trading surge; NIM [net interest margin] pressure in banks offset by insurance gains." },
    { name: "US Consumer Staples (XLP)", change: "+2.0%", direction: "up", driver: "Defensive rotation into staples as tech sector volatility persists; Walmart outperforms; soft jobs reading reduces consumer spending deterioration fears." },
    { name: "US Utilities (XLU)", change: "+1.5%", direction: "up", driver: "Nuclear names Vistra and Constellation driving utilities above average; rate cut expectations reduce competing bond yield attractiveness." },
    { name: "US Consumer Discretionary (XLY)", change: "+1.2%", direction: "up", driver: "Tesla delivery blowout single-handedly lifts the sector; 480K Q2 deliveries vs 406K consensus; European demand highlighted as key growth driver." },
    { name: "US Industrials (XLI)", change: "+0.5%", direction: "up", driver: "Aerospace names stable; HEICO and Howmet benefiting from aircraft MRO [maintenance, repair, overhaul] cycle; construction supply subdued." },
    { name: "US Energy (XLE)", change: "+0.4%", direction: "up", driver: "Oil prices stable near $70/bbl after US-Iran peace accord kept supply flowing; energy sector grinding higher on free cash flow returns." },
    { name: "US Materials (XLB)", change: "-0.3%", direction: "down", driver: "Weak US jobs data raises demand concern for industrial materials; copper and aluminium flat; construction materials subdued on European weakness contagion." },
    { name: "US Real Estate (XLRE)", change: "-0.5%", direction: "down", driver: "Rate sensitivity lingers despite jobs miss rally; commercial real estate distress headlines persist; residential benefits from mortgage rate dip not yet reflected in prices." },
    { name: "EU Defence (VanEck Defense ETF)", change: "-2.8%", direction: "down", driver: "Rheinmetall extended selloff from last week's -18% F126 shock; sector re-pricing as largest single programme cancellation in German defence history reverberates." },
    { name: "EU Banks (iShares STOXX Banks)", change: "+1.5%", direction: "up", driver: "ECB expected to cut again in September; NIM [net interest margin] resilient at current rates; Spanish and Italian banks outperform." },
    { name: "EU Industrials (iShares MSCI Europe Industrials)", change: "-0.5%", direction: "down", driver: "Siemens and broader EU industrial weak; Rheinmetall contagion spread to adjacent names; European construction demand subdued." },
    { name: "EU Luxury (LVMH sector)", change: "-0.8%", direction: "down", driver: "China consumption uncertainty weighing; Alibaba removed from Goldman APAC conviction list signals China consumer caution; LVMH near-term demand visibility limited." },
    { name: "EU Autos", change: "-1.2%", direction: "down", driver: "EU tariffs on Chinese EVs creating supply and demand distortion; Tesla's European delivery surge reinforces competitive pressure on domestic OEMs [original equipment manufacturers]." },
    { name: "EU Insurance", change: "+0.5%", direction: "up", driver: "Allianz and Munich Re benefit from elevated rates and strong reinsurance pricing; catastrophe losses within modelled range for H1 2026; sector defensively positioned." }
  ],

  flows: [
    { label: "US Equities", amount: "-$6.2B", direction: "out", pct: 30, note: "Second week of outflows as tech sector rotation persists; retail investors active but institutional funds reducing overweight tech exposure amid AI ROI uncertainty." },
    { label: "European Equities", amount: "+$2.1B", direction: "in", pct: 55, note: "European fund flows recovering as USD weakness makes EUR-denominated assets more attractive to global investors; EU defence sector re-pricing creating selective entry opportunities." },
    { label: "EM Equities", amount: "+$1.8B", direction: "in", pct: 50, note: "USD weakness on jobs miss is a structural EM tailwind; Southeast Asia and Latin America benefiting from trade fragmentation rerouting and commodity exposure." },
    { label: "Gold & Commodities", amount: "+$1.4B", direction: "in", pct: 60, note: "Physical gold funds absorbing steady inflows as Fear & Greed stays below 35; gold near $3,200/oz; safe haven demand from institutional hedging of equity volatility." },
    { label: "Fixed Income", amount: "+$15.7B", direction: "in", pct: 70, note: "Bond funds the biggest recipient as jobs miss revives Fed cut narrative; 2-year Treasury yield fell 3.5 bps to 4.13% on July 3; credit spreads tightening on soft-landing optimism." },
    { label: "Cash / Money Markets", amount: "+$47.7B", direction: "in", pct: 75, note: "Money market fund assets hit $7.95T for week ending July 1; still growing despite equity market resilience; $9.1T in MMFs represents potential equity rotation fuel as yields eventually fall." }
  ],

  trends: [
    { num: "01", title: "AI Infrastructure Entering the Physical World", detail: "Hyperscalers collectively plan $725B in AI infrastructure capex in 2026 — up 77% from $410B in 2025. TSMC Kumamoto Phase 2 equipment installation begins Q3 2026. NVIDIA Vera Rubin is in full production with HBM4 from all three memory makers. The trend is physically manifesting: server farms, CoWoS packaging lines, and power grid contracts for nuclear plants are locked in through the 2030s.", status: "CONFIRMED", evidence: "TSMC monthly sales up 30% in May; NVIDIA Vera Rubin certified with SK Hynix/Samsung/Micron for HBM4; hyperscaler $725B capex commitment unchanged.", type: "structural" },
    { num: "02", title: "Europe's Strategic Autonomy Moment", detail: "European defence spending targets raised to 5% of GDP by 2035 at Ankara NATO summit. Germany's defence budget reaching €117B in 2026. The F126 frigate cancellation at €2.3B sunk cost and €18B+ total programme cancellation exposed execution risk in Europe's defence build-out. Trend intact at policy level but single-programme risks are materialising.", status: "MIXED", evidence: "Germany F126 cancellation (Rheinmetall -18% last week, -2.5% this week) disrupts the narrative, but TKMS benefits and 5% GDP NATO commitment confirmed by Ankara summit.", type: "structural" },
    { num: "03", title: "Dollar Hegemony Softening", detail: "The dollar's share of global FX reserves fell to 58.2% — a 1995 low. BRICS nations increased local currency trade settlements to 50% target. China CIPS processed $245T in yuan transactions in 2025. This week's June payroll miss (57K vs 110K) drove DXY below 101 and EUR/USD to 1.1452, reinforcing the structural softening thesis with a cyclical catalyst.", status: "CONFIRMED", evidence: "DXY fell to 100.85 after June jobs miss; EUR/USD climbed to 1.1452; Fed rate-hike bets for July/September completely removed from futures pricing.", type: "structural" },
    { num: "04", title: "GLP-1 Drugs Reshaping Healthcare Economics", detail: "Medicare Bridge program launched July 1, 2026, covering GLP-1 obesity drugs at $50/month for 15-20M eligible seniors. Wegovy pill has surpassed 3M prescriptions in five months — one of the strongest US pharma launches by volume on record. Eli Lilly and Novo Nordisk dominate with 60%/40% market share. The therapy is moving from lifestyle drug to standard-of-care, with downstream effects on beauty, food, and consumer discretionary spending.", status: "CONFIRMED", evidence: "Medicare Bridge launched July 1; Eli Lilly +7.8% this week; Wegovy pill >3M Rx in 5 months; >80% of scripts for patients new to GLP-1 therapy, confirming market expansion.", type: "structural" },
    { num: "05", title: "Trade Fragmentation Creating Shipping Opportunities", detail: "Drewry World Container Index surged 9% this week to $4,530 per 40ft container, driven by Transpacific and Asia-Europe rate increases. US-China bookings remain ~30% below 2024 levels. EU applied €3 customs duty on small consignments under €150 starting July 1, disrupting direct-to-consumer China shipments (Temu, Shein models affected). Container lines routing around Cape of Good Hope keep utilisation rates elevated.", status: "CONFIRMED", evidence: "WCI +9% to $4,530 on July 2; Global Ship Lease expanded newbuilding with five mid-size containership orders; EU €3 duty effective July 1 on sub-€150 consignments.", type: "cyclical" },
    { num: "06", title: "Retail Cash Rotation to Equities Building", detail: "Money market fund assets hit $7.95T for the week ending July 1. Retail daily equity deployment in May/June ran 65% above 2025 levels and double 2024 averages. Paradoxically, household cash is at 8% of total financial assets — a 30-year high — even as retail equity buying is at records. The potential rotation catalyst is Fed rate cuts reducing MMF yields from 4%+ toward 3%, making equities relatively more attractive.", status: "UNCHANGED", evidence: "MMF assets +$47.7B week of July 1 to $7.95T; retail equity volumes 65% above 2025 average but MMF balances still rising — rotation building but not yet triggered.", type: "structural" }
  ],

  executive: {
    biggest_mover: { name: "Tesla (TSLA)", change: "+13.6%", reason: "Tesla delivered 480,126 vehicles in Q2 2026 — 18% above the 406,024 consensus estimate and 25% above Q2 2025 — powered by a European demand surge and refreshed Model lineup. The delivery blowout confirms Tesla's EV market recovery thesis and removes the bear case of structural demand destruction; full financial results including margin data arrive July 22, which will determine whether the re-rating sustains." },
    key_risk: { name: "AI Capex-to-Revenue Gap Widening", reason: "Hyperscalers are committed to $725B in AI infrastructure spend in 2026 alone, yet AI-attributable revenue disclosure remains opaque across all four major cloud providers. Amazon's capex-to-free-cash-flow ratio turned negative in 2026 for the first time — a first-order stress signal that the ROI timeline may extend further than current equity multiples embed. If one major hyperscaler signals a capex plateau in July-August earnings calls, multiple compression across the entire AI supply chain (Nvidia, TSMC, SK Hynix) would follow within weeks." },
    conviction_call: { name: "SK Hynix (000660.KS)", observation: "SK Hynix has the strongest risk-reward setup in the AI supply chain this week. It has been certified as primary HBM4 [high-bandwidth memory] supplier for NVIDIA's Vera Rubin platform at ~60-65% allocation, with a supply agreement and advance payment extending through 2030. The company dethroned Samsung in DRAM revenue for the first time in 26 years, reflecting genuine technological leadership. Unlike TSMC which trades at a premium, SK Hynix's HBM market dominance is not yet fully priced into consensus. The key risk is a Samsung yield recovery in HBM4 — a scenario that appears at least 6-12 months away based on current data." },
    macro_pulse: { name: "June US Nonfarm Payrolls (57K, July 3, 2026)", observation: "June's payroll print of 57,000 — vs 110,000 expected, the lowest in four months — was a genuine labour market softening signal, not statistical noise. Both April and May payrolls were revised down by a combined 74,000, confirming a trend. The unemployment rate fell to 4.2% only because labour force participation dropped to 61.5%, the lowest since March 2021. Markets interpreted this as a Goldilocks print: soft enough to cement rate cuts but not soft enough to trigger recession fears." },
    tags: [
      { label: "EUR/USD: 1.1452 rising", type: "green" },
      { label: "Fed: Hike off table post-57K jobs", type: "green" },
      { label: "ECB: Sep cut expected", type: "green" },
      { label: "Tariffs: WCI +9%, EU €3 duty", type: "amber" },
      { label: "AI capex: $725B 2026 committed", type: "blue" },
      { label: "EU defence: F126 cancelled, re-pricing", type: "amber" },
      { label: "Semis: Vera Rubin HBM4 certified", type: "green" },
      { label: "Shipping: WCI $4,530 +9% weekly", type: "green" }
    ]
  },

  macro: {
    us: "The defining event of the US week was Thursday's June jobs report: 57,000 nonfarm payrolls added vs 110,000 expected, the lowest print in four months, accompanied by combined April-May downward revisions of 74,000. Unemployment fell to 4.2% but only because labour force participation dropped to 61.5% — the lowest since March 2021. The DXY fell to 100.85 immediately, Treasury 2-year yields dropped 3.5 bps to 4.13%, and futures markets removed all probability of a Fed rate hike at the July or September meetings. The S&P 500 finished the holiday-shortened week at approximately 7,483, down 0.2% from Wednesday's close, with tech (XLK -2.6% on the week) the laggard and healthcare (XLV +2.6%) the leader on GLP-1 Medicare catalyst. Tesla's delivery beat on July 2 provided the most concrete fundamental catalyst of the week: 480K vehicles vs 406K consensus. Total money market fund assets hit $7.95T — the wall of cash that could eventually rotate into equities as yields decline.",
    europe: "Europe's macro week was dominated by two forces: EUR/USD strength to 1.1452 as USD weakened, and continued EU defence sector re-calibration post-Rheinmetall's F126 frigate shock. The Ankara NATO summit confirmed the 5% of GDP defence spending target by 2035, keeping the structural EU defence spending thesis intact at the policy level even as Rheinmetall extended its weekly losses by a further 2.5%. EU banks outperformed (+1.5%) on ECB September cut expectations. The EU's €3 per-consignment customs duty on sub-€150 imports came into effect July 1, disrupting Chinese direct-to-consumer shipping flows (Temu and Shein business models affected) and creating a new structural tailwind for European logistics companies. ECB flash CPI for June came in at 2.8% headline, 2.4% core — within target range — reinforcing the case for continued ECB easing.",
    asia: "Asia's week was defined by three storylines. First, TSMC's May sales report confirmed a 30% year-over-year increase in monthly revenue driven by AI chip demand, setting up a record Q2 and vindicating the AI infrastructure capex thesis. Second, the Bank of Japan held at 1% following its historic June 16 hike to the highest rate since 1995, with the JPY at 160.22 per USD — watched carefully given BOJ board member Tamura's advocacy for a 2% neutral rate. A BOJ surprise hike would trigger JPY carry trade [cheap yen borrowed to buy global assets] unwinding within hours. Third, Alibaba closed up 2.1% as Chinese stocks broadly recovered, but Goldman's removal of Alibaba from its APAC conviction list signals continued institutional caution on China tech. China's SMIC is conducting 5nm DUV pilot runs with yields of 20-40% — insufficient for volume production but evidence of continued progress. EM broadly benefited from USD weakness.",
    forward: "Next week's key events: (1) US markets closed July 4 (Independence Day) — shortened trading week. (2) June US CPI scheduled for July 14 — expected to show continued disinflation; will cement or undermine September rate cut pricing. (3) TSMC Q2 2026 earnings July 16 — guidance on CoWoS capacity and AI chip demand for H2 2026 is the most important semiconductor data point of Q3 earnings season. (4) Tesla Q2 2026 financial results July 22 — delivery beat confirmed but automotive gross margin is the critical read; Alphabet Q2 approximately July 22-28 — cloud AI revenue vs $175-185B capex is the AI ROI data point the market most needs. (5) Apple Q3 2026 earnings July 30 — Tim Cook's final earnings call as CEO; iPhone AI upgrade cycle data the key focus. (6) Microsoft Q4 FY2026 results approximately July 29 — Azure AI growth acceleration needed to justify $190B 2026 capex."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$308.44",
      change: "-0.06%",
      pe: "~30x",
      pe_plain: "paying 30 years of annual earnings per share",
      target: "$230-$380",
      theme: "Apple Intelligence monetisation and iPhone AI upgrade cycle",
      news: "Apple set Q3 2026 earnings for July 30 — Tim Cook's final earnings call as CEO alongside new CFO Kevan Parekh. The company faces a split narrative: iPhone 17 cycle is expected to be the first AI-upgrade super-cycle driven by Apple Intelligence features, but China sales remain under pressure from Huawei competition and geopolitical sensitivity. Service revenue continues growing as a percentage of overall revenue, reducing hardware cyclicality and supporting the premium multiple.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "AI iPhone upgrade cycle thesis intact but China exposure and premium valuation leave limited near-term upside; CEO transition adds uncertainty."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$385.89",
      change: "-1.2%",
      pe: "~34x",
      pe_plain: "paying 34 years of annual earnings per share",
      target: "$350-$480",
      theme: "Azure AI cloud growth and GitHub Copilot enterprise adoption",
      news: "Microsoft is tracking toward $190B in 2026 capex — roughly $25B attributable to component price inflation beyond original guidance. Azure AI revenue growth needs to accelerate substantially to justify the commitment; Q4 FY2026 earnings arrive approximately July 29. Analyst EPS consensus for Q4 FY2026 is $4.23. GitHub Copilot and Microsoft 365 Copilot enterprise adoption metrics are the key disclosures to watch for AI revenue confirmation.",
      earnings: "~July 29, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "Azure AI growth trajectory solid but $190B capex commitment means free cash flow inflects negative — multiples need revenue acceleration to sustain at 34x."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$243.00",
      change: "+1.4%",
      pe: "~38x",
      pe_plain: "paying 38 years of annual earnings per share",
      target: "$230-$290",
      theme: "AWS AI monetisation and Trainium custom silicon ramp",
      news: "Amazon projects $200B in 2026 capex — the largest AI infrastructure commitment among the four hyperscalers — yet free cash flow is expected to turn negative in 2026 for the first time since the early pandemic period. AWS AI revenue is growing but disclosure on AI-attributable revenue remains opaque. Trainium custom silicon is positioned to reduce NVIDIA dependency at scale but is still predominantly for inference workloads. Q2 results expected late July — FCF guidance will be the market's focus.",
      earnings: "~Late July 2026",
      earnings_proximity: "soon",
      verdict: "WATCH",
      verdict_reason: "AWS AI narrative intact but negative free cash flow in 2026 from $200B capex is the key risk — Q2 earnings call must show AI-attributable revenue acceleration."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$359.07",
      change: "-0.8%",
      pe: "~25x",
      pe_plain: "paying 25 years of annual earnings per share",
      target: "$350-$450",
      theme: "Google Cloud AI and Gemini monetisation",
      news: "Alphabet's share price lagged peers even as market cap crossed $4T — Bloomberg noted a $2T gain in 2 years turned a rock-star into a question mark. The company is targeting $175-185B in capex but AI-attributable revenue disclosure is the sector Achilles heel. Q2 earnings expected July 22-28; after Q1 surged 10% on the day, expectations are high. The market will dissect Gemini API revenue, Cloud AI margins, and any language about capex right-sizing.",
      earnings: "~July 22-28, 2026",
      earnings_proximity: "imminent",
      verdict: "HOLD",
      verdict_reason: "Cheapest Mag7 multiple at ~25x but AI revenue opacity and $175-185B capex commitment require Q2 earnings validation; imminent catalyst."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$612.91",
      change: "-2.0%",
      pe: "~24x",
      pe_plain: "paying 24 years of annual earnings per share",
      target: "$700-$850",
      theme: "AI advertising monetisation and Llama open-source ecosystem",
      news: "Meta raised full-year 2026 capex guidance to $125-$145B from $115-$135B, attributing the increase to component pricing and additional data center costs. Despite the capex lift, Meta remains the most profitable AI investor among hyperscalers due to its advertising flywheel — AI-enhanced ad targeting is delivering measurable ROAS [return on ad spend] improvements. Stock pulled back from all-time high of $787.42 (August 2025) but analyst consensus remains Strong Buy with average target near $827. Q2 results expected late July.",
      earnings: "~Late July 2026",
      earnings_proximity: "soon",
      verdict: "BUY",
      verdict_reason: "Strongest AI-to-revenue conversion story among hyperscalers; cheapest Mag7 multiple at ~24x with highest advertising ROI from AI deployment."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$194.83",
      change: "-2.6%",
      pe: "~38x",
      pe_plain: "paying 38 years of forward annual earnings per share",
      target: "$165-$260",
      theme: "Vera Rubin ramp and AI infrastructure supply chain dominance",
      news: "NVIDIA confirmed Vera Rubin platform is in full production with all three HBM4 suppliers (SK Hynix, Samsung, Micron) certified, with deliveries starting Q3 2026. The company secured memory supply through 2030 via advance payments of $540M-$770M to each supplier. At $194.83 on July 2, NVDA has pulled back 17% from its $235.47 all-time high of May 14. Next earnings August 26 after market close — the Q2 FY2027 print will be the first to include Vera Rubin revenue recognition.",
      earnings: "August 26, 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Vera Rubin ramp confirms demand but 17% pullback from highs reflects AI ROI scrutiny; August 26 earnings will reset the multiple direction definitively."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$437.96",
      change: "+13.6%",
      pe: "~90x",
      pe_plain: "paying 90 years of annual earnings — priced for robotaxi and FSD future, not current automotive earnings",
      target: "$200-$600",
      theme: "EV demand recovery and Autonomy/Robotaxi optionality",
      news: "Tesla reported 480,126 Q2 2026 deliveries on July 2 — 25% above Q2 2025 and 34% above Q1 2026, easily beating the 406,024 Wall Street consensus. European demand surge was the key driver, with refreshed Model 3/Y boosting international markets. Energy storage deployment hit 13.5 GWh. Full financial results including critical automotive gross margin data arrive July 22, where investors will focus on whether the volume recovery came at the cost of profitability.",
      earnings: "July 22, 2026",
      earnings_proximity: "imminent",
      verdict: "WATCH",
      verdict_reason: "Delivery beat is undeniable but 90x P/E demands gross margin recovery confirmation on July 22; FSD and robotaxi optionality justify premium only if margins hold."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "TSMC +30% monthly sales in May; NVIDIA Vera Rubin in full production with HBM4 certified; $725B hyperscaler capex unchanged.",
      instruments: "NVDA, TSMC, ASML, SK Hynix, Micron, Broadcom, Pure Storage",
      highlights: [
        { name: "TSMC (TSM)", change: "+4.8%", note: "Record monthly sales, +30% year-over-year in May; CEO C.C. Wei confirmed CoWoS [advanced chip packaging] sold out through end-2026; Q2 earnings July 16 the next major data point for AI demand confirmation." },
        { name: "SK Hynix (000660.KS)", change: "+4.2%", note: "Primary NVIDIA HBM4 [high-bandwidth memory 4th generation] supplier at ~60-65% allocation; DRAM prices at multi-year highs; dethroned Samsung in revenue for first time in 26 years — a structural milestone." },
        { name: "Micron Technology (MU)", change: "+3.8%", note: "Third NVIDIA HBM4 supplier certified for Vera Rubin; $540M-$770M advance payment through 2030 provides multi-year revenue visibility; closes the structural gap with Korean rivals." },
        { name: "ASML (ASML)", change: "-6.0%", note: "Dutch Pax Silica DUV [deep ultraviolet lithography equipment] restriction expansion for China threatens ~20% of projected 2026 revenue; EUV [extreme ultraviolet, advanced generation] monopoly globally intact." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "MIXED",
      evidence: "NATO 5% GDP defence target confirmed at Ankara summit; Germany F126 frigate cancellation exposes execution risk alongside structural spending commitment.",
      instruments: "Rheinmetall, Safran, Thales, HEICO, Howmet Aerospace, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall (RHM.DE)", change: "-2.5%", note: "Extended selling after last week's -18% F126 shock; €2B write-down risk flagged by Morgan Stanley; TKMS [ThyssenKrupp Marine Systems] is the programme beneficiary from Germany's switch to eight MEKO frigates." },
        { name: "Safran (SAF.PA)", change: "+0.8%", note: "Aviation MRO [maintenance, repair, overhaul] and engine manufacturing insulated from programme cancellation shock; defence-adjacent but not programme-exposed; durable earnings base." },
        { name: "Thales (HO.PA)", change: "+0.5%", note: "Valuation most attractive EU defence name at P/E [price-to-earnings] 29.6x with EPS [earnings per share] surging +61.8% TTM [trailing twelve months]; digital and cyber defence exposure differentiates from hardware." },
        { name: "HEICO (HEI)", change: "+1.7%", note: "US aerospace MRO name benefiting from aircraft delivery delays and aftermarket spending; insulated from EU programme cancellation risk; pricing power in PMA [Parts Manufacturer Approval] parts segment." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "EUR/USD hit 1.1452 after 57K jobs miss; DXY below 101; dollar reserve share at 58.2% a 30-year low; BRICS local currency trade target raised to 50%.",
      instruments: "Gold ETFs, VanEck Rare Earth, WisdomTree Bitcoin ETP, EM Equity ETFs, iShares MSCI Brazil/Poland",
      highlights: [
        { name: "iShares Physical Gold (IGLN)", change: "+1.8%", note: "Gold at ~$3,200/oz as fear and greed stays below 35 and dollar weakens; institutional safe-haven demand absorbing $1.4B inflows this week; dollar reserve share at 1995 low of 58.2%." },
        { name: "iShares MSCI Brazil (EWZ)", change: "+2.2%", note: "EM beneficiary of USD weakness; Brazil-China bilateral trade now 40% settled in local currencies — up 10pp from 2025; commodity exporters outperform with weaker dollar." },
        { name: "iShares MSCI Poland (EPOL)", change: "+1.5%", note: "Central Eastern Europe ETF outperforms as EUR strengthens; Poland's NATO 5% GDP spending commitment supports defence-adjacent industrial growth; zloty strengthens vs USD." },
        { name: "WisdomTree Bitcoin ETP (WBTC)", change: "+3.2%", note: "Crypto benefiting from dollar weakness and soft-landing optimism; Bitcoin treated as reserve-currency-alternative trade by institutional allocators alongside gold; digital gold thesis reinforced." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "CONFIRMED",
      evidence: "Medicare Bridge program launched July 1; Eli Lilly +7.8% week; Wegovy pill >3M Rx in 5 months; 15-20M Medicare beneficiaries newly eligible.",
      instruments: "Novo Nordisk, Eli Lilly, HCA Healthcare, UnitedHealth, Veeva Systems",
      highlights: [
        { name: "Eli Lilly (LLY)", change: "+7.8%", note: "Week's biggest healthcare mover; $1,183 stock, $2,100 analyst price target; Zepbound and Foundayo included in Medicare Bridge; LLY and NVO hold 60%/40% GLP-1 market share respectively." },
        { name: "Novo Nordisk (NVO)", change: "+5.2%", note: "Wegovy pill 3M prescriptions in 5 months — one of strongest pharma launches by volume ever; >80% of new Rx for GLP-1 therapy novices confirming market expansion not cannibalisation of existing patients." },
        { name: "UnitedHealth Group (UNH)", change: "-3.8%", note: "Medicare Advantage insurer faces GLP-1 drug cost inflation from the Bridge program while navigating DOJ antitrust investigation; managed care cost structure under pressure from two simultaneous headwinds." },
        { name: "Ulta Beauty (ULTA)", change: "-2.2%", note: "Second-order GLP-1 effect: consumers redirecting discretionary spending from premium beauty to medication; also facing Sephora mass-market competition; thesis confirms GLP-1 reshaping consumer spending patterns." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "CONFIRMED",
      evidence: "WCI surged 9% to $4,530; EU €3 duty on sub-€150 imports effective July 1; US-China bookings ~30% below 2024 levels; Southeast Asia trade rerouting accelerating.",
      instruments: "Global Ship Lease, Danaos, International Seaways, Tsakos Energy Navigation, StealthGas",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+2.0%", note: "WCI surge to $4,530 directly benefits GSL's spot and short-term charter rates [daily vessel rental price]; ordered five additional mid-size containerships for $413M to capitalise on sustained rate environment." },
        { name: "Danaos Corporation (DAC)", change: "+1.9%", note: "Container rate environment improving sharply; Cape of Good Hope rerouting extends effective vessel utilisation by ~20 sailing days vs. Suez Canal route; Buy rating at $174 price target confirmed." },
        { name: "International Seaways (INSW)", change: "+1.5%", note: "Tanker rates benefiting from Middle East instability premium; oil trade patterns still fragmenting as US-Iran peace accord stabilised supply but routed more oil via Cape of Good Hope." },
        { name: "StealthGas (GASS)", change: "-1.7%", note: "LPG [liquefied petroleum gas] tanker charter rates softened; smaller vessel specialisation less exposed to the container rate surge; relative laggard within the shipping thesis this week." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "UNCHANGED",
      evidence: "MMF assets reached $7.95T week of July 1, still growing; retail equity volumes 65% above 2025 averages; MMF inflows of $47.7B this week show cash still accumulating.",
      instruments: "Interactive Brokers, Robinhood, Vanguard S&P 500 ETF, SPDR Russell 2000, iShares Core S&P 500",
      highlights: [
        { name: "Interactive Brokers (IBKR)", change: "+1.8%", note: "Disproportionate beneficiary of retail trading surge; daily cash equity volumes 65% above 2025 levels and double 2024 averages; retail investors deploying at record pace in May/June 2026." },
        { name: "Robinhood (HOOD)", change: "+1.2%", note: "Retail investing platform capturing millennial and Gen-Z equity deployment; options trading volumes at records; crypto exposure adds volatility to earnings but broadens revenue." },
        { name: "SPDR Russell 2000 (IWM)", change: "+0.8%", note: "Small cap rotation building as rate-cut expectations firm; small caps have greater floating-rate debt sensitivity — each 25bps Fed cut flows through to EPS [earnings per share] within 12-18 months." },
        { name: "Vanguard S&P 500 ETF (VOO)", change: "-0.5%", note: "Passive flows still positive but tech weight dragging; the $9.1T in money market funds represents the largest potential rotation catalyst if Fed delivers multiple cuts by year-end." }
      ]
    }
  ],

  discoveries: [
    { num: "01", company: "Tesla (TSLA)", sector: "EV / Consumer Discretionary", headline: "Tesla Q2 2026 deliveries hit 480,126 — 25% above Q2 2025, 18% above Wall Street consensus of 406,024 — driven by European demand surge", detail: "The blowout delivery print reversed the bear thesis of structural EV demand destruction and confirmed that Tesla's lineup refresh is working in international markets. Financial results July 22 will determine whether margins recovered alongside volume — automotive gross margin is the remaining investor uncertainty. The delivery data also confirmed energy storage deployment of 13.5 GWh, a growing segment that diversifies Tesla's revenue beyond automotive and is directly linked to AI data center power demand.", tag: "BULL" },
    { num: "02", company: "Eli Lilly / Novo Nordisk", sector: "Healthcare / Pharma", headline: "Medicare Bridge program launches July 1 covering GLP-1 obesity drugs at $50/month copay for up to 20M eligible seniors", detail: "The program represents the largest single expansion of GLP-1 [glucagon-like peptide-1 obesity drug] access in history. With 15-20M Medicare beneficiaries potentially qualifying and 80%+ of new Wegovy pill scripts going to treatment-naive patients, the total addressable market has expanded materially overnight. The program expires end-2027, creating a legislative cliff risk, but clinical and commercial momentum will be hard to reverse politically. Downstream effects: managed care costs rise (bearish UNH), food consumption patterns shift, fitness and beauty sectors face structural headwinds.", tag: "BULL" },
    { num: "03", company: "NVIDIA / Memory Suppliers", sector: "Semiconductors", headline: "NVIDIA certifies SK Hynix, Samsung, and Micron simultaneously for HBM4 supply for Vera Rubin; advance payments of $540M-$770M per supplier through 2030", detail: "The triple HBM4 [high-bandwidth memory 4th generation] certification is a structural supply chain shift — NVIDIA is deliberately de-risking by qualifying all three players simultaneously for the first time. SK Hynix retains largest allocation (~60-65%), but Micron's inclusion is material: it gives NVIDIA pricing leverage and reduces Korean supply concentration risk. The $540M-$770M advance payments to each supplier are unprecedented and signal NVIDIA's conviction in sustained hyperscaler demand. For SK Hynix and Micron shareholders, this represents multi-year revenue visibility at elevated prices.", tag: "BULL" },
    { num: "04", company: "ASML Holding (ASML)", sector: "Semiconductor Equipment", headline: "Dutch government joins Pax Silica export control alliance expanding DUV restrictions to China; ASML falls 6.02% on July 1", detail: "The Dutch government's decision to join a multilateral export restriction framework for mature-node DUV [deep ultraviolet lithography] shipments threatens approximately 20% of ASML's projected 2026 systems revenue from Chinese customers. The market sold off sharply. The irony: this action is strategically correct for containing China chip progress but is financially painful in the short term for ASML shareholders. ASML's EUV [extreme ultraviolet — next-generation chipmaking] monopoly globally remains intact, and SMEE (China's alternative) is stuck at ~28nm — not yet a threat to advanced logic. The AMBER signal reflects the revenue impact, not a threat to the long-term moat.", tag: "BEAR" },
    { num: "05", company: "Container Shipping Sector", sector: "Shipping / Logistics", headline: "Drewry World Container Index surges 9% to $4,530 per 40ft container on July 2 as Transpacific and Asia-Europe rates spike", detail: "The 9% single-week WCI surge to $4,530 is the largest weekly move in the benchmark in recent months. The driver is a combination of EU €3 customs duty-triggered pre-shipment rush on sub-€150 consignments (effective July 1), Transpacific demand from importers frontloading before any new US tariff escalation, and continued Cape of Good Hope rerouting keeping vessel utilisation elevated. For container ship operators (GSL, DAC), this is directly accretive to rate re-fixings. A sustained rate above $4,000 justifies continued newbuilding programmes.", tag: "BULL" },
    { num: "06", company: "Rheinmetall (RHM.DE)", sector: "EU Defence / Industrial", headline: "Germany cancels F126 frigate program at €2.3B sunk cost, scrapping €18B+ total contract; Rheinmetall -18% in a single session last week, extended this week", detail: "The F126 cancellation is the largest single programme cancellation in German defence history and revealed the execution risk in Europe's rearmament boom. Rheinmetall was positioned as lead contractor; Germany switched to TKMS for eight smaller MEKO A-200 frigates. The broader implication: European defence spending is real and growing at the policy level, but investors must distinguish between programme execution winners and losers rather than buying the sector as a monolith. The Rheinmetall selloff is largely priced in; the question is whether the €2B write-down risk is fully discounted at current levels.", tag: "BEAR" },
    { num: "07", company: "Bank of Japan (Policy Impact)", sector: "Macro / Rates", headline: "BOJ at 1% — highest since 1995 — following June 16 hike; JPY at 160.22; board member Tamura advocates 2% neutral rate implying 100bps more tightening ahead", detail: "The BOJ is the most consequential macro risk for global equity investors that is not yet reflected in current prices. With JPY at 160 and a board member publicly targeting 2% (implying four more 25bps hikes), the carry trade [strategy of borrowing cheap yen and investing in higher-yielding global assets] unwind risk is elevated. A surprise BOJ hike at the late July or August meeting would hit global tech stocks within hours through forced position unwinding — the mechanism is price-driven, not fundamental. TSMC Kumamoto Phase 2 proceeding on schedule is the constructive Japan-specific fact.", tag: "WATCH" },
    { num: "08", company: "Amazon (AMZN)", sector: "AI Cloud / Technology", headline: "Amazon 2026 free cash flow turns negative for first time since pandemic on $200B AI capex commitment — widest AI ROI gap among hyperscalers", detail: "Amazon's FCF [free cash flow — cash generated after all capital investments] turning negative in 2026 is the most concrete financial warning signal that the AI capex-to-revenue gap is widening beyond what near-term fundamentals support. Among the four hyperscalers, Amazon has the largest absolute capex commitment ($200B) and the lowest AI-attributable revenue disclosure. AWS AI revenue is growing but not broken out explicitly. The forthcoming Q2 earnings call (late July) is the event risk: if the CFO cannot show accelerating AI-attributable revenue, or hints at any capex moderation, the semiconductor supply chain faces multiple compression within hours.", tag: "WATCH" }
  ],

  risers: [],

  ai_trade: {
    status: "CAUTION",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings — a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "AMBER",
        finding: "Meta raised 2026 capex to $125-145B (from $115-135B) citing component pricing. Amazon FCF turns negative in 2026 on $200B capex commitment. Combined hyperscaler 2026 AI capex: $725B, up 77% from 2025. No cuts announced but Amazon negative FCF and Meta capex inflation above original guidance are first-order stress signals.",
        implication: "No imminent capex cut signal but Amazon negative FCF and Meta capex inflation are caution flags. If Q2 earnings calls (July-August) contain any right-sizing language from one CFO, NVIDIA and TSMC face same-day multiple compression."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "HBM3 at ~$200/stack, HBM3E at ~$300/stack, HBM4 at ~$500/stack. DDR5 contract prices surged 90-95% quarter-over-quarter in Q1 2026. Samsung ASP [average selling price] up 146% and SK Hynix DRAM up mid-60% in Q1 2026. Supply constrained through H2 2026 per TrendForce. No plateau or reversal signal.",
        implication: "Memory pricing remains at elevated levels with no plateau signal. This is the strongest GREEN in the AI trade scorecard — semiconductor memory earnings should continue to outperform through Q3 2026 earnings season."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Hyperscalers collectively committing $725B in 2026 but AI-attributable revenue disclosure opaque across all four. Amazon FCF [free cash flow] negative in 2026 for first time. Forbes analysis identified widening gap explicitly. Azure, Google Cloud, AWS AI revenue growing but not disclosed at line-item level by any of the four.",
        implication: "Gap measurably widening — Amazon is the clearest signal. Q2 earnings (July-August) are the first test: if hyperscalers cannot show accelerating AI-attributable revenue with specific disclosures, multiple compression follows in the semiconductor supply chain."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "Mag7 forward P/Es range from ~24x (Meta) to ~90x (Tesla) to ~38x (NVDA, AMZN). Q1 2026 earnings all beat estimates with strong AI-driven revenue growth. But EPS [earnings per share] revision direction mixed heading into Q2 — tech sector delivered second consecutive down week suggesting re-rating happening pre-earnings. NVDA -17% from ATH [all-time high], Meta -22% from ATH.",
        implication: "AMBER: tech multiples are compressing from H1 peaks while EPS estimates remain elevated. If Q2 earnings disappoint consensus, the multiple compression accelerates. The direction of EPS revisions in July-August earnings season determines whether AMBER becomes GREEN or RED."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "SMIC conducting 5nm DUV [deep ultraviolet lithography] pilot runs with reported yields of 20-40% — insufficient for volume but above zero. China targets 5x increase in 7nm/5nm output to 100K wafers in 1-2 years (from <20K now). Huawei Ascend 950PR targeting 1 PFLOP FP8 with 128GB HBM. SMEE stuck at ~28nm class — no EUV breakthrough.",
        implication: "AMBER not RED: Chinese 5nm-class production is real but yield rates (20-40%) and volumes (<20K wafers) are not yet an imminent threat to ASML/NVDA premiums. Risk is 12-24 months away unless yield improves dramatically. ASML DUV restriction expansion preempts future equipment access."
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
        finding: "SK Hynix certified as primary NVIDIA HBM4 supplier (~60-65% allocation) for Vera Rubin; Samsung at ~25-30% share; Micron the remainder. No labour disruption reports this week. Samsung HBM4 mass production from February 2026 confirmed. SK Hynix dethroned Samsung in overall DRAM revenue for first time in 26 years.",
        implication: "Korean supply chain functioning normally with both major players certified for Vera Rubin. SK Hynix's dominant position is the key fact; any Samsung labour action would shift allocation upward for SK Hynix and Micron, not create an outright supply shortage."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "AMBER",
        finding: "BOJ at 1% following June 16 historic hike — highest since 1995. JPY at 160.22/USD. BOJ board member Tamura advocating for 2% neutral rate implying 100bps more tightening ahead. TSMC Kumamoto Phase 2 equipment installation on track for Q3 2026. No fab disruption this week.",
        implication: "BOJ is the key watch item. A surprise hike at the next meeting (late July) would trigger JPY carry trade unwinding — a mechanism that hits tech stocks globally within hours through forced position sales, not fundamental deterioration. Risk is elevated but not immediate."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS capacity sold out through end-2026 per CEO C.C. Wei. SMIC 5nm DUV pilot runs at 20-40% yield (below commercial threshold). Dutch Pax Silica expansion of DUV restrictions reduces SMIC access to replacement equipment. No Taiwan political escalation signals. China rare earth controls remain a threat but no new announcement this week.",
        implication: "CoWoS bottleneck is bullish for TSMC pricing but caps NVIDIA shipment velocity. SMIC 5nm progress at 20-40% yield is AMBER — not yet commercially viable but demonstrating trajectory. ASML DUV restriction expansion is the most significant development preempting SMIC's path to further advancement."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "GREEN",
        finding: "CHIPS Act disbursements proceeding: $8.5B awarded to Intel with $11B loan availability. TSMC Arizona Phase 2 equipment installation scheduled Q3 2026 for 3nm/2nm node production starting 2027. Dutch Pax Silica DUV restriction expansion coordinated with US policy. No surprise export control announcements this week.",
        implication: "US policy environment stable for domestic fab buildout. TSMC Arizona Phase 2 timing is positive for US supply chain resilience. The Pax Silica DUV expansion is a coordinated multilateral action — markets have partially priced this direction of travel for ASML."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "SMEE stuck at ~28nm class — no credible advancement reported this week. SMIC using existing DUV for 5nm-class pilot runs at 20-40% yield, demonstrating that equipment restriction matters. Dutch Pax Silica DUV restriction expansion reduces future SMEE access to replacement tools. ASML stock -6% July 1 on the restriction news itself — market pricing revenue impact before strategic gain.",
        implication: "ASML's EUV monopoly is untouched; the AMBER signal is from the DUV restriction's near-term revenue impact (~20% China exposure). SMEE at 28nm is not a competitive threat to advanced logic production. The Pax Silica action is strategically correct but financially painful short term for ASML shareholders."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix holds ~60-65% of NVIDIA Vera Rubin HBM4 allocation, Samsung ~25-30%, Micron the remainder. All three certified simultaneously — first time three suppliers qualified concurrently. SK Hynix retains dominant position; Micron's inclusion is additive for Micron shareholders, not disruptive for SK Hynix. HBM4 at ~$500/stack with supply constrained.",
        implication: "SK Hynix moat secure for this cycle with Vera Rubin allocation locked. Micron inclusion prevents single-point pricing failure but does not compress SK Hynix margins at current supply and demand balance. Samsung must close the yield gap to regain share from SK Hynix."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Google TPU v5, AWS Trainium 2, Microsoft Maia — all used predominantly for inference workloads at scale. Training remains NVIDIA-dominated. Amazon's Trainium is certified for specific model training (Llama variants) but not yet competitive for frontier model training at scale. No hyperscaler has announced >10% training shift to custom silicon.",
        implication: "AMBER maintained: trajectory is toward more custom silicon but the threshold for material re-pricing of NVIDIA's TAM has not been crossed. A 20%+ training shift announcement from any hyperscaler in Q2 earnings would be the trigger for NVIDIA multiple compression. Probability in next 3 months: ~15-20%."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS capacity sold out through end-2026 per CEO C.C. Wei confirmation this week. Samsung and Amkor both pursuing CoWoS-equivalent capacity but at lower yield and volume. No hyperscaler has publicly certified an alternative CoWoS supplier for NVIDIA-class AI chips. The packaging bottleneck is limiting NVIDIA shipment velocity but TSMC pricing power is fully intact.",
        implication: "TSMC CoWoS moat intact for at least 12-18 months. Any Samsung or Amkor breakthrough would be positive for overall AI chip supply (hyperscalers can get more GPUs) and a small negative for TSMC's packaging pricing power. Currently no imminent threat — GREEN."
      }
    ]
  }

};
