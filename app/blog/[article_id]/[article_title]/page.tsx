import ArticleCardDetail from "@/app/components/ArticleCardDetail";
import {
    fetchPublicArticleById,
    fetchFivePublicArticles,
} from "@/app/utils/apiCalls";
import ArticleAi from "@/app/components/ArticleAi";
import NotFound from "@/app/not-found";
import CommentMapped from "./CommentMapped";
import { ArticleParams, IArticle } from "@/types/types";
import About from "@/app/components/About";

export const generateStaticParams = () => {
    return [
        {
            article_id: "15",
            article_title: "unbelievably-hot-weather-in-tampa-florida",
        },
    ];
};

export async function generateMetadata({ params }: ArticleParams) {
    const article = await fetchPublicArticleById(params.article_id);
    return {
        title: article?.article_title ?? "Not found",
        description: article?.article_title ?? "Not found",
        keywords: `Travelling to ${article?.article_title ?? "Not found"}`,
    };
}

const ArticleTitlePage = async ({ params }: ArticleParams) => {
    const article: IArticle = await fetchPublicArticleById(params.article_id);

    if (article == null) {
        return <NotFound />;
    }
    const fiveArticles: IArticle[] = await fetchFivePublicArticles();

    return (
        <>
            <div className="article-page-divider">
                <div>
                    <ArticleCardDetail {...article} />
                    <hr />
                    <About />
                    <br />
                    <hr />
                </div>
                <aside className="article-ai-body">
                    <h2>Most Recent:</h2>
                    <ArticleAi articles={fiveArticles} />
                    {/* <Adsense /> */}
                </aside>
            </div>

            <h2>Comments:</h2>
            <CommentMapped article_id={params.article_id} />
        </>
    );
};

export default ArticleTitlePage;
