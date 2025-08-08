import { Helmet } from "react-helmet-async";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/about';
  return (
    <main className="container mx-auto py-12">
      <Helmet>
        <title>About | Apps Script Automation Studio</title>
        <meta name="description" content="We craft Google Apps Script automations for HR, Finance, Sales, and Operations teams to save hours every week." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">About</h1>
      <div className="prose prose-neutral max-w-3xl">
        <p>
          We specialize in building reliable automations across Google Workspace using
          Apps Script and AI. After delivering dozens of automations in industry, we
          know the patterns that create leverage fast — and how to make them robust.
        </p>
        <p>
          Our focus areas include: onboarding/offboarding, approvals, quotes & invoices,
          KPI reporting, Gmail parsing, Docs/Sheets/Slides generation, and Drive hygiene.
        </p>
      </div>
    </main>
  );
};

export default About;
