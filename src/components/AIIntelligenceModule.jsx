import React, { useState } from 'react';
import { Bot, Sparkles, Send, Camera, TrendingDown, Lightbulb, CheckCircle2, RefreshCw } from 'lucide-react';
import { COMPUTER_VISION_SAMPLES } from '../data/mockEcosystemData';

export default function AIIntelligenceModule({ currentScore, onAddPoints }) {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: `Hello Vijay! I am GreenScore AI. Your current Ecosystem Score is ${currentScore}/100. How can I assist you with energy optimization, campus rankings, or waste sorting today?` }
  ]);
  const [selectedCvSample, setSelectedCvSample] = useState(COMPUTER_VISION_SAMPLES[0]);
  const [scannedResult, setScannedResult] = useState(null);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput("");

    // Simulate AI response based on keywords
    setTimeout(() => {
      let response = "I've analyzed your telemetry data. Your highest potential for improvement lies in shifting peak AC usage to solar generation hours between 11:00 AM and 03:00 PM.";
      const lower = userText.toLowerCase();

      if (lower.includes("score") || lower.includes("improve")) {
        response = `To reach a score of 92+, I recommend: 1) Increasing AC temp by 1°C (+2.4 pts), 2) Installing smart flow aerators on kitchen taps (+3.8 pts), and 3) Participating in the Campus Paperless Drive (+5.0 pts).`;
      } else if (lower.includes("campus") || lower.includes("college")) {
        response = `The Department of Computer Science is currently #1 with 91.2 pts. Participating in the 'Zero Paper Final Exams Drive' will earn you +25 GreenPoints for your department!`;
      } else if (lower.includes("waste") || lower.includes("recycle")) {
        response = `Use our Computer Vision Waste Scanner module below! Scan your plastic bottle or organic waste to receive instant sorting guidelines and +5 GreenPoints per item.`;
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 600);
  };

  const handleRunCvScan = () => {
    setScannedResult(null);
    setTimeout(() => {
      setScannedResult(selectedCvSample);
      if (onAddPoints) onAddPoints(selectedCvSample.greenPointsReward);
    }, 800);
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Bot style={{ width: '16px', height: '16px' }} />
            <span>Pillar 9 • Central AI Intelligence Layer</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Predictive, Computer Vision & Conversational AI</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Continuous optimization engine powered by machine learning, vision waste classification, and predictive forecasting.
          </p>
        </div>
      </div>

      {/* Grid: Conversational AI Assistant & Computer Vision Waste Scanner */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Conversational Assistant */}
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '480px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bot style={{ color: 'var(--cyan-accent)', width: '20px', height: '20px' }} />
            Conversational Sustainability AI
          </h3>

          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem', paddingRight: '0.5rem' }}>
            {chatMessages.map((msg, index) => (
              <div 
                key={index}
                style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendChat} style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Ask GreenScore AI (e.g. How to improve my score?)..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              style={{ 
                flex: 1, padding: '0.65rem 1rem', borderRadius: '8px', 
                background: 'rgba(8, 13, 20, 0.8)', border: '1px solid var(--border-subtle)',
                color: '#fff', fontSize: '0.88rem' 
              }}
            />
            <button type="submit" className="btn-cyan" style={{ padding: '0.65rem 1rem' }}>
              <Send style={{ width: '16px', height: '16px' }} />
            </button>
          </form>
        </div>

        {/* Computer Vision Waste Classifier Demo */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Camera style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
            Computer Vision Waste Classifier Demo
          </h3>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Select a sample waste item image to simulate neural network image classification:
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {COMPUTER_VISION_SAMPLES.map(sample => (
              <button 
                key={sample.id}
                onClick={() => { setSelectedCvSample(sample); setScannedResult(null); }}
                className={`btn-secondary ${selectedCvSample.id === sample.id ? 'btn-cyan' : ''}`}
                style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem' }}
              >
                {sample.label}
              </button>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'center', border: '1px dashed var(--border-glow)', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {selectedCvSample.id === 'cv-1' ? '🍾' : (selectedCvSample.id === 'cv-2' ? '🍌' : '🔋')}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>{selectedCvSample.label}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Ready for Vision Neural Scan</div>

            <button onClick={handleRunCvScan} className="btn-primary" style={{ marginTop: '0.85rem', fontSize: '0.82rem' }}>
              <Sparkles style={{ width: '16px', height: '16px' }} />
              Run Vision Classification Model
            </button>
          </div>

          {scannedResult && (
            <div className="glass-panel" style={{ padding: '1rem', border: '1px solid rgba(16, 185, 129, 0.4)', background: 'rgba(16, 185, 129, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--emerald-light)', fontSize: '0.95rem' }}>
                  Category: {scannedResult.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Confidence: {scannedResult.confidence}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                💡 {scannedResult.tip}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--amber-accent)' }}>
                🎉 Earned +{scannedResult.greenPointsReward} GreenPoints!
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Predictive AI Forecasting Card */}
      <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 36, 0.8) 100%)' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--cyan-accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingDown style={{ width: '20px', height: '20px' }} />
          Predictive Footprint & Energy Forecast (Next 30 Days)
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
          Based on historical IoT telemetry and seasonal trends, your estimated household footprint for September 2026 is projected at <strong>142 kWh</strong> (-18% below neighborhood average). Implementing AI solar-shift recommendations will further cut electricity costs by <strong>$28.50/month</strong>.
        </p>
      </div>
    </div>
  );
}
