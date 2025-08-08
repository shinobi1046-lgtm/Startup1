import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/contact';
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const company = String(formData.get('company') || '');
    const message = String(formData.get('message') || '');

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`);
    const subject = encodeURIComponent('Automation inquiry');
    // TODO: Update recipient email below
    const mailto = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;

    setLoading(true);
    window.location.href = mailto;
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Opening your email client…', description: 'We look forward to your message.' });
      e.currentTarget.reset();
    }, 400);
  };

  return (
    <main className="container mx-auto py-12">
      <Helmet>
        <title>Contact | Google Apps Script Automation</title>
        <meta name="description" content="Contact us to discuss Google Apps Script automations for HR, finance, sales, and operations." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl">Tell us about your workflow and goals. We’ll reply quickly.</p>

      <form onSubmit={onSubmit} className="max-w-xl glass-card rounded-xl p-6 space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" type="email" name="email" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <Input id="company" name="company" className="mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea id="message" name="message" rows={6} required className="mt-1" />
        </div>
        <Button type="submit" variant="hero" disabled={loading}>
          {loading ? 'Preparing…' : 'Send message'}
        </Button>
      </form>
    </main>
  );
};

export default Contact;
