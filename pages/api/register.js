const tokenResponse = await fetch('https://fleet-auth.prd.vn.cloud.tesla.com/oauth2/v3/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: 'client_credentials', // DO NOT use authorization_code here
    client_id: process.env.TESLA_CLIENT_ID,
    client_secret: process.env.TESLA_CLIENT_SECRET,
    scope: 'openid user_data energy_device_data',
    audience: 'https://fleet-api.prd.na.vn.cloud.tesla.com' // Must match region
  })
});
