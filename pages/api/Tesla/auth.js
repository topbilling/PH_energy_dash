export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch('https://auth.tesla.com/oauth2/v3/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.TESLA_CLIENT_ID,
      client_secret: process.env.TESLA_CLIENT_SECRET,
      code: code,
      redirect_uri: process.env.TESLA_REDIRECT_URI,
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
