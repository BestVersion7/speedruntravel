"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import { IArticle } from "@/types/types";
import { useReducer } from "react";
import { articleReducer } from "../utils/reducer";

const ArticleForm = (props: IArticle) => {
    const router = useRouter();

    const [state, dispatch] = useReducer(articleReducer, { ...props });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "textChange",
            payload: { key: e.target.name, value: e.target.value },
        });
    };

    const handleCancel = () => {
        router.push("/dashboard");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {/* <Button
                color="secondary"
                variant="contained"
                onClick={() => props.setOpenModal(true)}
            >
                Preview
            </Button>{" "}
            <Button variant="contained" onClick={handleCancel}>
                Close
            </Button> */}
            <br />
            <br />
            <p>
                <Switch
                    checked={props.article_public}
                    onChange={() =>
                        dispatch({
                            type: "textChange",
                            payload: {
                                key: "article_public",
                                value: !state.article_public,
                            },
                        })
                    }
                />
                {state.article_public ? (
                    <span>Public</span>
                ) : (
                    <span>Private</span>
                )}
            </p>
            <TextField
                label="Title"
                fullWidth
                name="article_title"
                defaultValue={props.article_title}
                onChange={(e) => handleChange(e)}
            />
            <br /> <br />
            <TextField
                label="Date"
                fullWidth
                defaultValue={props.article_date}
                name="article_date"
                onChange={(e) => handleChange(e)}
            />
            <br />
            <p>Article Body</p>
            <TextareaAutosize
                minRows={5}
                style={{ width: "100%", wordBreak: "break-all" }}
                defaultValue={props.article_post}
                name="article_post"
                onChange={(e) => handleChange(e)}
            />
            <br /> <br />
            <TextField
                fullWidth
                multiline
                label="Cover Image"
                rows={3}
                defaultValue={props.article_image_small}
                name="article_image_small"
                onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <br />
        </form>
    );
};

export default ArticleForm;
