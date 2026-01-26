import Footer from "@/app/footer";
import ParticlesBackground from "@/components/particles-background";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ModeToggle from "./mode-toggle";
import Navbar from "./navbar";

const poppings = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ken888686.github.io"),
  title: {
    default: "Yung Chun Tu - AI Engineer & Full Stack Developer",
    template: "%s | Yung Chun Tu",
  },
  description:
    "A backend-focused full-stack engineer specializing in .NET, Next.js, and AI development based in Tokyo.",
  openGraph: {
    title: "Yung Chun Tu - AI Engineer & Full Stack Developer",
    description:
      "A backend-focused full-stack engineer specializing in .NET, Next.js, and AI development based in Tokyo.",
    url: "https://ken888686.github.io",
    siteName: "Yung Chun Tu Portfolio",
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
      <body
        className={`${poppings.variable} isolate flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesBackground />
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <div className="fixed right-4 bottom-4 md:hidden">
            <ModeToggle />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
