import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outDir = 'docs/images';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function renderSvgToPng(svgString, outputPath, width = 1200) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: width },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Arial, sans-serif'
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`✓ Rendered ${outputPath} (${pngBuffer.length} bytes, ${width}px wide)`);
}

// ----------------------------------------------------
// 1. CAROUSEL SLIDE 1: ECOSYSTEM HERO & OVERVIEW
// ----------------------------------------------------
const slide1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgLight1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ecfdf5"/>
    </linearGradient>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(5, 150, 105, 0.08)"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="1200" rx="24" fill="url(#bgLight1)" stroke="rgba(5, 150, 105, 0.2)" stroke-width="3"/>

  <!-- Header Section -->
  <g transform="translate(60, 60)">
    <!-- Brand Pill -->
    <rect width="320" height="42" rx="21" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)"/>
    <text x="160" y="27" text-anchor="middle" fill="#047857" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🌱 GREENSCORE SUSTAINABILITY OS</text>

    <!-- Slide Index Badge -->
    <rect x="940" y="0" width="140" height="42" rx="21" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="1010" y="27" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="15" font-weight="bold">01 / 05 • OVERVIEW</text>

    <!-- Main Title -->
    <text x="0" y="115" fill="#0f172a" font-family="Arial, sans-serif" font-size="44" font-weight="bold">The Next-Gen Sustainability OS &amp; Ecosystem</text>
    <text x="0" y="160" fill="#475569" font-family="Arial, sans-serif" font-size="20">A Unified 15-in-1 Platform Bridging IoT, Campus, Enterprise ESG &amp; Climate AI</text>
  </g>

  <!-- Central Score Showcase Card -->
  <g transform="translate(60, 260)">
    <rect width="1080" height="230" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(16, 185, 129, 0.25)"/>
    
    <!-- Score Gauge Visual -->
    <g transform="translate(60, 40)">
      <circle cx="75" cy="75" r="65" fill="none" stroke="#e2e8f0" stroke-width="12"/>
      <circle cx="75" cy="75" r="65" fill="none" stroke="#059669" stroke-width="12" stroke-dasharray="408" stroke-dashoffset="55" stroke-linecap="round" transform="rotate(-90 75 75)"/>
      <text x="75" y="70" text-anchor="middle" fill="#0f172a" font-family="Arial, sans-serif" font-size="34" font-weight="bold">86.4</text>
      <text x="75" y="98" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="14" font-weight="bold">GRADE A+ (OPTIMAL)</text>
    </g>

    <!-- Score Engine Description -->
    <g transform="translate(250, 45)">
      <text x="0" y="25" fill="#047857" font-family="Arial, sans-serif" font-size="22" font-weight="bold">Dynamic Multi-Dimensional GreenScore Index</text>
      <text x="0" y="58" fill="#475569" font-family="Arial, sans-serif" font-size="15">Weighted real-time aggregate scoring across 7 environmental dimensions:</text>
      <text x="0" y="88" fill="#0f172a" font-family="Arial, sans-serif" font-size="14" font-weight="bold">⚡ Energy (30%) • 💧 Water (20%) • ♻️ Waste (15%) • 🚗 Mobility (15%) • ☀️ Solar (10%) • 📄 Paper (5%) • 💨 AQI (5%)</text>
      <rect x="0" y="110" width="770" height="34" rx="8" fill="rgba(16, 185, 129, 0.1)"/>
      <text x="15" y="132" fill="#059669" font-family="Arial, sans-serif" font-size="13" font-weight="bold">✨ Real-time telemetry ingestion from physical ESP32 IoT sensors &amp; enterprise data feeds</text>
    </g>
  </g>

  <!-- 4 Core Pillars Grid -->
  <g transform="translate(60, 520)">
    <!-- Pillar 1: Smart Home -->
    <g transform="translate(0, 0)">
      <rect width="250" height="260" rx="16" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(5, 150, 105, 0.15)"/>
      <rect x="20" y="20" width="48" height="48" rx="12" fill="#f0fdf4"/>
      <text x="44" y="52" text-anchor="middle" font-size="24">🏠</text>
      <text x="20" y="100" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Smart Home IoT</text>
      <text x="20" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Live solar inverter telemetry (4.8kW), smart AC load management &amp; AI energy nudges.</text>
      <rect x="20" y="205" width="210" height="32" rx="6" fill="#f0fdf4"/>
      <text x="125" y="226" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">18.2 kWh Generated</text>
    </g>

    <!-- Pillar 2: Campus Leaderboard -->
    <g transform="translate(276, 0)">
      <rect width="250" height="260" rx="16" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(8, 145, 178, 0.15)"/>
      <rect x="20" y="20" width="48" height="48" rx="12" fill="#ecfeff"/>
      <text x="44" y="52" text-anchor="middle" font-size="24">🎓</text>
      <text x="20" y="100" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Campus Ranking</text>
      <text x="20" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Inter-department sustainability leaderboards, paperless drives &amp; solar microgrids.</text>
      <rect x="20" y="205" width="210" height="32" rx="6" fill="#ecfeff"/>
      <text x="125" y="226" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">CS Dept #1 (91.2 Pts)</text>
    </g>

    <!-- Pillar 3: Enterprise ESG -->
    <g transform="translate(552, 0)">
      <rect width="250" height="260" rx="16" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(5, 150, 105, 0.15)"/>
      <rect x="20" y="20" width="48" height="48" rx="12" fill="#f0fdf4"/>
      <text x="44" y="52" text-anchor="middle" font-size="24">🏢</text>
      <text x="20" y="100" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Enterprise ESG</text>
      <text x="20" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="13">GHG Protocol Scope 1, 2, 3 carbon accounting &amp; automated GRI / ISSB audit reporting.</text>
      <rect x="20" y="205" width="210" height="32" rx="6" fill="#f0fdf4"/>
      <text x="125" y="226" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">105.2 Tons Offset</text>
    </g>

    <!-- Pillar 4: Municipal City & NFT -->
    <g transform="translate(828, 0)">
      <rect width="250" height="260" rx="16" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(245, 158, 11, 0.15)"/>
      <rect x="20" y="20" width="48" height="48" rx="12" fill="#fef3c7"/>
      <text x="44" y="52" text-anchor="middle" font-size="24">🏙️</text>
      <text x="20" y="100" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">City Grid &amp; NFT</text>
      <text x="20" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Citywide air quality AQI 42, 184 EV hubs &amp; Verra cryptographic carbon credit minting.</text>
      <rect x="20" y="205" width="210" height="32" rx="6" fill="#fef3c7"/>
      <text x="125" y="226" text-anchor="middle" fill="#b45309" font-family="Arial, sans-serif" font-size="12" font-weight="bold">0x7f9a... NFT Ledger</text>
    </g>
  </g>

  <!-- Innovation Highlight Banner -->
  <g transform="translate(60, 810)">
    <rect width="1080" height="230" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="35" y="45" fill="#059669" font-family="Arial, sans-serif" font-size="20" font-weight="bold">⚡ NEXT-GEN INNOVATION SUITE (15 MODULES)</text>
    <line x1="35" y1="65" x2="1045" y2="65" stroke="rgba(0,0,0,0.06)"/>

    <g transform="translate(35, 90)">
      <!-- Module 1 -->
      <rect x="0" y="0" width="320" height="110" rx="10" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
      <text x="15" y="28" fill="#047857" font-family="Arial, sans-serif" font-size="14" font-weight="bold">🔮 2030 Climate Scenario AI</text>
      <text x="15" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="12">Interactive Earth policy simulator</text>
      <text x="15" y="80" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">+1.4°C Target • $1.4M Saved</text>

      <!-- Module 2 -->
      <rect x="345" y="0" width="320" height="110" rx="10" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.2)"/>
      <text x="360" y="28" fill="#0891b2" font-family="Arial, sans-serif" font-size="14" font-weight="bold">👁️ AR Spatial Thermal Scanner</text>
      <text x="360" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="12">HTML5 Canvas Thermal Gradient Stream</text>
      <text x="360" y="80" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Instant AC Door Leak Detection</text>

      <!-- Module 3 -->
      <rect x="690" y="0" width="320" height="110" rx="10" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.2)"/>
      <text x="705" y="28" fill="#b45309" font-family="Arial, sans-serif" font-size="14" font-weight="bold">🎙️ Voice AI &amp; Dev API Sandbox</text>
      <text x="705" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="12">Hands-free speech synthesis + REST API</text>
      <text x="705" y="80" fill="#b45309" font-family="Arial, sans-serif" font-size="12" font-weight="bold">gs_live_... Key &amp; Swagger Runner</text>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(600, 1120)" text-anchor="middle">
    <text fill="#64748b" font-family="Arial, sans-serif" font-size="15" font-weight="bold">
      GreenScore Sustainability OS • Built by Vijay Mahes • Swipe to explore modules 👉
    </text>
  </g>
