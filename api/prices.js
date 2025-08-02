export default async function handler(request, response) {
  const { url } = request.query;

  if (!url) {
    return response.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const result = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const data = await result.text();
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    return response.status(200).send(data);
  } catch (err) {
    return response.status(500).json({ error: err.message });
  }
}