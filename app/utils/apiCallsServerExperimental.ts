"use server";

// this requires authorization and use server to hide api key

const url = "https://www.hunterkf.com/api";

const options = {
    headers: {
        authorization: process.env.API_KEY,
    },
    cache: "no-cache",
};

export const fetchAllArticles = async () => {
    try {
        const results = await fetch(`${url}/article`, options);

        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchArticleById = async (article_id) => {
    try {
        const results = await fetch(
            `${url}/article?article_id=${article_id}`,
            options
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchAllReels = async () => {
    try {
        const results = await fetch(`${url}/reel`, options);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchReelById = async (reel_id) => {
    try {
        const results = await fetch(`${url}/reel?reel_id=${reel_id}`, options);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createArticle = async (data2) => {
    try {
        const results = await fetch(`${url}/article`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: process.env.API_KEY },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updateArticleById = async (article_id, data2) => {
    try {
        const results = await fetch(`${url}/article?article_id=${article_id}`, {
            method: "PUT",
            body: JSON.stringify(data2),
            headers: { authorization: process.env.API_KEY },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updateReelById = async (reel_id, data2) => {
    try {
        const results = await fetch(`${url}/reel?reel_id=${reel_id}`, {
            method: "PUT",
            body: JSON.stringify(data2),
            headers: { authorization: process.env.API_KEY },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createEmail = async (data2) => {
    try {
        const results = await fetch(`${url}/contact`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: {
                authorization: process.env.API_KEY,
            },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createSubscriber = async (data2) => {
    try {
        const results = await fetch(`${url}/subscriber`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: process.env.API_KEY },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createReel = async (data2) => {
    try {
        const results = await fetch(`${url}/reel`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: process.env.API_KEY },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
