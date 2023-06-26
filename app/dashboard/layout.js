import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <>
            <header>
                <nav className="dashboard-nav">
                    <Link className="nav-link" href="/dashboard/article">
                        Article
                    </Link>
                    <Link className="nav-link" href="/dashboard/reel">
                        Reel
                    </Link>
                </nav>
            </header>
            <main className="body-container">{children}</main>
        </>
    );
}
