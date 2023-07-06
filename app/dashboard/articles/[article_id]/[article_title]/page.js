import { fetchArticleById } from "@/app/utils/apiCallsServerExperimental";
import ArticleModal from "./ArticleModal";

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
            <ArticleModal
                article_public={article.article_public}
                article_id={article.article_id}
                article_image_small={article.article_image_small}
                article_title={article.article_title}
                article_date={article.article_date}
                article_post={article.article_post}
            />
        </>
    );
}
