export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert prose-emerald max-w-none">
            {children}
        </div>
      </div>
    </div>
  )
}
