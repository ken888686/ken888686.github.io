import Footer from "@/app/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/content/profile";
import type { Metadata } from "next";
import "./globals.css";
import ModeToggle from "./mode-toggle";
import Navbar from "./navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ken888686.github.io"),
  title: {
    default: `${profile.name} - ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description: profile.summary,
    url: "https://ken888686.github.io",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="isolate flex min-h-screen flex-col antialiased">
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
