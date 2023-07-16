export const transformTitle = (title:string) => {
    const transformedTitle = title
        .replace(/- /g, "")
        .replace(/,/, "")
        .replace(/ /g, "-")
        .toLowerCase();
    return transformedTitle;
};
