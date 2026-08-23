/**
 * Mock Ecosystem Data for GreenScore Sustainability OS
 */

export const PERSONAL_DATA = {
  name: "Vijay Mahes",
  role: "Sustainability Champion / MCA Student",
  score: 86.4,
  greenPoints: 340,
  level: "Eco-Master Tier 4",
  dailyStreak: 14,
  metrics: {
    energy: 88,
    water: 82,
    waste: 90,
    mobility: 84,
    greeneryPaper: 88
  },
  recentLogs: [
    { id: 1, action: "Public Transit Commute", points: 10, impact: "-2.4 kg CO2", date: "Today, 08:30 AM", verified: true },
    { id: 2, action: "Solar Rooftop Generation (12.4 kWh)", points: 20, impact: "-6.1 kg CO2", date: "Today, 12:00 PM", verified: true },
    { id: 3, action: "Plastic Waste Sorting (Scan Verified)", points: 5, impact: "-0.8 kg Waste", date: "Yesterday, 06:15 PM", verified: true },
    { id: 4, action: "Tree Sapling Plantation Drive", points: 25, impact: "+1 Sapling", date: "Aug 20, 2026", verified: true }
  ]
};

export const SMART_HOME_DEVICES = [
  { id: "dev-01", name: "Solar Edge Inverter 5kW", type: "Solar", status: "Active", powerKw: 4.8, dailyGenKwh: 18.2, health: 98, isOptimized: true },
  { id: "dev-02", name: "Living Room Smart AC", type: "HVAC", status: "Active", powerKw: 1.4, tempSet: "24°C", health: 92, isOptimized: false, alert: "Consuming 31% more power than benchmark. Increase temp by 1°C." },
  { id: "dev-03", name: "Main Line Water Flow Sensor", type: "Water", status: "Active", flowLpm: 4.2, dailyLiters: 140, health: 95, isOptimized: true },
  { id: "dev-04", name: "Garage EV Fast Charger", type: "EV", status: "Idle", powerKw: 0.0, scheduledTime: "02:00 AM (Off-peak)", health: 99, isOptimized: true },
  { id: "dev-05", name: "Kitchen Appliance Smart Plug", type: "Plug", status: "Active", powerKw: 0.25, dailyKwh: 1.8, health: 96, isOptimized: true }
];

export const CAMPUS_LEADERBOARD = [
  { rank: 1, department: "Department of Computer Science", score: 91.2, students: 640, energySavedKwh: 4200, solarShare: "42%", trend: "+2.4%" },
  { rank: 2, department: "Department of Mathematics", score: 87.5, students: 410, energySavedKwh: 3100, solarShare: "38%", trend: "+1.8%" },
  { rank: 3, department: "Department of Physics", score: 84.1, students: 520, energySavedKwh: 3400, solarShare: "35%", trend: "-0.5%" },
  { rank: 4, department: "Department of Electrical Eng.", score: 81.9, students: 580, energySavedKwh: 3900, solarShare: "40%", trend: "+3.1%" },
  { rank: 5, department: "Department of Civil Engineering", score: 79.4, students: 490, energySavedKwh: 2800, solarShare: "29%", trend: "+0.9%" }
];

export const CAMPUS_METRICS = {
  totalStudents: 3200,
  campusScore: 86.8,
  totalSolarGeneratedMwh: 142.5,
  paperSavedReams: 1240,
  treeCoverageAcres: 18.5,
  activeChallenges: [
    { title: "Zero Paper Final Exams Drive", status: "Active", target: "100% Digital", current: "92%" },
    { title: "Inter-Dept Solar kW Competition", status: "Active", leader: "CS Dept", daysLeft: 5 }
  ]
};

export const ENTERPRISE_DATA = {
  companyName: "GreenScore Technologies Corp.",
  headquarters: "Bengaluru Innovation Hub",
  overallScore: 83.6,
  reportingYear: "2026 Q3",
  scopes: {
    scope1: { label: "Direct Emissions (Gas, Vehicles)", co2Tons: 14.2, status: "Good" },
    scope2: { label: "Purchased Electricity & HVAC", co2Tons: 38.6, status: "Optimal (45% Solar)" },
    scope3: { label: "Supply Chain & Travel", co2Tons: 52.4, status: "Target Reduction Needed" }
  },
  departments: [
    { name: "Operations & Facilities", score: 88, carbonTons: 24.5, reductionYoY: "-12%" },
    { name: "IT & Data Center", score: 84, carbonTons: 32.1, reductionYoY: "-8%" },
    { name: "Transportation & Fleet", score: 79, carbonTons: 22.8, reductionYoY: "-15% (EV Shift)" },
    { name: "Procurement & Office", score: 82, carbonTons: 18.4, reductionYoY: "-10%" }
  ]
};

export const CITY_DATA = {
  cityName: "Metropolis Tech Zone",
  cityScore: 78.4,
  population: "1.2 Million",
  sectors: [
    { id: "sec-1", name: "Energy Grid Efficiency", score: 82, detail: "68% Smart Grid metering, 24% Solar integration", color: "#10b981" },
    { id: "sec-2", name: "Water Conservation & Lakes", score: 74, detail: "Rainwater harvesting in 72% commercial buildings", color: "#06b6d4" },
    { id: "sec-3", name: "Municipal Waste Recovery", score: 69, detail: "Segregation at source: 58%, Bio-gas conversion active", color: "#f59e0b" },
    { id: "sec-4", name: "Public Clean Mobility", score: 76, detail: "340 Electric Buses, 120km Dedicated Bike Corridors", color: "#84cc16" }
  ],
  aqiIndex: 42,
  aqiStatus: "Good (Air Quality Index)",
  evChargingHubs: 184
};

