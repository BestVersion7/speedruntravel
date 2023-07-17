"use client";

import { IArticle } from "@/types/types";
import ArticleForm from "@/app/components/ArticleForm";
import { useState, useEffect } from "react";

export default function ArticleIdPage({
    params,
}: {
    params: { article_id: number };
}) {
    const [article, setArticle] = useState<IArticle | any>({});

    const fetchArticle = async () => {
        const results = await fetch(
            `/api/article?article_id=${params.article_id}`
        );
        const data = await results.json();
        setArticle(data);
    };

    useEffect(() => {
        fetchArticle();
    }, []);

    return (
        <>
            <h2>
                Update Article Here (updates will take 1 hour to show on home
                page)
            </h2>
            <ArticleForm crud="update" {...article} />
        </>
    );
}
