import { getServerSideSitemap } from "next-sitemap";
import { fetchAllPublicArticles } from "../utils/apiCalls";
import { transformTitle } from "../utils/transformTitle";

export default async function ServerSitemap(ctx) {
    let siteUrl;

    process.env.NODE_ENV == "production"
        ? (siteUrl = "https://speedruntravel.com")
        : (siteUrl = "http://localhost:3000");

    const data = await fetchAllPublicArticles();
    const fields = data.map((item) => ({
        loc: `${siteUrl}/blog/${item.article_id}/${transformTitle(
            item.article_title
        )}`,
    }));
    return getServerSideSitemap(ctx, fields);
}
