import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MobileWhatsAppCTA = () => (
  <Link
    to="/consultation"
    className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-soft md:hidden"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="font-medium">परामर्श बुक करें</span>
  </Link>
);

export default MobileWhatsAppCTA;