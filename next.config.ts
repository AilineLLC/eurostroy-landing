import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['concrete.internal'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.concrete.internal',
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
