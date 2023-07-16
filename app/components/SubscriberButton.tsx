"use client";

import Button from "@mui/material/Button";
import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SimpleDialog from "./SimpleDialog";
import SubscriberFormSuccess from "./SubscriberFormSuccess";

const SubscriberButton = (props: { color?: "secondary" }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [successRedirect, setSuccessRedirect] = useState<boolean>(false);

    return (
        <>
            <Button
                color={props.color}
                variant="contained"
                onClick={() => setOpenModal(true)}
            >
                Subscribe
            </Button>
            <SimpleDialog
                cName="subscribe"
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
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
