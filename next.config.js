/** @type {import('next').NextConfig} */
// Note: this file previously assigned `module.exports` twice, so the first
// config object was silently discarded. Merged into one.
const nextConfig = {
  reactStrictMode: true,
  // Lets a production build run without clobbering the `.next` a running
  // `next dev` is using. Defaults to the normal directory, so CI and deploys
  // are unaffected: NEXT_DIST_DIR=.next-preview npm run build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    unoptimized: true,
  },
  compiler: {
    // Drop console calls from the production bundle.
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
