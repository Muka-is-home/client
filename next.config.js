/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  env: {
    API_URL: `${process.env.NEXT_PUBLIC_URL}/api`, // use with GitPod
    // API_URL: "https://localhost:3000/api", //use for local
    // https://muka-dev.netlify.app // for dev server
  },
});
