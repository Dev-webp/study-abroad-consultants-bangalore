import { useEffect, useRef, useState } from "react";
import "../styles/StudyServices.css";
import counsellingImg from "../assets/counselling.jpg";
import universitiesImg from "../assets/universities.jpg";
import applicationsImg from "../assets/applications.jpg";
import sopImg from "../assets/sop.jpg";
import scholarshipsImg from "../assets/scholarships.jpg";
import visaImg from "../assets/visa.jpg";
import predepartureImg from "../assets/predeparture.jpg";
import StudyDestinations from "./StudyDestinations";
import AdditionalDestinations from "./AdditionalDestinations";
/* Images pettukovadaniki: src/assets lo images petti, ikkada import chesi
   services array lo image: counsellingImg la set cheyyi.
   Example:
   import counsellingImg from "../assets/counselling.jpg";
*/

const icons = {
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  building: (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </>
  ),
  file: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
    </>
  ),
  pencil: (
    <>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </>
  ),
  id: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.5 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 10h5M14 14h5" />
    </>
  ),
  plane: (
    <>
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
};

function Icon({ name, size = 22 }) {
  return (
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
      {icons[name]}
    </svg>
  );
}

const services = [
  {
    icon: "compass",
    short: "Counselling",
    title: "Study Abroad Counselling",
    desc: "Understand different international education systems and identify study destinations that match your academic qualifications, interests, and career plans.",
    image: counsellingImg,
  },
  {
    icon: "building",
    short: "Universities",
    title: "Course and University Selection",
    desc: "Explore universities and academic programmes based on your previous education, preferred specialisation, admission requirements, and budget.",
    image: universitiesImg,
  },
  {
    icon: "file",
    short: "Applications",
    title: "University Application Assistance",
    desc: "Get guidance on university applications, admission requirements, application forms, and supporting academic documents.",
    image: applicationsImg,
  },
  {
    icon: "pencil",
    short: "SOP",
    title: "Statement of Purpose (SOP) Guidance",
    desc: "Understand how to prepare a well-structured Statement of Purpose that communicates your academic background, motivation, course selection, and future objectives.",
    image: sopImg,
  },
  {
    icon: "award",
    short: "Scholarships",
    title: "Scholarship Guidance",
    desc: "Explore available university scholarships, merit-based financial assistance, and other funding opportunities for eligible international students.",
    image: scholarshipsImg,
  },
  {
    icon: "id",
    short: "Visa",
    title: "Student Visa Assistance",
    desc: "Understand country-specific student visa requirements, financial documentation, application procedures, and supporting paperwork.",
    image: visaImg,
  },
  {
    icon: "plane",
    short: "Pre-departure",
    title: "Pre-Departure Guidance",
    desc: "Prepare for your transition to an international study environment with information about travel preparation, accommodation considerations, and essential documentation.",
    image: predepartureImg,
  },
];

export default function StudyServices() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const current = services[active];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

   return (
    <>
    <section
      ref={sectionRef}
      className={`sserv ${visible ? "is-visible" : ""}`}
      id="services"
    >
      
      <div className="sserv-inner">
        <div className="sserv-head">
          <h2 className="sserv-title">
            Study Abroad Services in <span>Bangalore</span>
          </h2>
          <p>
            Choosing an international university involves more than selecting a
            country. Students need to consider course availability, university
            admission criteria, tuition fees, living expenses, scholarships, and
            post-study opportunities.
          </p>
          <p>
            VJC Overseas provides study abroad consultancy services in Bangalore
            to help students understand these important factors before applying
            to international universities.
          </p>
        </div>

        <div className="sserv-steps" role="tablist">
          <div className="sserv-line" />
          {services.map((s, i) => (
            <button
              key={s.short}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`sserv-step ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="sserv-circle">
                <Icon name={s.icon} />
              </span>
              <span className="sserv-label">{s.short}</span>
            </button>
          ))}
        </div>

        <div className="sserv-card" key={active}>
          <div className="sserv-media">
            {current.image ? (
              <img src={current.image} alt={current.title} />
            ) : (
              <div className="sserv-fallback">
                <span className="sserv-blob" />
                <Icon name={current.icon} size={64} />
              </div>
            )}
          </div>

          <div className="sserv-body">
            <span className="sserv-stepno">
              Step {String(active + 1).padStart(2, "0")}
            </span>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
                       <a href="#eligibility" className="sserv-btn">
              Book Free Counselling <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </div>

            <StudyDestinations />
    </section>
    <AdditionalDestinations />
    </>
  );
}