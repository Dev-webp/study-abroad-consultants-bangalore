import { useEffect, useRef, useState } from "react";
import "../styles/StudyFAQ.css";

const faqs = [
  {
    q: "Which are the best study abroad consultants in Bangalore?",
    a: "When choosing a study abroad consultant, consider their university application assistance, knowledge of international admission procedures, student visa guidance, and transparency. VJC Overseas helps students explore overseas education options based on their academic profiles and preferred destinations.",
  },
  {
    q: "Which countries can I choose for studying abroad from Bangalore?",
    a: "Students from Bangalore can explore international education opportunities in the UK, Germany, USA, Canada, Australia, Ireland, New Zealand, France, and other destinations, depending on their preferred courses and eligibility.",
  },
  {
    q: "How can I apply to universities abroad from Bangalore?",
    a: "The process generally involves selecting a country and course, checking academic eligibility, shortlisting universities, preparing application documents, submitting applications, receiving an admission decision, and completing the applicable student visa process.",
  },
  {
    q: "What are the basic requirements to study abroad?",
    a: "Common requirements include academic transcripts, educational certificates, a valid passport, English language proficiency evidence where required, a Statement of Purpose, recommendation letters, and financial documents. Requirements vary by country, university, and course.",
  },
  {
    q: "Can I study in Germany without IELTS?",
    a: "Some German universities and programmes may accept alternative proof of English proficiency or have different language requirements. The accepted qualifications depend on the specific university and course. Students should verify the admission criteria before applying.",
  },
  {
    q: "Is IELTS mandatory to study in the UK?",
    a: "IELTS is not mandatory for every UK university or programme. Some institutions may accept alternative English language qualifications or other forms of evidence, subject to their admission and applicable visa requirements.",
  },
  {
    q: "Can I get scholarships to study abroad?",
    a: "Many international universities offer scholarships based on academic performance, financial circumstances, research interests, or other eligibility conditions. Scholarship availability and award amounts vary by institution and programme.",
  },
  {
    q: "Can I study abroad after completing my degree in Bangalore?",
    a: "Students who have completed their undergraduate degrees in Bangalore can explore postgraduate programmes overseas. Admission depends on their academic qualifications, course prerequisites, language requirements, and the selected university's criteria.",
  },
  {
    q: "How much does it cost to study abroad from Bangalore?",
    a: "The overall cost depends on the destination, university, course duration, tuition fees, accommodation, living expenses, insurance, and other related costs. Students should prepare a country-specific budget before selecting a university.",
  },
  {
    q: "Do study abroad consultants in Bangalore help with student visas?",
    a: "Study abroad consultants may provide guidance on student visa documentation, application procedures, financial evidence, and interview preparation. VJC Overseas assists students in understanding the relevant visa process for their selected destination.",
  },
  {
    q: "Can I apply to universities abroad without work experience?",
    a: "Many undergraduate and postgraduate programmes accept students without professional work experience. However, certain specialised postgraduate and management programmes may require relevant work experience.",
  },
  {
    q: "When should I start my study abroad application process?",
    a: "It is advisable to begin researching universities and admission requirements several months before the intended intake. This allows time for university applications, document preparation, language tests where required, financial planning, and visa procedures.",
  },
];

/* Google ki FAQ rich results kosam (SEO) */
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function StudyFAQ() {
  const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    sectionObserver.observe(root);

    const itemObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-in", e.isIntersecting)
        ),
      { threshold: 0.1 }
    );
    root
      .querySelectorAll(".sfaq-item")
      .forEach((el) => itemObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="faq"
      className={`sfaq ${visible ? "is-visible" : ""}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="sfaq-inner">
        <div className="sfaq-head">
         
          <h2 className="sfaq-title">
            Frequently Asked Questions – Study Abroad Consultants in{" "}
            <span>Bangalore</span>
          </h2>
        </div>

        <div className="sfaq-grid">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <article
                key={f.q}
                className={`sfaq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="sfaq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="sfaq-no">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sfaq-qtext">{f.q}</span>
                  <span className="sfaq-icon" aria-hidden="true" />
                </button>

                <div className="sfaq-a" id={`faq-a-${i}`} role="region">
                  <div className="sfaq-a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}