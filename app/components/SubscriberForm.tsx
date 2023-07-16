"use client";

import Button from "@mui/material/Button";
import { useReducer } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { createSubscriber } from "../utils/apiCallsServerExperimental";
import { subscriberReducer } from "../utils/reducer";

const SubscriberForm = (props: {
    setSuccessRedirect: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
    const initialState = {
        email: "",
        first_name: "",
        last_name: "",
    };
    const [state, dispatch] = useReducer(subscriberReducer, initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await createSubscriber(state);
            if (data == "fail") {
                alert("Something went wrong");
            } else {
                props.setSuccessRedirect(true);
            }
        } catch (err) {
            alert(err);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        dispatch({
            type: "textChange",
            payload: {
                key: e.target.name,
                value: e.target.value,
            },
        });
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
                    name="first_name"
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <br />
                <TextField
                    required
                    label="Last Name"
                    fullWidth
                    name="last_name"
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <br />
                <TextField
                    required
                    label="Email"
                    fullWidth
                    name="email"
                    onChange={(e) => handleChange(e)}
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
