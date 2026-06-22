import type { MenuItem } from '../data/siteContent';

interface Props {
  items: MenuItem[];
}

export default function SignatureSection({ items }: Props) {
  return (
    <section className="section section-alt" id="signature">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Must Try</span>
          <h2>Signature Breakfast</h2>
          <p>The flavours Lucknow knows us for.</p>
        </div>

        <div className="card-grid">
          {items.map((item) => (
            <article key={item.name} className="menu-card">
              <div className="menu-card-top">
                <span className={`type-pill type-${item.type}`}>{item.type}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
