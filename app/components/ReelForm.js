"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { useState, useRef } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import BasicModal from "./BasicModal";
import { useRouter } from "next/navigation";
import { updateReelById } from "../utils/apiCalls";
import Image from "next/image";

const ReelForm = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();

    const [publicRef, setPublicRef] = useState(props.reel_public);
    const [videoRef, setVideoRef] = useState(props.reel_video);
    const [videoThumbnailRef, setVideoThumbnailRef] = useState(
        props.reel_video_thumbnail
    );

    const dateRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();

    const handleCreate = async () => {
        const data3 = {
            reel_date: dateRef.current.value,
            reel_category: categoryRef.current.value,
            reel_image: imageRef.current.value,
            reel_public: publicRef,
            reel_video: videoRef,
            reel_video_thumbnail: videoThumbnailRef,
        };
        try {
            console.log(data3);
            router.push("/dashboard/reels");
        } catch (err) {
            return alert(err);
        }
    };

    const handleUpdate = () => {
        const data3 = {
            reel_date: dateRef.current.value,
            reel_category: categoryRef.current.value,
            reel_image: imageRef.current.value,
            reel_public: publicRef,
            reel_video: videoRef,
            reel_video_thumbnail: videoThumbnailRef,
        };
        try {
            console.log(data3);
            router.push("/dashboard/reels");
        } catch (err) {
            return alert(err);
        }
    };

    const handleReset = () => {
        dateRef.current.value = props.reel_date;
        categoryRef.current.value = props.reel_category;
        imageRef.current.value = props.reel_image;
        setPublicRef(props.reel_public);
        setVideoRef(props.reel_video);
        setVideoThumbnailRef(props.reel_video_thumbnail);
    };

    const handleCancel = () => {
        router.push("/dashboard/reels");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p>
                <Switch
                    checked={publicRef}
                    onChange={() => setPublicRef((v) => !v)}
                    // onChange={() => props.setReelPublic(!props.reel_public)}
                    inputProps={{ "aria-label": "controlled" }}
                />
                {publicRef ? <span>Public</span> : <span>Private</span>}
            </p>
            <TextField
                label="Date"
                fullWidth
                inputRef={dateRef}
                defaultValue={props.reel_date}
            />
            <br /> <br />
            <TextField
                label="City"
                fullWidth
                inputRef={categoryRef}
                defaultValue={props.reel_category}
            />
            <br /> <br />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={videoRef}
                            onChange={() => setVideoRef((v) => !v)}
                        />
                    }
                    label="Video"
                />
            </FormGroup>
            <br />
            <TextField
                label="Url Link"
                multiline
                fullWidth
                rows={3}
                inputRef={imageRef}
                defaultValue={props.reel_image}
            />
            <br />
            <br />
            {videoRef ? (
                <>
                    <TextField
                        label="Thumbnail Link"
                        multiline
                        fullWidth
                        minRows={3}
                        value={videoThumbnailRef}
                        onChange={(e) => setVideoThumbnailRef(e.target.value)}
                    />
                    <br />
                    <br />
                    <video
                        // className={`ig-reel-image-${props.reel_public}`}
                        width="100%"
                        height="auto"
                        controls
                        poster={props.reel_video_thumbnail}
                    >
                        <source src={props.reel_image} type="video/mp4" />
                        Your browser does not support playing this video.
                    </video>
                </>
            ) : (
                <Image
                    width="400"
                    height="400"
                    style={{ objectFit: "cover" }}
                    // src={props.reel_image}
                    src={props.reel_image || imageRef.current.value}
                    alt={props.reel_category}
                />
            )}
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
                        btnName="Update"
                    >
                        <p>Are you sure you want to update?</p>
                        <Button variant="contained" onClick={handleUpdate}>
                            Update
                        </Button>
                    </BasicModal>

                    <Button variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </>
            )}
            <Button variant="contained" color="primary" onClick={handleCancel}>
                Close
            </Button>
        </form>
    );
};

export default ReelForm;
