"use client";

import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Navigation() {
    const [top, setTop] = useState<boolean>(false);

    return (
        <header>
            <nav className="mobile-nav-false">
                <Link className="nav-link" href="/">
                    Home
                </Link>

                <Link className="nav-link" href="/blog">
                    Blog
                </Link>
                <Link className="nav-link" href="/reels">
                    Reels
                </Link>

                <Link className="nav-link" href="/contact">
                    Contact
                </Link>
                <Link className="nav-link" href="/support">
                    Support
                </Link>
            </nav>
            <nav className="mobile-nav-true">
                <MenuOpenIcon
                    onClick={() => setTop((v) => !v)}
                    style={{ fontSize: "4em", color: "white" }}
                />

                <Drawer
                    anchor="right"
                    open={top}
                    onClick={() => setTop((v) => !v)}
                    className="mobile-drawer"
                >
                    <Box
                        role="presentation"
                        style={{
                            width: "19em",
                        }}
                    >
                        <div
                            onClick={() => setTop((v) => !v)}
                            className="mobile-drawer-header"
                        >
                            <MenuOpenIcon
                                style={{ fontSize: "4em", color: "white" }}
                            />
                        </div>
                        <List style={{ marginTop: "-.5em" }}>
                            <Link className="nav-link" href="/">
                                <ListItem onClick={() => setTop((v) => !v)}>
                                    Home
                                </ListItem>
                            </Link>
                            <Link className="nav-link" href="/blog">
                                <ListItem onClick={() => setTop((v) => !v)}>
                                    Blog
                                </ListItem>
                            </Link>
                            <Link className="nav-link" href="/reels">
                                <ListItem onClick={() => setTop((v) => !v)}>
                                    Reels
                                </ListItem>
                            </Link>

                            <Link className="nav-link" href="/contact">
                                <ListItem onClick={() => setTop((v) => !v)}>
                                    Contact
                                </ListItem>
                            </Link>
                            <Link className="nav-link" href="/support">
                                <ListItem onClick={() => setTop((v) => !v)}>
                                    Support
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
            </nav>
        </header>
    );
}
