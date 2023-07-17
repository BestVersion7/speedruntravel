"use client";
import { useSearchParams } from "next/navigation";
import { fetchPaymentDetails } from "@/app/utils/apiCalls";

import Link from "next/link";

const SuccessPage = async () => {
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");
    // get session details
    const data = await fetchPaymentDetails(session_id);
    return (
        <div>
            <p>
                Thank you for your kind support of{" "}
                <b>${data[0].amount_total / 100}</b>! 💖💖💖 A receipt has been
                sent out to your inbox <b>{data[0].email}</b>.
            </p>
            <p>Name: {data[0].name}</p>
            <p>Email: {data[0].email}</p>
            <p>
                Amount: {data[0].currency.toUpperCase()}{" "}
                {data[0].amount_total / 100}
            </p>
            <Link href="/" className="nav-link">
                Back to Home
            </Link>
            <br />
            <br />
        </div>
    );
};

export default SuccessPage;
