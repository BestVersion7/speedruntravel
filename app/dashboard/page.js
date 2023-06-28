import { fetchAllArticles, fetchAllReels } from "../utils/apiCalls";
import Link from "next/link";
import { transformTitle } from "../utils/transformTitle";

export default async function Dashboard() {
    const articles = await fetchAllArticles();
    const reels = await fetchAllReels();

    return (
        <div>
            <h3>Articles:</h3>
            {articles.map((item) => (
                <span key={item.article_id}>
                    <Link
                        href={`/dashboard/articles/${
                            item.article_id
                        }/${transformTitle(item.article_title)}`}
                    >
                        {item.article_id}: {item.article_title}
                    </Link>
                    <br />
                    <br />
                </span>
            ))}

            <h3>Reels:</h3>
            {reels.map((item) => (
                <span key={item.article_id}>
                    <Link href={`/dashboard/reels/${item.reel_id}`}>
                        {item.reel_id}: {item.reel_category} Public = {`${item.reel_public}`}
                    </Link>
                    <br />
                    <br />
                </span>
            ))}
        </div>
    );
}
