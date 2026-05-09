import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  const t =
    lang === "en"
      ? { title: "Oops! Page not found", back: "Return to Home" }
      : { title: "पेज नहीं मिला", back: "मुख्य पृष्ठ पर वापस" };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SeoHead
        title={lang === "en" ? "Page Not Found | Dr Dixit Consultation" : "à¤ªà¥‡à¤œ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾ | à¤¡à¥‰ à¤¦à¥€à¤•à¥à¤·à¤¿à¤¤ à¤ªà¤°à¤¾à¤®à¤°à¥à¤¶"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
        lang={lang}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.title}</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t.back}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
