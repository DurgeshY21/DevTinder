import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
        <div className="navbar-logo-icon">💻</div>
        <span>Dev<span style={{ color: 'var(--primary)' }}>Tinder</span></span>
      </a>

      {/* Nav Links */}
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>

      {/* Actions */}
      <div className="navbar-actions">
        <button className="btn-outline" id="navbar-login-btn">Log in</button>
        <button className="btn-primary" id="navbar-signup-btn">Sign up free</button>
      </div>
    </nav>
  );
}
