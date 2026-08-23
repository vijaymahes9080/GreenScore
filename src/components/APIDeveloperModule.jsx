import React, { useState } from 'react';
import { Cpu, Key, Play, RefreshCw, CheckCircle, Code } from 'lucide-react';

export default function APIDeveloperModule() {
  const [apiKey, setApiKey] = useState("gs_live_98f41a2b7e");
  const [selectedEndpoint, setSelectedEndpoint] = useState("GET /v2/score");
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateKey = () => {
    setApiKey(`gs_live_${Math.random().toString(36).substring(2, 12)}`);
  };

  const handleRunApiCall = () => {
    setIsLoading(true);
    setApiResponse(null);
    setTimeout(() => {
      if (selectedEndpoint === "GET /v2/score") {
        setApiResponse({
          status: 200,
          statusText: "OK",
          data: {
            ecosystemScore: 86.4,
            grade: "A+",
            metrics: { energy: 88, water: 82, waste: 90, mobility: 84, greeneryPaper: 88 },
            timestamp: new Date().toISOString()
          }
        });
      } else if (selectedEndpoint === "POST /v2/telemetry") {
        setApiResponse({
          status: 201,
          statusText: "Created",
          data: {
            nodeId: "ESP32-NODE-01",
            ingested: true,
            greenPointsAwarded: 5,
            message: "Telemetry packet processed by AI Engine."
          }
        });
      } else {
        setApiResponse({
          status: 200,
          statusText: "OK",
          data: {
            reportId: "esg-2026-q3",
            framework: "GRI & ISSB",
            totalCo2SavedTons: 105.2,
            downloadUrl: "https://api.greenscore.io/reports/esg-2026-q3.json"
          }
        });
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Code style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 5 • Developer API & Webhook Gateway</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Developer API & Real-Time Webhooks Sandbox</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Integrate GreenScore telemetry into third-party ERPs, smart home controllers, and enterprise platforms.
          </p>
        </div>

        <button onClick={handleGenerateKey} className="btn-secondary" style={{ fontSize: '0.85rem' }}>
          <Key style={{ width: '16px', height: '16px' }} />
          Generate New API Key
        </button>
      </div>

      {/* API Key Banner */}
      <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.75rem', fontFamily: 'var(--font-mono)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active API Key (Bearer Token):</span>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--emerald-light)', marginTop: '0.2rem' }}>
            {apiKey}
          </div>
        </div>
        <span className="score-badge score-badge-high" style={{ fontSize: '0.75rem' }}>
          Status: ACTIVE (10,000 Req/Day)
        </span>
      </div>

      {/* API Sandbox Runner */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>API Endpoint Tester Sandbox</h3>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {["GET /v2/score", "POST /v2/telemetry", "GET /v2/esg/report"].map(ep => (
            <button 
              key={ep}
              onClick={() => setSelectedEndpoint(ep)}
              className={`btn-secondary ${selectedEndpoint === ep ? 'btn-cyan' : ''}`}
              style={{ fontSize: '0.82rem' }}
            >
              {ep}
            </button>
          ))}

          <button onClick={handleRunApiCall} className="btn-primary" style={{ fontSize: '0.82rem', marginLeft: 'auto' }} disabled={isLoading}>
            <Play style={{ width: '14px', height: '14px' }} />
            {isLoading ? 'Executing Request...' : 'Send API Request'}
          </button>
        </div>

        {/* JSON Response Window */}
        {apiResponse && (
          <div className="glass-panel" style={{ padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--emerald-light)', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
              <span>HTTP Status: {apiResponse.status} {apiResponse.statusText}</span>
              <span>Content-Type: application/json</span>
            </div>
            <pre style={{ color: 'var(--text-primary)', margin: 0, overflowX: 'auto' }}>
              {JSON.stringify(apiResponse.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
