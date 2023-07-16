export const transformTitle = (title) => {
    const transformedTitle = title
        .replace(/- /g, "")
        .replace(/,/, "")
        .replace(/ /g, "-")
        .toLowerCase();
    return transformedTitle;
};
