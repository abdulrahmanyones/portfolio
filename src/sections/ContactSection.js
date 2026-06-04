import React, { useState } from 'react';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 07</div>
          <div className="section-title">CONTACT.sh</div>
          <div className="line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: '1.8rem', color: '#00ff9d', marginBottom: '16px' }}>
              Establish Connection
            </h2>
            <p style={{ color: 'rgba(200,230,200,0.7)', lineHeight: 1.8, marginBottom: '32px' }}>
              CS Student at Faculty of Engineering — Software Engineer & Cybersecurity Enthusiast.
              Open to internships, collaborations, and security projects.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '🐙', label: 'GITHUB', value: 'github.com/abdulrahmanyones', color: '#00ff9d', href: 'https://github.com/abdulrahmanyones' },
                { icon: '💼', label: 'LINKEDIN', value: 'Abdulrahmman Ashraf', color: '#0077b5', href: 'https://www.linkedin.com/in/abdullrahmman-ashraf-99863333b' },
                { icon: '🎓', label: 'UNIVERSITY', value: 'Faculty of Engineering — CS', color: '#ffd700', href: '#' },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid rgba(0,255,157,0.1)', borderRadius: '2px', background: 'rgba(0,255,157,0.03)', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c.color + '40'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,255,157,0.1)'}>
                  <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', letterSpacing: '2px', color: '#4a7a5a', marginBottom: '4px' }}>{c.label}</div>
                    <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.85rem', color: c.color }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <div style={{ fontFamily: 'Orbitron', color: '#00ff9d', fontSize: '1rem', marginBottom: '8px' }}>TRANSMISSION SENT</div>
                <div style={{ fontFamily: 'Share Tech Mono', color: '#4a7a5a', fontSize: '0.8rem' }}>Will respond within 24 hours.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { key: 'name', label: 'IDENTIFIER (Name)', type: 'text' },
                  { key: 'email', label: 'RETURN ADDRESS (Email)', type: 'email' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#4a7a5a', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                    <input type={field.type} value={form[field.key]}
                      onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                      style={{ width: '100%', background: 'rgba(0,255,157,0.04)', border: '1px solid rgba(0,255,157,0.2)', color: '#c8e6c9', fontFamily: 'Share Tech Mono', fontSize: '0.85rem', padding: '12px 16px', outline: 'none', borderRadius: '2px', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#00ff9d'}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,255,157,0.2)'} />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#4a7a5a', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>MESSAGE PAYLOAD</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={5}
                    style={{ width: '100%', background: 'rgba(0,255,157,0.04)', border: '1px solid rgba(0,255,157,0.2)', color: '#c8e6c9', fontFamily: 'Share Tech Mono', fontSize: '0.85rem', padding: '12px 16px', outline: 'none', resize: 'vertical', borderRadius: '2px', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#00ff9d'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,255,157,0.2)'} />
                </div>
                <button onClick={handleSubmit} disabled={sending}
                  style={{ background: sending ? 'rgba(0,255,157,0.2)' : 'linear-gradient(135deg, #00ff9d, #00cc7a)', border: 'none', color: sending ? '#00ff9d' : '#020c14', fontFamily: 'Orbitron', fontSize: '0.7rem', letterSpacing: '3px', padding: '14px', cursor: sending ? 'wait' : 'pointer', borderRadius: '2px', fontWeight: 700, transition: 'all 0.3s' }}>
                  {sending ? '> TRANSMITTING...' : '> SEND TRANSMISSION'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
