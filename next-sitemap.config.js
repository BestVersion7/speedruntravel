let siteUrl;

process.env.NODE_ENV == "production"
    ? (siteUrl = "https://speedruntravel.com")
    : (siteUrl = "http://localhost:3000");

module.exports = {
    siteUrl,
    changefreq: "weekly",
    priority: 0.8,
    generateRobotsTxt: true,
    exclude: ["/dashboard", "/support/success"],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/dashboard",
            },
        ],
        additionalSitemaps: ["https://speedruntravel.com/server-sitemap.xml"],
    },
};
