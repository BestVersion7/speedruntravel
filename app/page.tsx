import HomeBGVideo from "./components/HomeBGVideo";
import ReelCard from "./components/ReelCard";
import {
    fetchLimitPublicReels,
    fetchTwelvePublicArticles,
} from "./utils/apiCalls";
import ArticleCard from "./components/ArticleCard";
import SubscriberButton from "./components/SubscriberButton";
import SurveyCity from "./components/survey/SurveyCity";
import { IArticle, IReel } from "@/types/types";
import About from "./components/About";
import SearchBar from "./components/SearchBar";

export default async function Home() {
    const articles: IArticle[] = await fetchTwelvePublicArticles();
    const reels: IReel[] = await fetchLimitPublicReels();
    return (
        <div>
            <HomeBGVideo />
            <br />
            <SearchBar />
            <h2>Most Recent Articles: </h2>
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
            <div className="grid-survey-about">
                <SurveyCity />
                <About />
            </div>
            <div>
                <h2>Most Recent Pictures:</h2>

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
            <div style={{ textAlign: "center" }}>
                <h2>Newsletter</h2>
                <i>
                    <p>Subscribe to my newsletter for the latest blog posts.</p>
                    <p>{`Let's`} stay updated!</p>
                    <SubscriberButton />
                </i>
            </div>
            <br />
            <br />
        </div>
    );
}
