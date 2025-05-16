import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
    // 빌드 중에 타입스크립트 오류를 무시하도록 설정
    ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // 빌드 중 ESLint 오류를 무시
    },
    // next 이미지 최적화 옵션 off
    images: {
      unoptimized: true
    },
    basePath: "/NextJS-Portfolio",
    assetPrefix: '/NextJS-Portfolio/', // GitHub 리포지토리 이름
    exportTrailingSlash: true
};

export default nextConfig;
