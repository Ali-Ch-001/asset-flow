"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, DollarSign, Search, Bell, Settings, 
  ArrowUpRight, ArrowDownRight, X, Plus, Minus, BarChart2, Clock,
  Download, Upload, Filter, Star, StarOff, AlertCircle, CheckCircle,
  Activity, Calendar, Eye, EyeOff, Wallet, TrendingDown, FileText, PieChart
} from "lucide-react";
import { useState } from "react";

const USER_PORTFOLIO = {
  totalValue: 145680,
  totalInvested: 130000,
  returns: 15680,
  returnsPct: 12.06,
  availableBalance: 25430,
  lockedBalance: 8500,
  assets: [
    { id: "AF-8024-LHR", name: "DHA Phase 6", tokens: 45, avgPrice: 4320, currentPrice: 4500, value: 202500 },
    { id: "AF-9012-ISB", name: "F-7 Plaza", tokens: 18, avgPrice: 7550, currentPrice: 7800, value: 140400 },
    { id: "AF-7823-KHI", name: "Clifton Tower", tokens: 12, avgPrice: 6100, currentPrice: 6200, value: 74400 },
  ],
};

const PROPERTIES = [
  {
    id: "AF-8024-LHR",
    name: "DHA Phase 6 Residential Complex",
    shortName: "DHA Phase 6",
    location: "Defense Housing Authority, Lahore",
    tokenPrice: 4500,
    change24h: 2.3,
    change7d: 5.8,
    change30d: 12.4,
    volume24h: 325000,
    marketCap: 45000000,
    roi: 12.5,
    occupancy: 95,
    available: 7500,
    totalTokens: 10000,
    type: "Residential",
    yearBuilt: 2022,
    sqft: 12000,
    floors: 4,
    units: 24,
    monthlyRent: 2800000,
    nextDividend: "Feb 1, 2026",
    verified: true,
  },
  {
    id: "AF-9012-ISB",
    name: "F-7 Markaz Commercial Plaza",
    shortName: "F-7 Plaza",
    location: "F-7 Markaz, Islamabad",
    tokenPrice: 7800,
    change24h: -0.8,
    change7d: 2.1,
    change30d: 8.9,
    volume24h: 189000,
    marketCap: 78000000,
    roi: 14.2,
    occupancy: 100,
    available: 3200,
    totalTokens: 10000,
    type: "Commercial",
    yearBuilt: 2023,
    sqft: 25000,
    floors: 8,
    units: 48,
    monthlyRent: 5200000,
    nextDividend: "Feb 1, 2026",
    verified: true,
  },
  {
    id: "AF-7823-KHI",
    name: "Clifton Luxury Residences",
    shortName: "Clifton Tower",
    location: "Clifton Block 8, Karachi",
    tokenPrice: 6200,
    change24h: 1.5,
    change7d: 3.2,
    change30d: 9.7,
    volume24h: 167000,
    marketCap: 62000000,
    roi: 11.8,
    occupancy: 92,
    available: 5400,
    totalTokens: 10000,
    type: "Residential",
    yearBuilt: 2021,
    sqft: 18000,
    floors: 15,
    units: 36,
    monthlyRent: 3600000,
    nextDividend: "Feb 1, 2026",
    verified: true,
  },
];

type Property = typeof PROPERTIES[0];

const generateOrderBook = (basePrice: number) => {
  const bids = Array.from({ length: 12 }, (_, i) => ({
    price: basePrice - (i + 1) * 10 - Math.random() * 5,
    quantity: Math.floor(Math.random() * 100) + 20,
    total: 0,
  }));
  const asks = Array.from({ length: 12 }, (_, i) => ({
    price: basePrice + (i + 1) * 10 + Math.random() * 5,
    quantity: Math.floor(Math.random() * 100) + 20,
    total: 0,
  }));
  bids.forEach((bid) => (bid.total = bid.price * bid.quantity));
  asks.forEach((ask) => (ask.total = ask.price * ask.quantity));
  return { bids, asks };
};

