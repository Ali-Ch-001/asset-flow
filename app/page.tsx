import { Hero } from "@/components/landing/Hero";
import { AssetTerminal } from "@/components/landing/AssetTerminal";
import { ArchitectureFlow } from "@/components/landing/ArchitectureFlow";
import { OperationalFlow } from "@/components/landing/OperationalFlow";
import { AIAnalysis } from "@/components/landing/AIAnalysis";
import { SecurityCustody } from "@/components/landing/SecurityCustody";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-emerald-500/30">
      <Hero />
      <AssetTerminal />
      <ArchitectureFlow />
      <AIAnalysis />
      <SecurityCustody />
      <OperationalFlow />
    </main>
  );
}
