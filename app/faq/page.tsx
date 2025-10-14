import { SectionReveal } from "@/components/section-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
  return (
    <main className="fyb-strands relative">
      <SectionReveal className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold">FAQ</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Answers to common questions about FYB.</p>

        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          <AccordionItem value="q1">
            <AccordionTrigger>Is FYB really free to start?</AccordionTrigger>
            <AccordionContent>Yes. You can use the Free plan forever or upgrade whenever you want.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Do I keep my data if I cancel?</AccordionTrigger>
            <AccordionContent>Yes, your workout history remains accessible on the Free plan.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Can I train with friends?</AccordionTrigger>
            <AccordionContent>Invite friends to programs and share progress updates in-app.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Does FYB support wearables?</AccordionTrigger>
            <AccordionContent>Apple Health and Google Fit integrations are rolling out soon.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionReveal>
    </main>
  )
}
