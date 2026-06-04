import React, { useState, useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'LANGUAGES',
    color: '#00ff9d',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 78 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'x86 Assembly', level: 60 },
    ]
  },
  {
    category: 'FRAMEWORKS & TOOLS',
    color: '#00d4ff',
    skills: [
      { name: 'Django (Full-Stack/REST)', level: 83 },
      { name: 'React.js', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'JavaFX', level: 72 },
      { name: 'SQL / Database Design', level: 80 },
    ]
  },
  {
    category: 'DEVOPS & SECURITY',
    color: '#ff3860',
    skills: [
      { name: 'Kali Linux / WSL', level: 78 },
      { name: 'Docker', level: 70 },
      { name: 'Jenkins (CI/CD)', level: 65 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vuln Scanning / OWASP', level: 75 },
    ]
  },
];

const SkillBar = ({ name, level, color, visible }) => {
  const [w, setW] = useState(0);
  useEffect(() => { if (visible) setTimeout(() => setW(level), 100); }, [visible, level]);
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontFamily: 'Share Tech Mono', fontSize: '0.78rem' }}>
        <span style={{ color: 'rgba(200,230,200,0.8)' }}>{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${w}%`, background: `linear-gradient(90deg, ${color}80, ${color})`, transition: 'width 1s ease', borderRadius: '2px', boxShadow: `0 0 8px ${color}60` }} />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 02</div>
          <div className="section-title">SKILLS.db</div>
          <div className="line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {skillGroups.map((group, i) => (
            <div key={i} className="glass-panel" style={{ padding: '28px', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = group.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,255,157,0.15)'}>
              <div style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', color: group.color, letterSpacing: '3px', marginBottom: '24px', paddingBottom: '12px', borderBottom: `1px solid ${group.color}20` }}>{group.category}</div>
              {group.skills.map((s, j) => <SkillBar key={j} {...s} color={group.color} visible={visible} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