const RECENT_TRADES = [
  { price: 4502, quantity: 12, time: "14:23:45", type: "buy" as const, user: "User_8821" },
  { price: 4498, quantity: 25, time: "14:22:31", type: "sell" as const, user: "User_7342" },
  { price: 4500, quantity: 8, time: "14:21:12", type: "buy" as const, user: "User_9103" },
  { price: 4495, quantity: 15, time: "14:19:58", type: "sell" as const, user: "User_6754" },
  { price: 4503, quantity: 30, time: "14:18:22", type: "buy" as const, user: "User_4521" },
  { price: 4501, quantity: 18, time: "14:16:45", type: "buy" as const, user: "User_3298" },
  { price: 4497, quantity: 22, time: "14:15:10", type: "sell" as const, user: "User_8903" },
];

const TRANSACTION_HISTORY = [
  { id: "TX-1234", date: "2026-01-18", type: "buy", asset: "DHA Phase 6", tokens: 15, price: 4450, total: 66750, status: "completed" },
  { id: "TX-1233", date: "2026-01-17", type: "sell", asset: "F-7 Plaza", tokens: 5, price: 7820, total: 39100, status: "completed" },
  { id: "TX-1232", date: "2026-01-15", type: "dividend", asset: "Clifton Tower", tokens: 12, price: 125, total: 1500, status: "completed" },
  { id: "TX-1231", date: "2026-01-14", type: "buy", asset: "F-7 Plaza", tokens: 8, price: 7650, total: 61200, status: "completed" },
  { id: "TX-1230", date: "2026-01-12", type: "buy", asset: "Clifton Tower", tokens: 12, price: 6100, total: 73200, status: "completed" },
];

const PRICE_ALERTS = [
  { id: "AL-001", asset: "DHA Phase 6", condition: "above", price: 4600, status: "active" },
  { id: "AL-002", asset: "F-7 Plaza", condition: "below", price: 7500, status: "active" },
];

