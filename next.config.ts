import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok.io",
  ],
};

export default nextConfig;
