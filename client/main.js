import './style.css';

let map;

window.initMap = function () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 49.225, lng: -123.010 },
    zoom: 12,
    styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }],
  });
  loadStations();
  startTrainPolling();
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function loadStations() {
  fetch('/api/stations')
    .then(res => res.json())
    .then(stations => {
      const markers = [];
      stations.forEach(station => {
        const marker = new google.maps.Marker({
          position: { lat: station.lat, lng: station.lng },
          map,
          title: station.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: '#003366',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
          },
        });
        markers.push(marker);

        const infoWindow = new google.maps.InfoWindow();
        let clickSeq = 0;

        marker.addListener('click', () => {
          const containerId = `arrivals-${station.id}-${++clickSeq}`;
          infoWindow.setContent(`
            <div style="min-width: 200px; font-family: sans-serif;">
              <h3 style="margin: 0 0 5px 0; font-size: 14px; color: #003366;">
                ${escapeHtml(station.name)}
              </h3>
              <div id="${containerId}"><i>Loading…</i></div>
            </div>
          `);
          infoWindow.open(map, marker);
          fetchArrivals(station.id, containerId);
        });
      });

      drawRoutes(markers);
    })
    .catch(err => console.error('Error loading stations:', err));
}

function drawRoutes(markers) {
  fetch('/api/route-geometry')
    .then(res => res.json())
    .then(({ main, branch }) => {
      // Glow underlay — a thicker, semi-transparent line beneath the main stroke
      // that gives the route a soft edge and reads well against busy map tiles.
      const glowOpts = {
        map,
        geodesic: true,
        strokeColor: '#0033a0',
        strokeOpacity: 0.22,
        strokeWeight: 12,
        zIndex: 1,
      };
      new google.maps.Polyline({ ...glowOpts, path: main });
      new google.maps.Polyline({ ...glowOpts, path: branch });

      // Main stroke — solid, Transit-planner blue.
      const strokeOpts = {
        map,
        geodesic: true,
        strokeColor: '#0033a0',
        strokeOpacity: 0.9,
        strokeWeight: 4,
        zIndex: 2,
      };
      new google.maps.Polyline({ ...strokeOpts, path: main });
      new google.maps.Polyline({ ...strokeOpts, path: branch });

      // Station halos — small white rings drawn under each station marker
      // so stations pop visually against the line.
      markers.forEach(m => {
        new google.maps.Circle({
          map,
          center: m.getPosition(),
          radius: 60,
          strokeColor: '#ffffff',
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: '#ffffff',
          fillOpacity: 0.35,
          zIndex: 3,
        });
      });
    })
    .catch(err => console.error('Error loading route geometry:', err));
}

function fetchArrivals(stationId, containerId) {
  const set = html => {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = html;
  };

  set('<i>Fetching live arrivals…</i>');

  fetch(`/api/arrivals/${encodeURIComponent(stationId)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.arrivals || data.arrivals.length === 0) {
        set('<i>No upcoming arrivals reported.</i>');
        return;
      }
      const items = data.arrivals.slice(0, 4).map(a => {
        const dir = a.headsign
          ? ` <span style="color:#666;">→ ${escapeHtml(a.headsign)}</span>`
          : '';
        return `<li>Due in <strong>${a.minutesAway} min</strong>${dir}</li>`;
      }).join('');
      set(`<ul style="margin: 5px 0 0 -15px; padding-left: 15px; font-size: 13px;">${items}</ul>`);
    })
    .catch(err => {
      console.error('Error fetching arrivals:', err);
      set("<span style='color:red;'>Error loading data</span>");
    });
}

/* ---------------- Train markers ---------------- */

let trainMarkers = [];
let trainPollTimer = null;

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

function clearTrainMarkers() {
  for (const m of trainMarkers) m.setMap(null);
  trainMarkers = [];
}

async function loadTrains() {
  try {
    const res = await fetch('/api/trains');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    clearTrainMarkers();

    for (const t of data.trains || []) {
      const rotation = t.heading || 0;

      const marker = new google.maps.Marker({
        position: { lat: t.lat, lng: t.lng },
        map,
        title: `${t.headsign || 'Expo Line'} — ${t.minutesToNext} min to next station`,
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 4,
          rotation,
          fillColor: '#ff6b00',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 1.5,
        },
        zIndex: 100,
      });

      marker.addListener('click', () => {
        const iw = new google.maps.InfoWindow({
          content: `<div style="font-family: sans-serif; font-size: 13px; min-width: 140px;">
                      <strong>${escapeHtml(t.headsign || 'Expo Line')}</strong><br/>
                      Next station: <strong>${t.minutesToNext} min</strong>
                    </div>`,
        });
        iw.open(map, marker);
      });

      trainMarkers.push(marker);
    }

    const counter = document.getElementById('train-count');
    if (counter) {
      counter.textContent =
        data.trains && data.trains.length > 0
          ? `${data.trains.length} train${data.trains.length === 1 ? '' : 's'} in service`
          : 'No trains currently running';
    }
  } catch (e) {
    console.error('loadTrains:', e);
  }
}

function startTrainPolling() {
  loadTrains();
  if (trainPollTimer) clearInterval(trainPollTimer);
  trainPollTimer = setInterval(loadTrains, 30_000);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(trainPollTimer);
      trainPollTimer = null;
    } else {
      loadTrains();
      trainPollTimer = setInterval(loadTrains, 30_000);
    }
  });
}

document.getElementById('refresh-btn').addEventListener('click', () => window.location.reload());

function initApp() {
  fetch('/api/config')
    .then(res => res.json())
    .then(config => {
      const script = document.createElement('script');
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(config.googleMapsApiKey)}&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = () => window.initMap();
      script.onerror = () => console.error('Failed to load Google Maps JS API');
      document.head.appendChild(script);
    })
    .catch(err => console.error('Error loading config:', err));
}

initApp();