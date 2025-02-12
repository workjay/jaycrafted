import type { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const balooBhai = Baloo_Bhai_2({
  variable: "--font-baloo-bhai",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jay Depani | Full Stack Developer",
  description:
    "Passionate Full Stack Developer with expertise in React, Next.js, Node.js, Express.js, Nest.js, MySQL, PostgreSQL, and MongoDB. I build scalable web applications, interactive user interfaces, and robust backend systems. Let's create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={balooBhai.variable}>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
