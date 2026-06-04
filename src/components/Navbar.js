import React, { useState, useEffect } from 'react';

const navItems = ['HOME','ABOUT','SKILLS','PROJECTS','EDUCATION','CERTS','TERMINAL','CONTACT'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    const tick = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(tick); };
  }, []);

  const scroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(2,12,20,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,157,0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px'
      }}>
        <div style={{ fontFamily: 'Orbitron', color: '#00ff9d', fontSize: '1rem', letterSpacing: '2px', cursor: 'pointer', textShadow: '0 0 10px rgba(0,255,157,0.5)' }}
          onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <span style={{color:'#00d4ff'}}>&gt;_ ABDULRAHMAN</span>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          {navItems.map(item => (
            <button key={item} onClick={() => scroll(item === 'HOME' ? 'hero' : item === 'CERTS' ? 'certificates' : item)}
              style={{
                background: 'none', border: 'none', color: 'rgba(0,255,157,0.6)',
                fontFamily: 'Share Tech Mono', fontSize: '0.7rem', letterSpacing: '2px',
                padding: '6px 12px', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color='#00ff9d'; e.target.style.textShadow='0 0 10px rgba(0,255,157,0.5)'; }}
              onMouseLeave={e => { e.target.style.color='rgba(0,255,157,0.6)'; e.target.style.textShadow='none'; }}
            >{item}</button>
          ))}
        </div>

        <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.75rem', color: '#4a7a5a' }}>
          <span style={{color:'#00ff9d'}}>{time}</span>
        </div>
      </nav>
      <div className="scanline" />
    </>
  );
};

export default Navbar;
