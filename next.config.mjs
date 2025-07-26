/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'tailwindcss.com',
            },
        ],
    },
};

export default nextConfig;
