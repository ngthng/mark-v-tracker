const fs = require('fs');
const path = require('path');

// Manually read .env
let GOOGLE_MAPS_API_KEY = '';
try {
  const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  const match = envFile.match(/GOOGLE_MAPS_API_KEY=(.*)/);
  if (match) GOOGLE_MAPS_API_KEY = match[1].trim();
} catch (e) {
  console.error("❌ Could not read .env file.");
  process.exit(1);
}

if (!GOOGLE_MAPS_API_KEY) {
  console.error("❌ ERROR: GOOGLE_MAPS_API_KEY is missing from your .env file.");
  process.exit(1);
}

async function fetchRoute(origin, destination, name) {
  console.log(`Fetching route: ${name}...`);
  
  const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
  
  const requestBody = {
    origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
    destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } },
    travelMode: "TRANSIT",
    // FIXED: allowedTravelModes is the correct field name
    transitPreferences: { allowedTravelModes: ["RAIL"] },
    polylineQuality: "HIGH_QUALITY"
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
      'X-Goog-FieldMask': 'routes.polyline.encodedPolyline'
    },
    body: JSON.stringify(requestBody)
  });

  const data = await res.json();

  if (!data.routes || data.routes.length === 0) {
    console.warn(`  ⚠️ Failed to get route for ${name}.`);
    console.warn(`     API Response:`, JSON.stringify(data));
    return [];
  }

  const poly = data.routes[0].polyline.encodedPolyline;
  let index = 0, len = poly.length, lat = 0, lng = 0;
  const points = [];
  
  while (index < len) {
    let b, shift = 0, result = 0;
    do { b = poly.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;
    shift = 0; result = 0;
    do { b = poly.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;
    points.push([lat / 1e5, lng / 1e5]);
  }

  return points;
}

async function run() {
  try {
    // Phase 1: Waterfront to King George
    const mainPath = await fetchRoute(
      { lat: 49.285975, lng: -123.111584 },
      { lat: 49.182871, lng: -122.844732 },
      "Main Line (Waterfront -> King George)"
    );

    // Phase 2: Columbia to Production Way-University
    const branchPath = await fetchRoute(
      { lat: 49.205617, lng: -122.906367 },
      { lat: 49.253275, lng: -122.918220 },
      "Branch (Columbia -> Production Way)"
    );

    const formatPath = (p) => p.map(pt => `  [${pt[0].toFixed(6)}, ${pt[1].toFixed(6)}],`).join('\n');

    const code = `
const EXPO_LINE_PATH = [
${formatPath(mainPath)}
];

const EXPO_BRANCH_PATH = [
${formatPath(branchPath)}
];
    `;

    fs.writeFileSync('path-google.txt', code);
    
    console.log('\n✅ Successfully generated path-google.txt!');
    console.log('You can now copy the contents of path-google.txt into server.js.');
    
  } catch (e) {
    console.error("ERROR:", e.message);
  }
}

run();