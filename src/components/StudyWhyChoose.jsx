import { useEffect, useRef, useState } from "react";
import "../styles/StudyWhyChoose.css";
import whyImg1 from "../assets/why-1.jpg";
import whyImg2 from "../assets/why-2.jpg";

const images = {
  primary: whyImg1,
  secondary: whyImg2,
};

const points = [
  {
    no: "01",
    title: "Individual Academic Profile Assessment",
    desc: "Understand possible study destinations based on your academic qualifications and future goals.",
  },
  {
    no: "02",
    title: "Course and University Guidance",
    desc: "Explore suitable academic programmes and institutions.",
  },
  {
    no: "03",
    title: "Application Documentation Support",
    desc: "Get guidance on organising academic records, SOPs, recommendation letters, and other required documents.",
  },
  {
    no: "04",
    title: "Scholarship Information",
    desc: "Understand available scholarship options and relevant eligibility conditions.",
  },
  {
    no: "05",
    title: "Student Visa Guidance",
    desc: "Learn about visa requirements and the documentation needed for your selected country.",
  },
  {
    no: "06",
    title: "Application Process Support",
    desc: "Receive guidance throughout the university admission and student visa preparation stages.",
  },
];

function NavyArt() {
  return (
    <svg
      className="swhy-art"
      viewBox="0 0 220 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="220" height="260" fill="#0b1430" />
      <circle cx="150" cy="78" r="46" fill="#f47a20" />
      <polygon points="70,128 124,150 70,172 16,150" fill="#ffffff" />
      <path
        d="M36 160 v24 c0 10 68 10 68 0 v-24 l-34 16 z"
        fill="#dfe4f7"
        transform="translate(0,2)"
      />
      <polygon points="70,128 124,150 70,172 16,150" fill="#ffffff" />
    </svg>
  );
}

function OrangeArt() {
  return (
    <svg
      className="swhy-art"
      viewBox="0 0 190 190"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="190" height="190" fill="#f47a20" />
      <circle cx="95" cy="92" r="46" fill="#ffffff" opacity="0.28" />
      <path d="M72 96 L122 74 L108 118 L96 104 Z" fill="#ffffff" />
      <path d="M96 104 L122 74" stroke="#f47a20" strokeWidth="2" fill="none" />
      <path
        d="M44 128 Q92 92 128 82"
        stroke="#ffffff"
        strokeWidth="4"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M132 86 Q156 100 168 132"
        stroke="#ffffff"
        strokeWidth="4"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function StudyWhyChoose() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );
    sectionObserver.observe(root);

    const cardObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-in", e.isIntersecting)
        ),
      { threshold: 0.1 }
    );
    root
      .querySelectorAll(".swhy-item")
      .forEach((card) => cardObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);
  return (
    <section
      ref={ref}
      id="why-choose"
      className={`swhy ${visible ? "is-visible" : ""}`}
    >
      <div className="swhy-inner">
        <div className="swhy-top">
          <div className="swhy-copy">
            <span className="swhy-eyebrow">Why Choose Us</span>
            <h2 className="swhy-title">
              Why Choose VJC Overseas for Study Abroad Consultancy in{" "}
              <span>Bangalore?</span>
            </h2>
            <p>
              Selecting an overseas education consultant is an important part of
              planning your international education journey. Students need
              reliable information about universities, admission requirements,
              documentation, and visa procedures.
            </p>
            <p>
              VJC Overseas focuses on helping students understand their options
              and prepare for each stage of the overseas education process.
            </p>
            <a href="#eligibility" className="swhy-btn">
              Book Free Counselling
            </a>
          </div>

          <div className="swhy-visual" aria-hidden="true">
            <div className="swhy-card swhy-card--navy">
              {images.primary ? (
                <img src={images.primary} alt="" />
              ) : (
                <NavyArt />
              )}
            </div>
            <div className="swhy-card swhy-card--orange">
              {images.secondary ? (
                <img src={images.secondary} alt="" />
              ) : (
                <OrangeArt />
              )}
            </div>
          </div>
        </div>

        <h3 className="swhy-sub">What Students Can Expect from Our Guidance</h3>

                        <div className="swhy-grid">
          {points.map((p) => (
            <article className="swhy-item" key={p.no}>
              <span className="swhy-no">{p.no}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}