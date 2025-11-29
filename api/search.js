export default async function handler(req, res) {

  // --- SECURITY: Only allow this domain ---
  const allowedOrigin = "https://allinfofinder.vercel.app";
  const origin = req.headers.origin;

  if (origin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "null");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // --- SECURITY: Backend Environment Lock ---
  // Ye sirf backend side check hoga – frontend ko nahi pata chalega.
  // Agar env set nahi hoga to endpoint request accept hi nahi karega.
  if (!process.env.BACKEND_LOCK || process.env.BACKEND_LOCK !== "ACTIVE") {
    return res.status(503).json({
      success: false,
      message: "Service temporarily unavailable",
    });
  }

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { number, aadhaar } = req.query;

  if (!number && !aadhaar) {
    return res.status(400).json({
      success: false,
      message: "Phone number or Aadhaar required",
    });
  }

  try {
    let apiUrl;

    if (number) {
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?number=${number}`;
    } else {
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?aadhaar=${aadhaar}`;
    }

    console.log("Calling API:", apiUrl);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("API Response received successfully");

    return res.status(200).json({
      success: true,
      fetched: data,
      search_type: number ? "phone" : "aadhaar",
      message: "Data fetched successfully",
    });
  } catch (err) {
    console.error("API Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "API request failed: " + err.message,
      error: err.message,
    });
  }
}
