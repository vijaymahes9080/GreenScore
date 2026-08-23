import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sun, Wind, Eye, RefreshCw, Zap } from 'lucide-react';

export default function ARSpatialHeatmapModule() {
  const [scanMode, setScanMode] = useState("Thermal AC Leaks");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = '#080d14';
    ctx.fillRect(0, 0, width, height);

    // Draw grid overlay
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Render spatial heatmap overlays
    if (scanMode === "Thermal AC Leaks") {
      // Draw simulated house outline & thermal leak hotspots
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.strokeRect(60, 40, width - 120, height - 80);

      // Hotspot 1: Living Room AC Window (Cold Leak)
      const grad1 = ctx.createRadialGradient(140, 100, 10, 140, 100, 70);
      grad1.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
      grad1.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = grad1; ctx.beginPath(); ctx.arc(140, 100, 70, 0, Math.PI * 2); ctx.fill();

      // Hotspot 2: Rear Door Sealing (Warm Leak)
      const grad2 = ctx.createRadialGradient(340, 220, 10, 340, 220, 80);
      grad2.addColorStop(0, 'rgba(244, 63, 94, 0.8)');
      grad2.addColorStop(1, 'rgba(244, 63, 94, 0)');
      ctx.fillStyle = grad2; ctx.beginPath(); ctx.arc(340, 220, 80, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#fff'; ctx.font = '12px Inter';
      ctx.fillText('⚡ AC Thermal Leak Zone (Door Seal: -4.2 kWh loss)', 210, 260);
    } else if (scanMode === "Solar Roof Irradiance") {
      // Solar roof irradiance heatmap
      const grad = ctx.createRadialGradient(240, 150, 20, 240, 150, 140);
      grad.addColorStop(0, 'rgba(245, 158, 11, 0.9)');
      grad.addColorStop(0.5, 'rgba(132, 204, 22, 0.5)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(240, 150, 140, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#fff'; ctx.font = '12px Inter';
      ctx.fillText('☀️ Peak Solar Rooftop Zone: 98% Optimal Irradiance (5.4 kW Potential)', 80, 270);
    } else {
      // AQI Spatial distribution
      const grad = ctx.createRadialGradient(200, 140, 10, 200, 140, 120);
      grad.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(200, 140, 120, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#fff'; ctx.font = '12px Inter';
      ctx.fillText('🍃 Indoor Air Quality: PM2.5 = 12 µg/m³ (HEPA Filtered Clean Zone)', 90, 270);
    }
  }, [scanMode]);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Camera style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 4 • AR Spatial Thermal & Energy Heatmap</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Spatial Thermal & Irradiance Scanner</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Simulate spatial AR thermal scans to detect AC cool air leaks, rooftop solar potential, and indoor AQI density.
          </p>
        </div>
      </div>

      {/* Mode Controls */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {["Thermal AC Leaks", "Solar Roof Irradiance", "Indoor AQI Density"].map(mode => (
          <button 
            key={mode}
            onClick={() => setScanMode(mode)}
            className={`btn-secondary ${scanMode === mode ? 'btn-cyan' : ''}`}
            style={{ fontSize: '0.85rem' }}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Canvas AR Viewfinder Box */}
      <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={480} 
          height={300} 
          style={{ width: '100%', maxWidth: '540px', height: 'auto', borderRadius: '12px', border: '1px solid var(--border-glow)' }}
        />
        <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          Active Spatial Scan Mode: <strong style={{ color: 'var(--emerald-light)' }}>{scanMode}</strong>
        </div>
      </div>
    </div>
  );
}
