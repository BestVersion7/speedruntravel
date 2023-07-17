"use client";
import ArticleForm from "@/app/components/ArticleForm";
import ArticleCardDetail from "@/app/components/ArticleCardDetail";
import BasicModal from "@/app/components/BasicModal";
import { useState, useReducer } from "react";
import Button from "@mui/material/Button";
import { updateArticleById } from "@/app/utils/apiCallsServerExperimental";
import { articleReducer } from "@/app/utils/reducer";

const ArticleModal = (props) => {
    const [articlePublic, setArticlePublic] = useState(props.article_public);
    const [articleImageSmall, setArticleImageSmall] = useState(
        props.article_image_small
    );
    const [articleTitle, setArticleTitle] = useState(props.article_title);
    const [articleDate, setArticleDate] = useState(props.article_date);
    const [articlePost, setArticlePost] = useState(props.article_post);
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state, dispatch] = useReducer(articleReducer, {...props})

    let handleUpdateArticle;
    process.env.NODE_ENV === "development"
        ? (handleUpdateArticle = async () => {
              setLoading(true);
              await updateArticleById(state);
              setLoading(false);
          })
        : (handleUpdateArticle = () => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
          });

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
                crud="create"
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
                        onClick={handleUpdateArticle}
                        disabled={loading}
                    >
                        Update
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

export default ArticleModal;
