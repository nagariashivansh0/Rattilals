interface Props {
  paragraphs: string[];
}

export default function AboutSection({ paragraphs }: Props) {
  return (
    <section className="section section-story" id="about">
      <div className="container story-grid">
        <div className="section-heading">
          <span className="eyebrow">Our Story</span>
          <h2>A Lucknow institution since 1937</h2>
        </div>

        <div className="story-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <aside className="story-aside">
          <div className="stat-card">
            <strong>1937</strong>
            <span>Established in Lucknow</span>
          </div>
          <div className="stat-card">
            <strong>Heritage</strong>
            <span>Old values, modern care</span>
          </div>
          <div className="stat-card">
            <strong>Quality</strong>
            <span>Hygiene, taste, affordability</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
