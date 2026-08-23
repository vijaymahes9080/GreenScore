import React from 'react';
import { Building2, PieChart, TrendingDown, ShieldCheck, Factory, Truck, Cpu, ShoppingCart, Lightbulb } from 'lucide-react';
import { ENTERPRISE_DATA } from '../data/mockEcosystemData';

export default function EnterpriseModule() {
  const { companyName, headquarters, overallScore, reportingYear, scopes, departments } = ENTERPRISE_DATA;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Building2 style={{ width: '16px', height: '16px' }} />
            <span>Pillar 3 • Enterprise ESG & Corporate Decarbonization</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>{companyName}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            {headquarters} • Corporate Reporting Cycle: <strong>{reportingYear}</strong>
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px' }}>
          <ShieldCheck style={{ width: '24px', height: '24px', color: 'var(--emerald-light)' }} />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Corporate ESG Index</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald-light)' }}>
              {overallScore} / 100
            </div>
          </div>
        </div>
      </div>

      {/* AI Corporate Recommendation Banner */}
      <div className="glass-card" style={{ 
        padding: '1.25rem', marginBottom: '2rem', 
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 36, 0.85) 100%)',
        borderColor: 'rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'flex-start', gap: '1rem' 
      }}>
        <Lightbulb style={{ width: '24px', height: '24px', color: 'var(--emerald-light)', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ color: 'var(--emerald-light)', fontSize: '1rem', marginBottom: '0.25rem' }}>
            🧠 Enterprise AI Strategic Decarbonization Insight
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
            “Switching <strong>40% of headquarters office electricity consumption</strong> to a dedicated PPA solar array could reduce estimated annual Scope 2 emissions by <strong>15.4 Tons CO2e</strong> and elevate the corporate ESG rating to <strong>88.2 (AA Rating)</strong>.”
          </p>
        </div>
      </div>

      {/* Scopes 1, 2, 3 Grid */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <PieChart style={{ color: 'var(--cyan-accent)', width: '20px', height: '20px' }} />
        GHG Protocol Carbon Footprint Accounting (Scopes 1, 2 & 3)
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Scope 1 Emissions</span>
            <Factory style={{ width: '18px', height: '18px', color: 'var(--amber-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
            {scopes.scope1.co2Tons} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Tons CO2e</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {scopes.scope1.label}
          </p>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--emerald-light)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block' }}>
            Status: {scopes.scope1.status}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Scope 2 Emissions</span>
            <Cpu style={{ width: '18px', height: '18px', color: 'var(--cyan-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>
            {scopes.scope2.co2Tons} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Tons CO2e</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {scopes.scope2.label}
          </p>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--emerald-light)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block' }}>
            Status: {scopes.scope2.status}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Scope 3 Emissions</span>
            <Truck style={{ width: '18px', height: '18px', color: 'var(--indigo-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--indigo-accent)' }}>
            {scopes.scope3.co2Tons} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Tons CO2e</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {scopes.scope3.label}
          </p>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--amber-accent)', background: 'rgba(245, 158, 11, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block' }}>
            Status: {scopes.scope3.status}
          </div>
        </div>
      </div>

      {/* Department Breakdown Table */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>
          Departmental Sustainability & Carbon Performance
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Department Name</th>
                <th style={{ padding: '0.75rem 1rem' }}>GreenScore</th>
                <th style={{ padding: '0.75rem 1rem' }}>Annual Carbon Output</th>
                <th style={{ padding: '0.75rem 1rem' }}>YoY Emissions Delta</th>
                <th style={{ padding: '0.75rem 1rem' }}>Status Rating</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {dept.name}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--emerald-light)' }}>
                    {dept.score} / 100
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                    {dept.carbonTons} Tons CO2e
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
                    {dept.reductionYoY}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span className="score-badge score-badge-high" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                      Optimal
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
