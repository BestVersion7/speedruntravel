"use client";
import getStripe from "../utils/getStripe";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createPayment } from "../utils/apiCalls";
import { Stripe } from "@stripe/stripe-js";

const DonateForm = () => {
    const [amount, setAmount] = useState<string>("0");
    // fix
    const customAmountRef = useRef<null>(null);
    const [currency, setCurrency] = useState<string>("usd");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Create a Checkout Session.
        try {
            const checkoutSession = await createPayment({
                price: amount,
                currency,
            });

            if (checkoutSession.status === 500) {
                alert(checkoutSession.message);
                return;
            }

            // Redirect to Checkout.
            const stripe: Stripe | null = await getStripe();

            const { error } = await stripe.redirectToCheckout({
                sessionId: checkoutSession,
            });
            alert(error.message);
        } catch (err) {
            alert(err);
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
        customAmountRef.current.value = "";
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    return (
        // change this not to textfield
        <form onSubmit={handleSubmit}>
            <Box sx={{ width: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="currency">Currency</InputLabel>
                    <Select
                        labelId="currency"
                        value={currency}
                        label="Currency"
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={"usd"}>USD</MenuItem>
                        <MenuItem value={"gbp"}>GBP</MenuItem>
                        <MenuItem value={"eur"}>EUR</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <>
                <input
                    type="radio"
                    id="amount1"
                    name="amount"
                    value="5"
                    onChange={handleRadioChange}
                />
                <label htmlFor="amount1">5.00</label>
                <br />
                <input
                    type="radio"
                    id="amount2"
                    name="amount"
                    value="10"
                    onChange={handleRadioChange}
                />
                <label htmlFor="amount2">10.00</label>
                <br />
                <input
                    type="radio"
                    id="amount3"
                    name="amount"
                    value="20"
                    onChange={handleRadioChange}
                />
                <label htmlFor="amount3">20.00</label>
                <br />
                <input
                    // checked={radioCheck}
                    onChange={handleInputChange}
                    type="radio"
                    id="amount3"
                    name="amount"
                />
                <label htmlFor="amount3">
                    <input
                        style={{ width: "5em" }}
                        placeholder="Custom"
                        ref={customAmountRef}
                        onChange={() =>
                            setAmount(customAmountRef.current.value)
                        }
                    />
                </label>
            </>
            <br />
            <br />
            <Button variant="contained" type="submit">
                Payment Details
            </Button>
        </form>
    );
};

export default DonateForm;
