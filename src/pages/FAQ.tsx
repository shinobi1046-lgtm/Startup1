import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/faq';
  const faqs = [
    { q: 'What tools do you use?', a: 'Google Apps Script with Workspace APIs (Sheets, Docs, Slides, Drive, Gmail, Calendar) plus AI where useful.' },
    { q: 'How long does a typical project take?', a: 'A prototype in days, production in 1–3 weeks depending on scope.' },
    { q: 'Do you provide documentation and training?', a: 'Yes, handover docs, Loom videos, and optional live training.' },
    { q: 'Can you maintain existing scripts?', a: 'We can audit, refactor, add monitoring, and extend your current automations.' },
    { q: 'How do we start?', a: 'Book a 30‑minute discovery call or send us a message on the contact page.' },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="container mx-auto py-12">
      <Helmet>
        <title>FAQ | Apps Script Automation</title>
        <meta name="description" content="Answers about Google Apps Script automation services, timelines, tools, and process." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Frequently asked questions</h1>
      <Accordion type="single" collapsible className="max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQ;
