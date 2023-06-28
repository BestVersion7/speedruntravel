"use client";

import Button from "@mui/material/Button";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { createSubscriber } from "../utils/apiCalls";

const SubscriberForm = (props) => {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createSubscriber({
                email: emailRef.current.value,
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
            });
            if (data == "fail") {
                alert("Something went wrong");
            } else {
                props.setSuccessRedirect(true);
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h2>SpeedRunTravel Blog</h2>
            <p>Get an email notification when a new article is posted.</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    required
                    fullWidth
                    inputRef={firstNameRef}
                />
                <br />
                <br />
                <TextField
                    required
                    label="Last Name"
                    fullWidth
                    inputRef={lastNameRef}
                />
                <br />
                <br />
                <TextField
                    required
                    label="Email"
                    fullWidth
                    inputRef={emailRef}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
            <i>
                By completing this form, you are agreeing to our{" "}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/privacy-policy"
                >
                    privacy policy
                </Link>
            </i>
            .
        </div>
    );
};

export default SubscriberForm;
