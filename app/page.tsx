import Link from "next/link";
import ReelCard from "./components/ReelCard";
import {
    fetchLimitPublicReels,
    fetchTwelvePublicArticles,
} from "./utils/apiCalls";
import ArticleCard from "./components/ArticleCard";
import SubscriberButton from "./components/SubscriberButton";
import SurveyCity from "./components/survey/SurveyCity";
import { IArticle, IReel } from "@/types/types";

export default async function Home() {
    const articles: IArticle[] = await fetchTwelvePublicArticles();
    const reels: IReel[] = await fetchLimitPublicReels();
    return (
        <div>
            <h2>
                Welcome to SpeedRunTravel blog where I write about my experience
                visiting a new city and staying there for 24 hours or less. Let
                me tell you my experience so you can decide to travel there or
                to skip it. <SubscriberButton />
            </h2>

            <div style={{ textAlign: "right" }}>
                <Link href="/blog" className="nav-link">
                    See all
                </Link>
            </div>
            <div className="article-body">
                {articles.map((item) => (
                    <ArticleCard
                        key={item.article_id}
                        url_base="blog"
                        {...item}
                    />
                ))}
            </div>
            <br />
            <SurveyCity />
            <div>
                <h2>Pictures and Reels</h2>

                <div style={{ textAlign: "right" }}>
                    <Link href="/reels" className="nav-link">
                        See all
                    </Link>
                </div>
                <div className="ig-wrap-home">
                    {reels.map((item, i) => (
                        <ReelCard
                            url_base="reels"
                            reel_responsive_key={i}
                            key={i}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
