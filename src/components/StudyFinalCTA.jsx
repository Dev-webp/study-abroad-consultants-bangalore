import { useEffect, useRef, useState } from "react";
import "../styles/StudyFinalCTA.css";
import ctaBg from "../assets/cta-bg.jpg";

const bgImage = ctaBg;

export default function StudyFinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="final-cta"
      className={`sfcta ${visible ? "is-visible" : ""}`}
    >
      <div className="sfcta-card">
        <div
          className="sfcta-bg"
          style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        />
        <div className="sfcta-overlay" />

        <div className="sfcta-content">
          <h2 className="sfcta-title">
            Take the First Step Towards Studying Abroad from{" "}
            <span>Bangalore</span>
          </h2>

          <p>
            An international education journey starts with choosing a course and
            university that support your long-term ambitions.
          </p>
          <p>
            Whether you are interested in studying in the UK, Germany, USA,
            Canada, Australia, or Ireland, VJC Overseas can help you understand
            the available academic opportunities and application requirements.
          </p>
          <p>
            Discuss your education plans with our team and explore suitable
            overseas study options.
          </p>

          <div className="sfcta-actions">
                       <a href="#eligibility" className="sfcta-btn sfcta-btn--grad">
              Apply Now <span className="sfcta-arrow">→</span>
            </a>
            <a href="tel:+919160449000" className="sfcta-btn sfcta-btn--ghost">
              Call +91 91604 49000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}