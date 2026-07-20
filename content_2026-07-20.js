const BRIEF = {

  meta: {
    date: "Thursday, July 17, 2026",
    eurusd: "1.1450",
    eurusd_direction: "rising",
    eurusd_driver: "ECB's June rate hike to 2.25% deposit rate [the rate banks earn on overnight reserves] is narrowing the interest-rate differential with the Fed; simultaneously US June CPI and PPI both declined for the first time in months, reducing the Fed's urgency to tighten further and weakening the USD relative to the EUR.",
    eurusd_outlook: "ECB meeting July 23 priced at 88% probability of hold; Section 122 tariff expiry July 24 could weaken USD further if Section 301 replacement tariffs disappoint — next-week EUR/USD range ~1.140–1.155, upside risk if ECB signals further hikes citing Middle East-driven commodity inflation.",
    eurusd_weekly_change: "+~0.6%"
  },

  vitals: {
    fear_greed: {
      value: 37,
      label: "Fear",
      interpretation: "A reading of 37 means the marginal buyer is demanding a higher risk premium [extra return for owning equities vs bonds] before deploying cash. The condition for improvement: SOX bear market stabilises on better-than-expected Alphabet and Tesla Q2 earnings (July 22), or Section 122 tariff expiry July 24 provides policy clarity. Falsifier: if Fear drops below 25, historically signals over-sold conditions that mean-revert within 3 weeks."
    },
    vix: {
      value: 18.77,
      label: "Elevated",
      interpretation: "VIX at 18.77 (up from 16.73 prior close) reflects options buyers pricing in ~1.2% daily S&P swings over the next 30 days. Not panic territory (panic = VIX >30) but elevated enough that protective put [right to sell at a fixed price] buying is cost-ineffective. The spike is mechanically driven by SOX bear market and pre-earnings uncertainty; resolves if Alphabet/Tesla beat on July 22 and Fed holds July 30."
    },
    put_call: {
      value: 0.62,
      label: "Bullish tilt",
      interpretation: "A put/call ratio [puts bought per call bought] of 0.62 means the options market is still net bullish despite fearful sentiment — investors are buying more upside (calls) than downside protection (puts). This contradiction suggests institutional hedgers are behind the curve if the SOX selloff continues. A move toward 0.80+ would signal genuine defensive repositioning has begun. Last-week figure omitted — not sourced this session."
    }
  },

  regime: {
    title: "AI Tax Day: SOX Bear Market Tests the Trade",
    description: "The dominant narrative this week is that the semiconductor sector entered bear market territory (SOX index down ~11% in a single week, confirming -20% from the June peak), being repriced from 'AI supercycle winner' to 'AI enabler awaiting proof of return on investment.' Hyperscalers committed $725B in 2026 capex [capital expenditure on physical infrastructure] but Q2 AI-attributable revenue has not visibly closed the gap. This regime favours thesis 01 (AI infrastructure physical world) via the power and cooling layer rather than chip names, and thesis 04 (GLP-1 drugs) on EU Wegovy pill approval. Thesis 02 (EU strategic autonomy) faces headwinds from Rheinmetall's continued slide from its 2026 peak.",
    tailwinds: [
      "Section 122 tariff expiry July 24 — effective US tariff rate drops ~13% to ~7.2%, potential cost relief",
      "Alphabet and Tesla Q2 earnings July 22 — first AI revenue proof-point of the cycle",
      "Novo Nordisk EU Wegovy pill approval + US Medicare GLP-1 coverage — doubling oral patient access"
    ],
    headwinds: [
      "SOX bear market — semiconductor index -20% from peak, -11% in one week, worst since March 2025",
      "US inflation at 4.2% CPI YoY — Fed stuck at 3.50–3.75%, no cut visible this year",
      "Section 301 tariff replacement uncertainty — 12.5% proposed but not finalized, policy gap risk"
    ]
  },

  league: {
    winners: [
      {
        rank: 1,
        name: "Apple (AAPL)",
        sector: "Technology / Consumer Hardware",
        change: "+6.04%",
        reason: "Pre-earnings positioning into July 30 report; Apple briefly overtook Nvidia as world's most valuable company — this is multiple expansion ahead of earnings, not a fundamental event. Holds only if Q2 shows iPhone unit volume growth (AI upgrade cycle) rather than just average selling price improvement; flat units with positive AI-upgrade language is the falsifier."
      },
      {
        rank: 2,
        name: "CrowdStrike (CRWD)",
        sector: "Cybersecurity",
        change: "+8.33%",
        reason: "Cooling June CPI reduced the discount rate applied to high-multiple growth stocks; cybersecurity budgets are structurally protected because the cost of a data breach ($4.45M industry average) structurally exceeds the annual subscription cost, making the purchase non-discretionary regardless of macro softness. Benchmark raised price target to $230. Falsifier: enterprise IT budget freeze explicitly targeting security renewals, which has not occurred outside of severe recession."
      },
      {
        rank: 3,
        name: "Energy Sector",
        sector: "Energy",
        change: "~+5%",
        reason: "~ estimated from sector narrative sourced this session — US strikes on Iranian targets triggered an oil supply-disruption premium; buyers who normally arbitrage Middle East risk premiums away within days did not this week, suggesting they price a sustained conflict. Falsifier: ceasefire announcement or Iran-US negotiation signal, which historically collapses Middle East oil premiums within 24 hours."
      }
    ],
    losers: [
      {
        rank: 1,
        name: "Semiconductor Index (SOX / SOXX)",
        sector: "Semiconductors",
        change: "~-11%",
        reason: "~ estimated from bear market entry reporting sourced this session — hyperscalers spending $725B in capex but AI-attributable cloud revenue is not accelerating fast enough; investors who paid 35x forward P/E [price-to-earnings] during the March-June 105% semiconductor rally are unwinding that premium. Condition for stabilisation: Alphabet Q2 (July 22) shows Google Cloud AI revenue growing proportionally to the $185B capex deployed."
      },
      {
        rank: 2,
        name: "ServiceNow (NOW)",
        sector: "Enterprise Software",
        change: "-5.76%",
        reason: "Earnings July 22 approaching; investors pricing in risk that enterprise buyers defer AI workflow automation spend pending tariff policy clarity after Section 122 expiry. Revenue recognition on multi-year AI contracts requires delivery confirmation, not just signing, so any deferral directly hits current-quarter ARR [annual recurring revenue — contracted subscription income]. Falsifier: Q2 ARR beat showing new AI workflow bookings accelerating despite cautious macro."
      },
      {
        rank: 3,
        name: "Vertiv Holdings (VRT)",
        sector: "Data Center Infrastructure",
        change: "-5.33%",
        reason: "Profit-taking after 86% YTD run; no new fundamental deterioration — this is mechanical positioning ahead of July 29 earnings. The condition for this pullback to matter structurally: if Q2 shows order backlog growth slowing below 30% YoY, that would indicate hyperscalers deferring data centre power and cooling procurement, repricing VRT's 2027 embedded revenue estimate."
      },
      {
        rank: 4,
        name: "Nvidia (NVDA)",
        sector: "Semiconductors",
        change: "~-8%",
        reason: "~ estimated from -2.4% Thursday close plus SOX -11% weekly context — AI capex ROI [return on investment] concerns are the mechanism: hyperscalers buying Blackwell [NVIDIA's latest GPU architecture] at $30K+ per unit need to show proportional AI revenue growth to sustain order rates; if Alphabet Q2 (July 22) disappoints on cloud AI revenue, the Blackwell demand narrative weakens. Falsifier: sustained >50% YoY Blackwell revenue guidance in NVIDIA's next earnings call."
      },
      {
        rank: 5,
        name: "Meta Platforms (META)",
        sector: "Communication Services",
        change: "~-3%",
        reason: "~ estimated from Thursday close of $665.47 (-2.79% that day) — Wedbush flagged concerns that Meta's AI infrastructure spend ($125–145B 2026 capex) is widening the capex-to-revenue gap; stock failed at resistance after the previous week's +14.8% rally, suggesting the prior move was technically rather than fundamentally driven. Falsifier: July 29 Q2 earnings show AI-driven engagement increasing monetisation per user-hour in measurable terms."
      },
      {
        rank: 6,
        name: "Robinhood (HOOD)",
        sector: "Retail Brokerage",
        change: "-4%",
        reason: "NASDAQ selloff reduced retail trading volumes; crypto dip compounded the revenue decline since Robinhood's transaction revenue is directly correlated with retail participation and market volatility. The revenue model pays when retail traders are active — a fear-driven market where retail withdraws directly cuts transaction revenue. Falsifier: HOOD holds if options volumes remain elevated as a hedging tool even in a down market."
      }
    ]
  },

  sectors: [
    { name: "US Technology", change: "~-8%", direction: "down", driver: "SOX bear market entry (-11%) dragged the entire tech sector; AI capex ROI concerns triggered fund outflows from semiconductor momentum positions built during the March-June 105% SOX rally." },
    { name: "US Energy", change: "~+5%", direction: "up", driver: "US strikes on Iranian targets created a supply-disruption premium in oil — energy producers pass higher oil prices directly to revenue, unlike energy consumers who absorb them as costs." },
    { name: "US Communication Services", change: "~-3%", direction: "down", driver: "Meta failed at resistance on AI monetisation concerns; Alphabet pre-earnings uncertainty ahead of July 22 report — both names near earnings dates where guidance disappointments matter most." },
    { name: "US Healthcare", change: "~flat", direction: "flat", driver: "~ No significant weekly move sourced; Novo Nordisk EU Wegovy pill approval and Medicare GLP-1 coverage are medium-term positives but did not drive sector-level moves this week." },
    { name: "US Financials", change: "~-1%", direction: "down", driver: "~ Estimated from EU bank data; EU banks -1.32%, BBVA and Deutsche Bank -2.5% each on Commerzbank/UniCredit acquisition standoff; interest income benefits from ECB hike offset by slower-growth credit quality concerns." },
    { name: "US Industrials", change: "~-2%", direction: "down", driver: "~ Estimated; data centre infrastructure pullback (Vertiv -5.33%) and tariff uncertainty ahead of Section 122 expiry July 24 reduced near-term manufacturing order visibility." },
    { name: "US Consumer Discretionary", change: "~-2%", direction: "down", driver: "~ Not directly sourced; AI-spend concerns and tech sector rotation pressure filtered into consumer tech-adjacent names." },
    { name: "US Consumer Staples", change: "~flat", direction: "flat", driver: "~ Not sourced; defensive positioning in fear environments typically supports staples but not enough for notable positive returns." },
    { name: "US Utilities", change: "~-1%", direction: "down", driver: "~ Estimated; AI power plays (Vistra, Constellation Energy) pulled back with broader tech weakness despite the long-term structural power demand story being intact." },
    { name: "EU Defence", change: "~+2%", direction: "up", driver: "Recovering 17% from June lows; NATO 3.5% GDP spending target and Germany's EUR 500B defence fund provide a structural bid; Rheinmetall backlog EUR 73B but stock at EUR 990 vs 2026 peak of EUR 2,008 — execution-risk, not demand-risk discount." },
    { name: "EU Banks", change: "-1.32%", direction: "down", driver: "BBVA, Deutsche Bank, UniCredit each fell ~2.5%; Commerzbank/UniCredit German-government standoff on acquisition terms created overhang; ECB hold expectations reduce near-term NIM [net interest margin — spread between loan rates earned and deposit rates paid] expansion catalyst." }
  ],

  flows: [
    { label: "US Equities", amount: "+$42.5B", direction: "in", note: "Secondary reporting of ICI [Investment Company Institute — US fund industry association] data for week ended July 8 (lagged one week, not EPFR); domestic equity funds received $42.5B, largest single-week figure in over a month, driven by institutional rebalancing ahead of Q2 earnings rather than retail participation. This flow would reverse if Alphabet Q2 (July 22) disappoints and triggers institutional de-risking." },
    { label: "International / World Equities", amount: "+$0.3B", direction: "in", note: "ICI secondary data, week ended July 8 — negligible inflow despite EUR strength, suggesting institutional allocators are not yet rotating into European equities; would accelerate if ECB hiking cycle gains credibility and European earnings beat Q2 expectations." },
    { label: "Taxable Bond Funds", amount: "+$22.4B", direction: "in", note: "ICI secondary data, week ended July 8 — simultaneous equity and bond buying is a 'risk-on with hedging' pattern typical of late-cycle periods where earnings optimism competes with inflation uncertainty; this reverses if CPI re-accelerates above 4.5% forcing the Fed to resume hiking." },
    { label: "Municipal Bond Funds", amount: "+$2.4B", direction: "in", note: "ICI secondary data, week ended July 8 — steady inflow from high-income investors locking in tax-equivalent yields ahead of potential post-tariff-expiry fiscal changes." },
    { label: "Cash / Money Markets", amount: "n/a — not sourced this week", direction: "in", note: "EPFR paywalled; ICI money-market data not captured in this session." },
    { label: "EM Equities", amount: "n/a — not sourced this week", direction: "in", note: "EPFR paywalled; secondary reporting not found this session." }
  ],

  trends: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      detail: "Hyperscalers raised 2026 capex guidance to $750B, up 77% from $410B in 2025, with nearly all funds going to GPU clusters, custom silicon, and data centre construction to train and serve AI models at scale. Power infrastructure is the primary bottleneck — at least 75 US data centre projects worth $130B were postponed due to lack of power grid access. Comfort Systems USA (FIX) reported Q1 2026 organic revenue growth of 51% YoY driven entirely by data centre HVAC [heating, ventilation, air conditioning — critical cooling for high-density AI server racks] contracts. NVIDIA CEO Jensen Huang at GTC 2026 reframed AI economics as 'Revenue = Tokens per Watt x Available Gigawatts' — power infrastructure is now a direct lever on AI revenue, not a support cost.",
      status: "CONFIRMED",
      evidence: "Global data centre electricity consumption expected to reach 565 TWh in 2026, up 26% YoY; AI-optimised server electricity set to jump 84% to 175 TWh; Comfort Systems Q1 organic revenue +51% YoY entirely from data centre contracts; hyperscalers at $750B combined 2026 capex.",
      type: "structural"
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      detail: "NATO allies at The Hague summit committed to a 3.5% GDP benchmark for core defence spending. European NATO defence spending has doubled since 2019 and could reach EUR 800B by decade end. However, equipment stocks remain below 2021 levels despite spending increases, reflecting long delivery timelines and legacy system retirements. Rheinmetall, the bellwether, is at EUR 990 — down from a 2026 high of EUR 2,008 — as investors question delivery timelines after the German government cancelled a major shipbuilding project worth ~EUR 15B. Rheinmetall's Q1 operating profit was up 17% with a EUR 73B order backlog. Europe remains structurally reliant on US suppliers for fighter aircraft, air defence systems, and precision weapons — larger budgets do not automatically create independence.",
      status: "UNCHANGED",
      evidence: "NATO 3.5% GDP target confirmed at The Hague; Rheinmetall Q1 operating profit +17% to EUR 224M, order backlog EUR 73B; stock at EUR 990 vs 2026 peak EUR 2,008 — market pricing execution risk, not demand risk.",
      type: "structural"
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      detail: "EUR/USD at ~1.1450, near a 3-month high, as the ECB's June rate hike to 2.25% deposit rate narrows the interest differential with the Fed. De-dollarisation is most visible in commodity markets where a growing proportion of energy contracts settle in non-dollar currencies. BRICS digital payment corridors are advancing. The USD still represents 58% of foreign reserve holdings (down from 70%+ in 1999), but the defining shift is from dollar exclusivity toward dollar-centred competition — reserve diversification continues slowly while payment system alternatives develop faster. The Middle East conflict is creating additional USD demand as a safe haven, but the structural trend toward EUR strength is intact.",
      status: "CONFIRMED",
      evidence: "EUR/USD at 3-month high of 1.1474 intraweek; ECB raised deposit rate to 2.25% in June (first hike since 2023); US dollar weakening as Fed stuck at 3.50–3.75%; de-dollarisation most advanced in commodity settlement corridors.",
      type: "structural"
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      detail: "2026 is structurally the 'year of obesity pills.' Novo Nordisk received EU Commission approval on July 15 for the Wegovy pill (once-daily oral semaglutide 25mg) — the first oral GLP-1 [glucose-lowering peptide-1 hormone that reduces appetite and slows gastric emptying] for weight management in the EU. In the US, Medicare began covering GLP-1 obesity drugs from July 1, with eligible beneficiaries paying $50/month copay. The Wegovy pill is priced at $149–$299/month cash in the US. These two events simultaneously remove the two structural barriers to mass-market adoption: the injection barrier (roughly 40% of eligible patients declined injectable treatments) and the cost barrier for the 65+ cohort that carries the highest obesity-related comorbidity burden [additional diseases caused by obesity].",
      status: "CONFIRMED",
      evidence: "EU Commission approved Novo Nordisk Wegovy pill July 15, 2026; US Medicare GLP-1 obesity coverage started July 1; oral pill achieves weight loss equivalent to injectable Wegovy 2.4mg.",
      type: "structural"
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      detail: "Drewry's World Container Index shows global average shipping rate at $4,639 per 40ft container (July 9), with rates diverging dramatically by lane: Shanghai-Los Angeles at $6,272 (-3% week), Shanghai-Rotterdam at $4,873 (-1%), while Red Sea rerouting via the Cape of Good Hope [alternative longer route avoiding Suez Canal] adds 12–14 days to Asia-Europe transit times. The market is defined by downward rate pressure, fragmented routing strategies, and unpredictable volatility simultaneously — creating opportunities for ship owners with flexible fleet deployment and compressing margins for fixed-route operators. Danaos announced a $0.90/share cash dividend with ex-date July 21, signalling dividend sustainability despite rate volatility.",
      status: "UNCHANGED",
      evidence: "Drewry WCI at $4,639/40ft (July 9); Shanghai-LA -3% to $6,272; Shanghai-Rotterdam -1% to $4,873; Danaos ex-dividend July 21 at $0.90/share.",
      type: "structural"
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      detail: "The retail brokerage sector is bifurcating: Robinhood (HOOD) is down 30% YTD while Interactive Brokers (IBKR) is up 35% YTD. This week, Robinhood fell 4% as the NASDAQ selloff reduced retail equity and crypto trading volumes, directly cutting transaction revenue. IBKR, by contrast, is reporting May 2026 daily average revenue trades [number of transactions generating revenue] up 47% YoY, driven by professional and international clients rather than retail speculators. The bifurcation reveals that the 'retail rotation' is more precisely a professionalisation of self-directed investing — the speculative retail layer is fading while the institutional-adjacent retail layer competes. The broader thesis weakens if sustained NASDAQ declines push retail back to cash for more than 4 weeks.",
      status: "WEAKENED",
      evidence: "Robinhood fell 4% on NASDAQ/crypto selloff; HOOD down 30% YTD vs IBKR up 35% YTD; IBKR daily average revenue trades +47% YoY through May — driven by professional, not retail segment.",
      type: "cyclical"
    }
  ],

  executive: {
    biggest_mover: {
      name: "SOX (Philadelphia Semiconductor Index) — Bear Market Entry",
      change: "~-11%",
      reason: "The SOX [Philadelphia Semiconductor Index — the 30 largest semiconductor companies by market cap] confirmed a technical bear market (down 20% from its June peak) after a 105% rally from March to late June. The mechanism: investors paid 35x forward P/E [price-to-earnings ratio using next-year estimated earnings] for chip names during the AI euphoria phase; hyperscalers are now collectively spending $725B in 2026 capex but Q2 AI-attributable revenue has not accelerated visibly enough to close the gap. The impact on thesis 01 (AI Infrastructure) is a rotation within — from chip names toward power and cooling infrastructure (Vertiv, Comfort Systems, Eaton) which operate upstream of the ROI [return on investment] question and get paid regardless of which GPU vendor wins."
    },
    key_risk: {
      name: "Section 122 Tariff Expiry — July 24, 2026",
      reason: "The blanket 10% Section 122 import surcharge expires at 12:01am EDT July 24 by statutory 150-day sunset — no congressional extension legislation is pending. This drops the effective US tariff rate from ~13% to ~7.2%, creating a pricing decision for every US importer: manufacturers who priced products with the 10% tariff floor built in (to protect margins) must now choose between reducing prices or preserving margins, before knowing what the Section 301 replacement tariffs (proposed at 12.5% on 46 countries, public hearing held July 7 but not yet finalized) will be."
    },
    conviction_call: {
      name: "Novo Nordisk (NVO)",
      observation: "The EU Wegovy pill approval (July 15) and US Medicare coverage from July 1 represent the two structural barriers to mass-market GLP-1 [obesity drug] adoption — the injection barrier and the cost barrier — being removed simultaneously. Novo Nordisk is the only company with an approved oral GLP-1 at scale (Wegovy pill, 25mg semaglutide) and the manufacturing capacity to meet expanded demand. The condition for this call: EU national reimbursement decisions must follow EC approval within 12–18 months; the falsifier is if EU member states refuse reimbursement at scale, limiting the pill to cash-pay patients and compressing addressable patient volume."
    },
    macro_pulse: {
      name: "Section 122 Tariff Expiry — July 24",
      observation: "The 150-day congressional clock on the post-Supreme-Court tariff replacement expires this Thursday July 24. The effective US tariff rate drops from ~13% to ~7.2% unless Congress passes an extension (no bill pending). Section 301 replacement tariffs (12.5% on 46 countries) are proposed but unfinalised — creating a potential 5–7 day window of near-zero incremental tariffs between Section 122 expiry and Section 301 implementation, the most acute US trade policy inflection since the February 20 Supreme Court ruling."
    },
    tags: [
      { label: "EUR/USD: 1.1450 ↑", type: "green" },
      { label: "Fed: Hold 3.50–3.75%", type: "amber" },
      { label: "ECB: Hold July 23 (88%)", type: "blue" },
      { label: "Tariffs: Sec.122 expires Jul 24", type: "red" },
      { label: "AI capex: $725B committed", type: "green" },
      { label: "EU defence: NATO 3.5% GDP", type: "amber" },
      { label: "Semis: SOX bear market -20%", type: "red" },
      { label: "Shipping: Rates $4,639 avg", type: "amber" }
    ]
  },

  macro: {
    us: "The US economy is navigating a four-way constraint: inflation at 4.2% CPI YoY (Fed target: 2%), rates held at 3.50–3.75% (Fed Chair Warsh reaffirmed data-dependence at July 16–17 Congressional testimony), tariff uncertainty with Section 122 expiring July 24, and a semiconductor bear market testing the AI trade. June CPI and PPI both declined — the first time in nearly a year — suggesting tariff passthrough to consumer prices may be peaking. The Dallas Fed calculated that without tariff effects, core inflation would be ~0.80% lower at ~2.3%, implying the Fed is fighting a tariff-induced inflation spike rather than a demand-driven one. If Section 301 replacement tariffs land below the 10% Section 122 level, the Fed may gain space to consider rate cuts by Q4 2026 — which would be the largest single regime shift from current positioning.",
    europe: "The eurozone is in managed stagflation: ECB raised rates to 2.25% deposit rate in June (first hike since 2023), citing Middle East-driven commodity inflation and second-round wage effect risks. Economic growth is forecasted at 0.8% for 2026, revised down from earlier projections. Eurozone June inflation fell to 2.8% from 3.2% in May — near ECB's target — undercutting the case for further hikes; July 23 meeting is priced at 88% probability of hold. EU defence spending benefits from NATO's 3.5% GDP commitment, providing a structural budget floor for Rheinmetall, Safran, and Thales. The UniCredit/Commerzbank acquisition standoff with the German government remains a bank-sector overhang, with BBVA and Deutsche Bank each slipping ~2.5% on associated uncertainty.",
    asia: "China reported Q2 GDP growth of 4.3%, missing the 4.5% consensus — its weakest since 2022 — with urban fixed-asset investment [money spent on factories and buildings] down 5.7% in H1. The export paradox is striking: June exports rose 27% YoY, the fastest since October 2021, driven by AI hardware, rare earths, autos, and ships. China's trade surplus with the EU widened 24% in H1, straining bilateral relations. The Politburo's late-July meeting is the next key policy signal — analysts expect calibrated, targeted measures rather than large-scale stimulus. China's export strength coexists with domestic weakness, straining trade partners and accelerating fragmentation. SMIC's 5nm pilot production with low yields (20–40%) is advancing but remains a medium-term, not immediate, moat threat to ASML and Nvidia.",
    forward: "The calendar is maximally front-loaded: Alphabet and Tesla report Q2 on July 22 (Tuesday, after market close) — the first Magnificent Seven earnings of the cycle, setting the tone for the AI trade's validity. Meta and Microsoft report July 29; Apple and Amazon on July 30. The ECB meets July 23 (hold expected). Section 122 tariff expires July 24 — the most acute policy inflection point of the quarter. The US Fed meets July 29–30. China's Politburo late-July meeting is unscheduled but expected. The week of July 20–24 is the highest-density policy and earnings week of the quarter — positioning into it was risk-off across tech names, which explains this week's selloff as much as any fundamental deterioration."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$333.74",
      change: "+6.04%",
      pe: "~34x",
      pe_plain: "paying ~34 years of annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "iPhone AI upgrade cycle + world market cap leadership",
      news: "Apple briefly overtook Nvidia as the world's most valuable company by market capitalisation, hitting an all-time high of $334.68 on July 16. The +6% weekly gain is pre-earnings multiple expansion ahead of the July 30 report — investors are paying for the expectation that iPhone 17 AI features drive measurable unit volume growth, not just average selling price improvement from AI model subscription bundling. The AI-upgrade-cycle hypothesis requires unit volume data to validate; Apple's Q2 historically shows seasonal softness so any unit growth would be structurally significant.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "WATCH",
      verdict_reason: "The 6% pre-earnings run creates a high bar: the condition for BUY is Q2 showing iPhone unit volume growth visible enough to justify the AI-upgrade thesis; flat units with AI commentary intact is the sell-the-news falsifier."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$393.82",
      change: "n/a — not sourced this week",
      pe: "23.5x",
      pe_plain: "paying 23.5 years of annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "Azure AI revenue + Maia 200 custom chip debut",
      news: "Microsoft unveiled the Maia 200 AI chip, claiming a performance edge over Amazon and Google in inference [running AI models] workloads. Maia 200 is fabricated on TSMC 3nm with 140 billion transistors and is captive to Azure — not externally available. If Maia 200 demonstrably reduces Azure's per-token compute cost, it widens Azure's margin on AI services and reduces Nvidia GPU procurement. Microsoft reports Q2 on July 29.",
      earnings: "July 29, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "P/E of 23.5x is the lowest of Mag7, implying the market is not pricing AI upside into Microsoft; condition for BUY is July 29 showing Azure AI revenue growing proportionally to the $120B capex [capital expenditure] deployed in 2026."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$247.23",
      change: "n/a — not sourced this week",
      pe: "~35x",
      pe_plain: "paying ~35 years of annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "AWS preferred hyperscaler pick + Trainium 3 ramp",
      news: "Wedbush analysts flagged Amazon as the preferred hyperscaler investment over Meta this week, citing better AI-to-revenue conversion visibility via AWS. Amazon's Trainium 3 chip entered production in Q2 2026, reducing external chip dependency. Amazon is committing $200B in 2026 capex — the largest single hyperscaler commitment — primarily for data centres. All-time high close was $274.99 on May 6, 2026; current $247.23 represents a pullback from peak. Reports Q2 on July 30.",
      earnings: "July 30, 2026",
      earnings_proximity: "soon",
      verdict: "HOLD",
      verdict_reason: "Wedbush preference is analyst opinion, not a sourced mechanism; condition for BUY is July 30 showing AWS AI revenue accelerating to a rate that closes the $200B capex gap within 3 years."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "~$210",
      change: "n/a — not sourced this week",
      pe: "27x",
      pe_plain: "paying 27 years of annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "Q2 earnings July 22 — the AI trade's binary test",
      news: "Alphabet and Tesla are the first Magnificent Seven companies to report Q2 2026, on July 22 after market close. Wall Street consensus expects Alphabet EPS of $2.88 (up 24.2% YoY) and revenue of $117B (up 21% YoY). Google Cloud AI revenue acceleration is the specific metric that will either validate or challenge the entire AI infrastructure capital deployment narrative. Google TPU Ironwood (v7) is in production but remains captive to Google infrastructure — its per-token cost advantage vs Nvidia GPUs will be visible only in cloud margin trends.",
      earnings: "July 22, 2026",
      earnings_proximity: "imminent",
      verdict: "WATCH",
      verdict_reason: "July 22 is the binary catalyst for the AI trade — a Google Cloud AI revenue acceleration with maintained capex guidance validates the SOX recovery thesis; a revenue miss with capex maintained makes the SOX bear market consensus, not contrarian."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$665.47",
      change: "~-3%",
      pe: "23x",
      pe_plain: "paying 23 years of annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "AI monetisation gap — capex vs engagement returns",
      news: "Meta failed at a technical resistance level as Wedbush analysts questioned whether Meta's AI infrastructure spend ($125–145B 2026 capex) generates measurable return on ad revenue per user-hour. The previous week's +14.8% rally ($221B in market cap added) appears to have been technically driven rather than fundamentally validated, as the stock could not hold new highs. Meta's MTIA [Meta Training and Inference Accelerator — Meta's custom AI chip] reduces Nvidia dependency but the key question is whether AI-driven content ranking generates ad revenue above the additional compute cost deployed. Q2 earnings July 29.",
      earnings: "July 29, 2026",
      earnings_proximity: "soon",
      verdict: "WATCH",
      verdict_reason: "The core question — does Meta's AI compute spend generate measurable ad revenue per user-hour — is answered on July 29; falsifier for positive sentiment is if Reels AI targeting shows ROAS [return on ad spend — revenue generated per dollar of ad investment] regression despite higher capex."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$207.40",
      change: "~-8%",
      pe: "31x",
      pe_plain: "paying 31 years of trailing annual earnings per share",
      target: "n/a — not sourced this week",
      theme: "SOX bear market — AI ROI doubts + custom silicon encroachment",
      news: "Nvidia fell ~2.4% on Thursday as the chip sell-off entered its third consecutive session. The SOX is down 20% from its June peak and -11% this week — worst weekly loss since March 2025. Forward P/E has compressed to 22.7x from ~35x at the June peak as the stock sold off faster than earnings estimates were revised, creating a better entry point mechanically. The critical moat defence: hyperscaler custom silicon (Google TPU, AWS Trainium, Microsoft Maia) dominates inference [running models] but training [building models] remains entirely NVIDIA GPU-dependent due to CUDA software ecosystem lock-in and flexibility requirements.",
      earnings: "n/a — not sourced this week",
      earnings_proximity: "far",
      verdict: "CAUTION",
      verdict_reason: "Thesis holds only if Alphabet Q2 (July 22) shows Google Cloud AI revenue growing proportionally to Nvidia GPU purchases — a cloud revenue miss with maintained Blackwell capex would be the SOX bear market's most damaging confirmation signal."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$380.84",
      change: "~-3%",
      pe: "n/a — not sourced this week",
      pe_plain: "n/a — not sourced this week",
      target: "n/a — not sourced this week",
      theme: "Q2 earnings July 22 — 480K deliveries, energy and Optimus in focus",
      news: "Tesla reports Q2 2026 earnings on July 22 after market close. Wall Street expects revenue of ~$26.5B (up 18% YoY) and EPS of ~$0.52–$0.55 (up ~30% YoY). Tesla produced 450K+ vehicles and delivered 480K in Q2 — positive inventory-clearing signal, as the gap means Tesla is selling rather than accumulating cars. The energy storage business and Optimus [Tesla's humanoid robot program] are the narrative drivers beyond automotive. FSD [Full Self-Driving] revenue recognition depends on regulatory approval timelines, making it high-variance.",
      earnings: "July 22, 2026",
      earnings_proximity: "imminent",
      verdict: "WATCH",
      verdict_reason: "Q2 deliveries of 480K is in-line with consensus; the call will be binary on FSD regulatory progress and Optimus commercialisation timeline — any concrete Q4 2026 Optimus production date would be a positive catalyst with a 6-month news-free runway."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "Hyperscalers raised 2026 capex to $750B; Comfort Systems Q1 organic revenue +51% from data centre HVAC contracts; NVIDIA reframed AI as Revenue = Tokens per Watt x Available Gigawatts at GTC 2026.",
      instruments: "NVDA, MSFT, GOOGL, META, AMZN, AMD, Broadcom (AVGO), Vertiv (VRT), Comfort Systems (FIX), Vistra (VST), Constellation Energy (CEG), Palantir (PLTR)",
      highlights: [
        { name: "Vertiv (VRT)", change: "-5.33%", note: "Profit-taking after 86% YTD run ahead of July 29 earnings; pullback is mechanical, not thesis-breaking — order backlog in data centre power and cooling remains at multi-year highs. Condition for re-entry: Q2 showing backlog growth >30% YoY confirming hyperscalers have not deferred procurement." },
        { name: "Comfort Systems (FIX)", change: "n/a — not sourced this week", note: "Q1 organic revenue +51% YoY from data centre HVAC contracts confirms HVAC [heating, ventilation, air conditioning] contractors are paid regardless of which GPU vendor wins the AI chip war — non-discretionary, thesis-agnostic revenue." },
        { name: "Nvidia (NVDA)", change: "~-8%", note: "SOX bear market repricing; near-term risk is the AI revenue-capex gap widening; medium-term moat (training exclusively NVIDIA GPU-dependent) is intact pending custom silicon reaching training parity, which is not expected before 2028 on current trajectory." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "UNCHANGED",
      evidence: "NATO 3.5% GDP target confirmed at The Hague; Rheinmetall Q1 operating profit +17% with EUR 73B backlog; stock at EUR 990 vs 2026 peak EUR 2,008 — execution risk discount, not demand risk.",
      instruments: "Rheinmetall (RHM.DE), Safran (SAF.PA), Thales (HO.PA), ASML (ASML), Siemens (SIE.DE), VanEck Defence ETF",
      highlights: [
        { name: "Rheinmetall (RHM.DE)", change: "n/a — not sourced this week", note: "At EUR 990 vs 2026 peak EUR 2,008, the 50% drawdown reflects investors pricing delivery-timeline risk after the German government cancelled a ~EUR 15B shipbuilding project. The EUR 73B backlog is intact; thesis holds if national budget ratifications follow NATO's 3.5% GDP commitment through 2027." },
        { name: "ASML (ASML)", change: "n/a — not sourced this week", note: "Dual exposure: European strategic autonomy (EUV lithography monopoly) and AI trade (only maker of EUV [extreme ultraviolet lithography] machines for sub-7nm chips). SMIC AMBER signal is medium-term not immediate threat to ASML's moat premium." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "EUR/USD at 3-month high 1.1474 intraweek; ECB raised to 2.25% deposit rate in June (first hike since 2023); de-dollarisation most visible in commodity settlement corridors.",
      instruments: "Gold (XAU/USD), iShares Physical Gold ETF, WisdomTree Bitcoin ETP, MercadoLibre (MELI), Visa (V), Deutsche Boerse (DB1.DE), Interactive Brokers (IBKR)",
      highlights: [
        { name: "Gold (XAU/USD)", change: "n/a — not sourced this week", note: "Gold at $4,019/oz on July 14; Middle East tensions and central bank de-dollarisation reserve buying provide the structural bid. Condition: China, Russia, and Turkey central bank gold buying continues as a USD reserve hedge; falsifier is a hawkish Fed pivot triggering a USD strengthening cycle." },
        { name: "Interactive Brokers (IBKR)", change: "n/a — not sourced this week", note: "Up 35% YTD; benefits from professional clients moving money internationally as EUR/USD volatility and EUR strength create cross-currency investing opportunities — volumes rise as EUR/USD diverges from historical ranges." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "CONFIRMED",
      evidence: "EU Commission approved Novo Nordisk Wegovy pill July 15; US Medicare GLP-1 coverage started July 1 at $50/month copay; oral pill removes injection barrier that deterred ~40% of eligible patients.",
      instruments: "Novo Nordisk (NVO), Eli Lilly (LLY), UnitedHealth (UNH), HCA Healthcare (HCA), GE HealthCare (GEHC), Veeva Systems (VEEV), McKesson (MCK)",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "n/a — not sourced this week", note: "EU Wegovy pill approval (July 15) plus US Medicare coverage (July 1) creates a dual-channel expansion: EU oral market opens while US injectable market gains a new $50/month accessible tier. Condition: EU national reimbursement must follow EC approval within 12 months; falsifier is national payer refusal despite EC approval." },
        { name: "UnitedHealth (UNH)", change: "n/a — not sourced this week", note: "Medicare GLP-1 coverage increases UNH's per-member drug cost exposure; the mechanism: if GLP-1 reduces downstream cardiac and diabetes hospitalisations over 5 years, UNH's medical cost ratio [healthcare claims as % of premiums] improves, making GLP-1 coverage potentially cost-positive over a 5-year actuarial horizon." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "UNCHANGED",
      evidence: "Drewry WCI at $4,639/40ft (July 9); rates diverging by lane; Red Sea rerouting adding 12–14 days; Danaos dividend ex-date July 21 at $0.90/share signalling free cash flow sustainability.",
      instruments: "Danaos (DAC), Global Ship Lease (GSL), International Seaways (INSW), StealthGas (GASS), Tsakos Energy Navigation (TNP)",
      highlights: [
        { name: "Danaos (DAC)", change: "n/a — not sourced this week", note: "Ex-dividend date July 21 at $0.90/share — the dividend signals that free cash flow [revenue minus costs minus debt service] is sustainable at current charter rates [daily vessel rental price]. Container rates declining 3% week-on-week is a headwind but not a thesis break at current vessel utilisation levels." },
        { name: "Global Ship Lease (GSL)", change: "n/a — not sourced this week", note: "Up 50.45% trailing year; ~8% dividend yield [annual dividend as percentage of share price] provides income support; thesis holds if Red Sea rerouting maintains the structural demand boost from longer routes consuming more vessel-days per tonne of cargo shipped." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "WEAKENED",
      evidence: "Robinhood -4% on NASDAQ/crypto selloff; HOOD down 30% YTD vs IBKR up 35% YTD; retail volumes declining on fear; institutional equity inflows (ICI week July 8) strong but retail-facing platforms under pressure.",
      instruments: "Robinhood (HOOD), Interactive Brokers (IBKR), Visa (V), Blackstone (BX), Progressive (PGR), Berkshire Hathaway (BRK.A)",
      highlights: [
        { name: "Robinhood (HOOD)", change: "-4%", note: "NASDAQ selloff directly reduces retail equity and crypto trading volumes — both are primary revenue drivers for Robinhood's transaction-fee model. Thesis interruption, not thesis break; falsifier for WEAKENED: if fear resolves on Alphabet earnings (July 22) and NASDAQ recovers, retail volumes could snap back within 2 weeks." },
        { name: "Interactive Brokers (IBKR)", change: "n/a — not sourced this week", note: "Up 35% YTD driven by professional and international clients; daily average revenue trades [number of transactions generating fees] +47% YoY through May. The IBKR/HOOD divergence confirms the rotation is better described as professionalisation of self-directed investing rather than a broad retail participation surge." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "Philadelphia Semiconductor Index (SOX)",
      sector: "Semiconductors",
      headline: "SOX confirms bear market — down 20% from June peak, -11% in one week, worst weekly loss since March 2025",
      detail: "The SOX [Philadelphia Semiconductor Index — the 30 largest semiconductor companies] fell 11% in a single week, confirming a technical bear market defined as -20% from peak. The mechanism: investors who paid 35x forward P/E [price-to-earnings ratio] for chip names during the 105% March-June rally are unwinding as the capex-to-revenue gap [hyperscalers spending $725B but AI-attributable revenue not accelerating proportionally] widens. Intel, Marvell, and ARM are individually down >30% from peaks; Sandisk and Western Digital down >35%. This is a valuation compression from AI euphoria to something more fundamental — Blackwell [NVIDIA's latest GPU] orders continue, meaning it is not a demand collapse.",
      tag: "BEAR"
    },
    {
      num: "02",
      company: "Novo Nordisk (NVO)",
      sector: "Healthcare / GLP-1",
      headline: "EU approves Wegovy pill July 15 — same week US Medicare GLP-1 coverage starts — dual barrier removal",
      detail: "Two structural barriers to mass-market GLP-1 [appetite-reducing hormone drug] adoption were removed in the same week: the injection barrier (EU pill approval removes it) and the cost barrier (US Medicare at $50/month). The mechanism is sequential: the oral pill expands the eligible patient pool by ~40% (those who declined injectables); Medicare coverage makes the drug financially accessible to the 65+ demographic with the highest comorbidity burden [additional diseases caused by obesity]. If EU national reimbursement follows EC approval (typical 12–18 month lag), the combined addressable patient market doubles within 2 years. Novo Nordisk is the only company with manufacturing scale to meet this expanded demand.",
      tag: "BULL"
    },
    {
      num: "03",
      company: "SMIC / Huawei",
      sector: "Semiconductors / China",
      headline: "SMIC confirms 5nm pilot production for Huawei Ascend 950 using DUV — yield 20–40%, AMBER threshold crossed",
      detail: "SMIC has entered pilot production for a 5nm-class process using DUV [deep ultraviolet lithography — older ASML technology, not export-controlled EUV] for Huawei's Ascend 950 AI chip targeting 1 PetaFLOP of FP8 compute. The structural implication: if yield reaches >60% (currently 20–40%), China removes its dependency on imported advanced chips for domestic AI training workloads. At current 20–40% yield, this is not a commercial-scale threat but it crosses the threshold from theoretical to demonstrated feasibility. China aims to boost 7nm/5nm output fivefold in two years (SMIC + Hua Hong combined). ASML and Nvidia carry geopolitical monopoly premiums — these premiums compress if Chinese production scales.",
      tag: "WATCH"
    },
    {
      num: "04",
      company: "US Trade Policy",
      sector: "Macro / Policy",
      headline: "Section 122 10% tariff expires July 24 with no replacement finalised — effective tariff rate drops from ~13% to ~7.2%",
      detail: "The Section 122 blanket import surcharge expires by statutory 150-day clock on July 24. No congressional extension bill is pending. The proposed Section 301 replacement (12.5% on 46 countries) had a public hearing July 7 but no finalisation date. The practical consequence: importers face a pricing decision in a potential 5–7 day window of near-zero incremental tariffs between Section 122 expiry and Section 301 implementation. Manufacturers who priced products with the 10% floor built in (to protect margins) are now in a margin-versus-market-share decision without knowing what replaces it. The reversal condition: if Section 301 finalises quickly and rolls in without a gap, market disruption is minimised.",
      tag: "WATCH"
    },
    {
      num: "05",
      company: "China",
      sector: "Trade / EM Macro",
      headline: "China Q2 GDP 4.3% (missed 4.5%) while June exports surged 27% YoY — weakest domestic economy, strongest export machine",
      detail: "The paradox deepens: China missed its GDP target with the weakest quarterly growth since 2022 — urban fixed-asset investment [money spent on factories and buildings] down 5.7% in H1 — while simultaneously posting +27% YoY export growth in June, fastest since October 2021, driven by AI hardware, rare earths, autos, and ships. The mechanism is capital misallocation: investment flows to export-oriented industries rather than domestic consumption sectors, widening the trade surplus (EU surplus widened 24% in H1) and accelerating EU/US retaliation risk. The Politburo's late-July meeting is the critical signal: targeted domestic stimulus would begin closing the domestic demand gap; no stimulus would extend the export-led model and trade tension.",
      tag: "WATCH"
    },
    {
      num: "06",
      company: "Apple vs Nvidia",
      sector: "Technology",
      headline: "Apple briefly overtakes Nvidia as world's most valuable company — mega-cap rotation, not fundamental catalyst",
      detail: "Apple's +6% week while Nvidia fell ~8% created a momentary market-cap crossover: Nvidia at $4.84T vs Apple at $4.88T intraday on July 17. The mechanism is flow-mechanical: investors rotating from the highest-momentum AI chip play (Nvidia) to the largest consumer hardware company ahead of July 30 earnings, without a new fundamental development in either direction. This rotation has happened three times in the past 12 months and has not been sustained — Apple has not held market-cap leadership for more than 2 weeks each time. The condition for Apple to sustain leadership is Q2 earnings (July 30) showing iPhone unit volume growth, not just average selling price improvement from AI subscription bundling.",
      tag: "NEUTRAL"
    },
    {
      num: "07",
      company: "CrowdStrike (CRWD)",
      sector: "Cybersecurity",
      headline: "CrowdStrike +8.33% on cooling CPI — cybersecurity budgets structurally decoupled from macro softening",
      detail: "CrowdStrike rallied 8.33% as cooling June CPI reduced the discount rate applied to high-multiple growth stocks. The fundamental mechanism: the cost of a cyber breach ($4.45M industry average per incident) structurally exceeds the annual subscription cost of a platform like CrowdStrike Falcon, making renewal non-discretionary for enterprises above a certain size. Benchmark raised its price target to $230 from $195, flagging AI-driven security demand across AIDR [AI-Driven Detection and Response], identity management, and SIEM [Security Information and Event Management — log monitoring and threat detection]. This is one of the few pure-growth names with both a fundamental revenue mechanism and macro defensiveness simultaneously.",
      tag: "BULL"
    },
    {
      num: "08",
      company: "SK Hynix / Micron",
      sector: "Memory Semiconductors",
      headline: "Micron overtakes Samsung on HBM allocations — three-way HBM memory war reshapes NVIDIA supply chain",
      detail: "SK Hynix holds 56.4% HBM [high-bandwidth memory — stacked memory delivering 10x the bandwidth of standard DRAM, required for AI training GPUs] market share (Q1 2026), with Micron overtaking Samsung at approximately 20% vs Samsung's 17%. Samsung's HBM market share collapsed from 41% (Q2 2024) to 17% (Q2 2025) due to yield problems and failure to pass Nvidia qualification tests. The mechanism: each HBM wafer Micron ships that Samsung loses is a direct revenue transfer — at $13–17/GB pricing, this is a multi-billion-dollar annual shift. The condition for Samsung recovery: HBM4 qualification by Nvidia in H2 2026; falsifier is if Samsung fails HBM4 yields, extending market share loss into 2027.",
      tag: "WATCH"
    }
  ],

  risers: [
    {
      rank: 1,
      name: "Powell Industries",
      ticker: "POWL",
      exchange: "NASDAQ",
      market_cap: "~$3.5B",
      thesis: "AI Infrastructure",
      proximity: "Direct supplier",
      weekly_change: "n/a — not sourced this week",
      why: "Powell Industries makes electrical switchgear [high-voltage circuit breakers and distribution equipment] and busways [enclosed electrical conductors] that are mission-critical for powering data centres — every rack of AI GPUs must connect to utility power through switchgear equipment. With AI data centres moving from 100kW to 750kW per rack in 2026, the switchgear requirements scale proportionally and cannot be substituted. Unlike GPU manufacturers facing ROI scrutiny from hyperscalers, Powell is paid by the data centre construction contractor regardless of which chip vendor wins the GPU war.",
      catalyst: "NVIDIA CEO's GTC 2026 reframing of AI economics as Revenue = Tokens per Watt x Available Gigawatts has made electrical infrastructure a first-order procurement priority; Powell's reported ~20-month order backlog signals demand visibility through Q2 2028.",
      revenue_growth: "~+80% YoY — sourced from data centre construction cycle reports; specific Q2 2026 figure not published this session",
      analyst_coverage: "~6 analysts — under-covered relative to company size",
      thesis_killer: "If hyperscalers begin sourcing electrical distribution in-house or if data centre construction pauses materially beyond the $130B already-postponed projects."
    },
    {
      rank: 2,
      name: "Hensoldt AG",
      ticker: "HAG.DE",
      exchange: "XETRA",
      market_cap: "~EUR 5B (~$5.7B)",
      thesis: "Europe's Strategic Autonomy",
      proximity: "Direct supplier",
      weekly_change: "n/a — not sourced this week",
      why: "Hensoldt is Germany's primary defence electronics company supplying radar, optronics, and electronic warfare systems [jamming and signal disruption technology] to the Eurofighter, Germany's F-35 variant, and the Eurodrone program. Unlike Rheinmetall (heavy weapons), Hensoldt supplies the sensor layer — the eyes and ears of military platforms — which requires European production under NATO strategic autonomy requirements and cannot be sourced from US/UK suppliers without political restrictions. Under NATO's 3.5% GDP spending commitment, Bundeswehr [Germany's armed forces] must expand situational awareness [threat detection] systems as the highest-priority gap.",
      catalyst: "Germany's EUR 500B special defence fund committing to sensor upgrades across land, air, and naval systems in 2026–2028; Hensoldt is the sole qualified domestic supplier for the FCAS [Future Combat Air System] sensor suite, with the contract award expected in 2026.",
      revenue_growth: "Not disclosed this session — Q2 2026 figures not yet reported",
      analyst_coverage: "~8 analysts — under-covered relative to strategic position",
      thesis_killer: "If Germany's coalition government delays the EUR 500B special fund disbursements beyond 2027, deferring Hensoldt's order-to-revenue conversion and causing multiple compression."
    }
  ],

  ai_trade: {
    status: "CAUTION",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings — a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "GREEN",
        finding: "All four hyperscalers committing at or above stated levels: Amazon $200B, Google $185B, Meta $125–145B (raised midyear), Microsoft $120B+ — combined ~$725B, up 77% from $410B in 2025. No hedge language sourced this week.",
        implication: "—"
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "AMBER",
        finding: "HBM3E contract pricing at $13–17/GB as of Q1 2026, down from peak of $17–20/GB in H1 2025. HBM annual revenue growing strongly (+70% YoY to ~$60B in 2026) but per-GB pricing has plateaued off peak. DRAM contract prices continue rising on tight supply but HBM pricing plateau is the AMBER trigger.",
        implication: "SK Hynix and Samsung HBM gross margin [revenue minus production cost, as percentage of revenue] per GB may compress modestly in H2 2026 — a pricing maturity indicator that typically precedes guidance conservatism 1–2 earnings cycles out."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "The SOX bear market this week is the market's real-time judgement that the capex-to-revenue gap is widening, not closing. Hyperscalers guide to $725B combined 2026 capex but AI-attributable cloud revenue acceleration has not been confirmed in Q2 (Alphabet July 22 is the first test of the cycle).",
        implication: "If Alphabet Q2 shows Google Cloud AI revenue growing proportionally to the $185B capex commitment, AMBER moves back to GREEN. If it disappoints with capex maintained, AMBER moves toward RED and the SOX bear market has further to run."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts — distinguishing them tells you if the trade has runway or is running on narrative.",
        signal: "AMBER",
        finding: "Microsoft P/E compressed to 23.5x (was 30x+ earlier in 2026) while earnings estimates have been relatively stable — price decline driving multiple compression, not estimate cuts. Nvidia forward P/E compressed to 22.7x from ~35x at June peak. Both are technically sentiment corrections, not fundamental deterioration.",
        implication: "Multiple compression without estimate cuts creates a better entry point for fundamental buyers IF Alphabet Q2 (July 22) validates the AI revenue thesis. A genuine estimate cut cycle following Q2 earnings would upgrade this to RED."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately. Current benchmark: SMIC 7nm, Huawei Ascend 910C.",
        signal: "AMBER",
        finding: "SMIC has achieved 5nm-class pilot production using DUV [deep ultraviolet — not EUV, so not export-controlled] for Huawei Ascend 950; yield at 20–40% vs TSMC's typical >90%. China aiming to boost 7nm/5nm output fivefold in two years. Huawei Ascend 950 targets 1 PetaFLOP FP8 — competitive with mid-range Nvidia H100.",
        implication: "Not a 2026 commercial threat at 20–40% yield. But pilot confirmation that DUV-based 5nm is achievable (not just theoretical) compresses the AMBER threshold — if yield scales to >60% in 2027, ASML and Nvidia geopolitical moat premiums begin to compress."
      }
    ]
  },

  gut_checks_retro: [],

  semis: {
    status: "WATCH",
    regions: [
      {
        region: "Korea",
        info: "Korea supplies ~95% of global HBM [high-bandwidth memory]. Production disruption propagates to NVIDIA allocation within 4-6 weeks. Samsung strike losing share to SK Hynix = rotation within sector, not a sector exit.",
        signal: "GREEN",
        finding: "SK Hynix holds 56.4% HBM market share (Q1 2026); Micron overtook Samsung (~20% vs Samsung ~17%); no production disruption reported this week. Samsung working on HBM4 re-qualification for H2 2026 — competitive pressure, not supply disruption.",
        implication: "—"
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "No BOJ surprise this week; TSMC Kumamoto ramp proceeding on schedule; Tokyo Electron order trends not reported this session. Stable macro environment.",
        implication: "—"
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation — affects all advanced chip production globally.",
        signal: "AMBER",
        finding: "SMIC achieved 5nm pilot production using DUV for Huawei Ascend 950 at 20–40% yield; China aiming to boost 5nm/7nm output fivefold in two years. No TSMC CoWoS disruption; CoWoS targeting 140,000 wafers/month by end of 2026, with Amkor/ASE handling ~80,000 wpm overflow.",
        implication: "SMIC 5nm pilot is a medium-term ASML moat concern, not a 2026 production threat; if yield scales to >60% in 2027, it becomes a pricing pressure event for ASML's geopolitical premium in its stock valuation."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "Intel's Fab 52 in Arizona entered high-volume manufacturing using the Intel 18A (1.8nm-class) process — first US fab to surpass 2nm threshold using ASML High-NA EUV. CHIPS Act disbursements on track. Section 122 tariff expiry July 24 creates near-term input cost uncertainty for US fabs importing equipment and materials.",
        implication: "Intel 18A milestone is structurally positive for US semiconductor independence and validates the CHIPS Act investment thesis; Section 122 expiry creates a short-term pricing disruption for fab supply chains relying on imported equipment."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "SMIC confirmed 5nm-class production using DUV multi-patterning (ASML-supplied DUV machines, not EUV), showing that existing DUV equipment can reach lower nodes than previously assumed. SMEE's own tools remain at ~28nm class. The AMBER is for the SMIC+DUV system-level advance, not SMEE itself.",
        implication: "ASML EUV moat premium [extra valuation from being the sole EUV supplier] remains intact for now. If SMIC scales DUV-based 5nm to commercial volumes, it compresses ASML's pricing power on future DUV upgrade cycles by showing EUV is not an absolute prerequisite for all customers."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "AMBER",
        finding: "Micron overtook Samsung on NVIDIA allocations at approximately 20% market share vs Samsung's 17%; SK Hynix dominant at 56.4%. Samsung's HBM3E yield problems persist; Samsung working on HBM4 re-qualification expected H2 2026.",
        implication: "For SK Hynix: stable near-term but pricing power erodes as the duopoly [SK Hynix + Samsung] that supported premium pricing becomes a three-way market. For Samsung: failing HBM4 qualification would extend market share loss into 2027 and trigger a further Micron allocation gain."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "Custom silicon (Google TPU Ironwood, AWS Trainium 3, Microsoft Maia 200, Meta MTIA) is growing at 44.6% CAGR but remains confined to inference [running models] workloads — AI model training still requires NVIDIA GPUs due to CUDA software ecosystem lock-in and flexibility requirements. None of the four custom chips are available externally — captive to their builders only.",
        implication: "—"
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch (positive for hyperscalers) but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC targeting 140,000 CoWoS wafers/month by end of 2026; Amkor and ASE handling ~80,000 wpm overflow. Total 2026 CoWoS demand estimated at ~1 million wafers. No credible alternative at competitive cost and volume confirmed this session — Samsung and Amkor are overflow capacity, not substitutes.",
        implication: "—"
      }
    ]
  }

};
