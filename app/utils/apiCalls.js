const url = "https://www.hunterkf.com";
const options = {
    headers: {
        authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
    next: {
        revalidate: 3600
    }
};

export const fetchAllArticles = async () => {
    try {
        const results = await fetch(`${url}/api/article`, options);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchArticleById = async (article_id) => {
    try {
        const results = await fetch(
            `${url}/api/article?article_id=${article_id}`,
            options
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
