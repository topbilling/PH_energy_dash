export default async function handler(req, res) {
  const { token, site_id } = req.query;

  const response = await fetch(
    `https://fleet-api.prd.na.vn.cloud.tesla.com/api/1/energy_sites/${site_id}/live_status`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data.response);
}
