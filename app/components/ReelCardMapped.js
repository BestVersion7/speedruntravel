import ReelCard from "./ReelCard";

const ReelCardMapped = (props) => {
    const filter2022 = props.reels.filter(
        (item) => new Date(item.reel_date).getFullYear() === 2022
    );
    const filter2023 = props.reels.filter(
        (item) => new Date(item.reel_date).getFullYear() === 2023
    );

    const getReelby2022 = (month) =>
        filter2022.reduce((acc, item) => {
            if (new Date(item.reel_date).getMonth() === month) {
                acc.push(
                    <div key={item.reel_id}>
                        <ReelCard
                            key={item.reel_id}
                            url_base={props.url_base}
                            reel_id={item.reel_id}
                            reel_date={item.reel_date}
                            reel_category={item.reel_category}
                            reel_image={item.reel_image}
                            reel_public={item.reel_public}
                            reel_video={item.reel_video}
                            reel_video_thumbnail={item.reel_video_thumbnail}
                            pathname={props.pathname}
                        />
                    </div>
                );
            }
            return acc;
        }, []);
    const getReelby2023 = (month) =>
        filter2023.reduce((acc, item) => {
            if (new Date(item.reel_date).getMonth() === month) {
                acc.push(
                    <div key={item.reel_id}>
                        <ReelCard
                            key={item.reel_id}
                            url_base={props.url_base}
                            reel_id={item.reel_id}
                            reel_date={item.reel_date}
                            reel_category={item.reel_category}
                            reel_image={item.reel_image}
                            reel_public={item.reel_public}
                            reel_video={item.reel_video}
                            reel_video_thumbnail={item.reel_video_thumbnail}
                            pathname={props.pathname}
                        />
                    </div>
                );
            }
            return acc;
        }, []);

    return (
        <>
            <div>
                <h2>2023</h2>
                {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ]
                    .map((item, i) => (
                        <div key={i}>
                            {getReelby2023(i).length > 0 && <h3>{item}</h3>}
                            <div className="reel-body">{getReelby2023(i)}</div>
                        </div>
                    ))
                    .sort((a, b) => b.key - a.key)}
            </div>
            <div>
                <h2>2022</h2>
                {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ]
                    .map((item, i) => (
                        <div key={i}>
                            {getReelby2022(i).length > 0 && <h3>{item}</h3>}
                            <div className="reel-body">{getReelby2022(i)}</div>
                        </div>
                    ))
                    .sort((a, b) => b.key - a.key)}
            </div>
        </>
    );
};

export default ReelCardMapped;