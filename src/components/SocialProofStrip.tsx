interface Props {
  snippets: string[];
}

export default function SocialProofStrip({ snippets }: Props) {
  return (
    <section className="section social-proof">
      <div className="container">
        <div className="proof-grid">
          {snippets.map((snippet) => (
            <blockquote key={snippet}>
              <p>“{snippet}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
