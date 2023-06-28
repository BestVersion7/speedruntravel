import ReelCardMapped from "@/app/components/ReelCardMapped";
import { fetchAllPublicReelsByCity } from "@/app/utils/apiCalls";
import CityFilter from "@/app/components/CityFilter";

export const generateStaticParams = () => {
    return [{ city: "tampa" }];
};

export default async function CityPageFilter({ params }) {
    const reels = await fetchAllPublicReelsByCity(params.city);

    return (
        <div>
            <div>
                <h2>Cities:</h2>
                <CityFilter city={params.city} />
            </div>
            <ReelCardMapped
                url_base={`reels/city/${params.city}`}
                reels={reels}
            />
        </div>
    );
}
