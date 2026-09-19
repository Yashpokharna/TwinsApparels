import "./globals.css";
import { Archivo, DM_Sans } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://twinsapparels.in"),
  title: {
    default: "Twins Apparels — Garment Manufacturing, Bhilwara",
    template: "%s | Twins Apparels",
  },
  description:
    "Twins Apparels manufactures premium ready-to-wear bottomwear from Bhilwara, Rajasthan — 82 machines, 110+ skilled staff, 25,000 garments a month. Formal, casual, active and lounge fits for brands and private label.",
  keywords: [
    "garment manufacturer India",
    "bottomwear manufacturer",
    "private label clothing Bhilwara",
    "trouser manufacturer Rajasthan",
    "apparel export unit",
    "Twins Apparels",
  ],
  openGraph: {
    title: "Twins Apparels — Garment Manufacturing, Bhilwara",
    description:
      "Precision in every thread. Premium ready-to-wear bottomwear manufacturing for brands and private label.",
    url: "https://twinsapparels.in",
    siteName: "Twins Apparels",
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#F4F1EC",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/*
          Runs before first paint, and does two things:

          1. Marks the document JS-driven so scroll-reveal elements can start
             hidden without a flash. The timeout is a failsafe — if the app
             bundle fails to load or throws before it can reveal anything, we
             un-hide the page rather than leave a visitor on a blank screen.
          2. Flags the entry curtain to be skipped if it already played this
             session. Doing it here rather than in React is what keeps the
             curtain from flashing on repeat views.

          Without JS neither runs: content stays visible and the curtain lifts
          on its own, since its animation is pure CSS.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('js-ready');
window.__taFailsafe=setTimeout(function(){d.classList.remove('js-ready')},4000);
try{if(sessionStorage.getItem('ta:intro')==='1')d.dataset.intro='skip'}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-paper text-ink">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
