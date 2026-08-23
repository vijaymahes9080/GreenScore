import React from 'react';
import { Landmark, Zap, Droplets, Trash2, Bus, Wind, MapPin, Activity, ShieldAlert } from 'lucide-react';
import { CITY_DATA } from '../data/mockEcosystemData';

export default function CityModule() {
  const { cityName, cityScore, population, sectors, aqiIndex, aqiStatus, evChargingHubs } = CITY_DATA;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--amber-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Landmark style={{ width: '16px', height: '16px' }} />
            <span>Pillar 4 • Smart Municipal Citywide Dashboard</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>{cityName} Municipal Ecosystem</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Population Jurisdiction: <strong>{population}</strong> • Urban Sustainability Index
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
          <Landmark style={{ width: '26px', height: '26px', color: 'var(--amber-accent)' }} />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>City GreenScore</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
              {cityScore} / 100
            </div>
          </div>
        </div>
      </div>

      {/* Visual ASCII City Dashboard Box */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-mono)', background: 'rgba(8, 13, 20, 0.85)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--emerald-light)', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
          <span>CITY GREENSCORE OVERVIEW: {cityScore}/100</span>
          <span>AIR QUALITY: {aqiIndex} AQI ({aqiStatus.split(' ')[0]})</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', color: 'var(--text-primary)' }}>
          <div className="glass-panel" style={{ padding: '0.85rem' }}>
            <div style={{ color: 'var(--emerald-light)', fontSize: '0.85rem' }}>⚡ ENERGY GRID</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>82 / 100</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>24% Solar Blend</div>
          </div>

          <div className="glass-panel" style={{ padding: '0.85rem' }}>
            <div style={{ color: 'var(--cyan-accent)', fontSize: '0.85rem' }}>💧 WATER GRID</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>74 / 100</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>72% Rainwater Capture</div>
          </div>

          <div className="glass-panel" style={{ padding: '0.85rem' }}>
            <div style={{ color: 'var(--amber-accent)', fontSize: '0.85rem' }}>♻️ WASTE RECOVERY</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>69 / 100</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>58% Source Segregation</div>
          </div>

          <div className="glass-panel" style={{ padding: '0.85rem' }}>
            <div style={{ color: 'var(--lime-accent)', fontSize: '0.85rem' }}>🚌 CLEAN MOBILITY</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>76 / 100</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>340 E-Buses Active</div>
          </div>
        </div>
      </div>

      {/* Urban Sectors Grid */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <MapPin style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
        Municipal Infrastructure Sectors
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {sectors.map((sec) => (
          <div key={sec.id} className="glass-card" style={{ padding: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: sec.color }}>{sec.name}</h4>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: sec.color }}>
                {sec.score}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {sec.detail}
            </p>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${sec.score}%`, backgroundColor: sec.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Real-Time Urban Indicators */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wind style={{ color: 'var(--emerald-light)', width: '24px', height: '24px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Air Quality Index (AQI)</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--emerald-light)' }}>
              {aqiIndex} • {aqiStatus}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Sensor Grid PM2.5: 18 µg/m³</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap style={{ color: 'var(--cyan-accent)', width: '24px', height: '24px' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Public EV Infrastructure</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--cyan-accent)' }}>
              {evChargingHubs} Fast Charging Stations
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>94.2% Grid Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
