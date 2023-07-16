"use client";

import { fetchArticleById } from "@/app/utils/apiCallsServerExperimental";
import { IArticle } from "@/types/types";
import ArticleForm from "@/app/components/ArticleForm";
import { useState, useEffect } from "react";

export default function ArticleIdPage({
    params,
}: {
    params: { article_id: number };
}) {
    const [article, setArticle] = useState({});

    const fetchArticle = async () => {
        const data = await fetchArticleById(params.article_id);
        if (data == null) {
            return <div>Not found</div>;
        }
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
            <ArticleForm {...article} />
        </>
    );
}
