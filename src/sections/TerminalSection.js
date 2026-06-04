import React, { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  help: () => ({
    type: 'list',
    content: [
      { text: '━━━ Available Commands ━━━', color: '#00ff9d' },
      { text: 'help         — Show this help menu', color: '#c8e6c9' },
      { text: 'whoami       — Display user info', color: '#c8e6c9' },
      { text: 'projects     — List all projects', color: '#c8e6c9' },
      { text: 'skills       — Show skill tree', color: '#c8e6c9' },
      { text: 'contact      — Get contact info', color: '#c8e6c9' },
      { text: 'resume       — Download resume', color: '#c8e6c9' },
      { text: 'clear        — Clear terminal', color: '#c8e6c9' },
      { text: '...          — Try other commands 👀', color: '#4a7a5a' },
    ]
  }),
  whoami: () => ({
    type: 'list',
    content: [
      { text: '╔══════════════════════════════╗', color: '#00ff9d' },
      { text: '  USER: Abdelrahman Ashraf', color: '#c8e6c9' },
      { text: '  ROLE: CS Student & Dev', color: '#c8e6c9' },
      { text: '  LOC:  Egypt 🇪🇬', color: '#c8e6c9' },
      { text: '  STATUS: ● Available for Internship', color: '#00ff9d' },
      { text: '╚══════════════════════════════╝', color: '#00ff9d' },
    ]
  }),
  projects: () => ({
    type: 'list',
    content: [
      { text: '[HIGH]     PRJ-001  Web Shield — Vuln Scanner', color: '#ff3860' },
      { text: '[CRITICAL] PRJ-002  SecureChat — E2E Encrypted Messenger', color: '#ff6b35' },
      { text: '[MEDIUM]   PRJ-003  NetMapper — Network Topology Dashboard', color: '#ffd700' },
      { text: '[HIGH]     PRJ-004  AuthGuard — MFA Library', color: '#ff3860' },
      { text: '[LOW]      PRJ-005  CTF Toolkit — Personal Arsenal', color: '#00ff9d' },
      { text: '[MEDIUM]   PRJ-006  PhishDetect — ML Browser Extension', color: '#ffd700' },
    ]
  }),
  skills: () => ({
    type: 'list',
    content: [
      { text: '┌─ LANGUAGES ──────────────────', color: '#00ff9d' },
      { text: '│  Java [████████▌ ] 85%', color: '#c8e6c9' },
      { text: '│  JavaScript [█████████ ] 90%', color: '#c8e6c9' },
      { text: '│  C++ [███████▌  ] 75%', color: '#c8e6c9' },
      { text: '├─ FRAMEWORKS ─────────────────', color: '#00d4ff' },
      { text: '│  React [████████▊ ] 88%', color: '#c8e6c9' },
      { text: '│  Node.js [████████  ] 80%', color: '#c8e6c9' },
      { text: '└─ CYBERSEC ───────────────────', color: '#ff3860' },
      { text: '   OWASP Top 10 [████████▎ ] 82%', color: '#c8e6c9' },
      { text: '   Kali Linux [███████▊  ] 78%', color: '#c8e6c9' },
    ]
  }),
  contact: () => ({
    type: 'list',
    content: [
      { text: '📧 EMAIL:   abdelrahman@example.com', color: '#00d4ff' },
      { text: '🐙 GITHUB:  github.com/abdelrahman-ashraf', color: '#00d4ff' },
      { text: '💼 LINKEDIN: linkedin.com/in/abdelrahman-ashraf', color: '#00d4ff' },
      { text: '🐦 TWITTER: @abdelrahman_sec', color: '#00d4ff' },
    ]
  }),
  resume: () => ({
    type: 'single',
    text: '📄 Initiating resume download... [Click the button in the secret page or type "sudo access"]',
    color: '#ffd700'
  }),
  hack: () => ({
    type: 'single',
    text: '⚠️  Nice try. This system is protected by 7 layers of sarcasm.',
    color: '#ff3860'
  }),
  ls: () => ({
    type: 'list',
    content: [
      { text: 'drwxr-xr-x  projects/', color: '#00d4ff' },
      { text: 'drwxr-xr-x  skills/', color: '#00d4ff' },
      { text: '-rw-r--r--  resume.pdf', color: '#c8e6c9' },
      { text: '-rw-r--r--  about.txt', color: '#c8e6c9' },
      { text: '-rw-------  secrets.enc  ← encrypted', color: '#ff3860' },
    ]
  }),
  pwd: () => ({ type: 'single', text: '/home/abdelrahman/portfolio', color: '#c8e6c9' }),
  date: () => ({ type: 'single', text: new Date().toString(), color: '#c8e6c9' }),
  uname: () => ({ type: 'single', text: 'CyberOS 1.0.0-LTS x86_64 — Portfolio Edition', color: '#c8e6c9' }),
  matrix: () => ({ type: 'single', text: 'The Matrix has you... follow the white rabbit 🐇', color: '#00ff9d' }),
  easter: () => ({ type: 'single', text: '🥚 You found an egg! But the real secret needs root access...', color: '#ffd700' }),
  'sudo access': (unlock) => {
    if (unlock) unlock();
    return { type: 'single', text: '🔓 ROOT ACCESS GRANTED. Loading secret page...', color: '#00ff9d' };
  },
};

