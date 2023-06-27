import ReelCardMapped from "../components/ReelCardMapped";
import { fetchAllPublicReels } from "../utils/apiCalls";

export default async function ReelsPage() {
    const reels = await fetchAllPublicReels();
    return (
        <div>
            <ReelCardMapped reels={reels} url_base="reels" />;
        </div>
    );
}
