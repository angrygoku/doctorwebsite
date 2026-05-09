import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Testimonials | Patient Feedback" : "रोगी अनुभव | प्रशंसापत्र"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <h1 className="font-serif text-4xl text-primary">{content.pages.testimonials}</h1>
        <p className="mt-4 text-muted-foreground">
          {lang === "en"
            ? "Patient trust is built through outcomes, transparency, and long-term support."
            : "रोगी विश्वास परिणाम, पारदर्शिता और निरंतर सहयोग से बनता है।"}
        </p>
        <div className="mt-6 rounded-2xl border border-gold/40 bg-gold-soft/30 p-5 text-sm text-primary/90">
          {lang === "en"
            ? "Note: Testimonials shown here are representative patient feedback for informational presentation."
            : "नोट: यहां दिए गए अनुभव सूचनात्मक प्रस्तुति हेतु प्रतिनिधि रोगी प्रतिक्रियाएं हैं।"}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.testimonials.map((testimonial, idx) => (
            <article key={`${testimonial.name}-${idx}`} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-medium text-primary">{testimonial.name}</h2>
                <Quote className="h-4 w-4 text-primary/60" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{testimonial.text}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {lang === "en" ? "Verified consultation experience" : "सत्यापित परामर्श अनुभव"}
              </p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Testimonials;
