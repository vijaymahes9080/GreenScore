import React, { useState } from 'react';
import { Bot, Sparkles, Volume2, CheckCircle2 } from 'lucide-react';

export default function VoiceAssistantModule() {
  const [isListening, setIsListening] = useState(false);
  const [activeVoiceCmd, setActiveVoiceCmd] = useState("");
  const [voiceLog, setVoiceLog] = useState([
    { id: 1, cmd: "Hey GreenScore, what is my score?", response: "Your current score is 86.4 (A+ Grade). Household solar offset is 100%.", time: "07:44 AM" }
  ]);

  const sampleCommands = [
    "Hey GreenScore, optimize Living Room AC",
    "Hey GreenScore, show CS department ranking",
    "Hey GreenScore, export ESG compliance report"
  ];

  const handleTriggerVoiceCmd = (cmdText) => {
    setActiveVoiceCmd(cmdText);
    setIsListening(true);

    setTimeout(() => {
      setIsListening(false);
      let responseText = "Action executed cleanly. GreenScore AI updated telemetry.";

      if (cmdText.includes("AC")) {
        responseText = "Thermostat adjusted to 25°C. Estimated energy saving: 4.2 kWh/day.";
      } else if (cmdText.includes("ranking") || cmdText.includes("CS")) {
        responseText = "Department of Computer Science is ranked #1 with 91.2 GreenPoints.";
      } else if (cmdText.includes("ESG")) {
        responseText = "GRI & ISSB 2026 Q3 ESG report generated and saved to exports archive.";
      }

      setVoiceLog(prev => [
        { id: Date.now(), cmd: cmdText, response: responseText, time: new Date().toLocaleTimeString() },
        ...prev
      ]);
    }, 1200);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Volume2 style={{ width: '16px', height: '16px' }} />
            <span>Innovation Module 6 • Voice AI Command Assistant</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Voice-Activated AI Control Center</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Hands-free voice AI interface for controlling smart home IoT devices and accessing ESG data.
          </p>
        </div>
      </div>

      {/* Voice Trigger Box */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 36, 0.85) 100%)' }}>
        <div style={{ 
          width: '70px', height: '70px', borderRadius: '50%', margin: '0 auto 1rem auto',
          background: isListening ? 'rgba(6, 182, 212, 0.3)' : 'rgba(16, 185, 129, 0.15)',
          border: `2px solid ${isListening ? 'var(--cyan-accent)' : 'var(--emerald-light)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isListening ? '0 0 25px rgba(6, 182, 212, 0.6)' : 'none'
        }}>
          <Volume2 style={{ width: '32px', height: '32px', color: isListening ? 'var(--cyan-accent)' : 'var(--emerald-light)' }} />
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>
          {isListening ? '🎙 Listening to Voice Command...' : 'Click a Sample Command to Trigger Voice AI'}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          {activeVoiceCmd || 'Select a voice trigger below'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {sampleCommands.map(cmd => (
            <button 
              key={cmd}
              onClick={() => handleTriggerVoiceCmd(cmd)}
              className="btn-secondary"
              style={{ fontSize: '0.82rem' }}
              disabled={isListening}
            >
              🗣 {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Voice Transcript History Log */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>Voice Assistant Event Log</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {voiceLog.map(item => (
            <div key={item.id} className="glass-panel" style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--cyan-accent)', marginBottom: '0.25rem' }}>
                <span>🗣 Command: "{item.cmd}"</span>
                <span style={{ color: 'var(--text-muted)' }}>[{item.time}]</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>
                🤖 AI Response: {item.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
