import type { Location } from '../data/siteContent';

interface Props {
  locations: Location[];
  email: string;
}

export default function LocationsSection({ locations, email }: Props) {
  return (
    <section className="section section-alt" id="locations">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Visit Us</span>
          <h2>Locations & Timings</h2>
          <p>Two convenient outlets across Lucknow.</p>
        </div>

        <div className="location-grid">
          {locations.map((location) => (
            <article key={location.id} className="location-card">
              <h3>{location.label}</h3>
              <p className="location-address">{location.address}</p>
              <p className="location-timing">
                <strong>Hours:</strong> {location.timing}
              </p>
              <div className="location-actions">
                {location.phone ? (
                  <a href={`tel:${location.phone}`}>Call outlet</a>
                ) : null}
                <a href={`mailto:${email}`}>Email us</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