</svg>`;

// ----------------------------------------------------
// 2. CAROUSEL SLIDE 2: SMART HOME & IoT TELEMETRY
// ----------------------------------------------------
const slide2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgLight2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ecfdf5"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(5, 150, 105, 0.08)"/>
    </filter>
  </defs>

  <rect width="1200" height="1200" rx="24" fill="url(#bgLight2)" stroke="rgba(5, 150, 105, 0.2)" stroke-width="3"/>

  <!-- Header -->
  <g transform="translate(60, 60)">
    <rect width="280" height="42" rx="21" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)"/>
    <text x="140" y="27" text-anchor="middle" fill="#047857" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🏠 SMART HOME &amp; IoT</text>

    <rect x="940" y="0" width="140" height="42" rx="21" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="1010" y="27" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="15" font-weight="bold">02 / 05 • IoT GRID</text>

    <text x="0" y="115" fill="#0f172a" font-family="Arial, sans-serif" font-size="44" font-weight="bold">Real-Time ESP32 IoT &amp; Smart Energy Grid</text>
    <text x="0" y="160" fill="#475569" font-family="Arial, sans-serif" font-size="20">Continuous hardware telemetry stream ingesting live inverter and sensor metrics</text>
  </g>

  <!-- 3 IoT Telemetry Cards -->
  <g transform="translate(60, 260)">
    <!-- Card 1: Solar Inverter -->
    <g transform="translate(0, 0)">
      <rect width="340" height="360" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(5, 150, 105, 0.2)"/>
      <rect x="25" y="25" width="50" height="50" rx="12" fill="#f0fdf4"/>
      <text x="50" y="58" text-anchor="middle" font-size="26">☀️</text>
      <text x="90" y="48" fill="#047857" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Solar Inverter 5kW</text>
      <text x="90" y="70" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Active Roof Micro-Array</text>

      <line x1="25" y1="95" x2="315" y2="95" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="145" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Real-Time Output:</text>
      <text x="315" y="145" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="24" font-weight="bold">4.8 kW</text>

      <text x="25" y="195" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Daily Yield:</text>
      <text x="315" y="195" text-anchor="end" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">18.2 kWh</text>

      <text x="25" y="245" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Grid Export:</text>
      <text x="315" y="245" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="18" font-weight="bold">+6.4 kWh</text>

      <rect x="25" y="285" width="290" height="48" rx="10" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
      <text x="170" y="315" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="13" font-weight="bold">⚡ Self-Sufficiency: 82% Optimal</text>
    </g>

    <!-- Card 2: Smart AC Load -->
    <g transform="translate(370, 0)">
      <rect width="340" height="360" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(8, 145, 178, 0.2)"/>
      <rect x="25" y="25" width="50" height="50" rx="12" fill="#ecfeff"/>
      <text x="50" y="58" text-anchor="middle" font-size="26">❄️</text>
      <text x="90" y="48" fill="#0891b2" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Smart AC System</text>
      <text x="90" y="70" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Living Room Inverter Unit</text>

      <line x1="25" y1="95" x2="315" y2="95" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="145" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Current Draw:</text>
      <text x="315" y="145" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="24" font-weight="bold">1.4 kW</text>

      <text x="25" y="195" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Target Temp:</text>
      <text x="315" y="195" text-anchor="end" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">24°C (Eco-Mode)</text>

      <text x="25" y="245" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Duty Cycle:</text>
      <text x="315" y="245" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="18" font-weight="bold">42% Efficient</text>

      <rect x="25" y="285" width="290" height="48" rx="10" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.2)"/>
      <text x="170" y="315" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="13" font-weight="bold">🌡️ Auto-Modulation Active</text>
    </g>

    <!-- Card 3: Water & Air Quality -->
    <g transform="translate(740, 0)">
      <rect width="340" height="360" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(245, 158, 11, 0.2)"/>
      <rect x="25" y="25" width="50" height="50" rx="12" fill="#fef3c7"/>
      <text x="50" y="58" text-anchor="middle" font-size="26">💧</text>
      <text x="90" y="48" fill="#b45309" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Water &amp; Air Sensing</text>
      <text x="90" y="70" fill="#64748b" font-family="Arial, sans-serif" font-size="13">YF-S201 &amp; MQ-135 Sensors</text>

      <line x1="25" y1="95" x2="315" y2="95" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="145" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Water Flow Rate:</text>
      <text x="315" y="145" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="24" font-weight="bold">4.2 L/min</text>

      <text x="25" y="195" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Daily Water Usage:</text>
      <text x="315" y="195" text-anchor="end" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">128 Liters (Optimal)</text>

      <text x="25" y="245" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Indoor AQI:</text>
      <text x="315" y="245" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="18" font-weight="bold">28 (Pure / Clean)</text>

      <rect x="25" y="285" width="290" height="48" rx="10" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.2)"/>
      <text x="170" y="315" text-anchor="middle" fill="#b45309" font-family="Arial, sans-serif" font-size="13" font-weight="bold">🚰 Leak Detection: 0 Leaks</text>
    </g>
  </g>

  <!-- AI Smart Nudge & Hardware Architecture -->
  <g transform="translate(60, 660)">
    <rect width="1080" height="380" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(16, 185, 129, 0.2)"/>
    
    <!-- AI Nudge Banner -->
    <g transform="translate(40, 35)">
      <rect width="1000" height="85" rx="14" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.3)"/>
      <text x="30" y="36" fill="#b45309" font-family="Arial, sans-serif" font-size="16" font-weight="bold">🧠 AI Real-Time Behavioral Nudge System</text>
      <text x="30" y="62" fill="#475569" font-family="Arial, sans-serif" font-size="14">
        "Raising AC thermostat by +1°C during peak solar grid hours cuts ~4.2 kWh/day and boosts GreenScore by +2.4 points."
      </text>
    </g>

    <!-- Physical Hardware Stream Box -->
    <g transform="translate(40, 150)">
      <text x="0" y="24" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">📡 Physical ESP32 Hardware Integration Pipeline</text>
      <text x="0" y="52" fill="#64748b" font-family="Arial, sans-serif" font-size="14">
        Direct telemetry ingestion via WebSocket and MQTT streams simulating micro-controller hardware:
      </text>

      <g transform="translate(0, 80)">
        <rect x="0" y="0" width="230" height="80" rx="10" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
        <text x="15" y="28" fill="#047857" font-family="Arial, sans-serif" font-size="13" font-weight="bold">ACS712 Current Sensor</text>
        <text x="15" y="55" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Hall-effect electrical load</text>

        <rect x="255" y="0" width="230" height="80" rx="10" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.2)"/>
        <text x="270" y="28" fill="#0891b2" font-family="Arial, sans-serif" font-size="13" font-weight="bold">YF-S201 Water Flow</text>
        <text x="270" y="55" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Pulse-based turbine rate</text>

        <rect x="510" y="0" width="230" height="80" rx="10" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.2)"/>
        <text x="525" y="28" fill="#b45309" font-family="Arial, sans-serif" font-size="13" font-weight="bold">MQ-135 Gas &amp; AQI</text>
        <text x="525" y="55" fill="#64748b" font-family="Arial, sans-serif" font-size="12">CO2, NH3 &amp; smoke index</text>

        <rect x="765" y="0" width="235" height="80" rx="10" fill="#f8fafc" stroke="rgba(0, 0, 0, 0.1)"/>
        <text x="780" y="28" fill="#334155" font-family="Arial, sans-serif" font-size="13" font-weight="bold">ESP32 Core Micro</text>
        <text x="780" y="55" fill="#64748b" font-family="Arial, sans-serif" font-size="12">WiFi &amp; TLS secure socket</text>
      </g>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(600, 1120)" text-anchor="middle">
    <text fill="#64748b" font-family="Arial, sans-serif" font-size="15" font-weight="bold">
      GreenScore Sustainability OS • Slide 02 of 05 • Swipe to see Enterprise ESG 👉
    </text>
  </g>
</svg>`;

