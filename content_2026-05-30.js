const BRIEF = {

  meta: {
    date: "Saturday, May 30, 2026",
    eurusd: "1.1668",
    eurusd_direction: "falling",
    eurusd_driver: "EUR/USD pulled back from April highs near 1.19 as the dollar stabilised on easing tariff anxiety following the US-Iran talks narrative and a modestly hawkish Fed hold posture; the pair is down ~0.5% on the week from ~1.1730.",
    eurusd_outlook: "Expect the pair to trade 1.155–1.175 next week; USD positions face modest headwind from any resumption of dollar-negative tariff headlines or a softer ISM print.",
    eurusd_weekly_change: "-0.5%"
  },

  vitals: {
    fear_greed: { value: 61, last_week: 54, label: "Greed", interpretation: "The index climbed from neutral territory last week to a clear Greed reading of 61, reflecting the ninth consecutive weekly gain for the S&P 500 and a wave of blowout earnings beats from Dell, ServiceNow, and Palantir. Markets are pricing in continued AI monetisation and are not pricing in any near-term macro shock. A reading above 60 historically precedes short-term consolidation, not reversal." },
    vix: { value: 15.74, last_week: 18.2, label: "Calm", interpretation: "VIX dropped sharply from the high-18s last week to sub-16, the lowest since January. The compression reflects options sellers exploiting the steady grind higher; there is little hedging demand. Sub-16 VIX is consistent with complacency risk — a sudden shock (geopolitical, Fed surprise, earnings miss) would be amplified by thin hedge book." },
    put_call: { value: 0.39, last_week: 0.55, label: "Bullish tilt", interpretation: "At 0.39, the equity put/call ratio is at extreme bullishness — traders are buying calls far more than puts, reflecting strong conviction in the uptrend. This is a contrarian caution signal: when everyone is positioned for upside, the market is more vulnerable to a shake-out on any negative surprise." }
  },

  regime: {
    title: "Enterprise AI Monetisation Takes the Wheel",
    description: "The dominant market narrative this week shifted from 'AI infrastructure spending fear' to 'AI monetisation confirmation'. Dell's +88% revenue beat and ServiceNow's 14% surge on enterprise AI adoption showed that the capex cycle is producing real software and hardware revenues — not just promises. This regime favours AI infrastructure, software, and memory plays. It headwinds legacy IT, commodities, and non-AI growth stories competing for the same multiple.",
    tailwinds: ["AI revenue confirmation from Dell, ServiceNow, Palantir", "Ninth consecutive weekly S&P 500 gain creating momentum", "Hyperscaler capex at $700B+ locking in multi-year demand"],
    headwinds: ["VIX at 15.7 signals complacency — limited hedge book for shocks", "EUR/USD softening weighs on USD-denominated foreign positions", "UnitedHealth DOJ investigation overhang on healthcare sector"]
  },

  league: {
    winners: [
      { rank: 1, name: "Dell Technologies", sector: "Technology / AI Infrastructure", change: "+33.0%", reason: "Blowout Q1 FY27 earnings: $43.8B revenue (+88% YoY), $24.4B in AI orders; best session in company history triggered broad enterprise AI rotation." },
      { rank: 2, name: "EchoStar", sector: "Telecommunications", change: "+30.9%", reason: "Spectrum assets attracted strategic interest amid satellite broadband consolidation themes." },
      { rank: 3, name: "Cogent Communications", sector: "Telecom / Networking", change: "+18.6%", reason: "AI-driven data centre interconnect demand lifted fibre and internet backbone names." },
      { rank: 4, name: "AmeriCold Realty", sector: "Real Estate / Cold Storage", change: "+18.4%", reason: "GLP-1 demand shift narrative revalued cold chain infrastructure as food distribution patterns evolve." },
      { rank: 5, name: "Micron Technology", sector: "Semiconductors / Memory", change: "+15.0%", reason: "Broke through $1 trillion market cap; UBS flagged 100%+ upside; HBM sold out for multiple quarters." },
      { rank: 6, name: "ServiceNow", sector: "Enterprise Software / AI", change: "+14.0%", reason: "Q1 beat with 22% subscription revenue growth; AI workflow products seeing broad adoption; Dell results catalysed enterprise AI rotation." },
      { rank: 7, name: "Exail Technologies", sector: "EU Defence / Robotics", change: "+13.2%", reason: "European defence spending wave and drone/maritime autonomous systems demand drove contract wins." },
      { rank: 8, name: "Palantir", sector: "AI Software / Defence Tech", change: "+9.2%", reason: "Q1 2026 revenue +85% YoY to $1.63B; raised full-year guidance to $7.65B; US government and commercial AI contracts accelerating." },
      { rank: 9, name: "CrowdStrike", sector: "Cybersecurity", change: "+8.9%", reason: "Pre-earnings analyst upgrades from Jefferies ($775 target), Oppenheimer ($750), Wedbush ($700) ahead of June 3 results." },
      { rank: 10, name: "Microsoft", sector: "Technology / Cloud / AI", change: "+5.5%", reason: "Azure AI revenue surpassed $37B annualised run rate (+123% YoY); strong enterprise demand reinforced by Dell ecosystem read-through." },
      { rank: 11, name: "Rheinmetall", sector: "EU Defence", change: "+4.2%", reason: "European defence budget expansion narrative sustained; €73B order backlog [signed contracts not yet completed] provides multi-year revenue visibility." },
      { rank: 12, name: "Novo Nordisk", sector: "Healthcare / GLP-1", change: "+3.8%", reason: "CHMP positive opinion recommending EU approval of oral Wegovy; >1 million US users in first four months post-launch." },
      { rank: 13, name: "Global Ship Lease", sector: "Shipping / Containers", change: "+3.5%", reason: "Q1 2026 charter utilisation at 98.2%; container spot rates rose for fourth consecutive week per Drewry World Container Index." },
      { rank: 14, name: "Broadcom", sector: "Semiconductors / Networking", change: "+3.2%", reason: "Pre-earnings momentum ahead of June 5 results; custom AI ASIC pipeline from major hyperscalers remains intact." },
      { rank: 15, name: "UnitedHealth Group", sector: "Healthcare / Managed Care", change: "+2.8%", reason: "Recovery from March lows continued; $1.5B AI investment in 2026 repositioned as AI healthcare play; consensus Buy rating." },
      { rank: 16, name: "Alphabet", sector: "Technology / Cloud / AI", change: "+2.5%", reason: "Google Cloud Q1 revenue +63% to $20B, fastest growth since IPO; Gemini AI traction across enterprise and consumer." },
      { rank: 17, name: "Interactive Brokers", sector: "Financial Services / Brokers", change: "+2.3%", reason: "Retail participation in market hitting highs; platform activity surging as ninth straight weekly gain drew new accounts." },
      { rank: 18, name: "Booking Holdings", sector: "Consumer / Travel", change: "+2.1%", reason: "Summer travel demand robust; AI-powered trip planning tools driving conversion rates; international travel demand firm." },
      { rank: 19, name: "Meta Platforms", sector: "Technology / Social / AI", change: "+2.0%", reason: "Llama AI model adoption accelerating; advertising revenue benefiting from AI-driven targeting improvements; capex raised to $125–145B." },
      { rank: 20, name: "Danaos Corporation", sector: "Shipping / Containers", change: "+1.9%", reason: "Container shipping tightness from trade rerouting and tariff front-loading sustained elevated charter rates." }
    ],
    losers: [
      { rank: 1, name: "Marvell Technology", sector: "Semiconductors", change: "-14.6%", reason: "\"Sell the news\" reaction post-earnings despite beat; reports of potential hyperscaler customer losses and analyst downgrade rattled sentiment after 200%+ YTD run." },
      { rank: 2, name: "MercadoLibre", sector: "EM E-Commerce / Fintech", change: "-14.0%", reason: "Margin pressure from aggressive logistics investment hit investor sentiment; FX headwinds from LatAm currency volatility weighed on USD-reported results." },
      { rank: 3, name: "Alnylam Pharmaceuticals", sector: "Healthcare / Biotech", change: "-13.2%", reason: "Clinical trial setback in RNA interference pipeline dampened enthusiasm; sector rotation out of biotech into AI-adjacent names." },
      { rank: 4, name: "Compass Minerals", sector: "Materials / Mining", change: "-14.5%", reason: "Commodity price softness and demand concerns from slower-than-expected industrial recovery weighed on specialty minerals." },
      { rank: 5, name: "Tesla", sector: "Consumer / EV / AI", change: "-3.5%", reason: "Q1 2026 GAAP operating income only $0.9B on $22.4B revenue; Musk distraction concerns resurfaced; EV demand growth slower than energy storage growth." },
      { rank: 6, name: "Starbucks", sector: "Consumer Discretionary", change: "-2.8%", reason: "Turnaround slower than expected; same-store sales recovery muted; pricing power constrained by consumer spending fatigue." },
      { rank: 7, name: "Celsius Holdings", sector: "Consumer / Beverages", change: "-2.5%", reason: "Energy drink category competition intensifying; distribution gains from Pepsi partnership decelerating versus earlier growth." },
      { rank: 8, name: "LVMH", sector: "Consumer Luxury", change: "-2.3%", reason: "China luxury demand recovery remains sluggish; stronger EUR hurts USD and CNY-denominated revenue when translated back." },
      { rank: 9, name: "Alibaba", sector: "EM Technology / E-Commerce", change: "-3.2%", reason: "Q4 FY26 revenue up only 3% YoY; cloud growth insufficient to offset core commerce slowdown; US-China tech tension overhang." },
      { rank: 10, name: "Hello Group", sector: "EM / Social Media China", change: "-4.1%", reason: "China consumer confidence weakness and regulatory uncertainty in social/dating platforms dragged on the name." },
      { rank: 11, name: "Ulta Beauty", sector: "Consumer / Retail", change: "-2.2%", reason: "Prestige beauty category showing signs of normalisation after post-COVID growth surge; competition from mass beauty channel intensifying." },
      { rank: 12, name: "Grab Holdings", sector: "EM / Southeast Asia / Superapp", change: "-2.0%", reason: "Profitability timeline questioned by investors; Southeast Asian macro softness dampening food delivery and ride-hail volumes." },
      { rank: 13, name: "StealthGas", sector: "Shipping / LPG", change: "-3.8%", reason: "LPG [liquefied petroleum gas] charter rate [daily rental price for one ship] softness as Middle East supply route normalisation reduced premium rates." },
      { rank: 14, name: "Chewy", sector: "Consumer / Pet E-Commerce", change: "-1.8%", reason: "Pet spending growth moderating as consumers trade down; subscription model churn slightly elevated." },
      { rank: 15, name: "Vistra Energy", sector: "Energy / Power / AI Data Centres", change: "-1.5%", reason: "Profit-taking after strong AI data centre power demand run; regulatory uncertainty around nuclear PPA [power purchase agreement] deals." },
      { rank: 16, name: "Shopify", sector: "Technology / E-Commerce", change: "-1.4%", reason: "Tariff uncertainty weighing on SMB merchant sentiment; cross-border commerce volumes impacted by US-EU trade tensions." },
      { rank: 17, name: "PayPal", sector: "Fintech / Payments", change: "-1.3%", reason: "Competition from Apple Pay and buy-now-pay-later platforms; margin pressure from branded checkout investments." },
      { rank: 18, name: "Gold Fields", sector: "EM / Mining / Gold", change: "-1.2%", reason: "Gold price consolidation after recent highs; South African operational cost concerns and currency volatility." },
      { rank: 19, name: "Instacart (Maplebear)", sector: "Consumer / Grocery Delivery", change: "-1.1%", reason: "Grocery delivery market growth slowing; advertising monetisation timeline extended; competition from Walmart+ and Amazon." },
      { rank: 20, name: "iShares MSCI China", sector: "ETF / EM / China", change: "-2.1%", reason: "China tech and consumer weakness; Alibaba miss reinforced caution on Chinese equity exposure; geopolitical premium re-emerging." }
    ]
  },

  sectors: [
    { name: "US Technology", change: "+3.4%", direction: "up", driver: "Dell blowout and ServiceNow enterprise AI rotation confirmed AI monetisation thesis; Nasdaq 100 led all indices for the week." },
    { name: "US Healthcare", change: "-0.6%", direction: "down", driver: "Alnylam biotech selloff and ongoing DOJ UnitedHealth investigation overhang weighed despite UNH individual stock strength." },
    { name: "US Financials", change: "+0.6%", direction: "up", driver: "Rising equity markets boosted trading revenues and AUM at brokerages; credit conditions stable." },
    { name: "US Industrials", change: "+1.8%", direction: "up", driver: "AI server supply chain (cooling, power, racks) gained on Dell read-through; defence contractors steady." },
    { name: "US Energy", change: "+0.4%", direction: "up", driver: "Oil prices stabilised near $70 on US-Iran talks signalling; data centre power demand kept utilities and power names bid." },
    { name: "US Consumer Discretionary", change: "+1.2%", direction: "up", driver: "Travel names strong; EV segment weighed by Tesla; overall sector carried by AI-adjacent consumer platforms." },
    { name: "US Consumer Staples", change: "+0.3%", direction: "up", driver: "Defensive rotation limited as risk appetite dominant; GLP-1 food shift thesis created selective tailwinds." },
    { name: "US Materials", change: "-0.8%", direction: "down", driver: "Commodity softness and China demand uncertainty weighed on metals and mining names." },
    { name: "US Real Estate", change: "+1.5%", direction: "up", driver: "Data centre REITs rallied on AI infrastructure demand; rate stability supported the sector broadly." },
    { name: "US Utilities", change: "+0.9%", direction: "up", driver: "AI data centre power demand narrative sustained; nuclear and natural gas utility names bid on PPA deal flow." },
    { name: "US Comm Services", change: "+2.1%", direction: "up", driver: "Alphabet cloud strength and Meta AI advertising momentum carried the sector; streaming steady." },
    { name: "EU Defence", change: "+1.8%", direction: "up", driver: "European defence budget commitments maintained; Rheinmetall +4.2%, Exail +13.2%; consolidation narrative after Q1 earnings volatility." },
    { name: "EU Banks", change: "+0.5%", direction: "up", driver: "ECB rate path stable; NIM [spread between what bank earns on loans vs pays on deposits] environment supportive; Spanish and French bank earnings solid." },
    { name: "EU Industrials", change: "+0.8%", direction: "up", driver: "German manufacturing PMI improved marginally; Siemens AI-factory order intake positive." },
    { name: "EU Luxury", change: "-1.0%", direction: "down", driver: "China luxury recovery slower than hoped; EUR strength a currency headwind for LVMH and peers." },
    { name: "EU Autos", change: "-0.4%", direction: "down", driver: "EV demand normalisaton and tariff uncertainty on US-EU trade weighed; Toyota yen exposure mixed." },
    { name: "EU Insurance", change: "+0.6%", direction: "up", driver: "Allianz and Munich Re catastrophe risk pricing remains elevated; investment portfolio returns improving with higher rates." }
  ],

  flows: [
    { label: "US Equities", amount: "+$18B", direction: "in", pct: 68, note: "Ninth consecutive weekly gain drew momentum and systematic strategy inflows; domestic equity ETFs led." },
    { label: "European Equities", amount: "+$9B", direction: "in", pct: 72, note: "EUR €26.5B in equity fund inflows YTD driven by ETFs; defensive-to-cyclical rotation within Europe continuing." },
    { label: "EM Equities", amount: "-$3B", direction: "out", pct: 35, note: "China weakness and MercadoLibre selloff prompted EM outflows; India and Southeast Asia partially offset." },
    { label: "Gold & Commodities", amount: "+$1B", direction: "in", pct: 45, note: "Gold held near record levels; commodity inflows modest as energy prices stabilised; VanEck Rare Earth ETF saw interest on China export control concern." },
    { label: "Fixed Income", amount: "+$13B", direction: "in", pct: 55, note: "Bond inflows continued as yield curve stable; taxable bond funds absorbed $11.5B; credit spreads tight." },
    { label: "Cash / Money Markets", amount: "-$17B", direction: "out", pct: 28, note: "Cash rotation into equities accelerating; money market outflows of $17B consistent with risk-on shift and improving equity sentiment." }
  ],

  trends: [
    { num: "01", title: "AI infrastructure entering the physical world", detail: "Dell Technologies' $43.8B quarterly revenue — up 88% YoY — with $24.4B in AI server orders confirmed that AI infrastructure spending is now creating massive real-world hardware revenues, not just software promises. ServiceNow's 14% post-earnings surge showed that enterprise workflow AI is being bought and deployed at scale across corporations. The AI trade is no longer just about chips: it is about racks, power, cooling, networking, and software layers.", status: "CONFIRMED", evidence: "Dell Q1 FY27 AI server revenue of $16.1B in a single quarter; ServiceNow Q1 subscription revenue +22% YoY driven by AI workflow product adoption.", type: "structural" },
    { num: "02", title: "Europe's strategic autonomy moment", detail: "EU defence spending commitments are translating into sustained order books for European defence primes. Rheinmetall's €73B backlog provides 5+ year revenue visibility. The consolidation in the sector post-Q1 earnings (Stoxx A&D -1.2% YTD vs Stoxx 600 +4.8%) creates a more selective opportunity set rather than broad sector exit. Exail Technologies +13.2% this week demonstrated that smaller, specialist autonomy plays are catching a wave of contracts.", status: "CONFIRMED", evidence: "Rheinmetall +4.2%, Exail Technologies +13.2%; EU member states maintaining 2%+ NATO commitments despite fiscal pressures.", type: "structural" },
    { num: "03", title: "Dollar hegemony softening", detail: "EUR/USD at 1.1668 remains near multi-year highs despite a modest weekly pullback from April's 1.19 peak. The Trump tariff regime — average effective tariff rate at 11.8% as of April 2026 — has structurally elevated inflation expectations and reduced confidence in US fiscal discipline. Foreign holders of US Treasuries are quietly reducing duration exposure. Gold's sustained elevation above prior highs is a parallel signal.", status: "UNCHANGED", evidence: "EUR/USD holding above 1.16 despite dollar stabilisation; tariff-related household tax impact of $1,500/year sustaining structural USD bearishness.", type: "structural" },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", detail: "Novo Nordisk's oral Wegovy received CHMP positive opinion for EU approval — the first oral GLP-1 in class in Europe — marking a pivotal commercial expansion. Over 1 million US patients began oral Wegovy in the first four months. The addressable market is expanding from injectable-tolerant patients to the entire obesity-eligible population. This reshapes food, retail, and healthcare supply chains beyond just pharma.", status: "CONFIRMED", evidence: "CHMP positive opinion for EU oral Wegovy; >1M US users in 4 months; Novo Nordisk targeting 2H 2026 for first non-US market launches.", type: "structural" },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", detail: "The Baltic Dry Index rose 20% in May 2026, reaching its highest level since December 2023. Container spot rates rose for the fourth consecutive week per Drewry's World Container Index. Trade rerouting from tariff-driven fragmentation is creating longer voyage distances (more ship-days per cargo unit), structurally supporting rate floors. Global Ship Lease reported Q1 2026 utilisation of 98.2%.", status: "CONFIRMED", evidence: "Baltic Dry Index +20% in May 2026; container spot rates up 4 consecutive weeks; GSL utilisation 98.2%; Drewry WCI upward streak continuing.", type: "cyclical" },
    { num: "06", title: "Retail cash rotation to equities building", detail: "European equity funds received €26.5B YTD with €21.8B via ETFs, while money markets lost €17.2B. In the US, equity ETFs absorbed $32.5B in a single week against mutual fund outflows. Interactive Brokers and Robinhood are seeing account opening acceleration as the ninth consecutive weekly gain draws retail back into equities. The EU payment-for-order-flow ban arriving June 2026 will structurally shift retail order flow to exchanges, deepening market participation.", status: "CONFIRMED", evidence: "European equity ETF inflows €21.8B YTD; US equity ETF net issuance $32.5B in one week; cash/money market outflows of $17B redirecting.", type: "structural" }
  ],

  executive: {
    biggest_mover: { name: "Dell Technologies", change: "+33.0%", reason: "Dell reported Q1 FY2027 revenue of $43.8 billion — up 88% year-over-year — crushing the $35.8B consensus estimate and booking $24.4 billion in AI server orders. The print confirmed that hyperscaler AI capex of $700B+ is flowing through to real hardware revenue, triggering a broad enterprise AI rotation that lifted ServiceNow, Palantir, CrowdStrike, and the entire AI software stack." },
    key_risk: { name: "Complacency at VIX 15.7 / Put-Call 0.39", reason: "With the VIX at a post-January low of 15.74 and the equity put/call ratio at an extreme 0.39, the market's hedge book [portfolio protection via options] is razor thin. A single unexpected event — a Fed surprise, a geopolitical flare-up, or a Mag7 guidance miss — would be amplified by the lack of protective positions. The ninth consecutive weekly gain increases the statistical probability of a near-term consolidation or shake-out." },
    conviction_call: { name: "ServiceNow (NOW)", observation: "ServiceNow's 14% move this week is not a one-off — it is evidence that enterprise AI software is entering a multi-year adoption cycle that mirrors the SaaS [software-as-a-service — cloud-based subscription software] wave of 2012–2018. The company's AI workflow products are now embedded in IT, HR, and customer operations across Fortune 500 companies. Unlike infrastructure plays that depend on hyperscaler capex, ServiceNow's revenue is sticky ARR [annual contracted subscription revenue] with 22% growth and expanding margins." },
    macro_pulse: { name: "S&P 500 Ninth Consecutive Weekly Gain", observation: "The S&P 500 closed at 7,580 — its ninth consecutive weekly advance and the longest winning streak since 2004 — driven entirely by forward earnings upgrades rather than P/E [price-to-earnings ratio] expansion. Technology earnings estimate revisions have been sharply positive since February, and the broader index forward earnings are up 14.4% YTD even as the P/E multiple compressed 4.6%, making this a fundamentals-driven rather than sentiment-driven rally." },
    tags: [
      { label: "EUR/USD: 1.1668 ↓", type: "amber" },
      { label: "Fed: Hold, watching tariff inflation", type: "amber" },
      { label: "ECB: Stable, rate path unchanged", type: "green" },
      { label: "Tariffs: 11.8% avg effective rate", type: "amber" },
      { label: "AI capex: $700B+ confirmed", type: "green" },
      { label: "EU defence: Consolidation, selective", type: "amber" },
      { label: "Semis: HBM supercycle intact", type: "green" },
      { label: "Shipping: Baltic Dry +20% in May", type: "green" }
    ]
  },

  macro: {
    us: "The US economy is navigating an unusual combination of strong corporate earnings and structurally higher tariff-driven inflation. The Trump administration's effective tariff rate of 11.8% (down from a Liberation Day peak but still the highest since 1993) is adding approximately $1,500 per US household in annual tax burden while contributing to import price inflation. The Fed remains on hold, watching whether tariff inflation proves transitory or becomes embedded in wage expectations. The real economy remains resilient: the S&P 500 has posted nine consecutive weekly gains, forward earnings are up 14.4% YTD, and AI infrastructure spending is creating a genuine demand boom for hardware, software, and energy. The US-Iran talks narrative provided a modest geopolitical tailwind. Key watch: June employment report and May PCE [Personal Consumption Expenditures — the Fed's preferred inflation measure] print.",
    europe: "Europe is in a two-speed recovery. The defence and industrial complex is structurally well-bid on the back of €800B+ in committed defence spending over the next decade, with Rheinmetall's €73B backlog and Exail's contract wins demonstrating real order flow. However, the broader Stoxx 600 is underperforming its defence sub-sector: autos face EV transition headwinds and US tariff exposure, luxury is weighed by sluggish China demand recovery, and the EUR's strength (EUR/USD above 1.16) is compressing export competitiveness. The ECB is holding rates stable with inflation returning toward target. European retail equity flows are accelerating — €26.5B YTD into equity ETFs — signalling that domestic investors are rotating from cash, a structural positive for European equity market depth.",
    asia: "Asia is a tale of two regions. Japan remains a key watch: the Bank of Japan is holding rates while TSMC's Kumamoto fab ramp creates a positive local employment and capex effect. Tokyo Electron and Renesas are benefiting from semiconductor supply chain localisation. In China, the picture is more complex: Alibaba's Q4 FY26 revenue grew only 3% YoY, consumer confidence remains subdued, and the US-China semiconductor technology gap remains a live geopolitical issue — although Huawei's LogicFolding announcement this week showed Beijing's determination to close it through unconventional architectural paths. South Korea is seeing its HBM supercycle delivering exceptional returns: Samsung flagged a 146% average selling price jump in Q1, and SK Hynix continues to dominate NVIDIA allocations. EM broadly was a mild net outflow week driven by China weakness, partially offset by India and Southeast Asia.",
    forward: "Key events next week: (1) CrowdStrike earnings June 3 — the first major cybersecurity test of whether enterprise security budgets are holding amid AI-driven network complexity; (2) US May ISM Manufacturing and Services PMI data — will determine whether tariff-related supply chain disruption is showing up in US output; (3) ECB meeting June 5 — rate hold expected but watch for any signals on quantitative tightening pace; (4) Eurozone CPI flash estimate — EUR/USD sensitive to any upside surprise; (5) Broadcom earnings June 5 — the most important read-through on custom AI ASIC [application-specific integrated circuit — chips designed for one specific task] demand from hyperscalers; if Broadcom guides above consensus, the AI infrastructure cycle gets another leg. Watch also for any US-China trade negotiation signals following the Huawei chip architecture announcement."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$313.69",
      change: "+1.8%",
      pe: "~35x",
      pe_plain: "paying 35 years of annual earnings",
      target: "$240–280",
      theme: "Services + AI integration",
      news: "Apple's fiscal Q2 2026 revenue was up 17% YoY with EPS up 22%, driven by services segment strength and iPhone 17 cycle contribution. AI integration in iOS 19 (Apple Intelligence) is driving upgrade cycle expectations. Apple continues to face questions about its AI differentiation versus Android/Google ecosystem.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Strong fundamentals and services moat, but trading at 35x PE [price-to-earnings] with consensus target 10–20% below current price suggests limited upside without a material AI monetisation catalyst."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$440.70",
      change: "+5.5%",
      pe: "~25x",
      pe_plain: "paying 25 years of annual earnings",
      target: "$560",
      theme: "Azure AI monetisation leader",
      news: "Azure AI revenue surpassed a $37B annualised run rate, up 123% YoY — the single most convincing AI monetisation data point among hyperscalers. Microsoft's Copilot integration across Office 365 is driving enterprise seat upsells. Dell's AI server blowout acted as a further Microsoft ecosystem read-through this week.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "The $37B AI annualised revenue run rate at 25x PE [price-to-earnings] is genuinely undervalued relative to the growth rate; closest to GARP [Growth at a Reasonable Price] in the Mag7."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$270.53",
      change: "+1.5%",
      pe: "~32x",
      pe_plain: "paying 32 years of annual earnings",
      target: "$310–340",
      theme: "AWS AI cloud + logistics AI",
      news: "AWS grew 28% YoY in Q1 — fastest pace in 15 quarters — with AI revenue growing triple digits. Amazon committed $200B in 2026 capex, the largest absolute number among hyperscalers. Trainium custom AI chips are gaining traction for training workloads, presenting a modest but growing challenge to NVIDIA.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "AWS triple-digit AI revenue growth with a 28% overall cloud growth rate at a 32x forward PE [price-to-earnings] offers the best risk-adjusted exposure to the cloud AI monetisation cycle."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$380.60",
      change: "+2.5%",
      pe: "~22x",
      pe_plain: "paying 22 years of annual earnings",
      target: "$220–250",
      theme: "Google Cloud AI fastest grower",
      news: "Google Cloud Q1 revenue surged 63% to $20B — the fastest growth rate since the company began separately reporting cloud results — driven by Gemini AI adoption across enterprise and consumer use cases. Alphabet raised full-year 2026 capex guidance to $175–185B. The AI search disruption risk remains a key debate, but Q1 showed no material search revenue decline.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Google Cloud at 63% growth and the cheapest Mag7 forward PE [price-to-earnings] of ~22x makes Alphabet the most compelling valuation case if AI search cannibalisation risk stays contained."
    },
    {
      name: "Meta Platforms",
      ticker: "META",
      price: "$624.06",
      change: "+2.0%",
      pe: "~28x",
      pe_plain: "paying 28 years of annual earnings",
      target: "$700–800",
      theme: "AI advertising + Llama open ecosystem",
      news: "Meta raised full-year 2026 capex to $125–145B — driven by higher component costs and additional data centre investment — signalling unrelenting commitment to AI infrastructure. Llama model family adoption is accelerating both internally (advertising AI) and externally as an open ecosystem play. AI-driven ad targeting improvements are producing measurable revenue per user gains.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Fundamentals remain strong but $624 is approaching the lower end of analyst targets; the capex increase raises long-term ROI [return on investment] questions that will take 2–3 quarters to resolve."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$216.24",
      change: "+3.2%",
      pe: "~29x",
      pe_plain: "paying 29 years of annual earnings",
      target: "$280–300",
      theme: "AI GPU monopoly + Vera Rubin cycle",
      news: "Nvidia reported Q1 2026 revenue of $81.6B (vs $79.2B est), EPS of $1.87 (vs $1.78 est), and guided Q2 to $91B — up 95% YoY. The stock hit an all-time high of $236 in May before pulling back to $216. Rothschild & Co Redburn raised its target to $300. The next-gen Vera Rubin architecture is generating significant investor excitement with expected performance leaps for AI training workloads.",
      earnings: "Late August 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "At 29x forward PE [price-to-earnings] with 95% YoY revenue guidance and a confirmed $700B+ hyperscaler capex cycle pointing at GPU demand, Nvidia remains the highest-conviction AI infrastructure play."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$438.78",
      change: "-3.5%",
      pe: "~120x",
      pe_plain: "paying approximately 120 years of annual earnings",
      target: "$280–400",
      theme: "EV + FSD + Energy storage",
      news: "Tesla Q1 2026 delivered GAAP operating income of only $0.9B on $22.4B revenue, with GAAP gross margin at 21.1% — a meaningful improvement but still below historical peaks. Musk's continued distraction with political activities remains an overhang. Energy storage (Megapack) is growing faster than automotive and may become the primary thesis. Next earnings July 22, 2026.",
      earnings: "July 22, 2026",
      earnings_proximity: "upcoming",
      verdict: "CAUTION",
      verdict_reason: "At ~120x earnings for a company with decelerating EV volume growth and a distracted CEO, the risk-reward is asymmetrically negative unless FSD [Full Self-Driving] or energy storage delivers a step-change in Q2."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      status: "CONFIRMED",
      evidence: "Dell Technologies' Q1 FY27 AI server revenue of $16.1B in a single quarter — up 88% YoY — with $24.4B in new AI orders is the definitive proof point that AI capex is creating real hardware revenues at scale.",
      instruments: "Nvidia, Dell, ServiceNow, Palantir, Microsoft, CrowdStrike",
      highlights: [
        { name: "Dell Technologies", change: "+33.0%", note: "Best single-session gain in company history following blowout Q1 results; $24.4B in AI server orders and $16.1B recognised revenue confirmed physical AI infrastructure demand is real and accelerating." },
        { name: "ServiceNow", change: "+14.0%", note: "Enterprise AI workflow software adoption confirmed at scale; 22% subscription revenue growth and full-year guidance raise shows AI is now a deployment priority, not a pilot project, for Fortune 500 companies." },
        { name: "Palantir", change: "+9.2%", note: "Q1 revenue +85% YoY to $1.63B; US government and commercial AI contract momentum building; full-year guidance raised to $7.65B implying ~71% growth — AI data analytics is becoming critical infrastructure." },
        { name: "Nvidia", change: "+3.2%", note: "Q1 revenue $81.6B with $91B Q2 guidance (+95% YoY) confirmed GPU [graphics processing unit — the chip type powering AI training] demand remains insatiable despite $700B hyperscaler budget; Vera Rubin next-gen architecture in development." }
      ]
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      status: "CONFIRMED",
      evidence: "Rheinmetall's €73B order backlog [signed contracts not yet completed] provides multi-year revenue visibility; Exail Technologies +13.2% on autonomous maritime/drone system contract wins; EU defence consolidation favours quality operators.",
      instruments: "Rheinmetall, Safran, Thales, ASML, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall", change: "+4.2%", note: "Despite sector consolidation noise, Rheinmetall's €73B backlog confirms it remains the primary beneficiary of European ground forces rearmament; ammunition and armoured vehicle capacity expansion on track." },
        { name: "Exail Technologies", change: "+13.2%", note: "Specialist autonomous naval and drone system maker benefiting from the segment of EU defence spending that goes to new-generation capabilities rather than legacy platforms — a faster-growing and less crowded market." },
        { name: "ASML", change: "+1.5%", note: "Indirectly benefits from European industrial sovereignty narrative; EUV [extreme ultraviolet lithography — the only way to make sub-7nm chips at volume] monopoly remains intact despite Huawei's theoretical LogicFolding architecture announcement." },
        { name: "VanEck Defense ETF", change: "+1.8%", note: "Broad EU defence ETF participation reflects institutional allocation to the theme; US names like HEICO and Howmet also contributing given NATO-wide procurement surge." }
      ]
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      status: "UNCHANGED",
      evidence: "EUR/USD holding above 1.16 despite dollar stabilisation attempt; US effective tariff rate at 11.8% — highest since 1993 — sustains structural deficit in US trade credibility; gold consolidating near record highs.",
      instruments: "EUR/USD, iShares Physical Gold, MercadoLibre, iShares MSCI Brazil",
      highlights: [
        { name: "EUR/USD", change: "-0.5%", note: "The weekly pullback from 1.1730 to 1.1668 reflects short-term dollar stabilisation as US-Iran talks eased geopolitical risk premium; but the structural erosion trend — EUR up 2.8% over 12 months — remains intact as long as tariffs persist." },
        { name: "iShares Physical Gold", change: "+0.8%", note: "Gold consolidating near record highs; central bank purchasing from non-USD-aligned nations continues to provide structural bid; dollar softness amplifies non-USD investor returns." },
        { name: "MercadoLibre", change: "-14.0%", note: "The sharp weekly decline illustrates the double-edged nature of dollar softening for EM [emerging market] names: while USD weakness supports local currency purchasing power, margin pressure and profit-taking dominated this week." },
        { name: "Trip.com", change: "+1.2%", note: "Chinese outbound and intra-Asia travel recovering; benefits from USD weakness making Asia travel relatively cheaper for non-USD tourists." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      status: "CONFIRMED",
      evidence: "CHMP positive opinion recommending EU approval of oral Wegovy (semaglutide 25mg) — the first oral GLP-1 in class for weight management in Europe — dramatically expands addressable market to patients unwilling to self-inject.",
      instruments: "Novo Nordisk, UnitedHealth, McKesson, GE HealthCare",
      highlights: [
        { name: "Novo Nordisk", change: "+3.8%", note: "EU CHMP positive opinion for oral Wegovy is a pivotal moment: injectable GLP-1 [glucagon-like peptide-1 — a hormone that regulates appetite and blood sugar] reaches maybe 20% of the eligible population; oral reaches the full 100%. Over 1 million US patients started oral Wegovy in the first four months of launch." },
        { name: "UnitedHealth Group", change: "+2.8%", note: "Recovery from March 2026 lows continues as GLP-1 cost management strategies mature; company's $1.5B AI investment in 2026 is also repositioning UNH as a healthcare AI operator, improving sentiment." },
        { name: "McKesson", change: "+1.2%", note: "Pharmaceutical distribution play on GLP-1 volume growth; as oral semaglutide reaches pharmacy channels (vs specialist injection centres), McKesson's distribution network becomes a direct beneficiary." },
        { name: "GE HealthCare", change: "+0.9%", note: "GLP-1 patients require more imaging (cardiac, musculoskeletal changes from rapid weight loss); GE HealthCare's imaging installed base stands to see volume growth from the expanding treated population." }
      ]
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      status: "CONFIRMED",
      evidence: "Baltic Dry Index +20% in May 2026, highest since December 2023; container spot rates rising for fourth consecutive week; Global Ship Lease Q1 utilisation 98.2%; trade rerouting creating longer voyage distances that structurally support rate floors.",
      instruments: "Global Ship Lease, International Seaways, Danaos, Tsakos Energy Navigation",
      highlights: [
        { name: "Global Ship Lease", change: "+3.5%", note: "Q1 2026 utilisation of 98.2% vs 93.7% in prior year; period-on-period revenue increase driven by higher charter rates [daily rental price for one ship] on renewals and newly acquired vessels; container sector benefiting from trade rerouting." },
        { name: "Danaos Corporation", change: "+1.9%", note: "Container shipping tightness from tariff-driven trade fragmentation creating longer voyage distances — more ship-days per cargo unit — providing structural rate support beyond typical cyclical drivers." },
        { name: "International Seaways", change: "+1.2%", note: "Tanker segment benefiting from energy trade rerouting as tariff and sanctions regimes fragment traditional oil trade routes; Middle East-Asia-Europe routes lengthening." },
        { name: "Tsakos Energy Navigation", change: "+1.0%", note: "Oil tanker charter rates supportive on continued Middle East trade complexity; company's diversified fleet across crude and product tankers provides resilience to route-specific disruptions." }
      ]
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      status: "CONFIRMED",
      evidence: "European equity ETF inflows of €21.8B YTD with money markets losing €17.2B; US equity ETF net issuance of $32.5B in one week; ninth consecutive S&P 500 weekly gain attracting momentum-driven retail participation.",
      instruments: "iShares Core MSCI Europe, Interactive Brokers, Robinhood, iShares MSCI ACWI",
      highlights: [
        { name: "Interactive Brokers", change: "+2.3%", note: "Retail participation surge and record account openings benefiting the discount broker; IBKR's global reach means it captures both US and European retail rotation into equities simultaneously." },
        { name: "Robinhood", change: "+1.5%", note: "Ninth consecutive weekly gain and AI stock hype cycle drawing retail investors back to equity markets; options trading volume also elevated given low VIX environment creating cheap call options." },
        { name: "iShares Core MSCI Europe", change: "+0.9%", note: "European equity ETF inflows of €21.8B YTD confirm structural retail rotation; EU Retail Investment Strategy regulatory changes arriving June 2026 will deepen this trend by redirecting order flow to exchanges." },
        { name: "iShares MSCI ACWI", change: "+1.2%", note: "Global equity ETF captures both US and international retail rotation; ACWI [All Country World Index — tracks stocks across 47 developed and emerging market countries] inflows reflect diversification away from pure US concentration." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Dell Technologies",
      sector: "Technology / AI Infrastructure",
      headline: "Dell Q1 FY27 revenue +88% YoY to $43.8B; $24.4B in AI server orders; stock +33% in single session",
      detail: "Dell's earnings are the most important confirmation this year that AI infrastructure capex [capital expenditure — money spent building physical assets] is producing real revenue, not just promises. $16.1B in AI server revenue in one quarter means the hyperscaler $700B commitment is flowing through the supply chain to hardware vendors at scale. The enterprise AI rotation it triggered — ServiceNow +14%, Palantir +9.2% — confirms this is a system-wide event, not a one-company beat. Implication for investors: AI infrastructure adjacencies (power, cooling, networking, software) are all re-rating.",
      tag: "BULL"
    },
    {
      num: "02",
      company: "Huawei Technologies",
      sector: "Semiconductors / China Tech",
      headline: "Huawei unveils LogicFolding architecture claiming transistor density equivalent to 1.4nm process within 5 years; SMIC shares +7.6%",
      detail: "Huawei's announcement of the Tau Scaling Law — focusing on signal propagation speed rather than transistor miniaturisation — is a genuine architectural innovation attempting to route around US export controls on advanced lithography. While China's proven chipmaking capability remains at ~7nm and 1.4nm equivalence is 5 years away, the announcement demonstrates Beijing's intent to find unconventional paths. This is AMBER for ASML [which monopolises EUV — extreme ultraviolet lithography machines]: the premium embedded in its geopolitical moat [competitive advantage that prevents competitors from eroding profits] is not immediately threatened, but the long-term moat duration is now in question.",
      tag: "WATCH"
    },
    {
      num: "03",
      company: "Novo Nordisk",
      sector: "Healthcare / Pharmaceuticals",
      headline: "EU CHMP recommends approval of oral Wegovy — first oral GLP-1 for obesity in Europe; >1M US users in 4 months post-launch",
      detail: "The shift from injectable to oral GLP-1 [glucagon-like peptide-1 receptor agonist — a class of drugs that mimic a gut hormone to suppress appetite and regulate blood sugar] is the biggest expansion of the total addressable market since the original Ozempic/Wegovy launch. Injectable penetration is constrained by needle aversion, prescriber training, and storage requirements — oral eliminates all three barriers. With 1 million US starters in 4 months, the velocity is already exceeding early injectable adoption. The EU CHMP positive opinion sets up a formal EU approval within weeks. This is not a pharma story anymore — it is an infrastructure story for food, retail, insurance, and healthcare distribution.",
      tag: "BULL"
    },
    {
      num: "04",
      company: "Micron Technology",
      sector: "Semiconductors / Memory",
      headline: "Micron breaks $1 trillion market cap; UBS flags 100%+ upside; HBM sold out for multiple quarters ahead",
      detail: "Micron crossing the $1 trillion market cap threshold while announcing it is sold out of HBM [high-bandwidth memory — the specialised memory chips stacked on AI GPUs] for multiple quarters ahead is a landmark for the memory sector's transformation from commodity cycle to AI infrastructure play. With SK Hynix projecting 30% annual HBM market growth through 2030 and Samsung's ASP [average selling price] up 146% in Q1 2026, the memory supercycle has duration. Micron's relatively lower share of HBM vs SK Hynix means there is meaningful catch-up upside as its HBM4 volumes ramp.",
      tag: "BULL"
    },
    {
      num: "05",
      company: "ServiceNow",
      sector: "Enterprise Software / AI",
      headline: "ServiceNow +14% on Dell AI read-through; Q1 subscription revenue +22% YoY; AI workflow adoption confirmed at enterprise scale",
      detail: "The most interesting aspect of ServiceNow's move is not the 14% gain — it is what it confirms about enterprise AI adoption timelines. When Dell shows that $24B of AI infrastructure orders are flowing, it means corporate IT departments are deploying, and when they deploy, they need workflow orchestration software to manage AI agents and automation. ServiceNow's NOW platform sits directly in that seat. The company's ARR [annual recurring revenue — annualised value of active subscriptions] growth at 22% with expanding margins means the AI workflow layer is one of the few software categories growing faster as AI spending increases, not slower.",
      tag: "BULL"
    },
    {
      num: "06",
      company: "TSMC",
      sector: "Semiconductors / Advanced Packaging",
      headline: "TSMC CoWoS capacity expanding from 35K to 130K wafers/month by end-2026; NVIDIA has reserved most available allocation",
      detail: "TSMC's CoWoS [Chip-on-Wafer-on-Substrate — a packaging technology that connects multiple chips and high-bandwidth memory into a single unit] capacity is nearly quadrupling in 2026. This is the single most consequential supply chain expansion in AI hardware because CoWoS is the physical assembly step that combines GPU [graphics processing unit] dies with HBM [high-bandwidth memory] — without it, no AI accelerator ships. NVIDIA has reserved the bulk of the allocation, which means competitors (AMD, custom hyperscaler silicon) are constrained by packaging, not just chip design. The expansion also benefits ASE and Amkor who handle outsourced packaging steps.",
      tag: "BULL"
    },
    {
      num: "07",
      company: "UnitedHealth Group",
      sector: "Healthcare / Managed Care",
      headline: "UNH investing $1.5B in AI in 2026; up 47% from March lows; DOJ investigation overhang partially offset by AI repositioning narrative",
      detail: "UnitedHealth's transformation narrative — from DOJ-investigation-plagued insurer to AI-powered healthcare operator — gained credibility this week as analysts noted the company's $1.5B AI investment split between Optum Insight's AI-first software and enterprise-wide claims/prior-authorisation automation. The 47% recovery from March 2026 lows reflects both the earnings beat and the repositioning. Key risk: the DOJ investigation into Medicare Advantage coding practices has not been resolved. Key opportunity: if AI-driven prior authorisation reduces medical cost ratio [the percentage of premium revenue spent on medical claims], margin recovery could be faster than the market currently prices.",
      tag: "WATCH"
    },
    {
      num: "08",
      company: "Global Ship Lease / Drewry",
      sector: "Shipping / Containers",
      headline: "Container spot rates up 4 consecutive weeks per Drewry WCI; Baltic Dry +20% in May; trade fragmentation structurally elevating shipping demand",
      detail: "The four-week consecutive rise in container spot rates — against a backdrop of tariff-driven trade rerouting — confirms that trade fragmentation is not just a geopolitical narrative but a real shipping market driver. When tariffs redirect cargo from direct US-China routes to indirect routes via Vietnam, Mexico, or Eastern Europe, the same cargo volume requires more ship-days, structurally raising demand. The Baltic Dry Index's 20% May gain reflects the same dynamic in bulk commodities. Container shipping companies with locked-in long-term charter contracts (Global Ship Lease, Danaos) are less exposed to spot volatility while still benefiting from the secular trend.",
      tag: "BULL"
    }
  ],

  risers: [],

  ai_trade: {
    status: "INTACT",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings — a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "GREEN",
        finding: "All four hyperscalers raised or maintained 2026 capex guidance: Amazon $200B, Microsoft $190B, Google $175-185B, Meta $125-145B — aggregate $700B+, up 77% YoY. Three of the four raised guidance during Q1 earnings; only Amazon held because it had pre-announced $200B in February.",
        implication: "Semiconductor and AI infrastructure names have 12-18 months of locked demand visibility; no capex softening signals anywhere in the hyperscaler language."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "HBM memory prices rose 18.7% month-on-month and 165.5% year-on-year through early May 2026. Samsung flagged a 146% ASP [average selling price] jump in Q1; SK Hynix reported mid-60% DRAM gains. TrendForce HBM Market Bulletin (May 13) confirmed supercycle pricing with no plateau signals.",
        implication: "Memory margin guidance across Samsung, SK Hynix, and Micron should remain elevated through at least Q3 2026; no preemptive margin cut signals warranted."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "GREEN",
        finding: "Google Cloud +63%, Azure +39% (AI revenue $37B ARR +123%), AWS +28% (AI triple digits YoY) — all three cloud segments are growing faster than the market expected while capex commitments are being raised. The capex-to-revenue gap is closing, not widening.",
        implication: "The bubble signal is not triggering; AI revenue is accelerating in tandem with infrastructure investment, validating the build-out thesis rather than exposing speculative excess."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "GREEN",
        finding: "S&P 500 forward earnings are up 14.4% YTD while the forward P/E [price-to-earnings ratio] has compressed 4.6%. The nine-week rally is entirely earnings-revision-driven, not multiple expansion. Tech sector estimates have been revised sharply higher since mid-February. Mag7 average forward P/E near 28x is at its lowest premium relative to the broader S&P 500 in a decade.",
        implication: "This is a fundamentals-driven rally, not a sentiment bubble — the most durable type of advance. Corrections would be buying opportunities in this regime, not trend breaks."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "Huawei unveiled the LogicFolding / Tau Scaling Law architecture on May 25, claiming transistor density equivalent to 1.4nm processes within 5 years via signal propagation optimisation rather than lithography miniaturisation. SMIC shares rose 7.6% on the announcement. China's proven capability remains at ~7nm but the architectural innovation direction is credible enough to warrant monitoring.",
        implication: "Geopolitical moat premiums in ASML, NVIDIA, and TSMC are not immediately threatened — 5 years is a long horizon and the claim is unverified — but the discount rate on those premiums should begin rising incrementally. AMBER, not RED."
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
        finding: "Samsung flagged 146% ASP [average selling price] jump in Q1 2026; SK Hynix reporting mid-60% DRAM gains. HBM supercycle in full force. Samsung began HBM4 volume shipments in February on its 10nm-class 1c process. No strike or production disruption signals this week. Both companies cautious on capacity expansion, which supports pricing discipline.",
        implication: "Korea HBM production is stable and profitable at unprecedented levels; no rotation trigger this week. Monitor Samsung yield and capacity share vs SK Hynix on HBM4 transition."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "BOJ holding rates stable — no surprise hike signal this week. TSMC Kumamoto fab ramp creating positive local employment effects. Tokyo Electron benefiting from AI-driven equipment demand. No JPY carry unwind [sudden forced liquidation of yen-funded trades] signals.",
        implication: "Japan semis and TSMC Kumamoto stable; key watch remains BOJ meeting calendar — any rate surprise is a same-day tech selloff risk via carry unwind mechanics."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS capacity expanding 4x from 35K to 130K wafers/month by end-2026 — positive for AI chip supply relief. However, Huawei's LogicFolding announcement this week raises the spectre of architectural workarounds to US controls. No rare earth export control escalation this week, but the mechanism remains available to Beijing. SMIC +7.6% on Huawei news.",
        implication: "CoWoS expansion is bullish for AI supply chain; Huawei architecture announcement is AMBER for geopolitical premium sustainability in ASML/TSMC/NVIDIA. Both signals elevated this week — hence WATCH status."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "GREEN",
        finding: "No new export control announcements this week. CHIPS Act disbursements proceeding on schedule. TSMC Arizona construction progressing. US-Iran talks narrative suggests geopolitical temperature slightly lower, reducing near-term risk of escalatory export control expansion. NVIDIA secured most of TSMC's CoWoS allocation, reinforcing US-based AI supply chain dominance.",
        implication: "Stable US policy environment is constructive for semiconductor supply chain investment; watch for any China-Taiwan geopolitical escalation that could trigger rapid export control response."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "Huawei's LogicFolding / Tau Scaling Law announcement claims 1.4nm-equivalent transistor density within 5 years without EUV, by optimising signal propagation rather than shrinking transistors. If credible, this is not a lithography threat but an architectural workaround. SMIC +7.6% on the news. SMEE itself remains at ~28nm conventional capability.",
        implication: "ASML EUV moat is not immediately threatened; SMEE at 28nm is not competitive with 5nm-class volume. However, if Huawei's architectural approach delivers meaningful performance at 7nm-class, the addressable market for EUV in China shrinks. Discount rate on ASML geopolitical premium should tick up modestly — hence AMBER."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix and Samsung maintaining dominant HBM allocation to NVIDIA; Micron sold out of HBM for multiple quarters ahead but from a smaller base. No Samsung yield or production disruption reported this week. HBM4 transition underway with Samsung beginning volume shipments. Micron's $1T market cap milestone reflects growing investor confidence in its HBM ramp.",
        implication: "SK Hynix + Samsung holding >90% HBM share; Micron's ramp is a gradual share gain story, not a sudden disruption. Monitor Micron's June 24 earnings for HBM allocation data — any NVIDIA share gain signal would be a meaningful rotation trigger within the memory sector."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "AWS Trainium is gaining traction for training workloads and Amazon explicitly mentioned it in Q1 commentary. However, Google Cloud +63%, AWS +28%, and Azure +39% growth rates suggest hyperscalers are deploying both custom silicon AND NVIDIA GPUs simultaneously — not substituting one for the other. NVIDIA Q2 guidance of $91B (+95% YoY) shows no demand cannibalisation signal.",
        implication: "Custom silicon remains an inference-heavy and specific-workload tool; general training remains NVIDIA-dominated. No >10% training shift signal this week. NVIDIA TAM ceiling debate is a 2027-2028 story, not 2026."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS capacity expanding 4x to 130K wafers/month by end-2026; NVIDIA has reserved the majority of available allocation. TSMC has outsourced some steps to ASE and Amkor, but TSMC remains the only credible option for volume AI GPU packaging at yield. No Samsung or Amkor announcement of CoWoS-equivalent capability at competitive yield.",
        implication: "TSMC CoWoS monopoly intact for 2026; the capacity expansion itself is the relief valve — not competitive alternatives. TSMC packaging pricing power sustained through at least end of year."
      }
    ]
  }

};
