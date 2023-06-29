/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "res.cloudinary.com",
            "lh3.googleusercontent.com",
            "images.squarespace-cdn.com",
            "avatars.githubusercontent.com",
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
