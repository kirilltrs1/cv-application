import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import './App.css';
import './index.css';

export default function App() {
  const [form, setForm] = useState({
    general: {},
    education: {},
    experience: {}
  });

  const [openSections, setOpenSections] = useState({
    general: true,
    education: false,
    experience: false
  });

  function toggleSection(sectionName) {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  }

  function updateGeneral(newData) {
    setForm(prev => ({ ...prev, general: newData }));
  }

  function updateEducation(newData) {
    setForm(prev => ({ ...prev, education: newData }));
  }

  function updateExperience(newData) {
    setForm(prev => ({ ...prev, experience: newData }));
  }

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleBackToForm() {
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="appContainer">
        <div className="confirmWrapper">
          <div className="sectionCard confirmCard">
            <h1 className="confirmTitle">Your resume has been sent.</h1>
            <p className="confirmSubtitle">Thanks! We will review your application and reach out within 3 business days.</p>
            <div className="confirmActions">
              <button className="btnPrimary" onClick={handleBackToForm}>Back to form</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="appContainer">
      <h1 className="pageTitle">CV Application</h1>

      <div className="formWrapper">

        <div className="sectionCard">
          <div 
            className="sectionHeader"
            onClick={() => toggleSection("general")}
          >
            <h2 className="sectionTitle">General Information</h2>
            <span className="toggleArrow">{openSections.general ? "▲" : "▼"}</span>
          </div>

          {openSections.general && (
            <div className="sectionContent">
              <GeneralInfo 
                form={form.general} 
                onChange={updateGeneral}
              />
            </div>
          )}
        </div>

        <div className="sectionCard">
          <div 
            className="sectionHeader"
            onClick={() => toggleSection("education")}
          >
            <h2 className="sectionTitle">Education</h2>
            <span className="toggleArrow">{openSections.education ? "▲" : "▼"}</span>
          </div>

          {openSections.education && (
            <div className="sectionContent">
              <Education 
                form={form.education} 
                onChange={updateEducation}
              />
            </div>
          )}
        </div>

        <div className="sectionCard">
          <div 
            className="sectionHeader"
            onClick={() => toggleSection("experience")}
          >
            <h2 className="sectionTitle">Experience</h2>
            <span className="toggleArrow">{openSections.experience ? "▲" : "▼"}</span>
          </div>

          {openSections.experience && (
            <div className="sectionContent">
              <Experience 
                form={form.experience} 
                onChange={updateExperience}
              />
            </div>
          )}
        </div>

        <div className="formActions">
          <button className="btnPrimary" onClick={handleSubmit}>Submit Application</button>
        </div>

      </div>
    </div>
  );
}