export const ESG_REPORTS = [
  { id: "esg-2026-q3", title: "Q3 2026 ESG Corporate Disclosure", framework: "GRI & ISSB Standard", date: "Aug 2026", status: "Verified", totalCo2Saved: "105.2 Tons", waterSavedKl: "450 KL" },
  { id: "esg-2026-q2", title: "Q2 2026 ESG Environmental Audit", framework: "GRI Standard", date: "May 2026", status: "Audited", totalCo2Saved: "94.8 Tons", waterSavedKl: "410 KL" },
  { id: "esg-2025-annual", title: "2025 Annual Sustainability Statement", framework: "UN SDG & BRSR", date: "Jan 2026", status: "Published", totalCo2Saved: "340.0 Tons", waterSavedKl: "1,520 KL" }
];

export const IOT_NODES = [
  { id: "ESP32-NODE-01", location: "Rooftop Solar Array", sensor: "Current/Voltage (ACS712)", value: "23.4 A / 230 V", metric: "5.38 kW", status: "ONLINE", latency: "14ms", signal: "94%" },
  { id: "ESP32-NODE-02", location: "Main Water Intake Pipeline", sensor: "Pulse Flow (YF-S201)", value: "18.5 Liters/min", metric: "Flow OK", status: "ONLINE", latency: "22ms", signal: "88%" },
  { id: "ESP32-NODE-03", location: "Waste Compactor Station", sensor: "Ultrasonic Distance (HC-SR04)", value: "Fill Level: 42%", metric: "Normal", status: "ONLINE", latency: "18ms", signal: "91%" },
  { id: "ESP32-NODE-04", location: "Outdoor AQI Monitoring Station", sensor: "MQ-135 & PM2.5 (PMS5003)", value: "PM2.5: 18 µg/m³", metric: "AQI 42", status: "ONLINE", latency: "25ms", signal: "96%" }
];

export const MARKETPLACE_ITEMS = [
  {
    id: "mp-1",
    name: "EcoSmart Plug with Real-Time Power Monitor",
    category: "Smart Home",
    price: "$24.99",
    scoreBoost: "+4.5 pts",
    co2SavedPerYear: "140 kg CO2",
    rating: 4.9,
    description: "Cuts standby phantom load automatically via mobile app schedule.",
    badge: "Best Seller"
  },
  {
    id: "mp-2",
    name: "High-Efficiency Aerator Water Nozzle (Set of 4)",
    category: "Water Saving",
    price: "$18.50",
    scoreBoost: "+3.8 pts",
    co2SavedPerYear: "95 kg CO2 (Water heating reduction)",
    rating: 4.8,
    description: "Reduces tap water flow rate by 50% without lowering pressure.",
    badge: "Eco Pick"
  },
  {
    id: "mp-3",
    name: "Portable 50W Solar Device Charger",
    category: "Clean Energy",
    price: "$59.00",
    scoreBoost: "+6.0 pts",
    co2SavedPerYear: "210 kg CO2",
    rating: 4.9,
    description: "Ultra-compact monocrystalline solar charger for laptops and mobile devices.",
    badge: "Top Rated"
  },
  {
    id: "mp-4",
    name: "Smart Home Indoor Compost Bin with Odor Filter",
    category: "Waste Management",
    price: "$34.00",
    scoreBoost: "+5.0 pts",
    co2SavedPerYear: "180 kg CO2 (Methane reduction)",
    rating: 4.7,
    description: "Converts organic food waste into fertile garden compost in 7 days.",
    badge: "Zero Waste"
  }
];

export const REWARDS_CATALOG = [
  { id: "rew-1", title: "Free Campus Eco Coffee Pass", pointsReq: 100, partner: "GreenBean Cafe", category: "Campus" },
  { id: "rew-2", title: "$15 Voucher for Solar Accessories", pointsReq: 250, partner: "SolarStore Eco", category: "Voucher" },
  { id: "rew-3", title: "Public Bus 1-Month Unlimited Pass", pointsReq: 300, partner: "City Transit Authority", category: "Mobility" },
  { id: "rew-4", title: "Certified Carbon Neutrality Badge", pointsReq: 500, partner: "GreenScore Foundation", category: "Certificate" }
];

export const COMPUTER_VISION_SAMPLES = [
  { id: "cv-1", label: "PET Plastic Water Bottle", category: "Recyclable Plastic", greenPointsReward: 5, confidence: "98.4%", tip: "Rinse and crush before placing in the Blue Bin." },
  { id: "cv-2", label: "Organic Banana Peel", category: "Organic Compost", greenPointsReward: 5, confidence: "99.1%", tip: "Great for home composting or the Green Organic Bin." },
  { id: "cv-3", label: "Discarded Smartphone Battery", category: "E-Waste Hazardous", greenPointsReward: 15, confidence: "96.7%", tip: "Do NOT discard in general trash. Take to designated E-Waste Drop Point." }
];