// ----------------------------------------------------
// 3. CAROUSEL SLIDE 3: ENTERPRISE ESG & GRI REPORTING
// ----------------------------------------------------
const slide3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgLight3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ecfdf5"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(5, 150, 105, 0.08)"/>
    </filter>
  </defs>

  <rect width="1200" height="1200" rx="24" fill="url(#bgLight3)" stroke="rgba(5, 150, 105, 0.2)" stroke-width="3"/>

  <!-- Header -->
  <g transform="translate(60, 60)">
    <rect width="320" height="42" rx="21" fill="rgba(8, 145, 178, 0.12)" stroke="rgba(8, 145, 178, 0.3)"/>
    <text x="160" y="27" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🏢 ENTERPRISE ESG DECARBONIZATION</text>

    <rect x="940" y="0" width="140" height="42" rx="21" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="1010" y="27" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="15" font-weight="bold">03 / 05 • ESG AUDIT</text>

    <text x="0" y="115" fill="#0f172a" font-family="Arial, sans-serif" font-size="44" font-weight="bold">GHG Protocol Scope 1, 2, 3 &amp; Automated Audit</text>
    <text x="0" y="160" fill="#475569" font-family="Arial, sans-serif" font-size="20">Corporate carbon accounting compliant with GRI, ISSB and CSRD frameworks</text>
  </g>

  <!-- 3 Scope Breakdown Cards -->
  <g transform="translate(60, 260)">
    <!-- Scope 1 -->
    <g transform="translate(0, 0)">
      <rect width="340" height="260" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(5, 150, 105, 0.2)"/>
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#f0fdf4"/>
      <text x="47" y="54" text-anchor="middle" font-size="22">🏭</text>
      <text x="85" y="45" fill="#047857" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Scope 1 (Direct)</text>
      <text x="85" y="66" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Fleet &amp; On-Site Combustion</text>
      <line x1="25" y1="85" x2="315" y2="85" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Carbon Emission:</text>
      <text x="315" y="130" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="24" font-weight="bold">14.2 Tons CO2e</text>

      <text x="25" y="170" fill="#64748b" font-family="Arial, sans-serif" font-size="14">YoY Reduction:</text>
      <text x="315" y="170" text-anchor="end" fill="#047857" font-family="Arial, sans-serif" font-size="16" font-weight="bold">📉 -12.4% Cut</text>

      <rect x="25" y="200" width="290" height="38" rx="8" fill="#f0fdf4"/>
      <text x="170" y="224" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Target: Net-Zero by 2030</text>
    </g>

    <!-- Scope 2 -->
    <g transform="translate(370, 0)">
      <rect width="340" height="260" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(8, 145, 178, 0.2)"/>
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#ecfeff"/>
      <text x="47" y="54" text-anchor="middle" font-size="22">⚡</text>
      <text x="85" y="45" fill="#0891b2" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Scope 2 (Electricity)</text>
      <text x="85" y="66" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Purchased Power &amp; Cooling</text>
      <line x1="25" y1="85" x2="315" y2="85" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Carbon Emission:</text>
      <text x="315" y="130" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="24" font-weight="bold">38.6 Tons CO2e</text>

      <text x="25" y="170" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Renewable Share:</text>
      <text x="315" y="170" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="16" font-weight="bold">☀️ 64% Green Power</text>

      <rect x="25" y="200" width="290" height="38" rx="8" fill="#ecfeff"/>
      <text x="170" y="224" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">100% PPA Agreement In Place</text>
    </g>

    <!-- Scope 3 -->
    <g transform="translate(740, 0)">
      <rect width="340" height="260" rx="18" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(245, 158, 11, 0.2)"/>
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#fef3c7"/>
      <text x="47" y="54" text-anchor="middle" font-size="22">📦</text>
      <text x="85" y="45" fill="#b45309" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Scope 3 (Supply Chain)</text>
      <text x="85" y="66" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Procurement &amp; Business Travel</text>
      <line x1="25" y1="85" x2="315" y2="85" stroke="rgba(0,0,0,0.06)"/>

      <text x="25" y="130" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Carbon Emission:</text>
      <text x="315" y="130" text-anchor="end" fill="#b45309" font-family="Arial, sans-serif" font-size="24" font-weight="bold">52.4 Tons CO2e</text>

      <text x="25" y="170" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Vendor Compliance:</text>
      <text x="315" y="170" text-anchor="end" fill="#b45309" font-family="Arial, sans-serif" font-size="16" font-weight="bold">📋 88% Audited</text>

      <rect x="25" y="200" width="290" height="38" rx="8" fill="#fef3c7"/>
      <text x="170" y="224" text-anchor="middle" fill="#b45309" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Tier-1 Supply Decarbonization</text>
    </g>
  </g>

  <!-- Automated ESG Disclosure Audit Section -->
  <g transform="translate(60, 560)">
    <rect width="1080" height="480" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(8, 145, 178, 0.25)"/>

    <g transform="translate(45, 40)">
      <text x="0" y="25" fill="#0891b2" font-family="Arial, sans-serif" font-size="22" font-weight="bold">📄 Automated GRI &amp; ISSB Audit Disclosure Engine</text>
      <text x="0" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="15">Instant one-click corporate sustainability report generator producing certified audit manifests</text>

      <g transform="translate(0, 85)">
        <!-- Left Panel: Audit Manifest -->
        <rect width="470" height="280" rx="14" fill="#f8fafc" stroke="rgba(0,0,0,0.08)"/>
        <text x="20" y="35" fill="#0f172a" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Corporate Disclosure Summary</text>
        <line x1="20" y1="50" x2="450" y2="50" stroke="rgba(0,0,0,0.06)"/>

        <text x="20" y="85" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Reporting Organization:</text>
        <text x="450" y="85" text-anchor="end" fill="#0f172a" font-family="Arial, sans-serif" font-size="13" font-weight="bold">Apex Global Technologies Ltd</text>

        <text x="20" y="125" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Reporting Standards:</text>
        <text x="450" y="125" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="13" font-weight="bold">GRI 302, 305 &amp; ISSB S2</text>

        <text x="20" y="165" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Total Verified Offsets:</text>
        <text x="450" y="165" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="13" font-weight="bold">105.2 Tons CO2e</text>

        <text x="20" y="205" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Cryptographic Audit Hash:</text>
        <text x="450" y="205" text-anchor="end" fill="#b45309" font-family="Arial, sans-serif" font-size="13" font-weight="bold">0x8f2d...c94a</text>

        <rect x="20" y="230" width="430" height="34" rx="8" fill="#f0fdf4"/>
        <text x="235" y="252" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">✅ Verified Ready for External Assurance</text>
      </g>

      <g transform="translate(510, 85)">
        <!-- Right Panel: Department Decarbonization Ranking -->
        <rect width="480" height="280" rx="14" fill="#f8fafc" stroke="rgba(0,0,0,0.08)"/>
        <text x="20" y="35" fill="#0f172a" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Department Decarbonization Matrix</text>
        <line x1="20" y1="50" x2="460" y2="50" stroke="rgba(0,0,0,0.06)"/>

        <!-- Dept 1 -->
        <text x="20" y="85" fill="#0f172a" font-family="Arial, sans-serif" font-size="14" font-weight="bold">1. Engineering &amp; IT Labs</text>
        <text x="460" y="85" text-anchor="end" fill="#059669" font-family="Arial, sans-serif" font-size="14" font-weight="bold">92.4 Score (Top)</text>
        <rect x="20" y="98" width="440" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="20" y="98" width="406" height="8" rx="4" fill="#059669"/>

        <!-- Dept 2 -->
        <text x="20" y="140" fill="#0f172a" font-family="Arial, sans-serif" font-size="14" font-weight="bold">2. Corporate HQ &amp; Operations</text>
        <text x="460" y="140" text-anchor="end" fill="#0891b2" font-family="Arial, sans-serif" font-size="14" font-weight="bold">86.8 Score</text>
        <rect x="20" y="153" width="440" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="20" y="153" width="382" height="8" rx="4" fill="#0891b2"/>

        <!-- Dept 3 -->
        <text x="20" y="195" fill="#0f172a" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3. Logistics &amp; Distribution</text>
        <text x="460" y="195" text-anchor="end" fill="#b45309" font-family="Arial, sans-serif" font-size="14" font-weight="bold">78.2 Score</text>
        <rect x="20" y="208" width="440" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="20" y="208" width="344" height="8" rx="4" fill="#b45309"/>

        <rect x="20" y="232" width="440" height="32" rx="6" fill="#ecfeff"/>
        <text x="240" y="253" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">📥 Export Options: JSON Disclosure • CSV • Printable PDF</text>
      </g>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(600, 1120)" text-anchor="middle">
    <text fill="#64748b" font-family="Arial, sans-serif" font-size="15" font-weight="bold">
      GreenScore Sustainability OS • Slide 03 of 05 • Swipe to see Climate AI &amp; AR 👉
    </text>
  </g>
