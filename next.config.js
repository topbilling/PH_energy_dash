module.exports = {
  async headers() {
    return [
      {
        source: '/.well-known/appspecific/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
