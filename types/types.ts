export interface IArticle {
    article_id: number;
    article_date: string;
    article_title: string;
    article_image_small: string;
    article_public: Boolean;
    article_post: string;
}

export interface IReel {
    reel_id: number;
    reel_date: string;
    reel_image: string;
    reel_category: string;
    reel_public: Boolean;
    reel_video: Boolean;
    reel_video_thumbnail: string;
}
