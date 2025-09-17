import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Raj - Software Developer",
  description: "Software Developer & UI/UX Enthusiast creating beautiful digital experiences",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen bg-primary-custom text-primary-custom transition-colors duration-300">
            <ClientLayout>
              {children}
            </ClientLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}