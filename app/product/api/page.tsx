"use client"

import { motion } from "framer-motion"
import { Code, Lock, Zap, CheckCircle } from "lucide-react"
import { useState } from "react"

const API_ENDPOINTS = {
  market: [
    { method: "GET", path: "/v1/assets/list", desc: "List all tokenized assets" },
    { method: "GET", path: "/v1/market/orderbook/:assetId", desc: "Get bids/asks for an asset" },
    { method: "POST", path: "/v1/market/orders", desc: "Place a buy/sell order" },
    { method: "DELETE", path: "/v1/market/orders/:orderId", desc: "Cancel an order" },
  ],
  user: [
    { method: "GET", path: "/v1/user/portfolio", desc: "Get user holdings" },
    { method: "GET", path: "/v1/user/balance", desc: "Get wallet balances" },
    { method: "GET", path: "/v1/user/transactions", desc: "Transaction history" },
  ],
  data: [
    { method: "GET", path: "/v1/data/prices/:assetId", desc: "Historical price data" },
    { method: "GET", path: "/v1/data/analytics", desc: "Platform-wide statistics" },
  ],
};

const SDKS = [
  {
    lang: "Python",
    install: "pip install assetflow-sdk",
    example: `from assetflow import AssetFlowClient

client = AssetFlowClient(api_key="your_key")
assets = client.get_assets()
print(assets)`,
  },
  {
    lang: "JavaScript",
    install: "npm install @assetflow/sdk",
    example: `import { AssetFlowClient } from '@assetflow/sdk';

const client = new AssetFlowClient({ apiKey: 'your_key' });
const assets = await client.getAssets();
console.log(assets);`,
  },
  {
    lang: "Go",
    install: "go get github.com/assetflow/go-sdk",
    example: `import "github.com/assetflow/go-sdk"

client := assetflow.NewClient("your_key")
assets, _ := client.GetAssets()
fmt.Println(assets)`,
  },
];

export default function APIPage() {
  const [activeSDK, setActiveSDK] = useState("Python");

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            Developer <span className="text-gradient">API</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programmatic access to the AssetFlow engine for algorithmic trading and custom integrations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Zap, title: "Low Latency", desc: "Sub-10ms response times" },
            { icon: Lock, title: "Secure", desc: "API key + HMAC signatures" },
            { icon: CheckCircle, title: "RESTful", desc: "Clean, predictable endpoints" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 bg-white/5 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Endpoint Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space-grotesk mb-8">Endpoint Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(API_ENDPOINTS).map(([category, endpoints]) => (
              <div key={category} className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
                <h3 className="text-lg font-bold mb-4 capitalize">{category} API</h3>
                <div className="space-y-3">
                  {endpoints.map((endpoint, i) => (
                    <div key={i} className="text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                          endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-500' : 
                          endpoint.method === 'POST' ? 'bg-emerald-500/20 text-emerald-500' : 
                          'bg-red-500/20 text-red-500'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-muted-foreground">{endpoint.path}</code>
                      </div>
                      <p className="text-xs text-muted-foreground pl-12">{endpoint.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentication */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space-grotesk mb-8">Authentication</h2>
          <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">API Key + HMAC Signature</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All requests must include an API key and HMAC-SHA256 signature for security.
              </p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg font-mono text-sm">
              <div className="text-emerald-500 mb-2"># Generate signature</div>
              <div className="text-zinc-400">
                <span className="text-purple-500">import</span> hmac, hashlib
              </div>
              <div className="text-zinc-400 mt-2">
                signature = hmac.new(<span className="text-orange-500">api_secret</span>, <span className="text-orange-500">request_body</span>, hashlib.sha256).hexdigest()
              </div>
              <div className="text-zinc-400 mt-4">
                headers = {"{"}
              </div>
              <div className="text-zinc-400 pl-4">
                <span className="text-blue-400">&quot;X-API-KEY&quot;</span>: <span className="text-orange-500">&quot;your_api_key&quot;</span>,
              </div>
              <div className="text-zinc-400 pl-4">
                <span className="text-blue-400">&quot;X-SIGNATURE&quot;</span>: signature
              </div>
              <div className="text-zinc-400">{"}"}</div>
            </div>
          </div>
        </div>

        {/* Rate Limits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space-grotesk mb-8">Rate Limits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
              <h3 className="text-lg font-bold mb-4">Free Tier</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Requests/min:</span><span className="font-mono text-emerald-500">100</span></div>
                <div className="flex justify-between"><span>WebSocket connections:</span><span className="font-mono text-emerald-500">2</span></div>
                <div className="flex justify-between"><span>Historical data:</span><span className="font-mono text-muted-foreground">24h only</span></div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <h3 className="text-lg font-bold mb-4">Pro Tier <span className="text-emerald-500 text-sm">($99/mo)</span></h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Requests/min:</span><span className="font-mono text-emerald-500">1,000</span></div>
                <div className="flex justify-between"><span>WebSocket connections:</span><span className="font-mono text-emerald-500">20</span></div>
                <div className="flex justify-between"><span>Historical data:</span><span className="font-mono text-emerald-500">Unlimited</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-space-grotesk mb-8">Official SDKs</h2>
          <div className="flex gap-2 mb-6">
            {SDKS.map((sdk) => (
              <button
                key={sdk.lang}
                onClick={() => setActiveSDK(sdk.lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSDK === sdk.lang
                    ? "bg-emerald-500 text-black"
                    : "bg-white/5 border border-white/10 hover:border-emerald-500/50"
                }`}
              >
                {sdk.lang}
              </button>
            ))}
          </div>
          {SDKS.map((sdk) => activeSDK === sdk.lang && (
            <motion.div
              key={sdk.lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-0 rounded-2xl border border-white/5 bg-[#0A0A0A] overflow-hidden"
            >
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <Code className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="font-semibold">{sdk.lang} SDK</div>
                  <div className="text-xs text-muted-foreground font-mono">{sdk.install}</div>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-zinc-300 overflow-x-auto">
                  <code>{sdk.example}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Error Codes */}
        <div>
          <h2 className="text-3xl font-bold font-space-grotesk mb-8">Common Error Codes</h2>
          <div className="glass-card p-0 rounded-2xl border border-white/5 bg-white/5 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-semibold">Code</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                  <th className="text-left p-4 font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: "401", desc: "Unauthorized", solution: "Check API key and signature" },
                  { code: "429", desc: "Rate limit exceeded", solution: "Reduce request frequency" },
                  { code: "400", desc: "Invalid parameters", solution: "Review request payload" },
                  { code: "503", desc: "Service unavailable", solution: "Retry with exponential backoff" },
                ].map((error, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-mono text-red-500">{error.code}</td>
                    <td className="p-4">{error.desc}</td>
                    <td className="p-4 text-muted-foreground">{error.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
