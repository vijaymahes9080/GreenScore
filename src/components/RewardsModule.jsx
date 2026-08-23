import React, { useState } from 'react';
import { Award, CheckCircle, ShieldCheck, Plus, Sparkles, Gift, ExternalLink } from 'lucide-react';
import { REWARDS_CATALOG, PERSONAL_DATA } from '../data/mockEcosystemData';

export default function RewardsModule({ greenPoints, onAddPoints }) {
  const [logs, setLogs] = useState(PERSONAL_DATA.recentLogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [actionInput, setActionInput] = useState("");
  const [redeemed, setRedeemed] = useState({});

  const handleLogAction = (e) => {
    e.preventDefault();
    if (!actionInput.trim()) return;

    const pointsEarned = 15;
    const newLog = {
      id: Date.now(),
      action: actionInput,
      points: pointsEarned,
      impact: "-1.8 kg CO2",
      date: "Just Now",
      verified: true
    };

    setLogs([newLog, ...logs]);
    if (onAddPoints) onAddPoints(pointsEarned);
    setActionInput("");
  };

  const handleRedeem = (id, pointsReq) => {
    if (greenPoints < pointsReq) {
      alert(`You need ${pointsReq} GreenPoints to redeem this reward.`);
      return;
    }
    setRedeemed({ ...redeemed, [id]: true });
    if (onAddPoints) onAddPoints(-pointsReq);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--amber-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Award style={{ width: '16px', height: '16px' }} />
            <span>Pillar 7 • Verified GreenPoints & Rewards Program</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Earn & Redeem Sustainability Rewards</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Earn verified GreenPoints for eco-friendly commuting, solar generation, and recycling.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
          <Sparkles style={{ width: '24px', height: '24px', color: 'var(--amber-accent)' }} />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your Points Balance</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
              {greenPoints} GreenPoints
            </div>
          </div>
        </div>
      </div>

      {/* Action Logging Box */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 36, 0.8) 100%)' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
          Log Verified Sustainable Action (Earn +15 GreenPoints)
        </h3>

        <form onSubmit={handleLogAction} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="e.g. Planted native tree sapling / Rode electric bicycle to college..."
            value={actionInput}
            onChange={(e) => setActionInput(e.target.value)}
            style={{ 
              flex: 1, minWidth: '260px', padding: '0.65rem 1rem', borderRadius: '8px', 
              background: 'rgba(8, 13, 20, 0.7)', border: '1px solid var(--border-subtle)',
              color: '#fff', fontSize: '0.9rem' 
            }}
          />
          <button type="submit" className="btn-primary" style={{ fontSize: '0.85rem' }}>
            Submit Action for Instant Verification
          </button>
        </form>
      </div>

      {/* Main Grid: Redeemable Rewards & Action Log */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        
        {/* Redeemable Rewards Catalog */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Gift style={{ color: 'var(--amber-accent)', width: '20px', height: '20px' }} />
            Redeemable Rewards Catalog
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {REWARDS_CATALOG.map(reward => {
              const isRedeemed = redeemed[reward.id];
              const canAfford = greenPoints >= reward.pointsReq;

              return (
                <div key={reward.id} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>{reward.title}</h4>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      Partner: <strong>{reward.partner}</strong>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--amber-accent)', marginTop: '0.25rem' }}>
                      {reward.pointsReq} GreenPoints
                    </div>
                  </div>

                  <button 
                    onClick={() => handleRedeem(reward.id, reward.pointsReq)}
                    className={isRedeemed ? 'btn-secondary' : (canAfford ? 'btn-primary' : 'btn-secondary')}
                    style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem', opacity: (!canAfford && !isRedeemed) ? 0.6 : 1 }}
                    disabled={isRedeemed}
                  >
                    {isRedeemed ? '✓ Redeemed' : (canAfford ? 'Claim Reward' : `Need ${reward.pointsReq} Pts`)}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Action History Log */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
            Verified Action History Log
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {logs.map((item) => (
              <div key={item.id} className="glass-panel" style={{ padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.action}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.date} • Impact: {item.impact}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: 'var(--emerald-light)', fontSize: '0.95rem' }}>
                    +{item.points} Pts
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--emerald-light)' }}>✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
