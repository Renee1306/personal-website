import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next only serves qualities listed here; anything else silently falls back
    // to 75. The hackathon cards ask for 90 so the photos stay crisp.
    qualities: [75, 90],
  },
};

export default nextConfig;
