import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Projects', value: 5, icon: '⚡', color: '#00ff9d' },
  { label: 'GitHub Repos', value: 2, icon: '🔗', color: '#00d4ff' },
  { label: 'Certificates', value: 4, icon: '🏆', color: '#ffd700' },
  { label: 'Languages', value: 5, icon: '💻', color: '#ff6b35' },
];

const Counter = ({ value, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.max(1, Math.ceil(value / 40));
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref} style={{ color, fontFamily: 'Orbitron', fontSize: '2.5rem', fontWeight: 900, textShadow: `0 0 20px ${color}40` }}>{count}</span>;
};

const StatsSection = () => (
  <section id="stats" style={{ padding: '40px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {stats.map((s, i) => (
          <div key={i} className="glass-panel" style={{ padding: '28px 24px', textAlign: 'center', position: 'relative', transition: 'all 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = s.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,255,157,0.15)'}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{s.icon}</div>
            <Counter value={s.value} color={s.color} />
            <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', letterSpacing: '3px', color: '#4a7a5a', marginTop: '8px', textTransform: 'uppercase' }}>{s.label}</div>
            <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '2px', background: s.color, opacity: 0.3, borderRadius: '1px' }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
