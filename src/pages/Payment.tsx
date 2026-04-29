import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowLeft, Copy, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import upiQr from "@/assets/upi-qr.png";
import { CLINIC, buildWhatsAppLink } from "@/lib/clinic";
import type { ConsultDetails } from "./Consultation";
import { useLanguage } from "@/lib/i18n";
import SeoHead from "@/components/SeoHead";
import { getContentByLang } from "@/lib/clinic";

function formatSentAt(d: Date, locale: string) {
  const date = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
  const time = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
  return `${date}, ${time}`;
}

const Payment = () => {
  const location = useLocation();
  const data = location.state as ConsultDetails | null;
  const { lang } = useLanguage();
  const content = getContentByLang(lang);

  const t =
    lang === "en"
      ? {
          back: "Back to details",
          title: "Make payment",
          subtitle: "Send the consultation fee using the QR code or UPI ID below.",
          feeLabel: "Consultation fee",
          copyCta: "Copy UPI ID",
          openUpiCta: "Open UPI app",
          finalTitle: "Final step",
          finalDesc:
            "After payment is complete, use the button below to send your details on WhatsApp. The doctor will share the consultation time soon.",
          finalCta: "I’ve paid → Send on WhatsApp",
          confirmTitle: "Confirm details",
          disclaimer: "⚠️ This service is not for medical emergencies.",
          toast: {
            copied: "UPI ID copied.",
            copyFail: "Couldn’t copy. Please copy manually.",
            opening: "Opening WhatsApp…",
          },
          msg: {
            hi: (_name?: string) => `Hello ${CLINIC.doctorName},`,
            subject: "Request for Ayurvedic consultation",
            details: "Patient details",
            name: (v: string) => `Name: ${v}`,
            age: (v: string) => `Age: ${v}`,
            phone: (v: string) => `Phone: ${v}`,
            city: (v: string) => `City: ${v}`,
            concern: (v: string) => `Concern: ${v}`,
            preferredTime: (v: string) => `Preferred slot (AM/PM): ${v}`,
            reportLink: (v: string) => `Reports: ${v}`,
            consultMode: (v: string) => `Consultation mode: ${v}`,
            followUp: (v: string) => `Follow-up: ${v}`,
            paid: (upiId: string) => `Payment: ₹${CLINIC.consultationFee} (UPI: ${upiId})`,
            sentAt: (v: string) => `Sent on: ${v}`,
            ask: "Kindly share the available consultation time. Thank you.",
          },
          row: { name: "Name", age: "Age", phone: "Phone", city: "City", concern: "Concern", time: "Preferred time", report: "Report link", mode: "Consult mode", follow: "Follow-up" },
        }
      : {
          back: "विवरण में वापस जाएँ",
          title: "भुगतान करें",
          subtitle: "कृपया नीचे दिए QR कोड या UPI ID से परामर्श शुल्क भेजें।",
          feeLabel: "परामर्श शुल्क",
          copyCta: "UPI ID कॉपी करें",
          openUpiCta: "UPI ऐप खोलें",
          finalTitle: "अंतिम चरण",
          finalDesc:
            "भुगतान पूरा होने के बाद, नीचे दिए बटन से अपना विवरण WhatsApp पर भेजें। डॉक्टर शीघ्र ही समय बताएंगे।",
          finalCta: "मैंने भुगतान कर दिया → WhatsApp पर भेजें",
          confirmTitle: "विवरण की पुष्टि",
          disclaimer: "⚠️ यह सेवा आपातकालीन चिकित्सा के लिए नहीं है।",
          toast: {
            copied: "UPI ID कॉपी हो गई।",
            copyFail: "कॉपी नहीं हो सका, कृपया मैन्युअली कॉपी करें।",
            opening: "WhatsApp खोला जा रहा है…",
          },
          msg: {
            hi: (_name?: string) => `नमस्ते ${CLINIC.doctorName} जी,`,
            subject: "आयुर्वेदिक परामर्श हेतु अनुरोध",
            details: "रोगी विवरण",
            name: (v: string) => `नाम: ${v}`,
            age: (v: string) => `उम्र: ${v}`,
            phone: (v: string) => `फ़ोन: ${v}`,
            city: (v: string) => `शहर: ${v}`,
            concern: (v: string) => `समस्या: ${v}`,
            preferredTime: (v: string) => `पसंदीदा समय (AM/PM): ${v}`,
            reportLink: (v: string) => `रिपोर्ट: ${v}`,
            consultMode: (v: string) => `परामर्श माध्यम: ${v}`,
            followUp: (v: string) => `फॉलो-अप: ${v}`,
            paid: (upiId: string) => `भुगतान: ₹${CLINIC.consultationFee} (UPI: ${upiId})`,
            sentAt: (v: string) => `भेजने का समय: ${v}`,
            ask: "कृपया उपलब्ध परामर्श समय बताएं। धन्यवाद।",
          },
          row: { name: "नाम", age: "उम्र", phone: "फ़ोन", city: "शहर", concern: "समस्या", time: "पसंदीदा समय", report: "रिपोर्ट लिंक", mode: "परामर्श माध्यम", follow: "फॉलो-अप" },
        };

  if (!data || !data.name) {
    return <Navigate to="/consultation" replace />;
  }

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(CLINIC.upiId);
      toast.success(t.toast.copied);
    } catch {
      toast.error(t.toast.copyFail);
    }
  };

  const message = [
    t.msg.hi(data.name),
    `*${t.msg.subject}*`,
    ``,
    `*${t.msg.details}*`,
    `• ${t.msg.name(data.name)}`,
    data.age ? `• ${t.msg.age(data.age)}` : "",
    `• ${t.msg.phone(data.phone)}`,
    data.city ? `• ${t.msg.city(data.city)}` : "",
    `• ${t.msg.concern(data.concern)}`,
    data.preferredTime ? `• ${t.msg.preferredTime(data.preferredTime)}` : "",
    data.reportLink ? `• ${t.msg.reportLink(data.reportLink)}` : "",
    data.consultMode ? `• ${t.msg.consultMode(data.consultMode)}` : "",
    data.followUp ? `• ${t.msg.followUp(data.followUp)}` : "",
    ``,
    t.msg.paid(CLINIC.upiId),
    t.msg.sentAt(formatSentAt(new Date(), lang === "en" ? "en-IN" : "hi-IN")),
    t.msg.ask,
  ].filter(Boolean).join("\n");

  const onWhatsApp = () => {
    window.open(buildWhatsAppLink(message), "_blank");
    toast.success(t.toast.opening);
  };

  const onOpenUpi = () => {
    window.location.href = CLINIC.upiPaymentLink;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        title={lang === "en" ? "Payment | Ayurvedic Consultation" : "भुगतान | आयुर्वेदिक परामर्श"}
        description={content.brandMessage}
        keywords={content.seo.keywords.join(", ")}
      />
      <SiteHeader />

      <section className="container py-10 md:py-16">
        <Link to="/consultation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h1 className="font-serif text-3xl text-primary md:text-4xl">{t.title}</h1>
            <p className="mt-2 text-muted-foreground">
              {t.subtitle}
            </p>

            <div className="mt-6 rounded-xl border border-gold/40 bg-gold-soft/40 p-4">
              <p className="text-sm text-primary/80">{t.feeLabel}</p>
              <p className="font-serif text-3xl text-primary">₹{CLINIC.consultationFee}</p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-6">
              <button
                type="button"
                onClick={onOpenUpi}
                className="rounded-lg border border-border transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open UPI app"
              >
                <img src={upiQr} alt="UPI QR" width={220} height={220} className="rounded-lg" loading="lazy" />
              </button>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">UPI ID</p>
                <p className="mt-1 font-mono text-base text-primary">{CLINIC.upiId}</p>
                <p className="text-xs text-muted-foreground">{CLINIC.upiName}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="outline" size="sm" onClick={copyUpi}>
                  <Copy className="h-4 w-4" /> {t.copyCta}
                </Button>
                <Button variant="outline" size="sm" onClick={onOpenUpi}>
                  <ExternalLink className="h-4 w-4" /> {t.openUpiCta}
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-card">
              <h3 className="font-serif text-xl text-primary">{t.finalTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.finalDesc}
              </p>
              <Button size="lg" className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={onWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                {t.finalCta}
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-serif text-lg text-primary">{t.confirmTitle}</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                <Row k={t.row.name} v={data.name} />
                {data.age && <Row k={t.row.age} v={data.age} />}
                <Row k={t.row.phone} v={data.phone} />
                {data.city && <Row k={t.row.city} v={data.city} />}
                <Row k={t.row.concern} v={data.concern} />
                {data.preferredTime && <Row k={t.row.time} v={data.preferredTime} />}
                {data.reportLink && <Row k={t.row.report} v={data.reportLink} />}
                {data.consultMode && <Row k={t.row.mode} v={data.consultMode} />}
                {data.followUp && <Row k={t.row.follow} v={data.followUp} />}
              </dl>
            </div>

            <p className="text-xs text-muted-foreground">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex gap-2">
    <dt className="w-24 shrink-0 text-muted-foreground">{k}:</dt>
    <dd className="text-foreground">{v}</dd>
  </div>
);

export default Payment;