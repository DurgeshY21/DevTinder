import '../App.css';

const steps = [
  {
    num: '01',
    numClass: 'hiw-step-num-1',
    title: 'Create Your Profile',
    desc: 'Sign up and build your developer profile — add your skills, GitHub, experience, and what you are looking to build.',
  },
  {
    num: '02',
    numClass: 'hiw-step-num-2',
    title: 'Browse & Swipe',
    desc: 'Browse curated developer profiles. Swipe right to connect, left to pass. It is that simple.',
  },
  {
    num: '03',
    numClass: 'hiw-step-num-3',
    title: 'Match & Chat',
    desc: 'When both devs swipe right, it is a match! Start chatting, share ideas, and plan your next project.',
  },
  {
    num: '04',
    numClass: 'hiw-step-num-4',
    title: 'Build Together',
    desc: 'Kick off your project, collaborate on GitHub, and ship something amazing with your new dev partner.',
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <h2 className="section-title">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="section-sub">
            From profile to project in 4 simple steps.
          </p>
        </div>

        <div className="hiw-steps">
          {steps.map((s) => (
            <div key={s.num} className="hiw-step">
              <div className={`hiw-step-num ${s.numClass}`}>{s.num}</div>
              <div className="hiw-step-title">{s.title}</div>
              <p className="hiw-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
