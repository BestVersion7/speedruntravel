"use client";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Button from "@mui/material/Button";
import { postSurveyCity } from "@/app/utils/apiCalls";
import { useRouter } from "next/navigation";

const choices = ["Austin, TX", "Miami, FL", "Denver, CO", "Madison, WI"];

export default function SurveyForm() {
    const router = useRouter();
    const [city, setCity] = useState("");

    const handleSubmit = async () => {
        await postSurveyCity({
            survey_choice: city,
        });

        // set the cookie
        await fetch("/api/cookie", {
            method: "post",
            cache: "no-cache",
        });

        // refresh router
        router.refresh();
    };

    return (
        <FormControl style={{ marginLeft: "1em" }}>
            <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                {choices.map((item) => (
                    <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio />}
                        label={item}
                    />
                ))}
            </RadioGroup>
            <Button
                style={{ width: "10em" }}
                variant="contained"
                type="submit"
                onClick={handleSubmit}
            >
                Submit
            </Button>{" "}
            <br />
        </FormControl>
    );
}
