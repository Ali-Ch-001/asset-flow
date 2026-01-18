"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Building2, Zap, Lock, Activity, TrendingUp, Users, DollarSign, Check, X } from "lucide-react"

const FEATURES = [ 
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Built-in SECP compliance checks and automated KYC/AML pipelines." },
  { icon: Zap, title: "Micro-second Latency", desc: "Rust-based matching engine processing 100k+ orders per second." },
  { icon: Globe, title: "Global Accessibility", desc: "Trade fractionalized assets from anywhere in the world 24/7." },
  { icon: Lock, title: "Institutional Custody", desc: "MPC-TSS wallet architecture ensuring no single point of failure." },
  { icon: Building2, title: "Asset Verification", desc: "AI-powered due diligence for property titles and legal documents." },
  { icon: Activity, title: "Real-time Analytics", desc: "God-mode visibility into market depth, liquidity, and asset performance." }
];

const STATS = [
  { label: "Assets Tokenized", value: "$185M+", icon: DollarSign },
  { label: "Active Investors", value: "12,450", icon: Users },
  { label: "Avg Annual ROI", value: "12.3%", icon: TrendingUp },
  { label: "Transaction Volume", value: "$2.4M/day", icon: Activity },
];

const COMPARISON = [
  { feature: "Minimum Investment", traditional: "$500,000+", assetflow: "$100" },
  { feature: "Liquidity", traditional: "6-12 months", assetflow: "Instant" },
  { feature: "Settlement Time", traditional: "30-90 days", assetflow: "2 seconds" },
  { feature: "Transaction Fees", traditional: "3-5%", assetflow: "2%" },
  { feature: "Fractional Ownership", traditional: false, assetflow: true },
  { feature: "24/7 Trading", traditional: false, assetflow: true },
  { feature: "Global Access", traditional: false, assetflow: true },
  { feature: "Automated Compliance", traditional: false, assetflow: true },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Core <span className="text-gradient">Capabilities</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive suite of tools designed for institutional-grade real world asset tokenization and trading.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 bg-white/5 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {FEATURES.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">
              AssetFlow vs <span className="text-gradient">Traditional</span> Real Estate
            </h2>
            <p className="text-muted-foreground">
              See how blockchain technology revolutionizes property investment
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl border border-white/5 bg-white/5 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-space-grotesk text-lg">Feature</th>
                    <th className="text-center p-6 font-space-grotesk text-lg text-muted-foreground">Traditional</th>
                    <th className="text-center p-6 font-space-grotesk text-lg text-emerald-500">AssetFlow</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6 text-center text-muted-foreground">
                        {typeof row.traditional === 'boolean' ? (
                          row.traditional ? (
                            <Check className="w-5 h-5 mx-auto text-emerald-500" />
                          ) : (
                            <X className="w-5 h-5 mx-auto text-red-500" />
                          )
                        ) : (
                          row.traditional
                        )}
                      </td>
                      <td className="p-6 text-center font-semibold">
                        {typeof row.assetflow === 'boolean' ? (
                          row.assetflow ? (
                            <Check className="w-5 h-5 mx-auto text-emerald-500" />
                          ) : (
                            <X className="w-5 h-5 mx-auto text-red-500" />
                          )
                        ) : (
                          <span className="text-emerald-500">{row.assetflow}</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
