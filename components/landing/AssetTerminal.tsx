"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Activity, Zap, Server } from "lucide-react"

export function AssetTerminal() {
  const [ticks, setTicks] = useState<number[]>([100, 102, 101, 104, 103, 106, 108, 107, 110, 112, 111, 115])
  const [tps, setTps] = useState(14203)
  const [latency, setLatency] = useState(12)

  // Simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
    // Update chart
      setTicks(prev => [...prev.slice(1), prev[prev.length - 1] + (Math.random() > 0.5 ? 2 : -2)])
    // Update stats
      setTps(prev => prev + Math.floor(Math.random() * 50 - 20))
      setLatency(prev => Math.max(8, Math.min(25, prev + Math.floor(Math.random() * 5 - 2))))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container py-32 mx-auto px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold font-space-grotesk text-foreground md:text-6xl mb-6">&quot;God Mode&quot; Visibility</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
            Real-time insights into the engine. 100,000+ orders per second with microsecond latency.
        </p>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto rounded-xl border border-border bg-[#050505] shadow-2xl shadow-emerald-500/10 overflow-hidden font-mono"
      >
        {/* Terminal Header */}
        <div className="h-12 bg-white/5 border-b border-border flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="ml-4 text-xs text-zinc-500 font-bold opacity-50">SYS.ADMIN // SUPERUSER</div>
            </div>
            <div className="flex items-center gap-6 text-xs">
                <div className="flex items-center gap-2 text-emerald-500">
                    <Activity className="size-3" />
                    <span>TPS: {tps.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                    <Zap className="size-3" />
                    <span>LATENCY: {latency}ms</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                    <Server className="size-3" />
                    <span>KAFKA: HEALTHY</span>
                </div>
            </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 h-[600px] divide-y md:divide-y-0 md:divide-x divide-border">
            
            {/* Left Panel: Logs/Watchlist */}
            <div className="col-span-3 p-0 flex flex-col bg-white/2">
               <div className="p-3 border-b border-border bg-white/5">
                    <h4 className="text-xs text-zinc-400 font-bold uppercase">Event Stream</h4>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden text-[10px] text-zinc-500">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="flex gap-2 font-mono opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-emerald-700">[{new Date().toLocaleTimeString()}]</span>
                            <span className="text-blue-500">INF</span>
                            <span>MATCH_ENG :: ORD_{100234 + i} :: EXECUTED</span>
                        </div>
                    ))}
                    <div className="animate-pulse text-emerald-500">_</div>
                </div>
            </div>

            {/* Middle Panel: Chart */}
            <div className="col-span-6 p-6 flex flex-col relative">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

                 <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                        <span className="text-xs text-emerald-500 font-bold mb-1 block">ASSET_ID: DHA-LHR-P6</span>
                        <h3 className="text-3xl font-bold text-foreground tracking-tighter">20,500.00 <span className="text-lg text-zinc-500 font-normal">PKR</span></h3>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-emerald-500 px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/20 inline-block">
                            +2.45% (24H)
                        </div>
                    </div>
                 </div>

                 {/* Chart Area */}
                 <div className="flex-1 flex items-end justify-between gap-1 pb-4 relative z-10">
                    {ticks.map((t, i) => (
                         <div key={i} className="w-full bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors relative group h-full flex items-end rounded-t-sm">
                             <motion.div 
                                className="w-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                                initial={{ height: 0 }}
                                animate={{ height: `${(t % 50) * 1.5 + 20}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                             />
                         </div>
                    ))}
                 </div>
            </div>

            {/* Right Panel: Order Book */}
            <div className="col-span-3 p-0 flex flex-col bg-white/2">
                <div className="p-3 border-b border-border bg-white/5">
                    <h4 className="text-xs text-zinc-400 font-bold uppercase">Order Book (L2)</h4>
                </div>
                
                <div className="flex-1 flex flex-col text-[11px]">
                    {/* Asks */}
                    <div className="flex-1 flex flex-col-reverse justify-end p-2 gap-0.5">
                        {[5, 4, 3, 2, 1].map((n, i) => (
                            <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 px-1 rounded">
                                <span className="text-red-500 font-medium">20,5{n}0.00</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-500">{10 + i * 7}</span>
                                    <div className="w-16 h-1 bg-red-500/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500/50" style={{ width: `${30 + i * 15}%` }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="py-2 border-y border-border bg-white/5 text-center text-foreground font-bold font-mono">
                        --- SPREAD: 10.00 ---
                    </div>

                    {/* Bids */}
                    <div className="flex-1 flex flex-col p-2 gap-0.5">
                         {[1, 2, 3, 4, 5].map((n, i) => (
                            <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 px-1 rounded">
                                <span className="text-emerald-500 font-medium">20,4{9-n}0.00</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-500">{15 + i * 6}</span>
                                    <div className="w-16 h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500/50" style={{ width: `${40 + i * 10}%` }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </motion.div>
    </section>
  )
}
