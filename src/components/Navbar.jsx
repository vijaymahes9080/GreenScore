import React from 'react';
import { 
  Leaf, Home, GraduationCap, Building2, Landmark, 
  FileText, Cpu, Award, ShoppingBag, Bot, Zap, Sparkles,
  ShieldCheck, Sun, Moon, Flame, Camera, Code, Volume2
} from 'lucide-react';
import { getGradeFromScore } from '../services/scoringEngine';

export default function Navbar({ activeTab, setActiveTab, currentScore, greenPoints, userName, theme, toggleTheme }) {
  const gradeInfo = getGradeFromScore(currentScore);

  const tabs = [
    { id: 'smart-home', label: 'Smart Home', icon: Home },
    { id: 'campus', label: 'Campus', icon: GraduationCap },
    { id: 'enterprise', label: 'Enterprise ESG', icon: Building2 },
    { id: 'city', label: 'City Municipal', icon: Landmark },
    { id: 'esg-reports', label: 'ESG Reports', icon: FileText },
    { id: 'iot-network', label: 'IoT Live Stream', icon: Cpu },
    { id: 'rewards', label: 'Rewards', icon: Award },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'ai-engine', label: 'GreenScore AI', icon: Bot, highlight: true },
    { id: 'carbon-credit', label: 'Carbon NFT', icon: ShieldCheck, highlight: true },
    { id: 'climate-2030', label: '2030 Earth AI', icon: Sun },
    { id: 'p2p-arena', label: 'Eco Arena', icon: Flame },
    { id: 'ar-heatmap', label: 'AR Heatmap', icon: Camera },
    { id: 'dev-api', label: 'Dev API', icon: Code },
    { id: 'voice-ai', label: 'Voice AI', icon: Volume2 }
  ];

  return (
    <header className="glass-card-static" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ paddingTop: '0.85rem', paddingBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Brand & Live Ticker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '42px', height: '42px', borderRadius: '12px', 
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
              }}>
                <Leaf style={{ color: '#ffffff', width: '24px', height: '24px' }} />
              </div>
              <div>
                <h1 style={{ fontSize: '1.35rem', margin: 0, lineHeight: 1.1 }} className="text-gradient-emerald">
                  GREENCORE
                </h1>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Sustainability OS v2.5
                </span>
              </div>
            </div>

            {/* Score Ticker */}
            <div className="glass-panel" style={{ padding: '0.4rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Zap style={{ width: '16px', height: '16px', color: 'var(--emerald-light)' }} />
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Score:</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {currentScore}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ 100</span>
              </div>
              <span className="score-badge score-badge-high" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>
                {gradeInfo.grade}
              </span>
            </div>
          </div>

          {/* User Profile & Light/Dark Theme Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={toggleTheme}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
              title="Toggle Light / Dark Theme"
            >
              {theme === 'dark' ? <Sun style={{ width: '16px', height: '16px', color: 'var(--amber-accent)' }} /> : <Moon style={{ width: '16px', height: '16px', color: 'var(--cyan-accent)' }} />}
              <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
            </button>

            <div className="glass-panel" style={{ padding: '0.4rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: '10px' }}>
              <Award style={{ width: '18px', height: '18px', color: 'var(--amber-accent)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--amber-accent)' }}>
                {greenPoints} GreenPoints
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ 
                width: '36px', height: '36px', borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--border-glow)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.9rem', color: 'var(--emerald-light)'
              }}>
                {userName.charAt(0)}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav style={{ 
          display: 'flex', alignItems: 'center', gap: '0.4rem', 
          marginTop: '0.85rem', overflowX: 'auto', paddingBottom: '0.2rem'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-tab-item ${isActive ? 'active' : ''}`}
                style={tab.highlight && !isActive ? { border: '1px solid rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.08)' } : {}}
              >
                <Icon style={{ width: '16px', height: '16px', color: isActive ? 'var(--emerald-light)' : (tab.highlight ? 'var(--cyan-accent)' : 'inherit') }} />
                <span>{tab.label}</span>
                {tab.highlight && (
                  <Sparkles style={{ width: '12px', height: '12px', color: 'var(--cyan-accent)' }} />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
