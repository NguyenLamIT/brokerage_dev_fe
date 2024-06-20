import { headers } from 'next/headers';
import { Metadata } from 'next';
import userGuide from '../source.json'
import Provider from './Provider';

const getItem = (pathname: any) => {
    let child: any[] = []
    userGuide.forEach(guide => {
        guide.child.forEach(e => {
            child.push(e)
        })
    })
    return child.find(i => i.href == pathname)

}


export async function generateMetadata(): Promise<Metadata> {
    const pathname = headers().get('x-next-pathname') as string;
    const item = getItem(pathname)
    return {
        title: item?.title,
        description: item?.des
    };
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}
