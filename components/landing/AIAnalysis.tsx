"use client"
import { motion } from "framer-motion"
import { ScanFace, Network, MapPin, Building2, GraduationCap, Stethoscope } from "lucide-react"

export function AIAnalysis() {
  return (
    <section className="container mx-auto py-32 px-6 overflow-hidden">
      <div className="mb-24 text-center">
        <h2 className="text-4xl font-bold font-space-grotesk text-foreground md:text-6xl mb-6">
          The AI <span className="text-gradient">Black Box</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Multimodal Transformers and Graph Neural Networks (GNNs) working in tandem to value every square inch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Stage 1: Spatial OCR (X-Ray) */}
        <div className="relative group">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <ScanFace className="w-6 h-6" />
                </div>
                Stage 1: Spatial OCR & Fraud Detection
            </h3>
            
            <div className="glass-card p-1 rounded-2xl overflow-hidden relative aspect-4/5 md:aspect-video lg:aspect-4/5 max-h-[600px] border border-emerald-500/20 shadow-[0_0_50px_-20px_rgba(16,185,129,0.2)]">
                {/* Background Document Image Simulation */}
                <div className="absolute inset-0 bg-zinc-900 p-8 flex flex-col gap-4 opacity-100">
                    {/* Header Section */}
                    <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
                        <div className="h-8 w-1/3 bg-zinc-800 rounded relative overflow-hidden group-hover:bg-emerald-500/10 transition-colors">
                            <span className="absolute top-0 right-0 bg-emerald-500 text-[8px] text-black px-1 font-bold opacity-0 group-hover:opacity-100">CONF: 99.8%</span>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-zinc-600 group-hover:border-emerald-500 group-hover:animate-spin-slow" />
                        </div>
                    </div>

                     <div className="space-y-3 mt-4">
                         {[90, 85, 95, 60, 80, 75, 40].map((width, i) => (
                             <div key={i} className="relative h-3 bg-zinc-800/50 rounded overflow-hidden group/line">
                                 <div className="absolute inset-0 border border-transparent group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-colors" />
                                 <div className="absolute -right-6 top-0 text-[8px] text-emerald-500 font-mono opacity-0 group-hover:opacity-100">
                                    {(0.98 + (i % 3) * 0.005).toFixed(4)}
                                 </div>
                                 <div className="h-full bg-zinc-800" style={{ width: `${width}%` }} />
                             </div>
                         ))}
                    </div>

                    {/* Stamp & Seal Analysis */}
                    <div className="mt-auto flex gap-4">
                         <div className="w-24 h-24 rounded border-2 border-dashed border-zinc-700 p-2 relative group-hover:border-emerald-500/50 transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 font-mono text-emerald-500 font-bold text-xs bg-black/50 backdrop-blur-sm">
                                VALID
                            </div>
                            <div className="w-full h-full rounded-full bg-zinc-800 opacity-50" />
                         </div>
                         <div className="flex-1 space-y-2">
                             <div className="text-[10px] text-zinc-500 font-mono uppercase">Signature Vector Analysis</div>
                             <div className="h-1 w-full bg-zinc-800 rounded overflow-hidden">
                                 <motion.div 
                                    className="h-full bg-emerald-500"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                 />
                             </div>
                             <div className="flex justify-between text-[10px] text-emerald-500 font-mono">
                                 <span>MATCH_RATE: 99.2%</span>
                                 <span>AUTH: BIOMETRIC</span>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Processing Log Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-black/90 border-t border-emerald-500/20 p-4 font-mono text-[10px] text-emerald-500/80 overflow-hidden backdrop-blur-md">
                    <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2 mb-2">
                        <span className="font-bold text-emerald-400">SYSTEM.LOG // TENSORFLOW_SERVING_V2</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400">PROCESSING</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                         <p>[14:20:01] <span className="text-blue-400">INFO</span> Loading weights from /opt/models/layoutlm_v3.bin...</p>
                         <p>[14:20:02] <span className="text-blue-400">INFO</span> TensorRT optimization enabled (FP16).</p>
                         <p>[14:20:02] <span className="text-emerald-400">SUCCESS</span> Document bounds detected: [0, 0, 1024, 2048]</p>
                         <p>[14:20:03] <span className="text-purple-400">ANALYSIS</span> Extracting entities: [OWNER, CNIC, PLOT_NO]</p>
                         <p>[14:20:03] <span className="text-purple-400">ANALYSIS</span> Stamp verification confidence: 0.9982</p>
                         <p className="animate-pulse">_</p>
                    </div>
                </div>

                {/* Scanning Beam */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-10"
                    animate={{ top: ["0%", "40%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
                Proprietary LayoutLMv3 models extract 50+ data points for due diligence.
            </p>
        </div>

        {/* Stage 2: GNN Pricing (Node Map) */}
        <div className="relative group">
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Network className="w-6 h-6" />
                </div>
                Stage 2: Real-Estate Graph Neural Network (GNN)
            </h3>

            <div className="glass-card p-0 rounded-2xl relative aspect-4/5 md:aspect-video lg:aspect-4/5 max-h-[600px] border border-blue-500/20 shadow-[0_0_50px_-20px_rgba(59,130,246,0.2)] bg-[#050505] overflow-hidden">
                
                {/* Valuation Sidebar (Right) */}
                <div className="absolute top-0 right-0 w-48 h-full border-l border-blue-500/10 bg-black/40 backdrop-blur-sm z-30 p-4 font-mono hidden md:flex flex-col">
                    <div className="text-[10px] text-zinc-500 uppercase font-bold mb-4">Valuation Engine</div>
                    
                    <div className="space-y-4 flex-1">
                        <div>
                            <div className="text-[10px] text-zinc-400">Base Price (sq.ft)</div>
                            <div className="text-sm font-bold text-foreground">22,500 PKR</div>
                        </div>
                         
                        <div className="space-y-2">
                            <div className="text-[10px] text-zinc-400 border-b border-zinc-800 pb-1">Amenities Impact</div>
                            <div className="flex justify-between text-[10px]">
                                <span className="text-blue-400">Edu. Proximity</span>
                                <span className="text-emerald-400">+4.2%</span>
                            </div>
                            <div className="flex justify-between text-[10px]">
                                <span className="text-blue-400">Health Access</span>
                                <span className="text-emerald-400">+8.1%</span>
                            </div>
                            <div className="flex justify-between text-[10px]">
                                <span className="text-blue-400">Transit Hub</span>
                                <span className="text-emerald-400">+12.5%</span>
                            </div>
                            <div className="flex justify-between text-[10px]">
                                <span className="text-white">Commercial</span>
                                <span className="text-emerald-400">+5.0%</span>
                            </div>
                        </div>

                        <div>
                            <div className="text-[10px] text-zinc-400">Market Sentiment</div>
                             <div className="w-full h-1 bg-zinc-800 rounded mt-1">
                                <div className="h-full w-[80%] bg-emerald-500 rounded" />
                             </div>
                        </div>
                    </div>

                    <div className="border-t border-blue-500/20 pt-4">
                        <div className="text-[10px] text-zinc-400">Final Valuation</div>
                        <div className="text-xl font-bold text-emerald-500">28,450 PKR</div>
                        <div className="text-[10px] text-emerald-600/70">+26.4% above avg</div>
                    </div>
                </div>

                {/* Graph Visualization Container */}
                <div className="absolute inset-0 md:right-48 p-8 flex items-center justify-center">
                    
                     {/* Center Node */}
                    <div className="relative z-20">
                        <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)] border-4 border-black/50 z-20 relative">
                            <Building2 className="text-white w-10 h-10" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white font-bold text-sm bg-black/60 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">Asset #804</div>
                        
                        {/* Radar Ripple Effect */}
                        <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                        <div className="absolute -inset-4 rounded-full border border-emerald-500/20 animate-pulse" />
                    </div>

                    {/* Nodes and Edges */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                        <defs>
                            <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                        {/* We use percentage based coordinates for lines to match roughly where div nodes will be */}
                        {/* Top Left (School) */}
                        <motion.line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#edge-gradient)" strokeWidth="2" strokeDasharray="5,5" 
                             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                         
                         {/* Top Right (Hospital) */}
                        <motion.line x1="50%" y1="50%" x2="75%" y2="30%" stroke="url(#edge-gradient)" strokeWidth="2" 
                             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />

                        {/* Bottom Right (Metro) */}
                        <motion.line x1="50%" y1="50%" x2="70%" y2="75%" stroke="url(#edge-gradient)" strokeWidth="2" 
                             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
                        
                         {/* Bottom Left (Mall) */}
                        <motion.line x1="50%" y1="50%" x2="30%" y2="70%" stroke="url(#edge-gradient)" strokeWidth="2" strokeDasharray="5,5"
                             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                    </svg>

                    {/* Satellite Nodes Positioning */}
                    
                    {/* School */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="absolute top-[20%] left-[20%] group/node flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/node:bg-blue-500/20 transition-colors">
                            <GraduationCap className="text-blue-500 w-5 h-5" />
                        </div>
                        <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 group-hover/node:text-white transition-colors">LGS <span className="text-emerald-500">+4%</span></div>
                    </motion.div>

                    {/* Hospital */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }} className="absolute top-[25%] right-[20%] group/node flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/node:bg-blue-500/20 transition-colors">
                            <Stethoscope className="text-blue-500 w-5 h-5" />
                        </div>
                        <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 group-hover/node:text-white transition-colors">Aga Khan <span className="text-emerald-500">+8%</span></div>
                    </motion.div>

                     {/* Metro */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-[20%] right-[25%] group/node flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/node:bg-blue-500/20 transition-colors">
                            <MapPin className="text-blue-500 w-5 h-5" />
                        </div>
                         <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 group-hover/node:text-white transition-colors">Metro Red <span className="text-emerald-500">+12%</span></div>
                    </motion.div>

                    {/* Mall - New Node */}
                     <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-[25%] left-[25%] group/node flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/node:bg-blue-500/20 transition-colors">
                            <Building2 className="text-blue-500 w-5 h-5" />
                        </div>
                         <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 group-hover/node:text-white transition-colors">Emporium <span className="text-emerald-500">+5%</span></div>
                    </motion.div>

                </div>
            </div>
             <p className="mt-4 text-muted-foreground text-sm">
                Graph Neural Networks aggregate 100+ variables (crime rate, development plans, transit) to compute true asset value.
            </p>
        </div>

      </div>
    </section>
  )
}
