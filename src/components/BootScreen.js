import React, { useState, useEffect } from 'react';

const lines = [
  '> BIOS v2.6.0 — Initializing secure boot sequence...',
  '> Loading kernel modules: [OK]',
  '> Mounting encrypted filesystem: [OK]',
  '> Establishing secure connection: [OK]',
  '> Authenticating user: ABDELRAHMAN ASHRAF',
  '> Access level: FULL SYSTEM ACCESS',
  '> Loading portfolio modules...',
  '> Welcome to the Command Center.',
];

const BootScreen = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        setProgress(Math.round(((i + 1) / lines.length) * 100));
      }, i * 380);
    });
  }, []);

  return (
    <div style={{
      background: '#020c14', height: '100vh', display: 'flex',
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Share Tech Mono', monospace", color: '#00ff9d',
      padding: '40px'
    }}>
      <div style={{ fontSize: '2rem', fontFamily: 'Orbitron', marginBottom: '40px', textShadow: '0 0 20px #00ff9d' }}>
        CYBER//PORTFOLIO
      </div>
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '32px' }}>
        {visibleLines.map((line, i) => (
          <div key={i} style={{
            padding: '4px 0', fontSize: '0.85rem',
            color: line.includes('OK') ? '#00ff9d' : line.includes('Welcome') ? '#ffd700' : '#4a9a6a',
            animation: 'fadeIn 0.3s ease'
          }}>
            {line}
          </div>
        ))}
      </div>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem', color: '#4a7a5a' }}>
          <span>LOADING SYSTEM</span><span>{progress}%</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(0,255,157,0.1)', borderRadius: '2px' }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: 'linear-gradient(90deg, #00ff9d, #00d4ff)',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px #00ff9d',
            borderRadius: '2px'
          }} />
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
};

export default BootScreen;
