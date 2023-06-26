import ArticleCard from "./ArticleCard";

export default function ArticleCardMapped(props) {
    const filter2022 = props.articles.filter(
        (item) => new Date(item.article_date).getFullYear() === 2022
    );
    const filter2023 = props.articles.filter(
        (item) => new Date(item.article_date).getFullYear() === 2023
    );

    const getArticle2023 = (month) =>
        filter2023.reduce((acc, item) => {
            if (new Date(item.article_date).getMonth() === month) {
                acc.push(
                    <div key={item.article_id}>
                        <ArticleCard
                            key={item.article_id}
                            url_base={props.url_base}
                            article_id={item.article_id}
                            article_date={item.article_date}
                            article_title={item.article_title}
                            article_image_small={item.article_image_small}
                            article_public={item.article_public}
                        />
                    </div>
                );
            }
            return acc;
        }, []);
    const getArticle2022 = (month) =>
        filter2022.reduce((acc, item) => {
            if (new Date(item.article_date).getMonth() === month) {
                acc.push(
                    <div key={item.article_id}>
                        <ArticleCard
                            key={item.article_id}
                            url_base={props.url_base}
                            article_id={item.article_id}
                            article_date={item.article_date}
                            article_title={item.article_title}
                            article_image_small={item.article_image_small}
                            article_public={item.article_public}
                        />
                    </div>
                );
            }
            return acc;
        }, []);

    return (
        <div>
            <h2>Blog Posts:</h2>
            <>
                <h2>2023</h2>
                {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ]
                    .map((item, i) => (
                        <div key={i}>
                            {getArticle2023(i).length > 0 && <h3>{item}</h3>}
                            <div className="article-body">
                                {getArticle2023(i)}
                            </div>
                        </div>
                    ))
                    .sort((a, b) => b.key - a.key)}
            </>
            <>
                <h2>2022</h2>
                {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ]
                    .map((item, i) => (
                        <div key={i}>
                            {getArticle2022(i).length > 0 && <h3>{item}</h3>}
                            <div className="article-body">
                                {getArticle2022(i)}
                            </div>
                        </div>
                    ))
                    .sort((a, b) => b.key - a.key)}
            </>
        </div>
    );
}
