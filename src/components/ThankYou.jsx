import { useEffect } from "react";
import "../styles/ThankYou.css";

export default function ThankYou({ topic = "enquiry" }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ty-page">
      <div className="ty-card">
        <div className="ty-halo">
          <div className="ty-check">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
        </div>

        <h1>Thank You — We’ll Be in Touch Soon</h1>
        <p>
          We’ve received your {topic} details. Our specialists are now
          analysing your profile to help you move forward with confidence.
        </p>

        <div className="ty-call">
          <small className="ty-call-top">NEED INSTANT HELP? CALL US NOW</small>
          <a className="ty-call-row" href="tel:+919160449000">
            <span className="ty-phone">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#f94c00" aria-hidden="true">
                <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
              </svg>
            </span>
            <span className="ty-call-text">
              <strong>+91 91604 49000</strong>
              <small>AVAILABLE MON - SAT (10 AM - 7 PM)</small>
            </span>
          </a>
        </div>

        <div className="ty-or">HAVE QUERIES?</div>
        <div className="ty-btns">
          <a href="/" className="ty-home">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back to Home
          </a>
          <a
            href="https://wa.me/919160449000"
            target="_blank"
            rel="noreferrer"
            className="ty-wa"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}