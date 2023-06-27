import ReelCardMapped from "@/app/components/ReelCardMapped";
import {
    fetchAllPublicReelsByCity,
    fetchOffsetReelsByCity,
} from "@/app/utils/apiCalls";
import ImageModal from "@/app/components/ImageModal";

export const generateStaticParams = () => {
    return [{ city: "tampa", reel_id: "92" }];
};

export default async function CityPageFilterId({ params }) {
    const reels = await fetchAllPublicReelsByCity(params.city);
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
            <ReelCardMapped
                url_base={`reels/city/${params.city}`}
                reels={reels}
            />
        </div>
    );
}
