const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const PORT = process.env.PORT || 3000;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';

const TRANSITOUS_USER_AGENT =
  'mark-v-tracker/1.0 (https://github.com/yourusername/mark-v-tracker; you@example.com)';
const TRANSITOUS_BASE = 'https://api.transitous.org/api';

// Transitous route ID for Expo Line (from TransLink's static GTFS)
const EXPO_ROUTE_ID = 'ca-bc-TransLink_30053';

app.get('/api/config', (req, res) => {
  res.json({ googleMapsApiKey: GOOGLE_MAPS_API_KEY });
});

const EXPO_STATIONS = [
  { id: "waterfront",       name: "Waterfront",                lat: 49.285908, lng: -123.111584 },
  { id: "burrard",          name: "Burrard",                   lat: 49.285452, lng: -123.120877 },
  { id: "granville",        name: "Granville",                 lat: 49.283134, lng: -123.115746 },
  { id: "stadium",          name: "Stadium-Chinatown",         lat: 49.279298, lng: -123.108887 },
  { id: "main_street",      name: "Main Street-Science World", lat: 49.272923, lng: -123.100487 },
  { id: "commercial",       name: "Commercial-Broadway",       lat: 49.262683, lng: -123.068961 },
  { id: "nanaimo",          name: "Nanaimo",                   lat: 49.248446, lng: -123.055756 },
  { id: "29th_ave",         name: "29th Avenue",               lat: 49.244067, lng: -123.045416 },
  { id: "joyce",            name: "Joyce-Collingwood",         lat: 49.238379, lng: -123.031860 },
  { id: "patterson",        name: "Patterson",                 lat: 49.229562, lng: -123.012761 },
  { id: "metrotown",        name: "Metrotown",                 lat: 49.225596, lng: -123.003795 },
  { id: "royal_oak",        name: "Royal Oak",                 lat: 49.220066, lng: -122.988540 },
  { id: "edmonds",          name: "Edmonds",                   lat: 49.212918, lng: -122.960590 },
  { id: "22nd_street",      name: "22nd Street",               lat: 49.199996, lng: -122.948952 },
  { id: "new_westminster",  name: "New Westminster",           lat: 49.201399, lng: -122.912409 },
  { id: "columbia",         name: "Columbia",                  lat: 49.205617, lng: -122.906367 },
  { id: "scott_road",       name: "Scott Road",                lat: 49.204036, lng: -122.874318 },
  { id: "gateway",          name: "Gateway",                   lat: 49.198945, lng: -122.850312 },
  { id: "king_george",      name: "King George",               lat: 49.182871, lng: -122.844732 },
  { id: "sapperton",        name: "Sapperton",                 lat: 49.223156, lng: -122.889669 },
  { id: "braid",            name: "Braid",                     lat: 49.233215, lng: -122.882791 },
  { id: "lougheed",         name: "Lougheed Town Centre",      lat: 49.248763, lng: -122.896821 },
  { id: "production_way",   name: "Production Way-University", lat: 49.253275, lng: -122.918220 }
];

