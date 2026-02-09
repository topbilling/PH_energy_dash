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
```

This configuration serves the `.well-known/appspecific/` directory that Tesla requires for app verification. You'll also need to create a file at:
```
public/.well-known/appspecific/com.tesla.3p.public-key.pem
