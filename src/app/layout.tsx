import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lipy.ai - Social media assistant, to automate your customer inquires",
  description:
    "Lipy.ai is here to revolutionize your social media experience, providing personalized responses for customer inquires, order taking, and efficient appointment bookings. Enhance your customer satisfaction rate and drive business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3VVTR6VP83" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3VVTR6VP83');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
