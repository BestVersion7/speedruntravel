"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import BasicModal from "./BasicModal";
import { createEmail } from "../utils/apiCalls";

const ContactForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await createEmail({
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
                phone: phoneRef.current.value,
            });

            setOpenModal(true);
            nameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            messageRef.current.value = "";
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
                    inputRef={nameRef}
                    required
                    placeholder="Name (required)"
                    label="Name (required)"
                />
                <TextField
                    inputRef={emailRef}
                    required
                    placeholder="Email (required)"
                    label="Email (required)"
                    type="email"
                />

                <TextField
                    // required
                    inputRef={phoneRef}
                    placeholder="Phone (optional)"
                    label="Phone (optional)"
                />

                <TextField
                    required
                    multiline
                    placeholder="Message (required)"
                    minRows={5}
                    inputRef={messageRef}
                    label="Message (required)"
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
            <BasicModal openModal={openModal} setOpenModal={setOpenModal}>
                <p>
                    Your message has been delivered! Please expect a response
                    within 3-5 business days. Have a wonderful day!
                </p>
            </BasicModal>
        </>
    );
};

export default ContactForm;
