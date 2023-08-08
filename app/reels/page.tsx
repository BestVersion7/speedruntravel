import ReelCardMapped from "../components/ReelCardMapped";
import { fetchAllPublicReels } from "../utils/apiCalls";
import CityFilter from "../components/CityFilter";
import { IReel } from "@/types/types";

export const metadata = {
    title: "Reels",
    keywords: "reels, memories, travel, pictures, videos, france, germany",
    description: "Stunning pictures and reels from cities worldwide.",
};

export default async function ReelsPage() {
    const reels: IReel[] = await fetchAllPublicReels();
    return (
        <div>
            <div>
                <h2>Cities:</h2>
                <CityFilter city="" />
            </div>
            <ReelCardMapped reels={reels} url_base="reels" />;
        </div>
    );
}
