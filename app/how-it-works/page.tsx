"use client"

import { motion } from "framer-motion"
import { FileText, Scan, Coins, TrendingUp, DollarSign, CheckCircle, ArrowRight, Clock } from "lucide-react"

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Document Upload",
    desc: "Property owner uploads title deeds, NOC, valuation reports, and floor plans to the platform.",
    icon: FileText,
    time: "~5 minutes",
    details: ["Accepted formats: PDF, JPG, PNG", "Max file size: 50MB", "Encrypted during transmission"]
  },
  {
    step: "02",
    title: "AI Verification",
    desc: "LayoutLMv3 models scan documents for authenticity, extract key fields, and flag anomalies.",
    icon: Scan,
    time: "~2 hours",
    details: ["95%+ accuracy rate", "Cross-references land registry", "Signature verification"]
  },
  {
    step: "03",
    title: "Legal Review",
    desc: "Certified lawyers verify property title, check for liens, and confirm ownership rights.",
    icon: CheckCircle,
    time: "1-3 days",
    details: ["Physical site inspection", "Title search at relevant authority", "Compliance check"]
  },
  {
    step: "04",
    title: "Third-Party Valuation",
    desc: "Independent valuers assess market value using comparable sales and rental yield projections.",
    icon: DollarSign,
    time: "2-5 days",
    details: ["Licensed valuers only", "Market comparables analysis", "Income approach valuation"]
  },
  {
    step: "05",
    title: "Tokenization",
    desc: "Property is fractionalized into ERC-3643 security tokens with built-in compliance rules.",
    icon: Coins,
    time: "Instant",
    details: ["Smart contract deployment", "Transfer restrictions embedded", "KYC whitelist created"]
  },
  {
    step: "06",
    title: "Market Listing",
    desc: "Tokens are listed on the order book with AMM providing instant liquidity.",
    icon: TrendingUp,
    time: "Instant",
    details: ["Initial price set by valuation", "AMM pool seeded", "Trading enabled 24/7"]
  },
  {
    step: "07",
    title: "Trading & Settlement",
    desc: "Investors buy/sell tokens on secondary market with T+0 settlement via smart contracts.",
    icon: ArrowRight,
    time: "~2 seconds",
    details: ["Instant order matching", "On-chain finality", "Atomic swap execution"]
  },
  {
    step: "08",
    title: "Rental Distribution",
    desc: "Monthly rental income is automatically distributed to token holders proportionally.",
    icon: DollarSign,
    time: "1st of month",
    details: ["USDC stablecoin payment", "Pro-rata distribution", "Tax reports generated"]
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Operational <span className="text-gradient">Workflow</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From asset ingestion to secondary market trading, every step is automated and verifiable.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-16 mb-24">
          {WORKFLOW_STEPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] border-4 border-black" />
              
              {/* Icon */}
              <div className="absolute left-[-50px] md:left-[-70px] top-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              {/* Content */}
              <div className="glass-card p-6 md:p-8 rounded-xl border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-mono text-emerald-500 mb-2">STEP {item.step}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-lg">{item.desc}</p>
                
                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                  {item.details.map((detail, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Example Case Study */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">
              Real <span className="text-gradient">Example</span>
            </h2>
            <p className="text-muted-foreground">
              Tokenizing a $1M commercial plaza in DHA Lahore
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Property Value</div>
                <div className="text-3xl font-bold text-emerald-500">$1,000,000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Total Tokens</div>
                <div className="text-3xl font-bold">10,000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Token Price</div>
                <div className="text-3xl font-bold">$100</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Annual Rental Income</div>
                <div className="text-3xl font-bold">$120,000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">ROI per Token</div>
                <div className="text-3xl font-bold text-emerald-500">12%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Monthly Income (per token)</div>
                <div className="text-3xl font-bold">$1.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
