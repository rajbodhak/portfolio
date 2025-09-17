import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Raj - Software Developer",
  description: "Software Developer & UI/UX Enthusiast creating beautiful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen bg-primary-custom text-primary-custom transition-colors duration-300">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}