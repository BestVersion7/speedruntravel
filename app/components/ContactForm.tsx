"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useReducer, useState } from "react";
import BasicModal from "./BasicModal";
import { createEmail } from "../utils/apiCallsServerExperimental";
import { emailReducer } from "../utils/reducer";

const ContactForm = () => {
    const initialState = {
        name: "test",
        email: "test",
        message: "test",
        phone: "test",
    };
    const [state, dispatch] = useReducer(emailReducer, initialState);
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "textChange",
            payload: { key: e.target.name, value: e.target.value },
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await createEmail(state);
            setOpenModal(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form
                style={{
                    display: "grid",
                    // maxWidth: "35em",
                    gridGap: "1em",
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    name="name"
                    onChange={(e) => handleChange(e)}
                    placeholder="Name (required)"
                    label="Name (required)"
                />
                <TextField
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                    placeholder="Email (required)"
                    label="Email (required)"
                    type="email"
                />

                <TextField
                    // required
                    name="phone"
                    onChange={(e) => handleChange(e)}
                    placeholder="Phone (optional)"
                    label="Phone (optional)"
                />

                <TextField
                    required
                    multiline
                    onChange={(e) => handleChange(e)}
                    placeholder="Message (required)"
                    minRows={5}
                    name="message"
                    label="Message (required)"
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
            <BasicModal
                size="small"
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <p>
                    Your message has been delivered! Please expect a response
                    within 3-5 business days. Have a wonderful day!
                </p>
            </BasicModal>
        </>
    );
};

export default ContactForm;
