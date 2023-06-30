import ReelForm from "@/app/components/ReelForm";

// default props
const reel = {
    reel_image:
        "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg",
    reel_date: "2023-07-01T00:00:00.000Z",
    reel_category: "Miami",
    reel_video: false,
    reel_public: false,
    reel_video_thumbnail: "",
};

const CreateReelPage = () => {
    return (
        <>
            <h2>Create Here</h2>
            <ReelForm
                reel_date={reel.reel_date}
                reel_category={reel.reel_category}
                reel_image={reel.reel_image}
                reel_public={reel.reel_public}
                reel_video={reel.reel_video}
                reel_video_thumbnail={reel.reel_video_thumbnail}
                crud="create"
            />
        </>
    );
};

export default CreateReelPage;
