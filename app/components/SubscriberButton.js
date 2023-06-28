"use client";

import Button from "@mui/material/Button";
import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SimpleDialog from "./SimpleDialog";
import SubscriberFormSuccess from "./SubscriberFormSuccess";

const SubscriberButton = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [successRedirect, setSuccessRedirect] = useState(false);

    return (
        <>
            <Button
                color={props.color}
                variant="contained"
                onClick={() => setOpenModal(true)}
            >
                Subscribe
            </Button>
            <SimpleDialog openModal={openModal} setOpenModal={setOpenModal}>
                {successRedirect ? (
                    <SubscriberFormSuccess setOpenModal={setOpenModal} />
                ) : (
                    <SubscriberForm setSuccessRedirect={setSuccessRedirect} />
                )}
            </SimpleDialog>
        </>
    );
};

export default SubscriberButton;
