import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
    typescript: {
    // 빌드 중에 타입스크립트 오류를 무시하도록 설정
    ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // 빌드 중 ESLint 오류를 무시
    },
    basePath: isProd ? '/NextJS-Portfolio' : '',
    assetPrefix: isProd ? '/NextJS-Portfolio/' : '',
    output:'export'
    
};

export default nextConfig;
