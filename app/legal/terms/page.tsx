export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: January 18, 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using AssetFlow, you agree to be bound by these
              Terms of Service. If you do not agree, you may not use our
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>&quot;Platform&quot;:</strong> The AssetFlow website, mobile apps,
                and APIs
              </li>
              <li>
                <strong>&quot;Tokens&quot;:</strong> ERC-3643 compliant security tokens
                representing fractional property ownership
              </li>
              <li>
                <strong>&quot;SPV&quot;:</strong> Special Purpose Vehicle - the legal
                entity holding the underlying asset
              </li>
              <li>
                <strong>&quot;User&quot;:</strong> Any individual or entity accessing the
                Platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Eligibility
            </h2>
            <p className="mb-3">To use AssetFlow, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have legal capacity to enter into binding contracts</li>
              <li>
                Not be a resident of a restricted jurisdiction (North Korea,
                Iran, Syria, Crimea)
              </li>
              <li>Pass our KYC/AML verification process</li>
              <li>Not be on any sanctions lists (OFAC, UN, EU)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Account Registration
            </h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
            </ul>
            <p className="mt-3 text-amber-500 font-semibold">
              AssetFlow is not responsible for losses resulting from compromised
              credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. User Obligations
            </h2>
            <p className="mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Platform for illegal activities (money laundering,
                terrorist financing)
              </li>
              <li>
                Manipulate markets through wash trading, spoofing, or
                front-running
              </li>
              <li>
                Attempt to reverse engineer, hack, or exploit vulnerabilities
              </li>
              <li>Create multiple accounts to circumvent limits</li>
              <li>Provide false information during KYC</li>
              <li>Use automated bots without prior written approval</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Trading Rules
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Lock-up Period:</strong> 90 days from initial token
                purchase before secondary trading
              </li>
              <li>
                <strong>Order Types:</strong> Limit, Market, Stop-Loss orders
                supported
              </li>
              <li>
                <strong>Minimum Order Size:</strong> $100 equivalent
              </li>
              <li>
                <strong>Price Limits:</strong> ±10% circuit breakers to prevent
                flash crashes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Fees and Payments
            </h2>
            <p className="mb-3">AssetFlow charges the following fees:</p>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Trading Fee:</span>{" "}
                  <span className="font-mono text-emerald-500">2.0%</span>
                </li>
                <li className="flex justify-between">
                  <span>Performance Fee (on rental income):</span>{" "}
                  <span className="font-mono text-emerald-500">10%</span>
                </li>
                <li className="flex justify-between">
                  <span>Withdrawal Fee:</span>{" "}
                  <span className="font-mono text-emerald-500">0.1%</span>
                </li>
                <li className="flex justify-between">
                  <span>Inactivity Fee (&gt; 12 months):</span>{" "}
                  <span className="font-mono text-emerald-500">$5/month</span>
                </li>
              </ul>
            </div>
            <p className="mt-3 text-sm">
              Fees are subject to change with 30 days&apos; notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Investment Risks
            </h2>
            <div className="glass-card p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
              <p className="font-semibold text-amber-500 mb-3">
                ⚠️ IMPORTANT RISK DISCLOSURE
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Real estate investments carry risks including market
                  volatility, illiquidity, and potential loss of capital
                </li>
                <li>Rental income is not guaranteed and may fluctuate</li>
                <li>Property values may decline</li>
                <li>AssetFlow does not provide investment advice</li>
                <li>Past performance is not indicative of future results</li>
                <li>You should only invest what you can afford to lose</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, and technology on the Platform are
              owned by AssetFlow Inc. You may not copy, reproduce, or distribute
              any materials without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Disclaimers
            </h2>
            <p className="mb-3 uppercase font-semibold text-foreground">
              THE PLATFORM IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p>AssetFlow disclaims all warranties including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Accuracy of data or valuations</li>
              <li>Security against unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, AssetFlow shall not be
              liable for any indirect, incidental, special, or consequential
              damages including loss of profits, data, or use. Our total
              liability is limited to the fees paid by you in the 12 months
              prior to the event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless AssetFlow, its officers,
              directors, and employees from any claims, losses, or damages
              arising from your use of the Platform or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Dispute Resolution
            </h2>
            <p className="mb-3">Any disputes shall be resolved as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Negotiation:</strong> Good-faith attempt to resolve
                informally
              </li>
              <li>
                <strong>Mediation:</strong> LCCI (Lahore Chamber of Commerce)
                mediation
              </li>
              <li>
                <strong>Arbitration:</strong> Binding arbitration under
                Pakistani Arbitration Act 1940
              </li>
            </ul>
            <p className="mt-3 font-semibold text-foreground">
              Class action lawsuits are waived.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              14. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of Pakistan. Exclusive
              jurisdiction lies with the courts of Lahore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              15. Termination
            </h2>
            <p className="mb-3">
              AssetFlow may suspend or terminate your account if you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Fail KYC verification</li>
              <li>Are subject to legal or regulatory action</li>
            </ul>
            <p className="mt-3">
              You may close your account at any time, subject to settlement of
              outstanding obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              16. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Material
              changes will be notified 30 days in advance. Continued use after
              changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              17. Contact
            </h2>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <p className="mb-2">
                <strong>Legal Department</strong>
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <span className="text-emerald-500">legal@assetflow.com</span>
              </p>
              <p>
                <strong>Address:</strong> AssetFlow Inc., DHA Phase 6, Lahore,
                Pakistan
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
