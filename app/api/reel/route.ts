import { NextResponse, NextRequest } from "next/server";

const url = "https://www.hunterkf.com/api";

export async function GET(req: NextRequest) {
    const reel_id = req.nextUrl.searchParams.get("reel_id");
    let results;
    try {
        if (reel_id) {
            results = await fetch(`${url}/reel?reel_id=${reel_id}`, {
                headers: {
                    authorization: `${process.env.API_KEY}`,
                },
                cache: "no-cache",
            });
        } else {
            results = await fetch(`${url}/reel`, {
                headers: {
                    authorization: `${process.env.API_KEY}`,
                },
                cache: "no-cache",
            });
        }
        const data = await results.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log(err);
    }
}
