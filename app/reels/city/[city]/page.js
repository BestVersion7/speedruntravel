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
            <CityFilter city={params.city} />
            <ReelCardMapped
                url_base={`reels/city/${params.city}`}
                reels={reels}
            />
        </div>
    );
}
