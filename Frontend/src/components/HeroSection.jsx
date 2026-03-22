import '../App.css';

// Developer profile card data for the floating hero cards
const devCards = [
  {
    id: 1,
    name: 'Ananya S.',
    role: 'Full-Stack Dev · 3 yrs',
    avatar: '🧑‍💻',
    avatarBg: 'linear-gradient(135deg, #fe3c72, #7c3aed)',
    skills: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Rohan M.',
    role: 'ML Engineer · 5 yrs',
    avatar: '👨‍🔬',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'AWS'],
  },
  {
    id: 3,
    name: 'Priya K.',
    role: 'Frontend Dev · 2 yrs',
    avatar: '👩‍🎨',
    avatarBg: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    skills: ['Vue', 'Figma', 'CSS'],
  },
];

function DevCard({ card }) {
  return (
    <div className="dev-card">
      <div className="dev-card-header">
        <div className="dev-card-avatar" style={{ background: card.avatarBg }}>
          {card.avatar}
        </div>
        <div className="dev-card-info">
          <div className="dev-card-name">{card.name}</div>
          <div className="dev-card-role">{card.role}</div>
        </div>
      </div>

      <div className="dev-card-skills">
        {card.skills.map((s) => (
          <span key={s} className="skill-badge">{s}</span>
        ))}
      </div>

      <div className="dev-card-actions">
        <button className="card-action-btn pass"  title="Pass">✕</button>
        <button className="card-action-btn super"  title="Super Like">⚡</button>
        <button className="card-action-btn match" title="Match">♥</button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      {/* Floating developer cards */}
      <div className="hero-cards">
        {devCards.map((card) => (
          <DevCard key={card.id} card={card} />
        ))}
      </div>

      {/* Main content */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            ✨ 50,000+ Developers Connected
          </div>

          <h1 className="hero-title">
            Find Your{' '}
            <span className="gradient-text">Perfect Dev</span>{' '}
            Match.
          </h1>

          <p className="hero-sub">
            Swipe through developer profiles, connect with like-minded engineers,
            and build your next big thing together. DevTinder is where collaboration starts.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" id="hero-create-account-btn">
              🚀 Create Account
            </button>
            <button className="btn-outline" id="hero-explore-btn">
              Explore Devs
            </button>
          </div>

          <div className="hero-stats">
            {[
              { num: '50K+',  label: 'Developers' },
              { num: '12K+', label: 'Projects Built' },
              { num: '98%',  label: 'Match Rate' },
            ].map((s) => (
              <div key={s.label}>
                <div className="hero-stat-num gradient-text">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
