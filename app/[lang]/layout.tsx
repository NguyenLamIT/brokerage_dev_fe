import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { Toaster } from "@/components/ui/toaster";
const inter = Quicksand({ subsets: ["latin"] });
import { Locale, i18nConfig } from '@/i18n';
export const metadata: Metadata = {
  title: {
    default: "Trade4go",
    template: "%s - Trade4go",
  },
  description: "Trade4go",
};
export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}>) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
