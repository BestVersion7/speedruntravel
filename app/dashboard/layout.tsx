export const metadata = {
    title: "Dashboard",
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
    return (
        <div className="body-container-wrapper">
            <main>{children}</main>
        </div>
    );
}
