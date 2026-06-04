import React from 'react';

const certs = [
  { title: 'Django Web Framework', issuer: 'Meta', year: 'Apr 2026', color: '#00d4ff', icon: '🐍', id: '0065F6W7DGC5' },
  { title: 'Database Management with Java and SQL', issuer: 'Amazon', year: 'Apr 2026', color: '#ffd700', icon: '🗄️', id: 'EIV8S4VELBEA' },
  { title: 'Intro to Software Engineering', issuer: 'IBM', year: '2026', color: '#4285f4', icon: '⚙️', id: 'YX8LJKA82L3J' },
  { title: 'Data Structures in C++', issuer: 'University of Michigan', year: '2026', color: '#ff3860', icon: '📊', id: 'D7H1KJ0H20OV' },
  { title: 'OOP — Java & C++', issuer: 'KSIU Coursework', year: '2025', color: '#00ff9d', icon: '☕', id: null },
  { title: 'Computer Architecture', issuer: 'KSIU Coursework', year: '2025', color: '#ff6b35', icon: '🖥️', id: null },
  { title: 'Docker & Jenkins CI/CD', issuer: 'DevOps Training', year: '2026', color: '#a855f7', icon: '🐳', id: null },
  { title: 'Web Security & Threat Modeling', issuer: 'Self / Projects', year: '2026', color: '#ffd700', icon: '🔐', id: null },
];

const CertificatesSection = () => (
  <section id="certificates">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">// 05</div>
        <div className="section-title">ACHIEVEMENTS.dat</div>
        <div className="line" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {certs.map((c, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px', transition: 'all 0.3s', cursor: 'default' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '60'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 30px ${c.color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,157,0.15)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{c.icon}</div>
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.72rem', color: c.color, marginBottom: '8px', letterSpacing: '1px', lineHeight: 1.4 }}>{c.title}</div>
            <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#4a7a5a', marginBottom: '4px' }}>{c.issuer}</div>
            <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.65rem', color: c.color + '80', marginBottom: c.id ? '4px' : '0' }}>{c.year}</div>
            {c.id && <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.58rem', color: '#2a4a3a' }}>ID: {c.id}</div>}
            <div style={{ marginTop: '12px', height: '2px', background: c.color + '20', borderRadius: '1px' }}>
              <div style={{ height: '100%', width: '100%', background: c.color, borderRadius: '1px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
