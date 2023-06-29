"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import SimpleDialog from "./SimpleDialog";

export default function TogglePreview() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                variant="contained"
                color="secondary"
            >
                Toggle Preview
            </Button>
            <SimpleDialog
                cName="em"
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                Hello there
            </SimpleDialog>
        </>
    );
}
