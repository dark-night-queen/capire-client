import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";

// Load the montserrat font
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadata for the app
export const metadata: Metadata = {
  title: "Capire",
  description: "Reading and Understanding Stories",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/dark-favicon.ico",
      href: "/dark-favicon.ico",
    },
  ],
};

// Root layout for the app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
