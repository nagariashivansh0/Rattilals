import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brandInfo, contact } from '../data/siteContent';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-name">{brandInfo.name}</span>
          <span className="brand-city">Lucknow</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>
            Menu
          </NavLink>
          <a className="btn btn-primary btn-small" href={`tel:${contact.phones[0]}`}>
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
