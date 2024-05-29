import HeaderInsight from "@/components/HeaderInsight";
import Footer from "@/components/Footer";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen relative">
            <div className="sticky top-0 bg-white z-30">
                <HeaderInsight />
            </div>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
