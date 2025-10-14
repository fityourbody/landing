import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"

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
            <div key={p.name} className="fyb-card p-6">
              {p.popular && (
                <div className="mb-3 inline-block rounded-full bg-black px-3 py-1 text-xs text-white">Most popular</div>
              )}
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
              <Link
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2 text-white"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </SectionReveal>
    </main>
  )
}
