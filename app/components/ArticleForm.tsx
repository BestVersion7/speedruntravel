"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import { IArticleForm } from "@/types/types";
import { useReducer, useState } from "react";
import { articleReducer } from "../utils/reducer";
import {
    updateArticleById,
    createArticle,
} from "../utils/apiCallsServerExperimental";

const ArticleForm = (props: IArticleForm) => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
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

    let handleUpdate;
    let handleCreate;
    process.env.NODE_ENV === "development"
        ? (handleUpdate = async () => {
              setLoading(true);
              await updateArticleById(props.article_id, state);
              setLoading(false);
          })
        : (handleUpdate = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
          });
    process.env.NODE_ENV === "development"
        ? (handleCreate = async () => {
              setLoading(true);
              await createArticle(state);
              setLoading(false);
          })
        : (handleCreate = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
          });

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {props.crud == "create" && (
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleCreate}
                    disabled={loading}
                >
                    Create
                </Button>
            )}
            {props.crud == "update" && (
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleUpdate}
                    disabled={loading}
                >
                    Update
                </Button>
            )}
            <Button variant="contained" onClick={handleCancel}>
                Close
            </Button>
            <br />
            <br />
            <p>
                <Switch
                    defaultChecked={props.article_public || true}
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
                fullWidth
                name="article_title"
                defaultValue={props.article_title}
                onChange={(e) => handleChange(e)}
            />
            <br /> <br />
            <TextField
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
