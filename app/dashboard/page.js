import {
    fetchAllArticles,
    fetchAllReels,
} from "../utils/apiCallsServerExperimental";
import Link from "next/link";
import { transformTitle } from "../utils/transformTitle";

export default async function Dashboard() {
    const articles = await fetchAllArticles();
    const reels = await fetchAllReels();

    return (
        <>
            <h1>Legend:</h1>
            <div className="dashboard-article-create-top-section">
                <div className="dashboard-article-create-section">
                    <Link
                        className="nav-link"
                        href={`/dashboard/articles/create`}
                    >
                        New Article (+)
                    </Link>
                </div>
                <div className="dashboard-article-create-section">
                    <Link className="nav-link" href={`/dashboard/reels/create`}>
                        New Reel (+)
                    </Link>
                </div>
                <div className="dashboard-article-create-section-public">
                    <span className="nav-link">Public</span>
                </div>
                <div className="dashboard-article-create-section-private">
                    <span className="nav-link">Private</span>
                </div>
            </div>
            <div className="dashboard-main">
                <section>
                    <h1>Edit Articles:</h1>
                    {articles.map((item) => (
                        <span key={item.article_id}>
                            <Link
                                className={`nav-link nav-link-public-${item.article_public}`}
                                href={`/dashboard/articles/${
                                    item.article_id
                                }/${transformTitle(item.article_title)}`}
                            >
                                {item.article_id}: {item.article_title}
                            </Link>
                            <br />
                            <p style={{ color: "purple" }}>
                                Comments:
                                {item.comment.length === 0 && <> None</>}
                            </p>

                            {item.comment.length > 0 && (
                                <ol>
                                    {item.comment.map((comment, index) => (
                                        <li key={index}>
                                            {comment.comment_body}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </span>
                    ))}
                </section>
                <section>
                    <h1>Edit Reels:</h1>
                    {reels.map((item) => (
                        <span key={item.reel_id}>
                            <Link
                                className={`nav-link nav-link-public-${item.reel_public}`}
                                href={`/dashboard/reels/${item.reel_id}`}
                            >
                                {item.reel_id}: {item.reel_category}
                            </Link>
                            <br />
                            <br />
                        </span>
                    ))}
                </section>
            </div>
        </>
    );
}
