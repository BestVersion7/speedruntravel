"use client";

import { useRef } from "react";
import { createComment } from "../utils/apiCalls";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CommentForm = (props) => {
    const commentRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createComment({
                article_id: props.article_id,
                comment_body: commentRef.current.value,
                comment_user_name: "Test",
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