export default function MarketplacePage() {
  const [selectedAsset, setSelectedAsset] = useState<Property | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderType, setOrderType] = useState<"limit" | "market" | "stop-loss" | "take-profit">("limit");
  const [orderSide, setOrderSide] = useState<"buy" | "sell">("buy");
  const [orderQuantity, setOrderQuantity] = useState(10);
  const [orderPrice, setOrderPrice] = useState(4500);
  const [stopPrice, setStopPrice] = useState(4400);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"trading" | "analytics" | "history" | "portfolio">("trading");
  const [watchlist, setWatchlist] = useState<string[]>(["AF-8024-LHR"]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<"24h" | "7d" | "30d" | "1y">("24h");

  const orderBook = selectedAsset ? generateOrderBook(selectedAsset.tokenPrice) : null;

  const toggleWatchlist = (assetId: string) => {
    setWatchlist(prev =>
      prev.includes(assetId) ? prev.filter(id => id !== assetId) : [...prev, assetId]
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-[1920px]">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold font-space-grotesk mb-2">
              Professional <span className="text-gradient">Trading Terminal</span>
            </h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              Live Market Data • Updated every 2 seconds
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
            </button>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <AlertCircle className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="font-mono">{balanceVisible ? `$${USER_PORTFOLIO.availableBalance.toLocaleString()}` : "***"}</span>
              <span onClick={() => setBalanceVisible(!balanceVisible)} className="cursor-pointer p-1 hover:bg-white/10 rounded transition-colors">
                {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </span>
            </button>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Total Value</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold">${USER_PORTFOLIO.totalValue.toLocaleString()}</div>
            <div className="text-xs text-emerald-500 mt-1">+{USER_PORTFOLIO.returnsPct}%</div>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">P&L</span>
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-emerald-500">+${USER_PORTFOLIO.returns.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">All time</div>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Available</span>
              <Wallet className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">${USER_PORTFOLIO.availableBalance.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">Ready to trade</div>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Locked</span>
              <Clock className="w-4 h-4 text-orange-500" />
            </div>
            <div className="text-2xl font-bold">${USER_PORTFOLIO.lockedBalance.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">In orders</div>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Assets</span>
              <PieChart className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold">{USER_PORTFOLIO.assets.length}</div>
            <div className="text-xs text-muted-foreground mt-1">{USER_PORTFOLIO.assets.reduce((s, a) => s + a.tokens, 0)} tokens</div>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Next Payout</span>
              <Calendar className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold">$456</div>
            <div className="text-xs text-muted-foreground mt-1">Feb 1</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: "trading", label: "Trading", icon: BarChart2 },
            { id: "analytics", label: "Analytics", icon: PieChart },
            { id: "history", label: "History", icon: FileText },
            { id: "portfolio", label: "Portfolio", icon: Wallet },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-black"
                  : "bg-white/5 border border-white/10 hover:border-emerald-500/50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Trading View */}
        {activeTab === "trading" && (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Asset Watchlist */}
            <div className="xl:col-span-1">
              <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Star className="w-5 h-5 text-emerald-500" />
                    Watchlist
                  </h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none text-sm w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2 max-h-[800px] overflow-y-auto">
                  {PROPERTIES.map((asset) => (
                    <div
                      key={asset.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all relative ${
                        selectedAsset?.id === asset.id
                          ? "bg-emerald-500/10 border border-emerald-500/30"
                          : "bg-white/5 border border-white/10 hover:border-emerald-500/20"
                      }`}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWatchlist(asset.id);
                        }}
                        className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        {watchlist.includes(asset.id) ? (
                          <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                        ) : (
                          <StarOff className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                      <div onClick={() => setSelectedAsset(asset)}>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-bold flex items-center gap-2">
                              {asset.shortName}
                              {asset.verified && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                            </div>
                            <div className="text-xs text-muted-foreground">{asset.id}</div>
                          </div>
                          <div className={`flex items-center gap-1 text-sm ${asset.change24h >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                            {asset.change24h >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {Math.abs(asset.change24h)}%
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-lg font-bold">${asset.tokenPrice.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">{asset.roi}% APY</div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Vol: ${(asset.volume24h / 1000).toFixed(0)}K</span>
                          <span className="text-muted-foreground">{asset.occupancy}% Occ.</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Trading Panel */}
            <div className="xl:col-span-3">
              {selectedAsset ? (
                <div className="space-y-4">
                  {/* Asset Info */}
                  <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold">{selectedAsset.name}</h2>
                          {selectedAsset.verified && <CheckCircle className="w-6 h-6 text-emerald-500" />}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{selectedAsset.location}</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground mb-1">Type</div>
                            <div className="font-semibold">{selectedAsset.type}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Built</div>
                            <div className="font-semibold">{selectedAsset.yearBuilt}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Size</div>
                            <div className="font-semibold">{selectedAsset.sqft.toLocaleString()} sqft</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Floors</div>
                            <div className="font-semibold">{selectedAsset.floors}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Units</div>
                            <div className="font-semibold">{selectedAsset.units}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setShowOrderForm(true)}
                          className="px-6 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all font-semibold whitespace-nowrap"
                        >
                          Place Order
                        </button>
                        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors font-semibold whitespace-nowrap">
                          Set Alert
                        </button>
                      </div>
                    </div>

                    {/* Price Timeframes */}
                    <div className="flex gap-2 mb-4">
                      {(["24h", "7d", "30d", "1y"] as const).map((tf) => (
                        <button
                          key={tf}
                          onClick={() => setSelectedTimeframe(tf)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            selectedTimeframe === tf
                              ? "bg-emerald-500 text-black"
                              : "bg-white/5 border border-white/10 hover:border-emerald-500/50"
                          }`}
                        >
                          {tf.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    {/* Price Stats */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-muted-foreground mb-1">Current Price</div>
                        <div className="text-xl font-bold font-mono">${selectedAsset.tokenPrice}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-muted-foreground mb-1">24h Change</div>
                        <div className={`text-xl font-bold ${selectedAsset.change24h >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                          {selectedAsset.change24h >= 0 ? "+" : ""}{selectedAsset.change24h}%
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-muted-foreground mb-1">Market Cap</div>
                        <div className="text-xl font-bold font-mono">${(selectedAsset.marketCap / 1000000).toFixed(1)}M</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-muted-foreground mb-1">24h Volume</div>
                        <div className="text-xl font-bold font-mono">${(selectedAsset.volume24h / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                  </div>

                  {/* Order Book & Recent Trades */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Buy Orders */}
                    <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        Buy Orders
                      </h3>
                      <div className="space-y-1 text-sm font-mono max-h-[400px] overflow-y-auto">
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2 pb-2 border-b border-white/10 sticky top-0 bg-black">
                          <div>Price</div>
                          <div className="text-right">Qty</div>
                          <div className="text-right">Total</div>
                        </div>
                        {orderBook?.bids.map((bid, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 hover:bg-emerald-500/5 p-1 rounded transition-colors cursor-pointer">
                            <div className="text-emerald-500">${bid.price.toFixed(2)}</div>
                            <div className="text-right">{bid.quantity}</div>
                            <div className="text-right text-muted-foreground text-xs">${bid.total.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sell Orders */}
                    <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-500" />
                        Sell Orders
                      </h3>
                      <div className="space-y-1 text-sm font-mono max-h-[400px] overflow-y-auto">
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2 pb-2 border-b border-white/10 sticky top-0 bg-black">
                          <div>Price</div>
                          <div className="text-right">Qty</div>
                          <div className="text-right">Total</div>
                        </div>
                        {orderBook?.asks.map((ask, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 hover:bg-red-500/5 p-1 rounded transition-colors cursor-pointer">
                            <div className="text-red-500">${ask.price.toFixed(2)}</div>
                            <div className="text-right">{ask.quantity}</div>
                            <div className="text-right text-muted-foreground text-xs">${ask.total.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Trades */}
                    <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-500" />
                        Recent Trades
                      </h3>
                      <div className="space-y-2 text-sm font-mono max-h-[400px] overflow-y-auto">
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2 pb-2 border-b border-white/10 sticky top-0 bg-black">
                          <div>Time</div>
                          <div className="text-right">Price</div>
                          <div className="text-right">Qty</div>
                        </div>
                        {RECENT_TRADES.map((trade, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 hover:bg-white/5 p-1 rounded transition-colors">
                            <div className="text-muted-foreground text-xs">{trade.time}</div>
                            <div className={`text-right ${trade.type === "buy" ? "text-emerald-500" : "text-red-500"}`}>
                              ${trade.price}
                            </div>
                            <div className="text-right">{trade.quantity}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-card p-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center min-h-[600px]">
                  <div className="text-center">
                    <BarChart2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-xl text-muted-foreground mb-2">Select an asset from watchlist</p>
                    <p className="text-sm text-muted-foreground">Click on any asset to view detailed trading interface</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
              <h3 className="text-2xl font-bold mb-6">Performance Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-muted-foreground">Total ROI</span>
                  <span className="text-2xl font-bold text-emerald-500">+12.06%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-muted-foreground">Best Performing</span>
                  <span className="font-bold">F-7 Plaza (+14.2%)</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-muted-foreground">Total Dividends</span>
                  <span className="text-2xl font-bold">$3,240</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
              <h3 className="text-2xl font-bold mb-6">Asset Allocation</h3>
              <div className="space-y-3">
                {USER_PORTFOLIO.assets.map((asset) => {
                  const percentage = (asset.value / USER_PORTFOLIO.totalValue) * 100;
                  return (
                    <div key={asset.id}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{asset.name}</span>
                        <span className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-emerald-500 to-blue-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* History View */}
        {activeTab === "history" && (
          <div className="glass-card p-0 rounded-xl border border-white/5 bg-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Transaction History</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
            <table className="w-full">
              <thead className="border-b border-white/10 bg-white/5">
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="p-4">Date</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Asset</th>
                  <th className="p-4 text-right">Tokens</th>
                  <th className="p-4 text-right">Price</th>
                  <th className="p-4 text-right">Total</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTION_HISTORY.map((tx) => (
                  <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-mono text-sm">{tx.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tx.type === "buy" ? "bg-emerald-500/20 text-emerald-500" :
                        tx.type === "sell" ? "bg-red-500/20 text-red-500" :
                        "bg-blue-500/20 text-blue-500"
                      }`}>
                        {tx.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 font-semibold">{tx.asset}</td>
                    <td className="p-4 text-right font-mono">{tx.tokens}</td>
                    <td className="p-4 text-right font-mono">${tx.price}</td>
                    <td className="p-4 text-right font-mono font-bold">${tx.total.toLocaleString()}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-500 text-xs">
                        <CheckCircle className="w-4 h-4" />
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Portfolio View */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
              <h2 className="text-2xl font-bold mb-6">My Holdings</h2>
              <div className="space-y-4">
                {USER_PORTFOLIO.assets.map((asset) => {
                  const pl = (asset.currentPrice - asset.avgPrice) * asset.tokens;
                  const plPct = ((asset.currentPrice - asset.avgPrice) / asset.avgPrice) * 100;
                  return (
                    <div key={asset.id} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-bold mb-1">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground font-mono">{asset.id}</p>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Holdings</div>
                          <div className="text-lg font-bold font-mono">{asset.tokens} tokens</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Avg / Current</div>
                          <div className="text-lg font-mono">${asset.avgPrice} / ${asset.currentPrice}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">P&L</div>
                          <div className={`text-lg font-bold flex items-center gap-2 ${pl >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                            {pl >= 0 ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                            ${Math.abs(pl).toLocaleString()} ({plPct.toFixed(2)}%)
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Alerts */}
            <div className="glass-card p-8 rounded-xl border border-white/5 bg-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Bell className="w-6 h-6 text-emerald-500" />
                  Price Alerts
                </h2>
                <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors font-semibold text-black flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Alert
                </button>
              </div>
              <div className="space-y-3">
                {PRICE_ALERTS.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-4">
                      <AlertCircle className="w-5 h-5 text-emerald-500" />
                      <div>
                        <div className="font-semibold">{alert.asset}</div>
                        <div className="text-sm text-muted-foreground">
                          Alert when price goes {alert.condition} ${alert.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-500">
                        {alert.status}
                      </span>
                      <button className="p-2 hover:bg-white/10 rounded transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advanced Order Form Modal */}
        <AnimatePresence>
          {showOrderForm && selectedAsset && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setShowOrderForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="glass-card max-w-2xl w-full p-8 rounded-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Place Order</h3>
                    <p className="text-sm text-muted-foreground">{selectedAsset.name}</p>
                  </div>
                  <button onClick={() => setShowOrderForm(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Order Type Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                  {(["limit", "market", "stop-loss", "take-profit"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`py-3 rounded-xl font-semibold transition-all capitalize text-sm ${
                        orderType === type ? "bg-emerald-500 text-black" : "bg-white/5 border border-white/10"
                      }`}
                    >
                      {type.replace("-", " ")}
                    </button>
                  ))}
                </div>

                {/* Buy/Sell Toggle */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setOrderSide("buy")}
                    className={`py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      orderSide === "buy" ? "bg-emerald-500 text-black" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <Upload className="w-5 h-5" />
                    Buy
                  </button>
                  <button
                    onClick={() => setOrderSide("sell")}
                    className={`py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      orderSide === "sell" ? "bg-red-500 text-black" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <Download className="w-5 h-5" />
                    Sell
                  </button>
                </div>

                {/* Order Inputs */}
                <div className="space-y-4 mb-6">
                  {/* Quantity */}
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Quantity</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <input
                        type="number"
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(Number(e.target.value))}
                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none font-mono text-center text-lg"
                      />
                      <button
                        onClick={() => setOrderQuantity(orderQuantity + 1)}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Price (Limit Order) */}
                  {(orderType === "limit" || orderType === "take-profit") && (
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        {orderType === "take-profit" ? "Take Profit Price" : "Limit Price"}
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={orderPrice}
                          onChange={(e) => setOrderPrice(Number(e.target.value))}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none font-mono text-lg"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">USD</div>
                      </div>
                    </div>
                  )}

                  {/* Stop Price (Stop-Loss) */}
                  {orderType === "stop-loss" && (
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Stop Loss Price</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={stopPrice}
                          onChange={(e) => setStopPrice(Number(e.target.value))}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none font-mono text-lg"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">USD</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="glass-card p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <h4 className="font-semibold mb-4">Order Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Total</span>
                      <span className="font-mono font-bold text-lg">
                        ${((orderType === "limit" || orderType === "take-profit" ? orderPrice : orderType === "stop-loss" ? stopPrice : selectedAsset.tokenPrice) * orderQuantity).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Trading Fee (2%)</span>
                      <span className="font-mono">
                        ${(((orderType === "limit" || orderType === "take-profit" ? orderPrice : orderType === "stop-loss" ? stopPrice : selectedAsset.tokenPrice) * orderQuantity * 0.02)).toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex justify-between">
                      <span className="font-semibold">Grand Total</span>
                      <span className="font-mono font-bold text-xl">
                        ${(((orderType === "limit" || orderType === "take-profit" ? orderPrice : orderType === "stop-loss" ? stopPrice : selectedAsset.tokenPrice) * orderQuantity * 1.02)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowOrderForm(false)}
                    className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setShowOrderForm(false);
                      // Order submission logic
                    }}
                    className={`py-4 rounded-xl font-semibold text-lg transition-all ${
                      orderSide === "buy"
                        ? "bg-linear-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                        : "bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    }`}
                  >
                    {orderSide === "buy" ? "Place Buy Order" : "Place Sell Order"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
