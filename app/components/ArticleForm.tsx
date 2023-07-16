"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import { IArticleDashboard } from "@/types/types";
import {useReducer} from 'react'
import { articleReducer } from "../utils/reducer";

const ArticleForm = (props:IArticleDashboard) => {
    const router = useRouter();

    const [state, dispatch] = useReducer(articleReducer, )

    const handleCancel = () => {
        router.push("/dashboard");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => props.setOpenModal(true)}
            >
                Preview
            </Button>{" "}
            <Button variant="contained" onClick={handleCancel}>
                Close
            </Button>
            <br />
            <br />
            <p>
                <Switch
                    checked={props.article_public}
                    onChange={() => props.setArticlePublic((v) => !v)}
                />
                {props.article_public ? (
                    <span>Public</span>
                ) : (
                    <span>Private</span>
                )}
            </p>
            <TextField
                label="Title"
                fullWidth
                value={props.article_title}
                onChange={(e) => props.setArticleTitle(e.target.value)}
            />
            <br /> <br />
            <TextField
                label="Date"
                fullWidth
                value={props.article_date}
                onChange={(e) => props.setArticleDate(e.target.value)}
            />
            <br />
            <p>Article Body</p>
            <TextareaAutosize
                minRows={5}
                style={{ width: "100%", wordBreak: "break-all" }}
                value={props.article_post}
                onChange={(e) => props.setArticlePost(e.target.value)}
            />
            <br /> <br />
            <TextField
                fullWidth
                multiline
                label="Cover Image"
                rows={3}
                value={props.article_image_small}
                onChange={(e) => props.setArticleImageSmall(e.target.value)}
            />
            <br />
            <br />
            {/* <Image
                width={350}
                height={350}
                src={props.article_image_small}
                alt="picture"
            /> */}
            <br />
        </form>
    );
};

export default ArticleForm;
