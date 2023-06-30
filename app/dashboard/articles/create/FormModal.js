"use client";
import ArticleForm from "@/app/components/ArticleForm";
import ArticleCardDetail from "@/app/components/ArticleCardDetail";
import BasicModal from "@/app/components/BasicModal";
import { useState } from "react";
import Button from "@mui/material/Button";

const FormModal = () => {
    const [articlePublic, setArticlePublic] = useState(false);
    const [articleImageSmall, setArticleImageSmall] = useState(
        "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg"
    );
    const [articleTitle, setArticleTitle] = useState("");
    const [articleDate, setArticleDate] = useState("2023-07-01T00:00:00.000Z");
    const [articlePost, setArticlePost] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCreateArticle = async () => {
        const data2 = {
            articlePublic,
            articleImageSmall,
            articleTitle,
            articleDate,
            articlePost,
        };
        console.log(data2);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <>
            <ArticleForm
                article_public={articlePublic}
                article_image_small={articleImageSmall}
                article_title={articleTitle}
                article_date={articleDate}
                article_post={articlePost}
                setArticlePublic={setArticlePublic}
                setArticleImageSmall={setArticleImageSmall}
                setArticleTitle={setArticleTitle}
                setArticleDate={setArticleDate}
                setArticlePost={setArticlePost}
                setOpenModal={setOpenModal}
            />
            <BasicModal
                size="large"
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleCreateArticle}
                        disabled={loading}
                    >
                        Create
                    </Button>{" "}
                    <Button
                        variant="contained"
                        onClick={() => setOpenModal(false)}
                    >
                        Cancel
                    </Button>
                    <ArticleCardDetail
                        article_title={articleTitle}
                        article_date={articleDate}
                        article_post={articlePost}
                    />
                </>
            </BasicModal>
        </>
    );
};

export default FormModal;
