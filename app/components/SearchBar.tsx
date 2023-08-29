"use client";

import { fetchPublicSearchTitle } from "../utils/apiCalls";
import { useState, useEffect } from "react";
import { IArticle } from "@/types/types";
import Highlighter from "react-highlight-words";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { transformTitle } from "../utils/transformTitle";
import Button from "@mui/material/Button";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [articles, setArticles] = useState<IArticle[]>([]);

    async function getArticles() {
        const data = await fetchPublicSearchTitle(searchQuery);
        setArticles(data);
    }

    useEffect(() => {
        getArticles();
    }, [searchQuery]);

    return (
        <div style={{ textAlign: "right" }}>
            <input
                value={searchQuery}
                placeholder="Type anything to start searching"
                style={{ width: "22em" }}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
            />
            <Button onClick={() => setSearchQuery("")}>Clear</Button>

            <List className="searchlist">
                {articles.map((item, index) => (
                    <Link
                        key={index}
                        href={`/blog/${item.article_id}/${transformTitle(
                            item.article_title
                        )}`}
                        className="nav-link"
                    >
                        <ListItem className="searchlist-item">
                            <ListItemText>
                                <Highlighter
                                    highlightClassName="YourHighlightClass"
                                    searchWords={[searchQuery]}
                                    autoEscape={true}
                                    textToHighlight={item.article_title}
                                />
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
}
