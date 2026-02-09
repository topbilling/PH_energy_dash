export default async function handler(req, res) {
  const { token } = req.query;

  const response = await fetch('https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/partner/register', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "domain": "ph-energy-dash.vercel.app"
    })
  });

  const data = await response.json();
  
  // If we get the "region" error here, it means the registration CALL itself
  // is being rejected before it even looks at your public key.
  res.status(response.status).json(data);
}
