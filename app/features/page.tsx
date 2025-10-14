import { SectionReveal } from "@/components/section-reveal"
import { DeviceIphone15Pro } from "@/components/device-iphone-15-pro"
import { BackgroundStrands } from "@/components/background-strands"
import { Button } from "@/components/ui/button"
import { StoreBadges } from "@/components/store-badges"

export default function FeaturesPage() {
  return (
    <main>
      <SectionReveal className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-semibold text-balance max-w-3xl">
            Features that keep your training consistent
          </h1>
          <p className="text-white/70 mt-3 max-w-2xl">
            Build programs, track sets, visualize progress, and collaborate with coaches and friends.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 place-items-center">
            <DeviceIphone15Pro src="/images/feature-1.jpg" alt="Coach collaboration" />
            <DeviceIphone15Pro src="/images/feature-2.jpg" alt="Reminders & goals" />
            <DeviceIphone15Pro src="/images/about-left.jpg" alt="Workout detail" />
          </div>
          <div className="mt-10 flex items-center gap-3">
            <Button className="rounded-full fyb-pill">Try for Free</Button>
            <StoreBadges />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white text-black">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div className="fyb-card p-6">
            <h3 className="text-2xl font-semibold">Smart reminders</h3>
            <p className="text-neutral-600">Adaptive reminders ensure you never miss a session.</p>
          </div>
          <div className="fyb-card p-6">
            <h3 className="text-2xl font-semibold">Analytics that matter</h3>
            <p className="text-neutral-600">See progress with volume, intensity, and PR tracking.</p>
          </div>
        </div>
      </SectionReveal>
    </main>
  )
}
