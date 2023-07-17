import ArticleForm from "@/app/components/ArticleForm";

const CreateArticlePage = () => {
    const initialState = {
        article_id: 1,
        article_date: "2023-07-02T00:59:27.320Z",
        article_title: "test1",
        article_image_small: "test",
        article_public: false,
        article_post: "test",
    };
    return (
        <>
            <h2>Create Here</h2>
            <ArticleForm crud="create" {...initialState} />
        </>
    );
};

export default CreateArticlePage;
