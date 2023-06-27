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
    const [top, setTop] = useState(false);

    const toggleDrawer = () => {
        setTop(!top);
    };

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
                    onClick={toggleDrawer}
                    style={{ fontSize: "4em", color: "white" }}
                />

                <Drawer
                    anchor="right"
                    open={top}
                    onClose={(prev) => toggleDrawer(!prev)}
                    className="mobile-drawer"
                >
                    <Box
                        role="presentation"
                        style={{
                            width: "19em",
                        }}
                    >
                        <div
                            onClick={() => toggleDrawer(false)}
                            className="mobile-drawer-header"
                        >
                            <MenuOpenIcon
                                style={{ fontSize: "4em", color: "white" }}
                            />
                        </div>
                        <List style={{ marginTop: "-.5em" }}>
                            <Link className="nav-link" href="/">
                                <ListItem onClick={toggleDrawer}>Home</ListItem>
                            </Link>
                            <Link className="nav-link" href="/blog">
                                <ListItem onClick={toggleDrawer}>Blog</ListItem>
                            </Link>
                            <Link className="nav-link" href="/reels">
                                <ListItem onClick={toggleDrawer}>
                                    Reels
                                </ListItem>
                            </Link>

                            <Link className="nav-link" href="/contact">
                                <ListItem onClick={toggleDrawer}>
                                    Contact
                                </ListItem>
                            </Link>
                            <Link className="nav-link" href="/support">
                                <ListItem onClick={toggleDrawer}>
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
