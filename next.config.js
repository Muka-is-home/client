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
    // API_URL: `https://3000-mukaishome-client-c6z0ftkw9lc.ws-us98.gitpod.io/api`, // use with GitPod
    API_URL: "http://localhost:3000/api", //use for local
    // https://muka-dev.netlify.app // for dev server
  },
});
