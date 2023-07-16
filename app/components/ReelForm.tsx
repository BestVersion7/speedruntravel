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
import Image from "next/image";
import {
    createReel,
    updateReelById,
} from "../utils/apiCallsServerExperimental";

const ReelForm = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();

    const [publicRef, setPublicRef] = useState(props.reel_public);
    const [videoRef, setVideoRef] = useState(props.reel_video);
    const [loading, setLoading] = useState(false);

    const videoThumbnailRef = useRef();
    const dateRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();

    let handleCreate;
    let handleUpdate;

    process.env.NODE_ENV === "development"
        ? (handleCreate = async () => {
              setLoading(true);
              const data2 = {
                  reel_date: dateRef.current.value,
                  reel_category: categoryRef.current.value,
                  reel_image: imageRef.current.value,
                  reel_public: publicRef,
                  reel_video: videoRef,
                  reel_video_thumbnail: videoThumbnailRef.current?.value ?? "",
              };

              try {
                  const data = await createReel(data2);

                  setLoading(false);
              } catch (err) {
                  alert(err);
              }
          })
        : (handleCreate = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
          });

    process.env.NODE_ENV === "development"
        ? (handleUpdate = async () => {
              setLoading(true);
              const data2 = {
                  reel_date: dateRef.current.value,
                  reel_category: categoryRef.current.value,
                  reel_image: imageRef.current.value,
                  reel_public: publicRef,
                  reel_video: videoRef,
                  reel_video_thumbnail: videoThumbnailRef.current?.value ?? "",
              };
              try {
                  const data = await updateReelById(props.reel_id, data2);
                  setLoading(false);
              } catch (err) {
                  return alert(err);
              }
          })
        : (handleUpdate = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
          });
    const handleCancel = () => {
        router.push("/dashboard");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {props.crud === "create" && (
                <Button
                    disabled={loading}
                    variant="contained"
                    onClick={handleCreate}
                >
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
                        size="small"
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
                </>
            )}{" "}
            <Button variant="contained" color="primary" onClick={handleCancel}>
                Close
            </Button>
            <p>
                <Switch
                    checked={publicRef}
                    onChange={() => setPublicRef((v) => !v)}
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
                        inputRef={videoThumbnailRef}
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
                    src={props.reel_image}
                    alt={props.reel_category}
                />
            )}
            <br />
        </form>
    );
};

export default ReelForm;
