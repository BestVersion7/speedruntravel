import { NextResponse } from "next/server";

export function POST() {
    const response = NextResponse.json("success");
    response.cookies.set({
        name: "survey1cookie",
        value: "true",
        secure: true,
        // 15 days
        maxAge: 60 * 60 * 24 * 15,
    });
    return response;
}
