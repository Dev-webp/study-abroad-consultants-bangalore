import "../styles/AdditionalDestinations.css";

const DESTINATIONS = [
  { code: "NZ", name: "New Zealand" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "NL", name: "Netherlands" },
  { code: "MT", name: "Malta" },
];

export default function AdditionalDestinations({ ctaHref = "#eligibility" }) {
  return (
    <section
      className="ad"
      id="additional-destinations"
      aria-labelledby="ad-title"
    >
      <div className="ad-top">
        <div className="ad-intro">
          <p className="ad-eyebrow">Study Abroad from Bangalore</p>
          <h2 id="ad-title" className="ad-title">
            Additional Study Abroad{" "}
            <span className="ad-accent">Destinations</span>
          </h2>
          <p className="ad-text">
            Apart from the UK, Germany, USA, Canada, Australia, and Ireland,
            students can explore international education opportunities in other
            destinations based on their academic interests and eligibility.
          </p>
        </div>

        <ul className="ad-grid">
          {DESTINATIONS.map((d) => (
                       <li key={d.code} className="ad-card">
              <span className="ad-name">{d.name}</span>
            </li>
          ))}
                    <li className="ad-card ad-card--more">
            <span className="ad-name">+Other international study destinations</span>
          </li>
        </ul>
      </div>

      <div className="ad-cta">
        <p className="ad-cta-text">
          Our team can help you compare different destinations, academic
          programmes, and estimated education expenses.
        </p>
        <a className="ad-btn" href={ctaHref}>
          Book Free Counselling
        </a>
      </div>
    </section>
  );
}