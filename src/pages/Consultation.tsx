import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Languages, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/i18n";

export type ConsultDetails = {
  name: string;
  age: string;
  phone: string;
  city: string;
  concern: string;
  preferredTime: string;
  source: string;
};

const initial: ConsultDetails = {
  name: "",
  age: "",
  phone: "",
  city: "",
  concern: "",
  preferredTime: "",
  source: "",
};

const Consultation = () => {
  const [data, setData] = useState<ConsultDetails>(initial);
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          back: "Back to home",
          title: "Book consultation",
          subtitle: "Fill your details below. Next, pay and send the details on WhatsApp.",
          name: "Full name *",
          age: "Age",
          phone: "WhatsApp number *",
          city: "City / Country",
          concern: "Health concern *",
          preferredTime: "Preferred time",
          source: "How did you hear about us? (optional)",
          cta: "Continue — payment step",
          disclaimer: "⚠️ This service is not for medical emergencies.",
          expectTitle: "What to expect",
          expect: [
            "After you submit details, we’ll reach out within 24 hours.",
            "Consultation timing will be finalized on WhatsApp.",
            "After consultation, you’ll receive personalized guidance.",
          ],
          assuranceTitle: "Assurance",
          assurance: {
            privacy: "Your information stays confidential.",
            languages: "Consultation available in Hindi, Marathi, and English.",
            safe: "Secure online process.",
          },
          placeholders: {
            name: "Your name",
            age: "e.g. 42",
            phone: "+91 ...",
            city: "e.g. Pune, India",
            concern: "Briefly describe your concern — since when, key symptoms, etc.",
            time: "e.g. 5–7 PM",
            source: "e.g. YouTube, friend",
          },
          toast: {
            missing: "Please fill name, phone, and health concern.",
            saved: "Details saved — now proceed to payment.",
          },
        }
      : {
          back: "मुख्य पृष्ठ पर वापस",
          title: "परामर्श बुक करें",
          subtitle: "कृपया नीचे अपना विवरण भरें। अगले चरण में भुगतान करके WhatsApp पर विवरण भेजें।",
          name: "पूरा नाम *",
          age: "उम्र",
          phone: "WhatsApp नंबर *",
          city: "शहर / देश",
          concern: "स्वास्थ्य समस्या *",
          preferredTime: "पसंदीदा समय",
          source: "हमारे बारे में कहाँ से जाना? (वैकल्पिक)",
          cta: "आगे बढ़ें — भुगतान चरण",
          disclaimer: "⚠️ यह सेवा आपातकालीन चिकित्सा के लिए नहीं है।",
          expectTitle: "क्या अपेक्षा करें",
          expect: [
            "विवरण भेजने के बाद हम 24 घंटे में संपर्क करेंगे।",
            "WhatsApp पर परामर्श का समय तय होगा।",
            "परामर्श के बाद व्यक्तिगत सुझाव दिए जाएँगे।",
          ],
          assuranceTitle: "आश्वासन",
          assurance: {
            privacy: "आपकी जानकारी पूर्णतः गोपनीय।",
            languages: "हिंदी, मराठी और अंग्रेज़ी में परामर्श।",
            safe: "सुरक्षित ऑनलाइन प्रक्रिया।",
          },
          placeholders: {
            name: "आपका नाम",
            age: "जैसे 42",
            phone: "+91 ...",
            city: "जैसे पुणे, भारत",
            concern: "अपनी समस्या संक्षेप में लिखें — कब से है, मुख्य लक्षण आदि।",
            time: "जैसे शाम 5–7 बजे",
            source: "जैसे YouTube, मित्र",
          },
          toast: {
            missing: "कृपया नाम, फ़ोन और स्वास्थ्य समस्या भरें।",
            saved: "विवरण सुरक्षित हुआ — अब भुगतान करें।",
          },
        };

  const update = (k: keyof ConsultDetails) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.phone || !data.concern) {
      toast.error(t.toast.missing);
      return;
    }
    toast.success(t.toast.saved);
    navigate("/payment", { state: data });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="container py-10 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h1 className="font-serif text-3xl text-primary md:text-4xl">{t.title}</h1>
            <p className="mt-2 text-muted-foreground">
              {t.subtitle}
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input id="name" value={data.name} onChange={update("name")} placeholder={t.placeholders.name} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="age">{t.age}</Label>
                  <Input id="age" type="number" value={data.age} onChange={update("age")} placeholder={t.placeholders.age} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input id="phone" type="tel" value={data.phone} onChange={update("phone")} placeholder={t.placeholders.phone} required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">{t.city}</Label>
                  <Input id="city" value={data.city} onChange={update("city")} placeholder={t.placeholders.city} />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="concern">{t.concern}</Label>
                <Textarea
                  id="concern"
                  rows={5}
                  value={data.concern}
                  onChange={update("concern")}
                  placeholder={t.placeholders.concern}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="time">{t.preferredTime}</Label>
                  <Input id="time" value={data.preferredTime} onChange={update("preferredTime")} placeholder={t.placeholders.time} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="source">{t.source}</Label>
                  <Input id="source" value={data.source} onChange={update("source")} placeholder={t.placeholders.source} />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-2">
                {t.cta}
              </Button>
              <p className="text-xs text-muted-foreground">
                {t.disclaimer}
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-card">
              <h3 className="font-serif text-xl text-primary">{t.expectTitle}</h3>
              <ol className="mt-4 space-y-3 text-sm text-foreground/85">
                {t.expect.map((line, idx) => (
                  <li key={line}>
                    <span className="font-medium">{idx + 1}.</span> {line}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-serif text-xl text-primary">{t.assuranceTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex gap-3"><Lock className="mt-0.5 h-4 w-4 text-primary" /> {t.assurance.privacy}</li>
                <li className="flex gap-3"><Languages className="mt-0.5 h-4 w-4 text-primary" /> {t.assurance.languages}</li>
                <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-primary" /> {t.assurance.safe}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Consultation;