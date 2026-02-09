export default async function handler(req, res) {
  try {
    // STEP 1: Get the Partner Token (Client Credentials)
    const tokenResponse = await fetch('https://fleet-auth.prd.vn.cloud.tesla.com/oauth2/v3/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.TESLA_CLIENT_ID,
        client_secret: process.env.TESLA_CLIENT_SECRET,
        scope: 'openid user_data energy_device_data',
        audience: 'https://fleet-api.prd.na.vn.cloud.tesla.com'
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return res.status(401).json({ error: "Failed to get Partner Token", details: tokenData });
    }

    // STEP 2: Use that token to Register
    const regResponse = await fetch('https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/partner_accounts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "domain": "ph-energy-dash.vercel.app"
      })
    });

    const regData = await regResponse.json();
    res.status(regResponse.status).json(regData);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
