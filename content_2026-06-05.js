const BRIEF = {

  meta: {
    date: "Friday, June 5, 2026",
    eurusd: "1.1615",
    eurusd_direction: "stable",
    eurusd_driver: "EUR/USD is holding near 1.16 as investors await the ECB meeting next week, with markets pricing in an unchanged rate decision while Middle East ceasefire optimism provides mild support to risk sentiment and keeps the dollar from rebounding sharply.",
    eurusd_outlook: "The pair is expected to trade in the 1.1550-1.1680 range next week; USD positions face modest headwind if the Fed maintains a dovish-hold posture, but any escalation in the Middle East could trigger a safe-haven dollar bid that compresses the pair toward 1.14.",
    eurusd_weekly_change: "+0.1%"
  },

  vitals: {
    fear_greed: { value: 54, last_week: 48, label: "Neutral", interpretation: "The index climbed from fear territory last week to a neutral 54, reflecting the AI-driven rally in chipmakers and the S&P 500 closing above 7,600 for the first time. The move is constructive but not euphoric -- investors are greedy selectively, concentrated in AI hardware names, while other sectors trade defensively. Watch for a greed overshoot if the ECB dovish signal next week triggers a risk-on flush into equities." },
    vix: { value: 15.4, last_week: 18.2, label: "Calm", interpretation: "VIX has dropped sharply from the 18+ levels seen last week as trade ceasefire hopes and strong earnings reduced near-term uncertainty. A VIX below 15 signals broad complacency, which historically precedes short-term volatility spikes. The market is pricing very little risk -- the Broadcom earnings shock on Thursday (down 13%) is a reminder that individual names can gap massively even in calm macro conditions." },
    put_call: { value: 0.49, last_week: 0.64, label: "Bullish tilt", interpretation: "The equity put/call ratio at 0.49 shows a strong bias toward call buying, consistent with the FOMO (fear of missing out) dynamic in AI and semiconductor names. Last week's 0.64 reading was more balanced; the rapid drop to 0.49 confirms investors are aggressively buying upside calls in chip and AI stocks following Jensen Huang's Computex commentary. This level historically marks short-term complacency and can precede a brief mean-reversion pullback." }
  },

  regime: {
    title: "The AI Capex Goldrush: Revenue Proof or Bust",
    description: "The dominant market narrative in early June 2026 is the AI supercycle -- record hyperscaler capex commitments, Jensen Huang crowning Marvell as the next trillion-dollar company, and S&P 500 closing above 7,600 for the first time. However, the week ended with Broadcom's 13% crash revealing a dangerous dynamic: markets reward AI capex announcements with rising multiples, then punish any earnings report that does not show matching revenue acceleration. The regime now splits into a two-tier market: companies that can demonstrate AI-attributable revenue versus those still in the infrastructure-spending phase. Theses favouring: AI Infrastructure, US Financials, Semis custom silicon. Theses under headwind: Legacy healthcare (UnitedHealth), consumer discretionary ex-AI, European autos.",
    tailwinds: ["Jensen Huang Computex endorsements driving semi-sector re-rating", "S&P 500 nine-week win streak momentum and AI FOMO flows", "Alphabet $80B equity raise confirms AI demand exceeds all capacity"],
    headwinds: ["Broadcom earnings shock: market punishes missed capex-to-revenue conversion", "UnitedHealth healthcare sector drag from Medicare reimbursement squeeze", "Middle East tension keeping energy prices elevated and consumer spending restrained"]
  },

  league: {
    winners: [
      { rank: 1, name: "Marvell Technology (MRVL)", sector: "Semiconductors", change: "+33%", reason: "Jensen Huang declared Marvell the next trillion-dollar company at Computex; Q1 revenue +28% YoY confirmed AI networking chip demand is accelerating." },
      { rank: 2, name: "Hewlett Packard Enterprise (HPE)", sector: "Technology Infrastructure", change: "+25%", reason: "Q2 earnings and revenue guidance beat analyst expectations; AI server demand driving hardware refresh cycle." },
      { rank: 3, name: "Dell Technologies (DELL)", sector: "Technology Infrastructure", change: "+18%", reason: "Blowout Q1 2026 results triggered enterprise software and hardware re-rating across the sector." },
      { rank: 4, name: "ServiceNow (NOW)", sector: "Enterprise Software", change: "+14%", reason: "Dell earnings spillover drove wholesale enterprise AI software re-rating; ServiceNow seen as primary AI workflow automation beneficiary." },
      { rank: 5, name: "Micron Technology (MU)", sector: "Memory Semiconductors", change: "+8%", reason: "Crossed $1 trillion market cap; HBM sold out through 2027 confirmed by TrendForce; DDR5 RAM structural floor at $375." },
      { rank: 6, name: "Nvidia (NVDA)", sector: "Semiconductors", change: "+6%", reason: "New PC AI processor launch at Computex; Jensen Huang endorsements of multiple AI chip partners lifted the entire sector." },
      { rank: 7, name: "SK Hynix (000660.KS)", sector: "Memory Semiconductors", change: "+7%", reason: "Crossed $1 trillion market cap; HBM4 entirely sold out for 2026; Samsung strike resolution removed production risk overhang." },
      { rank: 8, name: "Alibaba (BABA)", sector: "China Tech / E-Commerce", change: "+6%", reason: "New Qwen3.7-Plus multimodal AI model launch drove sentiment; China AI theme re-emerging as US-China tensions partially ease." },
      { rank: 9, name: "VIDA Therapeutics (VIDA)", sector: "Biotech", change: "+53%", reason: "Small-cap biotech with significant clinical data release driving retail and institutional buying." },
      { rank: 10, name: "Legend Biotech (LEGN)", sector: "Biotech", change: "+42%", reason: "Positive clinical data on cell therapy pipeline; sector rotation into biotech benefiting from AI drug discovery momentum." },
      { rank: 11, name: "Palantir (PLTR)", sector: "AI/Defence Software", change: "+5%", reason: "Q1 2026 revenue +85% YoY to $1.63B; US government AI deployment accelerating; raised full-year 2026 guidance to $7.65B." },
      { rank: 12, name: "AMD (AMD)", sector: "Semiconductors", change: "+4%", reason: "Computex AI chip momentum and MRVL re-rating lifting all AI semiconductor names; MI350 and MI400 GPU pipeline gaining traction." },
      { rank: 13, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "+4%", reason: "Wegovy oral GLP-1 pill gaining market traction; competition with Lilly intensifying but both companies benefit from expanding total market." },
      { rank: 14, name: "Comfort Systems USA (FIX)", sector: "Industrial / HVAC", change: "+3%", reason: "Data centre cooling demand driven by AI infrastructure buildout; electrical and mechanical services boom from hyperscaler construction." },
      { rank: 15, name: "On Holding (ONON)", sector: "Consumer / Sportswear", change: "+3%", reason: "Premium athletic brand maintaining momentum; GLP-1 obesity drug adoption seen as long-term tailwind for athletic wear market." },
      { rank: 16, name: "MercadoLibre (MELI)", sector: "EM / Latin America Tech", change: "+3%", reason: "Institutional accumulation continues; analysts cite 41% upside to fair value; LatAm e-commerce penetration still in early innings." },
      { rank: 17, name: "Booking Holdings (BKNG)", sector: "Travel / Consumer", change: "+2%", reason: "Summer travel demand robust; premium leisure travel outperforming; European tourism season strong." },
      { rank: 18, name: "iShares Physical Gold (IGLN)", sector: "Commodities ETF", change: "+2%", reason: "Gold maintaining safe-haven bid amid Middle East tensions; dollar weakness year-to-date supporting gold prices." },
      { rank: 19, name: "Apple (AAPL)", sector: "Consumer Technology", change: "+2%", reason: "WWDC approaching; Apple Intelligence AI feature rollout maintaining investor optimism despite trading near all-time highs." },
      { rank: 20, name: "Trip.com (TCOM)", sector: "Asia Travel", change: "+4%", reason: "Outbound Chinese travel recovery continuing; intra-Asia travel remains strong as Middle East tensions redirect some long-haul routes." }
    ],
    losers: [
      { rank: 1, name: "Broadcom (AVGO)", sector: "Semiconductors", change: "-13%", reason: "Q2 revenue beat but CEO Hock Tan declined to raise full-year $100B AI chip sales target; market punished the non-raise despite 48% revenue growth and AI revenue doubling." },
      { rank: 2, name: "Amazon (AMZN)", sector: "E-Commerce / Cloud", change: "-7.6%", reason: "$200B 2026 data centre and AI infrastructure capex commitment weighing on near-term free cash flow expectations despite strong AWS 17% growth." },
      { rank: 3, name: "Alphabet (GOOGL)", sector: "Technology / Advertising", change: "-7.1%", reason: "$80B equity raise announcement seen as de facto cancellation of buyback programme; dilutive to existing shareholders despite confirming AI demand exceeds capacity." },
      { rank: 4, name: "CrowdStrike (CRWD)", sector: "Cybersecurity", change: "-7%", reason: "Q1 FY2027 earnings beat on all metrics but growth rate failed to meet elevated investor expectations; 4-for-1 stock split announced for July 2026." },
      { rank: 5, name: "UnitedHealth Group (UNH)", sector: "Managed Care / Healthcare", change: "-5%", reason: "Continued pressure from Medicare Advantage reimbursement squeeze; first annual revenue contraction in 30 years guidance weighing on managed care sector." },
      { rank: 6, name: "Rheinmetall (RHM.DE)", sector: "EU Defence", change: "-3%", reason: "European defence stocks consolidating after 2025 boom; peace-talk headlines creating uncertainty; Q1 revenue miss despite strong €73B backlog." },
      { rank: 7, name: "LVMH (MC.PA)", sector: "Luxury / Consumer", change: "-3%", reason: "China luxury demand recovery slower than expected; Middle East tensions reducing Gulf luxury spend; strong euro hurting USD-denominated revenue." },
      { rank: 8, name: "Starbucks (SBUX)", sector: "Consumer / Food", change: "-3%", reason: "Turnaround strategy progress slower than anticipated; consumer spending fatigue in premium coffee; China comp store sales still negative." },
      { rank: 9, name: "Intel (INTC)", sector: "Semiconductors", change: "-4%", reason: "Losing AI market share to Nvidia, AMD, and custom ASICs; foundry business struggling for profitability; no positive Computex catalysts." },
      { rank: 10, name: "Ulta Beauty (ULTA)", sector: "Consumer / Retail", change: "-3%", reason: "Consumer discretionary spending softness; competition from Sephora and online channels; GLP-1 beauty shift uncertainty." },
      { rank: 11, name: "Meta Platforms (META)", sector: "Social Media / AI", change: "-2%", reason: "Capex guidance raised to $125-145B for 2026; market nervous about ROI timeline; EU regulatory pressure on AI deployment." },
      { rank: 12, name: "HCA Healthcare (HCA)", sector: "Healthcare Systems", change: "-2%", reason: "Sympathy sell with UnitedHealth; Medicaid and Medicare reimbursement uncertainty affecting hospital sector broadly." },
      { rank: 13, name: "Danaos (DAC)", sector: "Shipping", change: "-2%", reason: "Container shipping charter rates softening from peak levels as Middle East Red Sea disruption partially stabilises." },
      { rank: 14, name: "Celsius Holdings (CELH)", sector: "Consumer / Beverages", change: "-4%", reason: "Energy drink market saturation; GLP-1 appetite suppression directly reduces discretionary beverage consumption among core demographics." },
      { rank: 15, name: "Wingstop (WING)", sector: "Consumer / QSR", change: "-3%", reason: "Elevated food cost inflation and consumer trade-down from premium restaurant concepts pressuring margins." },
      { rank: 16, name: "e.l.f. Beauty (ELF)", sector: "Consumer / Beauty", change: "-3%", reason: "Growth decelerating after multiple outperformance quarters; valuation multiple compressing as competition from dupes intensifies." },
      { rank: 17, name: "DoorDash (DASH)", sector: "Consumer / Delivery", change: "-2%", reason: "Profitability timeline uncertainty; rider classification regulatory risks in EU and select US states weighing on long-term cost structure." },
      { rank: 18, name: "Chewy (CHWY)", sector: "Consumer / Pet Retail", change: "-3%", reason: "Pet spending normalising after pandemic adoption boom; consumer trading down to private label and brick-and-mortar competitors." },
      { rank: 19, name: "PayPal (PYPL)", sector: "Fintech / Payments", change: "-2%", reason: "Competition from Apple Pay, Google Pay and embedded BNPL continues to pressure transaction volume growth and take rate." },
      { rank: 20, name: "Grab (GRAB)", sector: "EM / Southeast Asia Tech", change: "-2%", reason: "Regional economic softness and food delivery competition from local players; fintech segment margins under pressure." }
    ]
  },

  sectors: [
    { name: "US Technology (IT)", change: "-1.0%", direction: "down", driver: "Broadcom's 13% post-earnings drop dragged the sector despite Nvidia, Marvell and AMD gains -- a split between infrastructure winners and earnings-proof losers." },
    { name: "US Semiconductors", change: "+4.0%", direction: "up", driver: "Computex AI chip endorsements and Jensen Huang's Marvell trillion-dollar call sparked a broad semi rally; Micron, SK Hynix, AMD and Marvell all gained meaningfully." },
    { name: "US Healthcare", change: "-2.0%", direction: "down", driver: "UnitedHealth continued its multi-month decline on Medicare Advantage reimbursement squeeze; managed care dragged the entire healthcare sector." },
    { name: "US Financials", change: "+2.2%", direction: "up", driver: "Steepening yield curve supporting NIM (net interest margin); AI-driven deal flow boosting investment banking activity; credit quality improving." },
    { name: "US Industrials", change: "+1.5%", direction: "up", driver: "AI data centre construction boom driving electrical, HVAC and infrastructure services demand; Big Beautiful Bill Act defence industrial spending supporting." },
    { name: "US Energy", change: "+0.4%", direction: "up", driver: "Middle East tensions keeping oil price bid; LNG export capacity expansion supporting gas producers; ceasefire optimism capping upside." },
    { name: "US Consumer Discretionary", change: "-1.0%", direction: "down", driver: "Consumer spending fatigue in premium categories; GLP-1 disruption uncertainty across food, beauty and restaurant sectors weighing on multiples." },
    { name: "US Consumer Staples", change: "+0.5%", direction: "up", driver: "Defensive rotation as investors trim tech exposure post-Broadcom; staples offer dividend yield in a flat interest rate environment." },
    { name: "US Real Estate (REIT)", change: "+1.2%", direction: "up", driver: "Data centre REITs leading; AI infrastructure buildout creating unprecedented demand for data centre land and facilities." },
    { name: "US Utilities", change: "+1.8%", direction: "up", driver: "Power demand surge from AI data centres driving earnings upgrades at Vistra, Constellation Energy; utilities re-rated as AI infrastructure play." },
    { name: "US Comm Services", change: "-3.0%", direction: "down", driver: "Alphabet $80B equity raise and dilution concerns dragged Comm Services; Meta soft on capex fears; Netflix and Spotify partially offsetting." },
    { name: "EU Defence and Industrials", change: "-2.0%", direction: "down", driver: "Consolidation after the historic 2025 run; peace-talk headlines generating uncertainty; Rheinmetall Q1 revenue miss despite €73B backlog." },
    { name: "EU Banks", change: "+1.5%", direction: "up", driver: "NIM compression easing; ECB hold expected next week; credit quality improving as European economy stabilises at 0.9% growth." },
    { name: "EU Luxury", change: "-3.0%", direction: "down", driver: "China luxury demand recovery slower than hoped; strong euro reducing USD revenue conversion; Gulf luxury spend impacted by Middle East tensions." },
    { name: "EU Autos", change: "-1.5%", direction: "down", driver: "China EV competition intensifying; BYD European expansion accelerating; tariff uncertainty on Chinese-made vehicles complicating supply chain planning." },
    { name: "EU Insurance", change: "+1.0%", direction: "up", driver: "Higher interest rates supporting investment income; climate catastrophe premiums rising; Allianz, Hannover Re, Muenchener Rueck all benefiting from repricing cycle." }
  ],

  flows: [
    { label: "US Equities", amount: "+$15.2B", direction: "in", pct: 70, note: "ETF inflows dominated ($14.3B net issuance) while mutual funds saw $13B outflows; retail FOMO into AI chip ETFs and individual semiconductor names." },
    { label: "European Equities", amount: "+$2.1B", direction: "in", pct: 45, note: "Modest inflows despite defence stock consolidation; value investors accumulating EU banks and industrials at lower entry points." },
    { label: "EM Equities", amount: "+$1.2B", direction: "in", pct: 40, note: "Extending recent inflow streak; China tech re-rating on Alibaba AI launch attracting selective buying; LatAm outperforming on commodities." },
    { label: "Gold and Commodities", amount: "+$0.8B", direction: "in", pct: 35, note: "Geopolitical safe-haven bid from Middle East tensions maintaining gold interest; oil commodity flows modest despite price support." },
    { label: "Fixed Income", amount: "+$4.2B", direction: "in", pct: 55, note: "Bond funds seeing continued inflows as investors hedge equity concentration risk; both taxable and municipal bonds absorbing capital." },
    { label: "Cash / Money Markets", amount: "+$94.8B", direction: "in", pct: 85, note: "Fourth-largest money market inflow year-to-date; capital parked awaiting clarity on Fed rate path and Broadcom-style earnings volatility." }
  ],

  trends: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      detail: "The AI infrastructure buildout is now undeniably physical -- hyperscalers collectively committing $700B+ to data centre construction in 2026, with Alphabet raising $80B in fresh equity specifically to fund AI capacity. TSMC is scaling CoWoS (chip packaging capacity) nearly 4x, power utilities are being re-rated as AI plays, and HVAC and electrical infrastructure companies are booking multi-year backlogs from data centre construction. The AI chip shortage is not ending -- TSMC CEO stated demand will outpace supply for years.",
      status: "CONFIRMED",
      evidence: "Alphabet $80B equity raise; Broadcom Q2 AI revenue doubling to $10.8B; TSMC CEO confirms AI chip shortage persists for years; Comfort Systems data centre HVAC backlog surging.",
      type: "structural"
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      detail: "European defence spending is consolidating from the 2025 euphoria phase into a fundamentals verification phase. Rheinmetall's 73B euro order backlog is real, but a Q1 revenue miss and peace-talk headline risk caused a 21% YTD pullback from highs. The structural demand story -- NATO spending commitments, Eastern European rearmament, and the EU's Rearmament Fund -- remains intact. Markets are now scrutinising which companies can actually deliver on record backlogs.",
      status: "CONFIRMED",
      evidence: "Rheinmetall confirms 73B euro backlog and guides for significant Q2 growth; VanEck Defense ETF consolidating but not reversing; EU defence spending plans unchanged.",
      type: "structural"
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      detail: "The structural dollar debate continues but the 2026 movement is increasingly cyclical rather than structural. DXY (Dollar Index) trades near 99, EUR/USD holding 1.16 -- meaningful decline from 2023 highs but not a disorderly collapse. The US $900B trade deficit in 2025 and heavy Treasury issuance are genuine structural concerns, but no viable reserve currency alternative has emerged. Gold's bid and euro's stability reflect portfolio diversification rather than a dollar exit.",
      status: "CONFIRMED",
      evidence: "EUR/USD stable at 1.16, DXY near 99; Goldman and Morgan Stanley both maintaining forecasts for further modest USD weakness through H2 2026, characterising it as cyclical.",
      type: "structural"
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      detail: "The GLP-1 oral pill race entered a new phase with Novo Nordisk's Wegovy pill launching and Eli Lilly countering with Foundayo (orforglipron). Lilly's pill enables 12% body weight loss and can be taken any time without food restrictions -- a meaningful convenience advantage. Novo's formulation delivers 17% weight loss but with more complex dosing. Goldman Sachs projects Lilly will take 60% of the oral GLP-1 market by 2030. The total addressable market is expanding rapidly, benefiting both companies.",
      status: "CONFIRMED",
      evidence: "Novo Nordisk Wegovy pill launched; Eli Lilly Foundayo ACHIEVE-4 trial confirms cardiovascular safety; Goldman Sachs 60/21 market share projection for Lilly vs. Novo by 2030.",
      type: "structural"
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      detail: "Container shipping is entering a normalisation phase after the Red Sea disruption premium. Charter rates (daily rental price for one ship) are softening from peak crisis levels as ceasefire talks reduce the full-Suez-avoidance premium. However, structural trade fragmentation -- US tariffs, nearshoring, and China-US decoupling of specific supply chains -- continues to create routing complexity supporting non-spot shipping revenue. Global Ship Lease's first-ever newbuilding order for eight 6,200-TEU vessels reflects long-term demand conviction.",
      status: "UNCHANGED",
      evidence: "Global Ship Lease orders eight 6,200-TEU container ships from Chinese yards at approximately $600M; Danaos maintains fleet expansion; Red Sea routing gradually normalising.",
      type: "structural"
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      detail: "The pattern is clear: money market fund balances are at record levels ($94.8B single-week inflow this week) while retail investors simultaneously FOMO into individual AI chip stocks through ETFs and direct trades. The retail-institutional divergence -- institutions hedging via put options while retail buys calls -- is reflected in the put/call ratio dropping to 0.49. This tension is typical of mid-cycle bull markets where valuations stretch but momentum overrides caution.",
      status: "CONFIRMED",
      evidence: "Put/call ratio at 0.49 (bullish extreme); money market assets at record highs; Marvell, HPE, Nvidia retail trading volume surging post-Computex.",
      type: "cyclical"
    }
  ],

  executive: {
    biggest_mover: {
      name: "Marvell Technology (MRVL)",
      change: "+33%",
      reason: "Jensen Huang's on-stage declaration at Computex that Marvell could be the next trillion-dollar company triggered one of the largest single-week gains in any major semiconductor stock this year. The endorsement combined with Marvell's Q1 FY2027 results showing 28% revenue growth and accelerating data centre AI chip momentum pushed the stock from approximately $220 to $290+, briefly lifting market cap above $250B. The move matters for thesis 01: it confirms that Nvidia is actively ecosystem-building around networking and connectivity chips, expanding the AI hardware beneficiary universe well beyond GPUs."
    },
    key_risk: {
      name: "Broadcom Capex-to-Revenue Signal",
      reason: "Broadcom's 13% single-day crash despite 48% revenue growth and $10.8B AI chip revenue is the canary for the broader market: investors are now pricing a perfect capex-to-revenue conversion and punishing any failure to raise AI-specific guidance. This creates a dynamic where even strong results become catalysts for selling if AI revenue growth appears to plateau -- the risk is not Broadcom specifically but the repricing of all AI-exposed equities if the revenue-catch-up to hyperscaler capex does not materialise by Q3-Q4 earnings season."
    },
    conviction_call: {
      name: "SK Hynix and Micron -- HBM Memory Oligopoly",
      observation: "Both SK Hynix and Micron crossed the $1 trillion market cap milestone this week, and the structural case is strengthening: HBM (high-bandwidth memory) is sold out through 2027 according to TrendForce, DDR5 RAM has hit a structural price floor at $375, and Samsung's now-resolved strike threat demonstrated how fragile the supply chain is. SK Hynix holds 62% of HBM market share, Micron has gained to approximately 20%, and together they are the direct financial beneficiaries of every AI model training run on every GPU worldwide. This is not a trade -- it is the foundational infrastructure play of the AI era."
    },
    macro_pulse: {
      name: "Alphabet $80B Equity Raise at Computex Week",
      observation: "Alphabet's announcement of an $80B equity offering -- the largest in US corporate history -- to fund AI infrastructure expansion framed the entire week's narrative. It signals that AI demand so dramatically exceeds current capacity that even generating $70B+ in annual free cash flow (money left after all expenses and capital spending) is insufficient to fund the required buildout. The $460B Google Cloud backlog (signed contracts not yet completed) is 6.5x Alphabet's 2025 annual revenue -- meaning the company has pre-sold revenue it physically cannot yet deliver."
    },
    tags: [
      { label: "EUR/USD: 1.1615 stable", type: "blue" },
      { label: "Fed: hold at 3.5-3.75%; 2 cuts expected H2", type: "amber" },
      { label: "ECB: hold expected June 11 meeting", type: "blue" },
      { label: "Tariffs: 25% semi tariffs active; H200 case-by-case review", type: "amber" },
      { label: "AI capex: $700B+ committed; revenue lag is the key risk", type: "amber" },
      { label: "EU defence: consolidating; backlog intact", type: "green" },
      { label: "Semis: MRVL +33%, AVGO -13% -- bifurcated week", type: "amber" },
      { label: "Shipping: normalising post-Red Sea; GSL newbuilding", type: "blue" }
    ]
  },

  macro: {
    us: "The US economy enters Q2 2026 with real GDP growth rebounding to 2.0% annualised after Q4 2025's 0.5% near-stall. The Federal Reserve held rates at 3.5-3.75% at the April 28-29 FOMC meeting, with markets pricing two 25bp cuts in H2 2026. Inflation remains elevated -- headline PCE (Personal Consumption Expenditures, the Fed's preferred inflation measure) ran at 3.5% year-over-year through March 2026, 1.1 points above the prior year's pace, driven by energy prices and AI-driven capital goods costs. The labour market remains resilient: Q1 2026 private payroll growth averaged 2.5x the 2025 monthly pace, and unemployment held at 4.3%. The dominant policy tension is the One Big Beautiful Bill Act fiscal stimulus fighting against the Fed's restrictive-but-easing stance, with AI capital expenditure functioning as a private sector fiscal multiplier. Markets are treating AI capex as the new consumption driver -- a dangerous assumption if capex-to-revenue conversion disappoints in Q3.",
    europe: "Europe is navigating a complex dual transition -- strategic rearmament combined with slow underlying growth. ECB staff project 0.9% eurozone GDP growth in 2026, held back by weak German industrial output, sluggish consumer demand, and US tariff dampening effects on European exports. The ECB is widely expected to hold rates unchanged at the June 11 meeting as Middle East energy price inflation complicates the disinflationary path. European defence spending is the standout positive: NATO commitments and the EU ReArm fund are driving unprecedented backlogs at Rheinmetall, Safran, Thales and KNDS. However, the defence sector is now bifurcating -- companies that missed Q1 delivery targets are being punished by markets that were previously forgiving. EU banks are performing well on NIM (net interest margin) support and credit quality improvement. Luxury and autos remain under pressure from China demand softness and currency headwinds.",
    asia: "Asia presents a divided picture in June 2026. China's economy is tracking toward 4.6% GDP growth -- below the official 5% target -- as US tariff pressure and weak consumer confidence limit domestic momentum, despite Alibaba's Qwen3.7-Plus AI model launch generating enthusiasm for China's AI sector. Japan faces the dual risk of BOJ (Bank of Japan) rate normalisation potentially unwinding the JPY carry trade (cheap yen borrowed to fund global asset purchases), while TSMC Kumamoto Phase 2 ramp and Renesas automotive chip expansion provide manufacturing export tailwinds. South Korea's semiconductor sector dominated the week: Samsung's near-strike was averted on May 20 via a pay deal, preserving the HBM4 production ramp; both SK Hynix and Micron crossed $1 trillion market caps on AI memory demand; and the Korean government is debating treating semiconductor production as a national strategic asset. India and Southeast Asia continue accelerating as diversification destinations for supply chains relocating from China.",
    forward: "Next week's key events: (1) ECB rate decision, June 11 -- markets pricing an unchanged hold; any dovish language on future cuts would boost European equities and pressure EUR/USD. (2) US CPI data for May, due mid-week -- a hotter-than-expected print could push back Fed cut timing and reprice the bond market. (3) University of Michigan Consumer Sentiment -- watching for consumer confidence erosion from Middle East oil price pass-through. (4) Apple WWDC (Worldwide Developers Conference) -- Apple Intelligence AI feature demonstrations could move the stock; Siri upgrade credibility is the key question. (5) CrowdStrike 4-for-1 stock split record date approaches June 25; split-adjusted trading begins July 2. Semiconductor sector: watch for Computex follow-up orders or capacity announcements from TSMC and SK Hynix. Middle East ceasefire talks remain the wildcard -- a breakthrough would cause immediate oil price drop, VIX compression, and a risk-on flush into equities."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$310",
      change: "+2.0%",
      pe: "~33x",
      pe_plain: "paying 33 years of annual earnings per share",
      target: "$230-$250",
      theme: "Apple Intelligence AI ecosystem + WWDC 2026 imminent",
      news: "Apple traded near its all-time high of $315.20 reached on June 2. WWDC is imminent and markets are watching for credible Siri AI upgrades and on-device AI inference capabilities. The stock is up 56% over the past 12 months, driven by AI-adjacent optimism and expectations that Apple's 2.2B device install base becomes the largest consumer AI distribution platform on earth.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Premium valuation at 33x earnings leaves little room for WWDC disappointment; strong install base and AI distribution optionality justify holding but not adding at current levels."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$440",
      change: "+1.5%",
      pe: "~30x",
      pe_plain: "paying 30 years of annual earnings per share",
      target: "$500-$550",
      theme: "Azure AI run rate $37B annualised; Build 2026 agent platform announcements",
      news: "Microsoft confirmed at Build 2026 a sweeping expansion of AI agent capabilities -- Office 365 Copilot Agent Mode, GitHub Copilot autonomous coding, and Azure AI Foundry enterprise orchestration. Azure grew 31% in Q3 FY2026 driven by AI services adopted by over 80% of Fortune 500 companies. The company's AI annualised revenue run rate reached $37B, up 123% year-on-year. The $190B 2026 capex commitment signals AI capacity is constrained, with Azure demand explicitly exceeding supply.",
      earnings: "October 2026 (est. Q1 FY2027)",
      earnings_proximity: "far",
      verdict: "BUY",
      verdict_reason: "AI revenue at $37B annualised and accelerating; 31% Azure growth with demand exceeding supply justifies the premium multiple and makes MSFT the clearest AI-revenue-converted play in Mag7."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$253",
      change: "-7.6%",
      pe: "~31x",
      pe_plain: "paying 31 years of annual earnings per share",
      target: "$310-$330",
      theme: "AWS cloud 17% growth; $200B AI capex weighing on free cash flow narrative",
      news: "Amazon fell 7.6% this week as investors digested $200B in 2026 data centre and AI infrastructure spending commitments. Despite the stock decline, the underlying business is performing well -- AWS grew 17% year-over-year, its fastest pace in two years. The disconnect between operational strength and stock performance reflects the hyperscaler capex punishment pattern: even strong revenue growth is penalised when the capex magnitude frightens free cash flow focused investors.",
      earnings: "July 2026 (est. Q2)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "Operational strength is real but $200B capex weighs on free cash flow narrative; wait for Q2 AWS growth acceleration data before adding to position."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$370",
      change: "-7.1%",
      pe: "~26x",
      pe_plain: "paying 26 years of annual earnings per share",
      target: "$420-$450",
      theme: "$80B equity raise to fund AI infrastructure; Google Cloud backlog $460B+",
      news: "Alphabet announced an $80B equity offering: $30B public offering, $10B private placement with Berkshire Hathaway, and $40B at-the-market programme in Q3 2026. Markets interpreted this as de facto cancellation of the buyback programme and dilutive to existing shareholders. Google Cloud backlog stands above $460B (signed contracts not yet completed), confirming AI demand is real and exceeds capacity. Alphabet's 2026 capex is $180-190B, nearly double 2025.",
      earnings: "July 2026 (est. Q2)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "Dilution from $80B equity raise is a short-term headwind; AI demand is real with $460B+ cloud backlog, but market needs to digest the capital structure change before re-rating higher."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$620",
      change: "-1.5%",
      pe: "~20x",
      pe_plain: "paying 20 years of annual earnings per share",
      target: "$700-$800",
      theme: "Cheapest Mag7 at 20x; $125-145B 2026 capex; Instagram Plus subscription launched",
      news: "Meta is the cheapest Mag7 name at 20x forward earnings despite raising 2026 capex guidance to $125-145B -- the largest absolute capex commitment in corporate history relative to current revenue. Instagram Plus global rollout adds a nascent subscription revenue stream. The market is nervous about ROI timeline on AI infrastructure, but Meta's ad targeting improvements driven by AI are already demonstrably improving revenue growth and engagement metrics.",
      earnings: "July 2026 (est. Q2)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Cheapest Mag7 at 20x; ad business demonstrably AI-enhanced; $125-145B capex builds durable infrastructure moat that competitors cannot match at equivalent scale."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$216",
      change: "-1.0%",
      pe: "~34x",
      pe_plain: "paying 34 years of annual earnings per share",
      target: "$250-$300",
      theme: "AI chip dominance; Computex new PC AI processor; $78B Q1 FY2027 revenue guide",
      news: "Nvidia's week was defined by Jensen Huang's presence at Computex -- endorsing Marvell as the next trillion-dollar company and launching a new AI PC processor. Nvidia's own next earnings are August 26, 2026. The stock pulled back modestly from mid-May's $236 all-time high. Revenue guide of $78B for Q1 FY2027 represents continued 85%+ growth trajectory. Market cap at $5.3 trillion makes Nvidia the most valuable company in the world.",
      earnings: "August 26, 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Unassailable AI chip position but $5.3T market cap requires continued extraordinary growth to justify; near-term Computex momentum does not change the medium-term valuation challenge."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$422",
      change: "+1.5%",
      pe: "~197x",
      pe_plain: "paying 197 years of annual earnings per share -- almost entirely speculative optionality value",
      target: "$150-$300 (analyst range extremely wide)",
      theme: "Robotaxi Austin expansion; SpaceX IPO speculation; Optimus humanoid robot",
      news: "Tesla expanded its unmanned Robotaxi service to the entire Austin metropolitan area including suburbs, the I-35 highway, and Austin-Bergstrom International Airport -- the fifth and largest expansion. May stock rally was partly driven by SpaceX IPO speculation tied to Elon Musk's Tesla stake. GuruFocus estimates the stock is 47.6% overvalued. The Robotaxi story is real but revenue contribution remains minimal relative to the 197x P/E embedded expectation.",
      earnings: "July 2026 (est. Q2)",
      earnings_proximity: "upcoming",
      verdict: "CAUTION",
      verdict_reason: "197x P/E embeds a $10T Robotaxi optionality that is still years from material revenue; SpaceX rumours and Musk halo are distorting fundamentals-based valuation."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "Alphabet raises $80B equity to fund AI infra exceeding capacity; Broadcom AI chip revenue doubles to $10.8B; Comfort Systems data centre HVAC backlog accelerating; TSMC CEO confirms AI chip shortage for years.",
      instruments: "NVDA, AVGO, MRVL, TSM, FIX, VST, CEG, SMCI",
      highlights: [
        { name: "Marvell Technology (MRVL)", change: "+33%", note: "Jensen Huang's Computex endorsement confirmed Marvell's networking and connectivity chips are essential to every AI data centre -- the company designs the custom ASICs (application-specific chips) and ethernet interconnects that link thousands of GPUs in large clusters." },
        { name: "Broadcom (AVGO)", change: "-13%", note: "Paradoxically the week's biggest loser is also a core thesis confirmation: $10.8B in Q2 AI chip revenue (doubled YoY) is undeniably thesis-positive, but the market punished the non-raise of full-year guidance as a signal that AI revenue may be plateauing at current capacity." },
        { name: "Comfort Systems USA (FIX)", change: "+3%", note: "The invisible AI infrastructure play: data centres require massive electrical and HVAC installation at every site. FIX is booking multi-year backlogs as hyperscalers build at unprecedented pace -- a low-multiple way to own the physical AI buildout." },
        { name: "Nvidia (NVDA)", change: "-1%", note: "Modest pullback from all-time highs despite a positive Computex week; $78B Q1 FY2027 revenue guide maintained; the stock now needs August earnings to re-accelerate the multiple." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "UNCHANGED",
      evidence: "Rheinmetall 73B euro order backlog confirmed; EU ReArm fund commitments intact; Safran, Thales maintaining record order intake; sector consolidating on peace-talk headline risk.",
      instruments: "RHM.DE, SAF.PA, HO.PA, SIE.DE, HEICO, HWM, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall (RHM.DE)", change: "-3%", note: "Near-term miss versus long-term story: Q1 revenue slightly below targets but 73B euro backlog (signed contracts not yet completed) and NATO spending commitments mean the pipeline is real. UBS maintains Buy with 1,600 euro target. The 21% YTD pullback from highs is creating an accumulation opportunity for patient investors." },
        { name: "HEICO Corp (HEI)", change: "+2%", note: "US defence-adjacent aerospace MRO (maintenance, repair and overhaul) beneficiary; provides non-OEM replacement parts for military and commercial aircraft -- structural demand from defence fleet expansion." },
        { name: "VanEck Defense ETF (DFND)", change: "-1%", note: "Sector-level consolidation after the historic 2025 run; individual stock selection now critical as the easy buy-everything-defence phase ends and fundamentals become the differentiator." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "EUR/USD holding 1.16; DXY near 99; Morgan Stanley and Goldman maintaining USD weakness forecasts through H2 2026; gold bid maintained; Alphabet $80B offering partly reflects reduced dollar automatic funding role.",
      instruments: "Gold ETF (IGLN), EUR/USD, WisdomTree Bitcoin ETP, iShares Core MSCI Europe",
      highlights: [
        { name: "iShares Physical Gold (IGLN)", change: "+2%", note: "Gold maintaining its bid as portfolio diversification from dollar concentration continues; Middle East geopolitical tension adding safe-haven premium on top of structural de-dollarisation flow." },
        { name: "EUR/USD", change: "+0.1%", note: "Stability at 1.16 confirms the euro is absorbing the USD weakness narrative; ECB hold next week may provide temporary EUR support if language is more hawkish than expected." },
        { name: "WisdomTree Bitcoin ETP", change: "+3%", note: "Bitcoin capturing some of the alternative-to-dollar narrative; institutional flows via ETPs continuing as US regulatory framework clarifies." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "CONFIRMED",
      evidence: "Novo Nordisk Wegovy pill launched; Eli Lilly Foundayo confirms safety and efficacy in ACHIEVE-4 trial; Goldman Sachs projects Lilly takes 60% of oral GLP-1 market by 2030; total market expanding for both companies simultaneously.",
      instruments: "NVO, LLY, CELH, ULTA, WMT",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "+4%", note: "Wegovy pill launch gives Novo a first-mover advantage in oral GLP-1 (glucagon-like peptide-1 -- the drug class that mimics the appetite-reducing hormone); 17% body weight loss in trials is highest efficacy in the market. Lilly's pill's convenience (any time, no food restriction) is a credible competitive threat in the long run." },
        { name: "Eli Lilly (LLY)", change: "+2%", note: "Foundayo ACHIEVE-4 trial reaffirmed cardiovascular safety -- critical for a drug taken lifelong by hundreds of millions of patients; Goldman's 60% oral market share projection for 2030 makes Lilly the primary GLP-1 beneficiary in the pill format." },
        { name: "Celsius Holdings (CELH)", change: "-4%", note: "The GLP-1 bear case for energy drinks: reduced caloric intake and appetite suppression directly reduce discretionary beverage consumption; Celsius faces headwinds as GLP-1 adoption penetrates its young-adult core demographic." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "UNCHANGED",
      evidence: "Global Ship Lease orders first-ever newbuilding fleet of eight 6,200-TEU ships; Red Sea routing gradually normalising but structural trade fragmentation routes remain; container demand firm on Asia-to-Europe and transpacific lanes.",
      instruments: "GSL, DAC, INSW, TEN, STNG",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+1%", note: "The newbuilding order for eight 6,200-TEU ships at approximately $600M signals long-term conviction in container shipping demand despite near-term charter rate normalisation. The charter backlog (signed contracts not yet completed) provides revenue visibility while new ships add capacity for the next demand cycle." },
        { name: "Danaos (DAC)", change: "-2%", note: "Fleet of 75 containerships and 27 under construction; drybulk expansion hedges pure container exposure; slight decline reflects charter rate normalisation but fundamentals remain sound with significant contracted revenue." },
        { name: "International Seaways (INSW)", change: "-1%", note: "Tanker segment; Middle East ceasefire hopes slightly reducing the geopolitical premium in crude tanker rates, though structural demand from trade route diversification continues." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "CONFIRMED",
      evidence: "S&P 500 closed above 7,600 for the first time; nine consecutive weekly gains; put/call ratio at 0.49 (extreme bullish tilt); money market inflow of $94.8B same week as record equity ETF inflows -- bifurcated retail behaviour.",
      instruments: "Vanguard S&P 500 ETF (VOO), iShares Core S&P 500, SPDR Russell 2000 (IWM)",
      highlights: [
        { name: "S&P 500 (SPX)", change: "+1.4%", note: "Ninth consecutive weekly gain -- longest winning streak since 2023. S&P 500 closed above 7,600 for the first time, driven by AI chip momentum and earnings season strength. Nine-week streaks typically end with a rotation or profit-taking episode." },
        { name: "iShares Core S&P 500 (IVV)", change: "+1.4%", note: "ETF net issuance of $14.3B this week alone; retail investors rotating from money market to equity ETFs, while money market balances simultaneously grow -- suggesting new money entering rather than cash liquidation." },
        { name: "SPDR Russell 2000 (IWM)", change: "+0.5%", note: "Small-cap underperformance versus large cap continues; AI-driven rally remains concentrated at the top of the market cap distribution rather than a broad risk-on rotation." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Marvell Technology",
      sector: "Semiconductors / AI Networking",
      headline: "Jensen Huang declares Marvell the next trillion-dollar company at Computex -- stock surges 33% to $290",
      detail: "The significance is not just the price move but what Huang's endorsement reveals about AI infrastructure architecture: Marvell designs the custom ASIC chips (application-specific integrated circuits -- chips built for one specific task, faster and more efficient than general-purpose GPUs) and high-speed ethernet interconnects that allow thousands of GPUs to communicate inside data centres. As AI clusters scale from thousands to millions of chips, networking becomes the bottleneck -- and Marvell owns that layer. This represents a potential expansion of the investable AI chip universe beyond the well-known Nvidia-TSMC-SK Hynix axis.",
      tag: "BULL"
    },
    {
      num: "02",
      company: "Alphabet",
      sector: "Technology / Cloud",
      headline: "Alphabet raises $80B through equity offering -- largest corporate equity raise in US history -- to fund AI infrastructure",
      detail: "The scale of this capital raise signals something extraordinary: Alphabet's AI capacity is so constrained relative to demand that even generating $70B+ in annual free cash flow (money left after all expenses and capital spending) is insufficient to fund the required buildout. The $460B Google Cloud backlog (signed contracts not yet completed) is 6.5x Alphabet's 2025 annual revenue -- meaning the company has pre-sold revenue it physically cannot yet deliver. The equity dilution is a short-term negative for shareholders but a long-term positive for the AI infrastructure thesis.",
      tag: "WATCH"
    },
    {
      num: "03",
      company: "Broadcom",
      sector: "Semiconductors / AI Chips",
      headline: "Broadcom AI chip revenue doubles to $10.8B but stock crashes 13% -- even beats are not enough",
      detail: "The Broadcom incident reveals a dangerous market dynamic for AI stocks: investors have built in not just beat expectations but beat-AND-raise requirements. Broadcom grew AI revenue 100%+ year-on-year, delivered 48% total revenue growth, and guided Q3 to $29.4B -- all above consensus. The crime: CEO Hock Tan did not raise the full-year $100B AI chip sales target. This punish-the-non-raise dynamic implies the AI trade is fully priced at the margin -- any company that does not accelerate its AI guidance faces a harsh re-rating regardless of absolute results.",
      tag: "BEAR"
    },
    {
      num: "04",
      company: "Samsung and SK Hynix",
      sector: "Memory Semiconductors",
      headline: "Samsung strike averted May 20; SK Hynix crosses $1 trillion market cap -- HBM oligopoly confirmed",
      detail: "The resolution of the Samsung near-strike (48,000 workers, projected $700M/day production loss) combined with both SK Hynix and Micron crossing $1 trillion market caps tells a single story: the HBM (high-bandwidth memory -- specialised chips required for AI training, stacked 3D to deliver massive data bandwidth to GPUs) market is now confirmed as a decades-long structural oligopoly. TrendForce confirms HBM is sold out through 2027. DDR5 RAM has a structural price floor at $375. The memory chip sector is entering a pricing supercycle.",
      tag: "BULL"
    },
    {
      num: "05",
      company: "CrowdStrike",
      sector: "Cybersecurity",
      headline: "CrowdStrike delivers record Q1 ARR, beats revenue, announces 4-for-1 stock split -- yet falls 7%",
      detail: "CrowdStrike's ARR (annual recurring revenue -- contracted subscription revenue annualised) grew 24% year-on-year to $5.51B, net new ARR was up 32%, and free cash flow hit a record $468M. The 4-for-1 stock split effective July 2, 2026 signals management confidence. Yet the stock fell 7% -- the same punish-the-non-acceleration dynamic as Broadcom. The cybersecurity market is real but investor expectations have outrun even strong fundamental delivery. CRWD becomes interesting on further weakness.",
      tag: "WATCH"
    },
    {
      num: "06",
      company: "Eli Lilly",
      sector: "Pharmaceuticals / GLP-1",
      headline: "Foundayo ACHIEVE-4 trial confirms cardiovascular safety -- Goldman Sachs projects 60% oral GLP-1 market share by 2030",
      detail: "The ACHIEVE-4 trial is the longest Phase 3 study of orforglipron and confirmed consistent cardiometabolic health improvements -- critical because GLP-1 drugs will be taken lifelong by hundreds of millions of people, so cardiovascular safety is not a regulatory checkbox but an existential commercial requirement. Goldman's 60/21 market share projection (Lilly vs. Novo) for the oral segment by 2030 is based on Foundayo's dosing convenience advantage. The combined oral and injectable GLP-1 total addressable market now exceeds $100B by most analyst estimates.",
      tag: "BULL"
    },
    {
      num: "07",
      company: "Global Ship Lease",
      sector: "Container Shipping",
      headline: "Global Ship Lease places first-ever newbuilding order for eight 6,200-TEU ships at approximately $600M amid Red Sea normalisation",
      detail: "The timing of this order is significant: GSL is committing to new capacity precisely when charter rates (daily ship rental prices) are softening from their Red Sea crisis peak, signalling management's view that structural trade fragmentation -- US tariffs, nearshoring, China-US supply chain decoupling -- will sustain demand above the historical norm well into the 2030s. The newbuilds deliver in 2028-2030, hedging future charter rate compression with modern, fuel-efficient capacity that commands premium rates. This is exactly the kind of long-term strategic positioning thesis investors should track.",
      tag: "BULL"
    },
    {
      num: "08",
      company: "China -- SMIC and Huawei",
      sector: "Semiconductors / Geopolitics",
      headline: "SMIC achieves 5nm-class production using DUV multi-patterning; Huawei Ascend 950 integrates first Chinese-made HBM",
      detail: "SMIC's N+3 node (5nm-class process) entered mass production in early 2026 using multi-patterning on existing ASML DUV (deep ultraviolet -- older generation lithography) equipment rather than the EUV (extreme ultraviolet -- ASML's most advanced, export-restricted machines) it cannot access. Separately, the Huawei Ascend 950 series is the first Chinese AI chip to integrate in-house HBM (high-bandwidth memory), removing a key supply chain vulnerability. Combined, these developments show China's AI chip ecosystem is advancing faster than most US analysts projected, raising concerns about the geopolitical premium embedded in ASML and Nvidia valuations.",
      tag: "WATCH"
    }
  ],

  risers: [],

  ai_trade: {
    status: "CAUTION",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings -- a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "GREEN",
        finding: "All four hyperscalers reinforcing or raising capex: Meta $125-145B, Alphabet $180-190B (plus $80B equity raise to fund more), Microsoft $190B, Amazon $200B. No hedging language -- Alphabet's equity raise is the most explicit possible demand confirmation signal.",
        implication: "AI chip demand is structurally secured through 2027; no demand-side risk for Nvidia, Marvell, Broadcom, TSMC in the near term."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM (high-bandwidth memory) and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "HBM3E prices raised approximately 20% for 2026 by Samsung and SK Hynix; server DRAM up 60-70%; DDR5 RAM structural floor at $375; TrendForce confirms HBM sold out through 2027.",
        implication: "Memory pricing supercycle intact; SK Hynix, Samsung and Micron margin expansion continues; no plateau signal visible."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Broadcom's 13% drop despite doubling AI revenue signals the market now demands visible, accelerating, directly-attributable AI revenue -- and punishes companies that cannot demonstrate it. Azure growing 31% and Microsoft AI ARR at $37B show partial conversion, but the $700B collective capex vs. less than $100B in identifiable AI-specific revenue is a growing gap.",
        implication: "The gap between AI capex (spending on AI infrastructure) and AI revenue (money earned from AI workloads) is the single most important number to track going into Q3 earnings; a widening gap will trigger a broad AI valuation reset."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E (price-to-earnings) expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "84% of S&P 500 beat Q1 2026 EPS estimates; Mag7 expected to grow earnings 17.1% in 2026 vs. 12.9% for the rest of the S&P 500. However, individual names show divergence: TSLA at 197x is pure optionality; META at 20x is value-within-growth; NVDA at 34x requires 85%+ revenue growth to sustain. P/E expansion is partially fundamental, partially sentiment-driven.",
        implication: "Overall multiples are defensible if AI revenue conversion accelerates; but the Broadcom and Alphabet reactions this week show the market is starting to price execution risk rather than potential -- a healthy but volatility-increasing transition."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "SMIC has achieved N+3 (5nm-class) mass production via DUV multi-patterning at approximately 20% yield; Huawei Ascend 950 integrates first Chinese in-house HBM; domestic EUV system reportedly being tested at Huawei's Dongguan facility. Progress is faster than consensus expected one year ago.",
        implication: "Not yet RED -- SMIC's 20% yield at 5nm-class means approximately 8x more wafer input per usable chip vs. TSMC, making production costs prohibitive at volume scale. But the trajectory toward viable 5nm mass production within 18-24 months is becoming credible and should reduce the geopolitical premium in ASML and TSMC valuations by approximately 10-15%."
      }
    ]
  },

  semis: {
    status: "WATCH",
    regions: [
      {
        region: "Korea",
        info: "Korea supplies approximately 95% of global HBM (high-bandwidth memory). Production disruption propagates to NVIDIA allocation within 4-6 weeks. Samsung strike losing share to SK Hynix equals rotation within sector, not a sector exit.",
        signal: "AMBER",
        finding: "Samsung's planned 18-day strike (48,000 workers, approximately $700M/day production risk) was averted via deal reached May 20. The underlying wage dispute is not fully resolved -- SK Hynix workers are now demanding Samsung-level housing loans (up to 500 million won / $330K per worker). Government declared semiconductors a public good and is considering a social solidarity wage system. HBM4 production ramp is proceeding normally post-resolution.",
        implication: "Immediate production risk has passed but structural wage pressure in Korean semiconductors is now industry-wide -- expect higher input costs for Samsung and SK Hynix beginning 2027 contracts, which will be passed through to HBM pricing (positive for revenue, slight margin headwind)."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade (cheap yen borrowed to buy global assets), hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "TSMC Kumamoto Phase 2 ramp proceeding on schedule; BOJ maintaining cautious rate normalisation without surprise hikes; Tokyo Electron orders remain strong; Renesas automotive chip demand firm for 2026.",
        implication: "Japan is stable -- no near-term BOJ surprise risk and TSMC Kumamoto adding capacity on schedule. Monitor BOJ July meeting as the next potential macro shock point."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS (advanced chip packaging) capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS capacity scaling from 35K to 130K wafers per month by end 2026 -- but remains sold out through 2026 despite this 4x expansion. TSMC has outsourced packaging to Amkor (approximately 180-190K wafers per year) and SPIL (60-80K wafers). SMIC achieving 5nm-class production is a relevant China/Taiwan signal. No new rare earth export controls announced this week but China's toolkit remains unused and high-impact.",
        implication: "CoWoS remains the binding NVIDIA GPU output constraint; Amkor outsourcing partially relieves but does not eliminate the bottleneck. SMIC 5nm progress represents slow-moving but directionally significant moat erosion for TSMC's leading position."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act ($52B subsidy programme) drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "January 2026 BIS (Bureau of Industry and Security) revised export policy changed H200/MI325X exports to China from presumption-of-denial to case-by-case review with security requirements. 25% semiconductor tariff active since January 14, 2026. CHIPS Act disbursements proceeding but Intel foundry profitability challenges continue. No new export control expansions announced in June.",
        implication: "Policy environment relatively stable in June but January 2026 changes created significant compliance complexity; any escalation in US-China tension could trigger rapid tightening of the case-by-case H200 review, which would hit Nvidia China sales allocation."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV (extreme ultraviolet lithography). SMEE is China's domestic alternative, currently at approximately 28nm class. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "SMEE's SSA800 series has scaled at 28nm class; Huawei's Dongguan facility reportedly testing a domestic EUV system using laser-induced discharge plasma (LDP) technology -- an alternative to ASML's laser-produced plasma approach. Planned trial production in 2025, mass production 2026 timeline appears to be slipping but the technological trajectory is becoming credible.",
        implication: "ASML's EUV monopoly is intact at volume for the next 2-3 years; however, the 10-15% geopolitical premium embedded in ASML's valuation is at risk as China's domestic programme progresses. Position sizing in ASML should reflect this optionality compression."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix and Samsung pricing power. If Samsung loses share due to strike or yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "AMBER",
        finding: "Micron has taken approximately 20% of Nvidia's HBM4 allocation; SK Hynix holds 62% overall HBM market share; Micron overtook Samsung on some specific allocations. The Samsung strike-averted scenario preserved Samsung's approximately 17% share for now, but Micron's quality-to-cost trajectory makes further share gains in 2027 likely.",
        implication: "The AMBER signal reflects Micron's meaningful progress -- not yet RED (share gains remain below the 15% price-parity threshold) but directionally SK Hynix and Samsung should expect pricing pressure from Micron competition in HBM4E and HBM5 generation chips."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM (total addressable market) from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "All hyperscaler capex raises this week were predominantly for NVIDIA GPU procurement -- Alphabet's $80B raise, Amazon's $200B infra spend, Microsoft's $190B capex all explicitly reference GPU capacity. Custom silicon (Google TPU v5, AWS Trainium2, Microsoft Maia) remains predominantly used for inference rather than training, which requires NVIDIA's CUDA software ecosystem.",
        implication: "NVIDIA's training dominance is intact for at least 2-3 more GPU generations; the custom silicon threat is real but operating on a longer timeline than many bears expect."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS (Chip-on-Wafer-on-Substrate) is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "AMBER",
        finding: "TSMC has begun outsourcing CoWoS to Amkor (180-190K wafers per year) and SPIL (60-80K wafers per year) -- this is both a capacity relief signal and a moat-sharing signal. Samsung's I-Cube and X-Cube packaging have 26-39 week lead times and lower throughput. Amkor's Incheon facility is itself constrained at similar lead times.",
        implication: "The outsourcing confirms TSMC cannot satisfy GPU packaging demand alone; Amkor and ASE become secondary beneficiaries of AI chip demand growth. TSMC retains pricing power on leading-edge CoWoS-L and CoWoS-R variants used for the most advanced GPUs, while commodity CoWoS-S moves to OSATs (outsourced semiconductor assembly and test companies)."
      }
    ]
  }

};
