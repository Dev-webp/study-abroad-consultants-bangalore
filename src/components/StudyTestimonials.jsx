import { useEffect, useRef, useState } from "react";
import "../styles/StudyTestimonials.css";

/* Numbers ikkada marchukovachu */
const STORIES = "6,000+";
const YEARS = "17+";

/* NOTE: ivi sample reviews. Live ki veltappudu nee real students
   (permission tho) reviews tho replace chey. */
const reviews = [
  {
    quote:
      "VJC Overseas helped me understand which UK universities matched my profile. From course shortlisting to SOP and visa documentation, every step was explained clearly.",
    name: "Ananya R.",
    role: "Postgraduate Student, UK",
  },
  {
    quote:
      "I was confused about studying in Germany and the language requirements. The team explained the options, documents, and financial requirements in a simple way.",
    name: "Karthik S.",
    role: "Engineering Student, Germany",
  },
  {
    quote:
      "Professional, transparent, and reliable. The counsellors guided me through my USA application documents and F-1 visa preparation step by step.",
    name: "Meghana P.",
    role: "Computer Science Student, USA",
  },
  {
    quote:
      "My family needed honest guidance on costs and scholarships for Canada. The team compared the options clearly and never pushed us into a decision.",
    name: "Rahul N.",
    role: "Business Student, Canada",
  },
  {
    quote:
      "From profile evaluation to application documents, the support was well organised. I now understand each stage of the Australian student visa process.",
    name: "Divya M.",
    role: "Healthcare Student, Australia",
  },
  {
    quote:
      "The counselling session cleared my doubts about Ireland, intakes, and eligibility. Their step-by-step guidance made the whole process stress-free.",
    name: "Sanjay K.",
    role: "Data Analytics Student, Ireland",
  },
];

function Stars() {
  return (
    <div className="stest-stars" aria-label="5 out of 5 stars" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#fbbf24"
            d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function StudyTestimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
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
      .querySelectorAll(".stest-card")
      .forEach((el) => cardObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="success-stories"
      className={`stest ${visible ? "is-visible" : ""}`}
    >
      <div className="stest-inner">
        <div className="stest-head">
          <h2 className="stest-title">
            <span>{STORIES}</span> Success Stories
          </h2>
          <p>
            Trusted Study Abroad Consultants in Bangalore for{" "}
            <strong>{YEARS} Years</strong>
          </p>
        </div>

        <div className="stest-grid">
          {reviews.map((r) => (
            <article className="stest-card" key={r.name}>
              <p className="stest-quote">“{r.quote}”</p>
              <div className="stest-line" />
              <Stars />
              <h3 className="stest-name">{r.name}</h3>
              <span className="stest-role">{r.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}