const TerminalSection = ({ onSecretUnlock }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Cybersecurity Command Center — Portfolio Terminal v1.0', color: '#00ff9d' },
    { type: 'system', text: 'Type "help" to see available commands.', color: '#4a7a5a' },
    { type: 'system', text: '─'.repeat(50), color: 'rgba(0,255,157,0.1)' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, { type: 'cmd', text: `root@ashraf:~$ ${cmd}`, color: '#c8e6c9' }]);
    setCmdHistory(prev => [cmd, ...prev]);
    setHistIdx(-1);

    if (trimmed === 'clear') {
      setHistory([{ type: 'system', text: 'Terminal cleared. Type "help" for commands.', color: '#4a7a5a' }]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const result = trimmed === 'sudo access' ? handler(onSecretUnlock) : handler();
      if (result.type === 'single') {
        setHistory(prev => [...prev, { type: 'output', text: result.text, color: result.color }]);
      } else if (result.type === 'list') {
        setHistory(prev => [...prev, ...result.content.map(c => ({ type: 'output', text: c.text, color: c.color }))]);
      }
    } else if (trimmed === '') {
      // ignore
    } else {
      setHistory(prev => [...prev,
        { type: 'error', text: `bash: ${cmd}: command not found`, color: '#ff3860' },
        { type: 'hint', text: 'Hint: type "help" for available commands', color: '#4a7a5a' },
      ]);
    }
  };

  const onKey = (e) => {
    if (e.key === 'Enter') { run(input); setInput(''); }
    else if (e.key === 'ArrowUp') {
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] || '');
    } else if (e.key === 'ArrowDown') {
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : cmdHistory[idx]);
    }
  };

  return (
    <section id="terminal">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 06</div>
          <div className="section-title">INTERACTIVE_TERMINAL</div>
          <div className="line" />
        </div>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.8rem', color: '#4a7a5a', marginBottom: '20px' }}>
          💡 Try commands: <span style={{color:'#00ff9d'}}>help, projects, skills, whoami, ls</span> — and maybe something else...
        </div>

        <div className="glass-panel" style={{ overflow: 'hidden', position: 'relative' }}
          onClick={() => inputRef.current?.focus()}>
          {/* Terminal title bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderBottom: '1px solid rgba(0,255,157,0.1)', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{width:10,height:10,borderRadius:'50%',background:'#ff3860'}} />
            <div style={{width:10,height:10,borderRadius:'50%',background:'#ffd700'}} />
            <div style={{width:10,height:10,borderRadius:'50%',background:'#00ff9d'}} />
            <span style={{ marginLeft: '12px', fontSize: '0.75rem', color: '#4a7a5a' }}>portfolio-terminal — root@ashraf</span>
          </div>

          {/* Output */}
          <div style={{ height: '400px', overflow: 'auto', padding: '20px', fontFamily: 'Share Tech Mono', fontSize: '0.85rem', lineHeight: 1.8 }}>
            {history.map((line, i) => (
              <div key={i} style={{ color: line.color, marginBottom: '2px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {line.text}
              </div>
            ))}
            {/* Input line */}
            <div style={{ display: 'flex', alignItems: 'center', color: '#c8e6c9', marginTop: '8px' }}>
              <span style={{ color: '#00ff9d', marginRight: '8px' }}>root@ashraf:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                style={{
                  background: 'none', border: 'none', outline: 'none',
                  color: '#c8e6c9', fontFamily: 'Share Tech Mono', fontSize: '0.85rem',
                  flex: 1, caretColor: '#00ff9d'
                }}
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <span className="blink" style={{color:'#00ff9d'}}>█</span>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