</svg>`;

// ----------------------------------------------------
// 4. CAROUSEL SLIDE 4: CLIMATE AI 2030, AR SPATIAL & NFT
// ----------------------------------------------------
const slide4Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgLight4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ecfdf5"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(5, 150, 105, 0.08)"/>
    </filter>
  </defs>

  <rect width="1200" height="1200" rx="24" fill="url(#bgLight4)" stroke="rgba(5, 150, 105, 0.2)" stroke-width="3"/>

  <!-- Header -->
  <g transform="translate(60, 60)">
    <rect width="330" height="42" rx="21" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)"/>
    <text x="165" y="27" text-anchor="middle" fill="#047857" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🔮 CLIMATE AI, AR SPATIAL &amp; NFT</text>

    <rect x="940" y="0" width="140" height="42" rx="21" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="1010" y="27" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="15" font-weight="bold">04 / 05 • INNOVATION</text>

    <text x="0" y="115" fill="#0f172a" font-family="Arial, sans-serif" font-size="44" font-weight="bold">2030 Climate AI, Spatial AR &amp; Web3 Ledger</text>
    <text x="0" y="160" fill="#475569" font-family="Arial, sans-serif" font-size="20">Next-generation intelligence tools for predictive simulation and spatial energy auditing</text>
  </g>

  <!-- 3 Big Innovation Cards -->
  <g transform="translate(60, 240)">
    <!-- Innovation 1: 2030 Climate Scenario AI -->
    <g transform="translate(0, 0)">
      <rect width="1080" height="240" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(5, 150, 105, 0.2)"/>
      <rect x="30" y="30" width="50" height="50" rx="12" fill="#f0fdf4"/>
      <text x="55" y="63" text-anchor="middle" font-size="26">🔮</text>
      
      <text x="95" y="52" fill="#047857" font-family="Arial, sans-serif" font-size="20" font-weight="bold">2030 Climate Scenario AI Engine</text>
      <text x="95" y="74" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Interactive Policy &amp; Temperature Anomaly Simulator</text>

      <g transform="translate(30, 105)">
        <rect width="310" height="105" rx="12" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.15)"/>
        <text x="15" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Renewable Grid Share: 65%</text>
        <text x="15" y="58" fill="#059669" font-family="Arial, sans-serif" font-size="20" font-weight="bold">+1.4°C Target</text>
        <text x="15" y="88" fill="#047857" font-family="Arial, sans-serif" font-size="12" font-weight="bold">✅ Paris Accord Compliant</text>

        <rect x="350" y="0" width="310" height="105" rx="12" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.15)"/>
        <text x="365" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">EV Penetration: 50%</text>
        <text x="365" y="58" fill="#0891b2" font-family="Arial, sans-serif" font-size="20" font-weight="bold">-420 Mt CO2e</text>
        <text x="365" y="88" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">📉 Transportation Decarbonized</text>

        <rect x="700" y="0" width="320" height="105" rx="12" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.15)"/>
        <text x="715" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Economic Dividends</text>
        <text x="715" y="58" fill="#b45309" font-family="Arial, sans-serif" font-size="20" font-weight="bold">$1.4M / Year</text>
        <text x="715" y="88" fill="#b45309" font-family="Arial, sans-serif" font-size="12" font-weight="bold">💰 Net Energy Efficiency Gain</text>
      </g>
    </g>

    <!-- Innovation 2: AR Spatial Thermal Scanner -->
    <g transform="translate(0, 270)">
      <rect width="1080" height="240" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(8, 145, 178, 0.2)"/>
      <rect x="30" y="30" width="50" height="50" rx="12" fill="#ecfeff"/>
      <text x="55" y="63" text-anchor="middle" font-size="26">👁️</text>
      
      <text x="95" y="52" fill="#0891b2" font-family="Arial, sans-serif" font-size="20" font-weight="bold">AR Spatial Thermal Scanner &amp; Leak Detector</text>
      <text x="95" y="74" fill="#64748b" font-family="Arial, sans-serif" font-size="13">HTML5 Canvas Real-Time Thermal Heatmap Camera</text>

      <g transform="translate(30, 105)">
        <rect width="310" height="105" rx="12" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.15)"/>
        <text x="15" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Door Seal Insulation Leak:</text>
        <text x="15" y="58" fill="#0891b2" font-family="Arial, sans-serif" font-size="18" font-weight="bold">-4.2 kWh Lost / Day</text>
        <text x="15" y="88" fill="#0891b2" font-family="Arial, sans-serif" font-size="12" font-weight="bold">🚨 Seal Degradation Detected</text>

        <rect x="350" y="0" width="310" height="105" rx="12" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.15)"/>
        <text x="365" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Solar Rooftop Irradiance:</text>
        <text x="365" y="58" fill="#059669" font-family="Arial, sans-serif" font-size="18" font-weight="bold">98% Peak Yield</text>
        <text x="365" y="88" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">☀️ Zero Shading Detected</text>

        <rect x="700" y="0" width="320" height="105" rx="12" fill="#f8fafc" stroke="rgba(0, 0, 0, 0.08)"/>
        <text x="715" y="28" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Indoor Air Density:</text>
        <text x="715" y="58" fill="#0f172a" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Optimal Circulation</text>
        <text x="715" y="88" fill="#64748b" font-family="Arial, sans-serif" font-size="12" font-weight="bold">💨 1.2 m/s Airflow</text>
      </g>
    </g>

    <!-- Innovation 3: Carbon Credit NFT & Computer Vision -->
    <g transform="translate(0, 540)">
      <rect width="1080" height="260" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(245, 158, 11, 0.2)"/>
      <rect x="30" y="30" width="50" height="50" rx="12" fill="#fef3c7"/>
      <text x="55" y="63" text-anchor="middle" font-size="26">💎</text>
      
      <text x="95" y="52" fill="#b45309" font-family="Arial, sans-serif" font-size="20" font-weight="bold">Cryptographic Carbon NFT Ledger &amp; Vision AI</text>
      <text x="95" y="74" fill="#64748b" font-family="Arial, sans-serif" font-size="13">Verra VCS Certified On-Chain Minting &amp; Computer Vision Recyclable Classifier</text>

      <g transform="translate(30, 105)">
        <rect width="500" height="125" rx="12" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.2)"/>
        <text x="20" y="30" fill="#b45309" font-family="Arial, sans-serif" font-size="14" font-weight="bold">💎 Verra Carbon NFT Minting</text>
        <text x="20" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="12">Cryptographic Hash: 0x7f9a8b1c4e2d3f0a...</text>
        <text x="20" y="80" fill="#b45309" font-family="Arial, sans-serif" font-size="14" font-weight="bold">100.00 Credits Minted (Verified)</text>
        <text x="20" y="105" fill="#047857" font-family="Arial, sans-serif" font-size="12" font-weight="bold">✅ Immutable Double-Spend Proof</text>

        <rect x="525" y="0" width="495" height="125" rx="12" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
        <text x="545" y="30" fill="#047857" font-family="Arial, sans-serif" font-size="14" font-weight="bold">👁️ Computer Vision Waste Classifier</text>
        <text x="545" y="55" fill="#475569" font-family="Arial, sans-serif" font-size="12">AI Camera scan classifies recyclables automatically</text>
        <text x="545" y="80" fill="#059669" font-family="Arial, sans-serif" font-size="14" font-weight="bold">PET Plastic Bottle (98.4% Confidence)</text>
        <text x="545" y="105" fill="#059669" font-family="Arial, sans-serif" font-size="12" font-weight="bold">🎁 +15 GreenPoints Awarded</text>
      </g>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(600, 1120)" text-anchor="middle">
    <text fill="#64748b" font-family="Arial, sans-serif" font-size="15" font-weight="bold">
      GreenScore Sustainability OS • Slide 04 of 05 • Swipe to see Tech Stack 👉
    </text>
  </g>
</svg>`;

