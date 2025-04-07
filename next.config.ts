import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i2.wp.com",
        port: "",
        pathname: "/moonlightnovel.com/**",
      },
    ],
  },
};

export default nextConfig;
