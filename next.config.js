/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/tesla/:path*',
        destination: 'https://owner-api.teslamotors.com/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/tesla/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
  env: {
    TESLA_CLIENT_ID: process.env.TESLA_CLIENT_ID,
    TESLA_CLIENT_SECRET: process.env.TESLA_CLIENT_SECRET,
    TESLA_REDIRECT_URI: process.env.TESLA_REDIRECT_URI,
  },
};

module.exports = nextConfig;
```

You'll also need to create a `.env.local` file with your Tesla OAuth credentials:
```
TESLA_CLIENT_ID=your_client_id_here
TESLA_CLIENT_SECRET=your_client_secret_here
TESLA_REDIRECT_URI=https://your-app.vercel.app/callback
