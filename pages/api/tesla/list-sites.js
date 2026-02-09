export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Missing token in URL" });
  }

  const response = await fetch('https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/products', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  // SAFETY CHECK: If Tesla sends an error, show it to us instead of crashing
  if (!data.response) {
    return res.status(response.status).json({ 
      error: "Tesla API Error", 
      details: data 
    });
  }

  const energySites = data.response.filter(p => p.energy_site_id);
  res.status(200).json(energySites);
}
