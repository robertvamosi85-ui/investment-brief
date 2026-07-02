const BRIEF = {

  meta: {
    date: "Thursday, July 3, 2026",
    eurusd: "1.1407",
    eurusd_direction: "falling",
    eurusd_driver: "EUR/USD slipped to 1.1407, down 0.44% on the week, as a weak US June jobs report (57K payrolls vs 115K expected) briefly supported the euro, but the dominant driver remains the hawkish Fed — new chair Kevin Warsh held rates at 3.50–3.75% on June 17 and stripped forward guidance, keeping the dollar bid while the EU-US trade deal (effective July 1) removed a key risk premium from the euro but failed to reverse its recent drift.",
    eurusd_outlook: "Expect EUR/USD to trade in the 1.1320–1.1490 range next week; if the weak jobs data brings September Fed cut expectations back above 50%, the dollar softens and EUR-based investors in USD positions benefit from FX tailwind, but a one-month payroll miss does not reverse the Fed's structural hawkishness.",
    eurusd_weekly_change: "-0.44%"
  },

  vitals: {
    fear_greed: { value: 32, last_week: 38, label: "Fear", interpretation: "The CNN Fear & Greed Index dropped from 38 last week to 32 this week, firmly in fear territory, as Broadcom's earnings-night selloff (-12%) and a broad memory stock pullback rattled the AI trade. The 32 reading suggests institutional caution is elevated — the market is asking whether AI spending will generate returns — but is not yet at capitulation levels (below 20). Historically, fear readings below 30 have been contrarian entry opportunities when macro data supports earnings." },
    vix: { value: 16.59, last_week: 16.41, label: "Calm", interpretation: "VIX barely moved from 16.41 to 16.59, remaining in the historically calm zone. This matters: despite the Fear & Greed dip and Broadcom's post-earnings selloff, the options market is not pricing a macro crisis — just a sector rotation. A VIX below 18 means institutional investors are not panic-hedging; the Broadcom move is being absorbed as an earnings event, not a macro shock. Watch for VIX acceleration above 20 if next week's tech earnings guidance misses compound." },
    put_call: { value: 0.67, last_week: 0.62, label: "Bullish tilt", interpretation: "The CBOE equity put/call ratio ticked up slightly from 0.62 to 0.67, remaining in bullish territory. The ratio well below 1.0 means more call options [bets that prices will rise] than put options [bets that prices will fall] are being bought. The mild weekly increase reflects modest hedging after Broadcom's guidance miss, but the overall stance remains constructive. A ratio spike above 0.85 would signal genuine fear; 0.67 is a cautious optimism reading." }
  },

  regime: {
    title: "Trade Relief Meets Labor Cracks",
    description: "The dominant narrative for the week of July 3, 2026: the EU-US trade deal (effective July 1, 15% tariff cap) removed a major geopolitical overhang, but the June jobs miss (57K payrolls vs 115K expected) immediately reopened the rate-cut debate. Markets are navigating three simultaneous signals — trade relief positive for European and global equities, AI spending scrutiny intensifying after Broadcom's Q3 guidance miss, and a labor market softening that brings the Fed pivot back onto the agenda. Thesis 02 (Europe's autonomy) and Thesis 06 (retail cash rotation) benefit most; Thesis 01 (AI infra) faces near-term multiple pressure from the Broadcom miss.",
    tailwinds: ["EU-US trade deal effective July 1 removes tariff cliff for European exporters", "Weak June jobs (57K) brings Fed cuts back on the Q3 agenda", "Retail investor cash deployment at historic pace — record single-day retail net buying in June"],
    headwinds: ["Broadcom Q3 AI guidance miss ($16B vs $17.2B expected) seeds doubt on AI revenue ramp", "Memory stocks pulling back after Micron blowout — sell-the-news dynamic", "EUR/USD drift creating FX headwind for EUR-based holders of US tech positions"]
  },

  league: {
    winners: [
      { rank: 1, name: "Tesla (TSLA)", sector: "EV / Consumer Tech", change: "+8.5%", reason: "Tesla surged on July 1 as EV delivery optimism, autonomous driving progress, and relief from Musk political distraction drove a sharp short-covering rally; stock recovered toward $421." },
      { rank: 2, name: "Constellation Energy (CEG)", sector: "Nuclear Energy", change: "+4.2%", reason: "AI data center power demand narrative intact; Constellation acquired Calpine this quarter, nearly doubling quarterly revenue to $11.1B; hyperscaler power contract pipeline robust." },
      { rank: 3, name: "Vistra Corp (VST)", sector: "Nuclear Energy", change: "+3.8%", reason: "Long-term nuclear power agreements with AWS and Meta confirmed; clean firm power is the scarcest AI infrastructure input and Vistra is a direct beneficiary of the data center buildout." },
      { rank: 4, name: "Banco Santander (SAN)", sector: "EU Banks", change: "+3.5%", reason: "EU-US trade deal effective July 1 boosted European market sentiment; Spanish banks outperforming as southern European growth holds above northern European peers." },
      { rank: 5, name: "BNP Paribas (BNP.PA)", sector: "EU Banks", change: "+3.0%", reason: "Trade deal relief and elevated interest rate environment supporting NIM [net interest margin — spread between what a bank earns on loans vs pays on deposits]; European financials sector outperformed." },
      { rank: 6, name: "Interactive Brokers (IBKR)", sector: "Financials / Brokerage", change: "+2.8%", reason: "Record retail trading volumes in June driving commission revenue; retail cash rotation into equities structurally supports brokerage revenue as daily volumes ran 65% above 2025 levels." },
      { rank: 7, name: "Allianz SE (ALV.DE)", sector: "EU Insurance", change: "+2.5%", reason: "European insurance benefiting from elevated rate environment; investment income from bond portfolio rebounding; defensive character attracting rotation flows from EU defence volatility." },
      { rank: 8, name: "Berkshire Hathaway (BRK.B)", sector: "Diversified Financials", change: "+2.2%", reason: "Safe-haven defensive positioning attracting flows; Greg Abel's capital allocation discipline increasingly valued as markets question AI spending ROI [return on investment]." },
      { rank: 9, name: "Progressive (PGR)", sector: "Insurance", change: "+2.0%", reason: "Strong auto underwriting margins in elevated rate environment; defensive character outperforming as investors seek non-AI names with durable earnings." },
      { rank: 10, name: "Walmart (WMT)", sector: "Consumer Staples", change: "+1.8%", reason: "Defensive staple benefiting from rotation; AI-enhanced supply chain and in-store advertising segment driving incremental revenue upside above core retail." },
      { rank: 11, name: "Netflix (NFLX)", sector: "Consumer Tech", change: "+1.7%", reason: "Streaming subscription model insulated from semiconductor selloff; advertising tier subscriber growth outpacing base tier; World Cup content pipeline adds summer catalyst." },
      { rank: 12, name: "Robinhood (HOOD)", sector: "Fintech", change: "+1.6%", reason: "Record daily retail net equity buying in June drives commission and payment-for-order-flow revenue; crypto and options volumes also elevated above 2025 averages." },
      { rank: 13, name: "Visa (V)", sector: "Payments", change: "+1.5%", reason: "Payment volumes resilient; EU-US trade deal positive for cross-border transaction volumes; defensive quality growth at reasonable valuation vs. high-multiple tech." },
      { rank: 14, name: "Gold Fields (GFI)", sector: "Gold Mining", change: "+1.4%", reason: "Gold holding near $3,200/oz with Fear & Greed at 32; safe-haven demand tick-up from Broadcom shock; gold mining leverage amplifies spot gold moves." },
      { rank: 15, name: "UnitedHealth (UNH)", sector: "Healthcare", change: "+1.3%", reason: "Healthcare defensive outperformer amid macro uncertainty; near 52-week high on resilient managed care margins and Medicare advantage pricing hold." },
      { rank: 16, name: "Booking Holdings (BKNG)", sector: "Travel", change: "+1.2%", reason: "Peak summer travel season booking visibility strong; AI pricing and search tools driving conversion uplift; outperformed broader consumer discretionary." },
      { rank: 17, name: "Airbnb (ABNB)", sector: "Travel", change: "+1.1%", reason: "Peak summer season with pricing power intact; AI host tools improving utilization; outperformed amid broader consumer discretionary rotation." },
      { rank: 18, name: "Safran SA", sector: "EU Aerospace", change: "+1.0%", reason: "EU aerospace and defence thesis structurally intact; aircraft engine aftermarket services growing with post-COVID air travel recovery; trade deal reduces component tariff risk." },
      { rank: 19, name: "Hannover Re", sector: "EU Reinsurance", change: "+1.0%", reason: "Reinsurance pricing environment elevated after 2025 catastrophe losses; investment income from bond portfolio rebounding; defensive sector rotation beneficiary." },
      { rank: 20, name: "Spotify (SPOT)", sector: "Consumer Tech / Streaming", change: "+0.9%", reason: "Audio streaming subscription model insulated from AI hardware selloff; AI-personalized playlists driving premium tier retention; advertising revenue growing double-digits." }
    ],
    losers: [
      { rank: 1, name: "Broadcom (AVGO)", sector: "Semiconductors / AI Chips", change: "-12.0%", reason: "Q3 AI chip revenue guided at $16B, missing analyst expectations of $17.2B; market interpreted the miss as a demand ceiling signal despite Q2 AI revenue of $10.8B (+143% YoY) beating estimates." },
      { rank: 2, name: "SanDisk (SNDK)", sector: "Memory / Storage", change: "-10.0%", reason: "Profit-taking after +858% YTD run; memory rally cooling after Micron's blowout Q3 (fiscal) created a sell-the-news dynamic across the entire memory and storage complex." },
      { rank: 3, name: "Micron (MU)", sector: "Memory", change: "-8.0%", reason: "Blowout fiscal Q3 2026 revenue of $41.46B (18% beat) and Q4 guide of $50B failed to sustain price; sell-the-news reaction at near-record multiples after 90%+ YTD gains." },
      { rank: 4, name: "Western Digital (WDC)", sector: "Storage", change: "-7.0%", reason: "Memory and storage sector rotation out in sympathy with Micron and SanDisk; YTD gains partially unwound as institutional investors take profits ahead of earnings season." },
      { rank: 5, name: "AMD (AMD)", sector: "Semiconductors", change: "-5.0%", reason: "Semiconductor sector contagion from Broadcom guidance miss; AI GPU revenue scrutiny extends beyond NVIDIA to all chip designers; AMD had run 156% YTD into the week." },
      { rank: 6, name: "Intel (INTC)", sector: "Semiconductors", change: "-4.5%", reason: "Caught in broad semiconductor selloff; 18A-P advanced process node entering risk production but market skeptical on fab recovery timeline; down 7.7% over the past 30 days." },
      { rank: 7, name: "ServiceNow (NOW)", sector: "Enterprise Software / SaaS", change: "-4.0%", reason: "SaaS [software-as-a-service] names facing AI disruption fears; AI agents threatening enterprise workflow automation revenue base in a trend dubbed the SaaSpocalypse." },
      { rank: 8, name: "Nvidia (NVDA)", sector: "Semiconductors", change: "-3.5%", reason: "Broadcom's AI chip guidance miss raises questions about near-term AI hardware demand ceiling; NVDA already down 13% over 30 days from $232 peak; P/E [price-to-earnings] compressing on AI skepticism." },
      { rank: 9, name: "Palantir (PLTR)", sector: "AI / Data Analytics", change: "-3.5%", reason: "AI software names under pressure from Broadcom's AI demand guidance miss; European public sector contract concerns persist; down from $117 post-Q1 highs on AI spending scrutiny." },
      { rank: 10, name: "Zscaler (ZS)", sector: "Cybersecurity / Cloud", change: "-3.0%", reason: "High-multiple SaaS cybersecurity name facing valuation compression; AI-native security alternatives threatening legacy cloud security revenue model." },
      { rank: 11, name: "CrowdStrike (CRWD)", sector: "Cybersecurity", change: "-3.0%", reason: "Despite strong fundamentals and 46% YTD gains, cybersecurity names rotating out as AI ROI scrutiny extends to software spending; profit-taking near YTD highs." },
      { rank: 12, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "-2.5%", reason: "Eli Lilly's oral GLP-1 Foundayo gaining market share; Goldman projects Lilly 60% share of oral GLP-1 [glucagon-like peptide-1 obesity drug] market by 2030 vs Novo 21%; competitive pressure accelerating." },
      { rank: 13, name: "International Seaways (INSW)", sector: "Shipping / Tankers", change: "-2.5%", reason: "Crude tanker group down 16% YTD as tanker rates softened from Q1 peaks; near-term rate visibility uncertain as OPEC+ supply decisions cloud voyage economics." },
      { rank: 14, name: "LVMH", sector: "Luxury Goods", change: "-2.0%", reason: "China luxury consumption recovery stalling; EUR vs Asian currency headwinds compressing export margins; high-end consumer confidence softening in key Asian markets." },
      { rank: 15, name: "Global Ship Lease (GSL)", sector: "Shipping / Containers", change: "-2.0%", reason: "Container charter rates [daily rental price for one ship] normalizing from May peaks; off-peak seasonal pattern reducing rate momentum; Baltic Dry Index fell 22% in June." },
      { rank: 16, name: "Starbucks (SBUX)", sector: "Consumer / Food Service", change: "-1.8%", reason: "Turnaround under CEO Brian Niccol still a work in progress; US same-store sales recovery slower than expected; labor cost pressures persist in domestic markets." },
      { rank: 17, name: "DoorDash (DASH)", sector: "Consumer Tech / Delivery", change: "-1.8%", reason: "High-multiple delivery platform facing margin scrutiny; AI automation replacing some back-end logistics functions raises questions about long-term unit economics." },
      { rank: 18, name: "Shopify (SHOP)", sector: "E-Commerce Platform", change: "-1.5%", reason: "AI disruption narrative for e-commerce platforms intensifying; AI agents capable of autonomous purchasing could bypass platform-layer fee structures in 12-24 months." },
      { rank: 19, name: "Chewy (CHWY)", sector: "Consumer / Pet", change: "-1.5%", reason: "Pet industry spending normalizing post-COVID boom; subscription auto-ship revenue growing but at decelerating pace; high multiple vs. growth trajectory." },
      { rank: 20, name: "StealthGas (GASS)", sector: "Shipping / LPG", change: "-1.2%", reason: "LPG shipping rates under seasonal pressure; lower energy commodity volatility reducing charter rate upside; small-cap shipping liquidity thin." }
    ]
  },

  sectors: [
    { name: "US Technology", change: "-1.7%", direction: "down", driver: "Broadcom Q3 AI guidance miss triggered sector-wide selloff; Nasdaq composite declined on week; semi stocks hardest hit as AI revenue ceiling questions spread." },
    { name: "US Healthcare", change: "+0.4%", direction: "up", driver: "Defensive outperformance as tech sold off; UNH near highs; GLP-1 competition intensifying but overall sector bid from defensive rotation." },
    { name: "US Financials", change: "+2.0%", direction: "up", driver: "Best US sector — weak jobs data brings rate cuts back on agenda, compressing rates and supporting bank NIM [net interest margin] outlook; brokerage names up on retail trading boom." },
    { name: "US Industrials", change: "-2.0%", direction: "down", driver: "Weak jobs data signals softer economic momentum; industrial capex expectations trimmed; broad sector underperformed." },
    { name: "US Energy", change: "-1.0%", direction: "down", driver: "Crude oil softened on weak jobs (demand signal); nuclear and clean power names (Constellation, Vistra) outperformed within energy on AI power theme." },
    { name: "US Consumer Disc", change: "+1.5%", direction: "up", driver: "Tesla +8.5% dominated; travel names strong ahead of peak summer season; rotation into consumer names from semis drove outperformance." },
    { name: "US Consumer Staples", change: "+0.8%", direction: "up", driver: "Defensive rotation; Walmart outperforming; staples benefiting as institutions reduce tech exposure and seek stable earnings." },
    { name: "US Materials", change: "-0.5%", direction: "down", driver: "Industrial metals soft on weak jobs; gold miners flat to modestly positive as gold held near $3,200." },
    { name: "US Real Estate", change: "+1.2%", direction: "up", driver: "Weak jobs data brings rate cut expectations back; lower rates are structurally positive for REITs [real estate investment trusts] and real estate valuations." },
    { name: "US Utilities", change: "+0.7%", direction: "up", driver: "Defensive safe haven plus AI power demand tailwind; nuclear utilities (Vistra, Constellation) outperformed conventional utilities." },
    { name: "US Comm Services", change: "-0.8%", direction: "down", driver: "Meta pulled back slightly from $613 peak; Alphabet quiet ahead of July 22 earnings; AI software names weighing on sector." },
    { name: "EU Defence", change: "+0.5%", direction: "up", driver: "Recovery from last week's Rheinmetall F126 shock; EU-US trade deal removes tariff risk for European defence exporters; Safran, Thales outperformed." },
    { name: "EU Banks", change: "+2.8%", direction: "up", driver: "Best EU sector — EU-US trade deal effective July 1 boosted European confidence; Santander, BNP, Commerzbank all moved higher on trade optimism and clarity." },
    { name: "EU Industrials", change: "+1.2%", direction: "up", driver: "Trade deal relief lifted EU industrials; Siemens, Knorr-Bremse recovering; lower tariff uncertainty supports cross-border supply chains." },
    { name: "EU Luxury", change: "-2.0%", direction: "down", driver: "LVMH and sector weak on China luxury softness; EUR strength vs Asian currencies compressing margins on Asia-sold goods." },
    { name: "EU Autos", change: "+1.5%", direction: "up", driver: "EU-US trade deal positive for German auto exporters (BMW, Mercedes, Volkswagen); 15% tariff cap better than feared scenario." },
    { name: "EU Insurance", change: "+2.2%", direction: "up", driver: "Allianz, Hannover Re, Muenchener Rueck: elevated rates supporting investment income; defensive positioning attracting sector rotation flows from tech and defence." }
  ],

  flows: [
    { label: "US Equities", amount: "+$55.8B", direction: "in", pct: 75, note: "Record-pace retail buying offset modest institutional rebalancing ahead of Q3 earnings season; ETF inflows dominated with equity funds receiving $49.6B week of June 17." },
    { label: "European Equities", amount: "+$8.2B", direction: "in", pct: 52, note: "EU-US trade deal effective July 1 triggered rotation into European equities; EU banks and industrials saw most of the inflows; defence ETF flows mixed." },
    { label: "EM Equities", amount: "+$3.2B", direction: "in", pct: 40, note: "Emerging market funds seeing incremental interest as trade deal reduces global uncertainty; ASEAN and LatAm ex-Argentina attracting selective allocation." },
    { label: "Gold & Commodities", amount: "+$1.8B", direction: "in", pct: 58, note: "Fear & Greed at 32 supported safe-haven gold fund inflows; gold holding near $3,200/oz; physical gold ETF (iShares Physical Gold) saw continuous weekly inflows." },
    { label: "Fixed Income", amount: "+$3.5B", direction: "in", pct: 48, note: "Bond funds attractive with Fed holding 3.50-3.75%; weak jobs data increased probability of September cut, compressing 10Y Treasury yield and increasing bond fund returns." },
    { label: "Cash / Money Markets", amount: "+$87.0B", direction: "in", pct: 82, note: "US money market funds at $9.1 trillion total AUM [assets under management]; despite record retail equity buying, institutional cash reserves remain historically elevated — the rotation overhang." }
  ],

  trends: [
    { num: "01", title: "AI infrastructure entering the physical world", detail: "Broadcom's Q3 AI chip guidance miss ($16B vs $17.2B expected) is being over-read as an AI demand ceiling signal. In reality, the four hyperscalers have committed $690-725B in 2026 capex — the largest concentrated infrastructure cycle in history. TSMC CoWoS [advanced chip packaging — the bottleneck on AI GPU production] capacity is ramping to 140,000 wafers/month by year-end 2026. The issue is not demand — it is the translation of spending into recognized revenue, which lags physical infrastructure by 12-18 months. AI infrastructure is entering the physical world at full speed; the market is just pricing the lag.", status: "CONFIRMED", evidence: "Hyperscalers committed $690-725B AI capex 2026 (+77% from 2025); TSMC CoWoS ramping to 140K wafers/month; Broadcom Q2 AI revenue +143% YoY to $10.8B — the physical infrastructure build is accelerating.", type: "structural" },
    { num: "02", title: "Europe's strategic autonomy moment", detail: "The EU-US trade deal that took effect July 1, 2026, is the definitive marker of Europe's pivot toward pragmatic autonomy. The EU eliminated tariffs on US industrial goods while capping US tariffs on EU exports at 15% — a better outcome than markets had feared. EU defence spending structural uplift continues: Germany's rearmament commitment, the 73B euro Rheinmetall order backlog, and France-UK bilateral defence deepening all point to a multi-year capex cycle. EU bank stocks outperformed sharply this week on the trade deal tailwind.", status: "CONFIRMED", evidence: "EU-US trade deal effective July 1: 15% tariff cap on EU exports; EU eliminates tariffs on US industrial goods; Rheinmetall order backlog at 73B euros as of Q1 2026.", type: "structural" },
    { num: "03", title: "Dollar hegemony softening", detail: "EUR/USD at 1.1407 reflects near-term dollar strength from a hawkish Fed (new chair Warsh, rates 3.50-3.75%, forward guidance stripped) and US inflation above 3%. But the structural de-dollarisation trend continues: the dollar's share of global currency reserves has hit a 30-year low at 58.2%, BRICS nations targeting 50% local-currency trade settlement, and ASEAN building a unified payment system targeting 2027. Today's weak June jobs data (57K payrolls) briefly pressured the dollar — the first real test of the dollar's resilience to labor market softening.", status: "UNCHANGED", evidence: "Dollar at 30-year reserve low (58.2% of global reserves); June jobs at 57K miss; EUR/USD falling 0.44% this week but within 1.13-1.15 range established since April.", type: "structural" },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", detail: "The oral GLP-1 [glucagon-like peptide-1 obesity drug] era is fully underway in 2026. Novo Nordisk's oral semaglutide is achieving 50,000+ weekly prescriptions within weeks of launch. Eli Lilly's Foundayo (orflorglipron) launched April 2026. Goldman Sachs projects Eli Lilly will capture 60% of the oral GLP-1 market segment by 2030 vs Novo at 21% — a competitive dynamic that explains Novo's Q2 stock pressure. The economic reshaping extends beyond pharma: food companies, consumer staples, and cardiac and kidney device makers are all repricing for a world with significantly lower population obesity rates.", status: "CONFIRMED", evidence: "Novo oral semaglutide at 50K+ weekly prescriptions; Eli Lilly Foundayo launched April 2026; Goldman projects $22B oral GLP-1 market by 2030 with Lilly at 60% share.", type: "structural" },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", detail: "The EU-US trade deal (effective July 1) partially reduces trade fragmentation by stabilizing the largest bilateral trade corridor. However, US-China tariffs remain elevated (China at 24% effective rate) and the forced-labour investigation covering 60+ economies remains active. The net shipping effect: longer voyages remain structurally supported; Baltic Dry Index fell 22% in June but rose 2.4% in early July as seasonal demand patterns re-set. Tanker group is down 16% YTD as oil price volatility decreased, but dry bulk and container charter rates remain above pre-2024 levels. The fragmentation trade is structural even as the EU-US corridor normalizes.", status: "MIXED", evidence: "EU-US trade deal effective July 1 reduces key corridor uncertainty; China 24% tariff unchanged; Baltic Dry Index -22% in June but bouncing in July; tanker group -16% YTD.", type: "structural" },
    { num: "06", title: "Retail cash rotation to equities building", detail: "The June retail investor data is extraordinary: June 12 marked the largest single day of retail net equity buying ever recorded, surpassing the prior record by 50%. May and June daily retail equity volumes ran 65% above 2025 levels. Yet total money market fund AUM [assets under management] remains at $9.1 trillion, with retail money market at $3.07 trillion — the rotation has barely begun. As Fed rate cuts come back on the agenda after the weak jobs report, cash yields will decline and the opportunity cost of sitting in money markets increases, accelerating the rotation into equities, particularly small caps and cyclicals.", status: "CONFIRMED", evidence: "June 12 largest single day of retail equity net buying ever; daily retail volumes 65% above 2025 average; money market AUM still at $9.1T with retail at $3.07T.", type: "cyclical" }
  ],

  executive: {
    biggest_mover: { name: "Broadcom (AVGO)", change: "-12%", reason: "Broadcom reported Q2 FY2026 AI semiconductor revenue of $10.8B (+143% YoY) that beat expectations, but Q3 guidance of $16B missed analyst forecasts of $17.2B — a 7% shortfall that the market interpreted as the first crack in AI hardware demand momentum. The stock fell 12% after hours, dragging down AMD, Intel, and Nvidia in a semiconductor sector contagion event that set the tone for the week. Thesis 01 (AI infrastructure) remains CONFIRMED at the capex level, but Broadcom's guidance miss has added two quarters of uncertainty to the revenue-recognition timeline." },
    key_risk: { name: "AI Capex-to-Revenue Gap (Widening)", reason: "Hyperscalers are now committed to $690-725B in 2026 AI infrastructure spending. Q1 cloud revenues — Azure +40%, AWS +28%, Google Cloud +63% — are strong but not scaling at the same pace as capex commitments, creating a widening gap. Forbes flagged in June that AI spending is surging faster than revenue and markets are repricing. If Q2 earnings calls from Microsoft (July 30), Alphabet (July 22), and Amazon (July 30) show AI-attributable revenue growth below the capex commitment pace, multiple compression in AI hardware and software names will accelerate into Q3." },
    conviction_call: { name: "TSMC (TSM)", observation: "TSMC is the toll road of the AI trade — it earns from every competing thesis simultaneously. CoWoS [Chip-on-Wafer-on-Substrate] packaging capacity ramping to 140,000 wafers/month by year-end 2026 makes TSMC the direct beneficiary of hyperscaler AI spending. TSMC Arizona fabs are receiving CHIPS Act support and reducing geopolitical risk concentration. The company confirmed CoWoS is sold out through 2026 and HBM4 [next-generation high-bandwidth memory] supply agreements for 2027 are already being negotiated. In a week where Broadcom's AI chip guidance rattled the sector, TSMC's foundry position means it captures revenue before it even reaches the GPU or ASIC [application-specific integrated circuit] layer." },
    macro_pulse: { name: "US June Jobs Report (July 2, 2026)", observation: "The June payrolls miss — 57,000 jobs added vs 115,000 expected, unemployment at 4.2% — is the most important macro event of the week. Prior months were revised down by a combined 74,000 jobs. The weak data immediately repriced Fed expectations: September cut probability rose, the 10Y Treasury yield fell, and the dollar dipped briefly. For EUR-based investors this is a pivotal signal: if labor market softening persists into July-August data, the Fed pivot trade returns, weakening the dollar and reducing the FX headwind on US equity positions denominated in EUR." },
    tags: [
      { label: "EUR/USD: 1.1407 falling", type: "red" },
      { label: "Fed: hold 3.50-3.75%, Sept cut back on table", type: "amber" },
      { label: "ECB: July 23 meeting, hike possible", type: "amber" },
      { label: "Tariffs: EU-US deal done 15% cap, China 24%", type: "green" },
      { label: "AI capex: $700B+ committed, Broadcom guided below", type: "amber" },
      { label: "EU defence: recovering from Rheinmetall shock", type: "amber" },
      { label: "Semis: TSMC CoWoS to 140K w/m, Broadcom -12%", type: "amber" },
      { label: "Shipping: EU-US deal mixed, Baltic Dry bouncing", type: "amber" }
    ]
  },

  macro: {
    us: "The US economy entered Q3 2026 with a complex macro handoff: the strongest quarterly equity performance since 2020 (S&P 500 +9% for Q2, now at 7,499) met a June jobs report that clearly signals labor market softening. Only 57,000 payrolls were added in June vs 115,000 expected, with prior months revised down 74,000 combined. The unemployment rate fell to 4.2% but only because labor force participation dropped 0.3pp to 61.5% — a 5-year low that masks real weakness. Core PCE [Personal Consumption Expenditures — the Fed's preferred inflation measure] inflation remains above 3%, the Fed is holding at 3.50-3.75% under new hawkish chair Kevin Warsh, but September rate cut probability has re-emerged. Corporate earnings remain exceptional at the AI layer — Micron $41B+ revenue in fiscal Q3, Broadcom AI revenue $10.8B — but guidance is starting to disappoint at the margin, exactly as the capex-to-revenue gap widens. The defining Q3 question: does AI revenue materialize fast enough to justify the $700B infrastructure commitment?",
    europe: "Europe entered Q3 2026 with a meaningful tailwind: the EU-US trade deal took effect July 1, eliminating EU tariffs on US industrial goods and capping US tariffs on EU exports at 15%. European markets responded positively — EU bank stocks (Santander, BNP) outperformed, EU autos gained on tariff clarity, and European industrials recovered from last week's Rheinmetall shock. The ECB hiked rates on June 11 for the first time since 2023 and meets again on July 23 — another hike is possible given elevated Eurozone inflation. EU GDP growth is tracking near 1.5% for 2026, solid but below US nominal growth. The Stoxx Europe Aerospace and Defence index remains structurally supported by the rearmament cycle, with Rheinmetall's 73B euro order backlog representing 5+ years of revenue visibility. The region's key risk: ECB over-tightening into a softening global economy.",
    asia: "Asia in July 2026 is defined by the HBM [high-bandwidth memory] market share battle. SK Hynix holds 62% of HBM, Micron has overtaken Samsung at 21% vs Samsung's 17%, marking a historic market share inflection. Samsung is racing on HBM4 development while SK Hynix is deliberately slowing its HBM4 ramp to protect high-margin DDR5 profits. In China, Huawei's Ascend 910C AI chip is ramping at SMIC using an enhanced 7nm process, targeting 600,000 units in 2026 — but yield rates remain at 20-40%, far below the 90%+ typical for TSMC production, keeping the geopolitical chip premium for ASML and NVIDIA intact. Japan's BOJ held rates steady; any surprise BOJ hike at its July 31 meeting would trigger JPY carry trade [cheap yen borrowed to buy global assets] unwinding and hit tech stocks within hours. TSMC Kumamoto Fab 2 delays persist. EM equities saw modest inflows on trade deal optimism.",
    forward: "Key events to watch next week (July 7-11, 2026): (1) Fed speakers — any commentary on June jobs miss will move rate-cut probability and the dollar significantly; watch for dovish signals under Warsh's communication regime. (2) US inflation data (CPI expected July 10) — if June CPI comes in below consensus, September cut probability surpasses 60% and the dollar weakens toward 1.15. (3) Alphabet Q2 earnings (July 22) — the first major AI hyperscaler earnings report of Q3; watch for AI-attributable revenue commentary and CapEx confirmation for H2. (4) ECB July 23 meeting — second rate hike since 2023 possible; EUR/USD highly sensitive to ECB-Fed spread. (5) FOMC statement (July 30) — if jobs data weakens further before the meeting, the tilt toward a September cut increases. (6) Mega-cap Q2 earnings cascade: Microsoft July 30, Amazon July 30, Meta expected late July — these will define the AI spending narrative for Q3. (7) BOJ July 31 meeting — any JPY rate hike signal hits Asian carry trades immediately."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$305",
      change: "-0.8%",
      pe: "~36x",
      pe_plain: "paying 36 years of annual earnings",
      target: "$340-385",
      theme: "AI features + iPhone supercycle setup + services growth",
      news: "Apple's Q2 FY2026 delivered revenue of $111.18B vs $109.66B expected with iPhone sales up 22% YoY — a strong quarter. Q3 guidance calls for 14-17% revenue growth with management flagging higher memory costs embedded in June quarter guidance. Fiscal Q3 earnings are due July 30, with EPS consensus at $1.89. Tim Cook's leadership transition expected September 2026 is a watchlist item for governance-sensitive investors.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "Strong operational performance with iPhone supercycle thesis intact, but 36x PE with leadership transition uncertainty limits near-term upside; hold and monitor July 30 report."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$378",
      change: "-1.2%",
      pe: "~30x",
      pe_plain: "paying 30 years of annual earnings",
      target: "$430-480",
      theme: "Azure AI growth + $190B capex commitment + OpenAI leverage",
      news: "Microsoft closed Q2 at $378, with Azure and cloud services generating $54.5B in revenue (+29% YoY) for its most recent quarter. The company has committed $190B in calendar 2026 capex (highest among hyperscalers), with the CFO attributing $25B to rising memory and component costs. The $80B Azure backlog remains partially constrained by power delivery, not GPU availability. Q2 FY2026 earnings due July 30.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "Azure growth structural and OpenAI leverage unique, but 30x PE with widening capex-to-revenue gap and power-constrained deployment creates short-term upside ceiling; watch July 30 guidance."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$244",
      change: "-0.5%",
      pe: "~31x",
      pe_plain: "paying 31 years of annual earnings",
      target: "$270-310",
      theme: "AWS AI dominance + Trainium 2 custom chips + $200B capex",
      news: "Amazon committed the most aggressive AI capex of any hyperscaler — $200B for 2026, more than doubling its 2025 outlay. AWS Q1 2026 revenue hit $37.6B (+28% YoY), with AI workloads now a primary driver of new consumption. AWS Trainium 2 has already deployed more than 1 million processors, primarily for inference workloads. Stock at $244, meaningfully below its May 2026 high of $278.56. Q2 earnings expected July 30-August 3.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "BUY",
      verdict_reason: "AWS AI infrastructure advantage and commerce advertising flywheel provide durable earnings moat; $200B capex at 31x PE is aggressive but justified given AWS growth trajectory."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$354",
      change: "-0.3%",
      pe: "~26x",
      pe_plain: "paying 26 years of annual earnings",
      target: "$425-450",
      theme: "Google Cloud AI leader + Search monetization + 63% Cloud growth",
      news: "Alphabet's Q1 2026 delivered a massive EPS beat ($5.11 vs $2.66 expected) with consolidated revenues up 22% to $109.9B. Google Cloud grew 63% in Q1 — the fastest among hyperscalers. The company committed $175-185B in 2026 capex. Analysts have a Strong Buy consensus with 44 of 54 covering analysts at Strong Buy, with average price target $432.63 (22% upside). Q2 FY2026 earnings are scheduled for July 22 — a major AI capex-to-revenue inflection point.",
      earnings: "July 22, 2026",
      earnings_proximity: "soon",
      verdict: "BUY",
      verdict_reason: "At 26x PE with 63% cloud growth, Alphabet is the best-valued Mag7 member with the strongest near-term earnings catalyst on July 22 — an asymmetric risk/reward before earnings."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$613",
      change: "+0.5%",
      pe: "~20x",
      pe_plain: "paying 20 years of annual earnings",
      target: "$620-700",
      theme: "AI advertising efficiency + $125-145B capex + Llama open-source",
      news: "Meta closed at $612.91 on July 1 after briefly trading at $566 in June, recovering strongly. The company raised full-year 2026 capex to $125-145B from $115-135B. Despite shares falling 9.25% the day after Q1 results on investor concern about the capex ramp speed, the stock recovered as investors digested the AI advertising ROI [return on investment] case. Meta's P/E at 20x is the cheapest in the Mag7 despite its highest revenue-to-capex efficiency. Q2 earnings expected late July.",
      earnings: "Late July 2026",
      earnings_proximity: "soon",
      verdict: "BUY",
      verdict_reason: "Cheapest Mag7 stock at 20x PE with strongest advertising ROI from AI investment; Llama open-source strategy creates ecosystem leverage; high conviction on Q2 beat."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$200",
      change: "-3.5%",
      pe: "~31x",
      pe_plain: "paying 31 years of annual earnings",
      target: "$180-270",
      theme: "GPU monopoly + Blackwell ramp + CoWoS packaging constraint",
      news: "Nvidia closed at $200.09 on June 30, down from ~$232 peak in May — a 13% pullback despite delivering Q1 FY27 revenue of $81.6B (+85% YoY) with Q2 guidance at $91B. The stock is being compressed by two forces: Broadcom's Q3 AI chip guidance miss raising demand ceiling questions, and the fundamental AI capex-to-revenue gap narrative. Nvidia's P/E has contracted from 45x twelve-month average to 31x current — the market is asking the stock to earn its multiple rather than expanding it further.",
      earnings: "Late August 2026",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "Fundamentals remain exceptional (blowout revenues, Blackwell ramp) but valuation compression from 45x to 31x reflects market skepticism on AI demand ceiling — wait for Broadcom-triggered uncertainty to clear before adding."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$421",
      change: "+8.5%",
      pe: "~197x",
      pe_plain: "paying 197 years of annual earnings",
      target: "$385-472",
      theme: "EV recovery + autonomous driving progress + robotaxi catalyst",
      news: "Tesla surged 8.5% on July 1, trading at $421.06, driven by short-covering and EV delivery optimism. Analysts forecast the July 2026 price range at $352-472. Tesla's 197x PE [price-to-earnings] remains a valuation outlier within the Mag7 — the stock is priced for robotaxi and autonomous revenue that does not yet exist in financials. The Musk political distraction remains a headwind for European sales and institutional ownership, but retail investors pushed a massive single-day gain. Q2 deliveries report expected imminently.",
      earnings: "Mid-July 2026",
      earnings_proximity: "imminent",
      verdict: "CAUTION",
      verdict_reason: "197x PE with autonomous driving revenue still years from material contribution; the July rally reflects short squeeze dynamics more than fundamental improvement — maintain caution on size."
    }
  ],

  theses: [
    { num: "01", title: "AI Infrastructure Entering the Physical World", status: "CONFIRMED", evidence: "Hyperscalers committed $690-725B AI capex 2026; TSMC CoWoS ramping to 140K wafers/month; Broadcom Q2 AI revenue +143% YoY to $10.8B — physical infrastructure build is accelerating.", instruments: "NVDA, TSMC, AVGO, INTC, AMD, VanEck SMH ETF, Constellation Energy, Vistra",
      highlights: [
        { name: "Broadcom (AVGO)", change: "-12%", note: "Q2 AI revenue $10.8B (+143%) beat, but Q3 guidance of $16B missed analyst $17.2B expectation, creating the week's defining negative catalyst. Q3 guidance still implies 200%+ YoY AI growth — the miss is relative to elevated expectations, not a reversal of the trend." },
        { name: "TSMC (TSM)", change: "+2%", note: "CoWoS capacity ramping to 140,000 wafers/month by end 2026, up from 35,000 in late 2024. CEO confirmed CoWoS sold out through 2026 and HBM4 2027 supply negotiations already underway — the packaging bottleneck is being systematically removed." },
        { name: "Constellation Energy (CEG)", change: "+4.2%", note: "Calpine acquisition completed this quarter doubles quarterly revenue to $11.1B; nuclear baseload power for AI data centers is the most structurally scarce input in the AI infrastructure complex." },
        { name: "Nvidia (NVDA)", change: "-3.5%", note: "Stock declining from May peaks despite Q1 revenue of $81.6B (+85% YoY) and Q2 guidance of $91B. The market is repricing from multiple expansion to earnings-driven valuation — from 45x to 31x trailing PE. Fundamentals remain elite; market posture is skeptical." }
      ]
    },
    { num: "02", title: "Europe's Strategic Autonomy Moment", status: "CONFIRMED", evidence: "EU-US trade deal effective July 1 (15% tariff cap on EU exports, EU removes tariffs on US industrial goods); Rheinmetall order backlog 73B euros; EU banks and industrials outperforming on trade deal relief.", instruments: "Rheinmetall, Safran, Thales, ASML, Siemens, Commerzbank, BNP, Allianz, iShares MSCI Europe, VanEck Defense ETF",
      highlights: [
        { name: "EU Banks (BNP, Santander)", change: "+3.0%", note: "EU-US trade deal effective July 1 removed the tariff cliff risk for European export-oriented banks. BNP and Santander led EU financials higher as trade clarity improved growth visibility for European corporate clients." },
        { name: "Safran SA", change: "+1.0%", note: "EU aerospace structural beneficiary of rearmament cycle; aircraft engine aftermarket services growing with post-COVID air travel recovery; trade deal reduces tariff risk on US-EU aerospace component trade." },
        { name: "Allianz SE", change: "+2.5%", note: "EU insurance is the quiet winner of the trade deal week — elevated rates support investment income, and defensive positioning attracts rotation from EU defence names that remain volatile post-Rheinmetall." },
        { name: "ASML", change: "-0.5%", note: "ASML's geopolitical moat remains intact — SMEE is stuck at 28nm, with EUV production target of 2030 at earliest. Chinese DUV alternatives represent a 2027+ risk, not a current threat to ASML's pricing power." }
      ]
    },
    { num: "03", title: "Dollar Hegemony Softening", status: "UNCHANGED", evidence: "EUR/USD at 1.1407 (-0.44% weekly); June jobs miss (57K) brought dollar lower briefly; dollar reserve share at 30-year low (58.2%); structural de-dollarisation continues beneath cyclical dollar strength.", instruments: "EUR/USD, iShares Physical Gold, WisdomTree Bitcoin ETP, Gold Fields, iShares MSCI EM, iShares MSCI Brazil",
      highlights: [
        { name: "EUR/USD", change: "-0.44%", note: "The pair is in a 1.13-1.15 range established since April — cyclical dollar strength (Fed hawkish, US inflation elevated) is masking the structural de-dollarisation trend. Today's 57K jobs miss is the first signal that the dollar's cyclical supports may be peaking." },
        { name: "Gold Fields (GFI)", change: "+1.4%", note: "Gold near $3,200/oz serves as the primary beneficiary of dollar hegemony concerns. Physical gold ETF inflows continue weekly. Central bank gold buying remains at multi-decade highs as reserve diversification accelerates." },
        { name: "WisdomTree Bitcoin ETP", change: "+2%", note: "Bitcoin benefited from the weak jobs report as investors priced in a more dovish Fed path; digital assets serve as a partial dollar-alternative hedge, though correlation with risk assets remains high." }
      ]
    },
    { num: "04", title: "GLP-1 Drugs Reshaping Healthcare Economics", status: "CONFIRMED", evidence: "Novo Nordisk oral semaglutide at 50K+ weekly prescriptions; Eli Lilly Foundayo launched April 2026; Goldman projects Lilly 60% oral GLP-1 share by 2030 vs Novo 21%; competitive pressure accelerating.", instruments: "Novo Nordisk, HCA Healthcare, UnitedHealth, McKesson, GE HealthCare, Celsius Holdings",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "-2.5%", note: "Despite strong Ozempic and Wegovy injection volumes, Novo faces accelerating oral GLP-1 [glucagon-like peptide-1] competition from Eli Lilly's Foundayo. Goldman projecting Lilly at 60% oral market share by 2030 vs Novo at 21% is the key competitive risk." },
        { name: "UnitedHealth (UNH)", change: "+1.3%", note: "Healthcare managed care benefiting from two GLP-1 tailwinds: obesity treatment reduces long-term cardiac and diabetes costs that managed care covers, and GLP-1 prescriptions now improve plan actuarial models." },
        { name: "Celsius Holdings (CELH)", change: "-1.8%", note: "Energy drink market is one of the sectors being repriced for a post-obesity world. Celsius faces questions about whether a lower-BMI population maintains energy drink consumption habits — an overhang on growth expectations." }
      ]
    },
    { num: "05", title: "Trade Fragmentation Creating Shipping Opportunities", status: "MIXED", evidence: "EU-US trade deal reduces key corridor fragmentation; China 24% tariff unchanged; Baltic Dry Index -22% June but bouncing July; tanker group -16% YTD; dry bulk net fleet growth low with improving rates.", instruments: "International Seaways, Global Ship Lease, Danaos, Tsakos Energy Navigation, StealthGas, iShares MSCI Brazil",
      highlights: [
        { name: "International Seaways (INSW)", change: "-2.5%", note: "Tanker group -16% YTD as crude oil price stabilization reduced voyage economics. However, International Seaways' Q1 2026 adjusted EPS of $3.90 significantly surpassed expectations, and Deutsche Bank maintains Buy. The structural trade fragmentation thesis is intact; the stock is pricing in a temporary rate trough." },
        { name: "Global Ship Lease (GSL)", change: "-2.0%", note: "Container charter rates [daily rental price for one ship] normalized from May peaks but remain structurally elevated vs pre-2024 levels. EU-US trade deal reduces urgency of rerouting voyages, creating a near-term headwind for the fragmentation shipping thesis." },
        { name: "Baltic Dry Index", change: "+2.4%", note: "After falling 22% in June to 2,490 (5-week low), the Baltic Dry Index rose 2.4% to 2,562 in early July as seasonal demand patterns re-set. Capesize vessels — the largest bulk carriers — expected to benefit from low net fleet growth through H2 2026." }
      ]
    },
    { num: "06", title: "Retail Cash Rotation to Equities Building", status: "CONFIRMED", evidence: "June 12 largest single day retail equity net buying ever (50% above prior record); daily retail volumes 65% above 2025 average; money market AUM $9.1 trillion — rotation has barely started with $3.07T retail money market still on sidelines.", instruments: "SPDR Russell 2000, iShares MSCI ACWI, Vanguard S&P 500, Robinhood, Interactive Brokers, Visa, PayPal",
      highlights: [
        { name: "Robinhood (HOOD)", change: "+1.6%", note: "Direct beneficiary of the retail trading boom — June 12 marked the largest single day of retail net equity buying ever, surpassing prior record by 50%. Commission and payment-for-order-flow revenue growing proportionally with retail activity surge." },
        { name: "Interactive Brokers (IBKR)", change: "+2.8%", note: "Record daily retail cash equity volumes running 65% above 2025 levels and more than double 2024 average drove strong commission revenue estimates for Q2. Institutional and retail both active — a higher-quality revenue mix than retail-only platforms." },
        { name: "Russell 2000 ETF (IWM)", change: "+0.8%", note: "The Great Rotation into small caps continues — when retail cash moves from money market funds ($9.1T) into equities, small-cap and index passive funds are the primary destination. The weak June jobs report and potential September Fed cut accelerate the timeline for this rotation." }
      ]
    }
  ],

  discoveries: [
    { num: "01", company: "Micron Technology (MU)", sector: "Memory / Semiconductors", headline: "Micron fiscal Q3 2026 revenue of $41.46B — an 18% beat — with Q4 guidance of $50B; stock fell 8% on sell-the-news reaction", detail: "Micron's blowout quarter is one of the most paradoxical events of 2026: revenue 18% above estimates with Q4 guidance of $50B (also above consensus), yet the stock fell 8% on the week. This is the market signaling that Micron had already priced in the beat with its 90%+ YTD run. The structural picture — HBM [high-bandwidth memory] allocation to NVIDIA Rubin platform, Micron overtaking Samsung in NVIDIA HBM share (Micron 21% vs Samsung 17%) — remains extremely positive and will reassert itself once the post-earnings profit-taking completes.", tag: "WATCH" },
    { num: "02", company: "Broadcom (AVGO)", sector: "Semiconductors / AI Custom Chips", headline: "Broadcom Q3 AI chip guidance of $16B misses analyst $17.2B expectation despite Q2 AI revenue of $10.8B (+143% YoY)", detail: "Broadcom's earnings call introduced the first real guidance crack in the AI semiconductor cycle. While Q2 AI revenue of $10.8B was exceptional (+143% YoY), the Q3 guide of $16B vs analyst expectations of $17.2B suggests demand from its six hyperscaler custom chip customers (Google, Meta, Anthropic, OpenAI, and two unnamed) is not accelerating at the pace markets had priced in. The $56B full-year AI revenue guide and $100B+ FY2027 target remain in place — the miss was relative to elevated expectations, not a reversal of the trend.", tag: "BEAR" },
    { num: "03", company: "EU-US Trade Deal", sector: "Macro / Trade Policy", headline: "EU-US trade deal took legal effect July 1, 2026: EU eliminates US industrial tariffs, US caps EU export tariffs at 15%", detail: "The ratification before the July 4 Trump deadline eliminated the largest bilateral tariff risk in global trade. The EU voted 440-151 (Parliament) and the Council approved June 25. Effect: EU automotive and industrial exporters immediately gain tariff certainty; EU banks benefited directly from improved European economic visibility. The 15% US tariff cap is considerably better than the 25%+ worst-case scenario that had been priced into European stocks through Q1-Q2 2026. This is a net positive for the iShares Core MSCI Europe ETF and all European export-facing positions.", tag: "BULL" },
    { num: "04", company: "US Labor Market", sector: "Macro / Fixed Income", headline: "June payrolls: 57,000 jobs added vs 115,000 expected; unemployment 4.2%; prior months revised down 74,000 combined", detail: "The June employment report is the biggest US macro surprise of the week and potentially the quarter. A 57K payroll add — barely half consensus — combined with downward revisions to April (-31K) and May (-43K) suggests the labor market is softening faster than the Fed's models anticipated. Labor force participation rate fell 0.3pp to 61.5% (5-year low). The Fed's new hawkish chair Warsh has been clear: he will not cut until inflation is clearly below 3%. But sustained weak jobs data creates political and economic pressure that no central bank chair can fully ignore.", tag: "WATCH" },
    { num: "05", company: "SK Hynix / Micron vs Samsung", sector: "Memory / Semiconductors", headline: "SK Hynix holds 62% of HBM market; Micron overtakes Samsung at 21% vs 17% — historic market share inflection in AI memory", detail: "The HBM [high-bandwidth memory required for AI training] market has a new competitive order: SK Hynix 62%, Micron 21%, Samsung 17%. Micron has overtaken Samsung — the third HBM supplier has passed the world's largest memory maker in the most strategically important memory segment. Samsung's share loss reflects yield challenges on HBM3E. For investors: SK Hynix remains the highest-conviction HBM play; Samsung is a recovery trade; Micron is the structural share-gainer with highest upside if it maintains NVIDIA allocation.", tag: "BULL" },
    { num: "06", company: "Tesla (TSLA)", sector: "EV / Consumer Tech", headline: "Tesla surges 8.5% on July 1 as EV optimism and short-covering drive largest single-day gain since Q1 2026", detail: "Tesla's 8.5% single-day gain on July 1 defies easy fundamental explanation — it reflects the stock's high short interest and retail investor concentration. The stock had been under pressure from Elon Musk's political involvement reducing European brand appeal. The catalyst appears to be Q2 delivery expectations resetting higher after China sales data showed sequential improvement. At 197x PE [price-to-earnings — paying 197 years of annual earnings], Tesla's valuation still embeds robotaxi revenue that does not yet exist in financials. Q2 delivery report expected imminently.", tag: "WATCH" },
    { num: "07", company: "Retail Investors", sector: "Market Structure / Flows", headline: "June 12 marked the largest single day of retail net equity buying ever recorded — surpassing prior record by 50%; daily volumes 65% above 2025 average", detail: "The retail investor is back in a way not seen since early 2021. June 12 retail net equity buying was 50% above any prior single-day record. More broadly, May and June daily retail cash equity volumes ran 65% above 2025 levels and more than double 2024 averages. With $9.1 trillion in money market funds still on the sidelines and rate cuts potentially returning to the Q3 agenda after today's weak jobs report, the second leg of the retail rotation — from money markets into equities — could dwarf what we saw in June. Small caps and index passive ETFs are the primary destination.", tag: "BULL" },
    { num: "08", company: "TSMC CoWoS Expansion", sector: "Semiconductors / AI Infrastructure", headline: "TSMC CoWoS advanced packaging capacity ramping to 140,000 wafers/month by end 2026, up from 35,000 in late 2024 — a 4x expansion in 18 months", detail: "TSMC's CoWoS [Chip-on-Wafer-on-Substrate — the packaging technology that integrates GPU dies with HBM memory] capacity expansion is the single most important supply chain development for AI infrastructure in 2026. The 4x capacity increase from 35K to 140K wafers/month means the current AI chip production bottleneck is being systematically resolved. Once the bottleneck clears in H2 2026, NVIDIA's GPU delivery timelines shorten, hyperscaler buildout accelerates, and the capex-to-revenue gap begins to close.", tag: "BULL" }
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
        finding: "All four hyperscalers reaffirmed or raised 2026 capex: Amazon $200B (more than double 2025 outlay), Microsoft $190B, Meta $125-145B (raised from $115-135B), Alphabet $175-185B — combined $690-725B with no hedges from any CFO.",
        implication: "AI infrastructure demand is not in doubt at the planning level; the Broadcom guidance miss is a near-term allocation timing issue, not a capex commitment reversal. GREEN maintained."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "TrendForce reported Q2 2026 conventional DRAM contract prices rising 58-63% QoQ and NAND Flash 70-75% QoQ. HBM3E contract prices at $13-17/GB — annual pricing mechanisms prevent full quarterly price discovery but prices are elevated and rising, with HBM4 2027 negotiations beginning.",
        implication: "HBM and DRAM pricing remains strongly positive for SK Hynix, Micron, and Samsung earnings. No plateau signal visible in pricing data — GREEN confirmed."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Azure grew 40%, AWS 28%, Google Cloud 63% in Q1 2026 — strong but capex at $690-725B is scaling faster than cloud AI revenue. Forbes flagged in June that AI spending is surging faster than revenue and markets are repricing. Broadcom's Q3 guidance miss amplified this concern. Gap is widening on a quarterly rate-of-change basis.",
        implication: "AMBER: if Q2 earnings calls (July 22-30) do not show AI-attributable revenue acceleration, P/E compression in AI hardware and software names will extend into Q3. The gap has not closed — watch it closely."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "Mag7 average forward P/E is approximately 28x (lowest premium vs S&P 500 in a decade, at ~4.5x above index). Nvidia's trailing PE contracted from 45x to 31x on strong earnings (fundamentals working), while Tesla at 197x remains sentiment-driven. The group is increasingly described as GARP [Growth at a Reasonable Price] rather than pure growth.",
        implication: "AMBER: Mag7 multiples are being supported by rising earnings at most names (NVDA, AAPL, GOOGL) but Tesla and forward multiple debates for MSFT and AMZN need Q2 earnings confirmation."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "Huawei targets 600,000 Ascend 910C units in 2026 using SMIC enhanced 7nm process, but yield rates remain 20-40% (vs TSMC's 90%+). SMEE (China's EUV alternative) is stuck at 28nm with EUV production target of 2028 at earliest, more realistically 2030. Meaningful but non-threatening progress at current yield levels.",
        implication: "AMBER: China chip progress at 7nm with 20-40% yield is a 2-3 year threat, not a current one. ASML and NVIDIA geopolitical premiums remain justified, but any yield improvement above 50% at 7nm would be a signal to watch."
      }
    ]
  },

  semis: {
    status: "WATCH",
    regions: [
      {
        region: "Korea",
        info: "Korea supplies ~95% of global HBM [high-bandwidth memory]. Production disruption propagates to NVIDIA allocation within 4-6 weeks. Samsung strike losing share to SK Hynix = rotation within sector, not a sector exit.",
        signal: "AMBER",
        finding: "Historic HBM market share inflection: SK Hynix 62%, Micron 21%, Samsung 17%. Micron has overtaken Samsung as the #2 HBM supplier to NVIDIA. Samsung is racing on HBM4 development to recapture position. No strike or production disruption reported this week, but Samsung's structural market share loss is the dominant Korea semi story.",
        implication: "AMBER: Samsung losing HBM share to Micron is a rotation signal within the memory complex — SK Hynix remains the highest-conviction Korea play, Samsung is a troubled recovery trade. Watch for Samsung HBM4 yield news to determine if share loss is temporary."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "BOJ held rates steady this week. TSMC Kumamoto Fab 2 delays persist (machinery withdrawal and supplier commitment pause for 2026), but Arizona US expansion is prioritized by TSMC. Tokyo Electron orders stable. No new BOJ surprise hike signal detected.",
        implication: "GREEN: No BOJ surprise and Kumamoto delays well-known. The key risk for next week is the BOJ July 31 meeting — if a rate hike is signaled, the JPY carry trade unwind hits tech stocks within hours."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "TSMC CoWoS ramping to 140,000 wafers/month by end 2026 (4x expansion from late 2024). SMIC achieving volume production of N+3 (7nm-class) node at 20-40% yield for Huawei Ascend 910C. Huawei targeting 600K Ascend units in 2026. Rare earth export controls: no new announcements this week.",
        implication: "AMBER: TSMC CoWoS expansion is positive (bottleneck resolving); SMIC 7nm production is AMBER (meaningful but low-yield); rare earth controls remain a latent risk deployable without notice."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "GREEN",
        finding: "No new export control expansions announced this week. CHIPS Act disbursements proceeding; TSMC Arizona is prioritized over TSMC Kumamoto by TSMC itself, reflecting confidence in US policy stability. Intel 18A-P node entering risk production with CHIPS Act support. EU-US trade deal (effective July 1) reduces bilateral technology trade friction.",
        implication: "GREEN: Stable US semiconductor policy environment this week. The risk is a surprise export control expansion — watch for any China chip news that triggers a Washington response."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "SMEE is stuck at 28nm DUV lithography with its SSA800 tool existing mostly in statements and industry rumors. China's EUV LDP prototype achieved 100-150W power output (vs 250W+ needed for high-volume manufacturing). Earliest credible EUV alternative: 2028 for prototype, 2030 for production. No new announcements this week.",
        implication: "GREEN: ASML's geopolitical moat is intact for 4-6 more years at a minimum. Current SMIC/Huawei production at 7nm relies entirely on existing DUV tooling obtained before export controls, not new Chinese-made equipment."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "AMBER",
        finding: "Micron overtook Samsung as #2 HBM supplier: SK Hynix 62%, Micron 21%, Samsung 17%. For NVIDIA's Rubin platform (HBM4), SK Hynix has ~55% allocation, Samsung ~20%, Micron ~20%. Micron's HBM capacity is sold out through 2026. UBS projects SK Hynix ~70% HBM4 market share.",
        implication: "AMBER: Micron's rise to 21% is the key structural change. SK Hynix remains dominant; Samsung's share loss is material and may persist through HBM4 transition. Micron is the structural beneficiary if Samsung's yield issues continue — but Samsung losing share further weakens HBM pricing power for all three."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Custom AI ASICs [application-specific integrated circuits] from Google (TPU v7 Ironwood), Amazon (Trainium 3), Microsoft (Maia 200), Meta (MTIA) are growing at 44.6% CAGR. NVIDIA holds 80-85% of data center AI accelerator revenue (down from 92% in 2023). Custom silicon capturing 15-25% share, primarily internal hyperscaler inference workloads — training still NVIDIA-dominated. AWS deployed 1M+ Trainium processors, primarily for inference.",
        implication: "AMBER: Custom silicon share at 15-25% is significant but primarily inference-side — training GPU demand remains NVIDIA-dominated. Watch for any hyperscaler announcement of >10% training workload shift to custom silicon as the key NVIDIA risk signal."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS capacity ramping from 35,000 to 140,000 wafers/month by end 2026 — a 4x expansion. TSMC is outsourcing some CoWoS to ASE and Amkor but retaining lead position on the most advanced specifications. Samsung I-Cube and Intel EMIB exist as alternatives but are at materially lower volume and yield. ASE, Amkor, Samsung announced $15B+ in new advanced packaging capacity for 2026-2027 but remain far behind TSMC in production volume.",
        implication: "GREEN: TSMC CoWoS is the only credible option at volume for AI GPU production through 2026. The capacity expansion means the bottleneck is resolving — positive for AI chip delivery timelines and hyperscaler buildout acceleration in H2 2026."
      }
    ]
  }

};