// Ordered Expo Line track geometry.
// Waypoints follow the actual rails between stations — not straight lines.
// Each waypoint is [lat, lng]. Station waypoints use the exact coords from EXPO_STATIONS.
// Order: Waterfront → King George (Production Way branch is appended separately).
const EXPO_LINE_PATH = [
  // Waterfront → Burrard
  [49.285908, -123.111584],
  [49.285560, -123.113140],
  [49.285420, -123.115280],
  [49.285500, -123.117780],
  [49.285560, -123.120050],
  [49.285452, -123.120877],   // Burrard

  // Burrard → Granville
  [49.284820, -123.121030],
  [49.283900, -123.120900],
  [49.283460, -123.119350],
  [49.283320, -123.117720],
  [49.283180, -123.116500],
  [49.283134, -123.115746],   // Granville

  // Granville → Stadium-Chinatown
  [49.282700, -123.114620],
  [49.281600, -123.113320],
  [49.280300, -123.111780],
  [49.279420, -123.110240],
  [49.279298, -123.108887],   // Stadium-Chinatown

  // Stadium-Chinatown → Main Street-Science World
  [49.278800, -123.107400],
  [49.277900, -123.105280],
  [49.276300, -123.103250],
  [49.274600, -123.101720],
  [49.272923, -123.100487],   // Main Street-Science World

  // Main Street → Commercial-Broadway
  [49.271400, -123.098920],
  [49.269600, -123.096480],
  [49.267900, -123.093250],
  [49.266400, -123.089470],
  [49.265100, -123.085180],
  [49.263920, -123.080520],
  [49.263250, -123.076140],
  [49.262900, -123.072380],
  [49.262750, -123.070050],
  [49.262683, -123.068961],   // Commercial-Broadway

  // Commercial-Broadway → Nanaimo
  [49.261600, -123.067420],
  [49.259500, -123.064780],
  [49.257200, -123.062440],
  [49.254900, -123.060140],
  [49.252700, -123.058080],
  [49.250500, -123.056720],
  [49.248446, -123.055756],   // Nanaimo

  // Nanaimo → 29th Avenue
  [49.246900, -123.054020],
  [49.245700, -123.051560],
  [49.245100, -123.048940],
  [49.244700, -123.047040],
  [49.244067, -123.045416],   // 29th Avenue

  // 29th Avenue → Joyce-Collingwood
  [49.243400, -123.044020],
  [49.242100, -123.042480],
  [49.241400, -123.040600],
  [49.241500, -123.038060],
  [49.241700, -123.035680],
  [49.240800, -123.033380],
  [49.239500, -123.032150],
  [49.238379, -123.031860],   // Joyce-Collingwood

  // Joyce-Collingwood → Patterson
  [49.237400, -123.030800],
  [49.236000, -123.028040],
  [49.234700, -123.024620],
  [49.233500, -123.021200],
  [49.232200, -123.018720],
  [49.230900, -123.016620],
  [49.229562, -123.012761],   // Patterson

  // Patterson → Metrotown
  [49.228500, -123.010320],
  [49.227600, -123.007880],
  [49.226900, -123.005700],
  [49.225596, -123.003795],   // Metrotown

  // Metrotown → Royal Oak
  [49.224100, -123.001880],
  [49.222600, -122.999520],
  [49.221400, -122.996640],
  [49.220500, -122.993180],
  [49.220066, -122.988540],   // Royal Oak

  // Royal Oak → Edmonds
  [49.219200, -122.985600],
  [49.218900, -122.981180],
  [49.218300, -122.975940],
  [49.217400, -122.971280],
  [49.216200, -122.968160],
  [49.214800, -122.964560],
  [49.213600, -122.961840],
  [49.212918, -122.960590],   // Edmonds

  // Edmonds → 22nd Street
  [49.211500, -122.959520],
  [49.209900, -122.957860],
  [49.208100, -122.955920],
  [49.206100, -122.954120],
  [49.204100, -122.951960],
  [49.202100, -122.950240],
  [49.199996, -122.948952],   // 22nd Street

  // 22nd Street → New Westminster
  [49.198400, -122.945500],
  [49.198100, -122.941020],
  [49.198500, -122.935480],
  [49.199400, -122.929900],
  [49.200300, -122.924640],
  [49.201100, -122.919220],
  [49.201300, -122.915680],
  [49.201399, -122.912409],   // New Westminster

  // New Westminster → Columbia
  [49.200600, -122.911420],
  [49.199900, -122.910060],
  [49.200100, -122.908240],
  [49.201200, -122.907120],
  [49.203300, -122.906760],
  [49.205200, -122.906760],
  [49.205617, -122.906367],   // Columbia

  // Columbia → Scott Road
  [49.206400, -122.905040],
  [49.207600, -122.901600],
  [49.208100, -122.896800],
  [49.208000, -122.891800],
  [49.207200, -122.886880],
  [49.206400, -122.882840],
  [49.205200, -122.879080],
  [49.204036, -122.874318],   // Scott Road

  // Scott Road → Gateway
  [49.203400, -122.871580],
  [49.203200, -122.868520],
  [49.203500, -122.865320],
  [49.203800, -122.862260],
  [49.203900, -122.858980],
  [49.202800, -122.855200],
  [49.201200, -122.852320],
  [49.199900, -122.851040],
  [49.198945, -122.850312],   // Gateway

  // Gateway → King George
  [49.197600, -122.849320],
  [49.195600, -122.848600],
  [49.193600, -122.848020],
  [49.191600, -122.847060],
  [49.189400, -122.845820],
  [49.187000, -122.845120],
  [49.184900, -122.844880],
  [49.182871, -122.844732],   // King George
];

