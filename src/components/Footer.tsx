import { Link } from 'react-router-dom';
import { brandInfo, contact } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{brandInfo.name}</p>
          <p className="footer-copy">
            Serving Lucknow with tradition, taste, and trust since {brandInfo.established}.
          </p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </div>
        </div>

        <div>
          <p className="footer-label">Contact</p>
          <div className="footer-links">
            {contact.displayPhones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brandInfo.name}, Lucknow. All rights reserved.</p>
      </div>
    </footer>
  );
}