// ----------------------------------------------------
// 5. CAROUSEL SLIDE 5: TECH STACK, DEMO & CREDITS
// ----------------------------------------------------
const slide5Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgLight5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ecfdf5"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(5, 150, 105, 0.08)"/>
    </filter>
  </defs>

  <rect width="1200" height="1200" rx="24" fill="url(#bgLight5)" stroke="rgba(5, 150, 105, 0.2)" stroke-width="3"/>

  <!-- Header -->
  <g transform="translate(60, 60)">
    <rect width="280" height="42" rx="21" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)"/>
    <text x="140" y="27" text-anchor="middle" fill="#047857" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🚀 ARCHITECTURE &amp; OPEN SOURCE</text>

    <rect x="940" y="0" width="140" height="42" rx="21" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>
    <text x="1010" y="27" text-anchor="middle" fill="#059669" font-family="Arial, sans-serif" font-size="15" font-weight="bold">05 / 05 • STACK &amp; DEMO</text>

    <text x="0" y="115" fill="#0f172a" font-family="Arial, sans-serif" font-size="44" font-weight="bold">Built for Enterprise Scalability &amp; Impact</text>
    <text x="0" y="160" fill="#475569" font-family="Arial, sans-serif" font-size="20">Modern React 18, Vite 5, Dual Theme Engine &amp; Extensible API Sandboxes</text>
  </g>

  <!-- Tech Stack Grid -->
  <g transform="translate(60, 250)">
    <rect width="1080" height="330" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(16, 185, 129, 0.25)"/>
    <text x="40" y="45" fill="#047857" font-family="Arial, sans-serif" font-size="22" font-weight="bold">🛠️ Core Engineering Stack</text>
    <line x1="40" y1="65" x2="1040" y2="65" stroke="rgba(0,0,0,0.06)"/>

    <g transform="translate(40, 90)">
      <!-- Tech 1 -->
      <rect x="0" y="0" width="230" height="100" rx="12" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
      <text x="20" y="32" fill="#047857" font-family="Arial, sans-serif" font-size="16" font-weight="bold">⚛️ React 18 &amp; Vite 5</text>
      <text x="20" y="60" fill="#475569" font-family="Arial, sans-serif" font-size="12">Ultra-fast HMR, component tree &amp; optimized bundle</text>

      <!-- Tech 2 -->
      <rect x="255" y="0" width="230" height="100" rx="12" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.2)"/>
      <text x="275" y="32" fill="#0891b2" font-family="Arial, sans-serif" font-size="16" font-weight="bold">🎨 Dual Theme Engine</text>
      <text x="275" y="60" fill="#475569" font-family="Arial, sans-serif" font-size="12">Cyber Mint Dark &amp; Pure Fresh Light Mode</text>

      <!-- Tech 3 -->
      <rect x="510" y="0" width="230" height="100" rx="12" fill="#fef3c7" stroke="rgba(245, 158, 11, 0.2)"/>
      <text x="530" y="32" fill="#b45309" font-family="Arial, sans-serif" font-size="16" font-weight="bold">📐 Scoring Engine</text>
      <text x="530" y="60" fill="#475569" font-family="Arial, sans-serif" font-size="12">Multi-metric weighted 0-100 environmental index</text>

      <!-- Tech 4 -->
      <rect x="765" y="0" width="235" height="100" rx="12" fill="#f8fafc" stroke="rgba(0, 0, 0, 0.08)"/>
      <text x="785" y="32" fill="#334155" font-family="Arial, sans-serif" font-size="16" font-weight="bold">👁️ HTML5 Canvas AR</text>
      <text x="785" y="60" fill="#475569" font-family="Arial, sans-serif" font-size="12">Spatial 2D gradient thermal heatmap stream</text>

      <!-- Tech 5 -->
      <rect x="0" y="115" width="485" height="90" rx="12" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
      <text x="20" y="148" fill="#047857" font-family="Arial, sans-serif" font-size="15" font-weight="bold">🎙️ Web Speech API &amp; Voice Synthesis</text>
      <text x="20" y="176" fill="#475569" font-family="Arial, sans-serif" font-size="12">Hands-free voice recognition &amp; audio AI nudges</text>

      <!-- Tech 6 -->
      <rect x="510" y="115" width="490" height="90" rx="12" fill="#ecfeff" stroke="rgba(8, 145, 178, 0.2)"/>
      <text x="530" y="148" fill="#0891b2" font-family="Arial, sans-serif" font-size="15" font-weight="bold">📡 Dev API Sandbox &amp; Webhook Gateway</text>
      <text x="530" y="176" fill="#475569" font-family="Arial, sans-serif" font-size="12">Swagger-style live runner &amp; event simulator</text>
    </g>
  </g>

  <!-- Author & GitHub Banner -->
  <g transform="translate(60, 610)">
    <rect width="1080" height="460" rx="20" fill="#ffffff" filter="url(#cardShadow)" stroke="rgba(0,0,0,0.06)"/>

    <g transform="translate(45, 45)">
      <text x="0" y="25" fill="#0f172a" font-family="Arial, sans-serif" font-size="24" font-weight="bold">👨‍💻 Project Information &amp; Author</text>
      <text x="0" y="55" fill="#64748b" font-family="Arial, sans-serif" font-size="16">Developed for MCA Capstone Project &amp; Enterprise Decarbonization Research</text>

      <g transform="translate(0, 85)">
        <!-- Author Card -->
        <rect width="470" height="260" rx="16" fill="#f0fdf4" stroke="rgba(5, 150, 105, 0.2)"/>
        <text x="25" y="40" fill="#047857" font-family="Arial, sans-serif" font-size="20" font-weight="bold">Vijay Mahes</text>
        <text x="25" y="65" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Lead Full-Stack &amp; AI Architect</text>
        <line x1="25" y1="85" x2="445" y2="85" stroke="rgba(5, 150, 105, 0.15)"/>

        <text x="25" y="125" fill="#0f172a" font-family="Arial, sans-serif" font-size="14">📧 Email: <tspan font-weight="bold" fill="#047857">Vijaypradhap2004@gmail.com</tspan></text>
        <text x="25" y="165" fill="#0f172a" font-family="Arial, sans-serif" font-size="14">🐙 GitHub: <tspan font-weight="bold" fill="#0891b2">@vijaymahes9080</tspan></text>
        <text x="25" y="205" fill="#0f172a" font-family="Arial, sans-serif" font-size="14">📜 License: <tspan font-weight="bold" fill="#047857">MIT Open Source</tspan></text>
      </g>

      <g transform="translate(510, 85)">
        <!-- Repo & Demo Link Box -->
        <rect width="480" height="260" rx="16" fill="#f8fafc" stroke="rgba(0, 0, 0, 0.08)"/>
        <text x="25" y="40" fill="#0f172a" font-family="Arial, sans-serif" font-size="20" font-weight="bold">Explore GreenScore Today</text>
        <text x="25" y="65" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Star the repository &amp; test the live sandbox</text>
        <line x1="25" y1="85" x2="455" y2="85" stroke="rgba(0, 0, 0, 0.06)"/>

        <rect x="25" y="105" width="430" height="48" rx="10" fill="#059669"/>
        <text x="240" y="135" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">⭐ Star on GitHub: GreenScore</text>

        <rect x="25" y="170" width="430" height="48" rx="10" fill="rgba(8, 145, 178, 0.12)" stroke="rgba(8, 145, 178, 0.3)"/>
        <text x="240" y="200" text-anchor="middle" fill="#0891b2" font-family="Arial, sans-serif" font-size="15" font-weight="bold">💬 Connect on LinkedIn</text>
      </g>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(600, 1120)" text-anchor="middle">
    <text fill="#64748b" font-family="Arial, sans-serif" font-size="15" font-weight="bold">
      GreenScore Sustainability OS • Star ⭐ on GitHub @vijaymahes9080/GreenScore
    </text>
  </g>
