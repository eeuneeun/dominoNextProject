/** @type {import('next').NextConfig} */
import path from "path";
const __dirname = path.resolve();

const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "_styles")],
  },
};

export default nextConfig;
