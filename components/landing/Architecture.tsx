"use client"
import { motion } from "framer-motion"
import { Monitor, Cpu, Database } from "lucide-react"

export function Architecture() {
  return (
    <section className="container py-24 mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold font-space-grotesk text-foreground md:text-5xl">Hybrid Architecture</h2>
        <p className="mt-4 text-muted-foreground">Web2 Speed. Web3 Security.</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
        
        {/* Central Core: Python Matcher */}
        <div className="relative z-20 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-emerald-500/50 bg-card/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)] z-10">
                <Cpu className="w-12 h-12 text-emerald-500" />
            </div>
            <div className="absolute top-36 text-center w-40">
                <div className="font-bold text-foreground">Python Matcher</div>
                <div className="text-xs text-emerald-400">&lt;1ms Execution</div>
            </div>
        </div>

        {/* Orbiting Nodes */}
        <div className="absolute inset-0 z-10">
            {/* Frontend Node (Left) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-2">
                 <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center shadow-lg">
                    <Monitor className="w-8 h-8 text-foreground" />
                 </div>
                 <div className="text-center">
                    <div className="text-sm font-bold text-foreground">Next.js</div>
                    <div className="text-[10px] text-muted-foreground">Client</div>
                 </div>
            </div>

            {/* Blockchain Node (Right) */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center gap-2">
                 <div className="w-16 h-16 rounded-2xl bg-muted border border-indigo-500/30 flex items-center justify-center shadow-lg">
                    <Database className="w-8 h-8 text-indigo-500" />
                 </div>
                 <div className="text-center">
                    <div className="text-sm font-bold text-foreground">Ethereum</div>
                    <div className="text-[10px] text-muted-foreground">Settlement</div>
                 </div>
            </div>
        </div>

        {/* Connecting Lines (Animated) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Left to Center */}
            <path d="M 100 200 L 380 200" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <motion.path 
                d="M 100 200 L 380 200" 
                stroke="#10B981" 
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Center to Right */}
            <path d="M 520 200 L 800 200" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <motion.path 
                d="M 520 200 L 800 200" 
                stroke="#6366F1" 
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </svg>

      </div>
    </section>
  )
}
