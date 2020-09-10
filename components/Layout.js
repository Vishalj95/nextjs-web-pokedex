import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/pokeball.png" />
            </Head>

            <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-center p-6 bg-teal-500">
                <div className="flex items-center flex-shrink-0 mr-6 text-white">
                    {/* <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                    <Link href="/">
                        <a className="text-xl font-semibold tracking-tight">NextJs Web Pokedex</a>
                    </Link>
                </div>
            </nav>

            <main className="container min-h-screen pt-8 pb-2 mx-auto">
                { children }
            </main>
        </div>
    );
}