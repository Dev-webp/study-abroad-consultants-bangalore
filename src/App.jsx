import LandingNavbar from "./components/LandingNavbar";
import StudyHero from "./components/StudyHero";
import StudyServices from "./components/StudyServices";
import StudyWhyChoose from "./components/StudyWhyChoose";
import Footer from "./components/Footer";
import StudyFinalCTA from "./components/StudyFinalCTA";
import StudyFAQ from "./components/StudyFAQ";
import StudyTestimonials from "./components/StudyTestimonials";
export default function App() {
  return (
    <>
      <LandingNavbar />
      <StudyHero />
      <StudyServices />
       <StudyWhyChoose />
      <StudyFinalCTA />
      <StudyFAQ />
      <StudyTestimonials />
      <Footer />
    </>
  );
}