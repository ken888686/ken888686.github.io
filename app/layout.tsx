import Footer from "@/app/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import "./globals.css";
import ModeToggle from "./mode-toggle";
import Navbar from "./navbar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${profile.name} - ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: siteConfig.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  keywords: [
    "YungChun Tu",
    "Aaron Tu",
    "software engineer",
    "backend engineer",
    ".NET",
    "TypeScript",
    "cloud automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${profile.name} Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: siteConfig.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteConfig.url,
  image: `${siteConfig.url}${profile.image.src}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [
    "https://github.com/ken888686/",
    "https://www.linkedin.com/in/yungchuntu/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="isolate flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <div className="fixed right-4 bottom-4 md:hidden">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
