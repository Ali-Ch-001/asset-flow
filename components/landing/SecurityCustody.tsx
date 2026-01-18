"use client"
import { motion } from "framer-motion"
import { Key, Smartphone, Server, Vault } from "lucide-react"

export function SecurityCustody() {
  return (
    <section className="container mx-auto py-24 px-6 bg-linear-to-b from-white/5 to-transparent rounded-[3rem]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-space-grotesk text-foreground md:text-6xl mb-6">
            Institutional <span className="text-gradient">Custody</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Threshold Signature Scheme (MPC-TSS). The private key never exists in one place.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
         {/* Central Vault Visual */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
            
            {/* Shard 1: User */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-64 glass-card p-6 rounded-2xl border border-indigo-500/20 flex flex-col items-center text-center group hover:border-indigo-500/50 transition-colors bg-white/5"
            >
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-500 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Shard 1</h3>
                <div className="text-xs font-mono text-indigo-500 mb-2">USER DEVICE</div>
                <p className="text-sm text-muted-foreground">Stored in Biometric Secure Enclave. Cannot proceed without FaceID.</p>
            </motion.div>

            {/* Central Logic: 2/3 Signature */}
            <div className="flex flex-col items-center justify-center gap-2">
                 <div className="text-4xl font-bold text-foreground font-space-grotesk">2/3</div>
                 <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Signatures Required</div>
                 <div className="w-px h-12 bg-linear-to-b from-transparent via-emerald-500 to-transparent my-2" />
                 <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse">
                    <Key className="w-8 h-8 text-emerald-500" />
                 </div>
            </div>

            {/* Shard 2: HSM */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-64 glass-card p-6 rounded-2xl border border-indigo-500/20 flex flex-col items-center text-center group hover:border-indigo-500/50 transition-colors bg-white/5"
            >
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-500 group-hover:scale-110 transition-transform">
                    <Server className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Shard 2</h3>
                <div className="text-xs font-mono text-indigo-500 mb-2">ASSETFLOW HSM</div>
                <p className="text-sm text-muted-foreground">Stored in Cloud HSM. Co-signs only if 2FA & Fraud Checks pass.</p>
            </motion.div>

         </div>

         {/* Shard 3: Cold Storage */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12 relative z-10"
         >
            <div className="w-full md:w-64 glass-pill border border-zinc-800 p-4 rounded-full flex items-center gap-4 group hover:border-zinc-500 transition-colors bg-black/40">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <Vault className="w-5 h-5" />
                </div>
                <div className="text-left">
                     <h3 className="font-bold text-sm text-foreground">Shard 3: Cold Storage</h3>
                     <p className="text-[10px] text-zinc-500 uppercase">Offline Swiss Bunker</p>
                </div>
            </div>
         </motion.div>
        
        {/* Background Network */}
         <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
            <svg className="w-full h-full">
                <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-indigo-500" />
                <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" className="text-indigo-500" />
                <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="currentColor" strokeDasharray="4 4" className="text-zinc-500" />
            </svg>
         </div>

      </div>
    </section>
  )
}
