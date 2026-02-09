export default async function handler(req, res) {
  const { token } = req.query;
  // Correct endpoint for partner account registration
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
  res.status(response.status).json(data);
}
