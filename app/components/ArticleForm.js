"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import TextAreaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import BasicModal from "./BasicModal";
import { useState, useRef } from "react";
import Image from "next/image";

const ArticleForm = (props) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [publicRef, setPublicRef] = useState(props.article_public);

    const dateRef = useRef();
    const titleRef = useRef();
    const postRef = useRef();
    const imageSmallRef = useRef();

    const handleCreate = async () => {
        const data3 = {
            article_date: dateRef.current.value,
            article_title: titleRef.current.value,
            article_post: postRef.current.value,
            article_image_small: imageSmallRef.current.value,
            article_public: publicRef,
        };
        try {
            console.log(data3);
            // router.push("/dashboard");
        } catch (err) {
            return alert(err);
        }
    };

    const handleUpdate = async () => {
        const data3 = {
            article_date: dateRef.current.value,
            article_title: titleRef.current.value,
            article_post: postRef.current.value,
            article_image_small: imageSmallRef.current.value,
            article_public: publicRef,
        };
        try {
            setLoading(!loading);
            console.log(data3);
            setOpenModal(false);
            router.push("/dashboard");
        } catch (err) {
            return alert(err);
        }
    };

    const handleReset = () => {
        dateRef.current.value = props.article_date;
        titleRef.current.value = props.article_title;
        postRef.current.value = props.article_post;
        imageSmallRef.current.value = props.article_image_small;
        setPublicRef(props.article_public);
    };

    const handleCancel = () => {
        router.push("/dashboard");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p>
                <Switch
                    checked={publicRef}
                    onChange={() => setPublicRef((v) => !v)}
                />
                {publicRef ? <span>Public</span> : <span>Private</span>}
            </p>
            <TextField
                label="Title"
                fullWidth
                defaultValue={props.article_title}
                inputRef={titleRef}
            />
            <br /> <br />
            <TextField
                label="Date"
                fullWidth
                defaultValue={props.article_date}
                inputRef={dateRef}
            />
            <br />
            <p>Article Body</p>
            <textarea
                style={{ width: "100%", minHeight: "20em" }}
                defaultValue={props.article_post}
                ref={postRef}
            />
            <br /> <br />
            <TextField
                fullWidth
                multiline
                label="Cover Image"
                rows={5}
                defaultValue={props.article_image_small}
                inputRef={imageSmallRef}
            />
            <br />
            <br />
            <Image
                width={350}
                height={350}
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
                    <BasicModal
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
                    </BasicModal>

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
