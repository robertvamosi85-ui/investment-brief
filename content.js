const BRIEF = {

  meta: {
    date: "Thursday, June 18, 2026",
    eurusd: "1.1509",
    eurusd_direction: "falling",
    eurusd_weekly_change: "-0.7%",
    eurusd_driver: "EUR/USD pulled back from a recent high of 1.1594 as markets digested the Fed's hawkish tilt — nine FOMC members now projecting a rate hike by year-end under new Chair Kevin Warsh, lifting the dollar on tightening expectations while the US-Iran ceasefire framework provided only temporary USD softness.",
    eurusd_outlook: "Expect EUR/USD to trade 1.14–1.16 next week, with USD strength likely to persist if Warsh's inflation hawkishness is reinforced by incoming data; USD-denominated positions benefit, euro-denominated hedges become cheaper."
  },

  vitals: {
    fear_greed: {
      value: 40,
      last_week: 55,
      label: "Fear",
      interpretation: "The Fear & Greed Index dropped sharply from 55 (Neutral) to 40 (Fear) this week as the Fed signalled a potential rate hike and tech stocks sold off hard on Wednesday-Thursday. Investors rotated out of risk assets following Broadcom's initial earnings reaction and the FOMC dot-plot showing nine officials backing higher rates. The move from Neutral to Fear in one week is a meaningful sentiment shift that bears watching."
    },
    vix: {
      value: 16.4,
      last_week: 14.8,
      label: "Calm",
      interpretation: "VIX rose from ~14.8 to 16.4 this week — still in the 'calm' zone but directionally worrying. The spike came on Wednesday after the FOMC statement removed language about likely rate cuts and Warsh hinted at further tightening. At 16, the market is pricing modest but rising uncertainty. A sustained move above 20 would signal Elevated conditions and potential rotation into defensives."
    },
    put_call: {
      value: 0.59,
      last_week: 0.54,
      label: "Bullish tilt",
      interpretation: "The equity put/call ratio [puts are bearish bets, calls are bullish bets — ratio above 1 means more hedging than optimism] ticked up from 0.54 to 0.59, signalling that investors bought slightly more downside protection this week but still remain net-bullish. The ratio remains well below 1.0, meaning calls [bets markets go up] still dominate. This modest hedging uptick is consistent with the sentiment data — fear is rising but not yet defensive."
    }
  },

  regime: {
    title: "Fed Hawkishness Interrupts the AI Rally",
    description: "This week's dominant narrative was the Fed's policy pivot under Kevin Warsh: rates held but nine officials now see a hike before year-end, sending PCE inflation projections up to 3.6%. Markets that had enjoyed nine consecutive weekly S&P 500 gains hit a wall. The AI/tech thesis faces a new headwind — higher rates compress growth stock multiples — while the Iran ceasefire framework provided a brief tailwind for risk assets that the Fed quickly offset. Thesis 1 (AI infrastructure) sees short-term multiple compression headwinds but long-term capex commitments from hyperscalers remain intact. Thesis 2 (EU strategic autonomy) benefits from the geopolitical backdrop.",
    tailwinds: [
      "US-Iran ceasefire framework — oil prices falling, Hormuz shipping routes reopening",
      "Hyperscaler capex commitments totalling $725B remain fully intact despite Fed hawkishness",
      "May payrolls surprised massively at +172K vs +80K consensus, indicating economic resilience"
    ],
    headwinds: [
      "Fed signals rate hike — nine FOMC members now project at least one 25bp increase by end-2026",
      "Broadcom's Q3 AI revenue guide ($16B) seen as underwhelming vs sky-high expectations, triggering -14% initial earnings reaction",
      "EUR/USD falling on renewed dollar strength; headwinds for EUR-based investors in USD assets"
    ]
  },

  league: {
    winners: [
      { rank: 1, name: "Marvell Technology", sector: "Semiconductors", change: "+16.2%", reason: "Custom ASIC AI chip demand surged; strong earnings beat drove multi-week rally as hyperscalers shifted workloads to Marvell designs" },
      { rank: 2, name: "Constellation Energy", sector: "Utilities / Nuclear", change: "+8.5%", reason: "Calpine acquisition ($16.4B) closed; AI data center power demand driving nuclear premium; preferred power provider for KKR AI infrastructure venture" },
      { rank: 3, name: "Vistra Corp", sector: "Utilities / Power", change: "+7.2%", reason: "Q1 revenue +43% YoY; KKR $10B AI venture partnership; nuclear and gas fleet benefits from AI power premium" },
      { rank: 4, name: "Booking Holdings", sector: "Travel / Consumer", change: "+6.3%", reason: "Q1 beat (EPS $21.35 vs $20.10 expected); 25-for-1 stock split completed April driving retail inflows and index inclusion interest" },
      { rank: 5, name: "Broadcom", sector: "Semiconductors", change: "+5.1%", reason: "Post-earnings recovery after initial -14% drop; Q2 AI revenue +143% YoY to $10.8B, Q3 guide for $16B now being re-rated as strong" },
      { rank: 6, name: "SK Hynix", sector: "Memory / Semiconductors", change: "+4.8%", reason: "62% HBM market share locked; NVIDIA allocation sold out through 2026; Samsung strike resolution avoids worst-case supply disruption" },
      { rank: 7, name: "CrowdStrike", sector: "Cybersecurity", change: "+4.2%", reason: "4-for-1 stock split announced effective July 2; AI-driven security demand accelerating; AWS partnership boosting cloud security revenues" },
      { rank: 8, name: "Novo Nordisk", sector: "Healthcare / GLP-1", change: "+3.8%", reason: "Wegovy pill maintains 65% of new US prescriptions; China approval filing for Wegovy pill strengthens global market thesis" },
      { rank: 9, name: "Rheinmetall", sector: "EU Defence", change: "+3.2%", reason: "NATO 5% GDP defence spending commitment; Bundeswehr orders lifting backlog; EU Defence Readiness Omnibus simplifying procurement" },
      { rank: 10, name: "MercadoLibre", sector: "EM / LatAm E-Commerce", change: "+2.9%", reason: "Q1 revenue +49% YoY to $8.8B; insider purchase of $200K signalling management confidence; LatAm fintech growing rapidly" },
      { rank: 11, name: "Palantir", sector: "AI / Defence Software", change: "+2.2%", reason: "Q1 2026 revenue $1.63B at 71% YoY growth; full-year guidance raised to $7.65-7.66B; US government AI contracts expanding" },
      { rank: 12, name: "Airbnb", sector: "Travel / Consumer", change: "+2.1%", reason: "Delta Air Lines rewards partnership; improving net income margins; World Cup 2026 in US driving advance bookings" },
      { rank: 13, name: "Microsoft", sector: "Mega-Cap Tech / Cloud", change: "+1.8%", reason: "AI revenue run rate hit $37B (+123% YoY); Azure AI contributing 13-16pp of Azure's 40% growth; Maia 200 custom chip at 3nm deployed" },
      { rank: 14, name: "Progressive", sector: "Insurance", change: "+1.7%", reason: "Insurance pricing power sustained; claims inflation moderating; rate environment benefits investment income" },
      { rank: 15, name: "Global Ship Lease", sector: "Shipping", change: "+1.6%", reason: "Orders 10 next-gen containerships ($917M) signalling long-term demand confidence; container rates +51% on Asia-US West Coast" },
      { rank: 16, name: "Garmin", sector: "Consumer Tech / Defence", change: "+1.5%", reason: "Dual consumer/defence exposure; GPS and navigation systems demand growing from EU military spending" },
      { rank: 17, name: "Comfort Systems (FIX)", sector: "Industrials", change: "+1.4%", reason: "Data centre HVAC and mechanical systems backlog growing as AI capex drives construction; US energy grid upgrade demand" },
      { rank: 18, name: "ServiceNow", sector: "Enterprise AI Software", change: "+1.3%", reason: "AI-focused partnerships with Wipro, Cognizant, Digimarc; enterprise workflow automation pricing power intact" },
      { rank: 19, name: "Alphabet", sector: "Mega-Cap Tech / Cloud", change: "+0.9%", reason: "Google Cloud AI growing; TPU v7 Ironwood leading on inference; strong buy consensus from 63 analysts" },
      { rank: 20, name: "TopBuild", sector: "Construction", change: "+0.8%", reason: "Insulation and building products demand sustained by data centre and residential construction backlog" }
    ],
    losers: [
      { rank: 1, name: "Intel", sector: "Semiconductors", change: "-8.5%", reason: "June 5 drop of -11.3% in single session; continues losing share to AMD and custom silicon; CHIPS Act fab delays persisting" },
      { rank: 2, name: "AMD", sector: "Semiconductors", change: "-7.3%", reason: "June 5 sell-off (-10.9% on that day) driven by Broadcom's cautious AI outlook; recovered partially but weekly close deeply negative" },
      { rank: 3, name: "Envista Holdings", sector: "Dental / Healthcare", change: "-7.1%", reason: "June 17 decline; dental sector headwinds from consumer spending pressure under rising rate environment" },
      { rank: 4, name: "Micron", sector: "Memory", change: "-6.2%", reason: "Sector sell-off after Broadcom earnings; despite HBM share gains vs Samsung, valuation reset under higher rate environment" },
      { rank: 5, name: "Alibaba", sector: "EM / China Tech", change: "-6.3%", reason: "Down 27.7% YTD; regulatory and geopolitical headwinds persist; lagging US tech peers on AI narrative despite cheap valuation" },
      { rank: 6, name: "Lionsgate Studios", sector: "Media", change: "-6.2%", reason: "Streaming competition intensifying; studio deal environment weak; June 17 broad market sell-off" },
      { rank: 7, name: "Tesla", sector: "EVs / Energy", change: "-5.0%", reason: "Stock fell from $431 to $396 through June; SpaceX merger speculation unresolved; Hold consensus from 27 analysts" },
      { rank: 8, name: "Nvidia", sector: "Semiconductors / AI", change: "-4.5%", reason: "Pulled back from $232 all-time high; profit-taking after strong run; Broadcom earnings reaction dragged AI chip complex lower mid-week" },
      { rank: 9, name: "Meta Platforms", sector: "Mega-Cap Tech / Social", change: "-3.8%", reason: "Down on Fed hawkishness; capex raise to $125-145B renewed investor concern about AI spending vs near-term ROI" },
      { rank: 10, name: "Wingstop", sector: "Consumer / Restaurants", change: "-4.2%", reason: "SSS -8.7% in Q1 from weather and gas price pressure on lower-income consumers; stock now 54% below prior-year highs at $162" },
      { rank: 11, name: "Trip.com", sector: "EM / China Travel", change: "-8.2%", reason: "Down 8.2% over past month; Q1 2026 results scheduled June 24-25 creating pre-earnings uncertainty; stock at $47 vs $76 analyst target" },
      { rank: 12, name: "Novo Nordisk", sector: "Healthcare / GLP-1", change: "-4.5%", reason: "Earlier in June: -15.9% single-session drop on new safety data from competitor; sector sentiment volatile despite strong prescription share" },
      { rank: 13, name: "Amazon", sector: "Mega-Cap Tech / Cloud", change: "-3.5%", reason: "Fed hawkishness hits high-multiple growth; stock at $246; broader market sell-off on June 17 hit all Mag7" },
      { rank: 14, name: "Microsoft", sector: "Mega-Cap Tech", change: "-3.2%", reason: "June 17 comms services leading laggard; PE now at 23x — well below 5-year avg of 32x, creating a floor; strong fundamentals but rates headwind" },
      { rank: 15, name: "International Seaways", sector: "Shipping", change: "-2.8%", reason: "Pulled back from May 8 all-time high of $91.62 to $81; oil tanker rates easing as Iran conflict risk subsides post-ceasefire" },
      { rank: 16, name: "Apple", sector: "Mega-Cap Tech / Consumer", change: "-2.1%", reason: "AI strategy frustration after WWDC; slower-than-expected AI integration; foldable iPhone September launch anticipated but not priced in" },
      { rank: 17, name: "Danaos", sector: "Shipping / Containers", change: "-2.5%", reason: "Container ship charter rates under pressure from supply additions despite spot rate spike; stock at $128 vs $133 high" },
      { rank: 18, name: "Starbucks", sector: "Consumer / Restaurants", change: "-2.3%", reason: "Consumer spending caution; higher rate environment weighing on discretionary; labour cost inflation" },
      { rank: 19, name: "UnitedHealth", sector: "Healthcare / Managed Care", change: "-1.9%", reason: "Healthcare cost inflation and Medicare Advantage pricing pressure persisting; sector rotation to defensives limited by valuation" },
      { rank: 20, name: "PayPal", sector: "Fintech", change: "-1.8%", reason: "Competition from Stripe, Apple Pay intensifying; consumer payment volumes under pressure from higher rates hitting discretionary spend" }
    ]
  },

  sectors: [
    { name: "US Technology", change: "-2.2%", direction: "down", driver: "Broadcom earnings reaction + Fed hawkishness; semiconductors led losses; software partially recovered later in week" },
    { name: "US Financials", change: "+1.2%", direction: "up", driver: "Rate hike expectations boosting bank NIM [net interest margin — spread between lending rates and deposit rates] outlook; Progressive and Interactive Brokers outperforming" },
    { name: "US Healthcare", change: "-0.2%", direction: "flat", driver: "GLP-1 volatility on safety data; UnitedHealth Medicare headwinds; HCA steady on hospital demand" },
    { name: "US Industrials", change: "+0.5%", direction: "up", driver: "Data centre construction backlog; Comfort Systems, HEICO benefiting from AI capex and defence" },
    { name: "US Energy", change: "-0.9%", direction: "down", driver: "Oil prices fell on Iran ceasefire framework reducing supply disruption premium; Brent at $93.71" },
    { name: "US Consumer Disc.", change: "-1.5%", direction: "down", driver: "Consumer confidence weakening under higher rate signals; restaurants and retail under pressure" },
    { name: "US Consumer Staples", change: "+0.8%", direction: "up", driver: "Defensive rotation as Fed hawkishness increases recession risk; Walmart, TJX benefiting" },
    { name: "US Materials", change: "-0.4%", direction: "down", driver: "Mixed signals from tariff impact; construction materials steady but mining under dollar pressure" },
    { name: "US Real Estate", change: "-1.8%", direction: "down", driver: "Rate hike fears hit REITs [real estate investment trusts] hardest; nine FOMC members backing higher rates is a direct headwind for property valuations" },
    { name: "US Utilities", change: "+2.1%", direction: "up", driver: "AI power demand narrative stays strong; Vistra, Constellation benefiting; rate hike fears partially offset by data centre power premium" },
    { name: "US Comm. Services", change: "-3.0%", direction: "down", driver: "Leading laggard on Fed day; Microsoft, Meta, Alphabet, Amazon all closed in red after FOMC statement" },
    { name: "EU Defence", change: "-1.2%", direction: "down", driver: "Consolidation after massive run; Rheinmetall partly recovered on Bundeswehr orders; STOXX AeroDefence index -1.2% YTD vs Stoxx 600 +4.8%" },
    { name: "EU Banks", change: "+1.5%", direction: "up", driver: "Rate hike expectations (US and Japan BOJ) improving NIM outlook; Commerzbank, Santander, BNP Paribas holding well" },
    { name: "EU Industrials", change: "+0.3%", direction: "up", driver: "Defence spending multiplier effects; Siemens AI automation demand steady" },
    { name: "EU Luxury", change: "-1.0%", direction: "down", driver: "Consumer spending caution; LVMH facing China demand uncertainty; stronger EUR hurt export competitiveness temporarily" },
    { name: "EU Autos", change: "-0.8%", direction: "down", driver: "Toyota and EU auto stocks under EV transition pressure; tariff uncertainty on imports to US" },
    { name: "EU Insurance", change: "+1.1%", direction: "up", driver: "Allianz, AXA, Talanx, Hanover Re benefit from higher rates boosting investment income; rate hike environment structurally positive" }
  ],

  flows: [
    { label: "US Equities", amount: "+$5.3B", direction: "in", pct: 55, note: "Modest inflows to start June before Fed hawkishness reversed sentiment mid-week; flows remain positive YTD as retail stays engaged" },
    { label: "European Equities", amount: "+$2.1B", direction: "in", pct: 48, note: "EU defence and industrial inflows offsetting outflows from luxury; euro weakening provides partial FX headwind for USD investors" },
    { label: "EM Equities", amount: "+$1.6B", direction: "in", pct: 42, note: "EM bond funds extended longest inflow run since Q2 2021; China H-shares and India continuing to attract flows" },
    { label: "Gold & Commodities", amount: "+$1.4B", direction: "in", pct: 60, note: "Physical gold funds continued inflows; BRICS de-dollarization buying + Iran ceasefire creating net positive gold environment" },
    { label: "Fixed Income", amount: "+$15.7B", direction: "in", pct: 72, note: "Bonds attracted the largest weekly inflows — Fed hawkishness boosted short-duration yield appeal; money rotated from rate-sensitive equities" },
    { label: "Cash / Money Markets", amount: "+$94.8B", direction: "in", pct: 80, note: "Fourth largest YTD inflow week for Europe money market funds; Fed uncertainty driving cash parking behavior; elevated cash levels signal dry powder for re-entry" }
  ],

  trends: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "TSMC targeting 130,000 CoWoS wafers/month by late 2026; Microsoft deploying Maia 200 at 3nm; hyperscaler capex reaches $725B collectively — 75% for AI infra; power demand for data centres now equals Japan's total electricity consumption at 1,000 TWh.",
      detail: "AI infrastructure is no longer primarily a software story. Data centres now consume 1,000 TWh annually — equal to Japan's entire electricity grid. Microsoft committed $15.2B to UAE infrastructure, Meta built a $10B campus in Louisiana, and TSMC is quadrupling CoWoS packaging capacity. The physical supply chain — power generation, advanced packaging, specialized cooling — is the new bottleneck, creating investment opportunities beyond pure software names.",
      type: "structural"
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "CONFIRMED",
      evidence: "EU Defence Readiness Omnibus passed — 100-day permitting for defence industry vs previous 4-year wait; NATO members committed to 5% GDP defence spending; Rheinmetall backlog more than doubled in two years.",
      detail: "Europe is translating geopolitical urgency into industrial policy at unprecedented speed. The EU agreed to simplify defence procurement (100-day maximum permits, down from 4 years) and governments are on a path to 5% GDP defence budgets. Rheinmetall's backlog doubling in two years is the stock-level evidence. The challenge is that defence stocks have run hard — the sector is consolidating and investors are becoming more selective on winners vs the early-mover trade.",
      type: "structural"
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "Dollar share of global reserves fell from 72% to ~58% since 2000; BRICS Pay expansion 2026 operational; MBridge and ZIPS cross-border payment systems now active without Swift; BRICS Unit gold-backed settlement tool launched; over 90% of Russia-India-China trade now ex-dollar.",
      detail: "De-dollarization is accelerating in 2026 with concrete infrastructure: MBridge and ZIPS cross-border payment systems are operational without Swift exposure. The BRICS Unit — a gold-backed settlement instrument — launched this year. Central banks purchased over 1,000 tonnes of gold for the third consecutive year. The EUR/USD dynamic this week (1.1509, falling) reflects short-term USD strength from Fed hawkishness, not structural dollar recovery. Long-term trend remains intact.",
      type: "structural"
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "MIXED",
      evidence: "Novo Nordisk Wegovy maintains 65% of new US prescriptions; oral pill launch described as 'one of the best ever'; China regulatory filing submitted; BUT Novo stock hit -15.9% in a single session on competitor safety data.",
      detail: "The GLP-1 [glucagon-like peptide-1 receptor agonists — a class of weight-loss and diabetes drugs] thesis is playing out commercially but creating extraordinary stock volatility. Novo Nordisk maintains dominant market position and its oral Wegovy launch is exceeding expectations. However, competitor safety data scares create violent single-session moves (-15.9%). The China expansion is the next major catalyst. The healthcare cost disruption thesis (fewer hospitalizations, cheaper chronic disease management) is strengthening but takes years to appear in insurance and hospital financials.",
      type: "structural"
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "CONFIRMED",
      evidence: "Container rates on Asia-US West Coast spiked +51% week-over-week to $4,836/FEU [forty-foot equivalent unit — standard container size]; Drewry WCI index up 3% to $3,549 week of June 11; Global Ship Lease ordered 10 next-gen ships ($917M).",
      detail: "Trade fragmentation — driven by tariffs, US-China decoupling, and the Iran conflict-driven Hormuz risk — is creating structurally higher and more volatile shipping rates. China-to-US volumes are 30% lower YoY but rate spikes come from cargo pulling forward ahead of potential July tariff changes and World Cup demand. Shipping companies are ordering new vessels despite the uncertainty, betting the fragmented world keeps charter rates [daily rental price for one ship] elevated. The Cape of Good Hope routing remains default for Asia-Europe, adding vessel-days and tight capacity.",
      type: "cyclical"
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "WEAKENED",
      evidence: "Money market cash inflows surged to $94.8B this week — fourth largest YTD — as Fed hawkishness sent investors back to cash; retail equity flows were positive in May ($9.2B) but the Fed surprise may reverse the June trend.",
      detail: "The retail rotation into equities is running into a structural headwind: the Fed has re-opened the 'cash pays well' argument by signalling a potential rate hike. Money market yields that were falling (as rate cuts were expected) are now expected to stay elevated or rise, making the safe cash alternative attractive again. The $94.8B money market inflow week suggests the rotation is taking a pause. The underlying dry powder thesis remains — elevated cash balances eventually re-enter markets — but the timeline has extended.",
      type: "cyclical"
    }
  ],

  executive: {
    biggest_mover: {
      name: "Broadcom (AVGO)",
      change: "-14% then recovery",
      reason: "Broadcom's Q2 FY2026 earnings beat (AI revenue +143% YoY to $10.8B, Q3 guide of $16B for AI revenue) should have been unambiguously positive, but the initial after-hours reaction was -14% as the most aggressive models had priced in even higher. The recovery during the week illustrates that Broadcom's AI moat in custom ASICs [application-specific integrated circuits — chips built for one customer's specific workload] is intact — the sell-off was a valuation reset, not a fundamental impairment. Thesis 1 (AI infrastructure) ultimately intact; Broadcom remains a core holding in the custom silicon thesis."
    },
    key_risk: {
      name: "Fed Rate Hike Signal (Warsh Era Begins)",
      reason: "Kevin Warsh's first FOMC meeting produced the most hawkish signal since the 2022-23 hiking cycle: nine of 18 members now project a rate hike before year-end, PCE inflation forecast raised to 3.6%, and forward guidance on cuts was explicitly removed. For a market priced at elevated multiples on rate-cut assumptions, this is a direct compression risk — P/E [price-to-earnings ratio — how many years of earnings you pay for each share] multiples that expanded on falling-rate expectations must now re-compress. The AI infrastructure capex cycle is long-dated enough to survive the rate shock, but short-duration growth names and rate-sensitive real estate face meaningful multiple contraction."
    },
    conviction_call: {
      name: "Utilities (Vistra / Constellation Energy)",
      observation: "The utilities sector is playing a rare dual role: defensive safe haven in a rising-rate environment AND direct AI infrastructure beneficiary. Vistra's Q1 revenue grew 43% YoY and it secured a $10B KKR AI infrastructure partnership. Constellation closed the Calpine acquisition giving it 60GW of generation capacity. Unlike pure tech plays, utilities carry regulated cash flows and real assets, making them structurally more rate-resistant than growth stocks. The AI power demand thesis adds a secular growth layer to what was traditionally a pure-yield sector — this combination of defensive income and structural growth is rare and worth holding through rate uncertainty."
    },
    macro_pulse: {
      name: "FOMC June 2026 — Warsh's First Meeting",
      observation: "The Fed held rates at 3.5-3.75% in a 12-0 vote but the dot-plot [chart showing each Fed member's rate forecast] was the story: nine officials project at least one 25bp hike before year-end. New Chair Warsh abstained from submitting his own dot, shortened the statement, and removed forward guidance language — signalling he wants to operate with maximum optionality. For markets, the key phrase was removing the explicit language about likely rate cuts. The S&P fell 1.21%, Nasdaq -1.34%, Dow -0.98% on the day. All 11 S&P sectors closed lower — a sign this was a real regime shift in expectations, not a one-day overreaction."
    },
    tags: [
      { label: "EUR/USD: 1.1509 falling", type: "red" },
      { label: "Fed: Rate hike signal — 9 officials", type: "red" },
      { label: "ECB: June projections slightly lower", type: "amber" },
      { label: "Tariffs: Container rates +51% Asia-US", type: "amber" },
      { label: "AI capex: $725B committed — intact", type: "green" },
      { label: "EU defence: Procurement reform passed", type: "green" },
      { label: "Semis: Broadcom AI guide $16B Q3", type: "amber" },
      { label: "Shipping: Iran ceasefire — Hormuz reopening", type: "green" }
    ]
  },

  macro: {
    us: "The US economy is navigating a paradox: strong labor markets (May payrolls +172K vs +80K expected, partly driven by World Cup 2026 hiring) alongside stubborn inflation that has triggered Kevin Warsh's first hawkish pivot at the Fed. PCE inflation is projected at 3.6% year-end, driven by an energy price spike from the Iran conflict that has now partly unwound following the ceasefire framework. Business investment rose 10%+ in Q1, hyperscalers committed $725B in AI capex for 2026 — the investment cycle is intact. But nine FOMC members now see at least one rate hike by year-end, removing forward guidance on cuts. The removal of rate-cut language is the key macro shift: it transforms the 2026 narrative from 'easing supports growth stocks' to 'higher for longer compresses multiples.' Tariff pass-through to consumers remains above 50%, adding to inflation pressure. The equity market had its first meaningful weekly loss (-1.2% S&P 500) in weeks after nine straight up-weeks.",
    europe: "Europe's macro picture is split between cyclical headwinds and structural tailwinds. ECB staff revised GDP growth down to 0.9% for 2026 (reflecting spillover from the energy shock and Iran conflict impact on commodity prices and confidence), but the defence spending boost is providing a meaningful offset — estimated at 0.5pp cumulative GDP stimulus over 2025-28 from German-led fiscal spending. The EU Defence Readiness Omnibus passed this week, slashing permitting timelines from 4 years to 100 days. Only 11% of Draghi Report recommendations have been implemented, meaning structural competitiveness reform remains largely theoretical. Banks benefit from the rate environment (EU rate hikes still possible if inflation persists), defence and industrial sectors attract inflows, but luxury and autos face consumer headwinds.",
    asia: "China is growing at 5% YoY in Q1 2026 with exports +15% in the first four months, supported by more stable US trade relations after recent Beijing summits. Chinese equities entered 2026 with momentum (MSCI China H-shares +29% in 2025) and earnings growth of ~13% projected for 2026. The real estate sector remains structurally impaired. Japan's Bank of Japan raised rates 25bp to 1.0% at its June meeting — the highest since 1995 — driven by wholesale inflation at 6.3%. The BOJ hike carries JPY carry trade [borrowing in cheap yen to buy higher-yielding global assets] unwind risk: forced position liquidation in tech stocks can happen within hours, not days. TSMC Kumamoto entered volume production this week, advancing Japan's semiconductor renaissance. Broader EM Asia: fading tariff tail-risks and ongoing tech capex drive constructive EM equity flows, though the new Fed hawkishness adds a dollar headwind for EM borrowers.",
    forward: "Next week watch: US PCE inflation data (Friday) — the key inflation metric the Fed tracks, now projected at 3.6% by year-end; any Warsh speeches for hints on the pace and timing of potential hikes; NVIDIA investor day or analyst commentary post-pullback; Trip.com Q1 2026 results (June 24-25) — a real-time read on China consumer travel demand; BOJ follow-through on its June rate hike in bond markets (watch JGB [Japanese government bond] 10-year yield and JPY); and US-Iran formal peace signing scheduled for June 19 in Switzerland — if confirmed, Brent crude could fall further, providing an inflation offset and oil tanker rate headwind."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$295",
      change: "-2.1%",
      pe: "~33x",
      pe_plain: "paying 33 years of annual earnings for each share",
      target: "$313",
      theme: "AI iPhone cycle delayed — foldable September",
      news: "Apple reported Q2 2026 revenue of $111.18B (+16.6% YoY) with 8 consecutive quarterly EPS beats. However, investors remain frustrated with AI integration pace post-WWDC. A foldable iPhone is expected September 2026 and camera-enabled AirPods are in development. Revenue guidance for Q3 is +14% to +17% YoY. At 33x PE in a rising-rate environment the bar for disappointment is low.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Strong fundamentals and massive cash returns but AI narrative lag vs peers and 33x PE leaves limited room for disappointment in a rising-rate environment."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$394",
      change: "-3.2%",
      pe: "~23x",
      pe_plain: "paying 23 years of annual earnings — well below its 5-year average of 32x",
      target: "$562",
      theme: "AI revenue flywheel — $37B run rate",
      news: "Microsoft's AI business hit an annualized revenue run rate of $37B (+123% YoY). Azure grew 40% in Q3 FY2026, with AI contributing 13-16 percentage points of that growth. Maia 200 custom AI chip deployed on 3nm TSMC. Microsoft is moving OpenAI inference to Maia while keeping Nvidia GPUs for training. This week's 3.2% decline on Fed hawkishness looks like an entry opportunity given 23x PE is significantly below 5-year average.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "AI revenue at $37B run rate, Azure accelerating, PE at 23x (21% below 10-year average) — most attractive valuation-to-growth setup in Mag7 right now."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$246",
      change: "-3.5%",
      pe: "~29x",
      pe_plain: "paying 29 years of annual earnings — well below its 5-year average of 65x",
      target: "$319",
      theme: "AWS + Trainium custom silicon crossing $20B",
      news: "Amazon's custom silicon business (Trainium, Inferentia, Graviton) surpassed $20B annualized run rate by early 2026. Trainium3 went GA in December on 3nm, delivering 2.5 PFLOPS FP8. AWS AI revenues growing but exact AI-attributable split less disclosed than Azure. Amazon projects $200B capex for 2026, a 60% increase. EPS consensus for next quarter is $1.82 with $197B revenue expected.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "AWS custom silicon approaching NVIDIA in inference; 29x PE vs 65x 5-year average represents significant multiple normalization; AI capex driving long-term cloud market leadership."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$373",
      change: "+0.9%",
      pe: "~28x",
      pe_plain: "paying 28 years of annual earnings",
      target: "$433",
      theme: "Google Cloud + TPU v7 Ironwood inference lead",
      news: "Google's TPU v7 Ironwood leads on inference workloads and is the most mature hyperscaler custom chip. Alphabet soared +10% the day after Q1 earnings (reported April 29). Google Cloud AI growing strongly, targeting $175-185B capex for 2026. 63 analysts rate it Strong Buy with a $433 target. GOOGL is the only Mag7 name that was positive on the week, benefiting from its relative valuation and cloud AI momentum.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Only positive Mag7 name this week; TPU leadership in inference; 28x PE reasonable given Google Cloud growth trajectory; advertising resilience underappreciated."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$593",
      change: "-3.8%",
      pe: "~21x",
      pe_plain: "paying 21 years of annual earnings — 21% below its 10-year average",
      target: "$680",
      theme: "AI-first social — cheapest Mag7 on earnings",
      news: "Meta's Q1 2026 revenue hit $56.3B (+33% YoY), topping consensus. Meta raised 2026 capex to $125-145B (from $115-135B), driven by Nvidia's Vera Rubin chip commitments and a $21B CoreWeave cloud agreement. Meta MTIA custom chip is scaling for inference. Shares fell 7% on the capex raise — market penalizing AI spending scale despite the industry's largest ASIC deployment outside hyperscalers. Currently at 21x PE — cheapest in Mag7 on earnings.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Cheapest Mag7 by PE at 21x; +33% revenue growth; capex concerns are legitimate but the business generates enough cash to absorb it; MTIA custom chip reduces Nvidia dependency over time."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$205",
      change: "-4.5%",
      pe: "~35x forward",
      pe_plain: "paying 35 years of forward earnings — premium to market but well below the 70x of early 2024",
      target: "$250",
      theme: "GPU monopoly — Vera Rubin next cycle",
      news: "NVIDIA pulled back from its $232 all-time high to ~$205, driven by profit-taking and Broadcom's initial earnings reaction dragging the chip complex. Q1 FY2027 (reported May 20, 2026) showed strong results. Vera Rubin GPU (50 PFLOPS FP4, 288GB HBM4) is the next platform. NVIDIA CFO at BofA conference said addressable market can double with new chip generations. Custom silicon gaining inference share but training remains NVIDIA-dominated. Next earnings: Aug 26, 2026.",
      earnings: "August 26, 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Core AI trade but custom silicon eroding inference TAM [total addressable market]; at 35x forward PE the bar is still high; hold rather than chase after pullback from $232; re-evaluate ahead of Aug 26 earnings."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$396",
      change: "-5.0%",
      pe: "~85x",
      pe_plain: "paying 85 years of annual earnings — extreme premium requires perfect execution",
      target: "$409",
      theme: "SpaceX merger speculation — robotaxi 2026",
      news: "Tesla fell from $431 to $396 through the month of June. SpaceX merger speculation (CNBC reported May 27 that Musk discussed combining companies with colleagues) remains unresolved and is the primary near-term narrative driver. 27 analysts have a Hold consensus with a $409 target barely above current price. EV market share under pressure in China from BYD and domestic competition. Robotaxi commercialization timeline remains the key long-term variable.",
      earnings: "Late July 2026 (est.)",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "SpaceX merger speculation creates binary risk; 85x PE leaves no margin for error; EV fundamentals deteriorating in China; robotaxi promise vs quarterly delivery pressure is an unresolved tension."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure in the Physical World",
      status: "CONFIRMED",
      evidence: "Hyperscalers committed $725B capex for 2026 (77% YoY increase); data centres consuming 1,000 TWh/year; TSMC CoWoS targeting 130,000 wafers/month; AI power demand selecting investment winners in utilities.",
      instruments: "NVDA, MSFT, GOOGL, META, AMZN, AVGO, MRVL, TSMC, AMD, CRWD, ServiceNow, Palantir, Pure Storage, NICE, Vistra, Constellation Energy",
      highlights: [
        { name: "Broadcom (AVGO)", change: "+5.1% weekly (recovery)", note: "Q2 AI revenue $10.8B (+143% YoY); Q3 guide for $16B AI semiconductor revenue (+200% YoY) — the initial -14% sell-off was a valuation reset, not a fundamental break. ASIC [application-specific chips] market share with hyperscalers expanding." },
        { name: "Marvell Technology (MRVL)", change: "+16.2%", note: "Biggest winner this week; custom ASIC demand surge from hyperscalers shifting inference workloads to Marvell designs. Emerging as the second-largest AI chip beneficiary after Nvidia in the custom silicon era." },
        { name: "Vistra Corp (VST)", change: "+7.2%", note: "AI power demand narrative driving utility re-rating; KKR $10B AI venture partnership; Q1 EBITDA [raw operating profit before bookkeeping adjustments] $1.48B at 26% margin; utilities with nuclear/gas assets are the unexpected AI infrastructure beneficiaries." },
        { name: "Nvidia (NVDA)", change: "-4.5%", note: "Pullback from $232 high to $205; Vera Rubin next GPU platform with 50 PFLOPS FP4; custom silicon gaining inference share but training remains NVIDIA's domain. Next earnings Aug 26 is the key catalyst." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "CONFIRMED",
      evidence: "EU Defence Readiness Omnibus passed (100-day permitting vs 4-year previous); NATO 5% GDP commitment advancing; Germany-led fiscal stimulus adding 0.5pp to EU GDP; Rheinmetall backlog doubled in 2 years.",
      instruments: "Rheinmetall, Safran, Thales, HEICO, GE, Howmet Aerospace, Siemens, VanEck Defense ETF, Knorr-Bremse, ASML, Deutsche Boerse, Allianz, Hannover Re",
      highlights: [
        { name: "Rheinmetall (RHM)", change: "+3.2% net weekly", note: "Bundeswehr ammunition and armoured vehicle orders lifting backlog. Brief pullback on consolidation concerns; the defence spending impulse is multi-year. Investors becoming more selective on individual winners vs broad defence." },
        { name: "HEICO", change: "+1.5%", note: "Aviation MRO [maintenance, repair, overhaul] business benefits from defence aviation spending surge; FAA-approved parts for military platforms; dual-use beneficiary of both EU defence and US aerospace demand." },
        { name: "ASML", change: "+0.8%", note: "Lithography monopoly intact; SMEE stuck at 28nm-class with no credible 7nm threat; Maia 200 and Vera Rubin all manufactured on TSMC N3 which requires ASML EUV tools exclusively." },
        { name: "Allianz / Hanover Re", change: "+1.1%", note: "Insurance investment income benefits from rising rate environment (BOJ hike + potential Fed hike); EU defence policy driving demand for specialized insurance products for defence industry participants." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "Dollar share of global reserves at 58% (down from 72% in 2000); BRICS Unit gold-backed settlement launched; MBridge and ZIPS operational without Swift; >90% Russia-India-China trade now ex-dollar; central banks buying 1,000+ tonnes gold/year third consecutive year.",
      instruments: "iShares Physical Gold, Gold Fields, iShares Gold Producers, WisdomTree Bitcoin ETP, iShares MSCI Brazil, iShares MSCI China, Visa, Interactive Brokers",
      highlights: [
        { name: "Physical Gold / Gold Fields", change: "+1.5% (gold)", note: "Gold fund inflows $1.4B in the week ending June 4; BRICS Summit driving de-dollarization buying; Iran ceasefire removed some safe-haven premium but central bank accumulation floors the price. Gold remains structurally bid in a world of reserve diversification." },
        { name: "iShares MSCI Brazil (EWZ)", change: "+0.8%", note: "Brazil commodity exports benefiting from China demand; BRICS de-dollarization framework directly benefits Brazilian trade settlement in local currencies; Petrobras oil revenues partially immunized from dollar swings." },
        { name: "WisdomTree Bitcoin ETP", change: "+2.1%", note: "Bitcoin rising as dollar faces structural headwinds and retail inflows resume; institutional allocation to Bitcoin as non-dollar reserve asset is a growing trend among EM sovereigns." },
        { name: "Visa", change: "+0.5%", note: "Counterintuitively holds value — Visa benefits from cross-border transaction volumes regardless of settlement currency; positioned to run on BRICS payment rails over time through partnership agreements." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "MIXED",
      evidence: "Novo Nordisk Wegovy maintains 65% of new US prescriptions; oral pill launch described as 'one of the best ever'; China regulatory filing submitted; BUT single-session -15.9% drop on competitor safety data shows extreme sector sensitivity.",
      instruments: "Novo Nordisk, Veeva Systems, HCA Healthcare, UnitedHealth, McKesson, GE HealthCare, Celsius Holdings",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "-4.5% (volatile week)", note: "Trading near $39-40 after a brutal single-session -15.9% decline on competitor safety data. Despite this, Wegovy holds 65% of new US prescriptions and the oral pill launch is exceeding expectations. China filing is the next major catalyst. The long-term thesis is intact but the stock will remain extremely volatile on any GLP-1 competitive or regulatory news." },
        { name: "Veeva Systems", change: "+0.9%", note: "CRM [customer relationship management] software for pharma/biotech; GLP-1 commercial launch complexity (oral vs injectable, global rollout) drives demand for Veeva's life sciences cloud. Indirect beneficiary of the GLP-1 commercial buildout." },
        { name: "HCA Healthcare", change: "+0.5%", note: "Hospital operator facing mixed signals: GLP-1 drugs long-term reduce bariatric surgery volumes but near-term hospital demand driven by aging demographics; World Cup 2026 driving emergency care volumes in host cities." },
        { name: "Celsius Holdings", change: "-1.2%", note: "Functional beverage company that benefited from wellness/fitness tailwinds; GLP-1 adoption among its core demographic is a nascent headwind — users of weight-loss drugs may reduce energy drink consumption as appetite suppression generalizes." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "CONFIRMED",
      evidence: "Container rates on Asia-US West Coast +51% week-over-week to $4,836/FEU; Drewry WCI +3% to $3,549; Global Ship Lease ordered 10 next-gen ships ($917M); Hormuz reopening under Iran ceasefire creates rate volatility.",
      instruments: "Global Ship Lease, International Seaways, Danaos, Tsakos Energy Navigation, StealthGas",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+1.6%", note: "Ordered 10 next-generation mid-size containerships at $917M with deliveries 2028-2030 — a multi-year capacity bet on sustained high charter rates. Trading at $38.87 vs $48 analyst target. Management ordering new tonnage at scale is the strongest possible signal of long-term demand confidence." },
        { name: "International Seaways (INSW)", change: "-2.8%", note: "Tanker rates easing as Iran ceasefire framework reduces Strait of Hormuz disruption premium. Pulled back from $91 all-time high to $81. Near-term tanker headwind from peace deal — but the long-term vessel fragmentation thesis (longer routes, older fleet retirement) remains intact." },
        { name: "Danaos (DAC)", change: "-2.5%", note: "Container ship owner experiencing charter rate volatility; pulled back from $133 high to $128. New vessel supply additions creating near-term pricing headwinds even as spot rates spike. Long-term backlog [signed contracts not yet completed — pre-sold revenue] provides earnings floor." },
        { name: "Tsakos Energy Navigation (TEN)", change: "+0.3%", note: "Diversified tanker exposure (LNG, crude, product) provides partial offset to crude tanker rate softening; Iran ceasefire mixed — reduces Hormuz premium but opens up long-distance crude flows from Middle East." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "WEAKENED",
      evidence: "Money market inflows hit $94.8B this week — fourth largest YTD inflow — as Fed rate hike signal revived cash appeal; retail equity flows were positive in May ($9.2B) but June reversal risk elevated.",
      instruments: "Robinhood, Interactive Brokers, Vanguard S&P 500 ETF, iShares Core S&P 500, SPDR Russell 2000",
      highlights: [
        { name: "Robinhood", change: "+0.8%", note: "Retail brokerage volumes held up despite broader market weakness; commission-free trading volumes remain elevated at 36% of total order flow. Rate hike environment is a headwind for the thesis but Robinhood's user growth is independent of rate direction." },
        { name: "Interactive Brokers", change: "+1.7%", note: "Benefits directly from rate hike environment — higher rates increase margin interest income on client cash balances; unique among retail brokerages in that a hawkish Fed is actually positive for earnings." },
        { name: "SPDR Russell 2000 (IWM)", change: "-1.5%", note: "Small caps are most rate-sensitive [because smaller companies have more floating-rate debt and less access to bond markets] and were hit hardest by the Fed hawkish signal. The retail rotation thesis was most evident in Russell 2000 but the rate environment is now a direct headwind." },
        { name: "Vanguard S&P 500 ETF (VOO)", change: "-1.2%", note: "Index fund inflows remain structurally positive but passive flows moderated this week; the long-term trend of index fund adoption from retail continues unabated despite near-term rate volatility." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Broadcom",
      sector: "Semiconductors / Custom AI Chips",
      headline: "Broadcom Q3 AI Revenue Guide of $16B (+200% YoY) Misread as Disappointing — Triggering Industry-Wide Sell-Off",
      detail: "Broadcom's Q2 results (AI revenue $10.8B, +143% YoY) were objectively exceptional, but a $16B Q3 AI revenue guide created a -14% after-hours reaction because the most aggressive sell-side models had assumed $18B+. This reveals a structural tension in AI chip investing: at elevated multiples, only perfect beats register as positive. The recovery later in the week suggests the initial reaction was an overreaction, but it illustrates how crowded the AI chip trade has become. Custom ASIC [application-specific chip — built for one company's specific workload] business with Google, Apple, Meta, and others continues to expand Broadcom's role as the second AI chip company after Nvidia.",
      tag: "WATCH"
    },
    {
      num: "02",
      company: "Federal Reserve / Kevin Warsh",
      sector: "Macro / Monetary Policy",
      headline: "Warsh's First FOMC Meeting Removes Forward Guidance — Nine Officials Now Project Rate Hike",
      detail: "The most consequential event of the week was not a stock but a policy meeting. Warsh's decision to remove forward guidance language, shorten the Fed statement, and abstain from the dot-plot while nine colleagues signal a hike represents a fundamental break from the Powell-era communication style. For the equity market, the removal of 'likely rate cuts' language is equivalent to removing a floor from valuations. The irony: Warsh is also the candidate most likely to cut aggressively if the economy deteriorates — maximum optionality is his signal. The market does not yet know how to price a Fed chair who refuses to telegraph.",
      tag: "BEAR"
    },
    {
      num: "03",
      company: "Global Ship Lease",
      sector: "Shipping / Trade",
      headline: "Global Ship Lease Orders 10 Next-Gen Ships at $917M — Signal of Multi-Year Charter Rate Conviction",
      detail: "When a shipping company orders $917M of new vessels in a volatile rate environment, it is making a 5-7 year bet on elevated charter rates [the daily rental price for a vessel]. Global Ship Lease's management has direct visibility into contract renewal discussions and charter markets. This order — for mid-size containerships with deliveries 2028-2030 — signals they believe trade fragmentation and structural vessel demand will keep charter rates elevated well beyond current uncertainty. Container rates on Asia-US West Coast spiked 51% this week to $4,836/FEU. For the shipping thesis, this is a BULL signal from inside the industry.",
      tag: "BULL"
    },
    {
      num: "04",
      company: "BOJ / Japan",
      sector: "Macro / Rates / FX",
      headline: "Bank of Japan Raises Rates to 1.0% — Highest Since 1995 — JPY Carry Trade Unwind Risk Elevated",
      detail: "The BOJ's 25bp rate hike to 1.0% (highest in 30 years) is structurally significant for global markets, not just Japan. The JPY carry trade [investors borrow cheaply in yen and buy higher-yielding global assets — principally US tech stocks] is worth an estimated $4-6 trillion globally. When the BOJ hikes, the cost of these yen-denominated loans increases and positions must be unwound. The last major carry unwind (August 2024) sent Nasdaq down 6% in days. With Japanese wholesale inflation at 6.3%, the BOJ is likely to hike again before year-end. This is a tail risk that is underpriced in US tech multiples.",
      tag: "BEAR"
    },
    {
      num: "05",
      company: "Booking Holdings",
      sector: "Travel / Consumer",
      headline: "25-for-1 Stock Split + Q1 Beat Drives BKNG Up 6.3% — New Index Inclusion Dynamics Emerge",
      detail: "Booking Holdings' 25-for-1 stock split (completed April) and Q1 2026 EPS beat ($21.35 vs $20.10) illustrate how corporate actions can re-rate a stock independent of fundamentals. The split lowered the share price from ~$4,000+ to ~$160, enabling retail investor participation and S&P 500 weighting dynamics [larger retail accessible float means more passive buying when indices rebalance]. Q1 revenue of $5.21B (vs $5.10B consensus) and 2026 World Cup in the US are structural tailwinds. This is a case study in unlocking latent shareholder value through accessibility — content has not changed but the ownership pool has widened dramatically.",
      tag: "BULL"
    },
    {
      num: "06",
      company: "Micron vs. Samsung",
      sector: "Memory / Semiconductors",
      headline: "Micron Overtakes Samsung in HBM Share (21% vs 17%) — Samsung Yield Problems Accelerating Rebalancing",
      detail: "HBM market share [high-bandwidth memory — the type of DRAM required for AI chip packages]: SK Hynix 62%, Micron 21%, Samsung 17%. Micron has overtaken Samsung in HBM share, accelerated by Samsung's internal yield and production quality problems. The consequence: (1) Micron gains NVIDIA allocation and pricing power; (2) Samsung must invest heavily in HBM4 yield recovery while managing a concrete workers strike threatening Pyeongtaek campus construction. For investors: SK Hynix remains the dominant pure play; Micron is the beneficiary of Samsung's stumble; Samsung is under pressure on multiple fronts simultaneously.",
      tag: "WATCH"
    },
    {
      num: "07",
      company: "Amazon / Microsoft / Google",
      sector: "AI / Cloud / Custom Silicon",
      headline: "Custom AI Silicon Crosses $20B Annualized Run Rate at AWS — Hyperscalers Eroding NVIDIA's Inference Monopoly",
      detail: "Amazon's custom silicon business (Trainium3, Inferentia, Graviton) surpassed $20B annualized run rate — this is now large enough to be material to NVIDIA's total addressable market [the total potential revenue NVIDIA could theoretically capture]. Custom ASIC server shipments are projected to reach 27.8% of all AI servers in 2026 (growing at 44.6% CAGR vs 16.1% for NVIDIA GPUs). The crucial nuance: custom silicon dominates inference [running AI models to generate outputs], while NVIDIA still dominates training [building AI models in the first place]. NVIDIA's moat is narrowing from below while remaining intact at the frontier.",
      tag: "WATCH"
    },
    {
      num: "08",
      company: "MercadoLibre",
      sector: "EM / LatAm E-Commerce",
      headline: "Insider Buys $200K of MELI Stock as Q1 Revenue Hits $8.8B (+49% YoY) — Value Signal in EM Tech",
      detail: "MercadoLibre's SVP bought $200K of stock in the open market — a meaningful insider purchase signal at a time when the stock is down 31.8% over the prior year despite reporting Q1 revenue of $8.8B at 49% YoY growth. This disconnect between business performance and stock price is the type of anomaly that defines value-hunting in EM tech. LatAm's e-commerce penetration [share of retail conducted online] remains significantly below US/EU/China levels. At 14 analyst Buy ratings and no Sells, the insider purchase adds conviction to a thesis the market has temporarily abandoned.",
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
        finding: "All four hyperscalers reaffirmed 2026 capex at record levels: Amazon $200B, Google $175-185B, Microsoft $190B, Meta raised guidance to $125-145B (from $115-135B). No hedging language detected — Meta's capex raise was seen as too aggressive by investors but represents a committed not hedged position.",
        implication: "AI infrastructure capex cycle is intact through 2026; semiconductor demand runway confirmed; no early warning of demand softening in any hyperscaler language."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "DRAM prices have doubled in 2026; TrendForce projects global memory market at $551.6B for the year with DRAM revenue +144% YoY. DDR5 contract prices growing in Q2 with upward trend expected into Q3 and Q4. HBM3e and HBM4 capacity sold out through 2026 across all suppliers. Memory pricing is one of the strongest green signals in the entire AI trade.",
        implication: "Memory pricing surge signals persistent AI training demand 6-8 weeks forward; SK Hynix, Micron, and Samsung all benefit; no plateau in sight for 2026."
      },
      {
        id: "capex_revenue_gap", // TODO: add metric_value / metric_period / metric_label fields once next hyperscaler earnings land (AI Trade Integrity gap badge)
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Microsoft AI revenue run rate $37B (+123% YoY) is impressive but against $190B capex represents a significant gap. Google Cloud AI growing. AWS custom silicon crossed $20B annualized. However, the hyperscalers collectively are committing $725B capex against AI revenues that, even if growing at 120%, cannot yet close the gap in this cycle. The gap is widening in 2026 before closing in 2027-28.",
        implication: "The AI trade is still pricing future potential not current cash flows; this is not yet a red flag but the gap needs to start closing by mid-2027 or the cycle will face a valuation crisis; monitor quarterly cloud AI revenue growth vs capex spend."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "Q1 2026 EPS beat rate was 85% (highest since Q2 2021) with beats averaging 16.7% above expectations. However, the Fed hawkishness this week is beginning to compress multiples even as earnings revisions remain positive. Microsoft PE is at 23x (21% below 10-year average) — suggesting earnings-driven multiple compression has already occurred. Meta at 21x. The risk is that if Warsh follows through on hikes, PE compression continues even with strong earnings revisions.",
        implication: "Currently AMBER because rising rates are starting to compress multiples independently of earnings quality; fundamentals still strong but the rate environment introduces a sentiment overlay that could turn GREEN or RED depending on June-July data."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "SMIC demonstrating 5nm via multi-patterning DUV with ~20% yield (vs industry standard 80%+); Huawei planning 600,000 Ascend 910C units for 2026 but HBM supply constraints production to under 300,000 without stockpiled foreign HBM; China EUV lab in Shenzhen operational but not producing chips — 2028 target; Huawei 7nm doubled, 5nm being developed. Progress is real but below the RED threshold (credible 5nm-class volume production).",
        implication: "China is advancing faster than the market prices in on semiconductor self-sufficiency but yield rates and HBM constraints prevent near-term commercial viability at advanced nodes; ASML and TSMC geopolitical premiums are sustained for now; upgrade to RED only if 5nm-class yield breaks 50%."
      }
    ]
  },

  breadth: {
    value: "58%",
    value_label: "S&P 500 above 50-day average",
    drivers: ["Nvidia", "Microsoft", "Broadcom"],
    holdings_check: "Three of five direct holdings — Nvidia, Microsoft, Broadcom — are doing the lifting. Broad enough to call this confirmation, not a mega-cap mask. TSM and AMD lagged the index this week."
  },

  semis: {
    status: "WATCH",
    regions: [
      {
        region: "Korea",
        info: "Korea supplies ~95% of global HBM [high-bandwidth memory]. Production disruption propagates to NVIDIA allocation within 4-6 weeks. Samsung strike losing share to SK Hynix = rotation within sector, not a sector exit.",
        signal: "AMBER",
        finding: "Samsung-union agreement reached just before the 48,000-worker strike (May 21-June 7 window). However, concrete truck drivers' union strike (June 2026) halted all concrete pouring at SK Hynix's Yongin semiconductor cluster construction site and Samsung's Pyeongtaek campus construction. Current production is not affected but capacity expansion timelines face delay risk.",
        implication: "Samsung production dodged a bullet but construction delays at both Pyeongtaek and Yongin could push HBM4 capacity online 3-6 months later than planned; SK Hynix benefits as Samsung's yield/production issues continue; monitor concrete workers' dispute resolution."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "AMBER",
        finding: "BOJ hiked 25bp to 1.0% (highest since 1995) at its June meeting, driven by 6.3% wholesale inflation. TSMC Kumamoto entered volume production for automotive, industrial, and consumer chips. Two simultaneous signals: POSITIVE (new chip supply coming online) and NEGATIVE (carry trade unwind risk growing as yen borrowing costs rise).",
        implication: "BOJ's rate path is the primary near-term risk for global tech stocks via carry trade unwinding; TSMC Kumamoto production adds advanced chip capacity for non-AI applications which helps free up TSMC's leading-edge nodes for AI work; net AMBER — monitoring BOJ next meeting."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "GREEN",
        finding: "TSMC CoWoS capacity targeting 130,000 wafers/month by late 2026 (industry total reaching 200,000 wpm with ASE/Amkor overflow). Outsourcing 240,000-270,000 wafers annually to Amkor and SPIL. No Taiwan political escalation signals this week. No rare earth embargo announcements. China domestic chip progress at AMBER but not threatening TSMC's CoWoS monopoly.",
        implication: "CoWoS expansion on track — NVIDIA GPU production bottleneck is actively being addressed; Taiwan political risk remains background noise but not elevated; packaging capacity growth is GREEN for AI chip availability in 2026-2027."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "GREEN",
        finding: "January 2026 BIS rule revised license review for H200-class China exports to presumption of approval for qualifying customers (with 25% revenue sharing mechanism). CHIPS Act awards totalling $33.7B in direct funding plus $5.5B loans across 20 finalized awards. Intel Ohio fab facing skilled worker shortages and delays. No new export control expansions announced this week.",
        implication: "Policy environment is stable and the revenue-sharing H200 mechanism reduces binary export control risk; CHIPS Act domestic buildout on track; Intel fab delays create near-term AMD/TSMC beneficiary dynamic."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "SMEE delivered its first 28nm immersion DUV machine to SMIC for testing in early 2025; spin-off AMIES continues development. China EUV lab in Shenzhen is operational but not producing chips — 2028 chip output target remains aspirational. No credible 14nm-class volume announcement from SMEE. SMIC using multi-patterning with existing ASML DUV to reach 7nm equivalence but not through domestic lithography.",
        implication: "ASML's moat is intact for at least 2-3 more years at EUV — domestic Chinese EUV is 2028+ at the earliest; SMEE at 28nm means China cannot domestically produce leading-edge chips; ASML geopolitical premium justified and defensible."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "AMBER",
        finding: "Micron has overtaken Samsung in HBM share: SK Hynix 62%, Micron 21%, Samsung 17%. Micron is achieving meaningful NVIDIA allocation at ~21% share. Samsung's yield problems and construction issues are accelerating this rotation. UBS projects SK Hynix at ~70% of NVIDIA's HBM4 Rubin platform allocation. HBM capacity sold out through 2026 across all suppliers.",
        implication: "SK Hynix remains the dominant play; Micron gaining faster than expected — a credible third competitor compresses overall HBM pricing power in 2027-28; Samsung must recover HBM4 yield to defend its position; near-term benefit to Micron shareholders, longer-term pricing pressure on the sector."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Custom ASIC server shipments growing at 44.6% CAGR to 27.8% of all AI servers in 2026; AWS custom silicon crossed $20B annualized run rate. Microsoft plans to move OpenAI inference to Maia but continues deploying NVIDIA GPUs for training. Google TPU v7 Ironwood leads on inference maturity. No hyperscaler has announced >10% shift of training workloads to custom silicon — the key threshold for AMBER to RED.",
        implication: "Training remains NVIDIA-dominated — CUDA software moat is 10+ years deep and migration requires non-trivial code changes; inference is being rapidly commoditized by custom silicon; NVIDIA's long-term TAM compression is real but 2-3 years away from being financially material; current AMBER reflects accelerating trajectory toward that threshold."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS remains the only credible option at volume: targeting 130,000 wafers/month. Samsung I-Cube and X-Cube offer alternatives with 26-39 week lead times and lower throughput. ASE's advanced packaging sales expected to double in 2026 but as an overflow partner to TSMC, not a direct competitor. Amkor handling 180,000-190,000 wafers/year from TSMC outsourcing. No credible alternative at comparable volume and yield to TSMC CoWoS confirmed.",
        implication: "TSMC packaging monopoly intact for 2026; outsourcing to Amkor/ASE relieves GPU supply constraints while preserving TSMC's design leadership; positive for NVIDIA H100/H200/B200 supply availability; Samsung/Amkor upside is as TSMC overflow partners, not disruptors."
      }
    ]
  }

};
