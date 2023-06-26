import ReelCardMapped from "@/app/components/ReelCardMapped";
import { fetchAllReels } from "@/app/utils/apiCalls";

const ReelPage = async () => {
    const reels = await fetchAllReels();
    return (
        <>
            <div>
                <h2>Cities:</h2>
                {/* <CityFilter pathname="/master/reels" /> */}
            </div>
            <div>
                <ReelCardMapped
                    url_base="/dashboard/reels"
                    reels={reels}
                    pathname={"/dashboard"}
                />
            </div>
        </>
    );
};

export default ReelPage;
