import { fetchAllArticles } from "@/app/utils/apiCalls";
import ArticleCardMapped from "@/app/components/ArticleCardMapped";
import Link from "next/link";

const ArticlePage = async () => {
    const articles = await fetchAllArticles()
    return (
        <>
            <h1>Legend:</h1>
            <div className="dashboard-article-create-top-section">
                <Link href={`/dashboard/articles/create`}>
                    <div className="dashboard-article-create-section">
                        <h2>Create (+)</h2>
                    </div>
                </Link>
                <div className="dashboard-article-create-section-public">
                    <h2>Public</h2>
                </div>
                <div className="dashboard-article-create-section-private">
                    <h2>Private</h2>
                </div>
            </div>
            <div>
                <>
                    <ArticleCardMapped
                        articles={articles}
                        url_base="dashboard/articles"
                    />
                </>
            </div>
        </>
    );
};

export default ArticlePage;
