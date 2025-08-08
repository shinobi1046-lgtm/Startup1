import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-automation.jpg";
import { Link } from "react-router-dom";
import { 
  Mail, CalendarRange, FileSpreadsheet, FileText, BarChart3, FolderCog,
  Inbox, CheckCircle2, Workflow
} from "lucide-react";
import { useCallback } from "react";

const demos = [
  { title: "Forms → Sheets → Gmail", desc: "Capture leads and auto‑send personalized follow‑ups.", icon: Mail },
  { title: "Sheets → Docs → PDF → Gmail", desc: "Generate quotes/invoices as PDFs and email them.", icon: FileText },
  { title: "Scheduled KPI Dashboards", desc: "Auto‑refresh dashboards and email summaries.", icon: BarChart3 },
  { title: "Calendar Workflows", desc: "Bookings, reminders, and post‑meeting follow‑ups.", icon: CalendarRange },
  { title: "Drive Automation", desc: "Auto‑sort, rename, and set permissions on files.", icon: FolderCog },
  { title: "Gmail Parsing", desc: "Extract data from emails into Sheets + labeling.", icon: Inbox },
  { title: "Approval Flows", desc: "One‑click approve/deny via email/Chat.", icon: CheckCircle2 },
  { title: "Slides Auto‑Reports", desc: "Build decks from Sheets data on a schedule.", icon: Workflow },
];

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/';

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Google Apps Script Automation for HR, Finance, Sales | Book a Call</title>
        <meta name="description" content="Automate Google Sheets, Gmail, Drive, Calendar with Apps Script + AI. HR, finance, sales & ops workflows. Book a 30‑min consultation." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Google Apps Script Automation for HR, Finance, Sales" />
        <meta property="og:description" content="Automate Google Workspace with Apps Script + AI. Book a 30‑min consultation." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-hero">
        <div
          className="radial-spotlight"
          onMouseMove={handleMouseMove}
        >
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 py-16 md:py-24 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Google Workspace Automation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Automate Google Workspace with Apps Script + AI
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                We build high‑impact automations for HR, Finance, Sales, and Operations teams using Google Apps Script—so your team saves hours every week.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <Link to="/schedule">Book a 30‑min call</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="#demos">Explore demos</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Glassy, light 3D abstract background representing automation"
                className="w-full rounded-xl shadow-md glass-card"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "HR Workflows", desc: "Onboarding, leave requests, emails & approvals." },
            { title: "Finance Ops", desc: "Quotes, invoices, reconciliations, monthly reports." },
            { title: "Sales Automation", desc: "Lead intake, follow‑ups, proposals, reminders." },
            { title: "Operations", desc: "Docs, Drive, and calendar workflows at scale." },
          ].map((b) => (
            <Card key={b.title} className="p-5 glass-card hover-glow">
              <h3 className="font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="container mx-auto py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">What we can automate</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">Real examples built with Apps Script and Google Workspace APIs.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {demos.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="p-6 glass-card hover-glow h-full">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-md bg-accent flex items-center justify-center">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="text-muted-foreground mt-2">Simple, fast, outcome‑focused.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Discovery call", desc: "Understand your workflow and metrics of success." },
            { step: "2", title: "Prototype", desc: "We build a small slice you can try within days." },
            { step: "3", title: "Automate", desc: "Production‑grade build, docs, and training." },
          ].map((s) => (
            <Card key={s.step} className="p-6 glass-card hover-glow text-center">
              <div className="mx-auto mb-2 size-10 rounded-full bg-secondary flex items-center justify-center font-semibold">
                {s.step}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-12 md:py-16">
        <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Contact for pricing</h3>
            <p className="text-muted-foreground">No lock‑in. Clear outcomes. Fast delivery.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="hero"><Link to="/schedule">Book a 30‑min call</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>

      {/* JSON‑LD */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Apps Script Studio',
            url: canonical,
            sameAs: [],
          })}
        </script>
      </Helmet>
    </main>
  );
};

export default Index;
