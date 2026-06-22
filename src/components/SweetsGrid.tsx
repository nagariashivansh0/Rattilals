import { Link } from 'react-router-dom';
import type { MenuItem } from '../data/siteContent';

interface Props {
  items: MenuItem[];
}

export default function SweetsGrid({ items }: Props) {
  return (
    <section className="section" id="sweets">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">From Our Kitchen</span>
          <h2>Sweets & Snacks</h2>
          <p>Traditional favourites beyond the breakfast counter.</p>
        </div>

        <div className="card-grid card-grid-compact">
          {items.map((item) => (
            <article key={item.name} className="menu-card menu-card-compact">
              <span className={`type-pill type-${item.type}`}>{item.type}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <Link className="text-link" to="/menu">
            See full menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
