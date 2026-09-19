/**
 * Single source of truth for contact details and navigation.
 *
 * These were previously duplicated across the navbar, contact section and
 * footer — which is how the site ended up displaying connect@twinsapparels.in
 * while linking to info@twinsapparels.com. One place to change them now.
 */

export const SITE = {
  name: "Twins Apparels",
  email: "connect@twinsapparels.in",
  phone: "+91 94142 12340",
  phoneHref: "tel:+919414212340",
  hours: "Mon–Sat, 9am – 6pm IST",
  address: "Riico Growth Center, G-1-158, Hamirgarh, Bhilwara, Rajasthan 311025",
  locality: "Hamirgarh · Bhilwara · Rajasthan",
  mapsUrl:
    "https://maps.google.com/?q=Riico+Growth+Center,+G-1-158,+Hamirgarh,+Bhilwara,+Rajasthan+311025",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Riico+Growth+Center,+Hamirgarh,+Bhilwara,+Rajasthan+311025&output=embed",
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Machinery", href: "#machinery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100017192357822",
  },
];
