import React, { useState } from 'react';

const projects = [
  {
    severity: 'CRITICAL',
    severityColor: '#ff6b35',
    id: 'PRJ-001',
    name: 'Web Shield — Vulnerability Scanner',
    description: 'Security-centric web interface that serves as an automated vulnerability scanner. Detects application flaws in real-time and visualizes potential attack vectors via an interactive dark-mode telemetry dashboard.',
    status: 'COMPLETED',
    tech: ['Python', 'Django', 'JavaScript', 'Security'],
    year: '2026',
    github: 'https://github.com/abdulrahmanyones/Web-Shield-Threat-Scanner',
  },
  {
    severity: 'HIGH',
    severityColor: '#ff3860',
    id: 'PRJ-002',
    name: 'KSIU Secure Student Portal',
    description: 'Secure student portal for King Salman International University with authentication, data protection features, and secure session management.',
    status: 'COMPLETED',
    tech: ['HTML', 'JavaScript', 'Security', 'Auth'],
    year: '2026',
    github: 'https://github.com/abdulrahmanyones/KSIU-Secure-Student-Portal',
  },
  {
    severity: 'MEDIUM',
    severityColor: '#ffd700',
    id: 'PRJ-003',
    name: 'Gym Management & Attendance DB',
    description: 'Robust database structure tracking multi-tier memberships, trainer rosters, and live attendance metrics. Implemented 11 complex SQL queries optimized for real-time security logging and data integrity.',
    status: 'COMPLETED',
    tech: ['SQL', 'Database Design', 'Query Optimization'],
    year: '2025',
    github: '#',
  },
  {
    severity: 'HIGH',
    severityColor: '#ff3860',
    id: 'PRJ-004',
    name: 'Library Tracking System',
    description: 'Smooth desktop environment utilizing custom JavaFX data binding to streamline concurrent book tracking, borrower registration, and structural asset auditing.',
    status: 'COMPLETED',
    tech: ['Java', 'JavaFX', 'OOP', 'Data Binding'],
    year: '2025',
    github: '#',
  },
  {
    severity: 'LOW',
    severityColor: '#00ff9d',
    id: 'PRJ-005',
    name: 'Menu Calculator — x86 Assembly',
    description: 'Low-level hardware-interactive calculator built with x86 Assembly. Features custom register management, system interrupt manipulation, and a menu-driven interface at the CPU instruction layer.',
    status: 'COMPLETED',
    tech: ['x86 Assembly', 'Emu8086', 'Low-Level', 'CSE132'],
    year: '2025',
    github: '#',
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="glass-panel" style={{ padding: '24px', position: 'relative', transition: 'all 0.3s', borderColor: hovered ? project.severityColor + '40' : 'rgba(0,255,157,0.15)', transform: hovered ? 'translateY(-4px)' : 'none' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', padding: '3px 10px', background: project.severityColor + '20', color: project.severityColor, border: `1px solid ${project.severityColor}40`, borderRadius: '2px', letterSpacing: '2px' }}>[{project.severity}]</span>
            <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#4a7a5a' }}>{project.id}</span>
          </div>
          <h3 style={{ fontFamily: 'Orbitron', fontSize: '0.95rem', color: '#c8e6c9' }}>{project.name}</h3>
        </div>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.65rem', padding: '4px 10px', borderRadius: '2px', background: 'rgba(0,255,157,0.1)', color: '#00ff9d', border: '1px solid rgba(0,255,157,0.3)', whiteSpace: 'nowrap' }}>COMPLETED</div>
      </div>
      <p style={{ color: 'rgba(200,230,200,0.65)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px' }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {project.tech.map((t, i) => (
          <span key={i} style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', padding: '3px 10px', background: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '2px' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(0,255,157,0.07)' }}>
        <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#4a7a5a' }}>YEAR: {project.year}</span>
        {project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noreferrer" style={{ fontFamily: 'Share Tech Mono', fontSize: '0.7rem', color: '#00ff9d', textDecoration: 'none', letterSpacing: '1px' }}
            onMouseEnter={e => e.target.style.textShadow='0 0 10px #00ff9d'} onMouseLeave={e => e.target.style.textShadow='none'}>[GITHUB]</a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">// 03</div>
        <div className="section-title">SECURITY_REPORTS</div>
        <div className="line" />
      </div>
      <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.75rem', color: '#4a7a5a', marginBottom: '32px', padding: '12px 16px', border: '1px solid rgba(255,56,96,0.2)', borderRadius: '2px', background: 'rgba(255,56,96,0.04)' }}>
        <span style={{color:'#ff3860'}}>CLASSIFICATION: </span>PUBLIC &nbsp;|&nbsp;
        <span style={{color:'#ffd700'}}>TOTAL: {projects.length} PROJECTS</span> &nbsp;|&nbsp;
        <a href="https://github.com/abdulrahmanyones" target="_blank" rel="noreferrer" style={{color:'#00d4ff', textDecoration:'none'}}>github.com/abdulrahmanyones</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
