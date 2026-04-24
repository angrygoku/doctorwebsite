# Dr. Mahesh Dixit — Ayurvedic Consultation Website

A clean, mobile-first marketing site for Dr. Mahesh Dixit (Ayurvedic doctor, 25+ years), focused on driving online consultation requests via WhatsApp.

## Design direction

- **Calm clinical**: deep forest green primary, ivory background, soft gold accents
- Serif headings (trustworthy, traditional) + clean sans body
- Generous whitespace, rounded cards, subtle leaf/Ayurvedic motifs
- Mobile-first: sticky top bar with logo + a persistent "Book on WhatsApp" CTA on mobile
- Smooth scroll between in-page sections

## Pages

### 1. Home (single-page scroll)

- **Sticky header** — Doctor name/logo, nav links (About, Specialties, Why Us, FAQ, Contact), "Book Consultation" button
- **Hero** — "Expert Ayurvedic Surgical Care" headline, 25+ Years badge, doctor portrait, dual CTAs (Book Appointment, Learn More)
- **About Dr. Dixit** — Short bio + 3 stat tiles (25+ Theses Guided, 95+ Global Seminars, 100k+ Plants Distributed)
- **Credentials** — Three-column cards: Academic Excellence, Key Milestones (awards), Community Impact
- **Specialties** — Cards for Ksharsutra, Agnikarma, Jalouka, Chronic Disease Care (diabetes, hypertension, digestive, chronic pain)
- **Why Choose Us** — 4 feature cards: Surgical Expertise, Nationally Awarded, Classical & Modern, Patient-Centered (Prakriti based)
- **Quote band** — "We don't just treat the disease — we understand its root cause." with CTA
- **FAQ** — Accordion: What is Ayurveda, Vata/Pitta/Kapha, Is it safe, Chronic disease treatment
- **Contact / Footer** — Email, social links (Facebook, YouTube, Instagram), WhatsApp button, disclaimer link

### 2. Consultation page (`/consultation`)

A focused booking form:

- Fields: Name, Age, Phone, Country/City, Health concern (textarea), Preferred date/time, How did you hear about us (optional)
- On submit → opens WhatsApp (`wa.me/<number>`) with a prefilled, formatted message containing all the details
- Below form: "What to expect" (3 steps), consultation fee note placeholder, response-time expectation
- Reassurance strip: privacy note, languages spoken, secure consultation

## Functionality

- All routing client-side (React Router); single doctor WhatsApp number configured in one constant for easy edits
- FAQ uses existing accordion component
- Toast confirmation when WhatsApp launches
- Fully responsive: 1-column mobile → 2-col tablet → 3/4-col desktop

## Things you'll provide later (placeholders used now)

- Doctor's WhatsApp number (placeholder used; easy to swap)
- Real portrait of Dr. Dixit (a tasteful generated placeholder will be used)
- Final consultation fee, exact contact email/phone

After approval I'll implement the design system (deep green / ivory / gold tokens), build both pages, and wire the WhatsApp booking flow.  
  
**REFINEMENT PROMPT:**

Refine the existing website with the following changes:

### 🎯 Positioning Update

- Replace all surgical-focused language with **Ayurvedic consultation and healing-focused language**
- The website should feel like a **trusted Ayurvedic clinic and consultation space**, not a surgical center

---

### 🌿 Language Requirement

- Convert all visible UI content into **Hindi (Devanagari)**
- Keep only essential English words like WhatsApp, UPI if needed
- Tone should feel **natural, respectful, and Indian**

---

### 🧘 Hero Section Update

Replace headline with:

👉 “आयुर्वेदिक परामर्श – Dr. Mahesh Dixit के साथ”

Subtext:

👉 “25+ वर्षों के अनुभव के साथ, आपकी सेहत के लिए प्राकृतिक और व्यक्तिगत मार्गदर्शन”

CTA Buttons:

- “परामर्श बुक करें”
- “और जानें”

---

### 👨‍⚕️ Specialties Section Update

Replace current procedures with:

- पाचन संबंधी समस्याएं
- मधुमेह / जीवनशैली रोग
- तनाव और नींद
- जोड़ों और दर्द की समस्या
- सामान्य स्वास्थ्य मार्गदर्शन

---

### 📱 Add Consultation Flow Section (Critical)

Add a clear section:

**“परामर्श कैसे लें”**

Steps:

1. अपनी जानकारी भरें
2. UPI से शुल्क जमा करें
3. WhatsApp पर विवरण भेजें
4. डॉक्टर समय बताएंगे

---

### 💳 Add Payment Step (New Page or Section)

After consultation form submission:

- Redirect user to a **Payment Page**
- Show:
  - Consultation fee
  - UPI ID
  - QR code
- Add button:  
👉 “मैंने भुगतान कर दिया → WhatsApp पर भेजें”

---

### 💬 WhatsApp Flow (Important)

When user clicks WhatsApp:

Pre-fill message in Hindi with:

- Name
- Age
- Concern
- City

---

### 🎨 Design Refinement

- Keep existing green/ivory/gold palette
- Add subtle Ayurvedic/leaf motifs
- Increase whitespace for calm feel
- Ensure mobile-first experience

---

### ⚠️ Content Tone

- Avoid heavy medical jargon
- Keep language simple and reassuring
- Focus on trust, experience, and guidance

---

### 📌 Add Disclaimer (Hindi)

👉 “यह सेवा आपातकालीन चिकित्सा के लिए नहीं है”

---

# 🧩 3. What You Should KEEP from Current Plan

Don’t throw away everything—this is good:

✔ 25+ years credibility  
✔ Stats (social proof)  
✔ FAQ section  
✔ Clean design system  
✔ WhatsApp-first flow

---

# 🔥 4. What You Should REMOVE or REDUCE

- Over-emphasis on procedures
- Academic-heavy tone
- “Surgical authority” positioning
- Too many sections (keep it lighter)

---

# 🧠 5. One Strategic Upgrade (Do This)

Add this section:

### 🙏 “रोग नहीं, कारण का उपचार”

Short paragraph:

👉 Ayurveda focuses on root cause, not just symptoms

This becomes your **emotional hook**

---

# 💸 6. Final Reality

You don’t need:

- Complex backend
- Payment gateway
- Fancy booking system

You need:

> **Trust → Simple action → WhatsApp conversation**  
>
>