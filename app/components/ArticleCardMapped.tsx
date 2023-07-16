import { IArticle } from "@/types/types";
import ArticleCard from "./ArticleCard";

export default function ArticleCardMapped(props: {
    articles: IArticle[];
    url_base: string;
}) {
    const filter2022 = props.articles.filter(
        (item) => new Date(item.article_date).getFullYear() === 2022
    );
    const filter2023 = props.articles.filter(
        (item) => new Date(item.article_date).getFullYear() === 2023
    );

    const getArticle2023 = (month: number) =>
        filter2023.reduce((acc: any[], item) => {
            if (new Date(item.article_date).getMonth() === month) {
                acc.push(
                    <div key={item.article_id}>
                        <ArticleCard
                            key={item.article_id}
                            url_base={props.url_base}
                            {...item}
                        />
                    </div>
                );
            }
            return acc;
        }, []);
    const getArticle2022 = (month: number) =>
        filter2022.reduce((acc: any[], item) => {
            if (new Date(item.article_date).getMonth() === month) {
                acc.push(
                    <div key={item.article_id}>
                        <ArticleCard
                            key={item.article_id}
                            url_base={props.url_base}
                            {...item}
                        />
                    </div>
                );
            }
            return acc;
        }, []);

    const longMonths: string[] = [
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
    ];

    return (
        <div>
            <h2>Blog Posts:</h2>
            <>
                <h2>2023</h2>
                {longMonths
                    .map((item, i) => (
                        <div key={i}>
                            {getArticle2023(i).length > 0 && <h3>{item}</h3>}
                            <div className="article-body">
                                {getArticle2023(i)}
                            </div>
                        </div>
                    ))
                    .sort((a: any, b: any) => b.key - a.key)}
            </>
            <>
                <h2>2022</h2>
                {longMonths
                    .map((item, i) => (
                        <div key={i}>
                            {getArticle2022(i).length > 0 && <h3>{item}</h3>}
                            <div className="article-body">
                                {getArticle2022(i)}
                            </div>
                        </div>
                    ))
                    .sort((a: any, b: any) => b.key - a.key)}
            </>
        </div>
    );
}
