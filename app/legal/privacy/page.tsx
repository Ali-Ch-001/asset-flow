export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: January 18, 2026</p>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <p className="text-lg text-foreground">
              At AssetFlow, your privacy is paramount. This policy explains how we collect, use, protect, and share your personal information.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect information necessary to provide our services and comply with regulations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Information:</strong> Full name, date of birth, nationality, government-issued ID (passport, CNIC)</li>
              <li><strong>Contact Information:</strong> Email address, phone number, residential address</li>
              <li><strong>Financial Information:</strong> Bank account details, transaction history, source of funds</li>
              <li><strong>Biometric Data:</strong> Facial recognition data for liveness detection during KYC</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device fingerprint</li>
              <li><strong>Transaction Data:</strong> Trading activity, wallet addresses, portfolio holdings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">Your data is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Verification:</strong> KYC/AML compliance as required by SECP regulations</li>
              <li><strong>Transaction Processing:</strong> Executing trades, distributing rental income, settlement</li>
              <li><strong>Security & Fraud Prevention:</strong> Detecting suspicious activity, preventing account takeovers</li>
              <li><strong>Legal Compliance:</strong> Responding to regulatory inquiries, sanctions screening</li>
              <li><strong>Service Improvement:</strong> Analytics to enhance platform performance and user experience</li>
              <li><strong>Customer Support:</strong> Resolving issues and answering inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing and Third Parties</h2>
            <p className="mb-3">We share your data only when necessary:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regulatory Authorities:</strong> SECP, FBR (Federal Board of Revenue), law enforcement when legally required</li>
              <li><strong>KYC/AML Providers:</strong> Third-party verification services (e.g., Onfido, Jumio)</li>
              <li><strong>Blockchain Networks:</strong> Transaction data published on-chain is publicly visible</li>
              <li><strong>Service Providers:</strong> AWS (hosting), Stripe (payments), SendGrid (emails) - under strict NDAs</li>
              <li><strong>We NEVER sell your data to advertisers or third parties for marketing purposes.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights (GDPR & CCPA)</h2>
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of all data we hold about you</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to Object:</strong> Opt-out of certain processing activities (e.g., marketing)</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke permissions previously granted</li>
            </ul>
            <p className="mt-3">To exercise these rights, email <strong className="text-emerald-500">privacy@assetflow.com</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Policy</h2>
            <p>We use cookies and similar tracking technologies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Essential Cookies:</strong> Required for login, security, session management</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics for usage statistics (anonymized)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings (language, theme)</li>
            </ul>
            <p className="mt-3">You can disable non-essential cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
            <p>We retain your data for the following periods:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Account Data:</strong> 7 years after account closure (SECP requirement)</li>
              <li><strong>Transaction Records:</strong> 10 years (AML compliance)</li>
              <li><strong>KYC Documents:</strong> 5 years after last transaction</li>
              <li><strong>Marketing Consent:</strong> Until withdrawn</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. International Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside Pakistan, including the United States and EU. 
              We ensure adequate safeguards are in place (Standard Contractual Clauses, Privacy Shield equivalents) to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Security Measures</h2>
            <p className="mb-3">We employ industry-leading security practices:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Multi-party computation (MPC) for wallet security</li>
              <li>Regular penetration testing and security audits</li>
              <li>SOC 2 Type II compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
            <p>
              AssetFlow is not intended for individuals under 18. We do not knowingly collect data from minors. 
              If we discover such data, it will be deleted immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be notified via email and prominently displayed on the platform. 
              Continued use of AssetFlow constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <p className="mb-2"><strong>Data Protection Officer:</strong> Fatima Khan</p>
              <p className="mb-2"><strong>Email:</strong> <span className="text-emerald-500">dpo@assetflow.com</span></p>
              <p className="mb-2"><strong>Address:</strong> AssetFlow Inc., DHA Phase 6, Lahore, Pakistan</p>
              <p><strong>Phone:</strong> +92 (42) 1234-5678</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
