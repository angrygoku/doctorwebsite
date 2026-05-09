import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const DiseasesTreated = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Diseases Treated | Ayurvedic Specialities" : "रोग उपचार | आयुर्वेदिक विशेषज्ञता"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <h1 className="font-serif text-4xl text-primary">{content.diseases.title}</h1>
        <p className="mt-4 text-muted-foreground">{content.finalTrustLine}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.diseases.categories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h2 className="font-serif text-xl text-primary">{category.title}</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {category.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default DiseasesTreated;
