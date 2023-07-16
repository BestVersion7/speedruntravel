import { NextResponse, NextRequest } from "next/server";

const url = "https://www.hunterkf.com/api";
const options = {
    headers: {
        authorization: process.env.API_KEY,
    },
    cache: "no-cache",
};

export async function GET(req: NextRequest) {
    const article_id = req.nextUrl.searchParams.get("article_id");
    let results;
    try {
        if (article_id) {
            results = await fetch(
                `${url}/article?article_id=${article_id}`,
                options
            );
        } else {
            results = await fetch(`${url}/article`, options);
        }
        const data = await results.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log(err);
    }
}
