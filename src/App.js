import React, { useState, useEffect } from 'react';
import './App.css';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import EducationSection from './sections/EducationSection';
import StatsSection from './sections/StatsSection';
import TerminalSection from './sections/TerminalSection';
import ContactSection from './sections/ContactSection';
import SecretPage from './sections/SecretPage';
import BootScreen from './components/BootScreen';

function App() {
  const [booting, setBooting] = useState(true);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  if (booting) return <BootScreen />;
  if (secretUnlocked) return <SecretPage onBack={() => setSecretUnlocked(false)} />;

  return (
    <div className="App">
      <MatrixBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <TerminalSection onSecretUnlock={() => setSecretUnlocked(true)} />
        <ContactSection />
      </main>
      <footer className="footer">
        <span className="mono">&gt; root@ashraf:~$ </span>
        <span className="blink">█</span>
        <p>© 2026 Abdelrahman Ashraf — All systems operational</p>
      </footer>
    </div>
  );
}

export default App;
