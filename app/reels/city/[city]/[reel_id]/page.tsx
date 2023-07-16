import ReelCardMapped from "@/app/components/ReelCardMapped";
import {
    fetchAllPublicReelsByCity,
    fetchOffsetReelsByCity,
} from "@/app/utils/apiCalls";
import ImageModal from "@/app/components/ImageModal";
import CityFilter from "@/app/components/CityFilter";
import { IReel } from "@/types/types";

export async function generateMetadata({
    params,
}: {
    params: { city: string; reel_id: number };
}) {
    return {
        title: params.city.charAt(0).toUpperCase() + params.city.slice(1),
        description: params.city.charAt(0).toUpperCase() + params.city.slice(1),
        keywords: `Travelling to ${
            params.city.charAt(0).toUpperCase() + params.city.slice(1)
        }`,
    };
}

export const generateStaticParams = () => {
    return [{ city: "tampa", reel_id: "92" }];
};

export default async function CityPageFilterId({
    params,
}: {
    params: { city: string; reel_id: number };
}) {
    const reels: IReel[] = await fetchAllPublicReelsByCity(params.city);
    // append an index number to all the reels
    const mappedReels = reels.map((item, index) => {
        return [index, item.reel_id, item.reel_category];
    });

    // filter the result to current params and get the id
    const filteredReels = mappedReels.filter(
        (result) => result[1] == params.reel_id
    );
    let threeReels;

    if (filteredReels.length < 1) {
        threeReels = [];
        <div>No data</div>;
    } else {
        threeReels = await fetchOffsetReelsByCity(
            filteredReels[0][0],
            filteredReels[0][2]
        );
    }
    const startIndex = mappedReels[0][1];
    const endIndex = mappedReels[mappedReels.length - 1][1];

    return (
        <div>
            <ImageModal
                redirectUrl={`reels/city/${params.city}`}
                threeReels={threeReels}
                startIndex={startIndex}
                endIndex={endIndex}
                paramsId={params.reel_id}
            />
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
