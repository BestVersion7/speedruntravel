import { fetchAllPublicReels, fetchOffsetReels } from "@/app/utils/apiCalls";
import ImageModal from "@/app/components/ImageModal";
import ReelCardMapped from "@/app/components/ReelCardMapped";

export const generateStaticParams = () => {
    return [{ reel_id: "92" }];
};

export default async function ({ params }) {
    const reels = await fetchAllPublicReels();

    // append index to add returns
    const mappedReels = reels.map((item, index) => {
        return [index, item.reel_id];
    });

    // filter the result to current params and get current id
    const filteredReels = mappedReels.filter(
        (result) => result[1] == params.reel_id
    );
    let threeReels;
    if (filteredReels.length < 1) {
        return <div>No Data</div>;
    } else {
        threeReels = await fetchOffsetReels(filteredReels[0][0]);
    }
    const startIndex = mappedReels[0][1];
    const endIndex = mappedReels[mappedReels.length - 1][1];

    return (
        <div>
            <ImageModal
                redirectUrl="reels"
                threeReels={threeReels}
                startIndex={startIndex}
                endIndex={endIndex}
                paramsId={params.reel_id}
            />
            <ReelCardMapped reels={reels} url_base="reels" />
        </div>
    );
}
