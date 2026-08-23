import React, { useState } from 'react';
import { Award, Trophy, Users, Zap, ShieldAlert, CheckCircle2, Flame } from 'lucide-react';

export default function SocialArenaModule() {
  const [duels, setDuels] = useState([
    { id: 1, teamA: "Dept of Computer Science", scoreA: 91.2, teamB: "Dept of Mathematics", scoreB: 87.5, status: "LIVE BATTLE", daysLeft: 2 },
    { id: 2, teamA: "GreenScore Tech Hub", scoreA: 84.6, teamB: "Eco-Innovators Union", scoreB: 82.1, status: "LIVE BATTLE", daysLeft: 5 }
  ]);

  const [quests, setQuests] = useState([
    { id: 101, title: "7-Day Zero Single-Use Plastic Quest", reward: "+50 GreenPoints", progress: "5 / 7 Days", completed: false },
    { id: 102, title: "100% Solar Powered Weekend", reward: "+75 GreenPoints", progress: "2 / 2 Days", completed: true },
    { id: 103, title: "Electric Transit Commute Sprint", reward: "+30 GreenPoints", progress: "3 / 5 Days", completed: false }
  ]);

  const toggleQuest = (id) => {
    setQuests(prev => prev.map(q => q.id === id ? { ...q, completed: !q.completed } : q));
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--amber-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Flame style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 3 • Peer-to-Peer Eco Battle Arena</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Gamified Sustainability Duels & Quests</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Compete in live inter-departmental sustainability duels, unlock quest badges, and build your eco-streak.
          </p>
        </div>
      </div>

      {/* Live Duels */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Trophy style={{ color: 'var(--amber-accent)', width: '20px', height: '20px' }} />
        Active Peer-to-Peer Sustainability Duels
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {duels.map(duel => (
          <div key={duel.id} className="glass-card" style={{ padding: '1.35rem', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(15, 23, 36, 0.8) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="score-badge score-badge-high" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                🔥 {duel.status}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {duel.daysLeft} days remaining
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '1rem 0', textAlign: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--amber-accent)' }}>{duel.teamA}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--emerald-light)' }}>{duel.scoreA}</div>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--rose-accent)' }}>VS</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--cyan-accent)' }}>{duel.teamB}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>{duel.scoreB}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Eco Quests */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
          Daily Eco Quests & Streak Challenges
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {quests.map(quest => (
            <div key={quest.id} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '0.98rem', marginBottom: '0.2rem' }}>{quest.title}</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Progress: {quest.progress} • Reward: <strong style={{ color: 'var(--amber-accent)' }}>{quest.reward}</strong>
                </span>
              </div>

              <button 
                onClick={() => toggleQuest(quest.id)}
                className={`btn-secondary ${quest.completed ? 'btn-primary' : ''}`}
                style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem' }}
              >
                {quest.completed ? '✓ Quest Completed' : 'Complete Step'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
