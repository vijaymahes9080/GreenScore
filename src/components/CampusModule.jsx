import React, { useState } from 'react';
import { GraduationCap, Award, Trophy, Users, Sun, FileCheck, Trees, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CAMPUS_LEADERBOARD, CAMPUS_METRICS } from '../data/mockEcosystemData';

export default function CampusModule() {
  const [leaderboard, setLeaderboard] = useState(CAMPUS_LEADERBOARD);
  const [joinedChallenge, setJoinedChallenge] = useState(false);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <GraduationCap style={{ width: '16px', height: '16px' }} />
            <span>Pillar 2 • University & Campus Sustainability Platform</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Green Campus Rankings & Challenges</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Multi-department sustainability index, inter-faculty challenges, and campus-wide solar & paperless tracking.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px' }}>
          <Trophy style={{ width: '22px', height: '22px', color: 'var(--amber-accent)' }} />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>University Overall Index</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--emerald-light)' }}>
              {CAMPUS_METRICS.campusScore} / 100 (A Rating)
            </div>
          </div>
        </div>
      </div>

      {/* Campus Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Active Campus Community</span>
            <Users style={{ width: '18px', height: '18px', color: 'var(--cyan-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>
            {CAMPUS_METRICS.totalStudents.toLocaleString()}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)' }}>Students & Faculty Members</span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Campus Solar Energy</span>
            <Sun style={{ width: '18px', height: '18px', color: 'var(--amber-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--amber-accent)' }}>
            {CAMPUS_METRICS.totalSolarGeneratedMwh} <span style={{ fontSize: '1rem', fontWeight: 500 }}>MWh</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Generated across rooftops</span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Paper Saved (Digital Drive)</span>
            <FileCheck style={{ width: '18px', height: '18px', color: 'var(--emerald-light)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--emerald-light)' }}>
            {CAMPUS_METRICS.paperSavedReams} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Reams</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)' }}>~14.8 Trees Saved</span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
            <span>Greenery & Canopy</span>
            <Trees style={{ width: '18px', height: '18px', color: 'var(--lime-accent)' }} />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--lime-accent)' }}>
            {CAMPUS_METRICS.treeCoverageAcres} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Acres</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Native Flora & Botanical Zone</span>
        </div>
      </div>

      {/* Main Grid: Department Leaderboard & Active Competitions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        
        {/* Department Leaderboard */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Trophy style={{ color: 'var(--amber-accent)', width: '20px', height: '20px' }} />
              Department Ranking Leaderboard
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)', background: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
              Live Updating
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {leaderboard.map((dept) => {
              const isTop = dept.rank === 1;
              return (
                <div 
                  key={dept.rank} 
                  className="glass-panel" 
                  style={{ 
                    padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    border: isTop ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid var(--border-subtle)',
                    background: isTop ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(15, 23, 36, 0.6) 100%)' : 'rgba(15, 23, 36, 0.5)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '8px', 
                      background: isTop ? 'var(--amber-accent)' : (dept.rank === 2 ? '#94a3b8' : (dept.rank === 3 ? '#b45309' : 'rgba(255,255,255,0.08)')),
                      color: isTop || dept.rank <= 3 ? '#000' : 'var(--text-primary)',
                      fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'
                    }}>
                      #{dept.rank}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{dept.department}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {dept.students} Members • Solar: {dept.solarShare}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald-light)' }}>
                      {dept.score}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: dept.trend.startsWith('+') ? 'var(--emerald-light)' : 'var(--rose-accent)' }}>
                      {dept.trend} this month
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inter-Department Challenges & Competitions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award style={{ color: 'var(--cyan-accent)', width: '20px', height: '20px' }} />
              Active Campus Sustainability Drives
            </h3>

            {CAMPUS_METRICS.activeChallenges.map((ch, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1rem' }}>{ch.title}</h4>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--cyan-accent)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {ch.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Target: {ch.target || ch.leader} • Current Progress: <strong>{ch.current || `${ch.daysLeft} days remaining`}</strong>
                </p>
                <div className="progress-bar-bg" style={{ marginBottom: '0.75rem' }}>
                  <div className="progress-bar-fill" style={{ width: ch.current || '80%' }}></div>
                </div>
                <button 
                  onClick={() => setJoinedChallenge(true)}
                  className={`btn-secondary ${joinedChallenge ? '' : 'btn-cyan'}`}
                  style={{ width: '100%', fontSize: '0.82rem', padding: '0.4rem' }}
                >
                  {joinedChallenge ? '✓ Challenge Joined (Contribution Active)' : 'Join Department Challenge'}
                </button>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 36, 0.8) 100%)' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--emerald-light)', marginBottom: '0.5rem' }}>
              💡 Campus AI Insight
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              “Department of Computer Science maintains the lead due to 42% rooftop solar coverage and 98% paperless exam submissions. Physics Dept could gain +3.2 pts by shifting afternoon laboratory HVAC loads.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
