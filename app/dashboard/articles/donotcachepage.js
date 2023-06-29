import { fetchAllArticles } from "@/app/utils/apiCalls";
import ArticleCardMapped from "@/app/components/ArticleCardMapped";
import Link from "next/link";

const ArticlePage = async () => {
    const articles = await fetchAllArticles();
    return (
        <>
            <h1>Legend:</h1>
            <div className="dashboard-article-create-top-section">
                <div className="dashboard-article-create-section">
                    <Link
                        className="nav-link"
                        href={`/dashboard/articles/create`}
                    >
                        Create (+)
                    </Link>
                </div>
                <div className="dashboard-article-create-section">
                    <Link
                        className="nav-link"
                        href={`/dashboard/reels/create`}
                    >
                        Create (+)
                    </Link>
                </div>
                <div className="dashboard-article-create-section-public">
                    <span className="nav-link">Public</span>
                </div>
                <div className="dashboard-article-create-section-private">
                    <span className="nav-link">Private</span>
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
