"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import { Starburst } from "@/components/starburst"
import { BackgroundStrands } from "@/components/background-strands"
import { DeviceIphone15Pro } from "@/components/device-iphone-15-pro"
import { StoreBadges } from "@/components/store-badges"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type LanguageCode = "id" | "en"

type Translation = {
  brand: string
  nav: { features: string; pricing: string; faq: string; about: string; company: string }
  auth: { login: string; start: string }
  hero: {
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    socialHighlight: string
    socialCaption: string
  }
  features: {
    label: string
    title: string
    description: string
    cards: Array<{ title: string; description: string; image: string; icon: string }>
  }
  programs: { title: string; description: string; items: Array<{ title: string; meta: string }> }
  aboutApp: { label: string; title: string; description: string; cta: string }
  aboutCompany: {
    label: string
    title: string
    description: string
    values: Array<{ title: string; description: string; icon: string }>
    stats: Array<{ value: string; label: string }>
  }
  community: { title: string; quote: string; program: string }
  pricing: {
    label: string
    title: string
    subtitle: string
    cta: string
    plans: Array<{ name: string; price: string; perks: string[] }>
  }
  faq: { title: string; viewAll: string; items: Array<{ q: string; a: string }> }
  cta: { title: string; description: string; button: string }
  footer: string
}

