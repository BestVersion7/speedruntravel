import { useState, useEffect } from "react";

import ReelForm from "@/app/components/ReelForm";
import { IReel } from "@/types/types";

export default function DashboardReelPage({
    params,
}: {
    params: { reel_id: number };
}) {
    const [reel, setReel] = useState<IReel>({
        reel_id: 1,
        reel_public: false,
        reel_image:
            "https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1653157699/travelsite2022/may1013/20220511_110316.jpg",
        reel_category: "tes",
        reel_date: "test",
        reel_video: false,
        reel_video_thumbnail: "",
    });
    const getReelById = async (signal: AbortSignal) => {
        const results = await fetch(`/api/reel?reel_id=${params.reel_id}`, {
            signal,
        });
        const data = await results.json();
        setReel(data);
    };

    useEffect(() => {
        const controller = new AbortController();
        getReelById(controller.signal);
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <h2>
                Update Reel Here (updates will take 1 hour to show on home page)
            </h2>
            <div className="dashboard-article-container">
                <ReelForm
                    reel_id={reel.reel_id}
                    reel_public={reel.reel_public}
                    crud="update"
                    reel_image={reel.reel_image}
                    reel_category={reel.reel_category}
                    reel_date={reel.reel_date}
                    reel_video={reel.reel_video}
                    reel_video_thumbnail={reel.reel_video_thumbnail}
                />
            </div>
        </>
    );
}
