import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SmartHomeModule from './components/SmartHomeModule';
import CampusModule from './components/CampusModule';
import EnterpriseModule from './components/EnterpriseModule';
import CityModule from './components/CityModule';
import ESGReportingModule from './components/ESGReportingModule';
import IoTNetworkModule from './components/IoTNetworkModule';
import RewardsModule from './components/RewardsModule';
import MarketplaceModule from './components/MarketplaceModule';
import AIIntelligenceModule from './components/AIIntelligenceModule';
import CarbonCreditModule from './components/CarbonCreditModule';
import ClimateScenarioModule from './components/ClimateScenarioModule';
import SocialArenaModule from './components/SocialArenaModule';
import ARSpatialHeatmapModule from './components/ARSpatialHeatmapModule';
import APIDeveloperModule from './components/APIDeveloperModule';
import VoiceAssistantModule from './components/VoiceAssistantModule';
import { Leaf } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('smart-home');
  const [currentScore, setCurrentScore] = useState(86.4);
  const [greenPoints, setGreenPoints] = useState(340);
  const userName = "Vijay Mahes";

  const handleScoreUpdate = (delta) => {
    setCurrentScore(prev => Math.min(99.9, Math.max(10, Math.round((prev + delta) * 10) / 10)));
  };

  const handleAddPoints = (pts) => {
    setGreenPoints(prev => Math.max(0, prev + pts));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Sticky Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentScore={currentScore}
        greenPoints={greenPoints}
        userName={userName}
      />

      {/* Main View Module Switcher */}
      <main style={{ flex: 1 }}>
        {activeTab === 'smart-home' && <SmartHomeModule onScoreUpdate={handleScoreUpdate} />}
        {activeTab === 'campus' && <CampusModule />}
        {activeTab === 'enterprise' && <EnterpriseModule />}
        {activeTab === 'city' && <CityModule />}
        {activeTab === 'esg-reports' && <ESGReportingModule />}
        {activeTab === 'iot-network' && <IoTNetworkModule />}
        {activeTab === 'rewards' && <RewardsModule greenPoints={greenPoints} onAddPoints={handleAddPoints} />}
        {activeTab === 'marketplace' && <MarketplaceModule currentScore={currentScore} onScoreUpdate={handleScoreUpdate} />}
        {activeTab === 'ai-engine' && <AIIntelligenceModule currentScore={currentScore} onAddPoints={handleAddPoints} />}
        
        {/* Next-Gen Innovation Modules */}
        {activeTab === 'carbon-credit' && <CarbonCreditModule />}
        {activeTab === 'climate-2030' && <ClimateScenarioModule />}
        {activeTab === 'p2p-arena' && <SocialArenaModule />}
        {activeTab === 'ar-heatmap' && <ARSpatialHeatmapModule />}
        {activeTab === 'dev-api' && <APIDeveloperModule />}
        {activeTab === 'voice-ai' && <VoiceAssistantModule />}
      </main>

      {/* Modern Ecosystem Footer */}
      <footer className="glass-card-static" style={{ borderRadius: 0, borderBottom: 'none', borderLeft: 'none', borderRight: 'none', padding: '1.5rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Leaf style={{ color: 'var(--emerald-light)', width: '18px', height: '18px' }} />
            <span>GreenScore Sustainability OS v2.5 • Innovation Ecosystem</span>
          </div>

          <div>
            Built for MCA Capstone & Enterprise ESG • Author: <strong>Vijay Mahes</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
