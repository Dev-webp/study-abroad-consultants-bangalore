import mapImg from "../assets/bangalore-map.png";
import badges from "../assets/badges.png";
import "../styles/Footer.css";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=VJC+Overseas+Raheja+Arcade+Koramangala+Bangalore+560095";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "Services", link: "#services" },
  { name: "Destinations", link: "#destinations" },
  { name: "About Us", link: "#about" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

const services = [
  { name: "PR Visa", link: "#pr-visa" },
  { name: "Student Visa", link: "#student-visa" },
  { name: "Jobseeker Visa", link: "#jobseeker-visa" },
  { name: "Visit / Dependent Visa", link: "#visit-visa" },
  { name: "Investor Visa", link: "#investor-visa" },
  { name: "Resume Marketing", link: "#resume-marketing" },
  { name: "Coaching", link: "#coaching" },
  { name: "Air Ticketing", link: "#air-ticketing" },
];

const socials = [
  { label: "f", link: "#", title: "Facebook" },
  { label: "X", link: "#", title: "X" },
  { label: "◎", link: "#", title: "Instagram" },
  { label: "in", link: "#", title: "LinkedIn" },
  { label: "▶", link: "#", title: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="f-col">
          <h4>About VJC Overseas</h4>
          <p className="f-about">
            VJC Overseas is a trusted immigration &amp; visa consultancy in Bangalore,
            helping you study, work and settle abroad with confidence.
          </p>
          <div className="f-social">
            {socials.map((s) => (
              <a key={s.title} href={s.link} title={s.title} aria-label={s.title}>
                {s.label}
              </a>
            ))}
          </div>
          <img src={badges} alt="British Council and ISO certified" className="f-badges" />
        </div>

        <div className="f-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.link}>{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="f-col">
          <h4>Our Services</h4>
          <ul>
            {services.map((l) => (
              <li key={l.name}>
                <a href={l.link}>{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="f-col">
          <h4>Visit Our Bangalore Office</h4>

          <div className="f-contact">
            <div className="f-item full">
              <span className="f-icon">📍</span>
              <span>
                <b>VJC Overseas – Bangalore</b>
                16 &amp; 17, Ground Floor, Raheja Arcade, 5th Block, Koramangala,
                Bangalore, 560095
              </span>
            </div>
            <div className="f-item">
              <span className="f-icon">📞</span>
              <span>
                <b>Call Us</b>
                <a href="tel:+919160449000">+91 91604 49000</a>
              </span>
            </div>
            <div className="f-item">
              <span className="f-icon">✉</span>
              <span>
                <b>Email</b>
                <a href="mailto:info@vjcoverseas.com">info@vjcoverseas.com</a>
              </span>
            </div>
          </div>

          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="f-map">
            <img src={mapImg} alt="VJC Overseas Bangalore location map" />
            <span className="f-dir">Get Directions ↗</span>
          </a>
        </div>
      </div>

      <div className="f-bottom">
        <span>
          © {new Date().getFullYear()} VJC Overseas – <b>Bangalore</b>. All rights reserved.
        </span>
        <span>
          <a href="#privacy">Privacy Policy</a>
          <i>|</i>
          <a href="#terms">Terms &amp; Conditions</a>
        </span>
      </div>
    </footer>
  );
}