import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, toggleLang } = useLanguage();

  const NAV = [
    { href: "#about", label: lang === "en" ? "About" : "परिचय" },
    { href: "#specialties", label: lang === "en" ? "Specialties" : "विशेषज्ञता" },
    { href: "#how", label: lang === "en" ? "How it works" : "परामर्श कैसे लें" },
    { href: "#faq", label: lang === "en" ? "FAQ" : "सामान्य प्रश्न" },
    { href: "#contact", label: lang === "en" ? "Contact" : "संपर्क" },
  ];

  const goConsult = () => {
    setOpen(false);
    navigate("/consultation");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg leading-tight text-primary">
            {CLINIC.doctorName}
            <span className="block text-[11px] font-sans tracking-wide text-muted-foreground">
              {CLINIC.doctorTitle}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={`/${n.href}`}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLang}
            className="border-border/60"
            aria-label={lang === "en" ? "Switch to Hindi" : "Switch to English"}
          >
            {lang === "en" ? "हिं" : "ENG"}
          </Button>
          <Button onClick={goConsult} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {lang === "en" ? "Book consult" : "परामर्श बुक करें"}
          </Button>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={`/${n.href}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-foreground/85 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => { toggleLang(); setOpen(false); }}>
                {lang === "en" ? "हिं" : "ENG"}
              </Button>
              <Button onClick={goConsult}>
                {lang === "en" ? "Book consult" : "परामर्श बुक करें"}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;