// Sapperton branch geometry (Columbia → Sapperton → Braid → Lougheed → Production Way).
// Branches off after Columbia; do NOT include this in the main polyline.
const EXPO_BRANCH_PATH = [
  // Columbia → Sapperton
  [49.205617, -122.906367],   // Columbia (shared)
  [49.205900, -122.908400],
  [49.207300, -122.910160],
  [49.209700, -122.910720],
  [49.212300, -122.910540],
  [49.215300, -122.909560],
  [49.217900, -122.907900],
  [49.220300, -122.904460],
  [49.221900, -122.900980],
  [49.223156, -122.889669],   // Sapperton

  // Sapperton → Braid
  [49.225100, -122.888820],
  [49.227400, -122.887660],
  [49.229700, -122.886400],
  [49.231800, -122.884780],
  [49.233215, -122.882791],   // Braid

  // Braid → Lougheed Town Centre
  [49.234600, -122.881080],
  [49.236200, -122.879980],
  [49.238500, -122.879340],
  [49.240900, -122.880340],
  [49.242800, -122.882940],
  [49.244200, -122.886600],
  [49.245900, -122.890620],
  [49.247600, -122.894180],
  [49.248763, -122.896821],   // Lougheed Town Centre

  // Lougheed → Production Way-University
  [49.249500, -122.899240],
  [49.250800, -122.902480],
  [49.251800, -122.906020],
  [49.252600, -122.909980],
  [49.253100, -122.914120],
  [49.253275, -122.918220],   // Production Way-University
];

app.get('/api/stations', (req, res) => res.json(EXPO_STATIONS));

/* ---------------- Transitous helpers ---------------- */

const stopIdCache = new Map();

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function resolveStopId(station) {
  if (stopIdCache.has(station.id)) return stopIdCache.get(station.id);

  const query = `${station.name} Station, Vancouver`;
  const url = `${TRANSITOUS_BASE}/v1/geocode?text=${encodeURIComponent(query)}&type=STOP`;
  const res = await fetch(url, { headers: { 
  'User-Agent': 'MarkVTracker/1.0 (https://github.com/yourusername/mark-v-tracker; you@example.com)',
  'Accept': 'application/json'
} });
  if (!res.ok) throw new Error(`Transitous geocode HTTP ${res.status}`);

  const data = await res.json();
  const matches = Array.isArray(data) ? data : data.matches || [];
  if (!matches.length) throw new Error(`No Transitous stop match for "${query}"`);

  let best = null;
  let bestDist = Infinity;
  for (const m of matches) {
    if (typeof m.lat !== 'number' || typeof m.lon !== 'number') continue;
    const d = distanceKm(station.lat, station.lng, m.lat, m.lon);
    if (d < bestDist) { bestDist = d; best = m; }
  }
  if (!best) throw new Error(`No usable coordinates for "${query}"`);
  if (bestDist > 10) {
    throw new Error(`Closest Transitous match for "${query}" is ${bestDist.toFixed(1)} km away`);
  }

  stopIdCache.set(station.id, best.id);
  return best.id;
}

async function fetchStoptimes(stopId, n = 40) {          
  const params = new URLSearchParams({ stopId, n: String(n), arriveBy: 'false' });
  for (const version of ['v6', 'v5']) {
    const url = `${TRANSITOUS_BASE}/${version}/stoptimes?${params}`;
    const res = await fetch(url, { headers: { 'User-Agent': TRANSITOUS_USER_AGENT } });
    if (res.status === 404 && version === 'v6') continue;
    if (!res.ok) throw new Error(`Transitous stoptimes HTTP ${res.status}`);
    return res.json();
  }
  throw new Error('Transitous stoptimes: no working API version found');
}

// The MOTIS/Transitous response is FLAT: st.routeId, st.mode, st.headsign
// are top-level fields on each stop-time item, not nested under st.route/st.trip.
function isExpoRoute(st) {
  if (st.routeId === EXPO_ROUTE_ID) return true;
  const name = String(st.routeLongName || st.displayName || '');
  return /expo\s*line/i.test(name);
}

// Only keep stop times that actually happen at the queried station.
// Transitous returns stop times from downstream stops of the same trip too
// (e.g. Granville when you asked about Waterfront) — those need to be dropped.
function isAtQueriedStation(place, transitousStopId) {
  if (!place) return false;
  return place.stopId === transitousStopId || place.parentId === transitousStopId;
}

function toMinutes(iso, nowMs) {
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return null;
  return Math.max(0, Math.round((t - nowMs) / 60000));
}

/* ---------------- Arrivals ---------------- */

