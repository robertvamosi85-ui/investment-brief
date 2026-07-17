/* ============================================================
   movers.js  —  MONTHLY STOCK MOVERS data file
   ------------------------------------------------------------
   Written by Cowork on the 1st Thursday of each month, then
   pushed manually. Never edited by the weekly brief cadence.
   Renders the "Monthly Stock Movers" tab. Global: MOVERS.
   Independent of content.js (BRIEF) — zero overlap.

   FIELD CONTRACT (Cowork must obey):
   - drivers[]   allowed values: "fundamental" | "mechanical"
                 | "sentiment" | "optionality"   (1 or 2 per row)
   - move.dir    allowed values: "up" | "down" | "new" | "flat"
                 (n = places moved; omit n for "new"/"flat")
   - source_status  "verified" (both feeds agreed on the ranks)
                 |  "divergent" (feeds disagreed — dateline dot
                    turns amber, source_note explains the gap)
   - pct         pre-formatted string, e.g. "+258%"
   - ranking     exactly 10 rows, rank 1..10
   ============================================================ */

const MOVERS = {

  meta: {
    window:        "30 days → 3 Jul 2026",
    as_of:         "Thursday, July 3, 2026",
    universe:      "S&P 500",
    source_status: "verified",
    source_note:   "StockAnalysis and Finviz agreed on all ten ranks."
  },

  /* Causal-chain lead — the stories (2–4). leg drives the accent colour. */
  stories: [
    {
      leg:    "memory",
      title:  "The memory shortage got paid",
      names:  ["SNDK", "MU", "WDC", "STX"],
      detail: "AI servers need far more memory and storage per rack; DRAM/NAND/HDD sold out into 2027. Pricing power turned into margin expansion. Four of the top ten are this one trade."
    },
    {
      leg:    "compute",
      title:  "Compute demand widened past the GPU",
      names:  ["AMD", "MRVL", "INTC"],
      detail: "Accelerators and custom silicon caught the overflow. MRVL entered the index mid-window — part flow, part fundamentals. INTC is foundry optionality, not earnings."
    },
    {
      leg:    "optical",
      title:  "Fibre replaced copper in the racks",
      names:  ["LITE", "COHR", "CIEN"],
      detail: "As GPU clusters scale, interconnect moves to optical. Three networking names rode the same bottleneck; two also caught index-inclusion flow."
    }
  ],

  /* The ranking — exactly 10. `why` powers tap-to-expand drill-down. */
  ranking: [
    { rank: 1,  ticker: "SNDK", name: "SanDisk",            pct: "+258%", drivers: ["fundamental"],               move: { dir: "up",   n: 2 }, why: "Enterprise SSD share roughly doubled into the AI storage shortage; Street price targets went vertical (Jefferies to $3,000)." },
    { rank: 2,  ticker: "MU",   name: "Micron",             pct: "+242%", drivers: ["fundamental"],               move: { dir: "up",   n: 1 }, why: "One of three HBM makers; sold out through FY26 and signed ~$100B in multi-year take-or-pay customer agreements." },
    { rank: 3,  ticker: "INTC", name: "Intel",              pct: "+221%", drivers: ["optionality"],               move: { dir: "down", n: 2 }, why: "Doubled on unconfirmed Apple foundry talks, 18A milestones and a US government stake — priced-in optionality, still loss-making." },
    { rank: 4,  ticker: "MRVL", name: "Marvell",            pct: "+201%", drivers: ["fundamental", "mechanical"], move: { dir: "new" },        why: "Record data-center revenue plus a Jensen Huang stage endorsement; added to the S&P 500 mid-window, forcing index-fund buying." },
    { rank: 5,  ticker: "AMD",  name: "Adv. Micro Devices", pct: "+186%", drivers: ["fundamental"],               move: { dir: "up",   n: 3 }, why: "Data-center revenue +57% YoY; multi-gigawatt GPU supply deals with OpenAI and Meta; MI450 ramp into H2." },
    { rank: 6,  ticker: "WDC",  name: "Western Digital",    pct: "+164%", drivers: ["fundamental"],               move: { dir: "down", n: 1 }, why: "High-capacity HDDs sold out a year forward for AI data centers; margins above 50%; Bernstein doubled its target." },
    { rank: 7,  ticker: "LITE", name: "Lumentum",           pct: "+149%", drivers: ["fundamental", "mechanical"], move: { dir: "new" },        why: "Record optical revenue +90% YoY on AI interconnect; added to S&P 500 and Nasdaq-100, drawing passive inflows." },
    { rank: 8,  ticker: "COHR", name: "Coherent",           pct: "+141%", drivers: ["fundamental"],               move: { dir: "down", n: 3 }, why: "Datacenter/comms now ~72% of revenue; Nvidia $2B investment; index inclusion earlier in the year still feeding flow." },
    { rank: 9,  ticker: "STX",  name: "Seagate",            pct: "+128%", drivers: ["fundamental"],               move: { dir: "down", n: 4 }, why: "HAMR Mozaic drives qualified with major clouds; nearline capacity booked through 2026; record gross margins." },
    { rank: 10, ticker: "CIEN", name: "Ciena",              pct: "+119%", drivers: ["mechanical"],                move: { dir: "new" },        why: "Optical networking on the 1.6T upgrade cycle with a $7.7B backlog; readmitted to the S&P 500 in February." }
  ],

  /* Delta vs prior month — the thesis-integrity signal. */
  movement: {
    entered: {
      tickers: ["MRVL", "LITE", "CIEN"],
      note:    "optical & custom-silicon leg strengthening."
    },
    exited: {
      tickers: ["VRT", "ANET", "NRG"],
      note:    "power-infrastructure leg cooled vs last month."
    }
  },

  sources: "PRIMARY: StockAnalysis.com screener · CROSS-CHECK: Finviz."
};
