"use client"
import { motion } from "framer-motion"
import { Scale, Coins, Users, TrendingUp } from "lucide-react"

const STEPS = [
    {
        icon: Scale,
        title: "1. Legal Wrapper (SPV)",
        desc: "A Special Purpose Vehicle (Pvt Ltd) is incorporated to hold the property title. Tokens represent legal shares in this SPV."
    },
    {
        icon: Coins,
        title: "2. Digital Minting",
        desc: "Verified asset value is tokenized. 10M PKR property = 10,000 tokens minted to the Vault Wallet."
    },
    {
        icon: Users,
        title: "3. Initial Token Offering",
        desc: "Tokens listed on the marketplace. Investors purchase via bank transfer (PKR). Platform acts as secure custodian."
    },
    {
        icon: TrendingUp,
        title: "4. Yield Distribution",
        desc: "Rent collected monthy. Dividends calculated and auto-credited to investor wallets via bulk-credit operations."
    }
]

export function OperationalFlow() {
  return (
    <section className="container mx-auto py-20 px-6 bg-muted/20 rounded-3xl my-24 border border-black/5 dark:border-white/5">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold font-space-grotesk text-foreground mb-4">From Asset to Token</h2>
        <p className="text-muted-foreground">The operational lifecycle of a digitized property.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6 rounded-xl border border-black/5 bg-white/40 dark:bg-white/5"
            >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    <step.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                </p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}
