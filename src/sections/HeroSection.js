import React, { useState, useEffect } from 'react';

const terminalLines = [
  { text: 'whoami', type: 'cmd', delay: 500 },
  { text: 'Abdulrahman Ashraf', type: 'output', delay: 1500 },
  { text: 'cat skills.txt', type: 'cmd', delay: 2500 },
  { text: 'Java  C++  Python  Django  JavaScript  Assembly', type: 'output', delay: 3500 },
  { text: 'cat status.txt', type: 'cmd', delay: 4500 },
  { text: '✓ Available for Internship', type: 'success', delay: 5500 },
  { text: 'cat university.txt', type: 'cmd', delay: 6500 },
  { text: 'KSIU — CS Cybersecurity Specialization | Level 2', type: 'output', delay: 7500 },
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    terminalLines.forEach((line) => {
      setTimeout(() => {
        if (line.type === 'cmd') {
          let chars = '';
          line.text.split('').forEach((ch, j) => {
            setTimeout(() => {
              chars += ch;
              setTyped(chars);
            }, j * 55);
          });
          setTimeout(() => {
            setVisibleLines(prev => [...prev, line]);
            setTyped('');
          }, line.text.length * 55 + 200);
        } else {
          setVisibleLines(prev => [...prev, line]);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

          <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div style={{ fontFamily: 'Share Tech Mono', color: '#4a7a5a', fontSize: '0.85rem', marginBottom: '16px', letterSpacing: '3px' }}>
              <span style={{color:'#00ff9d'}}>[ SYSTEM ONLINE ]</span> — PORTFOLIO v3.0
            </div>
            <h1 style={{
              fontFamily: 'Orbitron', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900, lineHeight: 1.1, marginBottom: '16px',
              background: 'linear-gradient(135deg, #00ff9d, #00d4ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              ABDULRAHMAN<br />ASHRAF
            </h1>
            <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.95rem', color: '#00d4ff', marginBottom: '32px', letterSpacing: '2px' }}>
              <span style={{color:'#00ff9d'}}>&gt; </span>Cybersecurity & Software Engineer
            </div>
            <p style={{ color: 'rgba(200,230,200,0.7)', lineHeight: 1.9, marginBottom: '40px', fontSize: '1rem' }}>
              Level 2 CS student at <span style={{color:'#00ff9d'}}>King Salman International University</span> — Cybersecurity Specialization.
              I build secure full-stack web applications and diagnose vulnerabilities before they get exploited.
              Security-first mindset. Kali Linux enthusiast. Currently seeking an impactful internship.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://github.com/abdulrahmanyones" target="_blank" rel="noreferrer"
                style={{ background: 'linear-gradient(135deg, #00ff9d, #00cc7a)', border: 'none', color: '#020c14', fontFamily: 'Orbitron', fontSize: '0.7rem', letterSpacing: '2px', padding: '14px 28px', cursor: 'pointer', borderRadius: '2px', fontWeight: 700, transition: 'all 0.3s', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 0 25px rgba(0,255,157,0.5)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='none'}>
                VIEW GITHUB
              </a>
              <button onClick={() => document.getElementById('terminal').scrollIntoView({behavior:'smooth'})}
                style={{ background: 'transparent', border: '1px solid rgba(0,255,157,0.4)', color: '#00ff9d', fontFamily: 'Orbitron', fontSize: '0.7rem', letterSpacing: '2px', padding: '14px 28px', cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(0,255,157,0.1)'; e.currentTarget.style.borderColor='#00ff9d'; }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(0,255,157,0.4)'; }}>
                OPEN TERMINAL
              </button>
            </div>
          </div>

          {/* Terminal */}
          <div className="glass-panel" style={{ padding: '24px', animation: 'fadeInUp 1s ease 0.3s both', position: 'relative' }}>
            <div className="corner-tl" /><div className="corner-br" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(0,255,157,0.1)' }}>
              <div style={{width:10,height:10,borderRadius:'50%',background:'#ff3860'}} />
              <div style={{width:10,height:10,borderRadius:'50%',background:'#ffd700'}} />
              <div style={{width:10,height:10,borderRadius:'50%',background:'#00ff9d'}} />
              <span style={{ fontFamily:'Share Tech Mono', fontSize:'0.75rem', color:'#4a7a5a', marginLeft:'8px' }}>
                terminal — ashraf@kali:~
              </span>
            </div>
            <div style={{ minHeight: '280px' }}>
              {visibleLines.map((line, i) => (
                <div key={i} style={{ fontFamily: 'Share Tech Mono', fontSize: '0.85rem', lineHeight: 1.6,
                  marginBottom: line.type === 'cmd' ? '2px' : '12px',
                  marginTop: line.type === 'cmd' && i > 0 ? '8px' : '0' }}>
                  {line.type === 'cmd' && (
                    <div>
                      <span style={{color:'#00ff9d'}}>root@ashraf:~$ </span>
                      <span style={{color:'#c8e6c9'}}>{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <div style={{ color:'#00d4ff', paddingLeft:'14px', borderLeft:'2px solid rgba(0,212,255,0.5)', marginLeft:'6px' }}>
                      {line.text}
                    </div>
                  )}
                  {line.type === 'success' && (
                    <div style={{ color:'#00ff9d', paddingLeft:'14px', borderLeft:'2px solid rgba(0,255,157,0.5)', marginLeft:'6px' }}>
                      {line.text}
                    </div>
                  )}
                </div>
              ))}
              {typed && (
                <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.85rem', color:'#c8e6c9', marginTop:'8px' }}>
                  <span style={{color:'#00ff9d'}}>root@ashraf:~$ </span>{typed}<span className="blink">█</span>
                </div>
              )}
              {!typed && visibleLines.length === terminalLines.length && (
                <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.85rem', color:'#c8e6c9', marginTop:'8px' }}>
                  <span style={{color:'#00ff9d'}}>root@ashraf:~$ </span><span className="blink">█</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
};

export default HeroSection;
