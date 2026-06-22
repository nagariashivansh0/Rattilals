import { Link } from 'react-router-dom';
import { brandInfo, contact } from '../data/siteContent';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">Since {brandInfo.established}</span>
          <h1>{brandInfo.name}</h1>
          <p className="hero-tagline">{brandInfo.tagline}</p>
          <p className="hero-subline">{brandInfo.heroSubline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${contact.phones[0]}`}>
              Call Now
            </a>
            <Link className="btn btn-secondary" to="/menu">
              View Menu
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="hero-card hero-card-main">
            <span className="hero-card-label">Signature Breakfast</span>
            <strong>Khasta + Jalebi</strong>
            <p>Crisp, golden, and made the Lucknow way.</p>
          </div>
          <div className="hero-card hero-card-accent">
            <span className="hero-card-label">Heritage</span>
            <strong>{brandInfo.established}</strong>
            <p>Generations of tradition in every bite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
