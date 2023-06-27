import { fetchArticleById } from "@/app/utils/apiCalls";
import ArticleCardDetail from "@/app/components/ArticleCardDetail";
import TogglePreview from "@/app/components/TogglePreview";
import ArticleForm from "@/app/components/ArticleForm";

export async function generateStaticParams() {
    return [
        {
            article_id: "15",
            article_title: "unbelievably-hot-weather-in-tampa-florida",
        },
    ];
}

export default async function ArticleIdPage({ params }) {
    const article = await fetchArticleById(params.article_id);

    if (article == null) {
        return <div>Not found</div>;
    }
    return (
        <>
            <h2>
                Update Article Here (updates will take 1 hour to show on home
                page)
            </h2>
            <TogglePreview />
            <div className="dashboard-article-container">
                <div>
                    <ArticleForm
                        crud="update"
                        article_date={article.article_date}
                        article_title={article.article_title}
                        article_post={article.article_post}
                        article_image_small={article.article_image_small}
                        article_public={article.article_public}
                    />
                </div>
                <ArticleCardDetail
                    article_title={article.article_title}
                    article_post={article.article_post}
                    article_date={article.article_date}
                />
            </div>
        </>
    );
}
