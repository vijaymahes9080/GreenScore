import React, { useState } from 'react';
import { FileText, Download, CheckCircle, ShieldCheck, ArrowRight, FileSpreadsheet, RefreshCw } from 'lucide-react';
import { ESG_REPORTS } from '../data/mockEcosystemData';

export default function ESGReportingModule() {
  const [reports, setReports] = useState(ESG_REPORTS);
  const [downloadingId, setDownloadingId] = useState(null);
  const [generatedNew, setGeneratedNew] = useState(false);

  const handleDownload = (id, title) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      // Simulate file download
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify({
        title,
        framework: "GRI & ISSB Standard",
        metadata: { generatedAt: new Date().toISOString(), platform: "GreenScore ESG Engine" },
        metrics: { totalCo2Saved: "105.2 Tons", waterSavedKl: "450 KL", score: 83.6 }
      }, null, 2)], { type: 'application/json' });
      element.href = URL.createObjectURL(file);
      element.download = `${id}_esg_report.json`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1000);
  };

  const handleGenerateNewReport = () => {
    setGeneratedNew(true);
    const newReport = {
      id: `esg-${Date.now()}`,
      title: "Real-Time Automated ESG Audit Brief",
      framework: "GRI 2026 / ISSB Standard",
      date: "Just Now",
      status: "Verified",
      totalCo2Saved: "112.4 Tons",
      waterSavedKl: "480 KL"
    };
    setReports([newReport, ...reports]);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <FileText style={{ width: '16px', height: '16px' }} />
            <span>Pillar 5 • ESG Data Collection & Reporting Engine</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Automated Corporate ESG Statements</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            GRI & ISSB aligned report generation engine with auditable telemetry data streams.
          </p>
        </div>

        <button onClick={handleGenerateNewReport} className="btn-primary" style={{ fontSize: '0.85rem' }}>
          <RefreshCw style={{ width: '16px', height: '16px' }} />
          Generate Live ESG Audit Statement
        </button>
      </div>

      {/* Data Pipeline Flow Graphic */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.95rem', color: 'var(--cyan-accent)', marginBottom: '1rem' }}>
          🔄 GreenScore Automated ESG Telemetry Pipeline
        </h4>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem',
          alignItems: 'center', textAlign: 'center', fontSize: '0.8rem'
        }}>
          <div className="glass-panel" style={{ padding: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: '#fff' }}>IoT Telemetry</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Energy/Water</div>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>➔</div>

          <div className="glass-panel" style={{ padding: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: '#fff' }}>Utility Bills</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Verified Feed</div>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>➔</div>

          <div className="glass-panel" style={{ padding: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: '#fff' }}>Waste Logs</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Compost/Recycle</div>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>➔</div>

          <div className="glass-panel" style={{ padding: '0.75rem', border: '1px solid rgba(16, 185, 129, 0.4)', background: 'rgba(16, 185, 129, 0.1)' }}>
            <div style={{ fontWeight: 700, color: 'var(--emerald-light)' }}>ESG Engine</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--emerald-light)' }}>GHG Accounting</div>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>➔</div>

          <div className="glass-panel" style={{ padding: '0.75rem', border: '1px solid rgba(6, 182, 212, 0.4)' }}>
            <div style={{ fontWeight: 700, color: 'var(--cyan-accent)' }}>ESG Report</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--cyan-accent)' }}>GRI / ISSB PDF</div>
          </div>
        </div>
      </div>

      {/* ESG Reports Table */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
          Verified ESG Compliance Disclosure Archive
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {reports.map((report) => (
            <div key={report.id} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{report.title}</h4>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-light)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {report.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Framework: <strong>{report.framework}</strong> • Period: {report.date}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--emerald-light)', marginTop: '0.25rem' }}>
                  Impact: {report.totalCo2Saved} Offset | {report.waterSavedKl} Water Preserved
                </div>
              </div>

              <button 
                onClick={() => handleDownload(report.id, report.title)}
                className="btn-secondary"
                style={{ fontSize: '0.85rem' }}
                disabled={downloadingId === report.id}
              >
                <Download style={{ width: '16px', height: '16px' }} />
                {downloadingId === report.id ? 'Generating JSON...' : 'Export ESG Audit'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
