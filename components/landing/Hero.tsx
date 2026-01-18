"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Globe, Building2, Scale } from "lucide-react"

const TICKS = [
  { icon: ShieldCheck, text: "SECP Regulated" },
  { icon: Globe, text: "ISO 27001" },
  { icon: Building2, text: "Shariah Compliant" },
  { icon: Scale, text: "100% Backed" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow opacity-50" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse opacity-40" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_70%)]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
        >
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Waitlist is live
            </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space-grotesk text-6xl font-bold tracking-tight text-foreground md:text-8xl max-w-4xl mx-auto"
        >
          Asset Liquidity, <br />
          <span className="text-gradient">Unbound.</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Pakistan&apos;s First AI-Powered Real World Asset (RWA) Tokenization Marketplace. 
          Democratizing access to high-value real estate.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex gap-4"
        >
          <Button size="lg" className="rounded-full px-8 text-base">
            Launch Terminal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Ticker */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 w-full overflow-hidden border-y border-border bg-muted/20"
        >
            <div className="flex w-full items-center py-4">
               {/* Marquee effect would normally use a dedicated ticker lib or keyframes, for now simple flex */}
               <div className="flex w-full justify-around md:justify-center md:gap-16">
                   {TICKS.map((tick, i) => (
                       <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                           <tick.icon className="h-4 w-4 text-emerald-500/70" />
                           <span className="uppercase tracking-wider font-medium">{tick.text}</span>
                       </div>
                   ))}
               </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
