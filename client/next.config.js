module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.youtube.com/*",
      },
    ];
  },
  images: {
    domains: [
      "backend.ivanskanavi.com",
      "backend-final.ivanskanavi.com",
      "localhost",
    ],
  },
};
