const BRIEF = {

  meta: {
    date: "Thursday, June 11, 2026",
    eurusd: "1.1543",
    eurusd_direction: "falling",
    eurusd_weekly_change: "-0.8%",
    eurusd_driver: "EUR/USD fell from 1.1642 on June 5 to a two-month low of 1.1508 on June 8, pressured by rising Middle East tensions pushing oil prices higher and lifting USD safe-haven demand, before a modest rebound to 1.1543 as Israel-Iran tensions eased slightly; the ECB's anticipated 25bp rate hike today (to 2.25%) provides a partial offset.",
    eurusd_outlook: "The ECB hike should support EUR near current levels, but if Mideast tensions re-escalate and oil pushes above $100, the USD safe-haven bid could push EUR/USD toward 1.14; USD-denominated positions benefit modestly from current USD strength."
  },

  vitals: {
    fear_greed: {
      value: 29,
      last_week: 42,
      label: "Fear",
      interpretation: "The index dropped sharply from 42 (neutral) last week to 29 (fear) this week, driven by the Broadcom guidance disappointment triggering a 15% chip sell-off and Nasdaq losing 4%, plus Alphabet's $80B equity raise unsettling markets. A reading of 29 indicates investors are cutting risk, not adding it. Historically this zone precedes short-term bounces when the macro catalyst clears — watch the ECB outcome today."
    },
    vix: {
      value: 22.2,
      last_week: 18.9,
      label: "Elevated",
      interpretation: "VIX jumped from 18.9 to 22.2 — a 17% spike — as the chip sector sell-off and Alphabet capital raise spooked markets mid-week. This is above the comfort zone (15-20) but well below panic territory (>30). The move reflects event-driven anxiety (ECB hike + Mideast) rather than systemic fear. Options markets are pricing near-term uncertainty, not a regime break."
    },
    put_call: {
      value: 0.62,
      last_week: 0.68,
      label: "Bullish tilt",
      interpretation: "At 0.62, the equity put/call ratio signals that options traders are still buying calls over puts despite the elevated VIX — a divergence worth noting. This could mean the dip is being bought selectively, particularly in AI names that pulled back hard. A ratio below 0.65 is historically consistent with near-term market support."
    }
  },

  regime: {
    title: "AI Supercycle vs. Valuation Reality Check",
    description: "The dominant narrative this week is a collision between the undeniable scale of AI capex commitments (hyperscalers now tracking $725B in 2026 CapEx) and growing investor concern that current valuations already embed years of future growth. Broadcom's earnings — strong on paper, weak on guidance optics — crystallised the market's edginess. The ECB hike today adds macro tightening pressure to an already nervous tape. Theses 01 (AI infrastructure), 02 (EU defence), and 05 (shipping) remain structurally intact; Theses 03 (dollar softening) and 06 (retail cash rotation) face near-term headwinds as USD strengthens on safe-haven demand.",
    tailwinds: [
      "Hyperscaler CapEx commitments at $725B — NVIDIA backlog structurally supported",
      "GLP-1 pill adoption accelerating (Wegovy 3M+ prescriptions in 5 months)",
      "EU rearmament budget flows intact — order backlogs at record EUR73B+ for Rheinmetall"
    ],
    headwinds: [
      "VIX spike + Fear & Greed drop: risk appetite deteriorating near-term",
      "Alphabet $85B equity dilution raising capex-to-revenue gap concerns",
      "Middle East oil shock risk keeping USD bid and compressing EUR/USD"
    ]
  },

  league: {
    winners: [
      { rank: 1, name: "Marvell Technology (MRVL)", sector: "Semiconductors", change: "+32.5%", reason: "Jensen Huang at Computex called Marvell 'the next trillion-dollar company' — networking chips essential for AI data center interconnect; biggest single-day gain in company history." },
      { rank: 2, name: "CrowdStrike (CRWD)", sector: "Cybersecurity", change: "+8.9%", reason: "Pre-earnings price target upgrades ahead of June 3 results; ARR hit record $5.5B (+24% YoY) and 4-for-1 stock split announced effective July 2." },
      { rank: 3, name: "Palantir (PLTR)", sector: "AI Software", change: "+5.2%", reason: "New AI partnerships with Google Cloud and Kirkland & Ellis announced at AIPCon; Q1 revenue +85% YoY; stock bounced from 52-week low support." },
      { rank: 4, name: "Vistra (VST)", sector: "Nuclear Power / Energy", change: "+4.8%", reason: "Hyperscaler PPA pipeline growing; Q1 EBITDA +20% YoY; nuclear power scarcity premium as AI data center demand for always-on power intensifies." },
      { rank: 5, name: "Constellation Energy (CEG)", sector: "Nuclear Power / Energy", change: "+4.2%", reason: "Post-Calpine acquisition integration on track; quarterly dividend declared; positioned as largest private US power producer serving AI infrastructure." },
      { rank: 6, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "+2.9%", reason: "Wegovy pill surpasses 3M prescriptions in 5 months; EMA positive opinion for EU approval; ADA 2026 new data presented — oral GLP-1 expansion story intact." },
      { rank: 7, name: "Walmart (WMT)", sector: "Consumer Staples / Retail", change: "+2.1%", reason: "Defensive rotation into consumer staples as tech volatility rises; value-seeking consumers driving foot traffic; AI logistics improvements supporting margins." },
      { rank: 8, name: "Progressive Insurance (PGR)", sector: "Financials / Insurance", change: "+1.8%", reason: "Defensive rotation; strong underwriting discipline and loss ratio improvement; outperforming peers in rising-rate environment." },
      { rank: 9, name: "TSMC (TSM)", sector: "Semiconductors / Foundry", change: "+1.5%", reason: "June revenue filing confirmed >30% YoY growth trajectory; CoWoS capacity expansion to 125K wpm by end-2026; CEO confirmed demand outpacing supply for years." },
      { rank: 10, name: "ServiceNow (NOW)", sector: "Enterprise SaaS", change: "+1.3%", reason: "Enterprise AI momentum; strong RPO [remaining performance obligations — signed contracts not yet billed] growth; institutional rotation into profitable AI software names." },
      { rank: 11, name: "Rheinmetall (RHM)", sector: "EU Defence", change: "+0.9%", reason: "New Bundeswehr laser module contract worth hundreds of millions EUR; order backlog at record EUR73B despite stock consolidation." },
      { rank: 12, name: "Berkshire Hathaway (BRK.B)", sector: "Diversified Financials", change: "+0.8%", reason: "$10B strategic stake purchase in Alphabet's equity raise signals Buffett conviction in AI infrastructure thesis; defensive premium rising." },
      { rank: 13, name: "TJX Companies (TJX)", sector: "Consumer Discretionary / Retail", change: "+0.7%", reason: "Off-price retail benefits from consumer trade-down in inflationary environment; FY26 results showed 7% net sales growth." },
      { rank: 14, name: "SK Hynix", sector: "Memory / HBM", change: "+0.6%", reason: "HBM4 supply agreements confirmed; holds ~62% HBM market share; Samsung strike risk reduction removing a key overhang." },
      { rank: 15, name: "Allianz (ALV)", sector: "Insurance / EU Financial", change: "+0.5%", reason: "Rising European rates supportive of insurance investment income; defensive positioning amid market uncertainty." },
      { rank: 16, name: "AXA", sector: "Insurance / EU Financial", change: "+0.4%", reason: "Similar to Allianz — rising ECB rates improve investment returns; reinsurance pricing remains firm." },
      { rank: 17, name: "Hannover Re", sector: "Reinsurance", change: "+0.3%", reason: "Hard reinsurance market continues; Mideast conflict raises catastrophe reserves but also pricing power." },
      { rank: 18, name: "Muenchener Rueck (MUV2)", sector: "Reinsurance", change: "+0.3%", reason: "Premium pricing power in elevated-risk environment; dividend yield supporting institutional demand." },
      { rank: 19, name: "Interactive Brokers (IBKR)", sector: "Brokerage", change: "+0.2%", reason: "Higher volatility and rates boost commission and net interest income; retail investor activity elevated." },
      { rank: 20, name: "Gold Fields (GFI)", sector: "Gold Mining", change: "+0.2%", reason: "Gold price supported by Mideast tensions; mining operations benefiting from hedging program; EUR weakness vs USD not fully offset." }
    ],
    losers: [
      { rank: 1, name: "Broadcom (AVGO)", sector: "Semiconductors", change: "-14.0%", reason: "Q3 AI revenue guidance of $16B fell short of the most aggressive $17.2B+ estimates; did not raise full-year AI chip forecast — 'sell the news' reaction despite 48% YoY revenue growth." },
      { rank: 2, name: "AMD (AMD)", sector: "Semiconductors", change: "-9.2%", reason: "Broadcom-driven semiconductor sector contagion; broader chip sell-off on Nasdaq -4% session; despite record server CPU share gains." },
      { rank: 3, name: "Micron Technology (MU)", sector: "Memory", change: "-9.1%", reason: "Dragged down by Broadcom sell-off; DRAM spot market lag versus contract prices creating uncertainty; over-owned in momentum portfolios." },
      { rank: 4, name: "Qualcomm (QCOM)", sector: "Semiconductors / Mobile", change: "-9.0%", reason: "Sector contagion; no specific fundamental catalyst — pure beta [sensitivity] to the AI chip narrative swing." },
      { rank: 5, name: "Nvidia (NVDA)", sector: "Semiconductors / AI", change: "-6.0%", reason: "Below $5T market cap following Broadcom disappointment; despite record Q1 FY27 revenue of $81.6B (+85% YoY); market pricing in a deceleration narrative." },
      { rank: 6, name: "Alphabet / Google (GOOGL)", sector: "Mega-cap Tech", change: "-3.9%", reason: "$85B equity raise alarmed shareholders over equity dilution; CapEx-to-revenue gap concerns as AI spending accelerates to $180-190B in 2026." },
      { rank: 7, name: "MercadoLibre (MELI)", sector: "EM E-commerce / LatAm", change: "-14.0%", reason: "Q1 EPS of $8.23 missed estimates badly (prior year $9.74); net income down 16% YoY despite 49% revenue growth — costs scaling faster than revenue in key markets." },
      { rank: 8, name: "Booking Holdings (BKNG)", sector: "Travel / Consumer", change: "-6.0%", reason: "Full-year revenue guidance cut; Middle East conflict weighing on premium booking segment through at least June; stock down 27% YTD." },
      { rank: 9, name: "UnitedHealth (UNH)", sector: "Healthcare / Insurance", change: "-5.0%", reason: "DOJ investigation ongoing; 2026 guidance for first-ever revenue decline; dropped 3M+ Medicare members; stock ~55% off all-time high." },
      { rank: 10, name: "Shopify (SHOP)", sector: "E-commerce / SaaS", change: "-4.0%", reason: "Stock down 30% YTD despite 34% Q1 revenue growth; $3B buyback announced June 2 providing partial support but investor concern over margin trajectory." },
      { rank: 11, name: "Tesla (TSLA)", sector: "EV / Consumer Tech", change: "-3.8%", reason: "SpaceX IPO sucking retail attention away from TSLA; FSD expansion in Belgium limited positive; bearish retail sentiment amid macro pressure." },
      { rank: 12, name: "Microsoft (MSFT)", sector: "Mega-cap Tech", change: "-3.2%", reason: "AI monetization timeline concerns; $190B capex for 2026 weighing on free cash flow; stock near $401, well below 52-week high of $551." },
      { rank: 13, name: "Meta Platforms (META)", sector: "Social Media / AI", change: "-2.8%", reason: "Sector rotation away from high-capex tech; 2026 capex raised to $115-135B adding investor concern about ROI [return on investment] timing." },
      { rank: 14, name: "LVMH", sector: "Luxury / Consumer", change: "-2.5%", reason: "Middle East conflict impacting high-end tourism; China luxury demand recovery slower than expected; EUR/USD move reducing USD-reported margins." },
      { rank: 15, name: "Amazon (AMZN)", sector: "E-commerce / Cloud", change: "-2.3%", reason: "Free cash flow collapsed from $26B Q1 2025 to $1.2B Q1 2026 as CapEx surges; near-term FCF [free cash flow] concerns outweigh long-term AI narrative." },
      { rank: 16, name: "Novo Nordisk (NVO) — prior week", sector: "Healthcare", change: "-1.2%", reason: "Stock at $42 vs 52-week high of $81.44 — still in longer-term downtrend despite strong Wegovy data; competitive pressure from Eli Lilly oral GLP-1 coming." },
      { rank: 17, name: "Alibaba (BABA)", sector: "China Tech / E-commerce", change: "-1.8%", reason: "US-China tensions remain elevated; export control uncertainty; domestic consumption recovery in China slower than forecast." },
      { rank: 18, name: "Zscaler (ZS)", sector: "Cybersecurity / Cloud", change: "-1.5%", reason: "Profit-taking after strong YTD run; sector rotation pressure from elevated VIX environment." },
      { rank: 19, name: "Airbnb (ABNB)", sector: "Travel / Sharing Economy", change: "-1.3%", reason: "Broader travel sector under pressure from Mideast conflict; Booking Holdings guidance cut casting shadow on sector." },
      { rank: 20, name: "Spotify (SPOT)", sector: "Consumer / Streaming", change: "-1.0%", reason: "Risk-off sentiment affecting high-multiple consumer tech; no specific fundamental catalyst." }
    ]
  },

  sectors: [
    { name: "US Technology / IT", change: "-2.3%", direction: "down", driver: "Broadcom guidance miss and Nasdaq -4% session dragged semis and software lower; Alphabet equity raise added dilution concerns." },
    { name: "US Healthcare", change: "-1.1%", direction: "down", driver: "UnitedHealth DOJ investigation weighing on managed care sector; Novo Nordisk GLP-1 data positive but stock trapped in longer downtrend." },
    { name: "US Financials", change: "+0.9%", direction: "up", driver: "ECB rate hike expectations and Fed hold supporting net interest margins; insurance defensives attracting rotation." },
    { name: "US Industrials", change: "+0.4%", direction: "up", driver: "AI data center infrastructure build-out supporting demand for electrical equipment and construction; modest defensive rotation." },
    { name: "US Energy", change: "+1.2%", direction: "up", driver: "Middle East conflict keeping oil price elevated; nuclear power stocks (Vistra, Constellation) outperforming as AI power demand narrative strengthens." },
    { name: "US Consumer Discretionary", change: "-1.8%", direction: "down", driver: "Travel names hit by Mideast conflict; Tesla underperforming; consumer spending caution." },
    { name: "US Consumer Staples", change: "+0.8%", direction: "up", driver: "Defensive rotation; Walmart holding up; inflation driving trade-down benefiting value retailers." },
    { name: "US Materials", change: "+0.2%", direction: "up", driver: "Marginal benefit from infrastructure spending and mining picks; rare earth concerns mild positive for US domestic processors." },
    { name: "US Real Estate", change: "-0.3%", direction: "down", driver: "Fed holding rates at 3.5-3.75% pressuring REIT [real estate investment trust] valuations; data center REITs outperforming." },
    { name: "US Utilities", change: "+0.6%", direction: "up", driver: "AI power demand narrative + defensive rotation; nuclear and gas peakers getting PPAs [power purchase agreements] from hyperscalers." },
    { name: "US Communication Services", change: "-2.1%", direction: "down", driver: "Alphabet equity dilution driving sector lower; Netflix and Spotify slight underperformers in risk-off tape." },
    { name: "EU Defence", change: "-0.6%", direction: "down", driver: "Consolidation phase after massive 2025 run; Rheinmetall missed Q1 earnings estimates; FCAS fighter jet program collapse creates uncertainty." },
    { name: "EU Banks", change: "+0.7%", direction: "up", driver: "ECB rate hike to 2.25% boosts net interest income [the spread between what banks earn on loans vs. pay on deposits] expectations; Santander, BNP benefiting." },
    { name: "EU Industrials", change: "+0.3%", direction: "up", driver: "Data center construction and energy infrastructure spending supporting Siemens and peers." },
    { name: "EU Luxury", change: "-2.5%", direction: "down", driver: "Middle East tourist and spending disruption; China luxury demand recovery still sluggish; EUR/USD headwind." },
    { name: "EU Autos", change: "-1.9%", direction: "down", driver: "EV competition from China; weak consumer confidence; Renesas auto chip demand softening." },
    { name: "EU Insurance", change: "+0.5%", direction: "up", driver: "Rising rates improving investment returns; reinsurance pricing firm; Allianz and AXA defensive bid." }
  ],

  flows: [
    { label: "US Equities", amount: "+$6.7B", direction: "in", pct: 55, note: "Modest inflows continuing despite mid-week volatility; dip buyers active in tech but rotation visible toward defensives." },
    { label: "European Equities", amount: "+$2.1B", direction: "in", pct: 45, note: "ECB hike anticipation attracting flows into EU banks and industrials; defence ETFs cooling." },
    { label: "EM Equities", amount: "+$1.4B", direction: "in", pct: 42, note: "India and broader EM still receiving allocations but Mideast risk weighing on Turkey/GCC flows." },
    { label: "Gold & Commodities", amount: "+$1.4B", direction: "in", pct: 60, note: "Physical gold funds continuing multi-week inflow streak as Mideast safe-haven demand and de-dollarisation narrative persist." },
    { label: "Fixed Income", amount: "+$15.7B", direction: "in", pct: 72, note: "Intermediate bond funds hitting 13-week high inflows; ECB and Fed uncertainty driving duration buying as terminal rate approaches." },
    { label: "Cash / Money Markets", amount: "+$94.8B", direction: "in", pct: 85, note: "US money market funds recording largest inflow since late February; fear-driven cash hoarding and 5%+ MM yields attracting institutional and retail capital." }
  ],

  trends: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      detail: "Hyperscaler CapEx commitments for 2026 have now reached $725B combined (Google $180-190B, Amazon $200B, Microsoft $190B, Meta $115-135B). The physical buildout is now the bottleneck — TSMC CoWoS packaging sold out through 2026, HBM memory demand outstripping supply. Jensen Huang's call that Marvell is the 'next trillion-dollar company' underscores that the value is migrating from pure GPU to the entire AI connectivity stack.",
      status: "CONFIRMED",
      evidence: "Broadcom Q2 AI chip revenue +143% YoY; NVIDIA Q1 FY27 revenue $81.6B (+85%); TSMC CoWoS booked 52-78 weeks out; Alphabet raises $85B in equity to fund AI infra.",
      type: "structural"
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      detail: "EU ReArm Europe plan authorising up to EUR800B by 2030 is structurally intact, with 17 member states activating fiscal escape clauses. However, execution is stumbling: the FCAS fighter jet program collapsed after France and Germany abandoned the EUR100B project. Order backlogs at Rheinmetall (EUR73B) show demand is real but industrial delivery capacity remains constrained. Defence ETFs are consolidating after the 2025 re-rating — normal pause in a structural upcycle.",
      status: "UNCHANGED",
      evidence: "Rheinmetall awarded new Bundeswehr laser module contract; EU defence spend hitting record; FCAS collapse is a setback but bilateral programs continue.",
      type: "structural"
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      detail: "The USD has strengthened this week on Mideast safe-haven demand, partially reversing the longer-term softening trend. However, structural forces remain: USD share of global reserves at a two-decade low, BRICS payment alternatives expanding, China rare earth export controls creating non-dollar commodity pricing. The 10% USD decline over the past year is structural, but near-term geopolitics create counter-cyclical USD rallies.",
      status: "WEAKENED",
      evidence: "EUR/USD fell to 1.1508 mid-week on USD safe-haven bid; dollar index recovering near-term despite longer structural softening.",
      type: "structural"
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      detail: "Wegovy pill surpassed 3 million prescriptions in just 5 months (one filled every 5 seconds). The EMA adopted a positive opinion for EU approval — the first oral GLP-1 recommended for weight management in the EU. The market is expanding: new patients are being brought into treatment rather than converting injection users. Novo Nordisk's stock remains 50%+ below its all-time high — a valuation dislocation worth watching as competitive pressure from Lilly builds.",
      status: "CONFIRMED",
      evidence: "Wegovy pill 3M+ prescriptions; EMA positive opinion June 7; ADA 2026 data presented confirming efficacy; oral GLP-1 market structurally different from injectable.",
      type: "structural"
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      detail: "Container spot rates on the Transpacific surged: Shanghai-LA +31% to $4,565/40ft, Shanghai-NY +20% to $5,505/40ft. Demand driven by shippers pulling forward orders ahead of US tariff changes expected in July AND FIFA World Cup 2026 cargo demand. Panama Canal maintenance adding congestion. Baltic Dry Index remains elevated at ~2,800-3,000 though easing from recent highs. Shipping stocks (INSW, GSL, DAC) are the equity expression.",
      status: "CONFIRMED",
      evidence: "Drewry World Container Index showing +20-31% weekly gains on key Transpacific lanes; Panama Canal congestion building; FIFA World Cup cargo demand additional tailwind.",
      type: "cyclical"
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      detail: "Retail investor equity holdings now represent ~10% of total US market cap ($12T in self-directed accounts) and trading volumes at ~20% of total. However, this week's data shows a reversal: money market fund inflows hit $94.8B — the largest since February — as Fear & Greed dropped to 29. The rotation thesis is real but paused; retail is using the chip sell-off as a reason to accumulate cash, not equities. Next leg needs the tech narrative to restabilise.",
      status: "WEAKENED",
      evidence: "Money market inflows $94.8B (largest since Feb); Fear & Greed at 29; Broadcom-triggered Nasdaq -4% session pushing retail to sidelines temporarily.",
      type: "cyclical"
    }
  ],

  executive: {
    biggest_mover: {
      name: "Marvell Technology (MRVL)",
      change: "+32.5%",
      reason: "Jensen Huang publicly declared Marvell 'the next trillion-dollar company' at Computex 2026 on June 2, sending shares up 32.5% in a single session — the company's biggest one-day gain ever, on the back of Nvidia's $2B investment in Marvell and the broader custom photonic networking chip thesis. This is a direct expression of Thesis 01: the AI value chain is migrating beyond GPUs into the entire connectivity and networking stack, and Marvell is at the centre of that migration."
    },
    key_risk: {
      name: "Alphabet $85B equity dilution + CapEx-to-Revenue gap",
      reason: "Alphabet raised $85B in equity (including a $10B Berkshire Hathaway stake) to fund AI infrastructure spending of $180-190B in 2026 — a dilution event that rattled the market. The deeper risk is structural: if hyperscalers collectively spend $725B on AI infrastructure but cannot show proportional AI-attributable revenue growth, the AI trade is pricing future potential rather than current cash flows — the classic bubble formation. Amazon's free cash flow collapsing from $26B to $1.2B QoQ is an early warning signal."
    },
    conviction_call: {
      name: "Marvell Technology (MRVL) — AI networking infrastructure",
      observation: "MRVL's 32% single-week gain is not a meme rally — it is backed by Nvidia's $2B investment, Jensen Huang's public endorsement, and fundamental demand for custom photonic interconnect chips as AI clusters scale from thousands to millions of connected chips. At $192B market cap vs. a stated $1T target, the risk-reward depends on the AI infrastructure build continuing at current pace (which all evidence supports). For Robert's portfolio: this is the purest expression of Thesis 01 beyond NVIDIA itself — less crowded, more upside runway, more specific thesis fit."
    },
    macro_pulse: {
      name: "ECB rate hike to 2.25% — June 11, 2026",
      observation: "The ECB is hiking 25bp today to 2.25%, its first rate move in a year, driven by eurozone inflation jumping to 3% in April against the 2% target, amplified by the Middle East oil shock. This matters for Robert's EUR-based portfolio: EUR-denominated fixed income becomes more attractive, EU banks (Santander, BNP, Deutsche Bank) benefit from wider net interest margins [the spread between what banks earn on loans vs. pay on deposits], and the EUR should find structural support versus the USD medium-term."
    },
    tags: [
      { label: "EUR/USD: 1.1543 (-0.8%)", type: "red" },
      { label: "Fed: Hold at 3.50-3.75%", type: "amber" },
      { label: "ECB: Hike to 2.25% today", type: "green" },
      { label: "Tariffs: July deadline looming", type: "amber" },
      { label: "AI CapEx: $725B committed", type: "green" },
      { label: "EU Defence: Consolidating", type: "amber" },
      { label: "Semis: MRVL +32%, AVGO -14%", type: "amber" },
      { label: "Shipping: Transpacific +20-31%", type: "green" }
    ]
  },

  macro: {
    us: "The US economy continues to expand at a solid pace with the Fed holding rates at 3.50-3.75%, but the picture is increasingly bifurcated. AI-related CapEx is booming — hyperscalers on track for $725B combined in 2026 — while consumer spending is softening and free cash flow at major tech companies is being consumed by infrastructure investment. Core PCE inflation at 3.0% remains above the 2% target, cementing the Fed's higher-for-longer posture. The Middle East oil shock adds upside inflation risk. The quarter-end rebalance and July tariff deadline are the two near-term market catalysts — if tariffs escalate, expect a rotation further into defensives and away from trade-exposed sectors.",

    europe: "The ECB's hike to 2.25% today marks a turning point — European monetary policy is tightening precisely as the US holds. EU inflation at 3.0%, driven by oil prices above $90, forced the ECB's hand. EU banks (Santander, BNP, Commerzbank) are the near-term beneficiaries. ReArm Europe is tracking toward EUR800B by 2030 with 17 member states activating fiscal escape clauses, but execution risk is rising after the FCAS collapse exposed industrial coordination failures. The Stoxx 600 is performing (+4.8% YTD) while defence names consolidate (-1.2% YTD) after 2025's massive re-rating. EUR/USD finding a floor near 1.14-1.15 as ECB hike provides a structural floor.",

    asia: "China's GDP growth at ~4.5% in 2026 reflects gradual emergence from the deflationary trap — incremental stimulus and property market stabilisation are working, but the recovery is slow. The SMIC/Huawei semiconductor push is gaining capability (Ascend 910C at 20-40% yield, 5nm pilot runs), though TSMC remains generations ahead. Japan faces a potential BOJ rate hike to 1.0% at the June 16 meeting — a move that would unwind JPY carry trades [cheap yen borrowing to fund global asset purchases] and hit tech stocks within hours. Korea's Samsung avoided its planned 18-day strike via a wage deal in late May, removing the biggest near-term HBM supply risk. TSMC's Kumamoto fab ramp continues on schedule.",

    forward: "Key events to watch next week: (1) BOJ rate decision June 16 — a hike to 1.0% would trigger yen carry unwind and global tech sell-off; (2) ECB post-hike communication on the pace of further tightening; (3) US July tariff deadline preparations and any retaliatory Chinese moves; (4) CrowdStrike 4-for-1 split effective July 2 — momentum into that event; (5) Tesla FSD Belgium rollout as third EU country. Earnings season is light until mid-July when tech names resume — Tesla reports July 29. The FOMC's next meeting is late July; until then, macro data (CPI, PCE) drives USD and rate expectations."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$293",
      change: "-6.9%",
      pe: "~29x",
      pe_plain: "paying 29 years of annual earnings per share",
      target: "$310-330",
      theme: "AI device supercycle & Apple Intelligence",
      news: "Apple stock reached an all-time high of $315 on June 2 before pulling back to $293 by June 10 — a 7% decline in under 2 weeks as the broader tech sell-off and rising rate concerns hit high-multiple names. Apple Intelligence features are rolling out on iPhone 16 series but monetisation timeline is uncertain. Services revenue continues to grow but hardware cycle recovery is the key question for H2 2026.",
      earnings: "Late October 2026",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "Stock near all-time high territory despite market pullback — needs AI monetisation evidence or hardware refresh catalyst to justify premium."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$401",
      change: "-3.2%",
      pe: "~26x",
      pe_plain: "paying 26 years of annual earnings per share",
      target: "$430-480",
      theme: "Azure AI growth & Copilot monetisation",
      news: "Microsoft closed at $401, well below its 52-week high of $551, as AI monetisation timeline concerns persist despite the AI business surpassing a $37B annual run rate (up 123% YoY). CFO confirmed $190B capex for 2026 with $25B impact from higher component prices. Maia 200 chip powering OpenAI GPT-5.2 is a potential catalyst for cost structure improvement.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "At 26x forward P/E [you pay 26x annual earnings per share] with 123% YoY AI revenue growth, MSFT is the highest-quality AI compounding story at the most reasonable Mag7 valuation."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$236",
      change: "-2.3%",
      pe: "~38x",
      pe_plain: "paying 38 years of annual earnings per share",
      target: "$230-270",
      theme: "AWS AI monetisation & Trainium custom silicon",
      news: "Amazon trades at $236 as Q1 free cash flow collapse from $26B to $1.2B concerns investors even as AWS grew 28% YoY (fastest in 15 quarters) and AI run rate exceeded $15B. Trainium3 is already being used by frontier labs for training. The $200B 2026 capex is the most aggressive single-company commitment in history — the market wants evidence of proportional returns.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "AWS AI narrative intact but FCF [free cash flow] collapse and 38x PE [price-to-earnings ratio] demands revenue acceleration evidence before adding."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$364",
      change: "-3.9%",
      pe: "~24x",
      pe_plain: "paying 24 years of annual earnings per share",
      target: "$380-420",
      theme: "Search AI defense + Cloud 63% growth + equity dilution",
      news: "Alphabet fell 4% after announcing an $85B equity raise including $10B to Berkshire Hathaway at $348-352/share, to fund $180-190B in 2026 CapEx. Google Cloud grew 63% YoY — the fastest of the three major clouds — and Google now runs virtually all core AI on its own TPUs. The equity dilution concern is near-term; the strategic question is whether a 24x PE adequately reflects a cloud business growing at 63% with a growing AI moat.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Berkshire's $10B investment at current prices is the clearest value signal — 24x PE with 63% cloud growth and a self-funding AI infrastructure thesis."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$571",
      change: "-2.8%",
      pe: "~29x",
      pe_plain: "paying 29 years of annual earnings per share",
      target: "$600-650",
      theme: "AI advertising efficiency & Llama open-source moat",
      news: "Meta closed at $571 as broader tech selling and capex concerns (2026 guidance raised to $115-135B) weigh on sentiment. Meta tapped AWS Trainium chips validating custom silicon economics. Meta AI daily active users growing but monetisation timeline uncertain. Meta continues to deliver the highest ROI [return on investment] AI advertising in the industry.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Advertising ROI leadership and Llama open-source ecosystem create durable moats; 29x PE [price-to-earnings] is reasonable for a business with 20%+ earnings growth."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$200",
      change: "-6.0%",
      pe: "~35x",
      pe_plain: "paying 35 years of annual earnings per share",
      target: "$220-260",
      theme: "AI GPU monopoly + networking expansion (Vera CPU)",
      news: "Nvidia dropped to $200 — below $5T market cap — following the Broadcom sell-off despite record Q1 FY27 revenue of $81.6B (+85% YoY) and record Data Center revenue of $75.2B (+92%). Nvidia unveiled Vera CPU and RTX Spark superchip at Computex, signalling expansion from GPUs into the full AI compute stack. Jensen Huang's endorsement of Marvell reinforces confidence in the AI infrastructure build continuing at pace.",
      earnings: "August 2026 (FY27 Q2)",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "Fundamentals are exceptional but stock needs Broadcom noise to clear and fresh GPU demand data before the next leg — hold current positions, accumulate on further weakness below $190."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$391",
      change: "-3.8%",
      pe: "~80x",
      pe_plain: "paying 80 years of annual earnings per share — priced for transformation not current profits",
      target: "$350-450",
      theme: "FSD expansion & energy storage + Robotaxi narrative",
      news: "Tesla trades at $391, well off its 52-week high of $498 but above its low of $288. Belgium became the third EU country to approve FSD full national rollout — a positive step toward European autonomous driving revenue. The SpaceX IPO is drawing retail attention away from TSLA. Q2 earnings expected July 29 will be the next catalyst.",
      earnings: "July 29, 2026",
      earnings_proximity: "soon",
      verdict: "WATCH",
      verdict_reason: "80x PE [price-to-earnings] demands Robotaxi or energy storage scale-up evidence; FSD EU expansion is necessary but not sufficient to justify current valuation."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI infrastructure entering the physical world",
      status: "CONFIRMED",
      evidence: "Jensen Huang names Marvell the next trillion-dollar AI infrastructure company; Nvidia Q1 FY27 revenue $81.6B +85% YoY; TSMC CoWoS sold out 52-78 weeks; hyperscaler CapEx tracking $725B in 2026.",
      instruments: "NVDA, MRVL, TSMC, Broadcom, AMD, CrowdStrike, Palantir, ServiceNow, Pure Storage",
      highlights: [
        { name: "Marvell Technology (MRVL)", change: "+32.5%", note: "Jensen Huang's 'next trillion-dollar company' endorsement plus Nvidia $2B investment — photonic networking for AI clusters is the new frontier of the thesis." },
        { name: "Nvidia (NVDA)", change: "-6.0%", note: "Despite $81.6B quarterly revenue (+85%), stock fell with chips on Broadcom disappointment — a buying opportunity thesis-holders should note." },
        { name: "TSMC (TSM)", change: "+1.5%", note: "CoWoS packaging sold out through 2026; CEO confirmed demand will outpace supply for years; Kumamoto fab ramp on schedule — the picks-and-shovels play remains intact." },
        { name: "Broadcom (AVGO)", change: "-14.0%", note: "$16B Q3 AI revenue guidance fell short of $17.2B+ bull case — the dip is worth monitoring as Broadcom's custom ASIC [application-specific integrated circuit] business for hyperscalers is structurally growing." }
      ]
    },
    {
      num: "02",
      title: "Europe's strategic autonomy moment",
      status: "UNCHANGED",
      evidence: "FCAS fighter jet collapse is a setback but 17 EU member states activating fiscal escape clauses; Rheinmetall order backlog at record EUR73B; EU defence autonomy achievable at EUR50B/year per German experts.",
      instruments: "Rheinmetall, Safran, Thales, HEICO, Howmet Aerospace, iShares Europe Defence ETF, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall (RHM)", change: "-0.6%", note: "New Bundeswehr laser module contract; EUR73B order backlog; stock consolidating at 28x forward PE [price-to-earnings] after 2025 re-rating — patience required in this phase." },
        { name: "Safran", change: "-0.4%", note: "Engine delivery schedules running close to capacity; FCAS collapse removes a future programme but near-term order books intact." },
        { name: "VanEck Defense ETF", change: "-0.8%", note: "Sector consolidating; 2025's re-rating gains are being digested — this is normal rotation, not thesis breach." }
      ]
    },
    {
      num: "03",
      title: "Dollar hegemony softening",
      status: "WEAKENED",
      evidence: "EUR/USD fell from 1.1642 to 1.1508 on Mideast safe-haven USD demand; DXY [US Dollar Index] recovered near-term despite structural USD decline of 10% over past year.",
      instruments: "USD/EUR FX exposure, gold, iShares Physical Gold, WisdomTree Bitcoin ETP, EM equity ETFs",
      highlights: [
        { name: "iShares Physical Gold", change: "+0.5%", note: "Gold holding up on Mideast safe-haven demand even as USD strengthens — the de-dollarisation bid from central banks provides a floor." },
        { name: "WisdomTree Bitcoin ETP", change: "-12.0%", note: "Bitcoin fell below $60K on Mideast risk-off; crypto remains a high-beta [amplified sensitivity] expression of the thesis — currently acting as risk asset not safe haven." },
        { name: "EUR/USD", change: "-0.8%", note: "ECB hike today provides structural floor near 1.14-1.15; medium-term EUR/USD direction depends on Mideast resolution timeline." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 drugs reshaping healthcare economics",
      status: "CONFIRMED",
      evidence: "Wegovy pill 3M+ prescriptions in 5 months; EMA positive opinion June 7 for EU; ADA 2026 conference data presented; oral GLP-1 expanding market to previously untreated patients.",
      instruments: "Novo Nordisk, Eli Lilly, Veeva Systems, McKesson, HCA Healthcare, GE HealthCare",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "+2.9%", note: "Wegovy pill is a genuine market expansion — new patients entering treatment, not just converting from injections; $42 stock vs $81 52-week high remains a valuation puzzle when fundamentals are this strong." },
        { name: "Veeva Systems (VEEV)", change: "+0.8%", note: "GLP-1 clinical trial data management and regulatory filing volume driving SaaS [Software-as-a-Service] demand in pharma vertical." },
        { name: "GE HealthCare (GEHC)", change: "+0.5%", note: "Imaging demand increasing for obesity and metabolic disease monitoring as GLP-1 patients enter the healthcare system for follow-on diagnostics." }
      ]
    },
    {
      num: "05",
      title: "Trade fragmentation creating shipping opportunities",
      status: "CONFIRMED",
      evidence: "Drewry World Container Index: Shanghai-LA +31%, Shanghai-NY +20% this week; FIFA World Cup 2026 cargo demand; July US tariff deadline bringing forward orders; Panama Canal congestion building.",
      instruments: "International Seaways (INSW), Global Ship Lease (GSL), Danaos (DAC), Tsakos Energy Navigation (TNP), StealthGas",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+2.1%", note: "Container charter rates [daily rental price for one ship] surging +20-31% on key lanes; GSL's fixed-rate contract model insulates from spot volatility but fleet renewal is near-term focus." },
        { name: "Danaos (DAC)", change: "+1.8%", note: "Strong demand fundamentals; Panama Canal congestion adding tonne-miles [distance ships travel x cargo volume] to global supply equations." },
        { name: "International Seaways (INSW)", change: "+1.5%", note: "Tanker rates elevated on Mideast conflict; oil route diversions increasing tonne-miles and supporting rate floors." }
      ]
    },
    {
      num: "06",
      title: "Retail cash rotation to equities building",
      status: "WEAKENED",
      evidence: "Money market inflows $94.8B (largest since February); Fear & Greed at 29; chip sell-off pushing retail to sidelines; but put/call ratio at 0.62 shows options traders still bullish.",
      instruments: "Robinhood, Interactive Brokers, Vanguard S&P 500 ETF, SPDR Russell 2000",
      highlights: [
        { name: "Interactive Brokers (IBKR)", change: "+0.2%", note: "Higher volatility and rates boost commission and net interest income; platform usage elevated even as retail sentiment turns cautious." },
        { name: "Robinhood (HOOD)", change: "-0.8%", note: "Retail sentiment decline translating to lower activity; crypto downturn reducing the crypto-trading revenue line." },
        { name: "SPDR Russell 2000", change: "-1.2%", note: "Small caps [smaller companies] sensitive to rate and consumer confidence; rotation out of small caps into defensive large caps — thesis on hold until macro clarity." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Marvell Technology (MRVL)",
      sector: "AI Networking / Semiconductors",
      headline: "Jensen Huang declares Marvell 'next trillion-dollar company' at Computex 2026; stock surges 32.5%",
      detail: "Nvidia CEO Jensen Huang, at Computex 2026 on June 2, publicly stated that Marvell Technology would be the next trillion-dollar company — triggering a 32.5% single-session gain, the largest in Marvell's history. Nvidia had already invested $2B in Marvell and its photonic networking peers. The discovery: the AI value chain is migrating from pure GPU compute toward networking and connectivity chips — the infrastructure to connect thousands of AI chips at high speed. At current $192B market cap vs. a stated $1T target, this implies 5x upside if the thesis plays out over 3-5 years.",
      tag: "BULL"
    },
    {
      num: "02",
      company: "Alphabet (GOOGL)",
      sector: "Mega-cap Tech / AI Infrastructure",
      headline: "Alphabet raises $85B including $10B Berkshire Hathaway stake — largest single corporate equity raise in US history",
      detail: "Alphabet raised $85B — including an unprecedented $10B private placement to Berkshire Hathaway at $348-352/share. This is surprising on two levels: Buffett has historically avoided tech and big equity raises, and the scale of the dilution alarmed existing shareholders enough to drive the stock -4%. The deeper signal: Alphabet needs external capital to fund the $180-190B CapEx plan for 2026 — even a company earning $70B+ per year cannot self-fund this AI infrastructure ambition. Berkshire's participation is a strong credibility endorsement.",
      tag: "WATCH"
    },
    {
      num: "03",
      company: "Samsung Electronics",
      sector: "Memory / HBM / Korea",
      headline: "Samsung averts 18-day chip factory strike via last-minute wage deal; $20B production disruption risk eliminated",
      detail: "Samsung and its 47,000-worker union reached a tentative wage agreement just one hour before a planned 18-day full production strike on May 21 — a strike that would have cost $667M per day in disruption and potentially tightened HBM [high-bandwidth memory required for AI training] supply for NVIDIA customers within 4-6 weeks. The deal includes bonuses linked to 10.5% of operating profits. The discovery: Korea's labour dynamics are now a direct tail risk [low-probability but high-impact event] for the global AI supply chain.",
      tag: "WATCH"
    },
    {
      num: "04",
      company: "Microsoft / Maia 200",
      sector: "Custom Silicon / AI Infrastructure",
      headline: "Microsoft Maia 200 chip claims performance edge over Amazon and Google; powering GPT-5.2 and Copilot",
      detail: "Microsoft unveiled Maia 200 — its second-generation custom AI chip — claiming the highest performance-per-watt of any first-party silicon from a major cloud provider. The chip is already powering OpenAI's GPT-5.2 models, Microsoft 365 Copilot, and internal Superintelligence team projects. The significance: Microsoft is reducing its NVIDIA dependency for inference [running AI models] workloads, with hyperscalers cumulatively saving 30-50% on infrastructure cost. If Maia 200 proves reliable at scale, Microsoft's AI cost structure improves dramatically.",
      tag: "BULL"
    },
    {
      num: "05",
      company: "UnitedHealth Group (UNH)",
      sector: "Healthcare / Managed Care",
      headline: "UNH stock -55% from peak as DOJ investigation, CEO departure, and first revenue decline in a decade intersect",
      detail: "UnitedHealth now trades ~$280 — 55% below its all-time high — as the company guides for its first-ever revenue decline (2026E: $439B, down 2% YoY), loses 3M+ Medicare members, and faces an ongoing DOJ investigation. CEO Stephen Hemsley returned after Andrew Witty's resignation. The discovery: managed care companies have a structural Medicare pricing problem as CMS [Centers for Medicare & Medicaid Services] cuts reimbursement rates. This is a BEAR signal for the sector but creates a potential value opportunity — UNH has never had a 50%+ drawdown that wasn't ultimately a buying opportunity for patient investors.",
      tag: "BEAR"
    },
    {
      num: "06",
      company: "Huawei / SMIC",
      sector: "China Semiconductors",
      headline: "Huawei reveals LogicFolding chip architecture breakthrough amid US sanctions; SMIC 5nm pilot runs underway",
      detail: "Huawei announced LogicFolding — a new chip architecture that shortens internal wiring and improves performance, deployed in upcoming Kirin chips. Meanwhile, SMIC is running 5nm process pilot production with ~20% yield. Huawei plans to double Ascend AI chip output to 1.6M dies in 2026 for domestic AI training. China is making genuine semiconductor progress even under US export controls, but the gap to TSMC remains enormous — DUV [deep ultraviolet — older generation lithography] workarounds represent impressive engineering but not a structural ASML threat yet.",
      tag: "WATCH"
    },
    {
      num: "07",
      company: "Novo Nordisk (NVO)",
      sector: "Healthcare / GLP-1",
      headline: "Wegovy pill crosses 3M prescriptions in 5 months; EMA positive opinion for EU approval as first oral GLP-1",
      detail: "One Wegovy pill prescription is now filled every 5 seconds in the US. The EMA adopted a positive opinion recommending EU marketing authorisation — making it the first oral GLP-1 receptor agonist recommended for EU approval. The critical insight: the oral format is expanding the market to previously untreated obesity patients, not just converting injection users. At current $42 stock price vs. $81 52-week high, the market is pricing Eli Lilly competition and pipeline risk — but the commercial momentum of Wegovy pill is stronger than any bear thesis can absorb.",
      tag: "BULL"
    },
    {
      num: "08",
      company: "Container shipping sector",
      sector: "Shipping / Trade Fragmentation",
      headline: "Transpacific container rates spike 20-31% in a single week driven by FIFA World Cup + pre-tariff cargo surge",
      detail: "The Drewry World Container Index showed Shanghai-Los Angeles rates up 31% to $4,565 per 40ft container and Shanghai-New York up 20% to $5,505 in a single week — driven by the unusual combination of FIFA World Cup 2026 merchandise shipments, US importers pulling forward orders before July tariff escalation, and Panama Canal maintenance congestion. Charter rates [daily ship rental price] for US Gulf routes near record $185,000/day. This is a near-term squeeze play for shipping names (GSL, DAC, INSW) — Thesis 05 has a catalytic near-term setup not seen since 2022.",
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
        finding: "All four hyperscalers at or above stated commitments: Amazon $200B, Microsoft $190B, Google $180-190B, Meta $115-135B — all raised guidance in Q1 2026 earnings. No hedging language detected; capex is being accelerated, not deferred.",
        implication: "AI infrastructure demand is structurally confirmed through 2026-2027 capex cycle — NVIDIA, TSMC, MRVL supply chain remains bid."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "TrendForce reports 2Q26 conventional DRAM contract prices rising 58-63% QoQ; HBM3E pricing stabilising at elevated levels; server DDR5 profitability now approaching HBM levels — unprecedented historically. Supplier inventories remain low.",
        implication: "Memory pricing confirms AI server demand is real and accelerating — SK Hynix, Samsung memory earnings revisions positive for next 2 quarters."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Amazon's free cash flow collapsed from $26B to $1.2B QoQ as CapEx surges; Alphabet raised $85B in equity to fund CapEx suggesting internally-generated cash is insufficient; Microsoft AI run rate $37B ARR [annual contracted subscription revenue] vs. $190B CapEx represents a 5:1 spending-to-revenue gap.",
        implication: "The gap is widening — not crisis level but bears watching; if AI-attributable cloud revenue doesn't accelerate materially in Q2 earnings, multiple compression [PE ratio falling] risk rises."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "GREEN",
        finding: "Mag7 earnings growth estimated at +30% for 2026 vs +20% for the other 493 S&P 500 companies; tech EPS [earnings per share] revisions positive and driven by actual results. S&P blended net profit margin hit record 14.8%. Q1 2026 beat rate 85% — highest since Q2 2021.",
        implication: "P/E expansion is fundamentals-driven not sentiment-driven — the AI trade has earnings backing, reducing bubble risk for now."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "Huawei announced LogicFolding architecture and plans to double Ascend AI chip output to 1.6M dies; SMIC running 5nm pilot with ~20% yield; China using DUV multi-patterning to achieve near-frontier AI chip production. The gap to TSMC remains large but is measurably narrowing.",
        implication: "Not an immediate threat to ASML/NVIDIA moats but 12-18 month horizon requires monitoring; any credible 5nm volume announcement is a RED event for geopolitical chip premiums."
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
        finding: "Samsung averted 18-day strike via wage deal (May 21); Q1 operating profit 57.2T won (+7.5x YoY); SK Hynix holds ~62% HBM market share and secured 70% of NVIDIA HBM4 orders; Micron taking incremental share but SK Hynix dominant.",
        implication: "Near-term HBM supply risk resolved; SK Hynix is the cleaner expression of the HBM thesis than Samsung given share leadership and no labour overhang."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "AMBER",
        finding: "BOJ mulling June 16 hike to 1.0% — officials signalling higher probability after inflation persistence. TSMC Kumamoto ramp on schedule. Tokyo Electron orders solid. The BOJ decision is the single highest-impact near-term macro event for global tech stocks.",
        implication: "If BOJ hikes June 16, expect JPY carry unwind within hours — global tech exposure should be sized conservatively into that meeting; post-hike, the JPY stabilises and concern fades within 1-2 weeks."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS capacity expanding to 125K wpm by end-2026 but already fully booked 52-78 weeks out; China suspended rare earth export controls until November 2026 at APEC — the reprieve is temporary. Huawei/SMIC making measurable chip progress.",
        implication: "CoWoS bottleneck structurally limits AI GPU supply through 2026 — supports NVIDIA pricing power; rare earth suspension expiry November 2026 is a hard calendar risk event."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "January 2026: BIS changed review policy to case-by-case for Nvidia H200 exports to China with 25% revenue-sharing mechanism — an unprecedented construct under legal challenge. AI OVERWATCH Act passed committee, would ban Blackwell chips to entities of concern. CHIPS Act disbursements ongoing.",
        implication: "Policy environment more complex than binary controls — the 25% revenue-sharing mechanism creates a new precedent; any expansion of the Blackwell chip ban list would be an immediate AMBER/RED event for NVIDIA earnings."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "SMEE's working DUV prototype resembles ASML's 2008-era Twinscan NXT:1950i at ~32nm class; Chinese fabs upgrading old ASML DUV machines via subsystem modifications. No credible 14nm-class domestic Chinese alternative in volume. ASML shipped 16 EUV systems in Q1 2026.",
        implication: "ASML's moat remains structurally intact for 2-3 years at minimum; current share price incorporates geopolitical premium that is justified at current Chinese capability levels."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix holds ~62% HBM market share; secured 70% of NVIDIA HBM4 orders. Micron overtook Samsung on some NVIDIA allocations, taking ~10-15% share. Samsung strike averted but internal tensions cited — yield discipline remains the key risk. HBM3E dominates (~65%) of 2026 shipments.",
        implication: "SK Hynix is the dominant expression; Micron is the rising challenger (rotation target if Samsung loses share); Samsung yield and labour reliability is the wildcard."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Microsoft Maia 200 powering GPT-5.2 and Copilot; AWS Trainium3 used by frontier labs for training (saving 30-50% vs GPU instances); Google TPU Trillium with 100,000+ chip deployments. Meta tapped AWS Trainium. Hyperscalers shifting 10-15% of training workloads to custom silicon.",
        implication: "Custom silicon is winning specific inference and some training workloads — not yet a structural NVIDIA threat but compresses the TAM growth rate embedded in 35x PE [price-to-earnings]; worth monitoring every quarter."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS remains the only credible option at volume for Blackwell and MI355 class GPUs; lead times 52-78 weeks; NVIDIA holds 60%+ of capacity. Intel's EMIB and Foveros being evaluated as alternatives but not at comparable volume or yield. Capacity expanding to 125K wpm by end-2026.",
        implication: "TSMC CoWoS moat intact through 2026; capacity expansion will partially relieve bottleneck in 2027 — watch whether Samsung or Amkor achieve volume parity, which would compress TSMC's packaging premium."
      }
    ]
  }

};
