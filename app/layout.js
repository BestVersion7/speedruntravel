import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard",
    description: "Edit Blog and Reels",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="body-container">
                    <Navigation />
                    <div className="body-container-wrapper"> {children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
