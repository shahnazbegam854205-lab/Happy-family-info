// pages/api/secure-aggregate.js
export default async function handler(req, res) {
  // --- Config ---
  const ALLOWED_ORIGIN = "https://allinfofinder.vercel.app";
  const ENABLE_PROTECTION = process.env.BACKEND_LOCK === "ACTIVE"; // set in Vercel
  const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
  const RATE_LIMIT_MAX = 60; // max requests per IP per window

  // helper: send an HTML warning page (Hindi)
  function sendBlockedHTML(reason) {
    const html = `<!doctype html>
<html lang="hi">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Access Denied</title>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:#f8fafc; color:#0f172a; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; }
    .card { background:#fff; border-radius:12px; padding:28px; box-shadow: 0 6px 24px rgba(15,23,42,0.08); max-width:720px; width:90%; }
    h1 { margin:0 0 8px 0; font-size:20px; }
    p { margin:8px 0 12px 0; line-height:1.5; }
    .reason { font-size:13px; color:#334155; background:#f1f5f9; padding:8px 10px; border-radius:8px; }
    .contact { margin-top:12px; font-size:13px; color:#0ea5a4; }
    small { color:#64748b; }
  </style>
</head>
<body>
  <div class="card" role="main" aria-labelledby="title">
    <h1 id="title">Access Denied — Seedha API access allowed nahi hai</h1>
    <p>Namaste — lagta hai aap seedha is API endpoint ko directly access kar rahe hain (curl / Postman / script). Yeh service sirf <strong>allinfofinder.vercel.app</strong> par chalte hue browser requests ke liye hi available hai.</p>
    <div class="reason"><strong>Reason:</strong> ${reason}</div>
    <p>Aise direct requests se data misuse ho sakta hai — isliye ye request block kar di gayi hai. Agar aapko legitimate access chahiye to kripya apni website ke through request bhejein.</p>
    <div class="contact">Contact: <small>support@allinfofinder.vercel.app</small></div>
  </div>
</body>
</html>`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(403).send(html);
  }

  // --- Basic CORS header for allowed origin (browser)
  const originHeader = req.headers.origin || "";
  if (originHeader === ALLOWED_ORIGIN) {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "null");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // If protection not enabled, fail-safe: tell admin via JSON
  if (!ENABLE_PROTECTION) {
    return res.status(503).json({
      success: false,
      message:
        "Service unavailable. Server-side protection not enabled. Set BACKEND_LOCK=ACTIVE in environment.",
    });
  }

  // --- 1) Referer / Origin check (browser should send one of these) ---
  const referer = (req.headers.referer || req.headers.referrer || "").toString();
  const origin = originHeader.toString();

  const refererAllowed = referer && referer.startsWith(ALLOWED_ORIGIN + "/");
  const originAllowed = origin === ALLOWED_ORIGIN;

  if (!refererAllowed && !originAllowed) {
    // Return HTML page for direct/script attempts
    return sendBlockedHTML("Request origin/referrer allowed nahi hai.");
  }

  // --- 2) Basic Bot / curl protection using User-Agent ---
  const ua = (req.headers["user-agent"] || "").toString();
  if (!ua.includes("Mozilla")) {
    return sendBlockedHTML("Client User-Agent browser jaise nahi dikh raha (bot/curl/postman blocked).");
  }

  // --- 3) Simple per-IP rate limiting (in-memory) ---
  const ip =
    (req.headers["x-forwarded-for"] || "")
      .toString()
      .split(",")[0]
      ?.trim() || req.socket.remoteAddress || "unknown";

  if (!global.__rateLimitStore) {
    global.__rateLimitStore = new Map();
  }

  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const entry = global.__rateLimitStore.get(ip) || [];
  const recent = entry.filter((ts) => ts > windowStart);
  recent.push(now);
  global.__rateLimitStore.set(ip, recent);

  if (recent.length > RATE_LIMIT_MAX) {
    // For rate-limit exceed we keep JSON response (API consumer will understand retry semantics)
    return res.status(429).json({
      success: false,
      message: "Bahut zyada requests. Kripya kuch der baad phir koshish karein.",
      retry_after_ms: RATE_LIMIT_WINDOW_MS,
    });
  }

  // --- Proceed with original logic (GET only) ---
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
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?number=${encodeURIComponent(number)}`;
    } else {
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?aadhaar=${encodeURIComponent(aadhaar)}`;
    }

    console.log("Calling API:", apiUrl, "from IP:", ip);

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
    console.error("API Error:", err?.message || err);
    const errMsg =
      err?.name === "AbortError"
        ? "Upstream API timed out"
        : err?.message || "Unknown error";

    return res.status(500).json({
      success: false,
      message: "API request failed: " + errMsg,
      error: errMsg,
    });
  }
}
