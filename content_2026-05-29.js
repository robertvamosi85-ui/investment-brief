const BRIEF = {

  meta: {
    date: "Thursday, May 29, 2026",
    eurusd: "1.1651",
    eurusd_direction: "rising",
    eurusd_driver: "The euro has strengthened on a combination of ECB hawkishness — markets pricing an 86% probability of a June rate hike — and persistent USD weakness driven by stagflationary PCE data (3.8% YoY in April) that erases Fed cut expectations while stoking dollar-credibility concerns.",
    eurusd_outlook: "EUR/USD is expected to hold in the 1.16-1.19 range next week with upside bias ahead of the June 11 ECB meeting; USD positions face headwinds if the new Fed Chair signals a dovish pivot or PCE stays elevated.",
    eurusd_weekly_change: "+0.54%"
  },

  vitals: {
    fear_greed: { value: 61, last_week: 52, label: "Greed", interpretation: "The index moved from Neutral to Greed territory this week, driven by record S&P 500 and Nasdaq closes and continued AI capex announcements. A reading of 61 is not extreme — it suggests momentum but not euphoria. Markets are pricing good news; the downside risk is that any negative surprise (Fed, inflation, geopolitics) hits harder from greed than from neutral." },
    vix: { value: 15.74, last_week: 18.2, label: "Calm", interpretation: "VIX fell sharply from last week's elevated level, reflecting the relief rally as markets digested the Samsung strike resolution and Iran peace-deal speculation. A sub-16 VIX is historically associated with complacency risk — options are cheap, so tail hedges are underpriced. The gap between macro uncertainty (hot PCE, Iran war) and low vol is notable." },
    put_call: { value: 0.55, last_week: 0.68, label: "Bullish tilt", interpretation: "Equity put/call at 0.55 signals significant call-side positioning, consistent with a momentum-chasing market near all-time highs. The drop from 0.68 last week reflects fading hedging demand as the Samsung crisis resolved and AI capex narrative dominated. Contrarian reading: thin put protection means the market is vulnerable to rapid repricing on a negative catalyst." }
  },

  regime: {
    title: "AI Capex Mania Overrides Macro Noise",
    description: "The dominant market narrative this week is that AI infrastructure spending ($650-725B from the Big Four in 2026) is a self-reinforcing supercycle that overrides sticky inflation, Iran war risk, and Fed uncertainty. Nvidia record revenue ($81.6B quarterly), Microsoft Azure 40% growth, and Google Cloud 63% growth are cited as proof that capex is monetising. The regime favours AI infrastructure names, European defence (fiscal stimulus), and shipping (route disruption premium). It headwinds rate-sensitive sectors (real estate, utilities), China-exposed names (export control uncertainty), and consumer discretionary (high oil + inflation squeeze).",
    tailwinds: ["AI capex supercycle monetising — Nvidia guidance $91B next quarter", "Europe ReArm fiscal unlock — EUR 800B defence spend through 2030", "Iran war shipping disruption premium — Cape rerouting adds structural cost floor"],
    headwinds: ["PCE inflation at 3.8% kills Fed cut hopes; hike probability rising", "Iran war energy shock — Brent above $100 squeezes consumer discretionary", "Dollar credibility and de-dollarisation risk — USD reserve share eroding"]
  },

  league: {
    winners: [
      { rank: 1, name: "Thermo Fisher Scientific (TMO)", sector: "Healthcare", change: "+5.14%", reason: "Strong Q1 beat driven by biopharma instrument orders recovering faster than consensus expected — leading indicator for life sciences restocking cycle" },
      { rank: 2, name: "Apple (AAPL)", sector: "Technology", change: "+3.36%", reason: "Record Q2 revenue $111.2B (+17% YoY), iPhone +22%, China sales +28% drove re-rating; Gemini AI integration and Tim Cook succession announcement" },
      { rank: 3, name: "Palantir (PLTR)", sector: "AI/Software", change: "+3.65%", reason: "Government contract wins and analyst upgrades; AIP [Artificial Intelligence Platform] gaining enterprise share as AI workflow layer" },
      { rank: 4, name: "Novo Nordisk (NVO)", sector: "Healthcare/Pharma", change: "+2.1%", reason: "Wegovy pill 65% new prescription market share; CEO cited double-digit growth despite Eli Lilly Foundayo competition; H2 2026 international launch pipeline" },
      { rank: 5, name: "Rheinmetall (RHM)", sector: "Defence", change: "+1.9%", reason: "ReArm Europe EUR 800B fiscal unlock; German experts confirm EUR 50B/yr defence autonomy target — Rheinmetall has largest ammunition/tank backlog" },
      { rank: 6, name: "Microsoft (MSFT)", sector: "Technology", change: "+1.8%", reason: "Azure 40% growth, AI run rate $37B annually (+123% YoY); high-volume session (47.25M shares) confirms institutional repositioning" },
      { rank: 7, name: "Nvidia (NVDA)", sector: "Semiconductors", change: "+2.1%", reason: "Post-earnings momentum: Q1 FY2027 revenue $81.6B, Q2 guidance $91B — all-time record for any chipmaker; data centre +92% YoY" },
      { rank: 8, name: "UnitedHealth (UNH)", sector: "Healthcare", change: "+1.00%", reason: "Defensive rotation into healthcare as PCE inflation data sparked concern; GLP-1 adoption downstream benefit for underwriting costs" },
      { rank: 9, name: "Johnson & Johnson (JNJ)", sector: "Healthcare", change: "+1.61%", reason: "Sector rotation bid as investors positioned defensively ahead of inflation data; pharma pipeline intact" },
      { rank: 10, name: "Global Ship Lease (GSL)", sector: "Shipping", change: "+1.2%", reason: "Q1 2026: 100% charter coverage, $2.05B contracted backlog [signed contracts not yet completed]; Iran war cape rerouting premium locked in" },
      { rank: 11, name: "Danaos (DAC)", sector: "Shipping", change: "+1.0%", reason: "Fixed-rate backlog capturing Iran war charter rate [daily rental price for one ship] premium; Cape rerouting adds structural floor to container rates" },
      { rank: 12, name: "Broadcom (AVGO)", sector: "Semiconductors", change: "+1.5%", reason: "AI ASIC [application-specific integrated circuit] demand from hyperscalers; custom chip narrative as complement to NVIDIA" },
      { rank: 13, name: "ServiceNow (NOW)", sector: "AI/Software", change: "+1.4%", reason: "Enterprise AI workflow adoption accelerating; benefiting from Microsoft Copilot ecosystem" },
      { rank: 14, name: "CrowdStrike (CRWD)", sector: "Cybersecurity", change: "+1.35%", reason: "AI-powered threat detection and platform consolidation; ARR [annual contracted subscription revenue] growth momentum" },
      { rank: 15, name: "Meta (META)", sector: "Technology", change: "+0.70%", reason: "AI-driven ad revenue strength; Llama open-source strategy gaining enterprise adoption" },
      { rank: 16, name: "Alphabet (GOOGL)", sector: "Technology", change: "+0.65%", reason: "Google Cloud 63% Q1 growth; cheapest Mag7 on P/E [price-to-earnings]; Anthropic partnership news confirms AI cloud demand" },
      { rank: 17, name: "Blackstone (BX)", sector: "Financials/PE", change: "+1.1%", reason: "AI data centre real estate and infrastructure deal flow driving AUM [assets under management] growth" },
      { rank: 18, name: "MercadoLibre (MELI)", sector: "EM/Consumer", change: "+0.9%", reason: "LatAm e-commerce and fintech penetration story intact; strong alternative to USD-denominated EM exposure" },
      { rank: 19, name: "Interactive Brokers (IBKR)", sector: "Financials", change: "+0.8%", reason: "Elevated retail trading volumes as market reaches all-time highs; options activity supporting commission revenue" },
      { rank: 20, name: "Safran", sector: "Defence/Aerospace", change: "+1.2%", reason: "NATO and EU strategic autonomy programmes driving jet engine backlog to record levels; ReArm Europe beneficiary" }
    ],
    losers: [
      { rank: 1, name: "Netflix (NFLX)", sector: "Consumer/Media", change: "-1.04%", reason: "Stock near crucial support; market rotation away from consumer discretionary into tech and healthcare" },
      { rank: 2, name: "ASML (ASML)", sector: "Semiconductors/Equipment", change: "-1.5%", reason: "MATCH Act legislative progress threatens DUV exports to China (33% of 2025 revenue); geopolitical overhang" },
      { rank: 3, name: "Celsius Holdings (CELH)", sector: "Consumer Beverage", change: "-1.5%", reason: "Energy drink category saturation; competition from larger incumbents intensifying in inflation-squeezed market" },
      { rank: 4, name: "WisdomTree Ethereum ETP", sector: "Crypto ETF", change: "-1.2%", reason: "Risk-off in crypto as PCE data boosted dollar and reduced crypto-as-inflation-hedge narrative" },
      { rank: 5, name: "Chewy (CHWY)", sector: "Consumer/E-commerce", change: "-1.3%", reason: "Pet spending discretionary sensitivity; e-commerce margin pressure in high-cost logistics environment" },
      { rank: 6, name: "Starbucks (SBUX)", sector: "Consumer Staples", change: "-1.2%", reason: "High oil/inflation squeezing consumer discretionary; brand recovery slower than guidance suggested" },
      { rank: 7, name: "Vistra (VST)", sector: "Energy/Utilities", change: "-1.1%", reason: "Rate-sensitive utility valuation compressed by PCE hike pricing; power demand story insufficient to offset" },
      { rank: 8, name: "Ulta Beauty (ULTA)", sector: "Consumer Discretionary", change: "-1.1%", reason: "Consumer spending stress from energy shock and elevated core inflation weighing on discretionary retail" },
      { rank: 9, name: "Airbnb (ABNB)", sector: "Consumer Travel", change: "-0.8%", reason: "Iran war travel uncertainty and oil-driven cost inflation dampening summer booking outlook" },
      { rank: 10, name: "iShares MSCI China (MCHI)", sector: "EM ETF", change: "-0.8%", reason: "Huawei chip breakthrough raises US-China tension; export control escalation risk rising" },
      { rank: 11, name: "LVMH", sector: "Luxury/Consumer", change: "-0.9%", reason: "European luxury under pressure from China consumer caution and oil shock dampening aspirational spending" },
      { rank: 12, name: "Constellation Energy (CEG)", sector: "Energy/Nuclear", change: "-0.9%", reason: "Rate-sensitive utility with nuclear premium; rotation away from defensives into AI growth names" },
      { rank: 13, name: "Wingstop (WING)", sector: "Consumer/Restaurant", change: "-0.8%", reason: "Input cost inflation (chicken, energy) squeezing restaurant margins; premium valuation under pressure" },
      { rank: 14, name: "e.l.f. Beauty (ELF)", sector: "Consumer Discretionary", change: "-0.9%", reason: "Tariff exposure and China supply chain sensitivity; consumer trading down but competition intensifying" },
      { rank: 15, name: "Instacart (CART)", sector: "Consumer/Delivery", change: "-0.7%", reason: "Grocery delivery margin pressure in high-energy-cost environment; competition with DoorDash intensifying" },
      { rank: 16, name: "Grab (GRAB)", sector: "EM/Consumer Tech", change: "-0.7%", reason: "Southeast Asia macro uncertainty; oil price shock affecting ride-hailing unit economics" },
      { rank: 17, name: "Toyota (TM)", sector: "Autos", change: "-0.6%", reason: "BOJ policy uncertainty and JPY carry trade [cheap yen borrowed to buy global assets] sensitivity affecting Japanese equity premium" },
      { rank: 18, name: "Hello Group (MOMO)", sector: "EM/Social", change: "-0.6%", reason: "China consumer confidence weak; regulatory uncertainty and Huawei AI chip news overshadowing consumer tech" },
      { rank: 19, name: "StealthGas (STNG)", sector: "Shipping", change: "-0.5%", reason: "LPG [liquefied petroleum gas] shipping rates volatile amid Iran Strait of Hormuz disruption uncertainty" },
      { rank: 20, name: "FinVolution (FINV)", sector: "EM/Fintech", change: "-0.5%", reason: "China macro headwinds and Huawei AI news creating risk-off in Chinese ADR [American depositary receipt] names" }
    ]
  },

  sectors: [
    { name: "US Technology", change: "+1.5%", direction: "up", driver: "AI capex supercycle momentum — Nvidia $91B guidance, Microsoft Azure 40%, Google Cloud 63% driving XLK to new highs" },
    { name: "US Healthcare", change: "+1.4%", direction: "up", driver: "Defensive rotation into healthcare as PCE inflation data sparked concern; Novo Nordisk Wegovy pill success and J&J/UNH gains" },
    { name: "US Financials", change: "-0.3%", direction: "down", driver: "PCE re-inflation data pushes rate-cut hopes further out, compressing bank NIM [spread between what bank earns on loans vs pays on deposits] expansion thesis" },
    { name: "US Industrials", change: "-0.3%", direction: "down", driver: "Mixed signals: defence contractors positive, but broader industrial demand soft amid Iran war supply chain disruption" },
    { name: "US Energy", change: "-0.1%", direction: "flat", driver: "Brent volatile around $100 on Iran peace-deal rumour noise; net flat as supply disruption offsets demand concern" },
    { name: "US Consumer Discretionary", change: "-0.5%", direction: "down", driver: "Energy shock and sticky inflation squeezing consumer purchasing power; rotation out of discretionary into tech and healthcare" },
    { name: "US Consumer Staples", change: "-0.2%", direction: "down", driver: "Slightly defensive but PCE data reinforces inflation-pass-through risk for staples margins" },
    { name: "US Materials", change: "+0.3%", direction: "up", driver: "Copper and critical minerals bid on AI data centre construction and EU defence infrastructure spending" },
    { name: "US Real Estate", change: "-0.8%", direction: "down", driver: "Worst performer: PCE re-inflation kills REIT [real estate investment trust] rate-cut thesis entirely" },
    { name: "US Utilities", change: "-0.7%", direction: "down", driver: "Rate-sensitive utilities under pressure from rising rate probability; AI power demand story insufficient to offset" },
    { name: "US Comm Services", change: "+0.6%", direction: "up", driver: "Meta and Alphabet strength on AI ad revenue; Netflix weak but offset by communication platform leaders" },
    { name: "EU Defence", change: "+1.9%", direction: "up", driver: "ReArm Europe EUR 800B fiscal unlock; German experts confirm EUR 50B/yr defence autonomy target — Rheinmetall leads" },
    { name: "EU Banks", change: "-0.2%", direction: "down", driver: "ECB hike probability good for NIM long-term but short-term uncertainty about growth impact weighing" },
    { name: "EU Industrials", change: "+0.5%", direction: "up", driver: "Infrastructure investment uplift from German fiscal package and ReArm Europe programme" },
    { name: "EU Luxury", change: "-0.9%", direction: "down", driver: "LVMH and sector weak: China consumer recovery slower than hoped; oil shock dampening aspirational spending" },
    { name: "EU Autos", change: "-0.6%", direction: "down", driver: "EVs under pressure from energy costs and competition; tariff uncertainty on US-EU trade creating caution" },
    { name: "EU Insurance", change: "+0.3%", direction: "up", driver: "Higher-for-longer rates support investment income at Allianz, AXA, Muenchener Rueck" }
  ],

  flows: [
    { label: "US Equities", amount: "-$11.8B", direction: "out", pct: 35, note: "Domestic equity fund outflows driven by institutional rotation to sector ETFs; underlying index inflows via ETFs partially offset mutual fund redemptions" },
    { label: "European Equities", amount: "+$3.2B", direction: "in", pct: 62, note: "ReArm Europe and defence fiscal stimulus driving renewed inflows into Euro area equities, particularly defence and industrial ETFs" },
    { label: "EM Equities", amount: "-$1.5B", direction: "out", pct: 40, note: "Iran war energy shock and China export control escalation risk pushing EM flows negative; LatAm bucking trend" },
    { label: "Gold & Commodities", amount: "+$70M", direction: "in", pct: 28, note: "Gold flows muted vs prior week ($1.96B); Iran peace-deal rumour temporarily reduced geopolitical premium" },
    { label: "Fixed Income", amount: "+$13.4B", direction: "in", pct: 70, note: "Bond fund [fixed income investment funds] inflows accelerating as PCE data reinforces higher-for-longer narrative; taxable bonds $11.5B, munis $1.9B" },
    { label: "Cash/Money Markets", amount: "+$8.5B", direction: "in", pct: 65, note: "Money market [short-term, liquid instruments] inflows continue as 5%+ yields compete with equity risk premium in a re-inflation environment" }
  ],

  trends: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      detail: "Nvidia's record $81.6B quarter with $91B Q2 guidance confirms the AI infrastructure build-out is still accelerating, not plateauing. Hyperscalers collectively committed $650-725B in 2026 capex, predominantly for data centres, cooling systems, and power infrastructure. The physical world dimension is now explicit: power, land, and cooling are the new bottlenecks after chips.",
      status: "CONFIRMED",
      evidence: "Nvidia Q1 FY2027 data centre revenue $75.2B (+92% YoY); Microsoft capex $31.9B in single quarter; Amazon-Anthropic $5B deal with $100B AWS commitment over 10 years.",
      type: "structural"
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      detail: "The ReArm Europe plan to mobilise EUR 800B through 2030 is gaining real fiscal traction with 17 member states activating the national escape clause for defence spending. Germany's fiscal reawakening after two years of recession is the core driver. Defence autonomy at EUR 50B/yr is now endorsed by German strategic experts, translating into multi-year earnings visibility for Rheinmetall, Safran, Thales.",
      status: "CONFIRMED",
      evidence: "EU SAFE instrument EUR 150B approved; German defence/infrastructure package implementation accelerating; EUAD ETF trading near highs.",
      type: "structural"
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      detail: "The USD share of global reserves has declined to ~58% (from 72% in 2000) and the Iran war is accelerating the petrodollar erosion as some oil transactions shift to yuan. PCE at 3.8% alongside a Fed credibility question (new Chair selection, political pressure) and BRICS trade settlement alternatives are all incrementally negative for USD dominance.",
      status: "CONFIRMED",
      evidence: "PCE 3.8% YoY April 2026 — highest in nearly 3 years; Brent denominated in alternative currencies rising; EUR/USD at 1.1651 vs 1.16027 at week open.",
      type: "structural"
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      detail: "Novo Nordisk's Wegovy pill achieving 65% new prescription market share in the US while launching internationally in H2 2026 confirms the GLP-1 [glucagon-like peptide-1 — a hormone that regulates appetite] revolution is accelerating into a new oral delivery phase. Eli Lilly competition (Foundayo) is real but Novo's first-mover advantage in oral delivery is intact. The downstream economic impact on healthcare costs, hospitalisation, and related sectors is still underpriced.",
      status: "CONFIRMED",
      evidence: "Novo Nordisk Q1 Wegovy pill $355M first quarter; guidance upgraded; 65% new prescription share despite Foundayo launch; international approval pipeline H2 2026.",
      type: "structural"
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      detail: "The 2026 Iran war Strait of Hormuz closure has triggered the largest structural shipping reroute since Suez 2024. Cape of Good Hope detours add 10-20 days per voyage, destroying effective fleet capacity while charter rates benefit. Global Ship Lease's 100% 2026 charter coverage at elevated rates and $2.05B contracted backlog illustrates how fixed-rate shipping operators are capturing this structural premium.",
      status: "CONFIRMED",
      evidence: "Iran war Strait of Hormuz crisis ongoing; Maersk emergency freight surcharges effective March 2026; container equipment shortages building globally.",
      type: "structural"
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      detail: "S&P 500 and Nasdaq at all-time highs with Fear and Greed at 61 and put/call at 0.55 suggests retail is chasing momentum rather than hedging. ETF inflows for 2026 are on pace for a record $2 trillion, largely from retail investors rotating from money market funds. However, domestic mutual fund outflows suggest sophisticated retail is cashing out while passive ETF flows sustain index levels.",
      status: "UNCHANGED",
      evidence: "2026 total ETF inflows pace $2 trillion record; Fear and Greed 61; S&P 500 7,563+ all-time high; domestic mutual fund outflows $11.75B week.",
      type: "cyclical"
    }
  ],

  executive: {
    biggest_mover: { name: "Nvidia (NVDA)", change: "+85% YoY revenue / +2.1% week", reason: "Nvidia's Q1 FY2027 earnings confirmed the most profitable quarter any chipmaker has ever produced — $81.6B revenue, $58.3B net income, $91B Q2 guidance. The stock remains 9% below its $235 all-time high as the market digests whether the guidance is already priced in, creating a rational entry window for conviction holders. This directly confirms Thesis 01 and raises the threshold question: at what point does $91B guidance become consensus and no longer a catalyst?" },
    key_risk: { name: "PCE Inflation Resurgence + Fed Hike Probability", reason: "April PCE at 3.8% YoY combined with a 60% market-implied probability of a Fed rate hike by year-end is the single largest structural threat to the current regime. The market is ignoring this — S&P 500 hits ATH despite the data — but the divergence between macro reality and equity pricing is widening. A second consecutive hot PCE print or a Fed Chair selection signalling hawkishness could trigger rapid repricing from Greed toward Fear, particularly in high-multiple AI names." },
    conviction_call: { name: "Global Ship Lease (GSL)", observation: "GSL represents the clearest structural beneficiary of the Iran war shipping disruption with lowest execution risk. The company already has 100% 2026 charter coverage, $2.05B contracted revenue backlog [signed contracts not yet completed], and a $48 analyst consensus target (26% upside). Charter rates [daily rental price for one ship] are structurally elevated because effective fleet capacity has been destroyed by Cape rerouting — this is contracted cash flow, not speculation. The quarterly dividend yield adds a return floor while geopolitical optionality persists." },
    macro_pulse: { name: "Iran War / Strait of Hormuz Binary", observation: "The bogus Iranian state media peace report on May 28 that briefly crashed oil prices 4% and then was repudiated by the White House illustrates the extreme binary optionality embedded in the current market. A genuine ceasefire would collapse shipping rates, oil, and defence stocks while ripping consumer discretionary and global growth names — a complete regime change requiring a full portfolio repositioning." },
    tags: [
      { label: "EUR/USD: 1.1651 rising", type: "green" },
      { label: "Fed: 60% hike probability by year-end", type: "red" },
      { label: "ECB: June 11 hike 86% priced", type: "amber" },
      { label: "Tariffs: MATCH Act — ASML DUV risk", type: "red" },
      { label: "AI capex: $700B+ confirmed 2026", type: "green" },
      { label: "EU defence: EUR 800B ReArm active", type: "green" },
      { label: "Semis: Samsung strike resolved; HBM4 secure", type: "green" },
      { label: "Shipping: Cape rerouting structural — elevated", type: "amber" }
    ]
  },

  macro: {
    us: "The US economy in late May 2026 is navigating a stagflationary crosscurrent: AI-driven corporate investment is booming — Nvidia's $81.6B quarter, Microsoft Azure at 40% growth — while consumer-facing inflation (PCE 3.8% YoY, the highest in nearly three years) is eroding real purchasing power. The Iran war oil shock (Brent above $100) is the transmission mechanism: higher energy costs feed into goods and services inflation, preventing the Fed from cutting even as growth signals become mixed. Markets are simultaneously pricing all-time equity highs and a 60% probability of a rate hike by year-end — a contradiction that can only be sustained if AI capital investment continues to generate disproportionate earnings growth relative to the consumer-cyclical drag. Jerome Powell's term expired May 15; the new Fed Chair selection and their policy signals will dominate the summer narrative.",
    europe: "Europe is in a rare moment of positive fiscal inflection. Germany's emergence from two years of recession, combined with the ReArm Europe programme (EUR 800B through 2030) and the SAFE instrument (EUR 150B), is creating multi-year earnings visibility for the defence and industrial sectors that has no peacetime parallel. The ECB faces a different dilemma than the Fed: eurozone inflation fell to 1.9% in February before ticking up, giving the ECB more flexibility to hike defensively in June (86% priced) without destroying growth. The structural challenge is that German exports remain under pressure from US tariff threats (4 July deadline looming), China demand softness, and the transition away from auto-centric industrial output. The ReArm momentum is real but narrow — luxury, autos, and China-exposed names remain structural underperformers.",
    asia: "China's AI and technology sectors received a significant narrative boost from Huawei's LogicFolding chip architecture announcement — a design innovation that promises transistor density equivalent to 1.4nm processes by 2031 without TSMC-class EUV equipment. This is a 5-10 year strategic threat to US/Dutch semiconductor premiums. Goldman Sachs expects China GDP at 4.8% in 2026 supported by strong exports. Japan is benefiting from fiscal stimulus (gasoline tax abolition, AI investment), with Nikkei 225 targeting 52,000 by year-end. Korea resolved its Samsung labor crisis on May 20 — HBM4 supply chain intact for the near term. EM Asia broadly benefits from AI supply chain concentration: approximately 30% of total global AI capex flows to Taiwan and South Korea via TSMC and SK Hynix.",
    forward: "Key events to watch in the week of June 2-6, 2026: US ISM Manufacturing (June 2) and Jobs Report (June 6) will either validate or challenge the PCE-driven Fed hike narrative — a strong jobs number removes any remaining cut hope. The ECB June 11 meeting is the next major macro event, with a rate hike 86% priced. The MATCH Act (ASML DUV export controls) is advancing in the full House — bipartisan profile means it could move quickly. Watch for any confirmed Iran ceasefire signal, which would be the single largest instantaneous regime change catalyst in the current market, requiring full portfolio repositioning toward consumer, travel, and global growth."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$311",
      change: "+3.36%",
      pe: "~32x",
      pe_plain: "paying 32 years of annual earnings",
      target: "$320-340",
      theme: "AI iPhone supercycle + Gemini Siri integration",
      news: "Apple Q2 FY2026 (April 30): $111.2B revenue (+17% YoY), $29.6B net profit, EPS $2.01. iPhone revenue $57B (+22%) driven by iPhone 17 Pro premium mix at 58% of units. CEO Tim Cook announced succession planning — stepping down later in 2026 after 15 years. Apple partnered with Google's Gemini to power Siri rather than building AI internally. China sales surged 28% YoY, a significant reversal from prior quarters.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "iPhone supercycle intact, services record, China recovery, and Gemini AI integration all confirm positive re-rating trajectory with sustained EPS growth."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$428",
      change: "+1.8%",
      pe: "~38x",
      pe_plain: "paying 38 years of annual earnings",
      target: "$440-480",
      theme: "Azure AI — 40% cloud growth, $37B AI run rate",
      news: "Microsoft Q3 FY2026 (April 29): Azure grew 40% constant-currency, AI annual revenue run rate [annualised current revenue] reached $37B (+123% YoY), 20M+ paid Copilot seats. Revenue $82.9B (+15%), EPS $4.27. CFO Amy Hood disclosed $190B 2026 capex plan. High volume session on May 28 (47.25M shares vs 31.4M average) confirms institutional repositioning. Market initially sold on capex scale before recovering on AI monetisation trajectory.",
      earnings: "July 28, 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Azure 40% growth and $37B AI run rate at 123% growth rate confirm the capex-to-revenue gap is closing — AI investment is monetising at scale."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$270",
      change: "+0.5%",
      pe: "~48x",
      pe_plain: "paying 48 years of annual earnings",
      target: "$285-310",
      theme: "AWS AI + Anthropic $5B strategic compute deal",
      news: "Amazon-Anthropic expanded their partnership with a new $5B investment and Anthropic's pledge of $100B in AWS spending over 10 years. Anthropic's run-rate revenue surpassed $30B (from $9B end-2025). AWS grew 28% in Q1 2026. Amazon's $200B 2026 capex commitment (up 50% YoY) is the largest absolute AI infrastructure bet of any hyperscaler. Trainium custom AI chips are key in the battle for custom silicon share versus NVIDIA. Anthropic IPO rumoured for fall 2026.",
      earnings: "August 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Anthropic partnership and $200B capex confirm AWS as central AI infrastructure hub; 28% growth validates the spending thesis with strong monetisation signal."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$385",
      change: "+0.65%",
      pe: "~24x",
      pe_plain: "paying 24 years of annual earnings",
      target: "$400-420",
      theme: "Google Cloud 63% AI growth — cheapest Mag7 on P/E",
      news: "Alphabet Q1 2026 (April 29): Revenue $109.9B, beating consensus by $3B. Google Cloud grew 63% YoY to $20.02B — well above analyst estimates of $18.05B. Profit rose 81%. Capex raised to $180-190B range. At 24x forward P/E [price-to-earnings] with 63% cloud growth and 81% profit growth, Alphabet is the most undervalued Mag7 name. Waymo continues to lead in robotaxi versus Tesla Cybercab.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "63% cloud growth at the cheapest Mag7 P/E is the most compelling risk/reward in the group — Alphabet is structurally undervalued relative to peers."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$633",
      change: "+0.70%",
      pe: "~30x",
      pe_plain: "paying 30 years of annual earnings",
      target: "$650-700",
      theme: "AI ad monetisation + Llama open-source dominance",
      news: "Meta Q1 2026: Capex raised to $125-145B. DAP [daily active people] of 3.56B (+4% YoY) but -5% from Q4 sequentially disappointed. Beat on revenue with AI-driven ad targeting efficiency improving. Llama open-source AI model gaining enterprise adoption. Meta's AI infrastructure spend is the largest non-chip capex bet in 2026. Reality Labs investment continuing despite ongoing losses.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Strong AI ad monetisation but sequential DAP decline and highest-ever capex spend create near-term EPS pressure; hold for AI advertising flywheel thesis."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$214",
      change: "+2.1%",
      pe: "~38x",
      pe_plain: "paying 38 years of annual earnings",
      target: "$230-260",
      theme: "AI chip monopoly — $81.6B Q1, $91B Q2 guidance",
      news: "Nvidia Q1 FY2027 (May 20): Revenue $81.6B (+85% YoY) — most profitable chipmaker quarter in history. Net income $58.3B. Data centre revenue $75.2B (+92%), hyperscalers 50% of data centre revenue at $38B. Q2 guidance $91B continues the acceleration. All-time high was $235.74 on May 14; current $214 is 9% below ATH. TSMC CoWoS [Chip-on-Wafer-on-Substrate — advanced chip packaging] remains the primary supply constraint on further GPU output.",
      earnings: "August 26, 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "$91B guidance with no visible demand slowdown and CoWoS supply as the only ceiling — the AI chip monopoly remains structurally intact through 2026."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$442",
      change: "+0.85%",
      pe: "~110x",
      pe_plain: "paying 110 years of annual earnings",
      target: "$400-500",
      theme: "Physical AI pivot — robotaxi + Optimus humanoid robots",
      news: "Tesla Q1 2026 (April 22): Revenue $22.39B (+15.8% YoY), gross margin 21.1%, EPS $0.41. Robotaxi expanded to Dallas and Houston; paid miles nearly doubled sequentially. Musk committed $25B+ in 2026 capex for AI, robotics, and Cybercab. Optimus humanoid robots entering low-volume production in 2026. Musk cautioned robotaxi revenue not material until 2027. Tesla vs. Alphabet Waymo autonomous race intensifying.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "At 110x P/E, Tesla is priced for a robotaxi/Optimus future that Musk explicitly pushed to 2027 — valuation requires perfect execution on still-distant revenue streams."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      status: "CONFIRMED",
      evidence: "Nvidia $81.6B Q1, $91B Q2 guidance; hyperscalers collectively $650-725B 2026 capex confirmed; Amazon-Anthropic $100B AWS deal signed.",
      instruments: "NVDA, MSFT, GOOGL, AMZN, META, AVGO, PLTR, TSMC, AMD",
      highlights: [
        { name: "Nvidia (NVDA)", change: "+2.1%", note: "Q1 FY2027 the most profitable chipmaker quarter in history — $81.6B revenue, $58.3B net income, $91B Q2 guidance. Data centre [the AI chip segment] at $75.2B (+92%) confirms hyperscaler demand is still accelerating, not plateauing." },
        { name: "Microsoft (MSFT)", change: "+1.8%", note: "Azure 40% growth and $37B AI annual run rate [annualised revenue] at 123% growth confirms capex is monetising. $190B 2026 capex plan is the clearest signal of long-duration infrastructure commitment across the entire tech sector." },
        { name: "Palantir (PLTR)", change: "+3.65%", note: "Government and enterprise AI platform gaining share as AI infrastructure needs the software workflow layer. Palantir's AIP [Artificial Intelligence Platform] is positioned as the operating system on top of hyperscaler compute — a key beneficiary of the infrastructure build-out." },
        { name: "Broadcom (AVGO)", change: "+1.5%", note: "Custom AI ASIC [application-specific integrated circuit — a chip designed for one specific task] demand from Google TPU and Meta's custom silicon accelerating; Broadcom is the pick-and-shovel for hyperscaler silicon diversification from pure NVIDIA." }
      ]
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      status: "CONFIRMED",
      evidence: "17 EU member states activated national escape clause for defence spending; SAFE instrument EUR 150B approved; German experts confirm EUR 50B/yr defence autonomy target.",
      instruments: "RHM.DE, Safran, Thales, HEICO, EUAD, Siemens, GE",
      highlights: [
        { name: "Rheinmetall (RHM)", change: "+1.9%", note: "Germany's defence prime is the clearest structural beneficiary: tank production, ammunition, and air defence systems all in multi-year backlog [signed contracts not yet completed]. ReArm Europe's EUR 800B commitment is the 30-year secular tailwind." },
        { name: "VanEck Defence ETF (EUAD)", change: "+1.5%", note: "Pan-European defence ETF capturing the ReArm Europe fiscal unlock across the full supply chain. Trading near $42.40 at 52-week highs as European defence spending guidance accelerates." },
        { name: "Safran", change: "+1.2%", note: "French aerospace and defence prime benefiting from both NATO commitment (jet engine production) and EU strategic autonomy programmes. Aero-engine backlog at record levels as European governments accelerate procurement." },
        { name: "iShares MSCI Europe Industrials", change: "+0.5%", note: "Broader European industrial ETF capturing the infrastructure and defence fiscal multiplier across Germany, France, and Poland — all activating the national escape clause for increased defence spending." }
      ]
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      status: "CONFIRMED",
      evidence: "EUR/USD +0.54% week to 1.1651; PCE 3.8% YoY highest in 3 years; BRICS oil settlement alternatives accelerating under Iran war; USD reserve share ~58% vs 72% in 2000.",
      instruments: "GLD, iShares Physical Gold, WisdomTree Bitcoin ETP, iShares MSCI EM",
      highlights: [
        { name: "EUR/USD", change: "+0.54%", note: "Euro strengthening against dollar as ECB hike probability (86% for June 11) diverges from Fed rate cut erasure. EUR/USD at 1.1651 is the clearest forex expression of dollar softness — a 30-pip weekly gain on macro divergence." },
        { name: "iShares Physical Gold", change: "+0.3%", note: "Gold flows muted this week ($70M) vs prior week ($1.96B) as Iran peace rumours temporarily reduced the safe-haven bid. Structural de-dollarisation trend intact — central bank gold buying continues as reserve diversification accelerates." },
        { name: "Interactive Brokers (IBKR)", change: "+0.8%", note: "Multi-currency brokerage platform benefiting from elevated FX trading volumes as EUR/USD and JPY/USD volatility drives retail and institutional hedging demand." },
        { name: "WisdomTree Bitcoin ETP", change: "-1.2%", note: "Bitcoin as de-dollarisation hedge narrative weakened when PCE data boosted the USD temporarily. A structural WATCH for the thesis but tactical risk-off dominated this week." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      status: "CONFIRMED",
      evidence: "Novo Nordisk Wegovy pill 65% new prescription market share; $355M first quarter; international launch H2 2026; Eli Lilly competition confirmed but manageable.",
      instruments: "NVO, LLY, VEEV, HCA, UNH, GE HealthCare",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "+2.1%", note: "Wegovy pill 65% new prescription share despite Eli Lilly's Foundayo launch proves first-mover advantage in oral GLP-1 [glucagon-like peptide-1 — hormone regulating appetite] delivery is real. CEO raised guidance and confirmed double-digit growth. International launch H2 2026 is the next catalyst." },
        { name: "UnitedHealth (UNH)", change: "+1.0%", note: "Healthcare insurer is the downstream beneficiary of GLP-1 adoption as obesity reduction cuts hospitalisation costs for diabetes, cardiovascular, and orthopedic procedures — a long-term underwriting cost advantage that consensus still underestimates." },
        { name: "Veeva Systems (VEEV)", change: "+0.7%", note: "Life sciences cloud platform benefiting from pharma R&D pipeline expansion driven by GLP-1 success; clinical trial data management demand accelerating as GLP-1 applications expand beyond obesity into NASH and cardiovascular." },
        { name: "Thermo Fisher Scientific (TMO)", change: "+5.14%", note: "Biopharma instrument recovery accelerating faster than consensus — the week's biggest surprise. A leading indicator for the broader life sciences tools sector restocking cycle as GLP-1 and oncology pipeline drives manufacturing capacity expansion." }
      ]
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      status: "CONFIRMED",
      evidence: "Strait of Hormuz crisis ongoing; Maersk emergency freight surcharges effective March 2026; Global Ship Lease 100% 2026 charter coverage at elevated rates; $2.05B contracted backlog.",
      instruments: "GSL, INSW, DAC, TEN, STNG",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+1.2%", note: "100% 2026 charter coverage and $2.05B contracted backlog [signed contracts not yet completed] make GSL the safest expression of the shipping disruption thesis. Analyst consensus $48 target (26% upside). Quarterly dividend $0.625/share ($2.50 annualised) adds return floor." },
        { name: "Danaos (DAC)", change: "+1.0%", note: "Fixed-rate backlog on Asia-Europe routes captures Iran war charter rate [daily rental price for one ship] premium. Cape rerouting adds a structural cost floor to container rates that benefits operators with locked-in long-term contracts." },
        { name: "International Seaways (INSW)", change: "+0.6%", note: "Tanker operator with direct Middle East exposure; Iran war creates volatile but elevated tanker rates as Persian Gulf shipments require higher risk premiums and longer rerouting." },
        { name: "StealthGas (STNG)", change: "-0.5%", note: "LPG [liquefied petroleum gas] shipping rates more volatile than container rates in the Hormuz crisis; underperforming peers as LPG route disruption is more complex and less predictable than container re-routing." }
      ]
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      status: "UNCHANGED",
      evidence: "S&P 500 at ATH 7,563; Fear and Greed 61; ETF inflows 2026 on pace for $2T record; domestic mutual fund outflows -$11.75B week suggests bifurcated retail behaviour.",
      instruments: "VOO, IVV, SPY, QQQ, IWM, HOOD",
      highlights: [
        { name: "Vanguard S&P 500 ETF (VOO)", change: "+0.5%", note: "Passive ETF inflows absorbing institutional and retail mutual fund redemptions — the bifurcation between ETF inflows and mutual fund outflows is the signature of this trend. VOO near all-time highs." },
        { name: "iShares Core S&P 500 (IVV)", change: "+0.5%", note: "Parallel to VOO; ETF structure enabling retail cash rotation to continue as index reaches new highs while active management underperforms and costs drag on mutual fund performance." },
        { name: "Robinhood (HOOD)", change: "+0.4%", note: "Retail brokerage benefiting from elevated options activity (put/call 0.55) and all-time high index levels driving FOMO [fear of missing out] trading volumes, particularly in Mag7 call options." },
        { name: "SPDR Russell 2000 (IWM)", change: "-0.3%", note: "Small caps underperforming large cap confirms the retail rotation is quality-biased — cash is flowing into S&P 500 and Nasdaq giants, not the broader market. Risk-on is narrow, not broad." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Huawei",
      sector: "Semiconductors / China Tech",
      headline: "Huawei announces LogicFolding architecture — equivalent to 1.4nm transistor density by 2031 without EUV",
      detail: "On May 25, 2026, Huawei revealed its LogicFolding architecture and the Tau Scaling Law — a fundamental rethinking of chip design focusing on signal transit time rather than transistor shrinkage. The company claims Kirin chips launching later in 2026 will use this architecture, with a roadmap to 1.4nm-equivalent density by 2031. SMIC shares rose 7.6% on the news. This matters because it signals Chinese semiconductor innovation is moving beyond process node imitation into architectural differentiation — a strategic bypass of the ASML EUV [extreme ultraviolet lithography] bottleneck. If validated at scale, it compresses the geopolitical monopoly premium embedded in ASML, NVIDIA, and TSMC valuations over a 5-year horizon.",
      tag: "WATCH"
    },
    {
      num: "02",
      company: "Samsung",
      sector: "Semiconductors / Korea",
      headline: "Samsung 50,000-worker strike averted May 20 — HBM4 supply chain secure after 6.2% wage deal",
      detail: "With one day before a planned walkout of 45,000-50,000 workers (the largest in Samsung's history), management reached a deal including a 6.2% wage hike and profit-sharing for the semiconductor division. The resolution is BULL for HBM4 supply continuity — Nvidia's $91B Q2 guidance is partly dependent on Samsung and SK Hynix delivering HBM4 [high-bandwidth memory — the specialised memory chips required for AI training] at scale. The underlying talent war is still ongoing: 200 Samsung engineers defected to SK Hynix in four months, creating a yield and innovation risk that the wage deal does not fully resolve.",
      tag: "BULL"
    },
    {
      num: "03",
      company: "Amazon / Anthropic",
      sector: "AI Infrastructure / Cloud",
      headline: "Amazon invests $5B more in Anthropic; Anthropic commits $100B to AWS over 10 years — IPO rumoured fall 2026",
      detail: "The April 20 deal commits Anthropic to $100B in AWS spending over 10 years in exchange for $5B new investment (on top of $8B prior). Anthropic's run-rate revenue surpassed $30B (from $9B end-2025). The New York Times reported an Anthropic IPO target for fall 2026. This matters because it shows the frontier model layer is scaling revenue fast enough to become an independent economic entity. The deal also strategically embeds AWS as the primary AI compute infrastructure for the leading non-Microsoft model lab — a direct competitive answer to Microsoft's OpenAI relationship.",
      tag: "BULL"
    },
    {
      num: "04",
      company: "Novo Nordisk",
      sector: "Healthcare / Pharma",
      headline: "Wegovy pill captures 65% new prescription share despite Eli Lilly Foundayo launch — international rollout H2 2026",
      detail: "Novo Nordisk's Wegovy oral pill, launched in the US in January 2026, hit $355M in its first quarter and commanded 65% of all new obesity prescriptions despite Eli Lilly's competing Foundayo pill launching in April. The CEO cited a pricing sweet spot and double-digit growth. International regulatory approvals are expected in H2 2026. This is BULL because it resolves the key bear thesis that Lilly competition would immediately erode Novo's dominance. The GLP-1 [glucagon-like peptide-1] market is expanding faster than both companies can supply, making this a rising-tide scenario rather than a zero-sum competition for 2026.",
      tag: "BULL"
    },
    {
      num: "05",
      company: "ASML / MATCH Act",
      sector: "Semiconductors / Policy",
      headline: "Bipartisan MATCH Act advancing in full House — would ban ASML DUV exports to China (33% of 2025 revenue)",
      detail: "US senators introduced the MATCH Act on April 2, 2026, which would extend export controls to ASML's DUV [deep ultraviolet lithography — less advanced than EUV but still critical for making chips at 28nm-class] machines. China accounted for 33% of ASML's 2025 revenue. The bipartisan profile makes it one of the few China-policy bills moving without serious internal opposition. ASML was down on the news. This is BEAR for ASML near-term but BULL long-term for TSMC and Samsung who face reduced Chinese competition in advanced node capacity.",
      tag: "BEAR"
    },
    {
      num: "06",
      company: "Global Ship Lease",
      sector: "Shipping",
      headline: "GSL Q1 2026: 100% charter coverage, $2.05B backlog, $0.625 quarterly dividend — Iran war premium locked in contractually",
      detail: "Global Ship Lease reported Q1 2026 operating revenue of $198.1M and net income of $91.4M ($2.54/share). The company has 100% 2026 charter coverage and 86% for 2027, with $2.05B in contracted revenue and a weighted average remaining term of 2.6 years. The quarterly dividend of $0.625/share ($2.50 annualised) is fully covered. GSL is selling three older vessels for $52M (estimated $25M gain), rotating into more efficient capacity. The Iran war Strait of Hormuz disruption has created a structural floor for charter rates [daily rental price for one ship] that GSL has locked in through long-term contracts.",
      tag: "BULL"
    },
    {
      num: "07",
      company: "Thermo Fisher Scientific",
      sector: "Healthcare / Life Sciences",
      headline: "TMO +5.14% on May 28 — biopharma instrument recovery beating consensus by wide margin",
      detail: "Thermo Fisher Scientific surged 5.14% on May 28 on biopharma instrument orders recovering faster than consensus expected. After two years of biotech funding drought, the pipeline of new drug approvals (particularly GLP-1 and oncology) is creating a multi-year instrument restocking cycle. EBITDA [raw operating profit before bookkeeping adjustments] margins are expected to expand as fixed-cost leverage returns. This matters as a leading indicator for the broader life sciences tools sector — if TMO is recovering ahead of schedule, peers like Waters, Mettler-Toledo, and Sartorius should follow within 1-2 quarters.",
      tag: "BULL"
    },
    {
      num: "08",
      company: "Rheinmetall / EU Defence",
      sector: "Defence / Europe",
      headline: "German experts confirm Europe defence autonomy at EUR 50B/yr — ReArm EUR 800B through 2030 creates 30-year capex backlog",
      detail: "A May 7 Defence News report confirmed that German strategic experts believe full European defence autonomy is achievable at EUR 50B per year over the next decade. The ReArm Europe plan's EUR 800B commitment through 2030 is the largest peacetime European fiscal programme ever launched. Rheinmetall's 22% YTD gain and 43% trailing 12-month performance reflects the market pricing in a decade of defence capex. The SAFE instrument (EUR 150B loan facility) and 17-member state escape clause activation means this is not just aspirational — it is funded. This is the most structurally significant European investment story since the Euro was created.",
      tag: "BULL"
    }
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
        finding: "All four hyperscalers raised or maintained 2026 capex guidance: Amazon $200B (+50% YoY), Microsoft $190B, Google $180-190B, Meta $125-145B. Combined $650-725B — up 77% from 2025. Microsoft CFO cited higher chip costs (+$25B) but did not reduce spend guidance. No hedging language from any of the four.",
        implication: "AI infrastructure commitment is binding through 2026 and into 2027. Semiconductor demand from hyperscalers remains fully intact for the next 12-18 months. This is the strongest GREEN signal in the AI trade integrity framework."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "TrendForce May 2026 Bulletin: HBM4 pricing premium maintained; AI server memory contract prices increasing into Q2 2026 as CSPs [cloud service providers] secure supply via long-term agreements. Samsung HBM4 mass production sold out for 2026. HBM4 transition to higher-priced product adds positive mix effect through year-end.",
        implication: "Memory pricing supportive of SK Hynix and Samsung earnings momentum. No plateau signal yet. HBM supply tightness through 2026 sustains pricing power for Korean memory manufacturers."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "GREEN",
        finding: "Microsoft AI annual run rate [annualised current revenue] $37B (+123% YoY); Azure 40% growth. Google Cloud 63% YoY to $20B. AWS 28% YoY. Anthropic run-rate revenue $30B (from $9B end-2025). Revenue growth is accelerating faster than capex growth — the gap is closing, not widening.",
        implication: "The AI trade is not yet a bubble by this metric. The risk is if 2027 capex maintains current levels while revenue growth decelerates from the current 100%+ pace. Monitor closely in next quarter's guidance."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "GREEN",
        finding: "Nvidia forward P/E ~38x driven by $91B guidance (earnings rising, P/E justified). Microsoft ~38x driven by Azure 40% growth (EPS revised up). Alphabet ~24x with 81% profit growth (cheapest Mag7). Consensus EPS estimates for the Mag7 have been revised materially upward following Q1 2026 earnings beats. Tesla at 110x remains the outlier — priced on future potential.",
        implication: "P/E expansion is fundamentals-driven for 6 of 7 Mag7 names. The AI trade has earnings support, not just sentiment. Tesla is the only name where P/E expansion is running ahead of fundamentals."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "Huawei LogicFolding architecture announcement (May 25) and Tau Scaling Law represent a credible architectural breakthrough — not a process node advance. Roadmap claims 1.4nm-equivalent transistor density by 2031. Kirin chips with LogicFolding launch H2 2026. SMIC confirmed at 7nm-class; no 5nm volume. Huawei Ascend 910C at 600,000 units/2026 — growing alternative to NVIDIA in China.",
        implication: "AMBER: not a near-term threat but a material 5-year strategic signal. LogicFolding shifts the competitive framing from process parity to architectural differentiation — a smarter attack on the Western semiconductor moat. Monitor Kirin H2 2026 benchmarks. ASML EUV premium partially justified long-term but the Huawei announcement changes the risk narrative."
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
        finding: "Samsung 50,000-worker strike averted May 20 with 6.2% wage deal and profit-sharing for semiconductor division. HBM4 mass production ongoing; entire 2026 run sold out. SK Hynix's $942B market cap milestone reflects HBM dominance. Brain drain ongoing: 200 engineers left Samsung for SK Hynix in four months.",
        implication: "Near-term supply secure. Medium-term: Samsung engineering talent loss to SK Hynix is a yield and innovation risk. SK Hynix is gaining structural advantage within Korea semis. Monitor Q2 HBM4 yield numbers when disclosed."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "BOJ maintained current rates; no surprise hike. TSMC Kumamoto fab ramp progressing per schedule. Tokyo Electron orders stable. Japan fiscal stimulus (gasoline tax abolition, AI investment) is supportive. Nikkei 225 targeting 52,000 by year-end.",
        implication: "Stable. BOJ is the key risk — any surprise hike unwinds the JPY carry trade globally within hours. Watch for BOJ meeting dates and Japan wage inflation data as the domestic economy strengthens."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS lead times 50+ weeks; capacity scaling to ~130,000 wafers/month by end-2026 but still sold out. Samsung I-Cube and Amkor alternatives at 26-39 week lead times, insufficient to absorb overflow. Huawei LogicFolding announcement is the new geopolitical signal. No new China rare earth embargo announced this week.",
        implication: "AMBER due to CoWoS structural bottleneck constraining NVIDIA upside and Huawei architectural announcement raising long-term China chip threat level. CoWoS is the single most important supply constraint on the AI trade for 2026-2027."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "MATCH Act advancing in full House — bipartisan bill would ban ASML DUV exports to China. China accounts for 33% of ASML 2025 revenue; management projects 20% 2026. CHIPS Act disbursements progressing. TSMC Arizona N3 ramp and Intel fab construction ongoing. Nvidia H200 China export shifted to case-by-case review January 2026.",
        implication: "AMBER: MATCH Act is the key policy risk. If passed, ASML faces rapid revenue cliff (33% to ~5% China share). Policy uncertainty creates a headwind for semiconductor equipment names. TSMC Arizona and Intel domestic progress reduces but does not eliminate supply chain concentration risk."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "MATCH Act would extend export controls to DUV machines. SMEE confirmed at 28nm-class. Huawei LogicFolding architecture sidesteps the EUV bottleneck via design innovation rather than process parity — a strategic bypass of ASML's moat. No confirmed SMEE 14nm progress.",
        implication: "ASML's EUV monopoly intact; DUV revenue at risk from MATCH Act. Huawei's architectural approach reduces the Chinese market's dependence on advanced node scaling, partially de-risking SMEE's inability to match ASML EUV."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix + Samsung hold >90% HBM share. Micron HBM3e allocation to Nvidia growing but remains minority share. Samsung strike resolved — no near-term supply disruption. SK Hynix gained 200 engineers from Samsung; yield advantage likely widening. Micron price parity not yet achieved.",
        implication: "SK Hynix is the near-term winner of the Samsung talent drain. Micron is a WATCH — if Samsung yield problems surface in Q2, Micron's allocation could jump meaningfully. Monitor Nvidia's disclosed memory supplier breakdown in August earnings."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "Hyperscaler custom silicon remains inference-focused. Training workloads still dominated by NVIDIA. Broadcom's custom AI ASIC business growing for Google and Meta but is additive to total AI compute spend, not directly displacing NVIDIA. Nvidia data centre hyperscaler share at 50% with remaining 50% from diversified customers.",
        implication: "Green: custom silicon growing but not displacing NVIDIA training at >10% share yet. The risk is 2027-2028 as Google TPU v6 and AWS Trainium 3 mature. Current NVIDIA momentum ($91B Q2 guidance) is unaffected by custom silicon for 2-3 quarters."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "AMBER",
        finding: "TSMC CoWoS at 50+ week lead times; scaling to 130,000 wafers/month end-2026 — still insufficient. TSMC outsourced some steps to ASE and Amkor; Amkor Incheon at 26-39 weeks. Samsung I-Cube and X-Cube at 26-39 weeks and lower throughput. Intel EMIB being evaluated as alternative. No alternative at competitive cost/volume/yield yet.",
        implication: "AMBER: CoWoS is the binding constraint on NVIDIA GPU supply through 2026. Easing expected in 2027 as Samsung packaging capacity scales. Near-term: every TSMC CoWoS wafer goes to Nvidia (60% of capacity); bottleneck caps NVIDIA revenue upside even with $91B guidance."
      }
    ]
  }

};
