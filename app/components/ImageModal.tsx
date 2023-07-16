"use client";

import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function ImageModal2(props) {
    const router = useRouter();

    const compareOne = (index) => {
        let display;
        index === 1 ? (display = "block") : (display = "none");
        return display;
    };
    const compareZero = (index) => {
        let display;
        index === 0 ? (display = "block") : (display = "none");
        if (props.paramsId == props.start_index) {
            display = "none";
        }
        return display;
    };
    const compareTwo = (index) => {
        let display;
        index === 2 ? (display = "block") : (display = "none");
        if (props.paramsId == props.end_index) {
            display = "none";
        }
        return display;
    };

    const handleClick = (index) => {
        router.push(`/${props.redirectUrl}/${index}`);
    };
    return (
        <>
            {props.reel_video ? (
                <video
                    width="100%"
                    height="auto"
                    // style={{display: 'none'}}
                    controls
                    // poster={props.reel_video_thumbnail}
                >
                    <source src={props.reel_image} type="video/mp4" />
                    Your browser does not support playing this video.
                </video>
            ) : (
                <Image
                    style={{
                        display: compareOne(props.index),
                        objectFit: "cover",
                    }}
                    fill={true}
                    sizes="100vw, (min-width: 768px) 50vw"
                    src={props.reel_image}
                    alt={props.reel_category}
                />
            )}
            <ArrowBackIcon
                disabled={true}
                style={{
                    zIndex: 2,
                    display: compareZero(props.index),
                    position: "absolute",
                    top: "40%",
                    fontSize: "4em",
                    color: "limegreen",
                }}
                onClick={() => handleClick(props.reel_id)}
            />
            <ArrowForwardIcon
                style={{
                    zIndex: 2,
                    display: compareTwo(props.index),
                    position: "absolute",
                    top: "40%",
                    right: 0,
                    fontSize: "4em",
                    color: "limegreen",
                }}
                onClick={() => handleClick(props.reel_id)}
            />
            <Button
                style={{
                    display: compareOne(props.index),
                    position: "absolute",
                    right: 0,
                    top: 0,
                }}
                variant="contained"
                onClick={() => router.push(`/${props.redirectUrl}`)}
            >
                X
            </Button>
        </>
    );
}

export default function ImageModal(props) {
    const router = useRouter();
    const handleClose = () => {
        router.push(`/${props.redirectUrl}`);
    };
    return (
        <Modal
            disableScrollLock
            disableRestoreFocus
            // hideBackdrop
            open={true}
            onClose={handleClose}
            aria-labelledby="Reels"
            aria-describedby="Reels-Slideshow"
        >
            <Box className="modal-box-2">
                {props.threeReels.map((item, index) => (
                    <ImageModal2
                        redirectUrl={props.redirectUrl}
                        reel_category={item.reel_category}
                        reel_id={item.reel_id}
                        index={index}
                        reel_image={item.reel_image}
                        start_index={props.startIndex}
                        end_index={props.endIndex}
                        key={index}
                        reel_video={item.reel_video}
                        paramsId={props.paramsId}
                    />
                ))}
            </Box>
        </Modal>
    );
}
