"use server";

import { IArticle, IEmailContact, IReel, ISubscriber } from "@/types/types";

// this requires authorization and use server to hide api key

const url = "https://www.hunterkf.com/api";

export const createArticle = async (data2: IArticle) => {
    try {
        const results = await fetch(`${url}/article`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: `${process.env.API_KEY}` },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updateArticleById = async (
    article_id: string,
    data2: IArticle
) => {
    try {
        const results = await fetch(`${url}/article?article_id=${article_id}`, {
            method: "PUT",
            body: JSON.stringify(data2),
            headers: { authorization: `${process.env.API_KEY}` },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const updateReelById = async (reel_id: string, data2: IReel) => {
    try {
        const results = await fetch(`${url}/reel?reel_id=${reel_id}`, {
            method: "PUT",
            body: JSON.stringify(data2),
            headers: { authorization: `${process.env.API_KEY}` },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createEmail = async (data2: IEmailContact) => {
    try {
        const results = await fetch(`${url}/contact`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: {
                authorization: `${process.env.API_KEY}`,
            },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createSubscriber = async (data2: ISubscriber) => {
    try {
        const results = await fetch(`${url}/subscriber`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: `${process.env.API_KEY}` },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const createReel = async (data2: IReel) => {
    try {
        const results = await fetch(`${url}/reel`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: { authorization: `${process.env.API_KEY}` },
        });
        const data = await results.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
