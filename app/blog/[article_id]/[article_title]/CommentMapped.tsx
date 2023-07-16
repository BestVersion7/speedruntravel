"use client";

import { fetchCommentsByArticleId } from "@/app/utils/apiCalls";
import { useEffect, useState } from "react";
import CommentForm from "@/app/components/CommentForm";
import Comment from "@/app/components/Comment";

export default function CommentMapped(props) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        const com = await fetchCommentsByArticleId(props.article_id);
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
                    <Comment
                        key={item.comment_id}
                        comment_user_name={item.comment_user_name}
                        comment_user_image={item.comment_user_image}
                        comment_date={item.comment_date}
                        comment_body={item.comment_body}
                    />
                ))
            ) : (
                <div>Be the first to comment!</div>
            )}
        </div>
    );
}
