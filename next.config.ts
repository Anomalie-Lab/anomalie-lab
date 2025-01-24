import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
  },
  env: {
    NEXT_NODE_MAILER_USER: process.env.NEXT_NODE_MAILER_USER,
    NEXT_NODE_MAILER_PASS: process.env.NEXT_NODE_MAILER_PASS,
    NEXT_NODE_MAILER_PORT: process.env.NEXT_NODE_MAILER_PORT,
    NEXT_NODE_MAILER_HOST: process.env.NEXT_NODE_MAILER_HOST,
  },
};

export default nextConfig;
