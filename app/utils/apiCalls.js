const url = "https://www.hunterkf.com/api";
const publicUrl = "https://www.hunterkf.com/api/public";

const options = {
    headers: {
        authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
    next: {
        revalidate: 3600,
    },
};

const publicOptions = {
    next: {
        revalidate: 3600,
    },
};

// public does not require authorization

export const fetchAllPublicArticles = async () => {
    try {
        const results = await fetch(`${publicUrl}/article`, publicOptions);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
export const fetchLimitPublicArticles = async () => {
    try {
        const results = await fetch(
            `${publicUrl}/article/limit`,
            publicOptions
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchPublicArticleById = async (article_id) => {
    try {
        const results = await fetch(
            `${publicUrl}/article?article_id=${article_id}`,
            publicOptions
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchAllPublicReels = async () => {
    try {
        const results = await fetch(`${publicUrl}/reel`, publicOptions);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchLimitPublicReels = async () => {
    try {
        const results = await fetch(`${publicUrl}/reel/limit`, publicOptions);
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchAllPublicReelsByCity = async (city) => {
    try {
        const results = await fetch(
            `${publicUrl}/reel?city=${city}`,
            publicOptions
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

// this requires authorization

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

export const fetchReelsByCity = async (city) => {
    try {
        const results = await fetch(`${url}/reel?city=${city}`, options);
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

export const createReel = async (data2) => {
    try {
        const results = await fetch(`${url}/reel`, {
            method: "POST",
            body: JSON.stringify(data2),
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updateReelById = async (reel_id) => {
    try {
        const results = await fetch(`${url}/reel?reel_id=${reel_id}`, {
            method: "PUT",
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
