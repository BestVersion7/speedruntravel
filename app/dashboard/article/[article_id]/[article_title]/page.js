import { fetchArticleById } from "@/app/utils/apiCalls";

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
    return <>yo</>;
}
