"use client";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import Loading from "./loading";
import { AnimatePresence, motion } from "framer-motion";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Twins Apparels",
  description: "Delivering fabric excellence across every thread.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Loader stays 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loader"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-screen z-[9999] bg-white"
              >
                <Loading />
              </motion.div>
            )}
          </AnimatePresence>

          {!isLoading && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
