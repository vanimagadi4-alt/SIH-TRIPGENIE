/**
 * TRIP GENIE - OFFLINE MAPS & GPS SIMULATOR (TRIP MAP)
 * Integrates Leaflet.js / OpenStreetMap, Browser Geolocation API,
 * Interactive POI layers (Hospitals, Food, Fuel, Spots), and Offline Pack Downloader.
 */

const TripMapEngine = {
  map: null,
  userMarker: null,
  currentCoords: { lat: 15.5524, lng: 73.7516 }, // Default: Goa Baga Beach
  isRealGps: false,
  offlinePacks: JSON.parse(localStorage.getItem('trip_genie_offline_maps')) || {
    'goa': { name: 'Goa Coastal Pack', size: '45 MB', downloaded: false },
    'manali': { name: 'Manali & Solang Valley', size: '38 MB', downloaded: false },
    'kerala': { name: 'Kerala Backwaters & Munnar', size: '52 MB', downloaded: false }
  },

  // Mock POIs around default/current location
  pointsOfInterest: [
    { name: 'Baga Beach Watersports', type: 'spot', icon: '🏖️', lat: 15.5553, lng: 73.7517, desc: 'Parasailing, Jet ski, Beach Shacks' },
    { name: 'Fort Aguada & Lighthouse', type: 'spot', icon: '🏰', lat: 15.4920, lng: 73.7737, desc: '17th-century Portuguese fortress' },
    { name: 'Coastal Spice Seafood Shack', type: 'food', icon: '🍜', lat: 15.5510, lng: 73.7540, desc: 'Authentic Goan curry & fresh catch' },
    { name: 'Ocean Cafe & Bistro', type: 'food', icon: '☕', lat: 15.5580, lng: 73.7525, desc: 'Woodfired pizza & craft drinks' },
    { name: 'Indian Oil 24x7 Fuel Station', type: 'fuel', icon: '⛽', lat: 15.5420, lng: 73.7650, desc: 'Petrol, Diesel, Air & EV Fast Charger' },
    { name: 'Goa Medical College & Hospital', type: 'hospital', icon: '🏥', lat: 15.4678, lng: 73.8560, desc: '24/7 Emergency Trauma & Ambulance' },
    { name: 'St. Anthony Emergency Clinic', type: 'hospital', icon: '🏥', lat: 15.5480, lng: 73.7610, desc: 'Emergency First Aid & Pharmacy' }
  ],

  init(containerId = 'tripMapContainer') {
    const mapEl = document.getElementById(containerId);
    if (!mapEl) return;

    this.checkGeolocation(() => {
      this.renderMap(containerId);
      this.renderOfflinePacksUI();
    });
  },

  checkGeolocation(callback) {
    const statusLabel = document.getElementById('gpsStatusLabel');
    const coordsLabel = document.getElementById('gpsCoordsLabel');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.currentCoords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          this.isRealGps = true;
          if (statusLabel) statusLabel.innerHTML = '<span class="status-dot-green"></span> Live GPS Active';
          if (coordsLabel) coordsLabel.textContent = `${this.currentCoords.lat.toFixed(4)}° N, ${this.currentCoords.lng.toFixed(4)}° E`;
          callback();
        },
        (err) => {
          console.warn('Geolocation denied or unavailable. Using High-Precision Demo Location.', err);
          this.isRealGps = false;
          if (statusLabel) statusLabel.innerHTML = '<span style="width:8px; height:8px; border-radius:50%; background:var(--accent-amber); display:inline-block;"></span> Demo Location (Goa)';
          if (coordsLabel) coordsLabel.textContent = `${this.currentCoords.lat.toFixed(4)}° N, ${this.currentCoords.lng.toFixed(4)}° E`;
          callback();
        },
        { timeout: 5000, enableHighAccuracy: true }
      );
    } else {
      this.isRealGps = false;
      if (statusLabel) statusLabel.textContent = 'Demo GPS Mode';
      callback();
    }
  },

  renderMap(containerId) {
    if (typeof L === 'undefined') {
      console.error('Leaflet.js not loaded');
      return;
    }

    // Initialize Leaflet Map
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map(containerId, {
      center: [this.currentCoords.lat, this.currentCoords.lng],
      zoom: 13,
      zoomControl: false
    });

    // Add Custom Dark / Light OpenStreetMap Tiles
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const tileUrl = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    L.tileLayer(tileUrl, {
      attribution: '© OpenStreetMap contributors | TRIP GENIE Maps',
      maxZoom: 19
    }).addTo(this.map);

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // User Location Marker with Pulse Wave
    const userIcon = L.divIcon({
      className: 'user-location-marker',
      html: `
        <div style="position:relative; width:24px; height:24px;">
          <div style="position:absolute; width:100%; height:100%; background:var(--accent-sky); border-radius:50%; border:3px solid #fff; box-shadow:0 0 15px var(--accent-sky); z-index:2;"></div>
          <div style="position:absolute; top:-10px; left:-10px; width:44px; height:44px; background:rgba(14, 165, 233, 0.35); border-radius:50%; animation:gpsPulse 2s infinite ease-out; z-index:1;"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    this.userMarker = L.marker([this.currentCoords.lat, this.currentCoords.lng], { icon: userIcon })
      .addTo(this.map)
      .bindPopup('<strong>📍 You are here</strong><br/>' + (this.isRealGps ? 'Live Browser Location' : 'Demo Location: Baga, Goa'))
      .openPopup();

    // Render POI markers
    this.renderPOIs('all');
  },

  renderPOIs(filterType = 'all') {
    if (!this.map) return;

    this.pointsOfInterest.forEach(poi => {
      if (filterType !== 'all' && poi.type !== filterType) return;

      const poiIcon = L.divIcon({
        className: 'poi-custom-marker',
        html: `
          <div style="background:var(--bg-surface); border:2px solid var(--primary-purple); border-radius:50%; width:34px; height:34px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
            ${poi.icon}
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      L.marker([poi.lat, poi.lng], { icon: poiIcon })
        .addTo(this.map)
        .bindPopup(`
          <div style="font-family:var(--font-main); padding:4px;">
            <div style="font-weight:700; font-size:0.95rem; color:#0F172A;">${poi.icon} ${poi.name}</div>
            <div style="font-size:0.8rem; color:#475569; margin:4px 0 8px;">${poi.desc}</div>
            <button onclick="TripMapEngine.startNavigation('${poi.name}', ${poi.lat}, ${poi.lng})" style="background:#7C3AED; color:#fff; border:none; padding:4px 10px; border-radius:6px; font-size:0.78rem; font-weight:600; cursor:pointer; width:100%;">
              🧭 Navigate Here
            </button>
          </div>
        `);
    });
  },

  filterLayer(type) {
    if (!this.map) return;
    this.renderMap('tripMapContainer');
    this.renderPOIs(type);
    if (window.showToast) window.showToast(`Filtering map by: ${type.toUpperCase()}`, 'info');
  },

  centerUserLocation() {
    if (!this.map) return;
    this.map.flyTo([this.currentCoords.lat, this.currentCoords.lng], 15, { duration: 1.5 });
  },

  startNavigation(destinationName, destLat, destLng) {
    if (!this.map) return;

    // Draw simulated route line
    const routeCoords = [
      [this.currentCoords.lat, this.currentCoords.lng],
      [(this.currentCoords.lat + destLat) / 2 + 0.002, (this.currentCoords.lng + destLng) / 2 - 0.001],
      [destLat, destLng]
    ];

    const polyline = L.polyline(routeCoords, {
      color: '#7C3AED',
      weight: 5,
      opacity: 0.85,
      dashArray: '10, 10',
      lineCap: 'round'
    }).addTo(this.map);

    this.map.fitBounds(polyline.getBounds(), { padding: [50, 50] });

    if (window.showToast) {
      window.showToast(`Navigating to ${destinationName} • Est. Time: 12 mins (4.2 km)`, 'success', '🧭');
    }
  },

  // Offline Pack Downloader Simulator
  downloadPack(packId) {
    const pack = this.offlinePacks[packId];
    if (!pack) return;

    const progressEl = document.getElementById(`progress-${packId}`);
    const barEl = document.getElementById(`bar-${packId}`);
    const btnEl = document.getElementById(`btn-${packId}`);

    if (btnEl) btnEl.disabled = true;
    if (progressEl) progressEl.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (barEl) barEl.style.width = `${Math.min(progress, 100)}%`;

      if (progress >= 100) {
        clearInterval(interval);
        pack.downloaded = true;
        localStorage.setItem('trip_genie_offline_maps', JSON.stringify(this.offlinePacks));
        if (btnEl) {
          btnEl.disabled = false;
          btnEl.className = 'btn btn-sm btn-success';
          btnEl.textContent = '✓ Downloaded (Ready Offline)';
        }
        if (window.showToast) {
          window.showToast(`${pack.name} is now saved for 100% Offline GPS Navigation!`, 'success', '💾');
        }
      }
    }, 200);
  },

  renderOfflinePacksUI() {
    const container = document.getElementById('offlinePacksList');
    if (!container) return;

    container.innerHTML = '';
    Object.keys(this.offlinePacks).forEach(key => {
      const pack = this.offlinePacks[key];
      const div = document.createElement('div');
      div.className = 'glass-card';
      div.style.cssText = 'padding:1rem; margin-bottom:0.75rem;';
      div.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
          <div>
            <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">${pack.name}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">${pack.size} • 3D Terrain & Street Data</div>
          </div>
          <button id="btn-${key}" class="btn btn-sm ${pack.downloaded ? 'btn-success' : 'btn-secondary'}" onclick="TripMapEngine.downloadPack('${key}')">
            ${pack.downloaded ? '✓ Saved Offline' : '💾 Download Offline'}
          </button>
        </div>
        <div id="progress-${key}" style="display:none; width:100%; height:6px; background:var(--bg-body); border-radius:10px; overflow:hidden; margin-top:8px;">
          <div id="bar-${key}" style="width:0%; height:100%; background:var(--primary-purple); transition:width 0.2s;"></div>
        </div>
      `;
      container.appendChild(div);
    });
  }
};

window.TripMapEngine = TripMapEngine;
