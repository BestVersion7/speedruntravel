import { IArticle } from "@/types/types";
import { fetchAllPublicArticles } from "./utils/apiCalls";
import { transformTitle } from "./utils/transformTitle";

let siteUrl: string;

process.env.NODE_ENV == "production"
    ? (siteUrl = "https://speedruntravel.com")
    : (siteUrl = "http://localhost:3000");

export default async function sitemap() {
    const data: IArticle[] = await fetchAllPublicArticles();

    const articles = data.map((article) => ({
        url: `${siteUrl}/blog/${article.article_id}/${transformTitle(
            article.article_title
        )}`,
        lastModified: "2023-08-08T00:59:27.320Z",
    }));

    const routes = [
        "/",
        "/blog",
        "/reels",
        "/contact",
        "/support",
        "/privacy-policy",
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: "2023-08-08T00:59:27.320Z",
    }));

    return [...articles, ...routes];
}
