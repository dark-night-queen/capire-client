import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased`}>
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
