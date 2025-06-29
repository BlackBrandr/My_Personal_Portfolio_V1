import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Portfolio - Your Name | Software & Product Developer",
  description: "Experienced software & product developer specializing in React, Next.js, and full-stack development. View my projects and get in touch for collaborations.",
  keywords: "software developer, product developer, React, Next.js, JavaScript, full-stack, web development, portfolio",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Portfolio - Your Name | Software & Product Developer",
    description: "Experienced software & product developer specializing in React, Next.js, and full-stack development.",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Software Developer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Your Name | Software & Product Developer",
    description: "Experienced software & product developer specializing in React, Next.js, and full-stack development.",
    images: ["https://yourwebsite.com/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
