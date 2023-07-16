import { IArticle, IEmailContact, IReel, ISubscriber } from "@/types/types";

type action = {
    type: "textChange";
    payload: {
        key: string;
        value: string | number | boolean;
    };
};

export const articleReducer = (state: IArticle, action: action) => {
    switch (action.type) {
        case "textChange":
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            throw new Error("not a reducer action");
    }
};
export const reelReducer = (state: IReel, action: action) => {
    switch (action.type) {
        case "textChange":
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            throw new Error("not a reducer action");
    }
};

export const subscriberReducer = (state: ISubscriber, action: action) => {
    switch (action.type) {
        case "textChange":
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            throw new Error("not a reducer action");
    }
};

export const emailReducer = (state: IEmailContact, action: action) => {
    switch (action.type) {
        case "textChange":
            return { ...state, [action.payload.key]: action.payload.value };
        default:
            throw new Error("not a reducer action");
    }
};
