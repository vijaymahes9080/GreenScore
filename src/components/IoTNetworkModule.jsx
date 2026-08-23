import React, { useState, useEffect } from 'react';
import { Cpu, Wifi, Activity, Zap, Droplets, Trash2, Wind, RefreshCw, Play, Pause } from 'lucide-react';
import { IOT_NODES } from '../data/mockEcosystemData';

export default function IoTNetworkModule() {
  const [nodes, setNodes] = useState(IOT_NODES);
  const [isStreaming, setIsStreaming] = useState(true);
  const [mqttLogs, setMqttLogs] = useState([
    { id: 1, topic: "greenscore/esp32-01/solar", payload: '{"kw": 5.38, "v": 230, "a": 23.4}', time: "07:38:12" },
    { id: 2, topic: "greenscore/esp32-02/water", payload: '{"flow_lpm": 18.5, "status": "NORMAL"}', time: "07:38:14" },
    { id: 3, topic: "greenscore/esp32-04/aqi", payload: '{"pm25": 18, "aqi": 42, "temp": 26.4}', time: "07:38:15" }
  ]);

  // Simulate real-time streaming MQTT packets
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      const randomNode = Math.floor(Math.random() * 4) + 1;
      const timeStr = new Date().toLocaleTimeString();
      let topic = `greenscore/esp32-0${randomNode}/sensor`;
      let payload = '';

      if (randomNode === 1) {
        topic = "greenscore/esp32-01/solar";
        const kw = (4.8 + (Math.random() * 0.8)).toFixed(2);
        payload = `{"kw": ${kw}, "status": "GENERATING"}`;
      } else if (randomNode === 2) {
        topic = "greenscore/esp32-02/water";
        const flow = (16.0 + (Math.random() * 4.0)).toFixed(1);
        payload = `{"flow_lpm": ${flow}, "leak": false}`;
      } else if (randomNode === 3) {
        topic = "greenscore/esp32-03/waste";
        const fill = Math.floor(40 + Math.random() * 5);
        payload = `{"fill_level_pct": ${fill}, "bin_id": "MAIN-01"}`;
      } else {
        topic = "greenscore/esp32-04/aqi";
        const pm = Math.floor(16 + Math.random() * 5);
        payload = `{"pm25": ${pm}, "aqi": ${pm + 24}}`;
      }

      setMqttLogs(prev => [
        { id: Date.now(), topic, payload, time: timeStr },
        ...prev.slice(0, 7)
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isStreaming]);

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            <Cpu style={{ width: '16px', height: '16px' }} />
            <span>Pillar 6 • ESP32 Hardware IoT Sensing Layer</span>
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Real-Time MQTT Telemetry Stream</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Physical hardware integration layer streaming telemetry directly into the GreenScore AI engine.
          </p>
        </div>

        <button 
          onClick={() => setIsStreaming(!isStreaming)}
          className={`btn-secondary ${isStreaming ? 'btn-cyan' : ''}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isStreaming ? <Pause style={{ width: '16px', height: '16px' }} /> : <Play style={{ width: '16px', height: '16px' }} />}
          {isStreaming ? 'Streaming Live MQTT (Pause)' : 'Resume MQTT Telemetry'}
        </button>
      </div>

      {/* Hardware Node Status Grid */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Wifi style={{ color: 'var(--emerald-light)', width: '20px', height: '20px' }} />
        Active Hardware Gateway Nodes
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {nodes.map(node => (
          <div key={node.id} className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-accent)' }}>
                {node.id}
              </div>
              <span className="score-badge score-badge-high" style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem' }}>
                {node.status}
              </span>
            </div>

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{node.location}</h4>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Sensor: <strong>{node.sensor}</strong>
            </div>

            <div className="glass-panel" style={{ padding: '0.6rem 0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Live Output:</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--emerald-light)', fontSize: '0.9rem' }}>
                {node.value}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              <span>Latency: {node.latency}</span>
              <span>Wi-Fi Signal: {node.signal}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live MQTT Packet Stream Console */}
      <div className="glass-card" style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontSize: '0.9rem', fontWeight: 600 }}>
            <Activity style={{ width: '16px', height: '16px' }} />
            <span>MQTT / WebSocket Ingestion Logs (Broker: mqtt.greenscore.io:8883)</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {isStreaming ? '⚡ Live Ingesting...' : '⏸ Stream Paused'}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {mqttLogs.map((log) => (
            <div key={log.id} style={{ 
              background: 'rgba(8, 13, 20, 0.9)', padding: '0.6rem 0.85rem', borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem',
              fontSize: '0.82rem', borderLeft: '3px solid var(--emerald-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>[{log.time}]</span>
                <span style={{ color: 'var(--cyan-accent)', fontWeight: 600 }}>PUB</span>
                <span style={{ color: 'var(--text-primary)' }}>{log.topic}</span>
              </div>
              <div style={{ color: 'var(--lime-accent)' }}>
                {log.payload}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
