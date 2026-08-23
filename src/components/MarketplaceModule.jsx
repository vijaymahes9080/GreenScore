import React, { useState } from 'react';
import { ShoppingBag, Sparkles, TrendingUp, Check, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { MARKETPLACE_ITEMS } from '../data/mockEcosystemData';

export default function MarketplaceModule({ currentScore, onScoreUpdate }) {
  const [purchased, setPurchased] = useState({});

  const handlePurchase = (item) => {
    setPurchased({ ...purchased, [item.id]: true });
    // Boost GreenScore
    const boostVal = parseFloat(item.scoreBoost.replace('+', '').replace(' pts', ''));
    if (onScoreUpdate) onScoreUpdate(boostVal);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <ShoppingBag style={{ width: '16px', height: '16px' }} />
            <span>Pillar 8 • Sustainable Marketplace & Impact Estimator</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Green Products with Impact Calculations</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Instead of generic shopping, GreenScore calculates how much each product will improve your score.
          </p>
        </div>
      </div>

      {/* Impact Pathway Graphic */}
      <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 36, 0.8) 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', textAlign: 'center', fontSize: '0.85rem' }}>
          <div>
            <div style={{ color: 'var(--text-muted)' }}>PROBLEM</div>
            <div style={{ fontWeight: 600 }}>High AC Standby Load</div>
          </div>
          <ArrowRight style={{ color: 'var(--cyan-accent)' }} />
          <div>
            <div style={{ color: 'var(--cyan-accent)' }}>AI RECOMMENDATION</div>
            <div style={{ fontWeight: 600 }}>Smart Power Plug</div>
          </div>
          <ArrowRight style={{ color: 'var(--cyan-accent)' }} />
          <div>
            <div style={{ color: 'var(--emerald-light)' }}>MARKETPLACE PURCHASE</div>
            <div style={{ fontWeight: 600 }}>EcoSmart Plug</div>
          </div>
          <ArrowRight style={{ color: 'var(--cyan-accent)' }} />
          <div>
            <div style={{ color: 'var(--amber-accent)' }}>GREENSCORE BOOST</div>
            <div style={{ fontWeight: 700, color: 'var(--emerald-light)' }}>+4.5 pts Improvement</div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {MARKETPLACE_ITEMS.map((item) => {
          const isPurchased = purchased[item.id];

          return (
            <div key={item.id} className="glass-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-light)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--amber-accent)', fontWeight: 600 }}>
                    ★ {item.rating}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{item.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {item.description}
                </p>

                {/* Embedded Score Impact Box */}
                <div className="glass-panel" style={{ padding: '0.75rem', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Impact Calculation:</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--emerald-light)', fontSize: '0.95rem' }}>
                      GreenScore Boost: {item.scoreBoost}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                      -{item.co2SavedPerYear}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                  {item.price}
                </span>

                <button 
                  onClick={() => handlePurchase(item)}
                  className={isPurchased ? 'btn-secondary' : 'btn-primary'}
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}
                  disabled={isPurchased}
                >
                  {isPurchased ? '✓ Installed & Applied' : 'Buy & Boost Score'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
