const BRIEF = {

  meta: {
    date: "Thursday, July 23, 2026",
    eurusd: "~1.1405",
    eurusd_direction: "falling",
    eurusd_driver: "Higher oil (Brent ~$91, WTI 6-week high on Gulf supply-disruption and Strait of Hormuz threats) revived US rate-hike bets, which pays the dollar a yield premium and pulled EUR/USD back from the July 16 high near 1.1474 toward ~1.14.",
    eurusd_outlook: "The July 29 FOMC is the pivot: if the Fed leans hawkish on oil-driven inflation the dollar keeps its bid and EUR-based holders of USD assets gain on translation; a dovish hold reverses it. Falsifier: a Hormuz de-escalation that drops Brent back under $85 would lift EUR/USD regardless of the Fed.",
    eurusd_weekly_change: "~-0.6%"
  },

  vitals: {
    fear_greed: { value: 41, label: "Fear", interpretation: "At 41 the index sits in Fear even though the VIX is calm — a divergence that says positioning is nervous but not hedged. Historically a sub-45 reading with a low VIX mean-reverts up once an event risk clears; the July 29 FOMC and the Alphabet/Tesla capex verdict are the near-term triggers. Falsifier: a hot core-PCE print that pushes both fear AND the VIX up together." },
    vix: { value: 16.64, label: "Calm", interpretation: "16.64 (July 22, down 2.4% on the day) is complacent given oil is spiking and mega-cap capex is scaring equity holders. A calm VIX into a heavy earnings week means options are cheap relative to realised risk; the condition for it to hold is that no hyperscaler cuts capex guidance. A single guidance cut or a Hormuz closure is the observation that would break it." }
  },

  regime: {
    title: "The CapEx Reckoning Meets an Oil Shock",
    description: "The dominant narrative flipped this week from cheering AI spend to pricing its cash cost: Alphabet lifted 2026 capex to $195-205B and free cash flow turned negative -$5.9B, and the stock fell ~5% after hours despite Cloud revenue up 82%. Simultaneously a Middle East supply scare pushed oil and gold up. This favours the memory/HBM leg of the AI thesis (suppliers get paid regardless of who wins) and the shipping thesis (Hormuz risk lifts tanker rates); it headwinds the hyperscaler-equity leg and rate-sensitive healthcare.",
    tailwinds: ["Memory supercycle — DRAM contract prices +58-63% QoQ", "Bank earnings beat across JPM, Citi, Goldman", "Cloud demand real — Google Cloud +82%, backlog $514B"],
    headwinds: ["Hyperscaler FCF draining into capex", "Oil spike reviving inflation/rate-hike bets", "Middle East / Strait of Hormuz escalation"]
  },

  league: {
    winners: [
      { rank: 1, name: "Travelers (TRV)", sector: "Insurance", change: "~+9.2%", reason: "~ single-session move July 20 on a Q2 beat — insurers get paid when realised catastrophe losses come in below the premium they already collected. Holds only if the Atlantic hurricane season stays benign; a major landfall is the falsifier." },
      { rank: 2, name: "SanDisk (SNDK)", sector: "Memory/Storage", change: "~ up (top S&P mover July 22)", reason: "~ single-session gain; buyers pay up for NAND/storage names as DRAM contract prices rise 58-63% QoQ and capacity is reallocated to HBM, tightening everything else. Condition: contract price momentum continues into 3Q26." },
      { rank: 3, name: "Western Digital (WDC)", sector: "Memory/Storage", change: "~ up (top S&P mover July 22)", reason: "~ single-session gain riding the same memory-tightness flow — CSPs pre-buying storage under long-term agreements to lock supply. Falsifier: a TrendForce note showing contract prices plateauing." },
      { rank: 4, name: "Micron (MU)", sector: "Memory", change: "~ up (top S&P mover July 22)", reason: "~ single-session gain; Micron is paid directly by hyperscalers for HBM/DRAM and gains share if Samsung stumbles. Condition: NVIDIA HBM allocation stays tight through 4-6 week lead times." },
      { rank: 5, name: "Seagate (STX)", sector: "Storage", change: "~ up (top S&P mover July 20)", reason: "~ single-session gain on the storage-tightness flow — nearline HDD demand from AI data lakes competes with the same capex dollars. Flow-mechanical within the memory complex." },
      { rank: 6, name: "Global Payments (GPN)", sector: "Financials", change: "~ up (S&P mover July 21)", reason: "~ single-session gain; a payments processor is paid a toll on transaction volume, so it benefits from nominal-spend inflation even as it hurts consumers. Condition: consumer spend volumes hold." },
      { rank: 7, name: "Lumentum (LITE)", sector: "AI Optical", change: "~ up (S&P mover July 21)", reason: "~ single-session gain; optical-interconnect suppliers are paid per AI cluster built, so they capture the capex boom without the FCF drag the hyperscalers carry. Falsifier: a hyperscaler capex cut." },
      { rank: 8, name: "Teradyne (TER)", sector: "Semi Test", change: "~ up (S&P mover July 21)", reason: "~ single-session gain; chip-test equipment demand tracks unit volume of complex AI silicon. Condition: HBM/advanced-package output keeps ramping." }
    ],
    losers: [
      { rank: 1, name: "Intuitive Surgical (ISRG)", sector: "Med-Tech", change: "~-14.1%", reason: "~ single-session drop July 20 — a high-multiple med-tech name reprices hard when procedure-growth or tariff guidance disappoints, because the whole valuation is future cash flows discounted at now-higher rates. Falsifier: a guidance walk-back restoring procedure growth." },
      { rank: 2, name: "Danaher (DHR)", sector: "Healthcare/Life Sci", change: "~-11.0%", reason: "~ single-session drop July 22; bioprocessing demand is the money flow, and any slowdown in pharma capex hits Danaher first. Condition: pharma customers keep spending — a GLP-1-funded capex wave is the bull case." },
      { rank: 3, name: "Alphabet (GOOGL)", sector: "Mega-cap Tech", change: "~-5% (after hours)", reason: "Cloud beat (+82%) but 2026 capex raised to $205B and FCF turned -$5.9B; equity holders now pay for spend they cannot yet see in cash flow. Verdict flips only if 2027 shows the capex converting to margin, not just backlog." },
      { rank: 4, name: "Tesla (TSLA)", sector: "Autos/AI", change: "-4.18%", reason: "Revenue +26% to $28.2B but adjusted EPS $0.33 missed $0.51 and operating margin fell to 1.4% as capex surged 142% and FCF turned negative — the market pays for cars today, not robotaxi promises. Falsifier: a robotaxi revenue line that actually shows up." },
      { rank: 5, name: "Oracle (ORCL)", sector: "Enterprise Cloud", change: "~ down (1-month -33.6%)", reason: "~ 1-month figure, not a weekly close; Oracle borrowed to fund AI data-centre buildout and the market is now pricing the debt-service cost against still-unproven cloud returns. Condition: RPO backlog converts to cash before rates bite." },
      { rank: 6, name: "Carvana (CVNA)", sector: "Consumer/Autos", change: "~ down (biggest loser July 21)", reason: "~ single-session drop; a leveraged used-car retailer is squeezed when higher-for-longer rates raise both its financing cost and its customers' loan payments. Falsifier: a dovish Fed turn." }
    ]
  },

  sectors: [
    { name: "US Energy", change: "up (sourced direction only)", direction: "up", driver: "Brent ~$91 and WTI at a 6-week high on Gulf supply-disruption fears pay producers a windfall on barrels already in the ground. Holds only while Hormuz risk is live; a de-escalation is the falsifier." },
    { name: "US Financials", change: "up (sourced direction only)", direction: "up", driver: "Large-bank Q2 beats (JPM, Citi, Goldman) plus Travelers' +9.2% day — banks earn a wider spread and trading fees in a volatile, higher-rate tape. Condition: no credit-loss surprise." },
    { name: "US Technology", change: "mixed (sourced direction only)", direction: "flat", driver: "Strong early-week on memory/optical names, then mega-cap weakness as Alphabet/Tesla capex spooked equity holders — a rotation within tech from hyperscaler-equity to picks-and-shovels suppliers, not a sector exit." },
    { name: "US Healthcare / Med-Tech", change: "down (sourced direction only)", direction: "down", driver: "ISRG -14% and DHR -11% single-session drops plus a threatened 100% generic-drug tariff for 2028 — high-multiple names reprice fastest when rate and policy risk rise together." },
    { name: "EU Defence", change: "down (sourced direction only)", direction: "down", driver: "Rheinmetall down ~47% over six months and a collapsed German F126 frigate deal (up to EUR300m revenue shortfall) — the money is still coming via NATO's 3.5%-of-GDP path, but investors now pay only for confirmed backlog, not the rearmament narrative." }
  ],

  flows: [
    { label: "Global Equities", amount: "~+$42.9B", direction: "in", note: "~ ICI figure for the week ended July 8 (>7 days old, lagged) — long-term equity funds drew inflows as retail kept rotating from cash. Secondary/aggregated data; a fresh BofA/EPFR weekly print was not sourced this session." },
    { label: "US Equities", amount: "n/a — not sourced this week", direction: "in", note: "No fresh weekly US-specific EPFR/BofA figure sourced this session; EPFR is paywalled and secondary reporting for this week was not available." },
    { label: "European Equities", amount: "n/a — not sourced this week", direction: "in", note: "No fresh weekly figure sourced this session." },
    { label: "EM Equities", amount: "n/a — not sourced this week", direction: "in", note: "No fresh weekly figure sourced this session." },
    { label: "Gold & Commodities", amount: "n/a — not sourced this week", direction: "in", note: "Flow figure not sourced, but price confirms safe-haven demand: spot gold ~$4,130-4,140, a two-week high, as buyers pay up for insurance against Hormuz supply risk and a softer dollar." },
    { label: "Cash / Money Markets", amount: "n/a — not sourced this week", direction: "out", note: "No fresh weekly money-market AUM print sourced this session; the standing thesis is retail draining cash into equities, which would reverse if the Fed turns hawkish and cash yields rise." }
  ],

  trends: [
    { num: "01", title: "AI infrastructure entering the physical world", detail: "Hyperscaler capex is now large enough to drain free cash flow and move commodity and power markets, not just chip demand. The spend is committed 12-18 months ahead of the revenue it is meant to produce.", status: "CONFIRMED", evidence: "Alphabet raised 2026 capex to $195-205B with Q2 capex of $44.9B (+100% YoY) and FCF of -$5.9B.", type: "structural" },
    { num: "02", title: "Europe's strategic autonomy moment", detail: "NATO core spending is on a path to ~EUR800B and a 3.5%-of-GDP benchmark, but 2026 is a consolidation year in which investors pay only for confirmed contracts.", status: "WEAKENED", evidence: "Rheinmetall down ~47% over six months and its German F126 frigate negotiation collapsed, risking up to EUR300m of 2026 revenue.", type: "structural" },
    { num: "03", title: "Dollar hegemony softening", detail: "The dollar is range-bound rather than trending; this week oil-driven rate-hike bets gave it a temporary bid, masking the longer softening.", status: "UNCHANGED", evidence: "EUR/USD pulled back to ~1.14 from a July 16 high near 1.1474 on higher oil, not on any structural dollar strength.", type: "cyclical" },
    { num: "04", title: "GLP-1 drugs reshaping healthcare economics", detail: "The category is now large enough that incumbents fight over advertising and share, a sign of a maturing, cash-generative market.", status: "CONFIRMED", evidence: "Novo Nordisk sued Eli Lilly on July 21 over allegedly misleading GLP-1 advertising, and is mid-way through a DKK15B buyback.", type: "structural" },
    { num: "05", title: "Trade fragmentation creating shipping opportunities", detail: "Geopolitical chokepoint risk raises charter rates for tanker owners because the same cargo must travel longer, higher-risk routes.", status: "CONFIRMED", evidence: "Strait of Hormuz threats and US strikes on Iran pushed Brent to ~$91; tanker day-rates rise mechanically when a chokepoint is threatened.", type: "cyclical" },
    { num: "06", title: "Retail cash rotation to equities building", detail: "Money continues to move from money-market funds into equities, broadening the market beyond mega-caps.", status: "UNCHANGED", evidence: "ICI data for the week ended July 8 (lagged) showed ~$42.9B into long-term equity funds; equal-weight S&P is beating cap-weight this year.", type: "structural" }
  ],

  executive: {
    biggest_mover: { name: "Alphabet (GOOGL)", change: "~-5% AH", reason: "Alphabet delivered Cloud revenue +82% and a $514B backlog yet fell ~5% after hours because it raised 2026 capex to $205B and reported -$5.9B free cash flow. The move re-rated the entire hyperscaler-equity leg of the AI thesis: the market now demands the capex show up as cash, not just as backlog." },
    key_risk: { name: "Strait of Hormuz escalation", reason: "US strikes on Iran and threats to the Strait of Hormuz pushed Brent to ~$91 and gold to a two-week high. A physical closure would spike oil, force the Fed toward hikes, and hit every rate-sensitive and import-dependent position simultaneously." },
    conviction_call: { name: "Memory / HBM suppliers (Micron, SK Hynix, Samsung, WDC/SanDisk)", observation: "The cleanest way to own AI infrastructure without the hyperscaler FCF drag is the memory layer: DRAM contract prices are up 58-63% QoQ and capacity is being reallocated to HBM, so suppliers are paid regardless of which model or cloud wins. This is a thesis-level observation, not a trade — the falsifier is a TrendForce print showing contract prices plateauing." },
    macro_pulse: { name: "July 29 FOMC", reason: "The Fed is expected to hold, but the oil-driven inflation scare raises the odds of hawkish language. The meeting sets the dollar path and therefore the translation value of EUR-based investors' USD holdings into next quarter." },
    tags: [
      { label: "EUR/USD: ~1.1405 down", type: "amber" },
      { label: "Fed: hold, July 29", type: "blue" },
      { label: "ECB: on hold", type: "blue" },
      { label: "Tariffs: Sec.122 expiry Fri", type: "amber" },
      { label: "AI capex: $205B Alphabet", type: "red" },
      { label: "EU defence: consolidating", type: "amber" },
      { label: "Semis: memory supercycle", type: "green" },
      { label: "Shipping: Hormuz risk", type: "amber" }
    ]
  },

  macro: {
    us: "US equities took a breather, the S&P down ~1% on the week after a near-11% year-to-date rally. The tone shifted from rewarding AI spend to scrutinising it: Alphabet and Tesla both reported after the July 22 bell and both fell as capex surged and free cash flow turned negative. Underneath, breadth is healthier than the headline — equal-weight S&P is beating cap-weight and small caps are outperforming, and large banks (JPM, Citi, Goldman) all beat. Oil at a six-week high on Middle East supply fears is the new inflation swing factor into the July 29 FOMC.",
    europe: "Europe is in a selective, consolidation phase. The defence trade that led 2025 has cooled hard — Rheinmetall is down ~47% over six months and a German frigate contract collapsed — even as NATO spending structurally climbs toward 3.5% of GDP. M&A is the bright spot: Thales agreed to buy underwater-drone maker Exail for EUR3.9bn at a 44% premium. EUR/USD softened to ~1.14 on the oil-driven dollar bid rather than any European weakness.",
    asia: "Asia's swing factor is the memory supercycle and the China chip question. TrendForce shows DRAM contract prices up 58-63% QoQ with HBM pricing set to surge further in 2027, a direct tailwind for SK Hynix, Samsung and Micron. In China, SMIC remains stuck at an enhanced 7nm (20-40% yield) with 5nm still in pilot; Huawei's Ascend 950DT, due Q4 2026, will integrate domestic HiZQ HBM — a slow-motion attempt to route around Korean memory and Dutch lithography. NVIDIA has begun limited H200 shipments to Chinese buyers (Alibaba, Tencent, ByteDance, ZTE).",
    forward: "Next week is dense: the July 29 FOMC (expected hold, watch the oil-inflation language), and mega-cap earnings from Microsoft, Meta (both ~July 29), Amazon (July 30) and Apple (~July 31) — the market will judge each on capex discipline and AI-attributable revenue, the exact axis that punished Alphabet and Tesla. Section 122 tariffs expire Friday. Watch Brent and the Strait of Hormuz headlines as the single biggest cross-asset risk."
  },

  mag7: [
    { name: "Apple", ticker: "AAPL", price: "n/a — not sourced this week", change: "n/a — not sourced this week", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "Services + AI upgrade cycle", news: "Apple reports around July 31 and is the one mega-cap with light AI capex, so it carries little of the FCF-drain risk punishing peers. The read-through from Alphabet/Tesla is that the market will reward disciplined spend. Falsifier for the calm view: soft iPhone unit guidance rather than ASP.", earnings: "~July 31 (not separately sourced)", earnings_proximity: "soon", verdict: "HOLD", verdict_reason: "Least exposed to the capex reckoning, but no fresh price or estimate was sourced this session to justify more than a hold." },
    { name: "Microsoft", ticker: "MSFT", price: "n/a — not sourced this week", change: "~-2.65% (July 22 intraday)", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "Azure AI capacity", news: "MSFT fell ~2.65% on July 22 in sympathy with the capex-fear repricing ahead of its own ~July 29 report. The condition for a bounce is Azure AI-attributable revenue accelerating fast enough to justify the spend; the falsifier is a widening capex-to-revenue gap like Alphabet's.", earnings: "~July 29 (not separately sourced)", earnings_proximity: "imminent", verdict: "WATCH", verdict_reason: "The July 29 print is the test of whether Azure revenue is closing the capex gap — hold judgement until the number lands." },
    { name: "Amazon", ticker: "AMZN", price: "n/a — not sourced this week", change: "~-1.91% (July 22 intraday)", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "AWS AI demand", news: "Amazon reports July 30 with consensus around $198.8B revenue, driven by AWS AI demand. It fell ~1.91% on July 22 on the broad mega-cap de-rating. The verdict hinges on AWS growth funding the capex rather than the reverse.", earnings: "July 30", earnings_proximity: "imminent", verdict: "WATCH", verdict_reason: "AWS growth vs capex is the single deciding variable and lands July 30 — no action before then." },
    { name: "Alphabet", ticker: "GOOGL", price: "n/a — not sourced this week", change: "~-5% (July 22 after hours)", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "Cloud + capex reckoning", news: "Q2 revenue +24% to $119.8B, Cloud +82% to $24.8B with backlog $514B and margin 35.6%, yet the stock fell ~5% AH as 2026 capex rose to $205B and FCF hit -$5.9B. The result crystallised the market's new rule: cash conversion over backlog. Verdict flips to BUY only if 2027 guidance shows the capex converting to margin.", earnings: "Reported July 22", earnings_proximity: "far", verdict: "HOLD", verdict_reason: "Cloud demand is proven but FCF is negative — the falsifier for the bull case is another year of capex growth without cash conversion, which management just guided toward." },
    { name: "Meta", ticker: "META", price: "n/a — not sourced this week", change: "~-2.73% (July 22 intraday)", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "AI capex + ad revenue", news: "Meta fell ~2.73% on July 22 ahead of its ~July 29 report, caught in the capex-fear tape. Unlike Alphabet, Meta funds AI from a high-margin ad engine, so the key is whether ad revenue growth still comfortably covers the spend. Falsifier: capex guidance rising faster than ad revenue.", earnings: "~July 29 (not separately sourced)", earnings_proximity: "imminent", verdict: "WATCH", verdict_reason: "Ad engine can fund the capex, but the July 29 print must show ad growth outpacing the spend increase to avoid Alphabet's fate." },
    { name: "Nvidia", ticker: "NVDA", price: "~$207 (July 21)", change: "n/a — weekly close not sourced", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "HBM demand + China H200", news: "NVIDIA traded ~$207 on July 21 (market cap ~$5.05T) and has begun limited H200 shipments to Chinese buyers (Alibaba, Tencent, ByteDance, ZTE), with reported Chinese interest in 2M+ chips at ~$27,000 each. Data-centre revenue was up 92% last print. The China channel is incremental revenue but also the geopolitical swing risk.", earnings: "Late August (not separately sourced)", earnings_proximity: "upcoming", verdict: "HOLD", verdict_reason: "Demand and pricing are intact, but the whole thesis rests on hyperscaler capex staying committed — the exact variable that just wobbled at Alphabet." },
    { name: "Tesla", ticker: "TSLA", price: "$363.45 (July 22)", change: "-4.18% (July 22)", pe: "n/a — not sourced this week", pe_plain: "P/E not sourced this session", target: "n/a — not sourced this week", theme: "Margins vs robotaxi capex", news: "Q2 revenue +26% to $28.24B on record 480,126 deliveries, but adjusted EPS $0.33 missed $0.51, GAAP operating margin fell to 1.4% (from 4.1%), capex surged 142% YoY and FCF turned negative. The market pays for cars today, not robotaxi promises. Falsifier for the bear case: a robotaxi/FSD revenue line that actually materialises.", earnings: "Reported July 22", earnings_proximity: "far", verdict: "CAUTION", verdict_reason: "Margin compression plus negative FCF while spending on unproven robotaxi capex — the condition to revisit is real autonomy revenue, not delivery records." }
  ],

  theses: [
    { num: "01", title: "AI Infrastructure Buildout", status: "MIXED", evidence: "Demand is unambiguously real (Google Cloud +82%, NVIDIA data-centre +92%, DRAM +58-63% QoQ) but the hyperscaler-equity leg is being punished for negative free cash flow.", instruments: "NVDA, MSFT, GOOGL, AMZN, META, MU, AVGO, TSMC, LITE, TER",
      highlights: [
        { name: "Alphabet", change: "~-5% AH", note: "Cloud growth proven, but $205B capex and -$5.9B FCF re-rated the equity — own the demand via suppliers, not the spenders, until cash conversion appears." },
        { name: "Micron", change: "~ up (July 22 mover)", note: "Paid directly for HBM/DRAM as contract prices surge; the picks-and-shovels way to own the buildout without the capex drag." },
        { name: "Nvidia", change: "~$207 (July 21)", note: "H200 China shipments add incremental revenue; the risk is entirely downstream — a hyperscaler capex cut, not demand today." }
      ]
    },
    { num: "02", title: "Europe Strategic Autonomy / Defence", status: "WEAKENED", evidence: "Structural NATO spending rises toward 3.5% of GDP, but 2026 is a consolidation year and confirmed-backlog discipline has replaced narrative buying.", instruments: "Rheinmetall, Thales, Safran, VanEck Defense ETF",
      highlights: [
        { name: "Rheinmetall", change: "~-47% (6-month)", note: "~ 6-month figure; a collapsed German F126 frigate deal risks up to EUR300m of 2026 revenue — the market now pays only for signed contracts." },
        { name: "Thales", change: "n/a — not sourced this week", note: "Agreed to buy underwater-drone maker Exail for EUR3.9bn at a 44% premium, signalling consolidation and a bet on autonomous naval systems." }
      ]
    },
    { num: "03", title: "Dollar Softening / Gold", status: "MIXED", evidence: "The dollar got a temporary oil-driven bid this week even as gold hit a two-week high on safe-haven demand.", instruments: "iShares Physical Gold, Gold Fields, iShares Gold Producers, EUR/USD",
      highlights: [
        { name: "Gold (spot)", change: "~$4,130-4,140", note: "Two-week high; buyers pay up for insurance against Hormuz supply risk and a longer-term softer dollar even as near-term rate-hike bets cap the upside." },
        { name: "EUR/USD", change: "~-0.6%", note: "Pulled back to ~1.14 on higher oil, not structural dollar strength — a de-escalation in the Gulf would reverse it." }
      ]
    },
    { num: "04", title: "GLP-1 Healthcare Economics", status: "CONFIRMED", evidence: "The category is mature enough that incumbents now litigate over advertising and market share.", instruments: "Novo Nordisk, Eli Lilly, McKesson, Veeva",
      highlights: [
        { name: "Novo Nordisk", change: "~$48.88 (July 9)", note: "~ price is >7 days old; Novo sued Eli Lilly on July 21 over allegedly misleading GLP-1 ads and is mid-way through a DKK15B buyback — a share-and-cash fight, not an early-stage market." }
      ]
    },
    { num: "05", title: "Shipping / Trade Fragmentation", status: "CONFIRMED", evidence: "Strait of Hormuz threats and US strikes on Iran mechanically raise tanker day-rates as cargoes reroute onto longer, riskier voyages.", instruments: "International Seaways, Tsakos Energy, Danaos, Global Ship Lease, StealthGas",
      highlights: [
        { name: "Tanker owners (sector)", change: "n/a — not sourced this week", note: "Individual day-rate prints not sourced, but Brent at ~$91 on Gulf disruption is the classic setup for tanker rate spikes; falsifier is a Hormuz de-escalation." }
      ]
    },
    { num: "06", title: "Retail Cash Rotation to Equities", status: "UNCHANGED", evidence: "Cash keeps moving into equities and market breadth is widening beyond mega-caps.", instruments: "Robinhood, Interactive Brokers, Vanguard S&P 500, SPDR Russell 2000",
      highlights: [
        { name: "Broad equity funds", change: "~+$42.9B (wk to July 8)", note: "~ lagged ICI figure; equal-weight S&P beating cap-weight this year is the visible evidence of the rotation broadening out." }
      ]
    }
  ],

  discoveries: [
    { num: "01", company: "Alphabet", sector: "Mega-cap Tech", headline: "Cloud +82% but $205B capex and -$5.9B FCF sink the stock ~5% AH", detail: "The market changed the rule this week: even an 82% Cloud growth rate and a $514B backlog [signed contracts not yet delivered — pre-sold revenue] could not offset free cash flow turning negative. The condition to re-rate higher is 2027 guidance showing capex converting to operating margin. The falsifier is another year of capex growth with flat cash conversion — which management guided toward.", tag: "BEAR" },
    { num: "02", company: "Memory complex (Micron / SK Hynix / Samsung / SanDisk / WDC)", sector: "Semis", headline: "DRAM contract prices +58-63% QoQ; storage names lead the S&P", detail: "TrendForce shows conventional DRAM contract prices rising 58-63% QoQ in 2Q26 with suppliers reallocating capacity to HBM [high-bandwidth memory required for AI training], tightening everything else. Memory and storage names (SNDK, WDC, MU, STX) topped S&P movers this week. Holds while CSPs keep pre-buying under long-term agreements; falsifier is a TrendForce note showing contract prices plateauing.", tag: "BULL" },
    { num: "03", company: "Tesla", sector: "Autos/AI", headline: "Record 480K deliveries, but margin to 1.4% and FCF negative on 142% capex jump", detail: "Revenue rose 26% to $28.24B on record deliveries, yet GAAP operating margin collapsed to 1.4% from 4.1% and EPS missed badly as capex surged 142% into robotaxi/AI. The market pays for cars sold today, not autonomy promised tomorrow. The bear case falsifies only when a robotaxi/FSD revenue line actually appears in the statements.", tag: "BEAR" },
    { num: "04", company: "NVIDIA", sector: "Semis", headline: "Limited H200 shipments to China cleared for Alibaba, Tencent, ByteDance, ZTE", detail: "US officials confirmed limited H200 exports to Chinese buyers, with reported interest in 2M+ units at ~$27,000 each. This is incremental revenue on top of data-centre sales up 92%, but it also concentrates geopolitical risk: the same channel can be closed by a single policy reversal. Watch for export-control tightening as the falsifier.", tag: "WATCH" },
    { num: "05", company: "Thales", sector: "EU Defence", headline: "Agrees to buy underwater-drone maker Exail for EUR3.9bn at 44% premium", detail: "In a cooling defence tape, Thales is paying up for autonomous naval systems — a consolidation bet that the next spending wave is unmanned. The 44% premium signals conviction that undersea drones are a structural growth line, not a cycle. Falsifier: NATO budgets pivoting back to conventional platforms.", tag: "WATCH" },
    { num: "06", company: "Novo Nordisk", sector: "Healthcare", headline: "Sues Eli Lilly over allegedly misleading GLP-1 advertising", detail: "Two incumbents litigating over ad claims is the signature of a maturing, cash-rich category rather than an emerging one. Novo is simultaneously running a DKK15B buyback [returning cash to shareholders by retiring shares]. The GLP-1 [appetite-suppressing diabetes/obesity drug class] fight is now about share defence, which favours scale players. Falsifier: a new entrant undercutting both on price.", tag: "NEUTRAL" },
    { num: "07", company: "Oil / Gold complex", sector: "Commodities", headline: "Brent ~$91 and gold ~$4,135 as Hormuz risk and US-Iran strikes bite", detail: "A physical supply scare pays commodity holders immediately: Brent hit a six-week high and gold a two-week high on the same driver. The cross-asset danger is that oil-driven inflation forces the Fed hawkish into July 29, hitting equities. The whole move unwinds on a credible Gulf de-escalation.", tag: "WATCH" },
    { num: "08", company: "SMIC / Huawei", sector: "China Semis", headline: "Ascend 950DT (Q4 2026) to integrate domestic HiZQ HBM; SMIC 5nm still in pilot", detail: "China is routing around two Western chokepoints at once: Huawei's coming Ascend 950DT uses domestic HiZQ 2.0 HBM (144GB, 4TB/s) rather than Korean memory, while SMIC pilots 5nm despite 20-40% 7nm yields. This is credible progress but not yet volume — the AMBER, not RED, threshold. A confirmed 5nm volume ramp is the falsifier that would compress ASML/NVIDIA monopoly premiums.", tag: "WATCH" }
  ],

  ai_trade: {
    status: "CAUTION",
    indicators: [
      {
        id: "capex_language",
        label: "Hyperscaler CapEx Language",
        info: "Forward-looking capex statements from Meta, Microsoft, Google, Amazon. Commitments are made 12-18 months before they appear in earnings — a hedge phrase is the earliest warning of demand softening. AMBER means semi names face margin compression risk within 2 quarters.",
        signal: "GREEN",
        finding: "Alphabet did the opposite of hedging — it RAISED 2026 capex to $195-205B and flagged a further 2027 increase. Microsoft, Meta and Amazon report next week.",
        implication: "Spend is still accelerating (bullish for suppliers); the risk migrated from demand to the equity holders funding it. Reassess after the July 29-30 hyperscaler prints."
      },
      {
        id: "hbm_pricing",
        label: "HBM / DRAM Spot Pricing",
        info: "HBM [high-bandwidth memory] and DRAM spot prices lead semiconductor earnings by 6-8 weeks. A price plateau precedes margin guidance cuts by two earnings cycles.",
        signal: "GREEN",
        finding: "TrendForce: 2Q26 conventional DRAM contract prices +58-63% QoQ; capacity reallocating to HBM; HBM contract prices expected to surge further in 2027.",
        implication: "Direct tailwind for Micron, SK Hynix, Samsung, WDC/SanDisk — the picks-and-shovels layer is paid regardless of which hyperscaler wins."
      },
      {
        id: "capex_revenue_gap",
        label: "CapEx-to-Revenue Gap",
        info: "The bubble signal: if hyperscalers spend $200B+ on AI infrastructure but cannot show proportional AI-attributable revenue growth, the trade is pricing future potential not current cash flows.",
        signal: "AMBER",
        finding: "Alphabet: $205B 2026 capex vs Cloud revenue of ~$24.8B/quarter, and FCF turned -$5.9B. Cloud growth is real (+82%) but capex is now outrunning visible cash generation.",
        implication: "This is the macro bubble indicator flashing amber. The gap must narrow at the July 29-30 Microsoft/Amazon prints or the equity leg de-rates further."
      },
      {
        id: "multiple_expansion",
        label: "Mag7 Multiple Expansion vs. EPS Revisions",
        info: "P/E [price-to-earnings] expansion on rising earnings = fundamentals. On flat or declining earnings = pure sentiment. These look identical on price charts — distinguishing them tells you if the trade has runway or is running on narrative.",
        signal: "AMBER",
        finding: "S&P 500 earnings growth is running ~30% and bank/Cloud beats are real, but Alphabet and Tesla both sold off on results — price is no longer rewarding even genuine EPS beats when FCF disappoints.",
        implication: "Sentiment has shifted from paying-up to demanding cash proof. Fundamentals intact but the market's tolerance for capex-without-cash has narrowed."
      },
      {
        id: "china_chips",
        label: "China Chip Progress (SMIC / Huawei)",
        info: "ASML, NVIDIA, TSMC carry geopolitical monopoly premiums. A credible Chinese alternative at advanced nodes compresses these premiums immediately. Current benchmark: SMIC 7nm, Huawei Ascend 910C.",
        signal: "AMBER",
        finding: "SMIC stuck at enhanced 7nm (20-40% yield) with 5nm in pilot, but Huawei's Q4-2026 Ascend 950DT will integrate domestic HiZQ HBM — a first credible move to bypass Korean memory.",
        implication: "Not yet a 5nm volume RED, but domestic HBM integration is a new datapoint. A confirmed 5nm ramp would compress ASML and NVIDIA premiums quickly."
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
        finding: "No production disruption sourced this week; SK Hynix and Samsung are the primary beneficiaries of DRAM contract prices rising 58-63% QoQ.",
        implication: "Memory pricing power intact — the tailwind flows straight to Korean HBM leaders."
      },
      {
        region: "Japan",
        info: "Two levers: (1) TSMC Kumamoto new capacity affects global supply/demand; (2) BOJ rate hike unwinds the JPY carry trade [cheap yen borrowed to buy global assets], hitting tech stocks within hours via forced position unwinding.",
        signal: "GREEN",
        finding: "—",
        implication: "—"
      },
      {
        region: "China / Taiwan",
        info: "Two risks: (1) TSMC CoWoS [advanced chip packaging] capacity is the direct NVIDIA GPU output bottleneck; (2) China rare earth export controls are deployable without military escalation — affects all advanced chip production globally.",
        signal: "AMBER",
        finding: "Huawei's Q4-2026 Ascend 950DT will use domestic HiZQ HBM and SMIC is piloting 5nm — credible progress to route around Korean memory and Dutch lithography, though not yet at volume.",
        implication: "Watch for a 5nm volume announcement; that would be the RED that compresses ASML/NVIDIA/TSMC monopoly premiums. Not there yet."
      },
      {
        region: "USA",
        info: "US policy sets global semiconductor rules. Export control expansions cut off demand or supply overnight. The CHIPS Act [$52B subsidy programme] drives 5-10 year capex decisions for TSMC Arizona, Intel, and Samsung US fabs.",
        signal: "AMBER",
        finding: "NVIDIA began limited H200 shipments to China (Alibaba, Tencent, ByteDance, ZTE) — a loosening that adds revenue but keeps the export-control lever live and reversible.",
        implication: "Incremental positive for NVIDIA revenue; the same policy channel could tighten again without warning, so treat it as a two-way risk."
      }
    ],
    moat_watch: [
      {
        incumbent: "ASML",
        challenger: "SMEE / China",
        domain: "EUV / DUV Lithography Equipment",
        info: "ASML monopolises EUV [extreme ultraviolet lithography]. SMEE is China's domestic alternative, currently at ~28nm. Advancement compresses the geopolitical premium in ASML's valuation.",
        signal: "GREEN",
        finding: "No credible SMEE advancement beyond ~28nm sourced this week; SMIC's 5nm pilot still depends on existing (non-EUV) tooling at low yield.",
        implication: "ASML EUV monopoly premium intact for now."
      },
      {
        incumbent: "SK Hynix / Samsung",
        challenger: "Micron",
        domain: "HBM Memory Market Share",
        info: "Micron is the third HBM entrant. Share gains compress SK Hynix/Samsung pricing power. If Samsung loses share due to strike/yield issues, SK Hynix and Micron are the rotation beneficiaries.",
        signal: "GREEN",
        finding: "Micron gaining as a top S&P mover on memory tightness, but the incumbents retain dominant share; rising contract prices lift all three.",
        implication: "A rising-tide market — no share shock this week; watch NVIDIA HBM allocation for the first sign of Micron taking meaningful share."
      },
      {
        incumbent: "NVIDIA",
        challenger: "Hyperscaler Custom Silicon",
        domain: "AI Training Chips (Google TPU / AWS Trainium / Microsoft Maia)",
        info: "Custom silicon erodes NVIDIA's TAM [total addressable market] from within. A 20%+ training workload shift reprices NVIDIA's growth ceiling embedded in its 35x forward P/E.",
        signal: "AMBER",
        finding: "Alphabet's aggressive capex includes heavy internal TPU deployment; no sourced figure on the training-mix shift this week, but the direction of hyperscaler in-housing is the standing risk.",
        implication: "No RED threshold breached (>20% training shift). Watch the July 29-30 hyperscaler calls for custom-silicon commentary."
      },
      {
        incumbent: "TSMC CoWoS",
        challenger: "Samsung / Amkor / ASE",
        domain: "Advanced AI Chip Packaging",
        info: "CoWoS [Chip-on-Wafer-on-Substrate] is the current GPU production bottleneck. Alternatives relieve the AI chip crunch (positive for hyperscalers) but reduce TSMC's packaging pricing power.",
        signal: "GREEN",
        finding: "—",
        implication: "—"
      }
    ]
  }

};
