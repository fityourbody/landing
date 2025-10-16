import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    cta: "Get Started",
    popular: false,
    perks: ["3 programs", "Basic tracking", "Community"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    cta: "Choose Pro",
    popular: true,
    perks: ["Unlimited programs", "Advanced analytics", "Coach messages"],
  },
  {
    name: "Elite",
    price: "$19/mo",
    cta: "Choose Elite",
    popular: false,
    perks: ["1:1 coach feedback", "Priority support", "Early access"],
  },
]

export default function PricingPage() {
  return (
    <main className="bg-white text-black">
      <SectionReveal className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold">Pricing</h1>
        <p className="text-neutral-600 mt-2 max-w-2xl">Start free and upgrade any time. Cancel whenever you like.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className="fyb-card p-6">
              {p.popular ? (
                <Badge className="mb-3 rounded-full bg-black text-white">Most popular</Badge>
              ) : null}
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <div className="text-2xl font-semibold">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span aria-hidden="true">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 rounded-full bg-black text-white hover:bg-black/80">
                <Link href="#">{p.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </SectionReveal>
    </main>
  )
}
