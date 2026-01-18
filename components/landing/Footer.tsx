"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
            
            <div className="md:w-1/3">
                 <div className="font-space-grotesk text-2xl font-bold text-foreground mb-6">ASSETFLOW</div>
                 <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                     Democratizing institutional-grade real estate through fractionalized ledger technology.
                 </p>
            </div>

            <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-foreground text-sm">Product</h4>
                    <Link href="/product/marketplace" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">Marketplace</Link>
                    <Link href="/product/terminal" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">Terminal</Link>
                    <Link href="/product/api" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">API</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-foreground text-sm">Legal</h4>
                    <Link href="/legal/privacy" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">Privacy</Link>
                    <Link href="/legal/terms" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">Terms</Link>
                    <Link href="/legal/licenses" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-emerald-500 transition-colors">Licenses</Link>
                </div>
            </div>

        </div>

        <div className="border-t border-border/40 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <h1 className="text-[12vw] leading-none font-bold text-foreground/5 select-none font-space-grotesk tracking-tighter">
                ASSETFLOW
            </h1>
            <div className="text-xs text-muted-foreground max-w-md text-right">
                AssetFlow is a participant in the SECP Regulatory Sandbox. Investing involves risk. 
                <br />© 2026 AssetFlow Inc.
            </div>
        </div>
      </div>
    </footer>
  )
}
