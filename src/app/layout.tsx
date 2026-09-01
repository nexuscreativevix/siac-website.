import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GrainLayer } from "@/components/GrainLayer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIAC — Tecnologia crítica sob controle",
  description:
    "Engenharia e operação de tecnologia crítica. Soluções integradas para ambientes críticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased text-brand-graphite dark:text-brand-ice`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GrainLayer />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
