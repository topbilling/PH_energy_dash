const nextConfig = {
  async headers() {
    return [
      {
        source: '/.well-known/appspecific/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
