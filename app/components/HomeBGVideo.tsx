"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function HomeBGVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setTimeout(() => videoRef.current?.play(), 2500);
    }, []);

    return (
        <div className="bg-container">
            <Image
                className="img-bg"
                src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1691525453/travelsite2022/static/bgimg.png"
                height={1500}
                width={1500}
                alt="img"
            />
            <video ref={videoRef} loop muted className="vid-bg">
                <source
                    src="https://res.cloudinary.com/crimson-flamingo/video/upload/v1691525464/travelsite2022/static/bgvid.mp4"
                    type="video/mp4"
                />
                Your browser does not support Javascript.
            </video>
            <div className="bg-text">
                {/* <p>EXPLORE. DREAM. DIS</p> */}
                <p style={{ fontSize: "2em" }}>WHERE TO VISIT?</p>
                <p style={{ fontSize: "1.5em" }}>
                    This is a travel blog where I visit a city and stay there
                    for 24 hours or less. Let me tell you my experience so you
                    can decide to travel there or skip it.
                </p>
                <Button variant="contained" color="secondary">
                    <Link
                        style={{ textDecoration: "none", color: "white" }}
                        href="/blog"
                    >
                        Start Exploring
                    </Link>
                </Button>
            </div>
        </div>
    );
}