app.get('/api/arrivals/:stationId', async (req, res) => {
  const { stationId } = req.params;
  const station = EXPO_STATIONS.find(s => s.id === stationId);
  if (!station) return res.status(404).json({ error: 'Unknown station' });

  try {
    const transitousStopId = await resolveStopId(station);
    const data = await fetchStoptimes(transitousStopId);
    const stopTimes = Array.isArray(data.stopTimes) ? data.stopTimes : [];
    const nowMs = Date.now();

    const arrivals = [];
    for (const st of stopTimes) {
      const place = st.place || {};

      // 1. Must be a stop at the queried station, not a downstream stop
      if (!isAtQueriedStation(place, transitousStopId)) continue;

      // 2. Must be the Expo Line (Canada Line is also SUBWAY, so routeId is the only safe discriminator)
      if (!isExpoRoute(st)) continue;

      // 3. Must have a departure time (this is a departures board, not an arrivals board)
      const liveIso = place.departure || place.scheduledDeparture;
      if (!liveIso) continue;

      const minutesAway = toMinutes(liveIso, nowMs);
      if (minutesAway === null) continue;

      const scheduledIso = place.scheduledDeparture;
      const realtime = Boolean(
        scheduledIso && place.departure && place.departure !== scheduledIso
      );

      // Headsign looks like "Expo Line To King George" → strip the prefix
      const rawHeadsign = st.headsign || (st.tripTo && st.tripTo.name) || null;
      const headsign = rawHeadsign
        ? rawHeadsign.replace(/^Expo\s+Line\s+/i, '').trim()
        : null;

      arrivals.push({
        tripId: st.tripId || null,
        routeId: st.routeId || null,
        headsign,
        minutesAway,
        realtime,
      });
    }

    // De-dupe: Transitous can emit the same trip/stop combination twice
    const seen = new Set();
    const deduped = arrivals.filter(a => {
      const k = `${a.tripId}|${a.minutesAway}`;
      if (seen.has(k)) return false;
      seen.add(k); return true;
    });
    deduped.sort((a, b) => a.minutesAway - b.minutesAway);

    res.json({
      station: station.name,
      transitousStopId,
      arrivals: deduped.slice(0, 6),
    });
  } catch (error) {
    console.error('Transitous arrivals error:', error);
    res.status(500).json({ error: error.message });
  }
});

/* ---------------- Train position estimation ---------------- */

const TRAIN_CACHE_MS = 45_000;
let trainCache = { data: null, at: 0 };
let trainFetchInFlight = null;

function bearingBetween(from, to) {
  const dLon = ((to.lng - from.lng) * Math.PI) / 180;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

async function fetchAllStationStopTimes() {
  return Promise.all(
    EXPO_STATIONS.map(async (station) => {
      try {
        const resolvedStopId = await resolveStopId(station);
        const data = await fetchStoptimes(resolvedStopId, 60);
        return { station, resolvedStopId, stopTimes: data.stopTimes || [] };
      } catch (e) {
        console.error(`train fetch ${station.id}:`, e.message);
        return { station, resolvedStopId: null, stopTimes: [] };
      }
    })
  );
}

function buildTrips(perStation) {
  const trips = new Map();
  for (const { station, resolvedStopId, stopTimes } of perStation) {
    if (!resolvedStopId) continue;
    for (const st of stopTimes) {
      const place = st.place || {};
      if (!isAtQueriedStation(place, resolvedStopId)) continue;
      if (!isExpoRoute(st)) continue;
      const tripId = st.tripId;
      if (!tripId) continue;
      const depIso = place.departure || place.scheduledDeparture;
      if (!depIso) continue;
      const t = Date.parse(depIso);
      if (!Number.isFinite(t)) continue;

      if (!trips.has(tripId)) trips.set(tripId, []);
      trips.get(tripId).push({
        stationId: station.id,
        lat: station.lat,
        lng: station.lng,
        time: t,
        headsign: st.headsign || null,
      });
    }
  }
  for (const stops of trips.values()) stops.sort((a, b) => a.time - b.time);
  return trips;
}

function interpolateTrains(trips, nowMs) {
  const trains = [];
  for (const [tripId, stops] of trips) {
    if (stops.length < 2) continue;

    let segment = null;
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (a.time <= nowMs && nowMs <= b.time) {
        segment = { a, b };
        break;
      }
    }
    if (!segment) continue;

    const { a, b } = segment;
    const span = b.time - a.time;
    if (span <= 0) continue;

    const frac = (nowMs - a.time) / span;
    const lat = a.lat + (b.lat - a.lat) * frac;
    const lng = a.lng + (b.lng - a.lng) * frac;
    const headsign = (a.headsign || '').replace(/^Expo\s+Line\s+/i, '').trim();

    trains.push({
      tripId,
      lat,
      lng,
      headsign: headsign || null,
      fromStation: a.stationId,
      fromLat: a.lat,
      fromLng: a.lng,
      toStation: b.stationId,
      toLat: b.lat,
      toLng: b.lng,
      minutesToNext: Math.max(0, Math.round((b.time - nowMs) / 60000)),
    });
  }
  return trains;
}

