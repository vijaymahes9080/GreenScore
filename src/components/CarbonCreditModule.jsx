import React, { useState } from 'react';
import { ShieldCheck, Award, Download, Sparkles, ExternalLink, RefreshCw, Lock } from 'lucide-react';
import { generateCryptoHash, INITIAL_CARBON_CREDITS } from '../services/carbonCreditEngine';

export default function CarbonCreditModule() {
  const [credits, setCredits] = useState(INITIAL_CARBON_CREDITS);
  const [isMinting, setIsMinting] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [tonnageInput, setTonnageInput] = useState("10");

  const handleMintCredit = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    setIsMinting(true);
    setTimeout(() => {
      const newCredit = {
        id: `CC-2026-${Math.floor(8800 + Math.random() * 1000)}`,
        projectName: projectName,
        tonnage: `${tonnageInput} Tons CO2e`,
        standard: "Verra VCS & Gold Standard",
        hash: generateCryptoHash(),
        status: "Verified & Minted",
        mintedDate: new Date().toISOString().split('T')[0],
        valueUsd: `$${parseFloat(tonnageInput) * 15.0}.00`
      };
      setCredits([newCredit, ...credits]);
      setIsMinting(false);
      setProjectName("");
    }, 1000);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <ShieldCheck style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 1 • Cryptographic Proof-of-Impact Ledger</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Carbon Credit Minting & Verification Engine</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Mint Verra & Gold Standard aligned carbon offset credits backed by cryptographic audit hashes.
          </p>
        </div>
      </div>

      {/* Minting Form Card */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 36, 0.85) 100%)' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
          Mint New Verified Carbon Credit Certificate
        </h3>

        <form onSubmit={handleMintCredit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Eco Project Name</label>
            <input 
              type="text" 
              placeholder="e.g. Western Ghats Solar Park Phase II"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', background: 'rgba(8, 13, 20, 0.8)', border: '1px solid var(--border-subtle)', color: '#fff', fontSize: '0.88rem' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>CO2 Carbon Offset (Tons)</label>
            <input 
              type="number" 
              value={tonnageInput}
              onChange={(e) => setTonnageInput(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', background: 'rgba(8, 13, 20, 0.8)', border: '1px solid var(--border-subtle)', color: '#fff', fontSize: '0.88rem' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }} disabled={isMinting}>
            {isMinting ? 'Minting Cryptographic Hash...' : 'Mint Verified Carbon Credit'}
          </button>
        </form>
      </div>

      {/* Minted Credits Ledger */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Lock style={{ color: 'var(--cyan-accent)', width: '20px', height: '20px' }} />
          Verra & Gold Standard Cryptographic Ledger
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {credits.map((item) => (
            <div key={item.id} className="glass-panel" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{item.projectName}</h4>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-light)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {item.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  ID: <strong>{item.id}</strong> • Standard: {item.standard} • Value: <strong>{item.valueUsd}</strong>
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)', marginTop: '0.25rem' }}>
                  Crypto Hash: {item.hash}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald-light)' }}>
                  {item.tonnage}
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Minted: {item.mintedDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
