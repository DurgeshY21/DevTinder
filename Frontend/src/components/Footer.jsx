import '../App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div className="navbar-logo-icon" style={{
                width: 32, height: 32, background: 'var(--gradient)',
                borderRadius: 8, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 15,
              }}>💻</div>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-h)' }}>
                Dev<span style={{ color: 'var(--primary)' }}>Tinder</span>
              </span>
            </div>
            <p>Where developers meet, match, and build the future — one swipe at a time.</p>
          </div>

          {/* Link columns */}
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DevTinder. All rights reserved.</span>
          <div className="footer-socials">
            {['🐦', '🐙', '💼', '📸'].map((icon, i) => (
              <button key={i} className="footer-social-btn" title="Social">{icon}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
