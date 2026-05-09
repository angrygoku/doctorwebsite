import type { Lang } from "@/lib/i18n";

// Easy-to-edit clinic info. Update these values to change site-wide details.
export const CLINIC = {
  doctorName: "Prof. (Vaidya) Mahesh Dixit",
  doctorTitle: "Ayurvedic Physician, Academician, Vice Chancellor",
  experienceYears: 30,
  whatsappNumber: "919079923020", // country code, no +
  upiId: "prof.maheshdixit@okhdfcbank",
  upiName: "Mahesh Dixit",
  upiPaymentLink: "upi://pay?pa=prof.maheshdixit@okhdfcbank&pn=Mahesh%20Dixit&aid=uGICAgKCSlqD5dQ",
  consultationFee: 200,
  email: "prof.maheshdixit@gmail.com",
  social: {
    facebook: "https://www.facebook.com/mahesh.dixit.1466",
    youtube: "https://www.youtube.com/@drdixitayurveda",
    instagram: "https://www.instagram.com/dr.dixitayurved/",
    telegram: "#",
    whatsappChannel: "#",
  },
};

export const SITE_META = {
  siteName: "Dr Dixit Consultation",
  shortName: "DrDixit",
  defaultTitle: "Dr Dixit Consultation | Ayurvedic Online Consultation",
  defaultDescription:
    "Consult Prof. (Vaidya) Mahesh Dixit for trusted Ayurvedic online consultation, chronic disease guidance, and personalized care plans.",
  themeColor: "#2f6b57",
  iconPath: "/favicon.svg",
  ogImagePath: "/og-image.svg",
  ogImageAlt: "Dr Dixit Consultation Ayurvedic online consultation branding",
} as const;

