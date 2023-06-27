"use client";

import Link from "next/link";
import { transformTitle } from "../utils/transformTitle";

export default function ArticleCard(props) {
    const articleName = transformTitle(props.article_title);
    return (
        <Link
            passHref
            href={`/${props.url_base}/${props.article_id}/${articleName}`}
            legacyBehavior
        >
            <div
                className={`article-card-blog-${props.article_public}`}
                style={{
                    backgroundImage: `url(${props.article_image_small})`,
                }}
            >
                <p className="article-card-blog-body">
                    {props.article_public ? (
                        <>{props.article_title}</>
                    ) : (
                        <>
                            <span style={{ color: "red" }}>
                                {props.article_title}
                            </span>
                        </>
                    )}
                </p>
            </div>
        </Link>
    );
}
