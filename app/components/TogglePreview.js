"use client";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function TogglePreview() {
    const [toggle, setToggle] = useState(false);

    const handleTogglePreview = () => {
        setToggle((value) => !value);
        if (!toggle) {
            document.getElementsByClassName(
                "dashboard-article-container"
            )[0].style.gridTemplateColumns = "1fr";
        } else {
            document.getElementsByClassName(
                "dashboard-article-container"
            )[0].style.gridTemplateColumns = "1fr 1fr";
        }
    };
    return (
        <Button
            onClick={handleTogglePreview}
            variant="contained"
            color="secondary"
        >
            Toggle Preview
        </Button>
    );
}
