import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const AboutDoctor = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "About Doctor | Prof. (Vaidya) Mahesh Dixit" : "डॉक्टर परिचय | प्रो. (वैद्य) महेश दीक्षित"}
        description={content.doctorBio.short}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <h1 className="font-serif text-4xl text-primary">{content.doctorBio.title}</h1>
        <p className="mt-4 text-muted-foreground">{content.doctorBio.short}</p>
        <div className="mt-7 space-y-4">
          {content.doctorBio.full.map((line) => (
            <p key={line} className="rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 shadow-card">
              {line}
            </p>
          ))}
        </div>

        <h2 className="mt-10 font-serif text-2xl text-primary">
          {lang === "en" ? "Professional Highlights" : "व्यावसायिक उपलब्धियां"}
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {content.doctorBio.credentials.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <SiteFooter />
    </div>
  );
};

export default AboutDoctor;
