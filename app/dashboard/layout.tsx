export const metadata = {
    title: "Dashboard",
};

export default function RootLayout({ children }) {
    return (
        <div className="body-container-wrapper">
            <main>{children}</main>
        </div>
    );
}
