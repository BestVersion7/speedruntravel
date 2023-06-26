"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import TextAreaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
// import BasicModal from "./BasicModal";
import { useState } from "react";

const ArticleForm = (props) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCreate = async () => {
        try {
            await axios.post(`/api/article`, {
                article_date: `${props.article_date}`,
                article_title: props.article_title,
                article_post: props.article_post,
                article_image_small: props.article_image_small,
                article_public: props.article_public,
            });
            router.push("/master/blog");
        } catch (err) {
            return alert(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(
                `/api/article?article_id=${props.articleRaw.article_id}`,
                {
                    article_date: props.article_date,
                    article_title: props.article_title,
                    article_post: props.article_post,
                    article_image_small: props.article_image_small,
                    article_public: props.article_public,
                }
            );
            setLoading(!loading);
            setOpenModal(false);
            router.push("/master/blog");
        } catch (err) {
            return alert(err);
        }
    };

    const handleReset = () => {
        props.setArticleDate(props.articleRaw.article_date);
        props.setArticleTitle(props.articleRaw.article_title);
        props.setArticleImage(props.articleRaw.article_image);
        props.setArticleImageSmall(props.articleRaw.article_image_small);
        props.setArticlePost(props.articleRaw.article_post);
        props.setArticlePublic(props.articleRaw.article_public);
    };

    const handleCancel = () => {
        router.push("/master/blog");
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <Switch
                    checked={props.article_public}
                    onChange={() =>
                        props.setArticlePublic(!props.article_public)
                    }
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
            <TextAreaAutosize
                minRows={5}
                style={{ width: "100%" }}
                value={props.article_post}
                onChange={(e) => props.setArticlePost(e.target.value)}
            />
            <br />
            <TextField
                fullWidth
                multiline
                label="Cover Image"
                rows={5}
                value={props.article_image_small}
                onChange={(e) => props.setArticleImageSmall(e.target.value)}
            />
            <br />
            <br />
            <img
                width={350}
                // height={350}
                // layout="responsive"
                // objectFit="contain"
                src={props.article_image_small}
                alt="picture"
            />
            <br />
            {props.crud === "create" && (
                <Button variant="contained" onClick={handleCreate}>
                    Create
                </Button>
            )}
            {props.crud === "update" && (
                <>
                    <Button
                        onClick={() => setOpenModal(true)}
                        variant="contained"
                    >
                        Update
                    </Button>
                    {/* <BasicModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    >
                        <p>Are you sure you want to update?</p>
                        <Button
                            disabled={loading}
                            variant="contained"
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    </BasicModal> */}

                    <Button variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </>
            )}
            <Button variant="contained" onClick={handleCancel}>
                Close
            </Button>
        </form>
    );
};

export default ArticleForm;
