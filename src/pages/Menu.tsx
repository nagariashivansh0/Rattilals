import { menuSections } from '../data/siteContent';

export default function Menu() {
  return (
    <div className="menu-page">
      <section className="section menu-hero">
        <div className="container">
          <span className="eyebrow">Our Menu</span>
          <h1>Traditional snacks, sweets & drinks</h1>
          <p>
            A curated list of RattiLal&apos;s offerings — from crisp khasta and samosas to
            desi ghee jalebi, rasmalai, and special lassi.
          </p>
        </div>
      </section>

      {menuSections.map((section) => (
        <section key={section.id} className="section menu-section" id={section.id}>
          <div className="container">
            <div className="section-heading section-heading-left">
              <h2>{section.title}</h2>
            </div>

            <div className="menu-list">
              {section.items.map((item) => (
                <article key={item.name} className="menu-row">
                  <div className="menu-row-header">
                    <h3>{item.name}</h3>
                    <div className="menu-row-tags">
                      <span className={`type-pill type-${item.type}`}>{item.type}</span>
                      {item.signature ? <span className="signature-pill">Signature</span> : null}
                    </div>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
