/**
 * GreenScore Scoring Engine
 * Central Multi-Metric Algorithm (0 - 100 Index)
 */

export const METRIC_WEIGHTS = {
  energy: 0.30,       // Electricity draw, Solar offset %, Smart plug efficiency
  water: 0.20,        // Water flow efficiency, rainwater harvesting, leak rate
  waste: 0.20,        // Recycled ratio, composting, zero single-use plastic
  mobility: 0.15,     // EV usage, public transit %, cycling/walking logs
  greeneryPaper: 0.15 // Tree planting, paperless drive, eco-procurement
};

/**
 * Calculates grade string from score
 */
export function getGradeFromScore(score) {
  if (score >= 90) return { grade: 'A+', color: '#34d399', text: 'Exceptional (Net Zero Champion)' };
  if (score >= 80) return { grade: 'A', color: '#10b981', text: 'High Efficiency' };
  if (score >= 70) return { grade: 'B+', color: '#06b6d4', text: 'Above Average' };
  if (score >= 60) return { grade: 'B', color: '#f59e0b', text: 'Moderate Performance' };
  if (score >= 50) return { grade: 'C', color: '#fb923c', text: 'Needs Improvement' };
  return { grade: 'D', color: '#f43f5e', text: 'High Footprint Warning' };
}

/**
 * Calculates composite score from sub-metrics
 */
export function calculateCompositeScore({ energy, water, waste, mobility, greeneryPaper }) {
  const score = (
    (energy * METRIC_WEIGHTS.energy) +
    (water * METRIC_WEIGHTS.water) +
    (waste * METRIC_WEIGHTS.waste) +
    (mobility * METRIC_WEIGHTS.mobility) +
    (greeneryPaper * METRIC_WEIGHTS.greeneryPaper)
  );
  return Math.round(score * 10) / 10;
}

/**
 * Converts GreenScore to equivalent environmental impact estimates
 */
export function calculateImpactMetrics(greenScore, scaleMultiplier = 1) {
  // Baseline benchmarks (approx per 10 points above 50)
  const scoreFactor = Math.max(0, greenScore - 30);
  const co2SavedKg = Math.round(scoreFactor * 14.5 * scaleMultiplier);
  const waterSavedLiters = Math.round(scoreFactor * 85 * scaleMultiplier);
  const treesEquivalent = Math.round((co2SavedKg / 21.7) * 10) / 10; // Approx 21.7kg CO2 per tree per year
  const kwhSaved = Math.round(scoreFactor * 28 * scaleMultiplier);

  return {
    co2SavedKg,
    waterSavedLiters,
    treesEquivalent,
    kwhSaved
  };
}

/**
 * Simulates real-time IoT Telemetry metric changes
 */
export function generateRandomTelemetry(baseScore) {
  const delta = (Math.random() - 0.48) * 1.5;
  const newScore = Math.min(99, Math.max(40, baseScore + delta));
  return Math.round(newScore * 10) / 10;
}
