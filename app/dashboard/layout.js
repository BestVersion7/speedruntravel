import Link from "next/link";

export const metadata = {
    title: 'Dashboard',
}

export default function RootLayout({ children }) {
    return (
        <div className="body-container-wrapper">
            <Link className="nav-link" href="/dashboard">
                Dashboard
            </Link>
            <br />
            <Link className="nav-link" href="/dashboard/articles">
                Edit Articles
            </Link>
            <br />
            <Link className="nav-link" href="/dashboard/reels">
                Edit Reels
            </Link>
            <main>{children}</main>
        </div>
    );
}