</svg>`;

async function buildAllAssets() {
  console.log('Rendering GreenScore light theme assets & carousel...');

  // Save SVGs
  fs.writeFileSync('docs/images/carousel_1_ecosystem_overview.svg', slide1Svg);
  fs.writeFileSync('docs/images/carousel_2_smart_home_iot.svg', slide2Svg);
  fs.writeFileSync('docs/images/carousel_3_enterprise_esg.svg', slide3Svg);
  fs.writeFileSync('docs/images/carousel_4_climate_ai_ar.svg', slide4Svg);
  fs.writeFileSync('docs/images/carousel_5_tech_impact.svg', slide5Svg);

  // Render PNGs
  renderSvgToPng(slide1Svg, 'docs/images/carousel_1_ecosystem_overview.png', 1200);
  renderSvgToPng(slide2Svg, 'docs/images/carousel_2_smart_home_iot.png', 1200);
  renderSvgToPng(slide3Svg, 'docs/images/carousel_3_enterprise_esg.png', 1200);
  renderSvgToPng(slide4Svg, 'docs/images/carousel_4_climate_ai_ar.png', 1200);
  renderSvgToPng(slide5Svg, 'docs/images/carousel_5_tech_impact.png', 1200);

  // Render main showcase image.png
  const showcaseSvg = fs.readFileSync('docs/images/greenscore_light_showcase.svg', 'utf-8');
  renderSvgToPng(showcaseSvg, 'image.png', 1920);
  renderSvgToPng(showcaseSvg, 'docs/images/image.png', 1920);
  renderSvgToPng(showcaseSvg, 'docs/images/greenscore_light_showcase.png', 1920);

  // Render architecture PNG
  const archSvg = fs.readFileSync('docs/images/greenscore_architecture.svg', 'utf-8');
  renderSvgToPng(archSvg, 'docs/images/greenscore_architecture.png', 1600);

  console.log('🎉 All assets rendered successfully!');
}

buildAllAssets().catch(console.error);
