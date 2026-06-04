import React from 'react';

const AboutSection = () => (
  <section id="about">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">// 01</div>
        <div className="section-title">ABOUT.exe</div>
        <div className="line" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
        {/* Identity Card */}
        <div>
          <div style={{
            width: '100%', aspectRatio: '1', background: 'rgba(0,255,157,0.05)',
            border: '1px solid rgba(0,255,157,0.2)', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ fontSize: '6rem', filter: 'drop-shadow(0 0 20px #00ff9d)' }}>👨‍💻</div>
            <div style={{ fontFamily: 'Share Tech Mono', color: '#00ff9d', fontSize: '0.8rem', letterSpacing: '3px' }}>IDENTITY CONFIRMED</div>
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'rgba(0,255,157,0.05)', top: `${i * 14}%` }} />
            ))}
          </div>
          <div style={{ marginTop: '16px', padding: '16px', fontFamily: 'Share Tech Mono', fontSize: '0.75rem', color: '#4a7a5a', lineHeight: 2.2, background: 'rgba(0,255,157,0.03)', border: '1px solid rgba(0,255,157,0.1)', borderRadius: '2px' }}>
            <div><span style={{color:'#00ff9d'}}>NAME:     </span>Abdulrahman Ashraf</div>
            <div><span style={{color:'#00ff9d'}}>LEVEL:    </span>CS Student — Year 2</div>
            <div><span style={{color:'#00ff9d'}}>UNI:      </span>KSIU</div>
            <div><span style={{color:'#00ff9d'}}>SPEC:     </span>Cybersecurity</div>
            <div><span style={{color:'#00ff9d'}}>STATUS:   </span><span style={{color:'#00ff9d'}}>● SEEKING INTERNSHIP</span></div>
            <div><span style={{color:'#00ff9d'}}>OS:       </span>Kali Linux / WSL</div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h2 style={{ fontFamily: 'Orbitron', fontSize: '1.8rem', color: '#00ff9d', marginBottom: '24px' }}>Who am I?</h2>
          <p style={{ color: 'rgba(200,230,200,0.8)', lineHeight: 2, marginBottom: '20px', fontSize: '1rem' }}>
            I'm a <span style={{color:'#00ff9d'}}>Level 2 Cybersecurity & CS student</span> at King Salman International University.
            My approach merges agile software engineering with a security-first mindset — I build secure full-stack
            web applications and diagnose system vulnerabilities before they can be exploited.
          </p>
          <p style={{ color: 'rgba(200,230,200,0.6)', lineHeight: 2, marginBottom: '32px' }}>
            I thrive configuring <span style={{color:'#00d4ff'}}>Kali Linux</span> environments for penetration testing,
            automating CI/CD pipelines with <span style={{color:'#00d4ff'}}>Docker & Jenkins</span>, and building optimized
            backend systems with <span style={{color:'#00d4ff'}}>Django & Java</span>.
            I'm actively seeking an internship where I can break things professionally and build them back securely.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              ['Penetration Testing', '#ff3860'],
              ['Full-Stack Django', '#00ff9d'],
              ['Kali Linux / WSL', '#00d4ff'],
              ['Docker & Jenkins', '#ffd700'],
              ['x86 Assembly', '#ff6b35'],
              ['CTF & Vuln Research', '#a855f7'],
            ].map(([skill, color], i) => (
              <div key={i} style={{ padding: '10px 16px', border: `1px solid ${color}30`, borderRadius: '2px', fontFamily: 'Share Tech Mono', fontSize: '0.78rem', color: color, background: `${color}08`, letterSpacing: '1px', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = `${color}18`}
                onMouseLeave={e => e.currentTarget.style.background = `${color}08`}>
                <span style={{marginRight:'8px'}}>▸</span>{skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
