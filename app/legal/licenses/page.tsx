export default function LicensesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Licenses & Regulatory Information</h1>
        
        <div className="space-y-6">
          {/* SECP License */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">SECP Regulatory Sandbox</h3>
                <p className="font-mono text-sm text-emerald-500">LIC-SANDBOX-2024-0042</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-sm font-semibold">
                Active
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              AssetFlow is authorized by the Securities and Exchange Commission of Pakistan to operate a pilot program 
              for fractionalized real estate tokenization under the Digital Assets Regulatory Sandbox.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Issued:</p>
                <p className="font-semibold">March 15, 2024</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Expires:</p>
                <p className="font-semibold">March 15, 2026</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Max Assets:</p>
                <p className="font-semibold">$500M</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Max Investors:</p>
                <p className="font-semibold">50,000</p>
              </div>
            </div>
          </div>

          {/* SOC 2 */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">SOC 2 Type II Certification</h3>
            <p className="font-mono text-sm text-blue-500 mb-4">CERT-SOC2-2025-0891</p>
            <p className="text-muted-foreground mb-4">
              Independently audited by Deloitte to verify our security, availability, and confidentiality controls.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Audit Period:</p>
                <p className="font-semibold">Jan 2025 - Dec 2025</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Auditor:</p>
                <p className="font-semibold">Deloitte Pakistan</p>
              </div>
            </div>
          </div>

          {/* ISO 27001 */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">ISO 27001:2022 Certified</h3>
            <p className="font-mono text-sm text-purple-500 mb-4">ISO-27001-PK-2024-112</p>
            <p className="text-muted-foreground mb-4">
              International standard for information security management systems (ISMS).
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Certified:</p>
                <p className="font-semibold">August 2024</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Certifying Body:</p>
                <p className="font-semibold">BSI Group Pakistan</p>
              </div>
            </div>
          </div>

          {/* Smart Contract Audits */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Contract Audits</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">CertiK Audit</p>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-semibold">PASSED</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive security review of ERC-3643 token contracts</p>
                <p className="text-xs text-muted-foreground">Completed: December 2024 • Score: 92/100</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Trail of Bits Audit</p>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-semibold">PASSED</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Security assessment of MPC wallet implementation</p>
                <p className="text-xs text-muted-foreground">Completed: January 2025 • No critical issues found</p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Data Protection Registration</h3>
            <p className="text-muted-foreground mb-4">
              Registered with the Digital Data Protection Authority (DDPA) as a Data Controller.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Registration ID:</p>
                <p className="font-mono font-semibold">DDPA-DC-2024-7821</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">DPO:</p>
                <p className="font-semibold">Fatima Khan</p>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Custodial Insurance</h3>
            <p className="text-muted-foreground mb-4">
              Digital asset custody is insured against theft, hacking, and employee fraud.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Coverage Amount:</p>
                <p className="font-semibold text-emerald-500 text-xl">$50M</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Provider:</p>
                <p className="font-semibold">Lloyd&apos;s of London</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Policy Number:</p>
                <p className="font-mono font-semibold">LLD-CY-2024-91023</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Valid Until:</p>
                <p className="font-semibold">December 31, 2025</p>
              </div>
            </div>
          </div>

          {/* Compliance Timeline */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Regulatory Milestones</h3>
            <div className="space-y-4">
              {[
                { date: "Q1 2024", event: "SECP Sandbox Application Approved" },
                { date: "Q2 2024", event: "ISO 27001 Certification Obtained" },
                { date: "Q3 2024", event: "SOC 2 Type II Audit Completed" },
                { date: "Q4 2024", event: "Smart Contract Audits (CertiK & Trail of Bits)" },
                { date: "Q1 2025", event: "Custodial Insurance Secured" },
                { date: "Q2 2026", event: "Full SECP License Application (Projected)" },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-white/5 last:border-0">
                  <div className="w-20 shrink-0 font-mono text-sm text-emerald-500">{milestone.date}</div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Documents */}
          <div className="glass-card p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">Downloadable Certificates</h3>
            <div className="space-y-3">
              {[
                "SECP Sandbox License",
                "SOC 2 Type II Report",
                "ISO 27001 Certificate",
                "CertiK Audit Report",
                "Trail of Bits Audit Report",
              ].map((doc, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <span className="text-sm font-semibold">{doc}</span>
                  <span className="text-xs text-muted-foreground">PDF</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
