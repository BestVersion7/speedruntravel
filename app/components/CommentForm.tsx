"use client";

import { useRef } from "react";
import { createComment } from "../utils/apiCalls";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CommentForm = (props: {
    article_id: number;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const commentRef = useRef<any>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createComment({
                comment_user_name: "test",
                comment_user_image:
                    "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg",
                comment_date: `${Date.now()}`,
                article_id: props.article_id,
                comment_body: commentRef.current.value,
            });
            commentRef.current.value = "";
            props.setLoading((v) => !v);
        } catch (err) {
            // console.log(err);
            alert(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    inputRef={commentRef}
                    style={{ width: "100%" }}
                    label="Write comment here (maximum 250 characters)"
                    variant="standard"
                />
                <br /> <br />
                <Button type="submit" variant="contained">
                    Post
                </Button>
            </form>
        </>
    );
};

export default CommentForm;
