// Easy-to-edit clinic info. Update these values to change site-wide details.
export const CLINIC = {
  doctorName: "Dr. Mahesh Dixit",
  doctorTitle: "आयुर्वेदाचार्य",
  experienceYears: 25,
  whatsappNumber: "919079923020", // country code, no +
  upiId: "prof.maheshdixit@okhdfcbank",
  upiName: "Dr. Mahesh Dixit",
  upiPaymentLink: "upi://pay?pa=prof.maheshdixit@okhdfcbank&pn=Mahesh%20Dixit&aid=uGICAgKCSlqD5dQ",
  consultationFee: 500,
  email: "prof.maheshdixit@gmail.com",
  social: {
    facebook: "https://www.facebook.com/mahesh.dixit.1466",
    youtube: "https://www.youtube.com/@drdixitayurveda",
    instagram: "https://www.instagram.com/dr.dixitayurved/",
  },
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encoded}`;
}