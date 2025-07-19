import "./globals.css";
import { DM_Sans } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import ThemeFavicon from "@/components/ThemeFavicon"; // 👈 You’ll create this next
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Twins Apparels",
  description: "Delivering fabric excellence across every thread.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon-dark.ico" id="favicon" />
      </Head>
      <body className={dmSans.className}>
        <ThemeFavicon />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
