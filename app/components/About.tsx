import Image from "next/image";

export default function About() {
    return (
        <div>
            <h2>About the Author:</h2>
            <div className="section-profile-about">
                <Image
                    height={100}
                    width={100}
                    src="https://res.cloudinary.com/crimson-flamingo/image/upload/c_fill,g_auto,w_1000,h_1000/v1653157699/travelsite2022/may1013/20220511_110316.jpg"
                    alt="hunter"
                    className="rounded-full"
                    sizes="100vw, (min-width: 768px) 50vw"
                />
                <span>
                    <span style={{ fontSize: "1.25em", color: "blue" }}>
                        <i>Hunter Fan</i>
                    </span>{" "}
                    is an adrenaline junkie who likes to go skydiving, ziplining
                    and motorcycle racing. In his free time, he also likes to
                    meditate, go salsa dancing and travel to different cities.
                    His most recent international adventure was to Europe where
                    he visited 8 cities in 7 countries in 10 days.
                </span>
            </div>
        </div>
    );
}
