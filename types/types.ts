export interface IArticle {
    article_id: number;
    article_date: string;
    article_title: string;
    article_image_small: string;
    article_public: boolean;
    article_post: string;
}

export interface IArticleAndComment extends IArticle {
    comment: IComment[];
}

export interface IArticleAndUrl extends IArticle {
    url_base: string;
}

export interface IArticleDashboard extends IArticle {
    // setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IReel {
    reel_id: number;
    reel_date: string;
    reel_image: string;
    reel_category: string;
    reel_public: boolean;
    reel_video: boolean;
    reel_video_thumbnail: string;
}

export interface IReelForm extends IReel {
    crud: "update" | "create";
}

export interface IReelCard extends IReel {
    reel_responsive_key?: number;
    url_base: string;
}

export interface IComment {
    comment_id?: number;
    comment_user_name: string;
    comment_user_image: string;
    comment_date: string;
    comment_body: string;
    article_id?: number
}

export interface ISurvey {
    survey_name: string;
    survey_email: string;
    survey_choice: string;
}

export interface ISubscriber {
    email: string;
    first_name: string;
    last_name: string;
}

export interface IEmailContact {
    name: string;
    email: string;
    message: string;
    phone: string;
}

export type CommentProp = {
    article_id: number;
};

export type ArticleParams = {
    params: {
        article_id: number;
    };
};

export type ReelParams = {
    params: {
        reel_id: number;
    };
};

export type ChartType = {
    _count: number;
};

export interface ModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    size?: "small" | "large";
    children: React.ReactNode;
}