export const SITE_CONTENT = {
  en: {
    tagline: "Classical Ayurveda, Scientific Trust",
    hero: {
      badge: "30+ years of verified Ayurvedic experience",
      title: "Online consultation with an experienced Ayurvedic expert",
      subtitle:
        "Classical Ayurveda, scientific diagnosis, personalized treatment plans, and holistic health guidance from home.",
      ctaBook: "Book consultation now",
      ctaDiseases: "View diseases treated",
      ctaAbout: "View doctor profile",
    },
    trustPoints: [
      "Current Vice Chancellor, Shri Kallaji Vedic University",
      "Former Principal, Government Ayurveda College Udaipur",
      "Former Drug Controller",
      "Thousands of patients treated across India and abroad",
    ],
    brandMessage:
      "Reliable online consultation with classical Ayurveda, modern scientific perspective, and decades of clinical experience.",
    doctorBio: {
      title: "About Doctor",
      short:
        "Prof. (Vaidya) Mahesh Dixit has delivered patient-centric Ayurvedic care for more than three decades, with major contributions in clinical practice, Ayurveda education, and medicine quality administration.",
      full: [
        "I have been practicing classical, scientific, and patient-centered Ayurveda for over three decades.",
        "I have served as Professor, Principal, Drug Controller, and currently Vice Chancellor at Shri Kallaji Vedic University.",
        "My objective is to deliver authentic Ayurveda consultation to remote populations with safe, holistic, and practical guidance.",
      ],
      credentials: [
        "30+ years of classical and scientific Ayurveda experience",
        "20+ years as Professor at Government Ayurveda College, Udaipur",
        "10 years as Principal",
        "5 years as Drug Controller",
        "Current Vice Chancellor, Shri Kallaji Vedic University",
      ],
    },
    consultation: {
      title: "Online Consultation Process",
      steps: [
        "Fill your medical details on the website",
        "Upload reports or previous prescriptions",
        "Get video or phone consultation",
        "Receive personalized treatment and medicine guidance",
      ],
      objectiveTitle: "Core Objectives",
      objectivePoints: [
        {
          title: "Accessible expert consultation",
          desc: "Reach patients in remote and underserved regions with trusted Ayurvedic guidance.",
        },
        {
          title: "Travel-free specialist access",
          desc: "Enable patients to connect with senior expertise without repeated clinic visits.",
        },
        {
          title: "Personalized chronic-care planning",
          desc: "Provide structured support for complex and long-term conditions.",
        },
        {
          title: "Preventive health education",
          desc: "Promote diet, lifestyle, and routine-based correction before disease progression.",
        },
      ],
      needTitle: "Why this service is needed",
      needPoints: [
        {
          title: "Specialist availability gap",
          desc: "Many patients lack timely access to experienced Ayurvedic physicians in their local area.",
        },
        {
          title: "Rising lifestyle disorders",
          desc: "Diabetes, obesity, stress, and thyroid issues require sustained, holistic care approaches.",
        },
        {
          title: "Need for continuity",
          desc: "Long-term disease management improves when follow-up and guidance remain consistent.",
        },
        {
          title: "Demand for reliable digital care",
          desc: "Patients now expect safe, professional, and evidence-informed online consultations.",
        },
      ],
      benefitTitle: "Patient Benefits",
      benefits: [
        {
          title: "Consultation from home",
          desc: "Get specialist guidance without travel or waiting-room delays.",
        },
        {
          title: "Time and cost savings",
          desc: "Reduce travel effort while maintaining treatment continuity.",
        },
        {
          title: "Multi-channel support",
          desc: "Continue communication through video, phone, and WhatsApp touchpoints.",
        },
        {
          title: "Personalized treatment plans",
          desc: "Care recommendations are built from symptoms, history, and available reports.",
        },
        {
          title: "Diet and lifestyle guidance",
          desc: "Receive practical advice on ahar-vihar, routine, and yoga support.",
        },
        {
          title: "Long-term follow-up",
          desc: "Track recovery progress and adjust plans for sustained improvement.",
        },
      ],
    },
    diseases: {
      title: "Diseases Treated",
      categories: [
        {
          title: "Vata Disorders",
          items: ["Arthritis", "Rheumatoid Arthritis", "Sciatica", "Cervical Spondylitis", "Low Back Pain"],
        },
        {
          title: "Digestive Disorders",
          items: ["Hyperacidity", "Constipation", "IBS", "Piles", "Liver Disorders"],
        },
        {
          title: "Lifestyle Disorders",
          items: ["Diabetes", "Obesity", "Thyroid Disorders", "High Blood Pressure"],
        },
        {
          title: "Skin Disorders",
          items: ["Psoriasis", "Eczema", "Allergy", "Leucoderma"],
        },
        {
          title: "Neuro-Mental Disorders",
          items: ["Migraine", "Insomnia", "Stress", "Nerve Weakness"],
        },
        {
          title: "Eye and Special Disorders",
          items: ["Eye wellness support", "Chronic and difficult-to-manage conditions"],
        },
      ],
    },
    pages: {
      home: "Home",
      about: "About Doctor",
      diseases: "Diseases Treated",
      consultation: "Online Consultation",
      testimonials: "Testimonials",
      contact: "Contact",
      book: "Book Appointment",
    },
    testimonials: [
      {
        name: "Patient from Jaipur",
        text: "Joint pain and morning stiffness improved significantly with the prescribed routine and Ayurveda medicines.",
      },
      {
        name: "Patient from Mumbai",
        text: "The online process was smooth, and treatment guidance was practical, clear, and personalized.",
      },
      {
        name: "Patient from Dubai",
        text: "Even from abroad, I could receive detailed and reliable Ayurvedic consultation and follow-up.",
      },
      {
        name: "Patient from Udaipur",
        text: "Acidity and bloating reduced within weeks after disciplined diet and medicine guidance.",
      },
      {
        name: "Patient from Pune",
        text: "Chronic migraine episodes became less frequent after following the advised dinacharya and sleep routine.",
      },
      {
        name: "Patient from Ahmedabad",
        text: "Thyroid-related fatigue improved with personalized Ayurvedic support and consistent follow-up.",
      },
      {
        name: "Patient from London",
        text: "Consultation was clear and practical despite time-zone differences. Follow-up support was excellent.",
      },
      {
        name: "Patient from Delhi",
        text: "Psoriasis symptoms became manageable with a steady plan focused on root-cause correction.",
      },
    ],
    seo: {
      keywords: [
        "Best Ayurvedic Doctor Online India",
        "Ayurvedic Consultation Rajasthan",
        "Arthritis Ayurvedic Treatment",
        "Scientific Ayurveda Treatment",
        "Charak Ayurveda Specialist",
        "Udaipur Ayurvedic Expert",
      ],
      description:
        "Consult Prof. (Vaidya) Mahesh Dixit for evidence-informed Ayurvedic online consultation, chronic disease guidance, and personalized treatment plans.",
    },
    disclaimer: "This service is not for medical emergencies.",
    finalTrustLine:
      "We do not treat only symptoms. We analyze root causes and provide personalized Ayurvedic care for sustainable recovery.",
  },
  hi: {
    tagline: "शास्त्रीय आयुर्वेद, वैज्ञानिक विश्वास",
    hero: {
      badge: "30+ वर्षों का प्रमाणित आयुर्वेदिक अनुभव",
      title: "अनुभवी आयुर्वेद विशेषज्ञ से ऑनलाइन परामर्श",
      subtitle:
        "विशुद्ध शास्त्रीय आयुर्वेद, वैज्ञानिक निदान, व्यक्तिगत उपचार योजना और समग्र स्वास्थ्य मार्गदर्शन अब आपके घर तक।",
      ctaBook: "अभी परामर्श बुक करें",
      ctaDiseases: "रोग अनुसार उपचार जानें",
      ctaAbout: "डॉक्टर प्रोफाइल देखें",
    },
    trustPoints: [
      "वर्तमान कुलपति, श्री कल्लाजी वैदिक विश्वविद्यालय",
      "पूर्व प्राचार्य, राजकीय आयुर्वेद महाविद्यालय उदयपुर",
      "पूर्व ड्रग कंट्रोलर",
      "भारत एवं विदेशों के हजारों रोगियों के उपचार का अनुभव",
    ],
    brandMessage:
      "शास्त्रीय आयुर्वेद, आधुनिक वैज्ञानिक दृष्टिकोण और दशकों के अनुभव के साथ विश्वसनीय ऑनलाइन परामर्श।",
    doctorBio: {
      title: "डॉक्टर परिचय",
      short:
        "प्रो. (वैद्य) महेश दीक्षित पिछले तीन दशकों से अधिक समय से रोगी-केंद्रित आयुर्वेदिक सेवाएं प्रदान कर रहे हैं। उन्होंने क्लिनिकल चिकित्सा, आयुर्वेद शिक्षा और औषधि गुणवत्ता प्रशासन में व्यापक योगदान दिया है।",
      full: [
        "मैं पिछले तीन दशकों से अधिक समय से शास्त्रसम्मत, वैज्ञानिक एवं रोगी-केंद्रित आयुर्वेद चिकित्सा सेवाएं प्रदान कर रहा हूं।",
        "मैंने प्रोफेसर, प्राचार्य, ड्रग कंट्रोलर तथा वर्तमान में कुलपति के रूप में महत्वपूर्ण दायित्व निभाए हैं।",
        "मेरा उद्देश्य दूरदराज क्षेत्रों तक भी प्रामाणिक आयुर्वेदिक परामर्श पहुंचाना और सुरक्षित, समग्र एवं प्रभावी चिकित्सा उपलब्ध कराना है।",
      ],
      credentials: [
        "30+ वर्षों का शास्त्रीय एवं वैज्ञानिक आयुर्वेद अनुभव",
        "राजकीय आयुर्वेद महाविद्यालय, उदयपुर में 20+ वर्षों तक प्रोफेसर",
        "10 वर्षों तक प्राचार्य",
        "5 वर्षों तक ड्रग कंट्रोलर",
        "वर्तमान कुलपति, श्री कल्लाजी वैदिक विश्वविद्यालय",
      ],
    },
    consultation: {
      title: "ऑनलाइन परामर्श प्रक्रिया",
      steps: [
        "वेबसाइट पर रोग विवरण भरें",
        "रिपोर्ट/पुराने प्रिस्क्रिप्शन अपलोड करें",
        "वीडियो/फोन परामर्श प्राप्त करें",
        "व्यक्तिगत उपचार योजना एवं औषधि मार्गदर्शन पाएं",
      ],
      objectiveTitle: "मुख्य उद्देश्य",
      objectivePoints: [
        {
          title: "विशेषज्ञता की पहुंच",
          desc: "दूरदराज क्षेत्रों तक अनुभवी आयुर्वेदिक परामर्श को सरलता से उपलब्ध कराना।",
        },
        {
          title: "बिना यात्रा परामर्श",
          desc: "रोगी को वरिष्ठ विशेषज्ञ तक समयबद्ध पहुंच देना, बिना बार-बार यात्रा के।",
        },
        {
          title: "व्यक्तिगत दीर्घकालिक योजना",
          desc: "जटिल और पुराने रोगों के लिए रोगी-केंद्रित उपचार मार्ग तैयार करना।",
        },
        {
          title: "रोकथाम आधारित स्वास्थ्य",
          desc: "आहार-विहार और दिनचर्या सुधार से रोग की प्रगति रोकने पर जोर देना।",
        },
      ],
      needTitle: "इस सेवा की आवश्यकता",
      needPoints: [
        {
          title: "विशेषज्ञों की कमी",
          desc: "कई क्षेत्रों में अनुभवी आयुर्वेद चिकित्सकों की उपलब्धता सीमित है।",
        },
        {
          title: "जीवनशैली रोगों में वृद्धि",
          desc: "मधुमेह, मोटापा, तनाव और थायरॉइड जैसी समस्याओं में समग्र देखभाल की जरूरत बढ़ रही है।",
        },
        {
          title: "निरंतर फॉलो-अप की जरूरत",
          desc: "दीर्घकालिक रोग प्रबंधन में नियमित समीक्षा और संशोधन आवश्यक होते हैं।",
        },
        {
          title: "विश्वसनीय डिजिटल स्वास्थ्य सेवा",
          desc: "रोगी सुरक्षित, प्रमाण-आधारित और पेशेवर ऑनलाइन परामर्श चाहते हैं।",
        },
      ],
      benefitTitle: "रोगियों के प्रमुख लाभ",
      benefits: [
        {
          title: "घर बैठे विशेषज्ञ परामर्श",
          desc: "बिना क्लिनिक विजिट के अनुभवी चिकित्सकीय मार्गदर्शन प्राप्त करें।",
        },
        {
          title: "समय और लागत की बचत",
          desc: "यात्रा, प्रतीक्षा और अनावश्यक खर्च में कमी आती है।",
        },
        {
          title: "बहु-माध्यम सहयोग",
          desc: "वीडियो, फोन और WhatsApp के माध्यम से निरंतर संपर्क बना रहता है।",
        },
        {
          title: "व्यक्तिगत उपचार योजना",
          desc: "रिपोर्ट, लक्षण और रोग इतिहास के आधार पर उपचार तय किया जाता है।",
        },
        {
          title: "आहार-विहार मार्गदर्शन",
          desc: "योग, दिनचर्या और भोजन सुधार को उपचार में शामिल किया जाता है।",
        },
        {
          title: "दीर्घकालिक फॉलो-अप",
          desc: "रोग प्रगति के अनुसार उपचार में समय-समय पर संशोधन किया जाता है।",
        },
      ],
    },
    diseases: {
      title: "रोग उपचार अनुभाग",
      categories: [
        {
          title: "वात रोग",
          items: ["संधिवात", "आमवात", "साइटिका", "सर्वाइकल स्पॉन्डिलाइटिस", "कमर दर्द"],
        },
        {
          title: "पाचन रोग",
          items: ["अम्लपित्त", "कब्ज", "IBS", "बवासीर", "लिवर विकार"],
        },
        {
          title: "जीवनशैली रोग",
          items: ["मधुमेह", "मोटापा", "थायरॉइड", "उच्च रक्तचाप"],
        },
        {
          title: "त्वचा रोग",
          items: ["सोरायसिस", "एक्जिमा", "एलर्जी", "सफेद दाग"],
        },
        {
          title: "स्नायु एवं मानसिक रोग",
          items: ["माइग्रेन", "अनिद्रा", "तनाव", "नसों की कमजोरी"],
        },
        {
          title: "नेत्र एवं विशेष रोग",
          items: ["नेत्र स्वास्थ्य मार्गदर्शन", "जटिल एवं दीर्घकालिक रोग प्रबंधन"],
        },
      ],
    },
    pages: {
      home: "मुख्य पृष्ठ",
      about: "डॉक्टर परिचय",
      diseases: "रोग उपचार",
      consultation: "ऑनलाइन परामर्श",
      testimonials: "रोगी अनुभव",
      contact: "संपर्क",
      book: "परामर्श बुक करें",
    },
    testimonials: [
      {
        name: "रोगी, जयपुर",
        text: "जोड़ों के दर्द और सुबह की जकड़न में नियमित आयुर्वेदिक योजना से स्पष्ट लाभ मिला।",
      },
      {
        name: "रोगी, मुंबई",
        text: "ऑनलाइन प्रक्रिया बहुत सरल रही, और उपचार सुझाव स्पष्ट व व्यवहारिक मिले।",
      },
      {
        name: "रोगी, दुबई",
        text: "विदेश में रहते हुए भी विस्तार से भरोसेमंद परामर्श और फॉलो-अप मिला।",
      },
      {
        name: "रोगी, उदयपुर",
        text: "अम्लपित्त और पेट फूलने की समस्या आहार-विहार और औषधि मार्गदर्शन से काफी कम हुई।",
      },
      {
        name: "रोगी, पुणे",
        text: "माइग्रेन की आवृत्ति दिनचर्या और नींद सुधार के साथ धीरे-धीरे कम हुई।",
      },
      {
        name: "रोगी, अहमदाबाद",
        text: "थायरॉइड से जुड़ी थकान में व्यक्तिगत योजना और नियमित फॉलो-अप से लाभ मिला।",
      },
      {
        name: "रोगी, लंदन",
        text: "समय-अंतर के बावजूद परामर्श स्पष्ट और उपयोगी रहा, फॉलो-अप भी बहुत अच्छा मिला।",
      },
      {
        name: "रोगी, दिल्ली",
        text: "सोरायसिस के लक्षणों में जड़-कारण आधारित योजना से स्थिर सुधार मिला।",
      },
    ],
    seo: {
      keywords: [
        "अनुभवी आयुर्वेद चिकित्सक",
        "ऑनलाइन आयुर्वेद परामर्श",
        "संधिवात आयुर्वेद उपचार",
        "वैज्ञानिक आयुर्वेद चिकित्सा",
        "उदयपुर आयुर्वेद विशेषज्ञ",
      ],
      description:
        "प्रो. (वैद्य) महेश दीक्षित से ऑनलाइन आयुर्वेदिक परामर्श लें। जटिल व दीर्घकालिक रोगों के लिए व्यक्तिगत, वैज्ञानिक और शास्त्रीय उपचार मार्गदर्शन।",
    },
    disclaimer: "यह सेवा आपातकालीन चिकित्सा के लिए नहीं है।",
    finalTrustLine:
      "हम केवल लक्षणों का नहीं, बल्कि रोग के मूल कारण का विश्लेषण कर व्यक्तिगत आयुर्वेदिक चिकित्सा प्रदान करते हैं।",
  },
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encoded}`;
}

export function getContentByLang(lang: Lang) {
  return SITE_CONTENT[lang];
}
