import { Link } from "react-router-dom";
import {
  Sparkles,
  Leaf,
  HeartPulse,
  Moon,
  Bone,
  Stethoscope,
  Salad,
  ClipboardList,
  Wallet,
  MessageCircle,
  Clock,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileWhatsAppCTA from "@/components/MobileWhatsAppCTA";
import doctorPortrait from "@/assets/doctor-portrait.png";
import leafPattern from "@/assets/leaf-pattern.jpg";
import { CLINIC } from "@/lib/clinic";
import { useLanguage } from "@/lib/i18n";

const Index = () => {
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          heroBadge: "25+ years of experience",
          heroTitleA: "Ayurvedic consultation —",
          heroTitleB: "with",
          heroDesc: "With 25+ years of experience, get natural and personalized guidance for your health.",
          ctaBook: "Book consultation",
          ctaLearn: "Learn more",
          quote: "“Treat the cause, not just the disease.”",
          quoteBy: "— The essence of Ayurveda",
          aboutTitle: "About",
          aboutP1:
            "Dr. Mahesh Dixit has been devoted to Ayurveda for 25+ years. His approach is simple — treat the root cause, not just symptoms. Thousands of patients have found a healthier, balanced life with his guidance.",
          aboutP2: "This service is for those who want calm, natural, and personalized health solutions.",
          priorityTitle: "Our priorities",
          priorities: [
            "Diet & routine as per your body constitution",
            "Simple and sustainable lifestyle changes",
            "Personalized consultation based on your constitution",
            "Safe use of classical formulations",
          ],
          specialtiesTitle: "Specialties",
          specialtiesDesc: "Areas where Ayurvedic guidance can help.",
          howTitle: "How to consult",
          howDesc: "Complete your online consultation in four simple steps.",
          startNow: "Start now",
          whyTitle: "Why choose us",
          faqTitle: "FAQ",
          faqDesc: "Common questions about Ayurveda and consultation.",
          rootHookKicker: "🙏 The spirit of Ayurveda",
          rootHookTitle: "Treat the cause, not the disease",
          rootHookDesc:
            "Ayurveda doesn’t just calm symptoms — it reaches the root of imbalance in body, mind, and lifestyle. That’s why results can be natural and lasting.",
          rootHookCta: "Book now",
          faq: {
            q1: "What is Ayurveda?",
            a1: "Ayurveda is India’s 5,000+ year-old life science focused on health through balance of body and mind.",
            q2: "What are Vata, Pitta, and Kapha?",
            a2: "These three doshas form our constitution. Balance is health; imbalance can lead to disease.",
            q3: "Is Ayurvedic treatment safe?",
            a3: "Yes — when taken under the guidance of an experienced practitioner, Ayurveda is safe and sustainable.",
            q4: "Can it help in chronic conditions?",
            a4: "Often, yes. Diabetes, joint pain, insomnia, and digestive issues can improve with diet and lifestyle guidance.",
            q5: "What is the consultation fee?",
            a5: `The online consultation fee is ₹${CLINIC.consultationFee}, payable via UPI.`,
          },
        }
      : {
          heroBadge: "25+ वर्षों का अनुभव",
          heroTitleA: "आयुर्वेदिक परामर्श —",
          heroTitleB: "के साथ",
          heroDesc: "25+ वर्षों के अनुभव के साथ, आपकी सेहत के लिए प्राकृतिक और व्यक्तिगत मार्गदर्शन।",
          ctaBook: "परामर्श बुक करें",
          ctaLearn: "और जानें",
          quote: "“रोग नहीं, कारण का उपचार।”",
          quoteBy: "— आयुर्वेद की मूल भावना",
          aboutTitle: "परिचय",
          aboutP1:
            "Dr. Mahesh Dixit पिछले 25+ वर्षों से आयुर्वेद की सेवा में समर्पित हैं। उनका दृष्टिकोण सरल है — रोग के लक्षणों से नहीं, उसकी जड़ से उपचार। हजारों रोगियों ने उनकी मार्गदर्शिका में स्वस्थ और संतुलित जीवन पाया है।",
          aboutP2: "यह परामर्श सेवा उनके लिए है जो शांत, प्राकृतिक और व्यक्तिगत स्वास्थ्य समाधान चाहते हैं।",
          priorityTitle: "हमारी प्राथमिकता",
          priorities: [
            "प्रकृति अनुसार आहार-विहार",
            "सरल और टिकाऊ जीवनशैली परिवर्तन",
            "व्यक्तिगत परामर्श — आपकी प्रकृति पर आधारित",
            "शास्त्रीय औषधियों का सुरक्षित उपयोग",
          ],
          specialtiesTitle: "विशेषज्ञता के क्षेत्र",
          specialtiesDesc: "जिन समस्याओं में आयुर्वेदिक मार्गदर्शन से राहत मिलती है।",
          howTitle: "परामर्श कैसे लें",
          howDesc: "सरल चार चरणों में आपकी ऑनलाइन परामर्श पूरी होगी।",
          startNow: "अभी शुरू करें",
          whyTitle: "क्यों चुनें हमें",
          faqTitle: "सामान्य प्रश्न",
          faqDesc: "आयुर्वेद और परामर्श से जुड़ी आपकी मुख्य जिज्ञासाएँ।",
          rootHookKicker: "🙏 आयुर्वेद की भावना",
          rootHookTitle: "रोग नहीं, कारण का उपचार",
          rootHookDesc:
            "आयुर्वेद केवल लक्षणों को शांत नहीं करता — वह शरीर, मन और जीवनशैली के असंतुलन की जड़ तक पहुँचता है। इसी कारण इसके परिणाम स्थायी और प्राकृतिक होते हैं।",
          rootHookCta: "अभी परामर्श बुक करें",
          faq: {
            q1: "आयुर्वेद क्या है?",
            a1: "आयुर्वेद भारत की 5000+ वर्ष पुरानी जीवन-विज्ञान पद्धति है, जो शरीर, मन और आत्मा के संतुलन से स्वास्थ्य प्राप्त करने पर केंद्रित है।",
            q2: "वात, पित्त और कफ क्या हैं?",
            a2: "ये तीन दोष हमारे शरीर की मूल प्रकृति बनाते हैं। इनका संतुलन ही स्वास्थ्य है, और असंतुलन से रोग उत्पन्न होते हैं।",
            q3: "क्या आयुर्वेदिक उपचार सुरक्षित है?",
            a3: "हाँ — जब किसी अनुभवी आयुर्वेदाचार्य की देखरेख में लिया जाए, तो आयुर्वेदिक उपचार सुरक्षित और टिकाऊ होता है।",
            q4: "क्या पुरानी बीमारियों में सहायता मिलती है?",
            a4: "जी हाँ। मधुमेह, जोड़ों के दर्द, अनिद्रा, पाचन संबंधी पुराने रोगों में जीवनशैली व आहार-विहार के माध्यम से अच्छे परिणाम देखे गए हैं।",
            q5: "परामर्श शुल्क कितना है?",
            a5: `ऑनलाइन परामर्श का शुल्क ₹${CLINIC.consultationFee} है, जो UPI के माध्यम से जमा किया जा सकता है।`,
          },
        };

  const specialties =
    lang === "en"
      ? [
          { icon: Salad, title: "Digestive issues", desc: "Support for acidity, constipation, IBS and other gut concerns." },
          { icon: HeartPulse, title: "Diabetes / lifestyle disorders", desc: "Diabetes, BP, and obesity — routine-based natural management." },
          { icon: Moon, title: "Stress & sleep", desc: "Calming support for insomnia, anxiety, and mental fatigue." },
          { icon: Bone, title: "Joint & pain", desc: "Gentle support for arthritis, back pain, and knee pain." },
          { icon: Stethoscope, title: "General wellness guidance", desc: "Diet by constitution, seasonal routine, and longevity guidance." },
        ]
      : [
          { icon: Salad, title: "पाचन संबंधी समस्याएं", desc: "अम्लता, कब्ज, IBS व पेट संबंधी रोगों के लिए संतुलित आहार-विहार।" },
          { icon: HeartPulse, title: "मधुमेह / जीवनशैली रोग", desc: "मधुमेह, रक्तचाप व मोटापा — दिनचर्या आधारित प्राकृतिक प्रबंधन।" },
          { icon: Moon, title: "तनाव और नींद", desc: "अनिद्रा, चिंता और मानसिक थकान के लिए शांतिदायक उपाय।" },
          { icon: Bone, title: "जोड़ों और दर्द की समस्या", desc: "गठिया, कमर दर्द, घुटनों के दर्द में सरल व सुरक्षित सहायता।" },
          { icon: Stethoscope, title: "सामान्य स्वास्थ्य मार्गदर्शन", desc: "प्रकृति अनुसार आहार, ऋतुचर्या व दीर्घायु के लिए सलाह।" },
        ];

  const stats =
    lang === "en"
      ? [
          { value: "25+", label: "Years experience" },
          { value: "10,000+", label: "Happy patients" },
          { value: "95+", label: "Global seminars" },
        ]
      : [
          { value: "25+", label: "वर्षों का अनुभव" },
          { value: "10,000+", label: "संतुष्ट रोगी" },
          { value: "95+", label: "वैश्विक संगोष्ठी" },
        ];

  const why =
    lang === "en"
      ? [
          { icon: Award, title: "Experienced guidance", desc: "25+ years of deep Ayurvedic experience." },
          { icon: Leaf, title: "Classical + modern", desc: "A balanced blend of tradition and modern understanding." },
          { icon: Users, title: "Personalized consult", desc: "Suggestions based on your body constitution." },
          { icon: ShieldCheck, title: "Safe & private", desc: "Your information stays confidential." },
        ]
      : [
          { icon: Award, title: "अनुभवी मार्गदर्शन", desc: "25+ वर्षों का गहरा आयुर्वेदिक अनुभव।" },
          { icon: Leaf, title: "शास्त्रीय व आधुनिक", desc: "पारंपरिक आयुर्वेद और आधुनिक समझ का संगम।" },
          { icon: Users, title: "व्यक्तिगत परामर्श", desc: "आपकी प्रकृति के अनुसार सुझाव।" },
          { icon: ShieldCheck, title: "सुरक्षित व निजी", desc: "आपकी जानकारी पूर्णतः गोपनीय।" },
        ];

  const steps =
    lang === "en"
      ? [
          { icon: ClipboardList, title: "1. Fill your details", desc: "Name, age, concern, and city." },
          { icon: Wallet, title: "2. Pay via UPI", desc: "Make a secure UPI payment." },
          { icon: MessageCircle, title: "3. Send details on WhatsApp", desc: "Send everything in one click." },
          { icon: Clock, title: "4. Doctor shares the time", desc: "You’ll get a consultation slot soon." },
        ]
      : [
          { icon: ClipboardList, title: "1. अपनी जानकारी भरें", desc: "नाम, उम्र, समस्या और शहर भरें।" },
          { icon: Wallet, title: "2. UPI से शुल्क जमा करें", desc: "सुरक्षित UPI भुगतान करें।" },
          { icon: MessageCircle, title: "3. WhatsApp पर विवरण भेजें", desc: "एक क्लिक में विवरण भेजें।" },
          { icon: Clock, title: "4. डॉक्टर समय बताएंगे", desc: "जल्द ही परामर्श का समय मिलेगा।" },
        ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: `url(${leafPattern})`, backgroundSize: "600px" }}
          aria-hidden
        />
        <div className="container relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/50 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {t.heroBadge}
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl lg:text-6xl">
              {lang === "en" ? (
                <>
                  {t.heroTitleA} {t.heroTitleB} <span className="text-primary/80">Dr. Mahesh Dixit</span>
                </>
              ) : (
                <>
                  {t.heroTitleA} <span className="text-primary/80">Dr. Mahesh Dixit</span> {t.heroTitleB}
                </>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/consultation">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {t.ctaBook}
                </Button>
              </Link>
              <Link to="/#about">
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-secondary">
                  {t.ctaLearn}
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 md:max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-3 text-center shadow-card">
                  <div className="font-serif text-xl text-primary md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground md:text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={doctorPortrait}
                alt={lang === "en" ? "Dr. Mahesh Dixit" : "Dr. Mahesh Dixit, आयुर्वेदाचार्य"}
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-border bg-background/95 p-4 shadow-card backdrop-blur md:left-auto md:right-6 md:max-w-xs">
              <p className="font-serif text-sm text-primary">{t.quote}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.quoteBy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-secondary/40">
        <div className="container grid gap-10 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-primary md:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-4 text-muted-foreground">
              {t.aboutP1}
            </p>
            <p className="mt-3 text-muted-foreground">
              {t.aboutP2}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h3 className="font-serif text-xl text-primary">{t.priorityTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              {t.priorities.map((p) => (
                <li key={p} className="flex gap-3">
                  <Leaf className="mt-0.5 h-4 w-4 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="border-t border-border">
        <div className="container py-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-primary md:text-4xl">{t.specialtiesTitle}</h2>
            <p className="mt-3 text-muted-foreground">
              {t.specialtiesDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <Card key={s.title} className="border-border shadow-card transition-shadow hover:shadow-soft">
                <CardContent className="p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Root cause hook */}
      <section className="border-t border-border bg-gradient-hero text-primary-foreground">
        <div className="container grid items-center gap-6 py-16 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-primary-foreground/70">{t.rootHookKicker}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{t.rootHookTitle}</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/85">
              {t.rootHookDesc}
            </p>
          </div>
          <Link to="/consultation">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              {t.rootHookCta}
            </Button>
          </Link>
        </div>
      </section>

      {/* How to consult */}
      <section id="how" className="border-t border-border">
        <div className="container py-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-primary md:text-4xl">{t.howTitle}</h2>
            <p className="mt-3 text-muted-foreground">{t.howDesc}</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.startNow}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container py-16">
          <h2 className="font-serif text-3xl text-primary md:text-4xl">{t.whyTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-primary">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border">
        <div className="container grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-serif text-3xl text-primary md:text-4xl">{t.faqTitle}</h2>
            <p className="mt-3 text-muted-foreground">
              {t.faqDesc}
            </p>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-card">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left font-serif text-base text-primary">{t.faq.q1}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t.faq.a1}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left font-serif text-base text-primary">{t.faq.q2}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t.faq.a2}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left font-serif text-base text-primary">{t.faq.q3}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t.faq.a3}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-left font-serif text-base text-primary">{t.faq.q4}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t.faq.a4}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger className="text-left font-serif text-base text-primary">{t.faq.q5}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t.faq.a5}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <SiteFooter />
      <MobileWhatsAppCTA />
      <div className="h-16 md:hidden" aria-hidden />
    </div>
  );
};

export default Index;
