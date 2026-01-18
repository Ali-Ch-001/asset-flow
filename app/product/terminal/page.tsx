"use client"

import { AssetTerminal } from "@/components/landing/AssetTerminal"
import { TrendingUp, BarChart3, Bell, Zap, Activity, Shield } from "lucide-react"

const FEATURES = [
  { icon: TrendingUp, title: "Real-time Price Feeds", desc: "Live market data with WebSocket streaming" },
  { icon: BarChart3, title: "Advanced Charting", desc: "Candlestick, OHLC, volume indicators" },
  { icon: Bell, title: "Price Alerts", desc: "Custom notifications for price movements" },
  { icon: Zap, title: "One-Click Trading", desc: "Execute orders instantly from the terminal" },
  { icon: Activity, title: "Portfolio Tracker", desc: "Monitor performance and P&L in real-time" },
  { icon: Shield, title: "Risk Management", desc: "Stop-loss and take-profit orders" },
];

const SHORTCUTS = [
  { keys: "Ctrl/Cmd + N", action: "New Order" },
  { keys: "Ctrl/Cmd + C", action: "Cancel All Orders" },
  { keys: "Ctrl/Cmd + P", action: "View Portfolio" },
  { keys: "Ctrl/Cmd + ,", action: "Settings" },
];

export default function TerminalPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Trading <span className="text-gradient">Terminal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade trading interface with real-time data and advanced order types.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-xl border border-white/5 bg-white/5"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Terminal Component */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10">
          <AssetTerminal />
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Keyboard Shortcuts */}
          <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
            <h3 className="text-2xl font-bold mb-6">Keyboard Shortcuts</h3>
            <div className="space-y-3">
              {SHORTCUTS.map((shortcut, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-sm">{shortcut.action}</span>
                  <kbd className="px-3 py-1 text-xs font-mono bg-black/40 rounded border border-white/20">{shortcut.keys}</kbd>
                </div>
              ))}
            </div>
          </div>

          {/* Order Types */}
          <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
            <h3 className="text-2xl font-bold mb-6">Supported Order Types</h3>
            <div className="space-y-4">
              {[
                { type: "Market Order", desc: "Instant execution at best available price" },
                { type: "Limit Order", desc: "Buy/sell at specific price or better" },
                { type: "Stop-Loss", desc: "Automatic sell when price drops below threshold" },
                { type: "Take-Profit", desc: "Automatic sell when target price is reached" },
              ].map((order, i) => (
                <div key={i} className="pb-4 border-b border-white/10 last:border-0">
                  <div className="font-semibold text-emerald-500 mb-1">{order.type}</div>
                  <p className="text-sm text-muted-foreground">{order.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
