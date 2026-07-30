import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['concrete.internal'],
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.concrete.internal',
                pathname: '/Uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'api.eurogips.kg',
                pathname: '/Uploads/**',
            },
        ],
    },
    async rewrites() {
        const apiBase = process.env.API_BASE_URL;
        if (!apiBase) return [];
        return [
            {
                source: '/api/:path*',
                destination: `${apiBase}/api/:path*`,
            },
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
