import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const BookAppointment = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Book Appointment | Online Ayurveda Consultation" : "परामर्श बुक करें | ऑनलाइन आयुर्वेद"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <h1 className="font-serif text-4xl text-primary">{content.pages.book}</h1>
        <p className="mt-4 text-muted-foreground">{content.consultation.title}</p>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {content.consultation.steps.map((step) => (
            <li key={step} className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card">
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/consultation"><Button>{content.pages.consultation}</Button></Link>
          <Link to="/payment"><Button variant="outline">{lang === "en" ? "Direct payment page" : "सीधा भुगतान पेज"}</Button></Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default BookAppointment;
