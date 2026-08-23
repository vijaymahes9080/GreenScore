import React, { useState } from 'react';
import { Home, Sun, Zap, Droplets, Car, Cpu, AlertTriangle, ShieldCheck, RefreshCw, Power } from 'lucide-react';
import { SMART_HOME_DEVICES } from '../data/mockEcosystemData';

export default function SmartHomeModule({ onScoreUpdate }) {
  const [devices, setDevices] = useState(SMART_HOME_DEVICES);
  const [acTemp, setAcTemp] = useState(24);
  const [solarOptimization, setSolarOptimization] = useState(true);
  const [aiNudgeDismissed, setAiNudgeDismissed] = useState(false);

  const toggleDevice = (id) => {
    setDevices(prev => prev.map(dev => {
      if (dev.id === id) {
        const newStatus = dev.status === 'Active' ? 'Idle' : 'Active';
        return { ...dev, status: newStatus };
      }
      return dev;
    }));
  };

  const handleAcTempChange = (delta) => {
    const newTemp = Math.min(28, Math.max(18, acTemp + delta));
    setAcTemp(newTemp);
    if (newTemp >= 25 && onScoreUpdate) {
      onScoreUpdate(0.5); // Reward raising temp
    }
  };

  const totalSolarKw = devices.filter(d => d.type === 'Solar').reduce((acc, d) => acc + (d.status === 'Active' ? d.powerKw : 0), 0);
  const totalPowerKw = devices.filter(d => d.type !== 'Solar').reduce((acc, d) => acc + (d.status === 'Active' ? d.powerKw : 0), 0);
  const netGridKw = Math.max(0, Math.round((totalPowerKw - totalSolarKw) * 100) / 100);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Home style={{ width: '16px', height: '16px' }} />
            <span>Pillar 1 • IoT Smart Home Infrastructure</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Connected Household Automation</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Real-time IoT telemetry from solar inverters, smart plugs, AC units, and water meters.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            onClick={() => setSolarOptimization(!solarOptimization)}
            className={`btn-secondary ${solarOptimization ? 'btn-cyan' : ''}`}
            style={{ fontSize: '0.85rem' }}
          >
            <Sun style={{ width: '16px', height: '16px' }} />
            {solarOptimization ? 'Solar Auto-Shift ON' : 'Enable Solar Auto-Shift'}
          </button>
        </div>
      </div>

      {/* AI Smart Nudge Banner */}
      {!aiNudgeDismissed && (
        <div className="glass-card" style={{ 
          padding: '1.25rem', marginBottom: '1.75rem', 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(15, 23, 36, 0.8) 100%)',
          borderColor: 'rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'flex-start', gap: '1rem' 
        }}>
          <AlertTriangle style={{ width: '24px', height: '24px', color: 'var(--amber-accent)', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h4 style={{ color: 'var(--amber-accent)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                🧠 GreenScore AI Energy Recommendation
              </h4>
              <button 
                onClick={() => setAiNudgeDismissed(true)} 
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Dismiss
              </button>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              “Your Living Room AC consumed 31% more electricity this week. Increasing the thermostat by <strong>1°C (to {acTemp + 1}°C)</strong> will reduce household power draw by ~4.2 kWh/day and boost your Smart Home GreenScore by <strong>+2.4 pts</strong>.”
            </p>
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => handleAcTempChange(1)} className="btn-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
                Increase AC Temp (+1°C)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Summary Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Solar Generation</span>
            <Sun style={{ width: '18px', height: '18px', color: 'var(--amber-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
            {totalSolarKw} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kW</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)' }}>18.2 kWh generated today</span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Active Power Load</span>
            <Zap style={{ width: '18px', height: '18px', color: 'var(--cyan-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>
            {Math.round(totalPowerKw * 100) / 100} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kW</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>5 IoT connected loads active</span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Net Utility Grid Draw</span>
            <Cpu style={{ width: '18px', height: '18px', color: 'var(--emerald-light)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: netGridKw === 0 ? 'var(--emerald-light)' : 'var(--text-primary)' }}>
            {netGridKw} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kW</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: netGridKw === 0 ? 'var(--emerald-light)' : 'var(--text-muted)' }}>
            {netGridKw === 0 ? '⚡ 100% Self-Sufficient Solar Power' : 'Hybrid Grid & Solar Blend'}
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Water Flow Rate</span>
            <Droplets style={{ width: '18px', height: '18px', color: 'var(--cyan-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>
            4.2 <span style={{ fontSize: '1rem', fontWeight: 500 }}>L/min</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)' }}>Leak Detection: Normal</span>
        </div>
      </div>

      {/* Connected IoT Devices Grid */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Cpu style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
        Live IoT Node Telemetry Grid
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {devices.map(device => {
          const isActive = device.status === 'Active';
          return (
            <div key={device.id} className="glass-card" style={{ padding: '1.35rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {device.type} Sensor Node ({device.id})
                  </span>
                  <h4 style={{ fontSize: '1.1rem', marginTop: '2px' }}>{device.name}</h4>
                </div>
                <button 
                  onClick={() => toggleDevice(device.id)}
                  style={{ 
                    background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isActive ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '50%', width: '36px', height: '36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: isActive ? 'var(--emerald-light)' : 'var(--text-muted)'
                  }}
                  title="Toggle Device Power"
                >
                  <Power style={{ width: '18px', height: '18px' }} />
                </button>
              </div>

              {/* Status & Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className={`pulse-dot ${isActive ? '' : 'pulse-dot-cyan'}`} style={{ backgroundColor: isActive ? 'var(--emerald-light)' : 'var(--text-muted)' }}></span>
                <span style={{ fontSize: '0.85rem', color: isActive ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: 600 }}>
                  {device.status}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>• Health: {device.health}%</span>
              </div>

              {/* Specific Control Interactivity for AC */}
              {device.type === 'HVAC' && (
                <div className="glass-panel" style={{ padding: '0.75rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Thermostat Target:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={() => handleAcTempChange(-1)} className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>-</button>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--emerald-light)' }}>{acTemp}°C</span>
                    <button onClick={() => handleAcTempChange(1)} className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>+</button>
                  </div>
                </div>
              )}

              {/* Alert message if any */}
              {device.alert && !aiNudgeDismissed && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--amber-accent)', background: 'rgba(245, 158, 11, 0.1)', padding: '0.5rem', borderRadius: '6px', border: '1px dashed rgba(245, 158, 11, 0.3)' }}>
                  ⚠️ {device.alert}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
