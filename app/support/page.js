import DonateForm from "../components/DonateForm";

export const metadata = {
    title: "Support",
    description: "Support my travel adventure blog."
};

export default function SupportPage() {
    return (
        <div>
            <h1>Do you like what you see?</h1>
            <p>
                Please consider supporting my website so I can continue sharing
                my adventures with you. 💖
            </p>
            <DonateForm />
            <br />
        </div>
    );
}
