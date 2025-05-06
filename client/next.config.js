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
      "wordpress.ivanskanavi.com",
      "localhost",
    ],
  },
};
