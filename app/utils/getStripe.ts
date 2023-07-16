let NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
    "pk_live_51HmjKWIvcOSGF1N4I9VwiWtowkpBAYMzGfaMCR4PV2NnmjXk6Et9Z1oCLzS7UnmpN1AqK4kbH4Ljw7tZmslYnFsX00IrgcSTXn";

if (process.env.NODE_ENV === "development") {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
        "pk_test_51HmjKWIvcOSGF1N4YKDQ1tHy9E8uM3EDe8TLs61aMXHZ4ksS5Z5NDnpFIBxg47wp7JrQgwUwfaP3jhjl4dSgEsy600VZ9Xnm6A";
}
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
};

export default getStripe;
