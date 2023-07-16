import Link from "next/link";
import Image from "next/image";
import { IReelCard } from "@/types/types";

const ReelCard = (props: IReelCard) => {
    return (
        <Link
            id={`ig-reel-image-${props.reel_responsive_key}`}
            href={`/${props.url_base}/${props.reel_id}`}
        >
            <>
                {props.reel_video ? (
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
                ) : (
                    <Image
                        id="home-ig-reel-image"
                        className={`ig-reel-image-${props.reel_public}`}
                        width={320}
                        height={320}
                        style={{ objectFit: "cover" }}
                        sizes="100vw, (min-width: 768px) 50vw"
                        src={props.reel_image}
                        alt={props.reel_category}
                    />
                )}
            </>
        </Link>
    );
};

export default ReelCard;
