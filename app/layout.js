import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import CookieCons from "./components/CookieCons";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SpeedRunTravel",
    description:
        "Staying in a city for 24 hours or less. Let me help you decide whether to visit or skip.",
    keywords:
        "traveling, 24 hours, city, raleigh, boston, dc, virginia, amsterdam, london, salzburg",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={inter.className}>
                <Navigation />
                <div className="body-container">
                    <div className="body-container-wrapper"> {children}</div>
                </div>
                <Footer />
                <CookieCons />
            </body>
        </html>
    );
}
