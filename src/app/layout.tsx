import type { Metadata } from "next";
import { defaultFont } from "@/styles/fonts";
import "../styles/globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";

// Metadata for the app
export const metadata: Metadata = {
  title: "Grimoire",
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
      <body className={`${defaultFont.className} antialiased`}>
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
