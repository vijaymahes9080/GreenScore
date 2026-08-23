import React, { useState } from 'react';
import { Sun, Wind, Thermometer, TrendingDown, RefreshCw, Zap } from 'lucide-react';

export default function ClimateScenarioModule() {
  const [renewablePct, setRenewablePct] = useState(65);
  const [evPct, setEvPct] = useState(50);
  const [reforestPct, setReforestPct] = useState(40);

  // Dynamic simulation math
  const tempAnomaly = Math.max(1.1, (2.4 - (renewablePct * 0.012) - (evPct * 0.005)).toFixed(2));
  const projectedAqi = Math.max(22, Math.round(95 - (renewablePct * 0.5) - (evPct * 0.4)));
  const annualSavingsMillion = Math.round(((renewablePct * 0.03) + (evPct * 0.02) + (reforestPct * 0.015)) * 10) / 10;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Sun style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 2 • 2030 / 2050 Predictive Earth AI</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Interactive Climate Scenario Simulator</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Adjust policy parameters to simulate real-time climate trajectories, AQI shifts, and municipal energy economics.
          </p>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>Simulation Parameters (Year 2030 Horizon)</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.88rem' }}>
              <span>Renewable Energy Share:</span>
              <span style={{ fontWeight: 700, color: 'var(--emerald-light)' }}>{renewablePct}%</span>
            </div>
            <input 
              type="range" min="10" max="100" value={renewablePct} 
              onChange={(e) => setRenewablePct(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--emerald-light)' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.88rem' }}>
              <span>EV Fleet Penetration:</span>
              <span style={{ fontWeight: 700, color: 'var(--cyan-accent)' }}>{evPct}%</span>
            </div>
            <input 
              type="range" min="5" max="100" value={evPct} 
              onChange={(e) => setEvPct(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--cyan-accent)' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.88rem' }}>
              <span>Reforestation Coverage:</span>
              <span style={{ fontWeight: 700, color: 'var(--lime-accent)' }}>{reforestPct}%</span>
            </div>
            <input 
              type="range" min="5" max="100" value={reforestPct} 
              onChange={(e) => setReforestPct(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--lime-accent)' }}
            />
          </div>
        </div>
      </div>

      {/* Simulated Earth Impact Cards */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Thermometer style={{ color: 'var(--amber-accent)', width: '20px', height: '20px' }} />
        Simulated Environmental & Economic Indicators
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            2030 Global Temp Anomaly
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: tempAnomaly <= 1.5 ? 'var(--emerald-light)' : 'var(--amber-accent)' }}>
            +{tempAnomaly}°C
          </div>
          <span style={{ fontSize: '0.78rem', color: tempAnomaly <= 1.5 ? 'var(--emerald-light)' : 'var(--amber-accent)' }}>
            {tempAnomaly <= 1.5 ? '✓ Paris Agreement Compliant Target' : '⚠️ Exceeds 1.5°C Warming Limit'}
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Projected City AQI
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>
            {projectedAqi} AQI
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--emerald-light)' }}>
            Clean Breathable Urban Air Grade
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Municipal Economic Savings
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
            ${annualSavingsMillion} Million / Year
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            From avoided fuel imports & health costs
          </span>
        </div>
      </div>
    </div>
  );
}
