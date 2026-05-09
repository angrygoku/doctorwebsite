import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileWhatsAppCTA from "@/components/MobileWhatsAppCTA";
import doctorPortrait from "@/assets/doctor-portrait.png";
import leafPattern from "@/assets/leaf-pattern.jpg";
import { CLINIC, getContentByLang } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";
import SeoHead from "@/components/SeoHead";

const Index = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  const heading = lang === "en" ? "Why patients trust this platform" : "रोगी इस मंच पर भरोसा क्यों करते हैं";
  const processTitle = lang === "en" ? "Simple 4-step consultation flow" : "सरल 4-चरण ऑनलाइन परामर्श प्रक्रिया";
  const exploreCta = lang === "en" ? "Explore all pages" : "सभी मुख्य पेज देखें";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Ayurvedic Online Consultation | Prof. (Vaidya) Mahesh Dixit" : "प्रो. (वैद्य) महेश दीक्षित | आयुर्वेदिक ऑनलाइन परामर्श"}
        description={content.seo.description}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url(${leafPattern})`, backgroundSize: "540px" }} aria-hidden />
        <div className="container relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/40 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {content.hero.badge}
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl">{content.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{content.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book-appointment">
                <Button size="lg">{content.hero.ctaBook}</Button>
              </Link>
              <Link to="/diseases-treated">
                <Button size="lg" variant="outline">{content.hero.ctaDiseases}</Button>
              </Link>
              <Link to="/about-doctor">
                <Button size="lg" variant="outline">{content.hero.ctaAbout}</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-primary/85">{content.brandMessage}</p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img src={doctorPortrait} alt={CLINIC.doctorName} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-border bg-background/95 p-4 text-sm shadow-card backdrop-blur">
              <p className="font-medium text-primary">{content.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-14">
          <h2 className="font-serif text-3xl text-primary">{heading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.trustPoints.map((point) => (
              <Card key={point} className="border-border shadow-card">
                <CardContent className="flex items-start gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/90">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container py-14">
          <h2 className="font-serif text-3xl text-primary">{content.doctorBio.title}</h2>
          <p className="mt-4 text-muted-foreground">{content.doctorBio.short}</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {content.doctorBio.credentials.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/90 shadow-card">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-14">
          <h2 className="font-serif text-3xl text-primary">{content.diseases.title}</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.diseases.categories.map((cat) => (
              <Card key={cat.title} className="border-border shadow-card">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg text-primary">{cat.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {cat.items.slice(0, 4).map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-7">
            <Link to="/diseases-treated">
              <Button variant="outline">{lang === "en" ? "See complete disease list" : "पूर्ण रोग सूची देखें"}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container py-14">
          <h2 className="font-serif text-3xl text-primary">{processTitle}</h2>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.consultation.steps.map((step, idx) => (
              <li key={step} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <p className="text-xs text-primary">{idx + 1}</p>
                <p className="mt-2 text-sm text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-14">
          <h2 className="font-serif text-3xl text-primary">{content.consultation.objectiveTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.consultation.objectivePoints.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h3 className="font-serif text-lg text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/90">{p.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-10 font-serif text-2xl text-primary">{content.consultation.needTitle}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {content.consultation.needPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <h4 className="font-serif text-lg text-primary">{item.title}</h4>
                <p className="mt-2 text-sm text-foreground/90">{item.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-10 font-serif text-2xl text-primary">{content.consultation.benefitTitle}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.consultation.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <h4 className="font-medium text-primary">{benefit.title}</h4>
                <p className="mt-1 text-sm text-foreground/90">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-14 text-primary-foreground">
        <div className="container grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary-foreground/80">
              <Stethoscope className="h-4 w-4" /> {content.tagline}
            </p>
            <h2 className="mt-3 font-serif text-3xl">{content.finalTrustLine}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book-appointment">
              <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">{content.pages.book}</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">{exploreCta}</Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileWhatsAppCTA />
      <div className="h-16 md:hidden" aria-hidden />
    </div>
  );
};

export default Index;
