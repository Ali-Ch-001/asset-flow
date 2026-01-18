"use client"

import { ArchitectureFlow } from "@/components/landing/ArchitectureFlow"
import { motion } from "framer-motion"
import { Database, Cpu, Cloud, Lock, Zap, GitBranch } from "lucide-react"

const TECH_STACK = [
  {
    category: "Matching Engine",
    icon: Zap,
    color: "emerald",
    technologies: [
      { name: "Rust", desc: "Core order matching logic for microsecond latency", why: "Memory safety + zero-cost abstractions" },
      { name: "Tokio", desc: "Async runtime for 100k+ concurrent connections", why: "Industry-leading async performance" },
      { name: "Python FFI", desc: "Bridge to Python backend services", why: "Leverage Python ecosystem" },
    ]
  },
  {
    category: "Backend Services",
    icon: Cpu,
    color: "blue",
    technologies: [
      { name: "FastAPI", desc: "REST API server with auto-generated docs", why: "Type safety + high performance" },
      { name: "PostgreSQL", desc: "Relational database for user data", why: "ACID guarantees" },
      { name: "Redis", desc: "In-memory cache for hot data", why: "Sub-millisecond reads" },
    ]
  },
  {
    category: "AI & ML",
    icon: GitBranch,
    color: "purple",
    technologies: [
      { name: "LayoutLMv3", desc: "Document understanding model", why: "95%+ accuracy on property docs" },
      { name: "TensorFlow", desc: "Model training and inference", why: "Production-grade ML" },
      { name: "Hugging Face", desc: "Pre-trained model hub", why: "Faster development" },
    ]
  },
  {
    category: "Blockchain",
    icon: Lock,
    color: "indigo",
    technologies: [
      { name: "Solidity", desc: "ERC-3643 security token contracts", why: "Industry standard" },
      { name: "Polygon", desc: "Layer 2 scaling solution", why: "Low fees + high throughput" },
      { name: "Fireblocks", desc: "MPC wallet infrastructure", why: "Institutional-grade custody" },
    ]
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    color: "orange",
    technologies: [
      { name: "AWS", desc: "Cloud hosting (EC2, RDS, S3)", why: "Reliability + scalability" },
      { name: "Kubernetes", desc: "Container orchestration", why: "Auto-scaling microservices" },
      { name: "Terraform", desc: "Infrastructure as code", why: "Reproducible deployments" },
    ]
  },
  {
    category: "Data Pipeline",
    icon: Database,
    color: "pink",
    technologies: [
      { name: "Apache Kafka", desc: "Event streaming platform", why: "Immutable audit log" },
      { name: "Apache Spark", desc: "Distributed data processing", why: "Analytics at scale" },
      { name: "ClickHouse", desc: "OLAP database for analytics", why: "Blazing fast aggregations" },
    ]
  },
];

const PERFORMANCE = [
  { metric: "Throughput", value: "100,000+ TPS", desc: "Orders per second" },
  { metric: "Latency", value: "<5ms", desc: "P99 order execution" },
  { metric: "Uptime", value: "99.99%", desc: "SLA guarantee" },
  { metric: "Availability Zones", value: "3", desc: "Multi-region deployment" },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
          Deep Tech <span className="text-gradient">Stack</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A breakdown of the high-performance engineering powering AssetFlow.
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERFORMANCE.map((perf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 bg-white/5 text-center"
            >
              <div className="text-3xl font-bold text-emerald-500 mb-2">{perf.value}</div>
              <div className="font-semibold mb-1">{perf.metric}</div>
              <div className="text-xs text-muted-foreground">{perf.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Cards */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold font-space-grotesk mb-12 text-center">
          Technology <span className="text-gradient">Components</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-${stack.color}-500/10 border border-${stack.color}-500/20 flex items-center justify-center text-${stack.color}-500`}>
                  <stack.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">{stack.category}</h3>
              </div>
              <div className="space-y-4">
                {stack.technologies.map((tech, j) => (
                  <div key={j} className="pb-4 border-b border-white/10 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-bold text-lg">{tech.name}</div>
                      <div className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">Why?</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{tech.desc}</p>
                    <p className="text-xs text-emerald-500 italic">{tech.why}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Architecture Flow */}
      <ArchitectureFlow />

      {/* Security & Audits */}
      <div className="container mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold font-space-grotesk mb-12 text-center">
          Security & <span className="text-gradient">Audits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Smart Contract Audits", provider: "CertiK & Trail of Bits", status: "Passed" },
            { title: "SOC 2 Type II", provider: "Deloitte", status: "Certified" },
            { title: "Penetration Testing", provider: "Quarterly", status: "Ongoing" },
          ].map((audit, i) => (
            <div key={i} className="glass-card p-6 rounded-xl border border-white/5 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">{audit.title}</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-500 font-semibold">{audit.status}</span>
              </div>
              <p className="text-sm text-muted-foreground">{audit.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
