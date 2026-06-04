const BRIEF = {

  meta: {
    date: "Thursday, June 4, 2026",
    eurusd: "1.1597",
    eurusd_direction: "falling",
    eurusd_driver: "EUR/USD slipped from a weekly high of 1.1678 on May 29 to 1.1597 by June 3, pressured by rising Middle East tensions that boosted safe-haven USD demand and increasing market conviction that the ECB will deliver a 25bp rate hike on June 11.",
    eurusd_outlook: "The pair looks range-bound at 1.15-1.17 next week; a hawkish ECB surprise could paradoxically push EUR lower on growth fears, so USD positions face two-way risk around the Thursday decision.",
    eurusd_weekly_change: "-0.5%"
  },

  vitals: {
    fear_greed: { value: 54, last_week: 59, label: "Neutral", interpretation: "The index drifted from Greed (59) last week to Neutral (54) this week, reflecting some profit-taking after the S&P 500's ninth consecutive winning week. The pullback in sentiment is orderly — not fearful — suggesting investors are rotating and rebalancing rather than fleeing risk. At 54, the market retains a slight bullish bias without the froth that historically precedes sharp corrections." },
    vix: { value: 16.1, last_week: 17.8, label: "Calm", interpretation: "VIX dropped from ~17.8 to 16.1 this week, confirming that markets absorbed the Broadcom earnings event and CrowdStrike stock split announcement without anxiety. A VIX below 17 is historically consistent with a risk-on regime where hedging demand is low. The calm reading validates the AI earnings beat cycle narrative — investors are adding exposure, not hedging it." },
    put_call: { value: 0.42, last_week: 0.55, label: "Bullish tilt", interpretation: "The CBOE equity put/call ratio fell sharply to 0.42 from ~0.55 last week, meaning calls [bets on prices rising] are being bought at more than twice the rate of puts [bets on prices falling]. This is definitively bullish positioning. Readings below 0.50 often accompany market peaks in the short term, so the signal is positive for momentum but warrants watching for exhaustion." }
  },

  regime: {
    title: "AI Earnings Validation Loop",
    description: "The dominant narrative this week: AI capex is finally producing revenue, not just promises. Broadcom's $10.8B AI semiconductor quarter and CrowdStrike's ARR beat triggered a wholesale re-rating of enterprise AI software. ServiceNow's 26% two-session surge on the Dell print showed how quickly capital rotates to any company that can claim AI productivity uplift. The regime favours Thesis 1 (AI infrastructure) and Thesis 6 (retail rotation into equities); it headwinds Thesis 3 (dollar softening) via safe-haven USD bid from Middle East tensions.",
    tailwinds: ["AI earnings beat cycle accelerating", "Hyperscaler capex commitments at record $700B+", "Retail flows into equities sustaining ninth S&P weekly gain"],
    headwinds: ["ECB June 11 rate hike risk (97% market probability)", "Alphabet $84.75B equity dilution weighing on mega-cap sentiment", "Middle East tensions sustaining oil price and USD bid"]
  },

  league: {
    winners: [
      { rank: 1, name: "Broadcom", sector: "Semiconductors", change: "+15.2%", reason: "Q2 AI chip revenue of $10.8B (+143% YoY) crushed estimates; guided Q3 AI revenue to $16B (+200% YoY); stock surged on validation of AI supercycle thesis." },
      { rank: 2, name: "ServiceNow", sector: "Enterprise Software", change: "+14.4%", reason: "Dell's blowout enterprise AI print triggered a wholesale re-rating of SaaS platforms; ServiceNow booked a 26% two-session gain as investors priced in AI-driven seat expansion." },
      { rank: 3, name: "Marvell Technology", sector: "Semiconductors", change: "+12.1%", reason: "Rode Broadcom's AI coattails as investors rotated into custom silicon designers; among the top monthly gainers at +33% through June." },
      { rank: 4, name: "CrowdStrike", sector: "Cybersecurity", change: "+8.1%", reason: "Beat Q1 estimates with $1.39B revenue (+25.6% YoY), announced 4-for-1 stock split, and raised FY27 guidance; stock dipped after-hours on modest Q2 guide but recovered intraday." },
      { rank: 5, name: "Palantir", sector: "AI / Defence Software", change: "+7.3%", reason: "Momentum investors added exposure ahead of government AI contract announcements; stock briefly hit $156 before profit-taking; remains priced at 42x forward sales." },
      { rank: 6, name: "ASML", sector: "Semiconductor Equipment", change: "+5.8%", reason: "Rode semiconductor upcycle narrative after Broadcom beat; May gain of 13% continued into June as High-NA EUV demand from TSMC and Intel remained robust." },
      { rank: 7, name: "Tesla", sector: "EV / Autonomous", change: "+3.9%", reason: "SpaceX IPO speculation and robotaxi city expansion narrative sustained buying despite operational glitches; stock priced for $10 trillion robotaxi TAM [total addressable market]." },
      { rank: 8, name: "Apple", sector: "Consumer Technology", change: "+3.6%", reason: "Set all-time closing high of $315.20 on June 2 ahead of WWDC; iPhone revenue +22% in March quarter; analysts flagged a hidden AI catalyst in on-device model deployment." },
      { rank: 9, name: "AMD", sector: "Semiconductors", change: "+3.4%", reason: "Benefited from Broadcom's AI revenue proof point; MI300X [AMD's AI GPU] demand narrative validated as hyperscaler CapEx stays elevated." },
      { rank: 10, name: "Meta Platforms", sector: "Social Media / AI", change: "+2.2%", reason: "Capex raise to $145B and Llama 4 deployment across WhatsApp reinforced AI monetisation story; stock held near $600." },
      { rank: 11, name: "Global Ship Lease", sector: "Container Shipping", change: "+2.1%", reason: "100% charter [daily vessel rental] coverage for 2026 and $2B+ contracted revenues insulate from spot rate volatility; forward sales of non-core vessels at premium prices." },
      { rank: 12, name: "On Holding", sector: "Consumer / Sportswear", change: "+2.0%", reason: "Premium athletic brand holding premium valuation as consumer trade-up persists; European demand robust ahead of summer outdoor season." },
      { rank: 13, name: "Booking Holdings", sector: "Travel / Consumer", change: "+1.9%", reason: "Summer travel booking data confirmed strong forward demand; Middle East tensions diverted traffic to European and Asian routes, benefiting Booking's diversified model." },
      { rank: 14, name: "Spotify", sector: "Consumer Tech / Music", change: "+1.6%", reason: "Subscription price increase in Europe passed through with minimal churn; AI-generated playlist features driving engagement metrics." },
      { rank: 15, name: "MercadoLibre", sector: "EM / Latin America", change: "+1.4%", reason: "Q1 fintech revenue +63% YoY FX-neutral; $10.9B Brazil investment commitment signals long-cycle market share grab; EM inflows supportive." },
      { rank: 16, name: "Garmin", sector: "Consumer Electronics", change: "+1.3%", reason: "Aviation and marine divisions growing double digits; insulated from AI chip cycle as a hardware-software integrator with sticky subscriptions." },
      { rank: 17, name: "Walmart", sector: "Consumer Staples / E-commerce", change: "+1.2%", reason: "Ad revenue and marketplace GMV [gross merchandise value] growth reported ahead of estimates; AI-assisted inventory management driving margin expansion." },
      { rank: 18, name: "Progressive", sector: "Insurance", change: "+1.1%", reason: "Auto insurance pricing power sustained as vehicle replacement costs remain elevated; combined ratio [profitability metric: claims + expenses as % of premiums] below 90 for fourth consecutive quarter." },
      { rank: 19, name: "Blackstone", sector: "Alternative Asset Management", change: "+1.0%", reason: "Real estate secondaries market recovering; infrastructure deals flowing from AI data centre build-out as Blackstone monetises its data centre positions." },
      { rank: 20, name: "Rheinmetall", sector: "EU Defence", change: "+0.3%", reason: "Confirmed FY26 revenue guidance of 14-14.5B EUR (+45% YoY) despite Q1 miss; Bundeswehr orders lifting backlog [signed contracts not yet completed]." }
    ],
    losers: [
      { rank: 1, name: "Amazon", sector: "Cloud / E-commerce", change: "-4.3%", reason: "Stock fell as AWS AI revenue narrative faced scrutiny; free cash flow declined 22% YoY amid $200B capex plan; valuation re-rating to fair value underway." },
      { rank: 2, name: "Alphabet", sector: "Search / Cloud / AI", change: "-3.1%", reason: "$84.75B equity raise announced June 1 to fund AI compute infrastructure; dilution overhang and stock priced 11% below May 13 ATH of $402; Berkshire $10B placement partially offsets concern." },
      { rank: 3, name: "Intel", sector: "Semiconductors", change: "-2.1%", reason: "DUV export restriction bill proposed by US lawmakers to cut ASML sales to China highlights Intel's vulnerability to policy volatility; fab ramp timeline still uncertain." },
      { rank: 4, name: "UnitedHealth", sector: "Healthcare / Managed Care", change: "-1.8%", reason: "Managed care sector remains under regulatory and legal pressure; medical loss ratio [share of premiums paid as claims] creeping higher; GLP-1 cost coverage uncertainty persists." },
      { rank: 5, name: "Starbucks", sector: "Consumer / Restaurant", change: "-1.7%", reason: "CEO turnaround narrative stalling as same-store sales in Asia remain negative; higher commodity costs squeezing margins in difficult consumer environment." },
      { rank: 6, name: "Novo Nordisk", sector: "Pharmaceuticals / GLP-1", change: "-1.5%", reason: "US GLP-1 [glucagon-like peptide-1 obesity drug] market share at 37.4% and slipping to Eli Lilly; 2026 guidance calls for revenue decline of 4-12%; ADA conference this week the key catalyst." },
      { rank: 7, name: "Celcius Holdings", sector: "Consumer / Energy Drinks", change: "-1.4%", reason: "Market share plateau vs Monster and Red Bull; convenience channel inventory normalisation ongoing; high valuation leaves no room for execution misses." },
      { rank: 8, name: "LVMH", sector: "Luxury / Consumer", change: "-1.3%", reason: "China demand recovery slower than expected; EUR strength from earlier in the year compressing USD-reported revenue; aspirational consumer weakening in US." },
      { rank: 9, name: "Chewy", sector: "E-commerce / Pet", change: "-1.2%", reason: "Pet supply category showing signs of spending fatigue; active customer growth decelerating; competition from Amazon and Walmart intensifying." },
      { rank: 10, name: "Microsoft", sector: "Cloud / Enterprise Software", change: "-1.2%", reason: "Free cash flow down 22% YoY as $190B capex programme ramps; Azure growth 40% reassures but margin compression from component costs weighing on sentiment." },
      { rank: 11, name: "Instacart", sector: "E-commerce / Grocery", change: "-1.1%", reason: "Advertising revenue growth slowing as grocery platform competition intensifies; Walmart and Amazon grocery gaining share; growth multiple questioned." },
      { rank: 12, name: "Alibaba", sector: "EM / China Tech", change: "-1.0%", reason: "US-China trade deal (30% tariffs locked in) limits upside; domestic e-commerce competition from Pinduoduo and TikTok Shop intense; ADR [American Depositary Receipt] discount persists." },
      { rank: 13, name: "Toyota", sector: "Autos / EV", change: "-1.0%", reason: "Hybrid demand strong but EV transition costs accelerating; JPY [Japanese yen] volatility ahead of BOJ [Bank of Japan] monitoring adds currency risk to earnings." },
      { rank: 14, name: "Ulta Beauty", sector: "Consumer / Beauty", change: "-0.8%", reason: "Category facing headwinds from consumer trading down in discretionary beauty; Sephora partnership with Kohl's eroding foot traffic; margins under pressure." },
      { rank: 15, name: "Danaos", sector: "Container Shipping", change: "-0.8%", reason: "Spot charter rates softening for larger vessels as Red Sea route normalisation expected; stock price elevated vs NAV [net asset value: ships worth minus debt]." },
      { rank: 16, name: "McKesson", sector: "Healthcare Distribution", change: "-0.9%", reason: "Drug pricing policy uncertainty and GLP-1 distribution margin questions; sector-wide rotation away from defensive healthcare into AI-adjacent plays." },
      { rank: 17, name: "Tsakos Energy Navigation", sector: "Tanker Shipping", change: "-0.9%", reason: "Iran-peace hopes drove oil price lower, reducing tanker demand expectations; spot tanker rates eased as geopolitical premium compressed." },
      { rank: 18, name: "Constellation Energy", sector: "Nuclear / Energy", change: "-0.7%", reason: "AI data centre nuclear PPA [power purchase agreement] enthusiasm moderated as permitting timelines slip; near-term earnings growth already priced in." },
      { rank: 19, name: "Vistra", sector: "Power / Energy", change: "-0.6%", reason: "Same data centre power theme, same moderation; merchant power price risk in ERCOT [Texas electricity grid] increases as summer load builds." },
      { rank: 20, name: "PayPal", sector: "Fintech", change: "-0.5%", reason: "Branded checkout share loss to Apple Pay and Stripe; Venmo monetisation still below potential; multiple compression continues as growth moderates." }
    ]
  },

  sectors: [
    { name: "US Technology", change: "+1.1%", direction: "up", driver: "Broadcom AI earnings beat triggered sector-wide re-rating; semiconductor names led; software followed on ServiceNow and CrowdStrike prints." },
    { name: "US Healthcare", change: "-1.3%", direction: "down", driver: "Managed care regulatory pressure and GLP-1 pricing uncertainty weighed on sector; Novo Nordisk market share concerns a sentiment drag." },
    { name: "US Financials", change: "+0.3%", direction: "up", driver: "Blackstone and Berkshire (Alphabet placement) positive; banks stable on hold-rate environment; insurance pricing power intact." },
    { name: "US Industrials", change: "+0.4%", direction: "up", driver: "AI data centre infrastructure build sustained capital goods demand; HEICO and Howmet Aerospace benefiting from aerospace aftermarket strength." },
    { name: "US Energy", change: "-0.8%", direction: "down", driver: "Iran peace agreement hopes pushed oil lower, compressing energy sector multiples; tanker and E&P names declined." },
    { name: "US Consumer Disc", change: "+0.5%", direction: "up", driver: "Travel demand robust (Booking, Airbnb); Tesla robotaxi narrative sustained; offset by luxury and restaurant headwinds." },
    { name: "US Consumer Staples", change: "+0.2%", direction: "up", driver: "Walmart AI-driven margin story positive; defensive rotation minimal given risk-on environment." },
    { name: "US Materials", change: "-0.3%", direction: "down", driver: "China demand uncertainty and strong USD dragged basic materials; rare earth names mixed on China export control risk." },
    { name: "US Real Estate", change: "-0.2%", direction: "down", driver: "Rate hike fears from ECB and potential Fed re-evaluation weighed on REIT valuations; data centre REITs outperformed." },
    { name: "US Utilities", change: "-0.4%", direction: "down", driver: "AI power demand narrative moderated; nuclear PPA delays and ERCOT load risk weighed on Vistra and Constellation." },
    { name: "US Comm Services", change: "+0.7%", direction: "up", driver: "Meta AI monetisation strong; Alphabet dilution drag partially offset by Google Cloud AI growth narrative; Netflix and Spotify positive." },
    { name: "EU Defence", change: "+0.3%", direction: "up", driver: "Rheinmetall confirmed guidance despite Q1 miss; sector consolidating after 2025 run-up as investors seek earnings proof points from order backlog." },
    { name: "EU Banks", change: "+0.4%", direction: "up", driver: "ECB rate hike expectation supportive of net interest margins [NIM: spread between loan rates and deposit costs]; Santander and BNP Paribas stable." },
    { name: "EU Industrials", change: "+0.3%", direction: "up", driver: "Defence supply chain and infrastructure spending sustained; Siemens and Knorr-Bremse benefiting from European modernisation themes." },
    { name: "EU Luxury", change: "-0.5%", direction: "down", driver: "LVMH and broader luxury sector weighed by slower China recovery and EUR headwinds on reporting; aspirational consumer soft in key markets." },
    { name: "EU Autos", change: "+0.1%", direction: "up", driver: "Hybrid demand robust in Europe; legacy OEMs stable; EV subsidy uncertainty in EU a headwind to pure-play EV names." },
    { name: "EU Insurance", change: "+0.3%", direction: "up", driver: "Allianz and Hannover Re benefiting from elevated reinsurance pricing; Middle East tensions supportive of war-risk premium income." }
  ],

  flows: [
    { label: "US Equities", amount: "+$5.3B", direction: "in", pct: 62, note: "Ninth consecutive weekly inflow driven by AI earnings validation; retail and institutional both adding exposure." },
    { label: "European Equities", amount: "+$1.2B", direction: "in", pct: 45, note: "Modest inflows as defence and bank thesis intact; ECB rate hike risk keeping some capital on sidelines." },
    { label: "EM Equities", amount: "+$1.5B", direction: "in", pct: 40, note: "Asia ex-Japan led with $1.5B inflow; EM broadly positive as US-China tariff deal (30%) removed near-term escalation risk." },
    { label: "Gold & Commodities", amount: "-$0.4B", direction: "out", pct: 35, note: "Commodities outflow as Iran peace hopes reduced geopolitical premium; gold slightly lower on USD strength." },
    { label: "Fixed Income", amount: "+$15.7B", direction: "in", pct: 78, note: "US Bond Funds absorbed $4.7B; Europe Bond Funds hit third-highest weekly total YTD; 19 of 22 weeks saw inflows in 2026." },
    { label: "Cash / Money Markets", amount: "+$94.8B", direction: "in", pct: 85, note: "Enormous money market inflow reflects institutional cash parking at elevated rates; the wall of cash available to rotate into equities remains structurally supportive." }
  ],

  trends: [
    { num: "01", title: "AI Infrastructure Entering the Physical World", detail: "Broadcom's $10.8B AI semiconductor quarter — guided to $16B next quarter — confirms that AI infrastructure demand has moved from hyperscaler planning documents into actual silicon revenue. The $700B+ hyperscaler capex commitment for 2026 is now showing up in revenue, not just talk. TSMC's CoWoS [Chip-on-Wafer-on-Substrate advanced packaging] capacity is scaling from 35K to 130K wafers/month to meet demand.", status: "CONFIRMED", evidence: "Broadcom AI revenue +143% YoY in Q2; $56B full-year AI semiconductor revenue guided for FY26; TSMC CoWoS capacity quadrupling through 2026.", type: "structural" },
    { num: "02", title: "Europe's Strategic Autonomy Moment", detail: "Rheinmetall's Q1 miss (14.9% below consensus) triggered a selective sell-off in EU defence, but the thesis is intact — the company reconfirmed FY26 guidance of 14-14.5B EUR revenue (+45% YoY). Markets are shifting from re-rating mode to earnings-proof mode: investors want to see the 131B EUR Brussels defence procurement programme translate into reported revenue, not just backlog. Safran and Thales are outperforming on dual civil/defence exposure.", status: "MIXED", evidence: "Rheinmetall confirmed FY26 guidance but Q1 missed by 15%; EU Aerospace and Defence index underperforming broader Stoxx 600 YTD as sector enters earnings-verification phase.", type: "structural" },
    { num: "03", title: "Dollar Hegemony Softening", detail: "EUR/USD retreated this week from 1.1678 to 1.1597 as Middle East tensions renewed USD safe-haven demand. However, the 12-month EUR/USD appreciation of +1.58% and hyperscaler equity raises denominated in USD (Alphabet $84.75B) show that the long-term shift in USD reserve status is gradual. US-China trade deal at 30% tariffs removes one devaluation catalyst.", status: "UNCHANGED", evidence: "EUR/USD -0.5% this week on USD safe-haven demand from Middle East; 12-month trend still USD-negative at -1.58%; no major reserve diversification announcement.", type: "structural" },
    { num: "04", title: "GLP-1 Drugs Reshaping Healthcare Economics", detail: "Novo Nordisk's oral Wegovy [semaglutide weight-loss pill] hit 2 million US prescriptions in 5 months — double internal forecasts — confirming that oral GLP-1 delivery dramatically expands the addressable market beyond injectable-tolerant patients. However, Novo's US market share is 37.4% and falling to Eli Lilly. The ADA conference (June 5-8) will be the week's critical data point — Phase 3 CagriSema results could shift the competitive balance.", status: "CONFIRMED", evidence: "Oral Wegovy 2M US prescriptions in 5 months; Novo 2026 guidance -4% to -12% on pricing pressure, but oral delivery expanding the addressable market.", type: "structural" },
    { num: "05", title: "Trade Fragmentation Creating Shipping Opportunities", detail: "Global Ship Lease reported 100% charter [daily vessel rental] coverage for 2026 and $2B+ contracted revenues with 2.6-year average duration. The trade fragmentation thesis is locking in multi-year charter rates as shippers build redundant routes. However, Iran peace hopes pushed tanker rates lower this week — Tsakos and International Seaways declined on reduced geopolitical premium.", status: "CONFIRMED", evidence: "GSL 100% coverage 2026, $2.05B contracted revenues; forward ship sales at premium to NAV; tanker names softer on Iran peace speculation.", type: "cyclical" },
    { num: "06", title: "Retail Cash Rotation to Equities Building", detail: "The S&P 500 marked its ninth consecutive weekly gain — statistically rare and sustained by the $94.8B weekly money market inflow showing there is still a wall of cash available to rotate. Retail participation is rising: Fear and Greed at 54 (Neutral) suggests the crowd is not yet euphoric, which historically implies the trend has room to extend. The AI earnings beat cycle is the catalyst turning savers into equity investors.", status: "CONFIRMED", evidence: "S&P 500 ninth straight weekly gain; $94.8B money market inflow; Fear and Greed at 54 (not euphoric); EPFR equity inflows positive for ninth consecutive week.", type: "cyclical" }
  ],

  executive: {
    biggest_mover: { name: "Broadcom (AVGO)", change: "+15.2%", reason: "Broadcom reported $10.8B in AI semiconductor revenue for Q2 — up 143% year-over-year — and guided Q3 AI revenue to $16B, implying +200% growth. This is the single most important data point of the week: it proves that hyperscaler CapEx [capital expenditure] at $700B+ is flowing through to actual chip revenue, validating Thesis 1 at scale. The full-year AI semiconductor guidance of $56B makes Broadcom the clearest pure-play beneficiary of the AI infrastructure supercycle." },
    key_risk: { name: "ECB June 11 Rate Hike + Alphabet Dilution", reason: "The ECB is pricing a 97% probability of a 25bp hike on June 11, driven by Middle East inflation transmission — this tightening into slowing growth is a textbook stagflation risk for European equities. Compounding this, Alphabet's $84.75B equity offering creates a dilution overhang for mega-cap tech globally: when the world's fourth-most-valuable company issues 8% of its market cap in new shares, it signals that even AI cash machines feel capital-constrained — raising questions about the AI trade's ROI [return on investment] timeline." },
    conviction_call: { name: "Broadcom (AVGO) / AI Semiconductor Supercycle", observation: "Broadcom's guidance trajectory — $10.8B Q2, $16B Q3 — follows an exponential curve driven by hyperscaler custom AI accelerator design wins at Google (TPU), Meta (MTIA), and likely Apple. This is not cyclical semiconductor demand; it is structural, multi-year contracted revenue from companies that have publicly committed $700B+ in 2026 capex. At 35x forward earnings, AVGO is not cheap, but it may be the most visible beneficiary of a structural trend that has years to run — making it the instrument where the thesis is most clearly confirmed by reported numbers." },
    macro_pulse: { name: "S&P 500 Ninth Consecutive Weekly Gain", observation: "The S&P 500 has now risen for nine straight weeks — a streak that has occurred only five times since 2000, with the index going on to gain an average of 12% over the following six months in four of those instances. The driver is not multiple expansion but earnings revisions: AI-adjacent sectors are posting 30-150% revenue growth that upgrades full-year EPS [earnings per share] estimates and pulls forward the valuation justification." },
    tags: [
      { label: "EUR/USD: 1.1597 falling", type: "red" },
      { label: "Fed: Hold at 3.50-3.75%", type: "amber" },
      { label: "ECB: 97% hike June 11", type: "red" },
      { label: "Tariffs: US-China 30% locked", type: "amber" },
      { label: "AI capex: $700B+ confirmed", type: "green" },
      { label: "EU defence: consolidating", type: "amber" },
      { label: "Semis: Broadcom +143% AI rev", type: "green" },
      { label: "Shipping: GSL 100% covered", type: "green" }
    ]
  },

  macro: {
    us: "The US economy is running at two speeds: a resilient labour market (unemployment 4.3-4.4%, with Powell acknowledging jobs data may be overstated) and an AI-driven capital expenditure boom that is powering corporate earnings. The Fed held rates at 3.50-3.75% at the April FOMC and J.P. Morgan expects no change through 2026, with the first hike not priced until late 2027. Inflation remains above 2% target, partly driven by energy price pass-through from Middle East tensions. The unusual combination of fiscal stimulus (infrastructure and CHIPS Act) and stable monetary policy is producing what strategists call a triumvirate of policy support — rarely seen outside recessions — which explains nine consecutive S&P weekly gains. The primary domestic risk is that the Fed's next move is a hike, not a cut, if Middle East energy inflation proves sticky.",
    europe: "The eurozone economy is navigating a difficult intersection: real GDP grew just 0.1% in Q1 2026 as the Middle East war weighed on energy prices and consumer confidence. The ECB held rates at 2.0% deposit rate in April but markets now price a 97% probability of a 25bp hike on June 11, representing an unusual policy tightening into slowing growth. European defence spending remains a structural tailwind — the 131B EUR Brussels defence procurement programme is translating into long-dated government contracts for Rheinmetall, Safran, and Thales — but the sector is entering an earnings verification phase after 2025's re-rating. EU banks are benefiting from the rate hike trajectory (higher NIMs [net interest margins: spread between loan rates and deposit costs]), while luxury (LVMH), autos, and consumer names face China exposure headwinds.",
    asia: "China's Q1 exports grew 14% YoY to $977.6B, but with sharply divergent routes: Southeast Asia (+20%), Africa (+32%), EU (+21%), and a -16% decline to the US. The US-China trade deal announced June 11 locks in 30% total tariffs (20% fentanyl + 10% reciprocal) for at least 60 days, removing near-term escalation risk but cementing the bifurcation. China's domestic AI ecosystem is accelerating: Huawei's Ascend 950PR chip at SMIC 7nm achieves 2.8x the H20's FP4 [floating point 4-bit compute] performance, and Nvidia CEO Jensen Huang acknowledged the company has largely conceded the China AI chip market. Japan faces BOJ [Bank of Japan] monitoring JPY [yen] dynamics carefully — no emergency hike expected, but TSMC Kumamoto Phase 2 ramp continues on schedule. India and Southeast Asia continue to benefit from supply chain diversification.",
    forward: "ECB rate decision on June 11 is the dominant macro event — a 25bp hike is 97% priced, but the press conference language on future path will drive EUR and European equity reaction. ADA Scientific Sessions (June 5-8, New Orleans) will publish Novo Nordisk's CagriSema Phase 3 data — a positive readout could re-rate the entire GLP-1 space. CrowdStrike's 4-for-1 stock split ex-date approaching — watch for retail demand surge. No FOMC meeting next week; the next Fed decision is July 28-29. Key data: US CPI for May (est. June 10), EU industrial production. Broadcom's record Q3 guidance ($29.4B revenue) sets the bar for the semiconductor earnings season which restarts with Micron in late June."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$315",
      change: "+3.6%",
      pe: "~35x",
      pe_plain: "paying 35 years of annual earnings per share",
      target: "$320-340",
      theme: "AI on-device + WWDC catalyst",
      news: "Apple set an all-time closing high of $315.20 on June 2 ahead of WWDC [Worldwide Developers Conference]. March quarter revenue rose 17% YoY to $111B with iPhone revenue +22% and an all-time record gross margin of 49.3%. UBS flagged a hidden AI catalyst in on-device model deployment that could drive a multi-year upgrade cycle.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Priced at ATH with WWDC expectations built in; on-device AI cycle is real but ASP [average selling price] uplift timing uncertain."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$441",
      change: "-1.2%",
      pe: "~28x",
      pe_plain: "paying 28 years of annual earnings per share",
      target: "$460-500",
      theme: "Azure AI + CapEx margin pressure",
      news: "Azure and cloud services grew 40% in Q3 2026 with annualized AI revenue hitting $37B. However, free cash flow [cash generated after capital spending] fell 22% YoY as $190B capex programme ramped; gross margin hit 67.6% — its lowest since 2022. CFO Amy Hood raised full-year capex guidance to $190B, creating a visible CapEx-to-revenue gap that investors are watching closely.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Azure AI growth is real at 40% but free cash flow compression from $190B capex makes near-term multiple expansion difficult."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$251",
      change: "-4.3%",
      pe: "~34x",
      pe_plain: "paying 34 years of annual earnings per share",
      target: "$270-290",
      theme: "AWS AI monetisation vs CapEx burn",
      news: "Amazon fell 4.3% this week as the $200B capex plan for 2026 attracted scrutiny on ROI [return on investment] timing. AWS AI revenue is growing but the absolute gap between infrastructure spend and AI-attributable revenue is widening. The 52-week high of $278.56 remains the near-term ceiling.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "AWS AI thesis structurally sound but $200B capex creates a multi-year free cash flow trough that makes the stock range-bound near-term."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$358",
      change: "-3.1%",
      pe: "~28x",
      pe_plain: "paying 28 years of annual earnings per share",
      target: "$380-410",
      theme: "AI infrastructure equity raise + Google Cloud",
      news: "Alphabet announced an $84.75B equity raise on June 1 — the largest single tech equity offering in history — to fund AI compute infrastructure, including a $10B Berkshire Hathaway private placement. The offering priced shares at $355/share, creating a technical overhang. The stock had set an ATH of $402 on May 13; it now trades 11% below that level as the dilution digest continues.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "Google Cloud AI is growing rapidly but the $84.75B dilution creates a 6-8 week overhang; await stabilisation before adding exposure."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$598",
      change: "+2.2%",
      pe: "~27x",
      pe_plain: "paying 27 years of annual earnings per share",
      target: "$620-660",
      theme: "Llama 4 monetisation + AI ad targeting",
      news: "Meta traded near $598 with a modest weekly gain as the AI advertising flywheel narrative held up. The $125-145B capex raise for 2026 reinforces Meta's position as the most profitable AI infrastructure deployer — unlike peers, it monetises AI immediately through ad targeting improvements. Llama 4 deployment across WhatsApp is expanding AI reach to 3B+ users.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Unique among Mag7 in that AI capex directly and immediately monetises through ad revenue; 27x earnings for the most cash-generative AI business is reasonable."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$217",
      change: "+2.1%",
      pe: "~25x forward",
      pe_plain: "paying 25 years of forward earnings per share",
      target: "$298-310",
      theme: "AI GPU monopoly + Blackwell ramp",
      news: "Nvidia trades at $217 after a modest weekly gain lifted by Broadcom's AI semiconductor beat, which validated the entire AI chip demand thesis. Management guided $78B in Q1 FY27 revenue (77% growth), and the Blackwell GPU [graphics processing unit] platform is allocated months in advance. Analysts hold 67 Buy ratings vs 1 Hold and 0 Sells.",
      earnings: "August 2026 (est.)",
      earnings_proximity: "far",
      verdict: "BUY",
      verdict_reason: "Broadcom's print confirms AI GPU demand is accelerating into H2 2026; $298 analyst consensus implies 37% upside from current levels."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$432",
      change: "+3.9%",
      pe: "~297x",
      pe_plain: "paying 297 years of annual earnings — priced entirely on robotaxi optionality",
      target: "$300-475",
      theme: "Robotaxi expansion + SpaceX IPO speculation",
      news: "Tesla rose 3.9% this week sustained by SpaceX IPO merger speculation (SpaceX S-1 targeting $1.75T valuation) and robotaxi city expansion narrative. However, Musk confirmed FSD v15 [Full Self-Driving software] won't deploy at large scale until early 2027. The unsupervised robotaxi fleet stalled at 39 vehicles after May 10, with operational glitches in Dallas and Houston reported.",
      earnings: "July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "CAUTION",
      verdict_reason: "At 297x earnings, every valuation dollar relies on robotaxi at scale by 2027; Musk's own admission of a major architecture revision timeline makes near-term multiple compression likely."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "Broadcom reported $10.8B AI semiconductor revenue (+143% YoY) in Q2 and guided Q3 to $16B (+200% YoY); hyperscaler capex commitments total $700B+ for 2026.",
      instruments: "Broadcom (AVGO), Nvidia (NVDA), ASML, TSMC, AMD, ServiceNow (NOW), CrowdStrike (CRWD)",
      highlights: [
        { name: "Broadcom (AVGO)", change: "+15.2%", note: "The week's clearest thesis confirmation: $10.8B AI semiconductor revenue in Q2, $56B guided for full year. Custom AI accelerator design wins at Google, Meta, and Apple are multi-year contracted revenue streams that compound." },
        { name: "ServiceNow (NOW)", change: "+14.4%", note: "Enterprise AI software re-rated sharply after Dell's print; ServiceNow is the workflow automation layer that captures AI productivity gains in the enterprise — a structural beneficiary of AI infrastructure deployment at the application layer." },
        { name: "CrowdStrike (CRWD)", change: "+8.1%", note: "Beat Q1 with $256M net new ARR [annual recurring revenue added in the quarter] up 32% YoY; 4-for-1 split announced. AI-native security platform winning consolidation as enterprises reduce vendor count." },
        { name: "ASML", change: "+5.8%", note: "The semiconductor equipment backbone: ASML's High-NA EUV [extreme ultraviolet lithography] tools are essential for sub-2nm production; May's 13% gain extended into June as AI chip demand sustained backlog [signed orders not yet delivered]." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "MIXED",
      evidence: "Rheinmetall confirmed FY26 guidance (+45% revenue) but Q1 missed by 15%; sector in earnings-verification phase as investors demand proof that backlog converts to reported revenue.",
      instruments: "Rheinmetall (RHM), Safran, Thales, HEICO, Howmet Aerospace, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall (RHM)", change: "+0.3%", note: "Stock held near 1,171 EUR after the Q1 miss was largely forgiven on full-year guidance confirmation; the 14-14.5B EUR FY26 revenue target implies the Bundeswehr [German military] order ramp accelerates in H2. Backlog [signed but unearned revenue] provides multi-year earnings visibility." },
        { name: "HEICO", change: "+0.8%", note: "Aviation MRO [maintenance, repair, overhaul] and defence parts supplier benefiting from both aerospace aftermarket strength and defence supply chain build-out; less geopolitically sensitive than pure defence primes." },
        { name: "Safran", change: "+0.4%", note: "Civil/defence balance smoothing earnings; CFM LEAP engine orders from Airbus and Boeing provide long-dated revenue visibility alongside Safran's growing defence electronics division." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "UNCHANGED",
      evidence: "EUR/USD -0.5% this week on Middle East safe-haven demand; 12-month trend still USD-negative; no major reserve diversification announcement this week.",
      instruments: "WisdomTree Bitcoin ETP, iShares Physical Gold, MercadoLibre (MELI), Gold Fields",
      highlights: [
        { name: "iShares Physical Gold", change: "-0.4%", note: "Gold slightly lower as Iran peace hopes reduced geopolitical premium; the structural de-dollarisation bid remains but needs a catalyst to reaccelerate." },
        { name: "MercadoLibre (MELI)", change: "+1.4%", note: "LatAm [Latin America] fintech growing its own payment infrastructure independent of USD correspondent banking; Q1 fintech revenue +63% YoY FX-neutral is the best evidence that alternative financial rails are scaling." },
        { name: "WisdomTree Bitcoin ETP", change: "+1.1%", note: "Bitcoin range-bound but positive; institutional adoption narrative steady; the long-term de-dollarisation thesis provides a structural bid." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "MIXED",
      evidence: "Oral Wegovy hit 2M US prescriptions in 5 months (2x internal forecast) but Novo's US market share is 37.4% and declining to Eli Lilly; ADA conference June 5-8 is the week's critical data catalyst.",
      instruments: "Novo Nordisk (NVO), Eli Lilly (LLY), UnitedHealth (UNH), McKesson (MCK), Veeva Systems",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "-1.5%", note: "The week's key healthcare story: oral Wegovy proving transformative at 2M prescriptions, but Eli Lilly is winning US GLP-1 [glucagon-like peptide-1] market share. Novo's 2026 guidance of -4% to -12% revenue growth is sobering for a company priced as a structural winner. ADA Phase 3 CagriSema data this weekend is binary." },
        { name: "McKesson (MCK)", change: "-0.9%", note: "Drug distribution margins on GLP-1s are thinner than specialty pharmaceuticals; as GLP-1 volumes scale, McKesson captures distribution spread but faces pricing pressure from PBM [pharmacy benefit manager] negotiations." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "CONFIRMED",
      evidence: "GSL 100% charter coverage for 2026 with $2.05B contracted revenues; however, Iran peace hopes pressed tanker rates lower — Tsakos and International Seaways declined on reduced geopolitical premium.",
      instruments: "Global Ship Lease (GSL), Danaos (DAC), Tsakos Energy Navigation (TNP), International Seaways (INSW), StealthGas (GASS)",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+2.1%", note: "The most insulated shipping name: 100% charter [daily vessel rental] coverage for all of 2026, $2.05B in contracted revenues, and forward sales of non-core vessels at premium prices. Trade fragmentation has locked in multi-year rates that now look cheap to market." },
        { name: "Tsakos Energy Navigation (TNP)", change: "-0.9%", note: "Tanker [oil transport vessel] rates compressed by Iran peace hopes and oil price decline; the geopolitical premium that drove tanker rates in 2025 is partially unwinding, though structural trade route lengthening from US-China tariff bifurcation provides a floor." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "CONFIRMED",
      evidence: "S&P 500 ninth consecutive weekly gain; $94.8B weekly money market inflow (wall of cash); Fear and Greed at 54 (not euphoric); Palantir and ServiceNow surging on retail buying.",
      instruments: "Palantir (PLTR), Robinhood (HOOD), Interactive Brokers (IBKR), Vanguard S&P 500 ETF (VOO), SPDR Russell 2000 (IWM)",
      highlights: [
        { name: "Palantir (PLTR)", change: "+7.3%", note: "Retail's preferred AI software proxy; at 42x forward sales [revenue multiple paid per dollar of annual sales] it requires perfect execution but retail flows have sustained the premium. Government AI contract pipeline is the fundamental anchor." },
        { name: "Robinhood (HOOD)", change: "+1.5%", note: "Robinhood is a direct beneficiary of retail participation: higher equity volumes, options trading, and crypto activity all feed commission and spread revenue as the S&P winning streak draws retail investors in." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Broadcom",
      sector: "Semiconductors",
      headline: "Broadcom guided Q3 AI chip revenue to $16B — up 200% YoY — making it the fastest-growing major semiconductor company in history by dollar value",
      detail: "The $16B Q3 AI semiconductor guide is not a typo. Broadcom's custom AI accelerators [chips designed specifically for AI workloads] for Google, Meta, and potentially Apple are ramping at a rate that makes the AI infrastructure supercycle thesis mathematically undeniable. The full-year $56B AI semiconductor guidance implies Broadcom's AI revenue alone will be larger than Intel's entire 2025 revenue. For context: this is a company that was primarily a networking chip maker five years ago.",
      tag: "BULL"
    },
    {
      num: "02",
      company: "Alphabet",
      sector: "Search / Cloud / AI",
      headline: "Alphabet raised $84.75 billion in equity — the largest single tech equity offering in history — to fund AI compute infrastructure",
      detail: "The offering includes $30B in public stock, $15B in convertible preferred shares, a $40B at-the-market programme, and a $10B Berkshire Hathaway private placement. When the world's third-most-valuable company raises 8% of its market cap in new equity, it signals two things: (1) AI compute demand is so capital-intensive that even Google's cash generation cannot self-fund it, and (2) Berkshire's $10B bet is Warren Buffett's clearest AI validation in years. The dilution overhang will clear in 6-8 weeks, potentially creating a re-entry opportunity.",
      tag: "WATCH"
    },
    {
      num: "03",
      company: "Huawei / SMIC",
      sector: "China Semiconductors",
      headline: "Huawei's Ascend 950PR chip at SMIC 7nm achieves 2.8x the H20's performance — Nvidia CEO confirms company has largely conceded China AI chip market",
      detail: "The Ascend 950PR represents a genuine breakthrough in China's domestic AI compute stack. At SMIC 7nm (using self-developed multi-patterning DUV [deep ultraviolet] lithography), Huawei has designed a chip architecture that outperforms the Nvidia H20 [the most advanced chip Nvidia is allowed to sell to China] by 2.8x on FP4 [low-precision floating point] compute. NVIDIA's Jensen Huang acknowledged this market loss publicly. The bottleneck is HBM: China's CXMT can only supply HBM for ~250,000-300,000 Ascend chips per year, limiting deployment scale.",
      tag: "WATCH"
    },
    {
      num: "04",
      company: "CrowdStrike",
      sector: "Cybersecurity",
      headline: "CrowdStrike announced a 4-for-1 stock split alongside a Q1 beat — record $591M operating cash flow, net new ARR up 32% YoY",
      detail: "CrowdStrike's stock split (4-for-1) is the second major Mag-adjacent tech split this cycle (after Nvidia). The fundamental story is strong: Q1 revenue of $1.39B beat estimates, net new ARR [annual recurring revenue added in the quarter] of $256M was a record, and free cash flow of $468M was record-setting. The stock dropped after-hours on modest Q2 guidance ($1.43-1.44B) but the annual trend — ARR growth accelerating from 22% to 32% — suggests the platform consolidation thesis is working. At $730, the 4-for-1 split will bring per-share price to ~$183, historically a retail buying catalyst.",
      tag: "BULL"
    },
    {
      num: "05",
      company: "Novo Nordisk",
      sector: "Pharmaceuticals / GLP-1",
      headline: "Oral Wegovy reached 2 million US prescriptions in 5 months — double Novo's internal forecast — confirming pill-form GLP-1 dramatically expands the patient market",
      detail: "The injectable GLP-1 market was always limited by needle aversion and clinic access. The oral pill removes both barriers. Two million prescriptions in five months (the drug launched January 2026) is the fastest adoption of any obesity drug in US history. However, Novo's US market share is 37.4% and declining — Eli Lilly is winning on tirzepatide's superior weight loss data. The ADA conference Phase 3 CagriSema results (June 5-8) will either restore Novo's competitive position or confirm that Lilly has permanently captured the clinical high ground.",
      tag: "WATCH"
    },
    {
      num: "06",
      company: "Tesla",
      sector: "EV / Autonomous",
      headline: "Elon Musk confirmed FSD v15 will not deploy at large scale until early 2027 — stalling the robotaxi rollout after it peaked at 39 vehicles in May",
      detail: "Tesla's robotaxi fleet expansion abruptly stopped on May 10 at 39 vehicles (28 Austin, 5 Dallas, 6 Houston) — coinciding with reports of long wait times, cancellations, and Musk's acknowledgment of a major architectural improvement needed in the FSD software. At 297x earnings, Tesla's valuation is entirely dependent on robotaxi at scale by 2026-2027. Musk's own timeline extension to early 2027 is the most bearish data point in the brief — yet the stock only fell 6.5% from May highs, suggesting the market is still pricing in optionality.",
      tag: "BEAR"
    },
    {
      num: "07",
      company: "ServiceNow",
      sector: "Enterprise Software",
      headline: "ServiceNow surged 26% in two sessions after Dell's blowout enterprise AI print triggered a wholesale re-rating of workflow automation software",
      detail: "ServiceNow trades at 6x forward sales vs Palantir's 42x — the same AI workflow automation theme at radically different valuations. Dell's print proved that enterprises are accelerating AI infrastructure purchases, and the market immediately applied that logic to every company that sits in the AI adoption stack. ServiceNow's AI workflow tools (Now Assist) are being deployed by 70% of Fortune 1000 companies using Azure, making it a derivative beneficiary of Microsoft's 40% Azure growth. A 26% two-session gain is extraordinary for a $200B company — it reflects genuine earnings revision, not just sentiment.",
      tag: "BULL"
    },
    {
      num: "08",
      company: "Global Ship Lease",
      sector: "Container Shipping",
      headline: "GSL reported 100% charter coverage for 2026 with $2.05B contracted revenues and forward-sold three non-core ships at a $25M premium to book value",
      detail: "In a world of trade route uncertainty and geopolitical volatility, GSL has converted trade fragmentation directly into locked-in cash flows. 100% coverage for 2026 means the company's full-year revenue is already contracted — the only risk is counterparty default, not rate risk. The forward sales at a $25M premium to NAV [net asset value: ships worth minus debt] validate management's capital allocation discipline. This is the most visible expression of Thesis 5 in the portfolio.",
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
        finding: "All four hyperscalers raised or confirmed 2026 capex: Microsoft $190B (raised), Amazon $200B, Google $180-190B, Meta $125-145B (raised). Combined: $700B+, up 77% from 2025. No hedging language detected — Meta specifically cited component price inflation as the reason for the raise, not demand uncertainty.",
        implication: "AI semiconductor demand (Broadcom, Nvidia, TSMC CoWoS) is contracted 12-18 months forward at these commitment levels; no demand softening risk visible in the capex signal."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "PC DRAM contract prices grew in Q2 and are projected to extend into Q3 and Q4. Server DDR5 pricing has, for the first time in history, surpassed HBM3E [latest high-bandwidth memory standard] profitability per wafer. HBM supply remains tight as Samsung and SK Hynix prioritise HBM over commodity DRAM, compressing supply and lifting prices across the memory stack.",
        implication: "Memory pricing strength signals continued AI infrastructure build-out 6-8 weeks forward; SK Hynix and Micron margin upgrades likely in Q3 reporting cycle."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Microsoft Azure AI revenue hit $37B annualized (+40% growth) but $190B capex creates a 5x gap between spending and AI-attributable revenue. Free cash flow [cash after all capital spending] fell 22% YoY. Alphabet's $84.75B equity raise signals Google also cannot self-fund AI compute from operations.",
        implication: "The gap is widening but not at crisis levels — revenue is accelerating, capex is growing faster. If AI revenue does not inflect materially by Q3, the gap becomes a narrative risk. Monitor Azure, AWS, and Google Cloud AI revenue growth rates as the leading indicator."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "GREEN",
        finding: "Multiple expansion this week is driven by upward EPS [earnings per share] revisions: Broadcom +15% on a genuine beat, CrowdStrike +8% on record ARR, ServiceNow +14% on enterprise AI spending validation. S&P 500 EPS revisions are positive for the 9th consecutive week.",
        implication: "Current P/E expansion is fundamentally justified by earnings revisions, not pure sentiment expansion — this is the healthiest form of market appreciation and argues the AI trade has further runway."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "Huawei's Ascend 950PR at SMIC 7nm achieves 2.8x the H20's FP4 performance — a significant architecture advance that Nvidia CEO Jensen Huang acknowledged by stating the company has largely conceded the China AI chip market. SMIC capacity is scaling to 60K wafers/month in 2026 at advanced nodes. The bottleneck is HBM: CXMT can supply memory for only 250,000-300,000 Ascend chips/year vs SMIC die capacity for 1M+.",
        implication: "China's progress is real but HBM-constrained; NVIDIA's near-term revenue is not threatened but the China premium in ASML and TSMC valuations faces long-term compression risk. AMBER rather than RED because HBM constraint limits volume deployment to sub-scale levels for at least 18 months."
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
        finding: "SK Hynix holds 62% of HBM market share; Micron has overtaken Samsung (17% vs Micron 21%) on HBM3E allocations to NVIDIA. No production disruption or labor action reported. Memory prices rising across DRAM and HBM, supporting all three suppliers' margins.",
        implication: "Stable supply environment; the interesting signal is Micron's rising share vs Samsung — watch for Samsung HBM4 yield announcements as the rotation catalyst."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "TSMC Kumamoto Phase 2 ramp on schedule; BOJ holding rates steady with no emergency hike signaled. Tokyo Electron orders supported by Broadcom and TSMC CoWoS capacity expansion. No JPY carry trade disruption this week.",
        implication: "Japan semiconductor supply chain stable; JPY carry trade risk remains latent but no trigger this week."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS scaling from 35K to 130K wafers/month — NVIDIA has reserved most capacity, with ASE and Amkor handling overflow steps. Huawei Ascend 950PR advancement at SMIC 7nm is a genuine competitive development. No Taiwan political escalation or rare earth embargo signal this week, but China chip progress moves this region to AMBER watch.",
        implication: "CoWoS expansion is net positive for AI GPU supply; China chip progress is a slow-moving moat erosion risk, not an immediate threat. Watch rare earth export control announcements as the low-cost Chinese escalation tool."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "A bipartisan US lawmakers group proposed a bill to cut ASML's DUV [deep ultraviolet lithography] machine sales to Chinese chip companies — moving beyond existing restrictions to block older-generation tools. CHIPS Act disbursements continuing. ASML's China revenue already fell to 19% of sales in Q1 from 36% in Q4 2025.",
        implication: "DUV restriction bill, if passed, accelerates China's incentive to develop domestic lithography (SMEE) and compresses ASML's China revenue further. Watch for Congressional vote timeline."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "SMEE won a CNY109M ($15.5M) contract for a step-and-scan system — confirming commercial traction at legacy nodes. However, SMEE remains at ~28nm-class capability, years behind ASML's latest 2nm-class High-NA EUV. ASML rose 13% in May and extended gains in June as demand from TSMC and Intel remained robust.",
        implication: "ASML moat is intact for EUV; DUV sales to China face the proposed US restriction bill as the near-term risk. No meaningful threat to ASML's advanced-node monopoly from SMEE."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "AMBER",
        finding: "Micron has overtaken Samsung in NVIDIA HBM3E allocations (Micron 21%, Samsung 17%, SK Hynix 62%). Samsung's yield and HBM3E execution issues are real, creating a rotation from Samsung to Micron. SK Hynix dominance at 62% is not threatened. HBM4 battle will be the next competitive test.",
        implication: "Micron is the tactical winner as Samsung stumbles on HBM3E — a rotation signal within memory sector. SK Hynix remains the structural leader. Samsung recovery depends on HBM4 yield success."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "Custom silicon (Google TPU, AWS Trainium, Microsoft Maia) remains deployed primarily for inference [running trained models] rather than training [building new models]. NVIDIA's H100 and Blackwell [latest GPU architecture] dominate training workloads. No hyperscaler has announced a >10% training workload shift to custom silicon.",
        implication: "NVIDIA's training monopoly is intact for 2026; the custom silicon threat is real but on a 3-5 year timeline. At 25x forward earnings, NVIDIA's moat is priced but not over-priced."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS scaling to 130K wafers/month by end-2026 (from 35K in 2024). NVIDIA has reserved most capacity; TSMC outsources overflow steps to ASE and Amkor for simpler packaging components. Samsung and Amkor are qualifying CoWoS-equivalent processes but have not achieved the yield and volume required for meaningful NVIDIA allocation.",
        implication: "TSMC CoWoS remains the only credible option at volume for 2026; capacity expansion is net positive for AI GPU supply chain, reducing the bottleneck that has been limiting NVIDIA delivery timelines."
      }
    ]
  }

};
