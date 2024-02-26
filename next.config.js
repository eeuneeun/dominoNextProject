/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // Next Image Optimization
  // # CDN 등 외부 도메인의 이미지를 가져와서 로딩처리 할 경우, 필요한 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        pathname: '/*',
      },
    ],
  },

  // # 퍼블리싱 용 SCSS 컴파일러 세팅
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
