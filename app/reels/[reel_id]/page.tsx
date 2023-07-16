import { fetchAllPublicReels, fetchOffsetReels } from "@/app/utils/apiCalls";
import ImageModal from "@/app/components/ImageModal";
import ReelCardMapped from "@/app/components/ReelCardMapped";
import CityFilter from "@/app/components/CityFilter";
import { IReel } from "@/types/types";

export const generateStaticParams = () => {
    return [{ reel_id: "92" }];
};

export const metadata = {
    title: "Reels",
};

export default async function ReelIdPage({
    params,
}: {
    params: { reel_id: number };
}) {
    const reels: IReel[] = await fetchAllPublicReels();

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
            <div>
                <h2>Cities:</h2>
                <CityFilter city="" />
            </div>
            <ReelCardMapped reels={reels} url_base="reels" />
        </div>
    );
}
