// GUT CHECK LIVE — current week's research desk
// Updated by Claude each time a gut check is researched.
// Loaded by latest.html alongside content.js.
// Thursday task reads this file, adds retrospective verdicts, moves to content.js gut_checks_retro.

const GUT_CHECKS = [

  {
    id: "gc_001",
    timestamp: "2026-05-21 15:45",
    raw_input: "Because of the high oil price there will be inflation.",
    signal: "CONFIRMED",
    confidence: "HIGH",
    hypotheses: [
      "Oil price is elevated and sustained above $100",
      "Energy is already feeding into headline CPI",
      "Pass-through to core CPI is underway"
    ],
    evidence: [
      {
        point: "CPI hit 3.8% in April 2026 — highest in 3 years — with energy +17.87% YoY; gasoline +28.4%, fuel oil +54.3%. The oil-to-inflation link is not a future risk — it is the current reality.",
        source: "US BLS / Kiplinger April 2026 CPI Report",
        quality: "PRIMARY"
      },
      {
        point: "Core CPI running at 2.6–2.8% with early pass-through visible in airfare and transportation. The transmission lag is 6–9 months — meaning the full oil shock from February's Iran war outbreak has not yet fully entered core prices.",
        source: "EY CPI April 2026 / Dallas Fed Working Paper WP2609",
        quality: "PRIMARY"
      },
      {
        point: "Fed has zero rate-cut probability priced through end of 2027. Bank of America no longer expects any 2026 cuts. The inflation signal is so confirmed that policy has already responded — the surprise risk is not 'will inflation happen' but 'how long does it persist'.",
        source: "FOMC Minutes March 2026 / Cleveland Fed",
        quality: "PRIMARY"
      },
      {
        point: "Iran war energy shock is structurally similar to the 2022 Russia-Ukraine supply disruption. In 2022, core CPI stayed elevated for 18 months after the initial oil shock. If the pattern holds, core inflation above 2.5% persists through Q3 2027.",
        source: "Dallas Fed Research Paper 2026 / RBC Economics",
        quality: "SECONDARY"
      }
    ],
    thesis_impact: "Thesis ③ Dollar Hegemony Softening — ACCELERATES. Persistent inflation above Fed target weakens the real yield differential that supports USD. Also headwinds Thesis ⑥ Retail Cash Rotation — rising bond yields (4.7%) make equities less attractive vs fixed income at the margin.",
    nuance: "The gut feeling is confirmed but the actionable insight is more specific: the HEADLINE inflation shock is already priced in (Fed on hold, yields at 4.7%). The UNPRICED risk is the 6–9 month pass-through from energy into CORE services inflation (rent, medical, transport). That second wave is what creates the 2H 2026 surprise.",
    what_would_change: "Iran ceasefire confirmed → oil falls to $85-90 → headline CPI drops 0.5-0.8pp within 60 days → rate cut expectations revive → USD weakens, gold dips, equities rally.",
    action_implication: "This confirms the case for inflation-linked assets: gold (direct hedge), energy equities (beneficiary), and short-duration bonds (less rate risk). It is a headwind for long-duration assets: growth tech at high P/E, real estate, long bonds.",
    retro_verdict: null,
    retro_date: null
  },

  {
    id: "gc_002",
    timestamp: "2026-05-21 15:46",
    raw_input: "China's market will boost and will spend on consuming.",
    signal: "MIXED",
    confidence: "MEDIUM",
    hypotheses: [
      "Chinese equity markets are outperforming and signalling recovery",
      "Chinese consumer spending data confirms domestic demand strength",
      "Government stimulus is successfully translating to consumer behaviour"
    ],
    evidence: [
      {
        point: "CSI 300 is up 27.82% over the past 12 months to 4,824 points — one of the best-performing major indices globally. Foreign institutional holdings of Chinese equities are at the highest level since Q1 2023. The MARKET is already pricing a recovery.",
        source: "GuruFocus CSI 300 / Morgan Stanley China Outlook 2026",
        quality: "PRIMARY"
      },
      {
        point: "CONTRADICTS the thesis: April retail sales grew only +0.2% YoY — the weakest since December 2022. Automobile sales fell 15.3%. Home appliances and furniture recorded double-digit declines. Consumer spending data does NOT confirm the market's optimism.",
        source: "China National Bureau of Statistics / DAO Insights May 2026",
        quality: "PRIMARY"
      },
      {
        point: "PARTIAL confirmation: Services retail sales climbed 5.6% and catering revenue rose 2.2%. Chinese consumers are spending on experiences (food, entertainment, travel) but NOT on goods. This is the same 'selective consumer' pattern seen in post-COVID Western recoveries.",
        source: "China Bulletin USCC May 5 2026 / Bloomberg Professional",
        quality: "PRIMARY"
      },
      {
        point: "Government allocated 250 billion yuan in special treasury bonds for consumer appliance trade-in stimulus. China's quick commerce market (Alibaba, Meituan, JD) targeting $126.74B by 2029. Structural investment in domestic consumption infrastructure is real but slow-acting.",
        source: "Xinhua March 2026 / GlobeNewswire April 2026",
        quality: "SECONDARY"
      }
    ],
    thesis_impact: "NOT directly in the 6 portfolio theses but relates to Thesis ③ Dollar Hegemony — a genuine China consumer recovery would accelerate BRICS local currency trade and reduce dollar reserve demand. Also relevant to Thesis ① AI Infrastructure — Chinese domestic AI demand (Alibaba Cloud, Huawei) would accelerate if consumer economy strengthens.",
    nuance: "The MARKET has already moved (+28% in 12 months) — the equity recovery thesis is largely priced. The CONSUMER SPENDING data is the lagging variable that hasn't confirmed yet. The opportunity is not 'buy Chinese equities broadly' — it's 'identify which segments of Chinese consumption will recover first': services YES, goods WAIT, property NO.",
    what_would_change: "Monthly retail sales sustained above 3% YoY for 2 consecutive months → confirms domestic demand thesis and justifies further equity allocation. Property sales stabilisation → unlocks household balance sheet spending → the broadest catalyst.",
    action_implication: "Chinese equities (CSI 300 / Hang Seng) have already rallied on the thesis. Fresh allocation now is chasing a move that's largely complete. Better risk/reward: (a) Trip.com and Chinese services names as the confirmed sub-thesis; (b) wait for retail sales data in June/July to confirm goods recovery before broad allocation; (c) Alibaba has a specific AI cloud angle that is independent of consumer spending.",
    retro_verdict: null,
    retro_date: null
  },

  {
    id: "gc_003",
    timestamp: "2026-05-21 15:47",
    raw_input: "Possible new way is gold or crypto?",
    signal: "CONFIRMED for GOLD / WATCH for CRYPTO",
    confidence: "HIGH (gold) / MEDIUM (crypto)",
    hypotheses: [
      "Gold is outperforming as an inflation + dollar-weakness hedge in 2026",
      "Bitcoin is functioning as an inflation hedge and portfolio diversifier",
      "Hard assets are replacing some traditional portfolio roles in institutional allocation"
    ],
    evidence: [
      {
        point: "Gold hit an all-time high of $5,595/oz in January 2026, currently ~$4,705, and is up ~65% on a full-year basis. J.P. Morgan targets $5,055/oz by Q4 2026. Central banks are buying 755 tonnes in 2026 — Poland leading, China adding 350 tonnes — explicitly diversifying away from dollar reserves. This is institutional-scale structural demand, not speculative.",
        source: "J.P. Morgan Gold Research / World Gold Council 2026 Outlook / Visual Capitalist",
        quality: "PRIMARY"
      },
      {
        point: "Three simultaneous tailwinds confirm gold's role: (1) inflation at 3.8% erodes real returns on cash; (2) DXY at 97.7 multi-year low means gold priced in EUR terms is even stronger; (3) US fiscal deficit expanding by $1.7T (OBBBA) increases sovereign risk premium, traditionally a gold demand driver.",
        source: "SSGA Gold 2026 Outlook / ainvest.com / Discovery Alert",
        quality: "SECONDARY"
      },
      {
        point: "Bitcoin shed roughly 20% YTD in 2026 while gold is up 65% from year-ago levels. Bitcoin's annualised volatility runs at 70–80% vs gold's 15–20%. A JPMorgan note from May 8 noted some investors choosing Bitcoin over gold — but this is narrative, not data. Bitcoin is NOT functioning as a reliable inflation hedge in 2026 data.",
        source: "KuCoin / 24/7 Wall St. / JPMorgan May 8 note / Motley Fool May 18",
        quality: "PRIMARY"
      },
      {
        point: "WisdomTree Bitcoin ETP and Ethereum ETP are in the universe but performance has lagged gold significantly. The SpaceX S-1 filing this week revealed 18,712 BTC holdings at $1.29B — a signal that institutional balance sheet adoption of Bitcoin continues even as price underperforms. The crypto narrative is building but the 2026 data does not yet confirm it as an inflation hedge.",
        source: "CoinDesk SpaceX S-1 / WisdomTree ETP data",
        quality: "SECONDARY"
      }
    ],
    thesis_impact: "Directly confirms Thesis ③ Dollar Hegemony Softening. Gold is the purest expression of this thesis in the portfolio. Crypto is a speculative extension — valid as a small allocation for asymmetric upside, not as a core hedge position at this volatility level.",
    nuance: "Gold and crypto are NOT the same 'new way'. Gold is a CONFIRMED structural allocation with institutional backing, central bank demand, and three simultaneous macro tailwinds. Bitcoin is a WATCH — it has the narrative but the 2026 data shows it's still correlating with risk assets (down when equities are stressed) rather than with inflation. The 'digital gold' thesis for Bitcoin is a long-term possibility but NOT yet validated in current conditions.",
    what_would_change: "For gold: a confirmed Iran ceasefire + Fed rate cuts → gold pulls back to $4,200-4,400 range as real yields rise and safe-haven demand fades. For Bitcoin: a sustained 90+ day period of BTC rising while equities fall and inflation rises — that would be the first genuine inflation-hedge data point for crypto.",
    action_implication: "For EUR-based portfolio: gold is the highest-conviction inflation + dollar-weakness hedge available. iShares Physical Gold or Gold Producers ETF are the clean expressions. A 5-10% portfolio allocation has an institutional mandate behind it (central banks themselves are doing this). Bitcoin: limit to 1-3% if at all — treat as high-risk asymmetric bet on the long-term digital store-of-value thesis, not as a hedge.",
    retro_verdict: null,
    retro_date: null
  }

];
