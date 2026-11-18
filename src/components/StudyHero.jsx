import { useEffect, useRef, useState } from "react";
import "../styles/StudyHero.css";

const countries = ["UK", "Germany", "USA", "Canada", "Australia", "Other"];
const qualifications = ["12th / Diploma", "Bachelor's Degree", "Master's Degree", "Other"];
const intakes = ["Spring (Jan - Feb)", "Summer (May)", "Fall (Aug - Sep)", "Not sure yet"];

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

// Scroll reveal: adds class "in" once when the element enters the screen
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  qualification: "",
  intake: "",
  message: "",
};

export default function StudyHero() {
  const leftRef = useReveal();
  const formRef = useReveal();

  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success
  const [drag, setDrag] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const pickFile = (f) => {
    if (!f) return;
    if (!/\.(pdf|doc|docx)$/i.test(f.name)) {
      setError("Please upload a PDF, DOC or DOCX file.");
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("File is too large. Maximum size is 5MB.");
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    pickFile(e.dataTransfer.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Resume upload is required.");
      return;
    }
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append("resume", file);
    data.append("branch", "Bangalore");
    data.append("page", "Study Abroad");

    // TODO: backend connect cheyali (fetch POST). Ippudu console lo chustundi.
    console.log("Study abroad form:", Object.fromEntries(data.entries()));

    setStatus("success");
    setForm(emptyForm);
    setFile(null);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="shero">
      <div className="shero-dots" />
      <div className="shero-cap" aria-hidden="true">🎓</div>

      <div className="shero-wrap">
        {/* LEFT CONTENT */}
        <div className="shero-left reveal-up" ref={leftRef}>
          <div className="shero-pill" style={{ "--i": 0 }}>
            🎓 Since 2009 · 17 Years of Trusted Guidance
          </div>

          <h1 style={{ "--i": 1 }}>
            Study Abroad Consultants in Bangalore –{" "}
            <span>Your Gateway to Global Education</span>
          </h1>

          <div className="shero-text" style={{ "--i": 2 }}>
            <p>
              Planning to pursue higher education overseas? Choosing the right university,
              course, and country can shape your academic and professional future. VJC
              Overseas helps students from Bangalore explore international education
              opportunities through personalised overseas education guidance.
            </p>
            <p>
              Whether you are planning to pursue a Master&apos;s degree in the UK, explore
              technical programmes in Germany, study at a university in the USA, or choose a
              career-focused programme in Canada or Australia, our team can guide you through
              the different stages of your study abroad journey.
            </p>
            <p>
              From understanding admission requirements and selecting universities to
              preparing application documents and navigating student visa procedures, we help
              students make informed decisions about studying overseas.
            </p>
            <p>
              Start exploring international education opportunities with guidance that
              considers your academic background, interests, budget, and future career plans.
            </p>
          </div>

          <div className="shero-btns" style={{ "--i": 3 }}>
            <a href="#eligibility" className="btn-main">Book Your Free Counselling →</a>
            <a
              href="https://vjcoverseas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              All Services
            </a>
          </div>

          <div className="shero-chips" style={{ "--i": 4 }}>
            {["UK", "Germany", "USA", "Canada", "Australia"].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="shero-form reveal-right" id="eligibility" ref={formRef} onSubmit={onSubmit}>
          <div>
            <h2>Free Study Abroad Counselling</h2>
            <p className="form-sub">Get a profile assessment from our Bangalore experts</p>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="name">FULL NAME</label>
              <input id="name" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="john@email.com" required />
            </div>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="phone">WHATSAPP / PHONE</label>
              <input id="phone" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91..." pattern="[0-9+\s-]{10,15}" required />
            </div>
            <div>
              <label htmlFor="country">COUNTRY INTERESTED</label>
              <select id="country" name="country" value={form.country} onChange={onChange} required>
                <option value="">Select</option>
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="qualification">QUALIFICATION</label>
              <select id="qualification" name="qualification" value={form.qualification} onChange={onChange} required>
                <option value="">Select</option>
                {qualifications.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="intake">PREFERRED INTAKE</label>
              <select id="intake" name="intake" value={form.intake} onChange={onChange} required>
                <option value="">Select</option>
                {intakes.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message">MESSAGE (OPTIONAL)</label>
            <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Tell us about your study goals..." rows={3} />
          </div>

          <div>
            <label>UPLOAD RESUME *</label>
            <label
              className={`upload ${drag ? "drag" : ""} ${file ? "has-file" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={onDrop}
            >
              <input type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => pickFile(e.target.files[0])} />
              {file ? (
                <span>✅ {file.name} <small>({(file.size / 1024).toFixed(0)} KB) · click to change</small></span>
              ) : (
                <span>⬆ Click to upload resume (Required)<small>PDF, DOC, or DOCX (Max 5MB)</small></span>
              )}
            </label>
            {error && <p className="form-error">{error}</p>}
          </div>

          <button type="submit" className="form-submit">EVALUATE MY PROFILE</button>
          {status === "success" && (
            <p className="form-success">✅ Thank you! Our Bangalore team will contact you shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}