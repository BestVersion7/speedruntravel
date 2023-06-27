import ArticleForm from "../../../components/ArticleForm";

const datenow = new Date();
const date2 = datenow.toISOString();

const article = {
    articleImageSmall:
        "https://res.cloudinary.com/crimson-flamingo/image/upload/v1561049193/030519%20drinks/drink-1561049192317.jpg",
    articlePublic: false,
    articleTitle: "",
    articleDate: date2,
    articlePost: "",
};

const CreateArticlePage = () => {
    return (
        <>
            <h2>Create Here</h2>
            <div className="master-blog-container">
                <div>
                    <ArticleForm
                        article_public={article.articlePublic}
                        article_title={article.articleTitle}
                        article_date={article.articleDate}
                        article_post={article.articlePost}
                        article_image_small={article.articleImageSmall}
                        crud="create"
                    />
                </div>
            </div>
        </>
    );
};

export default CreateArticlePage;
