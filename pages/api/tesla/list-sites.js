export default async function handler(req, res) {
  const { token } = req.query; // You will pass your access token here

  const response = await fetch('https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/products', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  
  // This will filter specifically for your energy products (PowerWalls/Solar)
  const energySites = data.response.filter(p => p.energy_site_id);
  
  res.status(200).json(energySites);
}
