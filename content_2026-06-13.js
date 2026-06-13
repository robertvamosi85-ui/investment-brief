const BRIEF = {

  meta: {
    date: "Saturday, June 13, 2026",
    eurusd: "1.1574",
    eurusd_direction: "rising",
    eurusd_driver: "EUR/USD rose ~0.5% this week, with the pair trading between 1.1508 and 1.1586, driven by a weaker USD as risk sentiment improved sharply on US-Iran peace deal optimism and the ECB's surprise rate hike to 2.25%, which signalled that European monetary policy is now diverging upward from the Fed's on-hold stance.",
    eurusd_outlook: "Next week the pair may test 1.16 if Iran deal closes formally; a USD position holder faces ~1% FX drag versus EUR if the deal holds, while a deal collapse would reverse EUR gains swiftly given oil-inflation linkage.",
    eurusd_weekly_change: "+0.5%"
  },

  vitals: {
    fear_greed: { value: 37, last_week: 44, label: "Fear", interpretation: "The index dropped from 44 to 37 this week as early Iran strike fears and Broadcom's disappointing AI chip guidance rattled markets Monday-Tuesday. The late-week peace deal optimism partially offset sentiment damage but was not enough to drag the index back into neutral territory. A reading of 37 means most investors are in defensive mode — they are selling risk assets on uncertainty rather than buying dips." },
    vix: { value: 17.7, last_week: 19.2, label: "Calm", interpretation: "VIX closed the week near 17.7, falling sharply from an intraday peak of 19.25 mid-week as the Iran peace deal headline drove a 7.9% surge in the PHLX Semiconductor index [Philadelphia Semiconductor Index — the benchmark for chipmaker stocks]. A VIX [CBOE Volatility Index — measures expected 30-day S&P 500 price swings] below 20 is considered a calm market; the mid-week spike above 19 reflected genuine uncertainty about Middle East escalation, not panic." },
    put_call: { value: 0.56, last_week: 0.68, label: "Bullish tilt", interpretation: "The CBOE Equity Put/Call ratio [measures how many protective puts traders buy versus bullish calls — below 0.7 signals net bullish positioning] fell sharply from 0.68 to 0.56, reflecting a decisive rotation into calls as the peace deal narrative gained traction Thursday-Friday. A ratio of 0.56 is well into bullish territory, suggesting options traders are positioning for continued upside, especially in rate-sensitive growth stocks." }
  },

  regime: {
    title: "Peace Premium meets ECB Surprise",
    description: "The dominant narrative this week was geopolitical risk repricing: markets endured a sharp Iran-escalation scare Monday-Tuesday (Nasdaq fell ~4% from its Friday close), then reversed violently Thursday-Friday when Trump called off strikes and a peace deal looked imminent. Overlaid on that was the ECB's first rate hike since 2023, which supported EUR and complicated the inflation-vs-growth calculus for European equities. The regime favours energy transition and shipping (lower oil risk premium), AI infrastructure (CapEx intact), and European financials (steeper yield curve). Headwinds are heaviest on expensive US tech names reliant on AI chip demand continuity after Broadcom's guidance miss.",
    tailwinds: ["Iran peace deal removes oil risk premium, boosts consumer spending outlook", "ECB hike confirms European macro stability, supports EUR-denominated assets", "SpaceX IPO absorbs $75B capital and lifts private-tech risk appetite"],
    headwinds: ["Broadcom AI chip guidance miss raises near-term semi revenue uncertainty", "ECB hike makes EUR fixed income more competitive vs equities", "US Fed on hold with Kevin Warsh era uncertainty over rate path"]
  },

  league: {
    winners: [
      { rank: 1, name: "SpaceX (SPCX)", sector: "Aerospace / Space", change: "+19.0%", reason: "Historic IPO debut on June 12 — priced at $135, closed at $161 on the largest IPO ever ($75B raised), fuelled by Starlink ARPU growth and Starship launch cadence" },
      { rank: 2, name: "Goldman Sachs (GS)", sector: "Financials", change: "+4.2%", reason: "Benefited from peace-deal risk-on rally and steeper yield curve expectations from ECB hike, boosting trading and M&A pipeline optimism" },
      { rank: 3, name: "AMD (AMD)", sector: "Semiconductors", change: "+3.8%", reason: "Recovered strongly from Monday selloff as MI300 series [AMD's AI accelerator chips for data center training] demand narrative held firm and peace-deal rally lifted the entire chip complex" },
      { rank: 4, name: "Verizon (VZ)", sector: "Telecom", change: "+3.6%", reason: "Rate-sensitive defensive name rallied as Treasury yields fell on Iran peace deal; telecom infrastructure linked to SpaceX satellite broadband narrative" },
      { rank: 5, name: "JPMorgan (JPM)", sector: "Financials", change: "+3.2%", reason: "Peace deal and ECB hike narrative pushed financials globally; JPM also benefited from SpaceX IPO deal fees as a lead underwriter" },
      { rank: 6, name: "Palantir (PLTR)", sector: "AI / Software", change: "+3.1%", reason: "Government AI contract momentum continues; peace deal potentially opens new defence-tech intelligence contracts in the region" },
      { rank: 7, name: "Novo Nordisk (NVO)", sector: "Healthcare / GLP-1", change: "+2.8%", reason: "Wegovy pill prescriptions tracking ahead of expectations two months after US launch; Medicare Part D obesity coverage pilot boosted long-term pricing visibility" },
      { rank: 8, name: "UnitedHealth (UNH)", sector: "Healthcare / Managed Care", change: "+2.5%", reason: "Shares hit new 52-week high near $413 on continued recovery from Q1 concerns; Medicare Advantage normalisation appears on track" },
      { rank: 9, name: "Constellation Energy (CEG)", sector: "Nuclear / Power", change: "+2.3%", reason: "Nuclear power-to-AI-data-center thesis intact; oil price collapse on Iran deal paradoxically boosted nuclear's relative value as stable baseload" },
      { rank: 10, name: "Global Ship Lease (GSL)", sector: "Shipping / Container", change: "+2.1%", reason: "Iran deal and Strait of Hormuz reopening prospect reduces geopolitical charter rate [daily rental price for one ship] risk premium; $917M fleet renewal order signals management confidence" },
      { rank: 11, name: "Interactive Brokers (IBKR)", sector: "Fintech / Brokerage", change: "+2.0%", reason: "SpaceX IPO drove record retail trading volumes; brokerage platforms benefited from surge in new account openings and options activity" },
      { rank: 12, name: "Robinhood (HOOD)", sector: "Fintech / Brokerage", change: "+1.9%", reason: "SpaceX IPO access narrative drove app downloads; retail investor FOMO [fear of missing out] from SpaceX debut boosted active users metric" },
      { rank: 13, name: "Alphabet (GOOGL)", sector: "Mega-Cap Tech / AI", change: "+1.8%", reason: "Recovered from chip-sector selloff; Google Cloud AI revenue growth and TPU [Tensor Processing Unit — Google's custom AI chip] progress continued without negative headlines" },
      { rank: 14, name: "Hannover Re (HNR1.DE)", sector: "European Insurance / Re", change: "+1.7%", reason: "Iran deal lowers catastrophic event risk in the region; reinsurance sector benefited from lower tail-risk repricing" },
      { rank: 15, name: "MercadoLibre (MELI)", sector: "EM / Latin America E-Commerce", change: "+1.6%", reason: "Brazil macro stabilisation and accelerating Mercado Pago fintech adoption drove upward revision sentiment ahead of Q2 results" },
      { rank: 16, name: "Blackstone (BX)", sector: "Alternative Asset Management", change: "+1.5%", reason: "Risk-on regime and SpaceX IPO lifted all private-equity sentiment; Blackstone's real-estate and AI infrastructure funds saw renewed inflow interest" },
      { rank: 17, name: "Booking Holdings (BKNG)", sector: "Travel / Consumer", change: "+1.4%", reason: "Oil price decline on Iran deal reduces travel cost inflation; summer European travel bookings tracking ahead of 2025" },
      { rank: 18, name: "Safran (SAF.PA)", sector: "EU Aerospace / Defence", change: "+1.3%", reason: "LEAP engine demand from Boeing and Airbus backlog [signed contracts not yet completed — pre-sold revenue] continues to underpin multi-year earnings visibility" },
      { rank: 19, name: "Progressive (PGR)", sector: "US Insurance / Auto", change: "+1.2%", reason: "Lower oil prices reduce auto claims inflation; personal auto underwriting margins improved with declining accident frequency" },
      { rank: 20, name: "Trip.com (TCOM)", sector: "EM / Asia Travel", change: "+1.1%", reason: "Chinese outbound travel accelerating with visa liberalisation from Japan and Europe; peace deal reduces geopolitical travel-risk premium" }
    ],
    losers: [
      { rank: 1, name: "Broadcom (AVGO)", sector: "Semiconductors / AI Chips", change: "-14.0%", reason: "Q3 AI chip sales guidance of $16B missed $17.2B analyst estimate; full-year AI forecast left unchanged, triggering broadest chip sector selloff since April 2025" },
      { rank: 2, name: "Nike (NKE)", sector: "Consumer / Apparel", change: "-4.1%", reason: "Tariff-driven cost inflation and weak China sales weighed on guidance; CEO restructuring narrative unconvincing to investors waiting for revenue stabilisation" },
      { rank: 3, name: "NVIDIA (NVDA)", sector: "Semiconductors / AI", change: "-3.2%", reason: "Caught in Broadcom-driven semi selloff early week; recovered partially on Iran deal but ended week lower as guidance uncertainty created a buyer vacuum" },
      { rank: 4, name: "Intel (INTC)", sector: "Semiconductors / Foundry", change: "-3.1%", reason: "Fell 8%+ on Monday amid Broadcom-driven chip sector selloff; recovery partial as foundry turnaround narrative still lacks catalyst" },
      { rank: 5, name: "Tesla (TSLA)", sector: "EV / Autonomy", change: "-2.8%", reason: "EV demand softness in China and Musk distraction concerns resurfaced; autonomous vehicle timeline uncertainty still weighing on valuation premium" },
      { rank: 6, name: "Microsoft (MSFT)", sector: "Mega-Cap Tech / Cloud", change: "-2.6%", reason: "Continued to slide on Xbox restructuring concerns and Azure AI ROI [return on investment] debate; -17% YTD despite AI infrastructure scale" },
      { rank: 7, name: "Apple (AAPL)", sector: "Mega-Cap Tech / Consumer", change: "-2.4%", reason: "Fell on China regulatory concerns over AI App Store policies; iPhone upgrade cycle momentum stalling without a compelling new hardware catalyst" },
      { rank: 8, name: "Merck (MRK)", sector: "Pharma / Healthcare", change: "-1.8%", reason: "Pipeline concerns as Keytruda biosimilar [lower-cost generic version of a biologic drug] competition timeline crystallised; no near-term catalyst to offset" },
      { rank: 9, name: "Rheinmetall (RHM.DE)", sector: "EU Defence", change: "-1.6%", reason: "Iran peace deal narrative directly reduces European defence-spending urgency perception; sector experienced profit-taking on risk-on day" },
      { rank: 10, name: "LVMH (MC.PA)", sector: "Luxury / Consumer", change: "-1.5%", reason: "Weak Chinese luxury demand persisted; Chinese consumer confidence still depressed by property market distress" },
      { rank: 11, name: "Amazon (AMZN)", sector: "Mega-Cap Tech / Cloud", change: "-1.4%", reason: "EU cloud procurement review and FTC antitrust trial overhang weighed; $17.5B new debt to fund AI capex highlighted balance sheet leverage concern" },
      { rank: 12, name: "Meta (META)", sector: "Mega-Cap Tech / AI", change: "-1.3%", reason: "China regulatory risk to AI strategy elevated; internal restructuring costs creating near-term margin uncertainty despite long-term AI thesis intact" },
      { rank: 13, name: "Starbucks (SBUX)", sector: "Consumer / Restaurants", change: "-1.2%", reason: "China same-store sales [revenue from locations open at least one year — a core retail health metric] continued to disappoint; US traffic recovery slower than guided" },
      { rank: 14, name: "Ulta Beauty (ULTA)", sector: "Consumer / Retail", change: "-1.1%", reason: "AI-generated beauty content reducing in-store discovery traffic; competition from drugstore private label accelerating" },
      { rank: 15, name: "SanDisk (SNDK)", sector: "Semiconductors / Storage", change: "-1.0%", reason: "Profit-taking after leading YTD with +160% gain; NAND flash [a type of non-volatile memory used in SSDs and USB drives] supply loosening fears emerged on spot price data" },
      { rank: 16, name: "Celsius Holdings (CELH)", sector: "Consumer / Beverages", change: "-0.9%", reason: "Distribution growth plateau concerns as Pepsi partnership matures; competition in functional beverages intensifying" },
      { rank: 17, name: "Toyota (TM)", sector: "Autos / Consumer", change: "-0.8%", reason: "Yen strengthened slightly on risk-off early week hurting export earnings; EV transition timeline uncertainty weighs despite hybrid strength" },
      { rank: 18, name: "Wingstop (WING)", sector: "Consumer / Restaurants", change: "-0.7%", reason: "Chicken wing commodity cost inflation from avian flu pressures persisted; same-store sales [revenue from locations open at least one year] growth decelerating" },
      { rank: 19, name: "Pure Storage (PSTG)", sector: "Tech / Storage", change: "-0.6%", reason: "Caught in chip sector sentiment drag early week despite solid AI storage demand narrative; no specific negative catalyst" },
      { rank: 20, name: "Chewy (CHWY)", sector: "Consumer / Pet E-Commerce", change: "-0.5%", reason: "Discretionary consumer spending caution persisted; pet food inflation reducing basket sizes despite subscriber loyalty" }
    ]
  },

  sectors: [
    { name: "US Financials", change: "+2.8%", direction: "up", driver: "Peace deal risk-on rally, SpaceX IPO deal fees, ECB hike signals higher-for-longer rates globally boosting bank NIM [spread between what bank earns on loans vs pays on deposits]" },
    { name: "US Energy", change: "+1.9%", direction: "up", driver: "Downstream names rallied on lower oil input costs; upstream partially recovered on peace deal uncertainty; Strait of Hormuz reopening boosts LNG flow optimism" },
    { name: "US Healthcare", change: "+1.7%", direction: "up", driver: "GLP-1 [weight-loss drug class] pipeline optimism, UNH recovery to 52-week high, Medicare Part D obesity coverage pilot boosting Novo Nordisk" },
    { name: "US Real Estate", change: "+1.2%", direction: "up", driver: "Treasury yields fell on Iran deal, boosting rate-sensitive REITs [Real Estate Investment Trusts]; data center REITs benefited from AI infrastructure demand" },
    { name: "US Utilities", change: "+1.1%", direction: "up", driver: "Rate-sensitive sector benefited from yield decline on peace deal; nuclear power names Vistra and Constellation stable on long-term hyperscaler contracts" },
    { name: "US Consumer Disc.", change: "+0.8%", direction: "up", driver: "Peace deal lowers energy cost outlook boosting consumer spending confidence; travel names surged but apparel and restaurant names lagged on tariff concerns" },
    { name: "US Communication Services", change: "+0.6%", direction: "up", driver: "Alphabet recovered; SpaceX IPO boosted satellite communication sentiment; streaming names Netflix and Spotify held firm" },
    { name: "US Technology", change: "-0.5%", direction: "down", driver: "Broadcom guidance miss and Intel weakness offset NVDA/AMD recovery; net seller week for tech despite Friday rally" },
    { name: "US Industrials", change: "+0.3%", direction: "up", driver: "GE and HEICO aerospace demand intact; defence names held firm despite geopolitical de-escalation" },
    { name: "US Consumer Staples", change: "+0.2%", direction: "up", driver: "Defensive positioning partial unwind as peace deal emerged; Walmart and TJX held gains" },
    { name: "US Materials", change: "+0.1%", direction: "up", driver: "Mixed: copper held on China stimulus hopes but rare earth stocks slipped; gold producers flat as gold held $2,300 zone" },
    { name: "EU Defence", change: "-1.2%", direction: "down", driver: "Iran peace deal triggered profit-taking in the sector that led European markets YTD; Rheinmetall fell 1.6%; sector consolidating after massive 2025 run" },
    { name: "EU Banks", change: "+1.8%", direction: "up", driver: "ECB rate hike to 2.25% directly improves NIM [spread between what bank earns on loans vs pays on deposits] for Eurozone banks; Commerzbank, Santander, BNP all rallied" },
    { name: "EU Industrials", change: "+0.5%", direction: "up", driver: "Siemens and Knorr-Bremse stable on infrastructure order books; defence-industrial rotation mixed on geopolitical de-escalation" },
    { name: "EU Luxury", change: "-0.8%", direction: "down", driver: "LVMH and broader luxury fell on persistent weak China demand and EUR strength reducing non-EUR tourists' purchasing power in Europe" },
    { name: "EU Autos", change: "-0.3%", direction: "down", driver: "EUR strength headwind for exporters; EV transition costs ongoing; China market share loss to BYD and NIO continued" },
    { name: "EU Insurance", change: "+0.9%", direction: "up", driver: "Iran deal reduces catastrophic tail risk; Allianz and Muenchener Rueck benefited from higher rates and reduced Middle East loss potential" }
  ],

  flows: [
    { label: "US Equities", amount: "+$6.7B", direction: "in", pct: 58, note: "Moderate inflows driven by SpaceX IPO demand and peace deal risk-on; technology sub-sector saw net outflows offset by financials and healthcare inflows" },
    { label: "European Equities", amount: "+$2.1B", direction: "in", pct: 42, note: "ECB rate hike attracted bond-equity rotation into financials; defence sector ETFs saw modest outflows on Iran de-escalation narrative" },
    { label: "EM Equities", amount: "+$1.4B", direction: "in", pct: 38, note: "Latin America (MercadoLibre, ADECOAGRO) and India saw selective inflows; China flows remained muted on regulatory uncertainty and property sector overhang" },
    { label: "Gold & Commodities", amount: "-$0.8B", direction: "out", pct: 32, note: "Oil price collapse on Iran deal drove commodity fund outflows; gold held above $2,300 but saw modest selling as risk appetite improved" },
    { label: "Fixed Income", amount: "+$15.7B", direction: "in", pct: 65, note: "Strong inflows into global bonds [debt securities] as ECB hike and Iran yield-curve moves attracted duration buyers; Treasury yields fell on peace deal reducing inflation premium" },
    { label: "Cash / Money Markets", amount: "+$9.2B", direction: "in", pct: 72, note: "Elevated cash positioning reflects genuine uncertainty: traders await confirmed Iran deal signing before deploying fully into risk; money market [short-term, near-cash instruments] rates still attractive at ~4.8%" }
  ],

  trends: [
    { num: "01", title: "AI infrastructure entering the physical world", detail: "The AI compute buildout is now visibly physical: TSMC is doubling CoWoS [Chip-on-Wafer-on-Substrate — advanced semiconductor packaging technology] capacity to 130k wafers/month by end 2026, hyperscalers are collectively committing $725B in 2026 capex, and Vistra/Constellation are signing multi-decade nuclear PPA [Power Purchase Agreements] with AWS and Meta. The semiconductor supply chain is building real-world infrastructure — fabs, data centers, power plants, cooling systems — at a pace not seen since the internet buildout of the late 1990s.", status: "CONFIRMED", evidence: "SpaceX IPO raises $75B partly to fund Starlink ground-station AI compute infrastructure; TSMC CoWoS expanding at 80% CAGR [Compound Annual Growth Rate — year-over-year pace of growth].", type: "structural" },
    { num: "02", title: "Europe's strategic autonomy moment", detail: "Europe's defence-industrial complex received another massive order week: Rheinmetall booked ~1.9B EUR in new orders including a 920M EUR Romanian maritime contract and 1.015B EUR Bundeswehr [German federal armed forces] transport vehicle deal. The EU ReArm programme is translating into multi-year backlog [signed contracts not yet completed] that extends revenue visibility to 2030+. However, this week's Iran peace deal caused sector profit-taking — a pattern likely to repeat on each geopolitical de-escalation news.", status: "CONFIRMED", evidence: "Rheinmetall order backlog approaching 73B EUR; EU ReArm programme spending commitments reaffirmed by new governments across Poland, Romania, and Baltic states.", type: "structural" },
    { num: "03", title: "Dollar hegemony softening", detail: "The DXY [US Dollar Index — measures USD vs basket of major currencies] fell to ~99.8 this week, driven by USD selling on Iran peace deal and risk-on sentiment. EUR/USD traded at 1.1574. The ECB's rate hike to 2.25% — its first since 2023 — is now actively competing with USD-denominated yields for global capital. The ECB published its June 2026 international role of the euro report this week, signalling institutional acknowledgment that EUR's reserve currency role is being formally tracked.", status: "CONFIRMED", evidence: "ECB hikes to 2.25%; EUR/USD at 1.1574 near 12-month highs; ECB 2026 International Role of the Euro report published this week as a formal strategic signal.", type: "structural" },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", detail: "Novo Nordisk's Wegovy pill [oral semaglutide for obesity treatment] is tracking as the strongest-ever GLP-1 volume launch in the US, reaching over 2 million total prescriptions since January 2026 launch with 1.3 million in Q1 alone. Medicare Part D obesity coverage pilot starting July 1 will dramatically expand addressable market. Eli Lilly's Foundayo [oral GLP-1 competitor] launched in April is competing but Novo's prescription share remains 65% of new scripts. The downstream implications for surgical volumes (HCA Healthcare) and food manufacturers are beginning to show in earnings revisions.", status: "CONFIRMED", evidence: "Wegovy pill Q1 prescriptions 1.3M; Medicare obesity coverage pilot launching July 1 2026; Novo shares +14% in past month on strong commercial execution.", type: "structural" },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", detail: "The week's dominant shipping news was the US-Iran peace deal prospect reducing Strait of Hormuz risk — paradoxically a near-term headwind for charter rates [daily rental price for one ship] if it removes the geopolitical risk premium. However, Global Ship Lease's $917M fleet renewal order — buying 10 next-generation containerships with multi-year charters delivering ~$665M in Adjusted EBITDA [raw operating profit before bookkeeping adjustments] — demonstrates management sees structural trade fragmentation demand well beyond any geopolitical event. Trade fragmentation between blocs is the deeper driver: goods cannot travel the most efficient routes, requiring more ship-miles per unit of trade.", status: "UNCHANGED", evidence: "GSL orders 10 next-gen ships at $917M despite Iran peace deal uncertainty; Danaos and International Seaways held positions as investors price structural demand over geopolitical noise.", type: "structural" },
    { num: "06", title: "Retail cash rotation to equities building", detail: "The SpaceX IPO is a watershed event for retail participation: Robinhood reported surge in app downloads and new account openings this week, Interactive Brokers saw record options volumes, and the SpaceX debut at +19% validated the retail FOMO [fear of missing out] thesis. Fear & Greed Index at 37 and elevated cash/money market inflows ($9.2B) show this rotation is uneven — retail is participating selectively in blockbuster events rather than rotating broadly. The structural bull case requires cash (still $6.2T in money market funds) to migrate into equities consistently.", status: "WEAKENED", evidence: "SpaceX IPO absorbed massive retail demand but broader cash-to-equity rotation stalled; F&G Index fell to 37 (Fear) despite positive week; broad rotation not yet confirmed.", type: "cyclical" }
  ],

  executive: {
    biggest_mover: { name: "SpaceX (SPCX)", change: "+19.0%", reason: "SpaceX's Nasdaq debut on June 12 was the largest IPO in history, raising $75B at a $1.5T valuation and closing +19% at $161 vs. a $135 IPO price — briefly surging 30%+ intraday. The listing validates that deep-tech infrastructure companies with negative free cash flow [money left after all operating and capital expenses] can access public markets at scale, reinforcing Thesis 01 (AI infrastructure entering the physical world) and putting both Starlink satellite broadband and Starship launch economics into public market price discovery for the first time." },
    key_risk: { name: "Iran peace deal reversal", reason: "Markets priced a high probability of a formal US-Iran peace deal by end of week, driving oil below $84/bbl and boosting equities broadly — but Trump himself publicly contradicted Iranian media reports on deal terms on Friday, reintroducing uncertainty. A reversal to active hostilities would spike oil, reinstate inflation pressure, and reverse the week's defence-sector underperformance in hours; the risk is asymmetric because markets are now priced for resolution, not re-escalation." },
    conviction_call: { name: "Global Ship Lease (GSL)", observation: "GSL's $917M fleet renewal order — 10 next-generation containerships with multi-year charters and $665M EBITDA [raw operating profit before bookkeeping adjustments] visibility — made this week despite the Iran peace deal overhang demonstrates that management sees structural trade fragmentation demand well beyond any geopolitical event resolution. At $38 with a $51 analyst target and a quarterly dividend of $0.625, the risk/reward for a EUR-based investor taking a USD-denominated shipping thesis is compelling: you get paid to wait while the structural tailwind compounds." },
    macro_pulse: { name: "ECB Rate Hike — June 11 2026", observation: "The ECB raised all three key rates by 25bps on June 11 — its first hike since 2023 — as Eurozone inflation re-accelerated to 3.2% in May driven by energy and food cost pass-through from the Iran conflict. This changes the investment calculus materially: EUR-denominated fixed income now competes meaningfully with equities for European capital, Eurozone bank stocks benefit (wider NIM [spread between what bank earns on loans vs pays on deposits]), and EUR strength adds FX drag to European multinationals' non-EUR earnings." },
    tags: [
      { label: "EUR/USD: 1.1574 rising", type: "green" },
      { label: "Fed: On hold, Warsh era begins", type: "amber" },
      { label: "ECB: Hike to 2.25% — first since 2023", type: "red" },
      { label: "Tariffs: Semi 25% in effect, Iran sanctions TBD", type: "amber" },
      { label: "AI capex: $725B committed 2026 — intact", type: "green" },
      { label: "EU defence: Profit-taking on Iran deal", type: "amber" },
      { label: "Semis: Broadcom miss, PHLX +7.9% single day", type: "amber" },
      { label: "Shipping: GSL $917M fleet order; Hormuz peace risk", type: "blue" }
    ]
  },

  macro: {
    us: "The US economy navigated a turbulent week dominated by geopolitics rather than data. The June jobs report showed unemployment stable at 4.1% with 147k new jobs — solid but not accelerating. Headline CPI is expected to print at 2.6% (from 2.4%) and core at 3.0% (from 2.8%) on tariff pass-through, with that data due next week. New Fed Chair Kevin Warsh, confirmed in May and taking over from Powell, is expected to lean toward rate cuts later in 2026, but sticky core inflation is delaying the first cut. The Iran conflict had created a secondary inflation channel through energy that the peace deal prospect is now beginning to unwind — a CPI tailwind that could arrive in the July print. Markets are pricing one cut by Q4 2026. The SpaceX IPO is the most significant capital markets event of the decade: $75B raised validates private-tech exuberance but also absorbs liquidity that might otherwise have rotated into broader equities.",
    europe: "Europe's macro week was defined by two competing forces: the ECB's surprise rate hike to 2.25% — its first increase since 2023 — and the Iran peace deal's deflationary impulse on energy. The ECB cited 3.2% headline inflation and revised down GDP to 0.8% for 2026 from 0.9%, a stagflationary signal that the Governing Council is prioritising inflation credibility over growth support. European banks surged on the hike as NIM [spread between what bank earns on loans vs pays on deposits] expansion becomes visible for the first time in years. Defence stocks experienced profit-taking as the peace deal narrative reduced urgency, though order backlogs [signed contracts not yet completed — pre-sold revenue] remain at record levels. EUR at 1.1574 is a headwind for European exporters but a tailwind for EUR-denominated cost bases of companies with global revenue.",
    asia: "China's Q2 GDP came in at 4.7%, missing the 5.1% forecast — the slowest growth since Q1 2023 — as the property downturn and job insecurity continued to weigh on domestic consumption. Alibaba's AI pivot showed progress with the new Zhenwu chip and upgraded LLM [Large Language Model — AI system that processes and generates text], but Chinese tech stocks fell on the GDP miss. The SMIC 5nm ambition progressed: pilot runs are underway and mass production is targeted for end of 2026, the most credible strategic threat to ASML's monopoly yet reported. In Japan, TSMC's Kumamoto second fab has been upgraded to 3nm plans but equipment installation will not start until 2028 — a long-cycle positive rather than near-term supply event. BOJ held rates steady this week, maintaining JPY carry [borrowing in low-rate yen to invest in higher-yield assets] dynamics.",
    forward: "Next week is pivotal on two axes: (1) Iran deal formalisation — if signed, oil tests $80 and equities rally further; if it falls apart, oil spikes back above $90 and VIX revisits 20+. (2) US CPI data on Wednesday will test whether tariff pass-through is accelerating toward 3% headline — a print above 2.7% would push back Fed cut expectations and hit rate-sensitive growth stocks. Also watch: Microsoft Azure and Google Cloud investor days expected to provide Q2 AI revenue colour; any commentary on custom silicon [chips designed specifically for a company's own workloads] displacing NVIDIA training workloads will be market-moving for the semiconductor sector. The ECB's June 17 rate effective date begins to show in European bank earnings revisions from mid-week."
  },

  mag7: [
    {
      name: "Apple",
      ticker: "AAPL",
      price: "$291",
      change: "-2.44%",
      pe: "~29x",
      pe_plain: "paying 29 years of annual earnings per share",
      target: "$230–250",
      theme: "AI device upcycle vs China regulatory risk",
      news: "Apple fell 1.52% on Friday amid concerns that China's regulators are scrutinising AI-powered App Store content moderation policies, potentially affecting revenue from the world's largest iPhone market. Apple Intelligence features are expanding to more devices but the hardware catalyst for a decisive upgrade cycle remains elusive in 2026. The stock traded between $289.62 and $297.14 this week.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "WATCH",
      verdict_reason: "China regulatory risk is a genuine overhang on a stock already trading at a premium to its growth rate; wait for clarity before adding."
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "$390",
      change: "-2.56%",
      pe: "~31x",
      pe_plain: "paying 31 years of annual earnings per share",
      target: "$561",
      theme: "Azure AI ROI debate vs Xbox restructuring distraction",
      news: "Microsoft extended its YTD loss to -17% despite $190B in 2026 AI capex [capital expenditure — spending on physical infrastructure] commitments — the market's key concern is whether Azure AI revenue can justify this scale of investment. Xbox division restructuring added noise this week. 53 analysts still rate it a Strong Buy with a $561 average target, but the disconnect between analyst consensus and price action is striking. The stock closed at $390.34 on June 11.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "At $390 vs a $561 consensus target the risk/reward looks attractive, but the Azure AI revenue ramp needs to show momentum in Q2 earnings before conviction builds."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      price: "$238",
      change: "-1.42%",
      pe: "~34x",
      pe_plain: "paying 34 years of annual earnings per share",
      target: "$310",
      theme: "AWS AI revenue vs antitrust overhang and debt-funded capex",
      news: "Amazon closed at $238.55 on June 12 as investors weighed the EU cloud procurement review and FTC antitrust trial timeline against the company's $17.5B new debt raised to fund AI build-out. The 52-week high was $278.56 and 52-week low was $196.00. BofA maintains a Buy at $310, citing long-term AI and logistics growth.",
      earnings: "July 30, 2026",
      earnings_proximity: "upcoming",
      verdict: "HOLD",
      verdict_reason: "AWS AI revenue trajectory at July earnings will resolve the capex-vs-revenue-gap debate; hold into results unless FTC action escalates."
    },
    {
      name: "Alphabet",
      ticker: "GOOGL",
      price: "$361",
      change: "+1.76%",
      pe: "~22x",
      pe_plain: "paying 22 years of annual earnings per share",
      target: "$420–450",
      theme: "Search AI defence vs Google Cloud acceleration",
      news: "Alphabet was one of the few Mag7 names to finish positive this week (+1.76%), trading between $354.94 and $366.57. Google Cloud AI revenue growth and TPU [Tensor Processing Unit — Google's custom AI training chip] advancement continued without negative headlines. AMD and Alphabet both gained on Friday as the chip sector peace-deal recovery broadened to non-NVIDIA names.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "At 22x earnings — the cheapest Mag7 multiple — with Google Cloud AI growth accelerating and no negative news this week, Alphabet is the best risk/reward in the mega-cap group."
    },
    {
      name: "Meta",
      ticker: "META",
      price: "$620",
      change: "-1.31%",
      pe: "~26x",
      pe_plain: "paying 26 years of annual earnings per share",
      target: "$750",
      theme: "AI monetisation leader vs China regulatory risk to AI strategy",
      news: "Meta fell modestly this week as China regulatory actions threatened to jeopardise its AI content strategy in the region. Internal restructuring costs are creating near-term margin uncertainty despite Meta being recognised as the strongest AI-monetisation model among hyperscalers. Dividend ex-date is June 15 ($0.525 cash dividend). $125-145B capex commitment for 2026 maintained.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "BUY",
      verdict_reason: "Meta's AI ad monetisation is structurally the strongest among all Mag7; $125-145B capex commitment signals confidence; buy on this week's China-related weakness."
    },
    {
      name: "Nvidia",
      ticker: "NVDA",
      price: "$205",
      change: "-3.19%",
      pe: "~35x",
      pe_plain: "paying 35 years of annual earnings per share",
      target: "$200–250",
      theme: "AI GPU monopoly vs Broadcom guidance shock and custom silicon risk",
      news: "Nvidia fell ~3% this week, caught in the Broadcom-triggered chip sector selloff Monday-Tuesday before recovering partially on Thursday's Iran deal rally — the PHLX Semiconductor index surged 7.9% on a single day. The stock traded between $199.34 and $207.07. Nvidia's allocation position — virtually every major AI training cluster runs on Hopper or Blackwell GPU architectures — was not challenged by this week's news.",
      earnings: "Late August 2026",
      earnings_proximity: "far",
      verdict: "HOLD",
      verdict_reason: "At $205 near 52-week lows, structural demand is intact but Broadcom's guidance raised legitimate questions about the pace of AI chip spending acceleration; wait for a Q3 data point."
    },
    {
      name: "Tesla",
      ticker: "TSLA",
      price: "$395",
      change: "-2.82%",
      pe: "~58x",
      pe_plain: "paying 58 years of annual earnings per share",
      target: "$320–380",
      theme: "Robotaxi and FSD vs EV demand softness in China",
      news: "Tesla extended its recent losses (down 6.23% in past month) as China same-store sales [revenue from established locations — a core retail health metric] disappointed and Musk's attention-splitting between DOGE and Tesla continued to be cited by institutional investors. The stock traded between $380-$406 this week. The autonomous vehicle timeline and Optimus [Tesla humanoid robot] robotics narrative remain intact but require patience from investors currently paying 58x earnings.",
      earnings: "Late July 2026",
      earnings_proximity: "upcoming",
      verdict: "CAUTION",
      verdict_reason: "58x earnings for a company with decelerating EV deliveries is difficult to justify without imminent robotaxi revenue; reduce on any bounce back above $420."
    }
  ],

  theses: [
    {
      num: "01",
      title: "AI Infrastructure Entering the Physical World",
      status: "CONFIRMED",
      evidence: "SpaceX IPO raises $75B to fund Starlink AI compute infrastructure; TSMC CoWoS capacity doubling to 130k wafers/month by end 2026; hyperscalers commit $725B aggregate 2026 capex.",
      instruments: "NVDA, AMD, TSMC, ASML, Broadcom, Palantir, CrowdStrike, Pure Storage, Vistra, Constellation Energy",
      highlights: [
        { name: "SpaceX (SPCX)", change: "+19.0%", note: "Largest IPO ever validates AI infrastructure capital formation thesis; Starlink's 4,300+ satellite constellation is physical AI compute infrastructure deployed in orbit." },
        { name: "Palantir (PLTR)", change: "+3.1%", note: "Government AI platform AIP [Palantir's AI Platform for enterprise deployment] continues expanding; $1.63B Q1 revenue at +85% YoY sets a new benchmark for enterprise AI software monetisation." },
        { name: "Broadcom (AVGO)", change: "-14.0%", note: "Q3 AI chip guidance of $16B vs $17.2B expected triggered sector-wide selloff but $100B+ FY2027 AI revenue target maintained; this week's selloff may be the best entry point in 12 months for a long-term thesis holder." },
        { name: "Constellation Energy (CEG)", change: "+2.3%", note: "Nuclear power-to-AI-data-center PPA [Power Purchase Agreement] thesis intact; oil price decline on Iran deal paradoxically highlights nuclear's stable baseload value versus fossil fuel volatility." }
      ]
    },
    {
      num: "02",
      title: "Europe's Strategic Autonomy Moment",
      status: "CONFIRMED",
      evidence: "Rheinmetall added ~1.9B EUR in orders this week including 920M EUR Romanian maritime contract; EU ReArm programme spending commitments reaffirmed across CEE [Central and Eastern Europe].",
      instruments: "Rheinmetall, Safran, Thales, HEICO, Howmet, Deutsche Boerse, Knorr-Bremse, Allianz, Hannover Re",
      highlights: [
        { name: "Rheinmetall (RHM.DE)", change: "-1.6%", note: "Fell on Iran de-escalation narrative but fundamental thesis intact: order backlog approaching 73B EUR extends revenue visibility to 2030+; this week's dip is a technical correction in a confirmed structural trend." },
        { name: "Safran (SAF.PA)", change: "+1.3%", note: "LEAP engine [jet engine used in Boeing 737 MAX and Airbus A320neo] backlog [signed contracts not yet completed] demand continued strong; aerospace-defence dual-use exposure means Safran benefits from both defence spending and aviation recovery." },
        { name: "Hannover Re (HNR1.DE)", change: "+1.7%", note: "Iran deal reduces catastrophic tail-risk in Middle East reinsurance book; ECB hike improves investment income on float [capital held between collecting premiums and paying claims]." },
        { name: "Deutsche Boerse (DB1.DE)", change: "+0.8%", note: "SpaceX IPO drove record European equity trading volumes; Xetra and Eurex derivatives platforms benefited from elevated volatility and new listing activity." }
      ]
    },
    {
      num: "03",
      title: "Dollar Hegemony Softening",
      status: "CONFIRMED",
      evidence: "DXY at 99.8; EUR/USD at 1.1574 near 12-month highs; ECB hike to 2.25% creates first real yield competition with USD since 2022; ECB published formal 2026 International Role of the Euro report this week.",
      instruments: "iShares MSCI Poland, iShares MSCI Brazil, MercadoLibre, Alibaba, Trip.com, VanEck Rare Earth, Gold ETFs",
      highlights: [
        { name: "MercadoLibre (MELI)", change: "+1.6%", note: "LatAm [Latin America] USD-weakness beneficiary: weaker dollar makes USD-priced commodities cheaper for Brazilian consumers and improves MELI's USD-reported revenue when BRL [Brazilian Real] strengthens." },
        { name: "iShares Physical Gold (IGLN)", change: "+0.3%", note: "Gold holding above $2,300 as DXY weakness provides support; Iran peace deal reducing safe-haven premium but dollar softness provides structural floor." },
        { name: "Alibaba (BABA)", change: "-1.2%", note: "Chinese tech fell on weak Q2 GDP (4.7% vs 5.1% expected) despite dollar softness benefit; domestic demand weakness outweighed FX tailwind this week." },
        { name: "Trip.com (TCOM)", change: "+1.1%", note: "Weaker dollar makes USD-priced international travel more affordable for non-USD earners; Asia outbound travel recovery accelerating with Japan and European visa liberalisation." }
      ]
    },
    {
      num: "04",
      title: "GLP-1 Drugs Reshaping Healthcare Economics",
      status: "CONFIRMED",
      evidence: "Novo Nordisk Wegovy pill Q1 2026 prescriptions 1.3M — strongest ever GLP-1 launch; Medicare Part D obesity coverage pilot starting July 1; Novo shares +14% in past month.",
      instruments: "Novo Nordisk, Veeva Systems, HCA Healthcare, UnitedHealth, McKesson, GE HealthCare",
      highlights: [
        { name: "Novo Nordisk (NVO)", change: "+2.8%", note: "Oral Wegovy is the strongest-ever GLP-1 launch volume trajectory; Medicare Part D coverage from July 1 unlocks a 65+ demographic previously excluded from insurance coverage — potentially the largest demand catalyst in pharmaceutical history." },
        { name: "UnitedHealth (UNH)", change: "+2.5%", note: "Shares hit 52-week high near $413 as Medicare Advantage [private insurance plan for seniors replacing traditional Medicare] normalisation appears on track; GLP-1 cost pressure was the bear thesis — management's Q1 guidance handling reduced that concern." },
        { name: "HCA Healthcare (HCA)", change: "+1.4%", note: "Despite GLP-1 reducing need for bariatric surgery [weight-loss surgery] over time, HCA's CHCP acquisition signals adaptability into community health management and GLP-1 lifestyle monitoring revenue streams." },
        { name: "Veeva Systems (VEEV)", change: "+0.5%", note: "Life sciences CRM [Customer Relationship Management software for pharma salesforces] demand growing as pharma companies expand GLP-1 and biosimilar [lower-cost biological drug alternatives] salesforce deployments." }
      ]
    },
    {
      num: "05",
      title: "Trade Fragmentation Creating Shipping Opportunities",
      status: "UNCHANGED",
      evidence: "GSL ordered 10 next-generation containerships at $917M despite Iran peace deal uncertainty; Danaos and International Seaways held positions as investors price structural demand over geopolitical noise.",
      instruments: "Global Ship Lease, Danaos, International Seaways, Tsakos Energy, StealthGas",
      highlights: [
        { name: "Global Ship Lease (GSL)", change: "+2.1%", note: "The $917M fleet renewal order with $665M EBITDA [raw operating profit before bookkeeping adjustments] visibility under multi-year charters signals management confidence in structural demand; quarterly dividend of $0.625 per share shows cash generation is not being sacrificed for growth." },
        { name: "Danaos (DAC)", change: "+0.9%", note: "Held gains despite Iran peace deal uncertainty; long-term charter backlog [signed contracts not yet completed] insulates from short-term spot rate [current market price for immediate shipping] volatility." },
        { name: "International Seaways (INSW)", change: "-0.3%", note: "Tanker names slightly pressured by Iran deal oil price decline reducing tanker rate uplift premium; structural demand intact from US-Asia crude trade routes." },
        { name: "StealthGas (GASS)", change: "+0.4%", note: "LPG [Liquefied Petroleum Gas — transported by specialist vessels] carrier demand stable; Iran deal potentially reopening Gulf LPG flows is a medium-term positive for fleet utilisation." }
      ]
    },
    {
      num: "06",
      title: "Retail Cash Rotation to Equities Building",
      status: "WEAKENED",
      evidence: "SpaceX IPO absorbed massive retail demand (Robinhood record downloads, IBKR record options volumes) but F&G Index fell to 37 (Fear); $9.2B into money markets shows selective not broad rotation.",
      instruments: "Robinhood, Interactive Brokers, Shopify, Spotify, Netflix, WisdomTree Bitcoin ETP, Invesco CoinShares Blockchain",
      highlights: [
        { name: "Interactive Brokers (IBKR)", change: "+2.0%", note: "SpaceX IPO drove record retail trading and options volumes; IBKR's institutional-grade platform for active traders was the primary venue for SpaceX allocation." },
        { name: "Robinhood (HOOD)", change: "+1.9%", note: "App downloads surged on SpaceX IPO accessibility narrative; retail investors who could access SpaceX shares drove account opening conversions." },
        { name: "WisdomTree Bitcoin ETP (WBTC)", change: "+0.6%", note: "Bitcoin held above $100k as peace deal risk-on sentiment partially offset the crypto-risk-off pattern from Broadcom's early-week selloff." },
        { name: "Netflix (NFLX)", change: "+0.3%", note: "Defensive streaming thesis intact; ad-supported tier growing but subscriber growth needed to re-accelerate for multiple expansion beyond current 28x forward earnings." }
      ]
    }
  ],

  discoveries: [
    {
      num: "01",
      company: "SpaceX",
      sector: "Aerospace / Space Tech",
      headline: "SpaceX completes largest IPO in history at $75B, closing +19% at $161 on Nasdaq debut June 12",
      detail: "The SpaceX IPO is a watershed for private-tech capital formation: $75B raised in a single day, valuing the company at $1.5T at IPO price and $1.76T at close. More significant than the valuation is what it signals: deep-tech infrastructure companies with negative free cash flow [money left after all operating and capital expenses] can access public markets at scale when the narrative is sufficiently compelling. This creates a template for future IPOs of Anthropic, OpenAI, and other AI infrastructure names. For existing portfolio holders of AI-adjacent names, the SpaceX debut absorbs $75B of liquidity from the market — capital that was otherwise available for rotation into broader equities.",
      tag: "BULL"
    },
    {
      num: "02",
      company: "Broadcom",
      sector: "Semiconductors / AI Custom Chips",
      headline: "Broadcom Q3 AI chip guidance of $16B misses $17.2B estimate, triggering 7.9% PHLX Semiconductor index single-day decline on June 9",
      detail: "The Broadcom guidance miss is the most important semiconductor signal of Q2 2026: the company designs custom AI chips [ASICs — Application Specific Integrated Circuits — chips optimised for one specific task, more efficient than NVIDIA's general-purpose GPUs] for Google, Meta, Anthropic, OpenAI and others. A $1.2B shortfall in a single quarter's guidance implies that at least one large hyperscaler is either delaying deployment or has paused orders. Broadcom fell 14% from its all-time high of $481 to $372 — potentially the best entry point in 12 months if the Q4 2026 AI chip demand trajectory firms.",
      tag: "BEAR"
    },
    {
      num: "03",
      company: "SMIC / Huawei",
      sector: "China Semiconductors",
      headline: "SMIC 5nm pilot production underway in 2026, targeting mass production by end of year for Huawei Ascend 950 AI chips",
      detail: "SMIC's 5nm progress using DUV multi-patterning [a technique to achieve finer chip patterns using older ultraviolet light sources by exposing the chip multiple times] is the most credible geopolitical semiconductor threat yet: yield rates are 20-40% (vs TSMC's 90%+ at 3nm) but the Huawei Ascend 950PR achieves 2.8x the H20's [a lower-performance NVIDIA chip approved for China export] FP4 performance within a Chinese supply chain. If SMIC reaches 60k wspm [wafers started per month] at 7nm by end 2026 as planned, China will have self-sufficient AI training chip supply for domestic demand, reducing US export control leverage and compressing ASML and NVIDIA's geopolitical premium.",
      tag: "WATCH"
    },
    {
      num: "04",
      company: "ECB",
      sector: "European Macro / Financial Policy",
      headline: "ECB hikes 25bps to 2.25% on June 11 — first rate increase since 2023 — citing 3.2% Eurozone headline inflation driven by Iran energy disruption",
      detail: "The ECB's decision to hike while simultaneously lowering GDP forecasts (to 0.8% for 2026) is a classic stagflation policy dilemma: fighting inflation at the cost of growth. For EUR-based investors, the implications are immediate: (1) Eurozone bank NIM [spread between what bank earns on loans vs pays on deposits] expands, boosting Commerzbank, BNP, Santander; (2) EUR fixed income [bonds] yields rise above 2.5%, competing with equity dividend yields for the first time in years; (3) EUR strengthens, adding FX drag to European multinationals with non-EUR revenue. If the Iran deal reduces inflation pressure, the hike may prove premature — and a subsequent cut could come faster than expected.",
      tag: "WATCH"
    },
    {
      num: "05",
      company: "Novo Nordisk",
      sector: "Healthcare / GLP-1 Pharma",
      headline: "Wegovy pill crosses 2 million total prescriptions two months after US launch; Medicare Part D obesity coverage pilot launches July 1",
      detail: "The Medicare Part D coverage pilot starting July 1 for obesity medicines is one of the most significant payer access events in pharmaceutical history: it opens the US 65+ population — historically excluded from GLP-1 reimbursement — to Wegovy coverage through federal insurance. This demographic alone represents an addressable market expansion of 50M+ patients. The downstream economic effects are only beginning to show in food manufacturer and bariatric surgery [weight-loss surgery] revenue forecasts. Watch McKesson and Veeva Systems as beneficiaries of the distribution and salesforce expansion this requires.",
      tag: "BULL"
    },
    {
      num: "06",
      company: "TSMC",
      sector: "Semiconductors / Advanced Packaging",
      headline: "TSMC CoWoS capacity expanding at 80% CAGR to 130k wafers/month by end 2026, with NVIDIA reserving majority of output through 2027",
      detail: "TSMC's CoWoS [Chip-on-Wafer-on-Substrate — the technology that connects AI chips to HBM [high-bandwidth memory — fast memory chips required for AI training] in a single package] is the physical bottleneck of the AI supply chain more than the chips themselves. Growing from 35k wafers/month in late 2024 to 130k by end 2026 represents a 270% capacity expansion in 24 months. NVIDIA has reserved the majority, meaning AMD and hyperscaler custom silicon programmes face a structural allocation constraint for the foreseeable future. Amkor and ASE are beginning to offer alternative packaging but yield equivalence remains unproven at volume.",
      tag: "BULL"
    },
    {
      num: "07",
      company: "HCA Healthcare",
      sector: "Healthcare / Hospital Systems",
      headline: "HCA fell 30% in past 3 months before beginning recovery; CHCP deal reshapes workforce story amid GLP-1 structural shift concerns",
      detail: "HCA's 30% three-month decline reflects the market repricing the long-term impact of GLP-1 drugs on surgical volumes — particularly bariatric surgery and cardiovascular interventions. The CHCP acquisition announced this week signals HCA's strategic response: expanding into community health management to capture the GLP-1 patient monitoring and lifestyle management revenue stream rather than purely surgical revenue. At $375 with a GF Value [Gurufocus Fair Value — a proprietary intrinsic value estimate] of $449, the stock is pricing in meaningful structural impairment that may be overestimated.",
      tag: "WATCH"
    },
    {
      num: "08",
      company: "Global Ship Lease",
      sector: "Shipping / Container",
      headline: "GSL orders 10 next-generation containerships for $917M with $665M EBITDA under multi-year charters despite Iran peace deal uncertainty",
      detail: "The timing of GSL's $917M fleet order — announced the same week a US-Iran peace deal could reopen the Strait of Hormuz — is a deliberate strategic signal. Management is committing $917M in capital to ships delivering from 2028-2030, implying their view is that trade fragmentation [goods being rerouted via longer, less efficient routes due to geopolitical trade barriers] will sustain elevated demand for at least 4-5 years regardless of any single geopolitical resolution event. At $38 with analyst targets of $51 and a $0.625 quarterly dividend, GSL is pricing in more geopolitical risk than management itself appears to believe.",
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
        finding: "All four hyperscalers maintained or raised 2026 capex guidance: Meta $125-145B (raised), Microsoft $190B, Google $175-185B, Amazon ~$200B. Combined $700B+ commitment unchanged. No hedge language detected in any public statement this week.",
        implication: "AI infrastructure spend is contractually committed for 2026; semiconductor names with hyperscaler custom chip exposure (Broadcom, Marvell) have revenue visibility through Q4 2026 regardless of spot demand signals."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "Samsung flagged 146% ASP [Average Selling Price] jump in Q1 2026 vs FY2025 average; SK Hynix reported mid-60% DRAM gains. HBM3E priced at $8-10/GB with supply sold out through 2026 and constrained through 2027. DDR5 hit structural $375 floor as AI data centres absorb DRAM wafer capacity at 4x the rate of standard memory.",
        implication: "HBM pricing supercycle [sustained period of above-normal commodity pricing driven by structural demand exceeding supply] is intact and will support SK Hynix and Samsung margin expansion through at least Q3 2026; Micron is the emerging share-gainer to watch."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Microsoft Azure AI revenue and Google Cloud AI revenue are growing but the $725B aggregate 2026 capex commitment is outpacing visible AI-attributable revenue. Amazon flagged $17.5B in new debt to fund AI capex — a balance sheet signal that organic cash flow is insufficient to self-fund the build-out. No CFO has explicitly flagged ROI concerns but the gap remains measurably wide.",
        implication: "The gap is the core bubble risk indicator: if Q2 earnings in July do not show AI-attributable cloud revenue accelerating materially, the multiple compression risk in hyperscaler and chip names becomes acute by Q3 2026."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts.",
        signal: "AMBER",
        finding: "Mag7 forward P/E ranges from Alphabet at 22x (cheapest) to Tesla at 58x and Nvidia at 35x. DoorDash EPS consensus declined 17.94% in 30 days. Microsoft YTD -17% despite strong analyst targets. Broadcom guidance miss raised forward estimate concerns across the custom chip sector. The pattern is P/E stabilisation with mixed earnings revision direction.",
        implication: "The lack of broad EPS revision acceleration at these multiples means AI sentiment, not AI earnings, is currently holding valuations; one negative earnings surprise (Microsoft Azure miss, Google Cloud deceleration) could compress multiples rapidly."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately.",
        signal: "AMBER",
        finding: "SMIC is in confirmed 5nm pilot production in 2026 using DUV multi-patterning, with mass production targeted for H2 2026. Huawei Ascend 950PR achieves 2.8x H20 FP4 performance — meaningfully narrowing the gap with NVIDIA's China-available chips. China's published target is to boost 7nm/5nm output fivefold in two years. SMEE [Shanghai Micro Electronics Equipment — China's domestic lithography tool maker] remains at ~28nm but SMIC's DUV workaround is more advanced than anticipated.",
        implication: "This is no longer theoretical: if SMIC achieves 60k wspm [wafers started per month] at 7nm by end 2026, China's domestic AI chip supply becomes self-sufficient for civilian AI training at current scale, reducing US export control leverage and compressing ASML's geopolitical premium within 12-18 months."
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
        finding: "No confirmed production disruption at Samsung or SK Hynix this week. SK Hynix holds ~62% HBM market share; Samsung recovering to reclaim No.1 DRAM position. HBM sold out through 2026 across both suppliers. Micron gaining incremental NVIDIA allocation (5-15% share).",
        implication: "Korean HBM supply remains the single most critical chokepoint in the AI supply chain; any labour action or yield regression at Samsung would propagate to NVIDIA GPU allocation within 4-6 weeks."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "BOJ held rates steady this week, maintaining JPY carry dynamics. TSMC Kumamoto second fab upgrade confirmed to 3nm (from 4nm originally planned) with equipment installation from 2028 — a long-cycle positive, no near-term supply change. First fab at 12nm-28nm running for automotive and industrial.",
        implication: "No BOJ surprise this week; next BOJ meeting in July is the key watch date — a surprise hike would trigger immediate JPY carry unwinding and hit all tech stocks simultaneously regardless of fundamentals."
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation.",
        signal: "AMBER",
        finding: "SMIC 5nm pilot production confirmed — the most significant geopolitical semi development of the month. No Taiwan political escalation this week. TSMC CoWoS capacity expansion on track to 130k wafers/month by end 2026. No new rare earth export control signals from China this week.",
        implication: "SMIC's 5nm progress elevates the structural risk from GREEN to AMBER; within 18-24 months this becomes a binary scenario rather than a theoretical one for ASML's monopoly premium."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "US extended ban on AI chip shipments to Chinese firms outside China on June 1. Chip Security Act approved March 2026 embeds tracking technology into chips. 25% semiconductor tariff effective since January 2026. CHIPS Act disbursements ongoing but Intel fab construction timeline under scrutiny.",
        implication: "Policy environment is actively tightening; any new export control expansion (Nvidia H20 ban, ASML DUV equipment restriction) would be market-moving within hours for affected names."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "AMBER",
        finding: "SMEE remains at ~28nm-class but SMIC's successful DUV multi-patterning to 7nm/5nm using ASML's older NXT:1980Fi machines reduces the practical barrier — China is bypassing SMEE's limitations by repurposing existing ASML equipment more aggressively than anticipated.",
        implication: "ASML's EUV moat [competitive advantage difficult for rivals to replicate] is intact for sub-3nm but the DUV workaround at 7nm/5nm compresses the premium for older-vintage ASML DUV machines and reduces the timeline for meaningful competition in the 7nm-class segment."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "SK Hynix 62% share, Samsung 25-35%, Micron 5-15%. Micron is gaining incremental NVIDIA allocation and expanded HBM customer base from 4 to 6 customers. No pricing pressure visible — HBM sold out through 2026 and Micron gaining share without triggering price war because demand exceeds total industry supply.",
        implication: "Micron is the emerging HBM winner on a multi-year view; gaining share without triggering price war because demand exceeds total industry supply. A rotation from SK Hynix to Micron is the primary trade within the HBM thesis."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "GREEN",
        finding: "No hyperscaler announced a material shift of training workloads to custom silicon this week. Google TPU v5, AWS Trainium2, and Microsoft Maia remain primarily in inference [running existing AI models to generate outputs] rather than training [teaching AI models from scratch]. Custom silicon remains below 10% of training workloads across all hyperscalers.",
        implication: "Custom silicon threat remains a 2027-2028 scenario rather than 2026; NVIDIA's training monopoly is intact for this year, but Broadcom's custom ASIC progress is the leading indicator to watch for the inflection point."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "TSMC CoWoS remains the only credible option at volume — NVIDIA has reserved the majority through 2027. TSMC is outsourcing simpler packaging steps to ASE and Amkor to handle overflow but these companies are not yet capable of full CoWoS-equivalent yield. Two new packaging facilities being built in Taiwan and two in Arizona.",
        implication: "CoWoS supply constraints will persist through at least H1 2027, maintaining TSMC's packaging pricing power and limiting the pace of GPU output growth even when HBM and wafer supply are available."
      }
    ]
  }

};
