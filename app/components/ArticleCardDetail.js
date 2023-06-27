"use client";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
// import SubscriberButton from "../components/SubscriberButton";
import Button from "@mui/material/Button";
import { formatDate2 } from "../utils/formatDate";

const ArticleCardDetail = (props) => {
    return (
        <article>
            <h1 style={{ fontSize: "2em" }}>{props.article_title}</h1>
            <p>
                {formatDate2(props.article_date)} <i>Written by Hunter Fan</i>
            </p>
            <ReactMarkdown>{props.article_post}</ReactMarkdown>
            <p>
                <b>
                    Thank you for reading this article. Let me know your
                    thoughts! Get notified when a new article comes out!{" "}
                    {/* <SubscriberButton />{" "} */}
                    <Link href="/support" passHref legacyBehavior>
                        <Button variant="contained">Support My Blog</Button>
                    </Link>
                </b>
            </p>
        </article>
    );
};

export default ArticleCardDetail;
