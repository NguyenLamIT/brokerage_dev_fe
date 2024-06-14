import HeaderInsight from "@/components/HeaderInsight";
import Footer from "@/components/Footer";
import { Locale, i18nConfig } from "@/i18n";

type Props = {
    params: { locale: Locale };
};

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}
export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Props
}>) {
    return (
        <div className="flex flex-col min-h-screen relative">
            <div className="sticky top-0 bg-white z-30">
                <HeaderInsight params={params} />
            </div>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
