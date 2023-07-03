"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-T41PDVNG1M"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-T41PDVNG1M', { page_path: window.location.pathname });
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
