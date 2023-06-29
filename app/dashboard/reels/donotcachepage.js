import ReelCardMapped from "@/app/components/ReelCardMapped";
import { fetchAllReels } from "@/app/utils/apiCalls";
import Link from "next/link";

const ReelPage = async () => {
    const reels = await fetchAllReels();
    return (
        <>
            <h1>Legend:</h1>
            <div className="dashboard-article-create-top-section">
                <div className="dashboard-article-create-section">
                    <Link className="nav-link" href={`/dashboard/reels/create`}>
                        Create (+)
                    </Link>
                </div>
                <div className="dashboard-article-create-section-public">
                    <span className="nav-link">Public</span>
                </div>
                <div className="dashboard-article-create-section-private">
                    <span className="nav-link">Private</span>
                </div>
            </div>
            <div>
                <h2>Cities:</h2>
            </div>
            <div>
                <ReelCardMapped url_base="dashboard/reels" reels={reels} />
            </div>
        </>
    );
};

export default ReelPage;
