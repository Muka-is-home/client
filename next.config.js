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
    API_URL: "https://3000-mukaishome-client-le0ub46k9fo.ws-us97.gitpod.io/api", // use with GitPod
    // API_URL: "https://localhost:3000/api", //use for local
  },
});
