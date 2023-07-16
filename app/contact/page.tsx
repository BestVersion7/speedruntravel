import Googlemap from "../components/Googlemap";
import ContactForm from "../components/ContactForm";

export const metadata = {
    title: "Contact",
    description: "Contact me about travel.",
};

export default function ContactPage() {
    return (
        <>
            <h2>Contact me</h2>
            <div className="contact-page">
                <div className="map">
                    <Googlemap />
                </div>
                <div>
                    <p>
                        Have questions for me? Please leave your name, email and
                        message and I will get back to you within 3-5 business
                        days. <b>info@speedruntravel.com</b>
                    </p>

                    <ContactForm />
                </div>
            </div>
        </>
    );
}
