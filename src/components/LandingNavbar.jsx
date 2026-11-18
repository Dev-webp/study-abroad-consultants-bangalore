import logo from "../assets/logo.png";
import "../styles/LandingNavbar.css";

const PHONE = "tel:+919160449000";
const WHATSAPP =
  "https://wa.me/919160449000?text=Hi%20VJC%20Overseas%2C%20I%20want%20to%20know%20about%20study%20abroad.";

const Icon = ({ children, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MailIcon = () => (
  <Icon>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

const WhatsAppIcon = () => (
  <Icon size={22}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>
);

const CapIcon = () => (
  <Icon size={16}>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Icon>
);

const ArrowIcon = () => (
  <Icon size={16}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Icon>
);

export default function LandingNavbar() {
  return (
    <header className="lnav">
      {/* Top strip */}
      <div className="lnav-top">
        <span>
          <CapIcon /> Study Abroad Consultants in <b>Bangalore</b> · Koramangala
        </span>
        <span className="lnav-open">
          <i className="live-dot" /> Open now · Mon–Sat 10AM–7PM
        </span>
      </div>

      {/* Main bar */}
      <div className="lnav-main">
        <a href="/" className="lnav-logo">
          <img src={logo} alt="VJC Overseas Study Abroad Consultants Bangalore" />
        </a>

        <div className="lnav-contacts">
          <a href="mailto:info@vjcoverseas.com" className="lnav-contact">
            <span className="lnav-ci"><MailIcon /></span>
            <span>
              <small>EMAIL US</small>
              <b>info@vjcoverseas.com</b>
            </span>
          </a>
          <span className="lnav-divider" />
          <a href={PHONE} className="lnav-contact">
            <span className="lnav-ci"><PhoneIcon /></span>
            <span>
              <small>CALL US</small>
              <b>+91 91604 49000</b>
            </span>
          </a>
        </div>

        <div className="lnav-actions">
          <a href={PHONE} className="lnav-call" aria-label="Call us">
            <PhoneIcon />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <a href="#eligibility" className="btn-cta btn-cta--grad">
            <span className="full">Book Free Counselling</span>
            <span className="short">Free Counselling</span>
            <i><ArrowIcon /></i>
          </a>
        </div>
      </div>
    </header>
  );
}