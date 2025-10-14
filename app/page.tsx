import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import { Starburst } from "@/components/starburst"
import { BackgroundStrands } from "@/components/background-strands"
import { DeviceIphone15Pro } from "@/components/device-iphone-15-pro"
import { StoreBadges } from "@/components/store-badges"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* NAV */}
      <header className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-5 rounded-sm"
              style={{ background: "var(--fyb-brand)" }}
              aria-hidden="true"
            />
            <span className="font-semibold tracking-tight">FYB</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/features" className="hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="rounded-full">
              Log in
            </Button>
            <Button className="rounded-full fyb-pill hover:opacity-90">Start Free</Button>
          </div>
        </div>

        {/* HERO */}
        <SectionReveal className="container mx-auto px-4 pb-20 pt-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
                Easy way to get full control of your workouts
              </h1>
              <p className="text-white/70 max-w-prose">
                FYB helps you plan training, track progress, and stay motivated. Build custom routines, log sets and
                reps, and see your body fit your goals.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button className="rounded-full fyb-pill hover:opacity-90">Get the App</Button>
                <Button variant="secondary" className="rounded-full">
                  Learn more
                </Button>
              </div>
              {/* Mini social proof row */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image src="/images/cta-phones.png" alt="" width={1} height={1} className="hidden" />
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`/placeholder.svg?height=40&width=40&query=member%20avatar`}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-background"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-lg font-semibold" style={{ color: "var(--fyb-brand)" }}>
                    1.2M
                  </div>
                  <p className="text-xs text-white/60">Athletes already use FYB</p>
                </div>
              </div>
              {/* Add store badges */}
              <StoreBadges className="mt-4" />
            </div>

            <div className="relative">
              <div className="absolute right-0 top-6 -z-10 h-72 w-72 md:h-96 md:w-96">
                <Starburst className="h-full w-full opacity-70" />
              </div>
              <DeviceIphone15Pro
                className="mx-auto md:mr-8"
                roundedBg
                src="/images/hero.jpg"
                alt="FYB app preview in iPhone 15 Pro"
              />
              {/* Floating chips to mimic screenshot composition */}
              <div className="absolute -bottom-8 left-6 hidden md:block">
                <div className="fyb-card px-4 py-2 text-sm shadow-sm">Create a leg day plan</div>
              </div>
              <div className="absolute bottom-24 -right-8 hidden md:block">
                <div className="fyb-card px-4 py-2 text-sm shadow-sm">Due: Thu 6 PM</div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </header>

      {/* FEATURES (light slice) */}
      <SectionReveal id="features" className="relative bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <div className="relative">
            <Starburst className="absolute right-8 -top-8 h-24 w-24 opacity-70" />
            <p className="text-xs tracking-widest text-neutral-500 mb-3">FEATURES</p>
            <h2 className="text-balance text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
              FYB offers a comprehensive suite of features to help you stay on top of your training
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <button className="h-10 w-10 grid place-items-center rounded-full border border-neutral-200 bg-white">
                ←
              </button>
              <button className="h-10 w-10 grid place-items-center rounded-full bg-black text-white">→</button>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="fyb-card p-6">
              <h3 className="text-xl font-semibold mb-2">Collaboration with coaches</h3>
              <p className="text-neutral-600">Share programs, assign workouts, and chat with your coach.</p>
              <div className="mt-6">
                <Image
                  src="/images/feature-1.jpg"
                  alt="FYB coach collaboration UI"
                  width={880}
                  height={400}
                  className="w-full rounded-2xl border"
                />
              </div>
            </div>
            <div className="fyb-card p-6">
              <h3 className="text-xl font-semibold mb-2">Smart reminders and goals</h3>
              <p className="text-neutral-600">Never miss sessions. Get adaptive reminders and track PBs.</p>
              <div className="mt-6">
                <Image
                  src="/images/feature-2.jpg"
                  alt="FYB goals and reminders UI"
                  width={880}
                  height={400}
                  className="w-full rounded-2xl border"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-balance">Programs that fit your body</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">
            Choose evidence-based programs designed for goals like Fat Loss, Hypertrophy, Strength, and Mobility.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Hypertrophy Push/Pull/Legs" },
              { t: "Fat Loss Conditioning" },
              { t: "Powerbuilding 5x Week" },
              { t: "Mobility & Core" },
            ].map((p) => (
              <div key={p.t} className="fyb-card p-5">
                <img
                  src={"/placeholder.svg?height=160&width=320&query=gym%20program%20preview"}
                  alt=""
                  width={320}
                  height={160}
                  className="w-full rounded-xl border"
                />
                <h3 className="mt-4 font-semibold">{p.t}</h3>
                <p className="text-sm text-neutral-600">4–12 weeks • Progressive • Coach-reviewed</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ABOUT */}
      <SectionReveal id="about" className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[32px] bg-[color:var(--fyb-brand-weak)] p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                <DeviceIphone15Pro
                  src="/images/about-left.jpg"
                  alt="FYB workout detail"
                  className="-rotate-6 mx-auto"
                />
                <DeviceIphone15Pro
                  src="/images/about-right.jpg"
                  alt="FYB create workout"
                  className="rotate-3 mx-auto"
                />
              </div>
            </div>
            <button
              aria-label="Play demo"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white text-black grid place-items-center border shadow-md"
            >
              ▶
            </button>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-2">ABOUT APP</p>
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">
              Stay organized and increase productivity
            </h3>
            <p className="text-white/70 mb-6">
              Plan training blocks, monitor recovery, and keep every session aligned with your goals. Collaborate with
              coaches and friends to push further—together.
            </p>
            <Button className="rounded-full fyb-pill hover:opacity-90">Try for Free</Button>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24">
          <h3 className="text-3xl md:text-5xl font-semibold text-center">Transformations from the FYB community</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={"/placeholder.svg?height=44&width=44&query=member%20avatar"}
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Member {i}</div>
                    <div className="text-xs text-white/60">12-week program</div>
                  </div>
                </div>
                <p className="mt-4 text-white/80">
                  “FYB made my routine consistent and progressive. I hit PRs while dropping body fat. The coaching notes
                  were clutch!”
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="pricing" className="bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-widest text-neutral-500 mb-2">PRICING</p>
              <h3 className="text-3xl md:text-5xl font-semibold">Simple, flexible plans</h3>
              <p className="text-neutral-600 mt-2">Start free. Upgrade any time.</p>
            </div>
            <Link href="/pricing" className="text-sm font-medium underline">
              See full pricing
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Free", price: "$0", perks: ["3 programs", "Basic tracking", "Community"] },
              { name: "Pro", price: "$9/mo", perks: ["Unlimited programs", "Advanced analytics", "Coach messages"] },
              { name: "Elite", price: "$19/mo", perks: ["1:1 coach feedback", "Priority support", "Early features"] },
            ].map((p) => (
              <div key={p.name} className="fyb-card p-6">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-semibold">{p.name}</h4>
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
                  href="/pricing"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-white"
                >
                  Choose plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="faq" className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24">
          <div className="flex items-end justify-between gap-6">
            <h3 className="text-3xl md:text-5xl font-semibold">Frequently asked questions</h3>
            <Link href="/faq" className="text-sm font-medium underline">
              View all
            </Link>
          </div>
          <Accordion type="single" collapsible className="mt-6 max-w-3xl">
            <AccordionItem value="q1">
              <AccordionTrigger>Is FYB free to start?</AccordionTrigger>
              <AccordionContent>Yes, you can start for free and upgrade any time.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Can I import my current program?</AccordionTrigger>
              <AccordionContent>Absolutely. Create custom workouts or import templates easily.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Do you support wearable integrations?</AccordionTrigger>
              <AccordionContent>Apple Health and Google Fit support is planned and rolling out soon.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionReveal>

      {/* CTA with three phones */}
      <SectionReveal className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24 text-center">
          <h3 className="text-4xl md:text-5xl font-semibold text-balance">
            Start your free Trial today just in one click
          </h3>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Download FYB, build your first plan, and see progress from day one. Cancel anytime.
          </p>
          <div className="mt-6">
            <Button className="rounded-full fyb-pill hover:opacity-90">Start for Free</Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            <DeviceIphone15Pro src="/images/cta-phones-left.jpg" alt="FYB screen 1" />
            <DeviceIphone15Pro src="/images/cta-phones-center.jpg" alt="FYB screen 2" />
            <DeviceIphone15Pro src="/images/cta-phones-right.jpg" alt="FYB screen 3" />
          </div>
        </div>
      </SectionReveal>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center text-sm text-white/60 py-10">
        © {new Date().getFullYear()} FYB — Fit Your Body
      </footer>
    </main>
  )
}
