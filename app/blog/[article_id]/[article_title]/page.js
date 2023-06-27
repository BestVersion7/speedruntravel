import ArticleCardDetail from "@/app/components/ArticleCardDetail";
import {
    fetchPublicArticleById,
    fetchSixPublicArticles,
} from "@/app/utils/apiCalls";
import Image from "next/image";
import ArticleAi from "@/app/components/ArticleAi";

export const generateStaticParams = () => {
    return [
        {
            article_id: "15",
            article_title: "unbelievably-hot-weather-in-tampa-florida",
        },
    ];
};

const ArticleTitlePage = async ({ params }) => {
    const article = await fetchPublicArticleById(params.article_id);
    const sixArticles = await fetchSixPublicArticles();
    const filter = sixArticles.filter(
        (item) => item.article_id !== parseInt(params.article_id)
    );

    return (
        <>
            <div className="article-page-divider">
                <div>
                    <ArticleCardDetail
                        article_title={article.article_title}
                        article_post={article.article_post}
                        article_date={article.article_date}
                    />
                    <hr />
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
                            is an adrenaline junkie who likes to go skydiving,
                            ziplining and motorcycle racing. In his free time,
                            he also likes to meditate, go salsa dancing and
                            travel to different cities. His most recent
                            international adventure was to Europe where he
                            visited 8 cities in 7 countries in 10 days.
                        </span>
                    </div>
                    <br />
                    <hr />
                </div>
                <aside className="article-ai-body">
                    <h2>More Articles:</h2>
                    <ArticleAi
                        article_id={params.article_id}
                        articles={filter}
                    />
                    {/* <Adsense /> */}
                </aside>
            </div>
        </>
    );
};

export default ArticleTitlePage;
