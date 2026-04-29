import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import { CLINIC, getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const Contact = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Contact | Ayurvedic Online Consultation" : "संपर्क | आयुर्वेदिक ऑनलाइन परामर्श"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
      />
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <h1 className="font-serif text-4xl text-primary">{content.pages.contact}</h1>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-serif text-xl text-primary">{CLINIC.doctorName}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{content.tagline}</p>
            <p className="mt-4 text-sm">Email: {CLINIC.email}</p>
            <p className="mt-1 text-sm">WhatsApp: +{CLINIC.whatsappNumber}</p>
            <div className="mt-4 flex gap-2">
              <a href={CLINIC.social.facebook} aria-label="facebook" className="rounded-full border border-border p-2">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={CLINIC.social.youtube} aria-label="youtube" className="rounded-full border border-border p-2">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={CLINIC.social.instagram} aria-label="instagram" className="rounded-full border border-border p-2">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-serif text-xl text-primary">{content.pages.book}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{content.consultation.title}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/book-appointment"><Button>{content.pages.book}</Button></Link>
              <Link to="/consultation"><Button variant="outline">{content.pages.consultation}</Button></Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Contact;
