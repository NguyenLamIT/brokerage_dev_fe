import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { Toaster } from "@/components/ui/toaster";
const inter = Quicksand({ subsets: ["latin"] });
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import HeaderInsight from "@/components/HeaderInsight";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: "Trade4go",
    template: "%s - Trade4go",
  },
  description: "Trade4go",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // const session = await getServerSession(options);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Providers>
                {children}
            <Toaster />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
