import Image from "next/image";
import { memo } from "react";
import SubscriberButton from "./SubscriberButton";
import Link from "next/link";

const Footer = () => {
    console.log("footer memo is running");
    return (
        <footer>
            Subscribe & Follow me on Instagram <br />
            <div className="footer-2">
                <div className="footer-subscribe-button">
                    <SubscriberButton color="secondary" />
                </div>
                <a
                    href="https://instagram.com/hunterkfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                >
                    {" "}
                    <Image
                        height={35}
                        width={35}
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071041/230419%20Icons/instagram.png"
                        alt="Instagram"
                    />
                </a>
            </div>
            &copy; 2023 Speed Run Travel | All Rights Reserved |{" "}
            <Link style={{ color: "white" }} href="/privacy-policy">
                Privacy Policy
            </Link>
        </footer>
    );
};

export default (Footer);
