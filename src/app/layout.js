import "./globals.css";
import { DM_Sans } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper"; 

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Twins Apparels",
  description: "Delivering fabric excellence across every thread.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}