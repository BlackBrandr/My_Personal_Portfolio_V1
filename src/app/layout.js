import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

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
  title: "Burak Karataş | Software & Product Developer",
  description: "Experienced software & product developer specializing in React, Next.js, and full-stack development. View my projects and get in touch for collaborations.",
  keywords: "software developer, product developer, React, Next.js, JavaScript, full-stack, web development, portfolio",
  authors: [{ name: "Burak Karataş" }],
  creator: "Burak Karataş",
  openGraph: {
    title: "Burak Karataş | Software & Product Developer",
    description: "Experienced software & product developer specializing in React, Next.js, and full-stack development.",
    url: "https://burakkaratas.com",
    siteName: "Burak Karataş",
    images: [
      {
        url: "https://burakkaratas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Burak Karataş - Software Developer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Burak Karataş | Software & Product Developer",
    description: "Experienced software & product developer specializing in React, Next.js, and full-stack development.",
    images: ["https://burakkaratas.com/twitter-image.jpg"]
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
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/profile.png', sizes: '950x855', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
