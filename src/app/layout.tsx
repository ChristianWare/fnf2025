import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import localFont from "next/font/local";

const NeueHaasGroteskBold = localFont({
  src: "../../public/fonts/NeueHaasGroteskBold.woff2",
  variable: "--NeueHaasGroteskBold",
  display: "swap",
});

const NeueHaasGroteskMedium = localFont({
  src: "../../public/fonts/NeueHaasGroteskMedium.woff2",
  variable: "--NeueHaasGroteskMedium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${NeueHaasGroteskBold.variable} ${NeueHaasGroteskMedium.variable}`}
      >
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

// nbGroteskProMonoBold.woff2;
