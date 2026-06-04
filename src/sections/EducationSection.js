import React from 'react';

const timeline = [
  { year: '2024', title: 'Started CS at KSIU', desc: 'Enrolled in Computer Science — Cybersecurity Specialization at King Salman International University. First semester: OOP with Java/C++, Computer Architecture, Discrete Math.', icon: '🎓', color: '#00ff9d', status: 'done' },
  { year: '2025', title: 'Core Engineering & Dev', desc: 'Completed: Data Structures in C, Software Engineering Fundamentals (IBM), Database Management with Java & SQL (Amazon). Built first full-stack projects.', icon: '⚙️', color: '#00d4ff', status: 'done' },
  { year: '2026', title: 'Cybersecurity & DevOps', desc: 'Django Full-Stack (Meta), Docker & Jenkins CI/CD, Kali Linux penetration testing. Built Web Shield Scanner and KSIU Secure Portal. Actively seeking internship.', icon: '🔒', color: '#ffd700', status: 'current' },
  { year: '2027', title: 'Internship & Certifications', desc: 'Target: Security Engineer internship. Plans for OSCP and advanced web threat modeling certifications.', icon: '🚀', color: '#ff6b35', status: 'future' },
];

const EducationSection = () => (
  <section id="education">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">// 04</div>
        <div className="section-title">EDUCATION.log</div>
        <div className="line" />
      </div>
      <div style={{ position: 'relative', paddingLeft: '40px' }}>
        <div style={{ position: 'absolute', left: '16px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #00ff9d, #00d4ff, #ffd700, rgba(255,107,53,0.3))', borderRadius: '1px' }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '40px', paddingLeft: '40px', opacity: item.status === 'future' ? 0.5 : 1 }}>
            <div style={{ position: 'absolute', left: '-32px', top: '12px', width: '16px', height: '16px', borderRadius: '50%', background: item.status === 'current' ? item.color : item.status === 'done' ? item.color + '80' : '#1a2a20', border: `2px solid ${item.color}`, boxShadow: item.status === 'current' ? `0 0 15px ${item.color}` : 'none' }} />
            <div className="glass-panel" style={{ padding: '24px', borderColor: item.status === 'current' ? item.color + '40' : 'rgba(0,255,157,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Orbitron', fontSize: '1rem', color: item.color }}>{item.title}</div>
                  <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.75rem', color: '#4a7a5a', marginTop: '2px' }}>
                    {item.year}
                    {item.status === 'current' && <span style={{ color: item.color, marginLeft: '12px' }}>← CURRENT</span>}
                    {item.status === 'future' && <span style={{ color: '#4a7a5a', marginLeft: '12px' }}>[ PLANNED ]</span>}
                  </div>
                </div>
              </div>
              <p style={{ color: 'rgba(200,230,200,0.7)', fontSize: '0.92rem', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