/* ---------------- Debug ---------------- */

app.get('/api/debug/transitous/:stationId', async (req, res) => {
  const station = EXPO_STATIONS.find(s => s.id === req.params.stationId);
  if (!station) return res.status(404).json({ error: 'Unknown station' });

  try {
    const stopId = await resolveStopId(station);
    const data = await fetchStoptimes(stopId);
    res.json({
      station: station.name,
      coordinates: { lat: station.lat, lng: station.lng },
      transitousStopId: stopId,
      stopTimesRaw: data.stopTimes ? data.stopTimes.slice(0, 10) : [],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/trains', async (req, res) => {
  const now = Date.now();

  if (trainCache.data && now - trainCache.at < TRAIN_CACHE_MS) {
    return res.json({
      trains: trainCache.data,
      cachedAt: new Date(trainCache.at).toISOString(),
    });
  }

  // If a fetch is already running, coalesce onto it rather than firing 23 more
  if (!trainFetchInFlight) {
    trainFetchInFlight = (async () => {
      try {
        const perStation = await fetchAllStationStopTimes();
        const trips = buildTrips(perStation);
        const trains = interpolateTrains(trips, Date.now());
        trainCache = { data: trains, at: Date.now() };
        return trains;
      } finally {
        trainFetchInFlight = null;
      }
    })();
  }

  try {
    const trains = await trainFetchInFlight;
    res.json({ trains, cachedAt: new Date(trainCache.at).toISOString() });
  } catch (e) {
    console.error('trains endpoint:', e);
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/route-geometry', (req, res) => {
  res.json({
    main: EXPO_LINE_PATH.map(([lat, lng]) => ({ lat, lng })),
    branch: EXPO_BRANCH_PATH.map(([lat, lng]) => ({ lat, lng })),
  });
});

app.get('/api/generate-geometry', async (req, res) => {
  // We query OpenStreetMap for the Expo Line relation
  // 1837391 is the OSM relation ID for the Expo Line
  const overpassQuery = `
    [out:json][timeout:25];
    rel(1837391);
    way(r);
    out geom;
  `;

  try {
    const r = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: 'data=' + encodeURIComponent(overpassQuery),
      headers: { 'User-Agent': TRANSITOUS_USER_AGENT }
    });
    
    if (!r.ok) throw new Error(`OSM API returned ${r.status}`);
    const data = await r.json();

    let mainPath = [];
    let branchPath = [];

    // The OSM relation contains multiple "ways" (segments of track).
    // We need to stitch them together in the correct order.
    data.elements.forEach(way => {
      if (!way.geometry) return;
      
      // Convert OSM [lon, lat] to our [lat, lng] format
      const coords = way.geometry.map(pt => [pt.lat, pt.lon]);

      // Check if this segment belongs to the main line or the branch
      // We approximate by checking if the segment goes far south to Surrey
      const isBranch = coords.some(c => c[0] < 49.2100); 

      if (isBranch) {
        branchPath.push(...coords);
      } else {
        mainPath.push(...coords);
      }
    });

    // Sort coordinates from West (Waterfront) to East (King George)
    // so the polyline draws in a continuous path without zig-zagging
    mainPath.sort((a, b) => b[1] - a[1]); 
    branchPath.sort((a, b) => b[1] - a[1]);

    // Format as a JS string so you can copy-paste it
    const formatPath = (path) => {
      return path.map(p => `  [${p[0].toFixed(6)}, ${p[1].toFixed(6)}],`).join('\n');
    };

    res.send(`
      <pre style="font-size: 12px; line-height: 1.2;">
// --- COPY FROM HERE ---
const EXPO_LINE_PATH = [
${formatPath(mainPath)}
];

const EXPO_BRANCH_PATH = [
${formatPath(branchPath)}
];
// --- COPY TO HERE ---
      </pre>
    `);

  } catch (e) {
    res.status(500).send(`Error: ${e.message}`);
  }
});

/* ---------------- SPA fallback ---------------- */

app.get(/^(?!\/api).*/, (req, res) => {
  const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
  if (fs.existsSync(indexPath)) res.sendFile(indexPath);
  else res.status(404).send('Frontend not built yet. Run `npm run build`.');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));