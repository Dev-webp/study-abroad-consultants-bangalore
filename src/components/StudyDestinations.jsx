import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/StudyDestinations.css";

/* Images: public/images lo pettandi (file lekapothe dark fallback chupistundi) */
const COUNTRIES = [
  {
    key: "uk",
    label: "UK",
    heading: "Study in the UK from Bangalore",
    intro:
      "The United Kingdom attracts Indian students with its internationally recognised universities, diverse academic programmes, and postgraduate study opportunities. Students from Bangalore can explore undergraduate and postgraduate courses in business management, computer science, engineering, finance, healthcare, and data analytics.",
    why: [
      "Access to internationally recognised universities.",
      "Diverse undergraduate and postgraduate programmes.",
      "Opportunities to study specialised subjects.",
      "Multicultural academic environments.",
      "University scholarships for eligible international students.",
      "Industry-oriented courses in several academic fields.",
    ],
    admission: [
      "University and course shortlisting.",
      "Academic eligibility assessment.",
      "Application documentation.",
      "SOP preparation guidance.",
      "Scholarship information.",
      "UK student visa documentation and application guidance.",
    ],
    image: "/images/uk.jpg",
  },
  {
    key: "germany",
    label: "Germany",
    heading: "Study in Germany from Bangalore",
    intro:
      "Germany is an attractive destination for students interested in engineering, technology, research, management, and other specialised academic disciplines. Its universities offer programmes in English and German, depending on the institution and course. Students should review the specific admission requirements, language criteria, and financial arrangements for their selected programme.",
    why: [
      "Strong academic focus on engineering and technology.",
      "Research-oriented programmes.",
      "Public and private university options.",
      "English-taught and German-taught courses.",
      "Industry-connected academic programmes.",
      "Scholarship and funding opportunities for eligible students.",
    ],
    admission: [
      "Identifying suitable universities and courses.",
      "Understanding academic qualification requirements.",
      "Reviewing language proficiency criteria.",
      "Guidance on university application procedures.",
      "Information about tuition fees and financial requirements.",
      "Assistance with student visa documentation.",
    ],
    image: "/images/germany.jpg",
  },
  {
    key: "usa",
    label: "USA",
    heading: "Study in the USA from Bangalore",
    intro:
      "The United States offers students access to a broad selection of universities, specialised degree programmes, research opportunities, and diverse academic environments. Students can explore undergraduate, postgraduate, and research programmes in information technology, business administration, engineering, healthcare, artificial intelligence, and science.",
    why: [
      "Wide range of academic programmes.",
      "Universities with specialised research facilities.",
      "Flexible academic options at many institutions.",
      "Interdisciplinary learning opportunities.",
      "International academic exposure.",
      "Scholarship and financial aid options at eligible institutions.",
    ],
    admission: [
      "University and course selection.",
      "Academic profile evaluation.",
      "Application preparation guidance.",
      "SOP and recommendation letter guidance.",
      "Understanding standardised test requirements where applicable.",
      "F-1 student visa documentation guidance.",
      "Student visa interview preparation guidance.",
    ],
    image: "/images/usa.jpg",
  },
  {
    key: "canada",
    label: "Canada",
    heading: "Study in Canada from Bangalore",
    intro:
      "Canada is a popular destination among international students looking for quality education and a multicultural learning environment. Students can explore diploma, undergraduate, postgraduate, and specialised programmes at eligible Canadian institutions.",
    why: [
      "Different academic programmes and qualifications.",
      "Multicultural student communities.",
      "Career-focused education options.",
      "Research and practical learning opportunities.",
      "Scholarships and financial assistance for eligible applicants.",
    ],
    admission: [
      "Course selection and institution shortlisting.",
      "Academic eligibility review.",
      "Application preparation guidance.",
      "Financial documentation guidance.",
      "Study permit application procedure guidance.",
    ],
    image: "/images/canada.jpg",
  },
  {
    key: "australia",
    label: "Australia",
    heading: "Study in Australia from Bangalore",
    intro:
      "Australia offers international students a variety of academic programmes across business, engineering, information technology, healthcare, hospitality, and other professional fields. Students can explore universities and educational institutions based on their academic interests and career objectives.",
    why: [
      "Internationally recognised qualifications.",
      "Practical and industry-focused programmes.",
      "Diverse course specialisations.",
      "Multicultural campus environments.",
      "Research and academic development opportunities.",
    ],
    admission: [
      "University selection.",
      "Academic eligibility assessment.",
      "Application documentation guidance.",
      "Scholarship information.",
      "Australian student visa assistance.",
    ],
    image: "/images/australia.jpg",
  },
  {
    key: "ireland",
    label: "Ireland",
    heading: "Study in Ireland from Bangalore",
    intro:
      "Ireland is an appealing destination for students interested in technology, business, finance, pharmaceutical sciences, data analytics, and research-based programmes. Its universities and higher education institutions offer undergraduate and postgraduate courses for international applicants.",
    why: [
      "Programmes across technology and business disciplines.",
      "International academic exposure.",
      "Research-focused courses.",
      "English-speaking academic environment.",
      "Scholarship opportunities at participating institutions.",
    ],
    admission: [
      "Exploring suitable Irish universities.",
      "Understanding admission criteria.",
      "Preparing application documents.",
      "Reviewing applicable student visa requirements.",
    ],
    image: "/images/ireland.jpg",
  },
];

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ArrowIcon = () => (
  <svg width="18" height="18" {...svgProps}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const CloseIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const CapIcon = () => (
  <svg width="22" height="22" {...svgProps}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
  </svg>
);
const FileCheckIcon = () => (
  <svg width="22" height="22" {...svgProps}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);
const TickIcon = () => (
  <svg width="12" height="12" {...svgProps} strokeWidth={3.2}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

function Heading({ text }) {
  const i = text.lastIndexOf("Bangalore");
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="sd-accent">Bangalore</span>
    </>
  );
}

export default function StudyDestinations() {
  const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1); // 1 = next, -1 = back
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);
  const busy = useRef(false);
  const swapTimer = useRef(null);

  // section screen lo ki vachinappudu animation play avutundi, velli malli vachinappudu replay
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(swapTimer.current), []);

    const goTo = useCallback(
    (i, direction) => {
      if (busy.current || i === active) return;
      busy.current = true;
      setOpen(false);
      setDir(direction ?? (i > active ? 1 : -1));
      setPrev(active);
      setActive(i);
      swapTimer.current = setTimeout(() => {
        setPrev(null);
        busy.current = false;
      }, 950);
    },
    [active]
  );

  // auto slide: one by one (Know More open lo unnappudu pause)
  useEffect(() => {
    if (!visible || open) return;
    const t = setTimeout(
            () => goTo((active + 1) % COUNTRIES.length, 1),
      6500
    );
    return () => clearTimeout(t);
  }, [visible, open, active, goTo]);

  return (
    <div
      ref={rootRef}
            className={`sd ${visible ? "is-visible" : ""}`}
      id="study-destinations"
      style={{ "--dir": dir }}
    >
      {/* country buttons */}
      <div className="sd-tabs" role="tablist" aria-label="Study destinations">
        {COUNTRIES.map((c, i) => (
          <button
            key={c.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`sd-tab ${i === active ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="sd-stage">
        {COUNTRIES.map((c, i) => {
                   const isActive = i === active;
          const isPrev = i === prev;
          const cls = [
            "sd-slide",
            isActive && "is-active",
            isActive && prev !== null && "anim-in",
            isPrev && "is-prev anim-out",
            isActive && open && "is-open",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article key={c.key} className={cls} aria-hidden={!isActive}>
              <div className="sd-banner">
                <div className="sd-art">
                  <span className="sd-art-code" aria-hidden="true">
                    {c.label}
                  </span>
                  <img
                    src={c.image}
                    alt={`Study in ${c.label}`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>

                <div className="sd-dots">
                  {COUNTRIES.map((d, j) => (
                    <button
                      key={d.key}
                      type="button"
                      className={j === active ? "is-on" : ""}
                      onClick={() => goTo(j)}
                      aria-label={`Show ${d.label}`}
                    />
                  ))}
                </div>

                <div className="sd-text">
                  <h2 className="sd-title">
                    <Heading text={c.heading} />
                  </h2>
                  <p className="sd-intro">{c.intro}</p>
                  <button
                    type="button"
                    className="sd-more-btn"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={isActive && open}
                  >
                    {isActive && open ? "Close" : "Know More"}
                    {isActive && open ? <CloseIcon /> : <ArrowIcon />}
                  </button>
                </div>
              </div>

              {/* Know More click chesthe ee panel open avutundi */}
              <div className="sd-more">
                <div className="sd-more-inner">
                  <div className="sd-panel">
                    <button
                      type="button"
                      className="sd-x"
                      onClick={() => setOpen(false)}
                      aria-label="Close details"
                    >
                      <CloseIcon size={16} />
                    </button>
                    <div className="sd-cols">
                      <div className="sd-col">
                        <h3 className="sd-col-title">
                          <CapIcon />
                          Why Choose This Study Destination?
                        </h3>
                        <ul className="sd-list">
                          {c.why.map((t) => (
                            <li key={t}>
                              <span className="sd-tick">
                                <TickIcon />
                              </span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sd-col">
                        <h3 className="sd-col-title">
                          <FileCheckIcon />
                          Admission and Student Visa Guidance
                        </h3>
                        <ul className="sd-list">
                          {c.admission.map((t, n) => (
                            <li key={t}>
                              <span className="sd-num">{n + 1}</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}