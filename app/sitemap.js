import { fetchAllPublicArticles } from "./utils/apiCalls";
import { transformTitle } from "./utils/transformTitle";

let siteUrl;

process.env.NODE_ENV == "production"
    ? (siteUrl = "https://speedruntravel.com")
    : (siteUrl = "http://localhost:3000");

export default async function sitemap() {
    const data = await fetchAllPublicArticles();

    const articles = data.map((article) => ({
        url: `${siteUrl}/blog/${article.article_id}/${transformTitle(
            article.article_title
        )}`,
        lastModified: "2023-07-02T00:59:27.320Z",
    }));

    const routes = ["/", "/about", "/contact", "/support"].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: "2023-07-02T00:59:27.320Z",
    }));

    return [...articles, ...routes];
}
