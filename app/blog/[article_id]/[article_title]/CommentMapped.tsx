"use client";

import { fetchCommentsByArticleId } from "@/app/utils/apiCalls";
import { useEffect, useState } from "react";
import CommentForm from "@/app/components/CommentForm";
import Comment from "@/app/components/Comment";
import { IComment, CommentProp } from "@/types/types";

export default function CommentMapped(props: CommentProp) {
    const [comments, setComments] = useState<IComment[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    const getComments = async () => {
        const com: IComment[] = await fetchCommentsByArticleId(
            props.article_id
        );
        setComments(com);
    };

    useEffect(() => {
        getComments();
    }, [loading]);

    return (
        <div>
            <CommentForm
                setLoading={setLoading}
                article_id={props.article_id}
            />
            {comments.length > 0 ? (
                comments.map((item) => (
                    <Comment key={item.comment_id} {...item} />
                ))
            ) : (
                <div>Be the first to comment!</div>
            )}
        </div>
    );
}
