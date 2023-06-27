import ReelForm from "@/app/components/ReelForm";

const datenow = new Date();
const date2 = datenow.toISOString();

// default props
const reel = {
    reel_public: false,
    reel_image:
        "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg",
    reel_category: "",
    reel_date: date2,
    reel_video: false,
    reel_video_thumbnail: "",
};

const CreateReelPage = () => {
    return (
        <>
            <h2>Create Here</h2>
            <div className="dashboard-article-container">
                <ReelForm
                    reel_public={reel.reel_public}
                    crud="create"
                    reel_image={reel.reel_image}
                    reel_category={reel.reel_category}
                    reel_date={reel.reel_date}
                    reel_video={reel.reel_video}
                    reel_video_thumbnail={reel.reel_video_thumbnail}
                />
            </div>
        </>
    );
};

export default CreateReelPage;
