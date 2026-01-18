"use client"
import { motion } from "framer-motion"
import { Network, ShieldCheck, Zap } from "lucide-react"

const LAYERS = [
  {
    id: "layer-a",
    icon: Zap,
    title: "Layer A: The Matching Engine",
    subtitle: "Rust + Python FFI",
    description: "The order matching logic is written in Rust for microsecond-level latency and memory safety, utilizing a Foreign Function Interface (FFI) to bind with our Python FastAPI backend.",
    details: [
      "100k+ TPS via Tokio Async Runtime",
      "Bid/Ask Heaps in Raw Memory",
      "Zero Garbage Collection Pauses"
    ],
    color: "emerald"
  },
  {
    id: "layer-b",
    icon: Network,
    title: "Layer B: The Event Bus",
    subtitle: "Apache Kafka + Event Sourcing",
    description: "Every action is an immutable Event streamed into Kafka. Microservices consume these events for independent scaling and zero data loss replays.",
    details: [
      "Immutable Ledger of Truth",
      "Replayable State Reconstruction",
      "Async WebSocket Updates"
    ],
    color: "blue"
  },
  {
    id: "layer-c",
    icon: ShieldCheck,
    title: "Layer C: On-Chain Identity",
    subtitle: "ERC-3643 'T-REX' Protocol",
    description: "Digital Identity Validators (ONCHAINID) are embedded directly into the token smart contract, ensuring programmatic compliance with SECP/FATF regulations.",
    details: [
      "Whitelisted Wallet Transfers Only",
      "Automated Compliance Checks",
      "Impossible to Sanction-Bust"
    ],
    color: "purple"
  }
]

export function ArchitectureFlow() {
  return (
    <section className="container mx-auto py-12 px-6">
      <div className="relative flex flex-col gap-12 max-w-5xl mx-auto">
        {/* Connecting Line */}
        {/* Connecting Line */}
        <div className="absolute left-[28px] md:left-1/2 top-10 bottom-10 w-0.5 bg-linear-to-b from-transparent via-zinc-800 to-transparent -translate-x-1/2 hidden md:block" />

        {LAYERS.map((layer, index) => (
          <motion.div 
            key={layer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          >
             {/* Icon/Visual Side */}
             <div className="relative z-10 shrink-0">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px] bg-black/40 border border-white/10
                    ${layer.color === 'emerald' ? 'shadow-emerald-500/20 text-emerald-500' : ''}
                    ${layer.color === 'blue' ? 'shadow-blue-500/20 text-blue-500' : ''}
                    ${layer.color === 'purple' ? 'shadow-purple-500/20 text-purple-500' : ''}
                `}>
                    <layer.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
             </div>

             {/* Content Side */}
             <div className="flex-1 glass-card p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className={`absolute top-0 left-0 w-1 h-full opacity-50
                    ${layer.color === 'emerald' ? 'bg-emerald-500' : ''}
                    ${layer.color === 'blue' ? 'bg-blue-500' : ''}
                    ${layer.color === 'purple' ? 'bg-purple-500' : ''}
                `} />
                
                <div className="flex flex-col gap-4 relative z-10">
                    <div>
                        <div className={`text-xs font-mono font-bold uppercase tracking-wider mb-2
                             ${layer.color === 'emerald' ? 'text-emerald-500' : ''}
                             ${layer.color === 'blue' ? 'text-blue-500' : ''}
                             ${layer.color === 'purple' ? 'text-purple-500' : ''}
                        `}>
                            {layer.subtitle}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{layer.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                        {layer.description}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                        {layer.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <div className={`w-1.5 h-1.5 rounded-full 
                                     ${layer.color === 'emerald' ? 'bg-emerald-500' : ''}
                                     ${layer.color === 'blue' ? 'bg-blue-500' : ''}
                                     ${layer.color === 'purple' ? 'bg-purple-500' : ''}
                                `} />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
