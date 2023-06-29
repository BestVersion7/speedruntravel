const url = "https://www.hunterkf.com/api";
const publicUrl = "https://www.hunterkf.com/api/public";


const publicOptions = {
    // cache: 'no-store',
    next: {
        revalidate: 3600,
    },
};

const publicOptionsNoCache = {
    cache: "no-cache",
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

export const fetchFivePublicArticles = async () => {
    try {
        const results = await fetch(
            `${publicUrl}/article/limit?count=5`,
            publicOptions
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchTwelvePublicArticles = async () => {
    try {
        const results = await fetch(
            `${publicUrl}/article/limit?count=12`,
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

export const fetchOffsetReels = async (index) => {
    try {
        const results = await fetch(
            `${publicUrl}/reel/offset?index=${index}`,
            publicOptions
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchOffsetReelsByCity = async (index, city) => {
    try {
        const results = await fetch(
            `${publicUrl}/reel/offset?index=${index}&city=${city}`,
            publicOptions
        );
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

// stripe
export const createPayment = async (data2) => {
    try {
        const results = await fetch(`${url}/checkout_sessions`, {
            method: "POST",
            body: JSON.stringify(data2),
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
export const fetchPaymentDetails = async (session_id) => {
    try {
        const results = await fetch(
            `${url}/checkout_sessions?session_id=${session_id}`,
            publicOptionsNoCache
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

// comments/article
export const fetchCommentsByArticleId = async (article_id) => {
    try {
        const results = await fetch(
            `${publicUrl}/comment?article_id=${article_id}`,
            publicOptionsNoCache
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createComment = async (data2) => {
    try {
        const results = await fetch(`${publicUrl}/comment`, {
            method: "POST",
            body: JSON.stringify(data2),
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
