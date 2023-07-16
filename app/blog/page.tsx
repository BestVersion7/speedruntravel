import ArticleCardMapped from "../components/ArticleCardMapped";
import { fetchAllPublicArticles } from "../utils/apiCalls";

export const metadata = {
    title: "Blog",
};

export default async function BlogPage() {
    const articles = await fetchAllPublicArticles();

    return (
        <div>
            <ArticleCardMapped articles={articles} url_base="blog" />
        </div>
    );
}
