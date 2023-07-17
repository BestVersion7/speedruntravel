"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { useState, useReducer } from "react";
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
import { reelReducer } from "../utils/reducer";
import { IReel, IReelForm } from "@/types/types";

const ReelForm = (props: IReelForm) => {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [state, dispatch] = useReducer(reelReducer, { ...props });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "textChange",
            payload: { key: e.target.name, value: e.target.value },
        });
    };

    let handleCreate;
    let handleUpdate;

    process.env.NODE_ENV === "development"
        ? (handleCreate = async () => {
              setLoading(true);

              try {
                  await createReel(state);
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

              try {
                  await updateReelById(props.reel_id, state);
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
                    checked={props.reel_public}
                    onChange={() =>
                        dispatch({
                            type: "textChange",
                            payload: {
                                key: "reel_public",
                                value: !state.reel_public,
                            },
                        })
                    }
                    inputProps={{ "aria-label": "controlled" }}
                />
                {state.reel_public ? <span>Public</span> : <span>Private</span>}
            </p>
            <TextField
                label="Date"
                fullWidth
                name="reel_date"
                onChange={(e) => handleChange(e)}
                defaultValue={props.reel_date}
            />
            <br /> <br />
            <TextField
                label="City"
                fullWidth
                name="reel_category"
                onChange={(e) => handleChange(e)}
                defaultValue={props.reel_category}
            />
            <br /> <br />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!state.reel_video}
                            onChange={() =>
                                dispatch({
                                    type: "textChange",
                                    payload: {
                                        key: "reel_video",
                                        value: !state.reel_video,
                                    },
                                })
                            }
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
                onChange={(e) => handleChange(e)}
                value="reel_image"
                defaultValue={props.reel_image}
            />
            <br />
            <br />
            {state.reel_video ? (
                <>
                    <TextField
                        label="Thumbnail Link"
                        multiline
                        fullWidth
                        minRows={3}
                        value="reel_video_thumbnail"
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <br />
                    <video
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
                    src={props.reel_image}
                    alt={props.reel_category}
                />
            )}
            <br />
        </form>
    );
};

export default ReelForm;
