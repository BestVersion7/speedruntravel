"use client"

import { fetchArticleById } from "@/app/utils/apiCalls";
// import ArticleForm from "../../../components/ArticleForm";
import { useState } from "react";
// import ArticleCardDetail from "../../../components/ArticleCardDetail";
// import TogglePreview from "../../../components/TogglePreview";

const CreateArticlePage = () => {
    // const [articleDate, setArticleDate] = useState(new Date().toISOString());
    // const [articleTitle, setArticleTitle] = useState("");
    // const [articlePost, setArticlePost] = useState("");
    // const [articleImageSmall, setArticleImageSmall] = useState(
    //     "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg"
    // );
    // const [articleImage, setArticleImage] = useState(
    //     "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg"
    // );
    // const [articlePublic, setArticlePublic] = useState(false);

    // const [toggle, setToggle] = useState(true);

    // const data = fetchArticleById()
    // console.log(params)

    return (
        <>
            <h2>Create Here</h2>
            {/* <TogglePreview toggle={toggle} setToggle={setToggle} />
            <div className="master-blog-container">
                <div>
                    <ArticleForm
                        article_image={articleImage}
                        article_public={articlePublic}
                        article_title={articleTitle}
                        article_date={articleDate}
                        article_post={articlePost}
                        article_image_small={articleImageSmall}
                        setArticleDate={setArticleDate}
                        setArticleTitle={setArticleTitle}
                        setArticlePost={setArticlePost}
                        setArticleImageSmall={setArticleImageSmall}
                        setArticlePublic={setArticlePublic}
                        setArticleImage={setArticleImage}
                        crud="create"
                    />
                </div>

                {toggle && (
                    <div>
                        <ArticleCardDetail
                            article_title={articleTitle}
                            article_date={articleDate}
                            article_post={articlePost}
                        />
                    </div>
                )}
            </div> */}
        </>
    );
};

export default CreateArticlePage;