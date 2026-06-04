import React, { useState, useEffect } from 'react';

const SecretPage = ({ onBack }) => {
  const [phase, setPhase] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(glitchInterval); };
  }, []);

  const easterEggs = [
    { emoji: '🥚', title: 'Easter Egg #1', desc: 'You typed the magic command. Respect.' },
    { emoji: '🐇', title: 'The White Rabbit', desc: 'Reality is just a simulation. Code it better.' },
    { emoji: '🔑', title: 'Root Access', desc: 'The best hackers build, not break.' },
    { emoji: '💀', title: 'Hacker Mindset', desc: 'In another timeline, this was malware.' },
  ];

  return (
    <div style={{
      minHeight: '100vh', background: '#020c14',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'flex-start', padding: '80px 40px',
      fontFamily: 'Share Tech Mono', position: 'relative', overflow: 'hidden'
    }}>
      {/* Matrix-like background effect */}
      <div style={{ position: 'fixed', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,157,0.01) 2px, rgba(0,255,157,0.01) 4px)', pointerEvents: 'none' }} />

      {/* Back button */}
      <button onClick={onBack} style={{
        position: 'fixed', top: '24px', left: '24px', background: 'rgba(255,56,96,0.1)',
        border: '1px solid rgba(255,56,96,0.4)', color: '#ff3860',
        fontFamily: 'Share Tech Mono', fontSize: '0.8rem', padding: '8px 20px',
        cursor: 'pointer', letterSpacing: '2px', zIndex: 10, borderRadius: '2px',
        transition: 'all 0.2s'
      }}
        onMouseEnter={e => e.target.style.background = 'rgba(255,56,96,0.2)'}
        onMouseLeave={e => e.target.style.background = 'rgba(255,56,96,0.1)'}>
        ← EXIT
      </button>

      {/* Header */}
      <div style={{
        textAlign: 'center', marginBottom: '60px',
        animation: 'fadeIn 0.8s ease',
        filter: glitch ? 'hue-rotate(90deg) saturate(200%)' : 'none',
        transition: 'filter 0.05s'
      }}>
        <div style={{ fontFamily: 'Orbitron', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#ff3860', marginBottom: '8px', textShadow: '0 0 30px rgba(255,56,96,0.5)' }}>
          ⚠ ROOT ACCESS ⚠
        </div>
        <div style={{ color: '#4a7a5a', letterSpacing: '4px', fontSize: '0.75rem' }}>
          CLASSIFIED — EYES ONLY
        </div>
        <div style={{ marginTop: '16px', color: '#00ff9d', fontSize: '0.85rem' }}>
          Welcome to the hidden layer. You found it.
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', display: 'grid', gap: '32px' }}>

        {/* CV Download */}
        {phase >= 1 && (
          <div style={{ background: 'rgba(0,255,157,0.04)', border: '1px solid rgba(0,255,157,0.2)', borderRadius: '4px', padding: '32px', textAlign: 'center', animation: 'fadeInUp 0.6s ease' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
            <div style={{ fontFamily: 'Orbitron', color: '#00ff9d', fontSize: '1.2rem', marginBottom: '8px' }}>Curriculum Vitae</div>
            <div style={{ color: '#4a7a5a', fontSize: '0.85rem', marginBottom: '24px' }}>Updated June 2026 — Contains classified skills</div>
            <a href="/resume.pdf" download style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #00ff9d, #00cc7a)',
              color: '#020c14', fontFamily: 'Orbitron', fontSize: '0.75rem',
              letterSpacing: '3px', padding: '14px 32px', textDecoration: 'none',
              borderRadius: '2px', fontWeight: 700, transition: 'all 0.3s'
            }}
              onMouseEnter={e => e.target.style.boxShadow = '0 0 25px rgba(0,255,157,0.5)'}
              onMouseLeave={e => e.target.style.boxShadow = 'none'}>
              DOWNLOAD CV
            </a>
          </div>
        )}

        {/* Best Projects */}
        {phase >= 2 && (
          <div style={{ animation: 'fadeInUp 0.6s ease' }}>
            <div style={{ fontFamily: 'Orbitron', color: '#ffd700', fontSize: '0.85rem', letterSpacing: '3px', marginBottom: '20px' }}>⭐ FEATURED PROJECTS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                { name: 'Web Shield', desc: 'My proudest security tool. Real CVEs found.', color: '#ff3860', link: '#' },
                { name: 'SecureChat', desc: 'E2E encryption, zero knowledge. My magnum opus.', color: '#00d4ff', link: '#' },
              ].map((p, i) => (
                <div key={i} style={{ padding: '20px', border: `1px solid ${p.color}30`, borderRadius: '4px', background: `${p.color}08`, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = `${p.color}15`}
                  onMouseLeave={e => e.currentTarget.style.background = `${p.color}08`}>
                  <div style={{ fontFamily: 'Orbitron', color: p.color, marginBottom: '8px', fontSize: '0.9rem' }}>{p.name}</div>
                  <div style={{ color: 'rgba(200,230,200,0.7)', fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Easter Eggs */}
        {phase >= 3 && (
          <div style={{ animation: 'fadeInUp 0.6s ease' }}>
            <div style={{ fontFamily: 'Orbitron', color: '#ffd700', fontSize: '0.85rem', letterSpacing: '3px', marginBottom: '20px' }}>🥚 EASTER EGGS COLLECTION</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {easterEggs.map((egg, i) => (
                <div key={i} style={{ padding: '20px', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '4px', textAlign: 'center', background: 'rgba(255,215,0,0.04)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{egg.emoji}</div>
                  <div style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#ffd700', marginBottom: '6px', letterSpacing: '1px' }}>{egg.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#4a7a5a', lineHeight: 1.5 }}>{egg.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Secret message */}
        {phase >= 3 && (
          <div style={{ textAlign: 'center', color: '#4a7a5a', fontFamily: 'Share Tech Mono', fontSize: '0.75rem', padding: '24px', borderTop: '1px solid rgba(0,255,157,0.05)', animation: 'fadeIn 1s ease 0.5s both' }}>
            "The quieter you become, the more you can hear." — Kali Linux
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
      `}</style>
    </div>
  );
};

export default SecretPage;
