/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/kattis-leaderboard" : "",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
