import ReelCardMapped from "@/app/components/ReelCardMapped";
import { fetchAllPublicReelsByCity } from "@/app/utils/apiCalls";
import CityFilter from "@/app/components/CityFilter";

export const generateStaticParams = () => {
    return [{ city: "tampa" }];
};

export async function generateMetadata({
    params,
}: {
    params: { city: string; reel_id: string };
}) {
    return {
        title: params.city.charAt(0).toUpperCase() + params.city.slice(1),
        description: params.city.charAt(0).toUpperCase() + params.city.slice(1),
        keywords: `Travelling to ${
            params.city.charAt(0).toUpperCase() + params.city.slice(1)
        }`,
    };
}

export default async function CityPageFilter({
    params,
}: {
    params: { city: string };
}) {
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