const translations: Record<LanguageCode, Translation> = {
  id: {
    brand: "FYB",
    nav: {
      features: "Fitur",
      pricing: "Harga",
      faq: "FAQ",
      about: "Tentang Aplikasi",
      company: "Tentang Kami",
    },
    auth: { login: "Masuk", start: "Mulai Gratis" },
    hero: {
      title: "Cara mudah mengendalikan seluruh latihan Anda",
      description:
        "FYB membantu Anda merencanakan latihan, memantau progres, dan tetap termotivasi. Susun rutinitas khusus, catat setiap set dan repetisi, lalu lihat tubuh Anda bergerak sesuai target.",
      primaryCta: "Unduh Aplikasi",
      secondaryCta: "Pelajari lebih lanjut",
      socialHighlight: "1,2 Juta",
      socialCaption: "Atlet telah mempercayai FYB",
    },
    features: {
      label: "FITUR",
      title: "FYB menghadirkan rangkaian fitur lengkap untuk menjaga latihan Anda tetap teratur",
      description:
        "Dari kolaborasi dengan pelatih hingga pengingat pintar, semuanya dirancang agar sesi latihan Anda konsisten dan menyenangkan.",
      cards: [
        {
          title: "Kolaborasi bersama pelatih",
          description: "Bagikan program, tetapkan latihan, dan diskusikan progres secara real-time.",
          image: "/images/feature-1.jpg",
          icon: "solar:users-group-rounded-bold-duotone",
        },
        {
          title: "Pengingat cerdas & sasaran",
          description: "Notifikasi adaptif memastikan Anda tidak melewatkan sesi penting.",
          image: "/images/feature-2.jpg",
          icon: "solar:bell-bing-bold-duotone",
        },
      ],
    },
    programs: {
      title: "Program yang cocok dengan tubuh Anda",
      description: "Pilih program berbasis riset untuk Fat Loss, Hipertrofi, Kekuatan, hingga Mobilitas.",
      items: [
        { title: "Hipertrofi Push/Pull/Legs", meta: "4–12 minggu • Progresif • Dikurasi pelatih" },
        { title: "Kondisioning Penurunan Lemak", meta: "3–5 sesi per minggu • Kardio & beban" },
        { title: "Powerbuilding 5x Seminggu", meta: "Campuran kekuatan dan estetika" },
        { title: "Mobilitas & Inti", meta: "Fokus fleksibilitas dan stabilitas" },
      ],
    },
    aboutApp: {
      label: "TENTANG APLIKASI",
      title: "Tetap terorganisir dan produktif",
      description:
        "Rencanakan blok latihan, pantau pemulihan, dan selaraskan setiap sesi dengan tujuan Anda. Kolaborasikan dengan pelatih dan komunitas untuk melangkah lebih jauh.",
      cta: "Coba Gratis",
    },
    aboutCompany: {
      label: "TENTANG KAMI",
      title: "PT Upsense Teknologi Indonesia",
      description:
        "Kami adalah perusahaan teknologi kebugaran berbasis di Indonesia yang berfokus pada solusi digital yang mendukung gaya hidup aktif. Dengan pengalaman dalam membangun produk mobile dan data insight, kami membantu mitra dan komunitas meningkatkan performa mereka.",
      values: [
        {
          title: "Inovasi Lokal",
          description: "Menggabungkan wawasan pasar Indonesia dengan teknologi global terbaru.",
          icon: "solar:flag-bold-duotone",
        },
        {
          title: "Kolaborasi Humanis",
          description: "Membangun ekosistem pelatih, atlet, dan brand yang saling menguatkan.",
          icon: "solar:hand-heart-bold-duotone",
        },
        {
          title: "Keamanan Data",
          description: "Menjaga privasi dan keamanan pengguna melalui standar terbaik industri.",
          icon: "solar:shield-check-bold-duotone",
        },
      ],
      stats: [
        { value: "50+", label: "Klien korporasi" },
        { value: "120K", label: "Pengguna aktif bulanan" },
        { value: "12", label: "Mitra pelatih tersertifikasi" },
      ],
    },
    community: {
      title: "Transformasi dari komunitas FYB",
      quote:
        "“FYB membuat rutinitas saya konsisten dan progresif. Catatan pelatih membantu saya memecahkan rekor pribadi sambil tetap bugar.”",
      program: "Program 12 minggu",
    },
    pricing: {
      label: "HARGA",
      title: "Paket fleksibel untuk setiap tujuan",
      subtitle: "Mulai gratis. Upgrade kapan saja.",
      cta: "Lihat semua harga",
      plans: [
        { name: "Gratis", price: "Rp0", perks: ["3 program", "Pelacakan dasar", "Komunitas"] },
        {
          name: "Pro",
          price: "Rp129k/bln",
          perks: ["Program tanpa batas", "Analitik lanjutan", "Pesan dengan pelatih"],
        },
        {
          name: "Elite",
          price: "Rp249k/bln",
          perks: ["Feedback pelatih pribadi", "Dukungan prioritas", "Fitur awal"],
        },
      ],
    },
    faq: {
      title: "Pertanyaan yang sering diajukan",
      viewAll: "Lihat semua",
      items: [
        { q: "Apakah FYB gratis untuk memulai?", a: "Ya, Anda bisa memulai secara gratis dan upgrade kapan pun." },
        {
          q: "Bisakah saya mengimpor program latihan saya sekarang?",
          a: "Tentu. Anda bisa membuat latihan custom atau mengimpor template dengan mudah.",
        },
        {
          q: "Apakah mendukung integrasi perangkat wearable?",
          a: "Integrasi Apple Health dan Google Fit sedang diluncurkan secara bertahap.",
        },
      ],
    },
    cta: {
      title: "Mulai uji coba gratis Anda hanya dengan satu klik",
      description: "Unduh FYB, bangun rencana pertama Anda, dan rasakan progres sejak hari pertama.",
      button: "Mulai Sekarang",
    },
    footer: "© {year} FYB — Fit Your Body. Seluruh hak cipta dilindungi.",
  },
  en: {
    brand: "FYB",
    nav: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      about: "About App",
      company: "About Us",
    },
    auth: { login: "Log in", start: "Start Free" },
    hero: {
      title: "An easy way to stay in control of every workout",
      description:
        "FYB helps you plan sessions, track progress, and stay motivated. Build custom routines, log every set, and see your body align with your goals.",
      primaryCta: "Get the App",
      secondaryCta: "Learn more",
      socialHighlight: "1.2M",
      socialCaption: "Athletes already trust FYB",
    },
    features: {
      label: "FEATURES",
      title: "FYB delivers a complete feature suite to keep your training organized",
      description:
        "From coach collaboration to smart reminders, everything is designed to make every workout consistent and enjoyable.",
      cards: [
        {
          title: "Collaboration with coaches",
          description: "Share programs, assign workouts, and chat about progress in real time.",
          image: "/images/feature-1.jpg",
          icon: "solar:users-group-rounded-bold-duotone",
        },
        {
          title: "Smart reminders & goals",
          description: "Adaptive notifications ensure you never miss a crucial session.",
          image: "/images/feature-2.jpg",
          icon: "solar:bell-bing-bold-duotone",
        },
      ],
    },
    programs: {
      title: "Programs that fit your body",
      description: "Choose evidence-based programs for Fat Loss, Hypertrophy, Strength, and Mobility goals.",
      items: [
        { title: "Hypertrophy Push/Pull/Legs", meta: "4–12 weeks • Progressive • Coach reviewed" },
        { title: "Fat Loss Conditioning", meta: "3–5 sessions weekly • Cardio & weights" },
        { title: "Powerbuilding 5x Week", meta: "Blend of strength and aesthetics" },
        { title: "Mobility & Core", meta: "Focus on flexibility and stability" },
      ],
    },
    aboutApp: {
      label: "ABOUT APP",
      title: "Stay organized and boost productivity",
      description:
        "Plan training blocks, monitor recovery, and align every session with your goals. Collaborate with coaches and community to push further together.",
      cta: "Try for Free",
    },
    aboutCompany: {
      label: "ABOUT US",
      title: "PT Upsense Teknologi Indonesia",
      description:
        "We are an Indonesia-based fitness technology company crafting digital solutions that empower active lifestyles. With experience in mobile products and data insights, we help partners and communities elevate their performance.",
      values: [
        {
          title: "Local Innovation",
          description: "Blending Indonesian market insights with the latest global tech.",
          icon: "solar:flag-bold-duotone",
        },
        {
          title: "Human Collaboration",
          description: "Building an ecosystem where coaches, athletes, and brands grow together.",
          icon: "solar:hand-heart-bold-duotone",
        },
        {
          title: "Data Security",
          description: "Protecting user privacy with industry-leading safeguards.",
          icon: "solar:shield-check-bold-duotone",
        },
      ],
      stats: [
        { value: "50+", label: "Corporate clients" },
        { value: "120K", label: "Monthly active users" },
        { value: "12", label: "Certified coach partners" },
      ],
    },
    community: {
      title: "Transformations from the FYB community",
      quote:
        "“FYB kept my routine consistent and progressive. Coach notes helped me break PRs while staying lean.”",
      program: "12-week program",
    },
    pricing: {
      label: "PRICING",
      title: "Flexible plans for every goal",
      subtitle: "Start free. Upgrade any time.",
      cta: "See full pricing",
      plans: [
        { name: "Free", price: "$0", perks: ["3 programs", "Basic tracking", "Community"] },
        {
          name: "Pro",
          price: "$9/mo",
          perks: ["Unlimited programs", "Advanced analytics", "Coach messages"],
        },
        {
          name: "Elite",
          price: "$19/mo",
          perks: ["1:1 coach feedback", "Priority support", "Early features"],
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      viewAll: "View all",
      items: [
        { q: "Is FYB free to start?", a: "Yes, you can start for free and upgrade any time." },
        {
          q: "Can I import my current program?",
          a: "Absolutely. Create custom workouts or import templates easily.",
        },
        {
          q: "Do you support wearable integrations?",
          a: "Apple Health and Google Fit support is rolling out soon.",
        },
      ],
    },
    cta: {
      title: "Start your free trial today with one click",
      description: "Download FYB, build your first plan, and see progress from day one.",
      button: "Start for Free",
    },
    footer: "© {year} FYB — Fit Your Body. All rights reserved.",
  },
}

const testimonials = [1, 2, 3]

export default function Page() {
  const [lang, setLang] = useState<LanguageCode>("id")
  const [menuOpen, setMenuOpen] = useState(false)

  const t = useMemo(() => translations[lang], [lang])
  const switchLabel = lang === "id" ? "English" : "Indonesia"
  const nextLang: LanguageCode = lang === "id" ? "en" : "id"

  return (
    <main className="min-h-dvh">
      {/* NAV */}
      <header className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-sm" style={{ background: "var(--fyb-brand)" }} aria-hidden="true" />
            <span className="font-semibold tracking-tight">{t.brand}</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
            <Link href="#features" className="transition-colors hover:text-white">
              {t.nav.features}
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-white">
              {t.nav.pricing}
            </Link>
            <Link href="#faq" className="transition-colors hover:text-white">
              {t.nav.faq}
            </Link>
            <Link href="#about" className="transition-colors hover:text-white">
              {t.nav.about}
            </Link>
            <Link href="#company" className="transition-colors hover:text-white">
              {t.nav.company}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full text-white/80 hover:text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              <Icon icon={menuOpen ? "solar:close-circle-bold-duotone" : "solar:hamburger-menu-bold-duotone"} className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-white/80 hover:text-white"
              onClick={() => setLang(nextLang)}
            >
              <Icon icon="solar:global-bold-duotone" className="size-5" />
              <span className="hidden sm:inline">{switchLabel}</span>
            </Button>
            <div className="hidden items-center gap-3 md:flex">
              <Button variant="secondary" className="rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20">
                {t.auth.login}
              </Button>
              <Button className="rounded-full fyb-pill transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
                <Icon icon="solar:rocket-bold-duotone" className="size-5" />
                {t.auth.start}
              </Button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-black/70 backdrop-blur-sm lg:hidden">
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4 text-sm text-white/80">
              <Link href="#features" className="flex items-center gap-2 transition-colors hover:text-white" onClick={() => setMenuOpen(false)}>
                <Icon icon="solar:clapperboard-open-play-bold-duotone" className="size-4" />
                {t.nav.features}
              </Link>
              <Link href="#pricing" className="flex items-center gap-2 transition-colors hover:text-white" onClick={() => setMenuOpen(false)}>
                <Icon icon="solar:tag-price-bold-duotone" className="size-4" />
                {t.nav.pricing}
              </Link>
              <Link href="#faq" className="flex items-center gap-2 transition-colors hover:text-white" onClick={() => setMenuOpen(false)}>
                <Icon icon="solar:question-circle-bold-duotone" className="size-4" />
                {t.nav.faq}
              </Link>
              <Link href="#about" className="flex items-center gap-2 transition-colors hover:text-white" onClick={() => setMenuOpen(false)}>
                <Icon icon="solar:info-circle-bold-duotone" className="size-4" />
                {t.nav.about}
              </Link>
              <Link href="#company" className="flex items-center gap-2 transition-colors hover:text-white" onClick={() => setMenuOpen(false)}>
                <Icon icon="solar:buildings-3-bold-duotone" className="size-4" />
                {t.nav.company}
              </Link>
              <div className="flex flex-col gap-2 pt-3">
                <Button variant="secondary" className="rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20">
                  {t.auth.login}
                </Button>
                <Button className="rounded-full fyb-pill transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
                  <Icon icon="solar:rocket-bold-duotone" className="size-5" />
                  {t.auth.start}
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {/* HERO */}
        <SectionReveal className="container mx-auto grid items-center gap-12 px-4 pb-20 pt-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">{t.hero.title}</h1>
            <p className="max-w-prose text-white/70">{t.hero.description}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-full fyb-pill transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
                <Icon icon="solar:download-minimalistic-bold-duotone" className="size-5" />
                {t.hero.primaryCta}
              </Button>
              <Button variant="secondary" className="rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20">
                <Icon icon="solar:arrow-right-up-bold-duotone" className="size-5" />
                {t.hero.secondaryCta}
              </Button>
            </div>
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
                  {t.hero.socialHighlight}
                </div>
                <p className="text-xs text-white/60">{t.hero.socialCaption}</p>
              </div>
            </div>
            <StoreBadges className="mt-4" />
          </div>

          <div className="relative">
            <div className="absolute right-0 top-6 -z-10 h-72 w-72 md:h-96 md:w-96">
              <Starburst className="h-full w-full opacity-70" />
            </div>
            <DeviceIphone15Pro className="mx-auto md:mr-8" roundedBg src="/images/hero.jpg" alt="FYB app preview in iPhone 15 Pro" />
            <div className="absolute -bottom-8 left-6 hidden md:block">
              <div className="fyb-card px-4 py-2 text-sm shadow-sm transition-transform duration-300 hover:-translate-y-1">
                {lang === "id" ? "Buat rencana leg day" : "Create a leg day plan"}
              </div>
            </div>
            <div className="absolute bottom-24 -right-8 hidden md:block">
              <div className="fyb-card px-4 py-2 text-sm shadow-sm transition-transform duration-300 hover:-translate-y-1">
                {lang === "id" ? "Jatuh tempo: Kam 18.00" : "Due: Thu 6 PM"}
              </div>
            </div>
          </div>
        </SectionReveal>
      </header>

      {/* FEATURES (light slice) */}
      <SectionReveal id="features" className="relative bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <div className="relative">
            <Starburst className="absolute -top-8 right-8 h-24 w-24 opacity-70" />
            <p className="mb-3 text-xs tracking-widest text-neutral-500">{t.features.label}</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">{t.features.title}</h2>
            <p className="mt-4 max-w-2xl text-neutral-600">{t.features.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white transition hover:-translate-y-0.5">
                <Icon icon="solar:alt-arrow-left-bold-duotone" className="size-5" />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-black text-white transition hover:-translate-y-0.5">
                <Icon icon="solar:alt-arrow-right-bold-duotone" className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.features.cards.map((card) => (
              <div key={card.title} className="fyb-card group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 text-[color:var(--fyb-brand)]">
                  <Icon icon={card.icon} className="size-8" />
                  <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                </div>
                <p className="text-neutral-600">{card.description}</p>
                <div className="mt-auto overflow-hidden rounded-2xl border">
                  <Image src={card.image} alt={card.title} width={880} height={400} className="w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">{t.programs.title}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">{t.programs.description}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.programs.items.map((program) => (
              <div key={program.title} className="fyb-card flex flex-col gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={"/placeholder.svg?height=160&width=320&query=gym%20program%20preview"}
                  alt=""
                  width={320}
                  height={160}
                  className="w-full rounded-xl border"
                />
                <h3 className="font-semibold">{program.title}</h3>
                <p className="text-sm text-neutral-600">{program.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ABOUT */}
      <SectionReveal id="about" className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto grid items-center gap-12 px-4 py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="rounded-[32px] bg-[color:var(--fyb-brand-weak)] p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                <DeviceIphone15Pro src="/images/about-left.jpg" alt="FYB workout detail" className="mx-auto -rotate-6" />
                <DeviceIphone15Pro src="/images/about-right.jpg" alt="FYB create workout" className="mx-auto rotate-3" />
              </div>
            </div>
            <button
              aria-label="Play demo"
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon icon="solar:play-bold-duotone" className="size-7" />
            </button>
          </div>
          <div>
            <p className="mb-2 text-sm text-white/60">{t.aboutApp.label}</p>
            <h3 className="text-balance text-4xl font-semibold md:text-5xl">{t.aboutApp.title}</h3>
            <p className="mb-6 mt-4 text-white/70">{t.aboutApp.description}</p>
            <Button className="rounded-full fyb-pill transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
              <Icon icon="solar:magic-stick-bold-duotone" className="size-5" />
              {t.aboutApp.cta}
            </Button>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="company" className="bg-white text-black">
        <div className="container mx-auto px-4 py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1 text-xs font-semibold tracking-widest text-black/70">
                <Icon icon="solar:buildings-3-bold-duotone" className="size-4" />
                {t.aboutCompany.label}
              </span>
              <h3 className="text-balance text-4xl font-semibold md:text-5xl">{t.aboutCompany.title}</h3>
              <p className="text-lg leading-relaxed text-neutral-600">{t.aboutCompany.description}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {t.aboutCompany.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-neutral-200 bg-white/60 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-2xl font-semibold" style={{ color: "var(--fyb-brand)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {t.aboutCompany.values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 rounded-2xl bg-black/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-black/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon icon={value.icon} className="size-6 text-black/80" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-black">{value.title}</h4>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24">
          <h3 className="text-center text-3xl font-semibold md:text-5xl">{t.community.title}</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-white/30"
              >
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
                    <div className="text-xs text-white/60">{t.community.program}</div>
                  </div>
                </div>
                <p className="mt-4 text-white/80">{t.community.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="pricing" className="bg-white text-black">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs tracking-widest text-neutral-500">{t.pricing.label}</p>
              <h3 className="text-3xl font-semibold md:text-5xl">{t.pricing.title}</h3>
              <p className="mt-2 text-neutral-600">{t.pricing.subtitle}</p>
            </div>
            <Link href="/pricing" className="flex items-center gap-2 text-sm font-medium underline transition-colors hover:text-black">
              {t.pricing.cta}
              <Icon icon="solar:arrow-right-linear" className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.pricing.plans.map((plan) => (
              <div key={plan.name} className="fyb-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-semibold">{plan.name}</h4>
                  <div className="text-2xl font-semibold">{plan.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Icon icon="solar:check-circle-bold-duotone" className="size-4 text-[color:var(--fyb-brand)]" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/80"
                >
                  <Icon icon="solar:cart-large-minimalistic-bold-duotone" className="size-5" />
                  {t.auth.start}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="faq" className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="text-3xl font-semibold md:text-5xl">{t.faq.title}</h3>
            <Link href="/faq" className="flex items-center gap-2 text-sm font-medium underline transition-colors hover:text-white">
              {t.faq.viewAll}
              <Icon icon="solar:book-bookmark-bold-duotone" className="size-4" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="mt-6 max-w-3xl">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={item.q} value={`q${index + 1}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionReveal>

      <SectionReveal className="fyb-strands relative">
        <BackgroundStrands />
        <div className="container mx-auto px-4 py-24 text-center">
          <h3 className="text-balance text-4xl font-semibold md:text-5xl">{t.cta.title}</h3>
          <p className="mx-auto mt-3 max-w-3xl text-white/70">{t.cta.description}</p>
          <div className="mt-6">
            <Button className="rounded-full fyb-pill transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
              <Icon icon="solar:alarm-add-bold-duotone" className="size-5" />
              {t.cta.button}
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            <DeviceIphone15Pro src="/images/cta-phones-left.jpg" alt="FYB screen 1" />
            <DeviceIphone15Pro src="/images/cta-phones-center.jpg" alt="FYB screen 2" />
            <DeviceIphone15Pro src="/images/cta-phones-right.jpg" alt="FYB screen 3" />
          </div>
        </div>
      </SectionReveal>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        {t.footer.replace("{year}", String(new Date().getFullYear()))}
      </footer>
    </main>
  )
}
