import { Facebook, Instagram, Youtube, Mail, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";
import { getContentByLang } from "@/lib/clinic";

const SiteFooter = () => {
  const { lang } = useLanguage();
  const content = getContentByLang(lang);
  const t =
    lang === "en"
      ? {
          blurb: content.brandMessage,
          contact: "Contact",
          quick: "Quick links",
          social: "Social",
          rights: "All rights reserved.",
          disclaimer: `⚠️ ${content.disclaimer}`,
        }
      : {
          blurb: content.brandMessage,
          contact: "संपर्क",
          quick: "त्वरित लिंक",
          social: "सोशल",
          rights: "सर्वाधिकार सुरक्षित।",
          disclaimer: `⚠️ ${content.disclaimer}`,
        };

  return (
    <footer id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10">
              <Leaf className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-xl">{CLINIC.doctorName}</h3>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/80">
            {t.blurb}
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t.quick}</h4>
          <div className="mt-3 flex flex-col gap-1.5 text-sm">
            <Link to="/about-doctor" className="text-primary-foreground/85 hover:text-primary-foreground">{content.pages.about}</Link>
            <Link to="/diseases-treated" className="text-primary-foreground/85 hover:text-primary-foreground">{content.pages.diseases}</Link>
            <Link to="/book-appointment" className="text-primary-foreground/85 hover:text-primary-foreground">{content.pages.book}</Link>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t.contact}</h4>
          <a
            href={`mailto:${CLINIC.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/85 hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" /> {CLINIC.email}
          </a>
          <p className="mt-2 text-sm text-primary-foreground/80">WhatsApp: +{CLINIC.whatsappNumber}</p>
        </div>

        <div>
          <h4 className="font-serif text-lg">{t.social}</h4>
          <div className="mt-3 flex gap-3">
            <a href={CLINIC.social.facebook} aria-label="Facebook" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-primary-foreground/20"><Facebook className="h-4 w-4" /></a>
            <a href={CLINIC.social.youtube} aria-label="YouTube" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-primary-foreground/20"><Youtube className="h-4 w-4" /></a>
            <a href={CLINIC.social.instagram} aria-label="Instagram" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-primary-foreground/20"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container flex flex-col items-start justify-between gap-2 py-4 text-xs text-primary-foreground/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {CLINIC.doctorName}. {t.rights}</p>
          <p>{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;