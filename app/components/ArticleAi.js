"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { formatDate } from "../utils/formatDate";
import Link from "next/link";
import { transformTitle } from "../utils/transformTitle";

export default function ArticleAi(props) {
    return (
        <div className="article-ai-card">
            {props.articles.map((item) => (
                <div className="article-item" key={item.article_id}>
                    <Link
                        href={`/blog/${item.article_id}/${transformTitle(
                            item.article_title
                        )}`}
                    >
                        <Card sx={{ display: "flex" }}>
                            <CardMedia
                                component="img"
                                className="card-media"
                                image={item.article_image_small}
                                alt={item.article_title}
                            />
                            <CardContent>
                                {item.article_title} <br />
                                <i>{formatDate(item.article_date)}</i>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}
