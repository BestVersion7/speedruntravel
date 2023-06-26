import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <>
            <header>
                <nav className="dashboard-nav">
                    <Link className="nav-link" href="/dashboard/articles">
                        Articles
                    </Link>
                    <Link className="nav-link" href="/dashboard/reels">
                        Reels
                    </Link>
                </nav>
            </header>
            <main className="body-container">{children}</main>
        </>
    );
}
