import ReelCardMapped from "../components/ReelCardMapped";
import { fetchAllPublicReels } from "../utils/apiCalls";
import CityFilter from "../components/CityFilter";

export default async function ReelsPage() {
    const reels = await fetchAllPublicReels();
    return (
        <div>
            <CityFilter city="" />
            <ReelCardMapped reels={reels} url_base="reels" />;
        </div>
    );
}
