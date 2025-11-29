export default async function handler(req, res) {
  // --- Config ---
  const ALLOWED_ORIGIN = "https://allinfofinder.vercel.app";
  const ENABLE_PROTECTION = process.env.BACKEND_LOCK === "ACTIVE";

  // --------------------------
  // SCARY HACKER WARNING PAGE
  // --------------------------
  function sendWarningPage() {
    const html = `<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ACCESS RESTRICTED</title>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #ff0000;
    font-family: 'Courier New', monospace;
    overflow: hidden;
  }

  .scanlines {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0px,
      rgba(255, 0, 0, 0.05) 2px,
      transparent 4px
    );
    pointer-events: none;
    z-index: 5;
  }

  .alert-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 480px;
    background: rgba(20, 0, 0, 0.85);
    border: 2px solid red;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 0 20px red;
    animation: pulse 2s infinite alternate;
  }

  @keyframes pulse {
    from { box-shadow: 0 0 10px red; }
    to   { box-shadow: 0 0 35px red; }
  }

  h1 {
    font-size: 26px;
    text-align: center;
    text-shadow: 0 0 12px red;
    margin-bottom: 14px;
    animation: glitch 1.5s infinite;
  }

  @keyframes glitch {
    0% { transform: skew(0deg); }
    20% { transform: skew(4deg); }
    40% { transform: skew(-4deg); }
    60% { transform: skew(3deg); }
    80% { transform: skew(-3deg); }
    100% { transform: skew(0deg); }
  }

  p {
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
  }

  button {
    background: #ff0000;
    border: none;
    padding: 12px 26px;
    font-size: 16px;
    color: #000;
    margin-top: 18px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
    box-shadow: 0 0 10px red;
    transition: 0.25s;
  }

  button:hover {
    background: #ff3b3b;
    box-shadow: 0 0 20px red;
  }

  .flicker {
    animation: flickerAnimation 0.18s infinite;
  }

  @keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:0.92; }
    100% { opacity:1; }
  }
</style>

</head>
<body>

<div class="scanlines"></div>

<div class="alert-box flicker">
  <h1>⚠ ACCESS RESTRICTED ⚠</h1>
  <p>Unauthorized access detected.<br>
  Security system active.<br>
  Proceed only if you are authorized.</p>

  <button onclick="playMusic()">GET API</button>

  <audio id="music" src="/automusic.mp3"></audio>
</div>

<script>
  function playMusic() {
    document.getElementById("music").play();
  }
</script>

</body>
</html>`;

    res.setHeader("Content-Type", "text/html");
    return res.status(403).send(html);
  }

  // --- CORS ---
  const originHeader = req.headers.origin || "";
  if (originHeader === ALLOWED_ORIGIN) {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "null");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Protection REQUIRED
  if (!ENABLE_PROTECTION) {
    return res.status(503).json({
      success: false,
      message: "Server protection disabled.",
    });
  }

  // Detect unauthorized direct access
  const referer = req.headers.referer || "";
  const ua = req.headers["user-agent"] || "";

  const refererAllowed = referer.startsWith(ALLOWED_ORIGIN);
  const originAllowed = originHeader === ALLOWED_ORIGIN;
  const looksLikeBrowser = ua.includes("Mozilla");

  if (!refererAllowed && !originAllowed) {
    return sendWarningPage();
  }

  if (!looksLikeBrowser) {
    return sendWarningPage();
  }

  // --- ONLY GET ALLOWED ---
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

    return res.status(200).json({
      success: true,
      fetched: data,
      search_type: number ? "phone" : "aadhaar",
      message: "Data fetched successfully",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "API request failed: " + err.message,
      error: err.message,
    });
  }
}
