import '../App.css';

const features = [
  {
    id: 1,
    icon: '🎯',
    className: 'feature-card-1',
    iconClass: 'feature-icon-1',
    title: 'Smart Dev Matching',
    desc: 'Our algorithm matches you with developers whose tech stack, goals, and work style align with yours — not just random profiles.',
  },
  {
    id: 2,
    icon: '🛠️',
    className: 'feature-card-2',
    iconClass: 'feature-icon-2',
    title: 'Skill-Based Profiles',
    desc: 'Showcase your GitHub, tech skills, experience, and projects. Let your code speak louder than words.',
  },
  {
    id: 3,
    icon: '🚀',
    className: 'feature-card-3',
    iconClass: 'feature-icon-3',
    title: 'Collab Requests',
    desc: 'Send collaboration requests, chat, and kick off side projects with fellow developers you matched with.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">
            Built for{' '}
            <span className="gradient-text">Developers</span>
          </h2>
          <p className="section-sub">
            Everything you need to find your next coding partner, co-founder, or collaborator.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.id} className={`feature-card ${f.className}`}>
              <div className={`feature-icon ${f.iconClass}`}>
                {f.icon}
              </div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
