"use client";

import { useState, useEffect } from "react";

import ReelForm from "@/app/components/ReelForm";
import { IReel } from "@/types/types";

export default function DashboardReelPage({
    params,
}: {
    params: { reel_id: number };
}) {
    const [reel, setReel] = useState<IReel | any>({});
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
                <ReelForm crud="update" {...reel} />
            </div>
        </>
    );
}
