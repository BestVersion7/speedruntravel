import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/dashboard/article">Article</Link>
                    <Link href="/dashboard/reel">Reel</Link>
                </nav>
            </header>
            <main className="body-container">{children}</main>
        </>
    );
}
