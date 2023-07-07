import { fetchReelById } from "@/app/utils/apiCallsServerExperimental";
import ReelForm from "@/app/components/ReelForm";

export default async function DashboardReelPage({ params }) {
    const reel = await fetchReelById(params.reel_id);

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
