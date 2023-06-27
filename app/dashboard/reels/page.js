import ReelCardMapped from "@/app/components/ReelCardMapped";
import { fetchAllReels } from "@/app/utils/apiCalls";
import Link from "next/link";

const ReelPage = async () => {
    const reels = await fetchAllReels();
    return (
        <>
            <h1>Legend:</h1>
            <div className="dashboard-article-create-top-section">
                <Link passHref legacyBehavior href={`/dashboard/reels/create`}>
                    <div className="dashboard-article-create-section">
                        <h2>Create (+)</h2>
                    </div>
                </Link>
                <div className="dashboard-article-create-section-public">
                    <h2>Public</h2>
                </div>
                <div className="dashboard-article-create-section-private">
                    <h2>Private</h2>
                </div>
            </div>
            <div>
                <h2>Cities:</h2>
                {/* <CityFilter pathname="/master/reels" /> */}
            </div>
            <div>
                <ReelCardMapped url_base="dashboard/reels" reels={reels} />
            </div>
        </>
    );
};

export default ReelPage;
