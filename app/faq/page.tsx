"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useState } from "react"

const FAQ_CATEGORIES = {
  general: [
    { q: "What is AssetFlow?", a: "AssetFlow is Pakistan's first AI-verified real estate tokenization platform. We enable fractional ownership of premium properties through blockchain technology, making institutional-grade real estate accessible to retail investors." },
    { q: "Is AssetFlow regulated?", a: "Yes, AssetFlow operates under a sandbox license from the SECP (Securities and Exchange Commission of Pakistan) and complies with all relevant financial regulations including KYC/AML requirements." },
    { q: "Who can invest on AssetFlow?", a: "Any individual over 18 years old who passes our KYC verification process can invest. We accept both Pakistani nationals and international investors subject to compliance checks." },
    { q: "What is the minimum investment?", a: "AssetFlow allows fractional ownership starting from as low as 5,000 PKR (~$18 USD), democratizing access to premium real estate that would otherwise require millions in capital." },
    { q: "How does AssetFlow make money?", a: "We charge a 2% transaction fee on all token trades and a 10% performance fee on rental income distribution. Property listing fees apply for asset originators." },
  ],
  technical: [
    { q: "What blockchain does AssetFlow use?", a: "We use Polygon (MATIC) for smart contracts due to its low gas fees and high throughput. All tokens are ERC-3643 compliant security tokens with built-in transfer restrictions for regulatory compliance." },
    { q: "How are assets custody?", a: "We use a multi-party computation (MPC) threshold signature scheme to distribute key shares across user devices, HSMs, and cold storage. No single entity can access funds unilaterally." },
    { q: "What happens if I lose my wallet?", a: "Your wallet is secured through a 2-of-3 MPC setup. If you lose access to your device, you can recover using your backup key shard and our HSM shard. Email recovery is available with a 48-hour time-lock." },
    { q: "How fast are transactions?", a: "Our Rust-based matching engine processes 100,000+ orders per second with sub-5ms latency. On-chain settlement on Polygon takes ~2 seconds for finality." },
    { q: "Do you have an API for algorithmic trading?", a: "Yes, we offer REST and WebSocket APIs for developers. Rate limits apply: 100 req/min for free tier, 1,000 req/min for pro subscribers. See /product/api for details." },
  ],
  investment: [
    { q: "How is liquidity guaranteed?", a: "We use an Automated Market Maker (AMM) model alongside a traditional order book. The AMM provides instant liquidity for sellers, while the order book enables price discovery." },
    { q: "What returns can I expect?", a: "Historical rental yields range from 8-15% annually depending on location and asset type. Returns are not guaranteed and past performance is not indicative of future results." },
    { q: "When do I receive rental income?", a: "Rental distributions occur automatically on the 1st of each month via smart contract. Income is proportional to your token holdings and is paid in USDC stablecoin." },
    { q: "Can I sell my tokens anytime?", a: "Yes, tokens are tradable 24/7 on our secondary market. However, there's a 90-day lock-up period from initial purchase to prevent market manipulation." },
    { q: "Are there any tax implications?", a: "Rental income and capital gains may be subject to taxation in your jurisdiction. We provide annual tax reports, but consult a tax professional for personalized advice." },
  ],
  legal: [
    { q: "Can international investors participate?", a: "Yes, provided they pass our automated KYC/AML checks which process over 200+ global sanctions lists (OFAC, UN, EU, etc.). Some countries may be restricted due to regulatory constraints." },
    { q: "What due diligence is performed on properties?", a: "Every asset undergoes AI-powered document verification using LayoutLMv3 models, legal title searches, third-party valuation, and physical inspection. Full reports are available to investors." },
    { q: "Who owns the underlying property?", a: "Properties are held in a Special Purpose Vehicle (SPV) to separate legal ownership from token holders. Token holders have beneficial ownership and receive proportional income rights." },
    { q: "What happens if a property is damaged?", a: "All properties carry comprehensive insurance (fire, flood, earthquake). Claims are processed through the SPV and repairs are funded from reserve accounts before distributions." },
    { q: "Can AssetFlow freeze my account?", a: "Only if required by law enforcement or regulatory orders. We follow strict compliance protocols and will notify you of any account restrictions per our Terms of Service." },
  ],
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Frequently <span className="text-gradient">Asked</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Answers to common questions about tokenization, compliance, and technology.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(FAQ_CATEGORIES).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category
                  ? "bg-emerald-500 text-black"
                  : "bg-white/5 border border-white/10 hover:border-emerald-500/50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_CATEGORIES[activeCategory as keyof typeof FAQ_CATEGORIES].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-lg hover:text-emerald-500 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Didn&apos;t find your answer?</p>
          <button className="px-8 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
